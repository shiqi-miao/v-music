<style>
.blue {
    color: #66b1ff;
    cursor: pointer;
    padding: 10px 20px;
}
.grey {
    padding: 10px 20px;
    color: #999999;
}
.input-with-select {
    width: 50%;
}
/* .el-select .el-input {
    width: 120px;
} */
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
.stock-num {
    padding: 10px;
    cursor: pointer;
}
.msg {
    padding: 0 6vw;
}
</style>

<template>
    <div class="app-container">
        <el-button icon="el-icon-plus"
                   type="primary"
                   @click="show">添加商品分类</el-button>
        <!-- <el-input placeholder="请输入内容" v-model="searchValue" class="input-with-select">
            <el-select v-model="selectedTab" placeholder="请选择" slot="prepend">
                <el-option v-for="item in selectTabs" :key="item.id" :label="item.name" :value="item.id">
                </el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        </el-input> -->
        <el-table :data="tableData"
                  stripe
                  style="width: 100%"
                  v-loading.body="listLoading"
                  element-loading-text="拼命加载中">
            <el-table-column prop="index"
                             label="序号"
                             style="width: 18%"
                             align="center"></el-table-column>
            <el-table-column prop="typeName"
                             label="分类名称"
                             style="width: 18%"
                             align="center"></el-table-column>
            <el-table-column prop="goodsNum"
                             label="商品数量"
                             style="width: 18%"
                             align="center"></el-table-column>
            <el-table-column prop="gmtCreated"
                             label="创建时间"
                             style="width: 18%"
                             align="center"></el-table-column>
            <el-table-column prop="appPicture"
                             label="操作"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    <span @click="show(scope.row)"
                          class="blue">编辑</span>
                    <span v-if="scope.row.goodsNum==0"
                          @click="remove(scope.row)"
                          class="blue">删除</span>
                    <span v-else
                          class="grey">删除</span>
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
        <el-dialog :title="title"
                   :visible.sync="setAlertDialogVisible"
                   width="40%">
            <el-form class="small-space demo-form-inline"
                     label-position="left"
                     label-width="80px"
                     :inline="true">
                <el-form-item label="分类名称"
                              required>
                    <el-input type="text"
                              v-model="typeName"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer"
                 class="dialog-footer">
                <div style="text-align:right">
                    <el-button @click="setAlertDialogVisible = false">取 消</el-button>
                    <el-button type="primary"
                               @click="confirmAlert"
                               v-if="dialogType==1">保 存</el-button>
                    <el-button type="primary"
                               @click="edit"
                               v-if="dialogType==2">编 辑</el-button>
                </div>
            </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
            listLoading: false,
            totalCount: 0,
            tableData: [],
            params: {
                pageNum: 1, //页码
                pageRow: 20 //每页条数
            },
            setAlertDialogVisible: false,
            typeName: "",
            typeId: "",
            title: "",
            dialogType: ""
        };
    },
    created() {
        this.getList();
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
        confirmAlert() {
            if (!this.typeName || this.typeName.length > 8) {
                this.$message({
                    type: "warning",
                    message: "请输入少于8字的分类名称"
                });
                return;
            }
            if (!this.isHasName()) {
                this.$message({
                    type: "warning",
                    message: "该分类名称已存在"
                });
                return;
            }
            this.api({
                url: "/goods/goodstypeadd",
                method: "post",
                data: {
                    typeName: this.typeName
                }
            }).then(data => {
                this.$message({
                    type: "success",
                    message: "添加成功"
                });
                this.getList(this.params);
                this.setAlertDialogVisible = false;
            });
        },
        isHasName() {
            for (let i in this.tableData) {
                if (this.tableData[i].typeName == this.typeName) {
                    return false;
                }
            }
            return true;
        },
        edit() {
            if (!this.typeName || this.typeName.length > 8) {
                this.$message({
                    type: "warning",
                    message: "请输入少于8字的分类名称"
                });
                return;
            }
            if (!this.isHasName()) {
                this.$message({
                    type: "warning",
                    message: "该分类名称已存在"
                });
                return;
            }
            if (!this.typeId) {
                this.$message({
                    type: "warning",
                    message: "缺少typeId"
                });
                return;
            }
            this.api({
                url: "/goods/goodstypeupdate",
                method: "post",
                data: {
                    typeId: this.typeId,
                    typeName: this.typeName
                }
            }).then(data => {
                this.$message({
                    type: "success",
                    message: "修改成功"
                });
                this.getList(this.params);
                this.setAlertDialogVisible = false;
            });
        },
        show(scope) {
            if (scope.typeId && scope.typeName) {
                this.title = "编辑商品分类";
                this.dialogType = 2;
                this.typeId = scope.typeId;
                this.typeName = scope.typeName;
            } else {
                this.title = "添加商品分类";
                this.dialogType = 1;
                this.typeName = "";
            }
            this.setAlertDialogVisible = true;
        },
        getList(params) {
            this.listLoading = true;
            this.api({
                url: "/goods/goodstypelist",
                method: "get",
                params: params || this.params
            }).then(data => {
                this.listLoading = false;
                let lists = data.list;
                for (let i in lists) {
                    lists[i].index = Number(i) + 1;
                }
                this.tableData = lists;
                this.totalCount = data.totalCount;
            });
        },
        remove(row) {
            this.$confirm("确定删除该分类?", "提示", {
                confirmButtonText: "确定",
                showCancelButton: false,
                type: "warning"
            }).then(() => {
                this.api({
                    url: "/goods/goodsTypeDel",
                    method: "post",
                    data: {
                        typeId: row.typeId
                    }
                }).then(data => {
                    this.$message({
                        type: "success",
                        message: "删除成功"
                    });
                    this.getList(this.params);
                });
            });
        }
    }
};
</script>

