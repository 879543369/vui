<!-- Dialog ==> title : 窗口标题
              message : 弹框内容
              skin    ：ios/android  弹框样式
              confirmText    :  text--确定
              cancelText     ： text--取消
              showCancelBtn  :  boo -- 取消按钮show
              showConfirmBtn :  boo -- 确定按钮show
    confirmClick  ==> type 
                        -confirm 确定
                        -cancel  取消
-->
<template>
  <div class="p40">
    <vui-button type="primary" @click="showDialog('ios', '窗口标题')">iOS Dialog 有标题</vui-button>
    <vui-button type="primary" @click="showDialog('ios')">iOS Dialog 无标题</vui-button>
    <vui-button type="primary" @click="showDialog('android', '窗口标题')">Android Dialog 有标题</vui-button>
    <vui-button type="primary" @click="showDialog('android')">Android Dialog 无标题</vui-button>
  </div>
</template>

<script>
  // import Dialog from '../components/dialog'
  // import Toast from '../components/toast'

  export default {
    methods: {
      confirmClick (type) {
        console.log(type)
        type === 'confirm' ? this.$toast('确定按钮') : this.$toast({message : '取消按钮',icon : 'warn'})
      },

      showDialog (skin, title) {
        this.$dialog({
          title: title,
          message: '欢迎使用VUI!',
          skin,
          confirmText : '好的',
          cancelText : '不要了',
          showCancelBtn: true,
          showConfirmBtn : true
        },
        this.confirmClick)
      }
    }
  }
</script>

<style scoped lang="scss">
  .buttons {
    display: block;
    width: 80%;
    margin: 20px auto;
  }
</style>
