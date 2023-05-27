import holidays
import pandas as pd
from django.views.generic import View, TemplateView, CreateView, ListView
from django.shortcuts import render
from django.http import HttpResponse
from datetime import datetime, date, time


# Create your views here.

now = datetime.today()
year = now.year

FeriadosDiversos = [
        (date(year, 6, 24), 'Dia de São João (Festa Junina)'),
        (date(year, 6, 12), 'Dia dos Namorados'),
        (date(year, 6, 12), 'Dia dos Namorados')
    ]

FeriadosDoBrasil = list(holidays.BR(subdiv='SP', years=year).items())
FeriadosDoBrasil = FeriadosDoBrasil + FeriadosDiversos
Feriados = []

for date, name in sorted(FeriadosDoBrasil):
    Feriados.append(f"{format(date, '%d/%m/%Y')} : {name}")  




print(FeriadosDoBrasil)


class TemplateHomeView(TemplateView):
    template_name = 'home/home.html'
    def get_context_data(self,**kwargs):
        context = super ().get_context_data  (**kwargs)
        context['feriados'] = Feriados
        return context