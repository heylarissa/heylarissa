import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import '@fortawesome/fontawesome-free/js/all'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'
import { md } from 'vuetify/iconsets/md'

const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        // define os grupos de icones possiveis de serem utilizados, mas o fontawesome é default
        // para entender com utilizar, acesse https://next.vuetifyjs.com/en/features/icon-fonts/
        defaultSet: 'fa',
        aliases,
        sets: {
            fa,
            mdi,
            md,
        },
    },
})

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')
