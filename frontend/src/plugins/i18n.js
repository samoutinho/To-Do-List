import en from '@/locale/en.json'
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from '../store'
Vue.use(VueI18n)
const translation = {
  en: en,
}
const i18n = new VueI18n({
  locale: store.getters.getLocale, // set locale
  messages: translation, // set locale messages
})
store.commit('SET_TRANSLATION', translation)
export default i18n
