<template>
  <div class="vui-scroll"
  :class="{'down':(state===0),'up':(state==1),refresh:(state===2),touch:touching}"
  @touchstart="touchStart($event)"
  @touchmove="touchMove($event)"
  @touchend="touchEnd($event)"
  @scroll="(onInfinite || infiniteLoading) ? onScroll($event) : undefined">
    <section class="inner" :style="{ transform: 'translate3d(0, ' + top + 'px, 0)' }">
      <header class="pull-refresh">
        <slot name="pull-refresh">
            <i class="weui-loading"></i>
           <span class="down-tip">下拉更新</span>
           <span class="up-tip">松开更新</span>
           <span class="refresh-tip">更新中</span>
        </slot>
      </header>
      <slot></slot>
      <footer class="load-more">
        <slot name="load-more tc" v-if="!noMorelist">
          <i class="weui-loading"></i>
          <span class="weui-loadmore__tips">正在加载</span>
        </slot>
        <slot name="load-more tc" v-if="noMorelist">
          <div class="weui-loadmore weui-loadmore_line">
              <span class="weui-loadmore__tips">暂无数据</span>
          </div>
        </slot>
      </footer>

    </section>
  </div>
</template>
<script>
export default {
  name: 'vui-scroll',
  props: {
    offset: {
      type: Number,
      default: 40
    },
    enableInfinite: {
      type: Boolean,
      default: true
    },
    enableRefresh: {
      type: Boolean,
      default: true
    },
    onRefresh: {
      type: Function,
      default: undefined,
      required: false
    },
    onInfinite: {
      type: Function,
      default: undefined,
      require: false
    },
    noMorelist :{
      type:Boolean,
      default : false
    }
  },
  data() {
    return {
      top: 0,
      state: 0,
      startY: 0,
      touching: false,
      infiniteLoading: false
    }
  },
  methods: {
    touchStart(e) {
      this.startY = e.targetTouches[0].pageY
      this.startScroll = this.$el.scrollTop || 0
      this.touching = true
    },
    touchMove(e) {
      if (!this.enableRefresh || this.$el.scrollTop > 0 || !this.touching) {
        return
      }
      let diff = e.targetTouches[0].pageY - this.startY - this.startScroll
      if (diff > 0) e.preventDefault()
      this.top = Math.pow(diff, 0.8) + (this.state === 2 ? this.offset : 0)

      if (this.state === 2) { // in refreshing
        return
      }
      if (this.top >= this.offset) {
        this.state = 1
      } else {
        this.state = 0
      }
    },
    touchEnd(e) {
      if (!this.enableRefresh) return
      this.touching = false
      if (this.state === 2) { // in refreshing
        this.state = 2
        this.top = this.offset
        return
      }
      if (this.top >= this.offset) { // do refresh
        this.refresh()
      } else { // cancel refresh
        this.state = 0
        this.top = 0
      }
    },
    refresh() {
      this.state = 2
      this.top = this.offset
      this.onRefresh(this.refreshDone)
    },
    refreshDone() {
      this.state = 0
      this.top = 0
    },

    infinite() {
      console.log(this.noMorelist)
      this.infiniteLoading = true
      this.onInfinite(this.infiniteDone)
    },

    infiniteDone() {
      this.infiniteLoading = false
    },

    onScroll(e) {
      if (!this.enableInfinite || this.infiniteLoading) {
        return
      }
      let outerHeight = this.$el.clientHeight
      let innerHeight = this.$el.querySelector('.inner').clientHeight
      let scrollTop = this.$el.scrollTop
      let ptrHeight = this.onRefresh ? this.$el.querySelector('.pull-refresh').clientHeight : 0
      let infiniteHeight = this.$el.querySelector('.load-more').clientHeight
      let bottom = innerHeight - outerHeight - scrollTop - ptrHeight
      if (bottom < infiniteHeight) this.infinite()
    }
  }
}
</script>
<style lang="scss">
.vui-scroll {
  font-size: 0.32rem;
  position: absolute;
  top: 0rem;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  background-color: #f5f5f5
}
.vui-scroll .inner {
  position: absolute;
  top: -1.3rem;
  width: 100%;
  transition-duration: 300ms;
}
.vui-scroll .pull-refresh {
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  span{font-size: 0.24rem;color: #ccc;}
}
.vui-scroll.touch .inner {
  transition-duration: 0ms;
}
.vui-scroll.down .down-tip {
  display: block;
}
.vui-scroll.up .up-tip {
  display: block;
}
.vui-scroll.refresh .refresh-tip {
  display: block;
}
.vui-scroll .down-tip,
.vui-scroll .refresh-tip,
.vui-scroll .up-tip {
  display: none;
}
.vui-scroll .load-more {
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  
  .weui-loadmore__tips{font-size: 0.24rem;color: #ccc;}
}  
.weui-loading{
    width: 0.5rem;height:0.5rem;
  }
  .weui-loadmore_line .weui-loadmore__tips{background-color: #f5f5f5;}
  .weui-loadmore{margin: initial;}
  .weui-loadmore_line{margin-top: 1.4em;}
</style>