from rest_framework import serializers

from restaurants.models import Restaurant
from users.serializers import UserSerializer


class RestaurantSerializer(serializers.ModelSerializer):
    # reviews for later
    author = serializers.SerializerMethodField()
   # category = serializers.SerializerMethodField()

    def get_author(self, obj):
        return obj.author.username

    # def get_category(self, obj):
    #     return obj.category.get_type_display()

    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'street', 'city', 'zip', 'country', 'website', 'phone_number', 'email', 'price_level',
                  'author', 'image']
