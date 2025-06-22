<template>
  <div class="vet-dashboard">
    <VetSidebar />
    <main class="vet-main-content">
      <div id="calendar"></div>
    </main>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import VetSidebar from '../components/VetSidebar.vue';

export default {
  name: 'Agenda',
  components: {
    VetSidebar
  },
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
