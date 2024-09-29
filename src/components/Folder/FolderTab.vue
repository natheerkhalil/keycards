<template>
    <div @click="selectFolder(folder.id)" style="position: relative; " class="_flex __b _fd-co">
        <div style="margin-bottom: 10px;" :id="`fmsearch_${folder.id}`" class="fmsearch __b _flex _fd-ro">
            <div :style="`position: relative; margin-bottom: 10px; background-position: centre; background-size: cover; background-image: url('/themes/${folder.theme}.png')`"
                class="folder-content __po __b _flex _fd-ro __bdxs __padsm">

                <div class="__bdxs"
                    style="z-index: 1; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5);">
                </div>

                <div style="z-index: 2;" class="_flex _fd-ro _ai-ce _jc-be">
                    <!-- MOVE FOLDER NAME -->
                    <p v-html="hierarchy.find(h => h.id ==
                        folder.id)?.name || '. . .'" class="__bo __tmd __tle" :style="`color: var(--${folder.theme}4)`"></p>

                    <!-- MOVE FOLDER CARD COUNT -->
                    <p class="__txt-grey-8">&nbsp;&nbsp;&nbsp; <strong>{{ ds.cards.filter(c => c.folderId == folder.id).length }}</strong> cards</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { useDataStore } from '@/stores/data';

export default {
    data() {
        return {
            folders: [],
            cards: [],

            hierarchy: [],
        };
    },

    computed: {
        ds() {
            return useDataStore();
        },

        initialised() {
            return this.hierarchy.length > 0;
        }
    },

    methods: {
        selectFolder(e) {
            this.$emit("selectFolder", e);
        },
    },

    created() {
        this.ds.getAllFolders().then(folders => {
            this.folders = folders;

            for (let f of folders) {
                this.ds.getAncestors(f.id, false).then(ancestors => {
                    ancestors = ancestors.map(a => a.name).join(" &rarr; ")

                    this.hierarchy.push({
                        id: f.id,
                        name: ancestors
                    });
                })
            }
        });

        this.ds.getAllCards().then(cards => {
            this.cards = cards;
        });
    },

    props: [
        'folder', 'allFolders', 'level',

        'move',

        'cards',

        'omit'
    ],
};
</script>