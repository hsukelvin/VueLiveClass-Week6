import { createApp } from 'vue';
// bootstrap js
import 'bootstrap';
// axios
import axios from 'axios';
import VueAxios from 'vue-axios';
// VueSweetalert
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// vue-loading-overlay
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
// fortawesome
import '@fortawesome/fontawesome-free/css/all.min.css';
// vee-validate
import {
  Form, Field, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
// mitt bus
import bus from './libs/bus';

import App from './App.vue';
import router from './router';

defineRule('required', required);
defineRule('email', email);
defineRule('min', min);

configure({
  generateMessage: localize({
    zhTW,
  }),
  validateOnInput: true,
});

setLocale('zhTW');

const app = createApp(App);
app.config.globalProperties.$bus = bus;
app.use(router);
app.use(VueAxios, axios);
app.use(VueSweetalert2);
app.component('Loading', Loading);
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.mount('#app');
