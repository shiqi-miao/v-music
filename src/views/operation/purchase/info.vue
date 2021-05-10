
<style>
.append-input .el-input--suffix {
    width: 80px !important;
}
.upload-img {
    width: 100%;
    /* height: 100%; */
}
.el-form-item__content{line-height:20px}
.upload-block .el-upload-dragger {
    width: 180px;
    height: 180px;
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
    color: orange;
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
.brandtype {
    margin-right: 10px;
    background: #ffffff;
    color: #888888;
    cursor: pointer;
}
.brandtype.active {
    background: rgba(64, 158, 255, 0.1);
    color: #409eff;
    border: 1px solid rgba(64, 158, 255, 0.2);
}
.blue{
     color:#66b1ff;
     cursor: pointer
}
</style>

<template>
    <div class="app-container">
        <el-table :data="tableData"
                          ref="refTable"
                          @row-click="clickTable"
                          stripe
                          style="width: 100%"
                          v-loading.body="listLoading"
                          element-loading-text="拼命加载中"
                          row-key="purchaseCode"
                          :expand-row-keys="expands"
                          @expand-change="expandChange"
                          @filter-change="filterMethod">
                    <el-table-column type="expand">
                        <template slot-scope="props">
                            <el-table :data="props.row.skuList"
                                      stripe
                                      style="width: 100%"
                                      >
                                <el-table-column label=""
                                                 style="width: 18%"
                                                 align="center">
                                    <template slot-scope="scope">
                                        <span v-if="pStatus=='0'"
                                             @click="del(scope.row)"
                                              class="blue"><i class="el-icon-delete"></i></span>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="skuName"
                                                 label="采购SKU名称"
                                                 style="width: 18%"
                                                 align="center"></el-table-column>
                                <el-table-column prop="purchaseNum"
                                                 label="计划采购数量"
                                                 style="width: 18%"
                                                 align="center"></el-table-column>
                                <el-table-column prop="matePrice"
                                                 label="预算总价"
                                                 style="width: 18%"
                                                 align="center">
                                                 <template slot-scope="scope">
                                                    <span>￥{{scope.row.purchasePrice || 0}}</span>
                                                </template>
                                                 </el-table-column>
                                <el-table-column prop="logisticsCode"
                                                 label="物流单号"
                                                 style="width: 18%"
                                                 align="center"></el-table-column>
                                <el-table-column prop="skuPurchaseStatus"
                                                 label="状态"
                                                 style="width: 18%"
                                                 align="center"></el-table-column>
                                <el-table-column prop="staticPrice" 
                                                 label="实际采购总价"
                                                 style="width: 18%"
                                                 align="center">
                                                <template slot-scope="scope">
                                                    <span>￥{{scope.row.staticPrice || 0}}</span>
                                                </template>   
                                                 </el-table-column>
                                <el-table-column prop="staticNum"
                                                 label="实际入库数量"
                                                 style="width: 18%"
                                                 align="center"></el-table-column>
                                <!-- <el-table-column label="操作"
                                                 style="width: 18%"
                                                 align="center">
                                    <template slot-scope="scope">
                                        <span @click=""
                                              class="blue">编辑</span>
                                    </template>
                                </el-table-column> -->
                            </el-table>
                        </template>
                    </el-table-column>
                    <el-table-column prop="purchaseCode"
                                     label="采购单编号"
                                     style="width: 18%"
                                     align="center"></el-table-column>
                    <!-- <el-table-column prop="goodsCode"
                                     label="采购类型"
                                     style="width: 18%"
                                     align="center"></el-table-column> -->
                    <el-table-column prop="skuNum"
                                     label="SKU采购种类"
                                     style="width: 18%"
                                     align="center"></el-table-column>
                    <el-table-column prop="regisName"
                                     label="采购员"
                                     style="width: 18%"
                                     align="center"></el-table-column>
                    <el-table-column prop="allPurchasePrice"
                                     label="实际采购价格"
                                     style="width: 18%"
                                     align="center">
                                     <template slot-scope="scope">
                                                    <span>￥{{scope.row.allPurchasePrice || 0}}</span>
                                                </template>
                                     </el-table-column>
                    <el-table-column prop="wareName"
                                     label="收货方"
                                     style="width: 18%"
                                     align="center"></el-table-column>
                    <el-table-column prop="purchaseStatus"
                                     label="采购状态"
                                     style="width: 18%"
                                     align="center"
                                     :filters="purchaseOrderfilters"
                                     column-key="pStatus"
                                     :filter-multiple="false">
                                     <template slot-scope="scope">
                                                    <span>{{scope.row.purchaseStatus}}</span><span class="blue" v-if="scope.row.pStatus=='0'" @click="check(scope.row)" >确定采购</span>
                                                </template>
                                     </el-table-column>
                    <el-table-column prop="gmtCreated"
                                     label="采购状态时间"
                                     style="width: 18%"
                                     align="center"></el-table-column>
                    <!-- <el-table-column label="操作"
                                     style="width: 18%"
                                     align="center">
                        <template slot-scope="scope">
                            <span @click=""
                                  class="blue">编辑</span>
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
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            listLoading: false,
            totalCount: 0,
            tableData: [],
            expands: [],
            purchaseOrderfilters:[{ text: "等待确认", value: "A" },{ text: "开始采购", value: "B" },{ text: "采购完成", value: "C" },{ text: "入库完成", value: "D" },{ text: "补货完成", value: "F" }],
            purchasefilters:[{ text: "开始采购", value: "B" },{ text: "采购完成", value: "C" },{ text: "入库完成", value: "D" },{ text: "补货完成", value: "F" },{ text: "无法采购", value: "G"}],
            params: {
                pageRow: 20,
                pageNum: 1
            },
            pStatus:"0"
        };
    },
    computed: {
        ...mapGetters(['userName',"userId"])
    },
    created() {
        this.getList();
    },

    methods: {
        clickTable(row,index,e){//点击行就展开
            //调用,table的方法,展开/折叠 行
            this.$refs.refTable.toggleRowExpansion(row)
        },
        check(row){
            this.$confirm('是否确认采购?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.api({
                        url: "/inventory/checkPurchase",
                        method: "post",
                        data: {purchaseTaskId:row.purchaseTaskId,manageId:this.userId}
                    }).then(data => {
                        this.$message({
                            type: 'success',
                            message: '确认成功!'
                            });
                        this.getList();
                        this.api({
                            url: "/inventory/showAllPurchaseDetails",
                            method: "post",
                            data: {
                                purchaseTaskId:row.purchaseTaskId
                            }
                        }).then(data => {
                            this.$set(row, "skuList", data);
                        });
                    });
                }).catch(() => {
                         
                });
        },
        del(row){
            this.$confirm('是否确认删除?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.api({
                        url: "/inventory/deletePurchaseDetails ",
                        method: "post",
                        data: {purchaseId:row.purchaseId,purchaseTaskId:row.purchaseTaskId}
                    }).then(data => {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                            });
                        this.getList();
                        this.api({
                            url: "/inventory/showAllPurchaseDetails",
                            method: "post",
                            data: {
                                purchaseTaskId:row.purchaseTaskId
                            }
                        }).then(data => {
                            this.$set(row, "skuList", data);
                        });
                    });
                }).catch(() => {
                         
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
        getList(params) {
            this.listLoading = true;
            this.params.username=this.userName
            this.api({
                url: "/inventory/showAllPurchase",
                method: "post",
                data: params || this.params
            }).then(data => {
                this.listLoading = false;
                for (let i in data.list) {
                    data.list[i].skuList = [];
                }
                this.tableData = data.list;
                this.totalCount = data.totalCount;
            });
        },
        filterMethod(filters) {
            //商品分类 采购状态 删选
            for (let i in filters) {
                this.params[i] = filters[i][0];
            }
            console.log(filters);
            this.getList(this.params);
        },
        expandChange(row, expandedRows) {//点击展开获取相应的展开内容
        // console.log(row)
        this.pStatus=row.pStatus
        //每次只能展开一行
            var that = this
            if (expandedRows.length) {
              that.expands = []
              if (row) {
                that.expands.push(row.purchaseCode)
              }
            } else {
              that.expands = []
            }
            //每次只能展开一行
            this.api({
                url: "/inventory/showAllPurchaseDetails",
                method: "post",
                data: {
                    purchaseTaskId: row.purchaseTaskId
                }
            }).then(data => {
                this.$set(row, "skuList", data);
            });
        },
        
    }
};
</script>

