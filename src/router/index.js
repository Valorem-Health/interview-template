import { createRouter, createWebHistory } from "vue-router";

import Welcome from "../views/Welcome.vue";
import Step1 from "../views/Step1.vue";
import Step2 from "../views/Step2.vue";
import Exit from "../views/Exit.vue";


const routes = [
    {
        path: "/",
        name: "Welcome",
        component: Welcome,
    },
    {
        path: "/step1",
        name: "Step1",
        component: Step1,
    },
    {
        path: "/step2",
        name: "Step2",
        component: Step2,
    },
    {
        path: "/exit",
        name: "Exit",
        component: Exit,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;