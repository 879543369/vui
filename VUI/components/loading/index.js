import Vue from 'vue'
import LoadingComponent from './loading.vue'

const Loading = Vue.extend(LoadingComponent);
var instance;
const myLoading = {
  open (options = {}) {
    if (!instance) {
      instance = new Loading({
        el: document.createElement('div')
      })
    }
    if (instance.visible) return
    instance.text = typeof options === 'string' ? options : options.text || ''
    instance.spinnerType = options.spinnerType || 'double-snake'
    instance.size = options.size
    instance.duration = options.duration || '5000'
    document.body.appendChild(instance.$el)

    Vue.nextTick(() => {
      instance.visible = true
    })
    setTimeout(function(){
      Vue.nextTick(() => {
        instance.visible = false
        instance.$el.remove()
      })
    },instance.duration)
  },

  close () {
    if (instance) {
      Vue.nextTick(() => {
        instance.visible = false
        instance.$el.remove()
      })
    }
  }
}
export default myLoading
