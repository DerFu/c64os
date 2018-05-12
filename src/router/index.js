import Vue from "vue";
import VueRouter from "vue-router";

import OnBoarding from "../container/OnBoarding";
import Settings from "../container/Settings";
import Dashboard from "../container/dashboard";

import Browser from "../apps/browser";

const routes = [{
        path: "/",
        name: "Start",
        component: OnBoarding
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard
    },
    {
        path: "/settings",
        name: "Settings",
        component: Settings
    },
    {
        path: "/browser",
        name: "Browser",
        component: Browser
    }
];

Vue.use(VueRouter);
export default new VueRouter({
    routes
});