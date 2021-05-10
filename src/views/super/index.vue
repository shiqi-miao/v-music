<style lang="scss" scoped>
$red: #C21C1C;
$grey:#999999;
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
        font-size: 1vw;
        padding: 6px 0;
    }
    .flex-2 {
        flex: 2;
        font-size: 1vw;
        padding: 6px 0;
    }
    .flex-4 {
        flex: 4;
        font-size: 1vw;
        padding: 6px 0;
    }
}
.bigfont{
    font-size: 1.1vw!important;
    font-weight: 600;
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
    flex-direction: row-reverse;
    // justify-content: center;
    // -webkit-justify-content: center;
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
    margin-bottom: 2vh;
    text-align: left;
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
    flex:6;
    
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
                img{width: 20%;vertical-align: middle}
                // span{vertical-align: middle}
               
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
    margin-top: 20px;
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

</style>
<style>
#super .el-radio-button__inner{
        border: 0;
        border-radius: 24px!important
    }
#super .el-radio-group{
    background-color: #eeeeee;
    border-radius: 24px
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
.time-tabs .el-radio-button .el-radio-button__inner{
    background-color: #eeeeee
}
.time-tabs .el-radio-button .el-radio-button__inner:hover {
    color: #C21C1C;
}
.time-tabs .el-radio-button.is-active .el-radio-button__inner:hover {
    color: #ffffff;
}
#super{height: 100%}
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
#super .ve-ring{height: 360px!important}

</style>

