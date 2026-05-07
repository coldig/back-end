from django.urls import path, include
from . import views

urlpatterns = [
    path('agendar/', views.agendar, name='agendar'),
    path('ver/', views.ver_agendamentos, name='ver_agendamentos'),
]
