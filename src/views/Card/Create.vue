<template>
    <div class="__15 __w __mlauto __mrauto _flex _fd-co">
        <p class="__b __tal __txl">Create Cards for <strong :style="`color: var(--${folder.theme})`">{{ folder.name
                }}</strong></p>

        <br>

        <div class="__b _flex _jc-en">
            <div @click="create"
                class="create-btn _m-xs-b _m-xs-cc __padxs _flex __hv __hv-4 __bd-4 __bod _fd-ro __bg-none __po">
                <p class="__txt-3">Create Card(s)</p>
            </div>
        </div>

        <br>

        <form @submit.prevent="create" class="__b _flex __mlauto __mrauto _fd-co">
            <div v-for="c, i in cards" class="__b _flex _cc _fd-co">
                <br v-if="i != 0">
                <div class="__b _flex _fd-ro _jc-be _m-sm-fd-co">
                    <textarea maxlength="9999" placeholder="Question" v-model="cards[i]['q']" class="qa"></textarea>
                    <br class="_hide _m-sm-flex">
                    <span class="_sm-hide">&nbsp; &nbsp; &nbsp;</span>
                    <textarea maxlength="9999" placeholder="Answer" v-model="cards[i]['a']" id="" class="qa"></textarea>
                </div>
                <br>
                <div style="margin-bottom: 7.5px;" class="__b _flex _jc-en">
                    <svg v-if="cards.length > 1" @click="deleteCard(i)" class="__po __fi-err-5 __hfi-err-6" width="24"
                        height="24" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round"
                        stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m20.015 6.506h-16v14.423c0 .591.448 1.071 1 1.071h14c.552 0 1-.48 1-1.071 0-3.905 0-14.423 0-14.423zm-5.75 2.494c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-4.5 0c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-.75-5v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-16.507c-.413 0-.747-.335-.747-.747s.334-.747.747-.747zm4.5 0v-.5h-3v.5z"
                            fill-rule="nonzero" />
                    </svg>
                </div>
                <hr class="__b __bg-err-4">
            </div>
            <br>
            <div @click="addCard" class="__b _flex _jc-en">
                <div class="add">
                    <svg width="25" height="25" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round"
                        stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
                            fill-rule="nonzero" />
                    </svg>
                </div>
            </div>
        </form>

        <br>

        <div class="__b _flex _jc-en">
            <div @click="create"
                class="create-btn _m-xs-b _m-xs-cc __padxs _flex __hv __hv-4 __bd-4 __bod _fd-ro __bg-none __po">
                <p class="__txt-3">Create Card(s)</p>
            </div>
        </div>

    </div>
</template>

<style scoped>
.qa {
    padding: 10px;
    border: 1px solid var(--grey_7);
    border-radius: 2.5px;
    min-width: 48%;
    resize: none;
    outline: none;
    height: 150px;
}

.create-btn:hover p {
    color: var(--grey_10);
}

.add {
    border-radius: 50%;
    padding: 7.5px;
    border: 2px solid #c84444;
    background: #c84444;
    transition: 0.25s;
    cursor: pointer;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.add:hover {
    background: white;
}

.add svg {
    fill: white;
    transition: 0.25s;
}

.add:hover svg {
    fill: #c84444;
}
</style>

<script>
import { useResponseStore } from '@/stores/response';

import { useDataStore } from '@/stores/data';

export default {
    methods: {
        create() {
            let exceedLimit = false;
            let empty = false;

            if (this.cards.length == 0) {
                useResponseStore().updateResponse("No cards created yet.", "warn");
                return;
            }

            if (this.cards.length > 100) {
                useResponseStore().updateResponse("You can't create more than 100 cards.", "warn");
                return;
            }

            this.cards.forEach((card, i) => {
                let q = card.q.trim();
                let a = card.a.trim();

                if (q.length == 0 || a.length == 0) {
                    empty = true;
                }

                if (q.length > 9999 || a.length > 9999) {
                    exceedLimit = true;
                }

                card.q = card.q.trim();
                card.a = card.a.trim();
            });

            if (empty) {
                useResponseStore().updateResponse("Some of the questions or answers are empty.", "warn");
                return;
            }

            if (exceedLimit) {
                useResponseStore().updateResponse("Some of the questions or answers exceed the limit of 10,000 characters.", "warn");
                return;
            }

            this.cards.forEach((card, i) => {
                let id = Math.floor(Math.random() * 1000000000);
                while (useDataStore().readCard(id)) {
                    id = Math.floor(Math.random() * 1000000000);
                }
                useDataStore().addCard([id, card.q, card.a, this.folder.id]);
            });

            useResponseStore().updateResponse("Cards created successfully.", "succ");
            this.$router.push({ path: `/folder/${this.folder.id}` });
        },

        addCard() {
            this.cards.push({
                q: "",
                a: ""
            });
        },
        deleteCard(index) {
            this.cards.splice(index, 1);
        },

        setFolder() {
            let folder = this.$route.query.f;

            if (!folder) {
                this.$router.push({ name: '404' });
                return;
            }

            if (!this.folders.find(f => f.id == folder)) {
                this.$router.push({ name: '404' });
                return;
            }

            this.folder = this.folders.find(f => f.id == folder);
        },
    },

    created() {
        this.setFolder();
    },

    data() {
        return {
            folder: null,

            folders: useDataStore().getFolders(),

            cards: [
                {
                    q: "q",
                    a: "a"
                }
            ]
        }
    }
}
</script>