<template>
    <div class="flex"
         id="super">
        <div class="aside"> 
            <div class="center-top">
                <div class="center-top-top">
                    <div class="flex-center">
                        <img src="../../assets/super/logo.png"
                             alt=""
                             class="logo">
                        <div class="title">光芽新零售</div>
                    </div>
                    
                </div>
                <div class="center-top-middle">
                    <div @click="swithSkuNav(i)"
                         v-for="(item,i) in navTypes"
                         :key="i"
                         class="tab flex-center"
                         :class="{'active':item.active}">
                        {{item.name}}
                    </div>
                </div>
                <div class="user-info">
                        <div>
                            <img src="../../assets/super/user.png"
                             alt=""
                             class="user">
                        </div>
                        <div>{{userName}}</div>
                        <button @click="logout">
                            <img src="../../assets/super/on.png"
                             alt=""
                             class="bat"
                             >
                             <span>退出登录</span>
                        </button>
                        
                </div>
            </div>
        </div>


        <div class="center new-left"
             v-if="activeNav == 0">
            <!-- <div class="center-top flex">
                <div class="center-top-left">
                    <div class="flex-center">
                        <img src="../../assets/super/logo.png"
                             alt=""
                             class="logo">
                        <div class="title">光芽新零售</div>
                    </div>
                    <div class="user-info flex-center">
                        <img src="../../assets/super/user.png"
                             alt=""
                             class="user">
                        {{userName}}
                        <img src="../../assets/super/on.png"
                             alt=""
                             class="bat"
                             @click="logout">
                    </div>
                </div>
                <div class="center-top-right flex">
                    <div @click="swithSkuNav(i)"
                         v-for="(item,i) in navTypes"
                         :key="i"
                         class="tab flex-center"
                         :class="{'active':item.active}">
                        {{item.name}}
                    </div>
                </div>
            </div> -->
            <el-card class="center-card">
                <div  class="flex">
                   <div class="flex-1">
                        <div style="border-bottom:2px dotted #e3e3e3;padding-bottom:20px">
                            <div class="flex">
                                <div class="flex-1 text-left">
                                    <div class="bigfont">经营总数据</div>
                                    <div class="flex-1">
                                        净利润
                                    </div>
                                    <div class="num red-title">
                                        ¥ {{allData.profits || 0.00}}
                                        <!-- <span class="num-note">含¥ {{allData.couponPrice || 0.00}} 券优惠</span> -->
                                    </div>
                                </div>
                                <div class="flex-1 left-t">
                                    <div class="grey-box text-left">
                                        <div><span>销售额：</span>¥ {{allData.sales || 0.00}}</div>
                                        <div><span>交易量：</span>{{allData.orderDetailsNum || 0}} 笔</div>
                                        <div><span>退款额：</span>¥ {{allData.backNum || 0.00}}</div>
                                        <div><span>集团券：</span>¥ {{allData.comCouponPrice || 0.00}}</div>
                                        <div><span>营销券：</span>¥ {{allData.couponPrice || 0.00}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="margin-top:20px">
                            <div class="">
                                <div class="flex">
                                    <div class="flex-1 text-left">
                                        <div class="bigfont">今日数据</div>
                                        <div class="flex-1">
                                            <div class="d-ss flex">
                                                <span>净利润</span>
                                                <span class="flex-center">
                                                    <i class="el-icon-caret-top danger d-s"
                                                    v-if="todayData.rate>0"></i>
                                                    <i class="el-icon-caret-bottom success d-s"
                                                    v-if="todayData.rate<0"></i>
                                                    <i class="d-s"
                                                    v-if="todayData.rate == 0">-</i>
                                                    <span :class="{danger:todayData.rate>0,success:todayData.rate<0}">{{todayData.rate || 0}}%</span>
                                                    <span style="color:grey;font-weight:400">同比昨日</span> 
                                                </span>
                                            </div>
                                        </div>
                                        
                                            <span class="num red-title">¥ {{todayData.profits || 0.00}} &nbsp;</span>

                                        
                                    </div>
                                    <div class="flex-1  left-t">
                                        <div class="grey-box text-left">
                                            <div><span>销售额：</span>¥ {{todayData.sales || 0.00}}</div>
                                            <div><span>交易量：</span>{{todayData.orderDetailsNum || 0}} 笔</div>
                                            <div><span>退款额：</span>¥ {{todayData.backNum || 0.00}}</div>
                                            <div><span>集团券：</span>¥ {{todayData.comCouponPrice || 0.00}}</div>
                                            <div><span>营销券：</span>¥ {{todayData.couponPrice || 0.00}}</div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- <span class="num-note">含¥ {{todayData.couponPrice || 0.00}} 券优惠</span> -->
                            </div>
                        </div>
                    </div>
                    <div  class="flex-1">
                        <div class="flex">
                            <div class="flex-1" style="padding-left:20px">
                                <div class="bigfont">经营走势图</div>
                            </div>
                            <div class="flex-1">
                                
                            </div>
                    </div>
                    <ve-line height="35vh"
                                :data="chartData"
                                :settings="chartSettings"
                                :data-empty='isBlank'
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
                </div>
                
                

            </el-card>
            <div class="flex">
                <div class="flex-2">

                </div>
                <div class="flex-1 right-sj">
                    <el-card class="right-sjcard">
                        <div class="bigfont">消费用户</div>
                        <div class="flex blod user-center">
                            <div class="flex-1">
                                <div class="user-center-data flex-center ">
                                    {{userData.userData || 0}}&nbsp;
                                    <i class="el-icon-caret-top danger d-s"
                                    v-if="userData.userRate>0"></i>
                                    <i class="el-icon-caret-bottom success d-s"
                                    v-if="userData.userRate<0"></i>
                                    <i class="d-s"
                                    v-if="userData.userRate == 0">-</i>
                                    <span :class="{danger:userData.userRate>0,success:userData.userRate<0}"
                                        class="ss">{{Number(userData.userRate)||0}}%</span>
                                </div>
                                <div>今日用户</div>
                            </div>
                            <div class="flex-1">
                                <div class="user-center-data">{{userData.userDataAll || 0}}</div>
                                <div class="">累计用户</div>
                            </div>
                        </div>
                    </el-card>
                    <el-card class="right-sjcard">
                        <div class="bigfont">支付方式<span class="small-grey"> 近30天</span></div>
                        <div class="pay-line">
                            <!-- <div class="pay" :style="{width:item.rate+'%'}" 
                            v-for="(item,i) in payInfo" :key="i"
                            :class="{success:item.pay_type == 'W',danger:item.pay_type == 'Y',blue:item.pay_type == 'Z',yellow:item.pay_type == 'Q',pink:item.pay_type == '1'}"
                            >
                                <div class="line">
                                    <span v-if="item.rate>10">{{item.rate}}%</span>
                                    <span v-else>&nbsp;</span>
                                </div>
                                <div class="name">{{item.payType}}</div>
                            </div> -->
                            <div v-for="(item,i) in payInfo"
                                :key="i"
                                :class="{success:item.pay_type == 'W',danger:item.pay_type == 'Y',blue:item.pay_type == 'Z',yellow:item.pay_type == 'Q',pink:item.pay_type == '1'}">
                                <div class="flex">
                                    <div class="flex-1">
                                        <div class="name left">{{item.payType}}</div>
                                    </div>
                                    <div class="flex-4">
                                        <el-progress v-if="item.pay_type == 'W'"
                                                    :text-inside="true"
                                                    :stroke-width="18"
                                                    :percentage="item.rate"
                                                    color="#67C23A"></el-progress>
                                        <el-progress v-else-if="item.pay_type == 'Y'"
                                                    :text-inside="true"
                                                    :stroke-width="18"
                                                    :percentage="item.rate"
                                                    color="#F56C6C"></el-progress>
                                        <el-progress v-else-if="item.pay_type == 'Z'"
                                                    :text-inside="true"
                                                    :stroke-width="18"
                                                    :percentage="item.rate"
                                                    color="#66B7F0"></el-progress>
                                        <el-progress v-else-if="item.pay_type == 'Q'"
                                                    :text-inside="true"
                                                    :stroke-width="18"
                                                    :percentage="item.rate"
                                                    color="#FFBD88"></el-progress>
                                        <el-progress v-else-if="item.pay_type == '1'"
                                                    :text-inside="true"
                                                    :stroke-width="18"
                                                    :percentage="item.rate"
                                                    color="rgb(187, 76, 137)"></el-progress>
                                        <!-- <el-progress v-if="item.payType == '免单'"
                                                    :text-inside="true"
                                                    :stroke-width="18"
                                                    :percentage="item.rate"
                                                    color="#bf6dde"></el-progress> -->
                                    </div>
                                </div>
                                
                                
                            </div>
                        </div>
                    </el-card>
                </div>
            </div>
        </div>
        <div class="center new-left"
             v-else-if="activeNav == 1">
            <!-- <div class="center-top flex">
                <div class="center-top-left">
                    <div class="flex-center">
                        <img src="../../assets/super/logo.png"
                             alt=""
                             class="logo">
                        <div class="title">光芽新零售</div>
                    </div>
                    <div class="user-info flex-center">
                        <img src="../../assets/super/user.png"
                             alt=""
                             class="user">
                        18411112222
                        <img src="../../assets/super/on.png"
                             alt=""
                             class="bat">
                    </div>
                </div>
                <div class="center-top-right flex">
                    <div @click="swithSkuNav(i)"
                         v-for="(item,i) in navTypes"
                         :key="i"
                         class="tab flex-center"
                         :class="{'active':item.active}">
                        {{item.name}}
                    </div>
                </div>
            </div> -->
            <div class="stores">
                <el-carousel :interval="0"
                             arrow="always"
                             class="store-carousel">
                    <el-carousel-item v-for="(item,i) in storeLists"
                                      :key="i">
                        <div class="store">
                            <div class="flex">
                                <div class="flex-left">海创园旗舰店(NO.1234)</div>
                                <div class="flex-right">4/5（生鲜机）</div>
                            </div>
                            <div class="flex">
                                <div class="flex-left font-s">浙江省杭州市余杭区文一西路998号海创园5号楼</div>
                                <div class="flex-right flex-center-Y">
                                    86%
                                    <img src="../../assets/super/wifi.png"
                                         alt=""
                                         class="wifi">
                                </div>
                            </div>
                            <div class="flex">
                                <div class="flex-left">格子机（S/N：12356889）</div>
                                <div class="flex-right">默认排序</div>
                            </div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="machines">
                <el-carousel :interval="0"
                             arrow="always"
                             class="machine-carousel">
                    <el-carousel-item v-for="(item,i) in storeLists"
                                      :key="i">
                        <div class="machine">
                            <div>

                            </div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
        <!-- <div class="left left-sj"
             v-if="activeNav == 0">
            <el-card class="store-box">
                <div class="flex">
                    <div class="flex-1 bigfont">近30天 门店排名</div>
                    <div class="flex-1 title-note">利润/单量</div>
                </div>
                <div v-for="(item,i) in storeSortData"
                     :key="i"
                     class="flex blod">
                    <span class="flex-1">{{item.storeName}}</span>
                    <span class="flex-1 right red-line">
                        <span>¥ {{item.profits}} / {{item.orderDetailsNum}} 笔</span>
                    </span>
                </div>
                <br>
                <div class="right-t">
                    <el-pagination small
                                   @current-change="currentChangeStore"
                                   @prev-click="prevClickStore"
                                   @next-click="nextClickStore"
                                   :current-page="storeSortParams.pageNum"
                                   :page-size="storeSortParams.pageRow"
                                   layout="prev, pager, next"
                                   :total="storeSortTotalCount">
                    </el-pagination>
                </div>
            </el-card>
            <el-card class="store-box">
                <div class="flex">
                    <div class="flex-1 bigfont">近30天 热销SKU</div>
                    <div class="flex-1 title-note">利润/平均利润率</div>
                </div>
                <div v-for="(item,i) in skuSortData"
                     :key="i"
                     class="flex blod">
                    <span class="flex-1">{{item.skuName}}</span>
                    <span class="flex-1 right red-line">
                        <el-popover placement="right"
                                    width="200"
                                    trigger="hover">
                            <div>
                                <div>近30天销量：{{item.num}}</div>
                                <div>近30天平均成本：¥ {{item.procurementPrice}}</div>
                                <div>近30天平均售价：¥ {{item.discPrice}}</div>
                            </div>
                            <span slot="reference">¥ {{item.profits}} / {{item.profitRate}}</span>
                        </el-popover>
                    </span>
                </div>
                <br>
                <div class="right-t">
                    <el-pagination small
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
        </div> -->
        <div class="left"
             v-else-if="activeNav == 1">
            <div class="title card-title">SKU列表</div>
            <!-- <div class="input-select">
                <el-input placeholder="请输入内容" v-model="searchValueSku" class="input-select-sku">
                    <el-select v-model="skuTab" placeholder="请选择" slot="prepend">
                        <el-option v-for="item in skuTabs" :key="item.id" :label="item.name" :value="item.id">
                        </el-option>
                    </el-select>
                </el-input>
                <img src="" alt="" @click="searchSku">
            </div> -->
            <div class="sku-tabs flex">
                <div class="sku-tabs-left">
                    <div @click="swithSkuTab(i)"
                         v-for="(item,i) in skuTypes"
                         :key="i"
                         class="tab title"
                         :class="{'active':item.active}">
                        {{item.name}}
                        <i class="el-icon-caret-right"
                           v-if="item.active"></i>
                    </div>
                </div>
                <div class="sku-tabs-right flex">
                    <div v-for="(item,i) in skusData"
                         :key="i"
                         class="skuData">
                        <div>店销:316/总销:2278/13%</div>
                        <div>店位:2/总位:74</div>
                        <div>店利:31%/均利:36.2%</div>
                        <div class="bottom flex">
                            <img src="../../assets/super/404.png"
                                 alt=""
                                 class="sku">
                            <div>
                                <div>旺仔牛奶</div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="right right-sj new-right"
             v-if="activeNav == 0">
            <!-- <el-card class="right-sjcard">
                <div class="bigfont">消费用户</div>
                <div class="flex blod user-center">
                    <div class="flex-1">
                        <div class="user-center-data flex-center">
                            {{userData.userData || 0}}&nbsp;
                            <i class="el-icon-caret-top danger d-s"
                               v-if="userData.userRate>0"></i>
                            <i class="el-icon-caret-bottom success d-s"
                               v-if="userData.userRate<0"></i>
                            <i class="d-s"
                               v-if="userData.userRate == 0">-</i>
                            <span :class="{danger:userData.userRate>0,success:userData.userRate<0}"
                                  class="ss">{{Number(userData.userRate)||0}}%</span>
                        </div>
                        <div>今日用户</div>
                    </div>
                    <div class="flex-1">
                        <div class="user-center-data">{{userData.userDataAll || 0}}</div>
                        <div class="">累计用户</div>
                    </div>
                </div>
            </el-card>
            <el-card class="right-sjcard">
                <div class="bigfont">近30天 支付方式</div>
                <div class="pay-line">
                    <div v-for="(item,i) in payInfo"
                         :key="i"
                         :class="{success:item.pay_type == 'W',danger:item.pay_type == 'Y',blue:item.pay_type == 'Z',yellow:item.pay_type == 'Q',pink:item.pay_type == '1'}">
                        <div class="name left">{{item.payType}}</div>
                        <el-progress v-if="item.pay_type == 'W'"
                                     :text-inside="true"
                                     :stroke-width="18"
                                     :percentage="item.rate"
                                     color="#67C23A"></el-progress>
                        <el-progress v-else-if="item.pay_type == 'Y'"
                                     :text-inside="true"
                                     :stroke-width="18"
                                     :percentage="item.rate"
                                     color="#F56C6C"></el-progress>
                        <el-progress v-else-if="item.pay_type == 'Z'"
                                     :text-inside="true"
                                     :stroke-width="18"
                                     :percentage="item.rate"
                                     color="#66B7F0"></el-progress>
                        <el-progress v-else-if="item.pay_type == 'Q'"
                                     :text-inside="true"
                                     :stroke-width="18"
                                     :percentage="item.rate"
                                     color="#FFBD88"></el-progress>
                        <el-progress v-else-if="item.pay_type == '1'"
                                     :text-inside="true"
                                     :stroke-width="18"
                                     :percentage="item.rate"
                                     color="rgb(187, 76, 137)"></el-progress>
                    </div>
                </div>
            </el-card> -->
            <el-card class="store-box">
                <div class="flex">
                    <div class="flex-1 bigfont">门店排名<span class="small-grey"> 近30天</span></div>
                    <!-- <div class="flex-1 title-note">利润/单量</div> -->
                </div>
                <el-table
                    :data="storeSortData"
                    stripe
                    style="width: 100%"
                    size="mini">
                    <el-table-column
                    prop="storeName"
                    label="门店名称"
                    align="left">
                    </el-table-column>
                    <el-table-column
                    prop="profits"
                    label="利润"
                    align="right">
                    <template slot-scope="scope">
                        <span class="themcolor">￥{{scope.row.profits}}</span>
                    </template>
                    </el-table-column>
                    <el-table-column
                    prop="orderDetailsNum"
                    label="单数(笔)"
                    align="right">
                    </el-table-column>
                </el-table>
                
                <!-- <div v-for="(item,i) in storeSortData"
                     :key="i"
                     class="flex blod">
                    <span class="flex-1">{{item.storeName}}</span>
                    <span class="flex-1 right red-line">
                        <span>¥ {{item.profits}} / {{item.orderDetailsNum}} 笔</span>
                    </span>
                </div> -->
                <br>
                <div class="right-t">
                    <el-pagination small
                                   @current-change="currentChangeStore"
                                   @prev-click="prevClickStore"
                                   @next-click="nextClickStore"
                                   :current-page="storeSortParams.pageNum"
                                   :page-size="storeSortParams.pageRow"
                                   layout="prev, pager, next"
                                   :total="storeSortTotalCount">
                    </el-pagination>
                </div>
            </el-card>
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
                <!-- <div v-for="(item,i) in skuSortData"
                     :key="i"
                     class="flex blod">
                    <span class="flex-1">{{item.skuName}}</span>
                    <span class="flex-1 right red-line">
                        <el-popover placement="right"
                                    width="200"
                                    trigger="hover">
                            <div>
                                <div>近30天销量：{{item.num}}</div>
                                <div>近30天平均成本：¥ {{item.procurementPrice}}</div>
                                <div>近30天平均售价：¥ {{item.discPrice}}</div>
                            </div>
                            <span slot="reference">¥ {{item.profits}} / {{item.profitRate}}</span>
                        </el-popover>
                    </span>
                </div> -->
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
        <div class="right"
             v-else-if="activeNav == 1">
            <!-- 门店列表 -->
            <div class="right-card store-lists">
                <div class="title">门店列表</div>
                <div class="lists">
                    <div class="list">
                        <div>海创园旗舰店(NO.1234)</div>
                    </div>
                </div>
            </div>
            <!-- /门店列表 -->
            <!-- 门店监控-->
            <div class="right-card store-cam">
                <div class="title">门店监控</div>
            </div>
            <!-- /门店监控 -->
            <!-- SKU临时托盘 -->
            <div class="right-card sku-tem">
                <div class="title">SKU临时托盘</div>
            </div>
            <!-- /SKU临时托盘 -->
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import "v-charts/lib/style.css";
export default {
    data() {
        this.chartSettings = {
            stack: { 日常数据: ["订单量", "销售额", "退款额", "净利润"] },
            labelMap: {
                orderDetailsNum: "订单量",
                sales: "销售额",
                backNum: "退款额",
                profits: "净利润"
            },
            area: true
            // xAxisType: "time"
        };
        this.chartSettingsCircle = {
            // roseType: 'radius'
        };
        return {
            isLineLoaing: false,
            isCircleLoaing: true,
            isBlank: false,
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
            storeSortData: [],
            skuSortParams: {
                pageRow: 5,
                pageNum: 1
            },
            skuSortTotalCount: 1,
            skuSortData: [],
            tabTime: "0",
            tabChangeValue: "0",
            skuChangeValue: "0",
            chartData: {
                columns: [
                    "gmtCreated",
                    "orderDetailsNum",
                    "sales",
                    "backNum",
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
            todayData: {},
            userData: {},
            payInfo: {},
            activedCircle: "",
            activedCircleData: {}
        };
    },
    created() {
        //activeNav == 0
        this.getAllData(); //获取经营总数据
        this.getStoreSortData(); //获取近30天门店排名
        this.getSkuSortData(); //获取近30天热销SKU
        this.getLine(); //获取经营走势图
        this.getCircle(); //获取近30天门店占比图
    },
    methods: {
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
        currentChangeStore(index) {
            this.storeSortParams.pageNum = index;
            this.getStoreSortData(this.params);
        },
        prevClickStore(index) {
            this.storeSortParams.pageNum = index;
            this.getStoreSortData(this.params);
        },
        nextClickStore(index) {
            this.storeSortParams.pageNum = index;
            this.getStoreSortData(this.params);
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
        getStoreSortData(params) {
            this.storeSortParams.manageId = this.userId;
            this.api({
                url: "/operator/storeStaticData",
                method: "post",
                data: this.storeSortParams
            }).then(data => {
                console.log(data)
                this.storeSortData = data.list;
                // this.storeSortTotalCount = data.totalPage;
                if(data.totalCount>25){
                        this.storeSortTotalCount=25
                    }else{
                        this.storeSortTotalCount=data.totalCount
                    }
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
                    path: "/homeIndex"
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
            if (type == 0) {
                let legendNameA = {};
                for (let i in data.storeVolumeJson) {
                    legendNameA[data.storeVolumeJson[i].storeName] =
                        data.storeVolumeJson[i].storeName +
                        " :" +
                        data.storeVolumeJson[i].proportionSales +
                        "%";
                }
                this.chartSettingsCircle.legendName = legendNameA;
                this.circleData = {
                    columns: ["storeName", "sales"],
                    rows: this.circleDatas.storeVolumeJson
                };
            } else if (type == 1) {
                let legendNameA = {};
                for (let i in data.storeVolumeJson) {
                    legendNameA[data.storeVolumeJson[i].storeName] =
                        data.storeVolumeJson[i].storeName +
                        " :" +
                        data.storeVolumeJson[i].proportionProfits +
                        "%";
                }
                this.chartSettingsCircle.legendName = legendNameA;
                let len = this.colors.length;
                for (let i in this.circleDatas.storeVolumeJson) {
                    this.circleDatas.storeVolumeJson[i].active = false;
                    if (i <= len - 1) {
                        this.circleDatas.storeVolumeJson[i].color = this.colors[
                            i
                        ];
                    } else {
                        this.circleDatas.storeVolumeJson[i].color = "#f1f1f1";
                    }
                }
                if (this.circleDatas.storeVolumeJson.length > 0) {
                    this.circleDatas.storeVolumeJson[0].active = true;
                    this.activedCircleData = this.circleDatas.storeVolumeJson[0];
                }
                console.log();
                console.log(this.activedCircleData);
                this.circleData = {
                    columns: ["storeName", "profits"],
                    rows: this.circleDatas.storeVolumeJson
                };
            } else if (type == 2) {
                let legendNameA = {};
                for (let i in data.storeVolumeJson) {
                    legendNameA[data.storeVolumeJson[i].storeName] =
                        data.storeVolumeJson[i].storeName +
                        " :" +
                        data.storeVolumeJson[i].proportionUser +
                        "%";
                }
                this.chartSettingsCircle.legendName = legendNameA;
                this.circleData = {
                    columns: ["storeName", "storeUser"],
                    rows: this.circleDatas.storeVolumeJson
                };
            } else {
                let legendNameA = {};
                for (let i in data.storeVolumeJson) {
                    legendNameA[data.storeVolumeJson[i].storeName] =
                        data.storeVolumeJson[i].storeName +
                        " :" +
                        data.storeVolumeJson[i].proportionSales +
                        "%";
                }
                this.chartSettingsCircle.legendName = legendNameA;
                this.circleData = {
                    columns: ["storeName", "sales"],
                    rows: this.circleDatas.storeVolumeJson
                };
            }
        },
        getCircle() {
            //门店占比图
            let params = {
                // username: this.userName,
                manageId: this.userId
            };
            this.isCircleLoaing = true;
            this.api({
                url: "/operator/showPieChartByOperator",
                method: "post",
                data: params
            })
                .then(data => {
                    console.log(data)
                    this.circleDatas = data;
                    this.isCircleLoaing = false;
                    let legendNameA = {};
                    // let lists = this.circleDataa.rows
                    let lists = data.storeVolumeJson
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
                url: "/operator/homeLineData",
                method: "post",
                data: params
            })
                .then(data => {
                    this.isBlank = data.lineData.length == 0 ? true : false;
                    this.chartData.rows = data.lineData;
                    this.isLineLoaing = false;
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
        ...mapGetters(["userId", "userName"])
    }
};
</script>


