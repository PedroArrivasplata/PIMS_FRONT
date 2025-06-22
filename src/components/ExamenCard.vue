<template>
  <div class="vet-card vet-card-examen mb-3">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h5>{{ examen.nombre }}</h5>
        <p class="text-muted">Realizado el {{ examen.fecha }} - Consulta #{{ examen.consultaId }}</p>
      </div>
      <div>
        <a href="#" class="vet-btn-icon" title="Ver resultado" @click.prevent="viewResult">
          <i class="fas fa-eye"></i>
        </a>
        <a href="#" class="vet-btn-icon" title="Descargar" @click.prevent="downloadExamen">
          <i class="fas fa-download"></i>
        </a>
        <router-link :to="`/editar-examen-medico/${examen.id}`" class="vet-btn-icon" title="Editar">
          <i class="fas fa-edit"></i>
        </router-link>
        <a href="#" class="vet-btn-icon" style="color: #e74c3c;" title="Eliminar" @click.prevent="$emit('delete-examen', examen.id)">
          <i class="fas fa-trash"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExamenMedicoCard',
  props: {
    examen: {
      type: Object,
      required: true,
      default: () => ({
        id: null,
        nombre: 'Examen Desconocido',
        fecha: 'N/A',
        consultaId: 'N/A'
      })
    }
  },
  methods: {
    viewResult() {
      alert(`Ver resultado del examen: ${this.examen.nombre}`);
      // Lógica para ver el resultado.
    },
    downloadExamen() {
      alert(`Descargar examen: ${this.examen.nombre}`);
      // Lógica para descargar el archivo del examen.
    }
  }
}
</script>

