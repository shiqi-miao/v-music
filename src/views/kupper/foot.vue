<style scoped>
    .bigfont{font-size: 24px;font-weight: bold}
    .lgfont{font-size: 20px}
    .nomalfont{font-size:16px}
    .smallfont{font-size: 12px;line-height: 1.5}
    .minifont{font-size: 10px;line-height: 1.5}
    .H-100{height:100%}
    @media screen and (max-width:1680px) {
        .bigfont{font-size: 22px;font-weight: bold}
        .lgfont{font-size: 18px}
        .nomalfont{font-size:14px}
        .smallfont{font-size: 10px;line-height: 1.5}
        .minifont{font-size: 10px;line-height: 1.5}
        .word-right{font-size: 14px!important;}
        .word-right .num{font-size: 18px!important;}
        .word-left{font-size: 14px!important;}
        .word-left .num{font-size: 18px!important;}
        
    }
    @media screen and (max-width:1440px) {
        .bigfont{font-size: 20px;font-weight: bold}
        .lgfont{font-size: 16px}
        .nomalfont{font-size:12px}
        .smallfont{font-size: 10px;line-height: 1.5}
        .minifont{font-size: 10px;line-height: 1.5}
        .word-right{font-size: 12px!important}
        .word-right .num{font-size: 16px!important;}
        .word-left{font-size: 12px!important;}
        .word-left .num{font-size: 16px!important;}
        #foot .centerBox{padding:0 2vw!important}
        #foot .leftBox{width: 25%!important;}
    }
    @media screen and (max-width:1280px) {
        .bigfont{font-size: 18px;font-weight: bold}
        .lgfont{font-size:16px}
        .nomalfont{font-size:10px}
        .smallfont{font-size: 8px;line-height: 1.5}
        .minifont{font-size: 8px;line-height: 1.5}
        .word-right{font-size: 10px!important;}
        .word-right .num{font-size: 14px!important;}
        .word-left{font-size: 10px!important;}
        .word-left .num{font-size: 14px!important;}
        #foot .centerBox{padding:0 2vw!important}
        #foot .leftBox{width: 25%!important;}
    }
    .blue{color:#409EFF;cursor:pointer}
    .text-center{text-align:center}
    #foot{width: 100vw;height: 93vh;padding: 3vh 3vw}
    #foot .leftBox{width: 22%;height: 100%}
    #foot .leftBox .el-card{padding: 8% 11%}
    #foot .centerBox{width: 45%;height: 100%;padding: 0 3vw;}
    #foot .centerBox .inner{width: 100%;height: 100%;}
    #foot .centerBox .inner .el-card{background: #fff;padding: 5% 7%;position: relative}
    #foot .rightBox{width: 32%;height: 100%;position:relative}
    #foot .rightBox .el-card{padding: 7% 4.5%}
    #foot .rightBox .title{margin:3vh 0;justify-content:space-between;padding:0 4%}
    #foot .rightBox .title div{width:33.33333%}
    #foot .rightBox .list{width:100%;height:17%;background:#FFF8F8F8;margin-bottom:2vh;padding:2%;padding-top:3%;justify-content:space-between;}
    #foot .rightBox .list .num,#foot .rightBox .list .detail,#foot .rightBox .list .config{height:100%}
    #foot .rightBox .list .num{text-align:center;line-height:120px;width:30%;}
    #foot .rightBox .list .config{justify-content:flex-end;width:20%;}
    #foot .rightBox .list .detail{width:50%;}
    #foot .rightBox .list .detail div{height:20%;text-align:centr!important;text-align:center}
    .box{height:18vh;padding: 7%;font-size: 12px;line-height: 17px;border: 1px solid #dcdfe6;border-radius:5px;}
    .box img{width: 100%;height: 6.5vh}
    .product{overflow-y: auto}
    .product .el-col{padding:0 2%;margin-top: 4%}
    .map{width: 49vh;height: 49vh;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%)}
    .map img{width: 100%;height: 100%;position:absolute;top:0;left:0}
    .coffee1{width:12vh;height:12vh;position: absolute;left: 3.5vh;top:10vh}
    .coffee7{width:12vh;height:12vh;position: absolute;left: 0;top:-8.8vh}
    .coffee2{width:12vh;height:12vh;position: absolute;left: -3.15vh;top:8.8vh}
    .coffee3{width:12vh;height:12vh;position: absolute;left: 3.15vh;top:8.8vh}
    .coffee11{width:12vh;height:12vh;position: absolute;left: -3.15vh;top:8.8vh}
    .coffee4,.coffee8,.coffee12,.coffee16,.coffee5,.coffee9,.coffee13,.coffee17,.coffee6,.coffee10,.coffee14,.coffee18,.coffee15,.coffee19{width:12vh;height:12vh;position: absolute;left: 8.9vh;top:0}
    .word-right{position: absolute;right: 4vh;top:3.5vh;font-size: 16px;color: #fff}
    .word-right.has{color: rgba(255, 255, 255, 0.5)}
    .word-right .num{font-size: 20px;font-weight: bold;text-align: right}
    .word-left{position: absolute;left: 4vh;top:3.5vh;font-size: 16px;color: #fff}
    .word-left.has{color: rgba(255, 255, 255, 0.5)}
    .word-left .num{font-size: 20px;font-weight: bold;text-align: left}
    .star1{width:24px;height:24px;position:absolute;top:12%;right:30%;}
    .star2{width:24px;height:24px;position:absolute;top:40%;right:30%;}
    .star3{width:24px;height:24px;position:absolute;top:40%;right:40%;}
    .star1.left{width:24px;height:24px;position:absolute;top:12%;right:5%;}
    .star2.left{width:24px;height:24px;position:absolute;top:40%;right:5%;}
    .star3.left{width:24px;height:24px;position:absolute;top:40%;right:14%;}
    .star1 img,.star2 img.star3 img{width:24px;height:24px;} 
    .btn{width: 25%;height: 5vh;background: #663822;color:#DDC585;position: absolute;right: 2vw;bottom: 2vh;line-height: 5vh;text-align: center;cursor:pointer}
    .info{width:40%;height: 33%;position: absolute;left: 50%;transform:translate(-50%,-50%);top: 50%;border-radius: 10px;background: #fff;z-index: 101;overflow:hidden}
    .info .top{width: 100%;height:53%;position:relative}
    .info .top img{position: relative;width:100%;}
    .info .bottom{padding:0 5%;position: relative;height:47%}
    .info .bottom .belike{width:40rpx;height:34rpx;position: absolute;left: 430rpx;top:-40rpx}
    .info .bottom .title{color: rgba(51, 51, 51, 1);margin:1vh 0}
    .info .bottom .rate{margin-top: 20rpx;margin-bottom: 1rpx}
    .info .bottom .type{color: #c0c4cc;margin-top:1vh}
    .info .bottom .score{color: #C2A351;font-weight: bold;right: 5%;top: 0%;position: absolute;}
    .addLine{margin:2vh 0}
    .pagination-line{text-align: center}
</style>
    
<style>
    #foot .searchinput{margin: 2vh 0}
    #foot .searchinput.el-input .el-input__inner{border: 0;background: rgba(243,243,243,1);height: 2vw;background: #F3F3F3;}
    #foot .searchinput.el-input .el-input__prefix{width: 2vw;padding: 1%}
    #foot .rightBox .el-input .el-input__inner{border:0;background:transparent;padding:0;}
    #foot .rightBox .num .el-input .el-input__inner{text-align: center}
    #foot .rightBox .list .detail .el-select,#foot .rightBox .list .detail .el-input,#foot .rightBox .list .detail .el-input .el-input__inner{height:100%!important}
    #foot .rightBox .list .detail .el-input__suffix{line-height:60px}
    #foot .el-rate__icon{font-size: 12px}
    #foot .el-rate{height: 15px;margin-left: 0%}
    #foot .el-card__body{padding: 0}
    #foot .el-card,.el-card__body{width: 100%;height:100%;}
    #foot .el-pagination{position:absolute;bottom:2vh;left:0;width:100%}
    @media screen and (max-width:1680px) {
        #foot .el-rate__icon{font-size:10px}
        #foot .el-rate{height:13px}
    }
    @media screen and (max-width:1440px) {
        #foot .el-rate__icon{font-size:10px}
         #foot .el-rate{height:13px}
    }
    @media screen and (max-width:1280px) {
        #foot .el-rate__icon{font-size:7px}
         #foot .el-rate{height:11px}
    }
</style>
<template>
    <div id="foot" class="flex-center-Y">
        <div class="leftBox" @drop.stop="dropBack" @dragover.prevent>
            <el-card>
                <div class="bigfont">精品咖啡列表</div>
                    <el-input v-model="params.searchName" @input="search" class="searchinput" onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;">
                        <img style="width:100%" slot="prefix" src="../../assets/super/search.png" alt="">
                    </el-input>
                    <div v-if="skuList.length>0" class="flex" style="height:90%">
                        <div class=" H-100"  style="width:100%">
                            <el-row class="product H-100" v-infinite-scroll="load" infinite-scroll-distance="10">
                                <el-col :span="12" v-for="(item,index) in skuList" :key="index">
                                    <div class="box"  draggable="true"  @dragstart="dragstart(item)">
                                        <div style="width:100%;" class="sKuimg"   draggable="true"  @dragstart="dragstart(item)">   
                                            <img :src="item.skuPicture" alt="" style="width:100%;">
                                        </div>
                                        
                                        <div class="detail smallfont">
                                            <el-tooltip :content="item.skuName" placement="top" effect="light">
                                                <div style=" overflow: hidden;text-overflow: ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;margin-bottom:1vh"> {{item.skuName}}</div>
                                            </el-tooltip>
                                            <div class="minifont flex-center-Y" style="margin-bottom:0.5vh;justify-content:space-between">
                                                {{item.contentOne}} <el-rate
                                                        v-model="item.skuStar"
                                                        :max="3"
                                                        disabled
                                                        disabled-void-color="#F3F3F3"
                                                        :colors="['#C2A351','#C2A351','#C2A351']">
                                                        </el-rate></div>
                                            <el-tooltip :content="item.contentTwo" placement="top" effect="light">
                                                <div class="minifont" style=" overflow: hidden;text-overflow: ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;"> {{item.contentTwo}}</div>
                                            </el-tooltip>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                    <div v-else style="margin-top:20px;text-align:center;color:#999">
                        暂无精品咖啡~<span style="text-decoration:underline;color:#86B3E0;cursor:pointer" @click="$router.push({path:'/operation/sku'})">去创建</span>
                    </div>
            </el-card>
        </div>
        <div class="centerBox">
            <div class="inner">
                <el-card>
                    <div v-if="showInfo" style="width:100%;height:100%;position:absolute;left:0;right:0;z-index:100" @click="hideInfo"></div>
                    <div v-if="showInfo" class="info">
                        <div class="top">
                        <img style="border-top-left-radius:20rpx;border-top-right-radius:20rpx;height:100%" :src="selectData.skuPicture"/>
                        </div>
                        <div class="bottom">
                        <div class="title lgfont">{{selectData.skuName}}</div>
                        <div class="rate">
                            <el-rate v-model="selectData.skuStar" :max="3" disabled-void-color="#F3F3F3" :colors="['#C2A351','#C2A351','#C2A351']" size="24rpx" allow-half readonly /></el-rate>
                        </div>
                        <div class="type smallfont">处理法：{{selectData.contentOne}}</div>
                        <div class="type smallfont">风味：{{selectData.contentTwo}}</div> 
                        <div class="score bigfont">{{selectData.skuScore}}</div>
                        </div>
                    </div> 
                    <div class="bigfont">咖啡版图</div>
                    <div class="map">
                        <div class="coffee1" :id="1" @click.stop="show1" @drop.stop="drop('1')" @dragover.prevent>
                            <img v-if="list[1].orderNum=='1'" src="../../assets/foot/1@2x.png" draggable="true" @dragstart.stop="dragstartBack('1')"/>
                            <img v-else src="../../assets/foot-no/1@2x.png"/>
                            <img v-if="list[1].active==true && list[1].orderNum=='0'" style="z-index:100" src="../../assets/foot/right.png"/>
                            <img v-if="list[1].active==true && list[1].orderNum=='1'" style="z-index:100" src="../../assets/foot/right-1.png"/>
                            <div draggable="true" @dragstart.stop="dragstartBack('1')" :class="list[1].orderNum=='1' ? 'word-right' : 'word-right has'"><div class="num">{{list[1].skuScore}}</div><div>{{list[1].skuNameLimit}}</div></div>
                            <!--星星-->
                            <!-- <div class="star1" v-if="list[1].skuStar=='1' || list[1].skuStar=='2' || list[1].skuStar=='3'"><img :src="list[1].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div>
                            <div class="star2" v-if="list[1].skuStar=='2' || list[1].skuStar=='3'"><img :src="list[1].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div>
                            <div class="star3" v-if="list[1].skuStar=='3'"><img :src="list[1].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div> -->
                            <!--星星-->
                            <div class="coffee4" :id="4" @click.stop="show1" @drop.stop="drop('4')" @dragover.prevent> 
                            <img v-if="list[4].orderNum=='1'" src="../../assets/foot/4@2x.png" draggable="true" @dragstart.stop="dragstartBack('4')"/>
                            <img v-else src="../../assets/foot-no/4@2x.png"/>
                            <img v-if="list[4].active==true && list[4].orderNum=='0'" style="z-index:100" src="../../assets/foot/right.png"/>
                            <img v-if="list[4].active==true && list[4].orderNum=='1'" style="z-index:100" src="../../assets/foot/right-1.png"/>
                            <div draggable="true" @dragstart.stop="dragstartBack('4')" :class="list[4].orderNum=='1' ? 'word-right' : 'word-right has'"><div class="num">{{list[4].skuScore}}</div><div>{{list[4].skuNameLimit}}</div></div>
                            <!--星星-->
                            <!-- <div class="star1" v-if="list[4].skuStar=='1' || list[4].skuStar=='2' || list[4].skuStar=='3'"><img :src="list[4].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div>
                            <div class="star2" v-if="list[4].skuStar=='2' || list[4].skuStar=='3'"><img :src="list[4].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div>
                            <div class="star3" v-if="list[4].skuStar=='3'"><img :src="list[4].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div> -->
                            <!--星星-->
                            <div class="coffee8" :id="8" @click.stop="show1" @drop.stop="drop('8')" @dragover.prevent> 
                                <img v-if="list[8].orderNum=='1'" src="../../assets/foot/8@2x.png" draggable="true" @dragstart.stop="dragstartBack('8')"/> 
                                <img v-else src="../../assets/foot-no/8@2x.png"/>
                                <img v-if="list[8].active==true && list[8].orderNum=='0'" style="z-index:100" src="../../assets/foot/right.png"/>
                                <img v-if="list[8].active==true && list[8].orderNum=='1'" style="z-index:100" src="../../assets/foot/right-1.png"/>
                                <div draggable="true" @dragstart.stop="dragstartBack('8')" :class="list[8].orderNum=='1' ? 'word-right' : 'word-right has'"><div class="num">{{list[8].skuScore}}</div><div>{{list[8].skuNameLimit}}</div></div>
                                <!--星星-->
                                <!-- <div class="star1" v-if="list[8].skuStar=='1' || list[8].skuStar=='2' || list[8].skuStar=='3'"><img :src="list[8].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div>
                                <div class="star2" v-if="list[8].skuStar=='2' || list[8].skuStar=='3'"><img :src="list[8].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div>
                                <div class="star3" v-if="list[8].skuStar=='3'"><img :src="list[8].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div> -->
                                <!--星星-->
                                <div class="coffee12" :id="12" @click.stop="show1" @drop.stop="drop('12')" @dragover.prevent>
                                <img v-if="list[12].orderNum=='1'" src="../../assets/foot/12@2x.png" draggable="true" @dragstart.stop="dragstartBack('12')"/>
                                <img v-else src="../../assets/foot-no/12@2x.png"/>
                                <img v-if="list[12].active==true && list[12].orderNum=='0'" style="z-index:100" src="../../assets/foot/right.png"/>
                                <img v-if="list[12].active==true && list[12].orderNum=='1'" style="z-index:100" src="../../assets/foot/right-1.png"/>
                                <div draggable="true" @dragstart.stop="dragstartBack('12')" :class="list[12].orderNum=='1' ? 'word-right' : 'word-right has'"><div class="num">{{list[12].skuScore}}</div><div>{{list[12].skuNameLimit}}</div></div>
                                <!--星星-->
                                <!-- <div class="star1" v-if="list[12].skuStar=='1' || list[12].skuStar=='2' || list[12].skuStar=='3'"><img :src="list[12].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div>
                                <div class="star2" v-if="list[12].skuStar=='2' || list[12].skuStar=='3'"><img :src="list[12].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div>
                                <div class="star3" v-if="list[12].skuStar=='3'"><img :src="list[12].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div> -->
                                <!--星星-->
                                <div class="coffee16" :id="16" @click.stop="show1" @drop.stop="drop('16')" @dragover.prevent>
                                <img v-if="list[16].orderNum=='1'" src="../../assets/foot/16@2x.png" draggable="true" @dragstart.stop="dragstartBack('16')"/>
                                <img v-else src="../../assets/foot-no/16@2x.png"/>
                                <img v-if="list[16].active==true && list[16].orderNum=='0'" style="z-index:100" src="../../assets/foot/right.png"/>
                                <img v-if="list[16].active==true && list[16].orderNum=='1'" style="z-index:100" src="../../assets/foot/right-1.png"/>
                                <div draggable="true" @dragstart.stop="dragstartBack('16')" :class="list[16].orderNum=='1' ? 'word-right' : 'word-right has'"><div class="num">{{list[16].skuScore}}</div><div>{{list[16].skuNameLimit}}</div></div>
                                <!--星星-->
                                <!-- <div class="star1" v-if="list[16].skuStar=='1' || list[16].skuStar=='2' || list[16].skuStar=='3'"><img :src="list[16].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div>
                                <div class="star2" v-if="list[16].skuStar=='2' || list[16].skuStar=='3'"><img :src="list[16].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div>
                                <div class="star3" v-if="list[16].skuStar=='3'"><img :src="list[16].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div> -->
                                <!--星星-->
                                </div>
                                </div>
                                <div class="coffee7" :id="7" @click.stop="show1" @drop.stop="drop('7')" @dragover.prevent>
                                <img v-if="list[7].orderNum=='1'" src="../../assets/foot/7@2x.png" draggable="true" @dragstart.stop="dragstartBack('7')"/>
                                <img v-else src="../../assets/foot-no/7@2x.png"/>
                                <img v-if="list[7].active==true && list[7].orderNum=='0'" style="z-index:100" src="../../assets/foot/right.png"/>
                                <img v-if="list[7].active==true && list[7].orderNum=='0'" style="z-index:100" src="../../assets/foot/right-1.png"/>
                                <div  draggable="true" @dragstart.stop="dragstartBack('7')" :class="list[7].orderNum=='1' ? 'word-right' : 'word-right has'"><div class="num">{{list[7].skuScore}}</div><div>{{list[7].skuNameLimit}}</div></div>
                                <!--星星-->
                                <!-- <div class="star1" v-if="list[7].skuStar=='1' || list[7].skuStar=='2' || list[7].skuStar=='3'"><img :src="list[7].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div>
                                <div class="star2" v-if="list[7].skuStar=='2' || list[7].skuStar=='3'"><img :src="list[7].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div>
                                <div class="star3" v-if="list[7].skuStar=='3'"><img :src="list[7].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div> -->
                                <!--星星-->
                                </div>
                            </div>
                            </div>
                            <div class="coffee2" :id="2" @click.stop="show1" @drop.stop="drop('2')" @dragover.prevent>
                                <img v-if="list[2].orderNum=='1'" src="../../assets/foot/2@2x.png" draggable="true" @dragstart.stop="dragstartBack('2')"/>
                                <img v-else src="../../assets/foot-no/2@2x.png"/>
                                <img v-if="list[2].active==true && list[2].orderNum=='0'" style="z-index:10" src="../../assets/foot/left.png"/>
                                <img v-if="list[2].active==true && list[2].orderNum=='1'" style="z-index:10" src="../../assets/foot/left-1.png"/>
                                <div draggable="true" @dragstart.stop="dragstartBack('2')" :class="list[2].orderNum=='1' ? 'word-left' : 'word-left has'"><div class="num">{{list[2].skuScore}}</div><div>{{list[2].skuNameLimit}}</div></div>
                                <!--星星-->
                                <!-- <div class="star1 left" v-if="list[2].skuStar=='1' || list[2].skuStar=='2' || list[2].skuStar=='3'"><img :src="list[2].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div>
                                <div class="star2 left" v-if="list[2].skuStar=='2' || list[2].skuStar=='3'"><img :src="list[2].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div>
                                <div class="star3 left" v-if="list[2].skuStar=='3'"><img :src="list[2].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div> -->
                                <!--星星-->
                                <div class="coffee5" :id="5" @click.stop="show1" @drop.stop="drop('5')" @dragover.prevent>
                                <img v-if="list[5].orderNum=='1'" src="../../assets/foot/5@2x.png" draggable="true" @dragstart.stop="dragstartBack('5')"/>
                                <img v-else src="../../assets/foot-no/5@2x.png"/>
                                <img v-if="list[5].active==true && list[5].orderNum=='0'" style="z-index:10" src="../../assets/foot/left.png"/>
                                <img v-if="list[5].active==true && list[5].orderNum=='1'" style="z-index:10" src="../../assets/foot/left-1.png"/>
                                <div draggable="true" @dragstart.stop="dragstartBack('5')" :class="list[5].orderNum=='1' ? 'word-left' : 'word-left has'"><div class="num">{{list[5].skuScore}}</div><div>{{list[5].skuNameLimit}}</div></div>
                                <!--星星-->
                                <!-- <div class="star1 left" v-if="list[5].skuStar=='1' || list[5].skuStar=='2' || list[5].skuStar=='3'"><img :src="list[5].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div>
                                <div class="star2 left" v-if="list[5].skuStar=='2' || list[5].skuStar=='3'"><img :src="list[5].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div>
                                <div class="star3 left" v-if="list[5].skuStar=='3'"><img :src="list[5].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div> -->
                                <!--星星-->
                                <div class="coffee9" :id="9" @click.stop="show1" @drop.stop="drop('9')" @dragover.prevent>
                                    <img v-if="list[9].orderNum=='1'" src="../../assets/foot/9@2x.png" draggable="true" @dragstart.stop="dragstartBack('9')"/>
                                    <img v-else src="../../assets/foot-no/9@2x.png"/>
                                    <img v-if="list[9].active==true && list[9].orderNum=='0'" style="z-index:10" src="../../assets/foot/left.png"/>
                                    <img v-if="list[9].active==true && list[9].orderNum=='1'" style="z-index:10" src="../../assets/foot/left-1.png"/>
                                    <div draggable="true" @dragstart.stop="dragstartBack('9')" :class="list[9].orderNum=='1' ? 'word-left' : 'word-left has'"><div class="num">{{list[9].skuScore}}</div><div>{{list[9].skuNameLimit}}</div></div>
                                    <!--星星-->
                                    <!-- <div class="star1 left" v-if="list[9].skuStar=='1' || list[9].skuStar=='2' || list[9].skuStar=='3'"><img :src="list[9].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div>
                                    <div class="star2 left" v-if="list[9].skuStar=='2' || list[9].skuStar=='3'"><img :src="list[9].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div>
                                    <div class="star3 left" v-if="list[9].skuStar=='3'"><img :src="list[9].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div> -->
                                    <!--星星-->
                                    <div class="coffee13" :id="13" @click.stop="show1" @drop.stop="drop('13')" @dragover.prevent>
                                    <img v-if="list[13].orderNum=='1'" src="../../assets/foot/13@2x.png" draggable="true" @dragstart.stop="dragstartBack('13')"/>
                                    <img v-else src="../../assets/foot-no/13@2x.png"/>
                                    <img v-if="list[13].active==true && list[13].orderNum=='0'" style="z-index:10" src="../../assets/foot/left.png"/>
                                    <img v-if="list[13].active==true && list[13].orderNum=='1'" style="z-index:10" src="../../assets/foot/left-1.png"/>
                                    <div draggable="true" @dragstart.stop="dragstartBack('13')" :class="list[13].orderNum=='1' ? 'word-left' : 'word-left has'"><div class="num">{{list[13].skuScore}}</div><div>{{list[13].skuNameLimit}}</div></div>
                                    <!--星星-->
                                    <!-- <div class="star1 left" v-if="list[13].skuStar=='1' || list[13].skuStar=='2' || list[13].skuStar=='3'"><img :src="list[13].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div>
                                    <div class="star2 left" v-if="list[13].skuStar=='2' || list[13].skuStar=='3'"><img :src="list[13].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div>
                                    <div class="star3 left" v-if="list[13].skuStar=='3'"><img :src="list[13].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div> -->
                                    <!--星星-->
                                    <div class="coffee17" :id="17" @click.stop="show1" @drop.stop="drop('17')" @dragover.prevent>
                                        <img v-if="list[17].orderNum=='1'" src="../../assets/foot/17@2x.png" draggable="true" @dragstart.stop="dragstartBack('17')"/>
                                        <img v-else src="../../assets/foot-no/17@2x.png"/>
                                        <img v-if="list[17].active==true && list[17].orderNum=='0'" style="z-index:10" src="../../assets/foot/left.png"/>
                                        <img v-if="list[17].active==true && list[17].orderNum=='1'" style="z-index:10" src="../../assets/foot/left-1.png"/>
                                        <div  draggable="true" @dragstart.stop="dragstartBack('17')" :class="list[17].orderNum=='1' ? 'word-left' : 'word-left has'"><div class="num">{{list[17].skuScore}}</div><div>{{list[17].skuNameLimit}}</div></div>
                                        <!--星星-->
                                        <!-- <div class="star1 left" v-if="list[17].skuStar=='1' || list[17].skuStar=='2' || list[17].skuStar=='3'"><img :src="list[17].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div>
                                        <div class="star2 left" v-if="list[17].skuStar=='2' || list[17].skuStar=='3'"><img :src="list[17].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div>
                                        <div class="star3 left" v-if="list[17].skuStar=='3'"><img :src="list[17].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div> -->
                                        <!--星星-->
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div class="coffee3" :id="3" @click.stop="show1" @drop.stop="drop('3')" @dragover.prevent>
                                <img v-if="list[3].orderNum=='1'" src="../../assets/foot/3@2x.png" draggable="true" @dragstart.stop="dragstartBack('3')"/>
                                <img v-else src="../../assets/foot-no/3@2x.png"/>
                                <img v-if="list[3].active==true && list[3].orderNum=='0'" style="z-index:10" src="../../assets/foot/right.png"/>
                                <img v-if="list[3].active==true && list[3].orderNum=='1'" style="z-index:10" src="../../assets/foot/right-1.png"/>
                                <div draggable="true" @dragstart.stop="dragstartBack('3')" :class="list[3].orderNum=='1' ? 'word-right' : 'word-right has'"><div class="num">{{list[3].skuScore}}</div><div>{{list[3].skuNameLimit}}</div></div>
                                <!--星星-->
                                <!-- <div class="star1" v-if="list[3].skuStar=='1' || list[3].skuStar=='2' || list[3].skuStar=='3'"><img :src="list[3].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div>
                                <div class="star2" v-if="list[3].skuStar=='2' || list[3].skuStar=='3'"><img :src="list[3].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div>
                                <div class="star3" v-if="list[3].skuStar=='3'"><img :src="list[3].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div> -->
                                <!--星星-->
                                <div class="coffee6" :id="6" @click.stop="show1" @drop.stop="drop('6')" @dragover.prevent>
                                    <img v-if="list[6].orderNum=='1'" src="../../assets/foot/6@2x.png" draggable="true" @dragstart.stop="dragstartBack('6')"/>
                                    <img v-else src="../../assets/foot-no/6@2x.png"/>
                                    <img v-if="list[6].active==true && list[6].orderNum=='0'" style="z-index:10" src="../../assets/foot/right.png"/>
                                    <img v-if="list[6].active==true && list[6].orderNum=='1'" style="z-index:10" src="../../assets/foot/right-1.png"/>
                                    <div draggable="true" @dragstart.stop="dragstartBack('6')" :class="list[6].orderNum=='1' ? 'word-right' : 'word-right has'"><div class="num">{{list[6].skuScore}}</div><div>{{list[6].skuNameLimit}}</div></div>
                                    <!--星星-->
                                    <!-- <div class="star1" v-if="list[6].skuStar=='1' || list[6].skuStar=='2' || list[6].skuStar=='3'"><img :src="list[6].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div>
                                    <div class="star2" v-if="list[6].skuStar=='2' || list[6].skuStar=='3'"><img :src="list[6].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div>
                                    <div class="star3" v-if="list[6].skuStar=='3'"><img :src="list[6].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div> -->
                                    <!--星星-->
                                    <div class="coffee10" :id="10" @click.stop="show1" @drop.stop="drop('10')" @dragover.prevent>
                                    <img v-if="list[10].orderNum=='1'" src="../../assets/foot/10@2x.png" draggable="true" @dragstart.stop="dragstartBack('10')"/>
                                    <img v-else src="../../assets/foot-no/10@2x.png"/>
                                    <img v-if="list[10].active==true && list[10].orderNum=='0'" style="z-index:10" src="../../assets/foot/right.png"/>
                                    <img v-if="list[10].active==true && list[10].orderNum=='1'" style="z-index:10" src="../../assets/foot/right-1.png"/>
                                    <div draggable="true" @dragstart.stop="dragstartBack('10')" :class="list[10].orderNum=='1' ? 'word-right' : 'word-right has'"><div class="num">{{list[10].skuScore}}</div><div>{{list[10].skuNameLimit}}</div></div>
                                    <!--星星-->
                                    <!-- <div class="star1" v-if="list[10].skuStar=='1' || list[10].skuStar=='2' || list[10].skuStar=='3'"><img :src="list[10].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div>
                                    <div class="star2" v-if="list[10].skuStar=='2' || list[10].skuStar=='3'"><img :src="list[10].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div>
                                    <div class="star3" v-if="list[10].skuStar=='3'"><img :src="list[10].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div> -->
                                    <!--星星-->
                                    <div class="coffee14" :id="14" @click.stop="show1" @drop.stop="drop('14')" @dragover.prevent>
                                        <img v-if="list[14].orderNum=='1'" src="../../assets/foot/14@2x.png" draggable="true" @dragstart.stop="dragstartBack('14')"/>
                                        <img v-else src="../../assets/foot-no/14@2x.png"/>
                                        <img v-if="list[14].active==true && list[14].orderNum=='0'" style="z-index:10" src="../../assets/foot/right.png"/>
                                        <img v-if="list[14].active==true && list[14].orderNum=='1'" style="z-index:10" src="../../assets/foot/right-1.png"/>
                                        <div draggable="true" @dragstart.stop="dragstartBack('14')" :class="list[14].orderNum=='1' ? 'word-right' : 'word-right has'"><div class="num">{{list[14].skuScore}}</div><div>{{list[14].skuNameLimit}}</div></div>
                                        <!--星星-->
                                        <!-- <div class="star1" v-if="list[14].skuStar=='1' || list[14].skuStar=='2' || list[14].skuStar=='3'"><img :src="list[14].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div>
                                        <div class="star2" v-if="list[14].skuStar=='2' || list[14].skuStar=='3'"><img :src="list[14].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div>
                                        <div class="star3" v-if="list[14].skuStar=='3'"><img :src="list[14].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div> -->
                                        <!--星星-->
                                        <div class="coffee18" :id="18" @click.stop="show1" @drop.stop="drop('18')" @dragover.prevent>
                                        <img v-if="list[18].orderNum=='1'" src="../../assets/foot/18@2x.png" draggable="true" @dragstart.stop="dragstartBack('18')"/>
                                        <img v-else src="../../assets/foot-no/18@2x.png"/>
                                        <img v-if="list[18].active==true && list[18].orderNum=='0'" style="z-index:10" src="../../assets/foot/right.png"/>
                                        <img v-if="list[18].active==true && list[18].orderNum=='1'" style="z-index:10" src="../../assets/foot/right-1.png"/>
                                        <div draggable="true" @dragstart.stop="dragstartBack('18')" :class="list[18].orderNum=='1' ? 'word-right' : 'word-right has'"><div class="num">{{list[18].skuScore}}</div><div>{{list[18].skuNameLimit}}</div></div>
                                        <!--星星-->
                                        <!-- <div class="star1" v-if="list[18].skuStar=='1' || list[18].skuStar=='2' || list[18].skuStar=='3'"><img :src="list[18].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div>
                                        <div class="star2" v-if="list[18].skuStar=='2' || list[18].skuStar=='3'"><img :src="list[18].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div>
                                        <div class="star3" v-if="list[18].skuStar=='3'"><img :src="list[18].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div> -->
                                        <!--星星-->
                                        </div>
                                    </div>
                                    <div class="coffee11" :id="11" @click.stop="show1" @drop.stop="drop('11')" @dragover.prevent>
                                        <img v-if="list[11].orderNum=='1'" src="../../assets/foot/11@2x.png" draggable="true" @dragstart.stop="dragstartBack('11')"/>
                                        <img v-else src="../../assets/foot-no/11@2x.png"/>
                                        <img v-if="list[11].active==true && list[11].orderNum=='0'" style="z-index:10" src="../../assets/foot/left.png"/>
                                        <img v-if="list[11].active==true && list[11].orderNum=='1'" style="z-index:10" src="../../assets/foot/left-1.png"/>
                                        <div draggable="true" @dragstart.stop="dragstartBack('11')" :class="list[11].orderNum=='1' ? 'word-left' : 'word-left has'"><div class="num">{{list[11].skuScore}}</div><div>{{list[11].skuNameLimit}}</div></div>
                                        <!--星星-->
                                        <!-- <div class="star1 left" v-if="list[11].skuStar=='1' || list[11].skuStar=='2' || list[11].skuStar=='3'"><img :src="list[11].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div>
                                        <div class="star2 left" v-if="list[11].skuStar=='2' || list[11].skuStar=='3'"><img :src="list[11].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div>
                                        <div class="star3 left" v-if="list[11].skuStar=='3'"><img :src="list[11].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div> -->
                                        <!--星星-->
                                        <div class="coffee15" :id="15" @click.stop="show1" @drop.stop="drop('15')" @dragover.prevent>
                                        <img v-if="list[15].orderNum=='1'" src="../../assets/foot/15@2x.png" draggable="true" @dragstart.stop="dragstartBack('15')"/>
                                        <img v-else src="../../assets/foot-no/15@2x.png"/>
                                        <img v-if="list[15].active==true && list[15].orderNum=='0'" style="z-index:10" src="../../assets/foot/left.png"/>
                                        <img v-if="list[15].active==true && list[15].orderNum=='1'" style="z-index:10" src="../../assets/foot/left-1.png"/>
                                        <div draggable="true" @dragstart.stop="dragstartBack('15')" :class="list[15].orderNum=='1' ? 'word-left' : 'word-left has'"><div class="num">{{list[15].skuScore}}</div><div>{{list[15].skuNameLimit}}</div></div>
                                        <!--星星-->
                                        <!-- <div class="star1 left" v-if="list[15].skuStar=='1' || list[15].skuStar=='2' || list[15].skuStar=='3'"><img :src="list[15].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div>
                                        <div class="star2 left" v-if="list[15].skuStar=='2' || list[15].skuStar=='3'"><img :src="list[15].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div>
                                        <div class="star3 left" v-if="list[15].skuStar=='3'"><img :src="list[15].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div> -->
                                        <!--星星-->
                                        <div class="coffee19" :id="19" @click.stop="show1" @drop.stop="drop('19')" @dragover.prevent>
                                            <img v-if="list[19].orderNum=='1'" src="../../assets/foot/19@2x.png" draggable="true" @dragstart.stop="dragstartBack('19')"/>
                                            <img v-else src="../../assets/foot-no/19@2x.png"/>
                                            <img v-if="list[19].active==true && list[19].orderNum=='0'" style="z-index:10" src="../../assets/foot/left.png"/>
                                            <img v-if="list[19].active==true && list[19].orderNum=='1'" style="z-index:10" src="../../assets/foot/left-1.png"/>
                                            <div draggable="true" @dragstart.stop="dragstartBack('19')" :class="list[19].orderNum=='1' ? 'word-left' : 'word-left has'"><div class="num">{{list[19].skuScore}}</div><div>{{list[19].skuNameLimit}}</div></div>
                                            <!--星星-->
                                            <!-- <div class="star1 left" v-if="list[19].skuStar=='1' || list[19].skuStar=='2' || list[19].skuStar=='3'"><img :src="list[19].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div>
                                            <div class="star2 left" v-if="list[19].skuStar=='2' || list[19].skuStar=='3'"><img :src="list[19].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div>
                                            <div class="star3 left" v-if="list[19].skuStar=='3'"><img :src="list[19].orderNum=='1'?'../../assets/foot/star1.png':'../../assets/foot/star0.png'"></div> -->
                                            <!--星星-->
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="btn lgfont" @click="saveMap">保存设置</div>
                </el-card>
            </div>
        </div>
        <div class="rightBox">
            <el-card>
                <div class="bigfont" style="padding:0 4%">成就奖励</div>
                <div class="title lgfont flex-center-Y">
                    <div style="width:32%">目标种类数</div>
                    <div style="text-align:center;width:50%">奖励内容</div>
                    <div style="text-align:right;width:18%">操作</div>
                </div>
                <div v-for="(item,i) in couponList" class="list flex-center-Y nomalfont">
                    <div v-show="!item.showEdit" class="num">{{item.skuNum}}</div>
                    <div v-show="item.showEdit" class="num">
                        <el-input placeholder="数量" v-model="item.skuNum"></el-input>
                    </div>
                    <div v-show="!item.showEdit" class="detail">
                        <div v-for="(list,index) in item.kupperSkuGift">{{list.name}}<span v-if="list.name">*</span>{{list.giftNum}}</div>
                    </div>
                    <div class="detail" v-show="item.showEdit">
                        <div style="height:100%;">
                            <div v-for="(list,index) in item.kupperSkuGift" class="flex-center-Y">
                                <el-select v-model="list.giftCoupon" placeholder="请选择" @change="selectCoupon">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.ruleId"
                                    :label="item.name"
                                    :value="item.ruleId"
                                    >
                                    </el-option>
                                </el-select>
                                <div style="height:100%;width:40%">
                                    <el-input placeholder="数量" v-model="list.giftNum"></el-input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="config flex-center-Y">
                        <div v-if="!item.showEdit" class="blue" style="margin-right:5%" @click="showEdit(item)">编辑</div>
                        <div v-else class="blue" style="margin-right:5%" @click="saveEdit(item)">保存</div>
                        <div class="blue" @click="deleteCoupon(item)">删除</div>
                    </div>
                </div>  
                <div class="addLine blue text-center nomalfont" @click="addCoupon">
                    <i class="el-icon-circle-plus-outline"></i>
                    <span>添加成就</span>
                </div>
                <div class="pagination-line">
                    <el-pagination background
                                @size-change="handleSizeChange"
                                @current-change="currentChange"
                                :current-page="paramsC.pageNum"
                                :page-size="paramsC.pageRow"
                                :total="paramsC.totalCount"  
                                layout="prev, pager, next">
                    </el-pagination>
                </div>
            </el-card>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    // import { Navbar, Sidebar, AppMain } from '@/divs/layout/components'
    export default {
        // components: {
        //     Navbar,
        //     Sidebar,
        //     AppMain
        // },
        data() {
            return {
                value1:1,
                skuList:[],
                params:{page:0,pageRow:10,totalCount:1000,searchName:""},
                paramsC:{pageNum:1,pageRow:4,totalCount:0},
                valueStar:2,
                showInfo:false,
                dropItem:"",
                backData:"",
                options:"",
                couponList:[{num:1,coupon:[{name:"咖啡抵用券",num:2},{name:"咖啡抵用券",num:2},{name:"咖啡抵用券",num:2},{name:"咖啡抵用券",num:2},{name:"咖啡抵用券",num:2}]},
                {num:2,coupon:[{name:"咖啡抵用券",num:2},{name:"咖啡抵用券",num:2},{name:"咖啡抵用券",num:2},{name:"咖啡抵用券",num:2},{name:"咖啡抵用券",num:2}]},
                {num:3,coupon:[{name:"咖啡抵用券",num:2},{name:"咖啡抵用券",num:2},{name:"咖啡抵用券",num:2},{name:"咖啡抵用券",num:2},{name:"咖啡抵用券",num:2}]},
                {num:4,coupon:[{name:"咖啡抵用券",num:2},{name:"咖啡抵用券",num:2},{name:"咖啡抵用券",num:2},{name:"咖啡抵用券",num:2},{name:"咖啡抵用券",num:2}]}],
                list:[
                    {
                    orderNum: 0,
                    skuNameLimit: "",
                    skuRank: 1,
                    skuScore: "",
                    skuStar: ""
                    },
                    {
                    orderNum: 0,
                    skuNameLimit: "",
                    skuRank: 2,
                    skuScore: "",
                    skuStar: ""
                    },
                    {
                    orderNum: 0,
                    skuNameLimit: "",
                    skuRank: 3,
                    skuScore: "",
                    skuStar: ""
                    },
                    {
                    orderNum: 0,
                    skuNameLimit: "",
                    skuRank: 4,
                    skuScore: "",
                    skuStar: ""
                    },
                    {
                    orderNum: 0,
                    skuNameLimit: "",
                    skuRank: 5,
                    skuScore: "",
                    skuStar: ""
                    },
                    {
                    orderNum: 0,
                    skuNameLimit: "",
                    skuRank: 6,
                    skuScore: "",
                    skuStar: ""
                    },
                    {
                    orderNum: 0,
                    skuNameLimit: "",
                    skuRank: 7,
                    skuScore: "",
                    skuStar: ""
                    },
                    {
                    orderNum: 0,
                    skuNameLimit: "",
                    skuRank: 8,
                    skuScore: "",
                    skuStar: ""
                    },
                    {
                    orderNum: 0,
                    skuNameLimit: "",
                    skuRank: 9,
                    skuScore: "",
                    skuStar: ""
                    },
                    {
                    orderNum: 0,
                    skuNameLimit: "",
                    skuRank: 10,
                    skuScore: "",
                    skuStar: ""
                    },
                    {
                    orderNum: 0,
                    skuNameLimit: "",
                    skuRank: 11,
                    skuScore: "",
                    skuStar: ""
                    },
                    {
                    orderNum: 0,
                    skuNameLimit: "",
                    skuRank: 12,
                    skuScore: "",
                    skuStar: ""
                    },
                    {
                    orderNum: 0,
                    skuNameLimit: "",
                    skuRank: 13,
                    skuScore: "",
                    skuStar: ""
                    },
                    {
                    orderNum: 0,
                    skuNameLimit: "",
                    skuRank: 14,
                    skuScore: "",
                    skuStar: ""
                    },
                    {
                    orderNum: 0,
                    skuNameLimit: "",
                    skuRank: 15,
                    skuScore: "",
                    skuStar: ""
                    },
                    {
                    orderNum: 0,
                    skuNameLimit: "",
                    skuRank: 16,
                    skuScore: "",
                    skuStar: ""
                    },
                    {
                    orderNum: 0,
                    skuNameLimit: "",
                    skuRank: 17,
                    skuScore: "",
                    skuStar: ""
                    },
                    {
                    orderNum: 0,
                    skuNameLimit: "",
                    skuRank: 18,
                    skuScore: "",
                    skuStar: ""
                    },
                    {
                    orderNum: 0,
                    skuNameLimit: "",
                    skuRank: 19,
                    skuScore: "",
                    skuStar: ""
                    },
                    {
                    orderNum: 0,
                    skuNameLimit: "",
                    skuRank: 20,
                    skuScore: "",
                    skuStar: ""
                    },
                    
                ],
                selectData:{
                    orderNum: 0,
                    skuName: "曼特宁",
                    skuRank: 20,
                    skuScore: "86",
                    skuStar: 1,
                    skuPicture: "http://robooot.img-cn-hangzhou.aliyuncs.com/seedling-dir/sku/sku4ced9d6cdcf947eaa84bab9d43649886_d72067b24bdf44438a098fbfb394de7c.png",
                    contentOne: "湿刨",
                    contentTwo: "杏桃、炭焙乌龙茶、烤核桃、可可和黄糖尾韵",
                    nameOne: "处理法",
                    nameTwo: "风味"
                    },
            }
        },
        created() {
            this.getList()
            this.getCouponList()//优惠券列表
            this.load()
            this.api({
                    url: "coupon/showAllTicket",
                    method: "post",
                    data: {}
                })
                    .then(data => {
                        this.options=data.couponList
                    })
                    .catch(e => {});
        },
        computed: {
            ...mapGetters([
              'userId','roleId'
            ])
          },
        methods: {  
            load(){
                if(this.skuList.length>=this.params.totalCount){
                }else{
                    this.params.page+=1
                    this.getSkuList()
                }
                
            },
            search(){
                this.params.page=1
                this.goodsType=''
                this.typeId=''
                this.skuList=[]
                this.getSkuList()
            },
            getSkuList(){
                let page=this.params.page
                let pageRow=this.params.pageRow
                let skuName=this.params.searchName
                this.api({
                    url: "kupper/foot/showKupperSku",
                    method: "post",
                    data: {
                        pageNum:page,
                        pageRow:pageRow,
                        skuName:skuName
                    }
                })
                    .then(data => {
                        this.skuList=this.skuList.concat(data.list)
                        this.params.totalCount=data.totalCount
                    })
                    .catch(e => {});
            },
            getList(){
                this.api({
                    url: "kupper/foot/showFootSku",
                    method: "post",
                    data: {
                        pageNum:1,
                        pageRow:20
                    }
                })
                    .then(data => {
                        for(let i in data.list){
                            for(let key in this.list){
                                if(data.list[i].skuRank==this.list[key].skuRank){
                                    data.list[i].orderNum=1
                                    this.list[key]=data.list[i]
                                }
                            }
                        }
                        let list1=[{}]
                        for (let i in this.list){
                        if (this.list[i].skuRank==Number(i)+1){
                            list1[Number(i) + 1] = this.list[i]
                        }
                        }
                        this.list=list1
                        this.list=JSON.parse(JSON.stringify(this.list))

                    })
                    .catch(e => {});
            },
            getCouponList(){
                this.api({
                    url: "kupper/foot/showAllFootGift",
                    method: "post",
                    data: this.paramsC
                })
                    .then(data => {
                        for(let i in data.list){
                            let kupperSkuGift=[]
                            for(let key in data.list[i].couponNames){
                                let kid={}
                                kid.name=data.list[i].couponNames[key]
                                kupperSkuGift.push(kid)
                            }
                            data.list[i].kupperSkuGift=kupperSkuGift
                        }
                        for(let i in data.list){
                            for(let key in data.list[i].giftNums){
                                data.list[i].kupperSkuGift[key].giftNum=data.list[i].giftNums[key]
                            }
                        }
                        for(let i in data.list){
                            for(let key in data.list[i].giftCoupons){
                                data.list[i].kupperSkuGift[key].giftCoupon=data.list[i].giftCoupons[key]
                            }
                        }
                        for(let key in data.list){
                            var num=5-data.list[key].kupperSkuGift.length
                            for (let i = 0; i < num; i++) { 
                                data.list[key].kupperSkuGift.push({name:"",giftNum:"",giftCoupon:""})
                            }
                        }   
                        this.paramsC.totalCount=data.totalCount
                        this.couponList=data.list

                    })
                    .catch(e => {});
            },
            handleSizeChange(val){
                this.paramsC.pageRow = val
                this.getCouponList(this.paramsC)
            },
            currentChange(index){
                this.paramsC.pageNum = index
                this.getCouponList(this.paramsC)
            },
            prevClick(index){
                this.paramsC.pageNum = index
                this.getCouponList(this.paramsC)
            },
            nextClick(index){
                this.paramsC.pageNum = index
                this.getCouponList(this.paramsC)
            },
            show1(e){
                var id = e.currentTarget.getAttribute('id')
                if (this.list[id].skuCode){
                this.list[id].active=true
                this.showInfo=true
                this.selectData=this.list[id]
                this.list=this.list
                }
            },
            hideInfo(){
                this.showInfo=false
                for(let i in this.list){
                    this.list[i].active=false
                }
                this.list=JSON.parse(JSON.stringify(this.list))
            },
            showEdit(item){
                for(let i in this.couponList){
                    this.couponList[i].showEdit=false
                }
                item.showEdit=true
                this.couponList=JSON.parse(JSON.stringify(this.couponList))
            },
            saveEdit(item){
                for(let i in item.kupperSkuGift){
                    for(let key in this.options){
                        if(item.kupperSkuGift[i].giftCoupon==this.options[key].ruleId){
                            item.kupperSkuGift[i].name=this.options[key].name
                        }
                    }
                }
                this.api({
                    url: "kupper/foot/addFootGift",
                    method: "post",
                    data:item
                })
                    .then(data => {
                        this.$message({
                                type: 'success',
                                message: '保存成功 !'
                            })
                        item.showEdit=false
                        this.getCouponList()
                    })
                    .catch(e => {});
            },
            addCoupon(){
                if(this.couponList.length==4){
                    this.couponList.pop()
                }
                this.couponList.unshift(
                    {
                        skuNum: "0",
                        kupperSkuGift: [
                            {
                                giftNum: "",
                                giftCoupon: "",
                                name: ""
                            },
                            {
                                giftNum: "",
                                giftCoupon: "",
                                name: ""
                            },
                            {
                                giftNum: "",
                                giftCoupon: "",
                                name: ""
                            },
                            {
                                giftNum: "",
                                giftCoupon: "",
                                name: ""
                            },
                            {
                                giftNum: "",
                                giftCoupon: "",
                                name: ""
                            },
                        ]
                    }
                )
                for(let i in this.couponList){
                    this.couponList[i].showEdit=false
                }
                this.couponList[0].showEdit=true
                this.couponList=JSON.parse(JSON.stringify(this.couponList))
            },
            deleteCoupon(item){
                item.isDelete="1"
                this.$confirm('是否确认删除?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                this.api({
                    url: "kupper/foot/addFootGift",
                    method: "post",
                    data: item
                }).then(data => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    this.getCouponList()
                });
                
                }).catch(() => {         
                });
            },
            dragstart(item){
                this.dropItem=item
            },
            dragstartBack(e){//反向拖拽
                let id=e
                this.backData=this.list[id]
            },
            drop(e){
                let id=e
                this.list[id].orderNum='1'
                this.list[id].skuNameLimit=this.dropItem.skuNameLimit
                this.list[id].skuName=this.dropItem.skuName
                this.list[id].skuPicture=this.dropItem.skuPicture
                this.list[id].skuCode=this.dropItem.skuCode
                this.list[id].skuScore=this.dropItem.skuScore
                this.list[id].skuStar=this.dropItem.skuStar
                this.list[id].contentOne=this.dropItem.contentOne
                this.list[id].nameOne=this.dropItem.nameOne
                this.list[id].nameTwo=this.dropItem.nameTwo
                this.list[id].contentTwo=this.dropItem.contentTwo
                this.list=JSON.parse(JSON.stringify(this.list))
            },
            dropBack(){
                let id=this.backData.skuRank
                this.list[id]={
                        orderNum: 0,
                        skuNameLimit: "",
                        skuRank: id,
                        skuScore: "",
                        skuStar: ""
                        },
                this.list=JSON.parse(JSON.stringify(this.list))
            },
            saveMap(){
                let commitList=[]
                for(let i in this.list){
                    if(this.list[i].skuCode){
                        commitList.push(this.list[i])
                    }
                }
                this.api({
                    url: "kupper/foot/addSku",
                    method: "post",
                    data: {kupperSkuInfo:commitList}
                })
                    .then(data => {
                        this.$message({
                                type: 'success',
                                message: '保存成功 !'
                            })
                       this.params={page:0,pageRow:10,totalCount:1000,searchName:""}
                       this.skuList=[]
                       this.getSkuList()
                       this.list=
                                [
                                    {
                                    orderNum: 0,
                                    skuNameLimit: "",
                                    skuRank: 1,
                                    skuScore: "",
                                    skuStar: ""
                                    },
                                    {
                                    orderNum: 0,
                                    skuNameLimit: "",
                                    skuRank: 2,
                                    skuScore: "",
                                    skuStar: ""
                                    },
                                    {
                                    orderNum: 0,
                                    skuNameLimit: "",
                                    skuRank: 3,
                                    skuScore: "",
                                    skuStar: ""
                                    },
                                    {
                                    orderNum: 0,
                                    skuNameLimit: "",
                                    skuRank: 4,
                                    skuScore: "",
                                    skuStar: ""
                                    },
                                    {
                                    orderNum: 0,
                                    skuNameLimit: "",
                                    skuRank: 5,
                                    skuScore: "",
                                    skuStar: ""
                                    },
                                    {
                                    orderNum: 0,
                                    skuNameLimit: "",
                                    skuRank: 6,
                                    skuScore: "",
                                    skuStar: ""
                                    },
                                    {
                                    orderNum: 0,
                                    skuNameLimit: "",
                                    skuRank: 7,
                                    skuScore: "",
                                    skuStar: ""
                                    },
                                    {
                                    orderNum: 0,
                                    skuNameLimit: "",
                                    skuRank: 8,
                                    skuScore: "",
                                    skuStar: ""
                                    },
                                    {
                                    orderNum: 0,
                                    skuNameLimit: "",
                                    skuRank: 9,
                                    skuScore: "",
                                    skuStar: ""
                                    },
                                    {
                                    orderNum: 0,
                                    skuNameLimit: "",
                                    skuRank: 10,
                                    skuScore: "",
                                    skuStar: ""
                                    },
                                    {
                                    orderNum: 0,
                                    skuNameLimit: "",
                                    skuRank: 11,
                                    skuScore: "",
                                    skuStar: ""
                                    },
                                    {
                                    orderNum: 0,
                                    skuNameLimit: "",
                                    skuRank: 12,
                                    skuScore: "",
                                    skuStar: ""
                                    },
                                    {
                                    orderNum: 0,
                                    skuNameLimit: "",
                                    skuRank: 13,
                                    skuScore: "",
                                    skuStar: ""
                                    },
                                    {
                                    orderNum: 0,
                                    skuNameLimit: "",
                                    skuRank: 14,
                                    skuScore: "",
                                    skuStar: ""
                                    },
                                    {
                                    orderNum: 0,
                                    skuNameLimit: "",
                                    skuRank: 15,
                                    skuScore: "",
                                    skuStar: ""
                                    },
                                    {
                                    orderNum: 0,
                                    skuNameLimit: "",
                                    skuRank: 16,
                                    skuScore: "",
                                    skuStar: ""
                                    },
                                    {
                                    orderNum: 0,
                                    skuNameLimit: "",
                                    skuRank: 17,
                                    skuScore: "",
                                    skuStar: ""
                                    },
                                    {
                                    orderNum: 0,
                                    skuNameLimit: "",
                                    skuRank: 18,
                                    skuScore: "",
                                    skuStar: ""
                                    },
                                    {
                                    orderNum: 0,
                                    skuNameLimit: "",
                                    skuRank: 19,
                                    skuScore: "",
                                    skuStar: ""
                                    },
                                    {
                                    orderNum: 0,
                                    skuNameLimit: "",
                                    skuRank: 20,
                                    skuScore: "",
                                    skuStar: ""
                                    },
                                    
                                ]
                       this.getList()
                    })
                    .catch(e => {});
            },
            selectCoupon(value){
            }
        }
    }
</script>
