<style lang='scss' scoped>
    #mapDataScreen{
      width: 100vw;height: 93.5vh;background:#000000;min-width:1260px;position:relative;
      .map{width: 100%;height:100%;z-index: 100;
        .magnify{
              width: 1.5vw;
              height: 1.5vw;
              position: absolute;
              left: 10px;
              top: 10px;
              z-index: 10;
              background-image: url('../../assets/screen/reduce.png');
              background-size: 100% 100%;
              cursor: pointer;
              }
        .magnify1{
              background-image: url('../../assets/screen/new.png');
              left: 3vw;
              width: 1.4vw;
              height: 1.4vw;
              }
        .machine{
              width: 23%;
              height: 90vh;
              position: absolute;
              left: 0.8333vw;
              top: 50%;
              transform: translateY(-50%);
              background: rgba(0, 0, 0, 0.5);
              border-radius: 0.83333vw;
              .dateRange{
                  position: absolute;
                  top: 1.04vw;
                  right: 1.25vw;
              }
              .title{font-size: 0.83333vw;color: #fff;padding-left: 1.04vw;padding-top: 1.04vw;margin-bottom: 1vw;}
              .table{
                width: 100%;height: 90%;color:#fff;
                img{width:12px;height: 12px;cursor:pointer}
                .thead{
                width: 100%;font-size: 0.83333vw;
                .tr{width: 30%;text-align: center;}
                .first{width: 10%;}
                }
                .tbody{
                height:90%;
                overflow: auto;}
                .line{width: 100%;height: 2px;background-image: url("../../assets/screen/line1.png");background-size: 100% 100%;margin: 1.4vh 0;}
                .th{
                width: 100%;font-size: 0.73vw;
                .tr{position:relative;width: 30%;text-align: center;margin-bottom: 1.5vh;img{width:1.04vw;height: 1.04vw;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);}}
                .first{width: 10%;}
                }
                }
        }
        .machineInfo.show{
          opacity: 1;
          transition-duration: 1;
        }
        .machineInfo.hide{
          display: none;
        }
        .machineInfo{
              width: 23%;
              height: 53vh;
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%,-50%);
              background: rgba(0, 0, 0, 0.5);
              border-radius: 0.83333vw;
              span{color: #ffc100;}
              .chart{
                width: 100%;
                height: 40%;
              }
              .dateRange{
                  position: absolute;
                  top: 1.04vw;
                  right: 1.25vw;
              }
              .title{font-size: 0.83333vw;color: #fff;padding-left: 1.04vw;padding-top: 1.04vw;margin-bottom: 1vw;}
              .info{
                font-size: 0.83333vw;
                padding: 1.04vw;
                padding-top: 0;
                color: #ffffff;
                .line{margin-bottom: 1.04vw;}
              }
              .close{font-size: 0.83333vw;color: #ffffff;float: right;padding-right: 1.04vw;padding-top: 1.04vw;cursor:pointer}
              .table{
                width: 100%;height: 90%;color:#fff;
                img{width:12px;height: 12px;cursor:pointer}
                .thead{
                width: 100%;font-size: 0.83333vw;
                .tr{width: 30%;text-align: center;}
                .first{width: 10%;}
                }
                .tbody{
                height:90%;
                overflow: auto;}
                .line{width: 100%;height: 2px;background-image: url("../../assets/screen/line1.png");background-size: 100% 100%;margin: 1.4vh 0;}
                .th{
                width: 100%;font-size: 0.73vw;
                .tr{position:relative;width: 30%;text-align: center;margin-bottom: 1.5vh;img{width:1.04vw;height: 1.04vw;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);}}
                .first{width: 10%;}
                }
                }
        }
        .sku{
              width: 23%;
              height: 57vh;
              position: absolute;
              right: 0.8333vw;
              top: 37%;
              background: rgba(0, 0, 0, 0.5);
              border-radius: 0.83333vw;
              .dateRange{
                  position: absolute;
                  top: 1.04vw;
                  right: 1.25vw;
              }
              .title{font-size: 0.83333vw;color: #fff;padding-left: 1.04vw;padding-top: 1.04vw;margin-bottom: 1vw;}
              .table{
                width: 100%;height: 90%;color:#fff;
                img{width:12px;height: 12px;cursor:pointer}
                .thead{
                width: 100%;font-size: 0.83333vw;
                .tr{width: 30%;text-align: center;}
                .first{width: 10%;}
                }
                .tbody{
                height:84%;
                overflow: auto;}
                .line{width: 100%;height: 2px;background-image: url("../../assets/screen/line1.png");background-size: 100% 100%;margin: 1.4vh 0;}
                .th{
                width: 100%;font-size: 0.73vw;
                .tr{position:relative;width: 30%;text-align: center;margin-bottom: 1.5vh;img{width:1.04vw;height: 1.04vw;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);}}
                .first{width: 10%;}
                }
                }
        }
        .allMapData{
              color: #ffffff;
              position: absolute;
              right: 0.83333vw;
              background: rgba(0, 0, 0, 0.5);
              border-radius: 0.83333vw;
              top: 2%;
              width: 23%;
              height: 32vh;
              z-index: 10;
              div{margin-bottom: 4vh;}
              font-size: 0.83333vw;
              font-weight: 400;
              span{color: #96FF00;}
            }
      }}

      .blank{color: #fff;text-align: center;margin-top:6vh;font-size: 0.73vw;}
      .justify-center{justify-content: center;}
// 修改滚动条样式
div::-webkit-scrollbar-track{
    background: rgba(0,0,0,0.3);
    border-radius:5px;
  }
  div::-webkit-scrollbar-thumb{
    background:rgba(0,0,0,0.3)!important;
  }
  div::-webkit-scrollbar-thumb:hover{
    background: rgba(0,0,0,0.3)!important;
  }
  div::-webkit-scrollbar-corner{
    background: rgba(0,0,0,0.3)!important;
  }
  // 修改滚动条样式
</style>
<style>
  #mapDataScreen .el-radio-button__inner{
      padding: 0.3vw 0.5vw;
      font-size: 0.8333vw;
  }
  #mapDataScreen .el-radio-button__orig-radio:checked+.el-radio-button__inner{background-color: rgba(0, 0, 0, 0.5);border-color: #ffffff;color: #ffffff;box-shadow: 0 0 0 0;}
   #mapDataScreen .el-radio-button__inner{background-color: rgba(0, 0, 0, 0.5);color: #ffffff;border-color: #bcb4b4;color:  #bcb4b4;}
  #mapDataScreen  .allMapData.dv-border-box-1 .border-box-content{padding: 6%;}
  #mapDataScreen  .map-location .el-input__inner{background: transparent;border:0;padding: 20px;color: #ffffff;width: 250px;}
</style>
<template>
  <div id="mapDataScreen">
    <div class="map">
      <!-- <div class="magnify magnify1" @click="$refs.mychild.reflash()"></div> -->
      <map-chart @showDetails='showDetails' zoom=6 needLogin=2 :location="location" ref="mychild"></map-chart>
       <dv-border-Box-1 class="machine">
          <div class="title">设备热销排行</div>
          <div class="dateRange">
              <el-radio-group v-model="dayNum" @change="getMachineHot()">
                <el-radio-button label="1">今日</el-radio-button>
                <el-radio-button label="7">近7天</el-radio-button>
                <el-radio-button label="30">近30天</el-radio-button>
            </el-radio-group>
          </div>
          <div class="map-location">
            <el-cascader :options="options" :props="{ checkStrictly: true }" v-model="cascader" @change="handleAreaChange" class="flex-2" placeholder="地区" clearable></el-cascader>
          </div>
          <div class="table">
            <div class="thead flex-center-Y">
              <div class="tr first"></div>
              <div class="tr">设备类型</div>
              <div class="tr flex-center-Y justify-center">
                  销量（件）
                  <div>
                    <div style="height:12px" @click="orderNum='0';orderType='asce';getMachineHot()"><img v-if="orderType=='asce' && orderNum=='0'" src="../../assets/screen/asce.png" alt=""><img v-else src="../../assets/screen/asce-1.png" alt=""></div>
                    <div style="height:12px" @click="orderNum='0';orderType='desc';getMachineHot()"><img v-if="orderType=='desc' && orderNum=='0'" src="../../assets/screen/desc.png" alt=""><img v-else src="../../assets/screen/desc-1.png" alt=""></div>
                  </div>
              </div>
              <div class="tr flex-center-Y justify-center">
                  利润（元）
                  <div>
                    <div style="height:12px" @click="orderNum='1';orderType='asce';getMachineHot()"><img v-if="orderType=='asce' && orderNum=='1'" src="../../assets/screen/asce.png" alt=""><img v-else src="../../assets/screen/asce-1.png" alt=""></div>
                    <div style="height:12px" @click="orderNum='1';orderType='desc';getMachineHot()"><img v-if="orderType=='desc' && orderNum=='1'" src="../../assets/screen/desc.png" alt=""><img v-else src="../../assets/screen/desc-1.png" alt=""></div>
                  </div>
              </div>
            </div>
            <div class="line"></div>
            <div class="tbody" v-show="machineData.length>0">
                <div v-for="(item,i) in machineData" :key="i" class="th flex-center-Y">
                <div class="tr first">
                    <img v-show="i=='0'" src="../../assets/screen/first.png" alt="">
                    <img v-show="i=='1'" src="../../assets/screen/second.png" alt="">
                    <img v-show="i=='2'" src="../../assets/screen/third.png" alt="">
                </div>
                <el-tooltip effect="dark" :content="item.typeName" placement="right"><div class="tr limit pointer"  @click="changeLocation(item)">{{item.typeName}}</div></el-tooltip>
                <div class="tr">{{item.totalNum}}</div>
                <div class="tr">{{item.totalProfit}}</div>
                </div>
            </div>
          <div class="blank" v-show="machineData.length==0">暂无数据</div>
          </div>
       </dv-border-Box-1>
       <dv-border-Box-1 :class="showInfo?'show machineInfo':'hide machineInfo'">
         <div class="close" @click="showInfo=false"><i class="el-icon-close"></i></div>
         <div class="title">{{vendInfo.typeName}}</div>
         <div class="info">
           <div class="line">运营商：<span>{{todayInfo.operatorName}}</span></div>
          <div class="line">激活时间：<span>{{vendInfo.gmtActivated}}</span></div>
          <div class="line">激活地址：<span>{{todayInfo.address}}</span></div>
          <div class="line">当前地址：
                    <span>{{todayInfo.locationAddress}}</span>
          </div>
          <div class="line">设备状态：<span>{{todayInfo.isOnline=='1'?'在线':'离线'}}</span></div>
          <div class="line">售货机锁：
                    <span v-if="todayInfo.isOpen==1">打开</span>
                    <span v-if="todayInfo.isOpen==0">关闭</span>
                    <span v-if="todayInfo.isOpen==2">未知</span>
          </div>
          <div class="line">货量：<span>{{todayInfo.isRepaire=='1'?'需补货':'货量充足'}}</span></div>
          <div class="line">今日销量：<span>{{todayInfo.todayNum}}件</span></div>
          <div class="line">今日利润：<span>{{todayInfo.todayProfit}}元</span></div>
          <div class="line">累计销售量：<span>{{vendInfo.totalNum}}件</span></div>
          <div class="line">累计利润额：<span>{{vendInfo.totalProfit}}元</span></div>
          <!-- <div class="line">月销售柱状图：</div> -->
         </div>
          <div class="chart"><circle-chart :option='saleNumData' v-if="saleProfitsLoading"></circle-chart></div>
       </dv-border-Box-1>
       <dv-border-Box-1 class="allMapData">
          <div class="flex-center-Y justify-between">
            设备总数：<span>{{mapData.vendNum}}台</span>
          </div>
          <div class="flex-center-Y justify-between">
            点位总数：<span>{{mapData.storeNum}}个</span>
          </div>
          <div class="flex-center-Y justify-between">
            覆盖省份：<span>{{mapData.shengNum}}个</span>
          </div>
          <div class="flex-center-Y justify-between">
            覆盖城市：<span>{{mapData.shiNum}}个</span>
          </div>
          <div class="flex-center-Y justify-between">
            覆盖区：<span>{{mapData.quNum}}个</span>
          </div>
        </dv-border-Box-1>
       <dv-border-Box-1 class="sku">
          <div class="title">商品热销排行</div>
          <div class="dateRange">
              <el-radio-group v-model="dayNum1" @change="getSkuHot()">
                <el-radio-button label="1">今日</el-radio-button>
                <el-radio-button label="7">近7天</el-radio-button>
                <el-radio-button label="30">近30天</el-radio-button>
            </el-radio-group>
          </div>
          <div class="table">
            <div class="thead flex-center-Y">
              <div class="tr first"></div>
              <div class="tr">sku名称</div>
              <div class="tr flex-center-Y justify-center">
                  销量（件）
                  <div>
                    <div style="height:12px" @click="orderNum1='0';orderType1='asce';getSkuHot()"><img v-if="orderType1=='asce' && orderNum1=='0'" src="../../assets/screen/asce.png" alt=""><img v-else src="../../assets/screen/asce-1.png" alt=""></div>
                    <div style="height:12px" @click="orderNum1='0';orderType1='desc';getSkuHot()"><img v-if="orderType1=='desc' && orderNum1=='0'" src="../../assets/screen/desc.png" alt=""><img v-else src="../../assets/screen/desc-1.png" alt=""></div>
                  </div>
              </div>
              <div class="tr flex-center-Y justify-center">
                  利润（元）
                  <div>
                    <div style="height:12px" @click="orderNum1='1';orderType1='asce';getSkuHot()"><img v-if="orderType1=='asce' && orderNum1=='1'" src="../../assets/screen/asce.png" alt=""><img v-else src="../../assets/screen/asce-1.png" alt=""></div>
                    <div style="height:12px" @click="orderNum1='1';orderType1='desc';getSkuHot()"><img v-if="orderType1=='desc' && orderNum1=='1'" src="../../assets/screen/desc.png" alt=""><img v-else src="../../assets/screen/desc-1.png" alt=""></div>
                  </div>
              </div>
            </div>
            <div class="line"></div>
            <div class="tbody" v-show="skuData.length>0">
                <div v-for="(item,i) in skuData" :key="i" class="th flex-center-Y">
                <div class="tr first">
                    <img v-show="i=='0'" src="../../assets/screen/first.png" alt="">
                    <img v-show="i=='1'" src="../../assets/screen/second.png" alt="">
                    <img v-show="i=='2'" src="../../assets/screen/third.png" alt="">
                </div>
                <div class="tr limit">{{item.skuName}}</div>
                <div class="tr">{{item.totalNum}}</div>
                <div class="tr">{{item.totalProfit}}</div>
                </div>
            </div>
          <div class="blank" v-show="skuData.length==0">暂无数据</div>
          </div>
       </dv-border-Box-1>
    </div>
  </div>
</template>

<script>
import MapChart from '../charts/map-chart'
import CircleChart from '../charts/circle-chart'
import {regionData ,CodeToText} from 'element-china-area-data';
  export default {
    components: {
      MapChart,
      CircleChart
    },
    data () {
      return {
          location:{
            Lng:104.114129,
            Lat:37.550339,
            machineCode:""
          },
          options: regionData,
          cascader:[],
          dayNum:"1",
          dayNum1:"1",
          orderNum:"0",
          orderNum1:"0",
          orderType:"desc",
          orderType1:"desc",
          machineData:[
            ],
          skuData:[
            ], 
          mapData:"",
          showInfo:false,
          saleNumData:{
            tooltip: {
                trigger: 'item',
                show:true
            },
            grid: {  
                      left: '3%',  //边缘区域大小
                      right: '3%',  
                      top:'25%',
                      bottom: '0',  
                      containLabel: true,
                      show:true,  
                      borderColor:"#1597bd",
                      borderWidth:'0'
                  }, 
            color: [ 'rgba(0, 212, 255, 1)','rgba(253, 0, 255, 1)',],
            xAxis: {
                type: 'category',
                show:true,
                splitLine:{//去掉网格线
                    　　　　show:false
                    　　},
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                boundaryGap : true,//x轴是否从o刻度开始
                axisLine: {//坐标轴
                          lineStyle: {
                              color: "#09495c",
                          }
                        },
                axisLabel: {//坐标轴文字
                            show: true,
                            textStyle: {
                                color: '#ffffff'
                            }
                        }
                
            },
            yAxis: [
                    {
                        type: 'value',
                        name: '(元)',
                        nameTextStyle:{
                          color:'#fff',
                          padding:[0,30,0,0]
                        },
                        splitLine:{//网格线
                    　　　　show:false
                    　　},
                        axisLine: {//坐标轴
                          lineStyle: {
                              color: "#09495c",
                          },
                        },
                        axisLabel: {//坐标轴文字
                            show: true,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    {
                        type: 'value',
                        name: '(元)',
                        nameTextStyle:{
                          color:'#fff',
                          padding:[0,0,0,30]
                        },
                        splitLine:{//网格线
                    　　　　show:false
                    　　},
                        axisLine: {
                              lineStyle: {
                                  color: "#09495c",
                              },
                            },
                        axisLabel: {//坐标轴文字
                            show: true,
                            textStyle: {
                                color: '#fff'
                            }
                        }

                    
                    }
                  ],
            series: [
                {//销售额
                    data: [100, 200, 400, 300, 500, 800, 100],
                    type: 'bar',
                    name:'销售额',
                    yAxisIndex: 1
                },
                {//利润额
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'bar',
                    name:'利润额',
                    yAxisIndex: 0
                }
                
            ]
        },
          saleProfitsLoading:false,
          saleProfitsData:{
            profitRate:"",
            saleRate:""
          },
          vendInfo:"",
          todayInfo:""
      }
    },
    created(){
      document.getElementsByTagName("body")[0].style.minWidth="1260px";
      document.getElementsByTagName("body")[0].style.overflowX="auto";
      document.getElementsByTagName("body")[0].style.overflowY="hidden";
    },
    mounted(){
      this.getMapData()
      this.getMachineHot()
      this.getSkuHot()
    },
    methods:{
      changeLocation(item){//点击将地图的中心点定位到该机器的位置
        this.showInfo=false
        this.location.Lng=Number(item.Lng)+0.0065
        this.location.Lat=Number(item.Lat)+0.0065
        this.location.machineCode=item.machineCode
      },
      //显示各个设备的具体信息
      showDetails(value){
        this.showInfo=true
        this.saleProfitsLoading=false
        this.api({
              url: "/pointMap/vendInfo",
              method: "post",
              data:{
                machineCode:value
                }                      
          }).then((data) => {  
              this.vendInfo=data.vendInfo
              this.todayInfo=data.todayInfo
              // this.saleProfitsData.profitRate=Number(data.profitRate.split('%')[0])
              // this.saleProfitsData.saleRate=Number(data.saleRate.split('%')[0])
              // let legend=[]
              // let sale=[]
              // let profits=[]
              // if(data.saleProfitsList.length>0){
              // data.saleProfitsList.forEach((item,index,array)=>{
              //     legend.push(item.gmtDay)
              //     sale.push(item.salePrice)
              //     profits.push(item.profits)
              // })
              // this.saleNumData.xAxis.data=legend
              // this.saleNumData.series[0].data=sale
              // this.saleNumData.series[1].data=profits
              // this.saleProfitsLoading=true
              // }
          }).catch(() => {
              
          })
      },
      handleAreaChange(value){
            if(value.length == 1){
                this.sheng = value[0]
                this.shi = null
                this.qu = null
            }else if(value.length == 2){
                this.sheng = value[0]
                this.shi = value[1]
                this.qu = null
            }else{
                this.sheng = value[0]
                this.shi = value[1]
                this.qu = value[2]
            }
            this.shengName = CodeToText[this.sheng]
            this.shiName = CodeToText[this.shi]
            this.quName = CodeToText[this.qu]
            this.getMachineHot()
        },
      getMapData(){
        this.api({
              url: "/pointMap/numShow",
              method: "post",
              data:{}                      
          }).then((data) => {  
            this.mapData=data
          }).catch(() => {
              
          })
      },
      getMachineHot(){//热门设备
        this.api({
              url: "/pointMap/vendList",
              method: "post",
              data:{
                  dayNum:this.dayNum,
                  orderType:this.orderType,
                  orderNum:this.orderNum,
                  sheng:this.sheng,
                  shi:this.shi,
                  qu:this.qu
                  }                  
          }).then((data) => {  
              this.machineData=data
          }).catch(() => {
              
          })
      },
      getSkuHot(){//热门商品
        this.api({
              url: "/pointMap/skuList",
              method: "post",
              data:{
                  dayNum:this.dayNum1,
                  orderType:this.orderType1,
                  orderNum:this.orderNum1,
                  sheng:this.sheng,
                  shi:this.shi,
                  qu:this.qu
                  }                  
          }).then((data) => {  
              this.skuData=data
          }).catch(() => {
              
          })
      }
    }
  }
</script>
