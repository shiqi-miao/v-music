
<style>
.append-input .el-input--suffix {
    width: 80px !important;
}
.upload-img {
    width: 100%;
    /* height: 100%; */
}
.upload-block .el-upload-dragger {
    width: 200px;
    height: 200px;
}
.upload-block-2 .el-upload-dragger {
    width: 200px;
    height: 300px;
}
.grey {
    padding: 10px 6px;
    color: #999999;
}
.sku-form {
    padding: 0 30px;
}
.sku-form .el-form-item__label {
    width: 110px !important;
}
.blue {
    color: #66b1ff;
    cursor: pointer;
    padding: 10px 6px;
}
.input-with-select {
    width: 50%;
}
/* .el-select .el-input {
    width: 120px;
} */
.create .el-input {
    width: 180px;
}
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
    color: #e6a23c;
}
.success {
    color: #67c23a;
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
.label {
    display: inline-block;
    line-height: 36px;
    font-weight: 600;
}
.stock-num {
    padding: 10px;
    cursor: pointer;
}
.msg {
    padding: 0 6vw;
}
.center {
    text-align: center;
}
</style>

<template>
    <div class="app-container">
        <el-button icon="el-icon-plus"
                   type="primary"
                   @click="showCreateGoods">发布广告</el-button>
        <el-table :data="tableData"
                  stripe
                  style="width: 100%"
                  v-loading.body="listLoading"
                  element-loading-text="拼命加载中"
                  row-key="goodsCode">
            <el-table-column prop="gmtPlan"
                             label="计划投放时间"
                             style="width: 18%"
                             align="center"></el-table-column>
            <el-table-column prop="storeName"
                             label="投放门店"
                             style="width: 18%"
                             align="center"></el-table-column>
            <el-table-column prop="adTitle"
                             label="标题"
                             style="width: 18%"
                             align="center"></el-table-column>
            <el-table-column prop="skuNum"
                             label="上新SKU数量"
                             style="width: 18%"
                             align="center"></el-table-column>
            <el-table-column prop="coverageUser"
                             label="预计覆盖用户"
                             style="width: 18%"
                             align="center"></el-table-column>
            <el-table-column prop="gmtCreated"
                             label="创建时间"
                             style="width: 18%"
                             align="center"></el-table-column>
            <el-table-column prop="roleName"
                             label="状态"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    <span v-if="scope.row.pushStatus == 1">待发布</span>
                    <span v-else-if="scope.row.pushStatus == 2">已发布</span>
                    <span v-else-if="scope.row.pushStatus == 0">已取消</span>
                </template>
            </el-table-column>
            <el-table-column label="操作"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    <span @click="editAd(scope.row)"
                          class="blue"
                          v-if="scope.row.pushStatus == 0">编辑</span>
                    <span @click="remove(scope.row)"
                          class="blue"
                          v-else-if="scope.row.pushStatus == 1">取消发布</span>
                    <span @click="toDetail(scope.row)"
                          class="blue"
                          v-else-if="scope.row.pushStatus == 2">查看</span>
                </template>
            </el-table-column>
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
        <el-dialog :title="dialogTitle"
                   :visible.sync="createGoodsDialogVisible"
                   width="36%">
            <el-form class="small-space demo-form-inline sku-form"
                     :model="goodsData"
                     label-position="left"
                     label-width="80px"
                     :inline="true">
                <!-- <el-form-item label="计划投放时间" required>
                    <el-date-picker v-model="goodsData.time" value-format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="选择日期时间"></el-date-picker>
                </el-form-item>
                <br> -->
                <el-form-item label="选择投放门店"
                              required
                              class="create">
                    <el-select v-model="goodsData.storeCode"
                               placeholder="请选择">
                        <el-option v-for="item in selectGoodsTabs"
                                   :key="item.storeCode"
                                   :label="item.storeName"
                                   :value="item.storeCode">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <span slot="footer"
                  class="dialog-footer">
                <el-button @click="createGoodsDialogVisible = false">取 消</el-button>
                <!-- <el-button type="primary" @click="toCreateAd">确 定</el-button> -->
                <el-button type="primary"
                           @click="createGoods">确 定</el-button>
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
            totalCount: 0,
            searchValue: "",
            selectedTab: "goodsCode",
            selectTabs: [
                {
                    name: "商品编号",
                    id: "goodsCode"
                },
                {
                    name: "商品名称",
                    id: "goodsName"
                },
                {
                    name: "SKU编号",
                    id: "skuCode"
                },
                {
                    name: "SKU名称",
                    id: "skuName"
                }
            ],
            selectGoodsTabs: [],
            tableData: [],
            params: {
                pageRow: 20,
                pageNum: 1
            },
            createGoodsDialogVisible: false,
            goodsData: {},
            skuData: {},
            file: {},
            dialogTitle: "",
            expands: [],
            reqLoading: false,
            phoneType: 0
        };
    },
    created() {
        this.getList();
        this.getTypeList();
    },

    methods: {
        handleSizeChange(val) {
            this.params.pageRow = val;
            this.getList(this.params);
        },
        currentChange(index) {
            this.params.pageNum = index;
            this.getList(this.params);
        },
        prevClick(index) {
            this.params.pageNum = index;
            this.getList(this.params);
        },
        nextClick(index) {
            this.params.pageNum = index;
            this.getList(this.params);
        },
        createGoods() {
            if (!this.goodsData.storeCode) {
                this.$message({
                    type: "warning",
                    message: "您未选择门店"
                });
                return;
            }
            // if(!this.goodsData.time){
            //     this.$message({
            //         type: 'warning',
            //         message: '您未选择投放开始时间'
            //     })
            //     return
            // }
            for (let i in this.selectGoodsTabs) {
                if (
                    this.selectGoodsTabs[i].storeCode ==
                    this.goodsData.storeCode
                ) {
                    var operatorId = this.selectGoodsTabs[i].operatorId;
                    var storeName = this.selectGoodsTabs[i].storeName;
                    var storeManagerId = this.selectGoodsTabs[i].storeManagerId;
                }
            }
            this.api({
                url: "/promotion/showAllUserCoverage",
                method: "post",
                data: {
                    storeCode: this.goodsData.storeCode
                }
            }).then(data => {
                this.$router.push({
                    path:
                        "/markting/detail/" +
                        this.goodsData.storeCode +
                        "/-/" +
                        operatorId +
                        "/" +
                        storeName
                });
            });
        },
        toCreateAd() {
            this.$router.push({
                path:
                    "/markting/detail/" +
                    this.goodsData.storeCode +
                    "/-/" +
                    operatorId +
                    "/" +
                    storeName
            });
        },
        editAd(row) {
            this.$router.push({ path: "/markting/detailEdit/" + row.id });
        },
        toDetail(row){
            this.$router.push({ path: "/markting/adDetail/" + row.id });
        },
        editGoods() {
            if (!this.goodsData.nickname) {
                this.$message({
                    type: "warning",
                    message: "您未填写账号名称"
                });
                return;
            }
            if (!this.goodsData.roleId) {
                this.$message({
                    type: "warning",
                    message: "您未选择账号角色"
                });
                return;
            }
            this.goodsData.deleteStatus = "1";
            this.goodsData.manageId = this.userId;
            this.api({
                url: "/user/updateUser",
                method: "post",
                data: this.goodsData
            }).then(data => {
                this.$message({
                    type: "success",
                    message: "修改成功"
                });
                this.getList(this.params);
                this.createGoodsDialogVisible = false;
            });
        },
        showCreateGoods(row) {
            if (row.userId) {
                this.dialogTitle = "编辑广告投放策略";
                this.goodsData = row;
                this.phoneType = 1;
            } else {
                this.dialogTitle = "上新广告投放策略";
                this.phoneType = 0;
                this.goodsData = {
                    username: "",
                    nickname: "",
                    roleId: ""
                };
            }
            this.createGoodsDialogVisible = true;
        },
        showCreateAD() {
            this.createGoodsDialogVisible = false;
            if (row.userId) {
                this.dialogTitle = "编辑广告投放策略";
                // this.goodsData = row
            } else {
                this.dialogTitle = "上新广告投放策略";
                // this.goodsData = {
                //     username:'',
                //     nickname:'',
                //     roleId:''
                // }
            }
            this.createAdDialogVisible = true;
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

            this.getList(this.params);
        },
        getList(params) {
            this.listLoading = true;
            let data = params || this.params;
            data.username = this.userName;
            this.api({
                url: "/promotion/showAllPlanForOperator",
                method: "post",
                data: data
            }).then(data => {
                this.listLoading = false;
                for (let i in data.list) {
                    data.list[i].index = Number(i) + 1;
                }
                this.tableData = data.list;
                this.totalCount = data.totalCount;
                this.expands = [];
            });
        },
        getTypeList() {
            this.api({
                url: "/promotion/showAllStoreForOperator",
                method: "post",
                data: {
                    username: this.userName
                }
            })
                .then(data => {
                    this.selectGoodsTabs = data;
                })
                .catch(e => {});
        },
        remove(row) {
            this.$confirm("是否取消本次上新广告的发布?", "提示", {
                confirmButtonText: "确定",
                showCancelButton: false,
                type: "warning"
            }).then(() => {
                this.api({
                    url: "/promotion/updateStatusForOperator",
                    method: "post",
                    data: {
                        newAdId: row.id
                    }
                }).then(data => {
                    this.$message({
                        type: "success",
                        message: "取消成功"
                    });
                    this.getList(this.params);
                });
            });
        }
    },
    computed: {
        ...mapGetters(["userId", "userName"])
    }
};
</script>

