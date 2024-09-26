import { defineStore } from 'pinia';

export const useResponseStore = defineStore('response', {

    state: () => ({
        msgs: [],
        /*msg: "",
        type: "",
        preset: false*/
    }),

    actions: {/*
        updateResponse(msg, type, preset = true) {
            this.msg = msg;
            this.type = type;
            this.preset = preset;

            setTimeout(() => {
                this.clearResponse();
            }, 5000);
        },*/
        updateResponse(msg, type, preset = true, dt = 5) {
            this.msgs.push({
                txt: msg,
                type: type,
                preset: preset,
                dt: (dt + Math.floor(Date.now() / 1000))
            });
        },
        clearResponse() {
            this.msgs = [];
        },
    },
});