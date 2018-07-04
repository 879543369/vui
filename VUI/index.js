import Lazyload from 'vue-lazyload'
import Button from './components/button/button'
import Cell from './components/cell/index'
import Badge from './components/badge/badge'
import Switch from './components/switch/switch'
import Spinner from './components/spinner/index'
import Navbar from './components/navbar/navbar'
import NavbarItem from './components/navbar-item/navbar-item'
import Tabbar from './components/tabbar/tabbar'
import TabbarItem from './components/tabbar-item/tabbar-item'
import Checklist from './components/checklist/checklist'
import Radio from './components/radio/radio'
import Actionsheet from './components/actionsheet/actionsheet'
import Toast from './components/toast/index'
import Dialog from './components/dialog/index'
import Loading from './components/loading/index'
import Grid from './components/grid/grid'
import GridItem from './components/grid-item/grid-item'
import Swipe from './components/swipe/swipe'
import SwipeItem from './components/swipe-item/swipe-item'
import Picker from './components/picker/index'
import DatetimePicker from './components/datetime-picker/datetime-picker'
import Infinite from './components/infinite/infinite'
import './css/weui.min.css'

const version = '1.5.2'
const install = function (Vue, config = {}) {
  if (install.installed) return
    console.log(Infinite.name)
  const myModule = [Button,Cell,Badge,Switch,Spinner,Navbar,NavbarItem,Tabbar,TabbarItem,Checklist,Radio,Grid,GridItem,Picker
                    ,DatetimePicker,Actionsheet,SwipeItem,Swipe,Infinite]
  for(let ls of myModule){
     Vue.component(ls.name,ls)
  }
  // Vue.component('vui-infinite',Infinite)
  Vue.use(Lazyload, {
    loading: require('./css/loading-spin.svg'),
    attempt: 3,
    // ...config.lazyload
  })

  Vue.$dialog = Vue.prototype.$dialog = Dialog
  Vue.$toast = Vue.prototype.$toast = Toast
  Vue.$loading = Vue.prototype.$loading = Loading
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
