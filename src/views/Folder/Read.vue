<template>
    <div class="__15 __mlauto __mrauto _flex _fd-co __w">

        <br>
        <div :style="`background-image: url('/themes/${folder.theme}.png'); position: relative; background-position: center; background-size: cover; `"
            class="__b _flex _fd-co">

            <div
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5);">
            </div>

            <div style="z-index: 999" class="__b _flex _fd-co __txt-grey-10 __padsm __fi-grey-10">

                <div class="__b __hack _flex _cc _fd-ro">
                    <svg @click="share" class="__po __hfi-1" width="24" height="24" xmlns="http://www.w3.org/2000/svg"
                        fill-rule="evenodd" clip-rule="evenodd">
                        <path
                            d="M16.272 5.451c-.176-.45-.272-.939-.272-1.451 0-2.208 1.792-4 4-4s4 1.792 4 4-1.792 4-4 4c-1.339 0-2.525-.659-3.251-1.67l-7.131 3.751c.246.591.382 1.239.382 1.919 0 .681-.136 1.33-.384 1.922l7.131 3.751c.726-1.013 1.913-1.673 3.253-1.673 2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4c0-.51.096-.999.27-1.447l-7.129-3.751c-.9 1.326-2.419 2.198-4.141 2.198-2.76 0-5-2.24-5-5s2.24-5 5-5c1.723 0 3.243.873 4.143 2.201l7.129-3.75zm3.728 11.549c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm-15-9c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm15-7c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3z" />
                    </svg>

                    &nbsp; &nbsp;

                    <svg @click="destroy" class="__po __hfi-1" width="24" height="24" clip-rule="evenodd"
                        fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9 3h6v-1.75c0-.066-.026-.13-.073-.177-.047-.047-.111-.073-.177-.073h-5.5c-.066 0-.13.026-.177.073-.047.047-.073.111-.073.177v1.75zm11 1h-16v18c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-18zm-10 3.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v12c0 .276.224.5.5.5s.5-.224.5-.5v-12zm5 0c0-.276-.224-.5-.5-.5s-.5.224-.5.5v12c0 .276.224.5.5.5s.5-.224.5-.5v-12zm8-4.5v1h-2v18c0 1.105-.895 2-2 2h-14c-1.105 0-2-.895-2-2v-18h-2v-1h7v-2c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v2h7z" />
                    </svg>

                    &nbsp; &nbsp;

                    <svg v-if="!editing" @click="edit" class="__po __hfi-1" width="24" height="24"
                        xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                        <path
                            d="M8.071 21.586l-7.071 1.414 1.414-7.071 14.929-14.929 5.657 5.657-14.929 14.929zm-.493-.921l-4.243-4.243-1.06 5.303 5.303-1.06zm9.765-18.251l-13.3 13.301 4.242 4.242 13.301-13.3-4.243-4.243z" />
                    </svg>

                    <svg class="__po __hfi-1" @click="confirmEdit" v-if="editing" width="24" height="24"
                        xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                        <path
                            d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z">
                        </path>
                    </svg> <span v-if="editing">&nbsp; &nbsp;</span>
                    <svg class="__po __hfi-1" @click="cancelEdit" v-if="editing" width="19" height="19"
                        clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
                    </svg>
                </div>

                <br>

                <div class="__b _flex _cc">
                    <svg class="__po" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="M2 9l-1-7h5.694c1.265 1.583 1.327 2 3.306 2h13l-1 5h-4.193l-3.9-3-1.464 1.903 1.428 1.097h-1.971l-3.9-3-2.307 3h-3.693zm-2 2l2 11h20l2-11h-24z" />
                    </svg>
                </div>

                <br>

                <div class="__b _flex _cc _fd-ro">
                    <router-link class="__nun" :to="`/folder/${v.id}`" v-for="v, i in folderAncestors">
                        <p class="__bo" :style="`color: var(--${v.theme}4)`">{{ v.name }} <span v-if="(i + 1) != folderAncestors.length">-></span></p>
                    </router-link>
                </div>

                <br>

                <p :class="`__b __tal __txl __bo`" :style="`color: var(--${folder.theme}4)`">{{ folder.name }}</p>

                <div style="margin-top: 10px;" class="__b _flex _jc-en _fd-ro _ai-ce _m-xs-fd-co">
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

                <br>

                <hr class="__b __bg-grey-10">
            </div>
        </div>

        <br>

        <div class="__b _flex _jc-be _ai-ce _m-sm-fd-co">
            <div class="_flex _fd-ro _cc">
                <!-- SELECT -->
                <svg @click="selectAll"
                    :class="[this.cards.filter(c => c.selected == true).length === this.cards.length ? ['__fill-1', '__hfi-grey-1'] : ['__hfi-1', '__fi-grey-1'], '__po']"
                    xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
                    <path
                        d="M8 10v4h4l-6 7-6-7h4v-4h-4l6-7 6 7h-4zm16 5h-10v2h10v-2zm0 6h-10v-2h10v2zm0-8h-10v-2h10v2zm0-4h-10v-2h10v2zm0-4h-10v-2h10v2z" />
                </svg> &nbsp; &nbsp; &nbsp; &nbsp;

                <div v-if="cards.filter(c => c.selected == true).length > 0" class="_flex _fd-ro">
                    <!-- DELETE -->
                    <svg @click="deleteSelected" width="27" height="27" class="__po __fi-grey-3 __hfi-5"
                        clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m4.015 5.494h-.253c-.413 0-.747-.335-.747-.747s.334-.747.747-.747h5.253v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-.254v15.435c0 .591-.448 1.071-1 1.071-2.873 0-11.127 0-14 0-.552 0-1-.48-1-1.071zm14.5 0h-13v15.006h13zm-4.25 2.506c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm-4.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3.75-4v-.5h-3v.5z"
                            fill-rule="nonzero" />
                    </svg> &nbsp; &nbsp;

                    <!-- MOVE -->
                    <svg @click="moveSelected" width="27" height="27" class="__po __fi-grey-3 __hfi-5"
                        clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 9v-7h6c1.695 1.942 2.371 3 4 3h12v4h-22zm-1 2l2 11h20l2-11h-24z" />
                    </svg> &nbsp; &nbsp;

                    <!-- MARK -->
                    <svg class="__po" @click="markSelected(2)"
                        style="margin-right: 5px; margin-left: 5px; fill: var(--succ_6); " width="27" height="27"
                        clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" />
                    </svg>
                    <svg class="__po" @click="markSelected(1)"
                        style="margin-right: 5px; margin-left: 5px; fill: var(--err_6); " width="27" height="27"
                        clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" />
                    </svg>
                    <svg class="__po" @click="markSelected(0)"
                        style="margin-right: 5px; margin-left: 5px; fill: var(--grey_6); " width="27" height="27"
                        clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" />
                    </svg>
                </div>
            </div>

            <br class="_hide _m-sm-flex">

            <input v-model="search" @input="searchCards" style="border: none; border-bottom: 1px solid var(--grey_7);"
                type="text" placeholder="Search cards..."
                class="__w __padxs __bg-grey-10 __txt-grey-1 __bod __bo-grey-7">
        </div>

        <br>

        <div class="__b _fw-wr _flex _cc _fd-ro">
            <div style="flex-grow: 1;" v-if="searchResults.length == 0" v-for="v in cards.slice(0, cardLimit)"
                :class='[["__bg-grey-6", "__bg-err-6", "__bg-succ-6"][Number(v.status)], "card", "__custscroll"]'>

                <div @click="toggleSelected(v.id)" class="__po __b _flex _cc">
                    <input v-model="v.selected" type="checkbox" class="custcheck">
                </div>


                <router-link class="__nun _flex __b _fd-co _ai-be __hack" :to="`/card/${v.id}`">

                    <p class="__txt-grey-10 __mauto __nosel" style="margin-top: 15px; max-width: 100%">{{ v.q }}</p>

                    <div style="align-self: flex-end; margin-top: auto;" v-if="!v.showOptions" class="__b _flex _jc-en">
                        <svg class="__hfi-grey-9 __fi-grey-10 __po" :id="`show-opts_${v.id}`" @click="options"
                            width="20" height="20" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round"
                            stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m12.002 2c5.518 0 9.998 4.48 9.998 9.998 0 5.517-4.48 9.997-9.998 9.997-5.517 0-9.997-4.48-9.997-9.997 0-5.518 4.48-9.998 9.997-9.998zm2.498 9.995c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25zm-3.75 0c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25zm-3.75 0c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25z" />
                        </svg>
                    </div>

                    <div v-if="v.showOptions" style="margin-top: 5px; " class="__b _flex _ai-ce _fw-wr _jc-ar">
                        <!-- DELETE -->
                        <svg :id="`delete-card_${v.id}`" @click="deleteCard" width="20" height="20"
                            class="__po __fi-grey-10 __hfi-grey-9" clip-rule="evenodd" fill-rule="evenodd"
                            stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m4.015 5.494h-.253c-.413 0-.747-.335-.747-.747s.334-.747.747-.747h5.253v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-.254v15.435c0 .591-.448 1.071-1 1.071-2.873 0-11.127 0-14 0-.552 0-1-.48-1-1.071zm14.5 0h-13v15.006h13zm-4.25 2.506c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm-4.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3.75-4v-.5h-3v.5z"
                                fill-rule="nonzero" />
                        </svg>

                        <!-- EDIT -->
                        <svg :id="`edit-card_${v.id}`" @click="editCard" width="20" height="20"
                            class="__po __fi-grey-10 __hfi-grey-9" clip-rule="evenodd" fill-rule="evenodd"
                            stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m4.481 15.659c-1.334 3.916-1.48 4.232-1.48 4.587 0 .528.46.749.749.749.352 0 .668-.137 4.574-1.492zm1.06-1.061 3.846 3.846 11.321-11.311c.195-.195.293-.45.293-.707 0-.255-.098-.51-.293-.706-.692-.691-1.742-1.74-2.435-2.432-.195-.195-.451-.293-.707-.293-.254 0-.51.098-.706.293z"
                                fill-rule="nonzero" />
                        </svg>

                        <!-- MOVE -->
                        <svg :id="`move-card_${v.id}`" @click="moveCard" width="20" height="20"
                            class="__po __fi-grey-10 __hfi-grey-9" clip-rule="evenodd" fill-rule="evenodd"
                            stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9v-7h6c1.695 1.942 2.371 3 4 3h12v4h-22zm-1 2l2 11h20l2-11h-24z" />
                        </svg>

                        <!-- MARK -->
                        <svg :id="`mark-card_${v.id}`" @click="markCard" class="__po __fi-grey-10 __hfi-grey-9"
                            xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" />
                        </svg>

                        <!-- HIDE OPTIONS -->
                        <svg :id="`hide-opts_${v.id}`" @click="options" width="20" height="20"
                            class="__po __fi-grey-10 __hfi-grey-9" clip-rule="evenodd" fill-rule="evenodd"
                            stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z" />
                        </svg>
                    </div>

                    <div v-if="v.showMark && v.showOptions" style="margin-top: 15px;" class="__b _flex _cc _fd-ro">
                        <svg @click="updateCardStatus" :id="`status-2_${v.id}`" v-if="v.status != 2"
                            style="margin-right: 5px; margin-left: 5px; fill: var(--succ_6); " width="20" height="20"
                            clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" />
                        </svg>
                        <svg @click="updateCardStatus" :id="`status-1_${v.id}`" v-if="v.status != 1"
                            style="margin-right: 5px; margin-left: 5px; fill: var(--err_6); " width="20" height="20"
                            clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" />
                        </svg>
                        <svg @click="updateCardStatus" :id="`status-0_${v.id}`" v-if="v.status != 0"
                            style="margin-right: 5px; margin-left: 5px; fill: var(--grey_6); " width="20" height="20"
                            clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" />
                        </svg>
                    </div>

                </router-link>

            </div>
        </div>
    </div>

    <div @click="hideSearchFolders" v-if="showSearchFolders" class="_flex modal-overlay">
        <div style="max-width: 90%; max-height: 80vh; width: 1300px;" class="__mauto _flex _fd-co __bg-grey-10 __padsm">
            <div class="__b _flex _fd-ro _jc-be _ai-ce _m-sm-fd-co">
                <p class="__b __tle __tlg __txt-grey-2">Move Card(s) to Folder</p>
                <input v-model="searchFolders" type="text" placeholder="Search folder..."
                    class="__b __bg-none __bo-none __padxs">
            </div>
            <hr style="margin: 10px 0px;" class="__b __bg-grey-2">
            <div @scroll="updateSearchFoldersLimit" style="max-height: 500px; overflow-y: auto;"
                class="__custscroll __b _flex _fd-co">
                <div @click="selectFolderToMove(v.id)"
                    :style="`position: relative; margin-bottom: 10px; background-position: centre; background-size: cover; background-image: url('/themes/${v.theme}.png')`"
                    v-for="v in folders.filter(f => f.name.toLowerCase().trim().includes(searchFolders)).slice(0, searchFoldersLimit).filter(f => f.id != this.folderId)"
                    class="__po __b _flex _fd-ro __padsm">

                    <div
                        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5);">
                    </div>


                    <div style="z-index: 999;" class="_flex _fd-ro _ai-ce _jc-be">
                        <p class="__bo __tmd" :style="`color: var(--${v.theme}4)`">{{ v.name }}</p>
                        <p class="__txt-grey-8">&nbsp;&nbsp;&nbsp; {{ globalCards.filter(c => c.folder == v.id).length
                            }}
                            cards</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useResponseStore } from '@/stores/response';

