<style>
.batch-h {
    height: 40px;
}
.title {
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    margin: 20px 0;
}
.msg {
    line-height: 32px;
    margin: 20px 0;
}
.modal-msg {
    line-height: 24px;
    margin-bottom: 20px;
}
.note {
    line-height: 24px;
    width: 500px;
}
.center {
    text-align: center;
    margin-top: 20px;
}
.left {
    margin-top: 20px;
}
.name {
    font-weight: 600;
    text-align: left;
    display: inline-block;
    width: 120px;
}
.input-with-select {
    width: 50%;
}
/* .el-select .el-input {
    width: 120px;
} */
.el-icon-zoom-in-re {
    font-size: 26px;
}
.batch {
    display: inline-block;
    width: 30%;
    margin-right: 20px;
    vertical-align: top;
}
.note-form {
    width: 30%;
}
.danger {
    color: #f56c6c;
}
</style>

<template>
    <div class="app-container">
        <div class="title"
             v-if="opType=='A'">入库单</div>
        <div class="title"
             v-if="opType=='B'">出库单</div>
        <div class="title"
             v-if="opType=='C'||opType=='D'||opType=='E'">退仓单</div>
        <div class="title"
             v-if="opType=='F'">已销毁库存</div>
        <el-card shadow="always"
                 class="msg"
                 v-if="opType=='A'">
            <el-row :gutter="12">
                <el-col :span="12">
                    <span class="name">入库单编号：</span>
                    {{info.optionCode}}
                </el-col>
                <el-col :span="12">
                    <span class="name">关联采购单：</span>
                    {{info.optionCode}}
                </el-col>
            </el-row>
            <!-- <el-row :gutter="12">
                <el-col :span="12">
                    <span class="name">入库时间：</span>
                    {{info.gmtCreated}}
                </el-col>
            </el-row> -->
        </el-card>
        <el-card shadow="always"
                 class="msg"
                 v-else-if="opType=='B'">
            <el-row :gutter="12">
                <el-col :span="12">
                    <span class="name">出库单编号：</span>
                    {{info.repairCode}}
                </el-col>
                <el-col :span="12">
                    <span class="name">补货单编号：</span>
                    {{info.optionCode}}
                </el-col>
            </el-row>
            <el-row :gutter="12">
                <el-col :span="12">
                    <span class="name">生成时间：</span>
                    {{info.gmtCreated}}
                </el-col>
                <el-col :span="12">
                    <span class="name">运营确认时间：</span>
                    {{info.gmtRightTime}}
                </el-col>

            </el-row>
        </el-card>
        <el-card shadow="always"
                 class="msg"
                 v-if="opType=='F'">
            <el-row :gutter="12">
                <el-col :span="12">
                    <span class="name">销毁单编号：</span>
                    {{optionCode}}
                </el-col>
            </el-row>
        </el-card>
        <!-- <el-card shadow="always"
                 class="msg"
                 v-else>
            <el-row :gutter="12">
                <el-col :span="12">
                    <span class="name">退仓单编号：</span>
                    {{info.optionCode}}
                </el-col>
                <el-col :span="12">
                    <span class="name">申请时间：</span>
                    {{info.gmtCreated}}
                </el-col>
            </el-row>
            <el-row :gutter="12">
                <el-col :span="12"
                        v-if="opType=='C'||opType=='D'">
                    <span class="name">确认时间：</span>
                    {{info.gmtRightTime}}
                </el-col>
                <el-col :span="12"
                        v-if="opType=='C'">
                    <span class="name">退仓时间：</span>
                    {{info.gmtRightTime}}
                </el-col>
            </el-row>
        </el-card> -->
        <el-table v-if="opType=='A'"
                  :data="tableData"
                  stripe
                  style="width: 100%"
                  v-loading.body="listLoading"
                  element-loading-text="拼命加载中">
            <el-table-column prop="goodsName"
                             label="SKU名称"
                             style="width: 18%"
                             align="center"></el-table-column>
            <el-table-column prop="skuCode"
                             label="SKU条码"
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
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    <div v-for="(item,i) in scope.row.wareBatch"
                         :key="i"
                         class="batch-h">
                        {{i+1}}、{{item.batchCode}} ；{{item.staticNum}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="过保日期"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    <div v-for="(item,i) in scope.row.wareBatch"
                         :key="i"
                         class="batch-h">
                        {{i+1}}、{{item.outWarrantyTime}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="stockNumber"
                             label="入库SKU总量"
                             style="width: 18%"
                             align="center"></el-table-column>
            <el-table-column prop="inWhere"
                             label="入库存放位置"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    <!-- <div v-for="(item,i) in scope.row.wareBatch" :key="i" class="batch-h"> -->
                    <span v-if="scope.row.wareBatch.length>0">{{scope.row.wareBatch[0].inWhere}} </span>
                    <!-- </div> -->
                </template>
            </el-table-column>
            <el-table-column prop="inWhere"
                             label="入库时间"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    <!-- <div v-for="(item,i) in scope.row.wareBatch" :key="i" class="batch-h"> -->
                    <span v-if="scope.row.wareBatch.length>0">{{scope.row.wareBatch[0].inWhere}} </span>
                    <!-- </div> -->
                </template>
            </el-table-column>
        </el-table>
        <el-table v-else-if="opType=='B'"
                  :data="tableData"
                  stripe
                  style="width: 100%"
                  v-loading.body="listLoading"
                  element-loading-text="拼命加载中">
            <el-table-column prop="skuCode"
                             label="SKU编号"
                             style="width: 18%"
                             align="center"></el-table-column>
            <el-table-column prop="goodsName"
                             label="SKU名称"
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
            <el-table-column prop="stockNumber"
                             label="库存总量"
                             style="width: 18%"
                             align="center"></el-table-column>
            <el-table-column label="出库数量"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    <i class="el-icon-warning danger"
                       v-if="scope.row.repairNum>scope.row.stockNum"></i>
                    {{scope.row.sum}}
                </template>
            </el-table-column>
            <el-table-column label="库存SKU批次#实际出库数量"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    <div v-for="(item,i) in scope.row.wareBatch"
                         :key="i">
                        {{i+1}}、{{item.batchCode}} ；{{item.staticNum}}
                    </div>
                </template>
            </el-table-column>
        </el-table>
        <el-table v-else-if="opType=='F'"
                  :data="tableData"
                  stripe
                  style="width: 100%"
                  v-loading.body="listLoading"
                  element-loading-text="拼命加载中">
            <el-table-column prop="skuName"
                             label="SKU名称"
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
            <el-table-column label="SKU批次#数量"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    {{scope.row.batchCode}} # {{scope.row.residueNum}}
                </template>
            </el-table-column>
            <el-table-column prop="outWarrantyTime"
                             label="过保日期"
                             style="width: 18%"
                             align="center"></el-table-column>
            <el-table-column prop="inWhere"
                             label="存放位置"
                             style="width: 18%"
                             align="center"></el-table-column>
        </el-table>
        <el-table v-else
                  :data="tableData"
                  stripe
                  style="width: 100%"
                  v-loading.body="listLoading"
                  element-loading-text="拼命加载中">
            <el-table-column prop="goodsName"
                             label="退仓SKU名称"
                             style="width: 18%"
                             align="center"></el-table-column>
            <el-table-column prop="skuCode"
                             label="退仓SKU条码"
                             style="width: 18%"
                             align="center"></el-table-column>
            <el-table-column label="SKU图片"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    <img :src="scope.row.appPicture"
                         width="40"
                         height="40"
                         class="portrait" />
                </template>
            </el-table-column>
            <el-table-column label="退仓SKU批次#价格#数量"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    <div v-for="(item,i) in scope.row.wareBatch"
                         :key="i">
                        {{i+1}}、{{item.batchCode}} ；{{item.purchasePrice}} ；{{item.stockNum}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="处置方式"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    <div v-for="(item,i) in scope.row.wareBatch"
                         :key="i">
                        <el-select v-if="opType == 'D'"
                                   v-model="item.optionTypeName"
                                   placeholder="请选择"
                                   slot="prepend"
                                   size="mini"
                                   @change="tabChange($event,scope.row.index,i)">
                            <el-option v-for="item in selectTabs"
                                       :key="item.id"
                                       :label="item.name"
                                       :value="item.id"
                                       size="mini">
                            </el-option>
                        </el-select>
                        <span v-else>{{item.optionTypeName}}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="亏损"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    <div v-for="(item,i) in scope.row.wareBatch"
                         :key="i">
                        ¥ {{item.lossPrice}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="备注"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    <div v-for="(item,i) in scope.row.wareBatch"
                         :key="i">
                        {{item.stockRemark}}
                    </div>
                </template>
            </el-table-column>
        </el-table>
        <!-- <el-table v-else :data="tableData" stripe style="width: 100%" max-height="600" v-loading.body="listLoading" element-loading-text="拼命加载中">
            <el-table-column prop="skuCode" label="SKU编号" style="width: 18%" align="center"></el-table-column>
            <el-table-column prop="goodsName" label="SKU名称" style="width: 18%" align="center"></el-table-column>
            <el-table-column label="SKU图片" style="width: 18%" align="center">
                <template slot-scope="scope">
                    <img :src="scope.row.appPicture" width="40" height="40" class="portrait" />
                </template>
            </el-table-column>
            <el-table-column prop="stockNum" label="库存总量" style="width: 18%" align="center"></el-table-column>
            <el-table-column prop="sum" label="出库数量" style="width: 18%" align="center">
                <template slot-scope="scope">
                    <i class="el-icon-warning danger" v-if="scope.row.repairNum>scope.row.stockNum"></i>
                    {{scope.row.repairNum}}
                </template>
            </el-table-column>
            <el-table-column label="库存SKU批次#实际出库数量" style="width: 18%" align="center">
               <template slot-scope="scope">
                    <div v-for="(item,i) in scope.row.wareBatch" :key="i">
                        {{i+1}}、{{item.batchCode}} ；{{item.repairNum}} ；{{item.inwhere}}
                    </div>
                </template>
            </el-table-column>
        </el-table> -->
        <div v-if="opType == 'A'"
             class="note-form">
            <el-form :model="info"
                     label-width="100px"
                     size="mini"
                     label-position="left">
                <el-form-item label="备注信息:">
                    {{info.stockRemark}}
                </el-form-item>
                <el-form-item label="采购人员:">
                    {{info.wareName}}
                </el-form-item>
                <el-form-item label="仓库管理员:">
                    {{info.purchaserName}}
                </el-form-item>
            </el-form>
        </div>
        <div v-else-if="opType == 'F'"
             class="note-form">
            <el-form :model="info"
                     label-width="100px"
                     size="mini"
                     label-position="left">
                <el-form-item label="库存成本:">
                    ¥ {{info.sumPrice}}
                </el-form-item>
                <el-form-item label="备注信息:">
                    {{info.stockRemark}}
                </el-form-item>
                <el-form-item label="仓库管理员:">
                    {{info.wareName}}
                </el-form-item>
            </el-form>
        </div>
        <div v-else-if="opType == 'B'"
             class="note-form">
            <el-form :model="info"
                     label-width="100px"
                     size="mini"
                     label-position="left">
                <el-form-item label="备注信息:">
                    {{info.stockRemark}}
                </el-form-item>
                <el-form-item label="补货人员:">
                    {{info.repairName}}
                </el-form-item>
                <el-form-item label="仓库管理员:">
                    {{info.wareName}}
                </el-form-item>
                <el-form-item label="出库时间:">
                    {{info.gmtOutTime}}
                </el-form-item>
            </el-form>
        </div>
        <div v-else
             class="note-form">
            <el-form :model="info"
                     label-width="100px"
                     size="mini"
                     label-position="left">
                <el-form-item label="退仓总价值:">
                    ¥ {{info.sumPrice}}
                </el-form-item>
                <el-form-item label="备注信息:">
                    <el-input v-if="opType == 'D'"
                              v-model="info.stockRemark"
                              placeholder="备注信息"></el-input>
                    <span v-else>{{info.stockRemark}}</span>

                </el-form-item>
                <el-form-item label="退仓人:">
                    {{info.repairName}}
                </el-form-item>
                <el-form-item label="仓库管理员:">
                    {{info.wareName}}
                </el-form-item>
                <el-form-item label="退仓码:">
                    {{info.backCode}}
                </el-form-item>
            </el-form>
        </div>
        <div class="center">
            <el-button round
                       @click="$router.go(-1)">返回</el-button>
            <el-button type="primary"
                       round
                       @click="confirmOutD"
                       v-if="opType == 'D'">确认退仓单</el-button>
            <!-- <el-button type="primary" round @click="confirmOutE" v-if="opType == 'E' && isPreview">确认退仓单</el-button> -->
        </div>
        <el-dialog title="实际出库情况"
                   :visible.sync="addBatchDialogVisible"
                   width="66%">
            <el-row class="msg">
                <el-col :span="8">
                    <div>SKU名称：{{batchData.goodsName}}</div>
                    <div>SKU规格：{{batchData.skuUnits}}</div>
                    <div>出库数量：{{batchData.repairNum}}</div>
                </el-col>
                <el-col :span="4">
                    <img :src="batchData.appPicture"
                         width="40"
                         height="40"
                         class="portrait" />
                </el-col>
                <el-col :span="6">
                    <el-button @click="cannotPurchase(batchData.purchaseDetailsId)">无法出库</el-button>
                </el-col>
            </el-row>
            <div v-for="(item,i) in batchData.wareBatch"
                 :key="i"
                 class="batch">
                <el-form label-width="80px"
                         :model="item"
                         size="mini"
                         label-position="left">
                    <el-form-item label="批次信息">
                        -{{i+1}}
                    </el-form-item>
                    <el-form-item label="*批次编号">
                        {{item.batchCode}}
                    </el-form-item>
                    <el-form-item label="*批次数量">
                        {{item.residueNum}}
                    </el-form-item>
                    <el-form-item label="*存放位置">
                        {{item.inWhere}}
                    </el-form-item>
                    <el-form-item label="*出库数量">
                        <el-input v-model="item.repairNum"
                                  type="tel"></el-input>
                    </el-form-item>
                </el-form>
                <!-- <el-button @click="delBatch" round icon="el-icon-minus" size="mini" v-if="i!=0 &&i == batchData.wareBatch.length - 1">删除该批次</el-button>
                <el-button @click="addBatch" round icon="el-icon-plus" size="mini" v-if="i == batchData.wareBatch.length - 1">新增批次</el-button> -->
            </div>
            <span slot="footer"
                  class="dialog-footer">
                <el-button @click="addBatchDialogVisible = false">取 消</el-button>
                <el-button type="primary"
                           @click="addBatchConfirm">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    data() {
        return {
            optionCode: this.$route.params.optionCode,
            opType: this.$route.params.opType,
            listLoading: false,
            tableData: [],
            info: {},
            addBatchDialogVisible: false,
            batchData: {},
            isPreview: false,
            selectTabs: [
                {
                    name: "正常退仓",
                    id: "A"
                },
                {
                    name: "退给供应商",
                    id: "B"
                },
                {
                    name: "销毁",
                    id: "C"
                }
                // {
                //     name:"赠送",
                //     id:"D"
                // },
            ]
        };
    },
    created() {
        this.getData(); //获取详情
    },
    methods: {
        getData() {
            this.listLoading = true;
            let url = "/ware/";
            if (this.opType == "B") url = url + "outWarehouseDetails";
            if (this.opType == "A") url = url + "inWarehouseDetails";
            if (this.opType == "C" || this.opType == "D" || this.opType == "E")
                url = url + "backWarehouseDetails";
            if (this.opType == "F") url = url + "destroyWarehouseDetails";
            this.api({
                url: url,
                method: "get",
                params: {
                    optionCode: this.$route.params.optionCode
                }
            }).then(data => {
                this.info = data;
                var lists = [];
                if (this.opType == "F") {
                    lists = data.destroyBatchList;
                } else {
                    lists = data.purchaseSkuListInfo;
                    for (let i in lists) {
                        lists[i].staticInfo =
                            lists[i].wareBatch.length > 0 ? 1 : 2;
                        lists[i].index = i;
                    }
                }

                this.tableData = lists;
                this.listLoading = false;
            });
        },
        tabChange(value, i, j) {
            let this_ = this;
            let msg = "",
                title = "";
            let option = {
                confirmButtonText: "确定",
                cancelButtonText: "取消"
            };
            if (value == "A") {
                title = "退仓-正常退仓(退仓商品重新计入库存)";
                option.inputPlaceholder = " 请输入退仓后的存放位置";
            }
            if (value == "B") {
                title = "退仓-退给供应商(退仓商品不计入库存)";
                msg = "如原价退给供应商，则输入100，如95折退，则输入95";
                option.inputPlaceholder = "请输入退给供应商的回收金额比例";
                //  option.inputPattern= /\d[3]/
                //  option.inputErrorMessage='回收金额比例输入不正确'
            }
            if (value == "C") {
                title = "退仓-销毁(退仓商品不计入库存)";
                option.inputPlaceholder = "请输入退仓销毁原因";
            }
            this.$prompt(msg, title, option)
                .then(data => {
                    // this.$set(this.tableData[i].wareBatch[j],"stockRemark",'')
                    if (!data.value) {
                        this.$message({
                            type: "warning",
                            message: "请输入备注"
                        });
                        return;
                    }
                    if (value == "B") {
                        if (Number(data.value) >= 100) {
                            this.$message({
                                type: "warning",
                                message: "回收金额比例格式输入不正确"
                            });
                            return;
                        }
                    }
                    this.$set(
                        this.tableData[i].wareBatch[j],
                        "stockRemark",
                        data.value
                    );
                })
                .catch(() => {
                    // this.$message({
                    //     type: 'info',
                    //     message: '已取消提交'
                    // });
                });
        },
        stepStart() {
            let this_ = this;
            this.$confirm(
                "请及时对清单中的商品进行采购，确认开始采购后，可下载清单文件",
                "提示",
                {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                }
            )
                .then(() => {
                    this_
                        .api({
                            url: "/ware/readyBuy",
                            method: "get",
                            params: {
                                purchaseCode: this.$route.params.purchaseCode,
                                manageId: this.userId
                            }
                        })
                        .then(data => {
                            this_.$message({
                                type: "success",
                                message: "开始采购!"
                            });
                            this.$router.push({ path: "/stock/purchase" });
                            this.getData();
                        });
                })
                .catch(() => {
                    // this.$message({
                    //     type: 'info',
                    //     message: '已取消提交'
                    // });
                });
        },
        preview() {
            let sumPrice = 0;
            for (let i in this.tableData) {
                let itemSumNum = 0;
                let itemSumPrice = 0;
                for (let j in this.tableData[i].wareBatch) {
                    let item = this.tableData[i].wareBatch[j];
                    itemSumNum += Number(item.repairNum);
                    itemSumPrice +=
                        Number(item.repairNum) * Number(item.purchasePrice);
                }
                this.tableData[i].sumNum = itemSumNum;
                this.tableData[i].sumPrice = itemSumPrice;
                sumPrice += itemSumPrice;
            }
            this.info.sumPrice = sumPrice;
            this.isPreview = true;
        },
        addBatchs(row) {
            this.getBatch(row);
        },
        getBatch(row) {
            this.batchData = row;
            this.addBatchDialogVisible = true;
        },

        delBatch() {
            this.batchData.wareBatch.pop();
        },
        addBatch() {
            let item = {
                purchaseDetailsId: this.batchData.wareBatch[0].purchaseDetailsId
            };
            this.batchData.wareBatch.push(item);
        },
        cannotPurchase(id) {
            let index = this.batchData.index;
            this.batchData.staticInfo = 0;
            this.batchData.wareBatch = [];
            this.tableData[index] = this.batchData;
            this.addBatchDialogVisible = false;
        },
        addBatchConfirm() {
            let lists = this.batchData.batchList;
            for (let i in lists) {
                let item = lists[i];
                let n = Number(i) + 1;
                if (!item.repairNum) {
                    this.$message({
                        type: "warning",
                        message: "第" + n + "批次的出库数量为空"
                    });
                    return;
                }
            }
            let index = this.batchData.index;
            this.batchData.staticInfo = 1;
            this.tableData[index] = this.batchData;
            this.addBatchDialogVisible = false;
        },
        confirmOutD() {
            let this_ = this;
            this.$confirm("是否确认退仓信息", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    let array = "";
                    let lists = this.tableData;
                    for (let i in lists) {
                        let item = lists[i];
                        for (let j in item.wareBatch) {
                            if (!item.wareBatch[j].optionType) {
                                this.$message({
                                    type: "warning",
                                    message: "您有批次未选择处置方式"
                                });
                                return;
                            }
                            if (!item.wareBatch[j].stockRemark) {
                                this.$message({
                                    type: "warning",
                                    message: "您有批次的处置方式未填写备注说明"
                                });
                                return;
                            }
                            let data = {
                                backWareId: item.wareBatch[j].backWareId,
                                optionType: item.wareBatch[j].optionType,
                                stockRemark: item.wareBatch[j].stockRemark
                            };
                            array += JSON.stringify(data);
                        }
                    }
                    this_
                        .api({
                            url: "/ware/backWarehouseDill",
                            method: "get",
                            params: {
                                optionCode: this.info.optionCode,
                                remark: this.info.stockRemark,
                                lists: array
                            }
                        })
                        .then(data => {
                            this_.$message({
                                type: "success",
                                message: "退仓单已确认"
                            });
                            this.$router.push({ path: "/stock/management" });
                        });
                })
                .catch(() => {
                    // this.$message({
                    //     type: 'info',
                    //     message: '已取消提交'
                    // });
                });
        }
    },
    computed: {
    ...mapGetters([
        'userId','userName'
    ])
    },
};
</script>