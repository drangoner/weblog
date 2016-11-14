from django.shortcuts import render, render_to_response
from django.http import HttpResponse
from .models import Article

#This the index of the site
def index(request):

	return render(request,'html/index.html')
	

def photos(request):
	return render(request,'html/photos.html')


def me(request):
	return render(request,'html/me.html')



def blog(request):
	return render(request,'html/blog.html')



def support(request):
	return render(request,'html/support.html')


# Create your views here.
