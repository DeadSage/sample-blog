from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):
    """
    Serializer for posts list/detail
    """
    class Meta:
        model = Post
        fields = ['title', 'content', 'published', 'author']
