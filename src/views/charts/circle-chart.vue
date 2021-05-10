// circle-chart.vue
//数据大屏图表
<template>
  <div :id="elId" class="container" ref="div"> </div>
</template>

<script>
  // 引入基本模板
  import echarts from 'echarts/lib/echarts'
  // 引入饼图组件
  import 'echarts/lib/chart/pie'
  // 引入提示框和图例组件
  import 'echarts/lib/component/tooltip'
  import 'echarts/lib/component/legend'
  //随机生成不同的id
  import uuidv1 from 'uuid/v1'
  //element-resize-detector,可以监听元素的变化
  import elementResizeDetectorMaker from 'element-resize-detector'
  export default {
    name: "circle-chart",
    props: {                //接受父组件传递来的数据
      option: {
        type: Object,
        // default () {        //默认数据，没有数剧的情况下启用
        //   return [{name: '生物', value: 95, max: '100'}, {name: '数学', value: 55, max: '100'}, {name: '语文', value: 86, max: '100'}, {name: '物理', value: 54, max: '100'}, {name: '美术', value: 59, max: '100'}]
        // }
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
      const option = this.option

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
    },
    watch: {
      //监听items的变化
        option: {
        handler(newVal,oldVal) {
            console.log(111111111)
            
        },
        deep: true //对象内部属性的监听，关键。
      }
    },
  }
</script>
<style scoped>
  .container{width: 100%;height: 100%}
</style>