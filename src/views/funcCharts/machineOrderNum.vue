<style lang="scss" scoped>
.chartt{width: 100%;height: 100%;position: relative;}
.chartt1{width: 100%;height: 95.8%;position: relative;}
i{font-size: 50px;position: absolute;top: 35%;left: 45%;transform: translate(-50%,-50%);color: #999;}
.blank{position: absolute;top: 45%;left: 50%;transform: translate(-50%,-50%);color: #999;}
</style>
<template>
    <div :class="((type=='pie' && flag && pieItem.series.data.length==0)||(type=='bar' && flag && barItem.xAxis[0].data.length==0)||(type=='stackBar' && flag && stackBarItem.xAxis[0].data.length==0))?'chartt1':'chartt'">
        <pie-chart v-if="type=='pie' && flag" :option="pieItem"></pie-chart>
        <bar-chart  v-if="type=='bar' && flag" :items="barItem"></bar-chart>
        <stackBar-chart  v-if="type=='stackBar' && flag" :items="stackBarItem"></stackBar-chart>
        <table-chart v-if="type=='table' && flag" :items="item" :item="item" :option="option"></table-chart>
        <i class="el-icon-loading" v-if="!flag"></i>
        <div class="blank" v-if="(type=='pie' && flag && pieItem.series.data.length==0) || (type=='bar' && flag && barItem.xAxis[0].data.length==0)|| (type=='stackBar' && flag && stackBarItem.xAxis[0].data.length==0)">暂无数据</div>
    </div>
</template>

<script>
  import RadarChart from '../charts/radar-chart'
  import LineChart from '../charts/line-chart'
  import BarChart from '../charts/bar-chart'
  import stackBarChart from '../charts/stackBar-chart'
  import PieChart from '../charts/pie-chart'
  import TableChart from '../funcCharts/table'
  export default {
    name: "machine-orderNum",
    props: {                //接受父组件传递来的数据
      option: {//统计维度,时间信息
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
        type:'',//数据呈现的图表类型
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
        stackBarItem:{
                      legend: {
                                data:[]
                            },
                      xAxis: [
                        {data:[]}
                      ],
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
      stackBarChart,
      PieChart,
      TableChart,
    },
    created() {
      this.getAll()
    },
    methods: {
      getAll(){
        if(!this.option.isModel){//如果不是模板,则请求数据
                this.getData()
            }else{//如果是模板,图表默认数据
              this.type=this.item.pluginChart
              if(this.item.pluginCard=='SaleProgress'){//经营分析
                  this.barItem.legend.data=["销售额","订单量","新增用户","客单价","利润额"]//分析内容
                  this.barItem.xAxis[0].data=["03/01","03/02","03/03","03/04","03/05","03/06","03/07"]//x轴 
                  this.barItem.series=[
                                              {
                                                  name: '销售额',
                                                  type: 'bar',
                                                  barGap: 0,
                                                  data: [987.10, 554, 242, 334, 13.60,15,30]
                                              },
                                              {
                                                  name: '订单量',
                                                  type: 'bar',
                                                  data: [554, 182, 191, 234, 290, 242, 334]
                                              },
                                              {
                                                  name: '新增用户',
                                                  type: 'bar',
                                                  data: [242, 232, 201, 154, 190, 334, 13.60]
                                              },
                                              {
                                                  name: '客单价',
                                                  type: 'line',
                                                  yAxisIndex:1,
                                                  data: [13.60, 77, 101, 99, 40, 191, 234]
                                              },
                                              {
                                                  name: '利润额',
                                                  type: 'bar',
                                                  data: [321.70, 77, 101, 99, 40, 99, 40]
                                              }
                                          ]
                  this.flag=true
              }else if(this.item.pluginCard=='wareProgress'){//库存分析
                  this.stackBarItem.legend.data=['采购量', '出库量', '存量']//分析内容
                  this.stackBarItem.xAxis[0].data=["03/01周一","03/02周二","03/03周三","03/04周四","03/05周五","03/06周六","03/07周日"]//x轴 
                  this.stackBarItem.series=[
                                            {
                                                name: '采购量',
                                                type: 'bar',
                                                stack: '海创园仓库',
                                                data: [120, 132, 101, 134, 90, 230, 210]
                                            },
                                            {
                                                name: '出库量',
                                                type: 'bar',
                                                stack: '海创园仓库',
                                                data: [220, 182, 191, 234, 290, 330, 310]
                                            },
                                            {
                                                name: '存量',
                                                type: 'bar',
                                                stack: '海创园仓库',
                                                data: [150, 232, 201, 154, 190, 330, 410]
                                            },
                                            {
                                                name: '采购量',
                                                type: 'bar',
                                                stack: '测试仓库',
                                                data: [100, 32, 101, 14, 90, 20, 20]
                                            },
                                            {
                                                name: '出库量',
                                                type: 'bar',
                                                stack: '测试仓库',
                                                data: [20, 12, 19, 234, 290, 30, 30]
                                            },
                                            {
                                                name: '存量',
                                                type: 'bar',
                                                stack: '测试仓库',
                                                data: [10, 22, 201, 154, 190, 30, 410]
                                            }
                                        ]
                  this.flag=true
              }else if(this.item.pluginCard=='GoodRank' || this.item.pluginCard=='StoreRank' || this.item.pluginCard=='SkuRank' || this.item.pluginCard=='MachineRank'){//如果是table类型则去table组件中建立默认数据
                  this.item.isModel=true
                  this.flag=true
              }
            }
      },
      getData(){
        this.flag=false
            this.api({//1.图表类型 2.数据分析的类型 3.其他参数(比如日期等等)   ----------从父页面传递过来
                    url: "/data/dataDetails",
                    method: "post",
                    data:{
                        startTime:this.option.startTime,
                        endTime:this.option.endTime,
                        headStoreCode:this.option.headStoreCode,
                        headMachineCode:this.option.headMachineCode,
                        headBrandId:this.option.headBrandId,
                        headTypeId:this.option.headTypeId,
                        headSkuCode:this.option.headSkuCode,
                        dataType:"Progress",//是大表还是其他的详情啥的
                        pluginCard:this.item.pluginCard,
                        // startTime:"2020-06-15",
                        // endTime:'2020-06-20',
                        pluginId:this.item.pluginId,
                        // pluginId:"9ff18c6da86b44739e6f5f0f76f1ef80",
                        detailsStatus:0
                    }                      
                }).then((data) => { 
                    this.type=data.headChart
                    this.flag=true
                    if(data.headChart=='pie'){
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
                    }else if(data.headChart=='bar'){//柱状图
                            //柱状图------------------------------------------------------------------------------------------------------------
                            let graphXParam=[]//x轴
                            for(let i in data.saleProgressList){
                                data.saleProgressList[i].gmtTime=data.saleProgressList[i].gmtTime+' '+this.getWeek(data.saleProgressList[i].gmtWeek)
                                graphXParam.push(data.saleProgressList[i].gmtTime)
                                
                            }
                            let graphLend=["销售额","订单量","新增用户","客单价","利润额"]//分析内容
                            let series=[]//具体数据
                            for(let i in graphLend){
                                let dataBox={}
                                dataBox.name=graphLend[i]
                                if(graphLend[i]=='客单价'){
                                    dataBox.type='line'
                                    // dataBox.yAxisIndex=1
                                    }else{
                                        dataBox.type='bar'
                                    }
                                let dataList=[]
                                for(let key in data.saleProgressList){
                                    if(graphLend[i]=='销售额'){
                                        dataList.push(data.saleProgressList[key].salePrice)
                                    }else if(graphLend[i]=='订单量'){
                                        dataList.push(data.saleProgressList[key].orderNum)
                                    }else if(graphLend[i]=='新增用户'){
                                        dataList.push(data.saleProgressList[key].newUserNum)
                                    }else if(graphLend[i]=='客单价'){
                                        dataList.push(data.saleProgressList[key].prePrice)
                                    }else if(graphLend[i]=='利润额'){
                                        dataList.push(data.saleProgressList[key].profits)
                                    }
                                    
                                }
                                dataBox.data=dataList
                                series.push(dataBox)
                            }
                            this.barItem.legend.data=graphLend//分析内容
                            this.barItem.xAxis[0].data=graphXParam//x轴 
                            this.barItem.series=series
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
                    }else if(data.headChart=='stackBar'){//堆叠柱状图
                            this.stackBarItem.legend.data=['采购量', '出库量', '存量']//分析内容
                            this.stackBarItem.xAxis[0].data=data.list[0].timeList//x轴 
                            this.stackBarItem.series=data.list
                            //堆叠柱状图------------------------------------------------------------------------------------------------------------
                    }else if(data.headChart=='table'){//表格(如果是表格的话数据直接去表格的插件请求)
                      this.item.id='Progress'//因为是大表,所以是Progress
                    }
                }).catch(() => {
                    
                })
      },
      getWeek(gmtWeek){
          if(gmtWeek=='Mon'){
              return '周一'
            }else if(gmtWeek=='Tue'){
              return '周二'
            }else if(gmtWeek=='Wed'){
              return '周三'
            }else if(gmtWeek=='Thu'){
              return '周四'
            }else if(gmtWeek=='Fri'){
              return '周五'
            }else if(gmtWeek=='Sat'){
              return '周六'
            }else if(gmtWeek=='Sun'){
              return '周日'
            }
        },
      
    },
    watch: {
      //监听items的变化
        child: {//父组件传过来的参数发生变化就请求
            handler(newVal,oldVal) {
                this.getAll()
            },
          },
        item: {//父组件传过来的参数发生变化就请求
            handler(newVal,oldVal) {
                this.getAll()
            },
          },
        option: {//父组件传过来的参数发生变化就请求
            handler(newVal,oldVal) {
                this.getAll()
            },
            deep:true
          }
    },
  }

</script>