import { useDataStore } from '@/stores/data';

export default {
    computed: {
        globalCards() {
            return useDataStore().getCards();
        },

        folderAncestors() {
            return useDataStore().getAncestors(this.folder.id);
        },

        folderId() {
            return this.$route.params.id || null;
        },

        folder() {
            return useDataStore().readFolder(this.folderId);
        },

        folders() {
            return useDataStore().getFolders();
        },

        themes() {
            return useDataStore().getThemes();
        }
    },

    data() {
        return {
            searchFolders: "",
            searchFoldersLimit: 8,
            showSearchFolders: false,

            editing: false,

            cardLimit: 75,

            cardsToBeMoved: [],

            search: "",
            searchResults: [],

            allCards: [],
            cards: []
        }
    },


    methods: {
        searchCards() {
            this.cards = this.allCards.filter(card => card.q.toLowerCase().includes(this.search.toLowerCase().trim()));

            if (this.search.trim() === "") {
                this.cards = this.allCards;
            }
        },

        preventDefault(e) {
            e.preventDefault();
        },

        options(e) {
            e.preventDefault();

            let id = e.target.id.split("_")[1] || e.target.parentElement.id.split("_")[1];
            id = Number(id);

            let card = this.cards.find(card => card.id === id);

            if (card.showOptions) {
                card.showOptions = false;
            } else {
                card.showOptions = true;
            }

            //this.cards.find(card => card.id === id).showOptions = !this.cards.find(card => card.id === id).showOptions || true;
        },

        selectAll() {
            if (this.cards.filter(c => c.selected == true).length === this.cards.length)
                this.cards.forEach(card => card.selected = false);
            else
                this.cards.forEach(card => card.selected = true);
        },

        // SEARCH FOLDERS //
        updateSearchFoldersLimit(e) {
            if (e.target.scrollTop + e.target.offsetHeight >= e.target.scrollHeight) {
                this.searchFoldersLimit += 25;
            }
        },


        // CARD OPERATIONS //
        editCard(e) {
            e.preventDefault();

            let id = e.target.id.split("_")[1] || e.target.parentElement.id.split("_")[1];
            id = Number(id);

            this.$router.push(`/card/${id}/edit`);
        },
        deleteCard(e) {
            e.preventDefault();

            let id = e.target.id.split("_")[1] || e.target.parentElement.id.split("_")[1];
            id = Number(id);

            if (window.confirm("Are you sure you want to delete this card?")) {
                this.cards = this.cards.filter(card => card.id !== id);

                useDataStore().deleteCard(id);
            }
        },
        markCard(e) {
            e.preventDefault();

            let id = e.target.id.split("_")[1] || e.target.parentElement.id.split("_")[1];
            id = Number(id);

            this.cards.find(card => card.id === id).showMark = !this.cards.find(card => card.id === id).showMark;
        },
        updateCardStatus(e) {
            e.preventDefault();

            let id = e.target.id.split("_")[1] || e.target.parentElement.id.split("_")[1];
            id = Number(id);

            let status = e.target.id.split("_")[0] || e.target.parentElement.id.split("_")[0]
            status = status.split("-")[1];

            useDataStore().markCard(id, status);

            this.cards.find(card => card.id === id).status = status;
        },



        // MOVING CARD //
        moveCard(e) {
            e.preventDefault();

            let id = e.target.id.split("_")[1] || e.target.parentElement.id.split("_")[1];
            id = Number(id);

            this.cardsToBeMoved.push(id);

            this.showSearchFolders = true;
        },
        selectFolderToMove(id) {
            if (window.confirm("Are you sure you want to move the card(s) to the folder: " + this.folders.find(f => f.id === id).name + "?")) {
                this.cards.filter(c => this.cardsToBeMoved.includes(c.id)).forEach(c => {
                    useDataStore().moveCard(c.id, id);
                });

                this.cards.filter(c => this.cardsToBeMoved.includes(c.id)).forEach(card => card.folder = id);

                this.cardsToBeMoved = [];
                this.showSearchFolders = false;

                this.cards = this.cards.filter(c => c.folder == this.folder.id);

                console.log(useDataStore().getCards());

            }
        },
        hideSearchFolders(e) {
            if (e.target.className.includes("modal-overlay")) {
                this.showSearchFolders = false;
            }
        },



        // MASS SELECT CARD OPERATIONS //
        toggleSelected(id) {
            this.cards.find(card => card.id === id).selected = !this.cards.find(card => card.id === id).selected;
        },
        deleteSelected() {
            if (window.confirm("Are you sure you want to delete the selected cards?")) {

                this.cards.forEach(c => {
                    if (c.selected) {
                        useDataStore().deleteCard(c.id);
                        this.cards = this.cards.filter(card => card.id !== c.id);
                    }
                });
            }
        },
        moveSelected() {
            this.cards.forEach(c => {
                if (c.selected) {
                    this.cardsToBeMoved.push(c.id);
                };
            });

            this.showSearchFolders = true;
        },
        markSelected(status) {
            let msg;

            switch (status) {
                case 2:
                    msg = "correct";
                    break;
                case 1:
                    msg = "incorrect";
                    break;
                case 0:
                    msg = "unstudied";
                    break;
            }

            if (window.confirm(`Are you sure you want to mark the selected cards as ${msg}?`)) {

                this.cards.forEach(c => {
                    if (c.selected) {
                        useDataStore().markCard(c.id, status);
                        this.cards.find(card => card.id === c.id).status = status;
                    }
                });

                this.cards.filter(card => card.selected == true).forEach(card => card.status = status);

                this.cards.forEach(c => c.selected = false);
            }
        },
    },

    created() {
        let folder = useDataStore().readFolder(this.folderId);

        // if folder with given id does not exist, redirect to 404 page
        if (!folder) {
            this.$router.push({ name: "404" });

            return;
        }

        this.folder = folder;

        this.cards = useDataStore().getCards(this.folderId);
        this.allCards = this.cards;
    },
}
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    padding: 15px;
    border-radius: 5px;

    overflow-y: auto;
    overflow-x: hidden;
    width: 250px;
    height: 200px;
    max-height: 200px;
    margin: 15px;
}

