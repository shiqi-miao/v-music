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
    margin-top: 20px;
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
/* .el-select .el-input {
  width: 120px;
} */
.note-form{
    width: 30%;
}
.flex-center{
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
}
.ic-arrow{
    padding: 10px 20px;
    font-size: 20px;
    cursor: pointer;
}
.fk-sum{
    line-height: 40px
}
.fk{
    line-height: 28px;
}
.blod{
    font-weight: 600
}
</style>

<template>
    <div class="app-container">
        
        <div class="title" v-if="repairType == 'D'">补货单</div>
        <div class="title" v-else>补货单</div>
        <el-card shadow="always" class="msg">
            <el-row :gutter="12">
                <el-col :span="12">
                    <span class="name">补货单编号：</span>
                    {{info.repairCode}}
                </el-col>
                <el-col :span="12">
                    <span class="name">生成时间：</span>
                    {{info.gmtCreated}}
                </el-col>
            </el-row>
            <el-row :gutter="12">
                <el-col :span="12">
                    <span class="name">补货门店：</span>
                    {{info.storeName}}
                </el-col>
                <el-col :span="12">
                    <span class="name">补货机器：</span>
                    {{info.machineName}}
                </el-col>
            </el-row>
            <el-row :gutter="12">
                <el-col :span="12">
                    <span class="name">状态：</span>
                   {{repairType == 'A' ? '等待确认' : repairType == 'B' ? '确认超时' : repairType == 'C' ? '出库中' : repairType == 'D' ? '等待提货' : repairType == 'F' ? '申请退仓' : ''}}
                </el-col>
            </el-row>
        </el-card>
        <el-table v-if="repairType == 'D'" :data="tableData" stripe style="width: 100%" max-height="600" v-loading.body="listLoading" element-loading-text="拼命加载中">
            <el-table-column prop="skuCode" label="SKU编号" style="width: 18%" align="center"></el-table-column>
            <el-table-column prop="goodsName" label="SKU名称" style="width: 18%" align="center"></el-table-column>
            <el-table-column prop="appPicture" label="SKU图片" style="width: 18%" align="center">
                <template slot-scope="scope">
                    <img :src="scope.row.appPicture" width="40" height="40" class="portrait" />
                </template>
            </el-table-column>
            <el-table-column prop="stockNum" label="可用库存" style="width: 18%" align="center"></el-table-column>
            <el-table-column prop="repairNum" label="提货数量" style="width: 18%" align="center"></el-table-column>
            <!-- <el-table-column prop="thresholdValue" label="库存SKU批次#实际出库数量" style="width: 18%" align="center">
               <template slot-scope="scope">
                   {{scope.row.thresholdValue}};{{scope.row.thresholdValue}}
                </template>
            </el-table-column> -->
        </el-table>       
        <el-table v-else :data="tableData" stripe style="width: 100%" max-height="600" v-loading.body="listLoading" element-loading-text="拼命加载中">
            <!-- <el-table-column type="expand">
                <template slot-scope="props">
                    <el-table :data="props.row.repairInfoDetailsStoreInfoList" style="width: 100%" show-header='false'>
                        <el-table-column prop="skuCode" label="" width="800" align="center"></el-table-column>
                        <el-table-column prop="storeNum" label="" style="width: 18%" align="center">
                            <template slot-scope="scope">
                                <div>
                                    {{scope.row.storeName}}
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column prop="repairNum" label="" style="width: 18%" align="center">
                            <template slot-scope="scope">
                                {{scope.row.repairNum}}(含X件富余量)
                            </template>
                        </el-table-column>
                    </el-table>
                </template>
            </el-table-column> -->
            <el-table-column prop="skuCode" label="SKU编号" style="width: 18%" align="center"></el-table-column>
            <el-table-column prop="goodsName" label="SKU名称" style="width: 18%" align="center"></el-table-column>
            <el-table-column prop="appPicture" label="SKU图片" style="width: 18%" align="center">
                <template slot-scope="scope">
                    <img :src="scope.row.appPicture" width="40" height="40" class="portrait" />
                </template>
            </el-table-column>
            <el-table-column prop="stockNum" label="库存数量" style="width: 18%" align="center"></el-table-column>
            <el-table-column prop="storeNum" label="补货门店数量" style="width: 18%" align="center">
                <template slot-scope="scope">
                    <div class="fk-sum" :class="{'blod':scope.row.isOpen}">
                        {{scope.row.storeNum}}
                    </div>
                    <div v-if="scope.row.isOpen" class="fade-enter-active fadeIn">
                    <div v-for="(item,i) in scope.row.repairInfoDetailsStoreInfoList" :key="i" class="fk">
                        {{item.storeName}}
                    </div>
                    </div>

                </template>
            </el-table-column>
            <el-table-column prop="repairNum" label="补货数量" style="width: 18%" align="center">
                <template slot-scope="scope">
                    <div class="fk-sum" :class="{'blod':scope.row.isOpen}">
                        {{scope.row.repairNum}}(含X件富余量)
                    </div>
                    <div v-if="scope.row.isOpen" class="fade-enter-active fadeIn">
                    <div v-for="(item,i) in scope.row.repairInfoDetailsStoreInfoList" :key="i" class="fk">
                        {{item.repairNum}}(含X件富余量)
                    </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="thresholdValue" label="操作" style="width: 18%" align="center" v-if="repairType == 'A'">
               <template slot-scope="scope" >
                   <div class="flex-center">
                        <el-button @click="toRemove(scope.row)" type="text" size="small">移除</el-button>
                        <i class="el-icon-caret-bottom ic-arrow" v-if="scope.row.isOpen" @click="close(scope.row.index)"></i>
                        <i class="el-icon-caret-left ic-arrow" v-else @click="open(scope.row.index)"></i>
                   </div>
                </template>
            </el-table-column>
        </el-table>
        <div v-if="repairType == 'D'" class="note-form">
            <el-form :model="info" label-width="80px" size="mini" label-position="left">
                <el-form-item label="补货人员:">
                    {{info.repairName}}&nbsp;({{info.repairPhone}})
                </el-form-item>
                <!-- <el-form-item label="仓库管理员:">
                    {{info.userName}}
                </el-form-item>
                <el-form-item label="出库时间:">
                    {{info.gmtModifiedE}}
                </el-form-item> -->
            </el-form>
        </div>
        <div class="center">
            <el-button round @click="$router.go(-1)">返回</el-button>
            <el-button type="primary" round @click="submit()" v-if="repairType == 'A'">提交补货</el-button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            repairType:this.$route.params.repairType,
            listLoading:false,
            skuTableDataLoading:false,
            tableData:[],
            info:{},
        }
    },
    created(){
        this.getData()//获取详情
    },
    methods:{
        getData(){
            this.listLoading = true;
            this.api({
                url: "/ware/repairInfoDetails",
                method: "get",
                params: {
                    repairCode:this.$route.params.repairCode,
                    repairType:this.$route.params.repairType,
                }
            }).then(data => {
                this.info = data
                let lists = data.repairInfoDetailsList
                for(let i in lists){
                    lists[i].index = i
                }
                this.tableData = lists
                this.listLoading = false;
            })
        },
        toRemove(row){
            let this_ = this;
            this.$confirm('是否将该SKU移除补货清单？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this_.api({
                        url: "/ware/removeRepairDetails",
                        method: "get",
                        params: {
                            repairInfoDetailsId:row.repairInfoDetailsId,
                        }
                    }).then(data => {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        })
                        this.getData()
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消移除'
                    });
                })
        },
        submit(){
            let this_ = this
            this.$confirm('请确认是否将补货单提交给仓库进行备货', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this_.api({
                        url: "/ware/submitRepair",
                        method: "get",
                        params: {
                            repairCode:this.$route.params.repairCode,
                        }
                    }).then(data => {
                        this_.$router.push({path: '/replenishment'})
                        this_.$message({
                            type: 'success',
                            message: '提交成功!'
                        })
                    })

                }).catch(() => {
                    // this.$message({
                    //     type: 'info',
                    //     message: '已取消提交'
                    // });
                })
        },
        addSKU(){
            this.addSKUDialogVisible = true
            this.getSKUList({})//获取sku表格
        },
        addSKUData(){
            if(!this.skuCode){
                this.$message({
                    message: '你没有选择sku哦～',
                    type: 'warning',
                    duration: 2000,
                })
                return
            }
            this.api({
                url: "/ware/saveToPurchase",
                method: "get",
                params: {
                    purchaseCode:this.$route.params.purchaseCode,
                    skuCode:this.skuCode,
                    goodsType:this.info.goodsType
                }
            }).then(data => {
                this.addSKUDialogVisible = false
                this.getData()//获取详情
            })
            
        },
        search(){
            if(!this.searchValue){
                this.$message({
                    message: '你没有输入搜索条件哦～',
                    type: 'warning',
                    duration: 2000,
                })
                return
            }
            if(!this.selectedTab){
                this.selectedTab = "skuName"
            }
            let params = {}
            params[this.selectedTab] = this.searchValue
            this.getSKUList(params);
        },
        getSKUList(params){
            this.skuTableDataLoading = true
            params["goodsType"] = this.info.goodsType
            this.api({
                url: "/ware/searchSku",
                method: "get",
                params: params
            }).then(data => {
                this.skuTableData = data
                this.skuTableDataLoading = false
            })
        },
        open(index){
            // this.tableData[index].isOpen = true
            this.$set(this.tableData[index],'isOpen',true)
            // console.log(index,this.tableData[index])
            // let list = this.tableData[index].repairInfoDetailsStoreInfoList
            // list.unshift(Number(index)+1,0)
            // Array.prototype.splice.apply(this.tableData, list);
            // let array = this.tableData
            // this.$set(this,'tableData',array)
            // console.log(this.tableData)
        },
        close(index){
            this.$set(this.tableData[index],'isOpen',false)
        },
        handleSelectionChange(val) {
            for(let i in this.skuTableData){
                this.$set(this.skuTableData[i],'checked',this.skuTableData[i].skuCode==val.skuCode)?true:false
            }
            this.skuCode = val.skuCode
        },
    }
    
}
</script>