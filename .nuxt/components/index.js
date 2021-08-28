import { wrapFunctional } from './utils'

export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as HeaderProduct } from '../../components/HeaderProduct.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as Main } from '../../components/Main.vue'
export { default as MainProduct } from '../../components/MainProduct.vue'

export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyHeaderProduct = import('../../components/HeaderProduct.vue' /* webpackChunkName: "components/header-product" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyMain = import('../../components/Main.vue' /* webpackChunkName: "components/main" */).then(c => wrapFunctional(c.default || c))
export const LazyMainProduct = import('../../components/MainProduct.vue' /* webpackChunkName: "components/main-product" */).then(c => wrapFunctional(c.default || c))
