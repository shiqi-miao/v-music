<style>
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
    width: 100px;
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
        <div class="title">出库单</div>
        <el-card shadow="always"
                 class="msg">
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
                    <span class="name">确认时间：</span>
                    {{info.gmtModified}}
                </el-col>
                <el-col :span="12">
                    <span class="name">预计提货：</span>
                    {{info.gmtModified}}
                </el-col>
            </el-row>
        </el-card>
        <!-- C：出库 -->
        <el-table v-if="repairType=='C'"
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
            <el-table-column prop="stockNum"
                             label="库存总量"
                             style="width: 18%"
                             align="center"></el-table-column>
            <el-table-column prop="repairNum"
                             label="出库数量"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    <i class="el-icon-warning danger"
                       v-if="scope.row.repairNum>scope.row.stockNum"></i>
                    {{scope.row.repairNum}}
                </template>
            </el-table-column>
            <el-table-column label="库存SKU批次#数量#存放位置"
                             style="width: 18%"
                             align="center"
                             v-if="repairType == 'C' && !isPreview">
                <template slot-scope="scope">
                    <div v-for="(item,i) in scope.row.wareBatch"
                         :key="i">
                        {{i+1}}、{{item.batchCode}} ；{{item.repairNum}} ；{{item.inWhere}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="库存SKU批次#实际出库数量"
                             style="width: 18%"
                             align="center"
                             v-if="repairType == 'C' && isPreview">
                <template slot-scope="scope">
                    <div v-for="(item,i) in scope.row.wareBatch"
                         :key="i">
                        {{i+1}}、{{item.batchCode}} ；{{item.repairNum}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="thresholdValue"
                             label="实际出库情况"
                             style="width: 18%"
                             align="center"
                             v-if="repairType == 'C' && !isPreview">
                <template slot-scope="scope">
                    <span v-if="scope.row.staticInfo == 1">已填写</span>
                    <span v-else-if="scope.row.staticInfo == 0">无法出库</span>
                    <span v-else>未填写</span>
                    <el-button @click="addBatchs(scope.row)"
                               type="text"
                               size="small">填写</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-table v-else
                  :data="tableData"
                  stripe
                  style="width: 100%"
                  max-height="600"
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
            <el-table-column prop="stockNum"
                             label="库存总量"
                             style="width: 18%"
                             align="center"></el-table-column>
            <el-table-column prop="repairNum"
                             label="出库数量"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    <i class="el-icon-warning danger"
                       v-if="scope.row.repairNum>scope.row.stockNum"></i>
                    {{scope.row.repairNum}}
                </template>
            </el-table-column>
            <el-table-column label="库存SKU批次#数量#存放位置"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    <div v-for="(item,i) in scope.row.wareBatch"
                         :key="i">
                        {{i+1}}、{{item.batchCode}} ；{{item.repairNum}} ；{{item.inwhere}}
                    </div>
                </template>
            </el-table-column>
        </el-table>
        <div v-if="(repairType == 'C' && isPreview) || repairType == 'D'"
             class="note-form">
            <el-form :model="info"
                     label-width="100px"
                     size="mini"
                     label-position="left">
                <el-form-item label="出库总价值:">
                    ¥ {{info.sumPrice}}
                </el-form-item>
                <el-form-item label="备注信息:">
                    <span v-if="repairType == 'D'">
                        {{info.remark}}
                    </span>
                </el-form-item>
                <el-form-item label="仓库管理员:">
                    {{info.userName}}
                </el-form-item>
                <el-form-item label="出库时间:">
                    {{info.gmtModifiedD}}
                </el-form-item>
            </el-form>
        </div>
        <div class="center">
            <el-button round
                       @click="$router.go(-1)">返回</el-button>
            <el-button type="primary"
                       round
                       @click="stepStart()"
                       v-if="repairType == 'D'">输入提货码</el-button>
            <el-button type="primary"
                       round
                       @click="preview"
                       v-if="repairType == 'C' && !isPreview">预览出库单</el-button>
            <el-button type="primary"
                       round
                       @click="confirmPurchase"
                       v-if="repairType == 'C' && isPreview">确认出库单</el-button>
        </div>
        <div class="center"></div>
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
export default {
    data() {
        return {
            repairType: this.$route.params.repairType,
            listLoading: false,
            tableData: [],
            info: {},
            addBatchDialogVisible: false,
            batchData: {},
            isPreview: false
        };
    },
    created() {
        this.getData(); //获取详情
    },
    methods: {
        getData() {
            this.listLoading = true;
            this.api({
                url: "/ware/wareRepairInfoDetails",
                method: "get",
                params: {
                    repairCode: this.$route.params.repairCode,
                    repairType: this.$route.params.repairType
                }
            }).then(data => {
                this.info = data;
                let lists = data.wareRepairInfoDetailsList;
                for (let i in lists) {
                    lists[i].staticInfo = lists[i].wareBatch.length > 0 ? 1 : 2;
                }
                this.tableData = lists;
                this.listLoading = false;
            });
        },
        stepStart() {
            let this_ = this;
            this.$prompt("请输入补货员提供的提货码", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消"
                // inputPattern: /\d[6]/,
                // inputErrorMessage: '提货码格式不正确'
            })
                .then(data => {
                    if (!data.value) {
                        this.$message({
                            type: "warning",
                            message: "请输入提货码"
                        });
                        return;
                    }
                    this_
                        .api({
                            url: "/ware/putWareRepairCode",
                            method: "get",
                            params: {
                                repairCode: this.info.repairCode,
                                pickCode: data.value
                            }
                        })
                        .then(data => {
                            this_.$message({
                                type: "success",
                                message: "提货完成!"
                            });
                            this.$router.push({ path: "/stock/replenishment" });
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
        confirmPurchase() {
            let this_ = this;
            this.$confirm(
                "出库单确认后无法修改，同时补货人员将收到提货信息与提货码，请仔细核对后再点击“确认”。",
                "提示",
                {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                }
            )
                .then(() => {
                    let array = "";
                    let lists = this.tableData;
                    for (let i in lists) {
                        let item = lists[i];
                        for (let j in item.wareBatch) {
                            item.wareBatch[j].staticNum =
                                item.wareBatch[j].repairNum;
                            array += JSON.stringify(item.wareBatch[j]);
                        }
                    }
                    this_
                        .api({
                            url: "/ware/outPutOver",
                            method: "get",
                            params: {
                                repairCode: this.info.repairCode,
                                remark: this.info.remark,
                                repairList: array
                            }
                        })
                        .then(data => {
                            this_.$message({
                                type: "success",
                                message: "出库单已确认"
                            });
                            this.$router.push({ path: "/stock/replenishment" });
                            // this.getData()
                        });
                })
                .catch(() => {
                    // this.$message({
                    //     type: 'info',
                    //     message: '已取消提交'
                    // });
                });
        }
    }
};
</script>