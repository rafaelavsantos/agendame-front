import { defineStore } from 'pinia';
import axios from 'axios';
import { useMeStore } from './me';

export const useAuthStore = defineStore('auth', {
    state: () => ({}),
    actions: {
        sanctum() {
            return axios.get('sanctum/csrf-cookie');
        },
        async login(email, password) {
            return axios.post('api/login', {
                email,
                password,
            }).then((response) => {
                const meStore = useMeStore();

                meStore.user = response.data.data;
            })
        }, 
        async register(firstName, email, password) {
            return axios.post('api/register', {
                first_name: firstName, 
                email, 
                password,
            });
        }
    },
    getters: {},
})