.card:hover {
    opacity: 0.8;
}

@media screen and (max-width: 600px) {
    .card {
        width: 100%;
        height: 150px;
        max-height: 150px;
    }
}

.create-btn:hover svg {
    fill: var(--grey_10);
}

.create-btn:hover p {
    color: var(--grey_10);
}

.custcheck {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    min-width: 24px;
    min-height: 24px;
    border: 2px solid var(--grey_10);
    border-radius: 50%;
    padding: 4px;
    cursor: pointer;
    position: relative;
}

.custcheck:checked {
    background-color: var(--info_5);
}

.custcheck:checked::before {
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    background-color: var(--info_7);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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

<!--

 cards: [{ q: "What is the process of photosynthesis?", a: "Photosynthesis is the process by which green plants, algae, and some bacteria convert sunlight into glucose, carbon dioxide, and water. This process takes place in the chloroplasts of plant cells.", status: "1", id: 609240 },

            { q: "What is the significance of photosynthesis in the ecosystem?", a: "Photosynthesis plays a crucial role in maintaining the balance of the ecosystem by providing essential nutrients for all organisms, supporting the growth and reproduction of plants and animals, and contributing to the overall health of the environment.", status: "0", id: 804205 },

            { q: "What is the role of chloroplasts in photosynthesis?", a: "Chloroplasts are the organelles that contain the enzymes and proteins necessary for photosynthesis. They are located in the thylakoid membranes of plant cells, and they contain three types of chlorophyll molecules: green, red, and blue.", status: "2", id: 497738 },

            { q: "What is the significance of chlorophyll in photosynthesis?", a: "Chlorophyll is a pigment found in the chloroplasts of plant cells. It absorbs light energy in the blue and red wavelengths, and it helps to convert light energy into chemical energy in the form of glucose. Chlorophyll plays a crucial role in the process of photosynthesis by facilitating the transfer of energy from sunlight to the organic molecules of glucose and oxygen.", status: "2", id: 277716 },

            { q: "How does the process of photosynthesis occur?", a: "The process of photosynthesis begins when sunlight reaches the chloroplasts of plant cells. Inside the chloroplasts, the enzymes and proteins necessary for photosynthesis are present. Chlorophyll absorbs light energy in the blue and red wavelengths, and it helps to convert light energy into chemical energy in the form of glucose. The glucose is then used to produce ATP, which is used to drive the synthesis of other organic molecules.", status: "1", id: 716493 },

            { q: "What is the significance of the Calvin Cycle in photosynthesis?", a: "The Calvin Cycle is a series of enzymatic reactions that occur in the thylakoid membranes of plant cells to convert carbon dioxide and sunlight energy into glucose and oxygen. The Calvin Cycle is responsible for the synthesis of ATP from ADP and NADPH, and it also plays a role in the production of NADP+ and FADH2.", status: "0", id: 895543 },

            { q: "What is the role of water in photosynthesis?", a: "Water plays a crucial role in photosynthesis by providing the necessary energy for the synthesis of glucose and oxygen. During the process of photosynthesis, water is broken down into hydrogen ions and oxygen gas, and it is released into the atmosphere as carbon dioxide and water vapor. The oxygen gas is used to produce ATP and NADPH, and the hydrogen ions are used to power the Calvin Cycle.", status: "1", id: 981757 },

            { q: "What is the significance of water in photosynthesis?", a: "Water plays a crucial role in photosynthesis by providing the necessary energy for the synthesis of glucose and oxygen. During the process of photosynthesis, water is broken down into hydrogen ions and oxygen gas, and it is released into the atmosphere as carbon dioxide and water vapor. The oxygen gas is used to produce ATP and NADPH, and the hydrogen ions are used to power the Calvin Cycle.", status: "2", id: 531122 },

            { q: "What are the primary stages of photosynthesis?", a: "Photosynthesis occurs in two main stages: the light-dependent reactions and the Calvin Cycle. The light-dependent reactions take place in the thylakoid membranes, where sunlight is absorbed and converted into chemical energy, while the Calvin Cycle synthesizes glucose.", status: "0", id: 603845 },

            { q: "What are light-dependent reactions in photosynthesis?", a: "Light-dependent reactions are the first stage of photosynthesis. In these reactions, chlorophyll absorbs sunlight, which splits water molecules into oxygen, hydrogen ions, and electrons. The energy generated is used to produce ATP and NADPH.", status: "1", id: 395475 },

            { q: "What is the role of ATP in photosynthesis?", a: "ATP provides the energy needed to fuel the chemical reactions in the Calvin Cycle, which produces glucose from carbon dioxide and water.", status: "2", id: 105400 },

            { q: "How does carbon dioxide affect photosynthesis?", a: "Carbon dioxide is one of the reactants in photosynthesis. It is absorbed by plants from the atmosphere and used in the Calvin Cycle to produce glucose.", status: "0", id: 739367 },

            { q: "What are the byproducts of photosynthesis?", a: "The main byproducts of photosynthesis are oxygen, which is released into the atmosphere, and glucose, which is used by the plant for energy and growth.", status: "1", id: 979105 },

            { q: "How do environmental factors impact the rate of photosynthesis?", a: "Environmental factors such as light intensity, temperature, and carbon dioxide concentration affect the rate of photosynthesis. Higher light intensity and carbon dioxide levels increase the rate, while extreme temperatures can inhibit the process.", status: "2", id: 14736 },

            { q: "Why is photosynthesis important for the carbon cycle?", a: "Photosynthesis is a key part of the carbon cycle because it removes carbon dioxide from the atmosphere and converts it into organic molecules like glucose, which can be used by other organisms.", status: "0", id: 822630 },

            { q: "What role does NADPH play in photosynthesis?", a: "NADPH provides the reducing power necessary for the synthesis of glucose in the Calvin Cycle, transferring electrons and hydrogen ions from the light-dependent reactions.", status: "1", id: 822836 },

            { q: "What is the significance of stomata in photosynthesis?", a: "Stomata are small openings on the surface of leaves that allow the exchange of gases, including the intake of carbon dioxide and the release of oxygen, which are essential for photosynthesis.", status: "0", id: 625604 },

            { q: "How do plants adapt to low light conditions for photosynthesis?", a: "Plants adapt to low light conditions by increasing the amount of chlorophyll in their leaves, adjusting the orientation of leaves to maximize light absorption, or developing larger leaves to capture more light.", status: "1", id: 230957 },

            { q: "What is the relationship between photosynthesis and cellular respiration?", a: "Photosynthesis and cellular respiration are complementary processes. Photosynthesis converts carbon dioxide and water into glucose and oxygen, while cellular respiration breaks down glucose and oxygen to produce carbon dioxide, water, and energy (ATP).", status: "2", id: 715097 },

            { q: "What pigments are involved in photosynthesis besides chlorophyll?", a: "Other pigments involved in photosynthesis include carotenoids and phycobilins. Carotenoids help absorb light in the blue-green spectrum, while phycobilins capture light energy in red and blue-green wavelengths.", status: "0", id: 190894 },

            { q: "How does temperature influence photosynthesis?", a: "Temperature affects the enzymes involved in photosynthesis. Optimal temperatures promote faster reactions, but extreme temperatures (either too high or too low) can inhibit enzyme activity and slow down or stop photosynthesis.", status: "1", id: 16162 },

            { q: "What is photorespiration and how does it differ from photosynthesis?", a: "Photorespiration occurs when oxygen, rather than carbon dioxide, is fixed by the enzyme RuBisCO, leading to a reduction in the efficiency of photosynthesis and the production of less glucose.", status: "2", id: 83222 },

            { q: "What is the role of RuBisCO in the Calvin Cycle?", a: "RuBisCO is an enzyme that catalyzes the first step of the Calvin Cycle, where carbon dioxide is fixed into an organic molecule. It plays a key role in the process of carbon fixation.", status: "0", id: 155196 },

            { q: "How do C4 plants differ from C3 plants in photosynthesis?", a: "C4 plants have a specialized mechanism to minimize photorespiration by concentrating carbon dioxide in specialized cells, allowing them to thrive in hot, dry environments. C3 plants, on the other hand, directly fix carbon dioxide through the Calvin Cycle.", status: "1", id: 487022 },

            { q: "What are CAM plants and how do they photosynthesize?", a: "CAM plants, such as cacti, open their stomata at night to reduce water loss in arid conditions. They store carbon dioxide as malic acid and use it for photosynthesis during the day when stomata are closed.", status: "2", id: 818771 },

            { q: "How does light intensity influence the rate of photosynthesis?", a: "As light intensity increases, the rate of photosynthesis also increases until it reaches a saturation point where the light-dependent reactions can no longer process more energy efficiently.", status: "0", id: 50342 },

            { q: "What is the light saturation point in photosynthesis?", a: "The light saturation point is the intensity at which further increases in light do not result in a higher rate of photosynthesis. This is because all available chlorophyll molecules are already being used.", status: "1", id: 386962 },

            { q: "How do plants regulate water loss during photosynthesis?", a: "Plants regulate water loss through their stomata, which can open and close to control the exchange of gases. In hot or dry conditions, stomata may close to conserve water, but this also reduces the intake of carbon dioxide.", status: "2", id: 342025 },

            { q: "Why is glucose produced during photosynthesis important for plants?", a: "Glucose is the primary energy source for plants. It can be used immediately for cellular respiration to produce ATP or stored as starch for later use during periods of low light or high energy demand.", status: "0", id: 698009 },

            { q: "What are accessory pigments and their function in photosynthesis?", a: "Accessory pigments such as carotenoids and xanthophylls absorb wavelengths of light that chlorophyll cannot, broadening the spectrum of light a plant can use for photosynthesis.", status: "1", id: 446518 },

            { q: "How do plants store the energy produced during photosynthesis?", a: "Plants store energy produced during photosynthesis in the form of glucose. This glucose can be converted into starch, which is stored in plant tissues for later use.", status: "2", id: 187932 },

            { q: "What are the main differences between light-dependent and light-independent reactions?", a: "Light-dependent reactions occur in the thylakoid membranes and require sunlight to produce ATP and NADPH. Light-independent reactions (Calvin Cycle) use ATP and NADPH to synthesize glucose from carbon dioxide.", status: "0", id: 734200 },

            { q: "What happens to the oxygen produced during photosynthesis?", a: "The oxygen produced during photosynthesis is released into the atmosphere as a byproduct. This oxygen is essential for the survival of aerobic organisms, including humans.", status: "1", id: 41304 },

            { q: "Why do some plants appear to have red or purple leaves instead of green?", a: "Some plants contain higher concentrations of anthocyanin pigments, which give the leaves a red or purple color. These pigments can protect plants from UV radiation or herbivores, while still allowing photosynthesis to occur.", status: "2", id: 34976 },

            { q: "What are the limiting factors of photosynthesis?", a: "The limiting factors of photosynthesis include light intensity, carbon dioxide concentration, water availability, and temperature. If any of these factors are in short supply, the rate of photosynthesis can be reduced.", status: "0", id: 350260 },

            { q: "What is the primary function of the thylakoid membrane in photosynthesis?", a: "The thylakoid membrane is where the light-dependent reactions of photosynthesis take place, including the production of ATP and NADPH through the electron transport chain.", status: "0", id: 589901 },

            { q: "How does the structure of a leaf aid in photosynthesis?", a: "The structure of a leaf, with its broad, flat surface and numerous stomata, maximizes light absorption and gas exchange, which are essential for efficient photosynthesis.", status: "1", id: 237737 },

            { q: "What is the function of grana in the chloroplast?", a: "Grana are stacks of thylakoids within the chloroplasts. They increase the surface area for the light-dependent reactions of photosynthesis, enhancing the plant's ability to capture light.", status: "2", id: 803684 },

            { q: "How is ATP generated in photosynthesis?", a: "ATP is generated during the light-dependent reactions of photosynthesis through a process called photophosphorylation, where light energy is used to add a phosphate group to ADP, forming ATP.", status: "0", id: 316129 },

            { q: "What are antenna pigments in photosynthesis?", a: "Antenna pigments are molecules in the thylakoid membrane that absorb light and transfer the energy to the reaction center of photosystem I or II, where it is used to drive the photosynthetic process.", status: "1", id: 642587 },

            { q: "How does photosynthesis affect the global oxygen cycle?", a: "Photosynthesis produces oxygen as a byproduct, which is released into the atmosphere. This process is a critical component of the global oxygen cycle, supporting the respiration of living organisms.", status: "2", id: 201158 },

            { q: "What are photosystems and how do they function in photosynthesis?", a: "Photosystems are protein complexes in the thylakoid membranes that absorb light and convert it into chemical energy. Photosystem II splits water molecules, while Photosystem I uses the energy to produce NADPH.", status: "0", id: 808708 },

            { q: "How does chlorophyll absorb light in photosynthesis?", a: "Chlorophyll absorbs light in the blue and red wavelengths, while reflecting green light. This absorbed energy excites electrons, which are then used to drive the light-dependent reactions.", status: "1", id: 674156 },

            { q: "What is cyclic photophosphorylation?", a: "Cyclic photophosphorylation is a process in which electrons are cycled back to the photosystem I reaction center, generating ATP without the production of NADPH or oxygen.", status: "2", id: 147069 },

            { q: "What role do guard cells play in photosynthesis?", a: "Guard cells regulate the opening and closing of stomata, allowing for gas exchange (carbon dioxide in, oxygen out) and controlling water loss during photosynthesis.", status: "0", id: 167552 },

            { q: "What happens during the carbon fixation stage of the Calvin Cycle?", a: "During carbon fixation, the enzyme RuBisCO incorporates carbon dioxide into an organic molecule (ribulose bisphosphate), initiating the process of converting CO2 into glucose.", status: "1", id: 531446 },

            { q: "What is the importance of sunlight in photosynthesis?", a: "Sunlight provides the energy needed to drive the light-dependent reactions in photosynthesis, which ultimately results in the production of ATP and NADPH necessary for the Calvin Cycle.", status: "2", id: 693129 },

            { q: "What is the role of plastocyanin in photosynthesis?", a: "Plastocyanin is a copper-containing protein that transfers electrons from cytochrome b6f to Photosystem I during the light-dependent reactions of photosynthesis.", status: "0", id: 701130 },

            { q: "How do cyanobacteria perform photosynthesis?", a: "Cyanobacteria perform photosynthesis using chlorophyll pigments located in their thylakoid membranes, much like plants, converting light energy into chemical energy and producing oxygen.", status: "1", id: 320463 },

            { q: "What is the function of the stroma in the chloroplast?", a: "The stroma is the fluid-filled space inside the chloroplast where the Calvin Cycle takes place, using ATP and NADPH produced in the light-dependent reactions to synthesize glucose.", status: "2", id: 941795 },

            { q: "What is the Hill reaction in photosynthesis?", a: "The Hill reaction is the photochemical reduction of an electron acceptor by water in the presence of chloroplasts and light, which results in the production of oxygen.", status: "0", id: 517099 },

            { q: "How do algae contribute to the process of photosynthesis in aquatic ecosystems?", a: "Algae perform photosynthesis, producing oxygen and serving as a primary source of organic carbon, which supports the aquatic food chain and contributes to global oxygen levels.", status: "1", id: 694095 },

            { q: "How does light wavelength affect photosynthesis?", a: "Different wavelengths of light are absorbed by different pigments. Blue and red wavelengths are most effective for photosynthesis, while green is mostly reflected, which is why plants appear green.", status: "2", id: 763432 },

            { q: "What is the role of ferredoxin in photosynthesis?", a: "Ferredoxin is a protein that transfers electrons from Photosystem I to the enzyme NADP+ reductase, which is essential for the production of NADPH in the light-dependent reactions.", status: "0", id: 120535 },

            { q: "How do plants avoid photorespiration?", a: "Plants avoid photorespiration by using mechanisms like C4 and CAM pathways, which concentrate carbon dioxide near RuBisCO, minimizing oxygen interference in the Calvin Cycle.", status: "1", id: 432698 },

            { q: "What is non-cyclic photophosphorylation?", a: "Non-cyclic photophosphorylation is the process in photosynthesis where electrons move from water through Photosystem II and Photosystem I to produce ATP, NADPH, and oxygen.", status: "2", id: 560822 },

            { q: "Why is water splitting important in photosynthesis?", a: "Water splitting in Photosystem II provides electrons to replace those lost by chlorophyll and produces oxygen as a byproduct, which is essential for aerobic life on Earth.", status: "0", id: 293775 },

            { q: "What is the significance of chlorophyll b in photosynthesis?", a: "Chlorophyll b assists in photosynthesis by capturing light energy in a slightly different spectrum than chlorophyll a, broadening the range of light that plants can use for energy.", status: "1", id: 148450 },

            { q: "How do light-harvesting complexes function in photosynthesis?", a: "Light-harvesting complexes capture and transfer light energy to the reaction center of a photosystem, enabling the light-dependent reactions of photosynthesis.", status: "2", id: 27638 },

            { q: "How do plants utilize stored starch from photosynthesis?", a: "Plants break down stored starch into glucose during periods of low light or high energy demand, using the glucose for cellular respiration to produce ATP.", status: "0", id: 245100 },

            { q: "What is the proton gradient in photosynthesis, and why is it important?", a: "The proton gradient across the thylakoid membrane drives the synthesis of ATP in the chloroplast during photosynthesis through chemiosmosis.", status: "1", id: 713777 },

            { q: "How do epiphytes photosynthesize without soil?", a: "Epiphytes, such as orchids, photosynthesize by absorbing moisture and nutrients from the air, using specialized structures to capture water and light without relying on soil.", status: "2", id: 418435 },

            { q: "How do phototropins influence photosynthesis?", a: "Phototropins are light receptors that help plants orient their leaves toward light sources, maximizing light absorption and improving photosynthetic efficiency.", status: "0", id: 810957 },

            { q: "How does chlorophyll fluorescence indicate photosynthetic activity?", a: "Chlorophyll fluorescence occurs when chlorophyll molecules release light energy after absorbing photons. Measuring this fluorescence helps indicate the efficiency of photosynthesis.", status: "1", id: 655909 },

            { q: "What is the role of cytochrome b6f in photosynthesis?", a: "Cytochrome b6f is a protein complex that transfers electrons between Photosystem II and Photosystem I, helping to generate a proton gradient that drives ATP synthesis.", status: "2", id: 488670 },

            { q: "How do shade-tolerant plants adapt their photosynthesis?", a: "Shade-tolerant plants adapt by developing more chlorophyll to capture lower light levels and altering their leaf structure to maximize light absorption in dim environments.", status: "0", id: 961487 },

            { q: "What is the function of carotenoids in photosynthesis?", a: "Carotenoids are pigments that absorb light in the blue and green regions of the spectrum, transferring this energy to chlorophyll for use in the light-dependent reactions.", status: "1", id: 6912 },

            { q: "What is the photolysis of water in photosynthesis?", a: "Photolysis is the process of splitting water molecules using light energy in Photosystem II, producing oxygen, electrons, and protons essential for ATP and NADPH production.", status: "2", id: 629970 },

            { q: "How do dune plants adapt their photosynthesis?", a: "dune plants, often CAM plants, open their stomata at night to minimize water loss while storing CO2 for use in photosynthesis during the day, reducing evaporation.", status: "0", id: 609224 },

            { q: "What is the Emerson enhancement effect?", a: "The Emerson enhancement effect describes the increase in the rate of photosynthesis when plants are exposed to both red and far-red light, demonstrating the cooperation of two photosystems.", status: "1", id: 154532 },

            { q: "What are xanthophylls and their role in photosynthesis?", a: "Xanthophylls are carotenoid pigments that protect plants from excess light by dissipating excess energy as heat, preventing damage to the photosynthetic apparatus.", status: "2", id: 250432 },

            { q: "How does the concentration of carbon dioxide affect photosynthesis?", a: "An increase in carbon dioxide concentration generally increases the rate of photosynthesis, up to a point where other factors like light or temperature become limiting.", status: "0", id: 991274 },

            { q: "What is the difference between Photosystem I and Photosystem II?", a: "Photosystem II absorbs light to split water and generate oxygen, while Photosystem I uses light energy to produce NADPH. Both systems work together to drive photosynthesis.", status: "1", id: 716256 },

            { q: "What is the Z-scheme in photosynthesis?", a: "The Z-scheme is a model that describes the electron flow in the light-dependent reactions of photosynthesis, moving from water to Photosystem II, through the electron transport chain, to Photosystem I.", status: "2", id: 619545 },

            { q: "How does CAM photosynthesis help plants in dry environments?", a: "CAM photosynthesis allows plants to fix carbon dioxide at night, reducing water loss by keeping stomata closed during the day while still producing sugars from the stored CO2.", status: "0", id: 668475 },

            { q: "What is the role of ATP synthase in photosynthesis?", a: "ATP synthase is an enzyme in the thylakoid membrane that uses the proton gradient created by the electron transport chain to synthesize ATP from ADP and inorganic phosphate.", status: "1", id: 236778 },

            { q: "How does chlorophyll protect plants from excess light?", a: "Chlorophyll can dissipate excess absorbed light energy as heat, reducing the risk of damage to the photosynthetic apparatus under high light conditions.", status: "2", id: 326144 },

            { q: "How do pigments like phycoerythrin aid in photosynthesis?", a: "Phycoerythrin is a pigment found in some algae that absorbs light in the blue-green spectrum, allowing photosynthesis to occur in deeper water where light is less available.", status: "0", id: 698586 },

            { q: "What is the role of the Calvin Cycle in carbon fixation?", a: "The Calvin Cycle is responsible for fixing carbon dioxide into an organic molecule, producing glucose and other carbohydrates needed for plant growth and energy.", status: "1", id: 744141 },

            { q: "How do aquatic plants perform photosynthesis?", a: "Aquatic plants perform photosynthesis using dissolved carbon dioxide and light that penetrates the water. Their leaves often have a thin cuticle to facilitate gas exchange.", status: "2", id: 830040 },

            { q: "What is the photoelectric effect in photosynthesis?", a: "The photoelectric effect refers to the emission of electrons from a material when it absorbs light energy. In photosynthesis, this occurs when chlorophyll absorbs photons.", status: "0", id: 562984 },

            { q: "How do mangroves perform photosynthesis in salty environments?", a: "Mangroves adapt to salty environments by filtering salt out of seawater at their roots and performing photosynthesis in their leaves, which are often waxy to reduce water loss.", status: "1", id: 528564 },

            { q: "What is the effect of light polarization on photosynthesis?", a: "Polarized light can affect the orientation of light-harvesting complexes in photosystems, potentially altering the efficiency of light absorption and the rate of photosynthesis.", status: "2", id: 296753 },

            { q: "What is the role of proton pumps in photosynthesis?", a: "Proton pumps in the thylakoid membrane create a proton gradient by moving protons from the stroma into the thylakoid lumen, which is used to generate ATP during the light-dependent reactions.", status: "0", id: 442865 },

            { q: "How do halophytes photosynthesize in saline conditions?", a: "Halophytes, or salt-tolerant plants, have specialized adaptations like salt excretion glands and efficient photosynthesis mechanisms to thrive in saline environments.", status: "1", id: 51748 },

            { q: "How does the mesophyll contribute to photosynthesis?", a: "Mesophyll cells contain a high concentration of chloroplasts and are the primary site of photosynthesis in leaves, facilitating the absorption of carbon dioxide and light.", status: "2", id: 891662 },

            { q: "What is the compensation point in photosynthesis?", a: "The compensation point is the light intensity at which the rate of photosynthesis matches the rate of cellular respiration, meaning the plant produces just enough energy to meet its needs.", status: "0", id: 805473 },

            { q: "How do lichens photosynthesize?", a: "Lichens, which are symbiotic associations between fungi and photosynthetic algae or cyanobacteria, perform photosynthesis through their algal or cyanobacterial components, producing energy for the partnership.", status: "1", id: 590369 },

            { q: "What is the relationship between chloroplasts and mitochondria in plant cells?", a: "Chloroplasts capture light energy to produce glucose through photosynthesis, while mitochondria break down glucose to produce ATP through cellular respiration, working together to provide energy for the plant.", status: "2", id: 886344 },

            { q: "What is photoinhibition in photosynthesis?", a: "Photoinhibition occurs when plants are exposed to excessive light, leading to damage to the photosynthetic apparatus, particularly Photosystem II, and reducing the efficiency of photosynthesis.", status: "0", id: 203316 },

            { q: "What is the role of chloroplast DNA in photosynthesis?", a: "Chloroplast DNA contains the genes that code for proteins essential to the photosynthetic process, including those involved in the light-dependent reactions and the Calvin Cycle.", status: "1", id: 447338 },

            { q: "What is the effect of ultraviolet light on photosynthesis?", a: "Excessive ultraviolet light can damage DNA and proteins involved in photosynthesis, leading to reduced efficiency and potential harm to the plant's cellular structures.", status: "2", id: 660963 },
            ],

-->