
<style scoped>
.app-container{padding-bottom: 0;}
#mycard{height:90vh}
.store{height:67%;position: relative;background-image: url('../../assets/operaion/background-lg.png');background-size: 100% 100%}
.config{position: absolute;top: -13%;left: 2%;width: 17%;height: 38%;background-image: url('../../assets/operaion/config.png');background-size: 100% 100%}
.config-top{position: absolute;width: 100%;height: 20%;color: #fff;font-size: 18px;font-weight: 600;top:8%;padding:0 10%;justify-content: space-between}
.config-bottom{position: absolute;width: 100%;height: 45%;color: #fff;top:34%;padding:0 10%;padding-right: 7%;}
.config-bottom .top{color: #fff;font-size: 14px}
.storeList{height:25%;position: relative}
.repairment{z-index: 10;cursor: pointer;position: absolute;top:21%;left:6%;height: 72%;width: 25%;padding: 2%;color: #D0021B;font-weight: bold;background-image: url('../../assets/operaion/repair-lg.png');background-size: 100% 100%}
.repairment:hover{box-shadow:1px 3px 15px #909399;top:20%;}
.repairment-inner{width:63%;height:26%;position: absolute;top: 15%;left: 0%}
.store-top{cursor: pointer;position: absolute;top: 0%;left: 28%;height: 80%;width: 40%;background-image: url('../../assets/operaion/store-lg.png');background-size: 100% 100%}
.store-top:hover{box-shadow:1px 3px 15px #909399;top:-1%;}
.storeInfo{position: absolute;top: 0%;left: 17%;height: 24%;width: 56%;color: white;font-size: 20px;padding: 0 3%;display: table}
.storeStatus-open{position: absolute;top: 58%;left: 39%;height: 10%;width:13%;background-image: url('../../assets/operaion/open-lg.png');background-size: 100% 100%}
.storeStatus-close{position: absolute;top: 58%;left: 39%;height: 10%;width:13%;background-image: url('../../assets/operaion/close-lg.png');background-size: 100% 100%}
.note{position: absolute;top: 18%;left:10%;height: 22%;width:80%;padding: 2%;color: #403D56;font-weight: bold}
.note span{color: #FF6585}
.note-top{position: absolute;top: -8%;left: 66%;height:80%;width: 22%;color: #D0021B;font-weight: bold;background-image: url('../../assets/operaion/note-lg.png');background-size: 100% 100%}
.toRepair{position: absolute;top: 30%;left: 25%;border: 2px solid #eeeeee;height: 15%;width: 10%;color: #000;font-weight: bold;cursor: pointer;}
.toStorage:hover{box-shadow:1px 3px 15px #909399;top:37%;}
.toStorage{position: absolute;top:38%;left: 70%;height: 47%;width: 24%;color: #D0021B;font-weight: bold;cursor: pointer;background-image: url('../../assets/operaion/storage-lg.png');background-size: 100% 100%}
.toStorage1{position: absolute;top:38%;left: 70%;height: 47%;width: 24%;color: #D0021B;font-weight: bold;background-image: url('../../assets/operaion/storage-lg.png');background-size: 100% 100%}
.open{position: absolute;top: 60%;left: 50%;border: 2px solid #eeeeee;height: 15%;width: 10%;color: #D0021B;font-weight: bold;cursor: pointer}
.flex-start{
        display: flex;
        display: -webkit-flex;
        align-items: flex-start;
        -webkit-align-items: flex-start;
        justify-content: flex-start;
        -webkit-justify-content: flex-start;
    }
.flex-1{
    flex:1
}
.flex-2{
    flex:2
}
.p-0{padding:0!important}
.left{text-align: left}
.right{text-align: right}
.member div{padding: 1%}
.member.flex-1{color: #403D56}
.member.flex-2{color: #4280c1}
.note div{padding: 3% 0}
.center{text-align: center}
@media screen and (max-width:1680px) {
    .el-card{font-size: 16px}
}
@media screen and (max-width:1600px) {
    .note{top:15%;width: 90%}
}
@media screen and (max-width:1440px) {
    .el-card{font-size: 13px}
    #mycard .swiper-slide-active .innerbox{height: 60px}
}
@media screen and (max-width:1400px) {
    .config{width:22%}
}
@media screen and (max-width:1280px) {
    .el-card{font-size: 12px}
}
</style>
<style>
#mycard .el-card__body{height: 100%;padding:0 4%}
#mycard .swiper-slide-active .innerbox{
    background: #D07962!important;
    height: 80px;
    color: #fff!important
  }
  .swiper-container,.swiper-father{width: 80%;margin: 0 auto}
  .swiper-father{top: 25%;position: absolute;width: 100%}
  #mycard .swiper-pagination{width: 100%;padding-top: 0.5%}
   #mycard .swiper-pagination .swiper-pagination-bullet{margin: 0 5px}
   #mycard .swiper-pagination .swiper-pagination-bullet-active{background: #ec2b2b8f;}
   #mycard .swiper-wrapper{
       align-items: flex-end;
       /* align-items: center;
        -webkit-align-items: center;
        justify-content: center;
        -webkit-justify-content:center; */
   }
   .swiper-button-next{
      background-image: url("../../assets/operaion/arrow-right.png");
      background-size: 83px 32px;
      width: 83px;
      height: 32px;
      right: 3%;
      top: 75%
  }
  .swiper-button-prev{
      background-image: url("../../assets/operaion/arrow-left.png");
      background-size: 83px 32px;
      width: 83px;
      height: 32px;
      left: 3%;
      top: 75%
  }
    #mycard .el-switch .el-switch__core:after{border-radius:10px;background-color: rgba(127, 70, 56, 1)}
    #mycard .el-switch.is-checked .el-switch__core{background-color: #fff;border-color: #fff}
    #mycard .el-switch__core{background-color: #fff;border-color: #fff}
    #mycard .el-switch__label,#mycard .el-switch__label.is-active{color: #fff;font-weight: 500;}
    #mycard .el-switch__label *{font-size:12px}
    #mycard .el-switch__label--right{margin-left: 4px}
    #mycard .el-switch__label--left{margin-right: 4px}
    #mycard .el-input-number--mini{width: 90px}
    #mycard .el-input__inner{background: rgba(255, 218, 192, 1);border: 0}
    #mycard .el-input-number--mini .el-input-number__decrease,#mycard .el-input-number--mini .el-input-number__increase{top:2px;width: 22px;background: rgba(127, 70, 56, 1);color: #fff;border-radius: 4px;border: 0}
    #mycard .el-input-number--mini .el-input-number__decrease{left: 2px}
    #mycard .el-input-number--mini .el-input-number__increase{right: 2px}
    #mycard .el-input-number--mini .el-input-number__decrease i, #mycard .el-input-number--mini .el-input-number__increase i{font-weight: 800}
    #mycard .el-input-number--mini .el-input__inner{padding: 0px;color: rgba(127, 70, 56, 1);font-size: 18px;height: 25px;line-height: 25px;}
    #mycard .el-input-number--mini{line-height: 20px}
    #mycard .el-checkbox{margin-right: 0;background: rgba(255, 218, 192, 1);margin-right: 0%;width:24%;margin-top: 0.5vh;padding: 1%;border-radius: 4px;color:rgba(127, 70, 56, 1);font-weight: 500}
    #mycard .el-checkbox__label{padding-left: 3px}
    #mycard .el-checkbox__input.is-checked .el-checkbox__inner,#mycard .el-checkbox__input.is-indeterminate .el-checkbox__inner{background-color: rgba(127, 70, 56, 1);border-color: rgba(127, 70, 56, 1);border-radius: 4px;}
    #mycard .el-checkbox__input.is-checked+.el-checkbox__label{color:rgba(127, 70, 56, 1);}
    #mycard .el-checkbox+.el-checkbox{margin-left: 0px!important}
    #mycard .el-checkbox__label{font-size: 13px;line-height: 16px}
    #mycard .el-checkbox__inner{border: 0}
    #mycard .el-checkbox-group{display: flex;flex-flow: wrap;justify-content: space-between;}
@media screen and (max-width:1780px) {
    #mycard .el-input-number--mini{width: 70px}
}
@media screen and (max-width:1680px) {
    #mycard .config-top{font-size: 16px!important;}
    #mycard .el-switch__core{height: 16px;width: 36px!important}
    #mycard .el-switch__core:after{width: 15px;height: 13px;top: 0px}
    #mycard .config-bottom .top{font-size: 13px}
    #mycard .el-input-number--mini .el-input__inner{font-size: 16px;height: 20px;line-height:20px;}
    #mycard .el-input-number--mini .el-input-number__decrease, #mycard .el-input-number--mini .el-input-number__increase{top:1px;width: 18px;}
    #mycard .el-input-number--mini{line-height: 18px}
    #mycard .el-checkbox__label{font-size: 11px;line-height: 14px}
    #mycard .el-checkbox__inner{width: 12px;height: 12px;border-radius: 3px}
}
@media screen and (max-width:1540px) {
    #mycard .config-top{font-size: 14px!important;}
    #mycard .config-bottom .top{font-size: 12px}
    #mycard .el-switch__core{height: 16px;width: 30px!important}
    #mycard .el-switch__core:after{width: 13px;height: 13px;top: 0px;margin-left: -15px}
    #mycard .el-input-number--mini .el-input__inner{font-size: 16px;height: 18px;line-height:18px;}
    #mycard .el-input-number--mini{line-height: 16px}
    #mycard .el-checkbox__label{font-size: 9px;line-height: 12px}
    #mycard .el-input-number--mini{width: 60px}
    #mycard .el-checkbox__inner{width: 10px;height: 10px;border-radius: 2px!important}
    #mycard .el-checkbox{font-size: 10px}
}
</style>

<template>
    <div class="app-container">
        <el-card id="mycard">
            <div style="height:8%"></div>
            <div class="store">
                <!-- <div class="config" v-if="intelligentFlag">
                    <div class="config-top flex-center-Y">
                        <div style="width:100%;text-align:center">
                            智能采购配置
                        </div>
                    </div>
                    <div class="config-bottom">
                        <div class="top flex-center-Y">
                            <div>自动删除时长: </div>&nbsp;
                            <el-input-number size="mini" @change="commitConfig" v-model="time" :min="1" :max="7"></el-input-number>
                            <div>&nbsp;天</div>
                        </div>
                        <div class="top" style="margin-top:1vh">
                            采购单发起时间:8:00、18:00
                        </div>
                        <div>
                            <el-checkbox-group v-model="checkList" @change="commitConfig">
                                <el-checkbox label="周一"></el-checkbox>
                                <el-checkbox label="周二"></el-checkbox>
                                <el-checkbox label="周三"></el-checkbox>
                                <el-checkbox label="周四"></el-checkbox>
                                <el-checkbox label="周五"></el-checkbox>
                                <el-checkbox label="周六"></el-checkbox>
                                <el-checkbox label="周日"></el-checkbox>
                                <el-checkbox style="visibility: hidden;'"></el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </div>
                </div> -->
                <div class="repairment"  @click="setreplenish(selectStore)">
                    <div class="flex-start repairment-inner">
                        <div class="member flex-1 right">
                            补货员: 
                        </div>
                        
                        <div class="member flex-2 ">
                            <el-popover
                                    placement="top-start"
                                    trigger="hover"
                                    >
                                <div class="">
                                    <div v-for="(item,index) in selectStore.repairMan" :key="index">&nbsp;&nbsp;{{item.nickname}} ({{item.username}})</div>
                                </div>
                            <div  slot="reference">
                                <div v-for="(item,index) in selectStore.repairMan" :key="index" v-show="index<=1">&nbsp;&nbsp;{{item.nickname}}<br>({{item.username}})</div>
                            </div>
                            </el-popover>
                        </div>
                    </div>
                </div>
                <div class="store-top"  @click="toDetail(selectStore)">
                    <div class="storeInfo center">
                        <div style="display:table-cell; vertical-align:middle;">
                            <div style="padding-bottom:4%">{{selectStore.storeName}}{{selectStore.storeCode}}</div>
                            <div style="font-size:14px"><img style="width:16px" src="../../assets/super/location.png" alt="">{{selectStore.detailsAddress }}</div>
                        </div>
                    </div>
                    <div class="storeStatus-open" v-if="selectStore.storeStatus=='1'">

                    </div>
                    <div class="storeStatus-close" v-if="selectStore.storeStatus=='0'">

                    </div>
                </div>
                <div class="note-top">
                    <div class="note">
                        <div>今日利润总额: <span>￥{{profitinfo.profits}}</span></div>
                        <div>今日销量总额: <span>￥{{profitinfo.sales}}</span></div>
                        <div class="flex-center">
                            <div class="flex-1 p-0">订单总数: <span>{{profitinfo.orderNum}} 笔</span></div>
                            <div class="flex-1 p-0">消费用户: <span>{{profitinfo.userNum}} 人</span></div>
                        </div>
                        
                    </div>
                </div>
                
                <!-- <div class="toRepair" @click="setreplenish(selectStore)">
                    点击查看补货员<br>相关信息
                </div> -->
                <div v-if="wareFlag" class="toStorage" @click="toStock(selectStore)">
                </div>
                <div v-else class="toStorage1">
                </div>
                <!-- <div class="open" @click="toDetail(selectStore)">
                    open
                </div> -->
            </div>
            <div class="storeList">
                <div class="swiper-father">
                    <swiper :options="swiperOption" @slideChangeTransitionStart="changeSwiper" ref="mySwiper" v-if="storeLists.length>0">
                    　　<swiper-slide v-for="(item,index) in storeLists" :key="index">
                        <div class="center" style="width:100%;cursor:pointer">
                            <div class="innerbox center p-2" style="color:#fff;background:#F8E1D4;color:#D07962;width:80%;margin:0 auto;padding:6%;display:table;">
                                <img src="../../assets/operaion/top1.png" alt="" style="position:absolute;top:0;width:15%" v-if="item.rankNo=='1'">
                                <img src="../../assets/operaion/top2.png" alt="" style="position:absolute;top:0;width:15%" v-if="item.rankNo=='2'">
                                <img src="../../assets/operaion/top3.png" alt="" style="position:absolute;top:0;width:15%" v-if="item.rankNo=='3'">
                                <div style="display:table-cell; vertical-align:middle;">
                                    <div style="margin-bottom:4%"> {{item.storeName}}</div>
                                    <div>{{item.storeCode}}</div>
                                </div>
                                
                            </div>
                        </div>
                        </swiper-slide>
                    </swiper>
                    　　<div class="swiper-pagination" slot="pagination"></div>
                    　　<div class="swiper-button-prev" slot="button-prev"></div>
                    　　<div class="swiper-button-next" slot="button-next"></div>
                </div>
            </div>
        </el-card>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name:'storeInfo',
    data() {
        return {
            profitinfo:"",
            selectStore:{},
            orderHight:"",
            storeLists:[
                // {storeName:"海创园旗舰店",storeCode:"NO.1号店",location:"浙江省杭州市余杭区文一西路998号",repairment:[{name:"张三1"},{name:"李四"},{name:"王五"}]},
                // {storeName:"海创园旗舰店",storeCode:"NO.2号店",location:"浙江省杭州市余杭区文一西路998号",repairment:[{name:"张三2"},{name:"李四"},{name:"王五"}]},
            ],
            swiperOption: {
                slidesPerView:3,
                // spaceBetween: 30,
                slidesPerGroup: 1,
                centeredSlides:true,
                slideToClickedSlide:true,
                observer:true,
                observeParents:true,
                observeSlideChildren:true,
                loop: true,
                // loopFillGroupWithBlank: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    // type : 'fraction',
                },
            　　navigation: {
            　　　　nextEl: '.swiper-button-next',
            　　　　prevEl: '.swiper-button-prev'
            　　}
            },
            swith:true,
            time:"",
            checkList:[],
            purchaseId:"",
            intelligentFlag:true,//是否显示智能采购配置
            wareFlag:true,//仓库是否能点

        }
    },
    activated(){
        this.getData()
    },
    created(){
        this.api({
                url: "/store/storeListRank",
                method: "post",
                data: {
                    manageId: this.userId
                }
            })
                .then(data => {
                    this.intelligentFlag=data.intelligentFlag
                    this.storeLists = data.storeListRank
                    this.wareFlag=data.wareFlag
                    // for(let i in this.storeLists){//将第二名放到数组最后
                    //     if(this.storeLists[i].rankNo=='2'){
                    //         this.storeLists.slice(i,0)
                    //         this.storeLists.push(this.storeLists[i])
                    //     }
                    // }
                    this.selectStore=this.storeLists[0]
                    this.getData()
                    
                    if( this.storeLists.length % 2 ==0 ){
                        if(this.storeLists.length>=8){
                                this.swiperOption.slidesPerView=7
                            }else if(this.storeLists.length>=4){
                                this.swiperOption.slidesPerView=this.storeLists.length-1
                            }else{
                                this.swiperOption.slidesPerView=3
                                this.swiperOption.loop=false
                            }
                        }else{
                            if(this.storeLists.length>=7){
                                this.swiperOption.slidesPerView=7
                            }else if(this.storeLists.length>=3){
                                this.swiperOption.slidesPerView=this.storeLists.length
                            }else{
                                this.swiperOption.slidesPerView=3
                                this.swiperOption.loop=false
                            }
                        }
                })
                .catch(e => {});
        // document.getElementsByTagName("body")[0].style.height="100%";
        // document.getElementsByTagName("html")[0].style.height="100%";
        document.getElementsByTagName("body")[0].style.minWidth="1260px";
        document.getElementsByTagName("body")[0].style.overflow="auto";
        this.orderHight = document.body.clientHeight
        // this.$nextTick(_ => {
        //         document.getElementById('mycard').style.height = this.orderHight*0.9 + 'px'
        //         })
        
    },
    methods:{
        commitConfig(){
            let gmtPurchase=''
            for(let i in this.checkList){
               if(this.checkList[i]=='周一'){
                   this.checkList[i]='1'
               }else if(this.checkList[i]=='周二'){
                   this.checkList[i]='2'
               }else if(this.checkList[i]=='周三'){
                   this.checkList[i]='3'
               }else if(this.checkList[i]=='周四'){
                   this.checkList[i]='4'
               }else if(this.checkList[i]=='周五'){
                   this.checkList[i]='5'
               }else if(this.checkList[i]=='周六'){
                   this.checkList[i]='6'
               }else if(this.checkList[i]=='周日'){
                   this.checkList[i]='0'
               }
            }
            for(let i in this.checkList){
                if(i==0){
                    gmtPurchase+=this.checkList[i]
                }else{
                    gmtPurchase+=','+this.checkList[i]
                }
            }
            this.api({
                url: "/inventory/updateIntellignetPurchase",
                method: "post",
                data: {
                    storeCode: this.selectStore.storeCode,
                    comfirmLimit: this.time,
                    purchaseId:this.purchaseId,
                    gmtPurchase:gmtPurchase
                }
            })
                .then(data => {
                    this.getConfigData()
                })
                .catch(e => {});
        },
        changeSwiper(){
            let swiper = this.$refs.mySwiper.swiper;
            let i = swiper.realIndex;
            let item=this.storeLists[i]
            this.selectStore=item
            this.getData()
        },
        getData(){
            this.api({
                url: "/store/storeRepairMan",
                method: "post",
                data: {
                    storeCode: this.selectStore.storeCode,
                    manageId: this.userId
                }
            })
                .then(data => {
                    this.profitinfo=data.profitsJson
                    this.selectStore.repairMan=data.repairManInfo
                    this.getConfigData()
                })
                .catch(e => {});
        },
        getConfigData(){
            this.api({
                url: "/inventory/showIntellignetPurchase",
                method: "post",
                data: {
                    storeCode: this.selectStore.storeCode
                }
            })
                .then(data => {
                   this.purchaseId=data.purchaseId
                   let data1=data.gmtPurchaseInfo
                   for(let i in data1){
                       if(data1[i]=='1'){
                           data1[i]='周一'
                       }else if(data1[i]=='2'){
                           data1[i]='周二'
                       }else if(data1[i]=='3'){
                           data1[i]='周三'
                       }else if(data1[i]=='4'){
                           data1[i]='周四'
                       }else if(data1[i]=='5'){
                           data1[i]='周五'
                       }else if(data1[i]=='6'){
                           data1[i]='周六'
                       }else if(data1[i]=='0'){
                           data1[i]='周日'
                       }
                   }
                   this.checkList=data1
                   this.time=data.comfirmLimit
                })
                .catch(e => {});
        },
        // getStoreLists(){
        //     this.storeLists=[
        //         {storeName:"海创园旗舰店",storeCode:"NO.1号店",location:"浙江省杭州市余杭区文一西路998号",repairment:[{name:"张三1"},{name:"李四"},{name:"王五"}]},
        //         {storeName:"海创园旗舰店",storeCode:"NO.2号店",location:"浙江省杭州市余杭区文一西路998号",repairment:[{name:"张三2"},{name:"李四"},{name:"王五"}]},
        //         {storeName:"海创园旗舰店",storeCode:"NO.3号店",location:"浙江省杭州市余杭区文一西路998号",repairment:[{name:"张三3"},{name:"李四"},{name:"王五"}]},
        //         {storeName:"海创园旗舰店",storeCode:"NO.4号店",location:"浙江省杭州市余杭区文一西路998号",repairment:[{name:"张三4"},{name:"李四"},{name:"王五"}]},
        //         {storeName:"海创园旗舰店",storeCode:"NO.5号店",location:"浙江省杭州市余杭区文一西路998号",repairment:[{name:"张三5"},{name:"李四"},{name:"王五"}]},
        //         {storeName:"海创园旗舰店",storeCode:"NO.6号店",location:"浙江省杭州市余杭区文一西路998号",repairment:[{name:"张三6"},{name:"李四"},{name:"王五"}]},
        //         {storeName:"海创园旗舰店",storeCode:"NO.7号店",location:"浙江省杭州市余杭区文一西路998号",repairment:[{name:"张三7"},{name:"李四"},{name:"王五"}]},
        //         {storeName:"海创园旗舰店",storeCode:"NO.8号店",location:"浙江省杭州市余杭区文一西路998号",repairment:[{name:"张三8"},{name:"李四"},{name:"王五"}]},
        //         {storeName:"海创园旗舰店",storeCode:"NO.9号店",location:"浙江省杭州市余杭区文一西路998号",repairment:[{name:"张三9"},{name:"李四"},{name:"王五"}]},
        //         {storeName:"海创园旗舰店",storeCode:"NO.10号店",location:"浙江省杭州市余杭区文一西路998号",repairment:[{name:"张三10"},{name:"李四"},{name:"王五"}]},
        //         {storeName:"海创园旗舰店",storeCode:"NO.11号店",location:"浙江省杭州市余杭区文一西路998号",repairment:[{name:"张三11"},{name:"李四"},{name:"王五"}]}
        //         ]
        //     this.selectStore=this.storeLists[0]
        // },
        setreplenish(row){
            // console.log(row.isShowRepair)
            if(row.vendCount>0){
            this.$router.push({path: '/operation/replenish/'+row.storeCode+'/'+row.storeName+'/'+row.isShowRepair})
            }else{
                this.$message({
                        type: 'warning',
                        message: '该门店下暂无机器'
                    })
            }
            // this.$router.push({path: '/operation/replenish/'+"store001"+'/'+row.storeName})
        },
        toDetail(row){
            this.$router.push({path: '/operation/storeDetailsS/'+row.storeCode+'/'+"_"+'/'+row.makeInventoryFlag})
        },
        toStock(row){
            // this.$router.push({path: '/stock/index/'+row.wareId})
            if(row.wareId){
            this.$router.push({path: '/operation/index/'+row.storeCode+'/'+row.wareId+'/'+"_"+'/'+row.makeInventoryFlag})
            }else{
                this.$message({
                        type: 'warning',
                        message: '该门店未关联仓库'
                    })
            }
        }
    },
    computed: {
    ...mapGetters([
        'userId','userName'
    ])
    },
}
</script>

