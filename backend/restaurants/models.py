from django.contrib.auth import get_user_model
from django.core.validators import MaxValueValidator, RegexValidator, BaseValidator
from django.db import models


# Create your models here.

# opening_hours_choices = (
#     ("1", "00"),
#
# )
from django.utils.deconstruct import deconstructible

from categories.models import Category

User = get_user_model()

prices_choices = (
    ("1", "$"),
    ("2", "$$"),
    ("3", "$$$"),
)


class Restaurant(models.Model):
    name = models.CharField(max_length=30)
    category = models.ForeignKey(to=Category, on_delete=models.SET_NULL, null=True, blank=True)
    street = models.TextField(max_length=20)
    city = models.CharField(max_length=20)
    zip = models.PositiveIntegerField(validators=[
        MaxValueValidator(99950,
        'The entered zip code is invalid.')
    ])
    # limiting zip number to 5 digits
    country = models.CharField(max_length=20)
    website = models.URLField(max_length=200, blank=True, null=True)  # getting the website from the restaurant with URL
    phone_regex = RegexValidator(
        regex=r'^\+?1?\d{9,15}$',
        message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.",
        )
    phone_number = models.CharField(validators=[phone_regex], max_length=17, blank=True)  # Validators should be a list
    # phone_regex and phone_number are used to store phone number from client
    email = models.CharField(max_length=30)
    # opening_hours = models.Choices(opening_hours_choices)
    price_level = models.CharField(max_length=20,
                                   choices=prices_choices,
                                   default=1)
    # predefined price_level choices
    image = models.ImageField(blank=True, null=True)
    author = models.ForeignKey(to=User, on_delete=models.SET_NULL,
                               blank=True, null=True,
                               related_name="user_restaurants")


