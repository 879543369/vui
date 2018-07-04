<!-- options ==> 选项
              label   : 标签
              value   : 选值
              disable ：true/false 是否可选
     title            : 标题
     :max             : number 可选数量
-->
<template>
  <div>
    <vui-checklist title="我是一个多选列表" :options="options" v-model="checkedItems" :max="3"></vui-checklist>
    <div class="p40">
      <vui-button type="primary" @click="testClick()">提交</vui-button>
    </div>
    
  </div>
</template>

<script>
  export default {
    data () {
      return {
        options: [
          {
            label: '选项1',
            value: 'value1'
          },
          {
            label: '选项2',
            value: 'value2'
          },
          {
            label: '选项3',
            value: 'value3'
          },
          {
            label: '选项4（禁用）',
            value: 'value4',
            disabled: true
          }
        ],
        checkedItems: ['value1', 'value3']
      }
    },
    methods :{
      testClick(){
        alert('你选择的是：'+this.checkedItems)
      }
    }
  }
</script>
