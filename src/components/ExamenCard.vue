<template>
  <div class="vet-card vet-card-examen mb-3">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h5>{{ examen.filename }}</h5>
        <p class="text-muted">Realizado el {{ examen.fecha }} - Consulta #{{ examen.consultaId }}</p>
        <p class="mb-0"><strong>Tipo:</strong> {{ examen.categoria }} <span v-if="examen.examen_generado">- {{ examen.examen_generado }}</span></p>
      </div>
      <div>
        <a href="#" class="vet-btn-icon" title="Descargar" @click.prevent="downloadExamen">
          <i class="fas fa-download"></i>
        </a>
        <router-link :to="`/editar-examen-medico/${examen.id}`" class="vet-btn-icon" title="Editar">
          <i class="fas fa-edit"></i>
        </router-link>
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
        filename: 'Examen Desconocido',
        fecha: 'N/A',
        consultaId: 'N/A',
        categoria: '',
        examen_generado: '',
        archivoUrl: '',
        formato: ''
      })
    }
  },
  methods: {
    viewResult() {
      // Abrir el archivo en una nueva ventana/pestaña
      if (this.examen.archivoUrl) {
        window.open(this.examen.archivoUrl, '_blank');
      } else {
        alert('No hay archivo disponible para visualizar.');
      }
    },
    downloadExamen() {
      // Descargar el archivo
      if (this.examen.archivoUrl) {
        const link = document.createElement('a');
        link.href = this.examen.archivoUrl;
        link.download = this.examen.filename;
        link.click();
      } else {
        alert('No hay archivo disponible para descargar.');
      }
    }
  }
}
</script>

