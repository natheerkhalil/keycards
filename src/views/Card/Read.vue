<template>
    <div v-if="!cardExists" class="__b _flex _cc _fd-co">
        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24">
            <path
                d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 9.236 2.247 15.968-3.405 15.968-9.457 0-5.812-5.701-10.007-12-10.007zm0 15c-.565 0-1.024-.459-1.024-1.025 0-.565.459-1.024 1.024-1.024.566 0 1.024.459 1.024 1.024 0 .566-.458 1.025-1.024 1.025zm1.606-4.858c-.74.799-.775 1.241-.766 1.785h-1.643c-.006-1.208.016-1.742 1.173-2.842.469-.446.84-.799.788-1.493-.047-.66-.599-1.004-1.117-1.004-.581 0-1.261.432-1.261 1.649h-1.646c0-1.966 1.155-3.237 2.941-3.237.849 0 1.592.278 2.09.783.468.473.709 1.125.7 1.883-.013 1.134-.704 1.878-1.259 2.476z" />
        </svg>

        <br>

        <p class="__b __tal __tgl">Whoops!</p>

        <br>

        <p class="__b __tal __tm">We couldn't seem to find this card</p>
    </div>


    <div v-if="cardExists" class="__15 __mlauto __mrauto _flex _fd-co __w">

        <div :style="`background-image: url('/themes/${folder.theme}.png'); position: relative; background-position: center; background-size: cover; `"
            class="__b _flex _fd-co">

            <div
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5);">
            </div>

            <div style="z-index: 999" class="__b _flex _fd-co __txt-grey-10 __padxs __fi-grey-10">

                <!-- CREATE BUTTONS -->
                <div class="__b _flex _sm-hide _jc-en _fd-ro _ai-ce">
                    <router-link class="__nun" :to="`/folder/create?p=${folder.id}`">
                        <div class="create-btn _m-xs-b _m-xs-cc __padxs _flex __hv __hv-4 _fd-ro __bg-none __po">
                            <svg class="__fi-grey-10" width="25" height="25" clip-rule="evenodd" fill-rule="evenodd"
                                stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
                                    fill-rule="nonzero" />
                            </svg> &nbsp;
                            <p class="__txt-grey-10">Create Folder</p>
                        </div>
                    </router-link> &nbsp; &nbsp;
                    <router-link class="__nun" :to="`/card/create?f=${folder.id}`">
                        <div class="create-btn _m-xs-b _m-xs-cc __padxs _flex __hv __hv-4 _fd-ro __bg-none __po">
                            <svg class="__fi-grey-10" width="25" height="25" clip-rule="evenodd" fill-rule="evenodd"
                                stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
                                    fill-rule="nonzero" />
                            </svg> &nbsp;
                            <p class="__txt-grey-10">Create Cards</p>
                        </div>
                    </router-link>
                </div>

                <!-- CREATE BUTTONS (MOBILE) -->
                <div style="margin-top: 10px;" class="__b _hide _m-sm-flex _jc-be _ai-ce _fd-ro">
                    <router-link class="__nun" :to="`/folder/create?p=${folder.id}`">
                        <div class="create-btn _m-xs-b _m-xs-cc __padxs _flex __hv __hv-4 _fd-ro __bg-none __po">
                            <svg class="__fi-grey-10" width="25" height="25" clip-rule="evenodd" fill-rule="evenodd"
                                stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
                                    fill-rule="nonzero" />
                            </svg> &nbsp;
                            <p class="__txt-grey-10">Folder</p>
                        </div>
                    </router-link> &nbsp; &nbsp;
                    <router-link class="__nun" :to="`/card/create?f=${folder.id}`">
                        <div class="create-btn _m-xs-b _m-xs-cc __padxs _flex __hv __hv-4 _fd-ro __bg-none __po">
                            <svg class="__fi-grey-10" width="25" height="25" clip-rule="evenodd" fill-rule="evenodd"
                                stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
                                    fill-rule="nonzero" />
                            </svg> &nbsp;
                            <p class="__txt-grey-10">Cards</p>
                        </div>
                    </router-link>
                </div>

                <br>

                <!-- FOLDER HERITAGE -->
                <div class="__b _fw-wr _flex _cc _fd-ro">
                    <div class="_flex _fd-ro _cc" v-for="v, i in folderAncestors">
                        <router-link class="__nun" :to="`/folder/${v.id}`">
                            <p class="__tmd" :style="`color: var(--${v.theme}4)`">{{ v.name }}</p>
                        </router-link>
                        &nbsp;&nbsp;
                        <svg :fill="`var(--${v.theme})4`" v-if="(i + 1) != folderAncestors.length" width="24"
                            height="24" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round"
                            stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m13.022 14.999v3.251c0 .412.335.75.752.75.188 0 .375-.071.518-.206 1.775-1.685 4.945-4.692 6.396-6.069.2-.189.312-.452.312-.725 0-.274-.112-.536-.312-.725-1.451-1.377-4.621-4.385-6.396-6.068-.143-.136-.33-.207-.518-.207-.417 0-.752.337-.752.75v3.251h-9.02c-.531 0-1.002.47-1.002 1v3.998c0 .53.471 1 1.002 1z"
                                fill-rule="nonzero" />
                        </svg>&nbsp;&nbsp;
                    </div>
                </div>

                <br>
            </div>
        </div>

        <br>

        <div class="_fd-ro __b _flex _jc-en _ai-ce">
            <!-- DELETE CARD-->
            <svg @click="deleteCard" class="__po __fi-grey-3 __hfi-5" xmlns="http://www.w3.org/2000/svg" width="30"
                height="30" viewBox="0 0 24 24">
                <path
                    d="m20.015 6.506h-16v14.423c0 .591.448 1.071 1 1.071h14c.552 0 1-.48 1-1.071 0-3.905 0-14.423 0-14.423zm-5.75 2.494c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-4.5 0c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-.75-5v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-16.507c-.413 0-.747-.335-.747-.747s.334-.747.747-.747zm4.5 0v-.5h-3v.5z"
                    fill-rule="nonzero"></path>
            </svg> &nbsp; &nbsp; &nbsp;

            <!-- EDIT CARD -->
            <svg @click="editCard" class="__po __fi-grey-3 __hfi-5" data-href="edit.php?id=4617250" fill="var(--dark)"
                xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                <path
                    d="M1.438 16.872l-1.438 7.128 7.127-1.438 12.642-12.64-5.69-5.69-12.641 12.64zm2.271 2.253l-.85-.849 11.141-11.125.849.849-11.14 11.125zm20.291-13.436l-2.817 2.819-5.69-5.691 2.816-2.817 5.691 5.689z">
                </path>
            </svg> &nbsp; &nbsp; &nbsp;

            <!-- MOVE CARD -->
            <svg @click="moveCard" width="27" height="27" class="__po __fi-grey-3 __hfi-5" clip-rule="evenodd"
                fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9v-7h6c1.695 1.942 2.371 3 4 3h12v4h-22zm-1 2l2 11h20l2-11h-24z"></path>
            </svg>
        </div>

        <br>

        <div v-if="!editingCard" class="__b _flex _cc _fd-co">
            <!-- REMAINING CARDS -->
            <div class="__b _flex _jc-en">
                <p class="__txt-grey-4">{{ (cardIndex + 1) }} / {{ folderCards.length }}</p>
            </div>

            <!-- REVIEW DATE -->
            <div style="margin-top: 7px;" :class="`__bg-${s}-5 cwidth _flex _cc __txt-grey-10 __padxs`">
                <p>Review in 2 weeks</p>
            </div>

            <br>

            <!-- CARD Q / A -->
            <div class="cwidth _flex _cc">
                <div ref="container" style="transition: 0.25s; height: 300px; max-height: 300px; overflow-y: auto"
                    class="__hv __b __padsm __bo-grey-7 __bo-2 _flex">
                    <p class="__tmd __b __tal __mauto">{{ transitioning ? '' : !this.show ? q : a }}</p>
                </div>
            </div>

            <br>

            <div class="cwidth _flex _cc __padxs __bo-grey-9 __bo-2 __bdxs">
                <div class="__b _flex _jc-be _ai-ce">
                    <!-- MARK CARD WRONG -->
                    <svg @click="mark(1)" v-if="showIcons" class="__po __fi-err-4 __hfi-err-6" width="50" height="50"
                        clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m21 3.998c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-8.991 6.932 2.717-2.718c.146-.146.338-.219.53-.219.405 0 .751.325.751.75 0 .193-.073.384-.219.531l-2.718 2.717 2.728 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.384-.073-.531-.219l-2.728-2.728-2.728 2.728c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .384.073.53.219z"
                            fill-rule="nonzero"></path>
                    </svg>

                    <!-- MARK CARD UNREVIEWED -->
                    <svg @click="mark(0)" class="__fi-grey-6 __po __hfi-grey-7" v-if="showIcons" height="50" width="50"
                        clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm4.253 9.25h-8.5c-.414 0-.75.336-.75.75s.336.75.75.75h8.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"
                            fill-rule="nonzero" />
                    </svg>

                    <!-- MARK CARD CORRECT -->
                    <svg @click="mark(2)" v-if="showIcons" class="__po __fi-succ-5 __hfi-succ-6" width="50" height="45"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M19 0h-14c-2.762 0-5 2.239-5 5v14c0 2.761 2.238 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-8.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z">
                        </path>
                    </svg>

                    <!-- MARK PLACEHOLDERS -->
                    <svg v-if="!showIcons" style="opacity: 0;" width="50" height="45" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M19 0h-14c-2.762 0-5 2.239-5 5v14c0 2.761 2.238 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-8.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z">
                        </path>
                    </svg>
                    <svg v-if="!showIcons" style="opacity: 0;" width="50" height="50" clip-rule="evenodd"
                        fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m21 3.998c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-8.991 6.932 2.717-2.718c.146-.146.338-.219.53-.219.405 0 .751.325.751.75 0 .193-.073.384-.219.531l-2.718 2.717 2.728 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.384-.073-.531-.219l-2.728-2.728-2.728 2.728c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .384.073.53.219z"
                            fill-rule="nonzero"></path>
                    </svg>

                </div>
            </div>

            <br>

            <!-- SHOW/HIDE CARD Q & A-->
            <div class="cwidth _flex _jc-en">
                <svg @click="toggle" v-if="show" width="40" height="40" class="__po" clip-rule="evenodd"
                    fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m17.069 6.546 2.684-2.359c.143-.125.32-.187.497-.187.418 0 .75.34.75.75 0 .207-.086.414-.254.562l-16.5 14.501c-.142.126-.319.187-.496.187-.415 0-.75-.334-.75-.75 0-.207.086-.414.253-.562l2.438-2.143c-1.414-1.132-2.627-2.552-3.547-4.028-.096-.159-.144-.338-.144-.517s.049-.358.145-.517c2.111-3.39 5.775-6.483 9.853-6.483 1.815 0 3.536.593 5.071 1.546zm2.318 1.83c.967.943 1.804 2.013 2.475 3.117.092.156.138.332.138.507s-.046.351-.138.507c-2.068 3.403-5.721 6.493-9.864 6.493-1.298 0-2.553-.313-3.73-.849l2.624-2.307c.352.102.724.156 1.108.156 2.208 0 4-1.792 4-4 0-.206-.016-.408-.046-.606zm-4.932.467c-.678-.528-1.53-.843-2.455-.843-2.208 0-4 1.792-4 4 0 .741.202 1.435.553 2.03l1.16-1.019c-.137-.31-.213-.651-.213-1.011 0-1.38 1.12-2.5 2.5-2.5.474 0 .918.132 1.296.362z"
                        fill-rule="nonzero"></path>
                </svg>
                <svg @click="toggle" v-if="!show" width="40" height="40" class="__po" clip-rule="evenodd"
                    fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm.002 3c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z"
                        fill-rule="nonzero"></path>
                </svg>
            </div>

            <br>

            <hr class="__bg-grey-8 __bg-grey-8 cwidth">

            <br>

            <!-- PREV & NEXT CARD -->
            <div class="cwidth _flex _ai-ce _jc-be">
                <svg @click="prev" v-if="folderCards[cardIndex - 1]" class="__po" height="30" width="30"
                    clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m22 12.002c0-5.517-4.48-9.997-9.998-9.997-5.517 0-9.997 4.48-9.997 9.997 0 5.518 4.48 9.998 9.997 9.998 5.518 0 9.998-4.48 9.998-9.998zm-8.211-4.843c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591z"
                        fill-rule="nonzero"></path>
                </svg>
                <svg @click="next" v-if="folderCards[cardIndex + 1]" class="__mlauto __po" height="30" width="30"
                    clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m2.009 12.002c0-5.517 4.48-9.997 9.998-9.997s9.998 4.48 9.998 9.997c0 5.518-4.48 9.998-9.998 9.998s-9.998-4.48-9.998-9.998zm8.211-4.843c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591z"
                        fill-rule="nonzero"></path>
                </svg>
            </div>

        </div>

        <!-- EDIT CARD -->
        <div style="margin-top: 15px; " v-if="editingCard" class="__b _flex _fd-co _cc">
            <p class="__b __tlg">Edit Card</p>

            <br>

            <!-- Q & A -->
            <div class="__b _flex _cc _fd-co">
                <div class="__b _flex _fd-co _cc">
                    <textarea maxlength="9999" placeholder="Question" v-model="editData.q" class="qa"></textarea>
                    <br class="_hide _m-sm-flex">
                    <span class="_sm-hide">&nbsp; &nbsp; &nbsp;</span>
                    <textarea maxlength="9999" placeholder="Answer" v-model="editData.a" class="qa"></textarea>
                </div>
            </div>

            <br>

            <div class="__b _flex _jc-en _ai-ce">
                <!-- CONFIRM CARD EDIT -->
                <svg @click="confirmEdit" class="__po __fi-succ-5 __hfi-succ-6" width="24" height="24"
                    xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                    <path
                        d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z">
                    </path>
                </svg> &nbsp; &nbsp;

                <!-- CANCEL CARD EDIT -->
                <svg @click="cancelEdit" class="__po __hfi-err-6 __fi-err-5" id="cancel-edit_2662779082" width="19"
                    height="19" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z">
                    </path>
                </svg>
            </div>
        </div>

    </div>

    <!-- MOVE CARD TO FOLDER-->
    <div @click="hideMoveFolders" v-if="showMoveFolders" class="_flex modal-overlay">
        <div style="max-width: 90%; max-height: 80vh; width: 1300px;" class="__mauto _flex _fd-co __bg-grey-10 __padsm">
            <div class="__b _flex _fd-ro _jc-be _ai-ce _m-sm-fd-co">
                <p class="__b __tle __tlg __txt-grey-2">Move Card(s) to Folder</p>

                <!-- SEARCH MOVE FOLDERS -->
                <input v-model="moveFoldersSearch" @input="searchMoveFolders" type="text" placeholder="Search folder..."
                    class="__b __bg-none __bo-none __padxs">
            </div>

            <hr style="margin: 10px 0px;" class="__b __bg-grey-2">

            <div @scroll="updateMoveFoldersLimit" style="max-height: 500px; overflow-y: auto;"
                class="__custscroll __b _flex _fd-co">

                <!-- MOVE FOLDER -->
                <Folder @select-folder="selectFolderToMove" v-if="!moveFoldersSearch.trim()"
                    v-for="f in ds.getOrphanFolders()" :key="f.id" :folder="f" :allFolders="ds.getFolders()" :level="0"
                    :tab="false" />

                <FolderTab @select-folder="selectFolderToMove" v-if="moveFoldersSearch.trim().length > 0"
                    v-for="f in ds.getFolders().filter(f => f.name.trim().toLowerCase().includes(moveFoldersSearch.trim().toLowerCase()))"
                    :key="f.id" :folder="f" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.cwidth {
    width: 500px;
    max-width: 100%;
}

