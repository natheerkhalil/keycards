<template>
    <div class="__b _flex _cc _fd-co">
        <h1 class="__txl __b __tal">404 - Page Not Found</h1>
        <br>
        <div class="__12 __w _flex _cc">
            <svg width="375" height="375" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="m12.002 21.534c5.518 0 9.998-4.48 9.998-9.998s-4.48-9.997-9.998-9.997c-5.517 0-9.997 4.479-9.997 9.997s4.48 9.998 9.997 9.998zm0-1.5c-4.69 0-8.497-3.808-8.497-8.498s3.807-8.497 8.497-8.497 8.498 3.807 8.498 8.497-3.808 8.498-8.498 8.498zm0-6.5c-.414 0-.75-.336-.75-.75v-5.5c0-.414.336-.75.75-.75s.75.336.75.75v5.5c0 .414-.336.75-.75.75zm-.002 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"
                    fill-rule="nonzero" />
            </svg>
        </div>
        <br>
        <div class="__12 __w _flex _cc">
            <p class="__mauto __tmd __txt-grey-1 __po __padsm __padsm __un" @click="goHome">Go Home</p>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goHome() {
            this.$router.push('/')
        }
    },
}
</script>