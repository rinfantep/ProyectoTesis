from django.urls import path, include
from rest_framework import routers
from tasks import views
from rest_framework.documentation import include_docs_urls

routers = routers.DefaultRouter()
routers.register(r'municipios', views.MunicipiosView, 'municipios')
routers.register(r'provincias', views.ProvinciasView, 'provincias')
routers.register(r'mapas', views.MapasView, 'mapas')
routers.register(r'propietarios', views.PropietariosView, 'propietarios')
routers.register(r'sectores', views.SectoresView, 'sectores')
routers.register(r'tipoSectores', views.TipoSectoresView, 'tipoSectores')
routers.register(r'especies', views.EspeciesView, 'especies')
routers.register(r'cuadrantes', views.CuadrantesView, 'cuadrantes')
routers.register(r'areas', views.AreasView, 'areas')
routers.register(r'subAreas', views.SubareasView, 'subAreas')
routers.register(r'densidades', views.DensidadesView, 'densidades')
routers.register(r'traslados', views.TrasladosView, 'traslados')
routers.register(r'enfermedades', views.EnfermedadesView, 'enfermedades')
routers.register(r'fuentesCalculos', views.FuentesCalculosView, 'fuentesCalculos')
routers.register(r'notiDiaria', views.NotiDiariaView, 'notiDiaria')



urlpatterns = [
    path("", include(routers.urls)),
    path("docs/", include_docs_urls(title = 'API VETERINARIA')),
]