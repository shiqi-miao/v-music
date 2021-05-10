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
.no-p {
    padding: 0;
}
.el-icon-edit-box {
    cursor: pointer;
    display: block;
    padding: 8px;
}
.el-icon-edit {
    font-size: 16px;
}
</style>

<template>
    <div class="app-container">
        <div class="title"
             v-if="purchaseType=='E'">入库单</div>
        <div class="title"
             v-else>采购单</div>
        <el-card shadow="always"
                 class="msg">
            <el-row :gutter="12">
                <el-col :span="12">
                    <span class="name">采购单编号：</span>
                    {{info.purchaseCode}}
                </el-col>
                <el-col :span="12"
                        v-if="info.gmtModifiedC">
                    <span class="name">确认时间：</span>
                    {{info.gmtModifiedC}}
                </el-col>
                <!-- <el-col :span="12">
                    <span class="name">采购分类：</span>
                    {{info.typeName}}
                </el-col> -->
            </el-row>
            <el-row :gutter="12">
                <el-col :span="12">
                    <span class="name">生成时间：</span>
                    {{info.gmtCreated}}
                </el-col>
                <!-- <el-col :span="12"
                        v-if="info.gmtModifiedB">
                    <span class="name">确认时间：</span>
                    {{info.gmtModifiedB}}
                </el-col> -->
            </el-row>
            <el-row :gutter="12">
                <el-col :span="12">
                    <span class="name">最晚到货日期：</span>
                    {{info.lastTime}}
                </el-col>
                <el-col :span="12"
                        v-if="purchaseType=='F'">
                    <span class="name">驳回备注：</span>
                    {{info.remark}}
                </el-col>
                <el-col :span="12"
                        v-else>
                    <span class="name">备注：</span>
                    {{info.remark || '该采购单将在下个采购周期超时'}}
                </el-col>

            </el-row>
        </el-card>
        <el-table v-if="isPreview"
                  :data="tableData"
                  stripe
                  style="width: 100%"
                  v-loading.body="listLoading"
                  element-loading-text="拼命加载中">
            <el-table-column width="60"
                             align="center">
                <template slot-scope="scope">
                    <i class="el-icon-news el-icon-zoom-in-re"
                       v-if="scope.row.isNew == 1"></i>
                </template>
            </el-table-column>
            <el-table-column prop="goodsName"
                             label="采购SKU名称"
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
            <el-table-column label="采购SKU批次#价格#数量"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    <div v-for="(item,i) in scope.row.batchList"
                         :key="i">
                        {{i+1}}、{{item.batchCode}}：¥{{item.purchasePrice}}；{{item.batchNum}}pcs
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="sumNum"
                             label="采购总量"
                             style="width: 18%"
                             align="center"></el-table-column>
            <el-table-column prop="priceSum"
                             label="采购成本"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    ¥ {{scope.row.priceSum || '-'}}
                </template>
            </el-table-column>
        </el-table>
        <el-table v-else-if="purchaseType=='D'"
                  :data="tableData"
                  stripe
                  style="width: 100%"
                  max-height="600"
                  v-loading.body="listLoading"
                  element-loading-text="拼命加载中">
            <el-table-column width="60"
                             align="center">
                <template slot-scope="scope">
                    <i class="el-icon-news el-icon-zoom-in-re"
                       v-if="scope.row.isNew == 1"></i>
                </template>
            </el-table-column>
            <el-table-column prop="goodsName"
                             label="采购SKU名称"
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
            <el-table-column label="采购SKU批次#价格#数量"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    <div v-for="(item,i) in scope.row.batchList"
                         :key="i">
                        {{i+1}}、{{item.batchCode}}：¥{{item.purchasePrice}}；{{item.batchNum}}pcs
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="物流单号"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    <div class="el-icon-edit-box flex-center"
                         v-for="(item,i) in scope.row.batchList"
                         :key="i"
                         @click="showLogisticsDialog(item)">
                        {{item.logisticsCom}}{{item.logisticsCode}}&nbsp;<i class="el-icon-edit"></i>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="sumNum"
                             label="采购总量"
                             style="width: 18%"
                             align="center"></el-table-column>
            <el-table-column prop="priceSum"
                             label="采购成本"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    ¥ {{scope.row.priceSum || '-'}}
                </template>
            </el-table-column>
        </el-table>
        <el-table v-else-if="purchaseType=='E'"
                  :data="tableData"
                  stripe
                  style="width: 100%"
                  max-height="600"
                  v-loading.body="listLoading"
                  element-loading-text="拼命加载中">
            <el-table-column width="60"
                             align="center">
                <template slot-scope="scope">
                    <i class="el-icon-news el-icon-zoom-in-re"
                       v-if="scope.row.isNew == 1"></i>
                </template>
            </el-table-column>
            <el-table-column prop="goodsName"
                             label="采购SKU名称"
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
            <el-table-column label="采购SKU批次#价格#数量"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    <div v-for="(item,i) in scope.row.batchList"
                         :key="i">
                        {{i+1}}、{{item.batchCode}}：¥{{item.purchasePrice}}；{{item.batchNum}}pcs
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="sumNum"
                             label="采购总量"
                             style="width: 18%"
                             align="center"></el-table-column>
            <el-table-column prop="priceSum"
                             label="采购成本"
                             style="width: 18%"
                             align="center"></el-table-column>
            <el-table-column label="是否入库"
                             style="width: 18%"
                             align="center"
                             v-if="purchaseType=='C'||purchaseType=='F'||purchaseType=='E'">
                <template slot-scope="scope">
                    <span v-if="scope.row.isIn == 1">是</span>
                    <span v-else>否</span>
                </template>
            </el-table-column>
            <el-table-column prop="gmtModified"
                             label="入库时间"
                             style="width: 18%"
                             align="center"></el-table-column>
        </el-table>
        <el-table v-else
                  :data="tableData"
                  stripe
                  style="width: 100%"
                  max-height="600"
                  v-loading.body="listLoading"
                  element-loading-text="拼命加载中">
            <el-table-column width="60"
                             align="center">
                <template slot-scope="scope">
                    <i class="el-icon-news el-icon-zoom-in-re"
                       v-if="scope.row.isNew == 1"></i>
                </template>
            </el-table-column>
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
            <el-table-column prop="recommendNum" label="单价" style="width: 18%" align="center">
                 <template slot-scope="scope">
                    <span v-if="scope.row.skuModel.length!==0">￥{{scope.row.skuModel[0].modelPrice}}</span>
                </template>
            </el-table-column>
            <el-table-column prop=""
                             label="采购数量(采购规格)"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    <span v-if="scope.row.skuModel.length!==0">{{scope.row.recommendNum}} ({{scope.row.skuModel[0].pcsNum}}件/{{scope.row.skuModel[0].modelTypeName}})</span>
                </template>
            </el-table-column>
            <el-table-column prop="recommendNum"
                             label="采购预算"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    <span>￥{{scope.row.sumModelPrice}}</span>
                </template></el-table-column>
            <el-table-column label="是否入库"
                             style="width: 18%"
                             align="center"
                             v-if="purchaseType=='C'||purchaseType=='F'||purchaseType=='E'">
                <template slot-scope="scope">
                    <span v-if="scope.row.isIn == 1">是</span>
                    <span v-else>否</span>
                </template>
            </el-table-column>
            <el-table-column prop="thresholdValue"
                             label="实际采购情况"
                             style="width: 18%"
                             align="center"
                             v-if="purchaseType == 'C' || purchaseType == 'F'">
                <template slot-scope="scope">
                    <!-- <span v-if="scope.row.staticInfo == 1">已填写</span>
                    <span v-else-if="scope.row.staticInfo == 0">无法采购</span> -->
                    <span v-if="scope.row.staticInfo == 0">无法采购</span>
                    <span v-else-if="scope.row.staticInfo == 1">已填写</span>
                    <span v-else>未填写</span>
                    <el-button @click="addBatchs(scope.row)"
                               type="text"
                               size="small">填写</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div v-if="(purchaseType == 'C' && isPreview) || purchaseType == 'D' || (purchaseType == 'F' && isPreview) || purchaseType == 'E'"
             class="note-form">
            <el-form :model="info"
                     label-width="100px"
                     size="mini"
                     label-position="left">
                <el-form-item label="采购总成本:">
                    ¥ {{info.sumPrice}}
                </el-form-item>
                <el-form-item label="备注信息:">
                    <span v-if=" purchaseType == 'E'">
                        {{info.remark}}
                    </span>
                    <el-input v-else
                              v-model="info.remarkA"
                              placeholder="请输入备注信息"></el-input>
                    <!-- <el-input size="mini" placeholder="请输入备注信息" v-model="info.remark"></el-input> -->
                </el-form-item>
                <el-form-item label="采购人员:">
                    {{info.userName}}
                </el-form-item>
                <el-form-item label="完成采购:"
                              v-if="info.gmtModifiedD">
                    {{info.gmtModifiedD}}
                </el-form-item>
                <el-form-item label="入库时间:"
                              v-if="purchaseType == 'D'">
                    {{info.gmtModifiedE}}
                </el-form-item>
                <!-- <el-form-item label="仓库管理员:">
                    {{info.userName}}
                </el-form-item> -->
            </el-form>
        </div>
        <div class="center">
            <el-button round
                       @click="$router.go(-1)"
                       v-if="!isPreview">返回</el-button>
            <el-button type="primary"
                       round
                       @click="stepStart()"
                       v-if="purchaseType == 'B'">确认开始采购</el-button>
            <el-button type="primary"
                       round
                       @click="preview"
                       v-if="(purchaseType == 'C' && !isPreview)||(purchaseType == 'F' && !isPreview)">预览采购单</el-button>
            <el-button type="primary"
                       round
                       @click="confirmPurchase"
                       v-if="(purchaseType == 'C' && isPreview)||(purchaseType == 'F' && isPreview)">确认采购单</el-button>
        </div>
        <el-dialog title="填写物流信息"
                   :visible.sync="logisticsDialog"
                   width="40%">
            <el-form class="small-space demo-form-inline sku-form"
                     :model="logisticsData"
                     label-position="left"
                     label-width="80px"
                     :inline="true">
                <el-form-item label="物流公司"
                              required>
                    <el-input type="text"
                              v-model="logisticsData.logisticsCom"></el-input>
                </el-form-item>
                <br>
                <el-form-item label="物流单号"
                              required>
                    <el-input type="text"
                              v-model="logisticsData.logisticsCode"
                              onKeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer"
                  class="dialog-footer">
                <el-button @click="logisticsDialog = false">取 消</el-button>
                <el-button type="primary"
                           @click="createLogistics">保 存</el-button>
            </span>
        </el-dialog>
        <el-dialog title="实际采购情况"
                   :visible.sync="addBatchDialogVisible"
                   width="66%">
            <el-row class="msg no-p">
                <el-col :span="6">
                    <div>SKU名称：{{batchData.goodsName}}</div>
                    <div v-if="batchData.skuModel.length!==0">采购规格：{{batchData.skuModel[0].pcsNum}}件/{{batchData.skuModel[0].modelTypeName}}</div>
                    <div>采购数量：{{batchData.recommendNum}}</div>
                    <div v-if="batchData.skuModel.length!==0">预算单价：{{batchData.skuModel[0].modelPrice}}</div>
                </el-col>
                <el-col :span="4">
                    <img :src="batchData.appPicture"
                         width="100"
                         height="100"
                         class="portrait" />
                </el-col>
                <el-col :span="14"
                        align="right">
                    <el-button @click="cannotPurchase(batchData.purchaseDetailsId)">无法采购</el-button>
                </el-col>
            </el-row>
            <div v-for="(item,i) in batchData.batchList"
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
                        <el-input v-model="item.batchNum"></el-input>
                    </el-form-item>
                    <el-form-item label="*实际采购价">
                        <el-input v-model="item.purchasePrice"></el-input>
                    </el-form-item>
                    <el-form-item label="*商品等级">
                        <el-select v-model="item.goodsLevel"
                                   placeholder="请选择商品等级">
                            <el-option label="一等品"
                                       value="A"></el-option>
                            <el-option label="优等品"
                                       value="B"></el-option>
                            <el-option label="合格品"
                                       value="C"></el-option>
                            <el-option label="不合格品"
                                       value="D"></el-option>
                        </el-select>
                    </el-form-item>
                    <!-- <el-form-item label="*过保日期">
                        <el-date-picker type="date" placeholder="过保日期" v-model="item.outWarrantyTime" style="width: 100%;" value-format="yyyy-MM-dd"></el-date-picker>
                    </el-form-item> -->
                </el-form>
                <el-button @click="delBatch"
                           round
                           icon="el-icon-minus"
                           size="mini"
                           v-if="i!=0 &&i == batchData.batchList.length - 1">删除该批次</el-button>
                <el-button @click="addBatch"
                           round
                           icon="el-icon-plus"
                           size="mini"
                           v-if="i == batchData.batchList.length - 1">新增批次</el-button>
            </div>
            <span slot="footer"
                  class="dialog-footer">
                <el-button @click="back">取 消</el-button>
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
            purchaseType: this.$route.params.purchaseType,
            listLoading: false,
            tableData: [],
            info: {},
            addBatchDialogVisible: false,
            logisticsDialog: false,
            logisticsData: {},
            batchData: {skuModel:[]},
            isPreview: false,
            originList:[]
        };
    },
    created() {
        this.getData(); //获取详情
    },
    methods: {
        createLogistics() {
            if (!this.logisticsData.logisticsCom) {
                this.$message({
                    type: "warning",
                    message: "未填写物流公司名字"
                });
                return;
            }
            if (!this.logisticsData.logisticsCode) {
                this.$message({
                    type: "warning",
                    message: "未填写物流单号"
                });
                return;
            }
            this.api({
                url: "/ware/fillInLogistics",
                method: "post",
                data: this.logisticsData
            }).then(data => {
                this.$message({
                    type: "success",
                    message: "保存成功"
                });
                this.logisticsDialog = false;
            });
        },
        showLogisticsDialog(row) {
            this.logisticsData = row;
            this.logisticsDialog = true;
        },
        getData() {
            this.listLoading = true;
            this.api({
                url: "/ware/purchaseOrderDetails",
                method: "get",
                params: {
                    purchaseCode: this.$route.params.purchaseCode,
                    purchaseType: this.$route.params.purchaseType
                }
            }).then(data => {
                this.info = data;
                console.log(data)
                let lists = data.purchaseSkuListInfo;
                // this.info.sumPrice = 0;
                for (let i in lists) {
                    // this.info.sumPrice += Number(lists[i].sumPrice)
                    lists[i].index = i;
                }
                this.tableData = lists;
                this.listLoading = false;
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
                            this.$router.replace({
                                path:
                                    "/stock/purchaseDetail/" +
                                    this.$route.params.purchaseCode +
                                    "/C"
                            });
                            location.reload();
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
            let length = this.tableData.length;
            let n = 0;
            for (let i in this.tableData) {
                if (
                    this.tableData[i].staticInfo == 0 ||
                    this.tableData[i].staticInfo == 1
                ) {
                    n = n + 1;
                }
            }
            if (n != length) {
                this.$message({
                    type: "warning",
                    message:
                        "尚有" +
                        (length - n) +
                        "个采购SKU未填写实际采购情况，无法预览采购单"
                });
                return;
            }
            let sumPrice = 0;
            // let result = []
            //  for(let i in this.tableData){
            //      if(this.tableData[i].staticInfo!=0){
            //          result.push(this.tableData[i])
            //      }
            //  }
            //  this.tableData = result;
            for (let i in this.tableData) {
                let itemSumNum = 0;
                let itemSumPrice = 0;
                for (let j in this.tableData[i].batchList) {
                    let item = this.tableData[i].batchList[j];
                    itemSumNum += Number(item.batchNum);
                    itemSumPrice +=
                        Number(item.batchNum) * Number(item.purchasePrice);
                }
                this.tableData[i].sumNum = itemSumNum;
                this.tableData[i].priceSum = itemSumPrice.toFixed(2);
                sumPrice += itemSumPrice;
            }

            this.info.sumPrice = sumPrice.toFixed(2);
            this.isPreview = true;
        },
        addBatchs(row) {
            this.getBatch(row);
            // this.getBatch(row.purchaseDetailsId)
        },
        getBatch(row) {
            // this.api({
            //     url: "/ware/getBatchSkuInfo",
            //     method: "get",
            //     params: {
            //         "purchaseDetailsId":id
            //     }
            // }).then(data => {
            this.batchData = row;
            console.log(row)
            if (this.batchData.batchList.length == 0) {
                this.getBatchCode(batchCode => {
                    this.batchData.batchList = [
                        {
                            batchCode: batchCode,
                            purchaseDetailsId: row.purchaseDetailsId,
                            goodsLevel: "A"
                        }
                    ];
                });
            }
            this.originList=JSON.parse(JSON.stringify(this.batchData.batchList))
            this.addBatchDialogVisible = true;
            // })
        },
        getBatchCode(fun) {
            this.api({
                url: "/ware/getBatch",
                method: "get"
            }).then(data => {
                fun(data);
            });
        },
        delBatch() {
            this.batchData.batchList.pop();
        },
        addBatch() {
            this.getBatchCode(batchCode => {
                let item = {
                    purchaseDetailsId: this.batchData.batchList[0]
                        .purchaseDetailsId,
                    batchCode: batchCode,
                    goodsLevel: "A"
                };
                this.batchData.batchList.push(item);
                // console.log(this.batchData.batchList)
            });
        },
        cannotPurchase(id) {
            let index = this.batchData.index;
            this.$set(this.batchData, "staticInfo", 0);
            this.batchData.batchList = [];
            this.tableData[index] = this.batchData;
            this.api({
                url: "/ware/cantBuy",
                method: "get",
                params: {
                    purchaseDetailsId: id
                }
            }).then(data => {
                this.addBatchDialogVisible = false;
                // this.getData()
            });
        },
        back(){
            this.addBatchDialogVisible=false
            this.batchData.batchList=this.originList//this.originList由初始的this.batchData.batchList深拷贝而来,点取消不做修改即this.batchData.batchList回到初始的样子
        },
        addBatchConfirm() {
            let array = "";
            let lists = this.batchData.batchList;
            console.log(1);
            for (let i in lists) {
                let item = lists[i];
                let n = Number(i) + 1;
                if (!item.batchNum) {
                    this.$message({
                        type: "warning",
                        message: "第" + n + "批次的批次数量未填写"
                    });
                    return;
                }
                if (!item.purchasePrice) {
                    this.$message({
                        type: "warning",
                        message: "第" + n + "批次的采购价未填写"
                    });
                    return;
                }
                // if(!item.outWarrantyTime){
                //     this.$message({
                //         type: 'warning',
                //         message: '第'+ n+'批次的过保日期未填写'
                //     })
                //     return
                // }
                array += JSON.stringify(item);
            }
            let id = lists[0].purchaseDetailsId;
            let index = this.batchData.index;
            // this.batchData.staticInfo = 1
            this.$set(this.batchData, "staticInfo", 1);
            this.tableData[index] = this.batchData;
            console.log(this.tableData);
            // this.api({
            //     url: "/ware/addBatch",
            //     method: "get",
            //     params: {
            //         purchaseCode:this.$route.params.purchaseCode,
            //         batchList:array,
            //         purchaseDetailsId:id
            //     }
            // }).then(data => {
            this.addBatchDialogVisible = false;
            //     this.getData()//获取详情
            // })
        },
        confirmPurchase() {
            let this_ = this;
            this.$confirm(
                "采购单确认后无法修改，同时将用作入库及采购报销凭证，请仔细核对后再点击“确认”。",
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
                        for (let j in item.batchList) {
                            item.batchList[j].skuCode = item.skuCode;
                            item.batchList[j].purchaseDetailsId =
                                item.purchaseDetailsId;
                            array += JSON.stringify(item.batchList[j]);
                        }
                    }
                    this_
                        .api({
                            url: "/ware/purchaseOver",
                            method: "get",
                            params: {
                                purchaseCode: this.info.purchaseCode,
                                remark: this.info.remarkA,
                                purchaseList: array
                            }
                        })
                        .then(data => {
                            this_.$message({
                                type: "success",
                                message: "提交成功"
                            });
                            this.$router.push({ path: "/stock/purchase" });
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
    },
    computed: {
    ...mapGetters([
        'userId','userName'
    ])
    },

};
</script>