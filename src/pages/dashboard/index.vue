<template>
    <div>
        Dashboard

        <br><br>
        <pre>
            {{ authStore.user }}
        </pre>

        <pre>
            {{ authStore.isLoggedIn }}
        </pre>
    </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();


</script>