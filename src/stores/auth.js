import { defineStore } from 'pinia';
import { uauth } from "@/utils/auth";

export const useAuthStore = defineStore('auth', {

    state: () => ({
        isAuthenticated: uauth.isTokenValid(),
        username: uauth.username()
    }),

    actions: {
        updateAuthenticatedState() {
            this.isAuthenticated = uauth.isTokenValid();
        },
        
        updateUsername() {
            this.username = uauth.username();
        }
    },
});