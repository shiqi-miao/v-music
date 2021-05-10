
<style>
.append-input .el-input--suffix {
    width: 80px !important;
}
.upload-img {
    width: 100%;
    /* height: 100%; */
}
.flex-center {
    width: 100%;
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
    margin: 20px 4vw;
}
.msg-left {
    margin: 10px 4vw;
}
.center {
    text-align: center;
}
.right {
    text-align: right;
}
.col-input.el-input {
    width: 10vw;
}
.col-select .el-input {
    width: 10vw;
}
</style>

<template>
    <div>
        <el-card shadow="always"
                 class="msg">
            <el-row :gutter="12">
                <el-col :span="12">
                    <span class="name">机器编号：</span>
                    {{info.machineCode}}
                </el-col>
                <el-col :span="12">
                    <span class="name">机器类型：</span>
                    {{info.typeName}}
                </el-col>
            </el-row>
            <el-row :gutter="12">
                <el-col :span="12">
                    <span class="name">机器名称：</span>
                    <el-input type="text"
                              v-model="info.machineName"
                              class="col-input"></el-input>
                </el-col>
                <el-col :span="12">
                    <span class="name">货道类型：</span>
                    {{info.trailsType}}
                </el-col>
            </el-row>
            <el-row :gutter="12">
                <el-col :span="12">
                    <span class="name">机器状态：</span>
                    {{info.machineStatus}}
                </el-col>
                <el-col :span="12">
                    <span class="name">所属门店：</span>
                    <el-select v-model="info.storeCode"
                               placeholder="请选择分类"
                               class="col-select">
                        <el-option v-for="item in selectGoodsTabs"
                                   :key="item.storeCode"
                                   :label="item.storeName"
                                   :value="item.storeCode">
                        </el-option>
                    </el-select>
                </el-col>
            </el-row>
            <el-row :gutter="12">
                <el-col :span="12">
                    <span class="name">激活时间：</span>
                    {{info.gmtActivated}}
                </el-col>
            </el-row>
        </el-card>
        <br>
        <div class="right msg-left">
            <el-button type="success"
                       round
                       @click="onMachine()">远程重启</el-button>
            <el-button type="danger"
                       round
                       @click="offMachine()">远程关机</el-button>
            <el-button type="danger"
                       round
                       @click="unbind()">解除绑定</el-button>
        </div>
        <div class="center">
            <el-button type="primary"
                       round
                       @click="submit()">保 存</el-button>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            id: this.$route.params.id,
            info: {},
            selectGoodsTabs: []
        };
    },
    created() {
        this.getData();
        this.getTypeList();
    },

    methods: {
        onMachine() {
            this.$message.error("暂未开放");
        },
        offMachine() {
            this.$message.error("暂未开放");
        },
        getTypeList() {
            this.api({
                url: "/operator/showAllStore",
                method: "post",
                data: { username: this.userName }
            })
                .then(data => {
                    this.selectGoodsTabs = data;
                })
                .catch(e => {});
        },
        unbind() {
            this.$confirm("确定解除绑定该机器?", "提示", {
                confirmButtonText: "确定",
                showCancelButton: false,
                type: "warning"
            }).then(() => {
                this.api({
                    url: "/operator/doDownForVendByOperator",
                    method: "post",
                    data: {
                        id: this.id
                    }
                }).then(data => {
                    this.$message({
                        type: "success",
                        message: "解除绑定成功"
                    });
                    this.$router.push({ path: "/system/vendConfig" });
                });
            });
        },
        submit() {
            if (!this.info.machineName) {
                this.$message({
                    type: "warning",
                    message: "机器名称不能为空"
                });
                return;
            }
            this.api({
                url: "/operator/updateVendInfoName",
                method: "post",
                data: {
                    machineName: this.info.machineName,
                    storeCode: this.info.storeCode,
                    id: this.info.id
                }
            }).then(data => {
                this.$message({
                    type: "success",
                    message: "保存成功"
                });
                this.$router.push({ path: "/system/vendConfig" });
            });
        },
        getData(params) {
            this.api({
                url: "/operator/showOneVend",
                method: "post",
                data: {
                    username: this.userName,
                    id: this.id
                }
            }).then(data => {
                this.info = data;
            });
        }
    },
    computed: {
        ...mapGetters(["userId", "userName"])
    }
};
</script>

