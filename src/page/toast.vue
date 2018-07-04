<!-- this.$toast ==> duration : 存在时间
              message : 提示信息
              icon    ：图标
              type    : 类型（text）

-->
<template>
  <div class="page page-with-padding">
      <vui-button type="primary" @click="showSuccess()" :plain="true">Success</vui-button>
      <vui-button type="primary" @click="showError()" :plain="true">error</vui-button>
      <vui-button type="primary" @click="showText()" :plain="true">Text</vui-button>
  </div>
</template>
<script type="text/javascript">
  // import Toast from '../components/toast'
  export default {
    name : "Toast",
    methods : {
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
          message: 'hellohellohellohellohellohellohellohellohellohellohellohello',
          type: 'text'
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .page-with-padding{
    padding: 0.4rem;
  }
</style>
