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
        <li><router-link to="/agenda"><i class="fas fa-calendar-alt"></i> Agenda</router-link></li>
        <li><router-link to="/cartilla-vacunacion"><i class="fas fa-syringe"></i> Cartilla de Vacunación</router-link></li>
        <li><router-link to="/consulta-medica" class="active"><i class="fas fa-stethoscope"></i> Consulta Médica</router-link></li>
        <li><router-link to="/examenes-medicos"><i class="fas fa-microscope"></i> Exámenes Médicos</router-link></li>
        <li><router-link to="/historial-medico"><i class="fas fa-file-medical"></i> Historial Médico</router-link></li>
      </ul>
      <router-link to="/" class="vet-logout">
        <i class="fas fa-sign-out-alt"></i>
        Cerrar sesión
      </router-link>
    </aside>

    <main class="vet-main-content">
      <div class="vet-header">
        <h1>Consulta Médica</h1>
        <p class="text-muted">Gestiona tus consultas veterinarias</p>
      </div>

      <div class="consulta-container">
        <div class="consulta-box">
          <i class="fas fa-plus-circle"></i>
          <h2>Nueva consulta</h2>
          <router-link to="/consulta-medica-nueva">Iniciar Consulta</router-link>
        </div>
        <div class="consulta-box">
          <i class="fas fa-edit"></i>
          <h2>Editar consulta anterior</h2>
          <router-link to="/consulta-medica-editar">Modificar consulta</router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'ConsultaMedica',
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css');
@import '../styles_css/styles_local.css';
@import '../styles_css/bootstrap.min.css';
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');
</style>
