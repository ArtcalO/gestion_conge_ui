import { createRouter, createWebHistory } from 'vue-router'
import EmployesView from "../views/EmployesView.vue"
import ParentView from "../views/ParentView.vue"
const routes = [
  {
    path:"/",
    component:EmployesView
  },
  {
    path:"/parent",
    component:ParentView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
