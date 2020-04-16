
import Vue from 'vue'
import Router from 'vue-router'

import Header from './layout/Header.vue'
import Footer from './layout/Footer.vue'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            components: { default: Index, header: Header, footer: Footer },
            props: {
                header: { colorOnScroll: 250, type: "success" }
            }
        }
    ]
})
