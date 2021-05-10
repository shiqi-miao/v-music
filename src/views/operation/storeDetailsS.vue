<style lang="scss" scoped>
#storeRun{height: 89vh;background: #fff;}
#storeRun{height: 100%;}
.app-container{background: #F5F6F8;height: 100%;}
.icon {
    width: 18px;
    height: 18px;
    margin-right: 6px;
}
.funcIcon{width: 14px;height:14px;cursor:pointer;margin-left: 10px;}
.btn{cursor: pointer;width: 120px;height:32px;color:#fff;background:rgba(64,158,255,1);border-radius:4px;line-height:32px;font-size: 14px;img{width: 14px;height: 14px;margin-right: 10px;};justify-content: center;}
.btn2{cursor: pointer;width: 120px;height:32px;color:#409EFF;background:#fff;border-radius:4px;line-height:32px;font-size: 14px;img{width: 14px;height: 14px;margin-right: 10px;};justify-content: center;}
.btn3{width: 120px;height:32px;color:#999999;background:#E4E4E4;border-radius:4px;line-height:32px;font-size: 14px;img{width: 14px;height: 14px;margin-right: 10px;};justify-content: center;}
.btn1{cursor: pointer;width: 140px;height:32px;color:rgba(64,158,255,1);background:#fff;border:1px solid rgba(64,158,255,1);border-radius:4px;line-height:32px;font-size: 14px;img{width: 14px;height: 14px;margin-right: 10px;};justify-content: center;}
.top {
    height: 26vh;
}
.top-left{margin-top:20px;margin-bottom: 40px;}
.top-right{width:11%;font-size:12px;margin-top:20px;
    div{color: #999;margin-bottom: 20px;height:14px}
    span{color:#333}
}
.top-right1{width:33.3333%;}
.tabStyle{margin-left:18px;}
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
    padding: 0!important
}
.grey{
    color: #9B9B9B!important;
    cursor: pointer;
    padding: 0px!important
}
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
.showConfiguration .el-input{width: 30%}
#storeRun{position: relative;border:1px solid rgba(226,229,235,1);}
#storeRun .centerRun{
    height: 173px;
    /* padding: 2vh; */
    padding-top: 0;
    padding-left: 0;
}
#storeRun .leftRun{
    height: 600px;
}
.mr-15{margin-right: 15px;}
.ml-15{margin-left: 15px;}
.p-1{padding: 1%}
.p-2{padding: 2%}
.p-20{padding: 2vh}
.pt-2{padding-top: 2%}
.p-4{padding: 4%}
.p-5{padding: 5%}
.p-6{padding: 6%}
.Pb-0{padding-bottom: 0}
.Pt-0{padding-top: 0}
.pl-0{padding-left: 0!important}
.pr-0{padding-right: 0}
.pl-8{padding-left: 8%!important}
.pr-8{padding-right: 8%!important}
.pl-2{padding-left: 2%!important}
.pr-2{padding-right: 2%!important}
.pl-1{padding-left: 1%!important}
.pr-1{padding-right: 1%!important}
.mb-18{margin-bottom: 18px;}
.H-100{height: 100%}
.justify-content-between{justify-content: space-between;}
.storeChange{height:100%;width: 22%;padding: 20px;border-right: 1px solid #E2E5EB;}
.ventChange{
    // height: 80%;
    width: 100%;
    padding: 20px;
    border-top: 1px solid #E2E5EB;
    position: absolute;left:0;bottom:0;
    .ventInfo{height:90%;max-width: 95vw;overflow: auto;background:rgba(245,246,248,1);padding: 20px;margin-top: 20px;
        .top{
                height: 32px;
                margin-bottom: 20px;
        }
    }
    .popover{
        width:250px;
        height:445px;
        background:rgba(255,255,255,1);
        border-radius:15px;
    }
}
.dataTody{height:100%;width: 78%;padding: 20px;padding-top: 15px;}
.products{height: 80%}
.camera{height: 30%}
.leftRun ul{list-style: none;padding-left:0%;font-weight: 400;margin: 0;}
.leftRun ul li{position: relative;cursor: pointer;font-size: 16px;color: #999;padding-left:20px;height: 47px;line-height: 47px;border:1px solid rgba(245,246,248,1);border-top:0;overflow: hidden;}
.leftRun ul li.active{color: #333;background:#F5F6F8}
.centerRun ul{list-style: none;padding-left:10%;font-weight: 400}
.centerRun ul li{padding:5% 0 ;position: relative;cursor: pointer;}
#data{padding: 0 1.8vh}
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
.noMask{position: absolute;top: 0;left: 4%;width: 100%;height: 100%;background: #e4e7ed91;z-index: 100;width: 92%;border-radius:5px;}
.box img{width: 100%;}
.product{overflow-y: auto;background: #F5F6F8;padding: 10px 15px;}
.product .el-col{padding:0 5px;margin-top: 10px;position: relative;}
.row-box{white-space:nowrap;align-self: baseline;display: absolute;}
.row-box .col-box{
    height:130px;width: 220px;position: relative;background:  #fff;padding: 10px;text-align: center;flex-shrink:0;margin-bottom: 20px;margin-right: 15px;
    .mask{
        position: absolute;
        top: 0%;
        left: 0;
        width: 100%;
        height: 100%;
        background: #fff;
        z-index: 90;
        img{width: 30%;position: absolute;top: 43%;left: 50%;transform: translate(-50%,-50%);}
    }
    .repMask{
        position: absolute;
        top: 0%;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 90;
        background: #3a8ee638;
        }
}
.detailBox{
        border-radius: 15px;
        width: 250px;height: 435px;
        padding: 8px;
        background:rgba(255,255,255,1);
        font-size: 14px;
        color: #333;
        span{color: #999;}
        div{margin-bottom: 15px;}

    }
.row-box .col-box .topBox{font-size: 18px;color: #333;font-weight:bold;.number{font-size: 14px;font-weight: 400;}}
.row-box .col-box.active{border:1px solid rgba(64,158,255,1);}
.row-box .col-box .bottomBox{
    height:72px;margin-top:15px;
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
.row-box .col-box .num{z-index: 10;width:36px;height:14px;position: absolute;left: 0;border: 1px solid transparent;border-left:0;border-bottom-right-radius: 10px;border-top-right-radius: 10px;font-size: 10px}
.normalcolor{background: #7ED321;}
.normalfont{color: #7ED321}
.stopfont{color: #FF3163}
.saleallcolor{background: #F5A623}
.stopcolor{background: #FF3163}
.disccolor{ 
    width: 0px;
    height: 0px;
    border-left: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-top: 8px solid #37C1FF;
    border-right: 8px solid #37C1FF;}
.disccolor1{ 
    border-left: 16px solid transparent;
    border-bottom: 16px solid transparent;
    border-top: 16px solid #37C1FF;
    border-right: 16px solid #37C1FF;}
.center{text-align: center}
.weight{font-weight:bold}
.showConfiguration .el-input{width: 30%}
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
.text-right{text-align: right}
.fr{float: right}
.title{font-size:18px;font-weight: bold}
.el-card{font-size: 18px}
.tip{font-size: 16px}
#storeRunDialog{font-size: 18px}
.sKuimg{width:70px!important;height:70px;margin:0 auto}
.cardfont{font-size:14px;color: #999999;}
.drop .el-select-dropdown__list .el-select-dropdown__item{height: 8vh!important;line-height:3vh;padding: 0 3.6vh}
.drop .el-select-dropdown__list{padding-top: 1.8vh}
.storeRunMachinedrop .el-select-dropdown__list .el-select-dropdown__item{height: 5vh!important;line-height:5vh;padding: 0 3.6vh}
.storeRunMachinedrop .el-select-dropdown__list{padding-top: 1.8vh}
.topStyle{display:inline-block;width:68%;}
@media screen and (max-width:1725px) {
    .topStyle{width:65%;}
}
@media screen and (max-width:1570px) {
    .topStyle{width:63%;}
}
@media screen and (max-width:1486px) {
    .topStyle{width:60%;}
}
@media screen and (max-width:1445px) {
    .topStyle{width:58%;}
}
@media screen and (max-width:1345px) {
    .topStyle{width:55%;}
}
@media screen and (max-width:1290px) {
    .topStyle{width:55%;}
}
/* 返回上级 */
.iconfont{font-size:1.5vw;color: #fff}
.minifont{font-size: 0.73vw;}
.backBtn{background: #e1dede;width: 3.2vw;height: 3.2vw;box-shadow:0px 20px 20px -10px rgba(0, 0, 0, 0.15);z-index: 10;text-align: center;line-height: 3.9vw;border-radius: 0.5vw;margin-bottom: 0.5vh}
#backBtn{color: rgba(155, 155, 155, 1);position: fixed;top: 50%;right: 2vw;z-index: 100;cursor: pointer;}
/* 返回上级 */

</style>
<style>
/* .machinebtn>.el-select{width: 265px!important} */
/* 弹出框样式 */
.el-dialog__header,.el-dialog__body,.el-dialog__footer{padding: 0!important;}
.setTemplateDialog .el-dialog__footer{padding: 0}
.setTemplateDialog .el-dialog{width: 240px!important;height: 127px;margin-top: 38vh!important;margin-left: 69vw;padding: 20px;}
.setTemplateDialog .el-dialog__headerbtn{
  top: 15px;
  right: 20px;
  font-size: 20px;
}
.setTemplateDialog .btn,.setTemplateDialog .btn1{width: 90px;text-align: center;}
.setTemplateDialog .dialog-footer{justify-content: space-between;margin-top: 15px;}
/* 弹出框样式 */
#storeRun .numInput{width:14px;}
#storeRun .numInput .el-input__inner{border: 0;padding: 0;height: 14px;}
.el-radio-button__inner{padding: 8px 25px;}
#storeRun .el-checkbox{margin-right: 10px;}
#storeRun .el-checkbox__inner{width: 16px;height: 16px;}
#storeRun .el-checkbox__inner::after{width: 5px;height: 8px;}
.drop .el-scrollbar .el-select-dropdown__wrap{max-height: 50vh!important}
.storeRunMachinedrop .el-scrollbar .el-select-dropdown__wrap{max-height: 30vh!important}
.machinebtn>.el-select>.el-input{width: 265px!important}
#storeRun #input .el-input .el-input__inner{border-bottom: 1px solid #ebeef5;background: transparent;border-radius:0;height: 100%}
#storeRun .searchinput{width: 230px;margin: 20px 0;margin-top: 37px;}
#storeRun .searchinput.el-input .el-input__inner{height: 40px}
#storeRun .searchinput.el-input .el-input__suffix{width: 20px;margin-top:10px;margin-right: 5px;}
#storeRun .tempInput{width: 180px;}
#storeRun .tempInput .el-input__inner,#storeRun .tempInput .el-input__icon{height: 32px;line-height: 32px;}
#storeRun .cascader .el-cascader .el-input .el-input__inner{width: 0px!important;padding:0px!important;height: 0px;line-height: 0px}
#storeRun .cascader .el-cascader .el-input{width: 0px!important}
#storeRun .cascader .el-cascader .el-input .el-input__suffix-inner{display: none!important}
#storeRun .el-card__body{padding: 0;height: 100%}
#storeRun .editInput{width: 20px;font-size: 18px;margin-top: 0;}
#storeRun .editInput .el-input__inner{background: transparent;padding: 0;height: 18px;}
#storeRun .centerRun .el-input .el-input__inner{background: transparent;}
#storeRunDialog .el-switch .el-switch__core,#storeRunDialog .el-switch .el-switch__core:after{border-radius: 5px}
#storeRunDialog .el-dialog__body{padding-top: 0!important;padding-left:1.8vh!important;padding-right: 1.8vh!important;font-size: 18px}
#storeRunDialog #disCountDialog .el-dialog__body{padding-left:3.6vh!important;padding-right: 3.6vh!important}
#storeRunDialog .el-dialog__header {padding-top: 1.8vh;}
#storeRunDialog #disCountDialog .el-dialog__header{padding-left: 3.6vh;padding-right: 3.6vh}
</style>

<template>
    <div class="app-container">
        <div id="backBtn" class="minifont" @click="toBack"><div class="backBtn"><i class="el-icon-arrow-left iconfont"></i></div><div style="line-height:1vw">返回上级</div></div>
        <div id="storeRun">
            <div class="leftRun" id="moveSku" v-drag v-show="showMoveSku">
                <div class="line"></div>
                <el-card class="H-100">
                    <div class="title flex-center-Y justify-content-between"><span>商品列表<span style="color:#409EFF;font-size:14px;font-weight:400">（鼠标拖拽商品到相应货道中完成设置）</span></span><i class="el-icon-close title fr" style="color:#999;cursor:pointer" @click="showMoveSku=false"></i></div>
                    <el-input v-model="params.searchName" @input="search" class="searchinput" onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;">
                        <img style="width:100%" slot="suffix" src="../../assets/icons/search.png" alt="">
                    </el-input>
                    <div class="flex" style="height:76%">
                        <div class="" style="width:18%;height:100%;overflow:auto">
                            <ul>
                                <li v-for="(item,index) in skuList" :key="index" :class="item.isActive ? 'active' : ''" @click="chooseType(index,item)">{{item.typeName}}</li>
                            </ul>
                        </div>
                        <div class=" H-100"  style="width:82%;position:relative">
                            <div class="skumask" v-show="skuLoading">
                                <img src="../../assets/icons/loading.gif" alt="">
                            </div>
                            <el-row class="product H-100">
                                <el-col :span="8" v-for="(item,index) in skuListData" :key="index">
                                    <!-- <div class="noMask" v-if="item.stockFlag==0" draggable="false" @mousedown="dragMask(item)" @mousedown.stop="stopPropagation()"></div> -->
                                    <div class="box" draggable="true"  @dragstart="dragstart(item)" @mousedown.stop="stopPropagation()">
                                        <div style="width:100%;" class="sKuimg" draggable="true"  @dragstart="dragstart(item)" @mousedown.stop="stopPropagation()">  
                                            <img :src="item.appPicture" style="width:100%;" draggable="false" alt="">
                                        </div>
                                        <div class="detail">
                                            <el-tooltip :content="item.skuName" placement="top" effect="light">
                                                <div style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">名称: {{item.skuName}}</div>
                                            </el-tooltip>
                                            <div>原价: ￥{{item.salePrice}}</div>
                                            <div>库存/销量: {{item.wareSkuNum}}/{{item.saleNum}}</div>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </el-card>
            </div>
            <div class="centerRun flex-center-Y" :style="showTop?'height:173px':'height:67px'">
                <div class="storeChange flex-center">
                    <div class="flex-1 p-1 pl-0 pr-0 Pt-0 Pb-0 H-100">
                        <div class="card H-100">
                            <div class="flex-center-Y">
                                <div style="width:100%">
                                    <div class="flex-center-Y">
                                        <el-popover placement="top"
                                                        trigger="hover">
                                                <span class="title">
                                                {{ storeData.storeName }}——{{selectVentName}}
                                                </span>
                                                <span slot="reference" class="title limit" style="position:relative;max-width:18vw;display:inline-block;" @click="showStoreList">
                                                {{ storeData.storeName }}——{{selectVentName}}
                                                </span>
                                        </el-popover>
                                        <i class="el-icon-arrow-right" style="margin-bottom:5px" @click="showStoreList"></i>
                                        <div class="cascader" style="height:25px">
                                                <el-cascader
                                                    ref='storeref'
                                                    v-model="store"
                                                    :options="storeList"
                                                    :props="props"
                                                    @change="changeStore"
                                                    >
                                                </el-cascader>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                            <div class="top-left" v-show="showTop"><span class="cardfont">{{storeData.detailsAddress}}</span></div>
                            <!-- <div class="flex-center-Y">
                                <div class="bigfont bold">营业状态 ：</div>
                                <el-switch
                                    v-model="storeData.storeStatus"
                                    active-text="营业中"
                                    inactive-text=""
                                    active-value="1"
                                    inactive-value="0"
                                    @change="changeStatus">
                                </el-switch>
                            </div> -->
                        </div>
                    </div>
                </div>
                <div class="dataTody">
                    <div class="card H-100">
                        <div class="flex-center-Y">
                            <div>
                                <span class="title" style="position:relative">
                                今日经营数据 
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
                            <div class="flex-center-Y" style="font-size:14px;color:#409EFF;margin-left:30px;cursor:pointer" @click="showTop=!showTop">
                                <span v-if="!showTop">展开</span>
                                <span v-else>收起</span>
                                <img src="../../assets/icons/more.png" alt="" style="width:14px;height:14px;margin-left:5px">
                            </div>
                        </div>
                        <div class="flex-center-S" v-show="showTop">
                            <div class="top-right">
                                <div>销售额：<span>{{todyData.machineSale?(todyData.machineSale.salePrice || 0):0}}元</span></div>
                                <div>利润额：<span>{{todyData.machineSale?(todyData.machineSale.profits || 0):0}}元</span></div>
                                <div>利润率：<span>{{todyData.machineSale?(todyData.machineSale.profitsRate || '0%'):0}}</span></div>
                            </div>
                            <div class="top-right">
                                <div>订单量：<span>{{todyData.machineSale?(todyData.machineSale.orderNum || 0):0}}笔</span></div>
                                <div>销售量：<span>{{todyData.machineSale?(todyData.machineSale.saleNum || 0):0}}笔</span></div>
                                <div>客单价：<span>{{todyData.machineSale?(todyData.machineSale.prePrice || 0):0}}元</span></div>
                            </div>
                            <div class="flex-center-S" style="width:78%;height:110px;overflow-Y:auto">
                                <div class="top-right top-right1">
                                    <div><div style="float:left">商品销售额排行：</div>
                                        <span v-for="(hotList,i) in todyData.skuSale" :key="i" :style="i==0?'':'margin-left:97px'">
                                        <el-popover
                                            placement="top"
                                            trigger="hover">
                                            <span style="font-size:12px">{{hotList.skuName}}{{hotList.skuUnit}}/{{hotList.salePrice}}元</span>
                                        <span slot="reference" class="limit-ellipsis topStyle mb-18">
                                        {{hotList.skuName}}{{hotList.skuUnit}}/{{hotList.salePrice}}元
                                        </span>
                                        </el-popover>
                                        </span>
                                    </div>
                                </div>
                                <div class="top-right top-right1">
                                    <div><div style="float:left">商品利润额排行：</div>
                                    <span v-for="(hotList,i) in todyData.skuProfit" :key="i" :style="i==0?'':'margin-left:97px'">
                                        <el-popover
                                            placement="top"
                                            trigger="hover">
                                        <span style="font-size:12px">{{hotList.skuName}}{{hotList.skuUnit}}/{{hotList.profits}}元</span>
                                        <span slot="reference" class="limit-ellipsis topStyle mb-18">
                                            {{hotList.skuName}}{{hotList.skuUnit}}/{{hotList.profits}}元
                                        </span>
                                        </el-popover>
                                        </span>
                                    </div>
                                        
                                </div>
                                <div class="top-right top-right1">
                                    <div><div style="float:left">商品销量排行：</div>
                                    <span v-for="(hotList,i) in todyData.skuSaleNum" :key="i" :style="i==0?'':'margin-left:85px'">
                                        <el-popover
                                            placement="top"
                                            trigger="hover">
                                        <span style="font-size:12px">{{hotList.skuName}}{{hotList.skuUnit}}/{{hotList.orderNum}}笔</span>
                                        <span slot="reference" class="limit-ellipsis topStyle mb-18">
                                            {{hotList.skuName}}{{hotList.skuUnit}}/{{hotList.orderNum}}笔
                                        </span>
                                        </el-popover>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ventChange" :style="showTop?'top: 173px':'top: 67px'">
                <div class="card H-100" v-if="data.length>0">
                    <div class="flex-center-Y pr-1">
                        <div class="flex-1 limit-ellipsis flex-center-Y">
                           <span v-if="!isTemplate && !isInEdit" class="title" style="position:relative">
                               设备当前状态
                            </span>
                           <span v-if="isTemplate && !isInEdit">
                               销售模板（{{selectTemplateName}}）
                           </span>
                           <div v-if="isTemplate && !isInEdit" class="btn1 flex-center-Y mr-15" style="width:120px"  @click="delTemplate"><img src="../../assets/icons/del1.png" alt="">删除模板</div>
                           <span v-if="isInEdit">
                               临时模版（编辑中）
                           </span>
                        </div>
                        <div class="flex-1 flex-center-Y" style="justify-content:flex-end">
                            <div class="btn flex-center-Y mr-15" @click="showMoveDiv"><img src="../../assets/icons/list.png" alt="">商品列表</div>
                            <div class="btn1 flex-center-Y mr-15" @click="saveTemplate"><img src="../../assets/icons/save.png" alt="">保存当前模板</div>
                            <div class="btn1 flex-center-Y mr-15" v-if="isTemplate || isInEdit" @click="application"><img src="../../assets/icons/applicate.png" alt="">应用当前模板</div>
                            <div class="btn1 flex-center-Y mr-15" v-if="!isTemplate && !isInEdit" style="background:#EDEDED;color:#999;border-color:#999;"><img src="../../assets/icons/applicate1.png" alt="">应用当前模板</div>
                            <div class="tempInput">
                                <el-select v-model="templateId" placeholder="选择模板" @change="changeTemplate">
                                    <el-option
                                    v-for="item in templateList"
                                    :key="item.templateId"
                                    :label="item.templateName"
                                    :value="item.templateId"
                                    >
                                    </el-option>
                                </el-select>
                            </div>
                            <div class="btn flex-center-Y ml-15" @click="showEmpaty">机器空货率({{repairRate}}%)</div>
                        </div>
                    </div>
                    
                    <div class="ventInfo" v-loading="loading">
                        <div v-if="!isTemplate && !hasLoading" class="top flex-center-Y">
                            <div><el-checkbox v-model="selectAll" @change="checkAll">全选</el-checkbox></div>
                            <div v-if="canGet && makeInventoryFlag=='false'" @click="toReplenish" class="btn2 flex-center-Y mr-15 ml-15"><img src="../../assets/icons/up.png" alt="">生成补货单</div>
                            <div v-if="!canGet && makeInventoryFlag=='false'" class="btn3 flex-center-Y mr-15 ml-15"><img src="../../assets/icons/up-no.png" alt="">生成补货单</div>
                            <div v-if="makeInventoryFlag=='true'" class="btn3 flex-center-Y mr-15 ml-15" @click="$message({type:'warning',message:'正在盘库,请稍后再试.'})"><img src="../../assets/icons/up-no.png" alt="">生成补货单</div>
                        </div>
                        <div v-for="(item,key) in data" :key="key" class="row-box flex-center-Y">
                            <div v-for="(i,index) in item" :key="index" :class="i.select?'col-box active':'col-box'" @click="showDetail(i)" @drop="drop(i)" @dragover.prevent>
                                 <div class="repMask" v-show="i.channelidJson.colorFlag">
                                </div>
                                <div class="mask" v-show="i.channelidJson.showFlag==0">
                                    <img src="../../assets/icons/loading.gif" alt="">
                                    <span style="color:#409eff;font-size:12px;position:absolute;bottom:20px;left:62px">正在下图, 请稍后...</span>
                                </div>
                                <el-popover
                                        placement="right-start"
                                        trigger="click"
                                        >
                                        <div class="detailBox">
                                            <div><span>SKU名称：</span>{{selectDetail.info.skuName}}</div>
                                            <div><span>占本店货道数：</span>{{selectDetail.info.channelidCount || 0}}个</div>
                                            <div><span>建议零售价：</span>¥{{selectDetail.info.salePrice || 0}}</div>
                                            <div><span>原价：</span>¥{{selectDetail.info.originPrice || 0}}</div>
                                            <div v-if="!isTemplate"><span>促销价：</span>¥{{selectDetail.info.promotionPrice || 0}}</div>
                                            <div><span>成本价：</span>¥{{selectDetail.info.costPrice || 0}}</div>
                                            <div><span>当前利润额：</span>¥{{selectDetail.info.profits || 0}}</div>
                                            <div><span>当前利润率：</span>{{selectDetail.info.profitsRate || 0}}</div>
                                            <div v-if="!isTemplate"><span>该SKU在当前货道销量：</span>{{selectDetail.info.aisleSaleNum || 0}}件</div>
                                            <div><span>当前可用库存：</span>{{selectDetail.info.wareNum || 0}}件</div>
                                            <div v-if="!isTemplate"><span>促销方案：</span>{{selectDetail.info.promotionName || '暂无'}}</div>
                                            <div v-if="!isTemplate"><span>促销时间：</span>{{selectDetail.info.promotionTimeName || '暂无'}}<br><span style="margin-left: 70px;color: #333;" v-for="(g,index) in selectDetail.info.promotionTime" :key="index">{{g}}<br></span></div>
                                        </div>
                                <div slot="reference">
                                    <div class="flex-center-Y justify-content-between topBox">
                                        <div class="flex-center-Y" @click.stop="stopPropagation">
                                            <el-checkbox v-if="!isTemplate && !hasLoading" v-model="i.checked" @change="checkItem"></el-checkbox>
                                            <span>{{i.trailsNo}}</span>
                                        </div>
                                        <el-tooltip placement="top" :manual="true" :value="i.showTip" effect="light">
                                        <div slot="content">修改后数量不可大于该货道最大容纳量（{{i.channelidJson.channelidNum}}）<br/>不可小于当前货道内商品数量（{{i.channelidJson.skuNum}}）</div>
                                        <div class="flex-center-Y number">
                                            {{i.channelidJson.skuNum}}/
                                            <span v-if="!i.showTip">{{i.channelidJson.freezeNum}}</span>
                                            <div v-else @click.stop='stopPropagation'><el-input v-model="i.channelidJson.freezeNum" class='numInput' :ref="i.trailsNo"></el-input></div>
                                            <img v-if="!i.showTip && !isTemplate" class="funcIcon" src="../../assets/icons/edit(2).png" alt="" @click.stop="showTiP(i)">
                                            <img v-if="i.showTip" class="funcIcon" src="../../assets/icons/check.png" alt="" @click.stop="commitTip(i.channelidJson,i.trailsNo)">
                                            <img v-if="i.showTip" class="funcIcon" src="../../assets/icons/back.png" alt="" @click.stop="backTip(i)">
                                        </div>
                                        </el-tooltip>
                                    </div>
                                    <div class="bottomBox flex-center-Y">
                                        <div class="picImg">
                                            <img ondragstart="return false" v-if="i.channelidJson.skuPicture" :src="i.channelidJson.skuPicture" alt="">
                                        </div>
                                        <img class="img" src="../../assets/icons/dotted.png" alt="">
                                        <div class="info">
                                            <div class="name limit-ellipsis">{{i.channelidJson.skuName}}</div>
                                            <div class="price" v-if="i.channelidJson.aislePromotionFlag=='1'">¥{{i.channelidJson.promotionPrice }}<span class="diss">¥{{i.channelidJson.salePrice}}</span></div>
                                            <div class="price" v-else>¥{{i.channelidJson.salePrice }}</div>
                                            <div class="status">
                                                <img v-if="i.channelidJson.aisleStatusFlag=='1' && i.channelidJson.aisleStatus=='0' && !isTemplate" src="../../assets/icons/stop.png" alt="" @click.stop="reSale(i.channelidJson)">
                                                <img v-if="i.channelidJson.aisleStatusFlag=='1' && i.channelidJson.aisleStatus=='1' && !isTemplate" src="../../assets/icons/go.png" alt="" @click.stop="stopSale(i.channelidJson)">
                                               <span v-if="i.channelidJson.aisleSkuOutFlag =='1' && !isTemplate && i.channelidJson.aisleSkuFlag !='1'">售罄</span>
                                               <span v-if="i.channelidJson.aisleSkuFlag =='1'">暂无商品</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </el-popover>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card H-100 p-2"   v-else>
                 <div class="title" style="height:90%;padding-top:5%;text-align:center;font-weight:bold;color:#999">
                    该门店暂无机器
                    <div>
                        <img style="width:45vh" src="../../assets/operaion/blank.png" alt="">
                    </div>
                </div>
                </div>
            </div>
        </div>
        <el-dialog title=""
                   :modal='false'
                   :visible.sync="setTemplateVisible"
                   class="setTemplateDialog"
                   width="56%">
            <div class="setTemplate">
                <el-input ref="templateInput" v-model="templateName" placeholder="请输入模板名称"></el-input>
            </div>
            <span slot="footer" class="dialog-footer flex-center-Y">
              <div class="btn1" @click="setTemplateVisible = false">取 消</div>
              <div class="btn" type="primary" @click="commitTmplate">确 定</div>
            </span>
        </el-dialog>
        <el-dialog title=""
                   :modal='false'
                   :visible.sync="showEmpatyDiv"
                   class="setTemplateDialog"
                   width="56%">
            <div class="setTemplate">
                <el-input ref="empatyInput" v-model="repairRete" placeholder="请输入机器空货率(%)"></el-input>
            </div>
            <span slot="footer" class="dialog-footer flex-center-Y">
              <div class="btn1" @click="showEmpatyDiv = false">取 消</div>
              <div class="btn" type="primary" @click="commitEmpaty">确 定</div>
            </span>
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
            makeInventoryFlag:this.$route.params.makeInventoryFlag,//是否正在盘库中
            hasLoading:false,//如果为true,表示该机器有货道正在下图
            templateName:"",
            selectTemplateName:"",//选中的摸版名称
            setTemplateVisible:false,
            canGet:false,//是否可以按生成补货单
            tabTime:"1",
            selectAll:false,
            props:{value:"storeCode",label:"storeName",children:"vendList"},
            skuLoading:false,
            showMoveSku:false,
            skuList:[],
            skuListData:[],
            params:{page:1,pageRow:5,totalCount:1000,searchName:""},
            storeList:[],
            storeData:{},
            store:"",
            machineList:[],
            selectVent:{},
            selectVentName:"",
            storeCode:this.$route.params.id,
            data:[],
            selectVentCode:"",
            trailsType:"",
            options: regionData,
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
            selectSku:"",
            templateList:[],
            selectDetail:{
                info:{
                    aisleStatusFlag: "",
                    channelidJson: 1,
                    discPrice: "0",
                    machineProfitSku: "0",
                    nowProfits: "0",
                    promotionFlag: false,
                    skuJson: {orderCount: 0},
                    storeProfitSku: "0",
                }
                
            },//当前点击的货到的sku信息
            todyData:{
                machineSale:"",
                skuSale:[
                    // {
                    // salePrice: 91.88,
                    // skuCode: "2002",
                    // skuName: "农夫山泉",
                    // skuUnit: "500ml"
                    // },
                    // {
                    //     salePrice: 56.4,
                    //     skuCode: "137",
                    //     skuName: "茶兀蜜桃乌龙茶",
                    //     skuUnit: "500ml"
                    // },
                    // {
                    //     salePrice: 57.08,
                    //     skuCode: "31457298",
                    //     skuName: "百事可乐（中）",
                    //     skuUnit: "600ML"
                    // }
                ],
                skuProfit:[
                    // {
                    //     profits: 47.72,
                    //     skuCode: "2002",
                    //     skuName: "农夫山泉",
                    //     skuUnit: "500ml"
                    // },
                    // {
                    //     profits: 17.46,
                    //     skuCode: "137",
                    //     skuName: "茶兀蜜桃乌龙茶",
                    //     skuUnit: "500ml"
                    // },
                    // {
                    //     profits: 57.08,
                    //     skuCode: "31457298",
                    //     skuName: "百事可乐（中）",
                    //     skuUnit: "600ML"
                    // }
                ],
                skuSaleNum:[
                    // {
                    //     orderNum: 17,
                    //     skuCode: "29",
                    //     skuName: "康师傅冰红茶",
                    //     skuUnit: "500ml"
                    // },
                    // {
                    //     orderNum: 46,
                    //     skuCode: "2002",
                    //     skuName: "农夫山泉",
                    //     skuUnit: "500ml"
                    // },
                    // {
                    //     orderNum: 22,
                    //     skuCode: "31457298",
                    //     skuName: "百事可乐（中）",
                    //     skuUnit: "600ML"
                    // }
                ]
            },
            isTemplate:false,//是否是销售模板
            isInEdit:false,//是否在编辑中
            templateId:"",
            loading:false,
            showTop:false,
            channelids:window.localStorage.getItem('channelids'),//库存页面携带过来的
            showEmpatyDiv:false,
            repairRete:''
        }
    },
    created() {
        document.getElementsByTagName("body")[0].style.minWidth="1260px";
        document.getElementsByTagName("body")[0].style.overflowX="auto";
        // document.getElementsByTagName("body")[0].style.height="100%";
        document.getElementsByTagName("body")[0].style.color="#333333"
        // document.getElementsByTagName("html")[0].style.height="100%";
        this.orderHight = document.body.clientHeight
        this.getStoreList()
    },
    destroyed(){
        window.localStorage.removeItem("channelids")
    },
    methods: {
        showEmpaty(){
            this.showEmpatyDiv=true
            this.$nextTick(function(){
                    this.$refs.empatyInput.focus()
                })
        },
        commitEmpaty(){
            if(!/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(this.repairRete) || Number(this.repairRete)>=100 || Number(this.repairRete)<0){
                this.$message.error('空货率要大于0小于100~');
                return;
            }
            this.api({
                url: "/store/updateRepairRate",
                method: "post",
                data: {
                    machineCode:this.selectVent.machineCode,
                    repairRete:this.repairRete
                }
            }).then(data => {
                this.showEmpatyDiv=false
                this.$message.success('设置成功 !');
                this.getMachineInfo()
            }).catch((e)=>{
                
            })
        },
        timeChange(){
            this.getTodyData()
        },
        checkAll(value){//全选
            if(value){
                for(let i in this.data){
                    for(let key in this.data[i]){
                        this.data[i][key].checked=true
                    }
                }
                this.canGet=true
            }else{
                for(let i in this.data){
                    for(let key in this.data[i]){
                        this.data[i][key].checked=false
                    }
                }
                this.canGet=false
            }
        },
        showTiP(row){
            row.showTip=true
            this.data=JSON.parse(JSON.stringify(this.data))
            let trailsNo=row.trailsNo
            this.$nextTick(function(){
                    this.$refs[trailsNo][0].focus()
                })
        },
        backTip(row){
            row.showTip=false
            this.getMachineInfo()
        },
        commitTip(row,trailsNo){
            if(!row.freezeNum){
                this.$message({
                    type: "error",
                    message: "请输入货道最大容纳量~"
                });
                this.$nextTick(function(){
                    this.$refs[trailsNo][0].focus()
                })
                return;
            }
            if(!/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(row.freezeNum)){
                this.$message.error('请输入数字~');
                row.freezeNum=''
                this.$nextTick(function(){
                    this.$refs[trailsNo][0].focus()
                })
                return;
            }
            this.api({
                url: "/store/updateAisleFreeze",
                method: "post",
                data: {
                    machineCode:this.selectVent.machineCode,
                    channelid:row.channelid,
                    updateNum:row.freezeNum
                }
            }).then(data => {
                this.getMachineInfo()
                row.showTip=false
            }).catch((e)=>{
                this.$nextTick(function(){
                    this.$refs[trailsNo][0].focus()
                })
            })
            
        },
        checkItem(value){//单独选择
            this.data=JSON.parse(JSON.stringify(this.data))
                let num=0
                    for(let i in this.data){
                        for(let key in this.data[i]){
                            if(this.data[i][key].checked){
                                num+=1
                            }
                        }
                    }
                    if(num>0){
                        this.canGet=true
                        }else{
                            this.canGet=false
                            }
                if(this.selectAll && !value){
                    this.selectAll=false
                }else if(!this.selectAll && value){
                    for(let i in this.data){
                        for(let key in this.data[i]){
                            if(!this.data[i][key].checked){
                                return;
                            }
                        }
                    }
                    this.selectAll=true
                }
        },
        dragMask(item){//拖动无效商品时
            this.$message({
                    type: "error",
                    message: "该商品暂无库存~"
                });
        },
        toBack(){//返回上级
            if(this.channelids){
                window.localStorage.setItem('activeName','1')
                this.$router.go(-1)
            }else{
                this.$router.push({path:'/operation/'})
            }
            },
        changeStatus(){
            if(this.storeData.storeStatus==0){//如果切换成打烊
                this.$confirm('切换打烊后将会使该设备所有货道暂停销售，是否切换?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    let commitData={
                        storeCode:this.storeData.storeCode
                    }
                    commitData.status=this.storeData.storeStatus
                    this.api({
                        url: "/hardware/updateStoreManage",
                        method: "post",
                        data: commitData
                    }).then(data => {
                        this.getMachineInfo()
                    }).catch((e)=>{
                        
                    })
                }).catch(() => {
                    this.storeData.storeStatus='1'//'1'必须是string类型.否则无效
                    
                });
            }else{//切换成营业中
                let commitData={
                    storeCode:this.storeData.storeCode
                }
                commitData.status=this.storeData.storeStatus
                this.api({
                    url: "/hardware/updateStoreManage",
                    method: "post",
                    data: commitData
                }).then(data => {
                    this.getMachineInfo()
                }).catch((e)=>{
                })
            }
            
        },
        stopPropagation(){
        },
        stopSale(row) {
            this.api({
                url: "/store/stopShopSku",
                method: "post",
                data: {
                    machineCode:this.selectVent.machineCode,
                    channelid: row.channelid
                }
            }).then(data => {
                this.$message({
                    type: "success",
                    message: "操作成功!"
                });
                this.getMachineInfo()
            });
        },
        reSale(row) {
            this.api({
                url: "/store/restartShopSku",
                method: "post",
                data: {
                    machineCode:this.selectVent.machineCode,
                    channelid: row.channelid
                }
            }).then(data => {
                this.$message({
                    type: "success",
                    message: "操作成功!"
                });
                this.getMachineInfo()
            });
        },
        dragstart(item){
            this.selectSku=item
        },
        drop(i){//拖拽结束
            if(i.channelidJson.showFlag=='0'){
                this.$message({
                                type: 'warning',
                                message: '当前货道正在下图,请稍后'
                            });
            }else{
            this.loading=true
            this.api({//拖拽验证
                    url: "/store/updateSkuForMachine",
                    method: "post",
                    data: {
                            skuCode:this.selectSku.skuCode,
                            machineCode:this.selectVent.machineCode
                            }
                })
                    .then(data => {
                        this.loading=false
                        this.isInEdit=true//进入编辑模式
                        this.isTemplate=true//临时编辑模式,不能操作货道状态等
                        i.channelidJson.skuName=this.selectSku.skuName
                        i.channelidJson.skuPicture=this.selectSku.appPicture
                        i.channelidJson.salePrice=this.selectSku.salePrice
                        i.channelidJson.skuCode=this.selectSku.skuCode
                    }).catch(error => {
                        this.loading=false
                    })
                    }
            },
        getTemplate(){//查看所有模版
            this.api({
                url: "/store/showAllTemplate",
                method: "post",
                data: {
                        storeCode:this.storeData.storeCode,
                        machineCode:this.selectVent.machineCode
                        }
            })
                .then(data => {
                    this.templateList=data
                })
                
        },
        changeTemplate(){//选择模版
            this.isTemplate=true
            this.isInEdit=false
            for(let i in this.templateList){
                if(this.templateId==this.templateList[i].templateId){
                    this.selectTemplateName=this.templateList[i].templateName
                }
            }
            this.getMachineInfo()
        },
        toReplenish(){//一键补货
            let channelids=[]
            for(let i in this.data){
                for(let key in this.data[i]){
                    if(this.data[i][key].checked){
                        channelids.push(this.data[i][key].channelidJson.channelid)
                    }
                }
            }
            this.api({
                        url: "/store/oneClickReplent",
                        method: "post",
                        data: {
                            machineCode:this.selectVent.machineCode,
                            channelidFlag:!this.selectAll,
                            channelids:channelids
                        }
                    })
                        .then(data => {
                            this.$message({
                                type: "success",
                                message: "操作成功!"
                            });
                        })
        },
        saveTemplate(){//保存为模版
            this.setTemplateVisible=true
            this.$nextTick(()=>{
                this.$refs.templateInput.focus()
            })
        },
        commitTmplate(){//保存新建模板
            if(!this.templateName){
                    this.$message({
                                    type: 'warning',
                                    message: '请输入模板名称!'
                                });
                    this.$nextTick(()=>{
                        this.$refs.templateInput.focus()
                    })
                    return;
                }
            let templateInfo=[]
            for(let i in this.data){
                for(let key in this.data[i]){
                    let info={}
                    info.channelid=this.data[i][key].channelidJson.channelid
                    info.skuCode=this.data[i][key].channelidJson.skuCode
                    templateInfo.push(info)
                }
            }
                this.api({
                    url: "/store/addTemplateForMachine",
                    method: "post",
                    data: {
                            storeCode:this.storeData.storeCode,
                            machineCode:this.selectVent.machineCode,
                            trailsType:this.trailsType,
                            templateInfo:templateInfo,
                            templateName:this.templateName
                            }
                })
                    .then(data => {
                        this.$message({
                                    type: 'success',
                                    message: '保存成功!'
                                });
                        this.getTemplate()
                        this.setTemplateVisible=false
                    })
        },
        delTemplate(){
            this.$confirm('是否删除该模版?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.api({
                        url: "/store/deleteOneTemplate",
                        method: "post",
                        data: {
                            templateId:this.templateId,
                            storeCode:this.storeCode,
                            machineCode:this.selectVent.machineCode,
                                }
                    })
                        .then(data => {
                            this.isTemplate=false
                            this.templateId=''
                            this.getTemplate()
                            this.getMachineInfo()
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });

                        })
                
                }).catch(() => {
                         
                });
            
        },
        application(){//应用
            this.$confirm('应用后售货机电子价签将有几分钟的图片下载替换时间，是否确认立刻替换当前售卖商品?', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                    }).then(() => {
                        //如果没填完不能点应用
            // 处理数据
            let templateInfo=[]
            for(let i in this.data){
                for(let key in this.data[i]){
                    let info={}
                    info.channelid=this.data[i][key].channelidJson.channelid
                    info.showFlag=this.data[i][key].channelidJson.showFlag
                    if(info.showFlag=='0'){//如果有仍在loading的货道,将该货道的skuCode清空
                    info.skuCode=""
                    }else{
                        info.skuCode=this.data[i][key].channelidJson.skuCode
                    }
                    templateInfo.push(info)
                }
            }
            // 处理数据
            for(let i in templateInfo){
                if(templateInfo[i].showFlag!='0' && !templateInfo[i].skuCode){
                    this.$message({
                                type: 'warning',
                                message: '请将货道填满哦~'
                            });
                    return;
                }
            }
            
            this.loading=true
             this.api({
                url: "/store/applicationTemplate",
                method: "post",
                data: {
                        storeCode:this.storeCode,
                        machineCode:this.selectVent.machineCode,
                        trailsType:this.trailsType,
                        templateInfo:templateInfo,
                        manageId:this.userId
                        }
            })
                .then(data => {
                    this.$message({
                                type: 'success',
                                message: '应用成功!'
                            });
                    this.loading=false
                    this.selectTemplateName=''
                    this.templateId=''
                    this.isTemplate=false
                    this.isInEdit=false
                    this.getMachineInfo()
                    
                }).catch(() => {
                     this.loading=false
                        });
                        }).catch(() => {         
                    });
            
        },
        showStoreList(){//select组件聚焦
            if(this.isInEdit){
                this.$confirm('当前编辑未保存，是否立即切换设备？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                    }).then(() => {
                        this.$nextTick(function () {
                            this.$refs.storeref.toggleDropDownVisible()
                        })
                    }).catch(() => {
                    });
                }else{
                    this.$nextTick(function () {
                            this.$refs.storeref.toggleDropDownVisible()
                        })
                }
        },
        showMoveDiv(){
            this.showMoveSku=true
            this.getSkuList()
            
        },
        
        search(){
            this.getSkuList()
        },
        getSkuList(){
            this.skuLoading=true
            let page=this.params.page
            let pageRow=this.params.pageRow
            let skuName=this.params.searchName
             this.api({
                url: "/store/subjectSkuInfo",
                method: "post",
                data: {
                    wareId:this.storeData.stockType=='0'?'':this.storeData.wareId,
                    skuName:skuName
                }
            })
                .then(data => {
                    this.skuLoading=false
                    this.skuList=data
                    if(this.skuList[0]){
                        this.skuList[0].isActive=true
                        this.skuListData=this.skuList[0].skuSubjectList
                    }else{
                        this.skuListData=[]
                    }
                })
                .catch(e => {});
        },
        chooseType(index,item){//sku列表选择分类
            for(let i in this.skuList){
                this.skuList[i].isActive=false
            }
            this.skuList[index].isActive=true
            let skuList=JSON.parse(JSON.stringify(this.skuList))
            this.skuList=skuList
            this.skuListData=item.skuSubjectList
        },
        getStoreList(){//获取门店列表
            this.api({
                url: "/store/storeListRank",
                method: "post",
                data: {
                    manageId: this.userId
                }
            })
                .then(data => {
                    this.storeList = data.storeListRank;
                    for(let i in this.storeList){
                        if(this.$route.params.id==this.storeList[i].storeCode){
                            this.storeData=this.storeList[i]
                            this.storeData.stockType=data.stockType
                            if(this.$route.params.machineCode && this.$route.params.machineCode!='_'){//从销售计划转过来的
                                for(let key in this.storeData.vendList){
                                    if(this.storeData.vendList[key].machineCode==this.$route.params.machineCode){
                                        this.selectVent=this.storeData.vendList[key]
                                    }
                                }
                            }else{
                                this.selectVent=this.storeData.vendList[0]
                            }
                            this.selectVentName=this.selectVent.machineName
                            this.trailsType=this.selectVent.trailsType
                        }
                        for(let key in this.storeList[i].vendList){
                            this.storeList[i].vendList[key].storeCode=this.storeList[i].vendList[key].machineCode
                            this.storeList[i].vendList[key].storeName=this.storeList[i].vendList[key].machineName
                        }
                    }
                    this.storeCode=this.$route.params.id
                    this.getMachineInfo()
                })
                .catch(e => {});
        },
        getTodyData(){//今日数据
            this.api({
                url: "/store/todayMachineProfits",
                method: "post",
                data: {
                    machineCode:this.selectVent.machineCode,
                    dayNum:this.tabTime
                }
            })
                .then(data => {
                    this.todyData=data
                })
                .catch(e => {});
        },
        getMachineInfo(){//获取机器详情
            this.getTemplate()
            this.getTodyData()
            this.api({
                url: "/store/aisleSkuInfo",
                method: "post",
                data: {
                        machineCode:this.selectVent.machineCode,
                        trailsType:this.trailsType,
                        isTemplate:this.isTemplate || false,//如果是点的模版,就是true
                        storeCode: this.storeData.storeCode,
                        templateId:this.templateId,//如果点的模版,要传id
                        channelids:this.channelids
                        }
            })
                .then(data => {
                    this.hasLoading=false
                    this.data=data
                    for(let i in this.data){
                        for(let key in this.data[i]){
                            this.data[i][key].checked=false
                            if(this.data[i][key].channelidJson.showFlag==0){
                                this.hasLoading=true
                            }
                        }
                    }
                })
            this.api({
                url: "/store/showRepairRate",
                method: "post",
                data: {
                        machineCode:this.selectVent.machineCode
                        }
            })
                .then(data => {
                    this.repairRate=data.repairRate
                })
        },
        showDetail(i){//点击货到
            for(let i in this.data){
                    for(let key in this.data[i]){
                        this.data[i][key].select=false
                    }
                }
            i.select=true
            this.data=JSON.parse(JSON.stringify(this.data))
            this.selectDetail=i
            this.getSkuDetail()
        },
        getSkuDetail(){//商品详情
            this.api({
                url: "/store/machineSkuInfo",
                method: "post",
                data: {
                    storeCode: this.storeData.storeCode,
                    skuCode:this.selectDetail.channelidJson.skuCode,
                    machineCode:this.selectVent.machineCode,
                    channelid:this.selectDetail.channelidJson.channelid,
                    wareId:this.storeData.wareId
                }
            })
                .then(data => {
                    this.selectDetail.info=data
                    this.selectDetail=JSON.parse(JSON.stringify(this.selectDetail))
                })
                .catch(e => {});
        },
        changeStore(){
            this.isTemplate=false
            this.isInEdit=false
            this.selectAll=false
            for(let i in this.storeList){
                if(this.storeList[i].storeCode==this.store[0]){
                    this.storeData=this.storeList[i]
            }
            }
            for(let i in this.storeData.vendList){
                if(this.store[1]==this.storeData.vendList[i].machineCode){
                    this.selectVent=this.storeData.vendList[i]
                }
            }
            this.selectVentName=this.selectVent.machineName
            this.trailsType=this.selectVent.trailsType
            this.getMachineInfo()
            // 重新请求sku列表
            this.skuList=[]
            this.params={page:1,pageRow:8,totalCount:1000,searchName:""}
            this.getSkuList()
            
        },
        
    },
    computed: {
        ...mapGetters(["userId", "userName"])
    }
};
</script>
