<template>
  <div class="vet-dashboard">
    <VetSidebar />
    <main class="vet-main-content">
      <div class="vet-header">
        <h1>Cartilla de vacunación</h1>
      </div>
      <div class="consulta-container d-flex justify-content-center gap-4 flex-wrap">
        <AccionCard
          iconoClase="fas fa-plus-circle"
          iconoColor="#27ae60"
          titulo="Nueva cartilla"
          descripcion="Registra una nueva cartilla de vacunación para una mascota."
          textoBoton="Iniciar cartilla"
          @accion-ejecutada="irANuevaCartilla"
        />
        <AccionCard
          iconoClase="fas fa-edit"
          iconoColor="#2980b9"
          titulo="Editar cartilla anterior"
          descripcion="Modifica los datos de una cartilla de vacunación ya registrada."
          textoBoton="Modificar cartilla"
          @accion-ejecutada="irAModificarCartilla"
        />
      </div>
    </main>
  </div>
</template>

<script>
import VetSidebar from '../components/VetSidebar.vue';
import AccionCard from '../components/AccionCard.vue';
export default {
  name: 'CartillaVacunacion',
  components: {
    VetSidebar,
    AccionCard
  },
  methods: {
    irANuevaCartilla() {
      this.$router.push('/cartilla-nueva');
    },
    irAModificarCartilla() {
      this.$router.push('/cartilla-modificar');
    }
  }
}
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
@import '../styles_css/styles_local.css';
@import '../styles_css/iconos.css';
.consulta-container {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}
</style>
