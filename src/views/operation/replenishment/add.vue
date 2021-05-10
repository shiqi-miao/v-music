<style>
.title{
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    margin: 20px 0;
}
.msg{
    line-height: 32px;
    margin: 20px 0;
}
.center{
    text-align: center;
}
.left{
    margin-top: 20px;
}
.name{
    font-weight: 600;
    text-align: left;
    display: inline-block;
    width: 100px;
}
.input-with-select{
    width: 50%;
}
.create-rep .el-select .el-input {
  width: 200px;
}
.create-rep2 .el-select .el-input {
  width: 180px;
}
.el-loading-mask{
    z-index: 9999
}
</style>

<template>
    <div class="app-container ">
        <div class="title">补货单</div>
        <el-card shadow="always" class="msg">
            <el-row :gutter="12">
                <el-col :span="12" class="create-rep">
                    请选择要补货的门店：
                    <el-select v-model="selectedTab" placeholder="请选择" @change="storeChange">
                        <el-option v-for="item in selectTabs" :key="item.storeCode" :label="item.storeName" :value="item.storeCode">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="12" class="create-rep" v-if="selectedTab">
                    请选择要补货的售货机：
                    <el-select v-model="selectMachine" placeholder="请选择" @change="machineChange">
                        <el-option v-for="item in namefilters" :key="item.machineCode" :label="item.machineName" :value="item.machineCode">
                        </el-option>
                    </el-select>
                </el-col>
            </el-row>
        </el-card>
        <el-table :data="tableData" stripe style="width: 100%" max-height="600" 
        v-loading.body="listLoading" element-loading-text="拼命加载中">
            <el-table-column label="" width="60" align="center">
                <template slot-scope="scope">
                    <i class="el-icon-news el-icon-zoom-in-re" v-if="scope.row"></i>
                </template>
            </el-table-column>
            <!-- <el-table-column :filters="namefilters"
                             column-key="machineCode"
                             :filter-multiple="false"
            prop="machineName" label="售货机名称" style="width: 18%" align="center"></el-table-column> -->
            <!-- <el-table-column prop="machineName" label="售货机名称" style="width: 18%" align="center"></!--> -->
            <el-table-column prop="skuCode" label="SKU编号" style="width: 18%" align="center"></el-table-column>
            <el-table-column prop="skuName" label="SKU名称" style="width: 18%" align="center"></el-table-column>
            <el-table-column prop="typeName" label="SKU分类" style="width: 18%" align="center"></el-table-column>
            <el-table-column prop="appPicture" label="SKU图片" style="width: 18%" align="center">
                <template slot-scope="scope">
                    <img :src="scope.row.skuPicture" width="40" height="40" class="portrait" />
                </template>
            </el-table-column>
            <el-table-column prop="thresholdValue" label="当前待补数量" style="width: 18%" align="center">
                <template slot-scope="scope">
                    <span :class="{danger:scope.row.needNum>scope.row.stockNumber}">{{scope.row.needNum}}件</span>
                </template>
            </el-table-column>
            <el-table-column prop="stockNumber" label="可用库存" style="width: 18%" align="center">
                <template slot-scope="scope">
                    <span :class="{danger:scope.row.needNum>scope.row.stockNumber}">{{scope.row.stockNumber}}件</span>
                </template>
            </el-table-column>
            <el-table-column prop="thresholdValue" label="提货数量" width="200px" align="center">
                <template slot-scope="scope">
                    <el-input-number v-model="scope.row.repairNum" size="small" @change="changeNum(scope.row)" min="1" :max="scope.row.stockNumber"></el-input-number>
                </template>
            </el-table-column>
            <el-table-column prop="thresholdValue" label="操作" style="width: 18%" align="center">
               <template slot-scope="scope">
                    <el-button @click="toRemove(scope.row)" type="text" size="small">移除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- <div class="pagination-line">
            <el-pagination background
                           @size-change="handleSizeChange"
                           @current-change="currentChange"
                           :current-page="params.pageNum"
                           :page-size="params.pageRow"
                           :total="totalCount"
                           :page-sizes="[10, 20, 50, 100]"
                           layout="total, sizes, prev, pager, next, jumper">
            </el-pagination>
        </div> -->
        <br>
        <div class="center">
            <el-button type="primary" round @click="addSKU()">提交补货单</el-button></div>
        <el-dialog title="确认" :visible.sync="addSKUDialogVisible" width="46%" class="create-rep2">
            <span>请选择补货员：</span>
            <el-select v-model="selectedTabPeople" placeholder="请选择">
                    <el-option v-for="item in selectTabsPeople" :key="item.repairId" :label="item.repairName" :value="item.repairId">
                    </el-option>
                </el-select>
            <br><br>
            <div>*提交补货单后，仓库即开始备货，预计30分钟内备货完成</div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="addSKUDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addSKUData">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            listLoading:false,
            skuTableDataLoading:false,
            tableData:[],
            skuTableData:[],
            info:{},
            addSKUDialogVisible:false,
            selectedTab:"",
            selectTabs:[],
            selectedTabPeople:"",
            selectTabsPeople:[
                {
                    name:"SKU编号",
                    id:"skuCode"
                },
                {
                    name:"SKU名称",
                    id:"skuName"
                },
            ],
            searchValue:"",
            skuCode:'',
            goodsType:this.$route.params.skuType||'',
            skuName:this.$route.params.skuName||'',
            purchaseCode:'',
            purchaseType:'B',//zb大哥要传B
            skuCodes:[],
            params: {
                pageRow: 20,
                pageNum: 1
            },
            totalCount:0,
            selectMachine:'',
            namefilters: [],
        }
    },
    created(){
        this.getData();
    },
    computed: {
        ...mapGetters([
            'userName'
        ])
    },
    methods:{
        getData(){
            this.api({
                url: "/ware/showStoreList",
                method: "post",
                data: {
                    username:this.userName
                }
            }).then(data => {
                this.selectTabs = data
                // if(data.length > 0){
                    // this.selectedTab = data[0].storeCode
                    // this.storeChange()
                // }
            })
        },
        storeChange(){
            this.api({
                url: "/ware/showVendName",
                method: "post",
                data: {
                    storeCode:this.selectedTab
                }
            }).then(data => {
                // let lists = []
                // for(let i in data){
                //     let item ={
                //         text:data[i].machineName,
                //         value:data[i].machineCode,
                //     }
                //     lists.push(item)
                // }
                this.namefilters = data
                if(data.length > 0){
                    this.selectMachine = data[0].machineCode
                    this.machineChange()
                }
            })
        },
        machineChange(){
            this.listLoading = true;
            this.api({
                url: "/ware/createRepairOrderInfo",
                method: "post",
                data: {
                    storeCode: this.selectedTab,
                    machineCode:this.selectMachine
                }
            }).then(data => {
                let lists = data
                for(let i in lists){
                    lists[i].index = Number(i)
                    lists[i].repairNum = lists[i].needNum <= lists[i].stockNumber ? lists[i].needNum || 0 : lists[i].stockNumber || 0
                }
                this.tableData = lists;
                // this.totalCount = data.totalCount;
                this.listLoading = false;
            })
        },
        changeNum(row){
            // this.api({
            //     url: "/ware/updatePurchaseNum",
            //     method: "get",
            //     params: {
            //         purchaseDetailsId:row.purchaseDetailsId,
            //         num:row.repairNum,
            //     }
            // }).then(data => {
            // })
        },
        toRemove(row){
            let this_ = this;
            this.$confirm('是否移除？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.tableData.splice(row.index,1)
                    for(let i in this.tableData){
                        this.tableData[i].index = Number(i)
                    }
                    this.$set(this,'table',this.tableData)
                    console.log(this.tableData)
                }).catch(() => {

                })
        },
        addSKU(){
            this.api({
                url: "/ware/showRepairMan",
                method: "post",
                data: {
                    storeCode:this.selectedTab
                }
            }).then(data => {
                this.selectTabsPeople = data
            })
            this.addSKUDialogVisible = true
        },
        addSKUData(){
            if(!this.selectedTab){
                this.$message({
                    type: 'warning',
                    message: '您未选择补货门店'
                })
                return
            }
            if(!this.selectMachine){
                this.$message({
                    type: 'warning',
                    message: '您未选择补货机器'
                })
                return
            }
            if(this.tableData.length == 0){
                this.$message({
                    type: 'warning',
                    message: '您没有选择需补货SKU'
                })
                return
            }
            if(!this.selectedTabPeople){
                this.$message({
                    type: 'warning',
                    message: '您未选择补货员'
                })
                return
            }
            for(let i in this.tableData){
                if(!this.tableData[i].repairNum){
                    this.$message({
                        type: 'warning',
                        message: this.tableData[i].skuName+'的提货数量为空'
                    })
                    return
                }
            }
            this.api({
                url: "/ware/createRepairOrder",
                method: "post",
                data: {
                    repairId:this.selectedTabPeople,
                    storeCode:this.selectedTab,
                    machineCode:this.selectMachine,
                    repairDetailsVOList:this.tableData
                }
            }).then(data => {
                this.$message({
                    type: 'success',
                    message: '补货单创建成功'
                })
                this.$router.push({path: '/replenishment'})
            })
        },
    }
}
</script>