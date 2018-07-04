import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
	version : '1.0.0',
	isDebug :true,
	app_url : 'https://pay.365gl.com/quick/prod/wxauth/',
	debug_url :'https://pay.365gl.com/quick/test/wxauth/',
	url_overtime : 30000,
	todos : [
		{id:1,text:'1',done:true},
		{id:2,text:'2',done:false}
	]
}

export default new Vuex.Store({
	state,getters,mutations
})