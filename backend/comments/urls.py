from django.urls import path
from django.urls import path

from comments.views import CreateCommentView, RetrieveUpdateDestroyAPIViewComments


urlpatterns = [
    path('', CreateCommentView.as_view()),
    path('<int:post_id>/', RetrieveUpdateDestroyAPIViewComments.as_view()),




    # path('toggle-like/<int:post_id>/', ToggleLikePostView.as_view()),
    # path('likes/', ListLikedPostView.as_view()),
    # path('following/', ListFollowingPostsFromUserView.as_view()),
    # path('user/<int:user_id>/', ListSpecificUserPostView.as_view())
]