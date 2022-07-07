# from django.db import models
#
# # Create your models here.
# from django.db.models.signals import pre_save, post_save
# from django.dispatch import receiver
#
# # from restaurants.models import Restaurant
#
# restaurant_type = (
#     ("Indian Food", "Indian Food"),
#     ("Swiss Food", "Swiss Food"),
#     ("Columbian Food", "Columbian Food"),
#     ("Peruvian Food", "Peruvian Food"),
#     ("Hot Dogs", "Hot Dogs"),
#     ("Italian Food", "Italian Food"),
# )
#
#
# class Category(models.Model):
#     id = models.BigAutoField(primary_key=True)
#     type = models.CharField(
#         max_length=200,
#         unique=True,
#         choices=restaurant_type,
#     )
#     # slug = models.SlugField()
#     # test = models.CharField(max_length=200, blank=True, null=True)
#     #
#     # def __str__(self):
#     #     return self.get_type_display()
#
#
# # try:
# #     for choices in restaurant_type:
# #         category = Category(type=choices[0])
# #         if category not in Category.objects.all():
# #             category.save()
# # except Category.DoesNotExist:
# #     pass
# # @receiver(post_save, sender=Category)
# # def create_categories(sender, instance, *args, **kwargs):
# #     for choices in restaurant_type:
# #         category, created = Category.objects.create(type=choices[0])
# #         if created and category not in Category.objects.all():
# #             category.save()
#
#
#
