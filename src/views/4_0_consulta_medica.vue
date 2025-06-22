<template>
  <div class="vet-dashboard">
    <VetSidebar />
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
import VetSidebar from '../components/VetSidebar.vue';
export default {
  name: 'ConsultaMedica',
  components: {
    VetSidebar
  }
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css');
@import '../styles_css/styles_local.css';
@import '../styles_css/bootstrap.min.css';
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');
</style>
