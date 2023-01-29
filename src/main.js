import Vue from 'vue';
import App from './App.vue'
import 'buefy/dist/buefy.css'
import '@mdi/font/css/materialdesignicons.css'
import Buefy from 'buefy'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(Buefy);

Vue.use(VueRouter)

const router = new VueRouter({
    routes
})

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')