import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// styles
import "@/assets/scss/styles.scss";
// directives
import clickOutsideDirective from "@/directives/click-outside.directive";

Vue.config.productionTip = false;

Vue.directive("click-outside", clickOutsideDirective);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
