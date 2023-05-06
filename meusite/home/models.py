from django.db import models

# Create your models here.

class Teste(models.Model):
    teste_text = models.CharField(max_length=200)
    date = models.DateField('data de publicacao')

    def __str__(self):
        return self.teste_text