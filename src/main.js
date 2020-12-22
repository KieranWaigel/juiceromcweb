import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import store from './store'
import Home from './views/Home.vue'
import vuetify from './plugins/vuetify';
import About from './views/About.vue';
import Members from './views/Members.vue';
import Login from './views/Login.vue';
import Auth0Callback from './views/Auth0Callback.vue';

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
  {path: '/', component: Home},
  {path: '/about', component: About},
  {path: '/members', component: Members, meta: {requiresAuth: true}},
  {path: '/login', component: Login},
  {path: '/auth0callback', component: Auth0Callback},
  
];

const router = new VueRouter({
  mode: "history",
  routes
})

router.beforeEach ( (to,from,next)=>{ 
  if(to.matched.some(record=>record.path == "/auth0callback")){
    console.log("router.beforeEach found /auth0callback url");
    store.dispatch('auth0HandleAuthentication');
    next(false);
  }
  
  let routerAuthCheck = false;  
  // Verify all the proper access variables are present for proper authorization
  if( localStorage.getItem('access_token') && localStorage.getItem('id_token') && localStorage.getItem('expires_at') ){
    console.log('found local storage tokens');
    // Check whether the current time is past the Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    // set localAuthTokenCheck true if unexpired / false if expired
    routerAuthCheck = new Date().getTime() < expiresAt;  
  }

  store.commit('setUserIsAuthenticated', routerAuthCheck);

  if (to.matched.some(record => record.meta.requiresAuth)) {
   //Check if user is auth 
   if(routerAuthCheck){
     //user is authenticated
     //TODO commit to store that the user is authenticated
     
     next();
   }
   else{
     //user is not authenticated
     router.replace('/login')
   }
  }
  //Allow
  else{
    next();
  }
});


export default router;

new Vue({
  render: h => h(App),
  vuetify,
  router,
  store
}).$mount('#app')
