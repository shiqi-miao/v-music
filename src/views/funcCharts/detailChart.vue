<style lang="scss" scoped>
.detail{width:100%;height:100%;
  .left{width: 20%;height: 100%;border:1px solid rgba(234,234,234,1);border-right: 0;
        .active{background:#EAEAEA}
        .type{
          width: 100%;height: 18%;border-bottom:1px solid rgba(234,234,234,1);padding:6%;cursor: pointer;
          .title{font-size: 14px;color: #333333;margin-bottom: 12px;}
          .info{font-size: 12px;color: #999999;line-height: 18px;}
        }
        .type:hover{background:#EAEAEA}
        }
  .right{width: 80%;height:100%;border:1px solid rgba(234,234,234,1);padding: 3.6%;}
}
</style>
<template>
    <div class="detail flex-center-Y">
        <div class="left">
          <div v-for="(item,i) in list" :key="i" :class="item.isActive?'active type':'type'" :style="item.name=='数据总览'?'height:9%':''" @click="select(item)">
            <div class="title">{{item.name}}</div>
            <div class="info">{{item.detail}}</div>
          </div>
        </div>
        <div class="right">
          <table-chart v-if="loading" :items="selectType" :item="item" :option="option"></table-chart>
        </div>
    </div>
</template>

<script>
  import RadarChart from '../charts/radar-chart'
  import LineChart from '../charts/line-chart'
  import BarChart from '../charts/bar-chart'
  import PieChart from '../charts/pie-chart'
  import TableChart from '../funcCharts/table'
  export default {
    name: "detail-chart",
    props: {                //接受父组件传递来的数据
      option: {
        type: Object,
        default () {        //默认数据，没有数剧的情况下启用
          return {startTime:'2020-01-01 00:00:00'}
        }
      },
      item:{
        type:Object,
      }
    },
    data() {
      return {
        list:[],
        selectType:"",//选中的种类
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
                data: []
            },
            series: [
                {
                    name: '销售额',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [],
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
        typeList:[],
        type:"",
        loading:false
      }
    },
    components: {
      RadarChart,
      LineChart,
      BarChart,
      PieChart,
      TableChart,
    },
    created() {
      this.getData()
    },
    methods: {
      select(item){
        for(let i in this.list){
          this.list[i].isActive=false
        }
        item.isActive=true
        this.list=JSON.parse(JSON.stringify(this.list))
        this.selectType=item
      },
      getData(){
        if(this.item.pluginCard=="SaleProgress"){//经营分析
          this.list=[
            {id:"Details",name:"数据总览",detail:"",pluginCard:'SaleProgress'},
            {id:"Refurd",name:"销售额",detail:"某时间段内用户实际支付的所有订单总金额",pluginCard:'SaleProgress'},
            {id:"Num",name:"订单量",detail:"某时间段内用户实际消费的所有订单总量",pluginCard:'SaleProgress'},
            {id:"Pre",name:"客单价",detail:"某时间段内用户实际支付的所有商品的均价",pluginCard:'SaleProgress'},
            {id:"Profit",name:"利润额",detail:"某时间段内所有已销售的商品的销售额减去该部分商品的成本价",pluginCard:'SaleProgress'},
            {id:"User",name:"新增用户",detail:"某时间段内在该运营商下产生第一次消费购物的总用户数量",pluginCard:'SaleProgress'},
          ]
          this.selectType=this.list[0]
          this.list[0].isActive=true
          this.loading=true
          // this.api({//1.图表类型 2.数据分析的类型 3.其他参数(比如日期等等)   ----------从父页面传递过来
          //       url: "/data/dataDetails",
          //       method: "post",
          //       data:{
          //         // startTime:this.option.startTime,
          //         // endTime:this.option.endTime,\
          //         dataType:"Progress",//是大表还是其他的详情啥的
          //         pluginCard:this.item.pluginCard,
          //         startTime:"2019-08-01",
          //         endTime:'2019-09-30',
          //         pluginId:this.item.pluginId,
          //         detailsStatus:1
          //       }                      
          //   }).then((data) => { 

          //   }).catch(() => {
                
          //   })
        }
        else if(this.item.pluginCard=="wareProgress"){//仓库分析
          this.list=[
            {id:"Details",name:"数据总览",detail:"",pluginCard:'wareProgress'},
            {id:"Refurd",name:"采购情况",detail:"某时间段内该仓库所有的采购入库情况总览",pluginCard:'wareProgress'},
            {id:"Num",name:"补货情况",detail:"某时间段内该仓库所有的补货出库情况总览",pluginCard:'wareProgress'},
            {id:"Pre",name:"存量情况",detail:"某时间段内该仓库所有的库存存量情况总览",pluginCard:'wareProgress'}
          ]
          this.selectType=this.list[0]
          this.list[0].isActive=true
          this.loading=true
        }
      },
      
    },
    watch: {
      //监听items的变化
      item: {//父组件传过来的参数发生变化就请求
        handler(newVal,oldVal) {
          this.getData()
        },
        deep: true
      },
      option: {//父组件传过来的参数发生变化就请求
        handler(newVal,oldVal) {
        },
        deep: true
      }
    },
    
  }

</script>


