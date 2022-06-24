from rest_framework.viewsets import ModelViewSet

from user.models import CustomUser
from api.v1.serializers.user import UserSerializer
from dj_rest_auth.registration.views import RegisterView, VerifyEmailView, ResendEmailVerificationView


class UserApiView(ModelViewSet):
    """
    CRUD actions for user

    Provide create/retrieve/update/delete actions
    """
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer


class UserRegisterView(RegisterView):
    """
    User registration

    Register user with given credentials
    """


class UserVerifyEmailView(VerifyEmailView):
    """
    User email verify

    Return the REST Token
    """


class UserResendEmailVerificationView(ResendEmailVerificationView):
    """
    Resend user email

    Return 200 OK
    """
