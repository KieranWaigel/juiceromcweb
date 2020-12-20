<template>
<div>
    <hr>
    <router-view></router-view>
</div>
</template>

<script>

export default {
  name: 'App',

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
