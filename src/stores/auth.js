import { defineStore } from 'pinia';

import axios from 'axios';

import { useDataStore } from './data';
import { useResponseStore } from './response';

import { API_URL } from '../../config';

export const uauth = defineStore('auth', {

    state: () => ({
        token: localStorage.getItem('auth_token') || null,
        username: localStorage.getItem('auth_username') || null,
        email: localStorage.getItem('auth_email') || null
    }),

    actions: {

        // MODIFY AUTH DATA //
        setAuthData(username, email, token) {
            localStorage.setItem('auth_token', token);
            localStorage.setItem('auth_username', username);
            localStorage.setItem('auth_email', email);

            this.updateAuthData();
        },
        updateAuthData() {
            this.token = localStorage.getItem('auth_token');
            this.username = localStorage.getItem('auth_username');
            this.email = localStorage.getItem('auth_email');
        },

        // LOGIN //
        async login(data) {
            try {
                const response = await axios.post(API_URL + '/api/login', data);

                var username = response.data.username;
                var email = response.data.email;
                var token = response.data.token;

                this.setAuthData(username, email, token);

                // set axios header to use token
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

                return true;

            } catch (error) {
                console.log(error);

                return {
                    failed: 1,
                    msg: error
                };
            }
        },

        // REGISTER //
        async register(data) {
            try {
                const response = await axios.post(API_URL + '/api/register', data);

                var username = response.data.username;
                var email = response.data.email;
                var token = response.data.token;

                this.setAuthData(username, email, token);

                // set axios header to use token
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

                return true;

            } catch (error) {
                console.log(error);

                return {
                    failed: 1,
                    msg: error
                };
            }
        },

        // LOGOUT //
        async logout() {
            // clear local storage and axios headers
            localStorage.clear();
            delete axios.defaults.headers.common['Authorization'];

            // delete session from server
            try {
                const response = await axios.post(API_URL + '/logout', {});
            } catch (err) {
                console.log(err);
            }

            // update response in response store
            useResponseStore().updateResponse("Logged out successfully. Redirecting...", "succ");

            // redirect to home page after logout
            window.location.href = '/';
        },
    },
});