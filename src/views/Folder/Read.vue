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

    <div v-if="folderExists" class="__15 __mlauto __mrauto _flex _fd-co __w">

        <br>
        <div :style="`background-image: url('/themes/${folder.theme}.webp'); position: relative; background-position: center; background-size: cover; `"
            class="__b _flex _fd-co">

            <div
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5);">
            </div>

            <div style="z-index: 999" class="__b _flex _fd-co __txt-grey-10 __padsm __fi-grey-10">

                <div class="__b __hack _flex _cc _fd-ro">
                    <!-- SHARE FOLDER -->
                    <svg :style="`fill: var(--${folder.theme}4)`" @click="shareFolder" class="__po f-svg" width="24"
                        height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                        <path
                            d="M16.272 5.451c-.176-.45-.272-.939-.272-1.451 0-2.208 1.792-4 4-4s4 1.792 4 4-1.792 4-4 4c-1.339 0-2.525-.659-3.251-1.67l-7.131 3.751c.246.591.382 1.239.382 1.919 0 .681-.136 1.33-.384 1.922l7.131 3.751c.726-1.013 1.913-1.673 3.253-1.673 2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4c0-.51.096-.999.27-1.447l-7.129-3.751c-.9 1.326-2.419 2.198-4.141 2.198-2.76 0-5-2.24-5-5s2.24-5 5-5c1.723 0 3.243.873 4.143 2.201l7.129-3.75zm3.728 11.549c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm-15-9c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm15-7c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3z" />
                    </svg>

                    &nbsp; &nbsp;

                    <!-- DELETE FOLDER -->
                    <svg :style="`fill: var(--${folder.theme}4)`" @click="deleteFolder" class="__po f-svg" width="24"
                        height="24" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round"
                        stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9 3h6v-1.75c0-.066-.026-.13-.073-.177-.047-.047-.111-.073-.177-.073h-5.5c-.066 0-.13.026-.177.073-.047.047-.073.111-.073.177v1.75zm11 1h-16v18c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-18zm-10 3.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v12c0 .276.224.5.5.5s.5-.224.5-.5v-12zm5 0c0-.276-.224-.5-.5-.5s-.5.224-.5.5v12c0 .276.224.5.5.5s.5-.224.5-.5v-12zm8-4.5v1h-2v18c0 1.105-.895 2-2 2h-14c-1.105 0-2-.895-2-2v-18h-2v-1h7v-2c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v2h7z" />
                    </svg>

                    &nbsp; &nbsp;

                    <!-- EDIT FOLDER -->
                    <router-link style="margin: 0; padding: 0;" class="_flex _cc __nun"
                        :to="`/folder/${folder.id}/edit`">
                        <svg :style="`fill: var(--${folder.theme}4)`" class="f-svg" width="24" height="24"
                            xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                            <path
                                d="M8.071 21.586l-7.071 1.414 1.414-7.071 14.929-14.929 5.657 5.657-14.929 14.929zm-.493-.921l-4.243-4.243-1.06 5.303 5.303-1.06zm9.765-18.251l-13.3 13.301 4.242 4.242 13.301-13.3-4.243-4.243z" />
                        </svg></router-link>
                </div>

                <br>

                <!-- FOLDER HIERARCHY -->
                <div class="__b _fw-wr _flex _cc _fd-ro">
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

                <!-- FOLDER TITLE -->
                <div class="__b _flex _cc _fd-co">
                    <p :class="`__b __tal __txl __bo`" :style="`color: var(--${folder.theme}4)`">{{ folder.name }}</p>
                    <p :style="`color: var(--${folder.theme}4)`"><strong>{{ ds.getDescendantCards(folder.id).length
                            }}</strong> cards / <strong>{{
                                childrenFolders.length }}</strong> folders</p>
                </div>

                <!-- CREATE BUTTONS -->
                <div style="margin-top: 10px;" class="__b _flex _sm-hide _jc-en _fd-ro _ai-ce">
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

                <!-- CREATE BUTTONS (MOBILE)-->
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

                <hr class="__b __bg-grey-10">
            </div>
        </div>

        <div v-if="showChildrenFolders" class="__b _flex _fd-co">

            <br>

            <!-- SEARCH CHILDREN FOLDERS -->
            <div class="__b _flex _jc-en">
                <input v-model="searchChildrenFolders" style="border: none; border-bottom: 1px solid var(--grey_7);"
                    type="text" placeholder="Search folders..."
                    class="__w __padxs __bg-grey-10 __txt-grey-1 __bod __bo-grey-7">
            </div>

            <br>

            <div @scroll="debounceUpdateFolderLimit" style="overflow-x: auto;"
                class="__b _flex _ai-ce _fd-ro __w __custscroll">

                <!-- CHILDREN FOLDERS -->
                <router-link style="margin-bottom: 10px; " v-for="v in childrenFolders.slice(0, folderLimit)"
                    class="__nun" :to="`${v.id}`">

                    <div :id="`child-folder_${v.id}`"
                        :style="`margin-right: 15px; width: 500px; border-color: var(--${v.theme}3); position: relative; background-size: cover; background-image: url('/themes/${v.theme}.webp'); background-position: center;`"
                        :class="`folder __po __hv-6 __hv __13 __w _flex __mlauto __mauto _fd-co __padsm __bdxs __bo-2`">


                        <div
                            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5);">
                        </div>

                        <div style="z-index: 999;" class="__b _flex _fd-co">
                            <div class="__b _flex _jc-be _ai-ce _m-sm-fd-co _m-sm-cc">

                                <!-- CHILD FOLDER NAME -->
                                <div class="__noscroll _flex"
                                    style="margin-right: 15px; max-width: 90%; overflow-x: auto;">
                                    <p :style="`color: var(--${v.theme}4); overflow-x: auto; white-space: wrap;min-width: max-content; outline: none;`"
                                        :id="`ftitle_${v.id}`" :class="['__txt-4', '__tlg', '__bo']">{{
                                            v.name }}</p>
                                </div>

                                <!-- CHILD FOLDER CARDS -->
                                <div class="_flex _fd-co">
                                    <p :style="`min-width: max-content; color: var(--${v.theme}4)`"><strong>{{
                                        ds.getDescendantCards(v.id).length }}</strong> cards</p>
                                    <p :style="`min-width: max-content; color: var(--${v.theme}4)`"><strong>{{
                                        ds.getChildren(v.id).length }}</strong> folders</p>
                                </div>
                            </div>

                            <br>

                            <!-- CHILD FOLDER PROGRESS -->
                            <div :style="`background: linear-gradient(to right, ${ds.getFolderCardProgress(v.id)});`"
                                class="progress">
                                <div class="progress-overlay">
                                    <span class="__bo __txt-err-4">{{ ds.getFolderCardStatus(v.id, 1) }}</span>

                                    &nbsp;

                                    <span class="__txt-grey-10">/</span>

                                    &nbsp;

                                    <span class="__bo __txt-succ-2">{{ ds.getFolderCardStatus(v.id, 2) }}</span>

                                    &nbsp;

                                    <span class="__txt-grey-10">/</span>

                                    &nbsp;

                                    <span class="__bo __txt-grey-3">{{ ds.getFolderCardStatus(v.id, 0) }}</span>
                                </div>
                            </div>
                            <br>
                        </div>
                    </div>

                </router-link>
            </div>

        </div>

        <br>

        <div class="__b _flex _jc-be _ai-ce _m-sm-fd-co">
            <div class="_flex _fd-ro _cc">
                <!-- SELECT -->
                <svg v-if="cards.length > 0" @click="selectAll"
                    :class="[this.cards.filter(c => c.selected == true).length === this.cards.length ? ['__fill-1',] : ['__fi-grey-1'], '__po']"
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

            <!-- SEARCH CARDS -->
            <input v-model="search" @input="searchCards" style="border: none; border-bottom: 1px solid var(--grey_7);"
                type="text" placeholder="Search cards..."
                class="__w __padxs __bg-grey-10 __txt-grey-1 __bod __bo-grey-7">
        </div>

        <br>

        <div class="__b _fw-wr _flex _cc _fd-ro">
            <!-- CARDS -->
            <div style="flex-grow: 1;" v-if="searchResults.length == 0" v-for="v in cards.slice(0, cardLimit)"
                :class='[["__bg-grey-6", "__bg-err-6", "__bg-succ-6"][Number(v.status)], "card", "__custscroll"]'>

                <div @click="toggleSelected(v.id)" class="__po __b _flex _cc">
                    <input v-model="v.selected" type="checkbox" class="custcheck">
                </div>


                <router-link class="__nun _flex __b _fd-co _ai-be __hack" :to="`/card/${v.id}`">

                    <!-- CARD Q -->
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

                    <!-- UPDATE CARD STATUS -->
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

    <!-- MOVE CARD TO FOLDER-->
    <div @click="hidemoveFolders" v-if="showmoveFolders" class="_flex modal-overlay">
        <div style="max-width: 90%; max-height: 80vh; width: 1300px;" class="__mauto _flex _fd-co __bg-grey-10 __padsm">
            <div class="__b _flex _fd-ro _jc-be _ai-ce _m-sm-fd-co">
                <p class="__b __tle __tlg __txt-grey-2">Move Card(s) to Folder</p>

                <!-- SEARCH MOVE FOLDERS -->
                <input v-model="moveFoldersSearch" type="text" placeholder="Search folder..."
                    class="__b __bg-none __bo-none __padxs">
            </div>

            <hr style="margin: 10px 0px;" class="__b __bg-grey-2">

            <div @scroll="updatemoveFoldersLimit" style="max-height: 500px; overflow-y: auto;"
                class="__custscroll __b _flex _fd-co">

                <!-- MOVE FOLDER -->
                <Folder @select-folder="selectFolderToMove" v-if="!text.cleanup(moveFoldersSearch)"
                    v-for="f in ds.getOrphanFolders()" :key="f.id" :folder="f" :allFolders="ds.getFolders()"
                    :omit="[this.folderId]" :level="0" :tab="false" />

                <FolderTab @select-folder="selectFolderToMove" v-if="text.cleanup(moveFoldersSearch).length > 0"
                    v-for="f in ds.getFolders().filter(f => text.cleanup(f.name, true).includes(text.cleanup(moveFoldersSearch, true)))"
                    :key="f.id" :omit="[this.folderId]" :folder="f" />
            </div>
        </div>
    </div>
