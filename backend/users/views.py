from django.contrib.auth import get_user_model
from django.shortcuts import render
from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView, GenericAPIView, get_object_or_404
from rest_framework.response import Response
from users.serializers import UserSerializer

from project.permissions import IsStaffOrReadOnly

User = get_user_model()


class CurrentUserProfile(RetrieveUpdateDestroyAPIView):
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        current_user = self.request.user.id
        queryset = User.objects.filter(id=current_user)
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def get_object(self):
        return self.request.user


class ListCreateUser(ListCreateAPIView):
    queryset = User.objects.all()
    permission_classes = [IsStaffOrReadOnly]
    serializer_class = UserSerializer


class GetSpecificUser(GenericAPIView):
    permission_classes = [IsStaffOrReadOnly]
    serializer_class = UserSerializer
    lookup_url_kwarg = 'user_id'

    def get(self, request, *args, **kwargs):
        user_profile = get_object_or_404(User, pk=kwargs.get('user_id'))
        queryset = User.objects.filter(id=user_profile.id)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)



