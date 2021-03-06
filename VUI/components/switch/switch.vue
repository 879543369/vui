<template>
  <vui-cell :title="title" v-if="isInCell">
    <div class="wv-switch" :class="{ 'wv-switch-on': currentValue, 'wv-switch-disabled': disabled }" @click="onClick"
         slot="ft">
      <div class="background"></div>
      <div class="thumb" ref="thumb"></div>
    </div>
  </vui-cell>

  <div class="wv-switch" :class="{ 'wv-switch-on': currentValue, 'wv-switch-disabled': disabled }" @click="onClick"
       v-else>
    <div class="background"></div>
    <div class="thumb" ref="thumb"></div>
  </div>
</template>

<script>
  import Cell from '../cell/index'
  import draggable from '../../utils/draggable'
  import { getTranslateX, setTranslateX } from '../../utils/transform'

  const THUMB_STROKE = 20 // 开关的行程

  export default {
    name: 'vui-switch',

    components: {
      'vui-cell': Cell
    },

    props: {
      title: String,
      disabled: Boolean,
      isInCell: {
        type: Boolean,
        default: true
      },
      value: Boolean
    },

    data () {
      return {
        currentValue: this.value,
        dragState: {}
      }
    },

    mounted () {
      const thumb = this.$refs.thumb

      if (this.currentValue) {
        setTranslateX(thumb, THUMB_STROKE)
      } else {
        setTranslateX(thumb, 0)
      }

      draggable(thumb, {
        start: (event) => {
          if (this.disabled) return

          let dragState = this.dragState
          dragState.startTimestamp = new Date()
          dragState.startPositionX = event.clientX
          dragState.startTranslateX = getTranslateX(thumb)

          thumb.style.transition = null
        },
        drag: (event) => {
          if (this.disabled) return

          let deltaX = event.clientX - this.dragState.startPositionX

          const targetTranslateX = this.dragState.startTranslateX + deltaX

          if (targetTranslateX >= 0 && targetTranslateX <= THUMB_STROKE) {
            setTranslateX(thumb, targetTranslateX)
          } else if (targetTranslateX < 0) {
            setTranslateX(thumb, 0)
          } else if (targetTranslateX > THUMB_STROKE) {
            setTranslateX(thumb, THUMB_STROKE)
          }
        },
        end: (event) => {
          if (this.disabled) return

          // 拖动操作的时长
          const touchDuration = (new Date()) - this.dragState.startTimestamp

          if (touchDuration < 500) {
            // 500ms 以内当作点击
            this.currentValue = !this.currentValue
            return
          }

          let deltaX = event.clientX - this.dragState.startPositionX

          thumb.style.transition = '-webkit-transform .35s cubic-bezier(0.4, 0.4, 0.25, 1.35)'
          if (this.currentValue) {
            if (deltaX < THUMB_STROKE / -2) {
              this.currentValue = false
            } else {
              setTranslateX(thumb, THUMB_STROKE)
            }
          } else {
            if (deltaX > THUMB_STROKE / 2) {
              this.currentValue = true
            } else {
              setTranslateX(thumb, 0)
            }
          }
        }
      })
    },

    methods: {
      onClick (event) {
        event.preventDefault()
        if (this.disabled) return

        this.currentValue = !this.currentValue
      }
    },

    watch: {
      value (val) {
        this.currentValue = val
      },

      currentValue (val) {
        this.$emit('input', val)
        this.$emit('change', val)

        const thumb = this.$refs.thumb
        if (val) {
          setTranslateX(thumb, THUMB_STROKE)
        } else {
          setTranslateX(thumb, 0)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  $wv-switch-height: 32px;
  $thumb-background-color: #fff;
  $on-color: #04BE02;
  $off-color: #FDFDFD;
  $thumb-color: #fff;

  .wv-switch {
    position: relative;
    width: 52px;
    height: $wv-switch-height;
    border: 1px solid #DFDFDF;
    outline: 0;
    border-radius: 16px;
    box-sizing: border-box;
    background-color: #DFDFDF;
    transition: background-color .1s, border .1s;

    input {
      display: none;
    }

    .background {
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      width: 50px;
      height: $wv-switch-height - 2;
      border-radius: 15px;
      background-color: #FDFDFD;
      transition: transform .35s cubic-bezier(0.45, 1, 0.4, 1);
    }

    &.wv-switch-disabled .background {
      background-color: darken($off-color, 10%);
    }

    .thumb {
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      width: $wv-switch-height - 2;
      height: $wv-switch-height - 2;
      border-radius: 15px;
      background-color: $thumb-color;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    }

    &.wv-switch-disabled .thumb {
      background-color: darken($thumb-color, 10%);
    }

    &.wv-switch-on {
      border-color: $on-color;
      background-color: $on-color;

      .background {
        transform: scale(0);
      }

      .thumb {
        transform: translateX(20px);
      }

      &.wv-switch-disabled {
        border-color: darken($on-color, 5%);
        background-color: darken($on-color, 5%);

        .thumb {
          background-color: darken($thumb-color, 10%);
        }
      }
    }
  }

  // 兼容IE Edge的版本
  .wv-switch-cp__input {
    position: absolute;
    left: -9999px;
  }

  .wv-switch-cp__box {
    display: block;
  }
</style>
