<!-- vui-navbar ==> html
              fixed       : 相对定位 / 
              color       : 未选中字体颜色
              active-color：选中的字体颜色
         background-color ：tab背景颜色
              :line-width  ：底部线条宽度
              :animate    ：Boolean - 线条动画
     @change          : function 
    
-->

<template>
  <div>
    <!-- nav -->
    <vui-navbar v-model="navbar1_selected" @change="changed" fixed color="red" background-color="#ccc" active-color="#2196f3" :line-width="5" :animate="true">
      <vui-navbar-item id="navbar1_item1">选项1</vui-navbar-item>
      <vui-navbar-item id="navbar1_item2">选项2</vui-navbar-item>
      <vui-navbar-item id="navbar1_item3">选项3</vui-navbar-item>
    </vui-navbar>
    
    <!-- tab -->
    <vui-tabbar fixed>
      <vui-tabbar-item to="/" is-on>
        <span slot="icon" style="display: inline-block; position: relative;">
          <img class="weui-tabbar__icon" :src="thumbSmall" slot="icon">
          <vui-badge style="position: absolute;top: -2px;right: -13px;">8</vui-badge>
        </span>
        微信
      </vui-tabbar-item>
      <vui-tabbar-item to="/tabbar">
        <img class="weui-tabbar__icon" :src="thumbSmall" slot="icon"> 通讯录
      </vui-tabbar-item>
      <vui-tabbar-item to="/">
        <span slot="icon" style="display: inline-block; position: relative;">
          <img class="weui-tabbar__icon" :src="thumbSmall" slot="icon">
          <vui-badge is-dot style="position: absolute;top: 0;right: -6px;">8</vui-badge>
        </span>
        发现
      </vui-tabbar-item>
      <vui-tabbar-item to="/profile">
        <img class="weui-tabbar__icon" :src="thumbSmall" slot="icon"> 我
      </vui-tabbar-item>
    </vui-tabbar>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        navbar1_selected: 'navbar1_item2',
        navbar2_selected: 'navbar2_item2',
        navbar3_selected: 'navbar3_item2',
        navbar4_selected: 'navbar4_item2',
        navbar5_selected: 'navbar5_item2',
        thumbSmall : './static/img/logo.png'
      }
    },

    methods: {
      changed (e) {
        console.log(e)
      }
    }
  }
</script>

<style scoped lang="scss">
  .demo-wrapper {
    display: block;
    overflow: hidden;
    margin: 100px 0 50px;

    .demo-label {
      display: block;
      font-size: 13px;
      color: #555;
      margin-bottom: .5em;
      text-align: center;
    }
  }
</style>
