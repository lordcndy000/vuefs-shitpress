import Vue from 'vue'
import VueMaterial from 'vue-material'
import VueFroala from 'vue-froala-wysiwyg'
import 'vue-material/dist/vue-material.min.css'
import App from './App.vue'
import router from './router'
import store from './store'
import 'froala-editor/js/froala_editor.pkgd.min'

// import Froala Editor css files.
import 'froala-editor/css/froala_editor.pkgd.min.css'
import 'font-awesome/css/font-awesome.css'
import 'froala-editor/css/froala_style.min.css'

Vue.use(VueMaterial)
Vue.use(VueFroala)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
