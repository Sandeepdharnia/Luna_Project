from django.urls import path

from restaurants.views import FillView, ListCreateRestaurant, GetRestaurantsFromSpecificUser, RetrieveUpdateDeleteSpecificRestaurant

urlpatterns = [
    path('', ListCreateRestaurant.as_view()),   # list all restaurants
    path('new/', FillView.as_view()),   # create a new restaurant
    path('category/<int:category_id>/', FillView.as_view()),    # get all restaurants from given category (by id)
    path('user/<int:user_id>/', GetRestaurantsFromSpecificUser.as_view()),    # get all restaurants from specific user
    path('<int:restaurant_id>/', RetrieveUpdateDeleteSpecificRestaurant.as_view()),  # get specific restaurant by id, AND UPDATE + DELETE IT if OWNER
]

