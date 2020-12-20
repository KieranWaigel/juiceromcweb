import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import loginpage from './components/Login.vue'
import Home from './views/Home.vue'
import vuetify from './plugins/vuetify';
import About from './views/About.vue';
import  Members from './views/Members.vue';

//import {domain, clientID } from "../auth_config.json";

//import { Auth0Plugin } from "./auth";


Vue.use(VueRouter);

/*Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
}) */
Vue.config.productionTip = false

const routes = [
  {path: '/login', component: loginpage },
  {path: '/', component: Home},
  {path: '/about', component: About},
  {path: '/members', component: Members},
];

const router = new VueRouter({
  mode: "hash",
  routes
})

new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
