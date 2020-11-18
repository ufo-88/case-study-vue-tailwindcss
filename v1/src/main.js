import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import './assets/css/tailwind.css'

//createApp(App).mount('#app')

// const app = createApp(App)

// app.use(store)

// app.mount('#app')

new Vue({
    store,
    render: (h) => h(App),
  }).$mount("#app");