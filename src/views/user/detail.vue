<style scoped>
.blue {
    color: #286EFF!important;
    cursor: pointer;
}
.app-container {
    padding: 4.6vh 2.6vw;
    color: #333!important
}
.blank{width: 100%;height: 5vh}
.el-card{height: 85vh;padding:2vw 2vw;border-radius:5px;border-radius:20px;overflow: auto}
.searchBox>div{width: 20%}
.searchBox1>div{width: 30%}
.selectWidth{width: 8vw}
.selectWidth1{width: 10vw}
.selectWidth2{width: 18vw}
.mb-2{margin-bottom: 2vh}
.mb-4{margin-bottom: 4vh}
.mb-3{margin-bottom: 3vh}
.mb-5{margin-bottom: 5vh}
.lgfont{font-size: 1.15vw}
.normalfont{font-size: 1.05vw}
.bigfont{font-size: 0.94vw;}
.smallfont{font-size: 0.83vw;}
.minifont{font-size: 0.73vw;}
.miniminifont{font-size: 0.63vw;}
.toolbar{margin-top: 3.5vh}
.text-center{text-align: center}
img{width: 5vw;height: 5vw;border-radius: 50%;}
.img1{width: 2.5vw;height: 2.5vw;border-radius: 50%;}
.bold{font-weight: bold}
.info-left{width: 40%}
.info-right{width: 60%;height: 5vw;position: relative}
.info-right .top{position: absolute;left: 0;top: 1.5vh;width: 100%}
.info-right .bottom{position: absolute;left: 0;bottom: 1vh;width: 100%}
.info-right .top>div,.info-right .bottom>div{width: 20%}
.info-left .info{width: 78%;height: 5vw;position: relative}
.info-left .info .name{font-size: 1.04vw;font-weight: bold;position: absolute;left: 0;top: 1vh;width: 100%}
.info-left .info .name .name1{max-width: 30%;display: inline-block}
.info-left .info .time{font-size: 1.04vw;font-weight: 400;margin-left: 1vw}
.info-left .info .detail{font-size: 1.04vw;position: absolute;left: 0;bottom: 1vh}
.detailStyle div{line-height:2vw;color: #333333}
.detailStyle div>span{color: #D0021B}
.detailStyle .title{line-height:3vw}
.userManagedialogClass{border-radius: 10px;width: 37vw!important;max-height: 90vh!important}
.appealDialogClass{border-radius: 10px;width: 20vw!important;max-height: 90vh!important}
.userManagedDialog{width: 37vw!important;height: 82vh!important;padding: 3.7vh 3vw;color: #333;position: relative}
.appealDialog{width: 20vw!important;height:67vh!important;padding:1.5vh 1vw;color: #333;position: relative}
.userManagedDialog1{width: 26vw!important;height: 28vh!important;}
.userManagedialogClass1{width: 26vw!important}
.userManagedDialog .title{margin-bottom: 3.7vh;}
.userManagedDialog .bottom{width: 100%;height: 5.5vh;justify-content: space-around;position: absolute;left: 0;bottom: 5vh}
.userManagedDialog .bottom .btn{cursor: pointer;width: 26%;height:100%;color: #286EFF;border: 1px solid #286EFF;text-align: center;line-height: 5.5vh}
.userManagedDialog .bottom .btn1{cursor: pointer;width: 26%;height:100%;color: #fff;background:#286EFF;text-align: center;line-height: 5.5vh}
.iconfont{font-size:1.5vw;color: #fff}
.backBtn{background: #e1dede;width: 3.2vw;height: 3.2vw;box-shadow:0px 20px 20px -10px rgba(0, 0, 0, 0.15);z-index: 10;text-align: center;line-height: 3.9vw;border-radius: 0.5vw;margin-bottom: 0.5vh}
#backBtn{color: rgba(155, 155, 155, 1);position: fixed;top: 50%;right: 2vw;z-index: 10;cursor: pointer;}
.el-select-dropdown__item{font-size: 0.94vw;padding-right: 0}
.appeal .title{font-size: 0.8333333vw;font-weight: bold;margin-top: 2vh;margin-bottom: 2vh}
.appeal .skuimg img{width: 5vw;height: 5vw;border-radius: 0;margin-right: 1vw}
.appeal .info{position: relative;width: 15vw;height: 5vw}
.appeal .info .name{font-size: 0.83333vw;font-weight: bold}
.appeal .info .note{position: absolute;bottom: 1.5vw;left: 0;color: #999;font-size:0.72vw;}
.appeal .info .note1{position: absolute;bottom: 0;left: 0;color: #999;font-size:0.72vw;}
.appeal .reason img{width:0.72vw;height:0.72vw;font-size:0.72vw;margin-right: 0.5vw}
.appeal .reason{font-size:0.72vw;margin-bottom: 1vh}
.appeal .appealImg div{width: 5vw;height:5vw;margin-right: 1vw}
.appeal .appealImg img{border-radius: 0;width: 100%;height: 100%}
.appeal .reasonDetail{width: 100%;height: 15vh;border: 1px solid #c0c4cc;margin-top: 2vh;padding: 1vh 0.5vw;font-size: 0.625vw;line-height: 1.5}
.portrait1{width: 15vw;border-radius: 0;height:26vw;}
</style>
<style>
#userManage .el-radio-button__orig-radio:checked+.el-radio-button__inner{background-color: #286eff;border-color: #286eff;}
#userManage .el-dialog__header,#userManage .el-dialog__body,#userManage .el-dialog__footer{padding:0}
#userManage .el-date-editor .el-range-separator{padding: 0 0}
#userManage .el-radio-button__inner{padding: 0.5vw 0.9vw;font-size: 0.9375vw}
#userManage .el-tabs__nav-wrap::after{background-color: transparent}
.userManagedDialog.card .el-input__inner{padding: 0;text-align: center}
.el-card__body{height:100%;padding: 0;}
#userManage .el-pagination.is-background .el-pager li:not(.disabled).active{background-color: rgba(40, 110, 255, 1)}
#userManage .el-cascader,.userManagecascader .el-cascader-menu__item{font-size: 0.94vw!important;font-weight: 400}
#userManage .el-date-editor .el-range-input, .el-date-editor .el-range-separator{font-size: 0.94vw}
#userManage .el-tabs__item{font-size: 0.94vw;height: 5vh;line-height: 5vh;width: 7.8vw;text-align: center}
#userManage .el-tabs__item.is-active,#userManage .el-tabs__item:hover{color: #286EFF}
#userManage .el-tabs__active-bar{background-color: #286EFF}
#userManage .el-tabs__header{margin-bottom: 0}
#userManage .el-input__inner,#userManage .el-input__icon{height: 4.63vh;line-height: 4.63vh}
#userManage .el-input{font-size: 0.94vw}
#userManage .el-step__title.is-finish,#userManage .el-step__description.is-finish{color: #333333;line-height:1.3vw;font-size: 0.94vw;}
#userManage .el-step__title.is-wait{line-height:1.3vw;font-size: 0.94vw;}
#userManage .el-step__head.is-finish{color: #286EFF}
#userManage .el-radio-group{margin-bottom: 1vh!important}
.userManagedDialog .el-textarea__inner{height: 15vh}
.userManagedDialog .textarea{height: 15vh;border: 1px solid #DCDFE6;color: #333;padding: 5%;line-height: 1.3vw}
.userManagedDialog2 .el-input__inner{border: 0}
.operatorTableStyle{font-size: 0.94vw;color: #333}
.operatorTableStyle th>.cell{font-weight: 600}
.operatorCellStyle{font-size: 0.83vw;color: #333;height: 7.5vh;padding: 0!important}
.el-button--primary{background-color: rgba(40, 110, 255, 1)}
.el-dialog__headerbtn{z-index: 10;}
</style>
<template>
<div class="app-container" id="userManage">
        <div id="backBtn" class="minifont" @click="toBack"><div class="backBtn"><i class="el-icon-arrow-left iconfont"></i></div><div style="line-height:1vw">返回上级</div></div>  
        <el-card style="position:relative">
        <div class="flex-center-Y justify-between mb-5">
            <div class="flex-center-Y justify-between info-left">
                <div>
                    <img :src="userInfo.portrait" alt="">
                </div>
                <div class="info">
                    <div class="name flex-center-E"><span class="name1 limit-ellipsis">{{userInfo.nickname}}</span><span class="time">注册时间：{{userInfo.gmtCreated}}</span></div>
                    <!-- <div class="time">注册时间：{{userInfo.gmtCreated}}</div> -->
                    <div class="detail">{{userInfo.sex=='1'?'男':'女'}} | {{userInfo.city || '未知'}} | {{userInfo.userPhone || '未知'}}</div>
                </div>
            </div>
            <div class="info-right bigfont">
                <div class="flex-center-Y  justify-between top bold text-center">
                    <div>活跃度</div>
                    <div>累积消费金额</div>
                    <div>积分</div>
                    <div>卡券数</div>
                    <div>余额</div>
                    <div>申诉</div>
                </div>
                <div class="flex-center-Y  justify-between bottom text-center">
                    <div>{{userInfo.active}}</div>
                    <div>¥{{userInfo.allMoney}}</div>
                    <div>{{userInfo.integralNum}}</div>
                    <div style="position:relative">{{userInfo.ticketNum}} <span class="blue" style="position:absolute;top:0;right:0" v-if="userInfo.couponFlag" @click="couponVisible=true">发放卡券</span></div>
                    <div>¥{{userInfo.rechargeMoney}}</div>
                    <div>{{userInfo.complainCount}}</div>
                </div>
            </div>
        </div>
        <div class="flex-center-E justify-between mb-2">
          <el-tabs v-model="activeName" @tab-click="changeTab">
              <el-tab-pane label="用户订单" name="0">
              </el-tab-pane>
              <el-tab-pane label="用户卡券" name="1">
              </el-tab-pane>
              <!-- <el-tab-pane label="用户事件" name="2">
              </el-tab-pane> -->
          </el-tabs>
        </div>
        <div v-show="detailTab=='0'">
          <div class="flex-center-Y justify-between searchBox searchBox1 mb-2" v-if="activeName=='0'">
            <div class="flex-center-Y justify-between bigfont bold">
              订单号搜索:
              <div class="selectWidth2">
                <el-input placeholder="请输入订单号" v-model="searchData.orderCode"></el-input>
              </div>
            </div>
            <div class="flex-center-Y justify-between bigfont bold">
              创建时间:
              <div class="selectWidth2">
                  <el-date-picker
                      v-model="searchData.time"
                      type="daterange"
                      align="right"
                      unlink-panels
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      value-format="yyyy-MM-dd"
                      @change="selectTime">
                  </el-date-picker>
              </div>
            </div>
            <div class="flex-center-Y justify-between bigfont"></div>
          </div>
          <div class="flex-center-Y justify-between searchBox mb-3" v-if="activeName=='0'">
            <div class="flex-center-Y justify-between bigfont bold">
              订单状态:
              <div class="selectWidth1">
                <el-select v-model="searchData.isPay" placeholder="请选择订单状态" clearable>
                  <el-option
                    v-for="item in payOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="flex-center-Y justify-between bigfont bold">
              支付方式:
              <div class="selectWidth1">
                <el-select v-model="searchData.payType" placeholder="请选择支付方式" clearable>
                  <el-option
                    v-for="item in typeOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="flex-center-Y justify-between bigfont bold">
              消费门店:
              <div class="selectWidth1">
                <el-select v-model="searchData.storeCode" placeholder="请选择消费门店" clearable>
                  <el-option
                    v-for="item in storeOptions"
                    :key="item.storeCode"
                    :label="item.storeName"
                    :value="item.storeCode">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="flex-center-Y justify-between ">
              <el-button type="primary" icon="el-icon-search" class="bigfont" @click="search"> 搜索</el-button>
            </div>
          </div>
          <div class="flex-center-E justify-between" v-if="activeName=='1'">
            <el-radio-group v-model="activeType" style="margin-bottom: 30px;" @change="changeType">
              <el-radio-button label="false">未使用</el-radio-button>
              <el-radio-button label="true">已使用</el-radio-button>
          </el-radio-group>
          </div>
          <el-table
            :data="lists"
            key="table1"
            highlight-current-row 
            v-loading="listLoading" 
            style="width: 100%;" 
            v-show="activeName=='0'" 
            stripe 
            header-row-class-name="operatorTableStyle" 
            cell-class-name="operatorCellStyle">
            <el-table-column prop="orderCode" label="订单号" align="center" width="120">
                <template slot-scope="scope">
                  <el-popover
                  placement="top-start"
                  trigger="hover"
                  :content="scope.row.orderCode">
                  <span class="limit-2" slot="reference">{{scope.row.orderCode}}</span>
                  </el-popover>
                </template>
            </el-table-column>
            <el-table-column prop="storeName" label="消费门店" align="center"></el-table-column>
            <!-- <el-table-column prop="machineName" label="设备名称" align="center">
              <template slot-scope="scope">
                <el-popover
                  placement="top-start"
                  width="200"
                  trigger="hover"
                  :content="scope.row.machineName">
                  <span class="limit" slot="reference">{{scope.row.machineName}}</span>
                  </el-popover>
              </template>
            </el-table-column> -->
            <el-table-column prop="salePrice" label="订单总金额" align="center"> </el-table-column>
            <el-table-column prop="orderPrice" label="实需支付" align="center"> </el-table-column>
            <el-table-column prop="payPrice" label="实际支付" align="center"> </el-table-column>
            <el-table-column prop="refurdPrice" label="退款金额" align="center"> </el-table-column>
            <el-table-column prop="payType" label="支付渠道" align="center"> </el-table-column>
            <el-table-column prop="paySource" label="支付来源" align="center"> </el-table-column>
            <el-table-column prop="isPay" label="支付状态" align="center"> </el-table-column>
            <el-table-column prop="gmtCreated" label="创建时间" width="120" align="center">
              <template slot-scope="scope">
                  <div>{{scope.row.gmtCreated1}}</div>
                  <div>{{scope.row.gmtCreated2}}</div>
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                      <span
                            class="blue"
                            @click="showDetail(scope.row)">
                          详情
                      </span>
                </template>
            </el-table-column>
          </el-table>
          <el-col :span="24" class="toolbar" v-if="activeName=='0'">
            <el-col :span="24" style="position:relative">
              <el-pagination background
                            @current-change="currentChange"
                            :current-page="params.pageNum"
                            :page-size="params.pageRow"
                            :total="totalCount" 
                            style="position:absolute;left:50%;transform:translateX(-50%)" 
                            layout="prev, pager, next">
              </el-pagination>
            </el-col>
          </el-col>
          <el-table
            :data="listsB"
            key="table2"
            highlight-current-row 
            v-loading="listLoading" 
            style="width: 100%;" 
            v-show="activeName=='1' && activeType=='false'" 
            stripe 
            header-row-class-name="operatorTableStyle" 
            cell-class-name="operatorCellStyle">
            <el-table-column prop="ruleTypeName" label="优惠券类型" align="center"> </el-table-column>
            <el-table-column prop="name" label="优惠券名称" align="center"> </el-table-column>
            <el-table-column prop="ruleTypeDetails" label="优惠内容" align="center"> </el-table-column>
            <el-table-column prop="validity" label="有效期" align="center"> </el-table-column>
            <el-table-column prop="ticketDetails" label="使用规则" align="center" width="200">
                <template slot-scope="scope">
                      <span class="limit-3">
                          {{scope.row.ticketDetails}}
                      </span>
                </template>
            </el-table-column>
            <el-table-column prop="getTime" label="领取时间" align="center"> </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                      <span class="blue" @click="delCoupon(scope.row)">
                          删除
                      </span>
                </template>
            </el-table-column>
          </el-table>
          <el-table
            :data="listsB"
            key="table3"
            highlight-current-row 
            v-loading="listLoading" 
            style="width: 100%;" 
            v-show="activeName=='1' && activeType=='true'" 
            stripe 
            header-row-class-name="operatorTableStyle" 
            cell-class-name="operatorCellStyle">
            <el-table-column prop="ruleTypeName" label="优惠券类型" align="center"> </el-table-column>
            <el-table-column prop="name" label="优惠券名称" align="center"> </el-table-column>
            <el-table-column prop="ruleTypeDetails" label="优惠内容" align="center"> </el-table-column>
            <el-table-column prop="usedTime" label="使用时间" align="center"> </el-table-column>
            <el-table-column prop="ticketDetails" label="使用规则" align="center">
                <template slot-scope="scope">
                      <span class="limit-3">
                          {{scope.row.ticketDetails}}
                      </span>
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                      <span class="blue" @click="showDetail(scope.row)">
                          消费详情
                      </span>
                </template>
            </el-table-column>
          </el-table>
          <el-col :span="24" class="toolbar" v-if="activeName=='1'">
            <el-col :span="24" style="position:relative">
              <el-pagination background
                            @current-change="currentChange"
                            :current-page="params.pageNum"
                            :page-size="params.pageRow"
                            :total="totalCount" 
                            style="position:absolute;left:50%;transform:translateX(-50%)" 
                            layout="prev, pager, next">
              </el-pagination>
            </el-col>
          </el-col>
          <div class="clearfix"></div>
        </div>
        <div v-show="detailTab=='1'" class="detailStyle bigfont">
          <div class="bigfont bold title">订单信息</div>
          <div>订单号：{{orderInfo.orderCode}}</div>
          <div>创建时间：{{orderInfo.gmtCreated}}</div>
          <div>消费门店：{{orderInfo.storeName}}</div>
          <div>订单总金额：¥{{orderInfo.orderPrice}}</div>
          <div>优惠金额：¥{{orderInfo.preferPrice}}</div>
          <div>实际支付：<span>¥{{orderInfo.payPrice}}</span></div>
          <div>退款金额：<span>¥{{orderInfo.refurdPrice}}</span></div>
          <div>支付方式：{{orderInfo.payType}}</div>
          <div class="bigfont bold title">订单状态</div>
          <el-steps :active="(orderInfo.orderStatusList[4]&&orderInfo.orderStatusList[4].statusFlag) ? '5' : '4'" align-center>
            <el-step v-for="(item,i) in orderInfo.orderStatusList" :key="i" :title="item.statusName" :description="item.statusTime"></el-step>
          </el-steps>
          <div class="bigfont bold title">订单详情</div>
          <el-table
            :data="orderInfo.orderDetailsList"
            ref="table" 
            highlight-current-row 
            v-loading="listLoading" 
            style="width: 100%;" 
            stripe 
            header-row-class-name="operatorTableStyle" 
            cell-class-name="operatorCellStyle"
            type="selection">
            <!-- <el-table-column prop="nickname" label="订单号" align="center">
                <template slot-scope="scope">
                  <span class="limit">{{scope.row.nickname}}</span>
                </template>
            </el-table-column> -->
            <el-table-column prop="skuPicture" label="SKU图片" align="center">
              <template slot-scope="scope">
                  <div>
                      <img :src="scope.row.skuPicture" class="img1" alt="">
                  </div>
              </template>
            </el-table-column>
            <el-table-column prop="skuName" label="SKU名称" align="center"> </el-table-column>
            <el-table-column prop="machineName" label="设备名称" align="center"> </el-table-column>
            <el-table-column prop="originPrice" label="原价" align="center"> </el-table-column>
            <el-table-column prop="descPrice" label="促销价" align="center"> </el-table-column>
            <el-table-column prop="name" label="优惠券" align="center">
              <template slot-scope="scope">
                  <!-- <div :style="scope.row.couponFlag ? 'color:#FF0000' : ''">{{scope.row.name}}</div> -->
                  <div :style="scope.row.couponFlag ? 'color:#FF0000' : ''">{{scope.row.couponType}}</div>
              </template>
            </el-table-column>
            <!-- <el-table-column prop="couponType" label="优惠券规则" align="center"> </el-table-column> -->
            <el-table-column prop="payPrice" label="实需支付" align="center"> </el-table-column>
            <el-table-column prop="isFlashKey" label="光id" align="center"> </el-table-column>
            <el-table-column prop="gmtCreated" label="闪光时间" align="center">
                <template slot-scope="scope">
                      <div style="line-height:1.5">{{scope.row.gmtCreated1}}</div>
                      <div style="line-height:1.5">{{scope.row.gmtCreated2}}</div>
                </template>
            </el-table-column>
            <el-table-column prop="gmtCreated" label="用户反馈" align="center">
                <template slot-scope="scope">
                      <div v-if="scope.row.complainStatus=='1'" style="line-height:1.5" class="blue" @click="showAppeal(scope.row)">详情</div>
                      <div v-if="scope.row.complainStatus=='2'" style="line-height:1.5" class="blue" @click="showAppeal(scope.row)">查看</div>
                      <div v-if="scope.row.complainStatus=='0'" style="line-height:1.5">无</div>
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                      <span
                            @click="refuse(scope.row)"
                            class="blue">
                          退款
                      </span>
                </template>
            </el-table-column>
            <el-table-column prop="gmtCreated" label="补货详情" align="center">
                <template slot-scope="scope">
                      <div style="line-height:1.5" class="blue" @click="toRepDetail(scope.row)">查看</div>
                </template>
            </el-table-column>
          </el-table>
          <div class="blank"></div>
        </div>
        
        </el-card>
        <!-- 发放卡券 -->
        <el-dialog
            :visible.sync="couponVisible"
            :show-close="false"
            custom-class="userManageDialogClass"
            width="37vw"
            center>
            <div class="userManagedDialog userManagedDialog2 card">
                <div class="title lgfont bold">发放卡券</div>
                <div class="flex-center-S bigfont justify-between mb-4 inputWidth">
                    <div class="W-40 bold" style="line-height:4.63vh">*发放卡券<div class="minifont" style="color:#FF0000;font-weight:400;line-height:1">同一类型券最多发5张</div></div>
                    <div class="W-60" style="max-height:25vh;overflow-y:auto;">
                        <div class="flex-center-Y" style="justify-content:flex-start" v-for="(item,i) in couponTicket" :key="i">
                            <div style="width:25vw">
                              <el-select v-model="item.ruleId" filterable placeholder="选择卡券">
                                  <el-option
                                  v-for="item in couponList"
                                  :key="item.ruleId"
                                  :label="item.name"
                                  :value="item.ruleId">
                                  </el-option>
                              </el-select>
                            </div>
                             <el-input v-model="item.ticketNum" type="number" max="5" min="1"  placeholder="发放数量"></el-input>张&nbsp;
                             <i class="el-icon-remove-outline blue" v-if="couponTicket.length>1" @click="remove(i)"></i>
                             <i class="el-icon-circle-plus-outline blue" @click="add" v-if="i==couponTicket.length-1 && couponTicket.length<5"></i>
                        </div>
                    </div>
                </div>
                <div class="bottom flex-center-Y" style="margin-top:5vh">
                    <div class="btn normalfont" @click="couponVisible=false">取消</div>
                    <div class="btn1 normalfont" @click="addCoupon">发放</div>
                </div>
            </div>
        </el-dialog>
        <!-- 发放卡券 -->
        <!-- 确认信息2 -->
        <el-dialog
            :visible.sync="msgVisible2"
            :show-close="false"
            custom-class="userManageDialogClass userManageDialogClass1"
            width="26vw"
            center>
            <div class="userManagedDialog userManagedDialog1">
                <div class="title bigfont">是否确认删除该优惠券?</div>
                <div class="bottom flex-center-Y" style="margin-top:5vh">
                    <div class="btn normalfont" @click="msgVisible2=false">取消</div>
                    <div class="btn1 normalfont" @click="checkdelCoupon">确定</div>
                </div>
            </div>
        </el-dialog>
        <!-- 确认信息 -->
        <!-- 确认信息3 -->
        <el-dialog
            :visible.sync="msgVisible3"
            :show-close="false"
            custom-class="userManageDialogClass userManageDialogClass1"
            width="26vw"
            center>
            <div class="userManagedDialog userManagedDialog1">
                <div class="title bigfont">是否确认给该位用户发放{{couponTicket.length}}种共{{couponNum}}张优惠券？</div>
                <div class="bottom flex-center-Y" style="margin-top:5vh">
                    <div class="btn normalfont" @click="msgVisible3=false">取消</div>
                    <div class="btn1 normalfont" @click="send">确定</div>
                </div>
            </div>
        </el-dialog>
        <!-- 确认信息 -->
        <!-- 确认信息4 -->
        <el-dialog
            :visible.sync="msgVisible4"
            :show-close="false"
            custom-class="userManageDialogClass userManageDialogClass1"
            width="26vw"
            center>
            <div class="userManagedDialog userManagedDialog1">
                <div class="title bigfont">是否确认退款？</div>
                <div class="bottom flex-center-Y" style="margin-top:5vh">
                    <div class="btn normalfont" @click="msgVisible4=false">取消</div>
                    <div class="btn1 normalfont" @click="doRefuse">确定</div>
                </div>
            </div>
        </el-dialog>
        <!-- 确认信息 -->
        <!-- 用户反馈弹窗 -->
        <el-dialog
            :visible.sync="appealVisible"
            custom-class="userManagedialogClass appealDialogClass"
            width="20vw"
            center>
            <div class="userManagedDialog appealDialog card">
                <div class="title bigfont bold text-center">反馈详情</div>
                <div class="appeal flex-center-Y">
                    <div class="skuimg">
                      <img :src="appealData.skuPicture" alt="">
                    </div>
                    <div class="info">
                      <div class="name">{{appealData.skuName}}</div>
                      <div class="note">原价: ￥{{appealData.originPrice}} </div>
                      <div class="note1">实付款: ￥{{appealData.payPrice}} </div>
                    </div>
                </div>
                <div class="appeal">
                  <div class="title">*问题原因</div>
                  <div class="reason flex-center-Y" v-if="appealData.complainStatus=='A'"><img src="../../assets/super/select.png" alt="">设备未调货或空货</div>
                  <div class="reason flex-center-Y" v-if="appealData.complainStatus=='B'"><img src="../../assets/super/select.png" alt="">商品被设备卡住未掉货</div>
                  <div class="reason flex-center-Y" v-if="appealData.complainStatus=='C'"><img src="../../assets/super/select.png" alt="">商品已过期或损坏</div>
                  <div class="reason flex-center-Y" v-if="appealData.complainStatus=='D'"><img src="../../assets/super/select.png" alt="">货图不符</div>
                </div>
                <div class="appeal">
                  <div class="title">*图片上传</div>
                  <div class="flex-center-Y appealImg">
                    <el-popover placement="left"
                                v-if="appealData.complainPic1"
                                trigger="click">
                                    <div><img :src=appealData.complainPic1 alt="" class="portrait1"></div>
                                    <div slot="reference"><img :src=appealData.complainPic1 alt="" class="portrait1"></div>
                    </el-popover>
                    <el-popover placement="left"
                                 v-if="appealData.complainPic3"
                                trigger="click">
                                   <div><img :src=appealData.complainPic3 alt="" class="portrait1"></div>
                                   <div slot="reference"><img :src=appealData.complainPic3 alt="" class="portrait1"></div>
                    </el-popover>
                    <el-popover placement="left"
                                 v-if="appealData.complainPic2"
                                trigger="click">
                                    <div><img :src=appealData.complainPic2 alt="" class="portrait1"></div>
                                    <div slot="reference"><img :src=appealData.complainPic2 alt="" class="portrait1"></div>
                    </el-popover>
                    
                  </div>
                  <div class="reasonDetail">
                    <span>{{appealData.complainReason || '未输入问题描述'}}</span>
                  </div>
                </div>
            </div>
        </el-dialog>
        <!-- 用户反馈弹窗 -->
    </div>
</template>
<script> 
import axios from 'axios';
import { mapGetters } from "vuex";
import { provinceAndCityData, CodeToText } from "element-china-area-data";
export default {
  data () {
    return {
      
      detailTab:"0",
      activeType:'false',
      searchData:{},
      activeName:"0",
      lists: [
      ],
      listsB:[],
      userInfo:"",
      payOptions:[{label:"支付失败",value:'-1'},{label:"支付成功",value:'1'},{label:"支付等待",value:'2'},{label:"有退款",value:"R"},{label:"正在消费",value:'0'}],
      typeOptions:[{label:"支付宝",value:"Z"},{label:"微信",value:"W"},{label:"充值卡",value:"Q"},{label:"银联",value:"Y"},{label:"红包付",value:"1"}],
      storeOptions:[],
      params:{
        pageNum:1,
        pageRow:4
      },
      totalCount:0,
      listLoading: false,
      multipleSelectionAll: [],//所有选中的数据包含跨分页数据
      allCheck: false,
      orderInfo:{
        orderStatusList:[
          // {statusName:"发起订单",statusTime:"2019-09-09 14:2",statusFlag:"",statusId:""},
          // {statusName:"机器掉货",statusTime:"2019-09-09 14:2",statusFlag:"",statusId:""},
          // {statusName:"生成预账单",statusTime:"2019-09-09 14:2",statusFlag:"",statusId:""},
          // {statusName:"支付成功",statusTime:"2019-09-09 14:2",statusFlag:"",statusId:""},
          // {statusName:"退款",statusTime:"2019-09-09 14:2",statusFlag:"",statusId:""}
          ]
      },
      couponVisible:false,
      couponTicket:[{}],
      couponList:[],
      msgVisible3:false,
      msgVisible2:false,
      msgVisible4:false,
      couponNum:0,
      selectOrder:{},
      appealVisible:false,
      appealData:""
    };
  },
  mounted () {
    this.getUserInfo()
    this.getList()
    // this.getCouponList()
    this.getStoreList()
    if(this.$route.params.orderCode && this.$route.params.orderCode!='_'){
      this.selectOrder.orderCode=this.$route.params.orderCode
      this.detailTab='1'
      this.getOrderDetail()
    }
    
  },
  methods: {
    toRepDetail(row){//去补货详情
      this.$router.push({path:'/operation/marketInfo/'+row.gmtCreated1+'/'+row.gmtCreated2+'/'+row.channelid})
    },
    showAppeal(row){
      this.api({
            url: "/market/updateComplain",
            method: "post",
            data: {
                orderCode:row.orderCode,
                orderDetailsId:row.orderDetailsId
            }
        }).then(data => {
            this.appealVisible=true
            this.api({
                  url: "market/showComplainInfo",
                  method: "post",
                  data: {
                    orderCode:this.selectOrder.orderCode,
                    orderDetailsId:row.orderDetailsId
                  }
              })
                  .then(data => {
                      this.appealData=data || {}
                      this.appealData.skuPicture=row.skuPicture
                      this.appealData.skuName=row.skuName
                      this.appealData.originPrice=row.originPrice
                      this.appealData.payPrice=row.payPrice
                  })
                  .catch(e => {});
        }).catch(data => {
        });
    },
    toBack(){//返回上级
      if(this.detailTab=='0'){
      this.$router.push({path:'/markting/'})
      }else{this.detailTab='0'}
    },
    getCouponList(){//卡券列表
    if(this.userInfo.couponFlag){
      this.api({
                    url: "coupon/showAllTicket",
                    method: "post",
                    data: {}
                })
                    .then(data => {
                        this.couponList=data.couponList
                    })
                    .catch(e => {});
      }
    },
    getUserInfo(){//用户信息
      this.api({
                    url: "/market/userInfo",
                    method: "post",
                    data: {userId:this.$route.params.userId,manageId:this.userId}
                }).then(data => {
                  this.userInfo=data
                  this.getCouponList()
                });
    },
    
    // 分页
    getList(){
      this.searchData.userId=this.$route.params.userId
      this.searchData.manageId=this.userId
      this.searchData.pageNum=this.params.pageNum
      this.searchData.pageRow=this.params.pageRow
      if(this.activeName=='0'){
        this.api({
                    url: "/market/orderInfo",
                    method: "post",
                    data: this.searchData
                }).then(data => {
                  this.lists=data.list
                  this.totalCount=data.totalCount
                });
      }else{
        this.searchData.useFlag=this.activeType
        this.api({
                    url: "/market/couponInfo",
                    method: "post",
                    data:this.searchData
                }).then(data => {
                  this.listsB=data.list
                  this.totalCount=data.totalCount
                  if(this.listsB.length==0 && this.params.pageNum-1 >= 1){
                      this.params.pageNum=this.params.pageNum-1
                      this.getList()
                    }
                });
      }
    },
    changeTab(){
        this.detailTab='0'
        this.params.pageNum=1
        this.getList()
       },
    search(){
      this.params.pageNum=1
      this.getList()
      this.allCheck=false
    },
    selectTime(){
      this.searchData.startTime=this.searchData.time[0]
      this.searchData.endTime=this.searchData.time[1]
    },
    getStoreList(){//门店列表
      this.api({
                    url: "/market/storeList",
                    method: "post",
                    data: {
                      manageId:this.userId,
                      username:this.username
                    }
                }).then(data => {
                    this.storeOptions=data
                });
    },
    showExPress(){
      this.$message({
            type: "warning",
            message: "最多只能创建8个用户编组哦~"
        });
    },
    changeType(){
      this.params.pageNum=1
        this.getList()
       },
    currentChange(index) {
        this.params.pageNum = index;
        this.getList();
    },
    prevClick(index) {
        this.params.pageNum = index;
        this.getList();
    },
    nextClick(index) {
        this.params.pageNum = index;
        this.getList();
    },
    addCoupon(){//发放卡券的验证
      this.couponNum=0
        for(let i in this.couponTicket){
        this.couponNum+=Number(this.couponTicket[i].ticketNum)
        if(this.couponTicket[i].ticketNum>5){
          this.$message({
                        type: "warning",
                        message: "每种卡券最多5张哦~"
                    });
          return;
        }
        if(this.couponTicket[i].ticketNum<=0){
          this.$message({
                        type: "warning",
                        message: "发放数量需大于0哦~"
                    });
          return;
        }
        if(!this.couponTicket[i].ruleId || !this.couponTicket[i].ticketNum){
          this.$message({
                        type: "warning",
                        message: "请选择卡券并填写数量~"
                    });
          return;
        }
      }
      this.msgVisible3=true
    },
    send(){//确认发放卡券
      let ruleIds=''
      let ticketNums=''
      for(let i in this.couponTicket){
        if(i==0){
          ruleIds+=this.couponTicket[i].ruleId
        }else{
          ruleIds+=','+this.couponTicket[i].ruleId
        }
      }
      for(let i in this.couponTicket){
        if(i==0){
          ticketNums+=this.couponTicket[i].ticketNum
        }else{
          ticketNums+=','+this.couponTicket[i].ticketNum
        }
      }
      this.api({
                    url: "/market/addTicket",
                    method: "post",
                    data: {
                      ruleIds:ruleIds,
                      ticketNums:ticketNums,
                      userIds:this.$route.params.userId,
                      manageId:this.userId
                    }
                }).then(data => {
                    this.$message({
                        type: "success",
                        message: "卡券发放成功!"
                    });
                    this.couponTicket==[{}]
                    this.msgVisible3=false
                    this.couponVisible=false
                    this.getList()
                    this.getCouponList()
                    this.getUserInfo()
                });
    },
    remove(index){
            if(this.couponTicket.length>=2){
            this.couponTicket.splice(index,1)
            }
        },
    add(){
            let i={}
            this.couponTicket.push(i)
        },
    getOrderDetail(){//获取订单详情
      if(this.activeName=='0'){
      this.api({
                    url: "/market/orderDetails",
                    method: "post",
                    data: {
                      orderCode:this.selectOrder.orderCode,
                      userId:this.$route.params.userId,
                    }
                }).then(data => {
                    this.orderInfo=data
                });
      }else{
        this.api({
                    url: "/market/orderDetails",
                    method: "post",
                    data: {
                      ticketId:this.selectOrder.ticketId,
                      userId:this.$route.params.userId
                    }
                }).then(data => {
                    this.orderInfo=data
                });
      }
    },
    showDetail(row){//展示订单详情
      this.selectOrder=row
      this.detailTab='1'
      this.getOrderDetail()
    },
    delCoupon(row){//删除优惠券
      this.selectOrder=row
      this.msgVisible2=true
    },
    checkdelCoupon(){
      this.api({
                    url: "/market/deleteCouponForUser",
                    method: "post",
                    data: {
                      ticketId:this.selectOrder.ticketId
                    }
                }).then(data => {
                    this.$message({
                        type: "success",
                        message: "删除成功!"
                    });
                    this.msgVisible2=false
                    this.getUserInfo()
                    this.getList()
                });
    },
    refuse(row){
      this.msgVisible4=true
      this.selectOrder=row
    },
    doRefuse(){//确认退款
      this.api({
                url: "/order/refund",
                method: "post",
                data: {
                    orderDetailsId:this.selectOrder.orderDetailsId
                }
            }).then(data => {
                this.$message({
                    type: 'success',
                    message: '退款成功'
                })
                this.msgVisible4 = false
                this.getList()
                
            })
    }
  },
  computed: {
        ...mapGetters(["userName","userId"])
    },
}
 
</script>