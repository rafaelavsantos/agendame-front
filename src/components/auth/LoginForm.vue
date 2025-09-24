<template>
    <v-alert v-if="feedbackMessage" color="error" class="mb-2">{{ feedbackMessage }}</v-alert>
    <v-form @submit.prevent="submit">
        <v-row class="d-flex mb-3">
            <v-col cols="12">
                <v-label class="font-weight-bold mb-1">E-mail</v-label>
                <v-text-field v-model="email" :error-messages="errors.email" variant="outlined" color="primary">
                </v-text-field>
            </v-col>
            <v-col cols="12">
                <v-label class="font-weight-bold mb-1">Senha</v-label>
                <v-text-field v-model="password" :error-messages="errors.password" variant="outlined" type="password"
                    color="primary">
                </v-text-field>
            </v-col>
            <v-col cols="12" class="pt-0">
                <div class="d-flex flex-wrap align-center ml-n2">
                    <div class="ml-sm-auto">
                        <RouterLink :to="{ name: 'register' }"
                            class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium">Esqueceu
                            sua
                            senha ?</RouterLink>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" class="pt-0">
                <v-btn type="submit" :loading="isSubmitting" color="primary" size="large" block flat>Entrar</v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useField, useForm } from 'vee-validate';
import { object, string } from 'yup';
import { toTypedSchema } from '@vee-validate/yup';
import { useAuthStore } from '@/stores/auth';
import { useMeStore } from '@/stores/me';

// const shema = {
//     email(value) {
//         if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

//         return 'Must be a valid e-mail.'
//     },

//     password(value) {
//         if (value) return true

//         return 'Must be a valid password.'
//     },
// }

const shema = object({
    email: string().required().label('E-mail'),
    password: string().required().label('Senha'),
})

const { handleSubmit, errors, isSubmitting } = useForm({
    validationSchema: toTypedSchema(shema),
    initialValues: {
        email: 'test@example.com',
        password: 'password',
    }
});

const submit = handleSubmit(async (values) =>
    login(values),
);

const { value: email } = useField('email');
const { value: password } = useField('password');

const feedbackMessage = ref('');
const router = useRouter();

const authStore = useAuthStore();

async function login(values) {
    feedbackMessage.value = '';

    authStore
        .login(values.email, values.password)
        .then(() => {
            axios.get('api/me')
            router.push({ name: 'dashboard' })
        }).catch(() => {
            feedbackMessage.value = 'Seu e-mail ou senha estão inválidos.'
        });
}

</script>
