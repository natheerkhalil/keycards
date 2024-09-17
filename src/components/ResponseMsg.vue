<template>
    <!--<div :style="'background-color: var(--' + rtype + '_7); z-index: 999; '" v-if="rmsg" id="respmsg" class="__po _flex _fd-co" @click="clearResponse()">
        <p style="color: black;">{{ rmsg }}</p>
    </div>-->
    <div class="respmsg-container _flex _fd-co">
        <div @click="destroyMsg(msg)" v-for="msg in msgs" class="__po _flex _fd-co">
            <div style="margin-bottom: 15px;"
                class="_flex _fd-co respmsg-inner" :style="`background-color: var(--${msg.type}_7);`">
                <p style="color: black;">{{ msg.txt }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { useResponseStore } from '@/stores/response';
import { uauth } from '@/stores/auth';

export default {
    setup() {
        const responseStore = useResponseStore();
        const authStore = uauth();

        return {
            responseStore,
            authStore
        };
    },

    created() {
        setInterval(() => {
            this.msgs.forEach(m => {
                if ((m.dt - Math.floor(Date.now() / 1000)) < 0) {
                    this.msgs.splice(this.msgs.indexOf(m), 1);
                }
            });
        }, 1);
    },

    data() {
        return {
            msgs: useResponseStore().msgs
        }
    },

    methods: {
        destroyMsg(msg) {
            this.msgs.splice(this.msgs.indexOf(msg), 1);
        }
    }
}
</script>

<style scoped>
.respmsg-container {
    position: fixed;
    bottom: 20px;
    left: 20px;
    z-index: 999;
}

.respmsg {
    position: fixed;
    bottom: 20px;
    left: 20px;
}

.respmsg-inner {
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    font-size: 14px;
    background: white;
    padding: 15px;
}
</style>