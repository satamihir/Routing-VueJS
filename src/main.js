import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './routes';
Vue.use(VueRouter)

export const router = new VueRouter({routes , mode: 'history'});

router.beforeEach((to,from,next) => {
  console.log('beforeEach');
  next();
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
