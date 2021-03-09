<template>
  <v-app>
    <v-app-bar app color="black" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://admin.funeats.app/img/logoFunEatsBlanco.ea09fd72.svg"
          width="200"
        />
      </div>

      <v-spacer></v-spacer>
      <v-btn @click="$router.push('/')"> INSTRUCCIONES </v-btn>
      <v-btn text> GRUPOS </v-btn>
      <v-btn text> ANIMALES </v-btn>
      <v-btn href="https://funeats.app" target="_blank" text>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-snackbar
      v-model="snackbar"
      timeout="5000"
      class="white--text"
      color="success"
      top
      right
      >DATOS DE LA PRUEBA CARGADOS</v-snackbar
    >
    <v-snackbar
      :value="true"
      :timeout="-1"
      class="white--text"
      color="info"
      bottom
      >Prueba de conocimientos Vue y Vuetify. Mewosystems SL<br />Web de
      referencia
      <a
        class="white--text"
        target="_blank"
        href="https://mewosystems-proyectos.web.app/"
        >https://mewosystems-proyectos.web.app</a
      ></v-snackbar
    >
    <v-main>
      <v-main>
        <router-view />
      </v-main>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    snackbar: false,
  }),
  mounted() {
    Promise.all([
      this.$store.dispatch("grupos/GET_GRUPOS"),
      this.$store.dispatch("animales/GET_ANIMALES"),
    ])
      .then(() => {
        this.snackbar = true;
      })
      .catch((e) => console.log(e));
  },
};
</script>
