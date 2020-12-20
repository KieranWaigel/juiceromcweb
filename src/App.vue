<template>
<div>
    <loginpage></loginpage>
</div>
</template>

<script>
import loginpage from './components/Login.vue'

export default {
  name: 'App',
  components: {
    loginpage
  },

  data: function() {
return {
    usr: '',
    users: ["Gary"]
  };
},

  methods: {

    addUser() {
      this.users.push(this.usr);
      this.usr = '';
    }
  },
};
</script>

<style>
  @import './assets/stylemain.css';
</style>
