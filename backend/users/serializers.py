from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):  # creating a serializer for the custom user
    class Meta:
        model = User  # taking the model of users.model as a reference
        fields = ['username']   # what is shown
