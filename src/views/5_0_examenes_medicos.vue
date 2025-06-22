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

const ICONO_MASCOTA = 'data:image/png;base64,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';

export default {
  name: 'ExamenesMedicos',
  components: {
    VetSidebar,
    VetPetItem
  },
  data() {
    return {
      pets: [],
      selectedPet: null,
      searchQuery: ''
    }
  },
  methods: {
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
          img: ICONO_MASCOTA
        }));
        this.selectedPet = this.pets.length > 0 ? this.pets[0].id : null;
      } catch (e) {
        console.error('Error al cargar mascotas:', e);
        this.pets = [];
        this.selectedPet = null;
      }
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
