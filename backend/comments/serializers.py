from rest_framework import serializers
from comments.models import Comment
from users.serializers import UserSerializer


class CommentSerializer(serializers.ModelSerializer):
    posted_by = UserSerializer(read_only=True)
    # like_count = serializers.SerializerMethodField()

    # def get_like_count(self, instance):
    #     return instance.li

    class Meta:
        model = Comment
        fields = '__all__'


class CommentCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'



# class ToggelLikeSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Comment
#         fields = ['liked_by']