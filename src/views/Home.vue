<template>
  <div style="margin-top: 25px;" class="__b _flex _fd-co _cc">

    <!-- SEARCH FOLDER -->
    <div class="__13 __w _flex _jc-en">
      <input v-model="search" type="text" placeholder="Search folder..." class="__bg-none __bo-none __padxs"
        style="border-bottom: 1px solid var(--grey_7);">
    </div>

    <br>

    <router-link style="margin-bottom: 20px; "
      v-for="v in folders.filter(f => f.name.toLowerCase().trim().includes(search.toLowerCase().trim()))" class="__nun"
      :to="`folder/${v.id}`">

      <div :id="`el-folder_${v.id}`"
        :style="`position: relative; background-size: cover; background-image: url('/themes/${v.theme}.png'); background-position: center;`"
        :class="`folder __po __hv-6 __hv __13 __w _flex __mlauto __mauto _fd-co __padsm`">


        <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5);">
        </div>

        <div style="z-index: 999;" class="__b _flex _fd-co">
          <div class="__b _flex _jc-be _ai-ce _m-sm-fd-co _m-sm-cc">

            <!-- FOLDER NAME -->
            <div class="_m-ms-cc _ai-st __padxs _flex _fd-co __b">
              <p :id="`ftitle_${v.id}`"
                :style="`color: var(--${v.theme}4); white-space: wrap; max-width: 100%; outline: none;`"
                class="__un __txt-4 __tlg __bo">{{
                  v.name }}</p>

              <!-- CHILDREN COUNT -->
              <p :style="`color: var(--${v.theme}4)`">{{ getChildrenFolders(v.id).length }} folders</p>
            </div>

            <div class="_flex _fd-co _cc">
              <!-- CARD COUNT -->
              <p :style="`color: var(--${v.theme}4)`">{{ getDescendantCards(v.id).length }} cards</p>
            </div>
          </div>

          <br>

          <div :style="`background: linear-gradient(to right, ${getFolderCardProgress(v.id)});`" class="progress">
            <!-- FOLDER CARD PROGRESS -->
            <div v-html="getFolderProgressOverlay(v.id) " class="progress-overlay">
            </div>
            <!-- FOLDER CARD PROGRESS -->
          </div>
          <br>
          <div class="__b _flex _jc-en _ai-ce _fd-ro">
            <!-- SHARE FOLDER-->
            <svg :id="`share_${v.id}`" @click="shareFolder" class="__po __hfi-1" :style="`fill: var(--${v.theme}4)`"
              width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
              <path
                d="M16.272 5.451c-.176-.45-.272-.939-.272-1.451 0-2.208 1.792-4 4-4s4 1.792 4 4-1.792 4-4 4c-1.339 0-2.525-.659-3.251-1.67l-7.131 3.751c.246.591.382 1.239.382 1.919 0 .681-.136 1.33-.384 1.922l7.131 3.751c.726-1.013 1.913-1.673 3.253-1.673 2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4c0-.51.096-.999.27-1.447l-7.129-3.751c-.9 1.326-2.419 2.198-4.141 2.198-2.76 0-5-2.24-5-5s2.24-5 5-5c1.723 0 3.243.873 4.143 2.201l7.129-3.75zm3.728 11.549c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm-15-9c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm15-7c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3z" />
            </svg>

            &nbsp; &nbsp;

            <!-- DELETE FOLDER -->
            <svg :id="`destroy_${v.id}`" @click="deleteFolder" class="__po __hfi-1" :style="`fill: var(--${v.theme}4)`"
              width="24" height="24" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round"
              stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 3h6v-1.75c0-.066-.026-.13-.073-.177-.047-.047-.111-.073-.177-.073h-5.5c-.066 0-.13.026-.177.073-.047.047-.073.111-.073.177v1.75zm11 1h-16v18c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-18zm-10 3.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v12c0 .276.224.5.5.5s.5-.224.5-.5v-12zm5 0c0-.276-.224-.5-.5-.5s-.5.224-.5.5v12c0 .276.224.5.5.5s.5-.224.5-.5v-12zm8-4.5v1h-2v18c0 1.105-.895 2-2 2h-14c-1.105 0-2-.895-2-2v-18h-2v-1h7v-2c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v2h7z" />
            </svg>

            &nbsp; &nbsp;

            <!-- EDIT FOLDER -->
            <svg :id="`edit_${v.id}`" @click="editFolder" class="__po __hfi-1" :style="`fill: var(--${v.theme}4)`"
              width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
              <path
                d="M8.071 21.586l-7.071 1.414 1.414-7.071 14.929-14.929 5.657 5.657-14.929 14.929zm-.493-.921l-4.243-4.243-1.06 5.303 5.303-1.06zm9.765-18.251l-13.3 13.301 4.242 4.242 13.301-13.3-4.243-4.243z" />
            </svg>

            &nbsp; &nbsp;

            <!-- CHANGE FOLDER THEME -->
            <div :id="`theme_${v.id}`" @click="toggleThemeChange"
              :style="`border: 1px solid white; height: 24px; width: 24px; border-radius: 50%; background: var(--${v.theme})`">
            </div>


          </div>

        </div>

        <br v-if="changeTheme.includes(v.id)">

        <!-- CHANGE THEME OPTIONS -->
        <div v-if="changeTheme.includes(v.id)" style="z-index: 999;" class="__b _flex _jc-ar _ai-ce _fw-wr">
          <div @mouseover="previewTheme" @mouseout="endPreview" :id="`${t}_${v.id}`" @click="editTheme"
            v-for="t in themes.filter(theme => theme !== v.theme)"
            :style="`border: 1px solid white; height: 30px; width: 30px; border-radius: 50%; background: var(--${t})`">
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
import { useDataStore } from "@/stores/data";

