import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import 'babel-polyfill';
import axios from "axios";
import VueRouter from "vue-router";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import DepositType from "./components/DepositType";


Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(axios);
Vue.use(VueRouter);
Vue.prototype.$http = axios;
Vue.prototype.url = 'http://localhost:9000';

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/deposit',
            name: 'deposit',
            component: Deposit
        },
        {
            path: '/withdraw',
            name: 'withdraw',
            component: Withdraw
        },
        {
            path: '/depositType',
            name: 'depositType',
            component: DepositType
        }
    ]
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
