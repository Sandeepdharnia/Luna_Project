from rest_framework import serializers
from rest_framework.fields import SerializerMethodField

from reviews.models import Review
from users.serializers import UserSerializer


class ReviewSerializer(serializers.ModelSerializer):
    posted_by = UserSerializer(read_only=True)
    # like_count: SerializerMethodField = serializers.SerializerMethodField()

    # def get_like_count(self, obj):
    #     return obj.liked_by.count()

    class Meta:
        model = Review
        fields = '__all__'


class ReviewCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'