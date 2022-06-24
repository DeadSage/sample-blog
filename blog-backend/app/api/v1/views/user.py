from rest_framework.viewsets import ModelViewSet

from user.models import CustomUser
from api.v1.serializers.user import UserSerializer
from dj_rest_auth.registration.views import RegisterView, VerifyEmailView, ResendEmailVerificationView


class UserApiView(ModelViewSet):
    """
    A viewset that provides the CRUD actions for user
    """
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer


class UserRegisterView(RegisterView):
    """
    View for user registration
    """


class UserVerifyEmailView(VerifyEmailView):
    """
    View for user email verify
    """


class UserResendEmailVerificationView(ResendEmailVerificationView):
    """
    View for resend email verification
    """
