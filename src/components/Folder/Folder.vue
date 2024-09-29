<template>
    <div style="position: relative; " class="_flex __b _fd-co" :style="marginLeftStyle">

        <div v-if="this.initialised" @click="selectFolder(folder.id, $event)" style="margin-bottom: 10px;" :id="`fmsearch_${folder.id}`"
            class="fmsearch __b _flex _fd-ro">
            <div :style="`position: relative; margin-bottom: 10px; background-position: centre; background-size: cover; background-image: url('/themes/${folder.theme}.png')`"
                class="folder-content __po __b _flex _fd-ro __bdxs __padsm">

                <div class="__bdxs"
                    style="z-index: 1; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5);">
                </div>

                <span v-if="children.length > 0" style="z-index: 2; margin: 5px;" class="__txt-grey-10 __hv __ht-grey-9"
                    @click="toggleFolder">{{
                        toggleIcon }}</span>

                <div style="z-index: 2;" class="_flex _fd-ro _ai-ce _jc-be">
                    <!-- MOVE FOLDER NAME -->
                    <p class="__bo __tmd __tle" :style="`color: var(--${folder.theme}4)`">{{ folder.name }}</p>

                    <!-- MOVE FOLDER CARD COUNT -->
                    <p class="__txt-grey-8">&nbsp;&nbsp;&nbsp; <strong>{{ ds.minimalFolderData(folder.id).count }}&nbsp;</strong>cards</p>
                </div>
            </div>

            <!-- <svg v-if="folder.parent" style="top: 5px; left: 5px; position: absolute; z-index: 9"
                :fill="`var(--${folder.theme}3)`" xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                viewBox="0 0 24 24">
                <path
                    d="M16 8v-4l8 8-8 8v-4h-8.929c-9.059 0-7.134-9.521-6.335-11.418.789 2.445 2.465 3.418 5.372 3.418h9.892z" />
            </svg>-->
        </div>

        <div v-if="initialised && !collapsed" class="_flex _fd-co">
            <Folder @select-folder="(id, $event) => selectFolder(id, $event)" v-for="child in children" :key="child.id" :folder="child"
                :allFolders="allFolders" :level="level + 1" />
        </div>
    </div>

</template>

<script>
import { useDataStore } from '@/stores/data';
import { useResponseStore } from '@/stores/response';

export default {
    data() {
        return {
            folders: [],
            cards: [],

            cardCount: [],

            collapsed: false
        };
    },

    computed: {
        toggleIcon() {
            return this.collapsed ? '▶' : '▼';
        },

        rootFolders() {
            return this.folders.filter(folder => folder.parent === null);
        },

        children() {
            return this.allFolders.filter(f => f.parent === this.folder.id);
        },
        marginLeftStyle() {
            return {
                marginLeft: `${this.level * 15}px`,
                width: `calc(100% - ${this.level * 15}px)`
            };
        },

        ds() {
            return useDataStore();
        },

        initialised() {
            return true;
        }
    },

    created() {
        this.ds.getAllCards().then(cards => {
            this.cards = cards;

            this.ds.getAllFolders().then(folders => {
                this.folders = folders;

                for (let f of folders) {
                    this.ds.getDescendantCards(f.id).then(cards => {
                        this.cardCount.push({
                            id: f.id,
                            count: cards.length
                        })
                    })
                }
            });
        });
    },

    methods: {
        toggleFolder(e) {
            e.preventDefault();
            e.stopPropagation();

            this.collapsed = !this.collapsed;
        },

        selectFolder(id, event) {
            this.$emit("selectFolder", id);

            event.preventDefault();
            event.stopPropagation();
        },
    },

    watch: {},

    props: [
        'folder', 'allFolders', 'level', 'omit'
    ],
};
</script>