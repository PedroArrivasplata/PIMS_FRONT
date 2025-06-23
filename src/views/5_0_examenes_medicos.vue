<template>
  <div class="vet-dashboard">
    <VetSidebar />
    <main class="vet-main-content scroll-sections">
      <div class="vet-header">
        <div>
          <h1>Exámenes Médicos</h1>
          <p class="text-muted">Gestiona los exámenes médicos de tus pacientes</p>
        </div>
      </div>
      <!-- Sección de búsqueda de mascota -->
      <div class="vet-card">
        <div class="vet-card-header">
          <h3><i class="fas fa-search"></i> Buscar Mascota</h3>
        </div>
        <div class="vet-form-group">
          <label for="busqueda-mascota">Nombre o dni del propietario de la mascota:</label>
          <div class="vet-input-group">
            <input type="text" id="busqueda-mascota" v-model="searchQuery" class="vet-form-control" placeholder="Ej: David o 12345678" />
            <button class="vet-btn" @click="buscarMascotas">
              <i class="fas fa-search"></i> Buscar
            </button>
          </div>
        </div>
      </div>
      <!-- Lista de mascotas recientes -->
      <div class="vet-card" style="margin-top: 20px;">
        <div class="vet-card-header">
          <h3><i class="fas fa-paw"></i> mascotas</h3>
        </div>
        <div class="vet-pets-list">
          <VetPetItem
            v-for="(pet, idx) in pets"
            :key="pet.id"
            :pet="pet"
            :checked="selectedPet === pet.id"
            :radioName="'paciente'"
            @select="selectedPet = pet.id"
          />
          <div v-if="pets.length === 0" class="text-muted" style="padding: 1rem;">No hay mascotas para mostrar.</div>
        </div>
      </div>
      <!-- Formulario de gestión de exámenes médicos -->
      <div class="vet-card" style="margin-top: 20px;">
        <div class="vet-card-header">
          <h3><i class="fas fa-microscope"></i> Gestión de Exámenes Médicos</h3>
        </div>
        <div class="vet-card-section">
          <h4>Información del Examen</h4>
          <form id="form-examen" @submit="registrarExamenMedico">
            <div class="vet-form-row">
              <div class="vet-form-group">
                <label for="nombre-examen">Nombre del Examen Médico *</label>
                <input type="text" id="nombre-examen" class="vet-form-control" v-model="examenForm.nombre" required placeholder="Ej: Hematología completa">
              </div>
              <div class="vet-form-group">
                <label for="tipo-examen">Tipo de Examen *</label>
                <select id="tipo-examen" class="vet-form-control" v-model="examenForm.tipo" required>
                  <option value="">Seleccione un tipo</option>
                  <option v-for="tipo in tiposExamen" :key="tipo.id_tipo_examen_medico" :value="tipo.id_tipo_examen_medico">
                    {{ tipo.id_tipo_examen_medico }} - {{ tipo.categoria_examen }}
                  </option>
                </select>
              </div>
              <div class="vet-form-group">
                <label for="fecha-examen">Fecha del Examen *</label>
                <input type="date" id="fecha-examen" class="vet-form-control" v-model="examenForm.fecha" required>
              </div>
            </div>
            <div class="vet-form-row">
              <div class="vet-form-group">
                <label for="consulta-relacionada">Consulta Relacionada</label>
                <select id="consulta-relacionada" class="vet-form-control" v-model="examenForm.consulta" :disabled="!consultasRelacionadas.length">
                  <option value="" v-if="!consultasRelacionadas.length">Seleccione una consulta</option>
                  <option v-for="consulta in consultasRelacionadas" :key="consulta.id_consulta" :value="consulta.id_consulta">
                    {{ consulta.id_consulta }} - {{ consulta.fecha_cita }} ({{ consulta.definicion_consulta }} - {{ consulta.tipo_consulta }})
                  </option>
                </select>
              </div>
              
            </div>
            <div class="vet-form-group">
              <label for="resultado-examen">Resultado del Examen (Archivo) *</label>
              <input type="file" id="resultado-examen" class="vet-form-control" accept=".pdf,.jpg,.jpeg,.png" @change="handleFileChange" required>
              <small class="text-muted">Formatos aceptados: PDF, JPG, PNG (Tamaño máximo: 5MB)</small>
            </div>

            <div class="vet-form-actions">
              <button type="button" class="vet-btn secondary" :disabled="loadingExamen" @click="limpiarFormulario">
                <i class="fas fa-times"></i> Cancelar
              </button>
              <button type="submit" class="vet-btn" :disabled="loadingExamen">
                <i class="fas fa-save"></i> Guardar Examen
              </button>
            </div>
          </form>
        </div>
        <!-- Lista de exámenes existentes -->
        <div class="vet-card-section">
          <div class="d-flex justify-content-between align-items-center">
            <h4>Exámenes Registrados</h4>
            
          </div>
          <div class="vet-examenes-list" style="margin-top: 15px;">
            <ExamenCard
              v-for="examen in examenList"
              :key="examen.id"
              :examen="examen"
              @delete-examen="onDeleteExamen"
            />
            <div v-if="examenList.length === 0" class="text-muted" style="padding: 1rem;">No hay exámenes registrados.</div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import VetSidebar from '../components/VetSidebar.vue';
