from posts.models import Post
from api.v1.serializers.posts import PostSerializer

from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly


class PostApiView(ModelViewSet):
    """
    CRUD actions for post

    Provide create/retrieve/update/delete actions
    """
    permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = Post.objects.all()
    serializer_class = PostSerializer
