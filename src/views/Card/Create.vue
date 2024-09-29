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

    <div v-if="folderExists" class="__15 __w __mlauto __mrauto _flex _fd-co">

        <div :style="`background-image: url('/themes/${folder.theme}.png'); position: relative; background-position: center; background-size: cover; `"
            class="__b _flex _fd-co">

            <div
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5);">
            </div>

            <div style="z-index: 999" class="__b _flex _fd-co __txt-grey-10 __padsm __fi-grey-10">

                <div class="__b __hack _flex _cc _fd-ro">
                    <!-- SHARE FOLDER -->
                    <svg @click="shareFolder" class="__po f-svg" width="24" height="24"
                        xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                        <path
                            d="M16.272 5.451c-.176-.45-.272-.939-.272-1.451 0-2.208 1.792-4 4-4s4 1.792 4 4-1.792 4-4 4c-1.339 0-2.525-.659-3.251-1.67l-7.131 3.751c.246.591.382 1.239.382 1.919 0 .681-.136 1.33-.384 1.922l7.131 3.751c.726-1.013 1.913-1.673 3.253-1.673 2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4c0-.51.096-.999.27-1.447l-7.129-3.751c-.9 1.326-2.419 2.198-4.141 2.198-2.76 0-5-2.24-5-5s2.24-5 5-5c1.723 0 3.243.873 4.143 2.201l7.129-3.75zm3.728 11.549c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm-15-9c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm15-7c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3z" />
                    </svg>

                    &nbsp; &nbsp;

                    <!-- DELETE FOLDER -->
                    <svg @click="deleteFolder" class="__po f-svg" width="24" height="24" clip-rule="evenodd"
                        fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9 3h6v-1.75c0-.066-.026-.13-.073-.177-.047-.047-.111-.073-.177-.073h-5.5c-.066 0-.13.026-.177.073-.047.047-.073.111-.073.177v1.75zm11 1h-16v18c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-18zm-10 3.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v12c0 .276.224.5.5.5s.5-.224.5-.5v-12zm5 0c0-.276-.224-.5-.5-.5s-.5.224-.5.5v12c0 .276.224.5.5.5s.5-.224.5-.5v-12zm8-4.5v1h-2v18c0 1.105-.895 2-2 2h-14c-1.105 0-2-.895-2-2v-18h-2v-1h7v-2c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v2h7z" />
                    </svg>

                    &nbsp; &nbsp;

                    <!-- EDIT FOLDER -->
                    <svg @click="$router.push(`/folder/${folder.id}/edit`)" class="__po f-svg" width="24" height="24"
                        xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                        <path
                            d="M8.071 21.586l-7.071 1.414 1.414-7.071 14.929-14.929 5.657 5.657-14.929 14.929zm-.493-.921l-4.243-4.243-1.06 5.303 5.303-1.06zm9.765-18.251l-13.3 13.301 4.242 4.242 13.301-13.3-4.243-4.243z" />
                    </svg>
                </div>

                <br v-if="folderAncestors.length > 0">

                <!-- FOLDER HIERARCHY -->
                <div v-if="folderAncestors.length > 0" class="__b _fw-wr _flex _cc _fd-ro">
                    <div class="_flex _fd-ro _cc" v-for="v, i in folderAncestors">
                        <router-link class="__nun" :to="`/folder/${v.id}`">
                            <p class="__bo" :style="`color: var(--${v.theme}4)`">{{ v.name }}</p>
                        </router-link>
                        <svg style="margin: 0 5px;" :fill="`var(--${v.theme})4`"
                            v-if="(i + 1) != folderAncestors.length" width="24" height="24" clip-rule="evenodd"
                            fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m13.022 14.999v3.251c0 .412.335.75.752.75.188 0 .375-.071.518-.206 1.775-1.685 4.945-4.692 6.396-6.069.2-.189.312-.452.312-.725 0-.274-.112-.536-.312-.725-1.451-1.377-4.621-4.385-6.396-6.068-.143-.136-.33-.207-.518-.207-.417 0-.752.337-.752.75v3.251h-9.02c-.531 0-1.002.47-1.002 1v3.998c0 .53.471 1 1.002 1z"
                                fill-rule="nonzero" />
                        </svg>
                    </div>
                </div>

                <br>

                <div class="__b _flex _cc">
                    <p class="__b __tal">creating <strong>cards</strong> for</p>
                </div>
                <!-- FOLDER TITLE -->
                <div class="__b _flex _cc _fd-co">
                    <router-link class="__nun" :to="`/folder/${folder.id}`">
                        <p :class="`__b __tal __txl __bo`" :style="`color: var(--${folder.theme}4)`">{{ folder.name }}
                        </p>
                    </router-link>
                    <p :style="`color: var(--${folder.theme}4)`"><strong>{{ ds.minimalFolderData(folder.id).count
                            }}</strong> cards / <strong>{{
                                ds.minimalFolderData(folder.id).folderCount }}</strong> folders</p>
                </div>

                <br>

                <hr class="__b __bg-grey-10">
            </div>
        </div>

        <br>

        <div class="__b _flex _jc-en">
            <div :style="[processing ? ['opacity: 0.5', 'cursor: not-allowed'] : 'opacity: 1']" @click="create"
                :class="[' _m-xs-b', '_m-xs-cc', '__padxs', '_flex', '__hv', '__bd-4', '__bod', '_fd-ro', '__bg-none', processing ? '' : ['create-btn', '__hv-4', '__po']]">
                <p class="__txt-3">Create Card(s)</p>
            </div>
        </div>

        <br>

        <div class="__b _flex _jc-en">
            <div @click="this.ds.toggleMethod(this.method)" class="hv-children __po _flex _fd-ro _ai-ce">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                        d="M6 18h-2v5h-2v-5h-2v-3h6v3zm-2-17h-2v12h2v-12zm11 7h-6v3h2v12h2v-12h2v-3zm-2-7h-2v5h2v-5zm11 14h-6v3h2v5h2v-5h2v-3zm-2-14h-2v12h2v-12z" />
                </svg> &nbsp;
                <p>Switch method</p>
            </div><span v-if="method == 's'"> &nbsp; &nbsp; &nbsp;</span>
            <div v-if="method == 's'" @click="formatCards" class="hv-children _flex __po _fd-ro _ai-ce">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                        d="M4 1h20v2h-20v-2zm0 7h20v-2h-20v2zm0 5h20v-2h-20v2zm0 5h20v-2h-20v2zm0 5h20v-2h-20v2zm-2-22h-2v2h2v-2zm0 5h-2v2h2v-2zm0 5h-2v2h2v-2zm0 5h-2v2h2v-2zm0 5h-2v2h2v-2z" />
                </svg> &nbsp;
                <p>Format Cards</p>
            </div>
        </div>

        <br>

        <div class="__b _flex">
            <p v-if="method == 's'"><strong :class="[noOfCards > 500 ? '__txt-err-4' : '']">{{ noOfCards }}</strong> /
                <span class="__txt-grey-3">500 cards</span>
            </p>
        </div>

        <div class="__b _flex">
            <p v-if="method == 'm'"><strong :class="[cards.length > 500 ? '__txt-err-4' : '']">{{ cards.length
                    }}</strong> / <span class="__txt-grey-3">500 cards</span></p>
        </div>

        <br>

        <form v-if="method == 'm'" @submit.prevent="create" class="__b _flex __mlauto __mrauto _fd-co">
            <div v-for="c, i in cards" class="__b _flex _cc _fd-co">
                <br v-if="i != 0">
                <div class="__b _flex _fd-ro _jc-be _m-sm-fd-co">
                    <textarea maxlength="9999" placeholder="Question" v-model="cards[i]['q']"
                        class="outline-focus qa"></textarea>
                    <br class="_hide _m-sm-flex">
                    <span class="_sm-hide">&nbsp; &nbsp; &nbsp;</span>
                    <textarea maxlength="9999" placeholder="Answer" v-model="cards[i]['a']" id=""
                        class="outline-focus qa"></textarea>
                </div>
                <br>
                <div style="margin-bottom: 7.5px;" class="__b _flex _jc-en">
                    <svg v-if="cards.length > 1" @click="deleteCard(c.id)" class="__po __fi-err-5 __hfi-err-6"
                        width="24" height="24" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round"
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

        <form v-if="method == 's'" @submit.prevent="create" class="__b _flex __mlauto __mrauto _fd-co">
            <textarea :placeholder="`Question\n${this.sep_qa}\nAnswer\n${this.sep_cd}`" 
                v-model="cards2" style="height: 400px; max-height: 500px; overflow-y: auto; resize: none;"
                class="outline-focus __padsm __bo-grey-7 __bo-2 __b __bdsm"></textarea>
            <br>
            <div class="__b _flex _jc-be _ai-ce">
                <input maxlength="10" @input="updateSeparators" v-model="sep_cd" style="margin-right: 10px;" type="text"
                    placeholder="Between Cards" class="__bo-grey-7 __b __bod __padxs __bg-none __txt-grey-2">
                <input maxlength="10" @input="updateSeparators" v-model="sep_qa" type="text" placeholder="Between Q & A"
                    class="__bo-grey-7 __b __bod __padxs __bg-none __txt-grey-2">
            </div>
        </form>

        <br>

        <div class="__b _flex _jc-en">
            <div :style="[processing ? ['opacity: 0.5', 'cursor: not-allowed'] : 'opacity: 1']" @click="create"
                :class="[' _m-xs-b', '_m-xs-cc', '__padxs', '_flex', '__hv', '__bd-4', '__bod', '_fd-ro', '__bg-none', processing ? '' : ['create-btn', '__hv-4', '__po']]">
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

