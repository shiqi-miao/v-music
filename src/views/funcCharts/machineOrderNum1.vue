<style lang="scss" scoped>
.chartt{width: 100%;height: 100%;}
</style>
<template>
    <div class="chartt">
        <pie-chart v-if="item.pluginChart=='pie' && flag" :option="pieItem"></pie-chart>
        <bar-chart  v-if="item.pluginChart=='bar' && flag" :items="barItem"></bar-chart>
    </div>
</template>

<script>
  import RadarChart from '../charts/radar-chart'
  import LineChart from '../charts/line-chart'
  import BarChart from '../charts/bar-chart'
  import PieChart from '../charts/pie-chart'
  export default {
    name: "machine-orderNum",
    props: {                //接受父组件传递来的数据
      option: {
        type: Object,
        default () {        //默认数据，没有数剧的情况下启用
          return {startTime:'2020-01-01 00:00:00'}
        }
      },
      item:{
        type:Object,
        default () {//默认数据，没有数剧的情况下启用
          return {}
        }
      },
      child:{//是否重新请求数据
        type:Boolean
      }
    },
    data() {
      return {
        flag:false,//请求是否完成
        pieItem:{
            title: {
                text: '某站点用户访问来源',
                subtext: '纯属虚构',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: [
                  // '直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'
                  ]
            },
            series: [
                {
                    name: '销售额',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                      // {value: 335, name: '直接访问'},
                      // {value: 310, name: '邮件营销'},
                      // {value: 234, name: '联盟广告'},
                      // {value: 135, name: '视频广告'},
                      // {value: 1548, name: '搜索引擎'}
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        },
        barItem:{
                legend: {
                          data:[]
                      },
                xAxis: [
                  {data:[]}
                ],
                yAxis: {
                    
                },
                series: []
            },
                typeList:[],
                type:""
              }
            },
    components: {
      RadarChart,
      LineChart,
      BarChart,
      PieChart
    },
    created() {
      this.getData()
    },
    methods: {
      getData(){
        this.flag=false
        this.api({//1.图表类型 2.数据分析的类型 3.其他参数(比如日期等等)   ----------从父页面传递过来
              url: "/data/saleProgress",
              method: "post",
              data:{
                startTime:this.option.startTime,
                endTime:this.option.endTime,
                // startTime:"2019-08-01",
                // endTime:'2020-02-20',
                pluginId:this.item.pluginId,
              }                      
          }).then((data) => { 
            this.flag=true
            if(this.item.pluginChart=='pie'){
              //饼图-----------------------------------------------------------------------------------------------------------
              this.pieItem.legend.data=['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
              this.pieItem.series[0].data=[
                  {value: 335, name: '直接访问'},
                  {value: 310, name: '邮件营销'},
                  {value: 234, name: '联盟广告'},
                  {value: 135, name: '视频广告'},
                  {value: 1548, name: '搜索引擎'}
                ]
              //饼图------------------------------------------------------------------------------------------------------------
            }else if(this.item.pluginChart=='bar'){//柱状图
              //柱状图------------------------------------------------------------------------------------------------------------
              let graphXParam=[]//x轴
              for(let i in data.dataList){
                graphXParam.push(data.dataList[i][data.graphXParam])
              }
              let graphLegend=[]//分析内容
              for(let i in data.paramName){
                graphLegend.push(data.paramName[i])
              }
              let series=[]//具体数据
              for(let i in data.paramName){
                let box={
                  type:'bar'
                }
                let boxdata=[]
                box.name=data.paramName[i]
                for(let key in data.dataList){
                  boxdata.push(data.dataList[key][i])
                }
                box.data=boxdata
                series.push(box)
              }
              console.log(series)
              for(let g in series){
                  if(series[g].name=='客单价'){
                    series[g].yAxisIndex=1
                    series[g].type='line'
                  }
                }
              this.barItem.xAxis[0].data=graphXParam//x轴
              this.barItem.legend.data=graphLegend//分析内容
              this.barItem.series=series//具体数据
              // this.barItem.legend.data=["销售额","订单量","新增用户","客单价","利润额"]
              // this.barItem.xAxis[0].data=["03/01","03/02","03/03","03/04","03/05","03/06","03/07"]
              // this.barItem.series=[
              //             {
              //                 name: '销售额（元）',
              //                 type: 'bar',
              //                 barGap: 0,
              //                 data: [987.10, 554, 242, 334, 13.60,15,30]
              //             },
              //             {
              //                 name: '订单量（笔）',
              //                 type: 'bar',
              //                 data: [554, 182, 191, 234, 290, 242, 334]
              //             },
              //             {
              //                 name: '新增用户（个）',
              //                 type: 'bar',
              //                 data: [242, 232, 201, 154, 190, 334, 13.60]
              //             },
              //             {
              //                 name: '客单价（元）',
              //                 type: 'bar',
              //                 data: [13.60, 77, 101, 99, 40, 191, 234]
              //             },
              //             {
              //                 name: '利润额（元）',
              //                 type: 'bar',
              //                 data: [321.70, 77, 101, 99, 40, 99, 40]
              //             }
              //         ]
            //柱状图------------------------------------------------------------------------------------------------------------
            }
          }).catch(() => {
              
          })
      },
      
    },
    watch: {
      //监听items的变化
        child: {//父组件传过来的参数发生变化就请求
        handler(newVal,oldVal) {
            this.getData()
        },
      }
    },
  }

</script>


