import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import en from './i18n/en'
import zh from './i18n/zh'
import { createI18n } from 'vue-i18n'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './main.css'


const messages = {
  en: en,
  zh: zh
};


const i18n = createI18n({
  legacy: false, // ⚠️ Vue 3 推荐设为 false，使用 Composition API
  globalInjection: true, // 全局注入 $t
  locale: "zh", // 默认语言
  fallbackLocale: "en", // 兜底语言
  messages
});

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(i18n)


app.config.globalProperties.$theme = "dark";

app.mount('#app')
