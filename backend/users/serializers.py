from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    profile_picture = serializers.SerializerMethodField()

    def get_profile_picture(self, obj):
        try:
            domain_name = 'https://luna-team1.propulsion-learn.ch'
            full_path = domain_name + obj.image.url
            return full_path
        except BaseException:
            return None

    class Meta:
        model = User
        fields = ['id', 'email', 'location', 'username', 'is_active', 'first_name', 'last_name', 'date_joined',
                  'description', 'profile_picture', 'location', 'things_i_love']


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['avatar', 'email', 'username', 'first_name', 'last_name',
                  'is_active', 'date_joined', 'following', 'friends']


