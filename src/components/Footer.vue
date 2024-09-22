<template>
    <div style="margin-top: 50px;" class="__b _flex __bg-grey-2">
        <div class="__b _fw-wr __w _ai-ce __mauto _flex __padxs">
            <p class="footer-text">&copy; Keycards {{ thisYear }}</p> &nbsp; &nbsp;
           <!-- <router-link class="footer-text __hv __ht-warn-8" to="/terms">Terms & Conditions</router-link> &nbsp; &nbsp;
            <router-link class="footer-text __hv __ht-warn-8" to="/privacy">Privacy Policy</router-link> &nbsp; &nbsp;-->
            <a class="footer-text __hv __ht-warn-8" href="mailto:info@repeatbeats.com">Contact</a> &nbsp; &nbsp;
            <a target="_blank" class="footer-text __hv __ht-warn-8" href="https://ko-fi.com/natheer">Donate ☕</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            thisYear: new Date().getFullYear()
        }
    }
}
</script>

<style>
.footer-text {
    color: white;
    text-decoration: none;
}
</style>