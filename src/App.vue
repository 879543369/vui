<template>
  <transition :name="$root.transitionName">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </transition>
</template>
<script>
  export default {
    created : function(){
      // console.log(this.$root.transitionName)
    }
  }
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .padding40{
    padding: 40px;text-align: left;
  }
}
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 250ms;
  top: 0;
  height: 100%;
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  backface-visibility: hidden;
}

.slide-left-enter {
  opacity: 0;
  transform: translateX(100%);
}

.slide-left-leave-active {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-right-enter {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-right-leave-active {
  opacity: 0;
  transform: translateX(100%);
}
</style>
