from django.urls import path
from django.urls import path

from reviews.views import ReviewCreateView, RetrieveUpdateDestroyAPIViewReview, GetReviewsFromSpecificUser, \
    UpdateSpecificReview, CreateLike, DeleteLike, CountLikesFromUser, ReviewsCurrentUserCommented

urlpatterns = [
    path('', ReviewCreateView.as_view()),
    path('<int:review_id>/', RetrieveUpdateDestroyAPIViewReview.as_view()),
    path('user/<int:user_id>/', GetReviewsFromSpecificUser.as_view()),
    path('<int:review_id>/', UpdateSpecificReview.as_view()),
    path('like/<int:review_id>/', CreateLike.as_view()),
    path('like/delete/<int:review_id>/', DeleteLike.as_view()),
    path('like/', CountLikesFromUser.as_view()),
    path('comments/', ReviewsCurrentUserCommented.as_view()),
]
