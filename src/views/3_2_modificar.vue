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
        <li><router-link to="/inicio"><i class="fas fa-home"></i> Inicio</router-link></li>
        <!-- Cambiado de href a router-link, ruta: /agenda -->
        <li><router-link to="/agenda"><i class="fas fa-calendar-alt"></i> Agenda</router-link></li>
        <!-- Cambiado de href a router-link, ruta: /cartilla-vacunacion -->
        <li><router-link to="/cartilla-vacunacion" class="active"><i class="fas fa-syringe"></i> Cartilla de Vacunación</router-link></li>
        <!-- Cambiado de href a router-link, ruta: /consulta-medica -->
        <li><router-link to="/consulta-medica"><i class="fas fa-stethoscope"></i> Consulta Médica</router-link></li>
        <!-- Cambiado de href a router-link, ruta: /examenes-medicos -->
        <li><router-link to="/examenes-medicos"><i class="fas fa-microscope"></i> Exámenes Médicos</router-link></li>
        <!-- Cambiado de href a router-link, ruta: /historial-medico -->
        <li><router-link to="/historial-medico"><i class="fas fa-file-medical"></i> Historial Médico</router-link></li>
      </ul>
      <!-- Cambiado de href a router-link, ruta: /login -->
      <router-link to="/login" class="vet-logout">
        <i class="fas fa-sign-out-alt"></i>
        Cerrar sesión
      </router-link>
    </aside>
    <main class="vet-main-content">
      <div class="vet-header">
        <h1>Editar cartilla</h1>
      </div>
      <!-- Aquí puedes agregar el formulario o componentes para editar la cartilla -->
    </main>
  </div>
</template>

<script>
export default {
  name: 'ModificarCartilla',
}
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
@import '../styles_css/styles_local.css';
@import '../styles_css/iconos.css';
</style>
