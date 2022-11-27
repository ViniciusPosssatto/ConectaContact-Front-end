<template>
  <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="20"
      offset-x
      content-class="menu-drop"
    >
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" @click="activate">
          <v-icon>mdi-menu-open</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img src="../assets/Conecta-Nuvem-Logo.png" alt="John" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Conecta Nuvem</v-list-item-title>
              <v-list-item-subtitle>
                <a href="https://conectanuvem.com.br">Site oficial</a>
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn :class="fav ? 'red--text' : ''" icon @click="fav = !fav">
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-item-content>
            <v-list-item-title>Conecta Suite</v-list-item-title>
            <v-list-item-subtitle>
              <a href="https://conectasuite.com">Teste grátis agora</a>
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item>
            <v-list-item-title
              ><a href="https://conectanuvem.com.br/contato/"
                >Contato</a
              ></v-list-item-title
            >
          </v-list-item>
        </v-list>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text @click="activate"><v-icon>mdi-close-outline</v-icon></v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fav: true,
      menu: false,
      message: false,
      hints: true,
    };
  },
  methods: {
    activate() {
      let btn = this.menu;
      this.menu = !btn;
      console.log(this.menu);
    },
  },
};
</script>

<style scoped>
.menu-drop {
  position: fixed !important;
}
</style>
