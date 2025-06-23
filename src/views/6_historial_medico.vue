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
            <input type="text" id="filtro-nombre" class="vet-form-control" v-model="filtroNombre" placeholder="Ej: Max">
          </div>
          <div class="vet-form-group">
            <label for="filtro-propietario">Propietario</label>
            <input type="text" id="filtro-propietario" class="vet-form-control" v-model="filtropropietario" placeholder="Ej: David o 12345678">
          </div>
          <div class="vet-form-group" style="align-self: flex-end;">
            <button class="vet-btn" @click="buscarMascotas">
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
import VetPetItem from '../components/VetPetItem.vue';

const ICONO_MASCOTA = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///8AAAAmJibt7e2urq7p6emfn584ODhcXFz6+vrZ2dmbm5tDQ0M1NTX29vbm5ubFxcW9vb1lZWXx8fFLS0vNzc1zc3Pg4OCjo6OOjo7BwcGIiIh/f3+ysrJbW1vV1dUTExN3d3ctLS0bGxsaGhpOTk6Tk5M+Pj4iIiIMDAyCgoJsbGwliqaVAAAKqElEQVR4nO2d6ZaqMAyAVdxwQRRRdNxw1HF5//e7NgVk6UIhIPecfn/uHWWYhqZJmqal1dJoNBqNRqPRaDQajUaj0Wg0Go1Go9FoNBqNRqPRaDRJ/gHGCnsD0T8bHAAAAABJRU5ErkJggg=='

export default {
  name: 'HistorialMedico',
  components: {
    VetSidebar,
    VetPetItem
  },
  data() {
    return {
      filtroNombre: '',
      filtropropietario: '',
      pets: [],
      selectedPet: null,
      activeTab: 'vacunacion',
      consultasExpand: [false, false]
    }
  },
  methods: {
    async buscarMascotas() {
      let url;
      const nombre = this.filtroNombre.trim();
      const propietario = this.filtropropietario.trim();
      if (!nombre && !propietario) {
        url = `http://localhost/repo_oficial/PIMS_BACK/controllers/api_general.php?endpoint=todas_mascotas&query=`;
      } else if (propietario && !nombre) {
        if (/^\d+$/.test(propietario)) {
          // Si es numérico, buscar por DNI
          url = `http://localhost/repo_oficial/PIMS_BACK/controllers/api_general.php?endpoint=mascotas_propietario_flexible&dni=${encodeURIComponent(propietario)}`;
        } else {
          // Si es texto, buscar por nombre de propietario
          url = `http://localhost/repo_oficial/PIMS_BACK/controllers/api_general.php?endpoint=mascotas_propietario_flexible&nombre=${encodeURIComponent(propietario)}`;
        }
      } else if (nombre && !propietario) {
        url = `http://localhost/repo_oficial/PIMS_BACK/controllers/api_general.php?endpoint=mascotas_por_nombre&nombre_mascota=${encodeURIComponent(nombre)}`;
      } else {
        // Si ambos están presentes, prioriza búsqueda por ambos (si la API lo soporta, si no, usa nombre)
        if (/^\d+$/.test(propietario)) {
          url = `http://localhost/repo_oficial/PIMS_BACK/controllers/api_general.php?endpoint=mascotas_propietario_flexible&nombre_mascota=${encodeURIComponent(nombre)}&dni=${encodeURIComponent(propietario)}`;
        } else {
          url = `http://localhost/repo_oficial/PIMS_BACK/controllers/api_general.php?endpoint=mascotas_propietario_flexible&nombre_mascota=${encodeURIComponent(nombre)}&nombre=${encodeURIComponent(propietario)}`;
        }
      }
      try {
        const res = await fetch(url);
        let data;
        try {
          data = await res.json();
        } catch (jsonErr) {
          console.error('No se pudo parsear JSON:', jsonErr);
          data = null;
        }
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
