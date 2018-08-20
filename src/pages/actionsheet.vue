<!-- type ==> ios     : ios常用样式
              android : Android常用样式
     title            : ios标题
     cancel-text      : ios取消text
     :actions ==> name: 枚举名字
                  key : 枚举属性值
                  method ：点击事件
-->
<template>
  <div class="page page-with-padding">
    <div class="buttons">
      <vui-button type="default" @click="showActionsheet('ios')">iOS ActionSheet</vui-button>
      <vui-button type="default" @click="showActionsheet('android')">Android ActionSheet</vui-button>
    </div>

    <vui-actionsheet :type="type" title="<h1>一个大标题</h1>" :actions="actions" cancel-text="取消" v-model="sheetVisible"></vui-actionsheet>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        type: 'ios',
        sheetVisible: false,
        actions: []
      }
    },

    methods: {
      showActionsheet (type) {
        this.type = type
        this.sheetVisible = true
      },

      menuClick (key) {
        console.log(`menu ${key} clicked`)
      }
    },

    mounted () {
      this.actions = [
        {
          name: '按钮一',
          key: 'menu1',
          method: () => {
            this.menuClick('menu1')
          }
        },
        {
          name: '按钮二',
          key: 'menu2',
          method: () => {
            this.menuClick('menu2')
          }
        },
        {
          name: '按钮三',
          key: 'menu3',
          method: () => {
            this.menuClick('menu3')
          }
        }
      ]
    }
  }
</script>

<style scoped lang="scss">
  .buttons {
    display: block;
    padding: 0 20px;
    margin: 20px auto;
  }
</style>
