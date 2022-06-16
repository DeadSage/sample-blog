from .views import UserApiView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', UserApiView, basename='user')
urlpatterns = router.urls
