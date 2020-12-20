import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import loginpage from './components/Login.vue'
import Home from './components/Home.vue'
import vuetify from './plugins/vuetify';

Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
  {path: '/login', component: loginpage },
  {path: '/', component: Home}
];

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
