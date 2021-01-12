import Vue from 'vue';
import App from './App.vue';
import loadData from './dataLoader';

Vue.config.productionTip = false;

loadData().then(data => {
  new Vue({
    render: h => h(App, {
      props: {
        provinceData: data
      }
    }),
  }).$mount('#app')
});
