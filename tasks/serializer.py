from rest_framework import serializers
from .models import *


class MunicipiosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Municipios
        #fields = ('id', 'title', 'description', 'done')
        fields = '__all__'

class ProvinciasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Provincias
        #fields = ('id','codigo', 'nombre')
        fields = '__all__'

class MapasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mapas
        #fields = ('id','codigo', 'nombre')
        fields = '__all__'

class PropietariosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Propietarios
        #fields = ('id','codigo', 'nombre')
        fields = '__all__'

class SectoresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sectores
        #fields = ('id','codigo', 'nombre')
        fields = '__all__'

class TipoSectoresSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoSectores
        #fields = ('id','codigo', 'nombre')
        fields = '__all__'

class EspeciesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Especies
        #fields = ('id','codigo', 'nombre')
        fields = '__all__'

class CuadrantesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cuadrantes
        #fields = ('id','codigo', 'nombre')
        fields = '__all__'

class AreasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Areas
        #fields = ('id','codigo', 'nombre')
        fields = '__all__'

class SubareasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subareas
        #fields = ('id','codigo', 'nombre')
        fields = '__all__'

class DensidadesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Densidades
        #fields = ('id','codigo', 'nombre')
        fields = '__all__'

class TrasladosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Traslados
        #fields = ('id','codigo', 'nombre')
        fields = '__all__'

class EnfermedadesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enfermedades
        #fields = ('id','codigo', 'nombre')
        fields = '__all__'

class FuentesCalculosSerializer(serializers.ModelSerializer):
    class Meta:
        model = FuentesCalculos
        #fields = ('id','codigo', 'nombre')
        fields = '__all__'

class NotiDiariaSerializer(serializers.ModelSerializer):
    class Meta:
        model = NotiDiaria
        fields = '__all__'

class SeguimientosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seguimientos
        fields = '__all__'

class LetalidadCaninaSerializer(serializers.ModelSerializer):
    class Meta:
        model = LetalidadCanina
        fields = '__all__'