</template>

<script>
import { useResponseStore } from '@/stores/response';

import { useDataStore } from '@/stores/data';

import Folder from '@/components/Folder/Folder.vue';
import FolderTab from '@/components/Folder/FolderTab.vue';

import { text } from '@/main';

function debounce(fn, delay) {
    let timeoutID;
    return function (...args) {
        if (timeoutID) clearTimeout(timeoutID);
        timeoutID = setTimeout(() => fn.apply(this, args), delay);
    };
}

export default {
    components: {
        Folder,
        FolderTab
    },

    computed: {
        // GLOBAL FOLDERS //
        globalFolders() {
            return this.ds.getFolders();
        },

        // FOLDER ANCESTORS //
        folderAncestors() {
            return this.ds.getAncestors(this.folder.id);
        },

        // FOLDER PROPERTIES //
        folderId() {
            return this.$route.params.id || null;
        },
        childrenFolders() {
            return this.ds.getChildren(this.folderId).filter(f => text.cleanup(f.name, true).includes(this.searchChildrenFolders));
        },

        // CHECK IF CHILDREN FOLDERS LENGTH > 0 //
        showChildrenFolders() {
            return this.ds.getChildren(this.folderId).length > 0;
        },

        // GET ALL THEMES //
        themes() {
            return this.ds.getThemes();
        },

        // DATA STORE
        ds() {
            return useDataStore();
        }
    },

    data() {
        return {
            // FOLDER EXISTS
            folderExists: false,

            // FOLDER
            folder: null,
            folderCards: [],

            // FOLDERS TO MOVE CARDS INTO
            moveFoldersSearch: "",
            moveFoldersLimit: 8,
            showmoveFolders: false,

            // MAX ELEMENTS TO SHOW UNTIL SCROLL
            cardLimit: 75,
            folderLimit: 10,

            debounceUpdateFolderLimit: null,

            // CARDS TO BE MOVED
            cardsToBeMoved: [],

            // SEARCH CARDS
            search: "",
            searchResults: [],

            // CARD DATA
            allCards: [],
            cards: [],

            // SEARCH CHILDREN FOLDERS
            searchChildrenFolders: "",

            // TEXT UTILITIES
            text: text,
        }
    },


    methods: {
        // DELETE FOLDER //
        deleteFolder() {
            if (!window.confirm("Are you sure you want to delete this folder?")) {
                return;
            }

            if (this.ds.getDescendants(this.folderId, false).length > 0) {
                useResponseStore().updateResponse("This folder contains folders. Move these to another folder or delete these first to continue.", "warn");

                return;
            }

            if (this.ds.getCardsByFolder(this.folderId).length > 0) {
                useResponseStore().updateResponse("This folder contains cards. Move these cards to another folder or delete them first to continue.", "warn");

                return;
            }

            this.ds.deleteFolder(this.folderId).then(r => {
                if (!r) {
                    useResponseStore().updateResponse("Failed to delete folder", "err");
                    return;
                } else {
                    useResponseStore().updateResponse("Folder deleted successfully", "succ");

                    this.$router.push("/");
                }
            })
        },

        // SEARCH CARDS //
        searchCards() {
            let search = text.cleanup(this.search, true);

            this.cards = this.allCards.filter(card => text.cleanup(card.q, true).includes(search));

            if (search === "") {
                this.cards = this.allCards;
            }
        },

        // TOGGLE CARD OPTIONS //
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
        },

        // SELECT ALL CARDS
        selectAll() {
            if (this.cards.filter(c => c.selected == true).length === this.cards.length)
                this.cards.forEach(card => card.selected = false);
            else
                this.cards.forEach(card => card.selected = true);
        },

        // SEARCH FOLDERS //
        updatemoveFoldersLimit(e) {
            if (e.target.scrollTop + e.target.offsetHeight >= e.target.scrollHeight) {
                this.moveFoldersLimit += 25;
            }
        },


        // CARD OPERATIONS //

        // EDIT CARD //
        editCard(e) {
            e.preventDefault();

            let id = e.target.id.split("_")[1] || e.target.parentElement.id.split("_")[1];
            id = Number(id);

            this.$router.push(`/card/${id}/edit`);
        },

        // DELETE CARD //
        deleteCard(e) {
            e.preventDefault();

            let id = e.target.id.split("_")[1] || e.target.parentElement.id.split("_")[1];
            id = Number(id);

            if (window.confirm("Are you sure you want to delete this card?")) {
                this.ds.deleteCards(this.cards.map(c => c.id == id)).then(r => {
                    if (r) {
                        useResponseStore().updateResponse("Card deleted successfully", "succ");
                        this.cards = this.cards.filter(card => card.id !== id);
                    } else {
                        useResponseStore().updateResponse("Failed to delete card", "err");
                        return;
                    }
                })

            }
        },

        // MARK CARD //
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

            this.ds.markCard(id, status);

            this.cards.find(card => card.id === id).status = status;
        },

        // MOVING CARD //

        // OPEN MOVE FOLDERS //
        moveCard(e) {
            e.preventDefault();

            let id = e.target.id.split("_")[1] || e.target.parentElement.id.split("_")[1];
            id = Number(id);

            this.cardsToBeMoved.push(id);

            this.showmoveFolders = true;
        },

        // MOVE CARDS TO FOLDER //
        selectFolderToMove(id) {
            id = Number(id);

            if (id == this.folder.id) {
                this.showmoveFolders = false;
                useResponseStore().updateResponse("You can't move cards to the same folder.", "err");
                return;
            }

            if (window.confirm("Are you sure you want to move " + this.cardsToBeMoved.length + " card(s) to the folder: " + this.globalFolders.find(f => f.id === id).name + "?")) {

                console.log(this.cardsToBeMoved);

                this.ds.moveCards(this.cardsToBeMoved, id).then(r => {
                    if (!r) {
                        useResponseStore().updateResponse("Failed to move cards", "err");
                        return;
                    } else {
                        useResponseStore().updateResponse("Cards moved successfully", "succ");

                        this.cards.filter(c => this.cardsToBeMoved.includes(c.id)).forEach(card => card.folder = id);

                        this.cardsToBeMoved = [];
                        this.showmoveFolders = false;

                        this.cards = this.cards.filter(c => c.folder == this.folder.id);
                    }
                })
            }
        },

        // HIDE MOVE FOLDERS //
        hidemoveFolders(e) {
            if (e.target.className.includes("modal-overlay")) {
                this.showmoveFolders = false;
            }
        },

        // SELECT CARD OPERATIONS //

        // TOGGLE SELECTED //
        toggleSelected(id) {
            this.cards.find(card => card.id === id).selected = !this.cards.find(card => card.id === id).selected;
        },

        // DELETE SELECTED CARDS //
        deleteSelected() {
            if (window.confirm("Are you sure you want to delete the selected cards?")) {

                try {

                    this.ds.deleteCards(this.cards.filter(c => c.selected == true)).then(r => {
                        if (!r) {
                            useResponseStore().updateResponse("Failed to delete selected cards", "err");
                            return;
                        }

                        this.cards = this.cards.filter(card => !card.selected);

                        useResponseStore().updateResponse("Selected cards deleted successfully", "succ");
                        return;
                    })

                } catch (err) {
                    useResponseStore().updateResponse("Some cards failed to be deleted.", "warn");

                    return;
                }

            }
        },

        // ADD SELECTED CARDS TO MOVE ARRAY //
        moveSelected() {
            this.cards.forEach(c => {
                if (c.selected) {
                    this.cardsToBeMoved.push(c.id);
                };
            });

            this.showmoveFolders = true;
        },

        // MARK SELECTED CARDS //
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

                this.ds.markCards(this.cards.filter(c => c.selected == true).map(id => id), status).then(r => {
                    if (r) {
                        useResponseStore().updateResponse("Selected cards marked successfully", "succ");

                        this.cards.filter(card => card.selected == true).forEach(card => card.status = status);

                        this.cards.forEach(c => c.selected = false);

                        return;
                    } else {
                        useResponseStore().updateResponse("Failed to mark selected cards", "err");
                        return;
                    }
                })
            }
        },

        // UPDATE CARD LIMIT ON SCROLL //   
        updateCardLimit(e) {
            if (e.target.scrollTop + e.target.offsetHeight >= e.target.scrollHeight) {
                this.cardLimit += 25;
            }
        },
        // UPDATE FOLDER LIMIT ON SCROLL //
        updateFolderLimit(e) {
            if (e.target.scrollTop + e.target.offsetHeight >= e.target.scrollHeight) {
                this.folderLimit += 25;
            }
        }
    },

    created() {
        // UPDATE FOLDER EXISTS VARIABLE
        this.ds.getFolder(this.folderId).then(r => {
            if (r) {
                this.folder = r;

                this.folderExists = true;
            } else {
                this.folderExists = false;
            }
        })

        this.cards = this.ds.getCards(this.folderId);
        this.allCards = this.cards;

        this.debounceUpdateFolderLimit = debounce(this.updateFolderLimit, 200);
    },

    mounted() {
        const appContainer = document.getElementById('app');

        if (appContainer) {
            // ADD SCROLL LISTENER TO APP TO UPDATE CARDS LIMIT  
            const debouncedCardLimit = debounce(this.updateCardLimit, 200)

            appContainer.addEventListener('scroll', debouncedCardLimit);

            // Store the debounced function to remove it later
            this.debouncedCardLimit = debouncedCardLimit;
        }
    },

    beforeDestroy() {
        // REMOVE SCROLL LISTENER FROM DOCUMENT    
        const appContainer = document.getElementById('app');

        if (appContainer && this.debouncedCardLimit) {
            appContainer.removeEventListener('scroll', this.debouncedCardLimit);
        }
    },

    watch: {
        folderId(newVal, oldVal) {
            this.ds.verifyCards(this.ds.getCards(newVal)).then(r => {
                this.cards = r;
            })
            this.allCards = this.cards;

            this.ds.getFolder(newVal).then(folder => {
                this.folder = folder;
            });
        },

        /*folderCards(newVal, oldVal) {
            this.cards = this.ds.getCardsByFolder(this.folderId);
            this.allCards = this.cards;
        }*/
    }
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

.f-svg:hover {
    opacity: 0.8;
}
</style>