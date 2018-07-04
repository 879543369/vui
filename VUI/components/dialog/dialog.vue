<template>
  <div v-show="this.value">
    <div class="weui-mask weui-animate-fade-in"></div>
    <div class="weui-dialog" :class="{ 'weui-skin_android': skin === 'android' }">
      <div class="weui-dialog__hd" v-if="title"><strong class="weui-dialog__title" v-html="title"></strong></div>
      <div class="weui-dialog__bd" v-html="message"></div>
      <div class="weui-dialog__ft">
        <a class="weui-dialog__btn weui-dialog__btn_default" v-if="showCancelBtn"
           @click="handleAction('cancel')" v-text="cancelText"></a>
        <a class="weui-dialog__btn weui-dialog__btn_primary" v-if="showConfirmBtn"
           @click="handleAction('confirm')" v-text="confirmText"></a>
      </div>
    </div>
  </div>
</template>

<script>
  const CONFIRM_TEXT = '确定'
  const CANCEL_TEXT = '取消'

  export default {
    name: 'vui-dialog',

    props: {
      skin: {
        type: String,
        default: 'ios'
      },
      title: String,
      message: String,
      confirmText: {
        type: String,
        default: CONFIRM_TEXT
      },
      cancelText: {
        type: String,
        default: CANCEL_TEXT
      },
      showConfirmBtn: {
        type: Boolean,
        default: true
      },
      showCancelBtn: {
        type: Boolean,
        default: true
      }
    },

    data () {
      return {
        value: false
      }
    },

    methods: {
      handleAction (action) {
        this.value = false
        let callback = this.callback
        callback(action)
        // if (action === 'confirm') {
          
        // }
      }
    }
  }
</script>

<style scoped lang="scss">
  .weui-dialog{font-size: 0.34rem;}
</style>
