import Vue from 'vue';
import VueDraggable from 'vue-draggable';
import App from './App';

Vue.use(VueDraggable);

new Vue({
  el: '#app',
  render: h => h(App)
})