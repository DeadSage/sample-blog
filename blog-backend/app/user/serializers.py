from .models import CustomUser
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    """
    Serializer for users view
    """

    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'is_active']
