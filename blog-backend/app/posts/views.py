from rest_framework import generics, permissions
from rest_framework.generics import get_object_or_404
from .models import Post
from user.models import CustomUser
from .serializers import PostSerializer


class PostView(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        author = get_object_or_404(CustomUser, id=self.request.data.get('author_id'))
        return serializer.save(author=author)


class DetailPost(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
