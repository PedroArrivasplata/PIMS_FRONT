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
        <li> <i class="fas fa-home"> </i> <router-link to="/inicio"> Inicio</router-link></li>
        <!-- Cambiado de href a router-link, ruta: /agenda -->
        <li><router-link to="/agenda" class="active"><i class="fas fa-calendar-alt"></i> Agenda</router-link></li>
        <!-- Cambiado de href a router-link, ruta: /cartilla-vacunacion -->
        <li><router-link to="/cartilla-vacunacion"><i class="fas fa-syringe"></i> Cartilla de Vacunación</router-link></li>
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
      <div id="calendar"></div>
    </main>
  </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
  name: 'Agenda',
  setup() {
    onMounted(() => {
      // FullCalendar global import
      const calendarEl = document.getElementById('calendar');
      if (calendarEl && window.FullCalendar) {
        const calendar = new window.FullCalendar.Calendar(calendarEl, {
          initialView: 'dayGridMonth',
          headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          },
          locale: 'es',
          buttonText: {
            today: 'Hoy',
            month: 'Mes',
            week: 'Semana',
            day: 'Día'
          }
        });
        calendar.render();
      }
    });
  }
}
</script>

<style>
@import '../styles_css/styles_local.css';
@import '../styles_css/iconos.css';
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
@import url('https://cdn.jsdelivr.net/npm/fullcalendar@6.1.17/main.min.css');
</style>

<!-- Agrega en tu index.html el script de FullCalendar para que esté disponible globalmente -->
<!-- <script src='https://cdn.jsdelivr.net/npm/fullcalendar@6.1.17/index.global.min.js'></script> -->
