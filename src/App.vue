<template>
  <div style="flex: 1;" class="_flex _fd-co">
    <AuthenticatedHeader v-if="authenticated" />
    <UnauthenticatedHeader v-if="!authenticated" /><!--
    <br>
    <h1>Folders:</h1>
    <br>
    <div style="margin-bottom: 20px;" class="_flex _fd-co _cc" v-for="f in allFolders">
      <p><strong>name</strong>: {{f.name}}</p>
      <p><strong>parent</strong>: {{ f.parent }}</p>
    </div>
    <br>
    {{ "cards:" + allCards.length }}-->
    <router-view v-slot="{ Component }">
      <!--<keep-alive>-->
      <component :is="Component" />
      <!--</keep-alive>-->
    </router-view>
    <ResponseMsg></ResponseMsg>
  </div>
  <Footer></Footer>
</template>

<script>
import Footer from "@/components/Footer.vue";

import AuthenticatedHeader from "./components/AuthenticatedHeader.vue";
import UnauthenticatedHeader from "./components/UnauthenticatedHeader.vue";

import { uauth } from "./stores/auth";

import { useDataStore } from "./stores/data";
import { useResponseStore } from "./stores/response";

import ResponseMsg from "@/components/ResponseMsg.vue";

export default {
  components: {
    ResponseMsg,
    Footer,
    AuthenticatedHeader,
    UnauthenticatedHeader,
  },

  data() {
    return {
      uauth: uauth(),
      authenticated: uauth().token,

      ds: useDataStore(),

      allFolders: [],
      allCards: []
    }
  },

  created() {
    this.ds.getAllFolders().then(folders => {
      this.allFolders = folders;
    });

    this.ds.getAllCards().then(cards => {
      this.allCards = cards;
    });
  }
}
</script>

<style>
.progress {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.progress-overlay {
  background: rgba(255, 255, 255, 0.5);
  width: 100%;
  padding: 5px;
}
</style>