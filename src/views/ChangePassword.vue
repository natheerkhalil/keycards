<template>

    <!-- HEADER -->
    <div style="border-bottom: 1px solid var(--grey-3); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"
        class="__b __bg-grey-2 _flex _ai-ce _fd-ro _jc-be __padsm">
        <div @click="goHome" class="__po _flex _cc _fd-ro">
            <img style="width: 35px;" src="/icon.png" alt="Logo"> &nbsp;
            &nbsp;
            <p class="logo-text _sm-hide __tmd __txt-grey-10">RepeatBeats</p> &nbsp;
        </div>
        <div v-if="!isAuthenticated" class="_flex _cc">

            <div style="font-size: 22.5px;" class="__txt-grey-10 _fd-ro _ai-ce">
                <router-link class="__hovun __hovun-grad __nun __txt-grey-10" to="/login">Login</router-link>
                <span class="_sm-hide">&nbsp; // &nbsp;</span>
                <router-link class="_sm-hide __hovun __hovun-grad __nun __txt-grey-10"
                    to="/register">Register</router-link>
            </div>
            
        </div>
    </div>
    <!-- HEADER END -->

    <br>


    <div class="__b _flex _fd-co _cc">
        <div style="min-height: 75vh; " class="__mauto __b _flex _fd-co _cc __13 __w">
            <div class="form-wrap">
                <h1 class="__b __tal __tlg">Change Password</h1>
                <br>
                <hr class="__hr __b __bg-grey-8">
                <br>
                <form class="__b _flex __padsm _fd-co _cc" @submit.prevent="changePassword">
                    <input type="password" v-model="formData.password" placeholder="Password">
                    <br>
                    <input type="password" v-model="formData.confirmPassword" placeholder="Confirm Password">
                    <br>
                    <input v-if="!loading" type="submit" value="Submit">
                    <div v-if="loading"
                        style="min-width: 50px; min-height: 50px; border-color: white; border-top-color: var(--succ_6); border-width: 5px;"
                        class="__loader-og"></div>
                </form>
            </div>
        </div>
    </div>
</template>

<style>
.form-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 2.5px;
    color: var(--grey_3);
    max-width: 100%;
    border: 1px solid var(--grey_7);
    background: whitesmoke;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

div#app {
    background-image: url('/bg.webp');
    background-repeat: no-repeat;
    background-size: cover;
}

input {
    max-width: 100%;
    background: none;
    border: none;
    outline: none;
    padding: 7.5px;
    font-size: 1.5em;
    border-bottom: 1px solid var(--grey_7);
    color: var(--grey_3);
}

input::placeholder {
    color: var(--grey_3);
}

input[type="submit"] {
    padding: 7.5px;
    background: var(--succ_6);
    border: 1px solid var(--grey_10);
    font-size: 1.5em;
    cursor: pointer;
    width: 100%;
    transition: 0.1s;
    color: black;
}

input[type="submit"]:hover {
    background: var(--succ_5);
}
</style>

<script>
import { useResponseStore } from "@/stores/response";

import { request } from "@/main";

import { useAuthStore } from "@/stores/auth";

export default {
    data() {
        return {
            formData: {
                password: '',
                confirmPassword: '',
                token: ''
            },
            loading: false,

            isAuthenticated: false,
        }
    },

    created() {
        let params = this.$route.query;
        let token = params.tk;

        if (token) {
            this.formData.token = token;
        } else {
            window.location.href = "/?msg=You need a token to change your password&type=err";
        }

        this.isAuthenticated = useAuthStore().isAuthenticated;
    },

    methods: {
        goHome() {
            window.location.href = "/";
        },

        changePassword() {
            if (this.formData.password.length < 8) {
                useResponseStore().updateResponse("Password must be at least 8 characters long", "err");
                return false;
            }

            if (this.formData.password !== this.formData.confirmPassword) {
                useResponseStore().updateResponse("Passwords do not match", "err");
                return false;
            }

            this.loading = true;

            request({ token: this.formData.token, new_password: this.formData.password }, "/account/change-password", false).then(res => {
                if (!res.failed) {
                    useResponseStore().updateResponse("Password reset successfully. Redirecting...", "succ");
                    window.location.href = "/login";
                } else {
                    useResponseStore().updateResponse("Couldn't change password", "err");
                }
                this.loading = false;
            });
        }
    }
}
</script>