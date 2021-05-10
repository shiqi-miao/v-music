
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
                          row-key="purchaseTaskId"
                          :expand-row-keys="expands"
                          @expand-change="expandChange">
                    <el-table-column type="expand">
                        <template slot-scope="props">
                            <el-table :data="props.row.skuList"
                                      stripe
                                      style="width: 100%">
                                <el-table-column prop="skuName"
                                                 label="入库SKU名称"
                                                 style="width: 18%"
                                                 align="center"></el-table-column>
                                <el-table-column prop="batchCode"
                                                 label="入库SKU批次&数量"
                                                 style="width: 18%"
                                                 align="center">
                                                 <template slot-scope="scope">
                                                    <span>{{scope.row.batchCode}}，{{scope.row.staticNum}}</span>
                                                </template>
                                                 </el-table-column>
                                <el-table-column prop="allStaticNum"
                                                 label="入库SKU总量"
                                                 style="width: 18%"
                                                 align="center"></el-table-column>
                                <el-table-column prop="staticPrice"
                                                 label="入库SKU货值"
                                                 style="width: 18%"
                                                 align="center">
                                                 <template slot-scope="scope">
                                                    <span>￥{{scope.row.staticPrice || 0}}</span>
                                                </template>
                                                 </el-table-column>
                                <el-table-column prop="gmtInWare"
                                                 label="SKU入库时间"
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
                    <el-table-column prop="wareCode"
                                     label="入库单编号"
                                     style="width: 18%"
                                     align="center"></el-table-column>
                    <el-table-column prop="skuNum"
                                     label="入库SKU数量"
                                     style="width: 18%"
                                     align="center"></el-table-column>
                    <el-table-column prop="wareName"
                                     label="收货方"
                                     style="width: 18%"
                                     align="center"></el-table-column>
                    <el-table-column prop="allWarePrice"
                                     label="入库货值"
                                     style="width: 18%"
                                     align="center">
                                     <template slot-scope="scope">
                                        <span>￥{{scope.row.allWarePrice || 0}}</span>
                                    </template>
                                     </el-table-column>
                    <el-table-column prop="regisName"
                                     label="采购员"
                                     style="width: 18%"
                                     align="center"></el-table-column>
                    <el-table-column prop="gmtCreated"
                                     label="入库完成时间"
                                     style="width: 18%"
                                     align="center"></el-table-column>
                    <!-- <el-table-column label="操作"
                                     style="width: 18%"
                                     align="center">
                        <template slot-scope="scope">
                            <span @click=""
                                  class="blue">下载</span>
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
                url: "/inventory/showAllWareIn",
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
        expandChange(row, expandedRows) {//点击展开获取相应的展开内容
        //每次只能展开一行
            var that = this
            if (expandedRows.length) {
              that.expands = []
              if (row) {
                that.expands.push(row.purchaseTaskId)
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

