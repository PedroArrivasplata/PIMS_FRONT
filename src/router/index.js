import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Inicio from '../views/1_inicio.vue'
import Agenda  from '../views/2_agenda.vue'
import cartillaVacunacion from '../views/3_0_cartilla_vacunacion.vue'
import nuevaCartilla from '../views/3_1_nueva_cartilla.vue'
import editarCartilla from '../views/3_2_modificar.vue'


const routes = [
  { path: '/', component: Login },
  { path: '/inicio', component: Inicio }
  ,{ path: '/agenda', component: Agenda }
  ,{ path: '/cartilla-vacunacion', component: cartillaVacunacion }
  ,{path: '/cartilla-nueva', component: nuevaCartilla }
  , {path: '/cartilla-modificar', component: editarCartilla }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
