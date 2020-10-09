import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/scss/main.scss'
import '../src/assets/font/iconfont.css';
import axios from 'axios';
import Vuelazyload from "vue-lazyload";

//修改url地址就可以
axios.defaults.baseURL = 'https://vtorjin.github.io';
Vue.prototype.$http = axios;
Vue.use(Vuelazyload, {
  loading: require('../src/assets/img/default.jpg')
})
Vue.config.productionTip = false;


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')