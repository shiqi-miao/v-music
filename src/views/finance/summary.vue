<style scoped>
.blue {
    color: #5A9DF8;
    cursor: pointer;
    padding: 10px 6px;
}
.app-container {
    padding:20px;
    color: #333!important
}
.el-card{height: 90vh;border-radius:4px;overflow: auto}
.btn{width:100px;height: 36px;line-height: 36px;color: #fff;background:#5A9DF8;text-align: center;cursor: pointer;border-radius:4px;font-size:14px;justify-content: center;}
.btn2{width: 10%;height: 5vh;line-height: 5vh!important;color: #fff;background:rgba(40,110,255,1);text-align: center;cursor: pointer;border-radius: 8px}
.btn1{width:100px;height: 36px;line-height: 36px;color:#5A9DF8;text-align: center;cursor: pointer;border-radius:4px;font-size:14px;border: 1px solid #5A9DF8;}
.m-auto{margin:0 auto}
.lg-font{font-size: 26px;line-height:37px;}
.bg-font{font-size: 22px;line-height:30px;}
.sm-font{font-size: 18px;line-height:25px;}
.img{width: 50px;height: 50px;}
#summary{background:#F2F4F8;min-height: 94.5vh;}
#summary .search{width: 240px;margin-right: 20px;}
.el-select{width: 250px;}
#summary .date{margin-right: 20px;}
.dialog{height: 160px;}
.dialog .label{width: 65px;text-align: right;}
.dialog .title{font-size: 16px;text-align: center;margin-top: 20px;margin-bottom: 54px;}
.empty img{width: 160px;height:160px;margin-top:60px}
.allTitle{padding: 20px;font-size:18px;font-weight: 600;}
.allData{padding:0 0px 20px 20px;}
.allData div{margin-right: 20px}
.allData div span{color: #999999;}
</style>
<style>
#summary .el-dialog__headerbtn{display: none;}
.el-dialog__header{padding: 0}
.el-dialog{padding: 0;}
.el-dialog__body{padding: 30px;color: #333;max-height: 80vh;overflow: auto;}
.el-card__body{height:100%;padding: 0;}
.tipDialog .el-dialog{height: 55px;}
.tipDialog .dialog{height: 80px;}
.tipDialog .el-dialog__headerbtn{display: none;}
.tipDialog .el-dialog__body{padding:0 30px}
#summary .el-table thead{color: #333;}
#summary .el-table th>.cell{font-weight: 400;}
#summary .el-input__inner,#summary .el-input__icon{height: 36px;line-height: 36px;}
#summary .el-date-editor--daterange.el-input__inner{width: 250px;}
#summary .skuTableStyle{height: 65px;}
#summary .el-table__expanded-cell[class*=cell]{padding-right: 0;padding-left: 13%;padding-right: 10%;background: rgba(245, 246, 248, 1)}
#summary .el-table__expanded-cell[class*=cell] th,#summary .el-table__expanded-cell[class*=cell] td,#summary .el-table__expanded-cell[class*=cell]:hover{background: rgba(245, 246, 248, 1)!important}
#summary .el-table--striped .el-table__body tr.el-table__row--striped td,#summary .el-table--enable-row-hover .el-table__body tr:hover>td{background: rgba(250, 250, 250, 1);}
#summary .el-table{background: #F5F6F8;}
#summary .el-table__empty-block{background: #fff!important;}
#summary .expendtable .el-table__empty-block{background: rgba(245, 246, 248, 1)!important}
</style>
<template>
    <div class="app-container" id="summary">
        <div style="background:#fff;min-height: 90vh;">
        <div class="allTitle">运营商总数据:</div>
        <div class="allData flex-center-Y">
            <div>总销售额：<span>{{allData.salePrice}}元</span></div>
            <div>总利润：<span>{{allData.profits}}元</span></div>
            <div>经营收入：<span>{{allData.saleIncome}}元</span></div>
            <div>成本：<span>{{allData.costPrice}}元</span></div>
            <div>折扣总额：<span>{{allData.discountPrice}}元</span></div>
            <div>退款金额：<span>{{allData.refundPrice}}元</span></div>
            <div>结算金额：<span>{{allData.settlePrice}}元</span></div>
            <div>手续费：<span>{{allData.platPrice}}元</span></div>
            <div>未支付金额：<span>{{allData.waitPayPrice}}元</span></div>
        </div>
        <div class="flex-center-Y" style="padding:30px;width:100%;border:1px solid #F2F4F8;justify-content:space-between">
            <div class="flex-center-Y">
                <div class="date">
                    <el-date-picker
                        class="input-with-date"
                        v-model="searchValue.date"
                        type="daterange"
                        range-separator="-"
                        start-placeholder="开始时间"
                        end-placeholder="结束时间"
                        value-format="yyyy-MM-dd"
                        >
                    </el-date-picker>
                </div>
                <div class="btn" @click="search">查询</div>
            </div>
            <div class="btn" @click="showExcel">报表导出</div>
        </div>
        
        <div style="padding:30px;padding-top:0">
        <el-table
            stripe
            :data="tableData"
            header-row-class-name="skuTableStyle"
            cell-class-name="skuCellStyle"
            style="width:100%"
            ref="table" 
            @row-click="clickTable"
            row-key="storeCode" 
            :expand-row-keys="expands" 
            @expand-change="expandChange"
            v-loading="listLoading">
            <!-- <div slot="empty" class="empty" v-if="!listLoading">
                <img src="../../assets/super/blank.png" alt="">
                <div>暂无数据</div>
            </div> -->
            <el-table-column type="expand" fixed>
                <template slot-scope="props">
                    <el-table :data="props.row.skuList" stripe style="width: 100%" class="expendtable">
                        <el-table-column prop="machineName" label="设备名称" style="width:12.5%" align="center"></el-table-column>
                        <el-table-column prop="salePrice" label="销售额（元）" style="width:12.5%" align="center">
                            <template slot-scope="scope">
                                    {{scope.row.salePrice || 0}}
                            </template> 
                        </el-table-column>
                        <el-table-column label="利润额（元）" style="width:12.5%" align="center">
                            <template slot-scope="scope">
                                    {{scope.row.profits || 0}}
                            </template> 
                        </el-table-column>
                        <el-table-column prop="saleIncome" label="经营收入（元）" style="width:12.5%" align="center">
                            <template slot-scope="scope">
                                    {{scope.row.saleIncome || 0}}
                            </template> 
                        </el-table-column>
                        <el-table-column prop="costPrice" label="成本（元）" style="width:12.5%" align="center">
                            <template slot-scope="scope">
                                    {{scope.row.costPrice  || 0}}
                            </template> 
                        </el-table-column>
                        <el-table-column prop="discountPrice" label="折扣额（元）" style="width:12.5%" align="center">
                            <template slot-scope="scope">
                                    {{scope.row.discountPrice  || 0}}
                            </template> 
                        </el-table-column>
                        <el-table-column label="退款额（元）" style="width:12.5%" align="center">
                            <template slot-scope="scope">
                                    {{scope.row.refundPrice || 0}}
                            </template> 
                        </el-table-column>
                        <!-- <el-table-column prop="yesSoldNumber" label="货损额（元）" style="width:12.5%" align="center">
                            <template slot-scope="scope">
                                    {{scope.row.payPrice || 0}}
                            </template> 
                        </el-table-column> -->
                        <el-table-column prop="" label="" align="center"></el-table-column>
                    </el-table>
                </template>
            </el-table-column>
            <el-table-column
            prop="storeName"
            label="点位名称"
            align="center"
            style="width:12.5%">
            </el-table-column>
            <el-table-column
            prop="salePrice"
            label="总销售额（元）"
            align="center"
            style="width:12.5%">
            </el-table-column>
            <el-table-column
            prop="profits"
            label="总利润额（元）"
            align="center"
            style="width:12.5%">
            </el-table-column>
            <el-table-column
            prop="saleIncome"
            label="总经营收入（元）"
            align="center"
            style="width:12.5%">
            </el-table-column>
            <el-table-column
            prop="costPrice"
            label="成本（元）"
            align="center"
            style="width:12.5%">
            </el-table-column>
            <el-table-column
            prop="discountPrice"
            label="折扣总额（元）"
            align="center"
            style="width:12.5%">
            </el-table-column><el-table-column
            prop="refundPrice"
            label="退款金额（元）"
            align="center"
            style="width:12.5%">
            </el-table-column>
            <el-table-column
            prop="settlePrice"
            label="结算金额（元）"
            align="center"
            style="width:12.5%">
            </el-table-column>
            <el-table-column
            prop="platPrice"
            label="手续费（元）"
            align="center"
            style="width:12.5%">
            </el-table-column>
            <el-table-column
            prop="waitPayPrice"
            label="未支付金额（元）"
            align="center"
            style="width:12.5%">
            </el-table-column>
            <!-- <el-table-column
            prop=""
            label=""
            align="center">
            </el-table-column> -->
        </el-table>
        <!-- <div class="pagination-line">
            <el-pagination background
                           @size-change="handleSizeChange"
                           @current-change="currentChange"
                           :current-page="params.pageNum"
                           :page-size="params.pageRow"
                           :total="totalCount"
                           layout="total, prev, pager, next">
            </el-pagination>
        </div> -->
        </div>
        </div>
        <el-dialog
            :visible.sync="dialogVisible"
            width="400px"
            >
            <div class="dialog">
                <div class="flex-center-Y line" style="margin-top:10px">
                    <div class="label">运营商：</div>
                    <div class="info">
                        <div class="flex-center-Y">
                            <el-select v-model="excelValue.operatorId">
                                <el-option
                                    v-for="item in operatorList"
                                    :key="item.operatorId"
                                    :label="item.operatorName"
                                    :value="item.operatorId"
                                    >
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                </div>
                <div class="flex-center-Y line" style="margin-top:10px">
                    <div class="label">日期：</div>
                    <div class="date" style="margin-right:0">
                        <el-date-picker
                            class="input-with-date"
                            v-model="excelValue.date"
                            type="daterange"
                            range-separator="-"
                            start-placeholder="开始时间"
                            end-placeholder="结束时间"
                            value-format="yyyy-MM-dd"
                            :clearable="false"
                            >
                        </el-date-picker>
                    </div>
                </div>
                <div class="box-bottom flex-center-Y" style="margin-top:34px">
                    <div class="flex-1">
                        <div class="btn1 m-auto" @click="dialogVisible=false">
                            取 消
                        </div>
                    </div>
                    <div class="flex-1">
                        <div class="btn m-auto" style="float:none" @click="showExcel" v-if="!reqLoading">
                            导 出
                        </div>
                        <div class="btn m-auto" style="float:none" v-else>
                            <i class="el-icon-loading"></i>
                        </div>
                    </div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data(){
        return{
            searchValue:{operatorName:"",date:[]},
            excelValue:{operatorId:"",date:[]},
            operatorList:[{operatorName:"所有运营商",operatorId:""}],
            tableData: [

            ],
            listLoading:false,
            expands:[],
            params: {
            pageRow: 6,
            pageNum: 1
                },
            totalCount: 0,
            editDialog:false,
            selectData:"",
            tipDialog:false,
            reqLoading:false,
            dialogVisible:false,
            allData:""
            
        }
    },
    created(){
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
        this.excelValue.date=[getLastMonth().last,getLastMonth().now]
        //时间默认为近一个月
        this.getList()
        this.getOperator()
    },
    methods:{
        getOperator(){
            this.api({
                    url: "/finance/financeAllShow",
                    method: "post",
                    data: {
                        startTime:this.searchValue.date[0],
                        endTime:this.searchValue.date[1]
                    }
                }).then(data => {
                    this.allData=data
                });
        },
        getList() {
            if(this.searchValue.date){}else{this.searchValue.date=[]}
            this.listLoading = true;
            this.$set(this, "tableData", []);
                this.api({
                    url: "/finance/financeStoreShow",
                    method: "post",
                    data: {
                        startTime:this.searchValue.date[0],
                        endTime:this.searchValue.date[1]
                    }
                }).then(data => {
                    this.listLoading = false;
                    this.$set(this, "tableData", data);
                    this.totalCount = data.totalCount;
                });
        },
        search(){
            // this.params.pageNum=1
            this.getList()
            this.getOperator()
        },
        expandChange(row, expandedRows) {
            //每次只能展开一行
            var that = this
            if (expandedRows.length) {
              that.expands = []
              if (row) {
                that.expands.push(row.storeCode)
              }
            } else {
              that.expands = []
            }
            //每次只能展开一行
            if(this.searchValue.date){}else{this.searchValue.date=[]}
            this.api({//获取点位列表
                url: "/finance/financeVendShow",
                method: "post",
                data: {
                    storeCode:row.storeCode,
                    startTime:this.searchValue.date[0],
                    endTime:this.searchValue.date[1]
                }
            }).then(data => {
                this.$set(row,'skuList',data)
            })
        },
        clickTable(row,index,e){//点击行就展开
            //调用,table的方法,展开/折叠 行
            this.$refs.table.toggleRowExpansion(row)
        },
        handleSizeChange(val) {
            this.params.pageRow = val;
            this.getList();
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
        showExcel(){//报表导出
        // if(!this.excelValue.operatorId){
        //     this.$message({
        //                 type: 'warning',
        //                 message: '请选择运营商'
        //             })
        //             return;
        // }
            this.reqLoading = true
            this.api({
                url: "/finance/export",
                method: "post", 
                data: {
                    startTime:this.searchValue.date[0],
                    endTime:this.searchValue.date[1]
                }
                }).then(data => {
                    this.$message({
                        type: 'success',
                        message: '导出成功'
                    })
                    this.reqLoading = false
                    this.dialogVisible=false
                    window.open(data.downLoadUrl,"_blank");
                }).catch((e)=>{
                    this.reqLoading = false
            })
        },
    },
    computed: {
        ...mapGetters(['userId'])
    }
}
</script>



   