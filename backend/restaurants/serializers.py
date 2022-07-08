from rest_framework import serializers

from restaurants.models import Restaurant
from users.serializers import UserSerializer


class RestaurantSerializer(serializers.ModelSerializer):
    # reviews for later
    author = serializers.SerializerMethodField()

    # category = serializers.SerializerMethodField()

    def get_author(self, obj):
        return obj.author.username

    image_url = serializers.SerializerMethodField()

    def get_image_url(self, obj):
        try:
            domain_name = 'https://luna-team1.propulsion-learn.ch'
            full_path = domain_name + obj.image.url
            return full_path
        except Exception:
            return None

    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'street', 'city', 'zip', 'country', 'website', 'phone_number', 'email', 'price_level',
                  'author', 'image_url']
