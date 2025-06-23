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
        <a href="#" class="vet-btn-icon" title="Eliminar" @click.prevent="emitDelete">
          <i class="fas fa-trash-alt" style="color: #d9534f;"></i>
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
      if (this.examen.archivoUrl) {
        fetch(this.examen.archivoUrl, {
          method: 'GET',
          // No headers ni credentials para evitar CORS o bloqueos innecesarios
        })
          .then(response => {
            if (!response.ok) throw new Error('No se pudo descargar el archivo');
            const disposition = response.headers.get('Content-Disposition');
            let filename = this.examen.filename || 'examen';
            if (disposition && disposition.indexOf('filename=') !== -1) {
              const match = disposition.match(/filename="?([^";]+)"?/);
              if (match && match[1]) filename = match[1];
            }
            return response.blob().then(blob => ({ blob, filename }));
          })
          .then(({ blob, filename }) => {
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            setTimeout(() => {
              window.URL.revokeObjectURL(url);
              document.body.removeChild(link);
            }, 100);
          })
          .catch(() => {
            alert('No se pudo descargar el archivo.');
          });
      } else {
        alert('No hay archivo disponible para descargar.');
      }
    },
    emitDelete() {
      this.$emit('delete-examen', this.examen.id);
    }
  }
}
</script>

