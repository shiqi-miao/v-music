
<style>
.append-input .el-input--suffix {
    width: 80px !important;
}
.upload-img {
    width: 100%;
    /* height: 100%; */
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
#log .el-select .el-input {
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
.input-with-date .el-range-separator {
    width: 40px;
    text-align: center;
}
</style>

<template>
    <div class="app-container" id="log">
        <div class="flex-center-Y">
            <el-date-picker class="input-with-date"
                            v-model="params.times"
                            type="daterange"
                            range-separator=" 至 "
                            start-placeholder="开始时间"
                            end-placeholder="结束时间"
                            value-format="yyyy-MM-dd">
            </el-date-picker>
            <el-input placeholder="请输入内容"
                      v-model="searchValue"
                      class="input-with-select"
                      @keyup.enter.native="search"
                      @input="search"
                    onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;">
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
                           @click="search"
                           ></el-button>
            </el-input>&emsp;
        </div>
        <el-table :data="tableData"
                  stripe
                  style="width: 100%"
                  v-loading.body="listLoading"
                  element-loading-text="拼命加载中"
                  row-key="goodsCode">
            <el-table-column prop="operatorUserNickname"
                             label="用户名"
                             style="width: 18%"
                             align="center"></el-table-column>
            <el-table-column prop="operatorUserRolename"
                             label="角色"
                             style="width: 18%"
                             align="center"></el-table-column>
            <!-- <el-table-column prop="loggerType" label="日志类型" style="width: 18%" align="center"></el-table-column> -->
            <el-table-column prop="operatorUserName"
                             label="手机号"
                             style="width: 18%"
                             align="center"></el-table-column>
            <el-table-column prop="gmtMidified"
                             label="操作时间"
                             style="width: 18%"
                             align="center"></el-table-column>
            <el-table-column prop="ipAddres"
                             label="ip地址"
                             style="width: 18%"
                             align="center"></el-table-column>
            <el-table-column prop="operationName"
                             label="操作"
                             style="width: 18%"
                             align="center"></el-table-column>
            <!-- <el-table-column prop="exceptionMsg" label="异常信息" style="width: 18%" align="center"></el-table-column> -->
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
            searchValue: "",
            selectedTab: "operatorUserName",
            selectTabs: [
                {
                    name: "手机号",
                    id: "operatorUserName"
                },
                {
                    name: "日志类型",
                    id: "loggerType"
                },
                {
                    name: "操作",
                    id: "operationName"
                }
            ],
            selectGoodsTabs: [],
            tableData: [],
            params: {
                pageRow: 20,
                pageNum: 1,
                times: []
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
        // this.getTypeList()
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
            if (this.params.times.length > 0) {
                this.params.startTime = this.params.times[0];
                this.params.endTime = this.params.times[1];
            } else {
                this.params.startTime = "";
                this.params.endTime = "";
            }
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
            this.api({
                url: "/system/systemLog",
                method: "post",
                data: params || this.params
            }).then(data => {
                this.listLoading = false;
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
        }
    }
};
</script>

