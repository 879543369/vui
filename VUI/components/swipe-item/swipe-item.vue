<template>
  <div class="vui-swipe-item">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'vui-swipe-item',
    mounted () {
      this.$parent && this.$parent.swipeItemCreated(this)
    },

    destroyed () {
      this.$parent && this.$parent.swipeItemDestroyed(this)
    }
  }
</script>

<style scoped lang="scss">
</style>
