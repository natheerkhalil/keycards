<template>
  <div style="margin-top: 25px;" class="__b _flex _fd-co _cc">

    <router-link style="margin-bottom: 20px; " v-for="v in folders" class="__nun" to="folder/1">

      <div
        :style="`border-color: var(--${v.theme}3); position: relative; background-size: cover; background-image: url('/themes/${v.theme}.png'); background-position: center;`"
        :class="`folder __po __hv-6 __hv __13 __w _flex __mlauto __mauto _fd-co __padsm __bdxs __bo-2`">


        <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5);">
        </div>

        <div style="z-index: 999;" class="__b _flex _fd-co">
          <div class="__b _flex _jc-be _ai-ce _m-sm-fd-co _m-sm-cc">

            <p @click="preventDefault"
              :style="`color: var(--${v.theme}4); white-space: wrap; max-width: 90%; outline: none;`"
              :id="`ftitle_${v.id}`" :contenteditable="v.editing"
              :class="[v.editing ? ['__un', '__bo-err-1', '__bod'] : '', '__txt-4', '__tlg', '__padxs', '__bo']">{{
                v.name }}</p>

            <p :style="`color: var(--${v.theme}4)`">{{ v.cards.total }} cards</p>
          </div>
          <br>
          <div
            style="background: linear-gradient(to right, var(--err_4) 0%, var(--err_5) 33.33%, var(--succ_5) 33.33%, var(--succ_5) 66.66%, var(--grey_5) 66.66%, var(--grey_5) 100%);"
            class="progress">
            <div class="progress-overlay">
              <span class="__bo __txt-err-4">{{ v.cards.err }}</span>

              &nbsp;

              <span class="__txt-grey-10">/</span>

              &nbsp;

              <span class="__bo __txt-succ-2">{{ v.cards.succ }}</span>

              &nbsp;

              <span class="__txt-grey-10">/</span>

              &nbsp;

              <span class="__bo __txt-grey-3">{{ v.cards.grey }}</span>
            </div>
          </div>
          <br>
          <div class="__b _flex _jc-en _ai-ce _fd-ro">
            <svg :id="`share_${v.id}`" @click="share" class="__po __hfi-1" :style="`fill: var(--${v.theme}4)`"
              width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
              <path
                d="M16.272 5.451c-.176-.45-.272-.939-.272-1.451 0-2.208 1.792-4 4-4s4 1.792 4 4-1.792 4-4 4c-1.339 0-2.525-.659-3.251-1.67l-7.131 3.751c.246.591.382 1.239.382 1.919 0 .681-.136 1.33-.384 1.922l7.131 3.751c.726-1.013 1.913-1.673 3.253-1.673 2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4c0-.51.096-.999.27-1.447l-7.129-3.751c-.9 1.326-2.419 2.198-4.141 2.198-2.76 0-5-2.24-5-5s2.24-5 5-5c1.723 0 3.243.873 4.143 2.201l7.129-3.75zm3.728 11.549c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm-15-9c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm15-7c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3z" />
            </svg>

            &nbsp; &nbsp;

            <svg :id="`destroy_${v.id}`" @click="destroy" class="__po __hfi-1" :style="`fill: var(--${v.theme}4)`"
              width="24" height="24" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round"
              stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 3h6v-1.75c0-.066-.026-.13-.073-.177-.047-.047-.111-.073-.177-.073h-5.5c-.066 0-.13.026-.177.073-.047.047-.073.111-.073.177v1.75zm11 1h-16v18c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-18zm-10 3.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v12c0 .276.224.5.5.5s.5-.224.5-.5v-12zm5 0c0-.276-.224-.5-.5-.5s-.5.224-.5.5v12c0 .276.224.5.5.5s.5-.224.5-.5v-12zm8-4.5v1h-2v18c0 1.105-.895 2-2 2h-14c-1.105 0-2-.895-2-2v-18h-2v-1h7v-2c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v2h7z" />
            </svg>

            &nbsp; &nbsp;

            <svg v-if="!v.editing" :id="`edit_${v.id}`" @click="edit" class="__po __hfi-1"
              :style="`fill: var(--${v.theme}4)`" width="24" height="24" xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd" clip-rule="evenodd">
              <path
                d="M8.071 21.586l-7.071 1.414 1.414-7.071 14.929-14.929 5.657 5.657-14.929 14.929zm-.493-.921l-4.243-4.243-1.06 5.303 5.303-1.06zm9.765-18.251l-13.3 13.301 4.242 4.242 13.301-13.3-4.243-4.243z" />
            </svg>

            <svg class="__po __hfi-4" :id="`confirm-edit_${v.id}`" @click="confirmEdit" v-if="v.editing" width="24"
              height="24" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
              <path
                d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z">
              </path>
            </svg> <span v-if="v.editing">&nbsp; &nbsp;</span>
            <svg class="__po __hfi-4" :id="`cancel-edit_${v.id}`" @click="cancelEdit" v-if="v.editing" width="19"
              height="19" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
            </svg>

          </div>

        </div>

      </div>

    </router-link>
  </div>
