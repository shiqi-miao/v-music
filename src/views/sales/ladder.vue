<style scoped>
.danger {
    color: #f56c6c;
}
.dialog-form-item .el-input__inner {
    width: 160px;
}
.right {
    padding: 14px 0;
    text-align: right;
}
.center {
    padding: 14px 0;
    text-align: center;
}
.content {
    font-size: 15px;
    line-height: 24px;
}
.title {
    font-size: 18px;
    font-weight: 600;
    padding: 30px 0;
    text-align: center;
}
.machines {
    margin-top: 20px;
}
.machine {
    /* border:1px solid #f1f1f1; */
    border-radius: 20px;
    width: 100%;
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
.rowrow {
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    align-content: flex-start;
    padding: 0 4vw;
}
.item {
    padding: 8px;
    font-size: 14px;
    flex: 0 50%;
    font-weight: 500;
}
.item .index {
    width: 60px;
    text-align: center;
}
.m-ll {
    margin-left: 4px;
    line-height: 20px;
}
.m-ll-btn {
    margin-left: 4px;
}
.name-w {
    width: 4vw;
}
.profit-w {
    width: 80px;
}
.jt-left {
    flex: 1;
    margin-right: 20px;
}
.jt-right {
    flex: 2;
}
.jt-box {
    height: 54vh;
    overflow-y: scroll;
}
.blod {
    font-weight: 600;
}
.jt {
    width: 100%;
    height: 40px;
    text-align: center;
    font-size: 14px;
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
.modal-title {
    font-weight: 600;
    font-size: 15px;
    padding-bottom: 16px;
}
.blue {
    color: #66b1ff;
    cursor: pointer;
    padding: 10px 6px;
}
.limit {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    -webkit-text-overflow: ellipsis;
}
</style>
<style>
.jt-rate .el-input {
    width: 120px;
}
.machines .el-carousel__container {
    height: 80vh;
}
.btn-group-input .el-input__inner {
    width: 72px;
    border-radius: 0 20px 20px 0;
}
</style>

<template>
    <div class="app-container">
        <div class="right">
            <el-button round
                       type="danger"
                       plain
                       @click="remove()">删除促销计划</el-button>
        </div>
        <div class="flex-center">
            <div class="jt-left">
                <el-card class="content">
                    <div><b>促销名称：</b>{{info.discountName}}</div>
                    <div><b>门店：</b>{{info.storeName}}</div>
                    <div><b>机器：</b>{{info.machineName}}</div>
                </el-card>
                <br>
                <el-card>
                    <div class="modal-title"> 配置阶梯促销参数 &emsp;循环模式：每天</div>
                    <div class="flex-center jt blod">
                        <div class="jt-index">序号</div>
                        <div class="jt-time">时间</div>
                        <div class="jt-rate">折扣率</div>
                    </div>
                    <br>
                    <div class="jt-box">
                        <div v-for="(item,i) in lists"
                             :key="i"
                             class="flex-center jt">
                            <div class="jt-index">{{Number(i)+1}}</div>
                            <div class="jt-time">
                                {{item.startTime}}
                            </div>
                            <div class="jt-rate flex-center">
                                {{item.discountRate/10}}折
                            </div>
                        </div>
                    </div>
                </el-card>
            </div>
            <div class="jt-right">
                <el-card>
                    <div class="machines">
                        <el-carousel arrow="always"
                                     :interval="0"
                                     @change="changeStore"
                                     indicator-position="none">
                            <el-carousel-item v-for="(item,i) in machines"
                                              :key="i"
                                              class="machine">
                                <div>
                                    <div class="title">{{info.machineName}} - S/N: {{info.machineCode}} </div>
                                    <div class="rowrow">
                                        <div v-for="(obj,j) in item.list"
                                             :key="j"
                                             class="flex-center item">
                                            <div class="flex-center">
                                                <img :src="obj.appPicture"
                                                     width="40"
                                                     height="40"
                                                     class="portrait" />
                                                <div class="m-ll">
                                                    <div class="limit name-w">{{obj.skuName}}</div>
                                                    <div>¥ {{obj.salePrice}}</div>
                                                </div>
                                                <div class="m-ll ">
                                                    <div :class="{danger:obj.profit<=0}">{{obj.time}}后</div>
                                                    <div :class="{danger:obj.profit<=0}"
                                                         class="profit-w limit">利润率{{obj.profit*100}}%</div>
                                                </div>
                                                <el-button class="m-ll m-ll-btn"
                                                           v-if="obj.flag==1"
                                                           @click="cancel(obj)"
                                                           size="small">取消参加</el-button>
                                                <el-button type="primary"
                                                           class="m-ll m-ll-btn"
                                                           v-else
                                                           @click="join(obj)"
                                                           size="small">立即参加</el-button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </el-card>
            </div>
        </div>
        <div class="center">
            <el-button round
                       @click="$router.go(-1)">返回</el-button>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            info: {},
            machines: [],
            lists: [],
            index: ""
        };
    },
    created() {
        this.getData();
    },
    methods: {
        changeStore(index) {
            // console.log("index:", index);
            if (index) {
                var promotionId = this.machines[index].promotionId;
                this.index = index;
                this.api({
                    url: "/promotion/showLadderDiscount",
                    method: "post",
                    data: {
                        promotionId: promotionId || "",
                        username: this.userName
                    }
                }).then(data => {
                    this.info = data.promotionData[0];
                    this.lists = data.promotionData;
                    for (let i in data.idList) {
                        if ((data.idList[i].promotionId == promotionId)) {
                            data.idList[i].list = data.jsonDiscount;
                        }
                    }
                    this.machines = data.idList;
                });
            }
        },
        getData() {
            this.api({
                url: "/promotion/showLadderDiscount",
                method: "post",
                data: {
                    promotionId: this.$route.params.id || "",
                    username: this.userName
                }
            }).then(data => {
                this.info = data.promotionData[0];
                this.lists = data.promotionData;
                for (let i in data.idList) {
                    if ((data.idList[i].promotionId == this.$route.params.id)) {
                        data.idList[i].list = data.jsonDiscount;
                        this.index = i;
                    }
                }
                this.machines = data.idList;
            });
        },
        remove() {
            this.$confirm(
                "删除计划后，所选门店的促销SKU将即使回复原价销售，是否删除?",
                "提示",
                {
                    confirmButtonText: "确定",
                    showCancelButton: false,
                    type: "warning"
                }
            ).then(() => {
                this.api({
                    url: "/promotion/deleteForDiscount",
                    method: "post",
                    data: {
                        promotionId: this.$route.params.id || "",
                        storeCode: this.info.storeCode
                    }
                }).then(data => {
                    this.$message({
                        type: "success",
                        message: "删除成功"
                    });
                    this.$router.push({ path: "/sales" });
                });
            });
        },
        join(row) {
            this.api({
                url: "/promotion/doUpForDiscount",
                method: "post",
                data: {
                    discountRate: row.discountRate,
                    machineCode: this.info.machineCode,
                    skuCode: row.skuCode,
                    storeCode: this.info.storeCode,
                    promotionCode: this.info.promotionCode,
                    username: this.userName
                }
            }).then(data => {
                this.changeStore(this.index);
                this.$message({
                    type: "success",
                    message: "参加成功"
                });
            });
        },
        cancel(row) {
            this.api({
                url: "/promotion/doDownForDiscount",
                method: "post",
                data: {
                    storeCode: this.info.storeCode,
                    machineCode: this.info.machineCode,
                    skuCode: row.skuCode,
                    promotionCode: this.info.promotionCode,
                    username: this.userName
                }
            }).then(data => {
                this.changeStore(this.index);
                this.$message({
                    type: "success",
                    message: "取消成功"
                });
            });
        }
    },
    computed: {
        ...mapGetters(["userName"])
    }
};
</script>