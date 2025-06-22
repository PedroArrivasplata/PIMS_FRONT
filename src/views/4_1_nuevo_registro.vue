<template>
  <div class="vet-dashboard">
    <VetSidebar />
    <main class="vet-main-content">
      <div class="vet-header">
        <h1>Iniciar Consulta</h1>
        <p class="text-muted">Registra los detalles clínicos de la atención</p>
      </div>

      <div class="consulta-form">
        <form @submit.prevent="onSubmit">
          <div class="full-width">
            <label for="motivo">Motivo de la Atención:</label>
            <input type="text" id="motivo" v-model="form.motivo" />
          </div>

          <div class="full-width">
            <label for="sintomas">Síntomas:</label>
            <textarea id="sintomas" v-model="form.sintomas"></textarea>
          </div>

          <div class="full-width">
            <label for="observaciones">Observaciones:</label>
            <textarea id="observaciones" v-model="form.observaciones"></textarea>
          </div>

          <div class="full-width">
            <label for="diagnostico">Diagnóstico:</label>
            <textarea id="diagnostico" v-model="form.diagnostico"></textarea>
          </div>

          <div class="full-width">
            <label for="tratamiento">Tratamiento:</label>
            <textarea id="tratamiento" v-model="form.tratamiento"></textarea>
          </div>

          <div>
            <label for="vacunas">Vacunas Aplicadas:</label>
            <input type="text" id="vacunas" v-model="form.vacunas" placeholder="Dejar en blanco si no se aplicó ninguna" />
          </div>

          <div>
            <label for="tipo">Tipo de Consulta:</label>
            <select id="tipo" v-model="form.tipo">
              <option value="">Seleccione</option>
              <option>Consulta General</option>
              <option>Emergencia</option>
              <option>Vacunación</option>
              <option>Revisión Postoperatoria</option>
              <option>Otro</option>
            </select>
          </div>

          <div>
            <label for="veterinario">Nombre del Veterinario:</label>
            <select id="veterinario" v-model="form.veterinario" required>
              <option value="" disabled>Seleccione un nombre</option>
              <option value="Eduardo">Eduardo</option>
              <option value="Joao">Joao</option>
            </select>
          </div>

          <div>
            <label for="fecha">Fecha de Atención:</label>
            <input type="date" id="fecha" v-model="form.fecha" />
          </div>

          <button type="submit">Registrar Consulta</button>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
import VetSidebar from '../components/VetSidebar.vue';

export default {
  name: 'NuevoRegistro',
  components: {
    VetSidebar
  },
  data() {
    return {
      form: {
        motivo: '',
        sintomas: '',
        observaciones: '',
        diagnostico: '',
        tratamiento: '',
        vacunas: '',
        tipo: '',
        veterinario: '',
        fecha: ''
      }
    }
  },
  methods: {
    onSubmit() {
      // Aquí puedes manejar el envío del formulario
      alert('Consulta registrada (demo)');
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
</style>
