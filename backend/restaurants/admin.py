from django.contrib import admin

# Register your models here.
from restaurants.models import Restaurant


class RestaurantAdmin(admin.ModelAdmin):
    list_display = ['name', 'street', 'country', 'category']


admin.site.register(Restaurant, RestaurantAdmin)