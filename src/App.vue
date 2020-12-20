<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >

      <v-spacer></v-spacer>

      <v-btn to="/">
        <span class="mr-2">Home</span>
      </v-btn>


      <v-btn
        to="/about"
        text
      >
        <span class="mr-2">About</span>
      </v-btn>

      <v-btn
        to="/members"
        text
      >
        <span class="mr-2">Gamers Only</span>
      </v-btn>
    </v-app-bar>
   

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
};
</script>
