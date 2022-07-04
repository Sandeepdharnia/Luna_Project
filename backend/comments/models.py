from django.db import models

# Create your models here.
from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()

class Comment(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    content = models.CharField(max_length=2000)
    author = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True)
    # post = models.ForeignKey(to=User, on_delete=models.SET_NULL, blank=True, null=True)
    def __str__(self):
        return f"ID{self.id}: {self.author} commented by{self.author} created on {self.created}"
