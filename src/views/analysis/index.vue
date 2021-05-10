<style lang="scss" scoped>
$red: #C21C1C;
$grey:#999999;
#super{height:93vh}
.blank{width: 100%;height:100%;text-align: center;margin-top: 20%;color: #909399;font-size: 14px}
.tooflex .flex-1{
    text-align: center!important
}
.themcolor{color:$red}
.text-left{
    text-align:left!important
}
.flex {
    display: flex;
    display: -webkit-flex;
    .flex-left {
        flex: 4;
    }
    .flex-right {
        flex: 1;
        text-align: right;
        .wifi {
            width: 1vw;
        }
    }
    .flex-1 {
        flex: 1;
        // font-size: 1vw;
        padding: 6px 0;
        text-align: left
    }
    .flex-2 {
        flex: 2;
        // font-size: 1vw;
        padding: 6px 0;
        text-align: left
    }
    .flex-3 {
        flex: 3;
        // font-size: 1vw;
        padding: 6px 0;
        text-align: left
    }
    .flex-4 {
        flex: 4;
        // font-size: 1vw;
        padding: 6px 0;
        text-align: left
    }
    .flex-5 {
        flex: 5;
        // font-size: 1vw;
        padding: 6px 0;
        text-align: left
    }
}
.largefont{
    font-size:36px;
    font-weight: 600;
}
.bigfont{
    font-size: 28px;
    font-weight: 600;
}
.nomalfont{
    font-size: 24px;
}
.smallfont{
    font-size: 20px;
}
.minifont{
    font-size: 18px;
}
.tipfont{
    font-size: 14px;
}
@media screen and (max-width:1680px) {
    .bigfont{
        font-size: 24px;
    }
    .nomalfont{
        font-size: 20px;
    }
    .smallfont{
        font-size: 18px;
    }
    .minifont{
        font-size: 16px;
    }
    .tipfont{
        font-size: 14px;
    }
}
@media screen and (max-width:1440px) {
    .bigfont{
        font-size: 22px;
    }
    .nomalfont{
        font-size: 18px;
    }
    .smallfont{
        font-size: 16px;
    }
    .minifont{
        font-size: 14px;
    }
    .tipfont{
        font-size: 12px;
    }
}
@media screen and (max-width:1280px) {
    .bigfont{
        font-size: 20px;
    }
    .nomalfont{
        font-size: 16px;
    }
    .smallfont{
        font-size: 14px;
    }
    .minifont{
        font-size: 12px;
    }
    .tipfont{
        font-size:10px;
    }
}
.font-bold{
    font-weight: bold
}
.small-grey{color: $grey;font-size: 0.9vw;font-weight: 400}
.right-line {
    border-right: 2px solid #f1f1f1;
    padding-right: 1vw;
}
.left-p {
    padding-left: 1vw;
}
.bb {
    width: 10px;
}
.user-center {
    text-align: center;
}
.flex-center {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
}
.flex-center-Y {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: space-around;
    -webkit-justify-content: space-around;
}
.flex-end {
    align-self: flex-end;
}
.el-card{color: #333333}
.title {
    font-size: 1.4vw;
    font-weight: 600;
    color:#ffffff
}
.red-title {
    color: $red;
    font-size: 1.1vw;
    font-weight: 600;
}
.right-t {
    text-align: right;
}
.blod {
    font-weight: 600;
}
.red-line {
    border-bottom: 2px solid $red;
    text-align: center;
    // box-shadow:1px 3px 6px $red;
}
.card-title {
    padding: 2vh 2vw;
}
.aside{
    flex: 1;
    background-color: #333333;
    height: 100%
}
.left {
    flex: 1;
    .input-select-sku {
        background: $red;
        & * {
            background: $red;
        }
        .btn {
            margin-left: 2vw;
        }
    }
}
.center {
    // flex: 1.5;
    flex:6
}
.right {
    flex: 2;
}
.sku-tabs {
    .sku-tabs-left {
        flex: 1;
        cursor: pointer;
        .tab {
            padding: 2vh 0;
            margin: 4vh 0;
            text-align: center;
            &.active {
                background: #ececec;
                color: $red;
                border-radius: 0 4vh 4vh 0;
            }
        }
    }
    .sku-tabs-right {
        flex: 3;
        width: 100%;
        flex-wrap: wrap;
        align-content: flex-start;
        margin-left: 20px;
        .skuData {
            font-size: 0.8vw;
            font-weight: 600;
            line-height: calc(1vw + 10px);
            flex: 0 0 50%;
            margin-bottom: 20px;
            padding-right: 10px;
            .bottom {
                margin-top: 10px;
                .sku {
                    width: 3vw;
                    height: 3vw;
                    background: #dad9d9;
                    margin-right: 0.5vw;
                }
            }
        }
    }
}
.center {
    .center-top-left {
        flex: 1;
        padding: 4px 0;
        .logo {
            width: 2vw;
            margin-right: 0.5vw;
        }
        .user {
            width: 1.2vw;
            margin-right: 0.4vw;
        }
        .bat {
            width: 1.5vw;
            margin-left: 0.4vw;
            cursor: pointer;
        }
        .user-info {
            margin: 1vh 0;
            margin-top: 1vh;
        }
    }
    .center-top-right {
        flex: 3;
        font-size: 1.2vw;
        font-weight: 600;
        .tab {
            flex: 1;
            cursor: pointer;
            &:hover {
                background: rgba(245, 108, 108, 0.1);
            }
            &.active {
                background: $red;
                color: #ffffff;
                position: relative;
                &:hover {
                    opacity: 0.6;
                }
                &:after {
                    position: absolute;
                    bottom: -10px;
                    content: "";
                    width: 0;
                    height: 0;
                    border-right: 8px solid transparent;
                    border-top: 12px solid $red;
                    border-left: 8px solid transparent;
                }
                .active-img {
                    position: absolute;
                    top: 0;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    .store-carousel {
        font-weight: 600;
        .store {
            padding: 1vh 70px;
            font-size: 0.9vw;
            .flex {
                margin: 1vh 0;
                .font-s {
                    font-size: 0.8vw;
                }
            }
        }
    }
    .machines {
        // padding: 1vh 1vw;
        .machine {
            background: #eaeaea;
            height: 78vh;
            margin: 0 5vw;
            border-radius: 0.8vw;
        }
    }
}
.aside {
    .center-top{
        height: 100%;
        position: relative;
        .user-info {
            color: #fff;
            width: 100%;
            height: 12%;    
            position: absolute;bottom:10%;
            text-align:center;
            margin: 1vh 0;
            margin-top: 1vh;
            button{
                cursor: pointer;
                margin-top:10%;
                border-radius:20px;
                background-color: $red;
                border: 0;
                color:#fff;
                img{width: 28%;vertical-align: middle}
                span{vertical-align: middle}
               
            }
        }
        }
    .center-top-top {
        position: absolute;
        left: 0;
        width: 15%;
        height: 100%;
        padding: 4px 0;
        .logo {
            width: 2vw;
            margin-right: 0.5vw;
        }
        .user {
            width: 1.2vw;
            margin-right: 0.4vw;
        }
        .bat {
            width: 1.5vw;
            margin-left: 0.4vw;
            cursor: pointer;
        }
        
        .flex-center{position: absolute;top: 50%;transform: translateY(-50%)}
    }
    .center-top-middle {
        height: 23%;
        font-size: 1.2vw;
        font-weight: 600;
        .tab {
            color: #fff;
            width: 100%;
            height: 33.33333333%;
            cursor: pointer;
            &:hover {
                background: rgba(245, 108, 108, 0.1);
            }
            &.active {
                background: #000000;
                color: #ffffff;
                position: relative;
                &:hover {
                    opacity: 0.6;
                }
                &:after {
                    position: absolute;
                    bottom: 0px;
                    content: "";
                    width:5%;
                    height:100%;
                    background-color: $red;

                    // border-right: 8px solid transparent;
                    // border-top: 12px solid $red;
                    // border-left: 8px solid transparent;
                    left: 0
                }
                .active-img {
                    position: absolute;
                    top: 0;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}
.right-card {
    background: #eaeaea;
    margin-bottom: 1vh;
    border-radius: 0.4vw;
    padding: 2vh 2vw;
    .title {
        margin: 1vh 0;
    }
    .lists {
        background: #ffffff;
        padding: 1vh 1vw;
        border-radius: 0.4vw;
    }
    &.store-lists {
        height: 37vh;
    }
    &.store-cam {
        height: 24vh;
    }
    &.sku-tem {
        height: 37vh;
    }
}
.new-right{
    .store-box {
        // height: 30vh;
        margin-bottom: 20px;
        .title-note {
            font-size: 0.8vw;
            text-align: right;
        }
    }   
}
.left-sj {
    padding: 20px;
    .store-box {
        // height: 30vh;
        margin-bottom: 20px;
        .title-note {
            font-size: 0.8vw;
            text-align: right;
        }
    }
}
.center-card {
    font-size: 1vw;
    line-height: 1.6vw;
    font-weight: 600;
    .num {
        font-size: 2vw;
    }
    .num-note {
        display: block;
        font-size: 14px;
    }
}
.new-left{
    padding-left: 20px;
    .center-card {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 1vw;
    line-height: 1.6vw;
    font-weight: 600;
    .num {
        font-size: 2vw;
    }
    .num-note {
        display: block;
        font-size: 14px;
    }
    .grey-box{
        background-color: #fbfbfb;
        padding: 15px;
        span{
            color: $grey;
            font-weight: 400;
            font-size:0.9vw;
            }
    }
}
}

.right-sj {
    padding: 20px;
    .right-sjcard {
        margin-bottom: 20px;
    }
}
.user-center-data {
    font-size: 1.6vw;
    padding: 1.2vh 0;
    .ss {
        font-size: 1vw;
    }
    .d-s {
        font-size: 1.6vw;
    }
    .danger {
        color: #f56c6c;
    }
    .success {
        color: #67c23a;
    }
}
.d-ss {
    .d-s {
        font-size: 2vw;
    }
    .danger {
        color: #f56c6c;
    }
    .success {
        color: #67c23a;
    }
}
.pay-line {
    width: 21vw;
    font-size: 1vw;
    .line {
        padding: 8px 0;
        text-align: center;
        color: #ffffff;
        margin-bottom: 12px;
    }
    .name {
        font-size: 0.9vw;
        text-align: left;
        padding: 0 0;
    }
    .pay {
        &:first-child {
            .line {
                border-radius: 4px 0 0 4px;
                overflow: hidden;
            }
        }
        &:last-child {
            .line {
                border-radius: 0 4px 4px 0;
                overflow: hidden;
            }
        }
    }
    .success {
        .line {
            background: #67c23a;
        }
        .name {
            color: #67c23a;
        }
    }
    .danger {
        .line {
            background: #f56c6c;
        }
        .name {
            color: #f56c6c;
        }
    }
    .blue {
        .line {
            background: #66b7f0;
        }
        .name {
            color: #66b7f0;
        }
    }
    .yellow {
        .line {
            background: #ffbd88;
        }
        .name {
            color: #ffbd88;
        }
    }
    .pink {
        .line {
            background: rgb(187, 76, 137);
        }
        .name {
            color: rgb(187, 76, 137);
        }
    }
    .purple {
        .line {
            background: rgb(191, 109, 222);
        }
        .name {
            color: rgb(191, 109, 222);
        }
    }
}
.storeNames {
    .block {
        display: inline-block;
        width: 36px;
        height: 16px;
        border-radius: 4px;
        margin: 6px;
    }
    .storeName {
        cursor: pointer;
        font-size: 10px;
        text-align: left;
    }
    
}
.trand-left{
    border-right:2px dotted #e3e3e3;
}
.opacity-1{
    opacity:1;
    transition: 0.5s;
    z-index: 10;
    
}
.opacity-0{
    opacity:0;
    transition: 0.5s;
    z-index: -1
}
img{width: 40px;height: 40px}
.line-detail{
    font-weight:300;font-size:16px;color:#606266;
    .flex-1,.flex-2{padding: 5%}
    }
.line-weight{color:#606266;font-weight:600}
@media screen and (max-width: 1520px) {
    .line-detail{font-size:13px;}
    .new-left{padding-left: 10px}
    .right-sj{padding: 10px}
    .new-left .center-card{margin-top: 10px;margin-bottom: 10px}
    .new-right .store-box{margin-bottom: 10px}
}
#super-top{height: 15%}
#super-bottom{height: 85%}
.H-100{height: 100%}
.H-50{height: 50%}
.H-40{height: 40%}
.H-60{height: 60%}
.text-center{text-align: center!important}
.text-right{text-align: right!important}
.pb-2{padding-bottom: 2%}
.pt-2{padding-top: 2%}
.pt-1{padding-top:1%}
.pb-1{padding-bottom:1%}
.pr-1{padding-right:1%!important}
.pl-1{padding-left:1%!important}
.pl-2{padding-left:2%!important}
.pb-20{padding-bottom:1.8vh}
.p-20{padding:1.8vh!important}
.pt-0{padding-top:0%!important}
.pb-0{padding-bottom:0%!important}
.pr-0{padding-right:0%!important}
.pl-0{padding-left:0%!important}
</style>
<style>
.padding-10 .el-card__body{padding:10px 20px!important}
#super .el-carousel__container{height: 100%!important}
#super .el-radio-button__inner{
        border: 0;
        border-radius: 24px!important
    }
#super .tableheight{height: 1.8vh}
#super .el-table td, .el-table th{padding:1vh 0}
#super #chart .el-radio-button__inner{padding: 7px 1.5vw!important}
#super .el-radio-button__inner{padding: 7px 0.5vw!important}
#super .el-radio-group{
    background-color: #eeeeee;
    border-radius: 24px
}
#super-bottom .el-radio-button .el-radio-button__inner{
    background-color: #fff;
    color: #9B9B9B;
    font-size: 24px
}
#super-bottom .timetab .el-radio-button .el-radio-button__inner{
    font-size: 20px
}
#super-bottom .el-radio-button.is-active .el-radio-button__inner{font-weight: 600}
#super-bottom .el-radio-group{
    background-color: #fff;
}
#super-bottom .tablefont{font-size: 18px;font-weight: 500}
@media screen and (max-width:1680px) {
    #super-bottom .tablefont{font-size: 16px;font-weight: 500}
    #super-bottom .el-radio-button .el-radio-button__inner{
    background-color: #fff;
    color: #9B9B9B;
    font-size: 20px
}
#super-bottom .timetab .el-radio-button .el-radio-button__inner{
    font-size: 18px
}
}
@media screen and (max-width:1440px) {
    #super-bottom .tablefont{font-size: 14px;font-weight: 500;padding: 2% 0}
    #super-bottom .el-radio-button .el-radio-button__inner{
    background-color: #fff;
    color: #9B9B9B;
    font-size: 18px
}
#super .el-card .el-card__body{padding:15px!important}
#super-bottom .timetab .el-radio-button .el-radio-button__inner{
    font-size: 16px
}
}
@media screen and (max-width:1280px) {
    #super-bottom .tablefont{font-size: 12px;font-weight: 500;padding: 2% 0}
    #super-bottom .el-radio-button .el-radio-button__inner{
    background-color: #fff;
    color: #9B9B9B;
    font-size:16px
}
#super .el-card .el-card__body{padding:15px!important}
#super-bottom .timetab .el-radio-button .el-radio-button__inner{
    font-size: 14px
}
}
html,body,#app{
    margin:0px;
    /* height:100%!important; */
}
.store-carousel .el-carousel__container {
    height: 12vh;
}
.store-carousel .el-carousel__arrow {
    background: transparent;
    color: #000000;
    font-size: 1.4vw;
    font-weight: 600;
    cursor: pointer;
}
.store-carousel .el-carousel__arrow:hover {
    background: rgba(31, 45, 61, 0.11);
}
.machine-carousel .el-carousel__container {
    height: 78vh;
}
.machine-carousel .el-carousel__arrow {
    font-size: 2vw;
    font-weight: 600;
    cursor: pointer;
    width: 3vw;
    height: 6vw;
    border-radius: 0.6vw;
}
/* .time-tabs .el-radio-button .el-radio-button__inner{
    background-color: #eeeeee
}
.time-tabs .el-radio-button .el-radio-button__inner:hover {
    color: #C21C1C;
}
.time-tabs .el-radio-button.is-active .el-radio-button__inner:hover {
    color: #ffffff;
} */
#super{padding: 1%}
#super .el-card__body{padding:30px!important}
#super .el-pager li.active {
    color:#fff;
    background-color: #333333
}
#super .el-pager li:hover {
    color: #fff;
}
#super .el-pager .el-icon:hover {
    color: #333333;
}
/* #super .ve-ring{height: 360px!important} */
.chartDataHistogram2 .el-radio-button{z-index: 11}
#super .el-card,#super .el-card .el-card__body{height: 100%}
</style>

