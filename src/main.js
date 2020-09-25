import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Axios from "axios";
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueScrollTo from 'vue-scrollto';
import VueLazyload from 'vue-lazyload'
import VueMobileDetection from 'vue-mobile-detection'
import i18next from 'i18next';
import VueI18Next from '@panter/vue-i18next';
import locales from './locales'

Vue.use(VueLazyload)
 
Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1
})

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueMobileDetection)
Vue.use(VueScrollTo, {
  container: 'body',
  offset: -90,
});

Vue.config.productionTip = false
Vue.use(BootstrapVue);

Vue.use(VueI18Next);

i18next.init({
  resources: {
    ptBr: { translation: locales.ptBr },
    en: { translation: locales.en },
  },
});

const i18n = new VueI18Next(i18next);


Vue.prototype.$http = Axios.create({
	baseURL: 'https://api.pokemontcg.io',
  timeout: 50000
});

Vue.prototype.$toList = (array) => {
  if(typeof array === 'object'){
    return array.join()
  }
}

new Vue({
	router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
