// bar-chart.vue
<template>
  <div :id="elId" class="container" ref="div"> </div>
</template>

<script>
  // 引入基本模板
  import echarts from 'echarts/lib/echarts'
  // 引入雷达图组件
  import 'echarts/lib/chart/bar'
  // 引入提示框和图例组件
  import 'echarts/lib/component/tooltip'
  import 'echarts/lib/component/legend'
  //随机生成不同的id
  import uuidv1 from 'uuid/v1'
  //element-resize-detector,可以监听元素的变化
  import elementResizeDetectorMaker from 'element-resize-detector'
  export default {
    name: "bar-chart",
    props: {                //接受父组件传递来的数据
      items: {
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
      console.log(this.items)      
      const option = {
                grid: {  
                      left: '-8',  //边缘区域大小
                      right: '0',  
                      top:'0%',
                      bottom: '10%',  
                      containLabel: true,
                      show:true,  
                      borderColor:"transparent",
                      backgroundColor: '#F5F6F8',//背景颜色 
                  }, 
                color: ['#409EFF', '#5ECB6D', '#FCBA5C', '#7C7EEF',"#f56c6c"],
                tooltip: {
                    trigger: 'axis',
                    backgroundColor:'#ffffff',
                    padding: [10,20], 
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    },
                    textStyle : {
                      color: '#333'
                    },
                },
                toolbox: {
                    feature: {
                        dataView: {show: true, readOnly: false},
                        magicType: {show: true, type: ['line', 'bar']},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                legend: {
                    data:this.items.legend.data,
                    x:'left',//图例位置
                    y:'bottom'
                    // data: ['蒸发量', '降水量', '平均温度']
                },
                xAxis: [
                    {
                        type: 'category',
                        data:this.items.xAxis[0].data,
                        // data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                        axisPointer: {
                            type: 'shadow'
                        },
                        splitLine:{//去掉网格线
                    　　　　show:false
                    　　},
                        axisLine:{       //轴
                                show:false

                            },
                            axisTick:{       //轴刻度线
                                show:false
                              },
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        // name: '水量',
                        // min: 0,
                        // max: 250,
                        // interval: 50,
                        axisLabel: {//刻度数值
                            formatter: ''
                        },
                        splitLine:{//网格线
                    　　　　show:false
                    　　},
                        axisLine:{       //轴
                            show:false

                        },
                        axisTick:{       //轴刻度线
                            show:false
                          },
                    },
                    {
                        type: 'value',
                        // name: '客单价',
                        // min: 0,
                        // max: 500,
                        // interval: 100,
                        axisLabel: {
                            formatter: ''
                        },
                        splitLine:{//网格线
                    　　　　show:false
                    　　},
                        axisLine:{       //y轴
                            show:false

                        },
                        axisTick:{       //y轴刻度线
                            show:false
                          },
                    
                    }
                ],
                series:this.items.series
                // series: [
                //     {
                //         name: '蒸发量',
                //         type: 'bar',
                //         data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                //     },
                //     {
                //         name: '降水量',
                //         type: 'bar',
                //         data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                //     },
                //     {
                //         name: '平均温度',
                //         type: 'line',
                //         yAxisIndex: 1,
                //         data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                //     }
                // ]
            };
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
        items: {
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