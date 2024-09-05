<script>
import { request } from '@/main';

export default {
    created() {
        const token = this.$route.query.tk;

        console.log(token);

        request({token: token}, "/account/change-email").then(res => {
            console.log(res);
            if (!res.failed) {
                localStorage.setItem("auth_email", res.data.data);
                localStorage.setItem("email_verified", JSON.stringify(true));

                this.$router.push({ path: '/', query: { msg: 'Email changed successfully', type: 'succ' } });
            } else {
                this.$router.push({ path: '/', query: { msg: 'Failed to change email', type: 'err' } });
            }
        })
    }
}
</script>