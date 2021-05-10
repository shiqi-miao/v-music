<style>
.cell {
    text-align: center;
}
.pagination-line {
    text-align: right;
    margin: 20px 0;
}
</style>

<template>
    <div class="app-container">
        <el-form>
            <el-form-item>
                <el-input placeholder="请输入需要搜索的采购单编号"
                          v-model="selectedTab"
                          clearable
                          style="width: 450px;"
                          class="input-with-select"
                          @keyup.enter.native="search">
                    <template slot="prepend">采购单编号</template>
                    <el-button slot="append"
                               type="primary"
                               icon="el-icon-search"
                               @click="search">搜索</el-button>
                </el-input>
            </el-form-item>
        </el-form>
        <el-table :data="tableData"
                  style="width: 100%;height:70vh"
                  stripe
                  v-loading.body="listLoading"
                  element-loading-text="拼命加载中"
                  @filter-change="filterMethod">
            <el-table-column prop="purchaseCode"
                             label="采购单编号"></el-table-column>
            <!-- <el-table-column prop="typeName" label="采购SKU分类"
                :filters="typeFilters" column-key="goodsType" :filter-multiple="false"></el-table-column> -->
            <el-table-column prop="skuCount"
                             label="采购SKU数量"></el-table-column>
            <el-table-column prop="lastTime"
                             label="最晚到货日期"></el-table-column>
            <el-table-column prop="purchaseTypeName"
                             label="采购状态"
                             :filters="purchaseTypefilters"
                             column-key="purchaseType"
                             :filter-multiple="false"></el-table-column>
            <el-table-column prop="userName"
                             label="采购人员">
                <template slot-scope="scope">
                    <span v-if="scope.row.purchaseTypeName!=='等待采购'">{{scope.row.userName}}</span>
                </template></el-table-column>
            <el-table-column label="时间">
                <template slot-scope="scope">
                    {{scope.row.gmtModifiedE||scope.row.gmtModifiedD||scope.row.gmtModifiedC||scope.row.gmtModifiedB||scope.row.gmtCreated}}
                </template>
            </el-table-column>
            <el-table-column label="操作"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    <el-button @click="toDetail(scope.row)"
                               type="text"
                               size="small">查看</el-button>
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
    </div>
</template>
<script>
export default {
    data() {
        return {
            listLoading: false,
            totalCount: 0,
            selectedTab: "",
            selectTabs: [
                {
                    name: "SKU编号",
                    id: 1
                },
                {
                    name: "SKU名称",
                    id: 2
                }
            ],
            typeFilters: [],
            purchaseTypefilters: [
                { text: "等待采购", value: "B" },
                { text: "正在采购", value: "C" },
                { text: "采购完成", value: "D" },
                { text: "入库完成", value: "E" },
                { text: "仓库驳回", value: "F" },
                { text: "采购超时", value: "G" }
            ],
            tableData: [
                {
                    number: "test"
                }
            ],
            purchaseTypeName: "",
            params: {
                pageRow: 20,
                pageNum: 1
            }
        };
    },
    created() {
        this.getList(); //获取表格数据
        this.getSkuTypeList(); //获取采购sku分类
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
        search() {
            if (!this.selectedTab) {
                this.$message({
                    message: "你没有输入搜索条件哦～",
                    type: "warning",
                    duration: 2000
                });
                return;
            }
            this.params.purchaseCode = this.selectedTab;
            this.getList(this.params);
        },
        filterMethod(filters) {
            //商品分类 采购状态 删选
            for (let i in filters) {
                this.params[i] = filters[i][0];
            }
            console.log(filters);
            this.getList(this.params);
        },
        getList(params) {
            this.listLoading = true;
            this.api({
                url: "/ware/warePurchaseList",
                method: "get",
                params: params || this.params
            }).then(data => {
                console.log(data.list)
                this.tableData = data.list;
                this.totalCount = data.totalCount;
                this.listLoading = false;
            });
        },
        getSkuTypeList() {
            this.api({
                url: "/ware/skuTypeList",
                method: "get",
                params: {}
            }).then(data => {
                let lists = [];
                for (let i in data) {
                    let item = {
                        text: data[i].typeName,
                        value: data[i].goodsType
                    };
                    lists.push(item);
                }
                this.typeFilters = lists;
            });
        },
        toDetail(row) {
            this.$router.push({
                path:
                    "/stock/purchaseDetail/" +
                    row.purchaseCode +
                    "/" +
                    row.purchaseType
            });
        }
    }
};
</script>

