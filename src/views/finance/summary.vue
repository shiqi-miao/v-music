<style lang="scss" scoped>
#order{
    font-size: 14px;
        background: #F2F4F8;
        border: 1px solid #E2E5EB;
        height: 100%;
        .content{
            min-height: calc(100% - 75px);
            background: #fff;
            border: 1px solid #E2E5EB;
            padding: 20px;
            padding-top: 10px;
        }
    }
    .top{
        height: 75px;
        border: 1px solid #E2E5EB;
        border-bottom: 0;
        background: #fff;
        padding: 20px;
        .select{margin: 0 20px;width: 120px;}
        .input{
            width: 900px;
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
    .input >>> .el-input{width: 190px;margin-right: 20px;}
    .date{margin-right: 20px;}
    .date >>> .el-date-editor{width: 250px;}
    .date >>> .el-input__icon{line-height: 27px!important}
    .userdialogClass .el-dialog__header,.userdialogClass .el-dialog__body,.userdialogClass .el-dialog__footer{padding:0}
    .userdialogClass .el-dialog__headerbtn{display: none;}
    .userdialogClass{padding: 30px 60px;}
    .userdialogClass .title{font-size: 16px;text-align: center;margin-bottom: 32px;line-height:1.5}
    .userTableStyle{color: #333}
    .userTableStyle th>.cell{font-weight: 400}
    .userTableStyle{color: #333;height: 75px;padding: 0!important}
    #order >>> .el-input.is-disabled .el-input__inner{color: #333}
    #order >>> .el-input__inner{height:32px;line-height: 32px;}
    #order >>> .el-input__prefix{line-height: 32px;cursor:pointer;padding-left: 5px;}
    #order >>> .select .el-input__prefix,#order .select .el-input__icon{border: 0;padding: 0;}
    #order >>> .el-input__icon{line-height:32px;padding-left: 5px;}
    #order >>> .el-card__body{height: 100%;padding: 0}
    #order >>> .el-upload{width: 100%;height: 100%}
    #order >>> .el-dialog__header,#order .el-dialog__body,#order .el-dialog__footer{padding:0}
    #order >>> .el-checkbox__inner{border-radius: 50%}
    #order >>> .el-input__prefix,#order .el-input__icon{line-height: 32px;}
    .operatorTableStyle{color: #333}
    .operatorTableStyle th>.cell{font-weight: 600}
    #order >>> .el-tabs{width: 212px;}
    .el-message-box__headerbtn{z-index: 10}
    #order >>> .el-tabs__item{
        font-size: 14px;
        height: 40px;
        line-height: 40px;
        width: 105px;
        text-align: center;
    }
</style>
<style>

</style>
<template>
    <div class="app-container" id="order">
        <div class="top">
            <div class="input flex-center-Y">
                <el-input placeholder="请输入商品名称" v-model="searchValue.skuName" @input="params.pageNum=1;getList()" clearable>
                    <i
                        class="el-icon-search"
                        slot="prefix">
                    </i>
                </el-input>
                <el-input placeholder="请输入会员等级名称" v-model="searchValue.memGradeName" @input="params.pageNum=1;getList()" clearable>
                    <i
                        class="el-icon-search"
                        slot="prefix">
                    </i>
                </el-input>
                <div class="date">
                    <el-date-picker
                        class="input-with-date"
                        v-model="searchValue.date"
                        type="daterange"
                        range-separator="-"
                        start-placeholder="开始时间"
                        end-placeholder="结束时间"
                        value-format="yyyy-MM-dd"
                         @change="params.pageNum=1;getList()"
                        >
                    </el-date-picker>
                </div>
                <!-- <div class="btn" @click="params.pageNum=1;getList()">搜索</div> -->
            </div>
        </div>
        <div class="content">
            <el-table
                    ref="table"
                    header-row-class-name="userTableStyle" 
                    cell-class-name="userCellStyle"
                    :data="tableData"
                    style="width: 100%"
                    :loading='loading'>
                    <el-table-column
                        prop="orderCode"
                        label="订单编号"
                        align="center"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="orderType"
                        label="订单类型"
                        align="center"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="payPrice"
                        label="金额"
                        align="center"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="memGradeName"
                        label="商品名称"
                        align="center"
                        min-width="10%">
                        <template slot-scope="scope">
                            <span>{{scope.row.orderType=='单曲购买'?scope.row.skuName:scope.row.memGradeName}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="userName"
                        label="昵称"
                        align="center"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="userPhone"
                        label="手机号码"
                        align="center"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="deliveryStatus"
                        label="订单状态"
                        align="center"
                        min-width="10%">
                        <template slot-scope="scope">
                            <span :style="scope.row.isPay=='-1'?'color:red':(scope.row.isPay=='0'?'color:#333333':'color:#67c23a')">{{scope.row.isPay=='-1'?'已取消':(scope.row.isPay=='0'?'待支付':'已支付')}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="gmtCreated"
                        label="下单时间"
                        align="center"
                        min-width="10%">
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
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            loading:false,
            tableData:[
            ],
            searchValue:{skuName:"",memGradeName:"",date:[]},
            selectData:"",
            params:{
                pageNum:1,
                pageRow:10,
            },
            totalCount:0

        };
    },
    created() {
        document.getElementsByTagName("body")[0].style.minWidth="1000px";
        document.getElementsByTagName("body")[0].style.overflow="auto";
        //时间默认为近一个月
        function getLastMonth() {
            var now = new Date();
            var year = now.getFullYear();
            var month = now.getMonth() + 1;//0-11表示1-12月
            var day = now.getDate();
            var dateObj = {};
            dateObj.now = year + '-' + month + '-' + day; 
            var nowMonthDay = new Date(year, month, 0).getDate();    //当前月的总天数
            if(month - 1 <= 0){ //如果是1月，年数往前推一年<br>　　　　 
                dateObj.last = (year - 1) + '-' + 12 + '-' + day;
            }else{
                var lastMonthDay = new Date(year, (parseInt(month) - 1), 0).getDate();  
                if(lastMonthDay < day){    //1个月前所在月的总天数小于现在的天日期
                    if(day < nowMonthDay){        //当前天日期小于当前月总天数
                        dateObj.last = year + '-' + (month - 1) + '-' + (lastMonthDay - (nowMonthDay - day));
                    }else{
                        dateObj.last = year + '-' + (month - 1) + '-' + lastMonthDay;
                    }
                }else{
                    dateObj.last = year + '-' + (month - 1) + '-' + day;
                }
            }
            return dateObj;
        }
        this.searchValue.date=[getLastMonth().last,getLastMonth().now]
        //时间默认为近一个月
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
        getList() {
            this.params.startTime=this.searchValue.date?this.searchValue.date[0]:''
            this.params.endTime=this.searchValue.date?this.searchValue.date[1]:''
            this.params.skuName=this.searchValue.skuName
            this.params.memGradeName=this.searchValue.memGradeName
            this.loading=true
            this.api({
                    url: "/support/api/orderInfoList",
                    method: "post",
                    data: this.params
                }).then(data => {
                    data.list.forEach(item=>{
                        item.orderCode=item.orderCode.substring(0,4)+'****'+item.orderCode.substring(item.orderCode.length-4)
                    })
                    this.loading=false
                    this.tableData = data.list
                    this.totalCount=data.totalCount
                }).catch(err=>{
                    this.loading=false
                });
        }
    },
    computed: {
        ...mapGetters(["userId",'userName'])
    }
};
</script>

