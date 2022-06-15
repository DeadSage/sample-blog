# from rest_framework_simplejwt.tokens import RefreshToken
#
# from rest_framework import generics, status
# from rest_framework.permissions import IsAuthenticated, AllowAny
# from rest_framework.views import APIView
# from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from .models import CustomUser
from .serializers import UserSerializer




class UserApiView(ModelViewSet):
    """
    A viewset that provides the CRUD actions
    """
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer


# class CreateUserApiView(APIView):
#     """
#     Registers a new user.
#     """
#     permission_classes = (AllowAny,)
#     serializer_class = CreateUserSerializer
#
#     def post(self, request):
#         """
#         Creates a new CustomUser object.
#         Username, email, and password are required.
#         Returns a JSON web token.
#         """
#         serializer = self.serializer_class(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#
#         return Response(
#             {
#                 'token': serializer.data.get('token'),
#             },
#             status=status.HTTP_201_CREATED,
#         )
#
#
# class LoginUserAPIView(APIView):
#     """
#     Login a new user.
#     """
#     permission_classes = (AllowAny,)
#     serializer_class = LoginUserSerializer
#
#     def post(self, request):
#         """
#         Checks is user exists.
#         Email and password are required.
#         Returns a JSON web token.
#         """
#         serializer = self.serializer_class(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         return Response(serializer.data, status=status.HTTP_200_OK)
#
#
# class LogoutUserAPIView(APIView):
#     permission_classes = (AllowAny,)
#
#     def post(self, request):
#         try:
#             refresh_token = request.data["refresh_token"]
#             token = RefreshToken(refresh_token)
#             token.blacklist()
#             return Response(status=status.HTTP_205_RESET_CONTENT)
#         except Exception as e:
#             return Response(status=status.HTTP_400_BAD_REQUEST)
