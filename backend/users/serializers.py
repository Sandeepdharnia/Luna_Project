from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):


    class Meta:
        model = User
        fields = ['id', 'email', 'location', 'username', 'is_active', 'first_name', 'last_name', 'date_joined',
                  'description', 'profile_picture', 'location', 'things_i_love']


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['avatar', 'email', 'username', 'first_name', 'last_name',
                  'is_active', 'date_joined', 'following', 'friends']


