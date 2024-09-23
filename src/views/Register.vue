<template>
    <div class="__b _flex _fd-co _cc">
        <div style="min-height: 75vh; " class="__mauto __b _flex _fd-co _cc __13 __w">
            <div class="form-wrap">
                <p class="__b __tal __txl gradient-text">Register</p>

                <br>

                <div class="__b gradient-hr"></div>

                <br>

                <div v-if="errors.length > 0" v-html="errors"
                    class="__b _flex __padxs _cc __bg-err-7 __bod __bdxs __bo-err-2 __txt-err-2"></div>
                <br v-if="errors.length > 0">
                <form class="__b _flex __padsm _fd-co _cc" @submit.prevent="register">
                    <input maxlength="18" autocomplete="on" @input="validateFormData" type="text"
                        v-model="formData.username" placeholder="Username">
                    <br>
                    <input autocomplete="on" @input="validateFormData" type="email" v-model="formData.email"
                        placeholder="Email">
                    <br>
                    <input autocomplete="on" @input="validateFormData" type="password" v-model="formData.password"
                        placeholder="Password">
                    <br>
                    <router-link class="__b __tal __tsx __tri __po" to="/login">Already have an account? Log
                        in</router-link>
                    <br>
                    <input v-if="!loading" :disabled="!ready"
                        :style="!ready ? 'cursor: default; opacity: 0.7' : 'cursor: pointer; opacity: 1'" type="submit"
                        value="Register">
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
    background-position: center;
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

// import { TURNSTILE_SITE_KEY } from "../../config";
import { PLACEHOLDER_CAPTCHA_TOKEN } from "../../config";

export default {
    data() {
        return {
            ready: true,

            errors: "",

            formData: {
                username: '',
                email: '',
                password: '',
            },
            loading: false,

            // TURNSTILE CAPTCHA
            sitekey: '',
            token: '',
        }
    },

    created() {
        this.token = PLACEHOLDER_CAPTCHA_TOKEN;
    },

    methods: {
        goHome() {
            window.location.href = "/";
        },


        register() {
            if (this.token) {
                this.loading = true;
                uauth().register({ username: this.formData.username, email: this.formData.email, password: this.formData.password, token: this.token }).then(res => {
                    if (localStorage.getItem("auth_token")) {

                        useResponseStore().updateResponse("Registered successfully. Redirecting...", "succ");

                        window.location.href = "/";
                    } else {
                        // reset captcha

                        this.token = PLACEHOLDER_CAPTCHA_TOKEN;

                        // get status code
                        let code = res.msg.response.status;

                        if (code === 409) {
                            useResponseStore().updateResponse("Username or email already exists", "warn");

                            this.loading = false;

                            return false;
                        } else if (code === 498) {
                            useResponseStore().updateResponse("Failed to verify captcha", "err");

                            this.loading = false;

                            return false;
                        }

                        useResponseStore().updateResponse("Failed to register account. Please try again", "err");

                        this.loading = false;
                    }
                });
            } else {
                useResponseStore().updateResponse("Please complete the captcha", "warn");
            }
        },

        validateFormData(data) {
            data = this.formData;

            data.username = data.username.replace(/\s+/g, '');
            data.username = data.username.toLowerCase();

            data.email = data.email.toLowerCase();

            const errors = [];

            const alphanumericPattern = /^[a-zA-Z0-9]+$/;

            // Validate username
            if (!data.username) {
                errors.push('Username is required.');
            } else if (typeof data.username !== 'string') {
                errors.push('Username must be a string.');
            } else if (data.username.length < 3) {
                errors.push('Username must be at least 3 characters long.');
            } else if (data.username.length > 18) {
                errors.push('Username must not exceed 18 characters.');
            } else if (!alphanumericPattern.test(data.username)) {
                errors.push('Username must only contain letters and numbers.');
            }

            // Validate email
            if (!data.email) {
                errors.push('Email is required.');
            } else if (typeof data.email !== 'string') {
                errors.push('Email must be a string.');
            } else {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(data.email)) {
                    errors.push('Email must be a valid email address.');
                } else if (data.email.length > 255) {
                    errors.push('Email must not exceed 255 characters.');
                }
            }

            // Validate password
            if (!data.password) {
                errors.push('Password is required.');
            } else if (typeof data.password !== 'string') {
                errors.push('Password must be a string.');
            } else if (data.password.length < 8) {
                errors.push('Password must be at least 8 characters long.');
            }

            if (errors.length == 0) {
                this.errors = "";

                this.ready = true;
            } else {
                this.ready = false;

                let errorMessages = Object.values(errors).flat();

                let str = "";

                errorMessages.forEach(e => {
                    str += `${e} <br>`;
                });

                this.errors = str;
            }
        }
    },
}
</script>