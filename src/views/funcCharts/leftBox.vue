<style lang='scss' scoped>
  .left-box{width: 100%;height: 100%;border:1px solid rgba(234,234,234,1);overflow: auto;
    .title{font-size: 14px;color:#333;border-bottom:1px solid rgba(234,234,234,1);height: 10%;width: 100%;padding: 10% 14%;}
    .box{font-size: 14px;color:#333;border-bottom:1px solid rgba(234,234,234,1);height:18%;width: 100%;;padding: 7% 14%;
        .title1{font-size:12px;color:rgba(153,153,153,1);margin-bottom: 8%;}
        .title2{font-size:14px;color:#333;margin-bottom: 8%;font-weight: 600;}
        .title3{font-size:12px;color:#E24E4E;}
        .title4{font-size:12px;color:#5ECB6D;}
        img{width: 16px;height: 9px;}
    }
  }
  @media screen and (max-width:900px) {
    .left-box .title,.left-box .box{padding:4% 6%;}
    .left-box .title{font-size: 13px;}
    .left-box .box .title1,.left-box .box .title2{font-size: 12px;margin-bottom: 2%;}
    .left-box .box{height: 20%;}
    .left-box .box img{width: 13px;height: 9px;}
  }
</style>
<template>
  <div class="left-box">
      <div class="title">相比上周</div>
      <div class="box" v-for="(item,i) in list" :key="i">
          <div class="title1">{{item.name}}</div>
          <div class="title2">{{item.data}}</div>
          <div :class="Number(item.num)>0?'title3':'title4'">
              <img v-if="Number(item.num)>0" src="../../assets/analysis/up.png" alt="">
              <img v-else src="../../assets/analysis/down.png" alt="">
              {{item.num}}%
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: "left-box",
    props: {                //接受父组件传递来的数据
      item: {
        type: Object,
        default () {        //默认数据，没有数剧的情况下启用
          return {}
        }
      },
      option: {
        type: Object,
        default () {        //默认数据，没有数剧的情况下启用
          return {}
        }
      },
    },
    data () {
      return {
        list:[
            // {name:"销售额（元）",data:"1023.50",num:"-5.18"},
            // {name:"销售额（元）",data:"1023.50",num:"+5.18"},
            // {name:"销售额（元）",data:"1023.50",num:"-5.18"},
            // {name:"销售额（元）",data:"1023.50",num:"+5.18"},
            // {name:"销售额（元）",data:"1023.50",num:"+5.18"},
            
        ]
      }
    },
    created(){
      this.getData()
    },
    mounted(){
      
    },
    methods:{
      getData(){
        if(this.item.pluginCard=="SaleProgress"){//经营分析
            this.list=[
              {id:"salePrice",idRate:"salePriceRate",name:"销售额（元）",data:"",num:""},
              {id:"orderNum",idRate:"orderNumRate",name:"订单量（笔）",data:"",num:""},
              {id:"newUserNum",idRate:"newUserNumRate",name:"新增用户（个）",data:"",num:""},
              {id:"prePrice",idRate:"prePriceRate",name:"客单价（元）",data:"",num:""},
              {id:"profits",idRate:"profitsRate",name:"利润额（元）",data:"",num:""},
            ]
            this.api({//1.图表类型 2.数据分析的类型 3.其他参数(比如日期等等)   ----------从父页面传递过来
                    url: "/data/dataDetails",
                    method: "post",
                    data:{
                        startTime:this.option.startTime,
                        endTime:this.option.endTime,
                        dataType:"Progress",//是大表还是其他的详情啥的
                        pluginCard:this.item.pluginCard,
                        // startTime:"2019-08-01",
                        // endTime:'2019-09-30',
                        pluginId:this.item.pluginId,
                        detailsStatus:0
                    }                      
                }).then((data) => { 
                    for(let i in this.list){
                      this.list[i].num=data[this.list[i].idRate]
                      this.list[i].data=data.allSaleProgressModel[this.list[i].id]
                    }
                    console.log(22222222,this.list)
                }).catch(() => {
                    
                })
        }else if(this.item.pluginCard=="wareProgress"){//仓库分析
            this.list=[
              {id:"salePrice",idRate:"salePriceRate",name:"采购量_件",data:"",num:""},
              {id:"orderNum",idRate:"orderNumRate",name:"出库量_件",data:"",num:""},
              {id:"newUserNum",idRate:"newUserNumRate",name:"存量_件",data:"",num:""}
            ]
            this.api({//1.图表类型 2.数据分析的类型 3.其他参数(比如日期等等)   ----------从父页面传递过来
                    url: "/data/dataDetails",
                    method: "post",
                    data:{
                        startTime:this.option.startTime,
                        endTime:this.option.endTime,
                        dataType:"Progress",//是大表还是其他的详情啥的
                        pluginCard:this.item.pluginCard,
                        // startTime:"2019-08-01",
                        // endTime:'2019-09-30',
                        pluginId:this.item.pluginId,
                        detailsStatus:0
                    }                      
                }).then((data) => { 
                    for(let i in this.list){
                      this.list[i].num=data[this.list[i].idRate]
                      this.list[i].data=data.allSaleProgressModel[this.list[i].id]
                    }
                    console.log(22222222,this.list)
                }).catch(() => {
                    
                })
        }
      }
    },
  }
</script>
