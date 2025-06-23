<template>
  <div class="vet-dashboard">
    <VetSidebar />
    <main class="vet-main-content">
      <div class="vet-header">
        <h1>Consulta Médica</h1>
        <p class="text-muted">Gestiona tus consultas veterinarias</p>
      </div>

      <div class="consulta-container d-flex justify-content-center gap-4 flex-wrap">
        <AccionCard
          iconoClase="fas fa-plus-circle"
          iconoColor="#27ae60"
          titulo="Nueva consulta"
          descripcion="Registra una nueva consulta médica para un paciente."
          textoBoton="Iniciar Consulta"
          @accion-ejecutada="irANuevaConsulta"
        />
        <AccionCard
          iconoClase="fas fa-edit"
          iconoColor="#2980b9"
          titulo="Editar consulta anterior"
          descripcion="Modifica los datos de una consulta médica ya registrada."
          textoBoton="Modificar consulta"
          @accion-ejecutada="irAEditarConsulta"
        />
      </div>
    </main>
  </div>
</template>

<script>
import VetSidebar from '../components/VetSidebar.vue';
import AccionCard from '../components/AccionCard.vue';
export default {
  name: 'ConsultaMedica',
  components: {
    VetSidebar,
    AccionCard
  },
  methods: {
    irANuevaConsulta() {
      this.$router.push('/consulta-medica-nueva');
    },
    irAEditarConsulta() {
      this.$router.push('/consulta-medica-editar');
    }
  }
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css');
@import '../styles_css/styles_local.css';
@import '../styles_css/bootstrap.min.css';
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');
.consulta-container {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}
</style>
