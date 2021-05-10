<style lang="scss" scoped>
.app-container{padding-bottom: 0;background: #F5F6F8;font-size: 14px;}
.bg-white{background: #fff;}
#salePlane{height: 90vh;}
.arrow i {
    margin-right: 6px;
    font-size:32px
}
.top {
    height: 26vh;
}
.bottom {
    height: 62vh;
    margin-top: 20px;
    overflow-y: scroll;
}
.title-store {
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 20px;
}
.blue {
    color: #66b1ff!important;
    cursor: pointer;
}
.grey{
    color: #999!important;
    cursor: pointer;
}
.smallfont{font-size: 14px}
.right {
    text-align: right;
}
.left {
    text-align: left;
}
.flex-center {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
}
.flex {
    display: flex;
    display: -webkit-flex;
}
.flex-1{
    flex:1
}
.flex-2{
    flex:2
}
.flex-3{
    flex:3
}
.flex-4{
    flex:4
}
.flex-5{
    flex:5
}
.flex-10{
    flex:10
}
.flex-7{
    flex:7
}
.flex-8{
    flex:8
}
.store {
    flex: 4;
}
.tool {
    flex: 1;
}
.content {
    font-size: 14px;
    line-height: 2.4vh;
}
.arrows {
    width: 100%;
    border-left: 2px solid rgba(64, 160, 255, 0.666);
    height: 18vh;
    text-align: center;
    margin-left: 1vw;
    margin-top: 2vh;
}
.arrows-h {
    height: 18vh;
}
.ic {
    font-size: 20px;
    background: rgba(64, 160, 255, 0.666);
    color: #ffffff;
    cursor: pointer;
    border-radius: 50%;
    padding: 6px;
}
.ic:hover {
    background: #409eff;
}
.store-form .el-input {
    width: 120px;
}
.single-input .el-input,
.single-input-.el-input {
    width: 194px;
}
.jy-1 {
    flex: 1;
}
.jy-2 {
    flex: 3;
}
.input-with-select {
    width: 40%;
}
.flex-center-Y {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
}
#salePlane{position: relative;width: 100%;}
#salePlane .leftRun{
    padding-bottom: 2vh;
    height: 600px;
}
#salePlane .centerRun,#salePlane .rightRun{
    width: 100%;
}
#salePlane .centerRun{
    position: absolute;
    top: 247px;
    bottom: 0;
    left: 0;
}
#salePlane .rightRun{
    height: 173px;
}
.p-1{padding: 1%}
.p-2{padding: 2%}
.pt-2{padding-top: 2%}
.pt-1{padding-top: 1%}
.p-4{padding: 4%}
.Pb-0{padding-bottom: 0!important}
.Pt-0{padding-top: 0!important}
.pl-0{padding-left: 0!important}
.pr-0{padding-right: 0!important}
.pl-2{padding-left: 2%!important}
.pr-2{padding-right: 2%!important}
.pl-4{padding-left: 4%!important}
.pr-4{padding-right: 4%!important}
.pl-6{padding-left: 6%!important}
.pr-6{padding-right: 6%!important}
.p-6{padding: 6%}
.pl-8{padding-left: 8%!important}
.pr-8{padding-right: 8%!important}
.p-8{padding: 8%}
.p-20{padding: 20px}
.pb-20{padding-bottom: 20px;}
.H-100{height: 100%}
.groupMr{margin-right: 50px;}
.storeChange{height: 100%;margin-right: 1400px;padding: 20px;padding-right: 0;background: #fff;border:1px solid #E2E5EB;border-right: 0;}
.machineData{height: 100%;width: 1400px;float: right;}
.ventChange{height:100%;}
.blank{width: 100%;height: 74px;background: #fff;border-left: 1px solid #E2E5EB;border-right: 1px solid #E2E5EB;padding-left: 20px;padding-top: 10px;font-size: 14px;font-weight: 600;line-height: 40px}
.tab1{border-bottom: 3px solid #409EFF;cursor: pointer;}
.tab{color: #999;font-weight: 400;cursor: pointer;}
.dataTody{height: 20%}
.products{height: 100%;width: 250px;float:left;padding-left: 20px;padding-bottom: 20px;border-left: 1px solid #E2E5EB;border-bottom: 1px solid #E2E5EB;background: #fff;position: relative;}
.ventChange{height:100%;margin-left: 250px;padding-bottom: 20px;border-bottom: 1px solid #E2E5EB;background: #fff;padding-right: 20px;border-right: 1px solid #E2E5EB;}
.leftRun ul{list-style: none;padding-left:0%;font-weight: 400;margin: 0;}
.leftRun ul li{position: relative;cursor: pointer;font-size: 16px;color: #999;padding-left:20px;height: 47px;line-height: 47px;border:1px solid rgba(245,246,248,1);border-top:0;overflow: hidden;}
.leftRun ul li.active{color: #333;background:#F5F6F8}
.centerRun ul{list-style: none;padding-left:10%;font-weight: 400}
.centerRun ul li{padding:5% 0 ;position: relative;cursor: pointer}
#data{padding: 0 2%}
#data ul{list-style: none;padding: 0;font-size: 20px}
#data ul.big{list-style: none;padding: 0;font-size: 18px}
#data ul li{padding:0 3% 0 0;position: relative;cursor: pointer;color: #9B9B9B}
#data ul li.active{font-weight: 600;color: #333333}
.redData{color: #D0021B;font-weight: 600;}
/* .centerRun ul li.active::before{
    position: absolute;
    left: -10%;
    content: "";
    width: 4%;
    height: 40%;
    background: #333333;
    border-radius: 2px;
} */
.box{width:155px;height:200px;padding: 15px;font-size: 12px;line-height: 17px;background: #fff;
    .detail{margin-top: 28px;font-size: 14px;div{margin-bottom: 10px;}}
}
.noMask{position: absolute;top: 0;left: 3%;width: 100%;height: 100%;background: #e4e7ed91;z-index: 100;width: 95%;border-radius:5px;}
.box img{width: 100%;}
.product{overflow-y: auto;background: #F5F6F8;padding: 10px 15px;}
.product .el-col{padding:0 5px;margin-top: 10px;position: relative;}
.row-box{width: 100%;margin-bottom:15px;}
.row-box .col-box{width:220px;height:100%;position: relative;text-align: center;margin-right: 15px;background: #fff;padding: 10px;}
.row-box .col-box .num{z-index: 10;position: absolute;left: 10px;font-size: 18px;color: #333;font-weight: 600;}
.row-box .col-box .status{width: 15px;height: 15px;border-radius: 50%;position: absolute;top: 10px;right: 10px;}
.row-box .col-box .bottomBox{
    height:72px;margin-top:30px;
    img,.picImg{width:50px;height: 50px;};
    .picImg{margin:0 20px;};
    .img{width:2px;height: 72px;};
    .info{
        position: relative;
        margin-left: 20px;
        .name{font-size: 14px;color: #333;margin-top: -15px;margin-bottom: 18px;text-align: left;width:85px;}
        .price{font-size: 14px;color: #333;font-weight:600;
            .diss{font-size:12px;color:#999;text-decoration: line-through;margin-left: 5px;}
        }
        .status{font-size: 14px;color: #FFA500;position: absolute;bottom:-25px;right: -1px;img{width:20px;height:20px;cursor: pointer;}}
    }
    }
.normalcolor{background: #7ED321;}
.normalfont{color: #7ED321}
.stopfont{color: #FF3163}
.saleallcolor{background: #F5A623}
.stopcolor{background: #FF3163}
.disccolor{ 
    width: 0px;
    height: 0px;
    border-left: 8px solid transparent;
    border-top: 8px solid transparent;
    border-bottom: 8px solid #37C1FF;
    border-right: 8px solid #37C1FF;}
.center{text-align: center}
.weight{font-weight:bold}
#moveSku{
    position: absolute;     /*定位*/
    top: 0px;
    left:0px;
    width: 700px;
    z-index: 2001;
    .el-card{padding: 20px;}
    .line{width: 100%;height: 1px;background: #E8EAEE;position: absolute;top:60px;left:0;}
    .skumask{
        position: absolute;
        top: 0%;
        left: 0;
        width: 100%;
        height: 100%;
        background: #fff;
        z-index: 2002;
        img{width: 12%;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);}
    }
    }
.btn1{font-size: 14px;line-height:40px;height:40px;border: 1px solid #409EFF;width: 110px;color: #409EFF;text-align: center;border-radius: 4px;cursor: pointer;justify-content: center;img{width: 12px;margin-right: 5px;}}
.btn,.btn2,.btn3{margin-left:20px;font-size: 14px;line-height:32px;height:32px;width: 120px;color: #fff;background:#409EFF;text-align: center;border-radius: 4px;cursor: pointer;justify-content: center;img{width: 12px;margin-right: 5px;}}
.btn2{border: 1px solid #409EFF;color: #409EFF;background: #fff;}
.btn3{border: 1px solid #999;color: #999;background: #fff;cursor: no-drop;}
.disabled{color: #999;border-color: #999;cursor:no-drop;}
.justify-content-between{justify-content: space-between;}
.text-right{text-align: right}
.fr{float: right}
.title{font-size:18px;font-weight: bold}
.el-card{font-size: 18px;color: #333333}
.tip{font-size: 16px}
.sKuimg{width:70px!important;height:70px;margin:0 auto}
.border{border:1px solid #E2E5EB;}
.border-right{border-right:1px solid #E2E5EB;}
@media screen and (max-width:1320px) {
    .storeChange{margin-right: 1020px;}
    .machineData{width: 1020px;}
}
@media screen and (max-width:1700px) {
    .storeChange{margin-right: 1260px;}
    .machineData{width: 1260px;}
}
@media screen and (max-width:1520px) {
    .storeChange{margin-right: 1140px;}
    .machineData{width: 1140px;}
}
@media screen and (max-width:1400px) {
    .storeChange{margin-right: 1060px;}
    .machineData{width: 1060px;}
    .groupMr{margin-right: 20px;}
}
</style>
<style>
.el-loading-spinner .el-icon-loading,.el-loading-spinner .el-loading-text{font-size: 20px}
/* .machinebtn>.el-select{width: 265px!important} */
.machinebtn>.el-select>.el-input{width: 265px!important}
/* #salePlane .el-input{margin-top: 2%;} */
#salePlane #input .el-input .el-input__inner{border-bottom: 1px solid #ebeef5;background: transparent;border-radius:0;height: 100%}
#salePlane .el-input .el-input__inner{background: transparent;}
#salePlane .searchinput{width: 230px;margin: 20px 0;margin-top: 37px;}
#salePlane .searchinput.el-input .el-input__inner{height: 40px}
#salePlane .searchinput.el-input .el-input__suffix{width: 20px;margin-top:10px;margin-right: 5px;}
/* #salePlane .el-input--prefix .el-input__inner{padding-left: 2.5vw} */
#salePlane .el-cascader .el-input .el-input__inner{width: 0px;padding:0px!important;height: 0px;line-height: 0px}
#salePlane .el-cascader .el-input .el-input__suffix-inner{display: none!important}
#salePlane .el-cascader .el-cascader__label{padding: 0!important}
/* #salePlane .el-select .el-input .el-input__inner{width: 0px;padding:0px!important;height: 0px;line-height: 0px}
#salePlane .el-select .el-input .el-input__suffix-inner{display: none!important} */
#salePlane .el-card__body{padding: 0;height: 100%;position:relative}
#salePlane .centerRun .el-input .el-input__inner{background: transparent;}
#salePlane .el-switch .el-switch__core,#salePlane .el-switch .el-switch__core:after{border-radius: 5px}
#salePlane .el-input--suffix .el-input__inner{padding-right:0!important}
.H-plane{height: 86px;padding: 15px;border-bottom: 1px solid rgba(234,234,234,1);border-top: 1px solid rgba(234,234,234,1);}
.H-plane1{height: 180px}
.H-plane2{height: 180px}
#salePlane .addInput .el-input__inner{font-size: 14px;padding-left:10px}
#salePlane .addInput{width:105px}
#salePlane .el-radio-button__inner{height: 32px;padding-top: 8px;padding-bottom: 8px;}
#salePlane .el-select .el-input__inner{height: 28px;line-height: 28px;font-size: 12px;}
#salePlane .el-select .el-input__icon{line-height:0 ;}
#salePlane .planeInput .el-date-editor.el-input{width: 140px;}
#salePlane .planeInput{margin-top: 10px;}
/* dialog样式 */
.salePlaneDialog .el-dialog__body{padding: 40px 70px!important;}
.salePlaneDialog .el-dialog__headerbtn{display: none;}
.salePlaneDialog .el-dialog__header{padding: 0;}
.salePlaneDialog{height: 200px;}
.salePlaneDialog .title{font-size: 16px;font-weight: 400;text-align: center;margin-bottom: 60px;}
.salePlaneDialog .btn,.salePlaneDialog .btn1{width: 120px;height: 40px;line-height: 40px;}
</style>

<template>
    <div class="app-container">
        <div id="salePlane">
            <div class="leftRun" id="moveSku" v-drag v-show="showMoveSku"><!--这里如果用v-if,在无限滚动初始化时还没有这个页面元素,会监听不到,不会触发滚动事件-->
                <div class="line"></div>
                <el-card class="p-4 H-100">
                    <div class="title flex-center-Y justify-content-between"><span>商品列表<span style="color:#409EFF;font-size:14px;font-weight:400">（鼠标拖拽商品到相应货道中完成设置）</span></span><i class="el-icon-close title fr" style="color:#999;cursor:pointer" @click="showMoveSku=false"></i></div>
                    <el-input v-model="params.searchName" @input="search" class="searchinput" onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;">
                        <img style="width:100%" slot="suffix" src="../../assets/icons/search.png" alt="">
                    </el-input>
                    <div class="flex" style="height:76%">
                        <div class="" style="width:18%;height:100%;overflow:auto">
                            <ul>
                                <li v-for="(item,index) in typeList" :key="index" :class="item.isActive ? 'active' : ''" @click="chooseType(index,item)">{{item.typeName}}</li>
                            </ul>
                        </div>
                        <div class=" H-100"  style="width:82%"  v-loading="skuLoading">
                            <el-row class="product H-100" v-infinite-scroll="load" infinite-scroll-distance="10">
                                <el-col :span="8" v-for="(item,index) in skuList" :key="index">
                                    <div class="noMask" v-if="item.haveWareFlag==1" draggable="false" @mousedown="dragMask(item)" @mousedown.stop="stopPropagation()"></div>
                                    <div class="box"  draggable="true"  @dragstart="dragstart(item)" @mousedown.stop="stopPropagation()">
                                        <div style="width:100%;" class="sKuimg"   draggable="true"  @dragstart="dragstart(item)" @mousedown.stop="stopPropagation()">   
                                            <img :src="item.appPicture" draggable="false" alt="" style="width:100%;">
                                        </div>
                                        
                                        <div class="detail">
                                            <el-tooltip :content="item.skuName" placement="top" effect="light">
                                                <div style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">名称: {{item.skuName}}</div>
                                            </el-tooltip>
                                            <div>单价: ￥{{item.salePrice}}</div>
                                            <div>库存/销量: {{item.wareSkuNum}}/{{item.saleNum}}</div>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </el-card>
            </div>
            <div class="rightRun" style="position:relative">
                <div class="machineData flex-center">
                    <div class="H-100 border" style="width:44%;background:#fff;border-left:0;border-right:0;padding:15px 0 20px 20px">
                        <div class="bg-white H-100 border-right">
                            <div class="flex-center-Y groupMr">
                                <div class="groupMr">
                                    <span class="title" style="position:relative;">
                                    SKU热销Top3
                                    </span>
                                </div>
                                <div class='tabStyle'>
                                    <el-radio-group v-model="tabTime"
                                                    size="middle"
                                                    @change="timeChange">
                                        <el-radio-button label="1">今日</el-radio-button>
                                        <el-radio-button label="7">近7天</el-radio-button>
                                        <el-radio-button label="30">近30天</el-radio-button>
                                    </el-radio-group>
                                </div>
                            </div>
                            <div style="padding-top:20px">
                                <div class="flex-center-Y"  style="padding-bottom:20px;padding-right:15px" v-for="(item,index) in hotSku" :key="index">
                                    <div class="flex-2">
                                        <span style="position:relative;color:#999999">
                                        Top{{index+1}}：
                                        </span>
                                        {{item.skuName}}
                                    </div>
                                    <div class="flex-1 text-right">
                                        <span style="color:#999999" v-if="index==0">销量：</span>{{item.skuNum}}笔
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="H-100" style="width:56%">
                        <div class="bg-white border H-100 p-20" style="padding-top:15px;border-left:0">
                            <div class="flex-center-Y" style="justify-content: space-between;">
                                <div>
                                    <span class="title" style="position:relative;">
                                    当前机器货道top3
                                    </span>
                                    <!-- <span class="title" style="position:relative;" v-else>
                                    当前计划执行经营数据
                                    </span> -->
                                </div>
                                <div class='tabStyle'>
                                    <el-radio-group v-model="tabTime1"
                                                    size="middle"
                                                    @change="timeChange1">
                                        <el-radio-button label="1">今日</el-radio-button>
                                        <el-radio-button label="7">近7天</el-radio-button>
                                        <el-radio-button label="30">近30天</el-radio-button>
                                    </el-radio-group>
                                </div>
                                <div class="text-right hotRadio">
                                    <el-radio-group v-model="hotFlag"
                                                    size="middle"
                                                    class="jy-2 time-tabs"
                                                    @change="hotChange">
                                        <el-radio-button label="0">热销&nbsp;</el-radio-button>
                                        <el-radio-button label="1">冷门</el-radio-button>
                                    </el-radio-group>
                                </div>
                            </div>
                            <div style="padding-top:20px">
                                <div v-if="HOTFlag">
                                    <div class="flex-center-Y" style="padding-bottom:20px" v-for="(item,index) in chinnel" :key="index">
                                        <div class="flex-2">
                                            <span style="position:relative;color:#999">
                                            Top{{index+1}}：
                                            </span>
                                            {{item.channelid}}货道({{item.trailsNo}})
                                        </div>
                                        <div class="flex-1 text-right">
                                            <span style="position:relative;color:#999" v-if="index==0">出货量：</span>{{item.channelidCount}}次
                                        </div>
                                    </div>
                                </div>
                                <div v-else class="center" style="padding-top:9%">暂无</div>
                            </div>
                            <!-- <div style="padding-top:2%" v-if="tab=='1' && planeList.length>0">
                                <div class="flex-center">
                                    <div class="flex-1 p-1 pl-0 pr-0">利润总额: <span class="weight">￥{{todyData.profits}}</span></div>
                                    <div class="flex-1 p-1 pl-0 pr-0">订单总量: <span class="weight">{{todyData.orderNum}}</span></div>
                                </div>
                                <div class="flex-center">
                                    <div class="flex-1 p-1 pl-0 pr-0">销售总额: <span class="weight">￥{{todyData.sales}}</span></div>
                                    <div class="flex-1 p-1 pl-0 pr-0">消费用户: <span class="weight">{{todyData.userNum || 0}}</span></div>
                                </div>
                                <div class="flex-center">
                                    <div class="flex-1 p-1 pl-0 pr-0">退款总额: <span class="weight">￥{{todyData.refuredPrice}}</span></div>
                                    <div class="flex-1 p-1 pl-0 pr-0">坏账总额: <span class="weight">￥{{todyData.producementPrice}}</span></div>
                                </div>
                            </div>
                            <div class="center" style="padding-top:9%" v-if="tab=='1' && planeList.length==0">当前机器暂无历史计划</div> -->
                        </div>
                    </div>
                </div>
                <div class="storeChange">
                    <div class="bg-white H-100">
                        <div class="H-100 border-right" v-show="options.length>0">
                            <div class="flex-center-Y">
                                <el-popover placement="top"
                                                trigger="hover">
                                        <span class="title">
                                        {{ storeData.storeName }}——{{selectVent.machineName}}
                                        </span>
                                        <span slot="reference" class="title limit" style="position:relative;max-width:18vw;display:inline-block;" @click="showStoreList">
                                        {{ storeData.storeName }}——{{selectVent.machineName}}
                                        </span>
                                </el-popover>
                                <i class="el-icon-arrow-right" style="margin-bottom:5px" @click="showStoreList"></i>
                                <div class="cascader" style="height:25px">
                                        <el-cascader
                                            ref="storeref"
                                            v-model="selectCode"
                                            :options="options"
                                            :props="props"
                                            expand-trigger="hover"
                                            popper-class="storeClass"
                                            @change="changeStore">
                                        </el-cascader>
                                </div>
                            </div>
                            <!-- <div style="height:30%">
                                <span class="title" style="position:relative">
                                {{storeData.storeName}}——{{selectVent.machineName}}
                                </span>
                            </div> -->
                            <div class="pt-2" style="height:35%;color:#999">
                                <div class="p-1 pl-0 pr-0"><span>{{storeData.area}}</span></div>
                            </div>
                        </div>  
                        <!-- <div class="flex-2 text-right arrow  H-100" style="max-height:18px">
                            <span class="blue" @click="showStoreList"><i class="el-icon-caret-right blue"></i></span>
                            <el-cascader
                                ref="storeref"
                                v-model="selectCode"
                                :options="options"
                                :props="props"
                                expand-trigger="hover"
                                popper-class="storeClass"
                                @change="changeStore">
                            </el-cascader>
                        </div> -->
                        
                    </div>
                </div>
            </div>
            <div class="blank">
                <!-- <el-radio-group v-model="tab"
                                 size="middle"
                                 class="jy-2 time-tabs"
                                 @change="tabChange"
                                 fill="#fff"
                                 text-color="#333333">
                     <el-radio-button label="0">销售计划</el-radio-button>
                     <el-radio-button label="1">历史记录</el-radio-button>
                     <el-radio-button label="2">提取计划</el-radio-button>
                 </el-radio-group> -->
                 <div class="flex-center-Y" @click="tabChange">
                     <div @click="tab=0" :class="tab==0?'tab1':'tab'" style="margin-right:50px">销售计划</div>
                     <div @click="tab=1" :class="tab==1?'tab1':'tab'">回收站</div>
                 </div>
            </div>
            <div class="centerRun">
                <div class="products" style="position:relative;">
                    <div class="flex-center-Y" style="justify-content:center;margin-bottom:20px;position:absolute;top:1px;left:21px;width:84%;z-index:10;background:#fff;height: 80px;">
                        <div class="btn1 flex-center-Y" @click="addPlane" v-if="tab==0 && planeList.length<5">
                            <img src="../../assets/icons/add.png" alt="">
                            新建计划
                        </div>
                        <div class="btn1 flex-center-Y disabled" v-if="tab==0 && planeList.length>=5">
                            <img src="../../assets/icons/add-disaled.png" alt="">
                            新建计划
                        </div>
                        <div class="btn1 flex-center-Y" @click="clearDialog=true" v-if="tab==1">
                            <img src="../../assets/icons/clear.png" alt="" style="width:15px">
                            清空回收站
                        </div>
                    </div>
                    <div class="bg-white border H-100 p-20 pr-0 pl-0" style="position:relative;overflow:auto">
                        <div class="flex-center-Y" style="height:60px">
                        </div>
                        <div :class="isCopy?'flex-center-Y H-plane H-plane2':'flex-center-Y H-plane H-plane1'" v-show="this.showAdd">
                            <div class="flex-3">
                                <div class="flex-center-Y">
                                    <span class="addInput">
                                        <el-input maxlength="6" v-model="addForm.name" size="mini" ref="addInput"></el-input>    
                                    </span>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <el-tooltip class="item" effect="light" content="提交" placement="top">
                                        <i class="el-icon-circle-check blue" @click="commitAdd"></i>&nbsp;
                                    </el-tooltip>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <i class="el-icon-remove-outline blue" @click="backAdd"></i>
                                </div>
                                <div style="font-size:12px;padding-top:5px">
                                    <div class="grey">应用时间:</div>
                                    <div class="planeInput">
                                        <el-date-picker
                                            size="mini"
                                            v-model="addForm.date"
                                            type="date"
                                            value-format="yyyy-MM-dd"
                                            :picker-options="pickerOptions0"
                                            placeholder="选择日期">
                                            </el-date-picker>
                                    </div>
                                    <div class="planeInput">
                                        <el-time-picker
                                            size="mini"
                                            v-model="addForm.time"
                                            value-format="HH:mm"
                                            format="HH:mm"
                                            placeholder="选择时间">
                                        </el-time-picker>
                                    </div>
                                    <div class="planeInput">
                                        <el-select v-model="addForm.machineCode" placeholder="应用机器" v-if="isCopy">
                                            <el-option
                                            v-for="item in sameMachine"
                                            size="mini"
                                            :key="item.machineCode"
                                            :label="item.machineName"
                                            :value="item.machineCode">
                                            </el-option>
                                        </el-select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-for="(item,i) in planeList" :key="i" class="H-plane" @click="choose(item)" :style="selectPlane.salePlanId==item.salePlanId ? 'background:#F5F6F8' :''">
                            <div>
                                <span>{{item.salePlanName || ''}}</span>&nbsp;<span v-if="tab==2">({{item.machineName}})</span>
                                <el-tooltip class="item" effect="light" content="删除计划" placement="top" v-if="tab==0 && selectPlane.salePlanId==item.salePlanId">
                                    <i class="el-icon-delete grey fr" @click.stop="delDialog=true;selectPlane=item"></i>
                                </el-tooltip>
                                <el-tooltip class="item" effect="light" content="删除计划" placement="top" v-if="tab==1 && selectPlane.salePlanId==item.salePlanId">
                                    <i class="el-icon-delete grey fr" @click.stop="moveDialog=true;selectPlane=item"></i>
                                </el-tooltip>
                                <el-tooltip class="item" effect="light" content="复制计划" placement="top" v-if="selectPlane.salePlanId==item.salePlanId">
                                    <i class="el-icon-document grey fr" @click="copyPlane(item)"  v-if="tab==0" style="margin-right:15px"></i>
                                </el-tooltip>
                                <el-tooltip class="item" effect="light" content="提取计划" placement="top"  v-if="selectPlane.salePlanId==item.salePlanId">
                                    <i class="el-icon-upload2 grey fr" @click="getDialog=true;selectPlane=item"  v-if="tab==1" style="margin-right:15px"></i>
                                </el-tooltip>
                            </div>
                            <div style="font-size:12px;margin-top:20px;color:#999">
                                应用时间：
                                {{item.gmtDay}}
                                {{item.gmtTime}}
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="ventChange">
                    <div class="bg-white H-100 p-20" v-if="planeList.length>0" style="background:#F5F6F8;padding-left:30px;padding-right:30px">
                        <div class="H-100">
                            <div class="flex-center-Y" style="justify-content:space-between">
                                <div class="flex-center-Y">
                                   <span class="title" style="position:relative;font-size:14px">
                                       {{selectPlane.salePlanName || ''}}
                                    </span>
                                    <div class="btn flex-center-Y" @click="showMoveDiv"  v-if="tab==0"><img src="../../assets/icons/list.png" alt="">商品列表</div>
                                    <div class="flex-center-Y"  v-if="tab==0">
                                        <span class="normalcolor" style="width:15px;height:15px;display:inline-block;border-radius:50%;margin-left:30px"></span><span>&nbsp;正常</span>
                                    </div>
                                    <div class="flex-center-Y"  v-if="tab==0">
                                        <span class="saleallcolor" style="width:15px;height:15px;display:inline-block;border-radius:50%;margin-left:30px"></span><span>&nbsp;缺货</span>
                                    </div>
                                    <div class="flex-center-Y"  v-if="tab==0">
                                        <span class="stopcolor" style="width:15px;height:15px;display:inline-block;border-radius:50%;margin-left:30px"></span><span>&nbsp;暂停销售</span>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <div class="flex-center-Y" v-if="tab==0">
                                        <div class="btn2 flex-center-Y"><span class="blue" @click="setTemplateVisible=true;$nextTick(function(){$refs.templateInput.focus()})"><img src="../../assets/icons/change.png" alt="">转为销售模板</span></div>
                                        <div :class="isSave ? 'btn2 flex-center-Y':'btn3 flex-center-Y'"><span @click="applicate"><img v-if="isSave" src="../../assets/icons/save.png" alt=""><img v-else src="../../assets/icons/save-1.png" alt="">保存方案</span></div>
                                    </div>
                                </div>
                            </div>
                           
                            <div style="height:95%;padding-top:30px;overflow:auto" v-loading="loading">
                                <div v-for="(item,key) in data" :key="key" class="row-box flex-center-Y" style="height:130px">
                                    <div v-for="(i,index) in item" :key="index" class="col-box" @drop="drop(i)" @dragover.prevent @click="showDetail(i)">
                                        <div class="num">
                                            {{i.trailsNo}}
                                        </div>
                                        <div  v-if="tab==0" :class="(i.timeFlag=='0' && i.wareLimitFlag=='0') ? 'stopcolor status' : (((i.timeFlag=='1' && i.wareLimitFlag=='1') || (i.timeFlag=='0' && i.wareLimitFlag=='1')) ? 'normalcolor status' : ((i.timeFlag=='0' || i.wareLimitFlag=='0') ? 'saleallcolor status' : 'status'))"></div>
                                        <div class="bottomBox flex-center-Y">
                                            <el-popover
                                            placement="top-start"
                                            width="200"
                                            trigger="click"
                                            >
                                            <div>SKU名称：{{skuDetail.skuName}}</div>
                                            <div>售价：￥{{skuDetail.salePrice}}</div>
                                            <div v-if="skuDetail.skuFlag">采购周期：{{skuDetail.purchasePeriod}}天</div>
                                            <div v-if="skuDetail.skuFlag">总库存：{{skuDetail.wareSkuNum}}件</div>
                                            <div v-if="skuDetail.skuFlag">一次性采购量：{{skuDetail.purchaseLimit}}件</div>
                                            <div v-if="skuDetail.skuFlag">低库存预警值：{{skuDetail.wareLimit}}件</div>
                                            <div v-if="skuDetail.skuFlag">批次：{{skuDetail.batchNum}}个</div>
                                            <div slot="reference" class="picImg">
                                                <img ondragstart="return false" v-if="i.appPicture" :src="i.appPicture" alt="">
                                            </div>
                                            </el-popover> 
                                            <img class="img" src="../../assets/icons/dotted.png" alt="">
                                            <div class="info">
                                                <div class="name limit-ellipsis">{{i.skuName}}</div>
                                                <div class="price">¥{{i.salePrice }}<span class="diss" v-if="i.aislePromotionFlag">¥{{i.promotionPrice}}</span></div>
                                            </div>
                                        </div>
                                        <!-- <el-popover
                                            placement="top-start"
                                            width="200"
                                            trigger="click"
                                            >
                                            <div>SKU名称：{{skuDetail.skuName}}</div>
                                            <div>售价：￥{{skuDetail.salePrice}}</div>
                                            <div v-if="skuDetail.skuFlag">采购周期：{{skuDetail.purchasePeriod}}天</div>
                                            <div v-if="skuDetail.skuFlag">总库存：{{skuDetail.wareSkuNum}}件</div>
                                            <div v-if="skuDetail.skuFlag">一次性采购量：{{skuDetail.purchaseLimit}}件</div>
                                            <div v-if="skuDetail.skuFlag">低库存预警值：{{skuDetail.wareLimit}}件</div>
                                            <div v-if="skuDetail.skuFlag">批次：{{skuDetail.batchNum}}个</div>
                                            <div  slot="reference" style="width:5Vh;height:5Vh;position:absolute;top:50%;left:50%;transform: translate(-50%,-50%)">
                                                <img ondragstart="return false" v-if="i.appPicture" :src="i.appPicture" style="width:5Vh;height:5Vh" alt="">
                                            </div>
                                        </el-popover> -->
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="H-100 p-2" v-else style="background:#F5F6F8">
                        <div class="title" style="height:90%;padding-top:5%;text-align:center;font-weight:bold;color:#999">
                            暂无计划
                            <div>
                                <img style="width:45vh" src="../../assets/operaion/blank.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog
            :visible.sync="delDialog"
            width="400px"
            custom-class="salePlaneDialog"
            >
            <div>
                <div class="title">是否确认删除该销售计划？</div>
                <div class="box-bottom flex-center-Y">
                    <div class="flex-1">
                        <div class="btn1 m-auto" @click="commitMove">
                            彻底删除
                        </div>
                    </div>
                    <div class="flex-1">
                        <div class="btn m-auto" style="float:none" @click="delPlane">
                            放入回收站
                        </div>
                    </div>
                </div>
            </div>
        </el-dialog>
        <el-dialog
            :visible.sync="clearDialog"
            width="400px"
            custom-class="salePlaneDialog"
            >
            <div>
                <div class="title">是否确认清空回收站？</div>
                <div class="box-bottom flex-center-Y">
                    <div class="flex-1">
                        <div class="btn1 m-auto" @click="clearDialog=false">
                            取消
                        </div>
                    </div>
                    <div class="flex-1">
                        <div class="btn m-auto" style="float:none" @click="commitDel">
                            确认
                        </div>
                    </div>
                </div>
            </div>
        </el-dialog>
        <el-dialog
            :visible.sync="moveDialog"
            width="400px"
            custom-class="salePlaneDialog"
            >
            <div>
                <div class="title">是否确认彻底删除该计划？</div>
                <div class="box-bottom flex-center-Y">
                    <div class="flex-1">
                        <div class="btn1 m-auto" @click="moveDialog=false">
                            取消
                        </div>
                    </div>
                    <div class="flex-1">
                        <div class="btn m-auto" style="float:none" @click="commitMove">
                            确认
                        </div>
                    </div>
                </div>
            </div>
        </el-dialog>
        <el-dialog
            :visible.sync="getDialog"
            width="400px"
            custom-class="salePlaneDialog"
            >
            <div>
                <div class="title">是否确认提取该计划？</div>
                <div class="box-bottom flex-center-Y">
                    <div class="flex-1">
                        <div class="btn1 m-auto" @click="getDialog=false">
                            取消
                        </div>
                    </div>
                    <div class="flex-1">
                        <div class="btn m-auto" style="float:none" @click="getPlane">
                            确认
                        </div>
                    </div>
                </div>
            </div>
        </el-dialog>
        <el-dialog
            :visible.sync="setTemplateVisible"
            width="400px"
            custom-class="salePlaneDialog"
            >
            <div>
                <div class="title">
                    <el-input ref="templateInput" v-model="templateName" placeholder="请输入模板名称"></el-input>
                </div>
                <div class="box-bottom flex-center-Y">
                    <div class="flex-1">
                        <div class="btn1 m-auto" @click="setTemplateVisible=false">
                            取消
                        </div>
                    </div>
                    <div class="flex-1">
                        <div class="btn m-auto" style="float:none" @click="toTemplate">
                            确认
                        </div>
                    </div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import "v-charts/lib/style.css";
import { regionData, CodeToText } from "element-china-area-data";
export default {
    directives: {
        drag: {
            // 指令的定义
            bind: function (el) {
                let odiv = el;   //获取当前元素
                // odiv.ondblclick = (e) => {
                    odiv.onmousedown = (e) => {
                    //算出鼠标相对元素的位置
                    let disX = e.clientX - odiv.offsetLeft;
                    let disY = e.clientY - odiv.offsetTop;
                    document.onmousemove = (e)=>{
                        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                        let left = e.clientX - disX;    
                        let top = e.clientY - disY;
                
                        //移动当前元素
                        odiv.style.left = left + 'px';
                        odiv.style.top = top + 'px';
                    };
                    document.onmouseup = (e) => {
                        document.onmousemove = null;
                        document.onmouseup = null;
                    };
                };
            }
        }
    },
    data() {
        return {
            skuLoading:false,
            skuDetail:"",
            pickerOptions0: { 
                disabledDate(time) {
                    return time.getTime() < Date.now() - 8.64e7;//如果没有后面的-8.64e7就是不可以选择今天的 
                }
            },
            HOTFlag:true,
            chinnel:[],
            hotFlag:'0',
            isSave:false,//是否已经保存了
            getGmt:"",//被提取计划的时间
            isGet:false,//是否为提取计划
            getInfo:{},//被提取提取计划的内容
            sameMachine:[],//复制计划时可供选择的机器
            isCopy:false,//是否未复制计划
            copyInfo:{},
            copyFlag:false,
            selectPlane:{},
            planeParam:{
                pageNum:1,
                totalPage:5,
                pageRow:5,
                tab:"0"
            },
            showAdd:false,
            planeList:[
                // {name:"存档一",date:"2019-09-01",time:"00:00",isApplicate:true},
                // {name:"存档一",date:"2019-09-01",time:"00:00",isApplicate:true},
                // {name:"存档一",date:"2019-09-01",time:"00:00",isApplicate:true},
                // {name:"存档一",date:"2019-09-01",time:"00:00",isApplicate:true},
                // {name:"存档一",date:"2019-09-01",time:"00:00",isApplicate:true},
            ],
            addForm:{name:"新建计划",date:"",time:"",isApplicate:false},
            tab:"0",
            options: [ 
                // {
                //     storeCode: 'store001',
                //     storeName: '热血上海滩',
                //     children: [{
                //         storeCode: "12018080100009",
                //         trailsType: "44444444",
                //         storeName: "生鲜机",
                //     }]
                // }
                ],
            props:{value:"storeCode",label:"storeName",children:"machineJson"},
            selectCode:[],
            selectTab:"",
            time:0,//走势图时间
            showMoveSku:false,
            typeList:[{typeName:"热销SKU"},{typeName:"冷门SKU"},{typeName:"饮料类"},{typeName:"零食类"},{typeName:"日用品类"}],
            goodsType:"",
            typeId:"",
            skuList:[],
            params:{page:1,pageRow:8,totalCount:1000,searchName:""},
            storeList:[],
            storeData:{},
            selectVent:{},
            num:0,
            selectVentName:"",
            storeCode:this.$route.params.id,
            data:[],
            selectVentCode:"",
            trailsType:"",
            onlyRepair:[],
            storeStatusTabs: [
                {
                    name: "营业中",
                    id: "1"
                },
                {
                    name: "休息中",
                    id: "0"
                }
            ],
            hotSku:[],
            selectSku:"",
            todyData:"",
            isTemplate:false,
            templateId:"",
            changeName:"",
            loading:false,
            fullscreenLoading: false,
            tabTime:"1",
            tabTime1:"1",
            delDialog:false,
            clearDialog:false,
            moveDialog:false,
            getDialog:false,
            templateName:"",
            setTemplateVisible:false
        };
    },
    created() {
        // document.getElementsByTagName("body")[0].style.height="100%";
        document.getElementsByTagName("body")[0].style.minWidth="1260px";
        document.getElementsByTagName("body")[0].style.overflow="auto";
        document.getElementsByTagName("body")[0].style.color="#333333"
        // document.getElementsByTagName("html")[0].style.height="100%";
        // this.orderHight = document.body.clientHeight
        // this.$nextTick(_ => {
        //         document.getElementById('salePlane').style.height = this.orderHight*0.9 + 'px'
        //         document.getElementById('moveSku').style.height = this.orderHight*0.9 + 'px'
        //         })
        this.getStoreList()
    },
    methods: {
        commitDel(){
            this.api({
                    url: "/inventory/salePlanEmptyTrash",
                    method: "post",
                    data: {
                            machineCode:this.selectVent.machineCode,
                            manageId:this.userId
                            }
                })
                    .then(data => {
                         this.$message({
                            type:"success",
                            message:"清空成功 ! "
                        })
                        this.clearDialog=false
                        this.getPlaneList()
                        
                })
        },
        timeChange(){
            this.getHotSku()
        },
        timeChange1(){
            this.showChinnelData()
        },
        dragMask(item){//拖动无效商品时
            this.$message({
                    type: "error",
                    message: "该商品暂无库存~"
                });
        },
        stopPropagation(){},
        showDetail(item){
            this.api({
                    url: "/inventory/showSkuDetails",
                    method: "post",
                    data: {
                            skuCode:item.skuCode,
                            storeCode:this.storeData.storeCode
                            }
                })
                    .then(data => {
                        this.skuDetail=data
                        
                })
        },
        showChinnelData(){//当前热销冷门货道top
            let url
            if(this.tabTime1==1){
                url="/inventory/showHotChannelidDay"
            }else if(this.tabTime1==7){
                url="/inventory/showHotChannelid7Day"
            }else if(this.tabTime1==30){
                url="/inventory/showHotChannelid30Day"
            }
            this.api({
                    url: url,
                    method: "post",
                    data: {
                            machineCode:this.selectVent.machineCode
                            }
                })
                    .then(data => {
                        this.HOTFlag=data.hotFlag
                        if(this.hotFlag=='0'){
                            this.chinnel=data.hotChannelid
                        }else{
                            this.chinnel=data.coolChannelid
                        }
                        for(let i in this.chinnel){
                            for(let key in this.data){
                                for(let g in this.data[key]){
                                    if(this.chinnel[i].channelid==this.data[key][g].trailsNum){
                                        this.chinnel[i].trailsNo=this.data[key][g].trailsNo
                                    }
                                }
                            }
                        }
                        
                })
        },
        hotChange(){
            this.showChinnelData()
        },
        showPlaneData(){
            this.api({
                    url: "/inventory/showNowSaleProfit",
                    method: "post",
                    data: {
                            salePlanId:this.selectPlane.salePlanId
                            }
                })
                    .then(data => {
                        this.todyData=data
                })
        },
        toTemplate(){//转为销售模板
            // this.$confirm('是否转为该机器的销售模版?', '提示', {
            //     confirmButtonText: '确定',
            //     cancelButtonText: '取消',
            //     type: 'warning'
            //     }).then(() => {
                    if(!this.templateName){
                         this.$message({
                                type:"warning",
                                message:"请输入模版名称~"
                            })
                            return;
                    }
                    this.api({
                        url: "/store/addTemplateForMachine",
                        method: "post",
                        data: {
                                storeCode:this.storeData.storeCode,
                                machineCode:this.selectVent.machineCode,
                                trailsType:this.selectVent.trailsType,
                                isApplication:false,
                                templateInfo:this.skuInfo,
                                templateName:this.templateName
                                }
                    })
                        .then(data => {
                            this.setTemplateVisible=false
                            this.$confirm('转为销售模板成功!', '提示', {
                                        confirmButtonText: '立即查看',
                                        cancelButtonText: '关闭',
                                        type: 'warning'
                                        }).then(() => {
                                            this.$router.push({path:"/operation/storeDetailsS/"+this.storeData.storeCode+'/'+this.selectVent.machineCode})
                                        }).catch(() => {
                                        });
                        })
                        
                // }).catch(() => {
                         
                // });
            
        },
        getSameMachine(){
            this.api({
                    url: "/inventory/showVendByCopy",
                    method: "post",
                    data: {
                            machineCode:this.selectVent.machineCode,
                            manageId:this.userId,
                            storeCode:this.storeData.storeCode,
                            salePlanId:this.selectPlane.salePlanId
                            }
                })
                    .then(data => {
                        this.sameMachine=data
                })
        },
        getPlaneList(){//计划列表
         if(this.tab==0){
             this.api({
                    url: "/inventory/showSalePlan",
                    method: "post",
                    data: {
                            machineCode:this.selectVent.machineCode,
                            manageId:this.userId,
                            pageNum:this.planeParam.pageNum,
                            pageRow:this.planeParam.pageRow
                            }
                })
                    .then(data => {
                        this.planeList=data.list
                        this.planeParam.totalPage=Math.ceil(data.totalCount/5) 
                        if(this.planeList[0]){
                            this.selectPlane=this.planeList[0]
                            this.getMachine()
                            this.getMachineInfo()
                        }
                        
                })
         }else if(this.tab==1){
            this.api({
                    url: "/inventory/salePlanRecovery",
                    method: "post",
                    data: {
                            machineCode:this.selectVent.machineCode,
                            manageId:this.userId,
                            // pageNum:this.planeParam.pageNum,
                            // pageRow:this.planeParam.pageRow
                            }
                })
                    .then(data => {
                        this.planeList=data.list
                        // this.planeParam.totalPage=Math.ceil(data.totalCount/5) 
                        if(this.planeList[0]){
                            this.selectPlane=this.planeList[0]
                            this.getMachine()
                            this.getMachineInfo()
                        }
                        
                })
        }else{
            this.api({
                    url: "/inventory/getOtherSalePlan",
                    method: "post",
                    data: {
                            machineCode:this.selectVent.machineCode,
                            manageId:this.userId,
                            pageNum:this.planeParam.pageNum,
                            pageRow:this.planeParam.pageRow
                            }
                })
                    .then(data => {
                        this.planeList=data.list
                        this.planeParam.totalPage=Math.ceil(data.totalCount/5) 
                        if(this.planeList[0]){
                            this.selectPlane=this.planeList[0]
                            this.getMachine()
                            this.getMachineInfo()
                        }
                        
                })
        }
            
        },
        getPlane(){//提取计划
            if(this.options.length==0 && this.stockType=='A'){
                this.$message({
                    type:"warning",
                    message:"请先关联仓库哦~"
                })
                return;
            }
            this.getInfo=this.skuInfo
            this.getGmt=this.selectPlane.gmtPlan
            this.isCopy=false
            this.tab="0"
            this.getPlaneList()
            this.showAdd=true
            this.$nextTick(_ => {
                this.$refs.addInput.focus()
            })
            this.isGet=true
            this.getDialog=false
        },
        addPlane(){//新建
            if(this.options.length==0 && this.stockType=='A'){
                this.$message({
                    type:"warning",
                    message:"请先关联仓库哦~"
                })
                return;
            }
            this.isCopy=false
            if(this.planeList.length==5){
                this.planeList.splice(this.planeList.length-1,1)
            }
            this.showAdd=true
            this.$nextTick(_ => {
                this.$refs.addInput.focus()
            })
        },
        backAdd(){//取消新建
            this.showAdd=false
        },
        commitAdd(){//提交新建
            // if(!this.addForm.name){
            //     this.$message({
            //         type:"warning",
            //         message:"请输入计划名称"
            //     })
            //     return;
            // }
            if(!this.addForm.date || !this.addForm.time){
                this.$message({
                    type:"warning",
                    message:"请选择计划执行时间"
                })
                return;
            }
            let allSkuInfo=""
            let gmtStart=""
            let message=""
            if(this.isCopy){
                allSkuInfo=this.skuInfo
                gmtStart=this.copyInfo.gmtPlan
                this.selectVent.machineCode=this.addForm.machineCode
                message="复制成功 !"
            }else if(this.isGet){
                allSkuInfo=this.getInfo
                gmtStart=this.getGmt
                message="提取成功 !"
            }else{
                allSkuInfo=""
                gmtStart=""
                message="新建成功 !"
            }
            let gmtPlan=this.addForm.date + ' ' + this.addForm.time
             this.api({
                    url: "/inventory/addNewShopPlan",
                    method: "post",
                    data: {
                            storeCode:this.storeData.storeCode,
                            machineCode:this.selectVent.machineCode,
                            manageId:this.userId,
                            gmtPlan:gmtPlan,
                            salePlanName:this.addForm.name,
                            allSkuInfo:allSkuInfo,
                            gmtStart:gmtStart
                            }
                })
                    .then(data => {
                        this.$message({
                            type:"success",
                            message:message
                        })
                        this.showAdd=false
                        this.getPlaneList()
                        this.selectCode[1]=this.selectVent.machineCode
                        for(let i in this.options){
                            if(this.options[i].storeCode==this.storeData.storeCode){
                                for(let key in this.options[i].machineJson){
                                    if(this.options[i].machineJson[key].machineCode==this.selectCode[1]){
                                        this.selectVent=this.options[i].machineJson[key]
                                    }
                                }
                            }
                        }
                        
                    })
        },
        commitMove(){//回收站删除计划
            if(this.options.length==0 && this.stockType=='A'){
                this.$message({
                    type:"warning",
                    message:"请先关联仓库哦~"
                })
                return;
            }
            this.api({
                url: "/inventory/dropSalePlanInfo",
                method: "post",
                data: {
                        salePlanId:this.selectPlane.salePlanId
                        }
            })
                .then(data => {
                    this.$message({
                        type:"success",
                        message:"删除成功 ! "
                    })
                    this.moveDialog=false
                    this.delDialog=false
                    this.getPlaneList()
                })
        },
        delPlane(){//删除计划
            if(this.options.length==0 && this.stockType=='A'){
                this.$message({
                    type:"warning",
                    message:"请先关联仓库哦~"
                })
                return;
            }
            // this.$confirm('是否确定删除该计划?', '提示', {
            //     confirmButtonText: '确定',
            //     cancelButtonText: '取消',
            //     type: 'warning'
            //     }).then(() => {
                    this.api({
                        url: "/inventory/deleteSalePlanInfo",
                        method: "post",
                        data: {
                                salePlanId:this.selectPlane.salePlanId
                                }
                    })
                        .then(data => {
                            this.$message({
                                type:"success",
                                message:"删除成功 ! "
                            })
                            this.delDialog=false
                            this.getPlaneList()
                        })
                
                // }).catch(() => {
                      
                // });
        },
        copyPlane(item){
            if(this.options.length==0 && this.stockType=='A'){
                    this.$message({
                        type:"warning",
                        message:"请先关联仓库哦~"
                    })
                    return;
                }
            this.showAdd=true
            this.$nextTick(_ => {
                this.$refs.addInput.focus()
            })
            this.copyInfo=item
            this.isCopy=true
            this.getSameMachine()
        },
        // toPrev(){
        //     console.log(111111)
        //     this.planeParam.pageNum-=1
        //     if(this.planeParam.pageNum<=1){
        //         this.planeParam.pageNum=1
        //     }
        //     this.getPlaneList()
        // },
        // toNext(){
        //     this.planeParam.pageNum+=1
        //     if(this.planeParam.pageNum>=this.planeParam.totalPage){
        //         this.planeParam.pageNum=this.planeParam.totalPage
        //     }
        //     this.getPlaneList()
        // },
        choose(item){
            this.selectPlane=item
            for(let i in this.planeList){
                this.planeList[i].copyFlag=false
            }
            this.selectPlane.copyFlag=this.copyFlag
            this.getMachine()
            this.getMachineInfo()
        },
        tabChange(){
            this.planeParam.pageNum=1
            this.getPlaneList()
        },
        applicate(){//保存方案
            let allSkuInfo=JSON.parse(JSON.stringify(this.skuInfo))
            // for(let i in allSkuInfo){
            //     allSkuInfo[i].aisleSku=allSkuInfo[i].skuCode
            // }
            if(!this.isSave){
                return;
            }
            this.api({
                    url: "/inventory/applicationSaleInfo",
                    method: "post",
                    data: {
                            salePlanId:this.selectPlane.salePlanId,
                            allSkuInfo:allSkuInfo,
                            gmtPlan:this.selectPlane.gmtPlan
                            }
                })
                    .then(data => {
                        this.$message({
                                type:"success",
                                message:"保存成功 ! "
                            })
                            this.getPlaneList()
                            this.getMachineInfo()
                    })
        },
        load(){
            if(this.skuList.length>=this.params.totalCount){
                console.log("到底了")
            }else{
                this.params.page+=1
                this.getSkuList()
            }
            
        },
        dragstart(item){
            this.selectSku=item
        },
        drop(i){
                this.api({
                    url: "/inventory/updateSaleSku",
                    method: "post",
                    data: {
                            storeCode:this.storeData.storeCode,
                            updateSku:this.selectSku.skuCode,
                            channelid:i.trailsNum,
                            machineCode:this.selectVent.machineCode,
                            salePlanId:this.selectPlane.salePlanId
                            }
                })
                    .then(data => {
                        this.getMachineInfo()
                    })
            },
        showStoreList(){//select组件聚焦
            this.$nextTick(function () {
            // this.$refs.storeref.showMenu()
            this.$refs.storeref.toggleDropDownVisible()
            })
        },
        showVentList(){//select组件聚焦
            this.$nextTick(function () {
            this.$refs.ventref.focus()
            })
        },
        showMoveDiv(){
            this.showMoveSku=true
            this.getSkuType()//sku分类
            this.skuList=[]
            
        },
        getSkuType(){
            this.api({
                url: "/store/skuSubjectType",
                method: "post",
                data: {
                }
            })
                .then(data => {
                    this.typeList=data
                    this.typeList[0].isActive=true
                    this.goodsType=this.typeList[0].goodsType
                    this.typeId=this.typeList[0].typeId
                    this.params={page:1,pageRow:8,totalCount:1000,searchName:""}
                    this.getSkuList()
                })
                .catch(e => {});
        },
        search(){
            this.params.page=1
            this.goodsType=''
            this.typeId=''
            this.skuList=[]
            this.getSkuList()
        },
        getSkuList(){
            this.skuLoading=true
            let page=this.params.page
            let pageRow=this.params.pageRow
            let skuName=this.params.searchName
             this.api({
                url: "/store/salePlanSubject",
                method: "post",
                data: {
                    goodsType:this.goodsType,
                    typeId:this.typeId,
                    storeCode:this.storeData.storeCode,
                    pageNum:page,
                    pageRow:pageRow,
                    skuName:skuName
                }
            })
                .then(data => {
                    // this.skuList=data.list
                    this.skuList=this.skuList.concat(data.list)
                    console.log(this.skuList)
                    this.params.totalCount=data.totalCount
                    this.skuLoading=false
                })
                .catch(e => {});
        },
        chooseType(index,item){//sku列表选择分类
            for(let i in this.typeList){
                this.typeList[i].isActive=false
            }
            this.typeList[index].isActive=true
            let typeList=JSON.parse(JSON.stringify(this.typeList))
            this.typeList=typeList
            this.goodsType=item.goodsType
            this.typeId=item.typeId
            this.skuList=[]
            this.params={page:1,pageRow:8,totalCount:1000,searchName:""}
            this.getSkuList()
        },
        getStoreList(){//获取门店和机器列表
            this.api({
                url: "/inventory/showStoreAndVend",
                method: "post",
                data: {
                    manageId: this.userId
                }
            })
                .then(data => {
                    this.options=data
                    for(let i in this.options){
                        for(let key in this.options[i].machineJson){
                            this.options[i].machineJson[key].storeName=this.options[i].machineJson[key].machineName
                            this.options[i].machineJson[key].storeCode=this.options[i].machineJson[key].machineCode
                        }
                    }
                    if(this.$route.params.storeCode!==':storeCode' && this.$route.params.machineCode!==':machineCode'){//模板转为销售计划跳转过来的
                        this.selectCode[0]=this.$route.params.storeCode
                        this.selectCode[1]=this.$route.params.machineCode
                        for(let i in this.options){
                            if(this.options[i].storeCode==this.selectCode[0]){
                                this.storeData=this.options[i]
                                for(let key in this.options[i].machineJson){
                                    if(this.options[i].machineJson[key].machineCode==this.selectCode[1]){
                                        this.selectVent=this.options[i].machineJson[key]
                                    }
                                }
                            }
                        }
                        console.log("aaaaaaa")
                        this.getPlaneList()
                        this.showChinnelData()
                        this.getHotSku()
                        
                    }else{
                        if(this.options[0] && this.options[0].machineJson[0]){
                        this.selectCode[0]=this.options[0].storeCode
                        this.selectCode[1]=this.options[0].machineJson[0].machineCode
                        this.storeData=this.options[0]
                        this.selectVent=this.options[0].machineJson[0]
                        console.log("bbbb")
                        this.getMachine()
                        this.getPlaneList()
                        this.showChinnelData()
                        this.getHotSku()

                    }
                    }
                    
                    

                })
                .catch(e => {
                });
                this.getHotSku()
                
        },
        getMachine(){//获取机器类型
            this.api({
                url: "/inventory/showTrailsTypeDetails",
                method: "post",
                data: {
                    machineCode: this.selectVent.machineCode
                }
            })
                .then(data => {
                    this.data=data
                })
                .catch(e => {});
        },
        getHotSku(){
            let url
            if(this.tabTime==1){
                url="/store/topHotSkuDay"
            }else if(this.tabTime==7){
                url="/store/topHotSku7Day"
            }else if(this.tabTime==30){
                url="/store/topHotSku"
            }
            this.api({
                url: url,
                method: "post",
                data: {
                    storeCode: this.storeData.storeCode
                }
            })
                .then(data => {
                    this.hotSku=data
                })
                .catch(e => {});
        },
        getTodyData(){//今日数据
            this.api({
                url: "/store/todayMachineProfits",
                method: "post",
                data: {
                    machineCode:this.selectVent.machineCode
                }
            })
                .then(data => {
                    this.todyData=data
                })
                .catch(e => {});
        },
        getMachineInfo(){//获取机器详情
        this.loading=true
            this.api({
                url: "/inventory/showChannelidJson",
                method: "post",
                data: {
                        machineCode:this.selectVent.machineCode,
                        storeCode: this.storeData.storeCode,
                        salePlanId:this.selectPlane.salePlanId
                        }
            })
                .then(data => {
                   this.copyFlag=data.copyFlag
                   this.isSave=data.addFlag
                   for(let i in this.planeList){
                        this.planeList[i].copyFlag=false
                    }
                    this.selectPlane.copyFlag=this.copyFlag
                   this.skuInfo=data.tempSkuInfo
                    for(let i in this.data){
                        for(let g in this.data[i]){
                            for(let key in this.skuInfo){
                            if(this.data[i][g].trailsNum==this.skuInfo[key].channelid){
                                this.data[i][g].skuCode=this.skuInfo[key].skuCode
                                this.data[i][g].purchasePeriod=this.skuInfo[key].purchasePeriod
                                this.data[i][g].appPicture=this.skuInfo[key].appPicture
                                this.data[i][g].skuName=this.skuInfo[key].skuName
                                this.data[i][g].salePrice=this.skuInfo[key].salePrice
                                this.data[i][g].aislePromotionFlag=this.skuInfo[key].aislePromotionFlag
                                this.data[i][g].promotionPrice=this.skuInfo[key].promotionPrice
                                this.data[i][g].wareLimitFlag=this.skuInfo[key].wareLimitFlag
                                this.data[i][g].timeFlag=this.skuInfo[key].timeFlag

                            }
                        }
                        }
                    }
                    this.data=JSON.parse(JSON.stringify(this.data))
                    this.loading=false
                })
                if(this.tab=='1'){
                    this.showPlaneData()
                }
        },
        changeStore(value){
            this.$nextTick(function () {//关闭下拉框
            // this.$refs.storeref.hideMenu()
            this.$refs.storeref.toggleDropDownVisible()
            })
            this.storeCode=value[0]
            for(let i in this.options){
                if(this.options[i].storeCode==this.storeCode){
                    this.storeData=this.options[i]
                    for(let key in this.options[i].machineJson){
                        if(value[1]==this.options[i].machineJson[key].machineCode){
                            this.selectVent=this.options[i].machineJson[key]
                        }
                    }
            }
            
            }  
            console.log(this.selectVent)
            this.getPlaneList()
            this.getMachine()
            this.getHotSku()
            // 重新请求sku列表
            this.skuList=[]
            this.params={page:1,pageRow:8,totalCount:1000,searchName:""}
            this.getSkuList()
            this.showChinnelData()
        },
        // changeMachine(){
        //     for(let i in this.machineList){
        //         if(this.selectVentCode==this.machineList[i].machineCode){
        //             this.selectVent=this.machineList[i]
        //         }
        //     }
        //     this.api({
        //                     url: "/store/isHot",
        //                     method: "post",
        //                     data: {
        //                         vendCode: this.selectVent.machineCode
        //                     }
        //                 })
        //                     .then(data => {
        //                         this.selectVentName=this.selectVent.typeName
        //                     })
        //                     .catch(e => {});
        //     this.getMachineInfo()
        // },
        
    },
    computed: {
        ...mapGetters(["userId", "userName","stockType"])
    }
};
</script>
