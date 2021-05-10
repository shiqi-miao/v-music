
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
    width: 200px;
    height: 200px;
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
.input-with-date .el-range-separator{
    width: 40px;
    text-align: center;
}
.input-with-select{
    width: 300px;
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
.danger{
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

</style>
<style>
#finance .el-select .el-input{width: 90px}
</style>
<template>
    <div class="app-container" id="finance">
        <div class="flex-center-Y">
            <el-radio-group v-model="activeTab" class="jy-2" @change="changeTime">
                <el-radio-button label="0">近7天</el-radio-button>
                <el-radio-button label="1">近1个月</el-radio-button>
                <el-radio-button label="2">近3个月</el-radio-button>
                <el-radio-button label="3">自定义</el-radio-button>
            </el-radio-group>&emsp;
            <!-- <el-date-picker
            class="input-with-date"
            v-model="params.times"
            type="daterange"
            range-separator=" 至 "
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            value-format="yyyy-MM-dd"
            @change="changeTimeSelf">
            </el-date-picker> -->
            <el-date-picker
                v-if="this.activeTab == 3"
                v-model="params.startTime"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="选择开始日期"
                 @change="changeTime">
            </el-date-picker>
            <span style="color:#DCDFE6" v-if="this.activeTab == 3">&nbsp;-&nbsp;</span>
            <el-date-picker
                v-if="this.activeTab == 3"
                v-model="params.endTime"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="选择结束日期"
                @change="changeTime"
                >
            </el-date-picker>&emsp;
            <el-cascader
                :options="options"
                :props="props"
                placeholder="选择设备"
                @change="changeStore"
                clearable>
            </el-cascader>&emsp;
            <el-input placeholder="请输入内容" v-model="searchValue" class="input-with-select" onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;" >
                <el-select v-model="selectedTab" placeholder="请选择" slot="prepend">
                    <el-option v-for="item in selectTabs" :key="item.id" :label="item.name" :value="item.id">
                    </el-option>
                </el-select>
                <!-- <el-button slot="append" icon="el-icon-search" @click="search"></el-button> -->
            </el-input>&emsp;
            <el-button type="primary" icon="el-icon-search" @click="search">搜 索</el-button>
            <!-- <el-button type="primary" @click="showExcel" :loading="reqLoading">导出</el-button> -->
        </div>

        <el-table :data="tableData" stripe style="width: 100%" v-loading.body="listLoading" element-loading-text="拼命加载中"
            row-key="goodsCode" @filter-change="filterMethod">
            <el-table-column prop="gmtCreated" label="创建时间" width="170" align="center"></el-table-column>
            <el-table-column prop="orderCode" label="订单号" align="center"></el-table-column>
            <el-table-column prop="userPhone" label="手机号" width="120" align="center"></el-table-column>
            <el-table-column prop="storeName" column-key="storeId" :filters="typeFilters" :filter-multiple="false" label="消费门店" width="120" align="center"></el-table-column>
            <el-table-column prop="payPrice" label="订单金额" style="width: 18%" align="center">
                <template slot-scope="scope">
                    ¥ {{scope.row.payPrice}}
                </template> 
            </el-table-column>
            <el-table-column prop="platPrice" label="手续费" style="width: 18%" align="center">
                <template slot-scope="scope">
                    ¥ {{scope.row.platPrice}}
                </template> 
            </el-table-column>
            <el-table-column prop="merchantPrice" label="分润金额" style="width: 18%" align="center">
                <template slot-scope="scope">
                    ¥ {{scope.row.merchantPrice}}
                </template> 
            </el-table-column>
            <el-table-column label="实付金额" style="width: 18%" align="center">
                <template slot-scope="scope">
                    ¥ {{scope.row.payPrice}}
                </template> 
            </el-table-column>
            <el-table-column prop="payType" column-key="payType" :filters="payTypeFilters" :filter-multiple="false" label="支付方式" width="120" align="center"></el-table-column>
            <!-- <el-table-column prop="isPay" label="支付状态" style="width: 18%" align="center" column-key="isPay" :filters="isPayFilters" :filter-multiple="false">  
            </el-table-column> -->
            <el-table-column prop="isPay" label="支付状态" width="120" align="center" column-key="isPay" :filters="isPayFilters" :filter-multiple="false">
                <template slot-scope="scope" >
                    <span :class="{'danger':scope.row.is_pay=='-1','orange':scope.row.is_pay == '0'}">{{scope.row.isPay}}</span>
                </template>    
            </el-table-column>
            <el-table-column label="操作" style="width: 18%" align="center">
                <template slot-scope="scope">
                    <span @click="toDetail(scope.row)" class="blue">查看</span>
                </template>
            </el-table-column>
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
        <el-dialog title="导出选项" :visible.sync="createExcelDialogVisible" width="36%">
            <el-form class="small-space demo-form-inline sku-form" label-position="left" label-width="80px" :inline="true">
                <el-form-item label="文件格式" required>
                    .xlsx
                </el-form-item>
                <br>
                <el-form-item label="选择" required class="create">
                    <el-select v-model="excelType" placeholder="请选择分类">
                        <el-option v-for="item in excelTabs" :key="item.id" :label="item.name" :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="createExcelDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="downloadExcel" :loading="reqLoading">确 定</el-button>
            </span>
        </el-dialog>

    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            activeTab:'0',
            startTime:'',
            endTime:'',
            fixTimes:{},
            listLoading:false,
            reqLoading:false,
            totalCount:0,
            searchValue:'',
            selectedTab:"userId",
            selectTabs:[
                {
                    name:"手机号",
                    id:"userId"
                },
                {
                    name:"订单号",
                    id:"orderId"
                },                
            ],
            excelType:'',
            excelTabs:[
                {
                    name:"仅列表字段内容",
                    id:1
                },
                {
                    name:"详情内容",
                    id:2
                },                
            ],
            tableData:[],
            params:{
                pageRow:10,
                pageNum:1,
                times:[],
                startTime:"",
                endTime:"",
                machineCodes:[],
                storeCodes:[]
            },
            createExcelDialogVisible:false,
            typeFilters:[],
            payTypeFilters:[{text:'红包付',value:'1'},{text:'微信免密',value:'W'},{text:'支付宝免密',value:'Z'},{text:'银联免密',value:'Y'},{text:'购物券',value:'Q'},],
            isPayFilters:[{text:'已支付',value:'1'},{text:'未支付',value:'-1'},{text:'支付有退款',value:'0'},],
            props:{multiple: true,value:"storeCode",label:"storeName",children:"machineJson"},
            options:[],
        }
    },
    created(){
        this.getStoreList()
        this.getTime()
        // this.getList()
        this.getTypeList()
    },
    methods:{
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
                })
                .catch(e => {
                });
                
        },
        getTime() {
            this.api({
                url: "/finance/findTime",
                method: "post",
                data: {}
            }).then(data => {
                this.fixTimes = data
                this.params.times = [data.oneWeekDate,data.nowTime]
                this.params.startTime = data.oneMouthDate
                this.params.endTime = data.nowTime
                this.search()
            })
        },
        changeTimeSelf(){
            this.activeTab = ''
        },
        changeTime(){
            this.times = []
            if(this.activeTab == 0){
                this.params.times = [this.fixTimes.oneWeekDate,this.fixTimes.nowTime]
                this.params.startTime=this.fixTimes.oneWeekDate
                this.params.endTime=this.fixTimes.nowTime
            }else if(this.activeTab == 1){
                this.params.times = [this.fixTimes.oneMouthDate,this.fixTimes.nowTime]
                this.params.startTime=this.fixTimes.oneMouthDate
                this.params.endTime=this.fixTimes.nowTime
            }else if(this.activeTab == 2){
                this.params.times = [this.fixTimes.threeMouthDate,this.fixTimes.nowTime]
                this.params.startTime=this.fixTimes.threeMouthDate
                this.params.endTime=this.fixTimes.nowTime
            }else if(this.activeTab == 3){
                this.params.times = [this.params.startTime,this.params.endTime]
            }
            // this.search()
        },
        changeStore(value){
            let storeCodes=[]
            let machineCodes=[]
            value.forEach(item => {
                if(storeCodes.indexOf(item[0])==-1){
                    storeCodes.push(item[0])
                }
                machineCodes.push(item[1])
            });
            this.params.storeCodes=storeCodes
            this.params.machineCodes=machineCodes
            console.log(this.params)
        },
        filterMethod(filters) {//删选
            for(let i in filters){
                this.params[i] = filters[i][0]
            }
            this.getList(this.params)
        },
        showExcel(){
            this.reqLoading = true
            // this.createExcelDialogVisible = true
            this.api({
                url: "/finance/importDetailsFormByOperator",
                method: "post",
                data: this.params
                }).then(data => {
                    this.$message({
                        type: 'success',
                        message: '导出成功'
                    })
                    this.reqLoading = false
                    window.open(data.downLoadUrl,"_blank");
                }).catch((e)=>{
                    this.reqLoading = false
            })
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
            // if(this.params.times.length>0){
            //     this.params.startTime = this.params.times[0]
            //     this.params.endTime = this.params.times[1]
            // }else{
            //     this.params.startTime = ''
            //     this.params.endTime = ''
            // }
            for(let i in this.selectTabs){
                if(this.selectedTab == this.selectTabs[i].id){
                    this.params[this.selectedTab] = this.searchValue
                }else{
                    let id = this.selectTabs[i].id
                    this.params[id] =''
                }
            }
            this.getList(this.params)
        },
        getList(params) {
            this.listLoading = true;
            this.api({
                url: "/finance/findHeadFormByOperator",
                method: "post",
                data: params || this.params
            }).then(data => {
                this.listLoading = false;
                this.tableData = data.list;
                this.totalCount = data.totalCount

            })
        },
        downloadExcel(){
            if(!this.excelType){
                this.$message({
                    type: 'warning',
                    message: '您未选择导出范围'
                })
                return
            }
            this.reqLoading = true
            if(this.excelType==2){
                this.api({
                    url: "/finance/importDetailsFormByOperator",
                    method: "post", 
                    data: this.params
                    }).then(data => {
                        this.reqLoading = false
                        this.createExcelDialogVisible = false
                        window.open(data.downLoadUrl,"_blank");
                    }).catch((e)=>{

                    })
            }else if(this.excelType==1){
                this.api({
                    url: "/finance/importHeadFormByOperator",
                    method: "post",
                    data: this.params
                }).then(data => {
                    this.reqLoading = false
                    this.createExcelDialogVisible = false
                    window.open(data.downLoadUrl,"_blank");
                }).catch((e)=>{

                })
            }
        },
        getTypeList(){
          this.api({
              url: "/finance/showStore",
              method: "post", 
            }).then(data => {
                this.typeFilters = []
                for(let i in data){
                    let item = {
                        text:data[i].storeName,
                        value:data[i].storeCode
                    }
                    this.typeFilters.push(item)
                }
            })
        },
        toDetail(row){
            this.$router.push({path: '/finance/detail/'+row.orderCode})
        }
    },
    computed: {
        ...mapGetters(["userId", "userName","stockType"]) 
    }
}
</script>

