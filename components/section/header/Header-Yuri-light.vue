<script setup>
import { ref } from "vue";
import { baseURL, headerMenu } from "@/data/YuriData";
import ChoseTheme from "@/components/shared/chooseTheme.vue"
const drawer = ref(null);

</script>

<template>
  <div>
    <v-app-bar
      app
      flat
      class="app-header position-relative navbar-light header1"
    >
      <v-container class="py-0 fill-height">
        <v-toolbar>
          
          <div class="logo">
            <!-- <LcLogoPurpleLogo /> -->
            <ChoseTheme/>
          </div>
          <!-- Desktop view Navigation -->
          <div
            class="navigation ml-auto"
            v-bind:class="[isActive ? 'd-block' : '']"
            @click="isActive = !isActive"
          >

            <ul class="navbar-nav d-flex" min-height="auto">
              <li
                class="nav-item"
                v-for="nav in headerMenu"
                :key="nav.title"
                text
              >
                <NuxtLink
                  :to="nav.href"
                  v-scroll-to="nav.href"
                  class="nav-link"
                  >{{ nav.title }}</NuxtLink
                >
              </li>
            </ul>
          </div>
          <!-- login-regiter -->
           <router-link to="/courses" class="text-decoration-none">
             <v-btn
               class="btn px-6 bg-primary ml-2 d-md-flex d-none rounded-pill"
               flat
             >
                 Cursos
             </v-btn>
           </router-link>
          
          <v-app-bar-nav-icon
            width="30"
            class="d-md-none d-sm-flex drawer-icon ml-auto  mr-0"
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>

        </v-toolbar>
      </v-container>      
    </v-app-bar>
      </div>
    <!-- -----------------------------------------------
          End Header
    ----------------------------------------------- -->

    <!----sidebar menu drawer start----->
    <div class="nav1">
    <v-navigation-drawer v-model="drawer" temporary>
      <div
        class="navigation"
        style="margin-top: 100px;"
        v-bind:class="[isActive ? 'd-block' : '']"
        @click="isActive = !isActive"
      >
        <ul class="navbar-nav py-4" min-height="auto">
          <li class="nav-item  mb-3" v-for="nav in headerMenu" :key="nav.title" text>
            <NuxtLink :to="nav.href" v-scroll-to="nav.href" class="nav-link text-dark">{{
              nav.title
            }}</NuxtLink>
          </li>
          <li class="nav-item mx-3 mt-4 ">
            <router-link to='/contact' class="text-decoration-none">
                <v-btn
                  class="btn bg-primary-light "
                  flat block
                  variant="outlined"
                  color="primary"
                >
                  Contato
                </v-btn>
            </router-link>
          </li>  
        </ul>
      </div>
    </v-navigation-drawer>
    </div>
</template>
