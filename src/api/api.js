import Vue from 'Vue'
import axios from 'axios';
import store from '../config/store.js'
import Loading from '../../VUI/components/loading'
import Dialog from '../../VUI/components/dialog'

var app_url =  store.state.isDebug ? store.state.debug_url : store.state.app_url;
axios.defaults.baseURL = app_url;
axios.defaults.headers.common['GL_WXPUB_USER_TOKEN'] = sessionStorage.getItem("token");
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
function _api_base(method, url, params, success,loading){
	console.time('('+method+')正在调用【'+url+'】,耗时：');
	if(loading != undefined) Loading.open({
		text : 'loading'
	})
	axios({
	  method: method,
	  url: url,
	  params: params
	}).then(function (response) {
		console.timeEnd('('+method+')正在调用【'+url+'】,耗时：');
		var data = response.data;
        if (data.result == "000000"){
        	success instanceof Function && success(data.data);
        }else {
            Dialog({
	          message: data.description,
	          skin : 'android',
	          showCancelBtn: false,
	          showConfirmBtn : true
	        })
        }
	    setTimeout(function(){
	    	Loading.close()
	    },300)
	  })
	  .catch(function (error) {
	    Dialog({
          message: "网络连接错误，请稍后再试！",
          skin : 'android',
          showCancelBtn: false,
          showConfirmBtn : true
        })
	    setTimeout(function(){
	    	Loading.close()
	    },300)
	  });
}

// 返回在vue模板中的调用接口
export default {
  get: function(url, params, success,loading) {
    return _api_base('GET', url, params, success,loading)
  },
  post: function(url, params, success, loading) {
    return _api_base('POST', url, params, success,loading)
  }
}