import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const myRoutes = [
	// {path:'/',name:'HelloWorld',component:HelloWorld},
	{path:'/',name:'Home',component:resolve => require(['../pages/home.vue'],resolve)},
	{path:'/button',name:'Button',component:resolve => require(['../pages/button.vue'],resolve)},
	{path:'/toast',name:'Toast',component:resolve => require(['../pages/toast.vue'],resolve)},
	{path:'/checklist',name:'Checklist',component:resolve => require(['../pages/checklist.vue'],resolve)},
	{path:'/dialog',name:'Dialog',component:resolve => require(['../pages/dialog.vue'],resolve)},
	{path:'/radio',name:'Radio',component:resolve => require(['../pages/radio.vue'],resolve)},
	{path:'/picker',name:'Picker',component:resolve => require(['../pages/picker.vue'],resolve)},
	{path:'/datetimePicker',name:'DatetimePicker',component:resolve => require(['../pages/datetime-picker.vue'],resolve)},
	{path:'/navbar',name:'Navbar',component:resolve => require(['../pages/navbar.vue'],resolve)},
	{path:'/actionsheet',name:'Actionsheet',component:resolve => require(['../pages/actionsheet.vue'],resolve)},
	{path:'/lazyload',name:'Lazyload',component:resolve => require(['../pages/lazyload.vue'],resolve)},
	{path:'/swipe',name:'Swipe',component:resolve => require(['../pages/swipe.vue'],resolve)},
	{path:'/infinite',name:'Infinite',component:resolve => require(['../pages/infinite.vue'],resolve)},
]

export default new Router({
  routes: myRoutes
})
