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
                    <p class="__bo __tmd __tle" :style="`color: var(--${folder.theme}4)`">{{ ds.getAncestors(folder.id,
                        false).map(a => a.name).join(" &rarr; ") }}</p>

                    <!-- MOVE FOLDER CARD COUNT -->
                    <p class="__txt-grey-8">&nbsp;&nbsp;&nbsp; <strong>{{ ds.getDescendantCards(folder.id).length
                            }}</strong> cards</p>
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
            folders: useDataStore().getFolders(),

            cards: useDataStore().getCards(),

            ds: useDataStore(),
        };
    },

    computed: {

    },

    methods: {
        selectFolder(e) {
            this.$emit("selectFolder", e);
        },
    },

    props: [
        'folder', 'allFolders', 'level',

        'move', 

        'cards'
    ],
};
</script>