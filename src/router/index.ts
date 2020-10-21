import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  // TODO Add Contact Form
  // {
  //   path: '/contact',
  //   name: 'Contact',
  //   component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
  // },
  {
    path: '/project/:id',
    name: 'Project',
    component: () => import(/* webpackChunkName: "project" */ '../views/Project.vue'),
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
