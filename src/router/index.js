import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Inicio from '../views/1_inicio.vue'
import Agenda  from '../views/2_agenda.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/inicio', component: Inicio }
  ,{ path: '/agenda', component: Agenda }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
