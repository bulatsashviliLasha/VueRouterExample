import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView'
import JobsView from "@/views/Jobs/JobsView";
import JobDetailsView from "@/views/Jobs/JobDetailsView";
import NotFoundView from "../views/NotFoundView"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView
  },
  {
    path: '/jobs/:id',
    name: 'jobDetails',
    component: JobDetailsView,
    props: true
  },
    //redirects all-jobs to jobs root
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
    // 404 page
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
