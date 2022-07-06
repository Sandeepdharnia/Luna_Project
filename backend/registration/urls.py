from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from registration.views import RegisterUserView, ValidateUserView, ResetPasswordView, ValidationPassword

urlpatterns = [

    path('registration/', RegisterUserView.as_view()),
    path('registration/validation/',ValidateUserView.as_view()),
    path('password-reset/', ResetPasswordView.as_view()),
    path('password-reset/validation/', ValidationPassword.as_view()),
    path('token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', jwt_views.TokenVerifyView.as_view(), name='token_refresh'),
]