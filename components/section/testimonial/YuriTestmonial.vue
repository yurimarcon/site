<script setup lang="ts">
import { ref } from "vue";
import {Testimonials} from '@/data/YuriData';
</script>
<template>
  <div>
    <div class="testimonial-component mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Testimonial Text
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">
                Veja algumas avaliações
              </h2>
              <p class="text-muted">
                Essas são apenas algumas das avaliações dos alunos,
                mas fuique a vontade para navegar nas avaliações dentro
                da própria plataforma.
              </p>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Testimonial Text
        ----------------------------------------------- -->
        <!-- -----------------------------------------------
            Start Testimonial
        ----------------------------------------------- -->
        <v-row class="mt-13" justify="center">
          <v-col cols="12" md="4" sm="6" v-for="card in Testimonials" :key="card.name">
            <v-card class="card-shadow" min-height="220">
              <v-card-text class="pa-sm-10 pa-5" style="height: 130px;">
                <p class="text-body-1 mb-8 text-dark">“{{ card.testimonial }}”</p>
              </v-card-text>
              <v-card-actions class="pl-10">
                <div class="d-flex align-center">
                  <v-avatar size="60">
                    <img :src="card.img" :alt="card.img" height="60"/>    
                  </v-avatar>         
                  <div class="ml-5">
                    <h6 class="text-uppercase font-weight-medium font-14">
                      {{ card.name }}
                    </h6>
                    <div class="d-flex align-center">
                      <a
                        class="error--text"
                        v-for="social in card.socialicon"
                        :key="social.icon"  
                      >
                        <i :class="social.icon"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <!-- -----------------------------------------------
            End Testimonial
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
