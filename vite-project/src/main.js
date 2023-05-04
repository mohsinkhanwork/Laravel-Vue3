import { createApp } from 'vue'
import store from './store'
import './index.css'
import App from './App.vue'
import router from './router'

// import './assets/main.css'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')

