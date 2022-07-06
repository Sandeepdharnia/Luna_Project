from django.urls import path

from users.views import CurrentUserProfile, ListCreateUser, GetSpecificUser

urlpatterns = [
    path('me/', CurrentUserProfile.as_view()),
    path('users/list/', ListCreateUser.as_view()),
    path('users/<int:user_id>/', GetSpecificUser.as_view())
    # pat
]
