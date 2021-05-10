// radar-chart.vue
<template>
  <div :id="elId" class="container" ref="div"> </div>
</template>

<script>
  // 引入基本模板
  import echarts from 'echarts/lib/echarts'
  // 引入雷达图组件
  import 'echarts/lib/chart/radar'
  // 引入提示框和图例组件
  import 'echarts/lib/component/tooltip'
  import 'echarts/lib/component/legend'
  //随机生成不同的id
  import uuidv1 from 'uuid/v1'
  //element-resize-detector,可以监听元素的变化
  import elementResizeDetectorMaker from 'element-resize-detector'
  export default {
    name: "radar-chart",
    props: {                //接受父组件传递来的数据
      items: {
        type: Array,
        default () {        //默认数据，没有数剧的情况下启用
          return [{name: '生物', value: 95, max: '100'}, {name: '数学', value: 55, max: '100'}, {name: '语文', value: 86, max: '100'}, {name: '物理', value: 54, max: '100'}, {name: '美术', value: 59, max: '100'}]
        }
      },
    },
    data () {
      return {
        elId: ''//防止同一个页面多次引用此种图表产生bug
      }
    },
    created(){
      this.elId = uuidv1() //获取随机id
    },
    mounted(){
      let values = []  //提炼接收到的数据
      this.items.forEach(el => {
        values.push(el.value)   
      })          
      const option = {  //创建图表配置数据
        tooltip: {},
        radar: {
          indicator:this.items,
          center: ['50%', '51%']
        },
        series: [{
          type: 'radar',
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data: [
            {
              value: values,
              name: '各项得分',
              itemStyle: {normal: {color: '#f0ad4e'}}
            }
          ]
        }]
      }
     //初始化图表
      const chartObj = echarts.init(document.getElementById(this.elId))
      chartObj.setOption(option)
      this.$nextTick(_ => {//生成后重绘一次
                chartObj.resize()
                })
      window.onresize=function(){//窗口变化,图表重绘
        chartObj.resize();
        }
      //图表父元素大小改变,重绘一次
      var erd = elementResizeDetectorMaker()
      erd.listenTo(document.getElementById(this.elId), function (element) {
        // var width = element.offsetWidth
        // var height = element.offsetHeight
          chartObj.resize();
      })
      //图表父元素大小改变,重绘一次
    }
  }
</script>
<style scoped>
  .container{width: 100%;height:100%;position: absolute;bottom: 0;left: 0;}
</style>