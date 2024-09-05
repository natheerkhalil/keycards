<template>
    <div style="margin-top: 10px;" class="__b _flex __bg-grey-6">
        <div class="__b _fw-wr __w _ai-ce __mauto _flex __padxs">
            <p class="__txt-grey-10">&copy; Keycards {{ thisYear }}</p> &nbsp; &nbsp;
            <router-link class="__txt-grey-10 __hv __ht-warn-8" to="/terms">Terms & Conditions</router-link> &nbsp; &nbsp;
            <router-link class="__txt-grey-10 __hv __ht-warn-8" to="/privacy">Privacy Policy</router-link> &nbsp; &nbsp;
            <a target="_blank" href="https://github.com/natheerkhalil/repeatbeats" class="__un __po __txt-grey-10 __hv __ht-warn-8" to="/">View on GitHub</a> &nbsp; &nbsp;
            <a class="__txt-grey-10 __hv __ht-warn-8" href="mailto:info@repeatbeats.com">Contact</a> &nbsp; &nbsp;
            <a target="_blank" class="__txt-grey-10 __hv __ht-warn-8" href="https://ko-fi.com/natheer">Donate ☕</a>
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