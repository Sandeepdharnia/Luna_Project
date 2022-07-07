from django.db import models

# Create your models here.
from django.contrib.auth import get_user_model
from django.db import models

from reviews.models import Review

User = get_user_model()



class Comment(models.Model):
    content = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    review = models.ForeignKey(to=Review, on_delete=models.SET_NULL, blank=True, null=True)
    likes = models.IntegerField(blank=True, null=True)

    # body = models.TextField()

    # liked_by = models.ManyToManyField(to=User, blank=True, related_name='like_comment')
    # is_liked = models.BooleanField(default=False)


    # created = models.DateTimeField(auto_now_add=True)
    # content = models.CharField(max_length=2000)
    # author = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True)
    # # post = models.ForeignKey(to=User, on_delete=models.SET_NULL, blank=True, null=True)
    def __str__(self):
        return f"ID{self.id}: {self.user} commented by{self.user} created on {self.date_created}"
