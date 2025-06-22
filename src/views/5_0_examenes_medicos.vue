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
          <label for="busqueda-mascota">Nombre o ID de la mascota:</label>
          <div class="vet-input-group">
            <input type="text" id="busqueda-mascota" class="vet-form-control" placeholder="Ej: Max o MV-001">
            <button class="vet-btn">
              <i class="fas fa-search"></i> Buscar
            </button>
          </div>
        </div>
      </div>
      <!-- Lista de mascotas recientes -->
      <div class="vet-card" style="margin-top: 20px;">
        <div class="vet-card-header">
          <h3><i class="fas fa-paw"></i> Mascotas Recientes</h3>
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
        </div>
      </div>
      <!-- Formulario de gestión de exámenes médicos -->
      <div class="vet-card" style="margin-top: 20px;">
        <div class="vet-card-header">
          <h3><i class="fas fa-microscope"></i> Gestión de Exámenes Médicos</h3>
        </div>
        <div class="vet-card-section">
          <h4>Información del Examen</h4>
          <form id="form-examen">
            <div class="vet-form-row">
              <div class="vet-form-group">
                <label for="tipo-examen">Tipo de Examen *</label>
                <select id="tipo-examen" class="vet-form-control" required>
                  <option value="">Seleccione un tipo</option>
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
                <label for="fecha-examen">Fecha del Examen *</label>
                <input type="date" id="fecha-examen" class="vet-form-control" required>
              </div>
            </div>
            <div class="vet-form-row">
              <div class="vet-form-group">
                <label for="consulta-relacionada">Consulta Relacionada</label>
                <select id="consulta-relacionada" class="vet-form-control">
                  <option value="">Seleccione una consulta</option>
                  <option value="consulta-001">Consulta #001 - 15/04/2025 (Control rutinario)</option>
                  <option value="consulta-002">Consulta #002 - 10/03/2025 (Vacunación anual)</option>
                </select>
              </div>
              <div class="vet-form-group">
                <label for="estado-examen">Estado del Examen</label>
                <select id="estado-examen" class="vet-form-control">
                  <option value="pendiente">Pendiente</option>
                  <option value="completado" selected>Completado</option>
                  <option value="cancelado">Cancelado</option>
                </select>
              </div>
            </div>
            <div class="vet-form-group">
              <label for="resultado-examen">Resultado del Examen (Archivo) *</label>
              <input type="file" id="resultado-examen" class="vet-form-control" accept=".pdf,.jpg,.jpeg,.png" required>
              <small class="text-muted">Formatos aceptados: PDF, JPG, PNG (Tamaño máximo: 5MB)</small>
            </div>
            <div class="vet-form-group">
              <label for="observaciones">Observaciones</label>
              <textarea id="observaciones" class="vet-form-control" rows="3"></textarea>
            </div>
            <div class="vet-form-actions">
              <button type="button" class="vet-btn secondary">
                <i class="fas fa-times"></i> Cancelar
              </button>
              <button type="submit" class="vet-btn">
                <i class="fas fa-save"></i> Guardar Examen
              </button>
            </div>
          </form>
        </div>
        <!-- Lista de exámenes existentes -->
        <div class="vet-card-section">
          <div class="d-flex justify-content-between align-items-center">
            <h4>Exámenes Registrados</h4>
            <div class="vet-input-group" style="width: auto;">
              <input type="text" class="vet-form-control" placeholder="Filtrar exámenes..." style="width: 200px;">
              <button class="vet-btn">
                <i class="fas fa-filter"></i>
              </button>
            </div>
          </div>
          <div class="vet-examenes-list" style="margin-top: 15px;">
            <!-- Examen 1 -->
            <div class="vet-card" style="padding: 15px; margin-bottom: 15px;">
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <h5>Hematología completa</h5>
                  <p class="text-muted">Realizado el 15/04/2025 - Consulta #001</p>
                  <p><strong>Estado:</strong> <span class="vet-chip">Completado</span></p>
                </div>
                <div>
                  <a href="#" class="vet-btn-icon" title="Ver resultado">
                    <i class="fas fa-eye"></i>
                  </a>
                  <a href="#" class="vet-btn-icon" title="Descargar">
                    <i class="fas fa-download"></i>
                  </a>
                  <router-link to="/examenes-medicos-modificar" class="vet-btn-icon" title="Editar">
                    <i class="fas fa-edit"></i>
                  </router-link>
                  <a href="#" class="vet-btn-icon" style="color: #e74c3c;" title="Eliminar">
                    <i class="fas fa-trash"></i>
                  </a>
                </div>
              </div>
            </div>
            <!-- Examen 2 -->
            <div class="vet-card" style="padding: 15px;">
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <h5>Radiografía torácica</h5>
                  <p class="text-muted">Realizado el 10/03/2025 - Consulta #002</p>
                  <p><strong>Estado:</strong> <span class="vet-chip">Completado</span></p>
                </div>
                <div>
                  <a href="#" class="vet-btn-icon" title="Ver resultado">
                    <i class="fas fa-eye"></i>
                  </a>
                  <a href="#" class="vet-btn-icon" title="Descargar">
                    <i class="fas fa-download"></i>
                  </a>
                  <router-link to="/examenes-medicos-modificar" class="vet-btn-icon" title="Editar">
                    <i class="fas fa-edit"></i>
                  </router-link>
                  <a href="#" class="vet-btn-icon" style="color: #e74c3c;" title="Eliminar">
                    <i class="fas fa-trash"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import VetSidebar from '../components/VetSidebar.vue';
import VetPetItem from '../components/VetPetItem.vue';

const mascota1 = new URL('../assets/mascota_1.jpg', import.meta.url).href;
const mascota2 = new URL('../assets/mascota_2.jpg', import.meta.url).href;

export default {
  name: 'ExamenesMedicos',
  components: {
    VetSidebar,
    VetPetItem
  },
  data() {
    return {
      pets: [
        {
          id: 'MV-001',
          name: 'Max',
          breed: 'Labrador Retriever',
          age: '3 años',
          img: mascota1
        },
        {
          id: 'MV-002',
          name: 'Luna',
          breed: 'Siamés',
          age: '2 años',
          img: mascota2
        }
      ],
      selectedPet: 'MV-001'
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
</style>
