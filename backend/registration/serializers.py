from django.contrib.auth import get_user_model
from rest_framework import serializers

from registration.models import Registration, code_generator

User = get_user_model()


class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Registration
        fields = ['email']


class CodeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Registration
        fields = ['code']


class UserCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class UserValidationSerializer(serializers.ModelSerializer):
    username = serializers.CharField(min_length=1)
    password = serializers.CharField(min_length=1)
    location = serializers.CharField(min_length=1)

    class Meta:
        model = User
        fields = ['email', 'username', 'password', 'location']


class PasswordResetSerializer(serializers.ModelSerializer):
    password = serializers.CharField(min_length=1)

    class Meta:
        model = User
        fields = ['email', 'username', 'password']