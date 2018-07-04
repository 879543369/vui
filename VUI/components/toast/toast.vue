<template>
  <div v-if="visible">
    <div class="weui-toast" :class="{ 'weui-toast_text': type === 'text' }" ref="toast" id="toast">
      <wv-icon :type="icon" class="weui-icon_toast" v-if="type !== 'text'"></wv-icon>
      <p class="weui-toast__content" v-text="message"></p>
    </div>
  </div>
</template>

<script>
   import WvIcon from '../icon/index'

  export default {
    components: {
      WvIcon
    },

    props: {
      visible: {
        default: true
      },
      icon: {
        type: String,
        default: 'success-no-circle'
      },
      type: {
        type: String,
        default: 'success'
      },
      message: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped lang="scss">
  .weui-icon_toast {
    font-size: 40px;
  }
  .weui-toast {
    font-size: 0.3rem
  }

  .weui-toast_text {
    width: auto;
    min-width: 0;
    min-height: 0;
    padding: .5em 0;
    top: auto;
    bottom: 1rem;
    left:0;
    right:0;
    word-break:break-all;
    max-width: 5rem;
    margin:auto;
    .weui-toast__content {
      margin: 0;
    }
  }
</style>
