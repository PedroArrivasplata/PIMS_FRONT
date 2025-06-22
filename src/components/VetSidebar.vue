<template>
  <aside class="vet-sidebar">
    <div class="vet-sidebar-header">
      <img src="../assets/happy_dog.png" alt="Medical Vice Logo">
      <h3>Medical Vice</h3>
      <p>Panel Veterinario</p>
    </div>
    <ul class="vet-sidebar-nav">
      <li><router-link to="/inicio" active-class="active"><i class="fas fa-home"></i> Inicio</router-link></li>
      <li><router-link to="/agenda" active-class="active"><i class="fas fa-calendar-alt"></i> Agenda</router-link></li>
      <li><router-link to="/cartilla-vacunacion" active-class="active"><i class="fas fa-syringe"></i> Cartilla de Vacunación</router-link></li>
      <li><router-link to="/consulta-medica" active-class="active"><i class="fas fa-stethoscope"></i> Consulta Médica</router-link></li>
      <li><router-link to="/examenes-medicos" active-class="active"><i class="fas fa-microscope"></i> Exámenes Médicos</router-link></li>
      <li><router-link to="/historial-medico" active-class="active"><i class="fas fa-file-medical"></i> Historial Médico</router-link></li>
    </ul>
    <router-link to="/" class="vet-logout">
      <i class="fas fa-sign-out-alt"></i>
      Cerrar sesión
    </router-link>
  </aside>
</template>

<script>
export default {
  name: 'VetSidebar'
}
</script>

<style scoped>
</style>
