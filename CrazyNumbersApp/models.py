from django.db import models
from django.contrib.auth.models import User
from datetime import datetime
from localflavor.us.models import PhoneNumberField


# Create your models here.
class UserProfile(models.Model):
	User_id = models.ForeignKey(User)
	Number = PhoneNumberField(null=False, default="XXX-XXX-XXXX")
	DateTime_created = models.DateTimeField(default=datetime.now)

	def __unicode__(self):
		return self.User_id.username