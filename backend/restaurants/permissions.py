from rest_framework.permissions import BasePermission


class IsAuthor(BasePermission):
    def has_object_permission(self, request, view, obj):
        if obj.author == request.user:
            return True
        elif request.method == 'GET':
            return True
        else:
            return False
