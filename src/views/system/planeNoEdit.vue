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
    .row-box{width:80%;border: 1px solid #e4e4e4;border-bottom:0;padding-bottom: 1%}
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
                <span>计划应用时间: {{SalePlanDetails.gmtPlan}}</span>
                <!-- <el-date-picker
                    v-if="SalePlanDetails.flag"
                    v-model="time"
                    type="datetime"
                    value-format="yyyy-MM-dd HH:mm"
                    format="yyyy-MM-dd HH:mm"
                    placeholder="选择日期时间">
                </el-date-picker> -->
                <br>
                <br>
                <el-button @click="back" type="info">返    回</el-button>
                <br>
                <br>
                <el-button @click="del" type="danger">删除计划</el-button>
                <br>
                <br>
                <el-button @click="save" type="primary" v-if="SalePlanDetails.exitFlag">保存</el-button>
                <br>
                <br>
                <div  v-if="SalePlanDetails.exitFlag"> <i class="el-icon-warning-outline" style="color:#F56C6C"></i> 注: 商品有变动,需保存后生效</div>
            </div>
            <div class="flex-10 right">
                <div v-for="(item,key) in data" :key="key" class="row-box flex-center" >
                    <div v-for="i in item" :key="i.trailsNo" class="col-box flex-1" :style="i.willSku ? 'background:#66b1ff21' : ''">
                        <div class="num">
                            {{i.trailsNo}}
                        </div>
                        <div v-if="i.hasSku=='1'">
                            <img :src="i.appPicture" alt="" 
                            v-if="i.willSku"
                            width="20"
                            height="20"
                            class="skuimg">
                            <i v-if="i.willSku" class="el-icon-refresh"></i>
                            <img :src="i.appPicture" alt="" 
                            v-if="!i.willSku"
                            width="40"
                            height="40"
                            class="skuimg">
                            <img :src="i.willSku" alt="" 
                            v-if="i.willSku"
                            width="40"
                            height="40"
                            class="skuimg">
                            
                            <p class="skuname" v-if="!i.willSku">{{i.skuName}}</p>
                            <p class="skuname" v-if="i.willSku">{{i.willSkuName}}</p>
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
        <el-dialog title="上架SKU"
                   :visible.sync="addSkuVisible"
                   width="66%"
                   :close-on-click-modal="false">
            <div v-if="editType == 1">
                <div class="content flex-center-Y"  v-if="skuData.skuName">
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
            </div>
            <div v-else-if="editType == 2">
                <div class="content flex-center-Y">
                    <span>当前SKU名称： {{skuData.skuName}}&emsp;</span>
                    <img :src="skuData.appPicture"
                         width="40"
                         height="40"
                         class="portrait" />
                </div>
                <div class="content">当前促销方案：</div>
                <div class="content">
                    选择促销方案
                </div>
            </div>
            <div v-else-if="editType == 3">
                <el-input placeholder="请输入内容"
                          v-model="searchValue"
                          class="input-with-select">
                    <el-button slot="prepend">SKU名称</el-button>
                    <el-button slot="append"
                               icon="el-icon-search"
                               @click="search"></el-button>
                </el-input>
            </div>
            <el-table ref="multipleTable"
                      stripe
                      height="440"
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
                                 label="SKU名称">
                                 <template slot-scope="scope">
                                 <span>{{scope.row.skuName}}<span v-if="scope.row.skuNow=='Y'">(生鲜类)</span></span>
                                 </template>
                                 </el-table-column>
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
                <el-table-column prop="profits"
                                 label="利润率"
                                 style="width: 18%"
                                 align="center">
                </el-table-column>
                <el-table-column prop="wareSkuNum"
                                 label="库存数量"
                                 style="width: 18%"
                                 align="center">
                </el-table-column>
                <el-table-column prop="wareLimit"
                                 label="库存预警值"
                                 style="width: 18%"
                                 align="center">
                                 <template slot-scope="scope">
                                     <el-input-number v-model="scope.row.wareLimit" @change="add(scope.row)" :min="0" size="mini" label="描述文字"></el-input-number>
                                </template>
                </el-table-column>
                <el-table-column prop="skuNum"
                                 label="本计划消耗量"
                                 style="width: 18%"
                                 align="center">
                </el-table-column>
                <el-table-column prop="orderNum"
                                 label="近10天消耗量"
                                 style="width: 18%"
                                 align="center">
                </el-table-column>
                <el-table-column prop="purchasePeriod"
                                 label="采购周期"
                                 style="width: 18%"
                                 align="center">
                    <template slot-scope="scope">
                        {{scope.row.purchasePeriod}}天
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
        <el-dialog title="以下sku无法按预期时间到货,是否确定执行计划?" :visible.sync="unusualVisible" :close-on-click-modal="false">
            <el-table :data="unusualData">
                <el-table-column prop=""
                                 label="SKU名称">
                                 <template slot-scope="scope">
                                 <span>{{scope.row.skuName}}<span v-if="scope.row.skuNow=='Y'">(生鲜类)</span></span>
                                 </template>
                                 </el-table-column>
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
                <el-table-column prop="channelid"
                                 label="货道编号"
                                 style="width: 18%"
                                 align="center">
                </el-table-column>
                <el-table-column prop="purchasePeriod"
                                 label="采购周期"
                                 style="width: 18%"
                                 align="center">
                    <template slot-scope="scope">
                        {{scope.row.purchasePeriod}}天
                    </template>
                </el-table-column>
            </el-table>
            <div slot="footer" class="dialog-footer">
                <el-button @click="unusualVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveTrue">确 定</el-button>
            </div>
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
            //    {list:[
            //                             {id:"A01",info:"1"},
            //                             {id:"A02",info:"2"},
            //                             {id:"A03",info:"3"},
            //                             {id:"A04",info:"4"},
            //                             {id:"A05",info:"5"},
            //                             {id:"A06",info:"6"},
            //                             {id:"A07",info:"7"},
            //                             {id:"A08",info:"8"},
            //                             ]
            //     },
                
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
                url: "/inventory/showSalePlanDetails",
                method: "post",
                data: {
                        salePlanId:this.$route.params.id,
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
                               this.data[i][g].willSkuName=this.skuInfo[key].willSkuName
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
        addSku(i){
            this.channelid=i.trailsNum
            this.getSKUList(this.skuParams)
            this.addSkuVisible=true
            for(let i in this.skuInfo){
                if(this.channelid==this.skuInfo[i].channelid){
                    this.skuData=this.skuInfo[i]
                }
            }
            console.log(this.skuData)
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
            this.purchasePeriod=val.purchasePeriod
        },
        search() {
            this.skuParams.skuName = this.searchValue;
            this.getSKUList(this.skuParams);
        },
        confirm() {
                this.api({
                url: "/inventory/addSkuToVend",
                method: "post",
                data: {
                    skuCode: this.skuCode,
                    salePlanId:this.$route.params.id,
                    gmtPlan:this.SalePlanDetails.gmtPlan,
                    channelid:this.channelid,
                    purchasePeriod:this.purchasePeriod
                }
            })
                .then(data => {
                    // this.$message({
                    //     type: "success",
                    //     message: "保存成功"
                    // });
                    this.addSkuVisible = false;
                    this.getInfo()
                })


            // let type = this.editType;
            // if (type == 1) {
            //     this.confirmA();
            //     // this.modalTitle = '选择需更换SKU'
            // } else if (type == 2) {
            //     // this.modalTitle = '设置促销'
            // } else if (type == 3) {
            //     this.confirmA();
            //     // this.modalTitle = '选择需上架的SKU'
            // }
        },
        // confirmA() {
        //     if (!this.skuCode) {
        //         this.$message({
        //             type: "warning",
        //             message: "您未选择导出范围"
        //         });
        //         return;
        //     }
        //     this.api({
        //         url: "/store/updateaislegoods",
        //         method: "post",
        //         data: {
        //             aisleSku: this.skuCode,
        //             channelId: this.skuData.aisleCode,
        //             machineCode: this.machine,
        //             batchCode: this.skuData.batchCode
        //         }
        //     })
        //         .then(data => {
        //             this.$message({
        //                 type: "success",
        //                 message: "保存成功"
        //             });
        //             this.getList();
        //             this.editTypeDialogVisible = false;
        //         })
        //         .catch(e => {});
        // },
        save(){
            this.api({
                url: "/inventory/doTheSalePlan",
                method: "post",
                data: {
                    salePlanId:this.$route.params.id,
                    gmtPlan:this.SalePlanDetails.gmtPlan,
                    machineCode:this.$route.params.machineCode,
                    flag:true
                }
            })
                .then(data => {
                   if(!data || data.length==0){
                       this.api({
                        url: "/inventory/continueSalePlan",
                        method: "post",
                        data: {
                            salePlanId:this.$route.params.id,
                            gmtPlan:this.SalePlanDetails.gmtPlan,
                            copyFlag:false,
                            storeCode:this.$route.params.storeCode,
                            machineCode:this.$route.params.machineCode,
                            username: this.userName

                        }
                    })
                        .then(data => {
                        this.unusualVisible=false
                         this.$router.push({path:"/operation/plane"})
                        })
                    this.$router.push({path:"/operation/plane"})
                   }else{
                       this.unusualVisible=true
                       this.unusualData=data
                   }
                })

            
            
        },
        saveTrue(){
            this.unusualVisible=false
            this.api({
                        url: "/inventory/continueSalePlan",
                        method: "post",
                        data: {
                            salePlanId:this.$route.params.id,
                            gmtPlan:this.SalePlanDetails.gmtPlan,
                            copyFlag:false,
                            storeCode:this.$route.params.storeCode,
                            machineCode:this.$route.params.machineCode,
                            username: this.userName

                        }
                    })
                        .then(data => {
                        this.unusualVisible=false
                         this.$router.push({path:"/operation/plane"})
                        })
                   

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

