import Vue from 'vue';
import App from './components/App.vue';
import mintui from 'mint-ui';

import 'mint-ui/lib/style.min.css';

Vue.use(mintui);

const app = new Vue({
    el: '#app',
    render : h => h(App)
});
