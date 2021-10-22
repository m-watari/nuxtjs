<template>
<div>
    <v-card-text>
        <h3 class="display-2">store</h3>
        <h5 class="subtitle-1">ボタンクリックでstoreのテキストを変更</h5>
    </v-card-text>
    <v-card class="mt-5 mb-8">
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-card
                class="pa-2"
                outlined
                tile
              >
                {{ $store.state.message }}
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
                <v-btn @click="messageChange" tile outlined color="success">
                    <v-icon left>mdi-pencil</v-icon> Message Change
                </v-btn>
            </v-col>
            <v-col cols="4">
                <v-btn @click="messageReturn" tile outlined color="pink">
                    <v-icon left>mdi-pencil</v-icon> Message Return
                </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
    export default {
        methods: {
            messageChange() {
                this.$store.commit("storeMessageChange");
            },
            messageReturn() {
                this.$store.commit("storeMessageReturn");
            }
        }
    };
</script>