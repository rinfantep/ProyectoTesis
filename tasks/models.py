from django.db import models

# Create your models here.


class Provincias(models.Model):
    
    provincia = models.CharField(max_length=20, primary_key=True)

    def __str__(self):
        return self.provincia
    
class Municipios(models.Model):
    municipio = models.CharField(max_length=20,primary_key=True)
    
    def __str__(self):
        return self.municipio
    
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
        return self.propietario
    

class NotiDiaria(models.Model):
    fecha = models.DateField(auto_now=True)
    No_orden = models.IntegerField()
    municipio = models.ForeignKey("Municipios", on_delete=models.CASCADE, db_column='municipio')
    unidad = models.CharField(max_length=50)
    propietario = models.ForeignKey("Propietarios", on_delete=models.CASCADE, db_column='propietario')
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

class Seguimientos(models.Model):
    provincia = models.ForeignKey("Provincias", on_delete=models.CASCADE)
    numOrden = models.IntegerField()
    enfermos = models.IntegerField()
    muertos = models.IntegerField()
    sacrificados = models.IntegerField()
    recuperados = models.IntegerField()
    observaciones = models.TextField()

class LetalidadCanina(models.Model):
    enfermedad = models.ForeignKey("Enfermedades", on_delete=models.CASCADE)
    nuevosBrotes = models.IntegerField()
    nuevosEnfermos = models.IntegerField()
    muertos = models.IntegerField()
    sacrificados = models.IntegerField()
    tratados = models.IntegerField()
    vacunados = models.IntegerField()
    centroInformante = models.CharField(max_length=50)
    fecha = models.DateField(auto_now_add=True)
    sector = models.ForeignKey("Sectores", on_delete=models.CASCADE)
    municipio = models.ForeignKey("Municipios", on_delete=models.CASCADE)
    provincia = models.ForeignKey("Provincias", on_delete=models.CASCADE)
    especie = models.ForeignKey("Especies", on_delete=models.CASCADE)

class Traslado(models.Model):
    fecha = models.DateField(auto_now_add=True)
    provincia = models.ForeignKey("Provincias", on_delete=models.CASCADE)
    municipio = models.ForeignKey("Municipios", on_delete=models.CASCADE)
    propietario = models.ForeignKey("Propietarios", on_delete=models.CASCADE)
    tipoAnimal = models.CharField(max_length=50)
    investigaciones = models.TextField(max_length=500)
    provinciaDestino = models.CharField(max_length=50)
    municipioDestino = models.CharField(max_length=50)
    propietarioDestino = models.CharField(max_length=50)
    solicita = models.CharField(max_length=100)
    tramita = models.CharField(max_length=100)
    autoriza = models.CharField(max_length=100)
    nacion = models.CharField(max_length=100)