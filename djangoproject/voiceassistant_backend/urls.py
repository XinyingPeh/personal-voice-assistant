from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.home, name='home'), # route to home page
    path('logout', views.logout_user, name='logout'), # route to logout page
    path('register', views.register_user, name='register'), # route to register page 
    path('dashboard', views.dashboard, name='dashboard'),
]