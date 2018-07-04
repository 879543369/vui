import Vue from 'vue'
import Router from 'vue-router'
import Test from '../components/Test.vue'

Vue.use(Router)

const myRoutes = [
	// {path:'/',name:'HelloWorld',component:HelloWorld},
	{path:'/',name:'Home',component:resolve => require(['../page/home.vue'],resolve)},
	{path:'/button',name:'Button',component:resolve => require(['../page/button.vue'],resolve)},
	{path:'/toast',name:'Toast',component:resolve => require(['../page/toast.vue'],resolve)},
	{path:'/checklist',name:'Checklist',component:resolve => require(['../page/checklist.vue'],resolve)},
	{path:'/dialog',name:'Dialog',component:resolve => require(['../page/dialog.vue'],resolve)},
	{path:'/radio',name:'Radio',component:resolve => require(['../page/radio.vue'],resolve)},
	{path:'/picker',name:'Picker',component:resolve => require(['../page/picker.vue'],resolve)},
	{path:'/datetimePicker',name:'DatetimePicker',component:resolve => require(['../page/datetime-picker.vue'],resolve)},
	{path:'/navbar',name:'Navbar',component:resolve => require(['../page/navbar.vue'],resolve)},
	{path:'/actionsheet',name:'Actionsheet',component:resolve => require(['../page/actionsheet.vue'],resolve)},
	{path:'/lazyload',name:'Lazyload',component:resolve => require(['../page/lazyload.vue'],resolve)},
	{path:'/swipe',name:'Swipe',component:resolve => require(['../page/swipe.vue'],resolve)},
	{path:'/infinite',name:'Infinite',component:resolve => require(['../page/infinite.vue'],resolve)},
	{path:'/test',name:'Test',component:resolve => require(['../components/Test.vue'],resolve)}
	
]

export default new Router({
  routes: myRoutes
})
