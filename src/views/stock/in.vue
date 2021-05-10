<style>
.flex-center {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
}
.input-with-select {
    width: 40%;
}
.m-b {
    margin-bottom: 8px;
}
.title {
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    margin: 20px 0;
}
.center {
    text-align: center;
    margin: 20px auto；;
}
.name {
    font-weight: 600;
    text-align: left;
    display: inline-block;
    width: 100px;
    line-height: 30px;
}
.note-form {
    width: 30%;
    margin-top: 20px;
}
</style>

<template>
    <div class="app-container">
        <div class="title">需入库采购单</div>
        <el-card shadow="always"
                 class="msg"
                 v-if="tableData.length > 0">
            <el-row :gutter="12">
                <el-col :span="16">
                    <span class="name">关联采购单：</span>
                    {{this.purchaseCode}}
                    <span class="name"
                          v-if="logisticsData.logisticsCode">&emsp;物流单号：</span>
                    {{logisticsData.logisticsCom}}{{logisticsData.logisticsCode}}
                </el-col>
                <el-col :span="8"
                        align="right">
                    <el-button type="success"
                               icon="el-icon-zoom-in"
                               @click="selectPurchase"
                               v-if="!priview">点击选择采购单</el-button>
                </el-col>
            </el-row>
        </el-card>
        <el-button v-else
                   type="success"
                   icon="el-icon-zoom-in"
                   @click="selectPurchase">点击选择采购单</el-button>
        <el-table :data="tableData"
                  stripe
                  style="width: 100%"
                  v-loading.body="listLoading"
                  element-loading-text="拼命加载中">
            <!-- <el-table-column label="入库SKU" style="width: 18%" align="center">
                <template slot-scope="scope">
                    <el-checkbox v-model="scope.row.checked"></el-checkbox>
                </template>
            </el-table-column> -->
            <el-table-column prop="goodsName"
                             label="入库SKU名称"
                             style="width: 18%"
                             align="center"></el-table-column>
            <el-table-column prop="jbarCode"
                             label="入库SKU条码"
                             style="width: 18%"
                             align="center"></el-table-column>
            <el-table-column prop="appPicture"
                             label="SKU图片"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    <img :src="scope.row.appPicture"
                         width="40"
                         height="40"
                         class="portrait" />
                </template>
            </el-table-column>
            <el-table-column label="入库SKU批次#数量"
                             style="width: 26%"
                             align="center">
                <template slot-scope="scope">
                    <div v-for="(item,i) in scope.row.needToWarehouseBatchList"
                         :key="i">
                        {{i+1}}、{{item.batchCode}}；{{item.batchNum}}pcs
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="过保日期"
                             style="width: 26%"
                             align="center">
                <template slot-scope="scope">
                    <span v-if="priview">{{scope.row.outWarrantyTime}}</span>
                    <div v-else v-for="(item,i) in scope.row.needToWarehouseBatchList"
                         :key="i"
                         class="flex-center m-b">
                        {{i+1}}、<el-date-picker v-model="item.outWarrantyTime"
                                        size="mini"
                                        type="date"
                                        value-format="yyyy-MM-dd"
                                        placeholder="过保日期">
                        </el-date-picker>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="sum"
                             label="入库SKU总量"
                             style="width: 18%"
                             align="center"></el-table-column>
            <el-table-column prop="inWhere"
                             label="入库存放位置"
                             style="width: 18%"
                             align="center"
                             v-if="tableData.length > 0">
                <template slot-scope="scope">
                    <span v-if="priview">{{scope.row.inWhere}}</span>
                    <el-input v-else
                              size="mini"
                              maxlength="16"
                              placeholder="入库存放位置"
                              v-model="scope.row.inWhere"
                              @change="inputChange"></el-input>
                </template>
            </el-table-column>
        </el-table>
        <div class="note-form">
            <el-form :model="info"
                     label-width="100px"
                     size="mini"
                     label-position="left">
                <el-form-item label="备注信息：">
                    <el-input size="mini"
                              maxlength="16"
                              placeholder="请输入备注"
                              v-model="remark"
                              v-if="tableData.length > 0 && !priview"></el-input>
                    <span v-if="tableData.length > 0 && priview">{{remark}}</span>
                </el-form-item>
                <el-form-item label="采购人员：">
                    <span v-if="tableData.length > 0">{{userName}}</span>
                </el-form-item>
                <el-form-item label="仓库管理员：">
                    <span v-if="tableData.length > 0"></span>
                </el-form-item>
            </el-form>
        </div>
        <div class="center">
            <el-button round
                       @click="refuse()"
                       v-if="!priview&&tableData.length>0">驳回入库操作</el-button>
            <el-button type="primary"
                       round
                       @click="toPriview()"
                       v-if="!priview&&tableData.length>0">预览入库单</el-button>
            <el-button type="primary"
                       round
                       @click="submit()"
                       v-if="priview">确认入库单</el-button>
            <el-button type="info"
                       round
                       @click="edit()"
                       v-if="priview">修改入库单</el-button>
        </div>
        <el-dialog title="选择采购单"
                   :visible.sync="addSKUDialogVisible"
                   width="66%">
            <el-input placeholder="请输入内容"
                      v-model="searchValue"
                      class="input-with-select">
                <!-- <el-button slot="prepend">采购单编号</el-button> -->
                <el-select v-model="selectedTab"
                           placeholder="请选择"
                           slot="prepend">
                    <el-option v-for="item in selectTabs"
                               :key="item.id"
                               :label="item.name"
                               :value="item.id">
                    </el-option>
                </el-select>
                <el-button slot="append"
                           icon="el-icon-search"
                           @click="search"></el-button>
            </el-input>
            <el-table ref="multipleTable"
                      stripe
                      :data="skuTableData"
                      tooltip-effect="dark"
                      style="width: 100%;"
                      max-height="440"
                      @current-change="handleSelectionChange"
                      v-loading.body="listLoading"
                      element-loading-text="拼命加载中">
                <el-table-column type="selection"
                                 width="55">
                    <template slot-scope="scope">
                        <el-checkbox v-model="scope.row.checked"></el-checkbox>
                    </template>
                </el-table-column>
                <el-table-column prop="logisticsCode"
                                 label="物流单号"
                                 align="center"></el-table-column>
                <el-table-column prop="purchaseCode"
                                 label="采购单编号"
                                 align="center"></el-table-column>
                <el-table-column prop="skuName"
                                 label="采购SKU名称"
                                 align="center"></el-table-column>
                <!-- <el-table-column prop="typeName" label="采购SKU分类"></el-table-column> -->
                <el-table-column prop="username"
                                 label="采购人员"
                                 align="center"></el-table-column>
                <el-table-column label="已入库SKU"
                                 style="width: 18%"
                                 align="center">
                    <template slot-scope="scope">
                        {{scope.row.inWare}}/{{scope.row.allWare}}
                    </template>
                </el-table-column>
            </el-table>
            <span slot="footer"
                  class="dialog-footer">
                <el-button @click="addSKUDialogVisible = false">取 消</el-button>
                <el-button type="primary"
                           @click="addSKUData">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            listLoading: false,
            skuTableDataLoading: false,
            tableData: [],
            skuTableData: [],
            addSKUDialogVisible: false,
            searchValue: "",
            purchaseCode: "",
            logisticsData: {},
            info: {},
            remark: "",
            priview: false,
            selectedTab: "logisticsCode",
            selectTabs: [
                {
                    name: "物流单号",
                    id: "logisticsCode"
                },
                {
                    name: "采购单编号",
                    id: "purchaseCode"
                }
            ],
            params: {
                logisticsCode: "",
                purchaseCode: ""
            }
        };
    },
    computed: {
        ...mapGetters(["userName", "userId"])
    },
    created() {},
    methods: {
        inputChange() {
            // for(let i in this.tableData){
            //     if(this.tableData[i].inWhere){
            //         this.$set(this.tableData[i],'checked',true)
            //     }
            // }
        },
        selectPurchase() {
            this.skuTableData = [];
            this.addSKUDialogVisible = true;
            this.getSKUList({}); //获取采购单表格
        },
        getSKUList(params) {
            this.skuTableDataLoading = true;
            this.api({
                url: "/ware/searchPurchase",
                method: "get",
                params: params
            }).then(data => {
                this.skuTableData = data;
                this.skuTableDataLoading = false;
            });
        },
        search() {
            for (let i in this.selectTabs) {
                if (this.selectedTab == this.selectTabs[i].id) {
                    this.params[this.selectedTab] = this.searchValue;
                } else {
                    let id = this.selectTabs[i].id;
                    this.params[id] = "";
                }
            }
            this.getSKUList(this.params);
        },
        handleSelectionChange(val) {
            for (let i in this.skuTableData) {
                this.$set(
                    this.skuTableData[i],
                    "checked",
                    this.skuTableData[i].purchaseCode == val.purchaseCode
                )
                    ? true
                    : false;
            }
            this.purchaseCode = val.purchaseCode;
        },
        addSKUData() {
            if (!this.purchaseCode) {
                this.$message({
                    message: "你没有选择sku哦～",
                    type: "warning",
                    duration: 2000
                });
                return;
            }
            this.api({
                url: "/ware/needToWarehouseInfo",
                method: "get",
                params: {
                    purchaseCode: this.purchaseCode
                }
            }).then(data => {
                this.tableData = data;
                if (data.length > 0) {
                    this.logisticsData = {
                        logisticsCom: data[0].logisticsCom,
                        logisticsCode: data[0].logisticsCode
                    };
                }

                this.addSKUDialogVisible = false;
            });
        },
        toPriview() {
            let sum = 0;
            let length = this.tableData.length;
            for (let i in this.tableData) {
                for (let j in this.tableData[i].needToWarehouseBatchList) {
                    let time = this.tableData[i].needToWarehouseBatchList[j]
                        .outWarrantyTime;
                    if (!time) {
                        this.$message({
                            type: "warning",
                            message: "尚有过保日期未填写"
                        });
                        return;
                    }
                }

                if (!this.tableData[i].inWhere) {
                    sum = sum + 1;
                    // this.$message({
                    //     type: 'warning',
                    //     message: '尚未填写入库存放位置，请确认后填写'
                    // })
                    // return
                }
            }
            if (sum == length) {
                this.$message({
                    type: "warning",
                    message: "尚未填写入库存放位置，请确认后填写"
                });
                return;
            }
            if (0 < sum && sum < length) {
                this.$confirm(
                    "尚有" +
                        sum +
                        "个待入库SKU未填写入库存放位置，如不填写，则无法为其办理入库，是否继续预览？",
                    "提示",
                    {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning"
                    }
                )
                    .then(() => {
                        this.priview = true;
                    })
                    .catch(() => {
                        this.priview = false;
                    });
            }
            this.priview = true;
        },
        edit(){
            this.priview = false;
        },
        refuse() {
            if (!this.remark) {
                this.$message({
                    type: "warning",
                    message:
                        "请在备注输入驳回理由，以便采购人员根据备注就行修正"
                });
                return;
            }
            this.api({
                url: "/ware/rejectToPurchase",
                method: "get",
                params: {
                    purchaseCode: this.purchaseCode,
                    rejectReason: this.remark
                }
            }).then(data => {
                this.$message({
                    type: "success",
                    message: "驳回成功!"
                });
                this.$router.push({ path: "/stock/management" });
                this.getData();
            });
        },
        submit() {
            let array = "";
            let lists = this.tableData;
            for (let i in lists) {
                let item = lists[i];
                for (let j in item.needToWarehouseBatchList) {
                    console.log();
                    let list = {
                        // optionCode:item.optionCode,
                        batchCode: item.needToWarehouseBatchList[j].batchCode,
                        optionType: item.optionType,
                        stockNum: item.needToWarehouseBatchList[j].batchNum,
                        relationId: item.purchaseDetailsId,
                        purchaserId: item.purchaserId,
                        wareId: this.userId,
                        inWhere: item.inWhere,
                        outWarrantyTime:
                            item.needToWarehouseBatchList[j].outWarrantyTime +
                            " 00:00:00"
                    };
                    if (item.inWhere) {
                        array += JSON.stringify(list);
                    }
                }
            }
            this.api({
                url: "/ware/addToWarehouse",
                method: "get",
                params: {
                    purchaseCode: this.purchaseCode,
                    lists: array,
                    stockRemark: this.remark
                }
            }).then(data => {
                this.$message({
                    type: "success",
                    message: "提交成功!"
                });
                this.$router.push({ path: "/stock/management" });
            });
        }
    }
};
</script>