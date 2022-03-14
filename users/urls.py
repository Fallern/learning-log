"""The url of the scheme for users"""
from django.urls import path, include
from . import views

app_name = 'users'
urlpatterns = [
    path('', include('django.contrib.auth.urls')),
    path('register/', views.register, name='register'),
    path('validate_username/', views.validate_username, name='validate_username'),
]
