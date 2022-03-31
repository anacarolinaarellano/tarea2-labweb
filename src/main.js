import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import VueCarousel from 'vue-carousel';
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

createApp(App).use(BootstrapVue3).use(VueCarousel).mount('#app')
