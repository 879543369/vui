<!-- vui-swipe ==> height : 高度，默认180
                   speed  : 切换速度，默认0.3s
            defaultIndex  ：初始页，默认0
                    auto  : 自动滚动，默认时间3s
          showIndicators  ：是否显示底部圆点 boolean 默认true
                prevent   : 是否禁用默认事件 Boolean 默认false
-->

<template>
  <div class="page">
    <vui-swipe class="demo-swipe" :height="130" :auto="4000" :prevent='true' :noDragWhenSingle='false'>
      <vui-swipe-item class="demo-swipe-item" style="background-color: #f44336">1</vui-swipe-item>
      <vui-swipe-item class="demo-swipe-item" style="background-color: #ffc107">2</vui-swipe-item>
      <vui-swipe-item class="demo-swipe-item" style="background-color: #03a9f4">3</vui-swipe-item>
    </vui-swipe>
  </div>
</template>

<style scoped lang="scss">
  .demo-swipe {
    margin-bottom: 50px;

    .demo-swipe-item {
      font-size: 1.2rem;
      color: white;
      font-weight: bold;
      text-align: center;
      line-height: 130px;
    }
  }
</style>
