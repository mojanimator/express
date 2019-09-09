import Vue from 'vue'
import router from './router.js'
import store from './store.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'

import App from './components/App.vue'
import axios from 'axios';

window.axios = axios;

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');