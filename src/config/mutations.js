const mutations = {
	log(state,data){
		data.type ? alert(data.msg) : console.log(data.msg)
	}
}
export default mutations