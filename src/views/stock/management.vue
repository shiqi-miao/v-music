<style>
.input-with-select {
    width: 50%;
}
/* .el-select .el-input {
    width: 120px;
} */
</style>

<template>
    <div class="app-container">
        <el-form>
            <el-form-item>
                <el-input placeholder="请输入内容"
                          v-model="searchValue"
                          class="input-with-select"
                          @keyup.enter.native="search">
                    <template slot="prepend">出入库编号</template>
                    <el-button slot="append"
                               icon="el-icon-search"
                               @click="search"></el-button>
                </el-input>
                <el-dropdown @command="handleCommand">
                    <el-button type="primary">办理出入库<i class="el-icon-arrow-down el-icon--right"></i></el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item v-for="(item,i) in outInItems"
                                          :key="i"
                                          :command="item.href">{{item.value}}</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-form-item>
        </el-form>
        <el-table :data="tableData"
                  style="width: 100%"
                  v-loading.body="listLoading"
                  element-loading-text="拼命加载中">
            <el-table-column prop="optionType"
                             label="出入库类型"
                             align="center"></el-table-column>
            <el-table-column prop="optionCode"
                             label="出入库编号"
                             align="center"></el-table-column>
            <el-table-column prop="gmtCreated"
                             label="出入库时间"
                             align="center"></el-table-column>
            <el-table-column prop="priceSum"
                             label="出入库价值"
                             align="center">
                <template slot-scope="scope">
                    ¥ {{scope.row.priceSum||'0.00'}}
                </template>
            </el-table-column>
            <el-table-column prop="manageName"
                             label="仓库管理员"
                             align="center"></el-table-column>
            <el-table-column label="操作"
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
            searchValue: "",
            selectedTab: "",
            totalCount:0,
            outInItems: [
                {
                    value: "+办理入库",
                    href: "in"
                },
                // {
                //     value:"+办理出库",
                //     href:"out"
                // },
                {
                    value: "+办理销毁",
                    href: "reIn"
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
            }
        };
    },
    created() {
        this.getList(); //获取表格数据
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
            this.params.optionCode = this.searchValue;
            this.getList(this.params);
        },
        getList(params) {
            this.listLoading = true;
            this.api({
                url: "/ware/warehouseList",
                method: "get",
                params: params || {}
            }).then(data => {
                this.listLoading = false;
                this.tableData = data.list;
                this.totalCount = data.totalCount;
            });
        },
        toDetail(row) {
            this.$router.push({
                path:
                    "/stock/managementDetail/" +
                    row.optionCode +
                    "/" +
                    row.opType
            });
        },
        handleCommand(command) {
            this.$router.push({ path: command });
        }
    }
};
</script>

