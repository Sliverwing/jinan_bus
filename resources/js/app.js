import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import mintui from 'mint-ui';

import 'mint-ui/lib/style.min.css';

Vue.use(mintui);
Vue.use(VueRouter);

// Router
const routes = [
    { path: '/' , component: require('./components/Index.vue') },
    { path: '/:id/detail', component: require('./components/Detail.vue'), props: true }
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    router,
    el: '#app',
    render : h => h(App)
});
