<template>
  <div style="flex: 1;" class="_flex _fd-co">
    <AuthenticatedHeader v-if="authenticated" />
    <UnauthenticatedHeader v-if="!authenticated" />
    <br>
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
import ResponseMsg from "@/components/ResponseMsg.vue";
import Footer from "@/components/Footer.vue";

import AuthenticatedHeader from "./components/AuthenticatedHeader.vue";
import UnauthenticatedHeader from "./components/UnauthenticatedHeader.vue";

import { uauth } from "./utils/auth";

export default {
  components: {
    ResponseMsg,
    Footer,
    AuthenticatedHeader,
    UnauthenticatedHeader,
  },

  data() {
    return {
      authenticated: uauth.isAuthenticated(),
    }
  },
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