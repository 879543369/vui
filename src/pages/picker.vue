<template>
  <div class="page">
      <vui-cell title="单列选择" is-link :value="ticket | pickerValueFilter" @click.native="ticketPickerShow = true"></vui-cell>
      <vui-cell title="多列选择" is-link :value="dayAndTime | pickerValueFilter" @click.native="dayPickerShow = true"></vui-cell>
      <vui-cell title="联动选择" is-link :value="address | pickerValueFilter" @click.native="addressPickerShow = true"></vui-cell>

    <vui-picker v-model="ticketPickerShow" :slots="ticketSlots" @confirm="confirmTicket"></vui-picker>
    <vui-picker v-model="dayPickerShow" :slots="daySlots" @confirm="confirmDayTime"></vui-picker>
    <vui-picker v-model="addressPickerShow" ref="addressPicker" :slots="addressSlots" @change="onAddressChange" @confirm="confirmAddress"></vui-picker>
  </div>
</template>

<script>
  import chinaAreaData from 'china-area-data'
  console.log(chinaAreaData)
  let provinces = Object.values(chinaAreaData[86])
  // 获取某一省下的市
  function getCities (province) {
    let provinceCode
    for (let i in chinaAreaData[86]) {
      if (province === chinaAreaData[86][i]) {
        provinceCode = i
        break
      }
    }
    return Object.values(chinaAreaData[provinceCode])
  }

  // 获取某一市下的区/县
  function getAreas (province, city) {
    let provinceCode, cityCode
    for (let i in chinaAreaData[86]) {
      if (province === chinaAreaData[86][i]) {
        provinceCode = i
        break
      }
    }

    for (let i in chinaAreaData[provinceCode]) {
      if (city === chinaAreaData[provinceCode][i]) {
        cityCode = i
        break
      }
    }

    if (chinaAreaData[cityCode]) {
      return Object.values(chinaAreaData[cityCode])
    } else {
      // 只有两级的情况
      return []
    }
  }

  export default {
    data () {
      return {
        ticketValue: [],
        dayValue: [],
        ticketPickerShow: false,
        dayPickerShow: false,
        addressPickerShow: false,
        ticket: '',
        dayAndTime: '',
        address: '',
        ticketSlots: [
          {
            values: [
              '汽车票',
              '飞机票',
              '火车票',
              '轮船票',
              '其它'
            ],
            defaultIndex: 2
          }
        ],
        daySlots: [
          {
            values: [
              '星期一',
              '星期二',
              '星期三',
              '星期四',
              '星期五'
            ],
            defaultIndex: 0
          },
          {
            values: [
              '上午',
              '下午'
            ],
            defaultIndex: 0
          }
        ],
        addressSlots: [
          {
            values: provinces
          },
          {
            values: []
          },
          {
            values: []
          }
        ]
      }
    },

    mounted () {
      this.$nextTick(() => {
        this.$refs.addressPicker.setValues(['广东省', '深圳市', '南山区'])
      })
    },

    methods: {
      onChange (picker, value) {
        console.log(value)
      },

      confirmTicket (picker) {
        this.ticket = picker.getValues()
      },

      confirmDayTime (picker) {
        this.dayAndTime = picker.getValues()
      },

      onAddressChange (picker, value) {
        picker.setSlotValues(1, getCities(value[0]))
        picker.setSlotValues(2, getAreas(value[0], value[1]))
      },

      confirmAddress (picker) {
        this.address = picker.getValues()
      }
    },

    filters: {
      pickerValueFilter (val) {
        if (Array.isArray(val)) {
          return val.toString()
        } else {
          return '请选择'
        }
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
