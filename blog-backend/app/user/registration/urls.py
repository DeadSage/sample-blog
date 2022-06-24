from django.urls import path, include
from api.v1.views.user import UserApiView, UserVerifyEmailView, UserResendEmailVerificationView, UserRegisterView


urlpatterns = [
    path('', UserRegisterView.as_view()),
    path('resend-email/', UserResendEmailVerificationView.as_view()),
    path('verify-email/', UserVerifyEmailView.as_view()),
]
