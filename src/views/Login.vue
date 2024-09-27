<template>

    <div class="__b _flex _fd-co _cc">
        <div style="min-height: 75vh; " class="__mauto __b _flex _fd-co _cc __13 __w">
            <div class="form-wrap">
                <p class="__b __tal __txl gradient-text">Login</p>

                <br>

                <div class="__b gradient-hr"></div>

                <br>

                <form class="__b _flex __padsm _fd-co _cc" @submit.prevent="login">
                    <input autocomplete="on" type="text" v-model="formData.username" placeholder="Username or Email">
                    <br>
                    <input autocomplete="on" type="password" v-model="formData.password" placeholder="Password">
                    <br>
                    <router-link class="__b __tal __tsx __tri __po" to="/register">Don't have an account? Create
                        one</router-link>
                    <br>
                    <router-link class="__b __tal __tsx __tri __po" to="/forgot-password">Forgot password?</router-link>
                    <br>
                    <input v-if="!loading" type="submit" value="Login">
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
/*
div#app {
    background-image: url('/bg.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
*/
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
    background: var(--err_6);
    border: 1px solid var(--grey_10);
    font-size: 1.5em;
    cursor: pointer;
    width: 100%;
    transition: 0.1s;
    color: black;
}

input[type="submit"]:hover {
    background: var(--err_5);
    color: var(--grey_10);
}
</style>

<script>
import { useResponseStore } from "@/stores/response";

import { uauth } from "@/stores/auth";

import { useDataStore } from "@/stores/data";

export default {
    data() {
        return {
            formData: {
                username: '',
                password: '',
                token: ''
            },

            loading: false,
        }
    },

    methods: {
        goHome() {
            window.location.href = "/";
        },

        login() {
            if (this.formData.username.trim() && this.formData.password) {
                this.loading = true;

                uauth().login(this.formData).then(res => {

                    if (localStorage.getItem("auth_token")) {

                        useDataStore().addLoadq();

                        useDataStore().getAllData().then(() => {

                            useResponseStore().updateResponse("Logged in successfully. Redirecting...", "succ");

                            window.location.href = "/";

                        })

                    } else {

                        let status = res.msg.response.status;

                        if (status === 401) {
                            useResponseStore().updateResponse("Invalid credentials", "err");
                        } else {
                            useResponseStore().updateResponse("An error occurred", "err");
                        }

                        this.loading = false;

                    }
                });

            } else if (!this.formData.username.trim()) {

                useResponseStore().updateResponse("Please enter a username", "warn");

            } else if (!this.formData.password) {

                useResponseStore().updateResponse("Please enter a password", "warn");
            }
        }
    }
}
</script>