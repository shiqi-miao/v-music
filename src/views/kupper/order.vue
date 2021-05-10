<style lang="scss" scoped>
#baristaOrder{
    font-size: 14px;
        background: #F2F4F8;
        border: 1px solid #E2E5EB;
        .content{
            min-height: 80vh;
            background: #fff;
            border: 1px solid #E2E5EB;
            padding: 20px;
            padding-top: 10px;
        }
    }
    .top{
        height: 185px;
        border: 1px solid #E2E5EB;
        border-bottom: 0;
        background: #fff;
        padding: 20px;
        .select{margin: 0 20px;width: 120px;}
        .input{
            width: 240px;
            margin-bottom: 20px;
        }
    }
    .blue {
        color: #5A9DF8;
        cursor: pointer;
        padding: 10px 6px;
    }
    .pointer{cursor: pointer;}
    .btn{width:100px;height: 32px;line-height: 32px;color: #fff;background:#409EFF;text-align: center;cursor: pointer;border-radius:4px;font-size:14px;justify-content: center;}
    .btn1{width:100px;height: 32px;line-height: 32px;color:#409EFF;text-align: center;cursor: pointer;border-radius:4px;font-size:14px;border: 1px solid #409EFF;margin-right:60px}
    .btn2,.btn2-no{width:120px;height: 32px;line-height: 32px;color:#409EFF;text-align: center;cursor: pointer;border-radius:4px;font-size:14px;border: 1px solid #409EFF;padding: 0;}
    .btn2-no{border-color: #999;color:#999;cursor: no-drop;}
    .H-100{height: 100%}
    .img{width: 50px;height: 50px;border-radius: 50%}
    .backSelect{background: #4A90E2}
    .backNoSelect{background: #D8D8D8}
    .addBtn{padding: 1.25vh 1.3vh;font-size: 0.9375vw;position: absolute;right: 0;top: 0;background-color: #286EFF;width: 7vw;height: 4.63vh;}
    .W-50{width: 50%}
    .right{right: 0}
    .text-right{text-align: right}
    .text-center{text-align: center}
    .bold{font-weight: bold} 
    .line-height-0{line-height: 0}
</style>
<style scoped>
    div >>> .el-timeline{padding-inline-start: 0;}
    div >>> .el-timeline-item__content{width: 250px;}
</style>
<style>
    .userdialogClass .el-dialog__header,.userdialogClass .el-dialog__body,.userdialogClass .el-dialog__footer{padding:0}
    .userdialogClass .el-dialog__headerbtn{display: none;}
    .userdialogClass{padding: 30px 60px;}
    .userdialogClass .title{font-size: 16px;text-align: center;margin-bottom: 32px;line-height:1.5}
    .userTableStyle{color: #333}
    .userTableStyle th>.cell{font-weight: 400}
    .userTableStyle{color: #333;height: 75px;padding: 0!important}
    #baristaOrder .el-input.is-disabled .el-input__inner{color: #333}
    #baristaOrder .el-input__inner{height:32px;line-height: 32px;}
    #baristaOrder .el-input__suffix{line-height: 32px;cursor:pointer;right: 10px;padding-left: 10px;border-left: 1px solid #DCDFE6;}
    #baristaOrder .select .el-input__suffix,#baristaOrder .select .el-input__icon{border: 0;padding: 0;}
    #baristaOrder .el-input__icon{line-height:32px;border-left: 1px solid #C0C4CC;padding-left: 5px;}
    #baristaOrder .el-card__body{height: 100%;padding: 0}
    #baristaOrder .el-upload{width: 100%;height: 100%}
    #baristaOrder .el-dialog__header,#baristaOrder .el-dialog__body,#baristaOrder .el-dialog__footer{padding:0}
    #baristaOrder .el-checkbox__inner{border-radius: 50%}
    #baristaOrder .el-input__suffix,#baristaOrder .el-input__icon{line-height: 32px;}
    .operatorTableStyle{color: #333}
    .operatorTableStyle th>.cell{font-weight: 600}
    #baristaOrder .el-tabs{width: 212px;}
    .el-message-box__headerbtn{z-index: 10}
    #baristaOrder .el-tabs__item{
        font-size: 14px;
        height: 40px;
        line-height: 40px;
        width: 105px;
        text-align: center;
    }
</style>
<template>
    <div class="app-container" id="baristaOrder">
        <div class="top">
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                <el-tab-pane label="商城订单" name="0"></el-tab-pane>
                <el-tab-pane label="咖啡师预约" name="1"></el-tab-pane>
            </el-tabs>
            <div class="input">
                <el-input v-if="activeName=='0'" placeholder="请输入手机号" v-model="searchValue" @input="params.pageNum=1;getList()">
                    <i
                        class="el-icon-search"
                        slot="suffix"
                        @click="params.pageNum=1;getList()">
                    </i>
                </el-input>
                <el-input v-if="activeName=='1'" placeholder="请输入手机号" v-model="searchValue" @input="params.pageNum=1;getList()">
                    <i
                        class="el-icon-search"
                        slot="suffix"
                        @click="params.pageNum=1;getList()">
                    </i>
                </el-input>
            </div>
            <div class="flex-center-Y">
                <div>订单状态</div> 
                <div class="select" v-if="activeName=='0'">
                    <el-select v-model="params.deliveryStatus" placeholder="请选择">
                        <el-option
                        label="查看所有"
                        value="">
                        </el-option>
                        <el-option
                        label="待付款"
                        value="D">
                        </el-option>
                        <el-option
                        label="待发货"
                        value="W">
                        </el-option>
                        <el-option
                        label="已发货"
                        value="Y">
                        </el-option>
                        <el-option
                        label="已完成"
                        value="Q">
                        </el-option>
                        <el-option
                        label="已取消"
                        value="S">
                        </el-option>
                    </el-select>
                </div>
                <div class="select" v-if="activeName=='1'">
                    <el-select v-model="params.appointmentStatus" placeholder="请选择">
                        <el-option
                        label="查看所有"
                        value="">
                        </el-option>
                        <el-option
                        label="未开始"
                        value="WAIT">
                        </el-option>
                        <el-option
                        label="已结束"
                        value="END">
                        </el-option>
                    </el-select>
                </div>
                <div class="btn" @click="params.pageNum=1;getList()">搜索</div>
            </div>
            
        </div>
        <div class="content">
            <el-table
                    v-show="activeName=='0'"
                    ref="table"
                    header-row-class-name="userTableStyle" 
                    cell-class-name="userCellStyle"
                    :data="tableData"
                    style="width: 100%"
                    :loading='loading'>
                    <el-table-column
                        prop="acceptName"
                        label="收件人"
                        align="center"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="acceptPhone"
                        label="手机号"
                        align="center"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="orderLocation"
                        label="收件地址"
                        align="center"
                        min-width="10%">
                        <!-- <template slot-scope="scope">{{scope.row.shengName}}{{scope.row.shiName}}{{scope.row.quName}}{{scope.row.detailsAddress}}</template> -->
                    </el-table-column>
                    <el-table-column
                        prop="manPhone"
                        label="商品详情"
                        align="center"
                        min-width="10%">
                        <template slot-scope="scope">
                            <div v-for="(item,i) in scope.row.orderDetailsList" :key="i">{{item.skuName}}&nbsp;*&nbsp;{{item.skuNum}}件</div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="totalValue"
                        label="应付合计"
                        align="center"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="totalFee"
                        label="邮费"
                        align="center"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="payPrice"
                        label="实付款"
                        align="center"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="mark"
                        label="备注"
                        align="center"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="deliveryStatus"
                        label="订单状态"
                        align="center"
                        min-width="10%">
                    <template slot-scope="scope">
                        <span>{{scope.row.isPay=='-1'?'订单取消':(scope.row.deliveryStatus=='Y'?'已发货':'未发货')}}</span>
                    </template>
                    </el-table-column>
                    <el-table-column
                        prop="gmtCreated"
                        label="下单时间"
                        align="center"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="gmtModified"
                        label="发货时间"
                        align="center"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="gmtModified"
                        label="物流信息"
                        align="center"
                        min-width="10%">
                        <template slot-scope="scope">
                            <el-popover
                            placement="top-start"
                            trigger="click"
                            >
                                <div>
                                    <el-timeline>
                                        <el-timeline-item
                                        v-for="(activity, index) in activities"
                                        :key="index"
                                        :timestamp="activity.actionTime">
                                        <div style="font-weight:bold">{{activity.actionMsg}}</div>
                                        {{activity.action_msg}}
                                        </el-timeline-item>
                                    </el-timeline>
                                </div>
                                <div slot="reference" @click="showLogic(scope.row)" class="pointer blue">查看</div>
                            </el-popover>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" align="center" min-width="10%">
                        <template slot-scope="scope">
                                <span
                                    v-if="scope.row.deliveryStatus=='W'"
                                    class="blue"
                                    @click="comfirmVisible=true;selectData=scope.row">   
                                    确认发货
                                </span>
                                <!-- <span
                                    class="blue"
                                    @click="delVisible=true;selectData=scope.row">
                                    删除
                                </span> -->
                        </template>
                    </el-table-column>
            </el-table>
            <el-table
                    v-show="activeName=='1'"
                    ref="tableB"
                    header-row-class-name="userTableStyle" 
                    cell-class-name="userCellStyle"
                    :data="tableDataB"
                    style="width: 100%"
                    :loading='loading'>
                    <el-table-column
                        prop="userName"
                        label="联系人"
                        align="center"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="userPhone"
                        label="手机号"
                        align="center"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="userLocation"
                        label="服务地址"
                        align="center"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="kUserName"
                        label="咖啡师"
                        align="center"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="serviceContent"
                        label="服务内容"
                        align="center"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="serviceStartTime"
                        label="服务时间"
                        align="center"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="remark"
                        label="备注"
                        align="center"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="appointmentStatus"
                        label="订单状态"
                        align="center"
                        min-width="10%">
                        <template slot-scope="scope">
                            <span v-if="scope.row.appointmentStatus=='WAIT'">未完成</span>
                            <span v-else>已完成</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" align="center" min-width="10%">
                        <template slot-scope="scope">
                                <span
                                    class="blue"
                                    v-if="scope.row.appointmentStatus=='WAIT'"
                                    @click="getVisible=true;selectData=scope.row">
                                    安排
                                </span>
                                <span v-else>已安排</span>
                                <span
                                    class="blue"
                                    @click="delVisible=true;selectData=scope.row">
                                    删除
                                </span>
                        </template>
                    </el-table-column>
            </el-table>
            <div class="pagination-line">
                <el-pagination background
                            @current-change="currentChange"
                            :current-page="params.pageNum"
                            :page-size="params.pageRow"
                            :total="totalCount"  
                            layout="prev,pager, next">
                </el-pagination>
            </div>
        </div>
        <el-dialog :visible.sync="comfirmVisible" width="400px" center custom-class='userdialogClass'>
            <div class="title">是否确认该订单已发货？</div>
            <div class="bottom flex-center-Y justify-center">
                <div class="btn1" @click="comfirmVisible = false">取消</div>
                <div class="btn" @click="comfirmOrder">确认</div>
            </div>
        </el-dialog>
        <el-dialog :visible.sync="getVisible" width="400px" center custom-class='userdialogClass'>
            <div class="title">是否确认该订单已安排咖啡师上门服务时间?</div>
            <div class="bottom flex-center-Y justify-center">
                <div class="btn1" @click="getVisible = false">取消</div>
                <div class="btn" @click="comfirmGet">确认</div>
            </div>
        </el-dialog>
        <el-dialog :visible.sync="delVisible" width="400px" center custom-class='userdialogClass'>
            <div class="title">删除该订单则该下单用户的订单记录也会被删除，是否确认删除该订单？</div>
            <div class="bottom flex-center-Y justify-center">
                <div class="btn1" @click="delVisible = false">取消</div>
                <div class="btn" @click="delOrder">确认</div>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            activeName:"0",
            loading:false,
            tableData:[
            ],
            tableDataB:[
                
            ],
            searchValue:'',
            selectData:"",
            params:{
                pageNum:1,
                pageRow:10,
                deliveryStatus:"",
                appointmentStatus:""
            },
            totalCount:0,
            comfirmVisible:false,
            getVisible:false,
            delVisible:false,
            activities: [
                // {
                // content: '活动按期开始',
                // timestamp: '2018-04-15'
                // }, {
                // content: '通过审核',
                // timestamp: '2018-04-13'
                // }, {
                // content: '创建成功',
                // timestamp: '2018-04-11'
                // }
                ]

        };
    },
    created() {
        document.getElementsByTagName("body")[0].style.minWidth="1100px";
        document.getElementsByTagName("body")[0].style.overflow="auto";
        this.getList()
    },

    methods: {
        handleClick(){
            this.params.pageNum=1
            this.getList()
        },
        currentChange(index) {
            this.params.pageNum = index;
            this.getList(this.params);
        },
        prevClick(index) {
            this.params.pageNum = index;
            this.getList(this.params);
        },
        nextClick(index) {
            this.params.pageNum = index;
            this.getList(this.params);
        },
        showLogic(row){
            this.api({
                    url: "/shopping/find/address",
                    method: "post",
                    data: {orderCode:row.orderCode}
                }).then(data => {
                    this.activities=data
                }).catch(err=>{
                    this.activities=[]
                });
        },
        getList() {
            // this.params.manageId = this.userId
            // this.params.username = this.userName
            this.loading=true
            if(this.activeName=='0'){
                this.params.acceptPhone=this.searchValue
                this.api({
                        url: "/shopping/order/show",
                        method: "post",
                        data: this.params
                    }).then(data => {
                        this.loading=false
                        this.tableData = data.shoppingOrderInfoList
                        this.totalCount=data.totalCount
                    }).catch(err=>{
                        this.loading=false
                    });
            }else{
                this.params.userPhone=this.searchValue
                this.api({
                        url: "/shopping/baristaOrderFind",
                        method: "post",
                        data: this.params
                    }).then(data => {
                        this.loading=false
                        this.tableDataB = data.list
                        this.totalCount=data.totalCount
                    }).catch(err=>{
                        this.loading=false
                    });
            }
        },
        selectAvator(item){
            this.selectData=item
        },
        comfirmGet(){
            this.api({
                    url: "/shopping/changeBaristaOrderStatus",
                    method: "post",
                    data: {
                        kupperAppointmentId:this.selectData.kupperAppointmentId,
                        appointmentStatus:"END"
                        }
                })
                    .then(data => {
                        this.$message({
                            type: "success",
                            message: "操作成功!"
                        });
                        this.getVisible=false
                        this.getList()
                })
        },
        comfirmOrder(){
            this.api({
                    url: "/shopping/order/Logistics",
                    method: "post",
                    data: {orderCode:this.selectData.orderCode}
                })
                    .then(data => {
                        this.api({
                            url: "/shopping/order/receive",
                            method: "post",
                            data: {
                                orderCode:this.selectData.orderCode,
                                waybillId:data.waybillId
                                }
                        })
                            .then(data => {
                                this.$message({
                                    type: "success",
                                    message: "操作成功!"
                                });
                                this.comfirmVisible=false
                                this.getList()
                        })
                })
            
        },
        delOrder(){
            this.api({
                    url: "/shopping/deleteBaristaOrder",
                    method: "post",
                    data: {kupperAppointmentId:this.selectData.kupperAppointmentId}
                })
                    .then(data => {
                        this.$message({
                            type: "success",
                            message: "删除成功!"
                        });
                        this.delVisible=false
                        this.getList()
                })
        },
    },
    computed: {
        ...mapGetters(["userId",'userName'])
    }
};
</script>

