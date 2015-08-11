# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='user',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('User_id', models.CharField(max_length=50)),
                ('Number', models.IntegerField(max_length=50)),
                ('DateTime_created', models.DateTimeField(max_length=50)),
            ],
        ),
    ]
