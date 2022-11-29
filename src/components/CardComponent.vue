<template>
  <v-container>
    <v-row justify="center" v-if="domains">
      <v-card
        elevation="20"
        color="#260845"
        class="card-msg"
        hover
        v-for="item in domains"
        :key="item"
        @click="routerPush(item)"
      >
        <span
          v-text="item"
          :class="item === '@conectanuvem.com.br' ? 'msg' : 'msgComum'"
          @click="changeModalState()"
        ></span>
      </v-card>
    </v-row>
    <v-row justify="center" v-else>
      <v-card
        elevation="20"
        color="#260845"
        class="card-msg"
        hover
        v-for="item in emails"
        :key="item.email"
        @click="changeModalState(item)"
      >
        <span v-text="item.email" class="msgComum" ></span>
      </v-card>
    </v-row>
    <ModalComponent
      :activate-modal="activateModal"
      :item="item"
      @changeModalState="changeModalState"
    />
  </v-container>
</template>
<script>
import ModalComponent from "../components/ModalComponent.vue";

export default {
  name: "CardComponent",
  components: {
    ModalComponent,
  },
  props: {
    emails: Array,
    domains: Array,
  },
  data() {
    return {
      activateModal: false,
      item: {},
    };
  },
  methods: {
    routerPush(domain) {
      this.$router.push({ path: "/contacts", query: { dom: domain } });
    },
    changeModalState(item) {
      if (item) {
        this.item = item;
        var test = this.activateModal;
        this.activateModal = !test;
      } else {
        var test = this.activateModal;
        this.activateModal = !test;
      }
    },
  },
  computed: {},
  mounted() {},
};
</script>
<style scoped>
.msg {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 20px;
  background: -webkit-linear-gradient(-120deg, #4285f4, #34a853, #fbbc05, #ea4335);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.msgComum {
  font-family: Open Sans, var(--nv-fallback-ff);
  font-size: 20px;
  color: #b7a6f5;
}
.card-msg {
  padding: 20px 50px;
  margin: 10px;
}

@media (max-width: 470px) {
  .icon-some {
    position: absolute;
    display: none;
  }
  .card-msg {
    padding: 10px 20px;
    margin: 5px;
  }
  .msgComum {
    font-family: Open Sans, var(--nv-fallback-ff);
    font-size: 16px;
    color: #b7a6f5;
  }
}
</style>
