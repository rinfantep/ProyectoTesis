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

class EnfermedadesView(viewsets.ModelViewSet):
    serializer_class = EnfermedadesSerializer
    queryset = Enfermedades.objects.all()

class UnidadView(viewsets.ModelViewSet):
    serializer_class = UnidadSerializer
    queryset = Unidad.objects.all()

class NotiDiariaView(viewsets.ModelViewSet):
    serializer_class = NotiDiariaSerializer
    queryset = NotiDiaria.objects.all()

class SeguimientosView(viewsets.ModelViewSet):
    serializer_class = SeguimientosSerializer
    queryset = Seguimientos.objects.all()

class LetalidadCaninaView(viewsets.ModelViewSet):
    serializer_class = LetalidadCaninaSerializer
    queryset = LetalidadCanina.objects.all()

class TrasladoView(viewsets.ModelViewSet):
    serializer_class = TrasladoSerializer
    queryset = Traslado.objects.all()