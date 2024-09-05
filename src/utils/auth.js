import axios from 'axios';

import { useAuthStore } from "@/stores/auth";
import { useResponseStore } from '@/stores/response';

import { API_URL } from '../../config';

export const uauth = {
    username: () => {
        const username = localStorage.getItem('auth_username');
        if (!username) return false;
        else return username;
    },

    isTokenValid: () => {
        const token = localStorage.getItem('auth_token');
        if (!token) return false;
        else return true;
    },

    isAuthenticated: () => {
        const authStore = useAuthStore();
        return authStore.isAuthenticated;
    },

    logout: async () => {
        localStorage.clear();

        delete axios.defaults.headers.common['Authorization'];

        const authStore = useAuthStore();
        authStore.updateAuthenticatedState();
        authStore.updateUsername();

        try {
            const response = await axios.post(API_URL + '/logout', {});
        } catch (err) {
            console.log("ERR - logout", JSON.stringify(err));
        }

        useResponseStore().updateResponse("Logged out successfully. Redirecting...", "succ");
        setTimeout(() => {
            window.location.href = '/';
        }, 1000);
    },

    login: async (authData) => {

        try {
            const response = await axios.post(API_URL + '/login', authData);

            var username = response.data.username;
            var email = response.data.email;
            var token = response.data.token;
            var user_is_member = response.data.user_is_member;

            localStorage.setItem('auth_token', token);
            localStorage.setItem('auth_username', username);
            localStorage.setItem('auth_email', email);
            if (user_is_member) {
                localStorage.setItem("user_is_member", 1);
            }

            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            const authStore = useAuthStore();
            authStore.updateAuthenticatedState();
            authStore.updateUsername();

            return response;

        } catch (error) {
            console.log(error);

            return {
                failed: 1,
                msg: error
            };
        }
    },

    register: async (authData) => {
        try {
            const response = await axios.post(API_URL + '/register', authData);

            var username = response.data.username;
            var email = response.data.email;
            var token = response.data.token;
            var user_is_member = response.data.user_is_member;

            localStorage.setItem('auth_token', token);
            localStorage.setItem('auth_username', username);
            localStorage.setItem('auth_email', email);
            if (user_is_member) {
                localStorage.setItem("user_is_member", user_is_member);
            }

            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            const authStore = useAuthStore();
            authStore.updateAuthenticatedState();
            authStore.updateUsername();

            return response;
        } catch (error) {
            console.log(error);

            return {
                failed: 1,
                msg: error
            };
        }
    }
}