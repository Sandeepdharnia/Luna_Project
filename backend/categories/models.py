from django.db import models

# Create your models here.

restaurant_type = (
    ("Indian Food", "Indian Food"),
    ("Swiss Food", "Swiss Food"),
    ("Columbian Food", "Columbian Food"),
    ("Peruvian Food", "Peruvian Food"),
    ("Hot Dogs", "Hot Dogs"),
    ("Italian Food", "Italian Food"),
)


class Category(models.Model):
    type = models.CharField(
        max_length=200,
        unique=True,
        choices=restaurant_type,
    )
    # slug = models.SlugField()

    def __str__(self):
        return self.type
