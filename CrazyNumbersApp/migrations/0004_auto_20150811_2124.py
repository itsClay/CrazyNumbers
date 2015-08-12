# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('CrazyNumbersApp', '0003_auto_20150811_2119'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='User_id',
            field=models.CharField(unique=True, max_length=75),
        ),
    ]
