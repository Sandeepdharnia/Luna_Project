from django.contrib import admin

# Register your models here.
from restaurants.models import Restaurant


class RestaurantAdmin(admin.ModelAdmin):
    list_display = ['name', 'street', 'country', 'category_id']


admin.site.register(Restaurant, RestaurantAdmin)
