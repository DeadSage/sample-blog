from .models import Post
from rest_framework.viewsets import ModelViewSet
from .serializers import PostSerializer


class PostApiView(ModelViewSet):
    """
    A viewset that provides the CRUD actions for post
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer
