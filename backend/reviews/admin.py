from django.contrib import admin

# Register your models here.


# Register your models here.
from reviews.models import Review
from users.serializers import UserSerializer


class ReviewAdmin(admin.ModelAdmin):
    liked_by = UserSerializer
    list_display = ['id', 'user', 'content', 'date_created', 'date_modified', 'rating', 'like_count', 'is_liked']

    def like_count(self, instance):
        return f'{instance.liked_by.count()}'


admin.site.register(Review, ReviewAdmin)