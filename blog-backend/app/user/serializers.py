from .models import CustomUser
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    """
    Serializer for users view
    """

    class Meta:
        model = CustomUser
        fields = ['email', 'username', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = CustomUser(
            email=validated_data['email'],
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
