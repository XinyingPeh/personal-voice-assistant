from django.urls import path
from voiceassistant_backend import views

urlpatterns = [
    path('', views.index, name='index')
]