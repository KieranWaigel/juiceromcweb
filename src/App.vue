<template>
<div>
  
   <head>
      <title>juiceromc: the juicer of the future</title>
    </head>

    <div id="juicero">

      <body>
        <div id="login">
          <h3>
            &lt;juiceromc&gt;
          </h3>
          <div id="logininput">

            <input v-model="usr" placeholder="username">
            <input v-model="pwd" placeholder="password">
            <button id="usrbtn" @click="addUser"> Add User</button>

          </div>
        </div>
        <div id="content">

          <h3>
            &lt;current users&gt;
          </h3>
          <li v-for="name in users" v-bind:key="name"></li>
        </div>

      </body>
    </div>
</div>
</template>

<script>
export default {
  el: '#juicero',
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
  @import '/assets/stylemain.css';
</style>
