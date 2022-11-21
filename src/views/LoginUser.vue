<template>
  <div class="login-view">
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col v-for="n in 3" :key="n" cols="12" sm="4">
          <v-row align="center" justify="center">
            <v-card height="300" width="250">
              <v-row justify="center">
                <v-btn color="orange lighten-2" class="mt-12" @click="overlay = !overlay">
                  Show Overlay
                </v-btn>

                <v-overlay :absolute="absolute" :opacity="opacity" :value="overlay">
                  <v-btn color="orange lighten-2" @click="overlay = false">
                    Hide Overlay
                  </v-btn>
                </v-overlay>
              </v-row>
            </v-card>
          </v-row>
          <v-card class="pa-2" outlined tile> One of three columns </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "LoginUser",
  data: () => ({
    absolute: true,
    opacity: 1,
    overlay: false,
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
