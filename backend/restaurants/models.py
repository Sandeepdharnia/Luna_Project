from django.contrib.auth import get_user_model
from django.core.validators import MaxValueValidator, RegexValidator
from django.db import models


# Create your models here.

# opening_hours_choices = (
#     ("1", "00"),
#
# )
from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver


User = get_user_model()

prices_choices = (
    ("1", "$"),
    ("2", "$$"),
    ("3", "$$$"),
)

CATEGORY_CHOICES = (
    ('1', "Kebab"),
    ('2', "Indian Food"),
    ('3', "Swiss Food"),
    ('4', "Columbian Food"),
    ('5', "Peruvian Food"),
    ('6', "Hot Dogs"),
    ('7', "Italian Food"),
    ('8', "Asian Food"),
    ('9', "Ethiopian Food"),
    ('10', "Japanese Food"),
    ('11', "Fusion Food"),
    ('12', "Veggies"),
    ('13', "Only Meat"),
    ('14', "Chinese Food"),
    ('15', "Deutsch Food"),
    ('16', "French Cuisine"),
    ('17', "Brewery"),
    ('18', "Mexican Food"),
    ('19', "Afghanistan Food"),
    ('20', "Moroccan Food"),
    ('21', "Philippian Food"),
)

def user_directory_path(instance, filename):
    return f'user/{instance.id}/{filename}'


class Restaurant(models.Model):
    name = models.CharField(max_length=30)
    # category_id = models.CharField(to=Category,
    #                                on_delete=models.SET_NULL,
    #                                null=True, blank=True)
    category_id = models.CharField(max_length=20, choices=CATEGORY_CHOICES, verbose_name="category")
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
    image = models.ImageField(max_length=255, blank=True, null=True)
    author = models.ForeignKey(to=User, on_delete=models.SET_NULL,
                               blank=True, null=True,
                               related_name="user_restaurants")

    def __str__(self):
        return self.name

    # def save(self, *args, **kwargs):
    #     if self.pk is None:  # create
    #         self.model = Category.objects.create(type="test")
    #     super().save(*args, **kwargs)  # Call the "real" save() method.


# @receiver(post_save, sender=Category)
# def create_categories(sender, instance, *args, **kwargs):
#     category, created = Category.objects.create(type="test")
#     if created:
#         category.save()
