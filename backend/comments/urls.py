from django.urls import path
from django.urls import path

from comments.views import CreateCommentView, RetrieveUpdateDestroyAPIViewComments, CountComment

urlpatterns = [
    path('', CreateCommentView.as_view()),
    path('<int:comment_id>/', RetrieveUpdateDestroyAPIViewComments.as_view()),
    #get all comments
    path('all_comments/<int:user_id>/', CountComment.as_view()),

]