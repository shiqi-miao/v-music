
<style scoped>
.append-input .el-input--suffix {
    width: 80px !important;
}
.upload-img {
    width: 100%;
    /* height: 100%; */
}
.flex-center {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
}
.flex-2 {
    flex: 1;
}
.flex-1 {
    flex: 1;
}
.flex-center-Y {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
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
.el-select .el-input {
    width: 120px;
}
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
.storeNum {
    padding: 10px;
    cursor: pointer;
}
.store {
    padding: 2px 0;
}
</style>

<template>
    <div class="app-container">
        <!-- <el-form>
            <el-form-item>
                <el-input placeholder="请输入需要搜索的采购单编号" v-model="selectedTab" clearable style="width: 450px;" class="input-with-select">
                    <template slot="prepend">采购单编号</template>
                    <el-button slot="append" type="primary" icon="el-icon-search" @click="search">搜索</el-button>
                </el-input>
            </el-form-item>
        </el-form> -->
        <el-button icon="el-icon-plus"
                   type="primary"
                   @click="showCreateGoods">发布通知</el-button>
        <el-table :data="tableData"
                  stripe
                  style="width: 100%"
                  max-height="1200"
                  v-loading.body="listLoading"
                  element-loading-text="拼命加载中"
                  row-key="goodsCode">
            <el-table-column prop="pushTime"
                             label="通知发布时间"
                             style="width: 18%"
                             align="center"></el-table-column>
            <el-table-column prop="storeNameList"
                             label="通知门店"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    <el-popover placement="right"
                                trigger="hover">
                        <div v-for="(item,i) in scope.row.nameList"
                             :key="i"
                             class="store">{{item}}</div>
                        <span slot="reference"
                              class="storeNum">{{scope.row.nameList.length}} 家</span>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column label="通知内容"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    {{scope.row.pushMainBody}}
                    <br>
                    {{scope.row.pushMainMessage}}
                </template>
            </el-table-column>
            <el-table-column prop="pushType"
                             label="通知形式"
                             style="width: 18%"
                             align="center"></el-table-column>
            <el-table-column prop="pushPlayType"
                             label="发布计划"
                             style="width: 18%"
                             align="center"></el-table-column>
            <el-table-column prop="gmtCreated"
                             label="创建时间"
                             style="width: 18%"
                             align="center"></el-table-column>
            <el-table-column prop="pushStatus"
                             label="状态"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    <span v-if="scope.row.pushStatus =='A'">已发布</span>
                    <span v-else-if="scope.row.pushStatus =='B'">待发布</span>
                    <span v-else-if="scope.row.pushStatus =='C'">审核中</span>
                    <span v-else-if="scope.row.pushStatus =='D'">已取消</span>
                </template>
            </el-table-column>
            <el-table-column label="操作"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    <!-- <span @click="showCreateGoods(scope.row)" class="blue">编辑</span>
                    <span @click="shouBindMachine(scope.row)" class="blue">关联售货机</span> -->
                    <!-- <span @click="toDetail(scope.row)" class="blue">管理</span> -->
                    <span v-if="scope.row.pushStatus =='B'"
                          class="blue"
                          @click="goNow(scope.row)">立即发布</span>
                    <span v-else-if="scope.row.pushStatus =='C'"
                          class="blue"
                          @click="cancel(scope.row)">取消通知</span>
                    <span v-else>-</span>
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
                   width="56%">
            <el-form class="small-space demo-form-inline sku-form"
                     :model="goodsData"
                     label-position="left"
                     label-width="160px"
                     :inline="false">
                <el-form-item label="通知门店："
                              required
                              class="create">
                    <el-select v-model="goodsData.stores"
                               placeholder="请选择"
                               multiple
                               @change="storeChange">
                        <el-option v-for="item in tabsC"
                                   :key="item.storeCode"
                                   :label="item.storeName"
                                   :value="item.storeCode">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="预计通知用户："
                              required
                              class="create"
                              v-if="goodsData.stores.length>0">
                    {{goodsData.storesNum}}
                </el-form-item>
                <el-form-item label="通知形式："
                              required
                              class="create">
                    <el-select v-model="goodsData.tabsAId"
                               placeholder="请选择">
                        <el-option v-for="item in tabsA"
                                   :key="item.id"
                                   :label="item.name"
                                   :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="发布计划："
                              required
                              class="create">
                    <el-select v-model="goodsData.tabsBId"
                               placeholder="请选择">
                        <el-option v-for="item in tabsB"
                                   :key="item.id"
                                   :label="item.name"
                                   :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="短信内容："
                              required
                              class="create"
                              v-if="goodsData.tabsAId== '2'||goodsData.tabsAId=='0'">
                    <el-input type="textarea"
                              :rows="4"
                              maxlength="30"
                              placeholder="请输入内容"
                              v-model="goodsData.pushMainMessage"
                              @input="Achange"></el-input>
                    <div style="text-align:right">{{goodsData.pushMainMessageLength || 0}}/30</div>
                </el-form-item>
                <el-form-item label="push内容："
                              required
                              class="create"
                              v-if="goodsData.tabsAId=='2'||goodsData.tabsAId=='1'">
                    <el-input type="textarea"
                              :rows="4"
                              maxlength="30"
                              placeholder="请输入内容"
                              v-model="goodsData.pushMainBody"
                              @input="Bchange"></el-input>
                    <div style="text-align:right">{{goodsData.pushMainBodyLength || 0}}/30</div>
                </el-form-item>
            </el-form>
            <span slot="footer"
                  class="dialog-footer">
                <el-button @click="createGoodsDialogVisible = false">取 消</el-button>
                <el-button type="primary"
                           @click="editGoods"
                           v-if="goodsData.id">确 定</el-button>
                <el-button type="primary"
                           @click="createGoods"
                           v-else>确认发布</el-button>
            </span>
        </el-dialog>
        <el-dialog title="关联售货机"
                   :visible.sync="bindMachineDialogVisible"
                   width="60%">
            <!-- <div class="flex-center">
                <div>
                    <div>
                        <el-select v-model="machineType" placeholder="请选择售货机分类" @change="machineTypeChange">
                            <el-option v-for="item in machineTabs" :key="item.id" :label="item.name" :value="item.id">
                            </el-option>
                        </el-select>
                    </div>
                    <br>
                    <el-transfer
                    v-model="bindValue"
                    :titles="[machineTypeName, '已选'+machineTypeName]"
                    @change="handleChange"
                    @left-check-change="handleChangeLeft"
                    @right-check-change="handleChangeRight"
                    :data="data">
                    </el-transfer>
                </div>
            </div> -->
            <el-table :data="data"
                      stripe
                      style="width: 100%"
                      max-height="1200"
                      v-loading.body="listLoading2"
                      element-loading-text="拼命加载中"
                      row-key="goodsCode">
                <el-table-column type="selection"
                                 width="55">
                    <template slot-scope="scope">
                        <el-checkbox v-model="scope.row.checked"></el-checkbox>
                    </template>
                </el-table-column>
                <el-table-column prop="machineName"
                                 label="机器编号"
                                 style="width: 18%"
                                 align="center"></el-table-column>
                <el-table-column prop="machineName"
                                 label="机器类型"
                                 style="width: 18%"
                                 align="center"></el-table-column>
                <el-table-column prop="typeName"
                                 label="货道类型"
                                 style="width: 18%"
                                 align="center"></el-table-column>
                <el-table-column prop="machineCode"
                                 label="机器名称"
                                 style="width: 18%"
                                 align="center"></el-table-column>
                <el-table-column label="激活状态"
                                 style="width: 18%"
                                 align="center">
                    <template slot-scope="scope">
                        <span v-if="scope.row.activateStatus ==1">已激活</span>
                        <span v-else>未激活</span>
                    </template>
                </el-table-column>
            </el-table>
            <span slot="footer"
                  class="dialog-footer">
                <el-button @click="bindMachineDialogVisible = false">取 消</el-button>
                <el-button type="primary"
                           @click="bindMachine">保 存</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import { regionData, CodeToText } from "element-china-area-data";
export default {
    data() {
        return {
            options: regionData,
            listLoading: false,
            listLoading2: false,
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
            machineNameTabs: [],
            selectGoodsTabs: [],
            tabsC: [],
            tabsA: [
                {
                    name: "短信+push",
                    id: "2"
                },
                {
                    name: "短信",
                    id: "0"
                },
                {
                    name: "push",
                    id: "1"
                }
            ],
            typeB: "1",
            typeNameB: "自动发布",
            tabsB: [
                {
                    name: "自动发布",
                    id: "0"
                }
            ],
            ownerTabs: [],
            tableData: [],
            tableData2: [],
            params: {
                pageRow: 20,
                pageNum: 1
            },
            createGoodsDialogVisible: false,
            bindMachineDialogVisible: false,
            goodsData: {
                tabsBId: "0",
                textarea: "",
                stores: []
            },
            skuData: {},
            file: {},
            dialogTitle: "",
            expands: [],
            reqLoading: false,
            phoneType: 0,
            bindValue: [],
            data: []
        };
    },
    created() {
        this.getList();
        this.getTypeList();
    },

    methods: {
        Achange() {
            let len = this.goodsData.pushMainMessage.length;
            this.$set(this.goodsData, "pushMainMessageLength", len);
        },
        Bchange() {
            let len = this.goodsData.pushMainBody.length;
            this.$set(this.goodsData, "pushMainBodyLength", len);
        },
        toDetail(row) {
            this.$router.push({ path: "/system/vendConfig/detail/" + row.id });
        },
        handleChange(value, direction, movedKeys) {
            let type = direction == "left" ? 0 : 1;
            // console.log(value, direction, movedKeys);
            this.bindMachine(type, movedKeys);
        },
        handleChangeLeft(list) {
            // console.log(1)
            // this.bindMachine(list)
        },
        handleChangeRight(list) {
            // console.log(0)
            // this.bindMachine(list)
        },
        bindMachine(type, list) {
            var listA = this.data;
            var list = this.data;
            var checked = [];
            let str = "";
            let strChecked = "";
            for (let i in listA) {
                if (listA[i].checked) {
                    checked.push(listA[i].machineCode);
                } else {
                    // list.push(listA[i].machineCode)
                }
            }
            for (let i in list) {
                if (i == list.length) {
                    str += list[i].machineCode;
                } else {
                    str += list[i].machineCode + ",";
                }
            }
            for (let i in checked) {
                if (i == checked.length) {
                    strChecked += checked[i];
                } else {
                    strChecked += checked[i] + ",";
                }
            }
            let data = {
                // doOutIn:type,
                storeCode: this.goodsData.storeCode,
                machineCode: strChecked,
                allMachineCode: str
            };
            this.api({
                url: "/store/doVendForStoreByOwner",
                method: "post",
                data: data
            }).then(data => {
                this.getList(this.params);
                this.bindMachineDialogVisible = false;
                // this.getBindInfo()
            });
        },
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
        checkUser() {
            this.api({
                url: "/user/findIsHaveUser",
                method: "post",
                data: {
                    userName: this.goodsData.username
                }
            }).then(data => {
                if (data.returnCode == "10090") {
                    this.phoneType = 2; //未注册
                } else if (data.returnCode == "10091") {
                    this.phoneType = 3; //该账户已成为其他运营商成员无法加入
                } else if (data.returnCode == "10092") {
                    this.phoneType = 4; //该账户已存在列表中
                } else {
                    this.phoneType = 1;
                }
            });
        },
        createGoods() {
            console.log(this.goodsData);
            if (this.goodsData.stores.length == 0) {
                this.$message({
                    type: "warning",
                    message: "您未选择门店"
                });
                return;
            }

            if (
                !(
                    this.goodsData.tabsAId == "0" ||
                    (this.goodsData.tabsAId == 1) |
                        (this.goodsData.tabsAId == 2)
                )
            ) {
                this.$message({
                    type: "warning",
                    message: "您未选择通知形式"
                });
                return;
            }
            if (
                (this.goodsData.tabsAId == "0" ||
                    this.goodsData.tabsAId == "2") &&
                !this.goodsData.pushMainMessage
            ) {
                this.$message({
                    type: "warning",
                    message: "您未填写短信内容"
                });
                return;
            }
            if (
                (this.goodsData.tabsAId === "1" ||
                    this.goodsData.tabsAId == "2") &&
                !this.goodsData.pushMainBody
            ) {
                this.$message({
                    type: "warning",
                    message: "您未填写push内容"
                });
                return;
            }
            let lists = "";
            for (let i in this.goodsData.stores) {
                lists += this.goodsData.stores[i] + ",";
            }
            this.goodsData.username = this.userName;
            this.api({
                url: "/promotion/addPushActivity",
                method: "post",
                data: {
                    storeList: lists,
                    pushType: this.goodsData.tabsAId,
                    pushPlayType: this.goodsData.tabsBId,
                    pushMainMessage: this.goodsData.pushMainMessage,
                    pushMainBody: this.goodsData.pushMainBody,
                    username: this.userName,
                    coverageUser: this.goodsData.storesNum
                }
            }).then(data => {
                this.$message({
                    type: "success",
                    message: "消息推送成功"
                });
                this.getList(this.params);
                this.createGoodsDialogVisible = false;
            });
        },
        editGoods() {
            if (!this.goodsData.storeName) {
                this.$message({
                    type: "warning",
                    message: "您未填写门店名称"
                });
                return;
            }
            if (!this.goodsData.detailsAddress || !this.goodsData.sheng) {
                this.$message({
                    type: "warning",
                    message: "您未填写门店地址"
                });
                return;
            }
            if (!this.goodsData.storeManagerId) {
                this.$message({
                    type: "warning",
                    message: "您未选择门店店长"
                });
                return;
            }
            if (!this.goodsData.storeStatus) {
                this.$message({
                    type: "warning",
                    message: "您未选择门店状态"
                });
                return;
            }
            this.goodsData.cascader = null;
            this.goodsData.ownerId = this.userId;
            this.api({
                url: "/store/updateStoreInfoByOwner",
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
            if (row.id) {
                this.dialogTitle = "编辑门店";
                this.goodsData = row;
                let cascader = [];
                if (this.goodsData.sheng) {
                    cascader.push(this.goodsData.sheng);
                }
                if (this.goodsData.shi) {
                    cascader.push(this.goodsData.shi);
                }
                if (this.goodsData.qu) {
                    cascader.push(this.goodsData.qu);
                }
                for (let i in this.ownerTabs) {
                    if (
                        this.ownerTabs[i].storeManagerId ==
                        this.goodsData.storeManagerId
                    ) {
                        console.log(this.goodsData);
                        this.goodsData.username = this.ownerTabs[i].username;
                    }
                }
                this.goodsData.cascader = cascader;
                this.phoneType = 1;
            } else {
                this.dialogTitle = "发布通知";
                this.goodsData = {
                    tabsBId: "0",
                    stores: []
                };
            }
            this.$set(this, "createGoodsDialogVisible", true);
            // this.createGoodsDialogVisible = true
        },
        shouBindMachine(row) {
            this.goodsData = row;
            this.getBindInfo(row);
            this.bindMachineDialogVisible = true;
        },
        getBindInfo() {
            this.listLoading2 = true;
            this.api({
                url: "/store/showAllVendByOwner",
                method: "post",
                data: {
                    ownerId: this.userId,
                    storeCode: this.goodsData.storeCode,
                    typeId: Number(this.machineType)
                }
            }).then(data => {
                // let allList = []
                // let checkedList = []
                // for(let i in data.jsonObjectList){
                //     let item = {
                //         key: data.jsonObjectList[i].machineCode,
                //         label: data.jsonObjectList[i].machineCode,
                //         disabled: false
                //     }
                //     checkedList.push(item.key)
                //     allList.push(item)
                // }
                // for(let i in data.jsonList){
                //     let item = {
                //         key: data.jsonList[i].machineCode,
                //         label: data.jsonList[i].machineCode,
                //         disabled: false
                //     }
                //     allList.push(item)
                // }
                let array = data.jsonList;
                for (let i in data.jsonObjectList) {
                    let item = data.jsonObjectList[i];
                    item.checked = true;
                    array.push(item);
                }
                this.data = array;
                // this.bindValue = data.jsonObjectList
                this.listLoading2 = false;
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

            this.getList(this.params);
        },
        getList(params) {
            this.listLoading = true;
            let data = params || this.params;
            data.username = this.userName;
            this.api({
                url: "/promotion/showAllPushActivity",
                method: "post",
                data: data
            }).then(data => {
                this.listLoading = false;
                this.tableData = data.list;
                this.totalCount = data.totalCount;
                this.expands = [];
            });
        },
        getTypeList() {
            this.api({
                url: "/promotion/showCoderUserAndStore",
                method: "post",
                data: {
                    username: this.userName
                }
            })
                .then(data => {
                    this.tabsC = data;
                })
                .catch(e => {});
        },
        goNow() {
            this.$confirm("确定立即发布该通知?", "提示", {
                confirmButtonText: "确定",
                showCancelButton: false,
                type: "warning"
            }).then(() => {
                this.api({
                    // url: "/promotion/doDownForVendByOperator",
                    method: "post",
                    data: {
                        userId: row.userId,
                        deleteStatus: "0"
                    }
                }).then(data => {
                    this.$message({
                        type: "success",
                        message: "发布成功"
                    });
                    this.getList(this.params);
                });
            });
        },
        cancel() {
            this.$confirm("确定取消该通知?", "提示", {
                confirmButtonText: "确定",
                showCancelButton: false,
                type: "warning"
            }).then(() => {
                this.api({
                    // url: "/promotion/doDownForVendByOperator",
                    method: "post",
                    data: {
                        userId: row.userId,
                        deleteStatus: "0"
                    }
                }).then(data => {
                    this.$message({
                        type: "success",
                        message: "取消成功"
                    });
                    this.getList(this.params);
                });
            });
        },
        storeChange() {
            let sum = 0;
            for (let i in this.goodsData.stores) {
                for (let j in this.tabsC) {
                    if (this.goodsData.stores[i] == this.tabsC[j].storeCode) {
                        sum = sum + this.tabsC[j].coverUser;
                    }
                }
            }
            this.$set(this.goodsData, "storesNum", sum);
        },
        remove(row) {
            this.$confirm("确定解除绑定该机器?", "提示", {
                confirmButtonText: "确定",
                showCancelButton: false,
                type: "warning"
            }).then(() => {
                this.api({
                    url: "/promotion/doDownForVendByOperator",
                    method: "post",
                    data: {
                        userId: row.userId,
                        deleteStatus: "0"
                    }
                }).then(data => {
                    this.$message({
                        type: "success",
                        message: "解除绑定成功"
                    });
                    this.getList(this.params);
                });
            });
        },
        toCreateOwner() {
            this.$router.push({ path: "/user" });
        },
        handleAreaChange(value) {
            if (value.length == 1) {
                this.goodsData.sheng = value[0];
                this.goodsData.shi = null;
                this.goodsData.qu = null;
            } else if (value.length == 2) {
                this.goodsData.sheng = value[0];
                this.goodsData.shi = value[1];
                this.goodsData.qu = null;
            } else {
                this.goodsData.sheng = value[0];
                this.goodsData.shi = value[1];
                this.goodsData.qu = value[2];
            }
            this.goodsData.shengName = CodeToText[this.goodsData.sheng];
            this.goodsData.shiName = CodeToText[this.goodsData.shi];
            this.goodsData.quName = CodeToText[this.goodsData.qu];
        },
        storeManagerChange() {
            for (let i in this.ownerTabs) {
                if (
                    this.ownerTabs[i].storeManagerId ==
                    this.goodsData.storeManagerId
                ) {
                    this.goodsData.username = this.ownerTabs[i].username;
                }
            }
        },
        machineTypeChange() {
            for (let i in this.machineTabs) {
                if (this.machineTabs[i].id == this.machineType) {
                    this.machineTypeName = this.machineTabs[i].name;
                }
            }
            this.getBindInfo();
        }
    },
    computed: {
        ...mapGetters(["userId", "userName"])
    }
};
</script>

