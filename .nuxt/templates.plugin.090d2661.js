import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

config.autoAddCss = false

    import  { faChevronDown as fortawesomefreesolidsvgicons_faChevronDown } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faChevronDown)

    import  { faTwitter as fortawesomefreebrandssvgicons_faTwitter } from '@fortawesome/free-brands-svg-icons'
    library.add(fortawesomefreebrandssvgicons_faTwitter)

    import  { faFacebookF as fortawesomefreebrandssvgicons_faFacebookF } from '@fortawesome/free-brands-svg-icons'
    library.add(fortawesomefreebrandssvgicons_faFacebookF)

    import  { faInstagram as fortawesomefreebrandssvgicons_faInstagram } from '@fortawesome/free-brands-svg-icons'
    library.add(fortawesomefreebrandssvgicons_faInstagram)

Vue.component('fa', FontAwesomeIcon)
Vue.component('fa-layers', FontAwesomeLayers)
Vue.component('fa-layers-text', FontAwesomeLayersText)
