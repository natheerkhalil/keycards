<template>
    <div style="border-bottom: 1px solid var(--grey-3); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"
        class="__b __bg-grey-2 _flex _ai-ce _fd-ro _jc-be __padsm">
        <div @click="goHome" class="__po _flex _cc _fd-ro">
            <img style="width: 35px;" src="/icon.png" alt="Logo"> &nbsp;
            &nbsp;
            <p class="logo-text _sm-hide __tmd __txt-grey-10">RepeatBeats</p> &nbsp;
        </div>

    </div>

    <br>

    <div class="__b _flex _cc _fd-co">
        <div class="__13 __w _flex _cc _fd-co">
            <p class="__b __tlg __tle">My Account</p>
            <br>
            <hr class="__b __hr __bg-grey-7">
            <br>
            <div v-if="!emailVerified && !verificationEmailSent"
                class="__b __w __mauto _flex __bg-warn-5 _sm-fd-co __bo-warn-8 __bod _ai-ce _jc-be __bdxs __padxs">
                <div style="margin-right: 5px;" class="_flex _fd-co">
                    <p class="__txt-grey-1 __b __tle">Your email is not verified yet. You can only add a maximum
                        of&nbsp;<strong>10</strong>&nbsp;videos and&nbsp;<strong>1</strong>&nbsp;playlist with an
                        unverified
                        account.
                    </p>
                    <p style="margin-top: 5px; font-size: 13px;" class="__b __tle __txt-grey-2">Already verified email
                        on another
                        device? Press the <strong>send verification email</strong> button to refresh status.
                    </p>
                </div>
                <br class="m_hide _sm-show">
                <div class="_flex _cc _fd-ro">
                    <button v-if="!loading.verify" @click="sendVerificationEmail" style="min-width: max-content;"
                        class="__padxs __tsx __bg-none __po __bo-grey-1 __bod">Send Verification Email</button> &nbsp;
                    &nbsp;

                    <div v-if="loading.verify"
                        style="min-width: 35px; min-height: 35px; border-color: var(--grey_9); border-top-color: var(--theme3); border-width: 5px;"
                        class="__loader-og"></div>
                </div>
            </div>
            <br>
            <div class="__b _flex __padxs _fd-co">
                <p class="__b __tmd __tle">Account Details: </p>
                <br>
                <div class="__b __padsm __bod _fd-co _jc-ar _fw-wr _flex __bo-grey-8">
                    <div class="__b _fd-ro _sm-fd-co _flex _ai-ce _jc-ar">
                        <p class="__tmd">
                            <span class="__txt-3">Username:</span> &nbsp; {{ username }}
                        </p>
                        <br class="m_hide _sm-show">
                        <p class="__tmd">
                            <span class="__txt-3">Email:</span> &nbsp; {{ email }}
                        </p>
                    </div>
                    <br>
                    <div class="__b _fd-ro _sm-fd-co _flex _ai-ce _jc-ar">
                        <p class="__tmd">
                            <span class="__txt-3">Number of Videos:</span> &nbsp; {{ vlength }}
                        </p>
                        <br class="m_hide _sm-show">
                        <p class="__tmd">
                            <span class="__txt-3">Number of Playlists:</span> &nbsp; {{ plength }}
                        </p>
                    </div>
                </div>
            </div>
            <br>
            <div class="__b _flex __padxs _fd-co">
                <p class="__b __tmd __tle">Preferences: </p>
                <br>
                <div class="_fd-co _cc __b __padsm __bod _fw-wr _flex __bo-grey-8">

                    <div class="__b _flex _fd-ro _jc-be _ai-ce">
                        <p class="__txt-grey-2 __tsx">Fade out audio when video reaches end</p>
                        <input type="checkbox" class="custcheck" v-model="preferences.fadeOutAudio">
                    </div>

                    <br class="__br __brsm">
                    <hr class="__b __bg-grey-7 __hr">
                    <br class="__br __brsm">

                    <div class="__b _flex _fd-ro _jc-be _ai-ce">
                        <p class="__txt-grey-2 __tsx">Fade out audio when video reaches skip</p>
                        <input type="checkbox" class="custcheck" v-model="preferences.fadeOutAudioSkip">
                    </div>

                    <br class="__br __brsm">
                    <hr class="__b __bg-grey-7 __hr">
                    <br class="__br __brsm">

                    <div class="__b _flex _fd-ro _jc-be _ai-ce">
                        <p class="__txt-grey-2 __tsx">Drag & drop favourite videos to order them</p>
                        <input type="checkbox" class="custcheck" v-model="preferences.orderFav">
                    </div>

                    <br class="__br __brsm">
                    <hr class="__b __bg-grey-7 __hr">
                    <br class="__br __brsm">

                    <div class="__b _flex _fd-ro _jc-be _ai-ce">
                        <p class="__txt-grey-2 __tsx">Drag & drop videos in the current playlist to order them</p>
                        <input type="checkbox" class="custcheck" v-model="preferences.orderPl">
                    </div>

                    <br class="__br __brsm">
                    <hr class="__b __bg-grey-7 __hr">
                    <br class="__br __brsm">

                    <div class="__b _flex _fd-ro _jc-be _ai-ce">
                        <p class="__txt-grey-2 __tsx">Hide video data info by default</p>
                        <input type="checkbox" class="custcheck" v-model="preferences.hideVidData">
                    </div>


                </div>
            </div>
            <br>
            <div class="__b _flex __padxs _fd-co">
                <p class="__b __tmd __tle">Actions: </p>
                <br>
                <div class="_sm-fd-co _sm-cc __b __padsm __bod _fd-ro _jc-be _fw-wr _flex __bo-grey-8">

                    <div v-if="!loading.password" style="margin-bottom: 15px; margin-top: 15px; width: max-content; "
                        @click="sendPasswordResetEmail"
                        class="_sm-b __hv __hv-warn-2 __ht-grey-10 _sm-tal _cc __b __padxs _flex __bo-warn-2 __txt-warn-2 __bod __po">
                        Change Password
                    </div>

                    <div v-if="loading.password" style="margin-bottom: 15px; margin-top: 15px; width: max-content; "
                        class="_sm-b _sm-tal _cc __padxs _flex __txt-grey-10">Change
                        <div style="min-width: 35px; min-height: 35px; border-color: var(--grey_9); border-top-color: var(--theme3); border-width: 5px;"
                            class="__loader-og"></div>Password
                    </div>

                    <div style="margin-bottom: 15px; margin-top: 15px; width: max-content; "
                        @click="showEmailModal = !showEmailModal"
                        class="_sm-b __hv __hv-warn-2 __ht-grey-10 _sm-tal _cc __padxs _flex __bo-warn-2 __txt-warn-2 __bod __po">
                        Change Email</div>
                    <div style="margin-bottom: 15px; margin-top: 15px; width: max-content; " @click="deleteAccount"
                        class="_sm-b __hv __hv-err-2 __ht-grey-10 _sm-tal _cc __padxs _flex __bo-err-2 __txt-err-2 __bod __po">
                        Delete Account</div>
                </div>
            </div>
            <br>
            <div class="__mlauto tooltip">
                <svg viewBox="0 0 24 24" class="__po" @click="logout" width="24" height="24"
                    xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                    <path d="M16 2v7h-2v-5h-12v16h12v-5h2v7h-16v-20h16zm2 9v-4l6 5-6 5v-4h-10v-2h10z" />
                </svg>
                <p class="tooltiptext">Logout</p>
            </div>
            <br>
        </div>
    </div>

    <div v-if="showEmailModal"
        style="max-height: 90vh; overflow-x: auto; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 750px;"
        class="__custscroll __w _flex _fd-co _ai-ce __bg-grey-10 __bo-1 __bod __padsm">
        <div class="__b _flex _fd-ro _jc-be">
            <p class="__tmd __tle">Change email address for this account</p>
            <svg @click="showEmailModal = !showEmailModal" width=35 height=35 class="__po" clip-rule="evenodd"
                fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
            </svg>
        </div>
        <hr class="__hr __b __bg-grey-1">
        <br>
        <div class="__b _flex _cc _fd-co">
            <div class="__b _flex _cc">
                <input v-model="newEmail" type="text" style="border-bottom: 1px solid var(--grey_6);"
                    placeholder="New email (a verification email will be sent to this address)"
                    class="__b __padxs __bg-none __bo-none __txt-grey-1">
                &nbsp; &nbsp;

                <svg v-if="!loading.email" class="__po" @click="sendEmailChangeEmail" width="24" height="24"
                    clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m2.009 12.002c0-5.517 4.48-9.997 9.998-9.997s9.998 4.48 9.998 9.997c0 5.518-4.48 9.998-9.998 9.998s-9.998-4.48-9.998-9.998zm1.5 0c0 4.69 3.808 8.498 8.498 8.498s8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497-8.498 3.807-8.498 8.497zm6.711-4.845c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591zm.289 7.564v-5.446l3.523 2.718z"
                        fill-rule="nonzero" />
                </svg>

                <div style="min-width: 35px; min-height: 35px; border-color: var(--grey_9); border-top-color: var(--theme3); border-width: 5px;"
                    class="__loader-og" v-if="loading.email"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { useResponseStore } from '@/stores/response';
