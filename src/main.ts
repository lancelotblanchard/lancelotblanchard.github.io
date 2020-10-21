import AOS from 'aos';
import 'aos/dist/aos.css';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

/* Importing Bootstrap JS */
import 'bootstrap';

/* Importing Fontawesome */
import '@fortawesome/fontawesome-free/css/all.css';

/* Importing style */
import '@/assets/scss/style.scss';

/* Importing filters */
import '@/filters/capitalise.filter';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created: () => {
    AOS.init({
      easing: 'ease',
      duration: 1000,
      once: true,
    });
  },
  render: (h) => h(App),
}).$mount('#app');
