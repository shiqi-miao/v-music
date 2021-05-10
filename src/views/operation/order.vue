
<style scoped>
.append-input .el-input--suffix{
    width: 80px!important;
}
.upload-img{
    width: 100%;
    /* height: 100%; */
}
.flex-center{
    width: 100%;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
}

.upload-block .el-upload-dragger{
    width: 180px;
    height: 180px;
}
.upload-block-2 .el-upload-dragger{
    width: 200px;
    height: 300px;
}
.grey{
    padding: 10px 6px;
    color:#999999
}
.sku-form{
    padding: 0 30px 
}
.sku-form .el-form-item__label{
  width: 110px!important;
}
.blue{
     color:#66b1ff;
     cursor: pointer;
     padding: 10px 6px;
}
.blue1{
     color:#66b1ff;
     cursor: pointer;
}
.input-with-select{
    width: 50%;
}
.el-select .el-input {
  width: 120px;
}
.create .el-input {
  width: 180px;
}
.el-tooltip__popper[x-placement^=right] .popper__arrow,
.el-tooltip__popper[x-placement^=right] .popper__arrow:after
{
    border-right-color: #ffffff;
}
.el-tooltip__popper[x-placement^=bottom] .popper__arrow,
.el-tooltip__popper[x-placement^=bottom] .popper__arrow:after{
    border-bottom-color: #ffffff;
}
.tooltip-blue{
    background: #ffffff!important;
    border:#66b1ff!important;
    color:#66b1ff!important;
    line-height: 18px;
    font-size: 14px;
}
.hover{
    cursor: pointer;
    /* padding: 10px 20px; */
}
.title-hover{
    cursor: pointer;
}
.red,.danger{
    color:#F56C6C
}
.orange{
    color:orange
}
.note{
    padding: 10px 0;
    color:#888888;
    font-size: 13px;
}
.item-set{
    height: 44px;
    padding: 6px;
    text-align: center;
    line-height: 32px;
}
.name{
    line-height: 36px;
    font-weight: 600;
    text-align: center;
}
.label{
    display: inline-block;
    line-height: 36px;
    font-weight: 600;
}
.stock-num{
    padding: 10px;
    cursor: pointer;
}
.msg{
    padding: 0 6vw;
}
.center{
    text-align: center
}
.brandtype{
    margin-right: 10px;
    background: #ffffff;
    color:#888888;
    cursor: pointer;
}
.brandtype.active{
    background: rgba(64, 158, 255, 0.1);
    color: #409EFF;
    border: 1px solid rgba(64, 158, 255, 0.2);
}
.right{
    text-align: right;
}
.just-between{justify-content: space-between}
.dataCard{width: 49%;height: 18vh;position: relative}
.dataCard .el-card{height: 100%}
.dataCard .innerCard .title{font-weight: 500;margin-bottom: 2vh}
.dataCard .innerCard .date div{width: 33.3333%;cursor: pointer;}
.dataCard .innerCard .num{font-weight: 500;margin-top: 3vh;color: #C21C1C;position:absolute;bottom: 2vh;}
.bigfont{font-size: 40px;line-height: 1}
.smallfont{font-size: 20px;line-height: 1}
.minifont{font-size: 18px;line-height: 1}
.minifont1{font-size: 14px;line-height: 1.5}
.text-center{text-align: center}
.stockDialog{width: 23vw!important;height:23vh!important;padding: 2vh 2vw;color: #333;position: relative}
.stockDialog .title{margin-bottom: 1vh;font-weight: 600}
.stockDialog .word{font-weight: 500;line-height: 1.5}
.stockDialog .syncBox{position: absolute;bottom: 2vh;width: 100%;height: 50%;left: 0}
.stockDialog .bottom{width: 100%;height: 4.5vh;justify-content: space-around;position: absolute;left: 0;bottom: 2vh}
.stockDialog .bottom .btn{cursor: pointer;width: 20%;height:100%;color: #286EFF;border: 1px solid #286EFF;text-align: center;line-height: 4.5vh}
.stockDialog .bottom .btn1{cursor: pointer;width: 20%;height:100%;color: #fff;background:#286EFF;text-align: center;line-height: 4.5vh}

@media screen and (max-width:1680px) {
    .bigfont{font-size: 38px;}
    .smallfont{font-size: 18px;}
    .minifont{font-size: 16px;}
    .minifont1{font-size: 12px;line-height: 1.5}
}
@media screen and (max-width:1440px) {
    .bigfont{font-size: 36px;}
    .smallfont{font-size: 16px;}
    .minifont{font-size: 14px;}
    .minifont1{font-size: 10px;line-height: 1.5}
}
@media screen and (max-width:1280px) {
    .bigfont{font-size: 32px;}
    .smallfont{font-size: 14px;}
    .minifont{font-size: 12px;}
    .minifont1{font-size: 10px;line-height: 1.5}
}
</style>
<style lang="scss">
.stockdialogClass .el-loading-spinner i{color: #999}
.search-line .el-select .el-input{
    width: 160px;
}
#orderInput .el-select .el-input {
  width: 100px;
} 
.el-date-editor .el-range-separator{padding: 0;}
.stockdialogClass .el-dialog__header,.stockdialogClass .el-dialog__body,.stockdialogClass .el-dialog__footer{padding:0}
.stockdialogClass{width: 23vw!important;max-height: 30vh!important}
</style>
<style lang="scss" scoped>
label{
    color:#666666;
    font-size:14px;
    font-weight:600;
}
</style>



<template>
    <div class="app-container">
        <el-tabs v-model="activeName" type="card" @tab-click="changeTab">
            <el-tab-pane label="售货机" name="0">
            </el-tab-pane>
            <el-tab-pane label="支付狗" name="1" v-if="orderDog">
            </el-tab-pane>
            <el-tab-pane label="收银机" name="2" v-if="orderCashier">
            </el-tab-pane>
        </el-tabs>
        <div class="flex-center-E just-between" style="margin-bottom:3vh">
            <div style="width:50%">
                <div id="orderInput"  v-if="activeName!=='2'">
                    <label>订单搜索：</label>
                    <el-input placeholder="请输入内容" v-model="searchValue" class="input-with-select" onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;">
                        <el-select v-model="selectedTab" placeholder="请选择" slot="prepend">
                            <el-option v-for="item in selectTabs" :key="item.id" :label="item.name" :value="item.id">
                            </el-option>
                        </el-select>
                    </el-input>
                </div>
                <br>
                <div>
                    <label>创建时间：</label>
                    <el-date-picker
                    class="input-with-date"
                    v-model="params.times"
                    type="daterange"
                    range-separator=" 至 "
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                    value-format="yyyy-MM-dd"
                    >
                    </el-date-picker>
                </div>
                <br>
                <div class="search-line">
                    <label v-if="activeName!=='2'">订单状态：</label>
                    <el-select v-if="activeName!=='2'" v-model="params.isPay" placeholder="请选择" clearable>
                        <el-option v-for="item in orderSelectTabs" :key="item.id" :label="item.name" :value="item.id">
                        </el-option>
                    </el-select>
                    <label>支付方式：</label>
                    <el-select v-if="activeName!=='2'" v-model="params.payType" placeholder="请选择" clearable>
                        <el-option v-for="item in paySelectTabs" :key="item.id" :label="item.name" :value="item.id">
                        </el-option>
                    </el-select>
                    <el-select v-else v-model="params.payType" placeholder="请选择" clearable>
                        <el-option v-for="item in paySelectTabs2" :key="item.id" :label="item.name" :value="item.id">
                        </el-option>
                    </el-select>
                    <br><br>
                    <label v-if="activeName!=='2'">消费设备：</label>
                        <el-cascader
                            v-model="params.storeData"
                            :options="storeSelectTabs"
                            :props="props"
                             @change="selectMachine"
                              clearable
                            >
                        </el-cascader>
                    <!-- <el-select v-if="activeName!=='2'" v-model="params.storeCode" placeholder="请选择" clearable @change="selectMachine">
                        <el-option v-for="item in storeSelectTabs" :key="item.storeCode" :label="item.storeName" :value="item.storeCode">
                        </el-option>
                    </el-select>
                    <label v-if="machineSelectTabs.length>0">消费机器：</label>
                    <el-select v-if="machineSelectTabs.length>0" v-model="params.machineCode" placeholder="请选择" clearable>
                        <el-option v-for="item in machineSelectTabs" :key="item.machineCode" :label="item.typeName" :value="item.machineCode">
                        </el-option>
                    </el-select> -->
                    <label>申诉情况：</label>
                    <el-select v-model="params.orderType" placeholder="请选择" clearable>
                        <el-option v-for="item in typeList" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <div :style="activeName=='1' ? 'width:15%;height:18vh;position:relative' : 'width:15%;height:12vh;position:relative'"><el-button type="primary" v-if="activeName=='1'" style="" @click="syncVisible=true">收银机订单同步</el-button><el-button style="position:absolute;bottom:0;left:0" type="primary" icon="el-icon-search" @click="search">搜 索</el-button></div>
            <div v-if="activeName=='1'" style="width:35%;justify-content:space-between" class="flex-center-Y">
                <div class="dataCard">
                    <el-card>
                        <div class="innerCard">
                            <div class="title smallfont">近期收款额 (元)</div>
                            <div class="flex-center-Y date minifont">
                                <div v-for="(item,index) in dateLiist" :key="index" :class="item.isActive ? 'blue1' : ''" @click="changeDate(item,index)">{{item.name}}</div>
                            </div>
                            <div class="num bigfont">{{analyData.allNum}}</div>
                        </div>
                    </el-card>
                </div>
                <div class="dataCard">
                    <el-card>
                        <div class="innerCard">
                            <div class="title smallfont">筛选条件收款额 (元)</div>
                            <div class="date minifont1">*根据您的筛选条件得出的订单收款总额</div>
                            <div class="num bigfont">{{analyData.otherNum}}</div>
                        </div>
                    </el-card>
                </div>
            </div>
        </div>
        
        <el-table v-show="activeName=='0'" :data="tableData" ref="refTable" @row-click="clickTable" stripe style="width: 100%" v-loading.body="listLoading" element-loading-text="拼命加载中" row-key="orderCode" :expand-row-keys="expands" @expand-change="expandChange">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-table :data="props.row.skuList" stripe style="width: 100%" >
                        <el-table-column prop="goodsName" label="SKU名称" style="width: 18%" align="center"></el-table-column>
                        <el-table-column label="原价" style="width: 18%" align="center">
                            <template slot-scope="scope">
                                    ¥ {{scope.row.originPrice}}
                            </template> 
                        </el-table-column>
                        <el-table-column prop="placeOrigin" label="促销" style="width: 18%" align="center">
                            <template slot-scope="scope">
                                    {{scope.row.orderType}}
                            </template> 
                        </el-table-column>
                        <el-table-column label="促销价" style="width: 18%" align="center">
                            <template slot-scope="scope">
                                    ¥ {{scope.row.discPrice}}
                            </template> 
                        </el-table-column>
                        <!-- <el-table-column prop="soldNumber" label="优惠券" style="width: 18%" align="center"></el-table-column> -->
                        <el-table-column prop="todSoldNumber" label="光ID支付" style="width: 18%" align="center">
                          <template slot-scope="scope">
                                <span v-if="scope.row.flashKey == 'N'">否</span>
                                <span v-else>是</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="yesSoldNumber" label="实际支付" style="width: 18%" align="center">
                            <template slot-scope="scope">
                                    ¥ {{scope.row.payPrice}}&nbsp;<span v-if="scope.row.refund !== 'N'" style="color:#ff1b11">(已退)</span>
                            </template> 
                        </el-table-column>
                        <el-table-column prop="gmtCreated" label="闪光时间" width="170" align="center"></el-table-column>
                        <el-table-column label="操作" width="100" align="center">
                            <template slot-scope="scope">
                                <span v-if="scope.row.refund == 'N' && scope.row.isPay=='1'" @click="showRefund(scope.row,props.row)" class="blue">退款</span>
                                <span v-if="scope.row.refund !== 'N'" @click="showDetail(scope.row,props.row)" class="blue">查看退款</span>
                            </template>
                        </el-table-column>
                    </el-table>
                </template>
            </el-table-column>
            <el-table-column prop="orderCode" label="订单号" style="width: 18%" align="center"></el-table-column>
            <el-table-column prop="userPhone" label="手机号" style="width: 18%" align="center"></el-table-column>
            <el-table-column prop="storeName" label="消费门店" style="width: 18%" align="center"></el-table-column>
            <el-table-column label="订单总金额" style="width: 18%" align="center">
                <template slot-scope="scope">
                    ¥ {{scope.row.discPrice}}
                    <span v-if="scope.row.preferentialPrice!=0">（含优惠 - ¥ {{scope.row.preferentialPrice}}）</span>
                </template> 
            </el-table-column>
            <!-- <el-table-column label="实需支付" style="width: 18%" align="center">
                <template slot-scope="scope">
                    ¥ {{scope.row.payNeedPrice}}
                </template> 
            </el-table-column> -->
            <el-table-column label="实际支付" style="width: 18%" align="center">
                <template slot-scope="scope">
                    ¥ {{scope.row.payPrice}}
                </template> 
            </el-table-column>
            <el-table-column label="申诉情况" style="width: 18%" align="center">
                <template slot-scope="scope">
                    <span v-if="scope.row.complainStatus=='无'" @click="toDetail(scope.row)">无</span> 
                    <span v-if="scope.row.complainStatus=='未处理'" class="red" style="cursor:pointer" @click="toDetail(scope.row)">未处理</span> 
                    <span v-if="scope.row.complainStatus=='已处理'" class="orange" style="cursor:pointer" @click="toDetail(scope.row)">已处理</span> 
                </template> 
            </el-table-column>
            <el-table-column label="退款金额" style="width: 18%" align="center">
                <template slot-scope="scope">
                   <span v-if="scope.row.refundCount > 0">¥ {{scope.row.refuPrice}}</span><span v-else>--</span> 
                </template> 
            </el-table-column>
            <el-table-column prop="payType" label="支付渠道" style="width: 18%" align="center"></el-table-column>
            <el-table-column prop="paySource" label="支付来源" style="width: 18%" align="center"></el-table-column>
            <el-table-column label="支付状态" style="width: 18%" align="center">
                <template slot-scope="scope">
                    <span v-if="scope.row.refundCount > 0" class="orange"> 有退款</span>
                    <span v-else :class="{'danger':scope.row.isPayStatus == 0,'danger':scope.row.isPayStatus == -1,'orange':scope.row.isPayStatus == 2}">{{scope.row.isPay}}</span>
                </template>    
            </el-table-column>
            <el-table-column prop="gmtCreated" label="创建时间" width="170" align="center"></el-table-column>
        </el-table>
        <el-table v-show="activeName=='1'" :data="tableDataB" ref="refTable1" @row-click="clickTable" stripe style="width: 100%" v-loading.body="listLoading" element-loading-text="拼命加载中" row-key="orderCode" :expand-row-keys="expands" @expand-change="expandChange">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-table :data="props.row.skuList" stripe style="width: 100%">
                        <el-table-column prop="skuCode" label="sku编号" style="width: 18%" align="center"></el-table-column>
                        <el-table-column prop="skuName" label="SKU名称" style="width: 18%" align="center"></el-table-column>
                        <el-table-column label="原价" style="width: 18%" align="center">
                            <template slot-scope="scope">
                                    ¥ {{scope.row.originPrice}}
                            </template> 
                        </el-table-column>
                        <el-table-column label="促销价" style="width: 18%" align="center">
                            <template slot-scope="scope">
                                    ¥ {{scope.row.discPrice}}
                            </template> 
                        </el-table-column>
                        <el-table-column prop="yesSoldNumber" label="实际支付" style="width: 18%" align="center">
                            <template slot-scope="scope">
                                    ¥ {{scope.row.payPrice}}
                            </template> 
                        </el-table-column>
                        <el-table-column prop="payType" label="支付方式" style="width: 18%" align="center"></el-table-column>
                        <el-table-column prop="gmtCreated" label="支付时间" width="170" align="center"></el-table-column>
                    </el-table>
                </template>
            </el-table-column>
            <el-table-column prop="orderCode" label="订单号" style="width: 18%" align="center"></el-table-column>
            <el-table-column prop="userPhone" label="手机号" style="width: 18%" align="center"></el-table-column>
            <el-table-column prop="storeName" label="消费门店" style="width: 18%" align="center"></el-table-column>
            <el-table-column prop="machineName" label="设备名称(设备编号)" style="width: 18%" align="center">
                <template slot-scope="scope">
                    {{scope.row.machineName}}({{scope.row.machineCode}})
                </template> 
            </el-table-column>
            <el-table-column label="实需支付" style="width: 18%" align="center">
                <template slot-scope="scope">
                    ¥ {{scope.row.payNeedPrice}}
                    <span v-if="scope.row.preferentialPrice!=0">（含优惠 - ¥ {{scope.row.preferentialPrice}}）</span>
                </template> 
            </el-table-column>
            <el-table-column label="实际支付" style="width: 18%" align="center">
                <template slot-scope="scope">
                    ¥ {{scope.row.payPrice}}
                </template> 
            </el-table-column>
            <el-table-column label="退款金额" style="width: 18%" align="center">
                <template slot-scope="scope">
                   <span v-if="scope.row.refundCount > 0">¥ {{scope.row.refuPrice}}</span><span v-else>--</span> 
                </template> 
            </el-table-column>
            <el-table-column prop="payType" label="支付方式" style="width: 18%" align="center"></el-table-column>
            <!-- <el-table-column prop="payType" label="光ID支付" style="width: 18%" align="center"></el-table-column> -->
            <el-table-column label="支付状态" style="width: 18%" align="center">
                <template slot-scope="scope">
                    <span v-if="scope.row.refundCount > 0" class="orange"> 有退款</span>
                    <span v-else :class="{'danger':scope.row.isPayStatus == 0,'danger':scope.row.isPayStatus == -1,'orange':scope.row.isPayStatus == 2}">{{scope.row.isPay}}</span>
                </template>    
            </el-table-column>
            <el-table-column prop="clearStatus" label="清分记账状态" style="width: 18%" align="center"></el-table-column>
            <el-table-column prop="gmtCreated" label="创建时间" width="170" align="center"></el-table-column>
            <el-table-column label="操作" width="100" align="center">
                <template slot-scope="scope">
                    <span v-if="scope.row.isPayStatus=='1' && scope.row.payPrice>0"  @click="dogRefund(scope.row)" class="blue">退款</span>
                </template>
            </el-table-column>
        </el-table>
        <el-table v-show="activeName=='2'" :data="tableDataC" ref="refTable2" stripe style="width: 100%" v-loading.body="listLoading" element-loading-text="拼命加载中">
            <el-table-column prop="skuCode" label="sku编号" style="width: 18%" align="center"></el-table-column>
            <el-table-column prop="skuName" label="SKU名称" style="width: 18%" align="center"></el-table-column>
            <el-table-column label="原价" style="width: 18%" align="center">
                <template slot-scope="scope">
                        ¥ {{scope.row.originPrice}}
                </template> 
            </el-table-column>
            <el-table-column label="促销价" style="width: 18%" align="center">
                <template slot-scope="scope">
                        ¥ {{scope.row.discPrice}}
                </template> 
            </el-table-column>
            <el-table-column prop="yesSoldNumber" label="实际支付" style="width: 18%" align="center">
                <template slot-scope="scope">
                        ¥ {{scope.row.payPrice}}
                </template> 
            </el-table-column>
            <el-table-column prop="payType" label="支付方式" style="width: 18%" align="center"></el-table-column>
            <el-table-column prop="gmtCreated" label="支付时间" width="170" align="center"></el-table-column>
        </el-table>
        <div class="pagination-line">
            <el-pagination background
                @size-change="handleSizeChange"
                @current-change="currentChange"
                :current-page="params.pageNum"
                :page-size="params.pageRow"
                :total="totalCount"
                :page-sizes="[10, 20, 50, 100]"
                layout="total, sizes, prev, pager, next, jumper">
            </el-pagination> 
        </div>
        <el-dialog title="订单退款" :visible.sync="refundDialogVisible" width="36%">
            <el-form class="small-space" label-position="left" label-width="100px">
                <el-form-item label="订单号：">{{skuData.orderCode}}</el-form-item>
                <el-form-item label="退款SKU：">{{skuData.skuName}}</el-form-item>
                <!-- <el-form-item label="优惠券：">{{skuData.orderCode}}</el-form-item> -->
                <el-form-item label="实际支付：">¥ {{skuData.payPrice}}</el-form-item>
                <el-form-item label="支付方式：">{{skuData.payType}}</el-form-item>
                <el-form-item label="退款项目：">优惠券+实付金额（原路返回）</el-form-item>
                <el-form-item label="退款原因：" required>
                    <el-select v-model="skuData.rufundType" placeholder="请选择退款原因">
                        <el-option
                        v-for="item in refundTabs"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="其他原因：" required v-if="skuData.rufundType=='D'">
                    <el-input type="text" v-model="skuData.rufundDetails">
                    </el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="refundDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="doRefund" :loading="reqLoading">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog title="订单退款-已退款" :visible.sync="detailDialogVisible" width="36%">
            <el-form class="small-space" label-position="left" label-width="100px">
                <el-form-item label="订单号：">{{skuData.orderCode}}</el-form-item>
                <el-form-item label="退款SKU：">{{skuData.skuName}}</el-form-item>
                <!-- <el-form-item label="优惠券：">{{skuData.orderCode}}</el-form-item> -->
                <el-form-item label="实际支付：">¥ {{skuData.payPrice}}</el-form-item>
                <el-form-item label="支付方式：">{{skuData.payType}}</el-form-item>
                <el-form-item label="退款项目：">优惠券+实付金额（原路返回）</el-form-item>
                <el-form-item label="退款原因：">
                    {{skuData.rufundDetails}}
                </el-form-item>
                <el-form-item label="其他原因：" v-if="skuData.rufundDetails">
                    {{skuData.rufundDetails}}
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="detailDialogVisible = false">取 消</el-button>
                <!-- <el-button type="primary" @click="editGoods">确 定</el-button> -->
            </span>
        </el-dialog>
        <!-- 收银机订单同步的弹框 -->
        <el-dialog
            :visible.sync="syncVisible"
            :close-on-click-modal="false"
            :show-close="false"
            custom-class="stockdialogClass"
            width="23vw"
            center>
            <div class="stockDialog">
                <div v-if="!isSync" class="word smallfont">
                    是否确认立即同步收银机订单详情? 若数据过多则同步时间可能较长,同步过程中您将无法操作后台相关其他功能。
                </div>
                <div class="word smallfont text-center" style="margin-top:2vh" v-else>
                    收银机订单详情同步中<br>
                    请稍后...
                </div>
                 <div v-if="!isSync" class="bottom flex-center-Y" style="margin-top:10vh">
                    <div class="btn smallfont" @click="syncVisible=false">取消</div>
                    <el-button style="padding:0;border-radius:0" class="btn1 smallfont" @click="saveSync">确定</el-button>
                </div>
                <div v-else v-loading="syncLoading" element-loading-background="transparent" element-loading-spinner="el-icon-loading" class="syncBox bigfont">
                </div>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            dateLiist:[{name:"今日",id:"T",isActive:true},{name:"近7天",id:"W",isActive:false},{name:"近30天",id:"M",isActive:false}],
            selectDate:"T",
            analyData:{allNum:"0.00",otherNum:"0.00"},
            activeName:"0",
            listLoading:false,
            totalCount:0,
            searchValue:'',
            selectedTab:"userPhone",
            selectTabs:[
                {
                    name:"手机号",
                    id:"userPhone"
                },    
                {
                    name:"订单号",
                    id:"orderCode"
                },
            ],    
            typeList:[
                {label:"无",value:0},
                {label:"未处理",value:1},
                {label:"已处理",value:2}
            ],               
            tableData:[],
            tableDataB:[],
            tableDataC:[],
            params:{
                pageRow:20,
                pageNum:1,
                times:[],
                params:""
            },
            detailDialogVisible:false,
            refundDialogVisible:false,
            syncLoading:true,
            syncVisible:false,
            isSync:false,//是否同步完成
            skuData:{},
            orderData:{},
            expands: [],
            reqLoading:false,
            activeTab:"0",
            orderSelectTabs:[
                {
                    name:'未支付',
                    id:'0'
                },
                {
                    name:'已支付',
                    id:'1'
                },
                {
                    name:'支付等待',
                    id:'2'
                },
                {
                    name:'有退款',
                    id:'R'
                },
            ],
            paySelectTabs:[
                {
                    name:'支付宝',
                    id:'Z'
                },
                {
                    name:'微信',
                    id:'W'
                },
                {
                    name:'银联',
                    id:'Y'
                },
                {
                    name:'红包付',
                    id:'1'
                },
            ],
            paySelectTabs2:[
                {
                    name:'支付宝',
                    id:'Z'
                },
                {
                    name:'微信',
                    id:'W'
                },
                {
                    name:'闪光付',
                    id:'F'
                },
                {
                    name:'现金',
                    id:'C'
                },
            ],
            storeSelectTabs:[],
            machineSelectTabs:[],
            refundTabs:[
                {
                    name:'没有掉货',
                    id:'A'
                },
                {
                    name:'商品损坏',
                    id:'B'
                },
                {
                    name:'系统出错',
                    id:'C'
                },
                {
                    name:'其他',
                    id:'D'
                },
            ],
            orderDog:false,//是否显示支付狗账单
            orderCashier:false,//是否显示收银机账单
            props:{value:"storeCode",label:"storeName",children:"vendInfo"},

        }
    },
    created(){
        this.getList()
        this.getTypeList()
        this.getAllData()
    },
    computed: {
        ...mapGetters([
            'userName',
            'userId'
        ])
    },
    methods:{
        toDetail(row){//跳转该订单的详情页(用户详情-用户订单-订单详情)
            this.$router.push({ path: "/markting/userDetail/"+ row.userId+'/'+row.orderCode});
            // this.api({
            //             url: "/market/updateComplain",
            //             method: "post",
            //             data: {
            //                 orderCode:row.orderCode,
            //                 orderDetailsId:row.orderDetailsId
            //             }
            //         }).then(data => {
            //             this.$router.push({ path: "/markting/userDetail/"+ row.userId+'/'+row.orderCode});
            //         }).catch(data => {
            //         });
            
        },
        saveSync(){//确定同步数据
            this.isSync=true
            this.api({
                        url: "/order/synchronizationCash",
                        method: "post",
                        data: {}
                    }).then(data => {
                        this.isSync=false
                        this.syncVisible=false
                        this.$message({
                            type: 'success',
                            message: '同步成功!'
                        });
                        this.getList()
                    }).catch(data => {
                        this.isSync=false
                        this.syncVisible=false
                    });
            
        },
        getAllData(){
            this.api({
                        url: "/order/cashierOrderStatistics",
                        method: "post",
                        data: {
                            timeType:this.selectDate,
                            manageId:this.userId
                            }
                    }).then(data => {
                        this.analyData.allNum=data
                    });
        },
        changeDate(item,index){
            for(let i in this.dateLiist){
                this.dateLiist[i].isActive=false
            }
            this.selectDate=item.id
            this.dateLiist[index].isActive=true
            this.dateLiist=JSON.parse(JSON.stringify(this.dateLiist))
            this.getAllData()
        },
        changeTab(){
            this.params={pageRow:20,pageNum:1,times:[]}
            this.getList()
            },
         clickTable(row,index,e){//点击行就展开
            //调用,table的方法,展开/折叠 行
            if(this.activeName=='0'){
            this.$refs.refTable.toggleRowExpansion(row)
            }else{
                this.$refs.refTable1.toggleRowExpansion(row)
            }
        },
        dogRefund(row){
            this.$confirm('是否确认退款?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.api({
                        url: "/order/cashierRefund",
                        method: "post",
                        data: {
                            orderDetailsId:row.orderDetailsId
                            }
                    }).then(data => {
                        this.$message({
                            type: 'success',
                            message: '退款成功!'
                        });
                        this.getList()
                    });
                }).catch(() => {         
                });
        },
        doRefund(){
            if(!this.skuData.rufundType){
                this.$message({
                    type: 'warning',
                    message: '请选择退款原因！'
                })
                return
            }
            if(this.skuData.rufundType == 'D' && !this.skuData.rufundDetails){
                this.$message({
                    type: 'warning',
                    message: '请输入其他原因！'
                })
                return
            }
            this.reqLoading=true
            this.api({
                url: "/order/refund",
                method: "post",
                data: {
                    orderDetailsId:this.skuData.orderDetailsId,
                    trailsId:this.skuData.trailsId,
                    deviceid:this.skuData.deviceid,
                    rufundType:this.skuData.rufundType,
                    rufundDetails:this.skuData.rufundDetails || ''
                }
            }).then(data => {
                this.reqLoading=false
                this.$message({
                    type: 'success',
                    message: '退款成功'
                })
                this.refundDialogVisible = false
                this.getList(this.params)
                
            }).catch(data => {
                    this.reqLoading = false;
                });
        },
        showDetail(row,props){
            this.orderData = props
            this.api({
                url: "/order/showRefundDetails",
                method: "post",
                data: {
                    orderCode:row.orderCode,
                    skuCode:row.skuCode,
                    orderDetailsId:row.orderDetailsId
                }
            }).then(data => {
                this.skuData = data
                for(let i in this.refundTabs){
                    if(this.refundTabs[i].id == data.rufundType){
                        this.skuData.rufundName = this.refundTabs[i].name 
                    }
                }
                this.detailDialogVisible = true
            })
        },
        showRefund(row,props){
            this.orderData = props
            this.api({
                url: "/order/showRefundDetails",
                method: "post",
                data: {
                    orderCode:row.orderCode,
                    skuCode:row.skuCode,
                    orderDetailsId:row.orderDetailsId
                }
            }).then(data => {
                this.skuData = data
                this.skuData.orderDetailsId = row.orderDetailsId
                this.refundDialogVisible = true
            })
        },
        expandChange(row, expandedRows) {
            //每次只能展开一行
            var that = this
            if (expandedRows.length) {
              that.expands = []
              if (row) {
                that.expands.push(row.orderCode)
              }
            } else {
              that.expands = []
            }
            //每次只能展开一行
            if(this.activeName=='0'){
            this.api({
                url: "/order/orderdetailslist",
                method: "get",
                params: {
                    orderCode:row.orderCode
                }
            }).then(data => {
                this.$set(row,'skuList',data)
            })
            }else if(this.activeName=='1'){
                this.api({
                    url: "/order/showBillDetails",
                    method: "post",
                    data: {
                        posOrder:row.posOrder
                    }
                }).then(data => {
                    this.$set(row,'skuList',data)
                })
            }
        },
        handleSizeChange(val){
            this.params.pageRow = val
            this.getList(this.params)
        },
        currentChange(index){
            this.params.pageNum = index
            this.getList(this.params)
        },
        prevClick(index){
            this.params.pageNum = index
            this.getList(this.params)
        },
        nextClick(index){
            this.params.pageNum = index
            this.getList(this.params)
        },
        search(){
            for(let i in this.selectTabs){
                if(this.selectedTab == this.selectTabs[i].id){
                    this.params[this.selectedTab] = this.searchValue
                }else{
                    let id = this.selectTabs[i].id
                    this.params[id] =''
                }
            }

            if(this.params.times && this.params.times.length == 2){
                this.params.startTime = this.params.times[0]
                this.params.endTime = this.params.times[1]
            }
            if(!this.params.times){
                this.params.startTime=''
                this.params.endTime =''
            }
            this.params.complainStatus=this.params.orderType
            this.getList(this.params)
        },
        getList(params) {
            this.listLoading = true;
            this.params.username=this.userName
            if(this.$route.params.complainStatus=='1'){
                this.params.complainStatus=this.$route.params.complainStatus
            }
            if(this.activeName=='0'){
            this.api({
                url: "/order/orderlist",
                method: "post",
                data: params || this.params
            }).then(data => {
                this.listLoading = false;
                for(let i in data.returnData.list){
                    data.returnData.list[i].skuList = []
                }
                this.orderDog=data.orderDog
                this.orderCashier=data.orderCashier
                this.tableData = data.returnData.list;
                this.totalCount = data.returnData.totalCount
                this.expands = []
            })
            }else if(this.activeName=='1'){
                this.api({
                    url: "/order/cashierOrderList",
                    method: "post",
                    data: params || this.params
                }).then(data => {
                    this.listLoading = false;
                    this.tableDataB = data.list;
                    this.analyData.otherNum=data.priceSum
                    this.totalCount = data.totalCount
                })
            }else{
                this.api({
                    url: "/order/showCashierDetails ",
                    method: "post",
                    data: params || this.params
                }).then(data => {
                    this.listLoading = false;
                    this.tableDataC = data.list;
                    // this.analyData.otherNum=data.priceSum
                    this.totalCount = data.totalCount
                })
            }
        },
        getTypeList(){
          this.api({
              url: "/order/showStore",
              method: "post", 
              data:{
                  username:this.userName
              }
            }).then(data => {
                this.storeSelectTabs =  data
                for(let i in this.storeSelectTabs){
                    for(let key in this.storeSelectTabs[i].vendInfo){
                        this.storeSelectTabs[i].vendInfo[key].storeName=this.storeSelectTabs[i].vendInfo[key].machineName
                        this.storeSelectTabs[i].vendInfo[key].storeCode=this.storeSelectTabs[i].vendInfo[key].machineCode
                    }
                }
            }).catch((e)=>{

            })
        },
        getMachineList(){
          this.api({
              url: "/order/showMachine",
              method: "post", 
              data:{
                  storeCode:this.params.storeCode
              }
            }).then(data => {
                this.machineSelectTabs =  data

            }).catch((e)=>{

            })
        },
        selectMachine(){
            this.params.storeCode=this.params.storeData[0]
            this.params.machineCode=this.params.storeData[1]
        },
        toCreateType(){
            this.$router.push({path: '/sku'})
        },
    }
}
</script>