</template>

<script>
import { uauth } from "@/utils/auth";

import { request } from "@/utils/api";

import { useResponseStore } from "@/stores/response";

export default {

  data() {
    return {
      // UAUTH
      uauth: uauth,

      // CARDS
      cards: localStorage.getItem("cards") ? JSON.parse(localStorage.getItem("cards")) : [],

      // FOLDERS
      folders: localStorage.getItem("folders") ? JSON.parse(localStorage.getItem("folders")) : [],
    }
  },

  computed: {
    folders() {
      const updatedFolders = { ...this.folders };

      Object.keys(updatedFolders).forEach(folderId => {
        updatedFolders[folderId].cards = this.cards.filter(card => card.folder === parseInt(folderId));
      });

      return updatedFolders;
    }
  },

  beforeUnmount() {
  },

  created() {
    setInterval(() => {
      if (!uauth.isAuthenticated()) {
        window.location.href = '/';
      }
    }, 1000);
  },

  methods: {
    destroy(e) {
      e.preventDefault();

      let id = e.target.id.split("_")[1] || e.target.parentElement.id.split("_")[1];

      if (window.confirm("Are you sure you want to delete this folder?")) {
        //alert("Deleted folder with ID: " + id);
      }
    },

    edit(e) {
      e.preventDefault();

      let id = e.target.id.split("_")[1] || e.target.parentElement.id.split("_")[1];

      this.folders.find(f => f.id == id).editing = true;

      document.getElementById("ftitle_" + id).focus();
    },
    confirmEdit(e) {
      e.preventDefault();

      let id = e.target.id.split("_")[1] || e.target.parentElement.id.split("_")[1];

      let name = document.getElementById("ftitle_" + id).textContent.trim();

      if (name.length > 0 && name.length <= 50) {
        this.folders.find(f => f.id == id).name = document.getElementById("ftitle_" + id).textContent.trim();

        this.folders.find(f => f.id == id).editing = false;
      } else {
        useResponseStore().updateResponse("Folder name should be between 1 and 50 characters long.", "warn");
      }
    },
    cancelEdit(e) {
      e.preventDefault();

      let id = e.target.id.split("_")[1] || e.target.parentElement.id.split("_")[1];

      this.folders.find(f => f.id == id).editing = false;

      document.getElementById("ftitle_" + id).textContent = this.folders.find(f => f.id == id).name;
    },

    share(e) {
      e.preventDefault();

      let id = e.target.id.split("_")[1] || e.target.parentElement.id.split("_")[1];

      this.$router.push(`folder/${id}/share`);
    },

    preventDefault(e) {
      e.preventDefault();
    }
  }
}
</script>

<style scoped>
p {
  white-space: nowrap;
}

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

.folder:hover {
  opacity: 0.9;
}

/*
.folder:hover svg {
  transition: 0.2s;
  fill: white;
}

.folder:hover p {
  transition: 0.2s;
  color: white;
}

.folder:hover {
  border-color: white;
}*/
</style>