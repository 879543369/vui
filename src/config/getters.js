const getters = {
	doneTodos : state => {
		return state.todos.filter(todo =>todo.done);
	},
	doneTodosCount : (state, getters) =>{
		return getters.doneTodos.length;
	},
	getTodosById : (state , getters) => (id) =>{
		return state.todos.find(todo => todo.id === id)
	}
}
export default getters