<!-- type ==> primary : 正常 （绿底）
              default : 次要 （白底）
              warn    ：警告 （红底）
     is-loading       : 加载中
     disabled         : 不可点击
     :plain           : 空心

-->
<template>
  <div class="page page-with-padding">
    <div class="buttons-big">
      <vui-button type="primary" @click="testClick()">主要按钮 Normal</vui-button>
      <vui-button type="primary" is-loading>Loading</vui-button>
      <vui-button type="primary" disabled>Disabled</vui-button>
      <vui-button type="default">次要按钮</vui-button>
      <vui-button type="warn">警告类按钮</vui-button>
    </div>
    <div class="buttons-plain">
      <vui-button type="default" :plain="true">按钮</vui-button>
      <vui-button type="default" :plain="true" disabled>按钮</vui-button>
      <vui-button type="primary" :plain="true">按钮</vui-button>
      <vui-button type="primary" :plain="true" disabled>按钮</vui-button>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    name : "Button",
    methods : {
      testClick(){
        alert('你点击了按钮')
      }
    }
  }
</script>

<style scoped lang="scss">
  .page-with-padding{
    padding: 0.4rem;
  }
  .buttons-big {
    display: block;
    margin: 10px auto;
  }

  .buttons-plain {
    display: block;
    width: 60%;
    margin: 10px auto;
  }
</style>
