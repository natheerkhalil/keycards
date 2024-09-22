<template>
    <br>

    <div class="__13 __w __mauto _flex _cc _fd-co">
        <h1 class="__tlg __b __tal">We're sorry, but Keycards is down right now</h1>
        <br>
        <p class="__b __tal __tme __txt-grey-3">We are undergoing some maintenance, or there's a problem with the system. You will be automatically redirected once this has been resolved.</p>
        <p class="__b __tal __tme __txt-grey-3">Estimated time: <strong>{{ eta }}</strong></p>
        <br>
        <div class="__12 __w _flex _cc">
            <svg fill="var(--warn_6)" width="250" height="250" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="m12.002 21.534c5.518 0 9.998-4.48 9.998-9.998s-4.48-9.997-9.998-9.997c-5.517 0-9.997 4.479-9.997 9.997s4.48 9.998 9.997 9.998zm0-1.5c-4.69 0-8.497-3.808-8.497-8.498s3.807-8.497 8.497-8.497 8.498 3.807 8.498 8.497-3.808 8.498-8.498 8.498zm0-6.5c-.414 0-.75-.336-.75-.75v-5.5c0-.414.336-.75.75-.75s.75.336.75.75v5.5c0 .414-.336.75-.75.75zm-.002 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"
                    fill-rule="nonzero" />
            </svg>
        </div>
    </div>
</template>

<script>
import { MAINTENANCE_MODE_ETA } from "../../config";

export default {
    data() {
        return {
            eta: 'unknown'
        }
    },

    created() {
        this.eta = MAINTENANCE_MODE_ETA;
    },

    methods: {
        goHome() {
            this.$router.push('/')
        }
    },
}
</script>