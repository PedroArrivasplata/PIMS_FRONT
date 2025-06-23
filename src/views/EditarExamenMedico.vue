<template>
  <div class="vet-dashboard">
    <VetSidebar />
    <main class="vet-main-content">
      <div class="vet-header">
        <h1>Editar Examen Médico</h1>
        <p class="text-muted">Modifica los datos del examen médico seleccionado</p>
      </div>
      <div class="vet-card" v-if="examen">
        <form @submit.prevent="guardarCambios">
          <div class="vet-form-group">
            <label>Nombre del Examen</label>
            <input v-model="examen.filename" class="vet-form-control" required />
          </div>
          <div class="vet-form-group">
            <label>Fecha</label>
            <input type="date" v-model="examen.fecha" class="vet-form-control" required />
          </div>
          <div class="vet-form-group">
            <label>Consulta Relacionada</label>
            <input v-model="examen.consultaId" class="vet-form-control" />
          </div>
          <div class="vet-form-group">
            <label>Archivo Actual</label>
            <div>
              <button class="vet-btn" @click.prevent="descargarArchivo">Descargar</button>
            </div>
          </div>
          <div class="vet-form-group">
            <label>Reemplazar Archivo</label>
            <input type="file" @change="handleFileChange" class="vet-form-control" />
          </div>
          <div class="vet-form-actions">
            <button type="submit" class="vet-btn primary">Guardar Cambios</button>
            <router-link to="/examenes-medicos" class="vet-btn secondary">Cancelar</router-link>
          </div>
        </form>
      </div>
      <div v-else class="text-muted">Cargando datos del examen...</div>
    </main>
  </div>
</template>

<script>
import VetSidebar from '../components/VetSidebar.vue';
export default {
  name: 'EditarExamenMedico',
  components: { VetSidebar },
  data() {
    return {
      examen: null,
      archivoNuevo: null
    }
  },
  mounted() {
    this.cargarExamen();
  },
  methods: {
    async cargarExamen() {
      const id = this.$route.params.id;
      try {
        // Buscar el examen por ID usando un endpoint dedicado
        const res = await fetch(`http://localhost/repo_oficial/PIMS_BACK/controllers/api_general.php?endpoint=detalle_examen&id=${id}`);
        const data = await res.json();
        if (data && data.id_detalle_examen_consulta) {
          this.examen = {
            id: data.id_detalle_examen_consulta,
            nombre: data.nombre_examen || '', // Si tu backend lo devuelve, si no, usa filename como fallback
            filename: data.filename || '',
            fecha: data.fecha || '',
            consultaId: data.consulta_id_consulta || '',
            examen_generado: data.examen_generado || '',
            formato: data.formato || '',
            tipo_examen_medico_id_tipo_examen_medico: data.tipo_examen_medico_id_tipo_examen_medico || '',
            categoria: data.categoria_examen || '',
            archivoUrl: data.filename ? `http://localhost/repo_oficial/PIMS_BACK/controllers/api_general.php?endpoint=descargar_examen&filename=${encodeURIComponent(data.filename)}` : null
          };
        } else {
          this.examen = null;
        }
      } catch (e) {
        this.examen = null;
      }
    },
    handleFileChange(e) {
      this.archivoNuevo = e.target.files[0] || null;
    },
    descargarArchivo() {
      if (this.examen && this.examen.archivoUrl) {
        fetch(this.examen.archivoUrl)
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
      }
    },
    async guardarCambios() {
      const id = this.examen.id;
      // El backend espera un JSON, no FormData, y los campos: examen_generado, formato, fecha, tipo_examen_medico_id_tipo_examen_medico, filename (opcional)
      const payload = {
        examen_generado: this.examen.examen_generado || '',
        formato: this.examen.formato || '',
        fecha: this.examen.fecha,
        tipo_examen_medico_id_tipo_examen_medico: this.examen.tipo_examen_medico_id_tipo_examen_medico || '',
        filename: this.examen.filename
      };
      try {
        const res = await fetch(`http://localhost/repo_oficial/PIMS_BACK/controllers/api_general.php?endpoint=examen&id=${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
        const data = await res.json();
        if (data.success) {
          alert('Examen actualizado correctamente.');
          this.$router.push('/examenes-medicos');
        } else {
          alert('Error al actualizar examen: ' + (data.error || ''));
        }
      } catch (e) {
        alert('Error de red al actualizar examen.');
      }
    }
  }
}
</script>

<style scoped>
@import '../styles_css/styles_local.css';
@import '../styles_css/bootstrap.min.css';
</style>
