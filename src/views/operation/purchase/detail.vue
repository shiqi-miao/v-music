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
/* .el-select .el-input {
  width: 120px;
} */
</style>

<template>
    <div class="app-container">
        <div class="title" v-if="purchaseType=='E'">入库单</div>
        <div class="title" v-else>采购单</div>
        <el-card shadow="always" class="msg">
            <el-row :gutter="12">
                <el-col :span="12">
                    <span class="name">采购单编号：</span>
                    {{info.purchaseCode}}
                </el-col>
                <el-col :span="12">
                    <span class="name">采购分类：</span>
                    {{info.typeName}}   
                </el-col>
            </el-row>
            <el-row :gutter="12">
                <el-col :span="12">
                    <span class="name">生成时间：</span>
                    {{info.gmtCreated}}
                </el-col>
                <el-col :span="12">
                    <span class="name">备注：</span>
                    {{info.remark || info.purchaseRemark || '该采购单将在下个采购周期超时'}}
                </el-col>
            </el-row>
            <el-row :gutter="12">
                <el-col :span="12" v-if="info.gmtModifiedB">
                    <span class="name">确认时间：</span>
                    {{info.gmtModifiedB}}
                </el-col>
                <el-col :span="12" v-if="info.gmtModifiedC">
                    <span class="name">开始采购：</span>
                    {{info.gmtModifiedC}}
                </el-col>
            </el-row>
        </el-card>
        <el-table v-if="purchaseType == 'B'" :data="tableData" stripe style="width: 100%" max-height="600" v-loading.body="listLoading" element-loading-text="拼命加载中">
            <el-table-column label="" width="60" align="center">
                <template slot-scope="scope">
                    <i class="el-icon-news el-icon-zoom-in-re" v-if="scope.row.isNew == 1"></i>
                </template>
            </el-table-column>
            <el-table-column prop="skuCode" label="SKU编号" style="width: 18%" align="center"></el-table-column>
            <el-table-column prop="goodsName" label="SKU名称" style="width: 18%" align="center"></el-table-column>
            <el-table-column prop="appPicture" label="SKU图片" style="width: 18%" align="center">
                <template slot-scope="scope">
                    <img :src="scope.row.appPicture" width="40" height="40" class="portrait" />
                </template>
            </el-table-column>
            <el-table-column prop="stockNum" label="库存数量" style="width: 18%" align="center"></el-table-column>
            <!-- <el-table-column prop="thresholdValue" label="采购阈值" style="width: 18%" align="center"></el-table-column> -->
            <el-table-column prop="recommendNum" label="单价" style="width: 18%" align="center">
                 <template slot-scope="scope">
                    <span v-if="scope.row.skuModel.length!==0">￥{{scope.row.skuModel[0].modelPrice}}</span>
                </template>
            </el-table-column>
            <el-table-column prop=""
                             label="推荐采购数量(采购规格)"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    <span v-if="scope.row.skuModel.length!==0">{{scope.row.recommendNum}} ({{scope.row.skuModel[0].pcsNum}}件/{{scope.row.skuModel[0].modelTypeName}})</span>
                </template>
            </el-table-column>
            <el-table-column prop="sumModelPrice" label="预算" style="width: 18%" align="center">
                <template slot-scope="scope">
                    <span>￥{{scope.row.sumModelPrice}}</span>
                </template>
            </el-table-column>
        </el-table>
        <el-table v-if="purchaseType == 'A'" :data="tableData" stripe style="width: 100%" max-height="600" v-loading.body="listLoading" element-loading-text="拼命加载中">
            <el-table-column label="" width="60" align="center">
                <template slot-scope="scope">
                    <i class="el-icon-news el-icon-zoom-in-re" v-if="scope.row.isNew == 1"></i>
                </template>
            </el-table-column>
            <el-table-column prop="skuCode" label="SKU编号" style="width: 18%" align="center"></el-table-column>
            <el-table-column prop="goodsName" label="SKU名称" style="width: 18%" align="center"></el-table-column>
            <el-table-column prop="appPicture" label="SKU图片" style="width: 18%" align="center">
                <template slot-scope="scope">
                    <img :src="scope.row.appPicture" width="40" height="40" class="portrait" />
                </template>
            </el-table-column>
            <el-table-column prop="stockNum" label="库存数量" style="width: 18%" align="center"></el-table-column>
            <!-- <el-table-column prop="thresholdValue" label="采购阈值" style="width: 18%" align="center"></el-table-column> -->
            <el-table-column prop="recommendNum" label="采购数量（采购规格）" style="width: 18%" align="center">
                <template slot-scope="scope">
                    <el-input-number v-model="scope.row.recommendNum" size="small" :min="1" :max="scope.row.stockNum"></el-input-number><span>{{scope.row.skuModel[0].pcsNum}}件/{{scope.row.skuModel[0].modelTypeName}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="thresholdValue" label="单价" style="width: 18%" align="center">
                <template slot-scope="scope">
                    <span v-if="scope.row.skuModel.length!==0">￥{{scope.row.skuModel[0].modelPrice}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="thresholdValue" label="预算" style="width: 18%" align="center">
                <template slot-scope="scope">
                    <span v-if="scope.row.skuModel.length!==0">￥{{scope.row.recommendNum*scope.row.skuModel[0].pcsNum*scope.row.skuModel[0].modelPrice}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="thresholdValue" label="操作" style="width: 18%" align="center">
               <template slot-scope="scope">
                    <el-button @click="toRemove(scope.row)" type="text" size="small">移除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- <el-table v-else :data="tableData" stripe style="width: 100%" max-height="600" v-loading.body="listLoading" element-loading-text="拼命加载中">
            <el-table-column prop="skuCode" label="SKU编号" style="width: 18%" align="center"></el-table-column>
            <el-table-column prop="goodsName" label="SKU名称" style="width: 18%" align="center"></el-table-column>
            <el-table-column prop="appPicture" label="SKU图片" style="width: 18%" align="center">
                <template slot-scope="scope">
                    <img :src="scope.row.appPicture" width="40" height="40" class="portrait" />
                </template>
            </el-table-column>
            <el-table-column label="采购SKU批次#价格#数量" style="width: 18%" align="center">
                <template slot-scope="scope">
                    <div v-for="(item,i) in scope.row.batchList" :key="i">
                        {{i+1}}、{{item.batchCode}}：¥{{item.purchasePrice}}；{{item.batchNum}}pcs
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="sumNum" label="采购总量" style="width: 18%" align="center"></el-table-column>
            <el-table-column prop="sumPrice" label="采购成本" style="width: 18%" align="center"></el-table-column>
        </el-table> -->
        <div v-if="purchaseType == 'E'" class="note-form">
            <el-form :model="info" label-width="100px" size="mini" label-position="left">
                <el-form-item label="采购总成本:">
                    ¥ {{info.sumPrice}}
                </el-form-item>
                <el-form-item label="备注信息:">
                    <span v-if="purchaseType == 'D' || purchaseType == 'E'">
                        {{info.remark}}
                    </span>
                    <el-input v-else v-model="info.remark" placeholder="审批人"></el-input>
                    <!-- <el-input size="mini" placeholder="请输入备注信息" v-model="info.remark"></el-input> -->
                </el-form-item>
                <el-form-item label="采购人员:">
                    {{info.userName}}
                </el-form-item>
                <el-form-item label="完成采购:" v-if="info.gmtModifiedD">
                    {{info.gmtModifiedD}}
                </el-form-item>
                <el-form-item label="入库时间:">
                    {{info.gmtModifiedE}}
                </el-form-item>
                <el-form-item label="仓库管理员:">
                    {{info.userName}}
                </el-form-item>
            </el-form>
        </div>
        <div class="left"><el-button icon="el-icon-plus" round @click="addSKU()" v-if="purchaseType == 'A'">新增需采购SKU</el-button></div>
        <div class="center"><el-button type="primary" round @click="submit()" v-if="purchaseType == 'A'">提交采购</el-button></div>
        <div class="center"><el-button type="primary" round @click="back()" v-if="purchaseType == 'B'">返 回</el-button></div>
        <el-dialog title="选择需采购SKU" :visible.sync="addSKUDialogVisible" width="66%">
            <el-input placeholder="请输入内容" v-model="searchValue" class="input-with-select" @keyup.enter.native="search">
                <el-select v-model="selectedTab" placeholder="请选择" slot="prepend">
                    <el-option v-for="item in selectTabs" :key="item.id" :label="item.name" :value="item.id">
                    </el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
            </el-input>
            <br><br>
            <el-table 
                stripe :data="skuTableData" style="width: 100%;" 
                @selection-change="handleSelectionChange" ref="multipleTable" @row-click="clickRow"
                v-loading.body="skuTableDataLoading" element-loading-text="拼命加载中">
                    <el-table-column type="selection" width="55">
                        <!-- <template slot-scope="scope">
                            <el-checkbox v-model="scope.row.checked"></el-checkbox>
                        </template> -->
                    </el-table-column>
                    <el-table-column prop="typeName" label="SKU分类"></el-table-column>
                    <el-table-column prop="goodsName" label="SKU名称"></el-table-column>
                    <el-table-column prop="skuCode" label="SKU编号"></el-table-column>
                    <el-table-column prop="stockNum" label="库存">
                        <template slot-scope="scope">
                            <span>{{scope.row.stockNum}}件</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="" label="采购规格">
                        <template slot-scope="scope">
                            <span>{{scope.row.pcsNum}}件/{{scope.row.modelType}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="appPicture" label="图片" style="width: 18%" align="center">
                        <template slot-scope="scope">
                            <img :src="scope.row.appPicture" width="40" height="40" class="portrait" />
                        </template>
                    </el-table-column>
            </el-table>
            <div class="pagination-line">
                <el-pagination background layout="prev, pager, next"
                :total="totalCount"
                @current-change="currentChange" @prev-click="prevClick" @next-click="nextClick">
                </el-pagination>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="addSKUDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addSKUData">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
            listLoading:false,
            totalCount:0,
            skuTableDataLoading:false,
            tableData:[],
            skuTableData:[],
            info:{},
            addSKUDialogVisible:false,
            selectedTab:"skuName",
            selectTabs:[
                {
                    name:"SKU编号",
                    id:"skuCode"
                },
                {
                    name:"SKU名称",
                    id:"skuName"
                },
                {
                    name:"SKU分类",
                    id:"skuType"
                },
            ],
            params:{
                offSet:0,
                pageRow:15,
                pageNum:1
            },
            searchValue:"",
            skuCode:'',
            purchaseType:this.$route.params.purchaseType||'',
            purchaseCode:'',
            // purchaseType:'B',//zb大哥要传B
            deadline:'',
            skuCodes:[]
        }
    },
    created(){
        this.getData()//获取详情
    },
    methods:{
        getData(){
            this.listLoading = true;
            this.api({
                url: "/ware/purchaseDetails",
                method: "get",
                params: {
                    purchaseCode:this.$route.params.purchaseCode,
                    purchaseType:this.$route.params.purchaseType,
                }
            }).then(data => {
                this.info = data
                let lists = data.purchaseSkuListInfo
                // for(let i in lists){
                //     lists[i].recommendNum = lists[i].thresholdValue - lists[i].stockNum
                // }
                this.tableData = lists
                console.log(this.tableData)
                this.listLoading = false;
            })
        },
        toRemove(row){
            let this_ = this;
            this.$confirm('是否将该SKU移除采购清单？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this_.api({
                        url: "/ware/del",
                        method: "get",
                        params: {
                            purchaseDetailsId:row.purchaseDetailsId,
                        }
                    }).then(data => {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        })
                        this.getData()
                    })
                }).catch(() => {
                    // this.$message({
                    //     type: 'info',
                    //     message: '已取消移除'
                    // });
                })
        },
        changeNum(row){
            this.api({
                url: "/ware/updatePurchaseNum",
                method: "get",
                params: {
                    purchaseDetailsId:row.purchaseDetailsId,
                    num:row.recommendNum,
                }
            }).then(data => {
            })
        },
        back(){
            this.$router.push({path: '/purchase'})
        },
        submit(){
            let this_ = this
            this.$confirm('请确认是否将采购单提交给采购人员？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    let lists = this.tableData
                    let array = ""
                    for(let i in lists){
                        let item ={
                                purchaseDetailsId:lists[i].purchaseDetailsId,
                                recommendNum:lists[i].recommendNum
                            };
                        array+= JSON.stringify(item)
                    }
                    this_.api({
                        url: "/ware/updateNum",
                        method: "get",
                        params: {
                            lists:array
                        }
                    }).then(data => {
                        this_.api({
                            url: "/ware/submitToPurchase",
                            method: "get",
                            params: {
                                purchaseCode:this.$route.params.purchaseCode,
                            }
                        }).then(data => {
                            this_.$router.push({path: '/purchase'})
                            this_.$message({
                                type: 'success',
                                message: '提交成功!'
                            })
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
            this.skuCodes = []
            this.addSKUDialogVisible = true
            this.getSKUList({offSet:0,
                pageRow:15,
                pageNum:1})//获取sku表格
        },
        addSKUData(){
            console.log(this.skuCode)
            console.log(this.skuCodes)
            if(this.skuCodes.length == 0){
                this.$message({
                    message: '你没有选择sku哦～',
                    type: 'warning',
                    duration: 2000,
                })
                return
            }
            let skucode = ''
            for(let i in this.skuCodes){
                skucode +=  i==0 ?this.skuCodes[i].skuCode :','+this.skuCodes[i].skuCode
            }
            this.api({
                url: "/ware/saveToPurchase",
                method: "get",
                params: {
                    purchaseCode:this.$route.params.purchaseCode,
                    skuCodes:skucode,
                    goodsType:this.info.goodsType
                }
            }).then(data => {
                this.addSKUDialogVisible = false
                this.getData()//获取详情
            })
        },
        search(){
            // if(!this.searchValue){
            //     this.$message({
            //         message: '你没有输入搜索条件哦～',
            //         type: 'warning',
            //         duration: 2000,
            //     })
            //     return
            // }
            if(!this.selectedTab){
                this.selectedTab = "skuName"
            }
            // let params = {}
            for(var i in this.params){
                if(i!=="offSet" && i!=="pageRow" && i!=="pageNum"){
                    if(
                        i!==this.selectedTab
                    ){
                         delete this.params[i]
                    }
                    
                }
                    this.params[this.selectedTab] = this.searchValue
                
            }
            
            this.getSKUList(this.params);
        },
        getSKUList(params){
            this.skuTableData = []
            this.skuTableDataLoading = true
            params["goodsType"] = this.info.goodsType
            this.api({
                url: "/ware/searchSku",
                method: "get",
                params: params
            }).then(data => {
                this.totalCount = data.totalCount
                this.listLoading = false;
                this.skuTableData = data.list
                this.skuTableDataLoading = false
            })
        },
        currentChange(index){
            this.params.pageNum = index
            this.getSKUList(this.params)
        },
        prevClick(index){
            this.params.pageNum = index
            this.getSKUList(this.params)
        },
        nextClick(index){
            this.params.pageNum = index
            this.getSKUList(this.params)
        },
        handleSelectionChange(val) {
            // for(let i in this.skuTableData){
            //     this.$set(this.skuTableData[i],'checked',this.skuTableData[i].skuCode==val.skuCode)?true:false
            // }
            // this.skuCode = val.skuCode
            this.skuCodes = val
        },
        clickRow(row){
            this.$refs.multipleTable.toggleRowSelection(row);
        }
    }
    
}
</script>