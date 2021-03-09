<template>
  <v-container>
    <section>
      <v-alert class="info white--text"
        >Se encuentra ante un pequeño ejercicio para comprobar algunos
        conocimientos del framework Vue y su librería Vuetify. Este proyecto no
        tiene valor comercial para Mewosystems y sólo tiene fin didáctico y de
        evaluación</v-alert
      >
      <v-card-title class="heading">Instrucciones</v-card-title>
      <v-list>
        <v-list-item>
          <v-list-item-title
            >Cree una vista Grupos dentro de la carpeta views</v-list-item-title
          >
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            Muestre un listado de los grupos de músicas con sus discos, tal como
            aparece en la web de referencia. Utilice la etiqueta v-list de
            vuetify</v-list-item-title
          >
        </v-list-item>
        <v-divider />
        <v-list-item>
          <v-list-item-title>
            Cree una vista Animales dentro de la carpeta
            views</v-list-item-title
          >
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            Muestre en una tabla los animales, tal como aparece en la web de
            referencia. Utilice la etiqueta v-data-table de
            vuetify</v-list-item-title
          >
        </v-list-item>
        <v-divider />
        <v-card-title> Consideraciones </v-card-title>
        <v-list-item>
          <v-list-item-title>
            El proyecto deberá compilar. Para ello deberá tener instalado node,
            vue, vuetify y el entorno necesario</v-list-item-title
          >
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            Al cargar la web, se simula una llamada a una API que, tras 1
            segundo, devuelve los datos que hay que usar</v-list-item-title
          >
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            El menu superior deberá redirigir a las correspondientes páginas.
            Haga uso del la caracerística router de vue</v-list-item-title
          >
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            Para el diseño del interfaz no debe usar css, sólo componentes de
            vuetify y vue, tal como aparece en la web de
            referecia</v-list-item-title
          >
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            Cualquier duda, siéntase libre de escribir a
            <a href="mailto:dquintero@mewosystems.com"
              >dquintero@mewosystems.com</a
            ></v-list-item-title
          >
        </v-list-item>
      </v-list>
    </section>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>