from __future__ import unicode_literals

from django.db import models
from django.utils.encoding import python_2_unicode_compatible

class Article(models.Model):
	title = models.CharField(max_length=200)
	category = models.CharField(max_length=200)
	content = models.TextField()
	release_date = models.DateTimeField('article released')
	
	def __str__(self):
		return self.content
	
	def getTitle(self):
		return self.title
	
# Create your models here.
