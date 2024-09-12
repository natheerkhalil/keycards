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

        <div class="__b _flex _jc-en">
            <div @click="switchMethod" class="switch-method __po _flex _fd-ro _ai-ce">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                        d="M6 18h-2v5h-2v-5h-2v-3h6v3zm-2-17h-2v12h2v-12zm11 7h-6v3h2v12h2v-12h2v-3zm-2-7h-2v5h2v-5zm11 14h-6v3h2v5h2v-5h2v-3zm-2-14h-2v12h2v-12z" />
                </svg> &nbsp;
                <p>Switch method</p>
            </div>
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

        <form v-if="method == 's'" @submit.prevent="create" class="__b _flex __mlauto __mrauto _fd-co">
            <textarea maxlength="9999" v-model="cards2"
                style="height: 400px; max-height: 500px; overflow-y: auto; resize: none;"
                class="outline-focus __padsm __bo-grey-7 __bo-2 __b __bdsm"></textarea>
            <br>
            <div class="__b _flex _jc-be _ai-ce">
                <input maxlength="10" @input="updateSeparators" v-model="sep_cd" style="margin-right: 10px;" type="text" placeholder="Between Cards"
                    class="__bo-grey-7 __b __bod __padxs __bg-none __txt-grey-2">
                <input maxlength="10" @input="updateSeparators" v-model="sep_qa" type="text" placeholder="Between Q & A"
                    class="__bo-grey-7 __b __bod __padxs __bg-none __txt-grey-2">
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

.switch-method:hover p {
    color: var(--theme4);
}

.switch-method:hover svg {
    fill: var(--theme4);
}
</style>

<script>
import { useResponseStore } from '@/stores/response';

import { useDataStore } from '@/stores/data';

export default {
    methods: {
        switchMethod() {
            useDataStore().toggleMethod(this.method);
        },

        updateSeparators() {
            if (this.sep_cd.trim().length == 0 || this.sep_qa.trim().length == 0) {
                return;
            }

            useDataStore().updateCardSeparators(this.sep_qa.trim(), this.sep_cd.trim());
        },

        create() {
            if (this.method == "m") {
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
            } else if (this.method == "s") {
                let str = this.cards2.trim();

                if (str.length == 0) {
                    useResponseStore().updateResponse("No cards found.", "warn");
                    return;
                }

                let cds = str.split(this.sep_cd);

                if (cds.length == 0) {
                    useResponseStore().updateResponse("No cards found.", "warn");
                    return;
                }

                if (cds.length > 100) {
                    useResponseStore().updateResponse("You can't create more than 100 cards.", "warn");
                    return;
                }

                let empty_cards = false;
                let too_long = false;

                let arr = [];

                for (let i = 0; i < cds.length; i++) {
                    let c = cds[i].trim();

                    if (c.length == 0) {
                        continue;
                    }

                    let q = c.split(this.sep_qa)[0] || '';
                    let a = c.split(this.sep_qa)[1] || '';

                    q = q.trim();
                    a = a.trim();

                    if (q.length == 0 || a.length == 0) {
                        empty_cards = true;
                        continue;
                    }

                    /*if (c.split(this.sep_qa).length > 1) {
                        a = '';
                        for (let i = 0; i < a.split(this.sep_qa).length; i++) {
                            a = a + a.split(this.sep_qa)[i];
                        }
                    }*/

                    if (q.length > 9999 || a.length > 9999) {
                        too_long = true;
                        continue;
                    }

                    arr.push({
                        q: q,
                        a: a
                    });
                }

                if (empty_cards) {
                    useResponseStore().updateResponse("Some of the cards are empty.", "warn");
                    return;
                }

                if (too_long) {
                    useResponseStore().updateResponse("Some of the cards exceed the limit of 10,000 characters.", "warn");
                    return;
                }

                if (arr.length == 0) {
                    useResponseStore().updateResponse("No cards found.", "warn");
                    return;
                }

                let failed = [];

                for (let i = 0; i < arr.length; i++) {
                    let card = arr[i];

                    let id = Math.floor(Math.random() * 1000000000);
                    while (useDataStore().readCard(id)) {
                        id = Math.floor(Math.random() * 1000000000);
                    }

                    useDataStore().addCard([id, card.q, card.a, this.folder.id])

                    if (!useDataStore().readCard(id)) {
                        failed.push({
                            q: card.q,
                            a: card.a
                        })
                    }
                }

                console.log("failed", failed)


                if (failed.length > 0) {
                    useResponseStore().updateResponse("Some cards failed to create.", "warn");

                    let str = "";

                    failed.forEach((card, i) => {
                        str = str + card.q + " " + this.sep_qa + card.a + this.sep_cd + "\n\n";
                    })

                    this.cards2 = str;
                    return;
                };

                useResponseStore().updateResponse("Cards created successfully.", "succ");
                this.$router.push({ path: `/folder/${this.folder.id}` });
                
                }



            
            },
//        },

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

        this.sep_qa = useDataStore().getSeparators()['qa'];
        this.sep_cd = useDataStore().getSeparators()['cd'];

        console.log(this.method)
    },

    computed: {
        method() {
            return useDataStore().getMethod();
        }
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
            ],

            cards2: "",

            sep_qa: "",
            sep_cd: ""
        }
    },

    watch: {
        sep_cd(val) {
            this.updateSeparators();
        },
        sep_qa(val) {
            this.updateSeparators();
        }
    }
}
</script>