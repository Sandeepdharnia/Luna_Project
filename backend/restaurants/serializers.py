from rest_framework import serializers

from restaurants.models import Restaurant, CATEGORY_CHOICES
from users.serializers import UserSerializer


class RestaurantSerializer(serializers.ModelSerializer):
    # reviews for later
    author = serializers.SerializerMethodField()

    def get_author(self, obj):
        return obj.author.username

    # def get_category(self, instance):
    #     return instance.category.get_type_display()

    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'get_category_display', 'street', 'city', 'zip', 'country', 'website', 'phone_number', 'email', 'price_level',
                  'author']
