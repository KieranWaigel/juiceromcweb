<template>
    <v-container>
      <v-slide-y-transition mode="out-in">
          <v-layout row wrap align-center>
            <v-flex xs12 sm8 offset-sm2 md6 offset-md3 lg4 offset-lg4>
              <v-card style="margin-bottom:200px;">
                <div class="pa-3">
                      <v-img 
      alt="JuiceroMCLogo"
      class="shrink mt-1 hidden-sm-and-down"
      contain
      min-width="200"
      src='../assets/juiceromclogo.png'
      width="200"
    />
                </div>
                <hr>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">Whoa!</h3>
                    <div>We're gonna need to see your gamer license                         
                      <br><br>
                      You better be a certified gamer when you click login
                      <br><br>
                      
                    </div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn  @click="auth0Login()">Login</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-slide-y-transition>
      </v-container>

</template>
<script>
export default {
    name: 'Login',
    methods: {
        auth0Login(){
            this.$store.dispatch('auth0Login');
            console.log('we are in auth0Login');
        },
    },
    }
</script>