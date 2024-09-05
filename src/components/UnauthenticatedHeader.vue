<template>
    <div style="border-bottom: 1px solid var(--grey-3); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"
        class="__b __bg-6 _flex _ai-ce _fd-ro _jc-be __padsm">
        <div @click="goHome" class="_flex __po _cc _fd-ro">
            <img src="/icon.png" alt="Keycards Logo" style="max-width: 50px;"> &nbsp; &nbsp;
            <p style="margin-top: 7.5px; font-size: 23px; " class="_xs-hide logo-text">Keycards</p>
        </div>
        <div class="_flex _fd-ro _cc">
            <router-link class="__nun __bd-5 __hv-5 __bod __padxs __txt-5 __hv __ht-1" to="/login">Login</router-link>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goHome() {
            this.$router.push('/')
        }
    }
}
</script>