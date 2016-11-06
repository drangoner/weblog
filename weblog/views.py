from django.shortcuts import render, render_to_response
from django.http import HttpResponse
from .models import Article
from django.template import loader


def index(request):
	template = loader.get_template('html/index.html')
	return HttpResponse(template.render(request))
	

# Create your views here.
