from django.contrib import admin
# Usuario e senhas de teste: user1 : betatester
# Register your models here.

from .models import Teste

# Fazer isso para registrar um campo do banco de dados
# No caso um campo simples de texto
admin.site.register(Teste)