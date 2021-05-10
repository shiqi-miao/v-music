<style scoped>
    .box{width: 80%;height:150px;border-radius: 5px;border: 1px solid #e6e6e6;margin-bottom:20px;padding:0 3%;position: relative}
    .top{padding: 20px}
    .flex-center{
        width: 100%;
        display: flex;
        display: -webkit-flex;
        align-items: center;
        -webkit-align-items: center;
        justify-content: center;
        -webkit-justify-content: center;
    }
    .flex-1 {
        flex: 1;
    }
    .flex-2 {
        flex: 2;
    }
    .flex-10 {
        flex: 10;
    }
    .blue{
     color:#66b1ff;
     cursor: pointer;
     padding: 10px 6px;
    }
    .p-absolute{
        position: absolute;
        bottom: 0;
        right: 0;
        padding-right: 5%
    }
    .center{text-align: center}
    .left{padding-left: 5%}
    .right{padding-top: 3%}
    .left .title{font-size: 30px;font-weight: 400}
    .left p{font-size: 20px;font-weight: 400}
    .el-date-editor{margin-top: 20px;margin-bottom:40px}
    .row-box{width: 80%;border: 1px solid #e4e4e4;border-bottom:0;padding-bottom: 1%}
    .row-box .col-box{height:120px;position: relative;border: 1px solid #e4e4e4;padding: 1%;text-align: center}
    .row-box .col-box .num{width:50%;height:17%;position: absolute;left: 0;border: 1px solid #e4e4e4;border-left:0;border-bottom-right-radius: 10px;border-top-right-radius: 10px;}
    .row-bottom{width: 80%;border: 1px solid #e4e4e4;border-top:0;height: 100px;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;}
    .take{width: 50%;height: 85%}
    .skuimg{margin-top: 15px}
    .skuname{font-size: 14px;margin:0}
    @media screen and (max-width:1519px) {
        .row-box{width: 99%}
        .row-bottom{width: 99%}
        .left{padding-left:2% }
    }
</style>

<template>
    <div>
        <div class="" style="display:flex;display: -webkit-flex;">
            <div class="flex-2 left">
                <p class="title">门店:{{SalePlanDetails.storeName}}</p>
                <p>机器: {{SalePlanDetails.machineName}}</p>
                <br>
                <br>
                <el-button @click="back" type="info">返    回</el-button>
            </div>
            <div class="flex-10 right">
                <div v-for="(item,key) in data" :key="key" class="row-box flex-center">
                    <div v-for="i in item" :key="i.trailsNo" class="col-box flex-1">
                        <div class="num">
                            {{i.trailsNo}}
                        </div>
                        <div v-if="i.hasSku=='1'">
                            <div>
                                <img :src="i.appPicture" alt="" width="30" height="30" class="skuimg">
                                <span v-if="i.willSku">←</span>
                                <img v-if="i.willSku" :src="i.willSku" alt="" width="30" height="30" class="skuimg">
                            </div>
                            
                            <p class="skuname">{{i.skuName}}</p>
                            <p style="cursor:pointer;color:#29d;font-size:12px;" @click="addSku(i)">点击更换</p>
                        </div>
                        <span style="line-height:120px;cursor:pointer;color:#606266" @click="addSku(i)" v-if="i.hasSku!=='1'">点击上架</span>
                        <!-- <span style="line-height:120px;cursor:pointer;color:#606266" @click="addSku(i)"  v-if="i.hasSku=='1'">更换SKU</span> -->
                    </div>
                </div>
                <div class="row-bottom center">
                    <el-button class="take">取货口</el-button>
                </div>
            </div>
        </div>
        <el-dialog title="更换SKU"
                   :visible.sync="addSkuVisible"
                   width="66%">
            <div class="content flex-center-Y">
                <span>当前SKU名称： {{skuData.skuName}}&emsp;</span>
                <img :src="skuData.appPicture"
                     width="40"
                     height="40"
                     class="portrait" />
            </div>
            <el-input placeholder="请输入内容"
                      v-model="searchValue"
                      class="input-with-select">
                <el-button slot="prepend">SKU名称</el-button>
                <el-button slot="append"
                           icon="el-icon-search"
                           @click="search"></el-button>
            </el-input>
            <el-table ref="multipleTable"
                      stripe
                      :data="skuTableData"
                      tooltip-effect="dark"
                      style="width: 100%;"
                      @current-change="handleSelectionChange"
                      v-loading.body="listLoading"
                      element-loading-text="拼命加载中">
                <el-table-column type="selection"
                                 width="55">
                    <template slot-scope="scope">
                        <el-checkbox v-model="scope.row.checked"></el-checkbox>
                    </template>
                </el-table-column>
                <el-table-column prop="skuName"
                                 label="SKU名称"></el-table-column>
                <el-table-column prop="appPicture"
                                 label="图片"
                                 style="width: 18%"
                                 align="center">
                    <template slot-scope="scope">
                        <img :src="scope.row.appPicture"
                             width="40"
                             height="40"
                             class="portrait" />
                    </template>
                </el-table-column>
                <el-table-column prop="rate"
                                 label="利润率"
                                 style="width: 18%"
                                 align="center">
                    <template slot-scope="scope">
                        {{(scope.row.rate*100).toFixed(2)}}%
                    </template>
                </el-table-column>
                <el-table-column prop="pushType"
                                 label="占本店货道"
                                 style="width: 18%"
                                 align="center">
                    <template slot-scope="scope">
                        {{scope.row.count}}个
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination-line">
                <el-pagination background
                               @size-change="handleSizeChange"
                               @current-change="currentChange"
                               :current-page="skuParams.pageNum"
                               :page-size="skuParams.pageRow"
                               :total="totalCount"
                               :page-sizes="[10, 20, 50, 100]"
                               layout="total, sizes, prev, pager, next, jumper">
                </el-pagination>
            </div>
            <span slot="footer"
                  class="dialog-footer">
                <el-button @click="addSkuVisible = false">取 消</el-button>
                <el-button type="primary"
                           @click="confirm">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
           time:"",
           listLoading: false,
           addSkuVisible:false,
           skuParams: {
                pageRow: 10,
                pageNum: 1
            },
            totalCount: 0,
            skuTableData: [],
            editType: 1,
            skuData: {},
            skuInfo:{},
            skuCode: "",
            channelid:"",
            searchValue: "",
            unusualData:[],
            unusualVisible:false,
            SalePlanDetails:{},
           data:[
                
           ]
        }
    },
    created(){
        this.getInfo()
    },
    computed: {
        ...mapGetters([
            'userName'
        ])
    },
    methods: {
        getInfo(){
            this.api({
                url: "/inventory/showTheTimeDetails",
                method: "post",
                data: {
                        machineCode:this.$route.params.machineCode,
                        }
            })
                .then(data => {
                   this.SalePlanDetails=data
                   this.data=data.trailsList
                   this.skuInfo=data.jsonList
                   for(let i in this.data){
                       for(let g in this.data[i]){
                           for(let key in this.skuInfo){
                           if(this.data[i][g].trailsNum==this.skuInfo[key].channelid && this.skuInfo[key].skuNum!==0){
                               this.data[i][g].hasSku="1"
                               this.data[i][g].skuName=this.skuInfo[key].skuName
                               this.data[i][g].skuCode=this.skuInfo[key].skuCode
                               this.data[i][g].purchasePeriod=this.skuInfo[key].purchasePeriod
                               this.data[i][g].appPicture=this.skuInfo[key].appPicture
                               this.data[i][g].skuNum=this.skuInfo[key].skuNum
                               this.data[i][g].willSku=this.skuInfo[key].willSku

                           }
                       }
                       }
                       
                   }
                   console.log(this.data)
                })
        },
        getSKUList(params) {
            params.storeCode=this.$route.params.storeCode
            this.api({
                url: "/inventory/showSkuInfoList",
                method: "post",
                data: params
            })
                .then(data => {
                    let lists = data.list;
                    for (let i in lists) {
                        if (lists[i].skuCode == this.skuData.skuCode) {
                            lists[i].checked = true;
                        } else {
                            lists[i].checked = false;
                        }
                    }
                    this.skuTableData = lists;
                    this.$set(this, "skuTableData", lists);
                    this.totalCount = data.totalCount;
                    this.listLoading = false;
                })
                .catch(e => {});
        },
        handleSizeChange(val) {
            this.skuParams.pageRow = val;
            this.getSKUList(this.skuParams);
        },
        currentChange(index) {
            this.skuParams.pageNum = index;
            this.getSKUList(this.skuParams);
        },
        prevClick(index) {
            this.skuParams.pageNum = index;
            this.getSKUList(this.skuParams);
        },
        nextClick(index) {
            this.skuParams.pageNum = index;
            this.getSKUList(this.skuParams);
        },
        addSku(row){
            this.channelid=row.trailsNum
            
            for(let i in this.skuInfo){
                if(this.channelid==this.skuInfo[i].channelid){
                    this.skuData=this.skuInfo[i]
                }
            }
            console.log(this.skuData)
            this.skuCode = "";
            this.skuParams = {
                pageRow: 10,
                pageNum: 1
            };
            this.searchValue = "";
            this.api({
                url: "/store/aislegoods",
                method: "post",
                data: this.skuParams
            })
                .then(data => {
                    var lists = data.list;
                        if(row.nowStock!==0){
                            this.$confirm('商品在售，请谨慎更换sku, 是否继续?', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                            }).then(() => {
                                this.modalTitle = "选择需更换SKU";
                                for (let i in lists) {
                                    if (lists[i].skuCode == row.aisleSku) {
                                        lists[i].checked = true;
                                    }
                                }
                                this.skuTableData = lists;
                                this.$set(this, "skuTableData", lists);
                                this.totalCount = data.totalCount;
                                this.listLoading = false;
                                this.addSkuVisible = true;
                            }).catch(() => {     
                            });
                        }else{
                            for (let i in lists) {
                                if (lists[i].skuCode == row.aisleSku) {
                                    lists[i].checked = true;
                                }
                            }
                            this.skuTableData = lists;
                            this.$set(this, "skuTableData", lists);
                            this.totalCount = data.totalCount;
                            this.listLoading = false;
                            this.addSkuVisible = true;
                        }
                        
                })
                .catch(e => {});
        
            
        },
        handleSelectionChange(val) {
            for (let i in this.skuTableData) {
                this.$set(
                    this.skuTableData[i],
                    "checked",
                    this.skuTableData[i].skuCode == val.skuCode
                )
                    ? true
                    : false;
            }
            this.skuCode = val.skuCode;
        },
        search() {
            this.skuParams.skuName = this.searchValue;
            this.getSKUList(this.skuParams);
        },
        confirm() {
            console.log(this.skuData)
                if (!this.skuCode) {
                this.$message({
                    type: "warning",
                    message: "您还未选择sku哦~"
                });
                return;
            }
            this.api({
                url: "/store/updateaislegoods",
                method: "post",
                data: {
                    aisleSku: this.skuCode,
                    channelId: this.skuData.channelid,
                    machineCode: this.$route.params.machineCode,
                    batchCode: this.skuData.batchCode
                }
            })
                .then(data => {
                    if(data.purchaseFlag && !data.wareFlag){
                        this.$confirm('当前SKU数量为'+data.wareSkuNum+',已低于库存预警值,是否需要采购?', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                            }).then(() => {
                                this.api({
                                    url: "/store/purchaseUpdateSku",
                                    method: "post",
                                    data: {
                                        machineCode: this.$route.params.machineCode,
                                        skuCode: this.skuCode,
                                        // storeCode:this.store.storeCode,
                                        // channelId: this.skuData.aisleCode,
                                    }
                                })
                                    .then(data => {
                                        this.$message({
                                            type: "success",
                                            message: "保存成功"
                                        });
                                        this.getInfo();
                                        this.addSkuVisible = false;
                                    })
                                    .catch(e => {
                                    });

                            }).catch(() => {   
                                     this.getInfo();
                            });
                        this.addSkuVisible = false;
                        this.getInfo();
                    }else if(!data.purchaseFlag && data.wareFlag){
                        this.$confirm('是否需要集中生成补货单去补货?', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                            }).then(() => {
                                this.api({
                                    url: "/store/replentUpdateSku",
                                    method: "post",
                                    data: {
                                        machineCode: this.$route.params.machineCode,
                                        skuCode: this.skuCode,
                                        storeCode:this.store.storeCode,
                                        channelid: this.skuData.aisleCode,
                                        aisleSkuCode:this.skuData.aisleSku
                                    }
                                })
                                    .then(data => {
                                        this.$message({
                                            type: "success",
                                            message: "保存成功"
                                        });
                                        this.getInfo();
                                        this.addSkuVisible = false;
                                    })
                                    .catch(e => {});
                            }).catch(() => {   
                                this.getInfo();    
                            });
                        this.addSkuVisible = false;
                        this.getInfo();
                    }else if(data.purchaseFlag && data.wareFlag){
                        this.$confirm('当前SKU数量为'+data.wareSkuNum+',已低于库存预警值,是否需要采购?', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                            }).then(() => {
                                this.api({
                                    url: "/store/purchaseUpdateSku",
                                    method: "post",
                                    data: {
                                        machineCode: this.$route.params.machineCode,
                                        skuCode: this.skuCode,
                                        // storeCode:this.store.storeCode,
                                        // channelId: this.skuData.aisleCode,
                                    }
                                })
                                    .then(data => {
                                        this.$message({
                                            type: "success",
                                            message: "保存成功"
                                        });
                                       
                                        this.addSkuVisible = false;
                                         this.getInfo();
                                    })
                                    .catch(e => {});
                                this.$confirm('是否需要集中生成补货单去补货?', '提示', {
                                        confirmButtonText: '确定',
                                        cancelButtonText: '取消',
                                        type: 'warning'
                                        }).then(() => {
                                            this.api({
                                                url: "/store/replentUpdateSku",
                                                method: "post",
                                                data: {
                                                    machineCode: this.$route.params.machineCode,
                                                    skuCode: this.skuCode,
                                                    storeCode:this.store.storeCode,
                                                    channelid: this.skuData.aisleCode,
                                                    aisleSkuCode:this.skuData.aisleSku
                                                }
                                            })
                                                .then(data => {
                                                    this.$message({
                                                        type: "success",
                                                        message: "保存成功"
                                                    });
                                                    this.getInfo();
                                                    this.addSkuVisible = false;
                                                })
                                                .catch(e => {});

                                        }).catch(() => {   
                                                 this.getInfo();
                                        });

                            }).catch(() => {  
                                this.$confirm('是否需要集中生成补货单去补货?', '提示', {
                                    confirmButtonText: '确定',
                                    cancelButtonText: '取消',
                                    type: 'warning'
                                    }).then(() => {
                                        this.api({
                                            url: "/store/replentUpdateSku",
                                            method: "post",
                                            data: {
                                                machineCode: this.$route.params.machineCode,
                                                skuCode: this.skuCode,
                                                storeCode:this.store.storeCode,
                                                channelid: this.skuData.aisleCode,
                                                aisleSkuCode:this.skuData.aisleSku
                                            }
                                        })
                                            .then(data => {
                                                this.$message({
                                                    type: "success",
                                                    message: "保存成功"
                                                });
                                                this.getInfo();
                                                this.addSkuVisible = false;
                                            })
                                            .catch(e => {});

                                    }).catch(() => {     
                                        this.getInfo();   
                                    });      
                            });
                        this.addSkuVisible = false;
                        this.getInfo();
                    }else{
                        this.$message({
                            type: "success",
                            message: "保存成功"
                        });
                        this.addSkuVisible = false;
                        this.getInfo();
                    }
                    
                })
                .catch(e => {});
        },
        save(){
            this.api({
                url: "/inventory/doTheSalePlan",
                method: "post",
                data: {
                    salePlanId:this.$route.params.id,
                    gmtPlan:this.SalePlanDetails.gmtPlan,
                    machineCode: this.$route.params.machineCode,
                    flag:false 
                }
            })
                .then(data => {
                   if(!data){
                       this.$message({
                        type: "success",
                        message: "执行成功 !"
                    });
                    this.$router.push({path:"/operation/plane"})
                   }else{
                       this.unusualVisible=true
                   }
                })

            
            
        },
        saveTrue(){
            this.unusualVisible=false
            // 执行计划
        },
        back(){
            this.$router.push({path:"/operation/plane"})
        },
        del(){
             this.api({
                url: "/inventory/deleteSalePlan",
                method: "post",
                data: {
                    salePlanId:this.$route.params.id,

                }
            })
                .then(data => {
                   this.$message({
                        type: "success",
                        message: "删除成功 !"
                    });
                    this.$router.push({path:"/operation/plane"})
                })
        },
        add(row){
            this.api({
                url: "/inventory/updateWareLimit",
                method: "post",
                data: {
                    wareLimit:row.wareLimit,
                    skuCode:row.skuCode,
                    storeCode:this.$route.params.storeCode

                }
            })
                .then(data => {
                    this.getSKUList(this.skuParams)
                })
        },
        
    }

}
</script>

