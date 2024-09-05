<!-- THIS COMPONENT IS NOT IN USE

<template>
    <div id="sidebar" class="sidebar _flex _fd-co">
        <div id="sidebar-inner" class="__b _flex _fd-co">
            <div class="__b _flex _fd-ro _jc-be">
                <svg class="__po" @click="closeSidebar()" width="24" height="24" xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd" clip-rule="evenodd">
                    <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
                </svg>
                <div class="_flex _fd-ro _ai-ce">
                    <svg class="__po" @click="createPlaylist()" width="24" height="24"
                        xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                        <path
                            d="M20 15h4.071v2h-4.071v4.071h-2v-4.071h-4.071v-2h4.071v-4.071h2v4.071zm-8 6h-12v-2h12v2zm0-4.024h-12v-2h12v2zm0-3.976h-12v-2h12v2zm12-4h-24v-2h24v2zm0-4h-24v-2h24v2z" />
                    </svg> &nbsp; &nbsp;
                </div>
                <div class="_flex _fd-ro">
                    <svg class="__po" @click="logout()" width="24" height="24" xmlns="http://www.w3.org/2000/svg"
                        fill-rule="evenodd" clip-rule="evenodd">
                        <path d="M16 2v7h-2v-5h-12v16h12v-5h2v7h-16v-20h16zm2 9v-4l6 5-6 5v-4h-10v-2h10z" />
                    </svg>
                </div>
            </div>
            <br>
            <input class="__b __padxs __bg-grey-10 __bo-none __txt-grey-7" placeholder="Search playlists...">
            <br>
            <div id="pl_1" class="playlist __b _flex _fd-co">
                <div class="__b _flex _fd-ro _jc-be _ai-ce">
                    <p class="sidebar-title __b __tle __tmd">Summer Vibes</p>
                    <div class="_flex _fd-ro _cc">
                        <svg class="__po" height="24" width=24 clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round"
                            stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m4.481 15.659c-1.334 3.916-1.48 4.232-1.48 4.587 0 .528.46.749.749.749.352 0 .668-.137 4.574-1.492zm1.06-1.061 3.846 3.846 11.321-11.311c.195-.195.293-.45.293-.707 0-.255-.098-.51-.293-.706-.692-.691-1.742-1.74-2.435-2.432-.195-.195-.451-.293-.707-.293-.254 0-.51.098-.706.293z"
                                fill-rule="nonzero" />
                        </svg>&nbsp; &nbsp;
                        <svg class="__po" height="24" width="24" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round"
                            stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m4.015 5.494h-.253c-.413 0-.747-.335-.747-.747s.334-.747.747-.747h5.253v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-.254v15.435c0 .591-.448 1.071-1 1.071-2.873 0-11.127 0-14 0-.552 0-1-.48-1-1.071zm14.5 0h-13v15.006h13zm-4.25 2.506c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm-4.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3.75-4v-.5h-3v.5z"
                                fill-rule="nonzero" />
                        </svg>
                    </div>
                </div>
                <hr class="__hr __b __bg-grey-10">
                <br class="__br __brsm">
                <div class="__b playlist-scroll __flow _flex _fd-ro _jc-ar">
                    <div style="margin-left: 10px; margin-bottom: 10px;" class="__padxs __bo-grey-5 __bod">
                        Test Video
                    </div>
                    <div style="margin-left: 10px; margin-bottom: 10px;" class="__padxs __bo-grey-5 __bod">
                        Test Video
                    </div>
                    <div style="margin-left: 10px; margin-bottom: 10px;" class="__padxs __bo-grey-5 __bod">
                        Test Video
                    </div>
                    <div style="margin-left: 10px; margin-bottom: 10px; " class="__padxs __bo-grey-5 __bod">
                        Test Video
                    </div>
                </div>
            </div>
            <br>
            <div id="pl_2" class="playlist __b _flex _fd-co">
                <p class="sidebar-title __b __tle __tmd">Gym Beats</p>
                <hr class="__hr __b __bg-grey-10">
                <br class="__br __brsm">
                <div class="__b playlist-scroll __flow _flex _fd-ro _jc-ar">
                    <div style="margin-left: 10px; margin-bottom: 10px;" class="__padxs __bo-grey-5 __bod">
                        Test Video
                    </div>
                    <div style="margin-left: 10px; margin-bottom: 10px;" class="__padxs __bo-grey-5 __bod">
                        Test Video
                    </div>
                    <div style="margin-left: 10px; margin-bottom: 10px;" class="__padxs __bo-grey-5 __bod">
                        Test Video
                    </div>
                    <div style="margin-left: 10px; margin-bottom: 10px; " class="__padxs __bo-grey-5 __bod">
                        Test Video
                    </div>
                </div>
            </div>
            <br>
            <div id="pl_3" class="playlist __b _flex _fd-co">
                <p class="sidebar-title __b __tle __tmd">Beach Party</p>
                <hr class="__hr __b __bg-grey-10">
                <br class="__br __brsm">
                <div class="__b playlist-scroll __flow _flex _fd-ro _jc-ar">
                    <div style="margin-left: 10px; margin-bottom: 10px;" class="__padxs __bo-grey-5 __bod">
                        Test Video
                    </div>
                    <div style="margin-left: 10px; margin-bottom: 10px;" class="__padxs __bo-grey-5 __bod">
                        Test Video
                    </div>
                    <div style="margin-left: 10px; margin-bottom: 10px;" class="__padxs __bo-grey-5 __bod">
                        Test Video
                    </div>
                    <div style="margin-left: 10px; margin-bottom: 10px; " class="__padxs __bo-grey-5 __bod">
                        Test Video
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { uauth } from "@/utils/auth";

export default {
    methods: {
        closeSidebar() {
            this.$emit('close-sidebar');
        },

        logout() {
            uauth.logout();
        },
    },
}
</script>

<style scoped>
@import url('../assets/css/styles.css');

#sidebar {
    background: #1A2B7A;
    background: #A083BE;
    background: #D5B5A4;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: linear-gradient(#1A2B7A, #A083BE);
    border-left: 1px solid var(--grey_1);
    color: white;
    padding: 20px;
    position: fixed;
    height: 100%;
    top: 0;
    right: -300px;
    width: 300px;
}

#sidebar svg {
    fill: white !important;
}

.sidebar-title {
    outline: none;
    color: white;
}

#sidebar-inner {
    max-height: 100vh;
    overflow-y: auto;
    padding-right: 10px;
}

#sidebar-inner::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

#sidebar-inner::-webkit-scrollbar-thumb {
    background-color: var(--grey_1);
    border-radius: 2px;
}

#sidebar-inner::-webkit-scrollbar-track {
    background: transparent;
}

.playlist-scroll::-webkit-scrollbar {
    width: 8px;
    height: 4px;
}

.playlist-scroll::-webkit-scrollbar-thumb {
    background: var(--grey_4);
    border-radius: 10px;
}

.playlist-scroll::-webkit-scrollbar-track {
    background: transparent;
}

.sidebar-open {
    right: 0px !important;
}

.sidebar-transition {
    transition: right 0.5s;
}
</style> -->