<template>
    <div style="border-bottom: 1px solid var(--grey-3); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"
        class="__b __po __bg-grey-2 _flex _ai-ce _fd-ro _jc-be __padsm">
        <div @click="goHome" class="_flex _cc _fd-ro">
            <img style="width: 35px;" src="/icon.png" alt="Logo"> &nbsp;
            &nbsp;
            <p class="logo-text __tmd __txt-grey-10">RepeatBeats</p> &nbsp;
        </div>
    </div>

    <br>

    <div class="__b _flex _cc">
        <div class="__13 __w _flex _fd-co">

            <svg class="__mauto" xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24">
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#b4b059;stop-opacity:1" />
                        <stop offset="50%" style="stop-color:#af4261;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#768a86;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <path fill="url(#grad1)"
                    d="M1 6.417c0-1.013.822-1.833 1.834-1.833 1.215 0 2.104 1.167 1.763 2.329-.559 1.915 5.827 3.731 6.771-1.471.239-1.323-.021-1.67-.668-2.321-.329-.329-.534-.783-.534-1.287 0-1.013.822-1.834 1.834-1.834 1.014 0 1.833.821 1.833 1.833 0 .504-.204.958-.533 1.287-.646.65-.905.998-.666 2.321.941 5.2 7.33 3.387 6.77 1.471-.339-1.162.548-2.329 1.764-2.329 1.012 0 1.832.821 1.832 1.834 0 1.118-.992 1.97-2.084 1.816-1.32-.187-3.03 4.554-3.417 6.716-1.765-.615-3.618-.942-5.493-.949-1.875.006-3.74.334-5.504.949-.388-2.162-2.098-6.903-3.418-6.717-1.092.155-2.084-.697-2.084-1.815zm-1 14.583h2.359l.566 3c.613-1.012 1.388-1.912 2.277-2.68l-2.342-3.335c-1.089.879-2.053 1.848-2.86 3.015zm24 0h-2.359l-.566 3c-.613-1.012-1.388-1.912-2.277-2.68l2.343-3.335c1.088.879 2.052 1.848 2.859 3.015zm-12-4.998c-2.845.009-5.491.825-7.757 2.211l2.334 3.322c1.603-.924 3.448-1.464 5.423-1.473 1.975.009 3.82.549 5.423 1.473l2.334-3.322c-2.266-1.386-4.912-2.202-7.757-2.211zm-3.022 3.498l-.65-.348-.651.348.131-.726-.531-.511.729-.101.321-.662.322.663.729.101-.53.511.13.725zm3.672-.5l-.65-.348-.65.348.131-.726-.531-.511.729-.101.321-.662.322.663.729.101-.53.511.129.725zm3.718.5l-.65-.348-.65.348.131-.726-.531-.511.729-.101.322-.663.322.663.729.101-.53.511.128.726z" />
            </svg>

            <br><br>

            <h1 class="gradient-text __txl">Unlimited videos. Unlimited playlists. No ads.</h1>

            <br>

            <div class="__b _flex _cc">
                <p class="__tal" style="font-size: 21.5px; max-width: 600px; ">Support this website & get to enjoy more
                    of your music and videos at the same time. <br> <br> <span style="font-size: 18px;"
                        class="__txt-info-1">Only a one-time payment of £4.99 - we don't like monthly memberships
                        either. Memberships like yours help keep this website free :) </span>
                </p>
            </div>

            <br><br>

            <div v-if="emailVerified" class="__b _flex _fd-co _cc">
                <div style="max-width: 100%; overflow-x: auto" class="_flex __mauto">
                    <form style="min-width: 500px; max-width: 100%;" class="_flex _fd-co"
                        @submit.prevent="handleSubmit">
                        <div id="card-element"></div>

                        <br>

                        <button v-if="!loading"
                            class="__bo-none __bg-grey-9 __hv __hv-grey-4 __ht-grey-10 __padxs __bdxs __txt-grey-1 __po"
                            type="submit" :disabled="loading">Upgrade 🎶</button>


                        <div v-if="loading" class="__b _flex _cc">
                            <div style="width: 35px; height: 35px; border-color: var(--grey_9); border-top-color: var(--theme3); border-width: 5px;"
                                class="__loader-og"></div>
                        </div>
                    </form>
                </div>

                <br><br><br>

                <div class="_flex __mauto" style="min-width: 500px">
                    <p class="__b __w __tri __txt-grey-5" style="font-size: 12px">By paying, you agree to the
                        <router-link to="/privacy">Privacy Policy</router-link> and <router-link to="/terms">Terms and
                            Conditions</router-link>. <br> This payment is a one-time fee of £4.99 and cannot be
                        refunded. <br> We do not store your credit card data.
                    </p>
                </div>

                <br>

                <div class="_flex __mauto" style="min-width: 500px">
                    <p class="__b __w __tri __txt-grey-5" style="font-size: 12px"><span v-if="!loadingVerify"
                            @click="refreshMembershipStatus"
                            class="__bo-1 __padxs __bo-info-3 __bdxs __po __hv __ht-grey-9 __hv-info-3">Already
                            upgraded? Press
                            here</span>

                    <div style="width: 35px; height: 35px; border-color: var(--grey_9); border-top-color: var(--theme3); border-width: 5px;"
                        class="__loader-og __mlauto" v-if="loadingVerify"></div>
                    </p>
                </div>
            </div>

            <div style="width: 750px" v-if="!emailVerified"
                class="__w __mauto _flex __bg-warn-5 _sm-fd-co __bo-warn-8 __bod _ai-ce _jc-be __bdxs __padmd">
                <div style="margin-right: 5px;" class="_flex _fd-co">
                    <p class="__txt-grey-1 __b __tle">Your email is not verified yet. You need to verify your email
                        address to be able to upgrade.
                    </p>
                </div> &nbsp; &nbsp;
                <button @click="goToAccount" style="min-width: max-content;"
                    class="__padxs __tsx __bg-none __po __bo-grey-1 __bod">Go To Account</button>
            </div>

        </div>

    </div>
