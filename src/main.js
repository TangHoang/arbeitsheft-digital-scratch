import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import 'quill/dist/quill.snow.css'
import 'primeicons/primeicons.css'
import '@coreui/coreui/dist/css/coreui.min.css'

const app = createApp(App)

app.use(router)
app.use(PrimeVue)

app.mount('#app')
