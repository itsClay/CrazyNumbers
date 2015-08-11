# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import localflavor.us.models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('admin', '0001_initial'),
        ('CrazyNumbersApp', '0004_auto_20150811_2124'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('Number', localflavor.us.models.PhoneNumberField(default=b'XXX-XXX-XXXX', max_length=20)),
                ('DateTime_created', models.DateTimeField(blank=True)),
                ('User_id', models.ForeignKey(to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='user_ptr',
        ),
        migrations.DeleteModel(
            name='CustomUser',
        ),
    ]
