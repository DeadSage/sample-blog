from .models import CustomUser
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    """
    Serializer for users list/detail
    """

    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'is_active']
