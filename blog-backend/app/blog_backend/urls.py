from django.contrib import admin
from django.urls import path, include

from rest_framework_simplejwt.views import TokenRefreshView
# from users.views import CustomObtainTokenPairView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
]
