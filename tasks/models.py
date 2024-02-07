from django.db import models

# Create your models here.


class Provincias(models.Model):
    
    provincia = models.CharField(max_length=20, primary_key=True)

    def __str__(self):
        return self.provincias
    
class Municipios(models.Model):
    municipio = models.CharField(max_length=20,primary_key=True)
    
    def __str__(self):
        return self.municipios
    
class Sectores(models.Model):
    sector = models.CharField( max_length=20, primary_key=True)

    def __str__(self):
        return self.sector

class TipoSectores(models.Model):
    tipoSector = models.CharField( max_length=20, primary_key=True)
    

    def __str__(self):
        return self.tipoSector
    
    
class Especies(models.Model):
    codigo = models.PositiveIntegerField()
    especies = models.CharField(max_length=20, primary_key=True)

    def __str__(self):
        return self.especies
    
class Enfermedades(models.Model):
    idenfermedad = models.PositiveIntegerField() 
    enfermedad = models.CharField(max_length=80,primary_key=True) 

    def __str__(self):
        return self.enfermedad
    


class Propietarios(models.Model):
    propietario = models.CharField( max_length=20, primary_key=True)
    sector = models.ForeignKey('Sectores',on_delete=models.CASCADE)
    municipio = models.ForeignKey('Municipios',on_delete=models.CASCADE)
    provincia = models.ForeignKey('Provincias',on_delete=models.CASCADE)

    def __str__(self):
        return self.propietarios
    

class NotiDiaria(models.Model):
    fecha = models.DateField(auto_now=True)
    No_orden = models.IntegerField()
    municipio = models.ForeignKey("Municipios", on_delete=models.CASCADE, db_column='municipios')
    unidad = models.CharField(max_length=50)
    propietario = models.ForeignKey("Propietarios", on_delete=models.CASCADE, db_column='propietarios')
    cuadrante = models.IntegerField()
    codigo_entidad = models.IntegerField()
    codigo_especialista = models.IntegerField()
    poblacion = models.IntegerField()
    enfermos = models.IntegerField()
    muertos = models.IntegerField()
    sac = models.IntegerField()
    fecha_envio = models.DateField(auto_now=False, auto_now_add=False)
    fecha_confeccion = models.DateField(auto_now=False, auto_now_add=False)
    fecha_cierre = models.DateField(auto_now=False, auto_now_add=False)
    parte = models.TextField()
    





class Mapas(models.Model):
    mapas = models.CharField( max_length=20)
    provincias = models.ForeignKey('Provincias',on_delete=models.CASCADE, db_column='provincias')

    def __str__(self):
        return self.mapas


class Cuadrantes(models.Model):
    id = models.BigAutoField(primary_key=True)
    localizacion = models.PositiveIntegerField(unique=True)  
    localizaciony = models.PositiveIntegerField(unique=True)


class Areas(models.Model):
    nombres_areas = models.CharField(max_length=20)  
    areas_localizacion = models.OneToOneField('Cuadrantes',on_delete=models.PROTECT, related_name='areas_cuadrantes_localizacion_set',)
    areas_localizaciony = models.OneToOneField('Cuadrantes',on_delete=models.PROTECT, related_name='areas_cuadrantes_localizaciony_set')
    provincias_codigos_provincias = models.ForeignKey('Provincias',on_delete=models.PROTECT )

   
class Subareas(models.Model):
    nombres_subareas = models.CharField( max_length=20)  
    cuadrantes_localizacion = models.ForeignKey(Cuadrantes,on_delete=models.PROTECT, related_name='areas_localizacion_set')
    cuadrantes_localizaciony = models.ForeignKey(Cuadrantes,on_delete=models.PROTECT, related_name='areas_localizaciony_set')
    areas_cuadrantes_localizaciony = models.ForeignKey(Areas ,on_delete=models.PROTECT,related_name='areas_cuadrantes_localizaciony_set')
    areas_cuadrantes_localizacion = models.ForeignKey(Areas ,on_delete=models.PROTECT, related_name='subareas_areas_cuadrantes_localizacion_set')
    areas_nombres_areas = models.ForeignKey('Areas', on_delete=models.PROTECT, related_name='subareas_areas_nombres_areas_set')

class Densidades(models.Model):
    categorias = models.CharField(max_length=20)
    idencidad = models.AutoField(primary_key=True)
    cuadrantes_localizaciony = models.ForeignKey('Cuadrantes', on_delete=models.PROTECT)
    cuadrantes_localizacion = models.ForeignKey(Cuadrantes,on_delete=models.PROTECT, related_name='densidades_cuadrantes_localizacion_set')
    especies = models.ForeignKey('Especies',on_delete=models.CASCADE)
    cantidades = models.PositiveIntegerField(blank=True, null=True)


class Traslados(models.Model):
    
    cuadrantes_localizacionm = models.ForeignKey('Cuadrantes', on_delete=models.PROTECT)
    cuadrantes_localizaciony = models.ForeignKey('Cuadrantes',on_delete=models.PROTECT , related_name='traslados_cuadrantes_localizaciony_set')
    fechas_salidas = models.DateField()
    cuadrantes_localizacion_procedencia = models.ForeignKey('Cuadrantes', on_delete=models.PROTECT, related_name='traslados_cuadrantes_localizacion_procedencia_set')
    cuadrantes_localizacion_destino = models.ForeignKey('Cuadrantes', on_delete=models.PROTECT, related_name='traslados_cuadrantes_localizacion_destino_set')
    nombres_propietarios_destino = models.ForeignKey('Propietarios', on_delete=models.CASCADE)
    nombres_propietarios_procedencia = models.ForeignKey('Propietarios', on_delete=models.CASCADE, related_name='traslados_nombres_propietarios_procedencia_set')
    municipios_destino = models.ForeignKey('Municipios', on_delete=models.CASCADE)
    municipios_procedencia = models.ForeignKey('Municipios', on_delete=models.CASCADE, related_name='traslados_municipios_procedencia_set')
    especies = models.ForeignKey('Especies', on_delete=models.CASCADE)
    cantidades = models.PositiveIntegerField(blank=True, null=True)

class FuentesCalculos(models.Model):
    codigo_fuentes_calculo = models.AutoField(primary_key=True)
    cuadrantes_localizaciony = models.ForeignKey(Cuadrantes, models.CASCADE, db_column='cuadrantes_localizaciony', to_field='localizaciony')
    idenfermedades = models.ForeignKey(Enfermedades, models.CASCADE, db_column='idEnfermedades')
    municipios = models.ForeignKey('Municipios', models.CASCADE, db_column='municipios')
    propietarios = models.ForeignKey('Propietarios', models.CASCADE, db_column='propietarios')
    cuadrantes_localizacion = models.ForeignKey(Cuadrantes, models.DO_NOTHING, db_column='cuadrantes_localizacion', related_name='fuentescalculos_cuadrantes_localizacion_set')
    fechas_ocurrencias = models.DateField(blank=True, null=True)
    fechas_cierres = models.DateField(blank=True, null=True)
    fechas_confirmaciones = models.DateField(blank=True, null=True)
    cantidad_recuperados = models.PositiveIntegerField(blank=True, null=True)
    cantidad_muertos = models.PositiveIntegerField(blank=True, null=True)
    cantidad_enfermos = models.PositiveIntegerField(blank=True, null=True)
    cantidad_totales = models.PositiveIntegerField(blank=True, null=True)

    
