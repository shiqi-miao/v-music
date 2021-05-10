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
                <el-input placeholder="请输入需要搜索的补货单编号"
                          v-model="selectedTab"
                          clearable
                          style="width: 450px;"
                          class="input-with-select"
                          @keyup.enter.native="search">
                    <template slot="prepend">补货单编号</template>
                    <el-button slot="append"
                               type="primary"
                               icon="el-icon-search"
                               @click="search">搜索</el-button>
                </el-input>
            </el-form-item>
        </el-form>
        <el-table :data="tableData"
                  ref="refTable" 
                  @row-click="clickTable"
                  style="width: 100%"
                  stripe
                  v-loading.body="listLoading"
                  element-loading-text="拼命加载中"
                  @filter-change="filterMethod"
                  @expand-change="expandChange"
                  row-key="repairCode"
                  :expand-row-keys="expands">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-table :data="props.row.repairDetailsList" stripe style="width: 100%" >
                        <el-table-column prop="skuCode" label="SKU编号" style="width: 18%" align="center"></el-table-column>
                        <el-table-column prop="skuName" label="SKU名称" style="width: 18%" align="center"></el-table-column>
                        <el-table-column prop="typeName" label="商品分类" style="width: 18%" align="center"></el-table-column>
                        <el-table-column prop="replentStatus" label="补货状态" style="width: 18%" align="center"></el-table-column>
                        <el-table-column prop="skuPicture"
                                        label="SKU图片"
                                        align="center" :key="Math.random()">
                            <template slot-scope="scope">
                                <img :src="scope.row.skuPicture"
                                    width="40"
                                    height="40"
                                    class="portrait" />
                            </template>
                        </el-table-column>
                        <el-table-column prop="batchCode " label="批次编号" style="width: 18%" align="center"></el-table-column>
                        <el-table-column prop="typeName" label="商品分类" style="width: 18%" align="center"></el-table-column>  
                        <el-table-column label="需补数量" style="width: 18%" align="center">
                            <template slot-scope="scope">
                                    {{scope.row.relentNum || 0}} 件
                            </template> 
                        </el-table-column>
                        <el-table-column label="实补数量" style="width: 18%" align="center">
                            <template slot-scope="scope">
                                    {{scope.row.staticReplentNum  || 0}} 件
                            </template> 
                        </el-table-column>
                        <el-table-column label="实际富余量" style="width: 18%" align="center">
                            <template slot-scope="scope">
                                    {{scope.row.staticMarginNum  || 0}} 件
                            </template> 
                        </el-table-column>
                        <el-table-column label="退仓数量" style="width: 18%" align="center">
                            <template slot-scope="scope">
                                    {{scope.row.drawNum   || 0}} 件
                            </template> 
                        </el-table-column>
                    </el-table>
                </template>
            </el-table-column>
            <el-table-column prop="repairCode"
                             label="补货单编号"></el-table-column>
            <el-table-column prop="storeName"
                             label="补货门店"
                              width="170">
            </el-table-column>
            <el-table-column prop="repairStatus"
                             label="补货状态"
                             :filters="purchaseTypefilters"
                             column-key="repairType"
                             :filter-multiple="false"></el-table-column>
            <el-table-column prop="userName"
                             label="补货人员"></el-table-column>
            <el-table-column label="时间" width="170">
                <template slot-scope="scope">
                    {{scope.row.gmtModifiedOver||scope.row.gmtModified||scope.row.gmtCreated}}
                </template>
            </el-table-column>
            <!-- <el-table-column label="操作"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    <el-button @click="toDetail(scope.row)"
                               type="text"
                               size="small">查看</el-button>
                </template>
            </el-table-column> -->
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
import { mapGetters } from "vuex";
export default {
     computed: {
        ...mapGetters([
            'userId'
        ])
    },
    data() {
        return {
            expands: [],
            listLoading: false,
            totalCount: 0,
            selectedTab: "",
            filterMultiple: false,
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
                { text: "已生成补货单", value: "A" },
                { text: "等待提货", value: "B" },
                { text: "补货完成", value: "C" },
                { text: "退仓完成", value: "D" }
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
    },
    methods: {
        clickTable(row,index,e){//点击行就展开
            //调用,table的方法,展开/折叠 行
            this.$refs.refTable.toggleRowExpansion(row)
        },
        expandChange(row, expandedRows) {
            //每次只能展开一行
            var that = this
            if (expandedRows.length) {
              that.expands = []
              if (row) {
                that.expands.push(row.repairCode)
              }
            } else {
              that.expands = []
            }
            //每次只能展开一行
            
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
        search() {
            if (!this.selectedTab) {
                this.$message({
                    message: "你没有输入搜索条件哦～",
                    type: "warning",
                    duration: 2000
                });
                return;
            }
            this.params.repairCode = this.selectedTab;
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
            this.params.manageId=this.userId
            this.api({
                url: "/ware/wareRepairInfoList",
                method: "get",
                params: params || this.params
            }).then(data => {
                this.tableData = data.list;
                this.totalCount = data.totalCount;
                this.listLoading = false;
            });
        },
        toDetail(row) {
            this.$router.push({
                path:
                    "/stock/replenishmentDetail/" +
                    row.repairCode +
                    "/" +
                    row.repairType
            });
        }
    }
};
</script>

