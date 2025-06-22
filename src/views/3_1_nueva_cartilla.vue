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
      <router-link to="/login" class="vet-logout"><i class="fas fa-sign-out-alt"></i> Cerrar sesión</router-link>
    </aside>
    <main class="dividir-pantalla">
      <!-- Sección izquierda: Buscar por DNI -->
      <section class="vet-search-section">
        <h3><i class="fas fa-search"></i> Buscar mascotas</h3>
        <label for="dni">DNI del Propietario:</label>
        <input type="text" id="dni" v-model="dni" class="vet-form-control" placeholder="Ingrese DNI"/>
        <button @click="buscarMascotas" class="vet-btn"><i class="fas fa-search"></i> Buscar</button>
        <div id="lista-mascotas">
          <div v-if="mascotas.length">
            <div v-for="mascota in mascotas" :key="mascota" class="mascota-card" :class="{selected: mascota === mascotaSeleccionada}" @click="seleccionarMascota(mascota)">{{ mascota }}</div>
          </div>
          <p v-else>No se encontraron mascotas.</p>
        </div>
      </section>
      <!-- Sección derecha: Formulario de vacunación -->
      <section class="vet-vaccine-form-section">
        <h3><i class="fas fa-syringe"></i> Nueva cartilla de vacunación</h3>
        <form @submit.prevent="guardarCartilla">
          <div id="lista-vacunas">
            <div class="vaccine-row" style="font-weight: bold; border-bottom: 2px solid #3498db;">
              <div>Vacuna</div>
              <div>Fecha de aplicación</div>
              <div>Próxima dosis</div>
            </div>
            <div v-for="(vacuna, index) in vacunas" :key="index" class="vaccine-row">
              <label>
                <input type="checkbox" v-model="vacuna.checked" @change="toggleFechas(vacuna, index)"/>
                {{ vacuna.nombre }}
              </label>
              <input type="date" v-model="vacuna.fecha" :disabled="!vacuna.checked">
              <input type="date" v-model="vacuna.proxima" :disabled="!vacuna.checked">
            </div>
          </div>
          <button type="submit" class="vet-btn"><i class="fas fa-save"></i> Guardar</button>
        </form>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'NuevaCartilla',
  data() {
    return {
      dni: '',
      mascotas: [],
      mascotaSeleccionada: '',
      vacunas: [
        { nombre: "Parvovirus", checked: false, fecha: '', proxima: '' },
        { nombre: "Coronavirus", checked: false, fecha: '', proxima: '' },
        { nombre: "Distemper (Moquillo)", checked: false, fecha: '', proxima: '' },
        { nombre: "Hepatitis Canina", checked: false, fecha: '', proxima: '' },
        { nombre: "Parainfluenza", checked: false, fecha: '', proxima: '' },
        { nombre: "Leptospira", checked: false, fecha: '', proxima: '' },
        { nombre: "Tos de las perreras", checked: false, fecha: '', proxima: '' },
        { nombre: "Rabia", checked: false, fecha: '', proxima: '' },
        { nombre: "Leucemia Felina", checked: false, fecha: '', proxima: '' },
        { nombre: "Rinotraqueitis", checked: false, fecha: '', proxima: '' },
        { nombre: "Calicivirus", checked: false, fecha: '', proxima: '' },
        { nombre: "Panleucopenia", checked: false, fecha: '', proxima: '' }
      ]
    }
  },
  methods: {
    buscarMascotas() {
      // Simulación de búsqueda, reemplazar con llamada real a API
      if (this.dni === '12345678') {
        this.mascotas = ['Firulais', 'Mishi'];
      } else if (this.dni) {
        this.mascotas = ['Mascota de ' + this.dni];
      } else {
        this.mascotas = [];
      }
      this.mascotaSeleccionada = '';
    },
    seleccionarMascota(nombre) {
      this.mascotaSeleccionada = nombre;
    },
    toggleFechas(vacuna, index) {
      if (vacuna.checked) {
        const today = new Date().toISOString().split('T')[0];
        vacuna.fecha = today;
        const nextYear = new Date();
        nextYear.setFullYear(nextYear.getFullYear() + 1);
        vacuna.proxima = nextYear.toISOString().split('T')[0];
      } else {
        vacuna.fecha = '';
        vacuna.proxima = '';
      }
    },
    guardarCartilla() {
      alert('Cartilla de vacunación guardada correctamente');
      // Aquí iría la lógica para guardar los datos
    }
  }
}
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
@import '../styles_css/styles_local.css';
@import '../styles_css/iconos.css';
.selected {
  background-color: #e3f2fd !important;
}
</style>
