from rest_framework.viewsets import ModelViewSet

from .models import CustomUser
from .serializers import UserSerializer


class UserApiView(ModelViewSet):
    """
    A viewset that provides the CRUD actions for user
    """
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
