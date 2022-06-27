import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App);
app.use(store)
app.use(router)
app.mount('#app')
// 注册全局组件
import CusConfirm from '@/components/other/confirm/CusConfirm.vue'
import Message from '@/components/other/message.vue'
app.component("MyMessage", Message)
app.component("CusConfirm", CusConfirm)

import drag from './config/directive/drag'
app.directive("drag", drag.drag)
