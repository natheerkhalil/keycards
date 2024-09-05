<template>
    <div style="border-bottom: 1px solid var(--grey-3); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"
        class="__b __po __bg-grey-2 _flex _ai-ce _fd-ro _jc-be __padsm">
        <div @click="goHome" class="_flex _cc _fd-ro">
            <img style="width: 35px;" src="/icon.png" alt="Logo"> &nbsp;
            &nbsp;
            <p class="logo-text __tmd __txt-grey-10">RepeatBeats</p> &nbsp;
        </div>
    </div>

    <br><br>

    <div class="_flex __10 __w __mauto _fd-co __padsm">

        <h1>Privacy Policy</h1>

        <br>

        <p class="__mauto __tal __tme __txt-grey-3">Last updated: 6th August 2024</p>

        <br>

        <p>This Privacy Policy outlines how we collect, use, share, and protect your information when you use our
            website ("Site") and services ("Services"). By accessing or using our Site, you agree to the terms of this
            Privacy Policy. If you do not agree, please do not use our Site or Services.</p>

        <br>

        <h1>1. Data Collection</h1>
        <p>RepeatBeats collects the following user data: <br>

            Personal Information: <br> Email address, username, and password. <br>
            Our databases do not store any other personal data. Please refer to the privacy policies of our third-party
            services for information on the data they collect.</p>

        <br><br>

        <h1>2. Data Usage</h1>
        <p>The data we collect is used solely for: <br>

            - Authenticating users. <br>
            - Providing our services to users. <br>
            We do not use your data for any other purposes.</p>

        <br><br>

        <h1>3. Data Sharing</h1>
        <p>RepeatBeats does not sell or share your data with third parties, except where necessary to provide our
            services. For instance:
            <br>
            Mailtrap: To send account-related emails (e.g., forgot password, change email). <br>
            Stripe: To process payments securely. <br>
            We may also share your data if required by law or to protect our rights and safety.
        </p>

        <br><br>

        <h1>4. User Rights</h1>
        <p>Users have the right to delete any data they have provided to RepeatBeats by deleting their account. This will delete all of the user's personal data such as their
            Email, Username, Password, as well as all content created and shared by the user, such as Videos and Playlists.
            Be aware that some data may still be stored by third-party services for legal or administrative reasons. To view, update, and/or delete account information, visit <a href="https://repeatbeats.com/account" target="_blank">https://repeatbeats.com/account</a></p>

        <br><br>

        <h1>5. Data Security</h1>
        <p>We are committed to protecting your data:

            All data is transmitted over a secure HTTPS connection. <br>
            Our website is protected with an HTTPS certificate. <br>
            Only essential personal data is stored in our databases, though it may also be stored by third-party services when required.</p>

        <br><br>

        <h1>6. Contact Information</h1>

        <p>RepeatBeats uses cookies strictly necessary for the functionality of the Site:

            We do not use any tracking cookies or third-party analytics tools.
            Non-personal data may be cached to improve performance, which users can refresh by pressing the "sync data"
            button or by manually clearing local storage.
            Please refer to the privacy policies of our third-party services for information on their use of cookies and
            tracking technologies. </p>

        <br><br>

        <h1>7. International Data Transfers</h1>
        <p>If your data is transferred outside your country, we ensure it is protected in accordance with this Privacy
            Policy and applicable laws.</p>

        <br><br>

        <h1>8. Changes to the Privacy Policy</h1>
        <p>We may update this Privacy Policy from time to time. Users will be notified of any changes via email, where
            possible, or through a notification on the website. By continuing to use the Site after changes become
            effective, you agree to be bound by the revised Privacy Policy.</p>

        <br><br>

        <h1>9. Contact</h1>
        <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at <a href="mailto:privacy@repeatbeats">privacy@repeatbeats</a>.</p>

        <br><br>

        <p>By using RepeatBeats, you acknowledge that you have read, understood, and agree to be bound by this Privacy
        Policy.</p>

        <br><br><br>
    </div>
</template>

<style scoped>
div p {
    text-align: justify;
}
</style>

<script>
export default {
    data() {
        return {
        }
    },

    methods: {
        goHome() {
            this.$router.push('/')
        }
    }

}
</script>