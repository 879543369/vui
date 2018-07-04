<template>
  <a class="vui-navbar__item"
     @click="onClick"
     :class="{ 'vui-navbar__item_on': !$parent.animate && $parent.value === id, disabled: disabled }"
     :style="style">
    <slot></slot>
  </a>
</template>

<script>
  export default {
    name: 'vui-navbar-item',

    props: {
      id: String,
      disabled: Boolean
    },

    computed: {
      isSelected () {
        return this.id === this.$parent.value
      },

      style () {
        return {
          borderWidth: this.$parent.lineWidth + 'px',
          borderColor: this.$parent.activeColor,
          color: this.isSelected ? this.$parent.activeColor : this.$parent.color
        }
      }
    },

    methods: {
      onClick () {
        if (this.disabled) return
        this.$parent.$emit('input', this.id)
      }
    }
  }
</script>

<style scoped lang="scss">
  .vui-navbar__item {
    position: relative;
    display: block;
    flex: 1;
    font-size: 15px;
    padding: 6px 0;
    text-align: center;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    &.vui-navbar__item_on {
      border-bottom: 3px solid red;
    }

    &.disabled {
      color: #888 !important;
    }
  }
</style>
