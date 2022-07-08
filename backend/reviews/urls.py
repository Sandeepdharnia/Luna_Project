from django.urls import path
from django.urls import path

from reviews.views import ReviewCreateView, RetrieveUpdateDestroyAPIViewReview, GetReviewsFromSpecificUser, \
    UpdateSpecificReview, CreateLike, DeleteLike, CountLikesFromUser, ReviewsCurrentUserCommented, \
    ReviewCreateForRestaurantView, CountReviewFromRestaurant

urlpatterns = [
    # create a review
    path('', ReviewCreateView.as_view()),
    # create a review fro restaurant
    path('new/<int:restaurant_id>/', ReviewCreateForRestaurantView.as_view()),
    #Get the list of the reviews the restaurant.
    path('reviews/<int:restaurant_id>/', CountReviewFromRestaurant.as_view()),

    #Get a specific review by ID and displav all the information.
    path('<int:review_id>/', RetrieveUpdateDestroyAPIViewReview.as_view()),
    #Get the list of the reviews by a single user.
    path('user/<int:user_id>/', GetReviewsFromSpecificUser.as_view()),
    #Update a specific review (only by owner).
    #Delete a specific review (only by owner)
    path('<int:review_id>/', UpdateSpecificReview.as_view()),
    #Like a review.
    path('like/<int:review_id>/', CreateLike.as_view()),
    #DELETE: Remove like from the review.
    path('like/delete/<int:review_id>/', DeleteLike.as_view()),
    #Get the list of the reviews the current user liked.
    path('like/', CountLikesFromUser.as_view()),
    # Like a review
    path('comments/', ReviewsCurrentUserCommented.as_view()),

]
