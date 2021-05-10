
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

.download-box {
    text-align: center;
}
.syCode {
    display: inline-block;
    margin: 6px auto;
    width: 80px !important;
    height: 80px;
}
</style>

<template>
    <div class="app-container">
        <!-- <el-button icon="el-icon-plus" type="primary" @click="showCreateGoods">创建角色</el-button> -->
        <el-table :data="tableData"
                  stripe
                  style="width: 100%"
                  v-loading.body="listLoading"
                  element-loading-text="拼命加载中"
                  row-key="goodsCode">
            <el-table-column label="序号"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    {{scope.row.index}}
                </template>
            </el-table-column>
            <el-table-column prop="roleName"
                             label="角色"
                             style="width: 18%"
                             align="center"></el-table-column>
            <el-table-column prop="roleDetails"
                             label="角色描述"
                             style="width: 18%"
                             align="center"></el-table-column>
            <!-- <el-table-column prop="gmtCreated" label="创建时间" style="width: 18%" align="center"></el-table-column> -->
            <el-table-column label="成员列表"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    <span v-for="(item,i) in scope.row.users"
                          :key="i">
                        {{item.nickname}} &emsp;
                    </span>
                </template>
            </el-table-column>
            <el-table-column label="操作"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    <span @click="showEditRole(scope.row)"
                          class="blue">查看权限</span>
                    <!-- <span @click="showCreateGoods(scope.row)" class="blue">复制</span> -->
                    <!-- <span @click="removeRole(scope.row)" class="blue" v-if="scope.row.users.length==0">删除</span>
                    <span v-else>删除</span> -->
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
                <el-form-item label=" 复制角色:"
                              v-if="goodsData.roleId">
                    {{goodsData.copyName}}
                </el-form-item>
                <br>
                <el-form-item label="角色名称"
                              required>
                    <el-input type="text"
                              v-model="goodsData.roleName"></el-input>
                </el-form-item>
                <br>
                <el-form-item label="角色描述">
                    <el-input type="text"
                              v-model="goodsData.roleDetails"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer"
                  class="dialog-footer">
                <el-button @click="createGoodsDialogVisible = false">取 消</el-button>
                <el-button type="primary"
                           @click="editGoods"
                           v-if="goodsData.roleId">确 定</el-button>
                <el-button type="primary"
                           @click="createGoods"
                           v-else>保 存</el-button>
            </span>
        </el-dialog>
        <el-dialog title="详情"
                   :visible.sync="editRoleDialogVisible"
                   width="80%">
            <div>
                <b>角色名称：</b>{{roleData.roleName}} &emsp;
                <b>角色描述：</b>{{roleData.roleDetails}}
            </div>
            <el-table :data="authData"
                      stripe
                      style="width: 100%"
                      max-height="500"
                      v-loading.body="listLoading"
                      element-loading-text="拼命加载中"
                      row-key="goodsCode">
                <el-table-column label="模块"
                                 style="width: 18%"
                                 align="center">
                    <template slot-scope="scope">
                        <el-checkbox v-model="scope.row.checkedAll"
                                     disabled
                                     @change="handleCheckAllChange(scope.row.checkedAll,scope.row.index)">
                            {{scope.row.menuName}}
                        </el-checkbox>
                    </template>
                </el-table-column>
                <el-table-column label="功能"
                                 style="width: 18%"
                                 align="center">
                    <template slot-scope="scope">
                        <el-checkbox-group v-model="scope.row.checked"
                                           disabled>
                            <el-checkbox v-for="auth in scope.row.auths"
                                         @change="handleCheckChange(scope.row.checked,scope.row.index,auth)"
                                         :label="auth"
                                         :key="auth.id">{{auth}}</el-checkbox>
                        </el-checkbox-group>
                    </template>
                </el-table-column>
            </el-table>
            <!-- <span slot="footer" class="dialog-footer">
                <el-button @click="editRoleDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="editRole">保 存</el-button>
            </span> -->
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
            editRoleDialogVisible: false,
            goodsData: {},
            skuData: {},
            file: {},
            dialogTitle: "",
            expands: [],
            reqLoading: false,
            phoneType: 0,
            authData: [
                {
                    index: 0,
                    checkedAll: false,
                    checked: [],
                    auths: ["上海", "北京", "广州", "深圳"]
                },
                {
                    index: 1,
                    checkedAll: false,
                    checked: [],
                    auths: ["上海", "北京", "广州", "深圳"]
                }
            ],
            roleData: {}
        };
    },
    created() {
        this.getList();
        this.getTypeList();
    },
    computed: {
        ...mapGetters(["roleId", "userId"])
    },
    methods: {
        handleCheckAllChange(val, index) {
            this.authData[index].checked = val
                ? this.authData[index].auths
                : [];
        },
        handleCheckChange(val, index, e) {
            let isCancel = val.indexOf(e) < 0 ? true : false;
            if (!isCancel) {
                var hasLow = false;
                for (let i in val) {
                    if (this.getrequiredPerm(val[i], index) == 1) {
                        return;
                    } else if (this.getrequiredPerm(val[i], index) == 2) {
                        hasLow = true;
                    }
                }
                if (hasLow) {
                    this.checkTop(index);
                }
            } else {
                if (this.getrequiredPerm(e, index) == 1) {
                    this.$set(this.authData[index], "checked", []);
                }
            }
        },
        getrequiredPerm(name, index) {
            for (let i in this.authData[index].fullAuth) {
                if (this.authData[index].fullAuth[i].permissionName == name) {
                    return this.authData[index].fullAuth[i].requiredPerm;
                }
            }
        },
        checkTop(index) {
            for (let j in this.authData[index].fullAuth) {
                let TopType = [];
                if (this.authData[index].fullAuth[j].requiredPerm == 1) {
                    TopType.push(
                        this.authData[index].fullAuth[j].permissionName
                    );
                }
                this.authData[index].checked = this.authData[
                    index
                ].checked.concat(TopType);
                this.$set(
                    this.authData[index],
                    "checked",
                    this.authData[index].checked
                );
            }
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
        createGoods() {
            if (!this.goodsData.roleName) {
                this.$message({
                    type: "warning",
                    message: "您未填写角色名称"
                });
                return;
            }
            this.goodsData.manageId = this.userId;
            this.api({
                url: "/user/addRole",
                method: "post",
                data: this.goodsData
            }).then(data => {
                this.$message({
                    type: "success",
                    message: "创建角色成功"
                });
                this.getList(this.params);
                this.createGoodsDialogVisible = false;
            });
        },
        editGoods() {
            if (!this.goodsData.roleName) {
                this.$message({
                    type: "warning",
                    message: "您未填写角色名称"
                });
                return;
            }
            this.api({
                url: "/user/copyRole",
                method: "post",
                data: {
                    oldRoleId: this.goodsData.roleId,
                    roleName: this.goodsData.roleName,
                    roleDetails: this.goodsData.roleDetails,
                    manageId: this.userId
                }
            }).then(data => {
                this.$message({
                    type: "success",
                    message: "复制成功"
                });
                this.getList(this.params);
                this.createGoodsDialogVisible = false;
            });
        },
        showCreateGoods(row) {
            if (row.roleId) {
                this.dialogTitle = "复制角色";
                row.copyName = row.roleName;
                this.goodsData = row;
                this.phoneType = 1;
            } else {
                this.dialogTitle = "创建角色";
                this.phoneType = 0;
                this.goodsData = {
                    username: "",
                    nickname: "",
                    roleId: ""
                };
            }

            this.createGoodsDialogVisible = true;
        },
        showEditRole(row) {
            this.roleData = row;
            this.api({
                url: "/user/listAllPermissionByRole",
                method: "post",
                data: {
                    // roleId:row.roleId
                }
            }).then(data => {
                let list = data;
                var array = [];
                for (let i in list) {
                    let permissions = [];
                    for (let j in list[i].permissions) {
                        let perm = list[i].permissions[j].permissionName;
                        permissions.push(perm);
                    }
                    let item = {
                        index: i,
                        checkedAll: false,
                        checked: [],
                        auths: permissions,
                        fullAuth: list[i].permissions,
                        menuName: list[i].menuName,
                        menuCode: list[i].menuCode
                    };
                    array.push(item);
                }
                this.api({
                    url: "/user/listAllPermission",
                    method: "post",
                    data: {
                        roleId: row.roleId
                    }
                }).then(data => {
                    for (let i in array) {
                        var baseItem = array[i];
                        for (let j in data.list) {
                            var itItem = data.list[j];
                            if (itItem.menuCode == baseItem.menuCode) {
                                let permissions = [];
                                for (let m in itItem.permissions) {
                                    let perm =
                                        itItem.permissions[m].permissionName;
                                    permissions.push(perm);
                                }
                                baseItem.checked = permissions;
                            } else {
                                // if(i == 10){
                                console.log(itItem.menuName, baseItem.menuName);
                                // }
                            }
                        }
                    }
                    this.authData = array;
                    console.log(this.authData);
                });
            });
            this.editRoleDialogVisible = true;
        },
        editRole() {
            let index = this.roleData.index - 1;
            let permissions = [];
            for (let i in this.authData) {
                for (let j in this.authData[i].checked) {
                    let name = this.authData[i].checked[j];
                    for (let m in this.authData[i].fullAuth) {
                        if (
                            this.authData[i].fullAuth[m].permissionName == name
                        ) {
                            permissions.push(
                                this.authData[i].fullAuth[m].permissionId
                            );
                        }
                    }
                }
            }
            this.api({
                url: "/user/updateRole",
                method: "post",
                data: {
                    roleId: this.roleData.roleId,
                    manageId: this.userId,
                    permissions: permissions
                }
            }).then(data => {
                this.$message({
                    type: "success",
                    message: "编辑成功"
                });
                this.getList(this.params);
                this.editRoleDialogVisible = false;
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
            data.roleId = this.roleId;
            data.manageId = this.userId;
            this.api({
                url: "/user/listRole",
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
                url: "/user/getAllRoles",
                method: "get"
            })
                .then(data => {
                    this.selectGoodsTabs = data.list;
                })
                .catch(e => {});
        },
        removeRole(row) {
            this.$confirm("是否确认删除该角色？", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    this.api({
                        url: "/user/deleteRole",
                        method: "post",
                        data: {
                            roleId: row.roleId,
                            manageId: this.userId
                        }
                    }).then(data => {
                        this.$message({
                            type: "success",
                            message: "删除成功!"
                        });
                        this.getList(this.params);
                    });
                })
                .catch(() => {});
        }
    }
};
</script>

