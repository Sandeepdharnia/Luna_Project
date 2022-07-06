from django.contrib.auth import get_user_model
from django.core.exceptions import ObjectDoesNotExist
from django.core.mail import send_mail

from rest_framework.generics import CreateAPIView, GenericAPIView, get_object_or_404
from rest_framework.mixins import UpdateModelMixin
from rest_framework.response import Response

from registration.models import ResetPassword, Registration
from registration.serializers import UserCreateSerializer, UserValidationSerializer, PasswordResetSerializer

# from users.serializers import UserCreateSerializer, UserValidationSerializer
from users.serializers import UserSerializer

User = get_user_model()


class RegisterUserView(CreateAPIView):
    permission_classes = []

    queryset = User.objects.all()
    serializer_class = UserCreateSerializer

    def perform_create(self, serializer):
        serializer.save(is_active=False)


class ValidateUserView(GenericAPIView, UpdateModelMixin):
    queryset = User.objects.all()
    serializer_class = UserValidationSerializer
    permission_classes = []

    def post(self, request, *args, **kwargs):
        # user_instance = self.get_queryset().filter(email=request.data["email"]).get()
        user_queryset = self.get_queryset().filter(email=request.data["email"])
        if user_queryset :
            user_instance = user_queryset.get()
            validation_code = user_instance.registration_profile.code
            if request.data["code"] == validation_code:
                # return self.partial_update(request, *args, **kwargs)
                return self.update(request, *args, **kwargs)
            else:
                return Response(data="Wrong validation code", status=400)
        else:
            return Response(data="An account with this email does not exist.")

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_queryset().filter(email=request.data["email"]).get()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        # serializer = self.get_serializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        if getattr(instance, '_prefetched_objects_cache', None):
            # If 'prefetch_related' has been applied to a queryset, we need to
            # forcibly invalidate the prefetch cache on the instance.
            instance._prefetched_objects_cache = {}

        send_mail(
            'Welcome to Team-1 media platform!',
            f'Felicitations! You can now use your brand new user.',
            'sit.academy.testing@gmail.com',
            [f'{request.data["email"]}'],
            fail_silently=False,
        )

        return Response(serializer.data)

    def perform_update(self, serializer):
        serializer.save(is_active=True)


class ResetPasswordView(GenericAPIView, UpdateModelMixin):
    queryset = ResetPassword.objects.all()
    permission_classes = []

    def post(self, request, *args, **kwargs):
        user_email = request.data['email']
        user = get_object_or_404(User, email=user_email)
        user_instance = ResetPassword(email=user_email)
        try:
            queryset_user = self.get_queryset().filter(email=user_email)
            if not queryset_user:
                user_instance.save()
            instance = queryset_user.get()
            if instance.code:
                queryset_user.update(code=user_instance.code)
            else:
                return Response(status=200)
        except ResetPassword.DoesNotExist:
            return Response(data="An account with this email does not exist.", status=404)

        send_mail(
            'Password Reset',
            f'Hello {user.username} \n Please use this code {user_instance.code} to reset your password',
            'sit.academy.testing@gmail.com',
            [f'{user.email}'],
            fail_silently=False
        )
        return Response(status=200)


# class ValidationPassword(GenericAPIView):
#     serializer_class = UserSerializer
#     permission_classes = []
#
#     def post(self, request, *args, **kwargs):
#         user_email = request.data['email']
#         reset_password = ResetPassword(email=user_email)
#
#         user = User.objects.get(email=user_email)
#         ResetPassword.objects.all()
#
#         try:
#             check_validation = ResetPassword.objects.get(code=reset_password.code, email=user_email, code_used=False)
#             user = User.objects.get(email=user_email)
#             user.set_password(request.data['password'])
#             user.save()
#
#             check_validation.code_used = True
#             check_validation.save()
#
#             return Response(self.get_serializer(user).data)
#
#         except ObjectDoesNotExist:
#             return Response(status=404, data=f"{code} is not valid for this email: {email}")


class ValidationPassword(GenericAPIView, UpdateModelMixin):
    queryset = ResetPassword.objects.all()
    serializer_class = PasswordResetSerializer
    permission_classes = []

    def post(self, request, *args, **kwargs):
        try:
            user_instance = self.get_queryset().filter(email=request.data["email"]).get()
        except ResetPassword.DoesNotExist:
            return Response(data="An account with this email does not exist.", status=404)
        validation_code = user_instance.code

        if request.data["code"] == validation_code:
            # return self.partial_update(request, *args, **kwargs)
            return self.update(request, *args, **kwargs)
        else:
            return Response(data="Wrong validation code", status=400)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = User.objects.filter(email=request.data["email"]).get()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        # serializer = self.get_serializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        if getattr(instance, '_prefetched_objects_cache', None):
            # If 'prefetch_related' has been applied to a queryset, we need to
            # forcibly invalidate the prefetch cache on the instance.
            instance._prefetched_objects_cache = {}

        send_mail(
            'Password Reset Successfully',
            f'Enjoy your time on Team-1 Platform!',
            'sit.academy.testing@gmail.com',
            [f'{request.data["email"]}'],
            fail_silently=False,
        )

        return Response(serializer.data)

    def perform_update(self, serializer):
        serializer.save(is_active=True)