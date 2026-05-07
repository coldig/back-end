from django.shortcuts import render
from django.http import HttpResponse

def agendar(request):
    return HttpResponse("Página de agendamento")

def ver_agendamentos(request):
    return render(request, 'index.html')