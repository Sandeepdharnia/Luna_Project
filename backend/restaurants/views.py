from django.contrib.auth import get_user_model
from django.shortcuts import render

# Create your views here.
from rest_framework.generics import ListCreateAPIView, GenericAPIView, get_object_or_404, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response

from project.permissions import IsStaffOrReadOnly
from restaurants.models import Restaurant, CATEGORY_CHOICES
from restaurants.permissions import IsAuthor
from restaurants.serializers import RestaurantSerializer


User = get_user_model()


class FillView(ListCreateAPIView):
    # just a class so error won't be thrown in the restaurants.urls
    pass


class ListCreateRestaurant(ListCreateAPIView):    # class to create + list all restaurants
    queryset = Restaurant.objects.all()
    permission_classes = [IsStaffOrReadOnly]
    serializer_class = RestaurantSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class GetRestaurantsFromSpecificUser(GenericAPIView):    # class to get all restaurants from given user
    queryset = Restaurant.objects.all()
    permission_classes = [IsStaffOrReadOnly]
    serializer_class = RestaurantSerializer
    lookup_url_kwarg = "user_id"

    def get(self, request, *args, **kwargs):
        specific_user = get_object_or_404(User, pk=self.kwargs.get("user_id"))
        queryset = self.get_queryset().filter(author=specific_user)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


# class GetSpecificRestaurant(GenericAPIView):    # getting all data from given restaurant
#     queryset = Restaurant.objects.all()
#     permission_classes = [IsStaffOrReadOnly]
#     serializer_class = RestaurantSerializer
#     lookup_url_kwarg = "restaurant_id"
#
#     def get(self, request, *args, **kwargs):
#         specific_restaurant = get_object_or_404(Restaurant, pk=self.kwargs.get("restaurant_id"))
#         queryset = self.get_queryset().filter(id=specific_restaurant.id)
#         serializer = self.get_serializer(queryset, many=True)
#         return Response(serializer.data)


class RetrieveUpdateDeleteSpecificRestaurant(RetrieveUpdateDestroyAPIView):
    queryset = Restaurant.objects.all()
    permission_classes = [IsStaffOrReadOnly, IsAuthor]
    serializer_class = RestaurantSerializer
    lookup_url_kwarg = "restaurant_id"

    def get(self, request, *args, **kwargs):
        specific_restaurant = get_object_or_404(Restaurant, pk=self.kwargs.get("restaurant_id"))
        queryset = self.get_queryset().filter(id=specific_restaurant.id)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class ListRestaurantByGivenCategory(GenericAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    permission_classes = [IsStaffOrReadOnly]
    lookup_url_kwarg = "category_id"

    def get(self, request, *args, **kwargs):
        # category_type = get_object_or_404(Category, pk=self.kwargs.get("category_id"))
        category_id = self.kwargs.get("category_id")
        if category_id > len(CATEGORY_CHOICES):
            return Response(data="Sorry, this category does not exist.")
        queryset = self.get_queryset().filter(category_id=category_id)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


        # if category_id not in Restaurant.category_id:
        #     return Response(status=404)


