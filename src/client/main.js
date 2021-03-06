import Vue from 'vue';
import App from './app.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuex from 'vuex';
import store from './store';
import Vuetify from 'vuetify';

Vue.use(VueAxios, axios, Vuex, Vuetify);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
  });

new Vue(
    {
      store,
      router,
      render: h => h(App),
    }
).$mount('#app')
