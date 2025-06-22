<template>
  <div class="vet-dashboard">
    <VetSidebar />
    <main class="vet-main-content scroll-sections">
      <div class="vet-header">
        <div>
          <h1>Historial Médico</h1>
          <p class="text-muted">Consulta integral del historial clínico de tus pacientes</p>
        </div>
      </div>
      <!-- Filtros de búsqueda -->
      <div class="vet-card">
        <div class="vet-card-header">
          <h3><i class="fas fa-filter"></i> Filtros de Búsqueda</h3>
        </div>
        <div class="vet-form-row">
          <div class="vet-form-group">
            <label for="filtro-nombre">Nombre de la Mascota</label>
            <input type="text" id="filtro-nombre" class="vet-form-control" placeholder="Ej: Max">
          </div>
          <div class="vet-form-group">
            <label for="filtro-dni">DNI del Propietario</label>
            <input type="text" id="filtro-dni" class="vet-form-control" placeholder="Ej: 12345678">
          </div>
          <div class="vet-form-group" style="align-self: flex-end;">
            <button class="vet-btn">
              <i class="fas fa-search"></i> Buscar
            </button>
          </div>
        </div>
      </div>
      <!-- Resultados de búsqueda -->
      <div class="vet-card" style="margin-top: 20px;">
        <div class="vet-card-header">
          <h3><i class="fas fa-search"></i> Resultados</h3>
        </div>
        <div class="vet-pets-list">
          <div class="vet-pet-item">
            <label>
              <input type="radio" name="paciente" checked>
              <div class="d-flex align-items-center">
                <img src="../assets/mascota_1.jpg" alt="Max" class="vet-pet-avatar">
                <div>
                  <h4>Max</h4>
                  <p class="text-muted">Labrador Retriever - 3 años</p>
                  <p><strong>Propietario:</strong> Juan Pérez (DNI: 12345678)</p>
                  <p><strong>ID Mascota:</strong> MV-001</p>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
      <!-- Pestañas de historial -->
      <div class="vet-card" style="margin-top: 20px;">
        <div class="vet-tabs" style="display: flex; border-bottom: 1px solid #eee;">
          <button class="vet-tab" :class="{active: activeTab==='vacunacion'}" @click="activeTab='vacunacion'" data-tab="vacunacion">Vacunación</button>
          <button class="vet-tab" :class="{active: activeTab==='consultas'}" @click="activeTab='consultas'" data-tab="consultas">Consultas Médicas</button>
          <button class="vet-tab" :class="{active: activeTab==='examenes'}" @click="activeTab='examenes'" data-tab="examenes">Exámenes Médicos</button>
        </div>
        <!-- Contenido de pestañas -->
        <div class="vet-tab-content" v-show="activeTab==='vacunacion'">
          <div class="vet-card-section">
            <div class="vet-vaccine-grid">
              <div class="vet-vaccine-category">
                <h4>Vacunas Obligatorias</h4>
                <div class="vet-vaccine-item">
                  <div class="vet-checkbox">
                    <input type="checkbox" checked disabled>
                    <span class="vet-checkmark"></span>
                    <span>Rabia</span>
                  </div>
                  <div class="vet-vaccine-details">
                    <span>10/03/2024</span>
                    <span>Próxima: 10/03/2025</span>
                  </div>
                </div>
                <div class="vet-vaccine-item">
                  <div class="vet-checkbox">
                    <input type="checkbox" checked disabled>
                    <span class="vet-checkmark"></span>
                    <span>Moquillo</span>
                  </div>
                  <div class="vet-vaccine-details">
                    <span>15/01/2025</span>
                    <span>Próxima: 15/01/2026</span>
                  </div>
                </div>
              </div>
              <div class="vet-vaccine-category">
                <h4>Vacunas Opcionales</h4>
                <div class="vet-vaccine-item">
                  <div class="vet-checkbox">
                    <input type="checkbox" checked disabled>
                    <span class="vet-checkmark"></span>
                    <span>Leptospirosis</span>
                  </div>
                  <div class="vet-vaccine-details">
                    <span>15/01/2025</span>
                    <span>Próxima: 15/07/2025</span>
                  </div>
                </div>
                <div class="vet-vaccine-item">
                  <div class="vet-checkbox">
                    <input type="checkbox">
                    <span class="vet-checkmark"></span>
                    <span>Bordetella</span>
                  </div>
                  <div class="vet-vaccine-details">
                    <span class="vet-missing">Pendiente</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="vet-tab-content" v-show="activeTab==='consultas'">
          <div class="vet-card-section">
            <div class="vet-consultas-list">
              <!-- Consulta 1 -->
              <div class="vet-card" style="padding: 15px; margin-bottom: 15px;">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <h5>Consulta de rutina</h5>
                    <p class="text-muted">15/04/2025 - Dr. Veterinario</p>
                  </div>
                  <button class="vet-btn-icon" @click="toggleConsulta(0)">
                    <i :class="{'fas': true, 'fa-chevron-down': !consultasExpand[0], 'fa-chevron-up': consultasExpand[0]}"></i>
                  </button>
                </div>
                <div class="consulta-detalle" style="margin-top: 10px;" v-show="consultasExpand[0]">
                  <p><strong>Síntomas:</strong> Ninguno reportado (control preventivo)</p>
                  <p><strong>Diagnóstico:</strong> Saludable, peso ideal</p>
                  <p><strong>Tratamiento:</strong> Continuar con dieta actual</p>
                  <p><strong>Exámenes solicitados:</strong> Hematología completa</p>
                  <p><strong>Observaciones:</strong> Se recomienda ejercicio diario de 30 minutos</p>
                </div>
              </div>
              <!-- Consulta 2 -->
              <div class="vet-card" style="padding: 15px;">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <h5>Revisión post-vacunación</h5>
                    <p class="text-muted">10/03/2025 - Dr. Veterinario</p>
                  </div>
                  <button class="vet-btn-icon" @click="toggleConsulta(1)">
                    <i :class="{'fas': true, 'fa-chevron-down': !consultasExpand[1], 'fa-chevron-up': consultasExpand[1]}"></i>
                  </button>
                </div>
                <div class="consulta-detalle" style="margin-top: 10px;" v-show="consultasExpand[1]">
                  <p><strong>Síntomas:</strong> Ligera inflamación en zona de inyección</p>
                  <p><strong>Diagnóstico:</strong> Reacción normal a vacuna</p>
                  <p><strong>Tratamiento:</strong> Aplicación de compresa fría</p>
                  <p><strong>Exámenes solicitados:</strong> Ninguno</p>
                  <p><strong>Observaciones:</strong> Reacción desapareció en 24 horas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="vet-tab-content" v-show="activeTab==='examenes'">
          <div class="vet-card-section">
            <div class="vet-examenes-list">
              <!-- Examen 1 -->
              <div class="vet-card" style="padding: 15px; margin-bottom: 15px;">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <h5>Hematología completa</h5>
                    <p class="text-muted">15/04/2025 - Asociado a Consulta #001</p>
                  </div>
                  <div>
                    <a href="#" class="vet-btn-icon" title="Ver resultado">
                      <i class="fas fa-eye"></i>
                    </a>
                    <a href="#" class="vet-btn-icon" title="Descargar">
                      <i class="fas fa-download"></i>
                    </a>
                  </div>
                </div>
                <div style="margin-top: 10px;">
                  <p><strong>Resultados:</strong> Valores dentro de parámetros normales</p>
                  <p><strong>Observaciones:</strong> Ligera elevación en glóbulos blancos, posiblemente por estrés</p>
                </div>
              </div>
              <!-- Examen 2 -->
              <div class="vet-card" style="padding: 15px;">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <h5>Radiografía torácica</h5>
                    <p class="text-muted">10/03/2024 - Asociado a Consulta #002</p>
                  </div>
                  <div>
                    <a href="#" class="vet-btn-icon" title="Ver resultado">
                      <i class="fas fa-eye"></i>
                    </a>
                    <a href="#" class="vet-btn-icon" title="Descargar">
                      <i class="fas fa-download"></i>
                    </a>
                  </div>
                </div>
                <div style="margin-top: 10px;">
                  <p><strong>Resultados:</strong> No se observan anomalías</p>
                  <p><strong>Observaciones:</strong> Estructura ósea y pulmonar normal</p>
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

export default {
  name: 'HistorialMedico',
  components: {
    VetSidebar
  },
  data() {
    return {
      activeTab: 'vacunacion',
      consultasExpand: [false, false]
    }
  },
  methods: {
    toggleConsulta(idx) {
      this.$set(this.consultasExpand, idx, !this.consultasExpand[idx]);
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
