<template>
  <div class="vet-header">
    <div>
      <h1>Bienvenido, {{ userName }}</h1>
      <p class="text-muted">{{ currentDate }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardHeader',
  data() {
    return {
      userName: 'Dr. Veterinario',
      currentDate: new Date().toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    };
  },
};
</script>

