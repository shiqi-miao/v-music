<style lang='scss' scoped>
@font-face{
  font-family: screenFont;
  src: url(../../assets/font/Alibaba-PuHuiTi-Medium.otf);
}
.screenFont{font-family:screenFont}
    #dataScreen{
      width: 100vw;height: 100vh;background:#000000;min-width:1260px;position:relative;
      .dateRange{position: absolute;top: 55px;left:20px;color: #ffffff;z-index:102;cursor:pointer;
        img{width:22px;height: 22px;margin-left: 5px;}
        .pover{position: absolute;left: 50%;top: 2px;div{margin-bottom:4px}}
      }
      .mask{position: absolute;left: 0;top: 0;width: 100%;height:100%;z-index: 101;}
      .map{position: absolute;left: 50%;transform:translate(-50%,-50%);top: 50%;width: 100%;height:100%;z-index: 100;
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
      }
      .top{
        width: 100%;height: 10vh;position: relative;
        background-image: url("../../assets/screen/top.png");
        background-size: 100% 100%;
        .title{
          font-size: 1.875vw;
          font-weight: 500;
          color: #fff;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
        }
        .navigation{width: 24px;height: 20px;img{width: 100%;};position: absolute;top: 1.85vh;left: 1.6vw;cursor: pointer;}
        .time{position: absolute;top: 1.85vh;right: 1.6vw;font-size: 1.04vw;color: #fff;}
        .hover{width: 100%;height: 30%;position: absolute;top: 0;left: 0;z-index: 99;}
      }
      .bottom{
        width: 100%;height: 90vh;padding: 1vw;padding-top: 0;
        .left{
          width:26%;height: 100%;
          .box{
            width: 100%;height: 33.33333%;
            // background-image: url("../../assets/screen/box.png");background-size: 100% 100%;
            .saleNumChart{
              .up{color:rgba(255, 27, 27, 1)!important;}
              .down{color:rgba(27, 255, 33, 1)!important;}
              width: 100%;height:82%;
              .name{
                padding-left: 1.04vw;
                padding-top: 0.8vw;
                color: #fff;
                font-size: 0.73vw;
                line-height:1;
                img{width: 0.8333vw;height: 0.47vw;margin-right: 0.2vw;margin-left: 0.25vw;}
                .div1{width: 0.73vw;height: 0.73vw;background: rgba(0, 212, 255, 1);margin-right: 0.25vw;}
                .div2{width: 0.73vw;height: 0.73vw;background: rgba(253, 0, 255, 1);margin-right: 0.25vw;margin-left: 0.75vw;}
                .title{font-size: 0.83333vw;color: #fff;margin-right: 0.5vw;}
                span{
                  font-size:0.625vw;
                  line-height: 1;
                  color:rgba(255, 27, 27, 1);
                }
              }
            }
          }
        }
        .center{
          width:48.5%;height: 100%;margin:0 0.8VW;
          .center-top{
            width: 100%;height: 32.6%;
            .overView{
              width:100%;height: 50%;color:#fff;font-size:0.9375vw;
              .box{width:50%;height:100%;padding: 1.3vw;
                .num{font-size: 2.6vw;font-weight: 600;color: #ffffff;line-height:0.8;font-family:screenFont}
                .num1{font-size: 0.73vw;color: #FF1B1B;line-height:0.8;}
                .num2{font-size: 0.73vw;color: #00ff00;line-height:0.8;}
                .info{margin-top: 2.6vh;}
                img{width: 0.8333vw;height: 0.47vw;margin:0 5px 0px 10px;}

              }
              }
            .line{width: 100%;height: 2px;background-image: url("../../assets/screen/line.png");background-size: 100% 100%;}
            .acturl{
              width:100%;height: 50%;padding: 1.3vw;color:#fff;
              .title{font-size: 0.9375vw;font-weight: 500;margin-bottom: 1.04vh;}
              .detail{font-size: 0.73vw;margin-bottom: 0.8vh;margin-left: 4.44%;}
              }
            }
          .center-center{
            width: 100%;height: 41.2%;background-size: 100% 100%;font-size: 0.9375vw;color: #fff;position:relative;
            .allMapData{
              position: absolute;
              left: 0;
              bottom: 0;
              width: 25%;
              height: 38%;
              // background-image: url("../../assets/screen/box-small.png");background-size: 100% 100%;
              z-index: 10;
              div{margin-bottom: 10%;}
              font-size: 12px;
              font-weight: 400;
              span{color: #96FF00;}
            }
            .storeChart{
                width: 100%;
                height: 90%;
              }
            .magnify{
              width: 1.5vw;
              height: 1.5vw;
              position: absolute;
              left: 10px;
              top: 10px;
              z-index: 10;
              background-image: url('../../assets/screen/magnify.png');
              background-size: 100% 100%;
              cursor: pointer;
              }
            .center-center-right{
              position: absolute;
              right: 0;
              bottom: 0;
              width: 25%;
              height: 63%;
              // background-image: url("../../assets/screen/box-middle.png");background-size: 100% 100%;
              z-index: 10;
              padding: 2%;
              .title{
                font-size: 14px;
              }
            }              
            }
          .center-bottom{
            width: 100%;height: 24.8%;
            .bottom-left,.bottom-right{
              width: 49%;height: 100%;
              // background-image: url("../../assets/screen/box.png");background-size: 100% 100%;
              .title{font-size: 0.83333vw;color: #fff;padding-left: 1.04vw;padding-top: 0.8vw;margin-bottom: 0.8vw;}
              .machine{
                width: 33.333%;
                text-align: center;
                img{width: 46.6%;}
                div{font-size: 1.25vw;color: #fff;margin:0.5vh 0}
                .name{font-size: 0.73vw;color: #fff;margin:0.5vh 0}
                }
              .payChart{
                width: 100%;
                height: 74%;
              }
              }
            }
          }
        .right{
          width:25%;height: 100%;
          .machine{
                width: 25%;
                text-align: center;
                img{width: 59%;}
                div{font-size: 1.25vw;color: #fff;margin:0.5vh 0}
                .name{font-size: 0.73vw;color: #fff;margin:0.5vh 0}
                }
          .title{font-size: 0.83333vw;color: #fff;padding-left: 1.04vw;padding-top: 0.8vw;margin-bottom: 0.8vw;}
          .box{
            width: 100%;height: 24.8%;
            // background-image: url("../../assets/screen/box.png");background-size: 100% 100%;
          }
        }
        }
      }
      .table{
        width: 100%;height: 80%;color:#fff;
        .thead{
          width: 100%;font-size: 0.83333vw;
          .tr{width: 30%;text-align: center;}
          .first{width: 10%;}
          }
        .line{width: 100%;height: 2px;background-image: url("../../assets/screen/line1.png");background-size: 100% 100%;margin: 1.4vh 0;}
        .th{
          width: 100%;font-size: 0.73vw;
          .tr{position:relative;width: 30%;text-align: center;margin-bottom: 1.5vh;img{width:1.04vw;height: 1.04vw;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);}}
          .first{width: 10%;}
        }
        }
      .mb-2{margin-bottom: 0.8vw;}
      .mb-5{margin-bottom: 0.5vw;}
      .mb-20{margin-bottom: 1.04vw;}
      .mr-2{margin-right: 1.04vw;}
      .p-20{padding: 0.8vw;}
      .blank{color: #fff;text-align: center;margin-top:6vh;font-size: 0.73vw;}
      .bold{font-weight: 600;}
      .green{color: rgba(0, 255, 237, 1);}
      .yellow{color: rgba(255, 202, 0, 1);}
</style>
<style>
    .allMapData.dv-border-box-1 .border-box-content,.center-center-right.dv-border-box-1 .border-box-content{padding: 9%;}
    .center-center.dv-border-box-1 .border-box-content{padding: 3%;}
</style>
<template>
  <div id="dataScreen">
    <!-- <div class="map" v-show="showMap">
      <div class="magnify" @click="showMap=false"></div>
      <div class="magnify magnify1" @click="$refs.mychild.reflash()"></div>
      <map-chart zoom=5 ref="mychild"></map-chart>
    </div> -->
    <div class="mask" v-if="showpover" @click="showpover=false"></div>
    <div class="dateRange flex-center-Y">
      统计日期： 
      <div style="width:50px" v-if="dayNum=='7'" @click="showpover=!showpover"><span v-if="!showpover">近7天</span></div>
      <div style="width:50px" v-if="dayNum=='30'" @click="showpover=!showpover"><span v-if="!showpover">近30天</span></div>
      <div class="pover" v-if="showpover">
        <div @click="dayNum='7';showpover=!showpover;reflash()">近7天</div>
        <div @click="dayNum='30';showpover=!showpover;reflash()">近30天</div>
      </div>
      <img src="../../assets/screen/bottom.png" alt="" @click="showpover=!showpover">
    </div>
    <div class="top">
      <div class="hover" @mouseenter="showNav=true"></div>
      <div class="navigation" @mouseenter="showNav=true">
        <img src="../../assets/screen/navigation.png" alt="">
      </div>
      <div class="title">光芽新零售数据运营大屏</div>
      <div class="time">{{nowDateTime}}</div>
    </div>
    <div class="bottom flex-center-Y">
      <div class="left">
        <dv-border-Box-1 class="box mb-5">
          <div class="saleNumChart">
              <div class="name flex-center-Y">
                  <span class="title" v-if="dayNum=='30'">近30天</span>
                  <span class="title" v-else>近7天</span>
                  <div class="div1"></div>
                   销售额
                  <!-- <img v-if="saleProfitsData.saleRate>0" src="../../assets/screen/up.png" alt="">
                  <img v-else src="../../assets/screen/down.png" alt="">
                  <span :class="saleProfitsData.saleRate>0?'up':'down'">{{saleProfitsData.saleRate || 0}}%</span> -->
                  <div class="div2 up"></div>
                   利润额
                  <!-- <img v-if="saleProfitsData.profitRate>0" src="../../assets/screen/up.png" alt="">
                  <img v-else src="../../assets/screen/down.png" alt="">
                  <span :class="saleProfitsData.profitRate>0?'up':'down'">{{saleProfitsData.profitRate || 0}}%</span> -->
              </div>
              <circle-chart :option='saleNumData' v-if="saleProfitsLoading"></circle-chart>
              <div v-else class="blank">暂无数据</div>
          </div>
        </dv-border-Box-1>
        <dv-border-Box-1 class="box mb-5">
          <div class="saleNumChart">
              <div class="name flex-center-Y">
                  <span class="title" v-if="dayNum=='30'">近30天</span>
                  <span class="title" v-else>近7天</span>
                  <div class="div1"></div>
                   订单量
                  <!-- <img v-if="orderSaleNumData.orderRate>0" src="../../assets/screen/up.png" alt="">
                  <img v-else src="../../assets/screen/down.png" alt="">
                  <span :class="orderSaleNumData.orderRate>0?'up':'down'">{{orderSaleNumData.orderRate || 0}}%</span> -->
                  <div class="div2 up"></div>
                   销售量
                  <!-- <img v-if="orderSaleNumData.saleRate>0" src="../../assets/screen/up.png" alt="">
                  <img v-else src="../../assets/screen/down.png" alt="">
                  <span :class="orderSaleNumData.saleRate>0?'up':'down'">{{orderSaleNumData.saleRate || 0}}%</span> -->
              </div>
              <circle-chart :option='orderSaleData' v-if="orderSaleNumLoading"></circle-chart>
              <div v-else class="blank">暂无数据</div>
          </div>
        </dv-border-Box-1>
        <!-- <dv-border-Box-1 class="box mb-5">
          <div class="saleNumChart">
              <div class="name flex-center-Y">
                  <span class="title">近30天</span>
                  <div class="div1"></div>
                   新增用户
                  <img v-if="UserData.userRate>0" src="../../assets/screen/up.png" alt="">
                  <img v-else src="../../assets/screen/down.png" alt="">
                  <span :class="UserData.userRate>0?'up':'down'">{{UserData.userRate || 0}}%</span>
              </div>
              <circle-chart :option='newUserData' v-if="newUserLoading"></circle-chart>
              <div v-else class="blank">暂无数据</div>
          </div>
        </dv-border-Box-1> -->
        <dv-border-Box-1 class="box">
          <div class="saleNumChart">
              <div class="name flex-center-Y">
                  <span class="title" v-if="dayNum=='30'">近30天</span>
                  <span class="title" v-else>近7天</span>
                  <div class="div1"></div>
                   复购量
                  <!-- <img v-if="repurchaseData.buyRate>0" src="../../assets/screen/up.png" alt="">
                  <img v-else src="../../assets/screen/down.png" alt="">
                  <span :class="repurchaseData.buyRate>0?'up':'down'">{{repurchaseData.buyRate || 0}}%</span> -->
                  <div class="div2 up"></div>
                   复购率
                  <!-- <img v-if="repurchaseData.sendBuyRate>0" src="../../assets/screen/up.png" alt="">
                  <img v-else src="../../assets/screen/down.png" alt="">
                  <span :class="repurchaseData.sendBuyRate>0?'up':'down'">{{repurchaseData.sendBuyRate || 0}}%</span> -->
              </div>
              <circle-chart :option='sendBuyData' v-if="sendBuyLoading"></circle-chart>
              <div v-else class="blank">暂无数据</div>
          </div>
        </dv-border-Box-1>
      </div>
      <div class="center">
        <div class="center-top mb-2">
          <div class="overView flex-center-Y">
            <div class="box">
              <div class="flex-center-E">
                总销售额：<span class="num">{{allSale.allSalePrice || 0}}</span>
              </div>
              <!-- <div class="flex-center-Y info">
                今日新增：{{allSale.todaySalePrice || 0}}元<img v-if="Number(allSale.saleRate.split('%')[0])>0" src="../../assets/screen/up.png" alt=""><img v-else src="../../assets/screen/up.png" alt=""><span :class="Number(allSale.saleRate.split('%')[0])>=0?'num1':'num2'">{{allSale.saleRate || 0}}</span>
              </div> -->
            </div>
            <div class="box">
              <div class="flex-center-E">
                总销售量：<span class="num">{{allSale.allSaleNum || 0}}</span>
              </div>
              <!-- <div class="flex-center-Y info">
                今日新增：{{allSale.todaySaleNum || 0}}件<img v-if="Number(allSale.numRate.split('%')[0])>0" src="../../assets/screen/up.png" alt=""><img v-else src="../../assets/screen/up.png" alt=""><span :class="Number(allSale.saleRate.split('%')[0])>=0?'num1':'num2'">{{allSale.numRate || 0}}</span>
              </div> -->
            </div>
          </div>
          <div class="line"></div>
          <div class="acturl">
            <div class="title">实时销售情况</div>
            <div class="detail" v-for="(item,i) in saleTime" :key="i"><span v-if="item.userPhone">尾号{{item.userPhone}}</span><span v-else>某</span>用户于{{item.gmtTime.split(' ')[1]}}在&nbsp;<span>{{item.quName}}</span>&nbsp;&nbsp;<span>{{item.storeName}}</span>&nbsp;门店&nbsp;<span class="green">{{item.machineName}}</span>&nbsp;设备消费&nbsp;<span class="green">{{item.payPrice}}</span>&nbsp;元购买了&nbsp;<span class="limit-ellipsis green" style="width:4.2vw;display:inline-block;line-height: 1;">{{item.skuName}}</span></div>
          </div>
        </div>
        <dv-border-Box-1 class="center-center mb-2">
          <div class="title mb-2" v-if="dayNum=='30'">点位销售情况 (近30天)</div>
          <div class="title mb-2" v-else>点位销售情况 (近7天)</div>
          <div class="storeChart">
              <circle-chart :option='storeData' v-if="storeHotLoading"></circle-chart>
              <div v-else class="blank">暂无数据</div>
            </div>
        </dv-border-Box-1>
        <!-- <dv-border-Box-1 class="allMapData">
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
        <dv-border-Box-1 class="center-center-right">
          <div class="storeChart">
              <div class="title mb-2">点位销售情况 (近30天)</div>
              <circle-chart :option='storeData' v-if="storeHotLoading"></circle-chart>
              <div v-else class="blank">暂无数据</div>
            </div>
        </dv-border-Box-1>
        <div class="magnify" @click="showMap=true;$refs.mychild.reflash()"></div>
        <map-chart zoom=4></map-chart> -->
        <div class="center-bottom flex-center-Y">
          <dv-border-Box-1 class="bottom-left mr-2">
            <div class="title mb-2" v-if="dayNum=='30'">支付方式占比 (近30天)</div>
            <div class="title mb-2" v-else>支付方式占比 (近7天)</div>
            <div class="payChart">
              <circle-chart :option='payData' v-if="payTypeLoading"></circle-chart>
              <div v-else class="blank">暂无数据</div>
            </div>
          </dv-border-Box-1>
          <dv-border-Box-1 class="bottom-right">
            <div class="title mb-2">设备情况 (实时)</div>
            <div class="flex-center-Y">
              <div class="machine">
                <img src="../../assets/screen/normal.png" alt="">
                <div>{{machine.status.onlineNum || 0}}</div>
                <div class="name">正常机器（台）</div>
              </div>
              <div class="machine">
                <img src="../../assets/screen/outline.png" alt="">
                <div>{{machine.status.notOnlineNum || 0}}</div>
                <div class="name">掉线机器（台）</div>
              </div>
              <div class="machine">
                <img src="../../assets/screen/error.png" alt="">
                <div>{{machine.status.abnormalNum || 0}}</div>
                <div class="name">故障机器（台）</div>
              </div>
            </div>
          </dv-border-Box-1>
        </div>
      </div>
      <div class="right">
        <dv-border-Box-1 class="box mb-5">
          <div class="title" v-if="dayNum=='30'">设备热销排行 (近30天)</div>
          <div class="title" v-else>设备热销排行 (近7天)</div>
          <div class="table">
            <div class="thead flex-center-Y">
              <div class="tr first"></div>
              <div class="tr">设备类型</div>
              <div class="tr">销量（件）</div>
              <div class="tr">利润（元）</div>
            </div>
            <div class="line"></div>
            <div v-for="(item,i) in machineData" v-show="machineData.length>0" :key="i" class="th flex-center-Y">
              <div class="tr first">
                <img v-show="i=='0'" src="../../assets/screen/first.png" alt="">
                <img v-show="i=='1'" src="../../assets/screen/second.png" alt="">
                <img v-show="i=='2'" src="../../assets/screen/third.png" alt="">
              </div>
              <div class="tr limit">{{item.machineType}}</div>
              <div class="tr">{{item.saleNum}}</div>
              <div class="tr">{{item.profits}}</div>
            </div>
            <div class="blank" v-show="machineData.length==0">暂无数据</div>
          </div>
        </dv-border-Box-1>
        <dv-border-Box-1 class="box mb-5">
          <div class="title" v-if="dayNum=='30'">商品热销排行 (近30天)</div>
          <div class="title" v-else>商品热销排行 (近7天)</div>
          <div class="table">
            <div class="thead flex-center-Y">
              <div class="tr first"></div>
              <div class="tr">商品类型</div>
              <div class="tr">销量（件）</div>
              <div class="tr">利润（元）</div>
            </div>
            <div class="line"></div>
            <div v-for="(item,i) in goodsData" v-show="goodsData.length>0" :key="i" class="th flex-center-Y">
              <div class="tr first">
                <img v-show="i=='0'" src="../../assets/screen/first.png" alt="">
                <img v-show="i=='1'" src="../../assets/screen/second.png" alt="">
                <img v-show="i=='2'" src="../../assets/screen/third.png" alt="">
              </div>
              <div class="tr limit">{{item.goodsType}}</div>
              <div class="tr">{{item.saleNum}}</div>
              <div class="tr">{{item.profits}}</div>
            </div>
            <div class="blank" v-show="goodsData.length==0">暂无数据</div>
          </div>
        </dv-border-Box-1>
        <dv-border-Box-1 class="box mb-5">
          <div class="title" v-if="dayNum=='30'">SKU热销排行 (近30天)</div>
          <div class="title" v-else>SKU热销排行 (近7天)</div>
          <div class="table">
            <div class="thead flex-center-Y">
              <div class="tr first"></div>
              <div class="tr">SKU名称</div>
              <div class="tr">销量（件）</div>
              <div class="tr">利润（元）</div>
            </div>
            <div class="line"></div>
            <div v-for="(item,i) in skuData" :key="i" v-show="skuData.length>0" class="th flex-center-Y">
              <div class="tr first">
                <img v-show="i=='0'" src="../../assets/screen/first.png" alt="">
                <img v-show="i=='1'" src="../../assets/screen/second.png" alt="">
                <img v-show="i=='2'" src="../../assets/screen/third.png" alt="">
              </div>
              <div class="tr limit">{{item.skuName}}</div>
              <div class="tr">{{item.saleNum}}</div>
              <div class="tr">{{item.profits}}</div>
            </div>
            <div class="blank" v-show="goodsData.length==0">暂无数据</div>
          </div>
        </dv-border-Box-1>
        <dv-border-Box-1 class="box">
          <div class="title mb-2">设备种类</div>
          <div class="flex-center-Y">
              <div class="machine">
                <img src="../../assets/screen/machine1.png" alt="">
                <div>{{machine.type[0].machineNum || 0}}</div>
                <div class="name">{{machine.type[0].machineTypeName}}（台）</div>
              </div>
              <div class="machine">
                <img src="../../assets/screen/machine2.png" alt="">
                <div>{{machine.type[1].machineNum || 0}}</div>
                <div class="name">{{machine.type[1].machineTypeName}}（台）</div>
              </div>
              <div class="machine">
                <img src="../../assets/screen/machine4.png" alt="">
                <div>{{machine.type[3].machineNum || 0}}</div>
                <div class="name">{{machine.type[3].machineTypeName}}（台）</div>
              </div>
              <div class="machine">
                <img src="../../assets/screen/machine3.png" alt="">
                <div>{{machine.type[2].machineNum || 0}}</div>
                <div class="name">{{machine.type[2].machineTypeName}}（台）</div>
              </div>
            </div>
        </dv-border-Box-1>
      </div>
    </div>
    <div @mouseleave="showNav=false">
    <sidebar v-show="showNav" class="sidebar-container" :openType='click'></sidebar>
    </div>
  </div>
</template>

<script>
import { Sidebar } from '@/views/layout/components'
import CircleChart from '../charts/circle-chart'
import MapChart from '../charts/map-chart'
import CmapChart from '../charts/cmap-chart'
  export default {
    components: {
      Sidebar,
      CircleChart,
      MapChart,
      CmapChart
    },
    data () {
      return {
        nowDateTime:"",
        dayNum:"30",
        showpover:false,
        // showMap:false,
        click:'click',
        allSale:{
          allSaleNum: "12347",
          allSalePrice: "54534.25",
          numRate: "0%",
          saleRate: "0%",
          time: "2020-05-11 15:36:16",
          todaySaleNum: "0",
          todaySalePrice: "0",
        },
        showNav:false,
        machineData:[
          {type:"格子机",saleNum:"246",profit:"512.54"},
          {type:"弹簧机",saleNum:"246",profit:"512.54"},
          {type:"咖啡机",saleNum:"246",profit:"512.54"}
        ],
        goodsData:[
          {type:"格子机",saleNum:"246",profit:"512.54"},
          {type:"弹簧机",saleNum:"246",profit:"512.54"},
          {type:"咖啡机",saleNum:"246",profit:"512.54"}
        ],
        skuData:[
          {type:"格子机",saleNum:"246",profit:"512.54"},
          {type:"弹簧机",saleNum:"246",profit:"512.54"},
          {type:"咖啡机",saleNum:"246",profit:"512.54"}
        ],
        //支付占比
        payData:{ 
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            color: ['#00D4FF', '#FFCA00', '#96FF00', '#005CFF','#FD00FF'],
            legend: {
                orient: 'vertical',
                left: '45%',
                top:'0%',
                data: ['支付宝', '微信', '银联', '充值卡'],
                textStyle:{
                    color:'#ffffff',
                    fontSize:14
                },
                // formatter:function (name) {//?为什么不行????
                //         console.log(this.payData)
                //     },
                formatter:(name) =>  {//必须使用箭头函数!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                      for (let i in this.payData.series[0].data) {
                          if (this.payData.series[0].data[i].name == name) {
                              return name +": "+ this.payData.series[0].data[i].value+' ('+this.payData.series[0].data[i].num+')';
                          }
                      }
                    },
            },
            series: [
                {
                    name: '支付占比',
                    type: 'pie',
                    radius: ['90%', '55%'],//图形大小
                    avoidLabelOverlap: false,
                    center:['25%','50%'],//图形位置
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: false,
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                            {value: 4523, name: '支付宝',num:"38.32%"},
                            {value: 3127, name: '微信',num:"29.56%"},
                            {value: 2009, name: '银联',num:"20.34%"},
                            {value: 981, name: '充值卡',num:"12.78%"}
                        ]
                }
            ]
        },
        payTypeLoading:false,
        //点位销售占比
        storeData:{ 
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            color: ['#FD00FF','#02D307','#FF9D00','#8000FF','#00D4FF', '#FFCA00', '#96FF00', '#005CFF'],
            legend: {
                orient: 'vertical',
                left: '55%',
                top:'15%',
                data: ['支付宝', '微信', '银联', '充值卡'],
                textStyle:{
                    color:'#ffffff',
                    fontSize:14
                },
                // formatter:function (name) {//?为什么不行????
                //         console.log(this.payData)
                //     },
                formatter:(name) =>  {//必须使用箭头函数!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                        for (let i in this.storeData.series[0].data) {
                            if (this.storeData.series[0].data[i].name == name) {
                                return name +": "+ this.storeData.series[0].data[i].value+'元 ('+this.storeData.series[0].data[i].num+')';
                            }
                        }
                    },
            },
            series: [
                {
                        name: '销售占比',
                        type: 'pie',
                        radius: ['20%', '70%'],//图形大小
                        avoidLabelOverlap: false,
                        center:['25%','50%'],//图形位置
                        roseType: 'area',
                        data: [
                            ],
                        label: {
                          normal: {
                            position: 'inner',
                            show : false
                          }}
                    }
            ]
        },
        storeHotLoading:false,
        //销售额-利润额
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
                            },
                            fontSize:14
                        }
                
            },
            yAxis: [
                    {
                        type: 'value',
                        name: '(元)',
                        nameTextStyle:{
                          color:'#fff',
                          fontSize:13,
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
                            },
                            fontSize:14
                        }
                    },
                    {
                        type: 'value',
                        name: '(元)',
                        nameTextStyle:{
                          color:'#fff',
                          fontSize:13,
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
                            },
                            fontSize:14
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
        //订单量-销售量
        orderSaleData:{
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
                      borderColor:"#09495c",
                      borderWidth:'0'
                  }, 
            color: [ 'rgba(253, 0, 255, 1)','rgba(0, 212, 255, 1)'],
            xAxis: {
                type: 'category',
                show:true,
                splitLine:{//去掉网格线
                    　　　　show:false
                    　　},
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                boundaryGap : true,
                axisLine: {//坐标轴
                          lineStyle: {
                              color: "#09495c",
                          }
                        },
                axisLabel: {//坐标轴文字
                            show: true,
                            textStyle: {
                                color: '#ffffff'
                            },
                            fontSize:14
                        }
                
            },
            yAxis: [
                    {//订单量
                        type: 'value',
                        name: '(笔)',
                        nameTextStyle:{
                          color:'#fff',
                          fontSize:13,
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
                            },
                            fontSize:14
                        }
                    },
                    {//销售量
                        type: 'value',
                        name: '(件)',
                        nameTextStyle:{
                          color:'#fff',
                          fontSize:13,
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
                            },
                            fontSize:14
                        }

                    
                    }
                  ],
            series: [
                {//销售量
                    data: [100, 200, 400, 300, 500, 800, 100],
                    type: 'bar',
                    name:'销售量',
                    yAxisIndex: 1,
                    lineStyle:{
                      width:'1',
                    },
                },
                {//订单量
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'bar',
                    name:'订单量',
                    yAxisIndex: 0,
                    lineStyle:{
                      width:'1',
                    },
                }
                
            ]
        },
        orderSaleNumLoading:false,
        orderSaleNumData:{
          orderRate:"",
          saleRate:""
        },
         //新增用户
        newUserData:{
            tooltip: {
                trigger: 'item',
                show:true
            },
            grid: {  
                      left: '3%',  //边缘区域大小
                      right: '3%',  
                      top:'25%',
                      bottom: '-10',  
                      containLabel: true,
                      show:true,  
                      borderColor:"#09495c",
                      borderWidth:'0'
                  }, 
            color: [ 'rgba(0, 212, 255, 1)'],
            xAxis: {
                type: 'category',
                show:true,
                splitLine:{//去掉网格线
                    　　　　show:false
                    　　},
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                boundaryGap : true,
                axisLine: {//坐标轴
                          lineStyle: {
                              color: "#09495c",//文字颜色
                          }
                        },
                axisLabel: {//坐标轴文字
                            show: true,
                            textStyle: {
                                color: '#000000'
                            }
                        }
                
            },
            yAxis: [
                    {
                        type: 'value',
                        name: '(个)',
                        nameTextStyle:{
                          color:'#fff',
                          fontSize:13,
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
                    }
                  ],
            series: [
                {
                    data: [100, 200, 400, 300, 500, 800, 100],
                    type: 'line',
                    symbol: "none",
                    smooth: true,
                    yAxisIndex: 1,
                    areaStyle:{
                      color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(0, 212, 255, 0.5)' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(0, 212, 255, 0)' // 100% 处的颜色
                        }],
                    }
                    },
                    lineStyle:{
                      width:'1',
                    },
                }
                
            ]
        },
        newUserLoading:false,
        UserData:{
          userRate:''
        },
        //复购数-复购率
        sendBuyData:{
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
                      borderColor:"#09495c",
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
                boundaryGap : true,
                axisLine: {//坐标轴
                          lineStyle: {
                              color: "#09495c",//文字颜色
                          }
                        },
                axisLabel: {//坐标轴文字
                            show: true,
                            textStyle: {
                                color: '#ffffff'
                            },
                            fontSize:14
                        }
                
            },
            yAxis: [
                    {//复购数
                        type: 'value',
                        name: '(笔)',
                        nameTextStyle:{
                          color:'#fff',
                          fontSize:13,
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
                            },
                            fontSize:14
                        }
                    },
                    {//复购率
                        type: 'value',
                        name: '(%)',
                        nameTextStyle:{
                          color:'#fff',
                          fontSize:13,
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
                            },
                            fontSize:14
                        }

                    
                    }
                  ],
            series: [
                
                {//复购量
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'bar',
                    name:'复购量',
                    yAxisIndex: 0,
                    lineStyle:{
                      width:'1',
                    },
                },
                {//复购率
                    data: [100, 200, 400, 300, 500, 800, 100],
                    type: 'bar',
                    name:'复购率',
                    yAxisIndex: 1,
                    lineStyle:{
                      width:'1',
                    },
                },
                
            ]
        },
        sendBuyLoading:false,
        repurchaseData:{
          buyRate:"",
          sendBuyRate:""
        },
        //设备情况
        machine:{type:[{machineTypeName: "弹簧机", machineNum: 4},{machineTypeName: "格子机", machineNum: 4},{machineTypeName: "热饮机", machineNum: 4},{machineTypeName: "咖啡机", machineNum: 4}],status:[{machineNum: 6, machineStatusName: "正常机器"},{machineNum: 6, machineStatusName: "正常机器"},{machineNum: 6, machineStatusName: "正常机器"}]},
        saleTime:"",//实时销售情况
        mapData:"",
        timerDate:null
     }
    },
    created(){
      document.getElementsByTagName("body")[0].style.minWidth="1260px";
      document.getElementsByTagName("body")[0].style.overflowX="auto";
      document.getElementsByTagName("body")[0].style.overflowY="hidden";
    },
    mounted(){
      this.currentTime()
      this.getAllData()
      this.saleProfits()
      this.orderSaleNum()
      this.getNewUser()
      this.repurchase()
      this.getPayType()
      this.getStore()
      this.getMachineHot()
      this.getGoodsHot()
      this.getSkuHot()
      this.getMachineType()
      this.getSaleTime()
    },
    beforeDestroy () {//到其他页面清除定时器
        clearInterval(this.timerDate)
    },
    methods:{
      getTime(){
        let yy = new Date().getFullYear();
        let mm = new Date().getMonth()+1;
        let dd = new Date().getDate();
        let hh = new Date().getHours();
        let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
        let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
        this.nowDateTime = yy+'-'+mm+'-'+dd+' '+hh+':'+mf+':'+ss;
      },
      currentTime(){
        this.timerDate=setInterval(this.getTime,500)
      },
      reflash(){
        this.saleProfits()
        this.orderSaleNum()
        this.repurchase()
        this.getPayType()
        this.getStore()
        this.getMachineHot()
        this.getGoodsHot()
        this.getSkuHot()
      },
      showSidebar(){
        this.showNav=true
      },
      getAllData(){//总销售额
        this.api({
              url: "/dataScreen/allSale",
              method: "get",
              data:{}                      
          }).then((data) => {  
              this.allSale=data
          }).catch(() => {
              
          })
      },
      saleProfits(){//销售量/销售额
        this.saleProfitsLoading=false
        this.api({
              url: "/dataScreen/saleProfits",
              method: "get",
              params:{dayNum:this.dayNum}                      
          }).then((data) => {  
              this.saleProfitsData.profitRate=Number(data.profitRate.split('%')[0])
              this.saleProfitsData.saleRate=Number(data.saleRate.split('%')[0])
              let legend=[]
              let sale=[]
              let profits=[]
              if(data.saleProfitsList.length>0){
              data.saleProfitsList.forEach((item,index,array)=>{
                  legend.push(item.gmtDay)
                  sale.push(item.salePrice)
                  profits.push(item.profits)
              })
              this.saleNumData.xAxis.data=legend
              this.saleNumData.series[0].data=sale
              this.saleNumData.series[1].data=profits
              this.saleProfitsLoading=true
              }
          }).catch(() => {
              
          })
      },
      orderSaleNum(){//订单量-销售量
        this.orderSaleNumLoading=false
        this.api({
              url: "/dataScreen/orderSaleNum",
              method: "get",
              params:{dayNum:this.dayNum}                  
          }).then((data) => {  
              this.orderSaleNumData.orderRate=Number(data.orderRate.split('%')[0])
              this.orderSaleNumData.saleRate=Number(data.saleRate.split('%')[0])
              let legend=[]
              let sale=[]
              let orderRate=[]
              if(data.orderSaleList.length>0){
              data.orderSaleList.forEach((item,index,array)=>{
                  legend.push(item.gmtDay)
                  sale.push(item.saleNum)
                  orderRate.push(item.orderNum)
              })
              this.orderSaleData.xAxis.data=legend
              this.orderSaleData.series[0].data=sale
              this.orderSaleData.series[1].data=orderRate
              this.orderSaleNumLoading=true
              }
          }).catch(() => {
              
          })
      },
      getNewUser(){//新增用户
        this.newUserLoading=false
        this.api({
              url: "/dataScreen/newUser",
              method: "get",
              params:{dayNum:this.dayNum}                   
          }).then((data) => {  
              this.UserData.userRate=Number(data.userRate.split('%')[0])
              let legend=[]
              let user=[]
              if(data.userList.length>0){
              data.userList.forEach((item,index,array)=>{
                  legend.push(item.gmtDay)
                  user.push(item.saleNum)
              })
              this.newUserData.xAxis.data=legend
              this.newUserData.series[0].data=user
              this.newUserLoading=true
              }
          }).catch(() => {
              
          })
      },
      repurchase(){//复购笔数-复购率
        this.sendBuyLoading=false
        this.api({
              url: "/dataScreen/sendBuy",
              method: "get",
              params:{dayNum:this.dayNum}                   
          }).then((data) => {  
              this.repurchaseData.buyRate=Number(data.buyRate.split('%')[0])
              this.repurchaseData.sendBuyRate=Number(data.sendBuyRate.split('%')[0])
              let legend=[]
              let sendBuyNum=[]
              let sendBuyRate=[]
              if(data.list.length>0){
              data.list.forEach((item,index,array)=>{
                  legend.push(item.gmtDay)
                  sendBuyNum.push(item.sendBuyNum)
                  sendBuyRate.push(item.sendBuyRate.split('%')[0])
              })
              this.sendBuyData.xAxis.data=legend
              this.sendBuyData.series[0].data=sendBuyNum
              this.sendBuyData.series[1].data=sendBuyRate
              this.sendBuyLoading=true
              }
          }).catch(() => {
              
          })
      },
      getPayType(){//支付占比
        this.payTypeLoading=false
        this.api({
              url: "/dataScreen/payType",
              method: "get",
              params:{dayNum:this.dayNum}                   
          }).then((data) => {  
              let legend=[]
              let list=[]
              if(data.payTypeList.length>0){
              data.payTypeList.forEach((item,index,array)=>{
                  legend.push(item.payTypeName)
                  item.value=item.payTypeNum
                  item.name=item.payTypeName
                  item.num=item.payTypeRate
                  list.push(item)
              })
              this.payData.legend.data=legend
              this.payData.series[0].data=list
              this.payTypeLoading=true
              }
          }).catch(() => {
              
          })
      },
      getStore(){//点位销售占比
        this.storeHotLoading=false
        this.api({
              url: "/dataScreen/storeHot",
              method: "get",
              params:{dayNum:this.dayNum}                     
          }).then((data) => {  
              let legend=[]
              let list=[]
              if(data.storeHotList.length>0){
              data.storeHotList.forEach((item,index,array)=>{
                  legend.push(item.storeName)
                  item.value=item.salePrice
                  item.name=item.storeName
                  item.num=item.saleRate
                  list.push(item)
              })
              this.storeData.legend.data=legend
              this.storeData.series[0].data=list
              this.storeHotLoading=true
              }
          }).catch(() => {
              
          })
      },
      getMachineHot(){//热门设备
        this.api({
              url: "/dataScreen/machineHot",
              method: "get",
              params:{dayNum:this.dayNum}                  
          }).then((data) => {  
              this.machineData=data.machineHotList
          }).catch(() => {
              
          })
      },
      getGoodsHot(){//热门商品
        this.api({
              url: "/dataScreen/goodsHot",
              method: "get",
              params:{dayNum:this.dayNum}                
          }).then((data) => {  
              this.goodsData=data.goodsHotList
          }).catch(() => {
              
          })
      },
      getSkuHot(){//热门Sku
        this.api({
              url: "/dataScreen/skuHot",
              method: "get",
              params:{dayNum:this.dayNum}                 
          }).then((data) => {  
              this.skuData=data.skuHotList
          }).catch(() => {
              
          })
      },
      getMachineType(){//设备种类,设备情况
        this.api({
              url: "/dataScreen/machineType",
              method: "get",
              data:{}                      
          }).then((data) => {  
              this.machine.type=data.machineTypeList
          }).catch(() => {
              
          })
          this.api({
              url: "/flow/bendOnlineNum",
              method: "post",
              data:{}                      
          }).then((data) => {  
              this.machine.status=data
          }).catch(() => {
              
          })
      },
      getSaleTime(){//实时销售情况
        this.api({
              url: "/dataScreen/saleTime",
              method: "get",
              data:{}                      
          }).then((data) => {  
              this.saleTime=data.saleTimeList
          }).catch(() => {
              
          })
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
    }
  }
</script>