.qa {
    padding: 10px;
    border: 1px solid var(--grey_7);
    border-radius: 2.5px;
    width: 100%;
    resize: none;
    height: 150px;
}

.qa:focus {
    outline: 1px solid var(--grey_7);
}

.modal-overlay {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 99999;
}
</style>

<script>
import { useDataStore } from '@/stores/data';
import { useResponseStore } from '@/stores/response';

import Folder from '@/components/Folder/Folder.vue';
import FolderTab from '@/components/Folder/FolderTab.vue';

export default {
    components: {
        Folder, FolderTab
    },

    computed: {
        // CARD ID & DATA //
        cardId() {
            return Number(this.$route.params.id) || null;
        },
        cardIndex() {
            return Number(this.folderCards.findIndex(card => card.id === this.cardId));
        },

        // CARD Q, A, STATUS //
        q() {
            return this.card.q;
        },
        a() {
            return this.card.a;
        },
        s() {
            return this.card.status == 0 ? "grey" : this.card.status == 1 ? "err" : "succ";
        },

        // FOLDER & RELATIONSHIPS //
        folderCards() {
            return this.ds.getCards(this.folder.id);
        },
        folderAncestors() {
            return this.ds.getAncestors(this.folder.id, false);
        },

        // DATA STORE //
        ds() {
            return useDataStore();
        }
    },

    mounted() {
        window.addEventListener('keydown', this.keys);
    },

    methods: {
        // CHECK KEY INPUT & PERFORM ACTIONS //
        keys(e) {
            let k = e.key;
            k = k.toLowerCase();

            if (k == "shift") {
                this.toggle();
            }

            if (k == "arrowright") {
                this.next();
            }

            if (k == "arrowleft") {
                this.prev();
            }

            if (k == "arrowup" && this.show == true && this.showIcons == true) {
                this.mark(2);
            }

            if (k == "arrowdown" && this.show == true && this.showIcons == true) {
                this.mark(1);
            }
        },

        // TOGGLE SHOW //
        toggle() {
            if (!this.transitioning) {
                this.transitioning = true;

                let skip = false;

                if (this.show) {
                    this.showIcons = false;

                    skip = true;
                }

                this.$refs.container.style.width = "0%";

                setTimeout(() => {
                    this.$refs.container.style.width = "100%";

                    setTimeout(() => {
                        this.show = !this.show;

                        if (!skip)
                            this.showIcons = !this.showIcons;

                        this.transitioning = false;

                    }, 250);
                }, 250);
            }
        },

        // MARK CARD //
        mark(v) {
            switch (v) {
                case 2:
                    useDataStore().markCard(this.card.id, 2);
                    break;
                case 1:
                    useDataStore().markCard(this.card.id, 1);
                    break;
                case 0:
                    useDataStore().markCard(this.card.id, 0);
                    break;
            }

            this.showIcons = false;
        },

        // DELETE CARD //
        deleteCard() {
            if (window.confirm("Are you sure you want to delete this card?")) {
                let folderId = this.card.folder;
                useDataStore().deleteCard(this.card.id);

                this.$router.push("/folder/" + folderId);
            }
        },

        // EDIT CARD //
        editCard() {
            this.editingCard = true;
        },
        confirmEdit() {
            if (this.editData.q.trim() === "" || this.editData.a.trim() === "") {
                useResponseStore().updateResponse("Question and answer cannot be empty", "warn");
                return;
            }

            if (this.editData.q.trim().length > 9999 || this.editData.a.trim().length > 9999) {
                useResponseStore().updateResponse("Question and answer cannot exceed 10,000 characters", "warn");
                return;
            }

            useDataStore().updateCard(this.card.id, this.editData.q.trim(), this.editData.a.trim());
            this.editingCard = false;

            this.editData.q = this.card.q;
            this.editData.a = this.card.a;

            useResponseStore().updateResponse("Card updated successfully", "succ");
        },
        cancelEdit() {
            this.editData.q = this.card.q;
            this.editData.a = this.card.a;
            this.editingCard = false;
        },

        // MOVE CARD //
        moveCard() {
            this.showMoveFolders = true;
        },
        updateMoveFoldersLimit(e) {
            if (e.target.scrollTop + e.target.offsetHeight >= e.target.scrollHeight) {
                this.moveFoldersLimit += 25;
            }
        },
        hideMoveFolders(e) {
            if (e.target.className.includes("modal-overlay")) {
                this.showMoveFolders = false;
            }
        },
        selectFolderToMove(folderId) {
            useDataStore().moveCard(this.card.id, folderId);

            this.showMoveFolders = false;
            this.moveFoldersLimit = 10;
            this.moveFoldersSearch = '';

            useResponseStore().updateResponse("Card moved successfully", "succ");
        },

        // NEXT & PREV CARDS //
        next() {
            if (!this.transitioning) {
                this.$router.push("/card/" + this.folderCards[this.cardIndex + 1].id);
            }
        },
        prev() {
            if (!this.transitioning) {
                this.$router.push("/card/" + this.folderCards[this.cardIndex - 1].id);
            }
        }
    },

    created() {
        this.ds.getCard(this.cardId).then(card => {
            this.card = card;

            if (this.card)
                this.cardExists = true;

            this.ds.getFolder(this.card.folder).then(folder => {
                this.folder = folder;
            });
        });

        setInterval(() => {
            console.log("card", this.card);
            console.log("folder", this.folder)
        }, 500);

        this.editData.q = this.card.q;
        this.editData.a = this.card.a;
    },

    data() {
        return {
            showIcons: false,

            show: false,

            transitioning: false,

            folder: {},
            card: {},

            cardExists: false,

            // EDIT CARD DATA //
            editingCard: false,
            editData: {
                q: "",
                a: ""
            },

            // MOVE FOLDERS //
            showMoveFolders: false,
            moveFoldersSearch: "",
            moveFoldersLimit: 10,
        }
    },

    watch: {
        // UPDATE CARD DATA WHEN CARD ID CHANGES //
        cardId() {
            this.editData.q = this.card.q;
            this.editData.a = this.card.a;

            this.showMoveFolders = false;
            this.moveFoldersSearch = "";
            this.moveFoldersLimit = 10;

            this.show = false;

            this.transitioning = false;

            this.showIcons = false;

            this.ds.getCard(this.cardId).then(card => {
                this.card = card;

                if (!this.card)
                    this.cardExists = false; return;

                this.ds.getFolder(this.card.folder).then(folder => {
                    this.folder = folder;
                });
            });
        }
    }
}

