from django.shortcuts import render

# Create your views here.
from django.shortcuts import get_object_or_404
from rest_framework.generics import GenericAPIView,ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, get_object_or_404
from django.views.generic import ListView, DetailView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from comments.models import Comment
# from comments.permission import IsUser
from comments.serializers import CommentSerializer, CommentCreateSerializer
# from comments.permissions import IsNotOwner
from rest_framework import filters


class CreateCommentView(ListCreateAPIView):
    queryset = Commnet.object.all(
    permission_classes = []
    filter_backends = [filters.SearchFilter]
    search_fields = ['content']

    def get_serializer_class(self):
        if self.request.method == "POST":
            return CommentCreateSerializer
        return CommentSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class RetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    lookup_url_kwarg = "comment_id"
    permission = classes = [IsUser]