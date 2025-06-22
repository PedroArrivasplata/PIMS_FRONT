<template>
  <div class="vet-dashboard">
    <VetSidebar />
    <main class="vet-main-content">
      <div class="vet-header">
        <h1>Cartilla de vacunación</h1>
      </div>
      <div class="consulta-container">
        <div class="consulta-box">
          <i class="fas fa-plus-circle"></i>
          <h2>Nueva cartilla</h2>
          <!-- Cambiado de href a router-link, ruta: /cartilla-nueva -->
          <router-link to="/cartilla-nueva">Iniciar cartilla</router-link>
        </div>
        <div class="consulta-box">
          <i class="fas fa-edit"></i>
          <h2>Editar cartilla anterior</h2>
          <!-- Cambiado de href a router-link, ruta: /cartilla-modificar -->
          <router-link to="/cartilla-modificar">Modificar cartilla</router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import VetSidebar from '../components/VetSidebar.vue';
export default {
  name: 'CartillaVacunacion',
  components: {
    VetSidebar
  }
}
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
@import '../styles_css/styles_local.css';
@import '../styles_css/iconos.css';
</style>