export default {

  data() {
    return {
      // UAUTH
      uauth: uauth,

      // SEARCH
      search: "",

      // ACTIVELY CHANGING THEME
      changeTheme: []
    }
  },

  computed: {
    cards() {
      return useDataStore().getCards();
    },

    folders() {
      return useDataStore().getOrphanFolders();
    },

    themes() {
      return useDataStore().getThemes();
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
    // GET FOLDER RELATIVES //
    getFolderCardProgress(id) {
      return useDataStore().getFolderCardProgress(id);
    },
    getFolderCardStatus(id, status) {
      return useDataStore().getFolderCardStatus(id, status);
    },
    getFolderProgressOverlay(id) {
      return useDataStore().getFolderProgressOverlay(id);
    },
    getFolderCards(id) {
      return useDataStore().getCardsByFolder(id);
    },
    getDescendantCards(id) {
      return useDataStore().getDescendantCards(id);
    },
    getChildrenFolders(id) {
      return useDataStore().getChildren(id);
    },

    // DELETE FOLDER //
    deleteFolder(e) {
      e.preventDefault();

      let id = e.target.id.split("_")[1] || e.target.parentElement.id.split("_")[1];

      if (window.confirm("Are you sure you want to delete this folder?")) {
        useDataStore().deleteFolder(id);
      }
    },

    // EDIT FOLDER //
    editFolder(e) {
      e.preventDefault();

      let id = e.target.id.split("_")[1] || e.target.parentElement.id.split("_")[1];

      this.$router.push(`/folder/edit/${id}`);
    },

    // CHANGE FOLDER THEME //
    editTheme(e) {
      e.preventDefault();

      let id = e.target.id.split("_")[1] || e.target.parentElement.id.split("_")[1];
      let col = e.target.id.split("_")[0] || e.target.parentElement.id.split("_")[0];

      this.folders.find(f => f.id == id).theme = col;

      useDataStore().updateFolderTheme(id, col);

      id = Number(id);
      if (this.changeTheme.includes(id)) {
        this.changeTheme.splice(this.changeTheme.indexOf(id), 1);
      } else {
        this.changeTheme.push(id);
      }
    },
    // TOGGLE THEME CHANGE //
    toggleThemeChange(e) {
      e.preventDefault();

      let id = e.target.id.split("_")[1] || e.target.parentElement.id.split("_")[1];
      id = Number(id);

      if (this.changeTheme.includes(id)) {
        this.changeTheme.splice(this.changeTheme.indexOf(id), 1);
      } else {
        this.changeTheme.push(id);
      }
    },
    // PREVIEW THEME //
    previewTheme(e) {
      let id = e.target.id.split("_")[1] || e.target.parentElement.id.split("_")[1];
      let col = e.target.id.split("_")[0] || e.target.parentElement.id.split("_")[0];

      let el = document.getElementById("el-folder_" + id);
      let title = document.getElementById("ftitle_" + id);

      el.style.backgroundImage = `url('/themes/${col}.png')`;
      title.style.color = `var(--${col}4)`;
    },
    // END PREVIEW THEME //
    endPreview(e) {
      let id = e.target.id.split("_")[1] || e.target.parentElement.id.split("_")[1];

      let col = this.folders.find(f => f.id == id).theme;

      let el = document.getElementById("el-folder_" + id);
      let title = document.getElementById("ftitle_" + id);

      el.style.backgroundImage = "url('/themes/" + col + ".png')";
      title.style.color = `var(--${col}4)`;
    },

    // SHARE FOLDER //
    shareFolder(e) {
      e.preventDefault();

      let id = e.target.id.split("_")[1] || e.target.parentElement.id.split("_")[1];

      this.$router.push(`folder/${id}/share`);
    },
  }
}
</script>

<style scoped>
p {
  white-space: nowrap;
}

.folder:hover {
  opacity: 0.9;
}
</style>