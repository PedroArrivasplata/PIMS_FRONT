<template>
  <div class="vet-dashboard">
    <VetSidebar />
    <main class="vet-main-content">
      <div class="vet-header">
        <h1>Editar cartilla</h1>
      </div>
      <!-- Aquí puedes agregar el formulario o componentes para editar la cartilla -->
    </main>
  </div>
</template>

<script>
import VetSidebar from '../components/VetSidebar.vue';
export default {
  name: 'ModificarCartilla',
  components: {
    VetSidebar
  }
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
@import '../styles_css/styles_local.css';
@import '../styles_css/iconos.css';
</style>
