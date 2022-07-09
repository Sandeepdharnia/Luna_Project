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
            domain_name = 'https://luna-team1.propulsion-learn.ch/backend'
            full_path = domain_name + obj.image.url
            return full_path
        except BaseException:
            return None

    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'street', 'city', 'zip', 'country', 'website', 'phone_number', 'email', 'price_level',
                  'author', 'image_url']

    # def to_representation(self, instance):
    #     representation = super().to_representation(instance)
    #     representation['author'] = UserSerializer(instance.author, many=False, context=self.context).data
    #     representation['image'] = representation.pop('image_url')
