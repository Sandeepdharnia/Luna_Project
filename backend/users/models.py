from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class User(AbstractUser):
    USERNAME_FIELD = 'email'

    REQUIRED_FIELDS = ['username']

    username = models.CharField(max_length=150, unique=True, blank=True)
    password = models.CharField("password", max_length=128, blank=True)
    email = models.EmailField(unique=True)
    location = models.CharField(max_length=200, null=True, blank=True)
    job = models.CharField(max_length=200, null=True, blank=True)
    phone = models.IntegerField(blank=True, null=True)
    things_i_love = models.CharField(max_length=20, blank=True, null=True)
    description = models.CharField(max_length=200, blank=True, null=True)
    profile_picture = models.ImageField(blank=True, null=True)
    is_active = models.BooleanField(default=False)

    def __str__(self):
        return self.username
