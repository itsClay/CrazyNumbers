from django.contrib.auth.models import User, Group
from rest_framework import serializers
from CrazyNumbersApp.models import UserProfile

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = UserProfile
		# Un - comment below for the optional object model attributes
		fields = ('User_id', 'Number', 'DateTime_created', )