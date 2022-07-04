from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class User(AbstractUser):
    USERNAME_FIELD = 'email'

    REQUIRED_FIELDS = ['username']

    email = models.EmailField(unique=True)
    location = models.CharField(max_length=200, null=True, blank=True)
    job = models.CharField(max_length=200, null=True, blank=True)
    phone = models.IntegerField(blank=True, null=True)
    things_i_love = models.CharField(max_length=20, blank=True, null=True)
    description = models.CharField(max_length=200, blank=True, null=True)
    profile_picture = models.ImageField(blank=True, null=True)

    def __str__(self):
        return self.username