<template>

    <div v-if="!folderExists" class="__b _flex _cc _fd-co">
        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24">
            <path
                d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 9.236 2.247 15.968-3.405 15.968-9.457 0-5.812-5.701-10.007-12-10.007zm0 15c-.565 0-1.024-.459-1.024-1.025 0-.565.459-1.024 1.024-1.024.566 0 1.024.459 1.024 1.024 0 .566-.458 1.025-1.024 1.025zm1.606-4.858c-.74.799-.775 1.241-.766 1.785h-1.643c-.006-1.208.016-1.742 1.173-2.842.469-.446.84-.799.788-1.493-.047-.66-.599-1.004-1.117-1.004-.581 0-1.261.432-1.261 1.649h-1.646c0-1.966 1.155-3.237 2.941-3.237.849 0 1.592.278 2.09.783.468.473.709 1.125.7 1.883-.013 1.134-.704 1.878-1.259 2.476z" />
        </svg>

        <br>

        <p class="__b __tal __tgl">Whoops!</p>

        <br>

        <p class="__b __tal __tm">We couldn't seem to find this folder</p>
    </div>

    <br>

    <div v-if="folderExists" class="__15 __w __mlauto __mrauto _flex _fd-co">
        <p class="__b __tal __txl">Edit Folder</p>

        <br>

        <div class="__b _flex _jc-en">
            <div @click="confirmEdit"
                :class="['create-btn', '_m-xs-b', '_m-xs-cc', '__padxs', '_flex', '__hv', '__hv-4', '__bd-4', '__bod', '_fd-ro', '__bg-none', '__po', { 'processing': processing }]">
                <p class="__txt-3">Confirm Edit</p>
            </div>
        </div>

        <br>

        <form @submit.prevent="confirmEdit" class="__b _flex __mlauto __mrauto _fd-co _cc __padsm">
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
                    :style="`color: var(--${folder.theme}2)`">{{ text.toSentenceCase(folder.theme) }}</strong></p>

            <br>

            <div class="__b _flex _fd-ro _cc _fw-wr">

                <div class=" _sm-b" v-for="v in themes"
                    style="flex-grow: 1; margin: 5px; width: 200px; height: 200px; position: relative;">
                    <img :src="`/themes/${v}.webp`" style="object-fit: cover; width: 100%; height: 100%;">
                    <div @click="changeTheme(v)"
                        style="position: absolute; top: 0; left: 0; background: rgba(0, 0, 0, 0.5);"
                        :class="[['_flex', '__b', '__hack', '_cc', '__po', '__bo-5'], v == this.folder.theme ? [`__bd-${v}`] : ['__bo-grey-10'],]">
                        <p class="__txt-grey-10 __tmd">{{ text.toSentenceCase(v) }}</p>
                    </div>
                </div>

            </div>

            <br>

            <div class="__b _flex _jc-en">
                <div @click="confirmEdit"
                    :class="['create-btn', '_m-xs-b', '_m-xs-cc', '__padxs', '_flex', '__hv', '__hv-4', '__bd-4', '__bod', '_fd-ro', '__bg-none', '__po', { 'processing': processing }]">
                    <p class="__txt-3">Confirm Edit</p>
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
    data() {
        return {
            folder: [],

            folderExists: true,

            hierarchy: "Root &rarr; ",

            processing: false,

            text: text,
        }
    },

    methods: {
        initialiseFolder() {
            this.ds.getFolderById(this.folderId).then(folder => {
                if (!folder) {
                    this.folderExists = false;
                    return;
                }

                this.folderExists = true;
                this.folder = folder;


                if (!this.folder.parent) {
                    this.hierarchy = `Root &rarr; `;
                } else {
                    this.ds.getAncestors(this.folder.id, true).then(ps => {
                        let parents = ps;

                        let str = "Root";

                        parents.forEach(p => {
                            let theme;

                            this.ds.getFolderById(p.id).then(f => {
                                theme = f.theme; str = `${str} &rarr; <span style='color: var(--${theme}2)'>${p.name}</span>`;

                                str = `${str} &rarr; `;

                                this.hierarchy = str;
                            });
                        })
                    })
                }
            })
        },

        confirmEdit() {
            if (this.processing) return;

            this.processing = true;

            let name = text.cleanup(this.folder.name);
            let theme = this.folder.theme;
            let parent = this.folder.parent;

            if (name.length == 0) {
                useResponseStore().updateResponse('Folder name cannot be empty', 'warn');
                this.processing = false;
                return;
            }

            if (name.length > 150) {
                useResponseStore().updateResponse('Folder name cannot exceed 150 characters', 'warn');
                this.processing = false;
                return;
            }

            if (!this.themes.includes(this.folder.theme)) {
                useResponseStore().updateResponse('Invalid theme', 'warn');
                this.processing = false;
                return;
            }

            this.ds.updateFolder(this.folderId, name, parent, theme).then(r => {
                if (!r) {
                    useResponseStore().updateResponse('Failed to update folder', 'err');
                    this.processing = false;
                    return;
                } else {
                    useResponseStore().updateResponse('Folder updated successfully', 'succ');
                    this.$router.push({ path: `/folder/${this.folderId}` });
                    return;
                }
            });
        },

        changeTheme(v) {
            if (this.folder.theme != v) {
                this.folder.theme = v;
            }
        },
    },

    computed: {
        folderId() {
            return this.$route.params.id;
        },

        ds() {
            return useDataStore();
        },

        themes() {
            return this.ds.getThemes();
        },
    },

    created() {
        this.initialiseFolder();
    },

    watch: {
        folderId(newVal, oldVal) {
            this.initialiseFolder();
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