import VetPetItem from '../components/VetPetItem.vue';
import ExamenCard from '../components/ExamenCard.vue';

const ICONO_MASCOTA = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///8AAAAmJibt7e2urq7p6emfn584ODhcXFz6+vrZ2dmbm5tDQ0M1NTX29vbm5ubFxcW9vb1lZWXx8fFLS0vNzc1zc3Pg4OCjo6OOjo7BwcGIiIh/f3+ysrJbW1vV1dUTExN3d3ctLS0bGxsaGhpOTk6Tk5M+Pj4iIiIMDAyCgoJsbGwliqaVAAAKqElEQVR4nO2d6ZaqMAyAVdxwQRRRdNxw1HF5//e7NgVk6UIhIPecfn/uHWWYhqZJmqal1dJoNBqNRqPRaDQajUaj0Wg0Go1Go9FoNBqNRqPRaDRJ/gHGCnsD0T8bHAAAAABJRU5ErkJggg==';

export default {
  name: 'ExamenesMedicos',
  components: {
    VetSidebar,
    VetPetItem,
    ExamenCard
  },
  data() {
    return {
      pets: [],
      selectedPet: null,
      searchQuery: '',
      examenForm: {
        nombre: '', // nuevo campo para el nombre del examen
        tipo: '',
        fecha: '',
        consulta: '',
        estado: 'completado',
        archivo: null,
        observaciones: ''
      },
      loadingExamen: false,
      tiposExamen: [],
      consultasRelacionadas: [],
      examenList: [
      ],
    }
  },
  watch: {
    selectedPet(newVal) {
      if (newVal) {
        this.cargarConsultasPorMascota(newVal);
        this.cargarExamenesPorMascota(newVal);
      } else {
        this.consultasRelacionadas = [];
        this.examenForm.consulta = '';
        this.examenList = [];
      }
    }
  },
  mounted() {
    this.cargarTiposExamen();
    if (this.selectedPet) {
      this.cargarExamenesPorMascota(this.selectedPet);
    }
  },
  methods: {
    async cargarTiposExamen() {
      try {
        const res = await fetch('http://localhost/repo_oficial/PIMS_BACK/controllers/api_casos_base.php?endpoint=tipos_examen');
        const data = await res.json();
        this.tiposExamen = Array.isArray(data) ? data : [];
      } catch (e) {
        this.tiposExamen = [];
      }
    },
    async cargarConsultasPorMascota(idMascota) {
      this.consultasRelacionadas = [];
      this.examenForm.consulta = '';
      if (!idMascota) return;
      try {
        const res = await fetch(`http://localhost/repo_oficial/PIMS_BACK/controllers/api_casos_base.php?endpoint=consultas_por_mascota&id_mascota=${idMascota}`);
        const data = await res.json();
        this.consultasRelacionadas = Array.isArray(data) ? data : (data && data.consultas ? data.consultas : []);
      } catch (e) {
        this.consultasRelacionadas = [];
      }
    },
    async cargarExamenesPorMascota(idMascota) {
      this.examenList = [];
      if (!idMascota) return;
      try {
        const res = await fetch(`http://localhost/repo_oficial/PIMS_BACK/controllers/api_general.php?endpoint=examenes_por_mascota&id_mascota=${idMascota}`);
        const data = await res.json();
        this.examenList = Array.isArray(data) ? data.map(ex => ({
          id: ex.id_detalle_examen_consulta,
          filename: ex.filename,
          fecha: ex.fecha,
          tipo: ex.tipo_examen_medico_id_tipo_examen_medico,
          categoria: ex.categoria_examen,
          consultaId: ex.consulta_id_consulta,
          examen_generado: ex.examen_generado,
          formato: ex.formato,
          archivoUrl: ex.filename ? `http://localhost/repo_oficial/PIMS_BACK/controllers/api_general.php?endpoint=descargar_examen&filename=${encodeURIComponent(ex.filename)}` : null,
          estado: 'Completado'
        })) : [];
      } catch (e) {
        this.examenList = [];
      }
    },
    async buscarMascotas() {
      console.log('Buscando mascotas...'); // <-- Debug inicio
      let url;
      const input = this.searchQuery.trim();
      if (!input) {
        // Input vacío: usar API de todas las mascotas
        url = `http://localhost/repo_oficial/PIMS_BACK/controllers/api_general.php?endpoint=todas_mascotas&query=`;
      } else if (/^\d+$/.test(input)) {
        // Solo números: buscar por DNI
        url = `http://localhost/repo_oficial/PIMS_BACK/controllers/api_general.php?endpoint=mascotas_propietario_flexible&dni=${encodeURIComponent(input)}`;
      } else {
        // Texto: buscar por nombre
        url = `http://localhost/repo_oficial/PIMS_BACK/controllers/api_general.php?endpoint=mascotas_propietario_flexible&nombre=${encodeURIComponent(input)}`;
      }
      try {
        const res = await fetch(url);
        console.log('Respuesta fetch:', res); // <-- Debug fetch
        let data;
        try {
          data = await res.json();
        } catch (jsonErr) {
          console.error('No se pudo parsear JSON:', jsonErr);
          data = null;
        }
        console.log('Respuesta API:', data); // <-- Debug
        const mascotas = Array.isArray(data) ? data : (data && data.mascotas ? data.mascotas : []);
        this.pets = mascotas.map(mascota => ({
          id: mascota.id_mascota,
          name: mascota.nombre,
          breed: mascota.raza,
          age: (mascota.edad ? mascota.edad + ' años' : ''),
          img: ICONO_MASCOTA,
          propietario: mascota.propietario || 'Desconocido'
        }));
        this.selectedPet = this.pets.length > 0 ? this.pets[0].id : null;
      } catch (e) {
        console.error('Error al cargar mascotas:', e);
        this.pets = [];
        this.selectedPet = null;
      }
    },
    limpiarFormulario() {
      this.selectedPet = null;
      this.pets = [];
      this.searchQuery = '';
      this.consultasRelacionadas = [];
      this.examenForm = {
        nombre: '',
        tipo: '',
        fecha: '',
        consulta: '',
        estado: 'completado',
        archivo: null,
        observaciones: ''
      };
      const fileInput = document.getElementById('resultado-examen');
      if (fileInput) fileInput.value = '';
    },
    handleFileChange(e) {
      this.examenForm.archivo = e.target.files[0] || null;
    },
    async registrarExamenMedico(e) {
      e.preventDefault();
      if (!this.selectedPet) {
        alert('Seleccione una mascota.');
        return;
      }
      if (!this.examenForm.nombre || !this.examenForm.tipo || !this.examenForm.fecha || !this.examenForm.archivo) {
        alert('Complete todos los campos obligatorios.');
        return;
      }
      this.loadingExamen = true;
      const formData = new FormData();
      const tipoExamenObj = this.tiposExamen.find(t => t.id_tipo_examen_medico == this.examenForm.tipo);
      // Renombrar archivo con el nombre del examen
      let archivoFinal = this.examenForm.archivo;
      try {
        const extension = archivoFinal.name.split('.').pop();
        const nombreLimpio = this.examenForm.nombre.replace(/[^a-zA-Z0-9_\-]/g, '_');
        archivoFinal = new File([archivoFinal], `${nombreLimpio}.${extension}`, { type: archivoFinal.type });
      } catch (err) { /* fallback: usar archivo original */ }
      formData.append('nombre_examen', this.examenForm.nombre);
      formData.append('examen_generado', tipoExamenObj ? tipoExamenObj.tipo_examen : '');
      formData.append('formato', archivoFinal.type);
      formData.append('fecha', this.examenForm.fecha);
      formData.append('tipo_examen_id', this.examenForm.tipo);
      formData.append('consulta_id', this.examenForm.consulta || '');
      formData.append('archivo', archivoFinal);
      formData.append('id_mascota', this.selectedPet);
      try {
        const res = await fetch('http://localhost/repo_oficial/PIMS_BACK/controllers/api_general.php?endpoint=examen', {
          method: 'POST',
          body: formData
        });
        const data = await res.json();
        if (data.success) {
          alert('Examen registrado correctamente.');
          this.limpiarFormulario();
          if (this.selectedPet) {
            await this.cargarExamenesPorMascota(this.selectedPet);
          }
        } else {
          alert('Error al registrar examen: ' + (data.error || ''));
        }
      } catch (err) {
        alert('Error de red al registrar examen.');
      } finally {
        this.loadingExamen = false;
      }
    },
    async onDeleteExamen(id) {
      if (!confirm('¿Está seguro de que desea eliminar este examen médico?')) return;
      try {
        const res = await fetch(`http://localhost/repo_oficial/PIMS_BACK/controllers/api_general.php?endpoint=examen&id=${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await res.json();
        if (data.success) {
          alert('Examen eliminado correctamente.');
          if (this.selectedPet) {
            await this.cargarExamenesPorMascota(this.selectedPet);
          }
        } else {
          alert('Error al eliminar examen: ' + (data.error || ''));
        }
      } catch (e) {
        alert('Error de red al eliminar examen.');
      }
    },

  }
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css');
@import '../styles_css/styles_local.css';
@import '../styles_css/bootstrap.min.css';
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');
</style>
