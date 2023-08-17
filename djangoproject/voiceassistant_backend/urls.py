from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'), # route to home page
]