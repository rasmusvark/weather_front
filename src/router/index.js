import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WeatherView from "@/views/WeatherView.vue";
import ErrorView from "@/views/ErrorView.vue";
import WeatherInformationView from "@/views/WeatherInformationView.vue";

const routes = [
  {
    path: '/',
    name: 'homeRoute',
    component: HomeView
  },
  {
    path: '/weather',
    name: 'weatherRoute',
    component: WeatherView
    },
  {
    path: '/error',
    name: 'errorRoute',
    component: ErrorView
  },
  {
    path: '/weather/information',
    name: 'weatherInformationRoute',
    component: WeatherInformationView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
