from django.contrib import admin

# Register your models here.
from categories.models import Category


class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'type']


admin.site.register(Category, CategoryAdmin)