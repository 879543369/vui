<template>
  <div class="weui-toast" v-show="visible">
    <div class="load-mask"></div>
    <vui-spinner class="weui-icon_toast" v-if="spinnerType !=='none'" :type="spinnerType" :size="size" :duration="duration"></vui-spinner>
    <p class="weui-toast__content" v-text="text"></p>
  </div>
</template>

<script>
  import WvSpinner from '../spinner/index'

  export default {
    components: {
      WvSpinner
    },

    props: {
      text: String,
      spinnerType: {
        type: String
      },
      size : Number,
      duration : Number
    },

    data () {
      return {
        visible: false
      }
    }
  }
</script>

<style scoped lang="scss">
.weui-toast{
  font-size: 0.3rem;min-height: auto;
  width: 2rem;
}
.load-mask{position: fixed;right: 0;left: 0;top: 0;bottom: 0;}
</style>
