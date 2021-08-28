import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _652116ca = () => interopDefault(import('../pages/app-net.vue' /* webpackChunkName: "pages/app-net" */))
const _07397bf0 = () => interopDefault(import('../pages/app-think.vue' /* webpackChunkName: "pages/app-think" */))
const _fa03a2a4 = () => interopDefault(import('../pages/cording.vue' /* webpackChunkName: "pages/cording" */))
const _0367ebf0 = () => interopDefault(import('../pages/layout.vue' /* webpackChunkName: "pages/layout" */))
const _568dd664 = () => interopDefault(import('../pages/product-sult.vue' /* webpackChunkName: "pages/product-sult" */))
const _e59dbd08 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/app-net",
    component: _652116ca,
    name: "app-net"
  }, {
    path: "/app-think",
    component: _07397bf0,
    name: "app-think"
  }, {
    path: "/cording",
    component: _fa03a2a4,
    name: "cording"
  }, {
    path: "/layout",
    component: _0367ebf0,
    name: "layout"
  }, {
    path: "/product-sult",
    component: _568dd664,
    name: "product-sult"
  }, {
    path: "/",
    component: _e59dbd08,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
