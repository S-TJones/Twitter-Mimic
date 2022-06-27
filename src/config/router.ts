import Vue from 'vue';
import Router from 'vue-router';

// tslint:disable-next-line
const { default: generatedRoutes } = require('../../.rdvue/routes.js');

Vue.use(Router);

export enum Page {
  Hello = 'hello-world',
  NotFound = 'not-found',
  TLanding = 't-landing',
  TDash = 't-dash',
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/buefy-sample',
      name: 'buefy-sample',
      component: require('@/pages/buefy-sample/buefy-sample.vue').default,
      meta: {
        layout: 'home',
      },
    },
    ...generatedRoutes,
    {
      path: '/',
      name: Page.Hello,
      meta: {
        layout: 'default',
      },
      component: () =>
        import(
          /* webpackChunkName: "hello-world" */
          '@/pages/hello-world'),
    },
    {
      path: '/landing',
      name: Page.TLanding,
      meta: {
        layout: 'default',
      },
      component: () =>
        import(
          /* webpackChunkName: "landing" */
          '@/pages/landing'),
    },
    {
      path: '/Dash',
      name: Page.TDash,
      meta: {
        layout: 'home',
      },
      component: () =>
        import(
          /* webpackChunkName: "Dash" */
          '@/pages/dash'),
    },
    {
      path: '*',
      name: Page.NotFound,
      meta: {
        layout: 'default',
      },
      component: () =>
        import(
          /* webpackChunkName: "not-found" */
          '@/pages/not-found'),
    },
  ],
});
