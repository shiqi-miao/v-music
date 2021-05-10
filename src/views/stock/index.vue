<style scoped>
#stock{position: relative;}
.input-with-select {
    width: 350px;
}
.el-select .el-input {
    width: 120px;
}
.el-date-editor{width: 100%!important}
/* .el-form-item__content .el-input{width: 50%} */
.el-tooltip__popper[x-placement^="right"] .popper__arrow,
.el-tooltip__popper[x-placement^="right"] .popper__arrow:after {
    border-right-color: #ffffff;
}
.el-tooltip__popper[x-placement^="bottom"] .popper__arrow,
.el-tooltip__popper[x-placement^="bottom"] .popper__arrow:after {
    border-bottom-color: #ffffff;
}
.tooltip-blue {
    background: #ffffff !important;
    border: #66b1ff !important;
    color: #66b1ff !important;
    line-height: 18px;
    font-size: 14px;
}
.hover {
    cursor: pointer;
    /* padding: 10px 20px; */
}
.title-hover {
    cursor: pointer;
}
.danger {
    color: #f56c6c;
}
.orange {
    color: orange;
}
.note {
    padding: 10px 0;
    color: #888888;
    font-size: 13px;
}
.item-set {
    height: 44px;
    padding: 6px;
    text-align: center;
    line-height: 32px;
}
.name {
    line-height: 36px;
    font-weight: 600;
    text-align: center;
}
.stock-num {
    padding: 10px;
    cursor: pointer;
}
.msg {
    padding: 0 6vw;
}
.el-form-item__content{line-height:40px;display: flex;}
.blue {
    color: #66b1ff!important;
    cursor: pointer;
}
#stock .addstock .el-input{width: 60%}
#period .el-input__inner{padding: 0;border: 0px;color: #909399;font-weight: bold;width: 60%;background: transparent}
#stock .el-table__expanded-cell .el-table td{background: #66b1ff12;}
/* 返回上级 */
.iconfont{font-size:1.5vw;color: #fff}
.minifont{font-size: 0.73vw;}
.backBtn{background: #e1dede;width: 3.2vw;height: 3.2vw;box-shadow:0px 20px 20px -10px rgba(0, 0, 0, 0.15);z-index: 10;text-align: center;line-height: 3.9vw;border-radius: 0.5vw;margin-bottom: 0.5vh}
#backBtn{color: rgba(155, 155, 155, 1);position: fixed;top: 50%;right: 2vw;z-index: 10;cursor: pointer;}
/* 返回上级 */
.btn,.addBtn{width:100px;height: 36px;line-height: 36px;color: #fff;background:#409EFF;text-align: center;cursor: pointer;border-radius:4px;font-size:14px;justify-content: center;}
.addBtn{position: absolute;top: 75px;right: 50px;}
#stock >>> .el-dialog__header,#stock >>> .el-dialog__footer{padding: 20px!important;}
.optionStyle .el-select-dropdown__item{height: 60px;padding:5px 10px;}
.skuInput >>> .el-select .el-input{width: 200px!important;}
.machineInput >>> .el-select .el-input{width: 250px!important;}
.machineInput{margin-left:20px}
.skuInput{margin-bottom:20px}
#stock >>> .el-dialog__body{padding: 30px 20px!important;}
</style>
<style>
#stock .el-select .el-input {
  width: 120px;
}
</style>
<template>
    <div class="app-container" id="stock">
        <div class="btn addBtn" v-show="activeName=='0' && makeInventoryFlag=='false'" @click="addStockVisible=true">添加库存</div>
        <div class="btn addBtn" style="color:#999999;background: #E4E4E4;" v-show="activeName=='0' && makeInventoryFlag=='true'" @click="$message({type:'warning',message:'正在盘库,请稍后再试.'})">添加库存</div>
        <div id="backBtn" class="minifont" @click="toBack"><div class="backBtn"><i class="el-icon-arrow-left iconfont"></i></div><div style="line-height:1vw">返回上级</div></div>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="仓库库存" name="0"></el-tab-pane>
            <el-tab-pane label="机器库存" name="1"></el-tab-pane>
            <el-tab-pane label="补货单库存" name="2"></el-tab-pane>
        </el-tabs>
        <div class="flex-center-Y">
        <el-input placeholder="请输入内容"
                  v-model="searchValue"
                  class="input-with-select"
                  @keyup.enter.native="search"
                  onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;" 
                  @input="search">
            <el-select v-model="selectedTab"
                       placeholder="请选择"
                       @change="search"
                       slot="prepend">
                <el-option v-for="item in selectTabs"
                           :key="item.id"
                           :label="item.name"
                           :value="item.id">
                </el-option>
            </el-select>
        </el-input>
        <div class="machineInput" v-if="activeName!='0'">
        <el-select v-model="params.machineCode"
                       placeholder="请选择机器"
                       clearable
                       @change="search">
                <el-option v-for="item in machineList"
                           :key="item.machineCode"
                           :label="item.machineName"
                           :value="item.machineCode">
                </el-option>
        </el-select>
        </div>
        </div>
        <el-table :data="tableData"
                  v-show="activeName=='0'"
                  stripe
                  style="width: 100%"
                  v-loading.body="listLoading"
                  element-loading-text="拼命加载中"
                  ref="refTable"
                  @sort-change="sortMethod">
            <el-table-column prop="skuCode"
                             label="SKU编号"
                             align="center"></el-table-column>
            <el-table-column prop="skuName"
                             label="SKU名称"
                             align="center"></el-table-column>
            <el-table-column prop="skuPicture"
                             label="SKU图片"
                             align="center">
                <template slot-scope="scope">
                    <img :src="scope.row.skuPicture"
                         width="40"
                         height="40"
                         class="portrait" />
                </template>
            </el-table-column>
            <el-table-column prop="batchCode"
                             label="批次编号"
                             align="center"></el-table-column>
            <el-table-column label="入库数量"
                             align="center">
                <template slot-scope="scope">
                    {{scope.row.batchNum || '0'}} 件
                </template>
            </el-table-column>
            <el-table-column label="剩余数量"
                             align="center">
                <template slot-scope="scope">
                    {{scope.row.residueNum || '0'}} 件
                </template>
            </el-table-column>
            <el-table-column label="采购价格"
                             align="center">
                <template slot-scope="scope">
                    ¥{{scope.row.purchasePrice || '0.00'}}
                </template>
            </el-table-column>
            <el-table-column label="总库存价值"
                             align="center">
                <template slot-scope="scope">
                    ¥{{scope.row.allWarePrice || '0.00'}}
                </template>
            </el-table-column>
            <el-table-column prop="gmtCreated"
                             label="入库时间"
                             align="center"></el-table-column>
            <el-table-column prop="outWarrantyTime"
                             label="过期时间"
                             sortable="custom"
                             align="center"></el-table-column>
            <el-table-column 
                    label="操作"
                    width="150"
                    align="center"
                    >
                <template slot-scope="scope">
                    <span class="blue" @click="delbatch(scope.row)">删除</span>
                </template>
                
            </el-table-column>
        </el-table>
        <el-table :data="tableDataB"
                  v-show="activeName=='1'"
                  stripe
                  style="width: 100%"
                  v-loading.body="listLoading"
                  element-loading-text="拼命加载中">
            <el-table-column prop="machineName"
                             label="设备名称"
                             align="center"></el-table-column>
            <el-table-column prop="skuCode"
                             label="SKU编号"
                             align="center"></el-table-column>
            <el-table-column prop="skuName"
                             label="SKU名称"
                             align="center"></el-table-column>
            <el-table-column prop="skuPicture"
                             label="SKU图片"
                             align="center">
                <template slot-scope="scope">
                    <img :src="scope.row.skuPicture"
                         width="40"
                         height="40"
                         class="portrait" />
                </template>
            </el-table-column>
            <el-table-column prop="skuNum"
                             label="数量"
                             align="center">
                <template slot-scope="scope">
                    <span>{{scope.row.skuNum || 0}}件</span>
                </template>
            </el-table-column>
            <el-table-column prop="channelids"
                             label="占用货道">
                <template slot-scope="scope">
                    <el-popover
                        placement="top-start"
                        width="200"
                        trigger="hover"
                        :content="scope.row.channelids">
                        <span slot="reference" style="display:inline-block;max-width:200px" class="limit-ellipsis">{{scope.row.channelids}}</span>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column 
                    label="操作"
                    width="150"
                    align="center"
                    >
                <template slot-scope="scope">
                    <div class="blue" @click="toOperation(scope.row)">去门店运营</div>
                    <div class="blue" @click="toContrast(scope.row)">仓库比对分析</div>
                </template>
                
            </el-table-column>
        </el-table>
        <el-table :data="tableDataC"
                  v-show="activeName=='2'"
                  stripe
                  style="width: 100%"
                  v-loading.body="listLoading"
                  element-loading-text="拼命加载中">
            <el-table-column prop="batchCode"
                             label="批次编号"
                             align="center"></el-table-column>
            <el-table-column prop="machineName"
                             label="待补货机器"
                             align="center"></el-table-column>
            <el-table-column prop="cpCode"
                             label="补货单编号"
                             align="center"></el-table-column>
            <el-table-column prop="skuCode"
                             label="SKU编号"
                             align="center"></el-table-column>
            <el-table-column prop="skuName"
                             label="SKU名称"
                             align="center"></el-table-column>
            <el-table-column prop="skuPicture"
                             label="SKU图片"
                             align="center">
                <template slot-scope="scope">
                    <img :src="scope.row.skuPicture"
                         width="40"
                         height="40"
                         class="portrait" />
                </template>
            </el-table-column>
            <el-table-column label="SKU数量"
                             align="center">
                <template slot-scope="scope">
                    {{scope.row.outNum || '0'}} 件
                </template>
            </el-table-column>
            <el-table-column prop="repairName"
                             label="补货员"
                             align="center"></el-table-column>
            <el-table-column prop="statusDetails"
                             label="状态"
                             align="center"></el-table-column>
            <el-table-column prop="gmtCreated"
                             label="创建时间"
                             align="center"></el-table-column>
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
        <el-dialog title="添加库存"
                   :visible.sync="addStockVisible"
                   >
            <div class="skuInput">
                选择sku：
                <el-select
                    v-model="searchData"
                    filterable
                    remote
                    reserve-keyword
                    popper-class="optionStyle"
                    placeholder="请输入sku名称或编号"
                    :remote-method="searchSku"
                    :loading="skuLoading"
                    @change="changeSku">
                    <el-option
                    v-for="(item,i) in skuList"
                    :key="i"
                    :label="item.skuName"
                    :value="item.skuCode">
                    <div class="flex-center-Y">
                        <img style="width:50px;height:50px;margin-right:20px;" :src="item.skuPicture" alt="">
                        <span>{{item.skuName}}</span>
                    </div>
                    </el-option>
                </el-select>
            </div>
            <el-row style="margin-bottom:20px">
                <el-col :span="4">
                    <div id="period">
                        <el-select v-model="skuInfoForm.productionStatus" placeholder="请选择">
                            <el-option
                            v-for="item in periodoptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="4">
                    <el-date-picker
                        v-if="skuInfoForm.productionStatus=='0'"
                        v-model="skuInfoForm.gmtProduction"
                        type="date"
                        value-format="yyyy-MM-dd"
                        format="yyyy-MM-dd"
                        placeholder="选择生产日期"
                        :picker-options="pickerOptions0">
                    </el-date-picker>
                </el-col>
                <el-col :span="4">
                    <div class="flex-center-Y">
                        <div>
                            <el-input v-model="skuInfoForm.productionDate" placeholder="请输入保质期" type="number" v-if="skuInfoForm.productionStatus=='0'"></el-input>
                        </div>
                        <div>
                            <span  v-if="skuInfoForm.productionStatus=='0'">&nbsp;天</span>
                        </div>
                        
                    </div>
                </el-col> 
                <el-col :span="8">
                    <el-date-picker
                        v-if="skuInfoForm.productionStatus=='1'"
                        v-model="skuInfoForm.outWarrantyTime"
                        type="date"
                        value-format="yyyy-MM-dd"
                        format="yyyy-MM-dd"
                        placeholder="选择过保日期 "
                        :picker-options="pickerOptions01">
                    </el-date-picker>
                </el-col> 
            </el-row>
            <el-row>
                <el-col :span="8">
                    可用库存：<el-input-number v-model="skuInfoForm.residueNum" :min="1"></el-input-number>
                </el-col>
                <el-col :span="8" class="flex-center-Y">
                    成本价：
                    <div style="width:200px"><el-input v-model="skuInfoForm.purchasePrice" type="number"></el-input></div>
                </el-col>
                <el-col :span="8">
                    库存价值：<span style="line-height:40px">￥{{(skuInfoForm.residueNum*skuInfoForm.purchasePrice).toFixed(2)}}</span>
                </el-col>
            </el-row>
            <span slot="footer"
                  class="dialog-footer">
                <el-button @click="addStockVisible = false">取 消</el-button>
                <el-button type="primary"
                           @click="commitAdd(skuInfoForm)">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog title="仓库对比分析"
                   :visible.sync="showContrast"
                   >
                   <div style="padding:0 20px;font-size:15px">
                        <div style="margin-bottom:10px">货道需要数量：{{contrastData.needNum}} 件</div>
                        <div style="margin-bottom:10px">未补货数量 ：{{contrastData.cpNum}} 件</div>
                        <el-table :data="contrastData.batchs"
                            stripe
                            max-height="400"
                            style="width: 100%"
                            v-loading.body="listLoading"
                            element-loading-text="拼命加载中">
                        <el-table-column prop="skuCode"
                                        label="SKU编号"
                                        align="center"></el-table-column>
                        <el-table-column prop="skuName"
                                        label="SKU名称"
                                        align="center"></el-table-column>
                        <el-table-column prop="skuPicture"
                                        label="SKU图片"
                                        align="center">
                            <template slot-scope="scope">
                                <img :src="scope.row.skuPicture"
                                    width="40"
                                    height="40"
                                    class="portrait" />
                            </template>
                        </el-table-column>
                        <el-table-column prop="batchCode"
                                        label="批次编号"
                                        align="center"></el-table-column>
                        <el-table-column label="仓库剩余数量"
                                        align="center">
                            <template slot-scope="scope">
                                {{scope.row.residueNum || '0'}} 件
                            </template>
                        </el-table-column>
                        <el-table-column prop="outWarrantyTime"
                                        label="过期时间"
                                        align="center"></el-table-column>
                    </el-table>
                   </div>
                   <span slot="footer"
                        class="dialog-footer">
                    </span>
        </el-dialog>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            makeInventoryFlag:this.$route.params.makeInventoryFlag,//是否正在盘库中
            activeName:window.localStorage.getItem('activeName') || '0',
            productionStatus:"0",
            listLoading: false,
            totalCount: 0,
            addData:[{createdTimes:"",wareNums:""}],
            searchValue: "",
            selectedTab: "skuName",
            selectTabs: [
                {
                    name: "SKU编号",
                    id: "skuCode"
                },
                {
                    name: "SKU名称",
                    id: "skuName"
                }
            ],
            tableData: [],
            tableDataB: [],
            tableDataC: [],
            periodoptions:[{value: '0',label: '按生产日期'},{value: '1',label: '按过保日期'},{value: '2',label: '无保质期'}],
            params: {
                pageRow: 20,
                pageNum: 1,
                machineCode:"",
                storeCode:this.$route.params.storeCode,
                wareId:this.$route.params.wareId,
                skuCode:this.$route.params.skuCode,
                skuName:"",
                out:"",
                limitFlag:window.localStorage.getItem('limitFlag'),//是否低于库存预警值
            },
            addStockVisible:false,
            skuInfoForm:{
                productionStatus:'0',
                residueNum:1,
                purchasePrice:0
            },
            productionStatus:"0",
            selectWare:this.$route.params.wareId,
            pickerOptions0: { 
                disabledDate(time) {
                    return time.getTime() > Date.now();//如果没有后面的-8.64e7就是不可以选择今天的 
                }
            },
            pickerOptions01: { 
                disabledDate(time) {
                    return time.getTime() < Date.now()-8.64e7;//如果没有后面的-8.64e7就是不可以选择今天的 
                }
            },
            searchData:"",
            searchSkuCode:"",
            skuList:[],
            skuLoading:false,
            showContrast:false,
            contrastData:"",
            machineList:[]
        };
    },
    created() {
        if(this.$route.params.skuCode=='_'){
            this.params.skuCode=''
        }
        this.getList()
        this.getMachineList()
        document.getElementsByTagName("body")[0].style.minWidth="1400px";
        document.getElementsByTagName("body")[0].style.overflow="auto";
    },
    destroyed(){
        window.localStorage.removeItem("activeName")
        window.localStorage.removeItem("limitFlag")
    },
    methods: {
        toBack(){//返回上级
            this.$router.push({path:'/operation/'})
            },
        getMachineList(){
            this.api({
                url: "/inventory/cpMachineList",
                method: "post",
                data: {
                    manageId: this.userId
                }
            }).then(data => {
                this.machineList=data
            }).catch(data =>{
                 
            });
        },
        toOperation(row){
            window.localStorage.setItem('channelids',row.channelids)
            this.$router.push({path:'/operation/storeDetailsS/'+this.params.storeCode+'/'+row.machineCode})
        },
        toContrast(row){
            this.showContrast=true
            this.api({
                url: "/inventory/machineToWare",
                method: "post",
                data: {
                    skuCode:row.skuCode,
                    machineCode:row.machineCode
                }
            }).then(data => {
                this.contrastData=data
            }).catch(data =>{
                 
            });
        },
        changeSku(number){
            this.searchSkuCode=number
        },
        searchSku(searchData){
            this.skuLoading=true
            this.api({
                url: "/inventory/skuFind",
                method: "post",
                data: {
                    // skuCode:searchData,
                    skuName:searchData
                }
            }).then(data => {
                this.skuList=data
                this.skuLoading=false
            }).catch(data =>{
                 
            });
        },
        handleClick(){
            this.params.limitFlag=false
            window.localStorage.removeItem("limitFlag")
            this.params.pageNum=1
            this.getList()
        },
        commitAdd(row){//提交添加库存
                let  gmtProduction,productionDate,outWarrantyTime,batchId
                if(!row.productionStatus){
                    this.$message({
                        type: "error",
                        message: "请选择保质期类型"
                    });
                    return;
                }
                if(row.productionStatus=='0'){
                    gmtProduction=row.gmtProduction
                    productionDate=row.productionDate
                    if(!gmtProduction || !productionDate){
                        this.$message({
                        type: "error",
                        message: "请填写生产日期及保质期"
                    });
                    return;
                    }
                }else if(row.productionStatus=='1'){
                    outWarrantyTime=row.outWarrantyTime
                    if(!outWarrantyTime){
                        this.$message({
                        type: "error",
                        message: "请填写过保日期"
                    });
                    return;
                    }
                }else if(row.productionStatus=='2'){
                    
                }
                if(!row.purchasePrice){
                    this.$message({
                        type: "error",
                        message: "请填写成本"
                    });
                    return;
                }
                if(!row.residueNum){
                    this.$message({
                        type: "error",
                        message: "请填写数量"
                    });
                    return;
                }
            this.api({
                url: "/inventory/addWareSku",
                method: "post",
                data: {outWarrantyTime:outWarrantyTime,purchasePrice:row.purchasePrice,productionStatus:row.productionStatus,createdTimes:gmtProduction,wareNums:row.residueNum,skuCode:this.searchSkuCode,wareId:this.selectWare,productionDate:productionDate}
            }).then(data => {
                this.$message({
                        type: "success",
                        message: "添加成功 !"
                    });
                this.addStockVisible=false
                this.searchData=""
                this.searchSkuCode=""
                this.skuInfoForm={
                        productionStatus:'0',
                        residueNum:1,
                        purchasePrice:0
                    },
                this.skuList=[]
                this.getList()
            }).catch(data =>{
                 
            });
        },
        delbatch(row){
            this.$confirm('是否确认删除该批次?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.api({
                                url: "inventory/deleteWareBatchInfo",
                                method: "post",
                                data: {
                                    batchId:row.batchCode,
                                    skuCode:row.skuCode,
                                    makeInventoryFlag:this.makeInventoryFlag=='false' ? false : true
                                }
                            })
                                .then(data => {
                                    this.$message({
                                        type: "success",
                                        message: "删除成功 !"
                                    });
                                    this.getList()
                                })
                })
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
        search() {
            if (!this.selectedTab) {
                this.selectedTab = "skuName";
            }
            this.params.skuCode=""
            this.params.skuName=""
            this.params[this.selectedTab] = this.searchValue;
            this.getList();
        },
        sortMethod({ column, prop, order }) {
            let out = "";
            if (order == "ascending") out = "out";
            if (order == "descending") out = "";
            this.params.out=out
            this.getList()
        },
        getList() {
            this.listLoading = true;
            if(this.activeName=='0'){
                this.api({
                    url: "/inventory/wareSkuList",
                    method: "post",
                    data: this.params
                }).then(data => {
                    this.listLoading = false;
                    this.tableData = data.list;
                    this.totalCount = data.totalCount;
                });
            }else if(this.activeName=='1'){
                this.api({
                    url: "/inventory/machineSkuList",
                    method: "post",
                    data: this.params
                }).then(data => {
                    this.listLoading = false;
                    this.tableDataB = data.list;
                    this.totalCount = data.totalCount;
                });
            }else if(this.activeName=='2'){
                this.api({
                    url: "/inventory/cpOdoSkuList",
                    method: "post",
                    data: this.params
                    // data: {
                    //     "storeCode": "NO.972003",
                    //     "pageNum":1,
                    //     "pageRow":"10",
                    //     "machineCode":"12020070100010",
                    //     "skuCode":"70000652",
                    //     "cpStatus":"pick"
                    // }
                }).then(data => {
                    this.listLoading = false;
                    this.tableDataC = data.list;
                    this.totalCount = data.totalCount;
                });
            }
        }
    },
    computed: {
        ...mapGetters(["userId", "userName"])
    }
};
</script>

