<style scoped>
.input-with-select {
    width: 50%;
}
.dialog-form-item .el-input__inner {
    width: 160px;
}
.modal-title {
    font-weight: 600;
    font-size: 15px;
    padding-bottom: 16px;
}
.flex-center {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
}
.flex-center-Y {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
}
.jt-box {
    max-height: 40vh;
    overflow-y: scroll;
}
.jt {
    width: 100%;
    text-align: center;
}
.jt > div {
    padding: 6px 10px;
}
.jt-index {
    width: 100px;
}
.jt-time {
    flex: 1;
}
.jt-rate {
    flex: 1;
}
.m-r {
    margin-right: 20px;
}
.blue {
    color: #66b1ff;
    cursor: pointer;
    padding: 10px 6px;
}
.right {
    text-align: right;
    padding: 20px 4vw;
}
.danger {
    cursor: pointer;
}
.el-select .el-input {
    width: 120px;
}
.el-icon-edit {
    cursor: pointer;
}
.icon{
    width: 24px;
    height: 24px;
}
</style>
<style>
.jt-rate .el-input {
    width: 120px;
}
/* .el-select .el-input {
    width: 120px;
} */
</style>

<template>
    <div class="app-container">
        <el-form>
            <el-form-item>
                <el-dropdown @command="handleCommand">
                    <el-button type="primary">配置促销计划<i class="el-icon-arrow-down el-icon--right"></i></el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item v-for="(item,i) in outInItems"
                                          :key="i"
                                          :command="item.href">{{item.value}}</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-form-item>
        </el-form>
        <el-tabs v-model="activeTab"
                 type="card"
                 @tab-click="handleClick">
            <el-tab-pane label="限时促销"
                         name="limited"></el-tab-pane>
            <el-tab-pane label="阶梯促销"
                         name="ladder"></el-tab-pane>
            <el-tab-pane label="全局促销"
                         name="all"></el-tab-pane>
            <!-- <el-tab-pane label="临期SKU"
                         name="expired"></el-tab-pane> -->
        </el-tabs>
        <el-input placeholder="请输入内容"
                  v-model="searchValue"
                  class="input-with-select"
                  @keyup.enter.native="search"
                  v-if="activeTab == 'all'">
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
        <br>
        <el-table :data="tableData"
                  v-if="activeTab == 'all'"
                  style="width: 100%"
                  v-loading.body="listLoading"
                  element-loading-text="拼命加载中">
            <el-table-column prop="brandName"
                             label="品牌名称"
                             align="center" :key="Math.random()"></el-table-column>
            <el-table-column prop="skuName"
                             label="SKU名称"
                             align="center" :key="Math.random()"></el-table-column>
            <el-table-column prop="skuCode"
                             label="SKU编号"
                             align="center" :key="Math.random()"></el-table-column>
            <el-table-column prop="appPicture"
                             label="SKU图片"
                             align="center" :key="Math.random()">
                <template slot-scope="scope">
                    <img :src="scope.row.appPicture"
                         width="40"
                         height="40"
                         class="portrait" />
                </template>
            </el-table-column>
            <el-table-column prop="appPicture"
                             label="规格"
                             align="center" :key="Math.random()">
                <template slot-scope="scope">
                    {{scope.row.skuSpecification}}{{scope.row.skuUnits}}
                </template>
            </el-table-column>
            <el-table-column prop="appPicture"
                             label="存量"
                             align="center" :key="Math.random()">
                <template slot-scope="scope">
                    {{scope.row.skuNumber}}件
                </template>
            </el-table-column>
            <el-table-column prop="appPicture"
                             label="成本价"
                             align="center" :key="Math.random()">
                <template slot-scope="scope">
                    ¥ {{scope.row.procurementPrice}}
                </template>
            </el-table-column>
            <el-table-column prop="appPicture"
                             label="建议零售价"
                             align="center" :key="Math.random()">
                <template slot-scope="scope">
                    ¥ {{scope.row.salePrice}}
                </template>
            </el-table-column>
            <el-table-column prop="appPicture"
                             label="折扣率"
                             align="center" :key="Math.random()">
                <template slot-scope="scope">
                    <div @click="showEditDiscount(scope.row)"
                         class="pointer">
                        {{scope.row.discountRate}}%
                        <i class="el-icon-edit"></i>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="appPicture"
                             label="利润率"
                             align="center" :key="Math.random()">
                <template slot-scope="scope">
                    {{scope.row.profits}}%
                </template>
            </el-table-column>

        </el-table>
        <el-table :data="tableData"
                  v-if="activeTab == 'expired'"
                  style="width: 100%"
                  v-loading.body="listLoading"
                  element-loading-text="拼命加载中">
            <el-table-column prop="brandName"
                             label="品牌名称"
                             align="center" :key="Math.random()"></el-table-column>
            <el-table-column prop="skuName"
                             label="SKU名称"
                             align="center" :key="Math.random()"></el-table-column>
            <el-table-column prop="skuCode"
                             label="SKU编号"
                             align="center" :key="Math.random()"></el-table-column>
            <el-table-column prop="appPicture"
                             label="SKU图片"
                             align="center" :key="Math.random()">
                <template slot-scope="scope">
                    <img :src="scope.row.appPicture"
                         width="40"
                         height="40"
                         class="portrait" />
                </template>
            </el-table-column>
            <el-table-column prop="appPicture"
                             label="规格"
                             align="center" :key="Math.random()">
                <template slot-scope="scope">
                     {{scope.row.skuSpecification}}{{scope.row.skuUnits}}
                </template>
            </el-table-column>
            <el-table-column prop="batchCode"
                             label="批次"
                             align="center" :key="Math.random()"></el-table-column>
            <el-table-column prop="appPicture"
                             label="在售"
                             align="center" :key="Math.random()">
                <template slot-scope="scope">
                        <el-popover placement="top-start"
                                    width="120"
                                    trigger="hover">
                                    <div v-for="(item,i) in scope.row.storeJson"
                                        :key="i"
                                        class="store">
                                        {{item.storeName}}:{{item.typeName}};{{item.aisleSkuNum}}件
                                    </div>
                                    <span slot="reference">{{scope.row.aisleNum}}件</span>
                        </el-popover>
                </template>
            </el-table-column>
            <el-table-column prop="appPicture"
                             label="库存"
                             align="center" :key="Math.random()">
                <template slot-scope="scope">
                    {{scope.row.residueNum}}件
                </template>
            </el-table-column>
            <el-table-column prop="appPicture"
                             label="剩余保质期"
                             align="center" :key="Math.random()">
                <template slot-scope="scope">
                    {{scope.row.dateNum}}天
                </template>
            </el-table-column>
            <el-table-column prop="appPicture"
                             label="成本价"
                             align="center" :key="Math.random()">
                <template slot-scope="scope">
                    ¥ {{(scope.row.procurementPrice).toFixed(2)}}
                </template>
            </el-table-column>
            <el-table-column prop="appPicture"
                             label="销售价"
                             align="center" :key="Math.random()">
                <template slot-scope="scope">
                    <div @click="showEditPrice(scope.row)"
                         class="pointer">
                        ¥ {{scope.row.salePrice || scope.row.skuSalePrice}}
                        <i class="el-icon-edit"></i>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="appPicture"
                             label="折扣率"
                             align="center" :key="Math.random()">
                <template slot-scope="scope">
                    <div @click="showEditDiscountB(scope.row)"
                         class="pointer">
                        {{scope.row.discountRate || scope.row.skuDiscountRate}} %
                        <i class="el-icon-edit"></i>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="appPicture"
                             label="利润率"
                             align="center" :key="Math.random()">
                <template slot-scope="scope">
                    {{scope.row.profits}}%
                </template>
            </el-table-column>
            <el-table-column label="操作"
                                 width="150"
                                 align="center">
                    <template slot-scope="scope">
                        <span @click="stopSale(scope.row)"
                              class="blue"
                              v-if="scope.row.status == 1">
                            <el-popover placement="top-start"
                                        width="40"
                                        trigger="hover"
                                        content="暂停销售">
                                <img src="../../assets/icons/ic_stop.png"
                                     alt=""
                                     class="icon" slot="reference">
                            </el-popover>
                        </span>
                        <span @click="reSale(scope.row)"
                              class="blue"
                              v-if="scope.row.status == 0">
                            <el-popover placement="top-start"
                                        width="40"
                                        trigger="hover"
                                        content="重新销售">
                                <img src="../../assets/icons/ic_resale.png"
                                     alt=""
                                     class="icon" slot="reference">
                            </el-popover>
                        </span>
                    </template>
                </el-table-column>
        </el-table>
        <el-table :data="tableData"
                  v-else-if="activeTab == 'limited' || activeTab == 'ladder'"
                  style="width: 100%"
                  v-loading.body="listLoading"
                  element-loading-text="拼命加载中">
            <el-table-column prop="index" :key="Math.random()"
                             label="序号"
                             align="center"></el-table-column>
            <el-table-column prop="discountName"
                             label="促销名称"
                             align="center" :key="Math.random()"></el-table-column>
            <el-table-column prop="priceSum"
                             label="限时促销"
                             align="center"
                             v-if="activeTab=='limited'" :key="Math.random()">
                <template slot-scope="scope">
                    每天 {{scope.row.startTime}} - {{scope.row.endTime}}
                </template>
            </el-table-column>
            <el-table-column prop="storeName"
                             label="促销门店"
                             align="center" :key="Math.random()"></el-table-column>
            <el-table-column prop="account"
                             label="促销SKU数量"
                             align="center" :key="Math.random()"></el-table-column>
            <el-table-column prop="gmtCreated"
                             label="创建时间"
                             align="center" :key="Math.random()"></el-table-column>
            <el-table-column label="操作"
                             align="center" :key="Math.random()">
                <template slot-scope="scope">
                    <el-button @click="toDetail(scope.row)"
                               type="text"
                               size="small">管理</el-button>
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
        <!-- 配置限时促销 -->
        <el-dialog title="配置限时促销"
                   :visible.sync="isShowLimitedModal"
                   width="60%">
            <el-form label-position="left"
                     label-width="80px"
                     :inline="true">
                <el-form-item label="促销名称"
                              required
                              class="dialog-form-item">
                    <el-input type="text"
                              v-model="data.discountName"
                              placeholder="促销名称"></el-input>
                </el-form-item>
                <br>
                <el-form-item label="生效时间"
                              required>
                    <el-time-picker class="input-with-date"
                                    is-range
                                    v-model="data.times"
                                    type="datetimerange"
                                    range-separator=" 至 "
                                    start-placeholder="开始时间"
                                    end-placeholder="结束时间"
                                    value-format="HH:mm:ss">
                    </el-time-picker>
                </el-form-item>
                <br>
                <el-form-item label="循环模式"
                              required
                              class="create dialog-form-item">
                    <el-select v-model="data.type"
                               placeholder="请选择分类">
                        <el-option v-for="item in timeTabs"
                                   :key="item.id"
                                   :label="item.name"
                                   :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <br>
                <el-form-item label="选择门店"
                              required
                              class="create dialog-form-item">
                    <el-select v-model="data.storeCode"
                               placeholder="请选择门店">
                        <el-option v-for="item in storeTabs"
                                   :key="item.storeCode"
                                   :label="item.storeName"
                                   :value="item.storeCode">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <span slot="footer"
                  class="dialog-footer">
                <el-button @click="isShowLimitedModal = false">取 消</el-button>
                <el-button type="primary"
                           @click="saveLimited">确 定</el-button>
            </span>
        </el-dialog>
        <!-- /配置限时促销 -->
        <!-- 配置阶梯促销 -->
        <el-dialog title="配置阶梯促销"
                   :visible.sync="isShowLadderModal"
                   width="70%">
            <el-form label-position="left"
                     label-width="80px"
                     :inline="true">
                <el-form-item label="促销名称"
                              required
                              class="dialog-form-item">
                    <el-input type="text"
                              v-model="data.discountName"
                              placeholder="促销名称"></el-input>
                </el-form-item>
                <el-form-item label="选择门店"
                              required
                              class="create dialog-form-item">
                    <el-select v-model="data.storeCode"
                               placeholder="请选择分类"
                               @change="storeChange">
                        <el-option v-for="item in storeTabs"
                                   :key="item.storeCode"
                                   :label="item.storeName"
                                   :value="item.storeCode">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="选择机器"
                              required
                              class="create dialog-form-item"
                              v-if="data.storeCode">
                    <el-select v-model="data.machineCode"
                               placeholder="请选择分类">
                        <el-option v-for="item in machineTabs"
                                   :key="item.machineCode"
                                   :label="item.machineName"
                                   :value="item.machineCode">
                        </el-option>
                    </el-select>
                </el-form-item>
                <div class="modal-title"> 配置阶梯促销参数 &emsp;循环模式：每天</div>
                <el-card>
                    <div class="flex-center jt">
                        <div class="jt-index">序号</div>
                        <div class="jt-time">时间</div>
                        <div class="jt-rate">折扣率</div>
                        <div class="jt-delete"
                             v-if="data.list.length > 2">操作</div>
                    </div>
                    <br>
                    <div class="jt-box">
                        <div v-for="(item,i) in data.list"
                             :key="i"
                             class="flex-center jt">
                            <div class="jt-index">{{Number(i)+1}}</div>
                            <div class="jt-time">
                                <el-time-picker v-model="item.time"
                                                value-format="HH:mm:ss"
                                                placeholder="时间"
                                                :picker-options="{
                                        selectableRange:'00:00:00 - '+(data.list[i+1].time||'23:59:59')
                                    }"
                                                v-if="i==0">
                                </el-time-picker>
                                <el-time-picker v-model="item.time"
                                                value-format="HH:mm:ss"
                                                placeholder="时间"
                                                :picker-options="{
                                        selectableRange:(data.list[i-1].time||'00:00:00') +' - 23:59:59'
                                    }"
                                                v-else-if="i==(data.list.length-1)">
                                </el-time-picker>
                                <el-time-picker v-model="item.time"
                                                value-format="HH:mm:ss"
                                                placeholder="时间"
                                                :picker-options="{
                                        selectableRange:(data.list[i-1].time||'00:00:00') + ' - '+(data.list[i+1].time||'23:00:59')
                                    }"
                                                v-else>
                                </el-time-picker>
                            </div>
                            <div class="jt-rate flex-center">
                                <el-input v-model="item.rate"
                                          placeholder="请输入内容"
                                          class="m-r"></el-input>折
                            </div>
                            <div class="jt-delete danger"
                                 @click="removeJT(i)"
                                 v-if="data.list.length > 2">删除</div>
                        </div>
                        <div class="right">
                            <span @click="addLine"
                                  class="blue">添加一行</span>
                        </div>
                    </div>
                </el-card>
            </el-form>
            <span slot="footer"
                  class="dialog-footer">
                <el-button @click="isShowLadderModal = false">取 消</el-button>
                <el-button type="primary"
                           @click="saveLadder">确 定</el-button>
            </span>
        </el-dialog>
        <!-- /配置阶梯促销 -->
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            activeTab: this.$route.params.tab || "limited",
            listLoading: false,
            searchValue: "",
            selectedTab: "",
            outInItems: [
                {
                    value: "+限时促销",
                    href: "limited"
                },
                {
                    value: "+阶梯促销",
                    href: "ladder"
                }
            ],
            tableData: [
                {
                    number: "test"
                }
            ],
            params: {
                pageRow: 20,
                pageNum: 1
            },
            totalCount: 0,
            isShowLimitedModal: false,
            isShowLadderModal: false,
            data: {
                type: "1",
                list: [{ time: "" }, { time: "" }]
            },
            timeTabs: [
                {
                    name: "每天",
                    id: "1"
                }
            ],
            storeTabs: [],
            machineTabs: [],
            selectedTab: "skuName",
            selectTabs: [
                {
                    name: "SKU名称",
                    id: "skuName"
                },
                {
                    name: "SKU编号",
                    id: "skuCode"
                },
                {
                    name: "品牌名称",
                    id: "brandName"
                }
            ],
            searchValue: ""
        };
    },
    created() {
        this.getList(); //获取表格数据
        this.getTypeList(); //获取下拉框数据
    },
    methods: {
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
        removeJT(i) {
            this.data.list.splice(i, 1);
        },
        stopSale(row){
            this.api({
                url: "/promotion/stopShopSku",
                method: "post",
                data: { 
                    skuCode: row.skuCode,
                    batchCode: row.batchCode
                }
            }).then(data => {
                this.$message({
                    type: 'success',
                    message: '操作成功!'
                })
                this.getList(this.params)
            });
        },
        reSale(row){
            this.api({
                url: "/promotion/restartShopSku",
                method: "post",
                data: { 
                    skuCode: row.skuCode,
                    batchCode: row.batchCode
                }
            }).then(data => {
                this.$message({
                    type: 'success',
                    message: '操作成功!'
                })
                this.getList(this.params)
            });
        },
        storeChange(val) {
            this.api({
                url: "/promotion/showVend",
                method: "post",
                data: { storeCode: val }
            }).then(data => {
                this.machineTabs = data;
            });
        },
        handleClick(tab, event) {
            this.getList();
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
        // search() {
        //     this.params.optionCode = this.searchValue;
        //     this.getList(this.params);
        // },
        getTypeList() {
            this.api({
                url: "/promotion/showAllStoreForOperator",
                method: "post",
                data: { username: this.userName }
            }).then(data => {
                this.storeTabs = data;
            });
        },
        getList(params) {
            this.listLoading = true;
            this.$set(this, "tableData", []);
            if (params) {
                params["username"] = this.userName;
            } else {
                var data = {
                    pageRow: 10,
                    pageNum: 1,
                    username: this.userName
                };
            }
            var activeTab = this.activeTab;
            if (activeTab == "limited") {
                this.api({
                    url: "/promotion/showDiscoutPage",
                    method: "post",
                    data: params || data
                }).then(data => {
                    this.listLoading = false;
                    for (let i in data.list) {
                        data.list[i].index = Number(i) + 1;
                    }
                    this.$set(this, "tableData", data.list);
                    this.totalCount = data.totalCount;
                });
            } else if (activeTab == "ladder") {
                this.api({
                    url: "/promotion/showLadderPage",
                    method: "post",
                    data: params || data
                }).then(data => {
                    this.listLoading = false;
                    for (let i in data.list) {
                        data.list[i].index = Number(i) + 1;
                    }
                    this.$set(this, "tableData", data.list);
                    this.totalCount = data.totalCount;
                });
            } else if (activeTab == "all") {
                this.api({
                    url: "/promotion/showSkuForAllPromotion",
                    method: "post",
                    data: params || data
                }).then(data => {
                    this.listLoading = false;
                    for (let i in data.list) {
                        data.list[i].index = Number(i) + 1;
                    }
                    // this.tableData = data.list;
                    this.$set(this, "tableData", data.list);
                    this.totalCount = data.totalCount;
                });
            } else if (activeTab == "expired") {
                this.listLoading = true;
                this.api({
                    url: "promotion/showAllExpiredSku",
                    method: "post",
                    data: params || data
                }).then(data => {
                    this.listLoading = false;
                    for (let i in data.list) {
                        data.list[i].index = Number(i) + 1;
                    }
                    this.$set(this, "tableData", data.list);
                    this.totalCount = data.totalCount;
                });
            }
        },
        showEditDiscount(row) {
            let this_ = this;
            this.$prompt("折扣率", "修改", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                inputValue: row.discountRate
            })
                .then(data => {
                    if (!data.value) {
                        this.$message({
                            type: "warning",
                            message: "请输入折扣率"
                        });
                        return;
                    }
                    this_
                        .api({
                            url: "/promotion/updateDiscountRate",
                            method: "post",
                            data: {
                                discountRate: data.value,
                                skuCode: row.skuCode
                            }
                        })
                        .then(data => {
                            this.getList(this.params);
                            this_.$message({
                                type: "success",
                                message: "修改完成!"
                            });
                        });
                })
                .catch(() => {});
        },
        showEditDiscountB(row) {
            let this_ = this;
            this.$prompt("折扣率", "修改", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                inputValue: row.discountRate || row.skuDiscountRate
            })
                .then(data => {
                    if (!data.value) {
                        this.$message({
                            type: "warning",
                            message: "请输入折扣率"
                        });
                        return;
                    }
                    this_
                        .api({
                            url: "/promotion/updateExpiredDiscount",
                            method: "post",
                            data: {
                                discountRate: data.value,
                                skuCode: row.skuCode,
                                batchCode:row.batchCode,
                                skuSalePrice:row.skuSalePrice
                            
                            }
                        })
                        .then(data => {
                            this.getList(this.params);
                            this_.$message({
                                type: "success",
                                message: "修改完成!"
                            });
                        });
                })
                .catch(() => {});
        },
        showEditPrice(row) {
            let this_ = this;
            this.$prompt("零售价", "修改", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                inputValue: row.machineName
            })
                .then(data => {
                    if (!data.value) {
                        this.$message({
                            type: "warning",
                            message: "请输入零售价"
                        });
                        return;
                    }
                    this_
                        .api({
                            url: "/promotion/updateExpiredDiscount",
                            method: "post",
                            data: {
                                salePrice: data.value,
                                skuCode: row.skuCode,
                                batchCode:row.batchCode,
                                skuSalePrice:row.skuSalePrice
                            
                            }
                        })
                        .then(data => {
                            this.getList(this.params);
                            this_.$message({
                                type: "success",
                                message: "修改完成!"
                            });
                        });
                })
                .catch(() => {});
        },
        toDetail(row) {
            let command = this.activeTab;
            if (command == "limited") {
                this.$router.push({
                    path:
                        "/sales/limited/" +
                        row.promotionId +
                        "/" +
                        row.storeCode
                });
            } else if ((command = "ladder")) {
                this.$router.push({
                    path:
                        "/sales/ladder/" + row.promotionId + "/" + row.storeCode
                });
            }
        },
        handleCommand(command) {
            this.data = {
                type: "1",
                list: [{ time: "" }, { time: "" }],
                times: ["00:00:00", "23:59:59"]
            };
            if (command == "limited") {
                this.isShowLimitedModal = true;
            } else if ((command = "ladder")) {
                this.isShowLadderModal = true;
            }
        },
        addLine() {
            for (let i in this.data.list) {
                if (!this.data.list[i].time) {
                    let index = Number(i) + 1;
                    this.$message({
                        type: "warning",
                        message: "请填写第" + index + "条促销时间后添加"
                    });
                    return;
                }
                if (!this.data.list[i].rate) {
                    let index = Number(i) + 1;
                    this.$message({
                        type: "warning",
                        message: "请第" + index + "条促销折扣率后添加"
                    });
                    return;
                }
            }
            this.data.list.push({
                index: this.data.length + 1,
                time: ""
            });
        },
        saveLimited() {
            if (!this.data.discountName) {
                this.$message({
                    type: "warning",
                    message: "您未输入促销名称"
                });
                return;
            }
            if (this.data.times.length == 0) {
                this.$message({
                    type: "warning",
                    message: "您未选择时间"
                });
                return;
            }
            if (!this.data.storeCode) {
                this.$message({
                    type: "warning",
                    message: "您未选择门店"
                });
                return;
            }
            this.data.username = this.userName;
            this.data.startTime = this.data.times[0];
            this.data.endTime = this.data.times[1];
            this.api({
                url: "/promotion/addTheTimeDiscount",
                method: "post",
                data: this.data
            }).then(data => {
                this.$router.push({
                    path: "limited/" + data + "/" + this.data.storeCode
                });
            });
        },
        saveLadder() {
            if (!this.data.discountName) {
                this.$message({
                    type: "warning",
                    message: "您未输入促销名称"
                });
                return;
            }
            if (!this.data.storeCode) {
                this.$message({
                    type: "warning",
                    message: "您未选择门店"
                });
                return;
            }
            if (!this.data.machineCode) {
                this.$message({
                    type: "warning",
                    message: "您未选择机器"
                });
                return;
            }
            this.data.stratTime = "";
            this.data.discountRate = "";
            for (let i in this.data.list) {
                if (!this.data.list[i].time) {
                    let index = Number(i) + 1;
                    this.$message({
                        type: "warning",
                        message: "第" + index + "条促销时间未填写"
                    });
                    return;
                }
                if (!this.data.list[i].rate) {
                    let index = Number(i) + 1;
                    this.$message({
                        type: "warning",
                        message: "第" + index + "条促销折扣率未填写"
                    });
                    return;
                }
                this.data.stratTime += this.data.list[i].time + ",";
                this.data.discountRate += this.data.list[i].rate + ",";
            }
            this.data.username = this.userName;
            this.api({
                url: "/promotion/addLadderDiscount",
                method: "post",
                data: this.data
            }).then(data => {
                this.$router.push({
                    path: "ladder/" + data + "/" + this.data.storeCode
                });
            });
        }
    },
    computed: {
        ...mapGetters(["userName"])
    }
};
</script>

