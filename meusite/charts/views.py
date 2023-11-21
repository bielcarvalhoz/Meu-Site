from django.views.generic import View, TemplateView, CreateView, ListView
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


class TemplateChartView(TemplateView):
    template_name = 'charts/charts.html'
    def get_context_data(self,**kwargs):
        context = {}
        return context