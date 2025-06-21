<template>
  <div class="vet-dashboard">
    <aside class="vet-sidebar">
      <div class="vet-sidebar-header">
        <img src="../assets/happy_dog.png" alt="Medical Vice Logo">
        <h3>Medical Vice</h3>
        <p>Panel Veterinario</p>
      </div>
      <ul class="vet-sidebar-nav">
        <li><router-link to="/inicio"><i class="fas fa-home"></i> Inicio</router-link></li>
        <li><a href="#"><i class="fas fa-calendar-alt"></i> Agenda</a></li>
        <li><a href="#"><i class="fas fa-syringe"></i> Cartilla de Vacunación</a></li>
        <li><a href="#"><i class="fas fa-stethoscope"></i> Consulta Médica</a></li>
        <li><a href="#"><i class="fas fa-microscope"></i> Exámenes Médicos</a></li>
        <li><router-link to="/"><i class="fas fa-file-medical"></i> Historial Médico</router-link></li>
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
            <a href="#" class="vet-btn">Ver cartillas</a>
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
            <a href="#" class="vet-btn">Revisar</a>
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
            <a href="#" class="vet-btn">Ver agenda</a>
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
            <a href="#" class="vet-btn">Actualizar</a>
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

<style>
@import '../styles_css/styles_local.css';
@import '../styles_css/bootstrap.min.css';
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

.vet-dashboard {
  display: flex;
  min-height: 100vh;
  width: 100vw;
  background: #f8fafc;
  box-sizing: border-box;
}


.vet-main-content {
  flex: 1;
  padding: 2rem 2rem 2rem 2rem;
  overflow-x: auto;
  min-width: 0;
  box-sizing: border-box;
}

@media (max-width: 900px) {
  .vet-dashboard {
    flex-direction: column;
  }
  .vet-sidebar {
    width: 100%;
    max-width: 100vw;
    min-width: unset;
    border-right: none;
    border-bottom: 1px solid #e5e7eb;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem;
    overflow-x: auto;
  }
  .vet-main-content {
    padding: 1rem;
  }
  .vet-sidebar-header {
    display: none;
  }
  .vet-sidebar-nav {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin: 0;
    padding: 0;
  }
  .vet-sidebar-nav li {
    display: inline-block;
  }
  .vet-logout {
    margin-left: auto;
    margin-right: 0;
  }
}

@media (max-width: 600px) {
  .vet-main-content {
    padding: 0.5rem;
  }
  .vet-card {
    min-width: 220px;
    font-size: 0.95em;
  }
}
</style>