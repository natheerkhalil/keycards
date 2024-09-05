<script>
import { request } from '@/main';

export default {
    created() {
        const token = this.$route.query.tk;

        console.log(token);

        request({token: token}, "/account/verify-token").then(res => {
            console.log(res);
            if (!res.failed) {
                localStorage.setItem("email_verified", JSON.stringify(true));

                this.$router.push({ path: '/', query: { msg: 'Email verified successfully', type: 'succ' } });
            } else {
                this.$router.push({ path: '/', query: { msg: 'Failed to verify email', type: 'err' } });
            }
        })
    }
}
</script>