</template>

<style>
.gradient-text {
    background-color: red;

    background-image: linear-gradient(45deg, #b4b059, #b4b059, #af4261, #af4261, var(--theme3), var(--theme3));
    background-size: 100%;
    background-repeat: repeat;

    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    color: black;
}
</style>

<script>
import { loadStripe } from '@stripe/stripe-js';

import { request } from '@/main';
import { useResponseStore } from '@/stores/response';

import { STRIPE_KEY } from '../../config';

export default {


    data() {
        return {
            stripe: null,
            cardElement: null,
            clientSecret: '',
            loading: false,
            error: '',

            loadingVerify: false,

            emailVerified: false,
        };
    },


    async created() {
        // VERIFY IF USER IS EMAIL VERIFIED
        let cache = localStorage.getItem("email_verified");

        if (cache) {
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

        if (this.emailVerified) {
            this.stripe = await loadStripe(STRIPE_KEY);

            const elements = this.stripe.elements();
            const style = {
                base: {
                    color: '#32325D',
                    fontFamily: 'Arial, sans-serif',
                    fontSmoothing: 'antialiased',
                    fontSize: '16px',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                }
            };
            this.cardElement = elements.create('card', { style });
            this.cardElement.mount('#card-element');

            this.createPaymentIntent();
        }
    },


    methods: {
        goHome() {
            this.$router.push('/');
        },

        goToAccount() {
            this.$router.push('/account');
        },

        refreshMembershipStatus() {
            this.loadingVerify = true;

            request({}, "/account/membership-status").then(res => {
                if (!res.failed) {
                    if (res.data.data === false || res.data.data === 0) {
                        localStorage.removeItem("user_is_member");

                        this.userIsMember = false;

                        this.loadingVerify = false;

                        useResponseStore().updateResponse("Looks like you haven't upgraded yet", "info");
                    } else {
                        this.loadingVerify = false;

                        localStorage.setItem("user_is_member", 1);

                        this.userIsMember = true;

                        this.$router.push('/');

                        useResponseStore().updateResponse("Successfully upgraded!", "succ");
                    }

                    this.checkMaxStorage();
                } else {
                    this.loadingVerify = false;

                    useResponseStore().updateResponse("Failed to refresh membership status", "err");
                }
            });
        },

        async createPaymentIntent() {
            try {
                request({}, '/create-payment-instance', true).then(res => {
                    if (!res.failed) {
                        this.clientSecret = res.data.clientSecret;
                    } else {
                        useResponseStore().updateResponse("Failed to initiate payment. Have you already upgraded?", "err");
                    };
                });
            } catch (error) {
                useResponseStore().updateResponse("Failed to initiate payment, please try again later.", "err");

                console.log(error);
            }
        },


        async handleSubmit() {
            try {
                this.loading = true;
                this.error = '';

                const { error, paymentIntent } = await this.stripe.confirmCardPayment(this.clientSecret, {
                    payment_method: {
                        card: this.cardElement,
                    },
                });

                if (error) {
                    this.error = error.message;
                    this.loading = false;

                } else if (paymentIntent.status === 'succeeded') {
                    try {
                        request({ payment_intent_id: paymentIntent.id }, '/upgrade', true).then(res => {
                            if (!res.failed) {
                                localStorage.setItem("user_is_member", true);
                                useResponseStore().updateResponse("Payment successful! Your account has been upgraded :)", "succ");
                                useResponseStore().updateResponse("Redirecting in a few seconds...", "info");

                                setTimeout(() => {
                                    this.$router.push('/');
                                }, 3000);

                                this.loading = false;
                            } else {
                                useResponseStore.updateResponse("Failed to upgrade account. Please try again later.", "err");

                                this.loading = false;
                            }
                        });
                    } catch (error) {
                        useResponseStore().updateResponse("Failed to upgrade account. Please try again later.", "err");

                        this.loading = false;

                        this.error = error.message;
                    }
                }
            } catch (error) {
                useResponseStore().updateResponse("Failed to upgrade account. Please try again later.", "err");

                this.loading = false;
            }
        },

    },
};
</script>