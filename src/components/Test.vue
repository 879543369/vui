<template>
	<div id="test" >
		<div @click="testClick()">{{msg}}</div>
		<vui-button type="default" @click="showSuccess">成功提示</vui-button>
	    <vui-button type="default" @click="showError">出错提示</vui-button>
	    <vui-button type="default" @click="showText">纯文本提示</vui-button>
	</div>
	
</template>
<script type="text/javascript">
	import { mapMutations } from 'vuex'
	export default{
		name : 'Test',
		data(){
			return  {
				msg : '点我点我'
			}
		},
		methods:{
			...mapMutations(['log']),
			testClick : function(){
				this.$api.get('wxpubApi/merchant/queryMerBaseInfo/',{
					'merchantNo' : '1707121000098'
				},data =>{
					console.log("!@#!@#!@")
				},1)
			},
			  showSuccess () {
		        this.$toast('操作成功')
		      },

		      showError () {
		        this.$toast({
		          duration: 1000,
		          message: '操作失败',
		          icon: 'warn'
		        })
		      },
		      showText () {
		        this.$toast({
		          duration: 1000,
		          message: 'hello',
		          type: 'text'
		        })
		      }
		}
	}
</script>
<style>
	
</style>
