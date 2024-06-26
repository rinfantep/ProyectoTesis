# Generated by Django 5.0.2 on 2024-04-25 15:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='subareas',
            name='areas_cuadrantes_localizaciony',
        ),
        migrations.RemoveField(
            model_name='subareas',
            name='areas_cuadrantes_localizacion',
        ),
        migrations.RemoveField(
            model_name='subareas',
            name='areas_nombres_areas',
        ),
        migrations.RemoveField(
            model_name='densidades',
            name='cuadrantes_localizacion',
        ),
        migrations.RemoveField(
            model_name='densidades',
            name='cuadrantes_localizaciony',
        ),
        migrations.RemoveField(
            model_name='traslados',
            name='cuadrantes_localizacion_procedencia',
        ),
        migrations.RemoveField(
            model_name='fuentescalculos',
            name='cuadrantes_localizacion',
        ),
        migrations.RemoveField(
            model_name='fuentescalculos',
            name='cuadrantes_localizaciony',
        ),
        migrations.RemoveField(
            model_name='traslados',
            name='cuadrantes_localizacionm',
        ),
        migrations.RemoveField(
            model_name='subareas',
            name='cuadrantes_localizacion',
        ),
        migrations.RemoveField(
            model_name='subareas',
            name='cuadrantes_localizaciony',
        ),
        migrations.RemoveField(
            model_name='traslados',
            name='cuadrantes_localizacion_destino',
        ),
        migrations.RemoveField(
            model_name='traslados',
            name='cuadrantes_localizaciony',
        ),
        migrations.RemoveField(
            model_name='densidades',
            name='especies',
        ),
        migrations.RemoveField(
            model_name='fuentescalculos',
            name='idenfermedades',
        ),
        migrations.RemoveField(
            model_name='fuentescalculos',
            name='municipios',
        ),
        migrations.RemoveField(
            model_name='fuentescalculos',
            name='propietarios',
        ),
        migrations.RemoveField(
            model_name='mapas',
            name='provincias',
        ),
        migrations.RemoveField(
            model_name='traslados',
            name='especies',
        ),
        migrations.RemoveField(
            model_name='traslados',
            name='municipios_destino',
        ),
        migrations.RemoveField(
            model_name='traslados',
            name='municipios_procedencia',
        ),
        migrations.RemoveField(
            model_name='traslados',
            name='nombres_propietarios_destino',
        ),
        migrations.RemoveField(
            model_name='traslados',
            name='nombres_propietarios_procedencia',
        ),
        migrations.DeleteModel(
            name='Areas',
        ),
        migrations.DeleteModel(
            name='Subareas',
        ),
        migrations.DeleteModel(
            name='Cuadrantes',
        ),
        migrations.DeleteModel(
            name='Densidades',
        ),
        migrations.DeleteModel(
            name='FuentesCalculos',
        ),
        migrations.DeleteModel(
            name='Mapas',
        ),
        migrations.DeleteModel(
            name='Traslados',
        ),
    ]
