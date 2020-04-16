
// components
import { 
    MdToolbar, MdButton, MdList, MdCard, MdIcon, MdDivider, MdAvatar, MdTabs
} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import './../assets/scss/material-kit.scss'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import DropDown from './../components/DropDown.vue'
import Parallax from './../components/Parallax.vue'
import CardList from './../components/CardList.vue'

// dirictives
import { directive as vClickOutside } from "vue-clickaway"

export default {
    install(Vue) {
        // components
        Vue.use(MdToolbar)
        Vue.use(MdButton)
        Vue.use(MdList)
        Vue.use(MdCard)
        Vue.use(MdIcon)
        Vue.use(MdDivider)
        Vue.use(MdAvatar)
        Vue.use(MdTabs)
        Vue.component("drop-down", DropDown)
        Vue.component(Parallax.name, Parallax)
        Vue.component(CardList.name, CardList)

        // dirictives
        Vue.directive("click-outside", vClickOutside)
    }
}
