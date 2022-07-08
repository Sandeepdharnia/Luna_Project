from django.db import models

from django.contrib.auth import get_user_model
from restaurants.models import Restaurant

User = get_user_model()


class Review(models.Model):
    content = models.CharField(max_length=200)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name="user_reviews")
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)
    # restaurant = models.ForeignKey(Restaurant, on_delete=models.SET_NULL, null=True, related_name="reviews")
    rate_choices = (
        (1, 1),
        (2, 2),
        (3, 3),
        (4, 4),
        (5, 5)
    )
    rating = models.IntegerField(choices=rate_choices, blank=True, null=True)
    like = models.IntegerField(blank=True, null=True)
    liked_by = models.ManyToManyField(User, blank=True, related_name="liked_reviews", verbose_name='like count')
    is_liked = models.BooleanField(default=False)

    def __str__(self):
        return f"ID{self.id}:{self.user} rating{self.rating} date-created{self.date_created}"