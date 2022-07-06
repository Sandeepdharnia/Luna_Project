from django.contrib import admin

# Register your models here.
from comments.models import Comment


class CommentAdmin(admin.ModelAdmin):
    list_display = ['title', 'post_date', 'author']


admin.site.register(Comment)

