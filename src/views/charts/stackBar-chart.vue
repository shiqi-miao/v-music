// stackBar-chart.vue
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
    name: "stackBar-chart",
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
      //处理items中的门店数据,生成图表悬浮框要用
      const storeList=[]
      const store=[
            // {name:"海创园仓库",data:""},
            // {name:"测试仓库",data:""},
            // {name:"测试仓库1",data:""},
            // {name:"测试仓库2",data:""}
            ]  
      for(let i in this.items.series){
        if(storeList.indexOf(this.items.series[i].stack)==-1){
          storeList.push(this.items.series[i].stack)
        }
      }  
      for(let i in storeList){
        let storeData={}
        storeData.name=storeList[i]
        storeData.data=""
        store.push(storeData)
      }
      //处理items中的门店数据,生成图表悬浮框要用
      // console.log(77777,store)
      const option = {
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
                    formatter: function (params, ticket, callback) {
                        for(let key in store){
                            store[key].data=[]
                        }
                        for(let i in params){
                            params[i].stackNum=params[i].seriesId.substr(params[i].seriesId.length-1,1)//所属的stack
                            params[i].stack=store[params[i].stackNum].name
                            store[params[i].stackNum].data.push(params[i])
                        }
                        let showHtm=store[0].data[0].axisValue
                        for(let g in store){
                            let str="</br>"+"<b>"+store[g].name+"</b>"+"</br>"
                            for(let f in store[g].data){
                                str+=store[g].data[f].seriesName+":"+store[g].data[f].value+" "
                            }
                            showHtm+=str
                        }
                        return showHtm;
                    }
                },
            color: ['#409EFF', '#5ECB6D',"#f56c6c"],
            toolbox: {
                    feature: {
                        dataView: {show: true, readOnly: false},
                        magicType: {show: true, type: ['line', 'bar']},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
            legend: {
                data: this.items.legend.data,
                x:'left',//图例位置
                y:'bottom'
            },
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
            xAxis: [
                {
                    splitLine:{//去掉网格线
                    　　　　show:false
                    　　},
                    axisLine:{       //轴
                        show:false

                    },
                    axisTick:{       //轴刻度线
                        show:false
                      },
                    type: 'category',
                    data: this.items.xAxis[0].data
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    splitLine:{//网格线
                    　　　　show:false
                    　　},
                    axisLabel: {//刻度数值
                            formatter: ''
                        },
                    axisLine:{       //轴
                        show:false
                    },
                    axisTick:{       //轴刻度线
                        show:false
                      },
                }
            ],
            series: this.items.series
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