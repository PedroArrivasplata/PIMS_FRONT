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
            <input v-model="examen.nombre" class="vet-form-control" required />
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
              <button class="vet-btn" @click.prevent="verArchivo">Ver</button>
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
        const res = await fetch(`http://localhost/repo_oficial/PIMS_BACK/controllers/api_general.php?endpoint=examen_detalle&id_examen=${id}`);
        const data = await res.json();
        this.examen = {
          id: data.id_examen,
          nombre: data.nombre_examen,
          fecha: data.fecha,
          consultaId: data.consulta_id,
          archivoUrl: data.archivo_url
        };
      } catch (e) {
        this.examen = null;
      }
    },
    handleFileChange(e) {
      this.archivoNuevo = e.target.files[0] || null;
    },
    verArchivo() {
      if (this.examen && this.examen.archivoUrl) {
        window.open(this.examen.archivoUrl, '_blank');
      }
    },
    descargarArchivo() {
      if (this.examen && this.examen.archivoUrl) {
        const link = document.createElement('a');
        link.href = this.examen.archivoUrl;
        link.download = this.examen.nombre;
        link.click();
      }
    },
    async guardarCambios() {
      // Implementar lógica de guardado real
      alert('Cambios guardados (simulado)');
      this.$router.push('/examenes-medicos');
    }
  }
}
</script>

<style scoped>
@import '../styles_css/styles_local.css';
@import '../styles_css/bootstrap.min.css';
</style>
