<template>
  <div class="vet-dashboard">
    <VetSidebar />
    <main class="vet-main-content scroll-sections">
      <div class="vet-header d-flex justify-content-between align-items-center">
        <div>
          <h1>Editar examen médico</h1>
          <p class="text-muted">Actualiza la información del examen médico</p>
        </div>
        <router-link to="/examenes-medicos" class="vet-btn secondary">
          <i class="fas fa-arrow-left"></i> Volver
        </router-link>
      </div>
      <!-- Información de la mascota -->
      <div class="vet-card">
        <div class="vet-card-header">
          <h3><i class="fas fa-paw"></i> Paciente</h3>
        </div>
        <div class="vet-pet-info">
          <img src="../assets/mascota_1.jpg" alt="Max" class="vet-pet-avatar">
          <div>
            <h3>Max</h3>
            <p class="text-muted">Labrador Retriever - 3 años</p>
            <p><strong>ID:</strong> MV-001</p>
            <p><strong>Propietario:</strong> Juan Pérez</p>
          </div>
        </div>
      </div>
      <!-- Formulario de edición de examen -->
      <div class="vet-card" style="margin-top: 20px;">
        <div class="vet-card-header">
          <h3><i class="fas fa-edit"></i> Editar examen médico</h3>
          <p class="text-muted">ID del examen: EXM-2025-001</p>
        </div>
        <form @submit.prevent="onSubmit" id="form-editar-examen">
          <div class="vet-card-section">
            <div class="vet-form-row">
              <div class="vet-form-group">
                <label for="edit-tipo-examen">Tipo de examen *</label>
                <select id="edit-tipo-examen" class="vet-form-control" v-model="form.tipo" required>
                  <option value="hematologia">Hematología completa</option>
                  <option value="bioquimico">Perfil bioquímico</option>
                  <option value="orina">Análisis de orina</option>
                  <option value="heces">Análisis de heces</option>
                  <option value="radiografia">Radiografía</option>
                  <option value="ecografia">Ecografía</option>
                  <option value="otros">Otros</option>
                </select>
              </div>
              <div class="vet-form-group">
                <label for="edit-fecha-examen">Fecha del examen *</label>
                <input type="date" id="edit-fecha-examen" class="vet-form-control" v-model="form.fecha" required>
              </div>
            </div>
            <div class="vet-form-row">
              <div class="vet-form-group">
                <label for="edit-consulta-relacionada">Consulta relacionada</label>
                <select id="edit-consulta-relacionada" class="vet-form-control" v-model="form.consulta">
                  <option value="">Seleccione una consulta</option>
                  <option value="consulta-001">Consulta #001 - 15/04/2025 (Control rutinario)</option>
                  <option value="consulta-002">Consulta #002 - 10/03/2025 (Vacunación anual)</option>
                </select>
              </div>
              <div class="vet-form-group">
                <label for="edit-estado-examen">Estado del examen</label>
                <select id="edit-estado-examen" class="vet-form-control" v-model="form.estado">
                  <option value="pendiente">Pendiente</option>
                  <option value="completado">Completado</option>
                  <option value="cancelado">Cancelado</option>
                </select>
              </div>
            </div>
          </div>
          <div class="vet-card-section">
            <div class="vet-form-group">
              <label>Resultado actual</label>
              <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                <i class="fas fa-file-pdf" style="font-size: 24px; color: #e74c3c;"></i>
                <span>hematologia_max_15042025.pdf</span>
                <a href="#" class="vet-btn-icon" title="Descargar">
                  <i class="fas fa-download"></i>
                </a>
                <a href="#" class="vet-btn-icon" title="Ver">
                  <i class="fas fa-eye"></i>
                </a>
              </div>
              <label for="edit-resultado-examen">Actualizar resultado (opcional)</label>
              <input type="file" id="edit-resultado-examen" class="vet-form-control" accept=".pdf,.jpg,.jpeg,.png">
              <small class="text-muted">Formatos aceptados: PDF, JPG, PNG (Tamaño máximo: 5MB)</small>
            </div>
            <div class="vet-form-group">
              <label for="edit-observaciones">Observaciones</label>
              <textarea id="edit-observaciones" class="vet-form-control" rows="4" v-model="form.observaciones"></textarea>
            </div>
          </div>
          <div class="vet-card-footer">
            <div>
              <button type="submit" class="vet-btn">
                <i class="fas fa-save"></i> Guardar cambios
              </button>
              <button type="button" class="vet-btn alert" @click="showDeleteModal = true">
                <i class="fas fa-trash"></i> Eliminar examen
              </button>
              <router-link to="/examenes-medicos" class="vet-btn secondary">
                <i class="fas fa-times"></i> Cancelar
              </router-link>
            </div>
          </div>
        </form>
      </div>
      <!-- Historial de modificaciones -->
      <div class="vet-card" style="margin-top: 20px;">
        <div class="vet-card-header">
          <h3><i class="fas fa-history"></i> Historial de modificaciones</h3>
        </div>
        <div style="padding: 20px;">
          <div style="display: flex; gap: 15px; margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #eee;">
            <div style="width: 40px; height: 40px; background-color: #f8f9fa; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
              <i class="fas fa-user-md" style="color: #3498db;"></i>
            </div>
            <div style="flex: 1;">
              <p><strong>Dr. Veterinario</strong> - 15/04/2025 10:30 AM</p>
              <p class="text-muted">Creación del examen médico</p>
            </div>
          </div>
          <div style="display: flex; gap: 15px;">
            <div style="width: 40px; height: 40px; background-color: #f8f9fa; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
              <i class="fas fa-user-md" style="color: #3498db;"></i>
            </div>
            <div style="flex: 1;">
              <p><strong>Dr. Veterinario</strong> - 16/04/2025 09:15 AM</p>
              <p class="text-muted">Actualización de resultados y observaciones</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal de confirmación para eliminar -->
      <div v-if="showDeleteModal" class="modal-overlay">
        <div class="vet-card" style="width: 400px; max-width: 90%;">
          <div class="vet-card-header">
            <h3><i class="fas fa-exclamation-triangle" style="color: #e74c3c;"></i> Confirmar eliminación</h3>
          </div>
          <div style="padding: 20px;">
            <p>¿Estás seguro que deseas eliminar este examen médico?</p>
            <p><strong>Esta acción no se puede deshacer.</strong></p>
          </div>
          <div class="vet-card-footer">
            <button type="button" class="vet-btn secondary" @click="showDeleteModal = false">
              <i class="fas fa-times"></i> Cancelar
            </button>
            <button type="button" class="vet-btn alert" @click="eliminarExamen">
              <i class="fas fa-trash"></i> Eliminar
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import VetSidebar from '../components/VetSidebar.vue';

export default {
  name: 'ModificarExamen',
  components: {
    VetSidebar
  },
  data() {
    return {
      showDeleteModal: false,
      form: {
        tipo: 'hematologia',
        fecha: '2025-04-15',
        consulta: 'consulta-001',
        estado: 'completado',
        observaciones: `Los valores de hematocrito y hemoglobina están dentro de los parámetros normales. Se observa ligera elevación en glóbulos blancos, posiblemente por estrés durante la toma de muestra. Recomendación: Repetir examen en 3 meses para seguimiento.`
      }
    }
  },
  methods: {
    onSubmit() {
      alert('Cambios guardados (demo)');
    },
    eliminarExamen() {
      this.showDeleteModal = false;
      alert('Examen médico eliminado correctamente (demo)');
      this.$router.push('/examenes-medicos');
    }
  }
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css');
@import '../styles_css/styles_local.css';
@import '../styles_css/bootstrap.min.css';
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
