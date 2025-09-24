import { useMeStore } from "@/stores/me";

export const auth = (to, from, next) => {
    const meStore = useMeStore();

    if (!meStore.isLoggedIn) {
        next({ name: 'login' });
    } else {
        next();
    }
}

export const redirectAuthenticated = (to, from, next) => {
    const meStore = useMeStore();

    console.log('Não Logado?', meStore.isLoggedIn);
    console.log('Não Logado?', meStore.user);
    if (meStore.isLoggedIn) {
        console.log('Logado?');
        next({ name: 'dashboard' });
    } else {
        next();
    }
}