import { useAuthStore } from '@/stores/auth';

import { request } from "@/utils/api";

import { uauth } from "@/utils/auth";

export default {
    data() {
        return {
            username: useAuthStore().username,
            email: "...",

            vlength: "...",
            plength: "...",

            emailVerified: false,
            verificationEmailSent: false,

            cooldown: {
                password: new Date().getTime() - 60000,
                email: new Date().getTime() - 60000,
            },

            showEmailModal: false,

            newEmail: '',

            loading: {
                password: false,
                email: false,
                verify: false,
                deleteAccount: false,
            },

            preferences: {
                fadeOutAudio: false,
                fadeOutAudioSkip: false,
                orderFav: false,
                orderPl: false,
                hideVidData: false,
            }
        }
    },

    created() {
        // CHECK IF USER IS AUTHENTICATED
        this.checkAuthToken();

        let cache_all = localStorage.getItem("cache_all");

        if (cache_all) {
            this.vlength = JSON.parse(cache_all).length;
        } else {
            this.vlength = "0";
        }

        let cache_playlists = localStorage.getItem("cache_playlists");

        if (cache_playlists) {
            this.plength = JSON.parse(cache_playlists).length;
        } else {
            this.plength = "0";
        }

        this.email = localStorage.getItem("auth_email");

        this.verifyEmail(false);

        // UPDATE PREFERENCES
        this.preferences = JSON.parse(localStorage.getItem("preferences")) || this.preferences;
    },

    methods: {
        useAuthStore: useAuthStore,

        logout() {
            uauth.logout();
        },

        goHome() {
            this.$router.push('/')
        },

        // CHECK AUTHENTICATION STATE OF USER
        checkAuthToken() {
            setInterval(() => {
                if (!localStorage.getItem("auth_token")) {
                    window.location.href = "/login?msg=You have been logged out&type=info";
                }
            }, 1000);
        },


        deleteAccount() {
            if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
                if (window.confirm("This will permanently delete your videos, playlists, and account information. Are you sure?")) {
                    let prompt = window.prompt("Enter your username to confirm deletion (case sensitive):");

                    if (prompt !== this.username && prompt !== null) {
                        while (prompt !== this.username && prompt !== null) {
                            prompt = window.prompt("Incorrect username. Please try again");
                        }
                    }

                    if (prompt === this.username && prompt !== null) {
                        request({}, "/account/delete").then(res => {
                            if (!res.failed) {
                                localStorage.clear();

                                window.location.reload();
                            } else {
                                useResponseStore.updateResponse("Failed to delete account, please try again later.", "err");
                            }
                        });
                    }
                }
            }
        },

        verifyEmail(refresh = false) {
            let cache = localStorage.getItem("email_verified");

            if (cache && !refresh) {

                this.emailVerified = JSON.parse(cache);

            } else {
                request({}, "/account/is-verified").then(res => {
                    if (!res.failed) {
                        this.emailVerified = res.data.data;

                        localStorage.setItem("email_verified", JSON.stringify(this.emailVerified));
                    } else {
                        console.log(`Failed to fetch email verification status`, "err");

                        this.emailVerified = true;
                    }
                });
            }
        },

        sendVerificationEmail() {
            if (!this.emailVerified) {
                this.loading.verify = true;

                request({}, "/account/send-verification-email").then(res => {
                    console.log(res)
                    if (!res.failed) {
                        useResponseStore().updateResponse("Verification email sent. Check your inbox", "succ");

                        this.verificationEmailSent = true;

                        this.loading.verify = false;
                    } else {

                        request({}, "/account/is-verified").then(res => {
                            if (!res.failed) {
                                if (res.data.data == true) {
                                    this.emailVerified = res.data.data;

                                    localStorage.setItem("email_verified", JSON.stringify(this.emailVerified));

                                    useResponseStore().updateResponse("Email verification status updated successfully", "succ");

                                    return false;
                                }
                            } else {
                                console.log(`Failed to fetch email verification status`, "err");

                                this.emailVerified = true;

                                return false;
                            }

                            useResponseStore().updateResponse(`Failed to send verification email`, "err");

                            this.verificationEmailSent = false;

                            this.loading.verify = false;

                            console.log(res);
                        });
                    }
                });
            }
        },

        sendPasswordResetEmail() {
            this.loading.password = true;
            if (this.cooldown.password < (new Date().getTime() - 60000)) {
                request({ username: localStorage.getItem("auth_username") }, "/account/send-reset-password-email", false).then(res => {
                    if (!res.failed) {
                        useResponseStore().updateResponse("Email sent! Please check your inbox", "succ");

                        this.cooldown.password = new Date().getTime();

                        this.loading.password = false;
                    } else {
                        useResponseStore().updateResponse("Failed to send email", "err");

                        this.cooldown.password = (new Date().getTime()) - 60000;

                        this.loading.password = false;
                    }
                });
            } else {
                useResponseStore().updateResponse("Wait " + ((this.cooldown.password - (new Date().getTime() - 60000)) / 1000).toFixed(0) + " second(s) before sending another request", "warn");

                this.loading.password = false;
            }
        },

        isValidEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); },

        sendEmailChangeEmail() {
            if (!this.isValidEmail(this.newEmail)) {
                useResponseStore().updateResponse("Invalid email address format", "warn");
                return false;
            }

            this.loading.email = true;

            if (this.cooldown.email < (new Date().getTime() - 60000)) {
                request({ email: this.newEmail }, "/account/send-email-change-email").then(res => {
                    if (!res.failed) {
                        useResponseStore().updateResponse("Email sent! Please check your inbox", "succ");

                        this.loading.email = false;
                    } else {
                        useResponseStore().updateResponse("Failed to send email", "err");

                        this.loading.email = false;
                    }
                });
            } else {
                useResponseStore().updateResponse("Wait " + ((this.cooldown.email - (new Date().getTime() - 60000)) / 1000).toFixed(0) + " second(s) before sending another request", "warn");

                this.loading.email = false;
            }
        }
    },

    watch: {
        preferences: {
            handler(newVal, oldVal) {
                localStorage.setItem("preferences", JSON.stringify(newVal));
            },
            deep: true
        }
    }
}
</script>

<style scoped>
.custcheck {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    min-width: 24px;
    min-height: 24px;
    border: 2px solid var(--info_5);
    border-radius: 50%;
    /* Make it circular */
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
</style>