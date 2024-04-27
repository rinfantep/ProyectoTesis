# Generated by Django 5.0.4 on 2024-04-27 19:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0004_alter_traslado_investigaciones'),
    ]

    operations = [
        migrations.RenameField(
            model_name='notidiaria',
            old_name='parte',
            new_name='descripcion',
        ),
        migrations.RenameField(
            model_name='notidiaria',
            old_name='fecha_envio',
            new_name='fecha_confirmacion',
        ),
        migrations.RenameField(
            model_name='notidiaria',
            old_name='No_orden',
            new_name='no_orden',
        ),
        migrations.RenameField(
            model_name='notidiaria',
            old_name='cuadrante',
            new_name='sacrificados',
        ),
        migrations.RemoveField(
            model_name='notidiaria',
            name='fecha',
        ),
        migrations.RemoveField(
            model_name='notidiaria',
            name='sac',
        ),
        migrations.AddField(
            model_name='notidiaria',
            name='latitud',
            field=models.FloatField(default=2),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='notidiaria',
            name='longitud',
            field=models.FloatField(default=2),
            preserve_default=False,
        ),
    ]
