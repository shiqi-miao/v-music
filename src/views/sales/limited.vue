<style scoped>
.dialog-form-item .el-input__inner {
    width: 160px;
}
.right {
    padding: 14px 0;
    text-align: right;
}
.limit {
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    -webkit-text-overflow: ellipsis;
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
    border: 1px solid #f1f1f1;
    border-radius: 20px;
    width: 100%;
}
.machine-scroll {
    height: 52vh;
    overflow-y: scroll;
}
.machine-bottom {
    height: 6vh;
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
.item {
    padding: 8px 4vw;
    font-size: 14px;
}
.item .index {
    width: 30px;
    text-align: center;
}
.m-l {
    margin-left: 3.4vw;
}
.m-ll {
    margin-left: 8px;
    width: 150px;
    line-height: 20px;
}
</style>
<style>
.machines .el-carousel__container {
    height: 64vh;
}
.btn-group-input .el-input__inner {
    width: 72px;
    border-radius: 0 20px 20px 0;
}
.btn-group-btn span {
    display: inline-block;
    width: 30px;
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
        <el-card class="content">
            <div><b>促销名称：</b>{{info.discountName}}</div>
            <div><b>生效时间：</b>{{info.timeStart}} - {{info.timeEnd}}</div>
            <div><b>门店：</b>{{info.storeName}}</div>
        </el-card>
        <div class="machines">
            <el-carousel arrow="always"
                         :interval="0"
                         @change="changecarousel">
                <el-carousel-item v-for="(item,i) in machines"
                                  :key="i"
                                  class="machine">
                    <div>
                        <div class="title">{{item.machineName}} - S/N:{{item.machineCode}} </div>
                        <div class="machine-scroll">
                            <div v-for="(obj,j) in item.list"
                                 v-if="obj.disPlayFlag"
                                 :key="j"
                                 class="flex-center item">
                                <div class="index">{{Number(j)+1}}</div>
                                <div class="flex-center-Y">
                                    <img :src="obj.appPicture"
                                         width="40"
                                         height="40"
                                         class="portrait" />
                                    <div class="m-ll">
                                        <div class="limit">{{obj.skuName}}</div>
                                        <div>¥ {{obj.salePrice}}&emsp;利润率{{obj.profitRate}}%</div>
                                    </div>
                                    <el-button-group class="m-l flex-center-Y">
                                        <el-button type="success"
                                                   round>打折</el-button>
                                        <el-button round
                                                   v-if="obj.discountRate">{{obj.discountRate}}</el-button>
                                        <el-input v-else
                                                  v-model="obj.priceA"
                                                  class="btn-group-input"
                                                  @change="updatePriceA(obj,i,j)"></el-input>
                                        折
                                    </el-button-group>
                                    <el-button-group class="m-l flex-center-Y">
                                        <el-button type="warning"
                                                   round>减价</el-button>
                                        <el-button round
                                                   v-if="obj.discountRate">{{obj.priceB}}</el-button>
                                        <el-input v-else
                                                  v-model="obj.priceB"
                                                  class="btn-group-input"
                                                  @change="updatePriceB(obj,i,j)"></el-input>
                                        元
                                    </el-button-group>
                                    <el-button-group class="m-l flex-center-Y">
                                        <el-button type="danger"
                                                   round>促销价</el-button>
                                        <el-button round
                                                   v-if="obj.discountRate"
                                                   class="btn-group-btn">{{obj.priceC}}</el-button>
                                        <el-input v-else
                                                  v-model="obj.priceC"
                                                  class="btn-group-input"
                                                  @change="updatePriceC(obj,i,j)"></el-input>
                                        元
                                    </el-button-group>
                                    <el-button class="m-l"
                                               v-if="obj.discountRate"
                                               @click="cancel(obj,item)">取消参加</el-button>
                                    <el-button type="primary"
                                               class="m-l"
                                               @click="join(obj,item)"
                                               v-else>立即参加</el-button>
                                </div>
                            </div>
                        </div>
                        <div class="machine-bottom">&emsp;</div>
                    </div>
                </el-carousel-item>
            </el-carousel>
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
            machines: [{ list: [{}, {}] }, {}],
        };
    },
    created() {
        this.getInfo();

    },
    methods: {
        changecarousel(index){
            this.getMachine(this.machines[index].machineCode, index)
        },
        getInfo() {
            this.api({
                url: "/promotion/showVendAndStore",
                method: "post",
                data: {
                    promotionId: this.$route.params.id || "",
                    storeCode: this.$route.params.storeCode || ""
                }
            }).then(data => {
                this.info = data.discountData;
                this.machines = data.vendList;
                this.getMachine(this.machines[0].machineCode, 0)
                // for (let i in this.machines) {
                //     this.getMachine(this.machines[i].machineCode, i);
                // }
            });
        },
        getData() {
            this.api({
                url: "/promotion/showTheTimeDicount",
                method: "post",
                data: {
                    promotionId: this.$route.params.id || "",
                    username: this.userName
                }
            }).then(data => {
                this.info = data.promotionData;
                // this.getMachine()
            });
        },
        getMachine(machineCode, index) {
            this.api({
                url: "/promotion/showTheTimeDicount",
                method: "post",
                data: {
                    machineCode: machineCode,
                    promotionCode: this.info.promotionCode
                }
            }).then(data => {
                console.log(data)
                for (let i in data) {
                    data[i].profitRate = Number(
                        ((data[i].salePrice - data[i].procurementPrice) /
                            data[i].procurementPrice) *
                            100
                    ).toFixed(2);
                    if (data[i].discountRate) {
                        data[i].priceA = Number(data[i].discountRate).toFixed(
                            0
                        );
                        data[i].priceB = Number(
                            (data[i].salePrice *
                                (100 - Number(data[i].discountRate))) /
                                100
                        ).toFixed(2);
                        data[i].priceC = Number(
                            (data[i].salePrice * Number(data[i].discountRate)) /
                                100
                        ).toFixed(2);
                    }
                }
                this.$set(this.machines[index], "list", data);
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
        cancel(row, machine) {
            this.api({
                url: "/promotion/doDownForDiscount",
                method: "post",
                data: {
                    storeCode: this.$route.params.storeCode,
                    machineCode: machine.machineCode,
                    skuCode: row.skuCode,
                    promotionId: this.$route.params.id,
                    username: this.userName
                }
            }).then(data => {
                this.getInfo();
                this.$message({
                    type: "success",
                    message: "取消成功"
                });
            });
        },
        join(row, machine) {
            if (!row.priceA) {
                this.$message({
                    type: "warning",
                    message: "未填写折扣信息"
                });
                return;
            }
            this.api({
                url: "/promotion/doUpForDiscount",
                method: "post",
                data: {
                    discountRate: row.priceA,
                    machineCode: machine.machineCode,
                    skuCode: row.skuCode,
                    storeCode: this.info.storeCode,
                    promotionCode: this.info.promotionCode,
                    username: this.userName
                }
            }).then(data => {
                this.getInfo();
                this.$message({
                    type: "success",
                    message: "参加成功"
                });
            });
        },
        updatePriceA(obj, i, j) {
            let priceB = Number(
                (obj.salePrice * (100 - Number(obj.priceA))) / 100
            ).toFixed(2);
            let priceC = Number(
                (obj.salePrice * Number(obj.priceA)) / 100
            ).toFixed(2);
            let priceA = Number(obj.priceA).toFixed(0);
            if (!(priceA < 100)) {
                console.log(111)
                this.$message({
                    type: "warning",
                    message: "促销价格不能高于原价"
                });
                this.setPrice("", "", "", i, j);
                return;
            }
            if (priceA < 0) {
                this.$message({
                    type: "warning",
                    message: "折扣不得为负数"
                });
                this.setPrice("", "", "", i, j);
                return;
            }
            if (priceB < 0) {
                console.log(222)
                this.$message({
                    type: "warning",
                    message: "促销价格不能低于0"
                });
                this.setPrice("", "", "", i, j);
                return;
            }
            this.setPrice(priceA, priceB, priceC, i, j);
        },
        updatePriceB(obj, i, j) {
            let priceA = Number(
                ((obj.salePrice - Number(obj.priceB)) / obj.salePrice) * 100
            ).toFixed(0);
            let priceC = Number(obj.salePrice - obj.priceB).toFixed(2);
            let priceB = Number(obj.priceB).toFixed(2);
            if (!(priceA < 100)) {
                this.$message({
                    type: "warning",
                    message: "促销价格不能高于原价"
                });
                this.setPrice("", "", "", i, j);
                return;
            }
            if (priceC < 0) {
                this.$message({
                    type: "warning",
                    message: "促销价格不能低于0"
                });
                this.setPrice("", "", "", i, j);
                return;
            }
            this.setPrice(priceA, priceB, priceC, i, j);
        },
        updatePriceC(obj, i, j) {
            let priceA = Number((obj.priceC / obj.salePrice) * 100).toFixed(0);
            let priceB = Number(obj.salePrice - obj.priceC).toFixed(2);
            let priceC = Number(obj.priceC).toFixed(2);
            if (!(priceA < 100)) {
                this.$message({
                    type: "warning",
                    message: "促销价格不能高于原价"
                });
                this.setPrice("", "", "", i, j);
                return;
            }
            if (priceC < 0) {
                this.$message({
                    type: "warning",
                    message: "促销价格不能低于0"
                });
                this.setPrice("", "", "", i, j);
                return;
            }
            this.setPrice(priceA, priceB, priceC, i, j);
        },
        setPrice(priceA, priceB, priceC, i, j) {
            this.$set(this.machines[i].list[j], "priceA", priceA);
            this.$set(this.machines[i].list[j], "priceB", priceB);
            this.$set(this.machines[i].list[j], "priceC", priceC);
        }
    },
    computed: {
        ...mapGetters(["userName"])
    }
};
</script>