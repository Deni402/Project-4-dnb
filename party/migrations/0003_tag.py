# Generated by Django 3.0.2 on 2020-01-13 16:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('party', '0002_auto_20200112_1915'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
            ],
        ),
    ]
