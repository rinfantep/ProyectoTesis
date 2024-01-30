from rest_framework import viewsets
from .serializer import *
from .models import *


# Create your views here.



class MunicipiosView(viewsets.ModelViewSet):
    serializer_class = MunicipiosSerializer
    queryset = Municipios.objects.all()

class ProvinciasView(viewsets.ModelViewSet):
    serializer_class = ProvinciasSerializer
    queryset = Provincias.objects.all()

class MapasView(viewsets.ModelViewSet):
    serializer_class = MapasSerializer
    queryset = Mapas.objects.all()

class PropietariosView(viewsets.ModelViewSet):
    serializer_class = PropietariosSerializer
    queryset = Propietarios.objects.all()

class SectoresView(viewsets.ModelViewSet):
    serializer_class = SectoresSerializer
    queryset = Sectores.objects.all()

class TipoSectoresView(viewsets.ModelViewSet):
    serializer_class = TipoSectoresSerializer
    queryset = TipoSectores.objects.all()

class EspeciesView(viewsets.ModelViewSet):
    serializer_class = EspeciesSerializer
    queryset = Especies.objects.all()

class CuadrantesView(viewsets.ModelViewSet):
    serializer_class = CuadrantesSerializer
    queryset = Cuadrantes.objects.all()

class AreasView(viewsets.ModelViewSet):
    serializer_class = AreasSerializer
    queryset = Areas.objects.all()
    
class SubareasView(viewsets.ModelViewSet):
    serializer_class = SubareasSerializer
    queryset = Subareas.objects.all()


class DensidadesView(viewsets.ModelViewSet):
    serializer_class = DensidadesSerializer
    queryset = Densidades.objects.all()

class TrasladosView(viewsets.ModelViewSet):
    serializer_class = TrasladosSerializer
    queryset = Traslados.objects.all()

class EnfermedadesView(viewsets.ModelViewSet):
    serializer_class = EnfermedadesSerializer
    queryset = Enfermedades.objects.all()

class FuentesCalculosView(viewsets.ModelViewSet):
    serializer_class = FuentesCalculosSerializer
    queryset = FuentesCalculos.objects.all()

class NotiDiariaView(viewsets.ModelViewSet):
    serializer_class = NotiDiariaSerializer
    queryset = NotiDiaria.objects.all()

class AnimalesView(viewsets.ModelViewSet):
    serializer_class = AnimalesSerializer
    queryset = Animales.objects.all()