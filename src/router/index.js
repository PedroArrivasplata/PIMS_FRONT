import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/login.vue'
import Inicio from '../views/1_inicio.vue'
import Agenda  from '../views/2_agenda.vue'
import cartillaVacunacion from '../views/3_0_cartilla_vacunacion.vue'
import nuevaCartilla from '../views/3_1_nueva_cartilla.vue'
import editarCartilla from '../views/3_2_modificar.vue'
import consultaMedica from '../views/4_0_consulta_medica.vue'
import consultaMedicaNueva from '../views/4_1_nuevo_registro.vue'
import consultaMedicaEditar from '../views/4_2_modificar.vue'
import examenesMedicos from '../views/5_0_examenes_medicos.vue'
import examenesMedicosModificar from '../views/5_1_modificar.vue'
import historialMedico from '../views/6_historial_medico.vue'


const routes = [
  { path: '/', component: Login },
  { path: '/inicio', component: Inicio }
  ,{ path: '/agenda', component: Agenda }
  ,{ path: '/cartilla-vacunacion', component: cartillaVacunacion }
  ,{path: '/cartilla-nueva', component: nuevaCartilla }
  , {path: '/cartilla-modificar', component: editarCartilla }
  , {path: '/consulta-medica', component: consultaMedica}
  , {path: '/consulta-medica-nueva', component: consultaMedicaNueva  }
  , {path: '/consulta-medica-editar', component: consultaMedicaEditar}
  ,{path: '/examenes-medicos', component: examenesMedicos }
  ,{path: '/examenes-medicos-modificar', component: examenesMedicosModificar }
  , {path: '/historial-medico', component: historialMedico }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
