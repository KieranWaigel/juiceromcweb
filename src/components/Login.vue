<template>
    <body>
      <div id="login">
      <h3>
        juiceromc
      </h3>
         <div id="logininput">
         <input v-model="usr" placeholder="username">
         <input v-model="pwd" placeholder="password">
         <button id="usrbtn" @click="addUser"> Add User</button>

         </div>
     </div>
    </body>
</template>

<script>
export default {
    name: 'loginpage',
    data: function(){
        return{
            msg: 'this is a test'
        }
    },
}
</script>



