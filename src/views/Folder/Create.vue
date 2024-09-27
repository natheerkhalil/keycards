<template>
    <div class="__15 __w __mlauto __mrauto _flex _fd-co">
        <p class="__b __tal __txl">Create Folder</p>

        <br>

        <div class="__b _flex _jc-en">
            <div @click="createFolder"
                :class="`create-btn _m-xs-b _m-xs-cc __padxs _flex __hv __hv-4 __bd-4 __bod _fd-ro __bg-none __po ${processing ? 'processing' : ''}`">
                <p class="__txt-3">Create Folder</p>
            </div>
        </div>

        <br>

        <form @submit.prevent="createFolder" class="__b _flex __mlauto __mrauto _fd-co _cc __padsm">
            <input maxlength="150" v-model="folder.name"
                style="width: 750px; max-width: 100%; border-bottom: 1px solid var(--grey_7);" type="text"
                placeholder="Name" class="__tmd __padxs __bg-none __bo-none __txt-grey-2">
            <br>
            <p class="__tmd __tle __txt-grey-4 __padxs"
                style="width: 750px; max-width: 100%; border-bottom: 1px solid var(--grey_7); "><span class="__bo"
                    v-html="hierarchy"></span><span class="__bo" :style="`color: var(--${folder.theme}2)`">{{
                        folder.name }}</span>
            </p>
            <br>

            <p class="__tmd __tle __txt-grey-4 __padxs"
                style="width: 750px; max-width: 100%; border-bottom: 1px solid var(--grey_7); ">Theme - <strong
                    :style="`color: var(--${folder.theme}2)`">{{ toSentenceCase(folder.theme) }}</strong></p>

            <br>

            <div class="__b _flex _fd-ro _cc _fw-wr">

                <div class=" _sm-b" v-for="v in themes"
                    style="flex-grow: 1; margin: 5px; width: 200px; height: 200px; position: relative;">
                    <img :src="`/themes/${v}.png`" style="object-fit: cover; width: 100%; height: 100%;">
                    <div @click="changeTheme(v)"
                        style="position: absolute; top: 0; left: 0; background: rgba(0, 0, 0, 0.5);"
                        :class="[['_flex', '__b', '__hack', '_cc', '__po', '__bo-5'], v == this.folder.theme ? [`__bd-${v}`] : ['__bo-grey-10'],]">
                        <p class="__txt-grey-10 __tmd">{{ toSentenceCase(v) }}</p>
                    </div>
                </div>

            </div>

            <br>

            <div class="__b _flex _jc-en">
                <div @click="createFolder"
                    :class="`create-btn _m-xs-b _m-xs-cc __padxs _flex __hv __hv-4 __bd-4 __bod _fd-ro __bg-none __po ${processing ? 'processing' : ''}`">
                    <p class="__txt-3">Create Folder</p>
                </div>
            </div>

        </form>
    </div>
</template>

<script>
import { useResponseStore } from '@/stores/response';
import { useDataStore } from '@/stores/data';

import { text } from '@/main';

export default {
    methods: {
        checkForParent() {
            let parent = this.$route.query.p;

            if (parent) {
                parent = this.folders.find(f => f.id == parent);

                if (parent) {
                    this.folder.parent = parent.id;
                }
            }
        },

        createFolder() {
            if (this.processing) return;

            this.processing = true;

            let name = text.cleanup(this.folder.name);

            if (name.length == 0 || name > 150) {
                this.processing = false;
                useResponseStore().updateResponse("Folder name must be between 1 and 150 characters long", "warn");
                return;
            }

            if (this.folder.parent && !this.ds.getFolders().find(f => f.id == this.folder.parent)) {
                this.folder.parent = null;
            }

            this.folder.name = name;

            let data = [this.folder.name, this.folder.parent, this.folder.theme];

            this.ds.createFolder(data).then(res => {
                if (res) {
                    useResponseStore().updateResponse("Folder created successfully!", "succ");

                    this.$router.push("/folder/" + res);
                } else {
                    this.processing = false;
                    useResponseStore().updateResponse("Failed to create folder", "err");

                    return false;
                }
            })
        },

        changeTheme(v) {
            if (this.folder.theme != v) {
                this.folder.theme = v;
            }
        },

        toSentenceCase(text) {
            return text.replace(/\w\S*/g, function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        }
    },

    computed: {
        ds() {
            return useDataStore();
        },

        themes() {
            return this.ds.getThemes();
        },
    },

    created() {
        this.checkForParent();

        this.ds.getAllFolders().then(res => {
            this.folders = res;
        });


        if (!this.folder.parent) {
            this.hierarchy = `Root &rarr; <span style='color: var(--${this.folder.theme}2)'>${this.folder.name}</span>`;
        } else {
            
            let parents;

            this.ds.getAncestors(this.folder.parent, false).then(res => {
                console.log(res);
                parents = res;
            })

            let str = "Root";

            parents.forEach(p => {
                str += ` &rarr; <span style='color: var(--${p.theme}2)'>${p.name}</span>`;
            });
        }
    },

    data() {
        return {
            folder: {
                name: "",
                theme: useDataStore().getThemes()[Math.floor(Math.random() * useDataStore().getThemes().length)],
                insideFolder: 232,
                parent: null,
            },

            parentFolder: null,
            folders: [],

            text: text,

            hierarchy: "Root &rarr; ",

            processing: false
        }
    }
}
</script>

<style scoped>
.theme-img {
    max-width: 200px;
}

.create-btn:hover svg {
    fill: var(--grey_10);
}

.create-btn:hover p {
    color: var(--grey_10);
}

.processing {
    background: var(--grey_10);
    opacity: 0.5;
    cursor: not-allowed;
}

.processing p {
    color: var(--grey_2) !important;
}
</style>