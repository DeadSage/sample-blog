from django.urls import path, include

from api.v1.views.posts import PostApiView
from api.v1.views.user import UserApiView

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', PostApiView, basename='posts')

user_router = DefaultRouter()
user_router.register(r'user', UserApiView)

urlpatterns = [
    path('posts/', include('router.urls')),
    path('users/', include('user_router.urls')),
    path('auth/', include('dj_rest_auth.urls')),
    path('auth/registration/', include('dj_rest_auth.registration.urls'))
]
