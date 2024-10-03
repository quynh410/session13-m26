import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import "vuetify/styles"
import * as components from "vuetify/components";
import * as directives from "vuetify/directives"
import { } from "vuetify/iconsets/mdi";
// khoi tao ung dung
const app = createApp(App);
const vuetify = createVuetify({
    components,
    directives,
})
// su dung cac thu vien ben ngoài
app.use(vuetify)
// Gắn components App vào trong ứng dụng
app.mount('#app')