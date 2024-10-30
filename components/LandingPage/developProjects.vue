<template>
  <v-row>
    <v-col cols="12" sm="8" >
      <div class="w-100 w-md-75" >
        <h1 class="text-h4 text-md-h2 font-weight-bold my-6 mt-md-14 h1-landing-page">
            É muito caro não ter conhecimento<br>
            então vamos evoluir juntos!
        </h1>
        <div class="text-sm-h5 text-subtitle-1 text-medium-emphasis mt-4 mb-6">
          Aprender ou evoluir seus conhecimento irá te abrir muitas portas,
          então vamos embarcar juntos na jornada do apredizado.
        </div>
        
      </div>

      <nuxt-link to="/courses">
          <v-btn
            append-icon="mdi-chevron-right"
            color="primary"
            variant="flat"
            text-color="accent"
            class="ma-2 text-none rounded-pill btn-gradient"
          >Conheça os cursos</v-btn>

      </nuxt-link>
    </v-col>
    <v-col cols="12" sm="4" id="description-develop-projects"> 
        <div class="blur-background"></div>
        <!-- <v-img class="mt-md-4" src="/images/rocket.avif"/> -->
        <v-img class="mt-md-4" src="https://raw.githubusercontent.com/yurimarcon/site/refs/heads/release/public/images/rocket.avif"/>
    </v-col>
  </v-row>
</template>

<style scoped>

#description-develop-projects {
  position: relative;
}

.blur-background {
  position: absolute;
  top: 120px;
  right: 150px;
  width: 65%;
  height: 250px;
  filter: blur(150px);
  background: linear-gradient(
    to bottom right,
    rgb(var(--v-theme-primary)),
    rgb(var(--v-theme-error))
  );
  z-index: 1;
}

.v-img{
  width: 200px;
  z-index: 2
}

@media (max-width: 600px) {
  .v-img {
    width: 100px;
  }
}

.btn-gradient {
  background: linear-gradient(rgb(var(--v-theme-background)), rgb(var(--v-theme-background))) padding-box,
    linear-gradient(300deg, rgb(0, 191, 143), rgb(117, 89, 255)) border-box !important;
  border: 2px solid transparent !important;
  color:rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity)) !important;
}
</style>