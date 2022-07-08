from django.http import JsonResponse
from django.shortcuts import render, get_object_or_404

from rest_framework.generics import GenericAPIView,ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework.response import Response

from project.permissions import IsStaffOrReadOnly
from restaurants.models import Restaurant
from reviews.models import Review
from django.contrib.auth import get_user_model
from rest_framework import filters
from reviews.serializers import ReviewSerializer, ReviewCreateSerializer
from reviews.permission import IsUser, IsNotUser


User = get_user_model()


class ReviewCreateView(ListCreateAPIView):
    queryset = Review.objects.all()
    permission_classes = []
    # filter_backends = [filters.SearchFilter]
    search_fields = ['content']

    def get_serializer_class(self):
        if self.request.method == "POST":
            return ReviewCreateSerializer
        return ReviewSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class RetrieveUpdateDestroyAPIViewReview(RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    lookup_url_kwarg = "review_id"
    permission_classes = [IsStaffOrReadOnly, IsUser]

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset().filter(id=self.kwargs.get("review_id"))
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class GetReviewsFromSpecificUser(GenericAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    lookup_url_kwarg = "user_id"

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset().filter(user=self.kwargs.get("user_id"))
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class GetReviewsForSpecificRestaurant(GenericAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    lookup_url_kwarg = "restaurant_id"

    def get(self, request, *args, **kwargs):
        restaurant = get_object_or_404(Restaurant, pk=self.kwargs.get("restaurant_id"))
        queryset = self.get_queryset().filter(restaurant=restaurant)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

# class GetReviewById(GenericAPIView):
#     queryset = Review.objects.all()
#     serializer_class = ReviewSerializer
#     lookup_url_kwarg = "review_id"
#
#     def get(self, request, *args, **kwargs):
#         queryset = self.get_queryset().filter(reviews=self.kwargs.get("review_id"))
#         serializer = self.get_serializer(queryset, many=True)
#         return Response(serializer.data)

class UpdateSpecificReview(GenericAPIView):
    def get_object(self, pk):
        return Review.objcets.get(pk=pk)

    def patch(self, request, pk, *args, **kwargs):
        review_objects = self.get_object(pk)
        serializer = ReviewSerializer(review_objects, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(code=201, data=serializer.data)
        return JsonResponse(code=400, data="wrong parameters")


class CreateLike(GenericAPIView):
    queryset = Review.objects.all()
    permission_classes = [IsStaffOrReadOnly]
    serializer_class = ReviewSerializer
    lookup_url_kwarg = "review_id"

    def post(self, request, *args, **kwargs):
        user = self.request.user
        review = get_object_or_404(Review, pk=kwargs.get("review_id"))    # getting post id by int in endpoint
        # if Response(status=204):
        #     post.liked_by.remove(user.id)
        #     return Response(status=203)
        if not review.is_liked:
            review.liked_by.add(user.id)  # adding to list of "liked_by" the current user
            review.is_liked = True
            review.save()
            return Response(status=204)
        else:
            review.liked_by.remove(user.id)
            review.is_liked = False
            review.save()
            return Response(status=204)


class DeleteLike(GenericAPIView):
    queryset = Review.objects.all()
    permission_classes = [IsStaffOrReadOnly]
    serializer_class = ReviewSerializer
    lookup_url_kwarg = "review_id"

    def delete(self, request, *args, **kwargs):
        user = self.request.user
        review = get_object_or_404(Review, pk=kwargs.get("review_id"))    # getting post id by int in endpoint
        # if Response(status=204):
        #     review.liked_by.remove(user.id)
        #     return Response(status=203)
        if not review.is_liked:
            review.liked_by.add(user.id)  # adding to list of "liked_by" the current user
            review.is_liked = True
            review.save()
            return Response(status=204)
        else:
            review.liked_by.remove(user.id)
            review.is_liked = False
            review.save()
            return Response(status=204)


class CountLikesFromUser(GenericAPIView):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()
    permission_classes = [IsStaffOrReadOnly]

    def get(self, request, *args, **kwargs):

        current_user = self.request.user
        queryset = self.get_queryset().filter(liked_by=current_user)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class ReviewsCurrentUserCommented(GenericAPIView):
    pass


class ReviewCreateForRestaurantView(ListCreateAPIView):
    queryset = Review.objects.all()
    permission_classes = []
    # filter_backends = [filters.SearchFilter]
    search_fields = ['content']

    def get_serializer_class(self):
        if self.request.method == "POST":
            return ReviewCreateSerializer
        return ReviewSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class CountReviewFromRestaurant(GenericAPIView):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()
    #permission_classes = [IsStaffOrReadOnly]

    def get(self, request, *args, **kwargs):

        current_restaurant = self.request.user
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    #.filter(liked_by=current_restaurant)