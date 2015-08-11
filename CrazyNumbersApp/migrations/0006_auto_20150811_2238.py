# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('CrazyNumbersApp', '0005_auto_20150811_2235'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='DateTime_created',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
    ]
