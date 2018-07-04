<!-- options ==> 选项
              label   : 标签
              value   : 选值
              disable ：true/false 是否可选
     title            : 标题
     @change          : function 

     this.$loading.open ==> text : 显示内容
              spinnerType : loading样式  /snake/double-snake/dot-circle/bar-circle  默认 double-snake
              size        ：loading大小  默认30
              duration    ：loading时间  默认5s
     this.$loading.close

-->
<template>
  <div>
    <vui-radio title="请选择一个坑：" v-model="value" :options="options" @change="onChange"></vui-radio>
    <div class="p40">
      <vui-button type="primary" @click="testClick()">提交</vui-button>
    </div>
    <vui-switch title="开关1" v-model="switchValue1"></vui-switch>
    <vui-switch title="开关2（禁用）" disabled v-model="switchValue2"></vui-switch>
    <div class="p40">
      <vui-button type="primary" @click="showLoading()">显示loading</vui-button>
      <vui-button type="warn" @click="closeLoading()">关闭loading</vui-button>
    </div>
  </div>
  
</template>

<script>
  export default {
    data () {
      return {
        value: 'value2',
        switchValue1: true,
        switchValue2: false,
        options: [{
          label: '选项一',
          value: 'value1'
        },
        {
          label: '选项二',
          value: 'value2'
        },
        {
          label: '选项三 (disabled)',
          value: 'value3',
          disabled: true
        }]
      }
    },

    methods: {
      onChange (val) {
        console.log(val)
      },
      testClick(){
        alert('你选择的是：'+this.value)
      },
      showLoading(){
        // this.$loading.open({
        //    text: 'loading',
        //   spinnerType: 'double-snake',
        //   size : 30,
        //   duration : 1000000
        // })
        this.$loading.open()
      },
      closeLoading(){
        this.$loading.close()
      }
    },
    watch: {
      switchValue1 (val) {
        console.log(val)
      }
    }
  }
</script>
