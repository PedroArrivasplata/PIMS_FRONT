<template>
  <div class="vet-dashboard">
    <aside class="vet-sidebar">
      <div class="vet-sidebar-header">
        <img src="../assets/happy_dog.png" alt="Medical Vice Logo">
        <h3>Medical Vice</h3>
        <p>Panel Veterinario</p>
      </div>
      <ul class="vet-sidebar-nav">
        <!-- Cambiado de href a router-link, ruta: /inicio -->
        <li><router-link to="/inicio" class="active"> <i class="fas fa-home"></i> Inicio</router-link></li>
        <!-- Cambiado de href a router-link, ruta: /agenda -->
        <li><router-link to="/agenda" ><i class="fas fa-calendar-alt"></i> Agenda</router-link></li>
        <!-- Cambiado de href a router-link, ruta: /cartilla-vacunacion -->
        <li><router-link to="/cartilla-vacunacion"><i class="fas fa-syringe"></i> Cartilla de Vacunación</router-link></li>
        <!-- Cambiado de href a router-link, ruta: /consulta-medica -->
        <li><router-link to="/consulta-medica"><i class="fas fa-stethoscope"></i> Consulta Médica</router-link></li>
        <!-- Cambiado de href a router-link, ruta: /examenes-medicos -->
        <li><router-link to="/examenes-medicos"><i class="fas fa-microscope"></i> Exámenes Médicos</router-link></li>
        <!-- Cambiado de href a router-link, ruta: /historial-medico -->
        <li><router-link to="/historial-medico"><i class="fas fa-file-medical"></i> Historial Médico</router-link></li>
      </ul>
      <router-link to="/" class="vet-logout">
        <i class="fas fa-sign-out-alt"></i>
        Cerrar sesión
      </router-link>
    </aside>
    
    <main class="vet-main-content scroll-sections">
      <div class="vet-header">
        <div>
          <h1>Bienvenido, Dr. Veterinario</h1>
          <p class="text-muted">Martes, 21 de abril de 2025</p>
        </div>
      </div>
      
      <div class="vet-cards">
        <div class="vet-card">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h3 class="m-0">Vacunaciones Pendientes</h3>
            <div class="vet-card-icon">
              <i class="fas fa-syringe"></i>
            </div>
          </div>
          <div class="mb-3">
            <p>Tienes <strong>3 mascotas</strong> con vacunas pendientes.</p>
            <p>Próxima vacuna: <strong>mañana a las 10:30 AM</strong></p>
          </div>
          <div class="vet-card-footer">
            <!-- Cambiado de href a router-link, ruta: /cartilla-vacunacion -->
            <router-link to="/cartilla-vacunacion" class="vet-btn">Ver cartillas</router-link>
          </div>
        </div>
        
        <div class="vet-card info">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h3 class="m-0">Exámenes Médicos</h3>
            <div class="vet-card-icon">
              <i class="fas fa-microscope"></i>
            </div>
          </div>
          <div class="mb-3">
            <p><strong>4 resultados</strong> pendientes de revisión.</p>
            <p>2 análisis de laboratorio, 2 radiografías</p>
          </div>
          <div class="vet-card-footer">
            <!-- Cambiado de href a router-link, ruta: /examenes-medicos -->
            <router-link to="/examenes-medicos" class="vet-btn">Revisar</router-link>
          </div>
        </div>
        
        <div class="vet-card warning">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h3 class="m-0">Consultas Programadas</h3>
            <div class="vet-card-icon">
              <i class="fas fa-calendar-alt"></i>
            </div>
          </div>
          <div class="mb-3">
            <p>Tienes <strong>5 citas</strong> programadas para hoy.</p>
            <p><strong>3 consultas</strong> y <strong>2 vacunaciones</strong></p>
          </div>
          <div class="vet-card-footer">
            <!-- Cambiado de href a router-link, ruta: /agenda -->
            <router-link to="/agenda" class="vet-btn">Ver agenda</router-link>
          </div>
        </div>
        
        <div class="vet-card alert">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h3 class="m-0">Historial Médico</h3>
            <div class="vet-card-icon">
              <i class="fas fa-file-medical"></i>
            </div>
          </div>
          <div class="mb-3">
            <p><strong>2 pacientes</strong> requieren actualización de historial.</p>
            <p>Última actualización: <strong>hace 3 días</strong></p>
          </div>
          <div class="vet-card-footer">
            <!-- Cambiado de href a router-link, ruta: /historial-medico -->
            <router-link to="/historial-medico" class="vet-btn">Actualizar</router-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Inicio'
}
</script>

<style scoped>

@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap/icons.css');
@import '../styles_css/styles_local.css';
@import '../styles_css/bootstrap.min.css';
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');


</style>