<template>
    <div id="super" v-if="showFlag">
        <div id="super-top">
            <el-card class="center-card padding-10">
                <div class="flex-center-Y H-100">
                    <div class="flex-2 text-center">
                        <div class="pb-20 bigfont">总销售额</div> <div class="num red-title pt-2 largefont">￥
                            <countTo :startVal='startVal' :endVal='InfoProfix.sales || 0' :decimals="2" :duration='2000'></countTo>
                        </div>
                         
                    </div>
                    <div class="flex-2 text-center">
                       <div class="pb-20 bigfont">经营总利润</div>  <div class="num red-title pt-2 largefont">￥
                           <countTo :startVal='startVal' :endVal='InfoProfix.profits || 0' :decimals="2" :duration='2000'></countTo>
                        </div>
                    </div>
                    <div class="flex-2 text-center">
                        <div class="pb-20 bigfont">总订单量</div> <div class="num red-title pt-2 largefont">
                            <countTo :startVal='startVal' :endVal='InfoProfix.orderNum || 0' :decimals="0" :duration='2000'></countTo>
                        </div>
                    </div>
                    <div class="flex-2 text-center">
                        <div class="pb-20 bigfont">总消费用户数</div> <div class="num red-title pt-2 largefont">
                            <countTo :startVal='startVal' :endVal='InfoProfix.userNums || 0' :decimals="0" :duration='2000'></countTo>
                        </div>
                    </div>
                </div>
            </el-card>
        </div>
        <div id="super-bottom">
            <div class="p-20 pb-0 pl-0 pr-0 H-100">
                <div class="flex H-100">
                    <div class="flex-2 H-100 pb-0 p-20 pl-0 pt-0">
                        <el-card id="chart">
                            <div style="height:7%">
                                <el-radio-group v-model="graphicChangeValue"
                                            size="mini"
                                            class="jy-2 time-tabs"
                                            @change="graphicChange"
                                            fill="#fff"
                                            text-color="#333">
                                    <el-radio-button label="0">经营走势图</el-radio-button>
                                    <el-radio-button label="1">增长图</el-radio-button>
                                    <el-radio-button label="2">SKU销售图</el-radio-button>
                                    <el-radio-button label="3">总销售额图</el-radio-button>
                                    <el-radio-button label="4">复购比率图</el-radio-button>
                                </el-radio-group>
                            </div>
                            <div class="timetab" style="height:10%">
                                <el-radio-group v-model="tabTime"
                                                v-if="graphicChangeValue=='0'"
                                                size="middle"
                                                class="jy-2 time-tabs"
                                                @change="timeChange"
                                                fill="#fff"
                                                text-color="#4A90E2">
                                    <el-radio-button label="0">今日</el-radio-button>
                                    <el-radio-button label="1">近7天</el-radio-button>
                                    <el-radio-button label="2">近30天</el-radio-button>
                                </el-radio-group>
                                <el-radio-group v-model="GrouthTime"
                                                v-if="graphicChangeValue=='1'"
                                                size="middle"
                                                class="jy-2 time-tabs"
                                                @change="GrouthChange"
                                                fill="#fff"
                                                text-color="#4A90E2">
                                    <el-radio-button label="0">昨天</el-radio-button>
                                    <el-radio-button label="1">一周前</el-radio-button>
                                    <el-radio-button label="2">30天前</el-radio-button>
                                </el-radio-group>
                                <div v-if="graphicChangeValue=='2'">
                                <el-radio-group v-model="tabTop1"
                                                :legend-visible="false"
                                                size="middle"
                                                class="jy-2 time-tabs"
                                                @change="topChange1"
                                                fill="#fff"
                                                text-color="#4A90E2">
                                    <el-radio-button label="asc">升序</el-radio-button>
                                    <el-radio-button label="desc">降序</el-radio-button>
                                </el-radio-group>
                                <br>    
                                <el-radio-group v-model="tabTop"
                                                size="middle"
                                                class="jy-2 time-tabs"
                                                @change="topChange"
                                                fill="#fff"
                                                text-color="#4A90E2">
                                    <el-radio-button label="profits">利润</el-radio-button>
                                    <el-radio-button label="orderNum">交易量</el-radio-button>
                                    <el-radio-button label="sales">销售额</el-radio-button>
                                </el-radio-group>
                                </div>
                            </div>
                            <div class="flex" style="height:83%" v-show="graphicChangeValue=='0'">
                                <div class="flex-3">
                                    <ve-line    
                                        height="50vh"
                                        :data="chartData"
                                        ref="chart0"
                                        :settings="chartSettings"
                                        :data-empty='isBlank'
                                        :extend="chartextend"
                                        :loading="isLineLoaing">
                                    </ve-line>
                                </div>
                                <div class="flex-1 line-detail" style="position:relative">
                                    <div style="position:absolute;bottom:13%;width:100%" class="smallfont">
                                        <div class="flex"><div class="flex-1 text-right">销售额:</div><div class="flex-1 pl-2"> ￥<span class="themcolor">{{alldata.sales || 0}}</span></div></div>
                                        <div class="flex"><div class="flex-1 text-right">成本:</div><div class="flex-1 pl-2"> ￥<span>{{alldata.producementPrice || 0}}</span></div></div>
                                        <div class="flex"><div class="flex-1 text-right">利润:</div><div class="flex-1 pl-2"> ￥<span class="themcolor">{{alldata.profits || 0}}</span></div></div>
                                        <div class="flex"><div class="flex-1 text-right">进账收益:</div><div class="flex-1 pl-2"> ￥<span>{{alldata.payPrice || 0}}</span></div></div>
                                        <div class="flex"><div class="flex-1 text-right">集团券收入:</div><div class="flex-1 pl-2"> ￥<span class="themcolor">{{alldata.groupCouponPrice || 0}}</span></div></div>
                                        <div class="flex"><div class="flex-1 text-right">退款额:</div><div class="flex-1 pl-2"> ￥<span>{{alldata.refuredPrice || 0}}</span></div></div>
                                        <div class="flex"><div class="flex-1 text-right">营销费用:</div><div class="flex-1 pl-2"> ￥<span>{{alldata.couponPrice || 0}}</span></div></div>
                                        <div class="flex"><div class="flex-1 text-right">交易量:</div><div class="flex-1 pl-2"> <span class="themcolor">{{alldata.orderNum || 0}} 笔</span></div></div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex" style="height:83%" v-show="graphicChangeValue=='1'">
                                <div class="flex-3">
                                    <ve-histogram height="55vh"
                                                :legend-visible="false"
                                                :data="chartGrouthData"
                                                ref="chart1"
                                                :extend="Grouthextend" 
                                                :settings="chartGrouthSettings"
                                                :data-empty='isGrouthBlank'
                                                :loading="isLineGrouthLoaing">
                                    </ve-histogram>
                                </div>
                                <div class="flex-1 line-detail" style="position:relative">
                                    <div style="position:absolute;bottom:13%;width:100%" class="smallfont">
                                        <div class="flex"><div class="flex-2">销售额
                                                <i class="el-icon-caret-top danger d-s" style="font-size:20px" v-if="allGrouthData.salesFlag"></i>
                                                <i class="el-icon-caret-bottom success d-s" style="font-size:20px" v-else></i>
                                            </div><div class="flex-2"> ￥<span class="themcolor">{{allGrouthData.sales || 0}}</span></div></div>
                                            <div class="flex"><div class="flex-2">成本差额
                                                <i class="el-icon-caret-top danger d-s" style="font-size:20px" v-if="allGrouthData.producementPriceFlag"></i>
                                                <i class="el-icon-caret-bottom success d-s" style="font-size:20px" v-else></i>
                                                </div><div class="flex-2"> ￥<span>{{allGrouthData.producementPrice || 0}}</span></div></div>
                                            <div class="flex"><div class="flex-2">利润
                                                <i class="el-icon-caret-top danger d-s" style="font-size:20px" v-if="allGrouthData.profitsFlag"></i>
                                                <i class="el-icon-caret-bottom success d-s" style="font-size:20px" v-else></i>
                                                </div><div class="flex-2"> ￥<span class="themcolor">{{allGrouthData.profits || 0}}</span></div></div>
                                            <div class="flex"><div class="flex-2">进账收益
                                                <i class="el-icon-caret-top danger d-s" style="font-size:20px" v-if="allGrouthData.payPriceFlag"></i>
                                                <i class="el-icon-caret-bottom success d-s" style="font-size:20px" v-else></i>
                                                </div><div class="flex-2"> ￥<span>{{allGrouthData.payPrice || 0}}</span></div></div>
                                            <div class="flex"><div class="flex-2">集团券收入
                                                <i class="el-icon-caret-top danger d-s" style="font-size:20px" v-if="allGrouthData.groupCouponPriceFlag"></i>
                                                <i class="el-icon-caret-bottom success d-s" style="font-size:20px" v-else></i>
                                                </div><div class="flex-2"> ￥<span class="themcolor">{{allGrouthData.groupCouponPrice || 0}}</span></div></div>
                                            <div class="flex"><div class="flex-2">退款额
                                                <i class="el-icon-caret-top danger d-s" style="font-size:20px" v-if="allGrouthData.refuredPriceFlag"></i>
                                                <i class="el-icon-caret-bottom success d-s" style="font-size:20px" v-else></i>
                                                </div><div class="flex-2"> ￥<span>{{allGrouthData.refuredPrice || 0}}</span></div></div>
                                            <div class="flex"><div class="flex-2">营销费用
                                                <i class="el-icon-caret-top danger d-s" style="font-size:20px" v-if="allGrouthData.couponPriceFlag"></i>
                                                <i class="el-icon-caret-bottom success d-s" style="font-size:20px" v-else></i>
                                                </div><div class="flex-2"> ￥<span>{{allGrouthData.couponPrice || 0}}</span></div></div>
                                            <div class="flex"><div class="flex-2">交易量
                                                <i class="el-icon-caret-top danger d-s" style="font-size:20px" v-if="allGrouthData.orderNumFlag"></i>
                                                <i class="el-icon-caret-bottom success d-s" style="font-size:20px" v-else></i>
                                                </div><div class="flex-2"> <span class="themcolor">{{allGrouthData.orderNum || 0}} 笔</span></div></div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex" style="height:83%" v-show="graphicChangeValue=='2'">
                                <div class="flex-3">
                                    <ve-bar 
                                          height="50vh"
                                          ref="chart2"
                                          :extend="skuextend"
                                          :data="chartDataHistogram2" 
                                          :settings="SettingsHistogram2"
                                          :loading="skuLoaing">
                                    </ve-bar>
                                </div>
                                <div class="flex-1 line-detail" style="position:relative">
                                    <div style="position:absolute;bottom:13%;width:100%;padding-left:5%" class="smallfont">
                                        <div>
                                            <div class="flex line-weight">
                                                <div class="flex-1">
                                                    <div class="flex">
                                                        SKU名称
                                                    </div>
                                                </div> 
                                                <div class="flex-1" v-if="tabTop=='profits'">利润</div>
                                                <div class="flex-1" v-if="tabTop=='orderNum'">交易量</div>
                                                <div class="flex-1" v-if="tabTop=='sales'">销售额</div>
                                            </div>
                                        </div>
                                        <div v-for="(item,i) in SKUData" :key="i">
                                            <div class="flex"  v-if="tabTop=='profits'">
                                                <div class="flex-1">
                                                    <div class="flex">
                                                        {{item.skuName}}
                                                    </div>
                                                </div> 
                                                <div class="flex-1">￥ {{item.profits}}</div>
                                            </div>
                                            <div class="flex"  v-if="tabTop=='orderNum'">
                                                <div class="flex-1">
                                                    <div class="flex">
                                                        {{item.skuName}}
                                                        :
                                                    </div>
                                                </div> 
                                                <div class="flex-1">{{item.orderNum}} 笔</div>
                                            </div>
                                            <div class="flex"  v-if="tabTop=='sales'">
                                                <div class="flex-1">
                                                    <div class="flex">
                                                        {{item.skuName}}
                                                        :
                                                    </div>
                                                </div> 
                                                <div class="flex-1">￥ {{item.sales}}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex" style="height:83%" v-show="graphicChangeValue=='3'">
                                <div class="flex-3">
                                   <ve-bar 
                                       :legend-visible="false"
                                       height="50vh"
                                       ref="chart3"
                                       :extend="saleextend"
                                       :data="chartDataHistogram" 
                                       :settings="SettingsHistogram">
                                   </ve-bar>
                                </div>
                                <div class="flex-1 line-detail" style="position:relative">
                                    <div style="position:absolute;bottom:13%;width:100%" class="smallfont">
                                        <div class="flex"><div class="flex-1 text-right">销售额:</div><div class="flex-1"> ￥<span class="themcolor">{{orderJson.sales || 0}}</span></div></div>
                                        <div class="flex"><div class="flex-1 text-right">成本:</div><div class="flex-1"> ￥<span>{{orderJson.producementPrice || 0}}</span></div></div>
                                        <div class="flex"><div class="flex-1 text-right">利润:</div><div class="flex-1"> ￥<span class="themcolor">{{orderJson.profits || 0}}</span></div></div>
                                        <div class="flex"><div class="flex-1 text-right">进账收益:</div><div class="flex-1"> ￥<span>{{orderJson.payPrice || 0}}</span></div></div>
                                        <div class="flex"><div class="flex-1 text-right">集团券收入:</div><div class="flex-1"> ￥<span class="themcolor">{{orderJson.groupCouponPrice || 0}}</span></div></div>
                                        <div class="flex"><div class="flex-1 text-right">退款额:</div><div class="flex-1"> ￥<span>{{orderJson.refuredPrice || 0}}</span></div></div>
                                        <div class="flex"><div class="flex-1 text-right">营销费用:</div><div class="flex-1"> ￥<span>{{orderJson.couponPrice || 0}}</span></div></div>
                                        <div class="flex"><div class="flex-1 text-right">交易量:</div><div class="flex-1"> <span class="themcolor">{{orderJson.orderNum || 0}} 笔</span></div></div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex" style="height:83%" v-show="graphicChangeValue=='4'">
                                <div class="flex-3">
                                    <ve-line 
                                        :data="operatorSaleToo"
                                        class="right-sjcard" 
                                        :extend="SaleTooextend" 
                                        ref="chart4"
                                        height="50vh" 
                                        :settings="SaleTooSettings"
                                        :data-empty='isSaleTooBlank'
                                        :loading="isLineSaleTooLoaing">
                                    </ve-line>
                                </div>
                                <div class="flex-1 line-detail"  style="position:relative">
                                    <div style="position:absolute;bottom:13%;width:100%" class="smallfont">
                                        <div class="flex line-weight">
                                            <div class="flex-1">交易量</div> 
                                            <div class="flex-1">用户数量</div>
                                        </div>
                                        <div class="flex">
                                            <div class="flex-1">{{operatorSaleToo.rows ? operatorSaleToo.rows[0].orderNum : ''}}</div>
                                            <div class="flex-1">{{operatorSaleToo.rows ? operatorSaleToo.rows[0].userNum : ''}}</div>
                                        </div>
                                        <div class="flex">
                                            <div class="flex-1">{{operatorSaleToo.rows ? operatorSaleToo.rows[1].orderNum : ''}}</div>
                                            <div class="flex-1">{{operatorSaleToo.rows ? operatorSaleToo.rows[1].userNum : ''}}</div>
                                        </div>
                                        <div class="flex">
                                            <div class="flex-1">{{operatorSaleToo.rows ? operatorSaleToo.rows[2].orderNum : ''}}</div>
                                            <div class="flex-1">{{operatorSaleToo.rows ? operatorSaleToo.rows[2].userNum : ''}}</div>
                                        </div>
                                        <div class="flex">
                                            <div class="flex-1">...</div> 
                                            <div class="flex-1">...</div>
                                        </div>
                                        <div class="flex">
                                            <div class="flex-1">{{operatorSaleToo.rows ? operatorSaleToo.rows[operatorSaleToo.rows.length-3].orderNum : ''}}</div> 
                                            <div class="flex-1">{{operatorSaleToo.rows ? operatorSaleToo.rows[operatorSaleToo.rows.length-3].userNum : ''}}</div>
                                        </div>
                                        <div class="flex">
                                            <div class="flex-1">{{operatorSaleToo.rows ? operatorSaleToo.rows[operatorSaleToo.rows.length-2].orderNum : ''}}</div> 
                                            <div class="flex-1">{{operatorSaleToo.rows ? operatorSaleToo.rows[operatorSaleToo.rows.length-2].userNum : ''}}</div>
                                        </div>
                                        <div class="flex">
                                            <div class="flex-1">{{operatorSaleToo.rows ? operatorSaleToo.rows[operatorSaleToo.rows.length-1].orderNum : ''}}</div> 
                                            <div class="flex-1">{{operatorSaleToo.rows ? operatorSaleToo.rows[operatorSaleToo.rows.length-1].userNum : ''}}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </el-card>
                    </div>
                    <div class="flex-1 H-100 pt-0 pb-0">
                        <div class="H-40" style="padding-bottom:0.9vh">
                            <el-card class="store-box">
                                <div class="flex-center-Y">
                                    <div class="flex-1 nomalfont font-bold  pt-0">近30天 Top3 SKU</div>
                                    <div class="flex-1 timetab text-right pt-0"> 
                                        <el-radio-group v-model="skuChangeValue"
                                                    size="mini"
                                                    class="jy-2 time-tabs"
                                                    @change="skuChange"
                                                    fill="#fff"
                                                    text-color="#333">
                                            <el-radio-button label="0">热销</el-radio-button>
                                            <el-radio-button label="1">冷门</el-radio-button>
                                        </el-radio-group>
                                    </div>
                                </div>
                                <el-table
                                    :data="skuSortData"
                                    stripe
                                    style="width: 100%;"
                                    header-cell-class-name="tablefont"
                                    cell-class-name="tablefont"
                                    row-class-name="tableheight">
                                    <el-table-column
                                    prop="skuName"
                                    label="SKU名称"
                                    align="left"
                                    >
                                    <template slot-scope="scope">
                                        <el-popover placement="right"
                                                        width="200"
                                                        trigger="hover">
                                                <div>
                                                    <div>近30天利润率：<span class="themcolor">{{scope.row.profitsRate}}</span></div>
                                                    <div>近30天销售额：<span class="themcolor">¥ {{scope.row.discPrice}}</span></div>
                                                    <div>近30天成本价：<span class="themcolor">¥ {{scope.row.procurementPrice}}</span></div>
                                                </div>
                                                <span slot="reference">{{scope.row.skuName}}</span>
                                        </el-popover>
                                    </template>
                                    </el-table-column>
                                    <el-table-column
                                    prop="skuCount"
                                    label="销量"
                                    align="right">
                                    </el-table-column>
                                    <el-table-column
                                    prop="profits"
                                    label="利润"
                                    align="right">
                                    <template slot-scope="scope">
                                        <span class="themcolor">￥{{scope.row.profits}}</span>
                                    </template>
                                    </el-table-column>
                                </el-table>
                            </el-card>
                        </div>
                        <div class="H-60" style="padding-top:0.9vh">
                            <el-card class="right-sjcard">
                                <div class="flex-center">
                                    <div class="flex-1 nomalfont font-bold pt-0">近30天机器数据占比</div>
                                    <div class="timetab text-right pt-0">
                                    <el-radio-group v-model="tabChangeValue"
                                                    size="mini"
                                                    class="jy-2 time-tabs"
                                                    @change="tabChange"
                                                    fill="#fff"
                                                    text-color="#333">
                                        <el-radio-button label="0">销售额</el-radio-button>
                                        <el-radio-button label="1">利润</el-radio-button>
                                        <el-radio-button label="2">用户</el-radio-button>
                                    </el-radio-group>
                                    </div>
                                </div>
                                <!-- 可视化图表 -->
                                <div v-show="thumbType=='0'">
                                    <div v-if="circleData.rows.length>0">
                                        <ve-ring v-if="tabChangeValue == 0 || tabChangeValue == 2"
                                            :data="circleData"
                                            height="35Vh"
                                            :settings="chartSettingsCircle"
                                            :loading="isCircleLoaing"></ve-ring>
                                        <div v-else
                                            class="flex-center">
                                            <div class="storeNames flex-1">
                                                <div v-for="(item,i) in circleData.rows"
                                                    :key="i"
                                                    class="flex-center-Y storeName"
                                                    :style="{color:item.active?item.color:'#333333'}"
                                                    @click="storeNameSwitch(i)">
                                                    <span class="limit">{{item.storeName}}{{item.proportionProfits}}%</span>
                                                    <span :style="{background:item.color}"
                                                        class="block"></span>
                                                </div>
                                            </div>
                                            <div class="flex-1 flex-center">
                                                <el-progress type="circle"
                                                            :percentage="activedCircleData.proportionProfits"
                                                            :color="activedCircleData.color"
                                                            status="text">
                                                    <span :style="{color:activedCircleData.color}"><span v-if="activedCircleData.profits!=='0'"> ¥ </span>{{activedCircleData.profits}}</span>
                                                </el-progress>
                                            </div>

                                        </div>
                                    </div>
                                    <div v-else class='blank'>
                                        暂无数据
                                    </div>
                                </div>
                                <!-- 可视化图表 -->
                                <!-- 列表形式 -->
                                <div v-show="thumbType=='1'">
                                    <el-table
                                        v-if="tabChangeValue == 0"
                                        :data="circleDatas.list"
                                        @sort-change="changeSort"
                                        stripe
                                        style="width: 100%;"
                                        header-cell-class-name="tablefont"
                                        cell-class-name="tablefont"
                                        row-class-name="tableheight">
                                        <el-table-column
                                        prop="storeName"
                                        label="设备名称"
                                        align="left"
                                        width="180"
                                        >
                                        <template slot-scope="scope">
                                            <el-popover placement="right"
                                                            width="200"
                                                            trigger="click">
                                                    <span>{{scope.row.storeName}}</span>
                                                    <span class="limit" slot="reference">{{scope.row.storeName}}</span>
                                            </el-popover>
                                        </template>
                                        </el-table-column>
                                        <el-table-column
                                        prop="sales"
                                        label="数据(元)"
                                        align="right">
                                        </el-table-column>
                                        <el-table-column
                                        prop="proportionSales"
                                        label="占比"
                                        sortable="custom"
                                        align="right">
                                        <template slot-scope="scope">
                                            <span>{{scope.row.proportionSales}}%</span>
                                        </template>
                                        </el-table-column>
                                    </el-table>
                                    <el-table
                                        v-if="tabChangeValue == 1"
                                        :data="circleDatas.list"
                                        @sort-change="changeSort"
                                        stripe
                                        style="width: 100%;"
                                        header-cell-class-name="tablefont"
                                        cell-class-name="tablefont"
                                        row-class-name="tableheight">
                                        <el-table-column
                                        prop="storeName"
                                        label="设备名称"
                                        align="left"
                                        width="180"
                                        >
                                        <template slot-scope="scope">
                                            <el-popover placement="right"
                                                            width="200"
                                                            trigger="click">
                                                    <span>{{scope.row.storeName}}</span>
                                                    <span class="limit" slot="reference">{{scope.row.storeName}}</span>
                                            </el-popover>
                                        </template>
                                        </el-table-column>
                                        <el-table-column
                                        prop="profits"
                                        label="数据(元)"
                                        align="right">
                                        </el-table-column>
                                        <el-table-column
                                        prop="proportionProfits"
                                        label="占比"
                                        sortable="custom"
                                        align="right">
                                        <template slot-scope="scope">
                                            <span>{{scope.row.proportionProfits}}%</span>
                                        </template>
                                        </el-table-column>
                                    </el-table>
                                    <el-table
                                        v-if="tabChangeValue == 2"
                                        :data="circleDatas.list"
                                        @sort-change="changeSort"
                                        stripe
                                        style="width: 100%;"
                                        header-cell-class-name="tablefont"
                                        cell-class-name="tablefont"
                                        row-class-name="tableheight">
                                        <el-table-column
                                        prop="storeName"
                                        label="设备名称"
                                        align="left"
                                        width="180"
                                        >
                                        <template slot-scope="scope">
                                            <el-popover placement="right"
                                                            width="200"
                                                            trigger="click">
                                                    <span>{{scope.row.storeName}}</span>
                                                    <span class="limit" slot="reference">{{scope.row.storeName}}</span>
                                            </el-popover>
                                        </template>
                                        </el-table-column>
                                        <el-table-column
                                        prop="storeUser"
                                        label="数据(个)"
                                        align="right">
                                        </el-table-column>
                                        <el-table-column
                                        prop="proportionUser"
                                        label="占比"
                                        sortable="custom"
                                        align="right">
                                        <template slot-scope="scope">
                                            <span>{{scope.row.proportionUser}}%</span>
                                        </template>
                                        </el-table-column>
                                    </el-table>
                                    <br>
                                    <div class="right-t">
                                        <el-pagination small
                                                    background
                                                    @current-change="currentChangeMachine"
                                                    @prev-click="prevClickMachine"
                                                    @next-click="nextClickMachine"
                                                    :current-page="machineSortParams.pageNum"
                                                    :page-size="machineSortParams.pageRow"
                                                    layout="prev, pager, next"
                                                    :total="machineSortTotalCount">
                                        </el-pagination>
                                    </div>
                                </div>
                                <!-- 列表形式 -->
                            </el-card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="flex">
            <div class="center new-left"
                v-if="activeNav == 0">
                <el-card class="center-card padding-10">
                    <div class="flex">
                        <div class="flex-2" style="padding-left:20px">
                            经营总利润: ￥<span class="num red-title">{{InfoProfix.profits || 0}}</span>
                        </div>
                        <div class="flex-2">
                            总销售额: ￥<span class="num red-title">{{InfoProfix.sales || 0}}</span>
                        </div>
                        <div class="flex-1">
                            <i class="el-icon-caret-bottom danger d-s" v-if="!showhistogram" style="font-size:40px" @click="showHistogram"></i>
                            <i class="el-icon-caret-top danger d-s" style="font-size:40px" v-else @click="hideHistogram"></i>
                        </div>
                        
                    </div>
                </el-card>
                
                <el-card class="center-card" style="position:relative;">
                    <div id="" :class="showhistogram ? 'opacity-1' : 'opacity-0'"  @mouseleave="leave" style="position:absolute;top:5%;left:0;width:100%;background:#fff;padding: 0 2%;">
                        <el-carousel :interval="0" arrow="always" @change="changeHistogram" id="carousel2">
                            <el-carousel-item>
                                <div class="flex">
                                    <div class="flex-1">
                                        <div class="flex">
                                            <div class="flex-2">
                                                <ve-bar 
                                                    :legend-visible="false"
                                                    height="30vh"
                                                    ref="chart1"
                                                    :extend="saleextend"
                                                    :data="chartDataHistogram" 
                                                    :settings="SettingsHistogram"
                                                ></ve-bar>
                                            </div>
                                            <div class="flex-1 line-detail" style="padding-left:50px">
                                                <div class="flex"><div class="flex-1">销售额:</div><div class="flex-2"> ￥<span class="themcolor">{{orderJson.sales || 0}}</span></div></div>
                                                <div class="flex"><div class="flex-1">成本:</div><div class="flex-2"> ￥<span>{{orderJson.producementPrice || 0}}</span></div></div>
                                                <div class="flex"><div class="flex-1">利润:</div><div class="flex-2"> ￥<span class="themcolor">{{orderJson.profits || 0}}</span></div></div>
                                                <div class="flex"><div class="flex-1">进账收益:</div><div class="flex-2"> ￥<span>{{orderJson.payPrice || 0}}</span></div></div>
                                                <div class="flex"><div class="flex-1">集团券收入:</div><div class="flex-2"> ￥<span class="themcolor">{{orderJson.groupCouponPrice || 0}}</span></div></div>
                                                <div class="flex"><div class="flex-1">退款额:</div><div class="flex-2"> ￥<span>{{orderJson.refuredPrice || 0}}</span></div></div>
                                                <div class="flex"><div class="flex-1">营销费用:</div><div class="flex-2"> ￥<span>{{orderJson.couponPrice || 0}}</span></div></div>
                                                <div class="flex"><div class="flex-1">交易量:</div><div class="flex-2"> <span class="themcolor">{{orderJson.orderNum || 0}} 笔</span></div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-carousel-item>
                            <el-carousel-item>
                                <div class="flex">
                                    <div class="flex-1">
                                        <div class="flex">
                                            <div class="flex-2">
                                                <ve-bar 
                                                    height="25vh"
                                                    ref="chart2"
                                                    :extend="skuextend"
                                                    :data="chartDataHistogram2" 
                                                    :settings="SettingsHistogram2"
                                                ></ve-bar>
                                                <div style="text-align:center;z-index:11" class="chartDataHistogram2">
                                                    <el-radio-group v-model="tabTop1"
                                                                    size="middle"
                                                                    class="jy-2 time-tabs"
                                                                    @change="topChange1"
                                                                    fill="#333333">
                                                        <el-radio-button label="asc">升序</el-radio-button>
                                                        <el-radio-button label="desc">降序</el-radio-button>
                                                    </el-radio-group>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    
                                                    <el-radio-group v-model="tabTop"
                                                                    size="middle"
                                                                    class="jy-2 time-tabs"
                                                                    @change="topChange"
                                                                    fill="#333333">
                                                        <el-radio-button label="profits">利润</el-radio-button>
                                                        <el-radio-button label="orderNum">交易量</el-radio-button>
                                                        <el-radio-button label="sales">销售额</el-radio-button>
                                                    </el-radio-group>
                                                </div>
                                            </div>
                                            <div class="flex-1 line-detail" style="padding-left:2%">
                                                <div>
                                                    <div class="flex line-weight">
                                                        <div class="flex-1">
                                                            <div class="flex">
                                                                SKU名称
                                                            </div>
                                                        </div> 
                                                        <div class="flex-1" v-if="tabTop=='profits'">利润</div>
                                                        <div class="flex-1" v-if="tabTop=='orderNum'">交易量</div>
                                                        <div class="flex-1" v-if="tabTop=='sales'">销售额</div>
                                                    </div>
                                                </div>
                                                <div v-for="(item,i) in SKUData" :key="i">
                                                    <div class="flex"  v-if="tabTop=='profits'">
                                                        <div class="flex-1">
                                                            <div class="flex">
                                                                {{item.skuName}}
                                                                :
                                                            </div>
                                                        </div> 
                                                        <div class="flex-1">￥ {{item.profits}}</div>
                                                    </div>
                                                    <div class="flex"  v-if="tabTop=='orderNum'">
                                                        <div class="flex-1">
                                                            <div class="flex">
                                                                {{item.skuName}}
                                                                :
                                                            </div>
                                                        </div> 
                                                        <div class="flex-1">{{item.orderNum}} 笔</div>
                                                    </div>
                                                    <div class="flex"  v-if="tabTop=='sales'">
                                                        <div class="flex-1">
                                                            <div class="flex">
                                                                {{item.skuName}}
                                                                :
                                                            </div>
                                                        </div> 
                                                        <div class="flex-1">￥ {{item.sales}}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-carousel-item>
                        </el-carousel>
                        
                    </div> 
                    <div :class="!showhistogram ? 'opacity-1' : 'opacity-0'">
                        <el-carousel :interval="0" arrow="always" @change="changeLine"  id="carousel">
                            <el-carousel-item>
                                <div  class="flex">
                                    <div  class="flex-5">
                                        <div class="flex">
                                            <div class="flex-1" style="padding-left:20px">
                                                <div class="bigfont">经营走势图</div>
                                            </div>
                                            <div class="flex-1">
                                                
                                            </div>
                                        </div>
                                        <ve-line    height="25vh"
                                                    :data="chartData"
                                                    ref="chart3"
                                                    :settings="chartSettings"
                                                    :data-empty='isBlank'
                                                    :extend="chartextend"
                                                    :loading="isLineLoaing">
                                        </ve-line>
                                        <div style="text-align:center">
                                            <el-radio-group v-model="tabTime"
                                                            size="middle"
                                                            class="jy-2 time-tabs"
                                                            @change="timeChange"
                                                            fill="#333333">
                                                <el-radio-button label="0">今日</el-radio-button>
                                                <el-radio-button label="1">近7天</el-radio-button>
                                                <el-radio-button label="2">近30天</el-radio-button>
                                            </el-radio-group>
                                        </div>
                                    </div> 
                                    <div class="flex-2 line-detail"  style="padding-left:2%;">
                                        <div class="flex"><div class="flex-1">销售额:</div><div class="flex-2"> ￥<span class="themcolor">{{alldata.sales || 0}}</span></div></div>
                                        <div class="flex"><div class="flex-1">成本:</div><div class="flex-2"> ￥<span>{{alldata.producementPrice || 0}}</span></div></div>
                                        <div class="flex"><div class="flex-1">利润:</div><div class="flex-2"> ￥<span class="themcolor">{{alldata.profits || 0}}</span></div></div>
                                        <div class="flex"><div class="flex-1">进账收益:</div><div class="flex-2"> ￥<span>{{alldata.payPrice || 0}}</span></div></div>
                                        <div class="flex"><div class="flex-1">集团券收入:</div><div class="flex-2"> ￥<span class="themcolor">{{alldata.groupCouponPrice || 0}}</span></div></div>
                                        <div class="flex"><div class="flex-1">退款额:</div><div class="flex-2"> ￥<span>{{alldata.refuredPrice || 0}}</span></div></div>
                                        <div class="flex"><div class="flex-1">营销费用:</div><div class="flex-2"> ￥<span>{{alldata.couponPrice || 0}}</span></div></div>
                                        <div class="flex"><div class="flex-1">交易量:</div><div class="flex-2"> <span class="themcolor">{{alldata.orderNum || 0}} 笔</span></div></div>
                                    </div>
                                </div>
                            </el-carousel-item>
                            <el-carousel-item>
                                <div  class="flex">
                                    <div  class="flex-5">
                                        <div class="flex">
                                            <div class="flex-1" style="padding-left:20px">
                                                <div class="bigfont">增长图</div>
                                            </div>
                                            <div class="flex-1">
                                                
                                            </div>
                                        </div>
                                        <ve-histogram height="25vh"
                                                    :legend-visible="false"
                                                    :data="chartGrouthData"
                                                    ref="chart4"
                                                    :extend="Grouthextend" 
                                                    :settings="chartGrouthSettings"
                                                    :data-empty='isGrouthBlank'
                                                    :loading="isLineGrouthLoaing">
                                        </ve-histogram>
                                        <div style="text-align:center">
                                            <el-radio-group v-model="GrouthTime"
                                                            size="middle"
                                                            class="jy-2 time-tabs"
                                                            @change="GrouthChange"
                                                            fill="#333333">
                                                <el-radio-button label="0">昨天</el-radio-button>
                                                <el-radio-button label="1">一周前</el-radio-button>
                                                <el-radio-button label="2">30天前</el-radio-button>
                                            </el-radio-group>
                                        </div>
                                    </div> 
                                    <div class="flex-2 line-detail"  style="padding-left:2%;">
                                        <div class="flex"><div class="flex-2">销售额
                                            <i class="el-icon-caret-top danger d-s" style="font-size:20px" v-if="allGrouthData.salesFlag"></i>
                                            <i class="el-icon-caret-bottom success d-s" style="font-size:20px" v-else></i>
                                        :</div><div class="flex-2"> ￥<span class="themcolor">{{allGrouthData.sales || 0}}</span></div></div>
                                        <div class="flex"><div class="flex-2">成本差额
                                            <i class="el-icon-caret-top danger d-s" style="font-size:20px" v-if="allGrouthData.producementPriceFlag"></i>
                                            <i class="el-icon-caret-bottom success d-s" style="font-size:20px" v-else></i>
                                            :</div><div class="flex-2"> ￥<span>{{allGrouthData.producementPrice || 0}}</span></div></div>
                                        <div class="flex"><div class="flex-2">利润
                                            <i class="el-icon-caret-top danger d-s" style="font-size:20px" v-if="allGrouthData.profitsFlag"></i>
                                            <i class="el-icon-caret-bottom success d-s" style="font-size:20px" v-else></i>
                                            :</div><div class="flex-2"> ￥<span class="themcolor">{{allGrouthData.profits || 0}}</span></div></div>
                                        <div class="flex"><div class="flex-2">进账收益
                                            <i class="el-icon-caret-top danger d-s" style="font-size:20px" v-if="allGrouthData.payPriceFlag"></i>
                                            <i class="el-icon-caret-bottom success d-s" style="font-size:20px" v-else></i>
                                            :</div><div class="flex-2"> ￥<span>{{allGrouthData.payPrice || 0}}</span></div></div>
                                        <div class="flex"><div class="flex-2">集团券收入
                                            <i class="el-icon-caret-top danger d-s" style="font-size:20px" v-if="allGrouthData.groupCouponPriceFlag"></i>
                                            <i class="el-icon-caret-bottom success d-s" style="font-size:20px" v-else></i>
                                            :</div><div class="flex-2"> ￥<span class="themcolor">{{allGrouthData.groupCouponPrice || 0}}</span></div></div>
                                        <div class="flex"><div class="flex-2">退款额
                                            <i class="el-icon-caret-top danger d-s" style="font-size:20px" v-if="allGrouthData.refuredPriceFlag"></i>
                                            <i class="el-icon-caret-bottom success d-s" style="font-size:20px" v-else></i>
                                            :</div><div class="flex-2"> ￥<span>{{allGrouthData.refuredPrice || 0}}</span></div></div>
                                        <div class="flex"><div class="flex-2">营销费用
                                            <i class="el-icon-caret-top danger d-s" style="font-size:20px" v-if="allGrouthData.couponPriceFlag"></i>
                                            <i class="el-icon-caret-bottom success d-s" style="font-size:20px" v-else></i>
                                            :</div><div class="flex-2"> ￥<span>{{allGrouthData.couponPrice || 0}}</span></div></div>
                                        <div class="flex"><div class="flex-2">交易
                                            <i class="el-icon-caret-top danger d-s" style="font-size:20px" v-if="allGrouthData.orderNumFlag"></i>
                                            <i class="el-icon-caret-bottom success d-s" style="font-size:20px" v-else></i>
                                            :</div><div class="flex-2"> <span class="themcolor">{{allGrouthData.orderNum || 0}} 笔</span></div></div>
                                    </div>
                                </div>
                            </el-carousel-item>
                        </el-carousel>
                    </div>

                </el-card>
                <div class="flex">
                    <div class="flex-2 right-sj" style="padding-right:20px">
                        <el-card>
                            <div class="flex">
                                <div class="flex-3" style="padding-left:20px">
                                    <div class="bigfont">复购比率图</div>
                                    <ve-line 
                                    :data="operatorSaleToo"
                                    class="right-sjcard" 
                                    :extend="SaleTooextend" 
                                    height="32vh" 
                                    :settings="SaleTooSettings"
                                    :data-empty='isSaleTooBlank'
                                    :loading="isLineSaleTooLoaing"></ve-line>
                                </div>
                                <div class="flex-1 line-detail tooflex" style="padding-top:6%;text-align:center">
                                    <div class="flex line-weight">
                                        <div class="flex-1">交易量</div> 
                                        <div class="flex-1">用户数量</div>
                                    </div>
                                    <div class="flex">
                                        <div class="flex-1">{{operatorSaleToo.rows[0].orderNum}}</div> 
                                        <div class="flex-1">{{operatorSaleToo.rows[0].userNum}}</div>
                                    </div>
                                    <div class="flex">
                                        <div class="flex-1">{{operatorSaleToo.rows[1].orderNum}}</div> 
                                        <div class="flex-1">{{operatorSaleToo.rows[1].userNum}}</div>
                                    </div>
                                    <div class="flex">
                                        <div class="flex-1">{{operatorSaleToo.rows[2].orderNum}}</div> 
                                        <div class="flex-1">{{operatorSaleToo.rows[2].userNum}}</div>
                                    </div>
                                    <div class="flex">
                                        <div class="flex-1">...</div> 
                                        <div class="flex-1">...</div>
                                    </div>
                                    <div class="flex">
                                        <div class="flex-1">{{operatorSaleToo.rows[operatorSaleToo.rows.length-3].orderNum}}</div> 
                                        <div class="flex-1">{{operatorSaleToo.rows[operatorSaleToo.rows.length-3].userNum}}</div>
                                    </div>
                                    <div class="flex">
                                        <div class="flex-1">{{operatorSaleToo.rows[operatorSaleToo.rows.length-2].orderNum}}</div> 
                                        <div class="flex-1">{{operatorSaleToo.rows[operatorSaleToo.rows.length-2].userNum}}</div>
                                    </div>
                                    <div class="flex">
                                        <div class="flex-1">{{operatorSaleToo.rows[operatorSaleToo.rows.length-1].orderNum}}</div> 
                                        <div class="flex-1">{{operatorSaleToo.rows[operatorSaleToo.rows.length-1].userNum}}</div>
                                    </div>
                                </div>
                            </div>
                            
                        </el-card>
                        
                    </div>  
                </div>
            </div>
            <div class="right right-sj new-right"
                v-if="activeNav == 0">
                <el-card class="store-box">
                    <div class="flex">
                        <div class="flex-1 bigfont" v-if="skuChangeValue=='0'">热销SKU<span class="small-grey"> 近30天</span></div>
                        <div class="flex-1 bigfont" v-if="skuChangeValue=='1'">冷门SKU<span class="small-grey"> 近30天</span></div>
                        <div class="flex-1 title-note">
                            <el-radio-group v-model="skuChangeValue"
                                        size="mini"
                                        class="jy-2 time-tabs"
                                        @change="skuChange"
                                        fill="#333333">
                                <el-radio-button label="0">热销</el-radio-button>
                                <el-radio-button label="1">冷门</el-radio-button>
                            </el-radio-group>
                        </div>
                    </div>
                    <el-table
                        :data="skuSortData"
                        stripe
                        style="width: 100%"
                        size="mini">
                        
                        <el-table-column
                        prop="skuName"
                        label="SKU名称"
                        align="left"
                        >
                        <template slot-scope="scope">
                            <el-popover placement="right"
                                            width="200"
                                            trigger="hover">
                                    <div>
                                        <div>近30天利润率：<span class="themcolor">{{scope.row.profitsRate}}</span></div>
                                        <div>近30天销售额：<span class="themcolor">¥ {{scope.row.discPrice}}</span></div>
                                        <div>近30天成本价：<span class="themcolor">¥ {{scope.row.procurementPrice}}</span></div>
                                    </div>
                                    <span slot="reference">{{scope.row.skuName}}</span>
                            </el-popover>
                        </template>
                        </el-table-column>
                        <el-table-column
                        prop="skuCount"
                        label="销量"
                        align="right">
                        </el-table-column>
                        <el-table-column
                        prop="profits"
                        label="利润"
                        align="right">
                        <template slot-scope="scope">
                            <span class="themcolor">￥{{scope.row.profits}}</span>
                        </template>
                        </el-table-column>
                    </el-table>
                    <br>
                    <div class="right-t">
                        <el-pagination small
                                    background
                                    @current-change="currentChangeSku"
                                    @prev-click="prevClickSku"
                                    @next-click="nextClickSku"
                                    :current-page="skuSortParams.pageNum"
                                    :page-size="skuSortParams.pageRow"
                                    layout="prev, pager, next"
                                    :total="skuSortTotalCount">
                        </el-pagination>
                    </div>

                </el-card>
                <el-card class="right-sjcard">
                    <div class="bigfont flex-center">
                        <div class="flex-1">
                        门店占比<span class="small-grey"> 近30天</span>
                        </div>
                        <div class="flex-1 right-t">
                        <el-radio-group v-model="tabChangeValue"
                                        size="mini"
                                        class="jy-2 time-tabs"
                                        @change="tabChange"
                                        fill="#333333">
                            <el-radio-button label="0">销售额</el-radio-button>
                            <el-radio-button label="1">利润</el-radio-button>
                            <el-radio-button label="2">用户</el-radio-button>
                        </el-radio-group>
                        </div>
                    </div>
                    <ve-ring v-if="tabChangeValue == 0 || tabChangeValue == 2"
                            :data="circleData"
                            :settings="chartSettingsCircle"
                            :loading="isCircleLoaing"></ve-ring>
                    <div v-else
                        class="flex-center">
                        <div class="storeNames flex-1">
                            <div v-for="(item,i) in circleData.rows"
                                :key="i"
                                class="flex-center-Y storeName"
                                :style="{color:item.active?item.color:'#333333'}"
                                @click="storeNameSwitch(i)">
                                <span class="limit">{{item.storeName}}{{item.proportionProfits}}%</span>
                                <span :style="{background:item.color}"
                                    class="block"></span>
                            </div>
                        </div>
                        <div class="flex-1 flex-center">
                            <el-progress type="circle"
                                        :percentage="activedCircleData.proportionProfits"
                                        :color="activedCircleData.color"
                                        status="text">
                                <span :style="{color:activedCircleData.color}"><span v-if="activedCircleData.profits!=='0'"> ¥ </span>{{activedCircleData.profits}}</span>
                            </el-progress>
                        </div>

                    </div>

                </el-card>
            </div>
        </div> -->
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import "v-charts/lib/style.css";
import countTo from 'vue-count-to';
export default {
    components: { countTo },
    data() {
        
        this.chartSettings = {
            stack: { 日常数据: ["订单量", "销售额", "退款额", "净利润"] },
            labelMap: {
                orderNum: "订单量",
                sales: "销售额",
                refuredPrice: "退款额",
                profits: "净利润"
            },
            area: false
            // xAxisType: "time"
        };
        this.chartGrouthSettings = {

        };
        this.chartSettingsCircle = {
            // roseType: 'radius'
            radius:["40%","50%"],
            legendLimit:10
        };
        this.SettingsHistogram= {
            
        };
        this.SettingsHistogram2= {//["skuName","orderNum","producementPrice","profits","sales"]
            // stack: { SKU数据: ["SKU名称", "交易量", "成本", "利润","销售额"] },
            labelMap: {
                skuName: "SKU名称",
                orderNum: "交易量",
                producementPrice: "成本",
                profits: "利润",
                sales:"销售额"

            },
        };
        this.SaleTooSettings={
            xAxisType: 'value',
            area: true,
            labelMap: {
                userNum: "用户数量",
                orderNum: "交易量",

            },
        };
        this.Grouthextend={
            series: {
            barWidth: 40
          },
        }
        this.SaleTooextend={
            'xAxis.0.splitLine.show': false,
            'yAxis.0.splitLine.show': false,
            'xAxis.0.name': "用户数量",
            'xAxis.0.nameLocation': "end",
            'yAxis.0.name': "交易量 (笔)",
            'grid.right': "15%",
            'grid.bottom': "0%",
        }
        this.chartextend={
            'grid.bottom': "2%",
        }
        this.saleextend={
            'grid.bottom': "2%",
        }
        this.skuextend={
            'grid.bottom': "2%",
        }
        return {
            showFlag:false,
            virsualData:[
                {storeName:"展示机展示机展示机积极",proportionSales:"51",sales:"3.5"},
                {storeName:"展示机展示机展示机",proportionSales:"40",sales:"3.5"},
                {storeName:"展示机展示机展示机",proportionSales:"2",sales:"3.5"},
                {storeName:"展示机展示机展示机",proportionSales:"5",sales:"3.5"},
            ],//做测试用假数据
            startVal: 0,
            graphicChangeValue:"0",//图表切换
            //
            orderHight:0,
            skuLoaing:true,
            isLineLoaing: false,
            isCircleLoaing: true,
            isBlank: false,
            isSaleTooBlank: false,
            isLineSaleTooLoaing: true,
            isGrouthBlank: false,
            isLineGrouthLoaing: true,
            searchValueSku: "",
            skuTab: "skuCode",
            skuTabs: [
                {
                    name: "SKU编号",
                    id: "skuCode"
                },
                {
                    name: "SKU名称",
                    id: "skuName"
                }
            ],
            skuTypes: [
                {
                    name: "热销",
                    active: true
                },
                {
                    name: "收藏"
                },
                {
                    name: "饮料类"
                },
                {
                    name: "零食类"
                }
            ],
            navTypes: [
                {
                    name: "数据大屏",
                    active: true
                },
                {
                    name: "运营大屏"
                },
                {
                    name: "数据后台"
                }
            ],
            activeNav: 0,
            skusData: [{}, {}, {}, {}, {}, {}],
            storeLists: [{}, {}],
            storeSortParams: {
                pageRow: 5,
                pageNum: 1
            },
            storeSortTotalCount: 1,
            skuSortParams: {
                pageRow: 3,
                pageNum: 1
            },
            skuSortTotalCount: 1,
            skuSortData: [],
            machineSortParams: {
                descStatus:'DESC',//降序
                descType:'sales',
                pageRow: 4,
                pageNum: 1
            },
            machineSortTotalCount: 1,
            tabTime: "0",
            GrouthTime:"0",
            tabChangeValue: "0",
            skuChangeValue: "0",
            chartData: {
                columns: [
                    "gmtCreated",
                    "orderNum",
                    "sales",
                    "refuredPrice",
                    "profits"
                ],
                rows: [
                    {
                        gmtCreated:'12:00 ',
                        orderDetailsNum:'635',
                        sales:'3622.03',
                        backNum:'8.43',
                        profits:'1137.28'
                    },
                                        {
                        gmtCreated:'13:00 ',
                        orderDetailsNum:'402',
                        sales:'2693.29 ',
                        backNum:'2.19 ',
                        profits:'769.31 '
                    },
                                        {
                        gmtCreated:'14:00 ',
                        orderDetailsNum:'339',
                        sales:'2109.88 ',
                        backNum:'4.90 ',
                        profits:'603.03 '
                    },
                                        {
                        gmtCreated:'15:00 ',
                        orderDetailsNum:'478',
                        sales:'2883.55 ',
                        backNum:'4.33',
                        profits:'864.81'
                    },
                                        {
                        gmtCreated:'16:00 ',
                        orderDetailsNum:'558',
                        sales:'3194.65',
                        backNum:'8.06',
                        profits:'932.78'
                    },
                                        {
                        gmtCreated:'17:00 ',
                        orderDetailsNum:'497',
                        sales:'2811.82',
                        backNum:'5.22',
                        profits:'830.21'
                    },
                                                            {
                        gmtCreated:'18:00 ',
                        orderDetailsNum:'432',
                        sales:'2533.72',
                        backNum:'6.43',
                        profits:'759.38'
                    },
                ]
            },
            chartGrouthData: {
                 columns: ["paramName", "数值"],
                rows: [
                    {paramName:"销售额",数值:"1"},
                    {paramName:"成本",数值:"-2"},
                    {paramName:"利润",数值:"3"},
                    {paramName:"进账收益",数值:"4"},
                    {paramName:"集团券收入",数值:"5"},
                    {paramName:"退款额",数值:"6"},
                    {paramName:"营销费用",数值:"2"},
                    {paramName:"交易量",数值:"-1"},
                ]
            },
            circleDatas: {},
            circleDataa: {
                columns: ["storeName", "占比"],
                rows: [
                    { storeName: "海创园旗舰店", 占比: 12.32 },
                    { storeName: "未来park店", 占比: 11.71 },
                    { storeName: "联合广场店", 占比: 10.01 },
                    { storeName: "IT公园店", 占比: 9.33 },
                    { storeName: "利尔达店", 占比: 8.92 },
                    { storeName: "希垦科技园店", 占比: 8.81 },
                    { storeName: "师范大学店", 占比: 10.01 },
                    { storeName: "炬华科技园店", 占比: 5.55 },
                    { storeName: "众创小镇店", 占比: 3.79 },
                    { storeName: "其他", 占比: 21.68 },
                ]
            },
            circleData: {
                columns: ["storeName", "占比"],
                rows: [
                ]
            },
            colors: [
                "#66b1ff",
                "#67C23A",
                "#F56C6C",
                "#FFBD88",
                "rgb(187, 76, 137)"
            ],
            allData: {},
            allGrouthData:{},
            todayData: {},
            userData: {},
            payInfo: {},
            activedCircle: "",
            activedCircleData: {},
            chartDataHistogram: {
                columns: ["paramName", "数值"],
                rows: [
                    {paramName:"销售额",数值:0},
                    {paramName:"成本",数值:0},
                    {paramName:"利润",数值:0},
                    {paramName:"进账收益",数值:0},
                    {paramName:"集团券收入",数值:0},
                    {paramName:"退款额",数值:0},
                    {paramName:"营销费用",数值:0},
                    {paramName:"交易量",数值:0},
                ]
            },
            chartDataHistogram2: {
            },
            showhistogram:false,
            ref:0,
            InfoProfix:"",
            orderJson:"",
            skuJson:"",
            tabTop:"profits",
            tabTop1:"desc",
            SKUData:[],
            alldata:"",
            operatorSaleToo:[]
        };
    },
    created() {
        this.$router.push({path:"/dataScreen"})//跳转到新的数据大屏
        // document.getElementsByTagName("body")[0].style.height="100%";
        // document.getElementsByTagName("html")[0].style.height="100%";
        document.getElementsByTagName("body")[0].style.minWidth="1260px";
        document.getElementsByTagName("body")[0].style.overflow="auto";
        this.orderHight = document.body.clientHeight
        // this.$nextTick(_ => {
        //         document.getElementById('super').style.height = this.orderHight*0.95 + 'px'
        //         })
        this.getAllData(); //获取经营总数据
        this.getSkuSortData(); //获取近30天热销SKU
        this.getLine(); //获取经营走势图
        this.getGrouthLine();//同比增长图
        this.getCircle(); //获取近30天门店占比图
        this.getInfoProfix()//经营总利润和销售额
        this.getSaleToo()
        // this.timer=setInterval(()=>{
        //         this.getInfoProfix()
        //         },10000)
        
    },
    mounted(){
    },
    beforeDestroy () {//到其他页面清除定时器
        // clearInterval(this.timer);
    },
    methods: {
        //图表切换
        graphicChange(v){
            if(v=='2' || '3'){
                this.showHistogram()
            }
            this.$nextTick(_ => {
                this.$refs[`chart${v}`].echarts.resize()
                })
        },
        //复购比率图
        getSaleToo(){
            this.api({
                url: "/operator/operatorSaleToo",
                method: "post",
                data: {
                    manageId: this.userId
                }
            }).then(data => {
                this.isSaleTooBlank = data.length == 0 ? true : false;
                
                for(let i in data){
                    data[i].userNum=' '+data[i].userNum+' '
                }
                this.operatorSaleToo= {
                    columns: ['userNum', 'orderNum'],
                    rows: data
                    }
                this.isLineSaleTooLoaing = false;
            });
        },
        // 柱状图
        leave(){
            this.showhistogram=false 
        },
        changeHistogram(v){
            // this.ref=v
            this.$nextTick(_ => {//在dom加载完后对当前轮播的图表进行重绘，解决图表嵌套在其他组件中因获取不到高度而无法显示的问题
                this.$refs[`chart${v+1}`].echarts.resize()
                document.getElementById('carousel2').style.height = this.orderHight*0.4 + 'px'//走马灯高度设为屏幕高度的40%
                })
        },
        changeLine(v){
            this.$nextTick(_ => {//在dom加载完后对当前轮播的图表进行重绘，解决图表嵌套在其他组件中因获取不到高度而无法显示的问题
                this.$refs[`chart${v+3}`].echarts.resize()
                document.getElementById('carousel').style.height = this.orderHight*0.4 + 'px'//走马灯高度设为屏幕高度的40%
                })
        },
        showHistogram(){
            this.showhistogram=true
            this.skuLoaing=true
            this.api({
                url: "/operator/operatorInfoSale",
                method: "post",
                data: {
                    manageId: this.userId,
                }
            }).then(data => {
                this.orderJson=data.orderJson
                this.skuJson=data.skuJson
                this.chartDataHistogram.columns=["paramName", "数值"]
                this.chartDataHistogram.rows=[
                    {paramName:"交易量",数值:data.orderJson.orderNum},
                    {paramName:"营销费用",数值:data.orderJson.couponPrice},
                    {paramName:"退款额",数值:data.orderJson.refuredPrice},
                    {paramName:"集团券收入",数值:data.orderJson.groupCouponPrice},
                    {paramName:"进账收益",数值:data.orderJson.payPrice},
                    {paramName:"利润",数值:data.orderJson.profits},
                    {paramName:"成本",数值:data.orderJson.producementPrice},
                    {paramName:"销售额",数值:data.orderJson.sales},
                ]
                
            });
            this.api({
                url: "/operator/operatorInfoSku",
                method: "post",
                data: {
                    manageId: this.userId,
                    saleType:this.tabTop,
                    descType:this.tabTop1
                }
            }).then(data => {
                this.SKUData=data
                if(this.tabTop=="profits"){
                    this.chartDataHistogram2 = {
                    columns: ["skuName","profits"],
                    rows: JSON.parse(JSON.stringify(data)).reverse()
                };
                }else if(this.tabTop=="orderNum"){
                    this.chartDataHistogram2 = {
                    columns: ["skuName","orderNum"],
                    rows: JSON.parse(JSON.stringify(data)).reverse()
                };

                }else if(this.tabTop=="sales"){
                    this.chartDataHistogram2 = {
                    columns: ["skuName","sales"],
                    rows: JSON.parse(JSON.stringify(data)).reverse()
                };
                }
                this.skuLoaing=false
                
            });
        },
        
        hideHistogram(){
            this.showhistogram=false
        },
        getInfoProfix(){
            this.api({
                url: "/operator/operatorInfoProfix",
                method: "post",
                data: {
                    manageId: this.userId
                }
            }).then(data => {
                this.InfoProfix = data.profixJson;
            });
        },
        topChange(){
            this.showHistogram()
        },
        topChange1(){
            this.showHistogram()
            // if(this.tabTop1=='desc'){
            //     this.descColor="#f56c6c"
            // }
        },
        // 柱状图
        currentChangeSku(index) {
            this.skuSortParams.pageNum = index;
            if(this.skuChangeValue=="0"){
                this.getSkuSortData(this.params); //获取近30天热销SKU
            }else{
                this.getSkuCoolData(this.params); //获取近30天冷门SKU
            }
        },
        prevClickSku(index) {
            this.skuSortParams.pageNum = index;
            if(this.skuChangeValue=="0"){
                this.getSkuSortData(this.params); //获取近30天热销SKU
            }else{
                this.getSkuCoolData(this.params); //获取近30天冷门SKU
            }
        },
        nextClickSku(index) {
            this.skuSortParams.pageNum = index;
            if(this.skuChangeValue=="0"){
                this.getSkuSortData(this.params); //获取近30天热销SKU
            }else{
                this.getSkuCoolData(this.params); //获取近30天冷门SKU
            }
        },
        //机器占比的分页
        currentChangeMachine(index) {
            this.machineSortParams.pageNum = index;
            this.getCircle()
        },
        prevClickMachine(index) {
            this.machineSortParams.pageNum = index;
            this.getCircle()
        },
        nextClickMachine(index) {
            this.machineSortParams.pageNum = index;
            this.getCircle()
        },
         //机器占比的分页
         changeSort(column, prop, order){//机器占比排序
            // this.params.numInfo=column.prop
            if(column.order=="ascending"){
                this.machineSortParams.descStatus="ASC"
            }else{
                this.machineSortParams.descStatus="DESC"
            }
            this.machineSortParams.pageNum=1
            this.getCircle()
        },
        getAllData() {
            this.api({
                url: "/operator/operationInfoAll",
                method: "post",
                data: {
                    manageId: this.userId
                }
            }).then(data => {
                this.allData = data;
            });
            this.api({
                url: "/operator/operationInfoTod",
                method: "post",
                data: {
                    manageId: this.userId
                }
            }).then(data => {
                this.todayData = data;
            });
            this.api({
                url: "/operator/userData",
                method: "post",
                data: {
                    manageId: this.userId
                }
            }).then(data => {
                this.userData = data;
            });
            this.api({
                url: "/operator/payTypeData",
                method: "post",
                data: {
                    manageId: this.userId
                }
            }).then(data => {
                this.payInfo = data;
            });
        },
        getSkuSortData(params) {
            this.skuSortParams.manageId = this.userId;
            this.api({
                url: "/operator/skuStaticData",
                method: "post",
                data: this.skuSortParams
            }).then(data => {
                this.skuSortData = data.list;
                // this.skuSortTotalCount = data.totalCount;
                if(data.totalCount>25){
                        this.skuSortTotalCount=25
                    }else{
                        this.skuSortTotalCount=data.totalCount
                    }
            });
        },
        getSkuCoolData(params) {
            this.skuSortParams.manageId = this.userId;
            this.api({
                url: "/operator/skuCoolData",
                method: "post",
                data: this.skuSortParams
            }).then(data => {
                this.skuSortData = data.list;
                // this.skuSortTotalCount = data.totalCount;
                if(data.totalCount>25){
                        this.skuSortTotalCount=25
                    }else{
                        this.skuSortTotalCount=data.totalCount
                    }
            });
        },
        searchSku() {},
        swithSkuTab(index) {
            for (let i in this.skuTypes) {
                this.$set(
                    this.skuTypes[i],
                    "active",
                    i == index ? true : false
                );
            }
        },
        swithSkuNav(index) {
            if (index == 1) {
                return;
            }
            this.activeNav = index;
            if (index == 2) {
                this.$router.push({
                    path: "/"
                });
            }
            for (let i in this.navTypes) {
                this.$set(
                    this.navTypes[i],
                    "active",
                    i == index ? true : false
                );
            }
        },
        timeChange() {
            this.getLine(this.tabTime); //经营走势图
        },
        GrouthChange() {
            this.getGrouthLine(this.GrouthTime); //经营走势图
        },
        skuChange(){//热门sku
        if(this.skuChangeValue=="0"){
            this.getSkuSortData(); //获取近30天热销SKU
        }else{
            this.getSkuCoolData(); //获取近30天冷门SKU
        }
            
        },
        storeNameSwitch(i) {
            for (let j in this.circleData.rows) {
                this.$set(
                    this.circleData.rows[j],
                    "active",
                    j == i ? true : false
                );
            }
            this.activedCircleData = this.circleData.rows[i];
        },
        tabChange() {
            let type = this.tabChangeValue;
            let data = this.circleDatas;
            this.machineSortParams.pageNum=1
            // 如果是列表形式
            if(this.thumbType=='1'){
                if(type==0){
                    this.machineSortParams.descType='sales'
                    this.getCircle()
                }else if (type == 1) {
                     this.machineSortParams.descType='profits'
                     this.getCircle()
                }else if (type == 2) {
                     this.machineSortParams.descType='nums'
                     this.getCircle()
                }
            }
            // 如果是列表形式
            
            if (type == 0) {
                let legendNameA = {};
                for (let i in data.list) {
                    legendNameA[data.list[i].storeName] =
                        data.list[i].storeName +
                        " :" +
                        data.list[i].proportionSales +
                        "%";
                }
                this.chartSettingsCircle.legendName = legendNameA;
                this.circleData = {
                    columns: ["storeName", "sales"],
                    rows: this.circleDatas.list
                };
            } else if (type == 1) {
                let legendNameA = {};
                for (let i in data.list) {
                    legendNameA[data.list[i].storeName] =
                        data.list[i].storeName +
                        " :" +
                        data.list[i].proportionProfits +
                        "%";
                }
                this.chartSettingsCircle.legendName = legendNameA;
                let len = this.colors.length;
                for (let i in this.circleDatas.list) {
                    this.circleDatas.list[i].active = false;
                    if (i <= len - 1) {
                        this.circleDatas.list[i].color = this.colors[
                            i
                        ];
                    } else {
                        this.circleDatas.list[i].color = "#f1f1f1";
                    }
                }
                if (this.circleDatas.list.length > 0) {
                    this.circleDatas.list[0].active = true;
                    this.activedCircleData = this.circleDatas.list[0];
                }
                console.log();
                console.log(this.activedCircleData);
                this.circleData = {
                    columns: ["storeName", "profits"],
                    rows: this.circleDatas.list
                };
            } else if (type == 2) {
                let legendNameA = {};
                for (let i in data.list) {
                    legendNameA[data.list[i].storeName] =
                        data.list[i].storeName +
                        " :" +
                        data.list[i].proportionUser +
                        "%";
                }
                this.chartSettingsCircle.legendName = legendNameA;
                this.circleData = {
                    columns: ["storeName", "storeUser"],
                    rows: this.circleDatas.list
                };
            } else {
                let legendNameA = {};
                for (let i in data.list) {
                    legendNameA[data.list[i].storeName] =
                        data.list[i].storeName +
                        " :" +
                        data.list[i].proportionSales +
                        "%";
                }
                this.chartSettingsCircle.legendName = legendNameA;
                this.circleData = {
                    columns: ["storeName", "sales"],
                    rows: this.circleDatas.list
                };
            }
        },
        getCircle() {
            //门店占比图
            this.machineSortParams.manageId=this.userId
            this.isCircleLoaing = true;
            this.api({
                url: "/operator/showPieChartByOperator",
                method: "post",
                data: this.machineSortParams
            })
                .then(data => {
                    console.log(data)
                    this.circleDatas = data.storeVolumeJson.returnData;
                    this.machineSortTotalCount=data.storeVolumeJson.returnData.totalCount
                    this.isCircleLoaing = false;
                    let legendNameA = {};
                    // let lists = this.circleDataa.rows
                    let lists = data.storeVolumeJson.returnData.list
                    // let lists = [
                    // { storeName: "虚拟门店1", 占比: 12.32 },
                    // { storeName: "虚拟门店2", 占比: 11.71 },
                    // { storeName: "虚拟门店3", 占比: 10.01 },
                    // { storeName: "虚拟门店4", 占比: 9.33 },
                    // { storeName: "虚拟门店5", 占比: 8.92 },
                    // { storeName: "虚拟门店6", 占比: 8.81 },
                    // { storeName: "虚拟门店7", 占比: 10.01 },
                    // { storeName: "虚拟门店8", 占比: 5.55 },
                    // { storeName: "虚拟门店9", 占比: 3.79 },
                    // { storeName: "其他", 占比: 21.68 },
                    // ]
                    for (let i in lists) {
                        legendNameA[lists[i].storeName] =
                            lists[i].storeName +
                            " :" +
                            // lists[i]['占比'] +
                            lists[i].proportionSales +
                            "%";
                    }
                    this.chartSettingsCircle.legendName = legendNameA;
                    this.circleData = {
                        columns: ["storeName", "sales"],
                        rows: lists
                    };
                })
                .catch(e => {});
        },
        getLine(type) {
            let params = {
                manageId: this.userId
            };
            if (type == 0) {
                params.type = "T";
                params.dayNum = "0";
            } else if (type == 1) {
                params.type = "D";
                params.dayNum = "7";
            } else if (type == 2) {
                params.type = "D";
                params.dayNum = "30";
            } else {
                params.type = "T";
                params.dayNum = "0";
            }
            this.isLineLoaing = true;
            this.api({
                url: "/operator/operatorLineInfo",
                method: "post",
                data: params
            })
                .then(data => {
                    this.alldata=data.dataJson
                    this.isBlank = data.dataList.length == 0 ? true : false;
                    this.chartData.rows = data.dataList;
                    this.isLineLoaing = false;
                })
                .catch(e => {});
           
        },
        getGrouthLine(type) {
            let params = {
                manageId: this.userId
            };
            if (type == 0) {
                params.dayNum = "1";
                // params.type = "D";
            } else if (type == 1) {
                params.dayNum = "7";
                // params.type = "D";
            } else if (type == 2) {
                params.dayNum = "30";
                // params.type = "D";
            } else {
                params.dayNum = "1";
                // params.type = "D";
            }
            this.isLineLoaing = true;
            this.api({
                url: "/operator/operatorGrowth",
                method: "post",
                data: params
            })
                .then(data => {
                    this.allGrouthData=data.dataJson
                    this.isBlankGrouth = data.dataList.length == 0 ? true : false;
                    this.isLineGrouthLoaing = false;
                    this.chartGrouthData={
                        columns:["paramName", "数值"],
                        rows:[
                            {paramName:"交易量",数值:data.dataList.couponPrice},
                            {paramName:"营销费用",数值:data.dataList.couponPrice},
                            {paramName:"退款额",数值:data.dataList.refuredPrice},
                            {paramName:"集团券收入",数值:data.dataList.groupCouponPrice},
                            {paramName:"进账收益",数值:data.dataList.payPrice},
                            {paramName:"利润",数值:data.dataList.profits},
                            {paramName:"成本",数值:data.dataList.producementPrice},
                            {paramName:"销售额",数值:data.dataList.sales},
                        ]
                    }
                })
                .catch(e => {});
        },
        logout() {
            this.$store.dispatch("LogOut").then(() => {
                location.reload(); // 为了重新实例化vue-router对象 避免bug
            });
        }
    },
    computed: {
        ...mapGetters(["userId", "userName","thumbType"])
    }
};
</script>


