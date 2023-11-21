import holidays
import pandas as pd
from django.views.generic import View, TemplateView, CreateView, ListView
from django.shortcuts import render
from django.http import HttpResponse
from datetime import datetime, date, time


# Create your views here.

now = date.today()
year = now.year

FeriadosDiversos = [
    (date(year, 6, 24), 'Dia de São João'),
    (date(year, 6, 12), 'Dia dos Namorados'),
    
]

FeriadosDoBrasil = list(holidays.BR(subdiv='SP', years=year).items())
FeriadosDoBrasil = FeriadosDoBrasil + FeriadosDiversos
Feriados = []

for date, name in sorted(FeriadosDoBrasil):
    if date > now:
        Feriados.append({'date':f"{format(date, '%d/%m/%Y')}", 'name':name})
        print(f"{format(date, '%d/%m/%Y')} -> {name}")

class TemplateHomeView(TemplateView):
    template_name = 'home/home.html'
    def get_context_data(self,**kwargs):
        context = super ().get_context_data  (**kwargs)
        context['feriados'] = Feriados
        context['proximo_feriado'] = Feriados[0]
        return context