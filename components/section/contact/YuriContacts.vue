<script setup >
import {socialMedias} from '@/data/YuriData';
</script>

<template>
  <div>
    <div class="feature2-component mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Feature 2 Text
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" md="10" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">
                Fique a vontade para entrar em contato
              </h2>
                <blockquote cite="Mahatma Gandhi">
                    <p class="text-muted">
                    "Seja a mudança que você quer ver no mundo"
                    <small> - Mahatma Gandhi - </small>
                    </p>
                </blockquote>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Feature 2 Text
        ----------------------------------------------- -->
        <!-- -----------------------------------------------
            Start Feature 2
        ----------------------------------------------- -->
        <v-row justify="center" class="feature2-spacer">
          <v-col
            cols="12"
            md="6"
            class="mb-3"
            v-for="card in socialMedias"
            :key="card.title"
          >
            <v-card elevation="0">
              <v-row>
                <v-col cols="12" sm="8" class="py-0">
                  <v-card-text>
                    <div class="d-flex align-center pt-5 pl-2 pb-4">
                      <v-row>
                        <v-col cols="3" sm="3" md="3" class="mx-auto">
                          <img
                            :src="card.img"
                            class="img-fluid rounded"
                            alt="Contact"
                          />
                        </v-col>
                        <v-col
                          cols="12"
                          sm="8"
                          class="px-md-0 d-flex align-center"
                        >
                          <h4 class="font-weight-medium font-18">
                            {{ card.title }}
                          </h4>
                        </v-col>
                      </v-row>
                    </div>
                  </v-card-text>
                </v-col>
                <v-col cols="12" sm="4">
                  <a 
                  v-if="card.href" 
                  :href="card.href" 
                  target="_blank" 
                  class="text-decoration-none"
                  >
                    <v-btn
                      block
                      class="linking bg-info feature2-action-btn mt-sm-0 mt-n5'"
                    >
                      Clique me <i class="mdi mdi-arrow-right"></i>
                    </v-btn>
                  </a>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <!-- -----------------------------------------------
            End Feature 2
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
