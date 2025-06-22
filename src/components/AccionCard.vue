<template>
  <div class="vet-card accion-card mb-3 text-center">
    <div>
      <div class="icono mb-3">
        <i :class="['fa-3x', iconoClase]" :style="{ color: iconoColor }"></i>
      </div>
      <h5>{{ titulo }}</h5>
      <p class="text-muted mb-3">{{ descripcion }}</p>
      <button class="btn btn-success" @click="accion">
        {{ textoBoton }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccionCard',
  props: {
    iconoClase: {
      type: String,
      default: 'fas fa-plus-circle'
    },
    iconoColor: {
      type: String,
      default: '#2c3e50'
    },
    titulo: {
      type: String,
      default: 'Nueva acción'
    },
    descripcion: {
      type: String,
      default: ''
    },
    textoBoton: {
      type: String,
      default: 'Ejecutar'
    }
  },
  methods: {
    accion() {
      this.$emit('accion-ejecutada');
    }
  }
}
</script>

<style scoped>
.accion-card {
  padding: 24px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  width: 240px;
}
</style>
