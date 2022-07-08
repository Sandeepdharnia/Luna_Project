from rest_framework.permissions import BasePermission
from rest_framework import permissions


class IsUser(BasePermission):
    def has_object_permission(self, request, view, obj):
        if obj.user == request.user:
            return True
        elif request.method == "GET":
            return True
        else:
            return False

class IsOwnerOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.author == request.user


class IsNotUser(BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.author != request.user

class ObjNotLoggedInUser(permissions.BasePermission):
    message = "User cannot do this operation with themselves"

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.author != request.user


