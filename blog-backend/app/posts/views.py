from .models import Post
from .serializers import PostSerializer

from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly


class PostApiView(ModelViewSet):
    """
    A viewset that provides the CRUD actions for post
    """
    permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = Post.objects.all()
    serializer_class = PostSerializer