.outline-focus {
    outline: none
}

.outline-focus:focus {
    outline: 1px solid var(--theme4);
    border: 1px solid var(--theme4);
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

.hv-children:hover p {
    color: var(--theme4);
}

.hv-children:hover svg {
    fill: var(--theme4);
}
</style>

<script>
import { useResponseStore } from '@/stores/response';

import { useDataStore } from '@/stores/data';

import { text } from "@/utils/text";

export default {
    methods: {
        // UPDATE SEPARATORS //
        updateSeparators() {
            let sep_cd = text.cleanup(this.sep_cd, true);
            let sep_qa = text.cleanup(this.sep_qa, true);

            if (sep_cd.length == 0 || sep_qa.length == 0) {
                return;
            }

            this.ds.updateCardSeparators(sep_qa, sep_cd);
        },

        // FORMAT CARDS //
        formatCards() {
            let sep_cd = text.cleanup(this.sep_cd, true);
            let sep_qa = text.cleanup(this.sep_qa, true);

            let cs = this.cards2.split(sep_cd);

            let str = "";

            for (let i = 0; i < cs.length; i++) {
                let c = cs[i];

                c = c.replace(/(\\r\\n|\\n|\\r)/gm, '');
                c = text.cleanup(c, false);

                if (c.length == 0) {
                    continue;
                }

                if (c.split(sep_qa).length != 2) {
                    str = str + "\n" + c + "\n";
                    continue;
                }

                let q = text.cleanup(c.split(sep_qa)[0]);
                let a = text.cleanup(c.split(sep_qa)[1]);

                if (q.length == 0 || a.length == 0) {
                    str = str + "\n" + c + "\n";
                    continue;
                }

                str = str + "\n";
                str = str + q + "\n";
                str = str + sep_qa + "\n";
                str = str + a + "\n";
                str = str + sep_cd + "\n";

            }

            this.cards2 = str;
        },

        // CREATE CARDS //
        create() {
            if (this.processing) {
                return;
            }

            if (this.method == "m") {
                this.createM();
            } else if (this.method == "s") {
                this.createS();
            }
        },

        // CREATE METHOD M //
        createM() {
            this.processing = true;

            let exceedLimit = false;
            let empty = false;

            // If cards array is empty, return
            if (this.cards.length == 0) {
                this.processing = false;
                useResponseStore().updateResponse("No cards created yet.", "warn");

                return;
            }

            // If cards array has more than 500 cards, return
            if (this.cards.length > 500) {
                this.processing = false;
                useResponseStore().updateResponse("You can't create more than 500 cards.", "warn");
                return;
            }

            // Trim & check if any cards are empty or too long
            this.cards.forEach((card, i) => {
                let q = text.cleanup(card.q);
                let a = text.cleanup(card.a);

                if (q.length == 0 || a.length == 0) {
                    empty = true;
                }

                if (q.length > 9999 || a.length > 9999) {
                    exceedLimit = true;
                }

                card.q = q;
                card.a = a;
            });

            // If any cards are empty or too long, return
            if (empty) {
                this.processing = false;
                useResponseStore().updateResponse("Some of the questions or answers are empty.", "warn");
                return;
            }
            if (exceedLimit) {
                this.processing = false;
                useResponseStore().updateResponse("Some of the questions or answers exceed the limit of 10,000 characters.", "warn");
                return;
            }

            let failed = [];

            // Create cards
            this.ds.createCards(this.cards, this.folderId).then(r => {
                if (r.status) {
                    useResponseStore().updateResponse("Some cards failed to create", "warn");
                    failed = r.failed;
                    return;
                } else {
                    useResponseStore().updateResponse("Cards created successfully.", "succ");
                    // Relocate to folder page
                    this.$router.push({ path: `/folder/${this.folder.id}` });
                }
            })
        },

        // CREATE METHOD S //
        createS() {
            this.processing = true;

            try {

                // Trim text
                let str = text.cleanup(this.cards2);

                // If text is empty, return
                if (str.length == 0) {
                    this.processing = false;
                    useResponseStore().updateResponse("No cards found.", "warn");
                    return;
                }

                // Split array based on separators
                let cds = str.split(this.sep_cd);

                // If array is empty, return
                if (cds.length == 0) {
                    this.processing = false;
                    useResponseStore().updateResponse("No cards found.", "warn");
                    return;
                }

                // If array has more than 500 cards, return
                if (this.noOfCards.length > 500) {
                    this.processing = false;
                    useResponseStore().updateResponse("You can't create more than 500 cards.", "warn");
                    return;
                }

                let empty_cards = false;
                let too_long = false;

                let arr = [];

                // Run through each card

                for (let i = 0; i < cds.length; i++) {
                    // Trim card
                    let c = text.cleanup(cds[i]);

                    // If card is empty, continue to next iteration
                    if (c.length == 0) {
                        continue;
                    }

                    // Get q & a based on separators from card
                    let q = c.split(this.sep_qa)[0] || '';
                    let a = c.split(this.sep_qa)[1] || '';

                    // Trim q & a
                    q = text.cleanup(q);
                    a = text.cleanup(a);

                    // If q or a is empty, set empty_cards to true and continue to next iteration
                    if (q.length == 0 || a.length == 0) {
                        empty_cards = true;
                        continue;
                    }

                    // If q or a is too long, set too_long to true and continue to next iteration
                    if (q.length > 9999 || a.length > 9999) {
                        too_long = true;
                        continue;
                    }

                    // Add card to array
                    arr.push({
                        q: q,
                        a: a
                    });
                }

                // If any cards are empty or too long, return
                if (empty_cards) {
                    this.processing = false;
                    useResponseStore().updateResponse("Some of the cards are empty.", "warn");
                    return;
                }
                if (too_long) {
                    this.processing = false;
                    useResponseStore().updateResponse("Some of the cards exceed the limit of 10,000 characters.", "warn");
                    return;
                }

                // If array is empty, return
                if (arr.length == 0) {
                    this.processing = false;
                    useResponseStore().updateResponse("No cards found.", "warn");
                    return;
                }

                let failed = [];

                // Create cards
                this.ds.createCards(arr, this.folderId).then(r => {
                    if (!r) {
                        console.log("cards", arr);
                        useResponseStore().updateResponse("Failed to create cards.", "err");

                        this.processing = false;

                        return;
                    } else {
                        useResponseStore().updateResponse("Cards created successfully.", "succ");

                        this.$router.push({ path: `/folder/${this.folder.id}` });
                    }
                })
            } catch (err) {
                this.processing = false;
                useResponseStore().updateResponse("An error occurred while creating cards.", "err");
                console.error(err);
            }
        },


        // ADD & DELETE CARDS //
        addCard() {
            let id;

            // generate random id
            id = Math.floor(Math.random() * 1000000000000000);

            // if id exists in cards array, generate new id
            while (this.cards.some(c => c.id === id)) {
                id = Math.floor(Math.random() * 1000000000000000);
            }

            this.cards.push({
                q: "",
                a: "",
                id: id
            });
        },
        deleteCard(id) {
            this.cards = this.cards.filter(c => c.id !== id);
        },

        // SET FOLDER //
        setFolder() {
            if (!this.folderId) {
                return;
            }

            this.ds.getFolderById(this.folderId).then(t => {
                if (!t) {
                    return;
                }

                this.folder = t;

                this.folderExists = true;

                this.ds.getAncestors(this.folderId).then(ancestors => {
                    this.folderAncestors = ancestors;
                });
            });
        },
    },

    created() {
        // set all folders
        this.ds.getAllFolders().then(res => {
            this.folders = res;

            this.setFolder();
        })

        this.sep_qa = this.ds.getSeparators()['qa'];
        this.sep_cd = this.ds.getSeparators()['cd'];
    },

    computed: {
        // GET CREATION METHOD //
        method() {
            return this.ds.method;
        },

        // FOLDER ID //
        folderId() {
            return this.$route.query.f || null;
        },

        // DATA STORE //
        ds() {
            return useDataStore();
        },

        noOfCards() {
            let cs = this.cards2.split(this.sep_cd);
            let count = 0;

            for (let i = 0; i < cs.length; i++) {
                let c = text.cleanup(cs[i]);

                if (c.split(this.sep_qa).length == 2) {
                    let q = c.split(this.sep_qa)[0];
                    let a = c.split(this.sep_qa)[1];

                    q = text.cleanup(q);
                    a = text.cleanup(a);

                    if (q.length > 0 && a.length > 0) {
                        count = count + 1;
                    }
                }
            }

            return count;
        }
    },

    data() {
        return {
            processing: false,

            folder: null,
            folderExists: false,

            cards: [
                {
                    q: "",
                    a: "",
                    id: 1
                }
            ],

            cards2: "",

            sep_qa: "",
            sep_cd: "",

            text: text,

            folders: [],
            folderAncestors: []
        }
    },

    watch: {
        sep_cd(val) {
            this.updateSeparators();
        },
        sep_qa(val) {
            this.updateSeparators();
        },

        cards2(val) {
            if (this.noOfCards > 500) {
                this.processing = true;
            } else {
                this.processing = false;
            }
        }
    }
}
</script>

<!--
        // CREATE METHOD S //
        createS() {
            this.processing = true;

            try {

                // Trim text
                let str = text.cleanup(this.cards2);

                // If text is empty, return
                if (str.length == 0) {
                    this.processing = false;
                    useResponseStore().updateResponse("No cards found.", "warn");
                    return;
                }

                // Split array based on separators
                let cds = str.split(this.sep_cd);

                // If array is empty, return
                if (cds.length == 0) {
                    this.processing = false;
                    useResponseStore().updateResponse("No cards found.", "warn");
                    return;
                }

                // If array has more than 100 cards, return
                if (cds.length > 500) {
                    this.processing = false;
                    useResponseStore().updateResponse("You can't create more than 100 cards.", "warn");
                    return;
                }

                let empty_cards = false;
                let too_long = false;

                let arr = [];

                // Run through each card

                for (let i = 0; i < cds.length; i++) {
                    // Trim card
                    let c = text.cleanup(cds[i]);

                    // If card is empty, continue to next iteration
                    if (c.length == 0) {
                        continue;
                    }

                    // Get q & a based on separators from card
                    let q = c.split(this.sep_qa)[0] || '';
                    let a = c.split(this.sep_qa)[1] || '';

                    // Trim q & a
                    q = text.cleanup(q);
                    a = text.cleanup(a);

                    // If q or a is empty, set empty_cards to true and continue to next iteration
                    if (q.length == 0 || a.length == 0) {
                        empty_cards = true;
                        continue;
                    }

                    // If q or a is too long, set too_long to true and continue to next iteration
                    if (q.length > 9999 || a.length > 9999) {
                        too_long = true;
                        continue;
                    }

                    // Add card to array
                    arr.push({
                        q: q,
                        a: a
                    });
                }

                // If any cards are empty or too long, return
                if (empty_cards) {
                    this.processing = false;
                    useResponseStore().updateResponse("Some of the cards are empty.", "warn");
                    return;
                }
                if (too_long) {
                    this.processing = false;
                    useResponseStore().updateResponse("Some of the cards exceed the limit of 10,000 characters.", "warn");
                    return;
                }

                // If array is empty, return
                if (arr.length == 0) {
                    this.processing = false;
                    useResponseStore().updateResponse("No cards found.", "warn");
                    return;
                }


                let failed = [];

                // Create cards individually
                Promise.all(arr.map((card, i) => {
                    return this.ds.createCard([card.q, card.a, this.folder.id]).then(res => {
                        if (!res) {
                            failed.push({
                                q: card.q,
                                a: card.a
                            });
                        }
                    });
                })).then(() => {
                    // If failed array is not empty, update cards2 with failed cards and return
                    if (failed.length > 0) {
                        this.processing = false;
                        useResponseStore().updateResponse("Some cards failed to create.", "warn");

                        let str = "";

                        failed.forEach((card, i) => {
                            str = str + card.q + " " + this.sep_qa + card.a + this.sep_cd + "\n\n";
                        })

                        this.cards2 = str;
                        return;
                    };

                    useResponseStore().updateResponse("Cards created successfully.", "succ");

                    // If failed array is empty, relocate to folder page
                    this.$router.push({ path: `/folder/${this.folder.id}` });
                });
            } catch (err) {
                this.processing = false;
                useResponseStore().updateResponse("An error occurred while creating cards.", "err");
                console.error(err);
            }
        },
-->