/*


                <div class="__b _flex _fd-co"
                    v-for="v in ds.getOrphanFolders().filter(f => f.name.toLowerCase().trim().includes(moveFoldersSearch)).slice(0, moveFoldersLimit).filter(f => f.id != this.folder.id)">
                    <div @click="selectFolderToMove(v.id)"
                        :style="`position: relative; margin-bottom: 10px; background-position: centre; background-size: cover; background-image: url('/themes/${v.theme}.png')`"
                        class="__po __b _flex _fd-ro __padsm">

                        <div
                            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5);">
                        </div>


                        <div style="z-index: 999;" class="_flex _fd-ro _ai-ce _jc-be">
                            <!-- MOVE FOLDER NAME-->
                            <p class="__bo __tmd __tle" :style="`color: var(--${v.theme}4)`">{{ ds.getAncestors(v.id,
                                false).map(a => a.name).join(" &rarr; ") }}</p>

                            <!-- MOVE FOLDER CARD COUNT -->
                            <p class="__txt-grey-8">&nbsp;&nbsp;&nbsp; <strong>{{ ds.getDescendantCards(v.id).length
                                    }}</strong> cards</p>
                        </div>
                    </div>
                    <div style="margin-left: 25px" class="_fd-co _flex" v-for="x in ds.getFoldersByParent(v.id)" @click="selectFolderToMove(x.id)">
                        <div :style="`position: relative; padding-left: 15px; margin-bottom: 10px; background-position: centre; background-size: cover; background-image: url('/themes/${x.theme}.png')`"
                            class="__po __b _flex _fd-ro __padsm">

                            <div
                                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5);">
                            </div>


                            <div style="z-index: 999;" class="_flex _fd-ro _ai-ce _jc-be">
                                <!-- MOVE FOLDER NAME-->
                                <p class="__bo __tmd __tle" :style="`color: var(--${x.theme}4)`">{{ x.name }}</p>

                                <!-- MOVE FOLDER CARD COUNT -->
                                <p class="__txt-grey-8">&nbsp;&nbsp;&nbsp; <strong>{{ ds.getDescendantCards(x.id).length
                                        }}</strong> cards</p>
                            </div>
                        </div>
                    <div style="margin-left: 25px" class="_flex" v-for="z in ds.getFoldersByParent(x.id)" @click="selectFolderToMove(z.id)">
                        <div :style="`position: relative; padding-left: 15px; margin-bottom: 10px; background-position: centre; background-size: cover; background-image: url('/themes/${z.theme}.png')`"
                            class="__po __b _flex _fd-ro __padsm">

                            <div
                                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5);">
                            </div>


                            <div style="z-index: 999;" class="_flex _fd-ro _ai-ce _jc-be">
                                <!-- MOVE FOLDER NAME-->
                                <p class="__bo __tmd __tle" :style="`color: var(--${z.theme}4)`">{{ z.name }}</p>

                                <!-- MOVE FOLDER CARD COUNT -->
                                <p class="__txt-grey-8">&nbsp;&nbsp;&nbsp; <strong>{{ ds.getDescendantCards(z.id).length
                                        }}</strong> cards</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>


*/
</script>