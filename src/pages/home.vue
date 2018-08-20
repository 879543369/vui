<template>
	<div id ="home">
		<div class="padding40">
	      <div class="fb f60">VUI</div>
	      <div class="title-tip f26">
	      	Vue2.0 + WeUI 1.0 是一套集成微信原生基础样式库 和Vue组件化，实现样式和组件完全解耦，可自由拆卸组装的组件化工具，专门为微信内网页和微信小程序量身设计。
	      </div>
	      <div class="f26">技术栈：(vue2.5.2 + vue-router3.0.1 + vuex3.0.1 + weui1.1.2)</div>
	    </div>
	    <vui-grid>
	      <vui-grid-item class="demo-grid-item" to="/button">
	        <img :src="thumbSmall" slot="icon">
	        <span slot="label">Button</span>
	      </vui-grid-item>
	      <vui-grid-item class="demo-grid-item" to="/toast">
	        <img :src="thumbSmall" slot="icon">
	        <span slot="label">Toast</span>
	      </vui-grid-item>
	      <vui-grid-item class="demo-grid-item" to="/checklist">
	        <img :src="thumbSmall" slot="icon">
	        <span slot="label">Checklist</span>
	      </vui-grid-item>
	      <vui-grid-item class="demo-grid-item" to="/dialog">
	        <img :src="thumbSmall" slot="icon">
	        <span slot="label">Dialog</span>
	      </vui-grid-item>
	      <vui-grid-item class="demo-grid-item" to="/radio">
	        <img :src="thumbSmall" slot="icon">
	        <span slot="label">Radio</span>
	      </vui-grid-item>
	      <vui-grid-item class="demo-grid-item" to="/picker">
	        <img :src="thumbSmall" slot="icon">
	        <span slot="label">picker</span>
	      </vui-grid-item>
	      <vui-grid-item class="demo-grid-item" to="/datetimePicker">
	        <img :src="thumbSmall" slot="icon">
	        <span slot="label">DatetimePicker</span>
	      </vui-grid-item>
	      <vui-grid-item class="demo-grid-item" to="/navbar">
	        <img :src="thumbSmall" slot="icon">
	        <span slot="label">Navbar</span>
	      </vui-grid-item>
	      <vui-grid-item class="demo-grid-item" to="/actionsheet">
	        <img :src="thumbSmall" slot="icon">
	        <span slot="label">Actionsheet</span>
	      </vui-grid-item>

	      <vui-grid-item class="demo-grid-item" to="/lazyload">
	        <img :src="thumbSmall" slot="icon">
	        <span slot="label">Lazyload</span>
	      </vui-grid-item>
	      <vui-grid-item class="demo-grid-item" to="/swipe">
	        <img :src="thumbSmall" slot="icon">
	        <span slot="label">Swipe</span>
	      </vui-grid-item>
	      <vui-grid-item class="demo-grid-item" to="/infinite">
	        <img :src="thumbSmall" slot="icon">
	        <span slot="label">Infinite</span>
	      </vui-grid-item>
	      
	      
    </vui-grid>

	</div>
</template>

<script type="text/javascript">
	import {mapState,mapGetters} from 'Vuex'
	export default{
		name : 'Home',
		data() {
			return {
				myDate : new Date(),
				thumbSmall : './static/img/logo.png'
			}
		}

	}
</script>

<style lang="scss">
	#home{
		.padding40{padding: 0.8rem;}
	}
</style>