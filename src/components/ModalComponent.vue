<template>
  <div class="text-center">
    <v-dialog v-model="activateModal" width="500">
      <v-card class="centralize">
        <v-img max-width="200px" :src="item.photo"></v-img>
        <v-card-title class="text-h5 grey lighten-2"> {{ item.name }} </v-card-title>

        <v-card-text class="text-h6 lighten-2" color="#260845">
          {{ item.email }}
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="$emit('changeModalState')"> Fechar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
  emits: ["changeModalState"],
  props: {
    activateModal: Boolean,
    item: Object,
  },
  data() {
    return {};
  },
  methods: {
    // changeModalState() {
    //   this.$emit("changeModalState");
    // },
  },
};
</script>
<style scoped>
.centralize {
  text-align: -webkit-center;
}
</style>
