from django.shortcuts import render

# Create your views here.
from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from rest_framework.generics import GenericAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, \
    get_object_or_404
from django.views.generic import ListView, DetailView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from comments.models import Comment
from comments.permission import IsUser, IsNotUser
from comments.serializers import CommentSerializer, CommentCreateSerializer
from rest_framework import filters

from project.permissions import IsStaffOrReadOnly

User = get_user_model()


class CreateCommentView(ListCreateAPIView):
    queryset = Comment.objects.all()
    permission_classes = []
    filter_backends = [filters.SearchFilter]
    search_fields = ['content']

    def get_serializer_class(self):
        if self.request.method == "POST":
            return CommentCreateSerializer
        return CommentSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class RetrieveUpdateDestroyAPIViewComments(RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    lookup_url_kwarg = "comment_id"
    permission_classes = [IsUser]


class CountComment(GenericAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    lookup_url_kwarg = "user_id"
    permission_classes = [IsStaffOrReadOnly]

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset().filter(user=self.kwargs.get("user_id"))
        # all_comments = self.request.user
        # queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)