<template>
  <div
    class="mascota-card"
    :class="{ 'mascota-card-selected': isSelected }"
    @click="$emit('select-mascota', mascota.id)"
  >
    {{ mascota.nombre }} ({{ mascota.especie }})
  </div>
</template>

<script>
export default {
  name: 'MascotaCard',
  props: {
    mascota: {
      type: Object,
      required: true,
      validator: (value) => value.id && value.nombre && value.especie,
    },
    selectedMascotaId: {
      type: [Number, null],
      default: null,
    },
  },
  computed: {
    isSelected() {
      return this.mascota.id === this.selectedMascotaId;
    },
  },
};
</script>

<style scoped>
.mascota-card {
  padding: 10px 15px;
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease;
  font-weight: 500;
  color: #555;
}

.mascota-card:hover {
  background-color: #e2f0fb;
  border-color: #a4d8ff;
}

.mascota-card-selected {
  background-color: #e3f2fd !important; /* Color de selección */
  border-color: #3498db !important;
  box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
  font-weight: bold;
  color: #34495e;
}
</style>