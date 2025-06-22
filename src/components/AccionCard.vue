<template>
  <div class="vet-card accion-card mb-3 text-center">
    <div class="icono mb-3">
      <i :class="['fa-3x', iconoClase]" :style="{ color: iconoColor }"></i>
    </div>
    <h5>{{ titulo }}</h5>
    <p class="text-muted mb-3">{{ descripcion }}</p>
    <button
      class="btn accion-btn"
      :style="{ backgroundColor: iconoColor, borderColor: iconoColor }"
      @click="accion"
    >
      {{ textoBoton }}
    </button>
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 340px;
  min-width: 340px;
  width: 100%;
  max-width: 400px;
  padding: 40px 32px 32px 32px;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 0 16px rgba(0,0,0,0.12);
  text-align: center;
  box-sizing: border-box;
}

.icono {
  display: flex;
  justify-content: center;
  align-items: center;
}

.accion-card .icono i {
  font-size: 48px;
  margin-bottom: 18px;
  color: #2c3e50;
}

.accion-card h5 {
  margin-bottom: 24px;
  font-size: 26px;
}

.accion-card .mb-3 {
  margin-bottom: 1.2rem !important;
}

.accion-btn {
  display: inline-block;
  padding: 18px 36px;
  margin-top: auto;
  margin-bottom: 0;
  color: #fff;
  border-radius: 10px;
  text-decoration: none;
  transition: background-color 0.3s ease, box-shadow 0.2s;
  border: 2px solid transparent;
  font-size: 1.15em;
  font-weight: 600;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  width: 100%;
  max-width: 260px;
}

.accion-btn:hover {
  filter: brightness(0.92);
  box-shadow: 0 4px 20px rgba(0,0,0,0.12);
}

.text-center {
  text-align: center !important;
}
</style>
