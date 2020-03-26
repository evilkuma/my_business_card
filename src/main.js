
import Vue from 'vue'
import MaterialKit from './plugins/material-kit'
import router from './router'
import './ml'

import App from './App.vue'

Vue.use(MaterialKit)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

