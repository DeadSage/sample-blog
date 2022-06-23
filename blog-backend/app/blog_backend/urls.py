from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from rest_framework_swagger.views import get_swagger_view

schema_view = get_swagger_view(title='API')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    # url('swagger/', schema_view)
]
