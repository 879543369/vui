<!-- vui-scroll ==> html
              on-refresh      : 下拉刷新 function 
              enable-refresh  : 禁用下拉刷新 boolean
              on-infinite     ：上拉加载 function
              enable-infinite : 禁用上拉加载 boolean
              no-morelist     ：没有分页数据 Boolean
    
-->
<template>
  <div>
       <vui-scroll :on-refresh="onRefresh" :on-infinite="onInfinite" :no-morelist="listEnd">
        <div class="bgc">
          <vui-cell  v-for="(item,index) in listdata" title="我是测试文件" :value="item.name" :key="item.id"></vui-cell>
        </div>
      </vui-scroll>
  </div>
</template>
<script>
export default{
 data () {
    return {
      counter : 1, //默认已经显示出15条数据 count等于一是让从16条开始加载
      num : 15,  // 一次显示多少条
      pageStart : 0, // 开始页数
      pageEnd : 0, // 结束页数
      listdata: [], // 下拉更新数据存放数组
      listEnd : false
    }
  },
  mounted : function(){
     this.getList();
  },
  methods: {
    getList(){
      this.$api.get('wxpubApi/merchant/queryMerBaseInfo/',{
          'merchantNo' : '1707121000098',
          'page' : this.pageStart,
          'pageSize' : this.num
        },data =>{
          var newData = [{name:'1'},{name:'2'},{name:'3'},{name:'4'},{name:'5'},{name:'6'},{name:'7'},{name:'8'},{name:'9'},{name:'10'},{name:'11'},{name:'12'},{name:'13'},{name:'14'},{name:'15'}]
            this.listEnd = newData.length < this.num ? true : false;
            this.listdata = this.listdata.concat(newData)
        },1)
    },
    onRefresh(done) {
      this.listdata = []
      this.getList();
      done() // call done
      
    },
    onInfinite(done) {
      if(this.listEnd) return;
      this.pageStart ++;
      this.getList();
      setTimeout(()=> done(),1000)
    }
  }
}
</script>
<style type="text/scss">
  .bgc{background-color: #fff;}
</style>