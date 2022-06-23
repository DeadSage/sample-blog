from rest_framework.viewsets import ModelViewSet

from user.models import CustomUser
from api.v1.serializers.user import UserSerializer


class UserApiView(ModelViewSet):
    """
    A viewset that provides the CRUD actions for user
    """
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
