from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class user(models.Model):
	User_id = models.CharField(max_length=50)
	Number = models.IntegerField(default=0)
	DateTime_created = models.DateTimeField(max_length=50)
