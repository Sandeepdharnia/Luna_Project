from django.contrib.auth import get_user_model
from django.core.mail import send_mail

from rest_framework.generics import CreateAPIView, GenericAPIView
from rest_framework.mixins import UpdateModelMixin
from rest_framework.response import Response

from users.serializers import UserCreateSerializer
# from users.serializers import UserCreateSerializer, UserValidationSerializer

User = get_user_model()


class RegisterUserView(CreateAPIView):
    permission_classes = []

    queryset = User.objects.all()
    serializer_class = UserCreateSerializer

    def perform_create(self, serializer):
        serializer.save(is_active=False)


class ValidateUserView(GenericAPIView, UpdateModelMixin):
    queryset = User.objects.all()
    serializer_class = UserCreateSerializer
    permission_classes = []

    def post(self, request, *args, **kwargs):
        user_instance = self.get_queryset().filter(email=request.data["email"]).get()
        validation_code = user_instance.registration_profile.code

        if request.data["code"] == validation_code:
            return self.partial_update(request, *args, **kwargs)
        else:
            return Response(data="Wrong validation code", status=400)

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
