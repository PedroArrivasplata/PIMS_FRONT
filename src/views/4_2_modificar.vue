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
        <h1>Editar consulta médica</h1>
      </div>
      <!-- Aquí puedes agregar el formulario o componentes para edicar consulta medica-->
      <div class="vet-main-content">
        <div class="vet-header">
          <div>
            <h1>Editar Consulta</h1>
            <p class="text-muted">Actualiza los detalles clínicos registrados</p>
          </div>
        </div>
        <div class="consulta-form">
          <form @submit.prevent="guadarCambios">
            <div class="full-width">
              <label for="motivo">Motivo de la Atención:</label>
              <input type="text" v-model="consulta.motivo" id="motivo" />
            </div>

            <div class="full-width">
              <label for="sintomas">Síntomas:</label>
              <textarea id="sintomas" v-model="consulta.sintomas"></textarea>
            </div>

            <div class="full-width">
              <label for="observaciones">Observaciones:</label>
              <textarea id="observaciones" v-model="consulta.observaciones"></textarea>
            </div>

            <div class="full-width">
               <label for="diagnostico">Diagnóstico:</label>
              <textarea id="diagnostico" v-model="consulta.diagnostico"></textarea>
            </div>

            <div class="full-width">
              <label for="tratamiento">Tratamiento:</label>
              <textarea id="tratamiento" v-model="consulta.tratamiento"></textarea>
            </div>

            <div>
              <label for="vacunas">Vacunas Aplicadas:</label>
              <input type="text" id="vacunas" v-model="consulta.vacunas"/>
            </div>
               
            <div>
              <label for="tipo">Tipo de Consulta:</label>
              <select id="tipo" v-model="consulta.tipo">
                <option value="Consulta General">Consulta General</option>
                <option value="Emergencia">Emergencia</option>
                <option value="Vacunación">Vacunación</option>
                <option value="Revisión Postoperatoria">Revisión Postoperatoria</option>
                <option value="otros">Otro</option>
              </select>
            </div>

            <div>
              <label for="veterinario">Nombre del Veterinario:</label>
              <select id="veterinario" v-model="consulta.veterinario" required>
                <option value="Eduardo">Eduardo</option>
                <option value="Joao">Joao</option>
              </select>
            </div>

            <div>
              <label for="fecha">Fecha de Atención:</label>
              <input type="date" id="fecha" v-model="consulta.fecha" />
            </div>

            <button type="submit">Guardar Cambios</button>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'ModificarConsulta',

  data() {
    return {
      consulta: {
        motivo: 'Dolor en la pata trasera',
        sintomas: 'Cojea al caminar. No apoya bien la pata.',
        observaciones: 'Se observa leve inflamación en la articulación.',
        diagnostico: 'Posible esguince articular.',
        tratamiento: 'Reposo y antiinflamatorios por 5 días.',
        vacunas: '',
        tipo: 'Emergencia',
        veterinario: 'Eduardo',
        fecha: '2025-06-21'
      }
    };
  },

  methods: {
    guardarCambios() {
      // Aquí puedes enviar los datos al servidor o realizar otra lógica
      console.log('Consulta guardada:', this.consulta);
      alert('Cambios guardados correctamente.');
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
