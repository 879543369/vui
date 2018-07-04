<template>
	<div>
		123123111
		{{myDate}}
		<!-- <h2>{{$store.state.version}}</h2> -->
		<h2>{{version}}</h2>
		<H2>{{doneTodos}}</H2>
		<h2>{{doneTodosCount}}</h2>
		<h3>{{this.getTodosById(2)}}</h3>
		<h4>{{getTodos}}</h4>
	</div>
</template>

<script type="text/javascript">
	import {mapState,mapGetters} from 'Vuex'
	export default{
		name : 'Home',
		data() {
			return {
				myDate : new Date()
			}
		},
		// computed : mapState ({
		// 	version : state => state.version
		// })
		computed : {
			...mapState ([
				'version'
			]),
			...mapGetters([
				'doneTodos','doneTodosCount','getTodosById'
			]),
			getTodos : function(){
				// console.log(this.getTodosById(2))
				return this.getTodosById(2)
			}
		}

	}
</script>

<style lang="scss">
	
</style>