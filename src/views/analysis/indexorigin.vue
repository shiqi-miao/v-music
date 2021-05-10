<template>
<div class="app-container">
    <div class=" analysis" v-if="hasAuth==1">
        <el-row type="flex">
            <div
                v-if="store"
                class="left clu"
            >
                <el-row
                    v-if="machine"
                    type="flex"
                >
                    <h1>{{store.storeName}} - {{machine.vendName}}</h1>
                    <p class="state-on m-l-m m-t-m">{{machine.machineStatus}}</p>
                </el-row>
                <p class="txt-gray m-t-m">{{store.locationInfo}}</p>
            </div>
            <div class="right txt-gray txt-right m-t-m">
                <div class="date">
                    <vue-time />
                </div>
                <p class="m-t-m">已运营{{onlineDays}}天</p>
            </div>

        </el-row>
        <h2 class="m-t-x">总体概况</h2>
        <el-row
            type="flex"
            justify="space-around"
            class="m-t-m overview"
            v-if="overview"
        >
            <div>
                <h1>{{overview.discPrice}}<span>¥</span></h1>
                <p class="txt-gray m-t-m">交易总额</p>
            </div>
            <div>
                <h1>{{overview.payPrice}}<span>¥</span></h1>
                <p class="txt-gray m-t-m">实际入帐</p>
            </div>
            <div>
                <h1>{{overview.profitPrice}}<span>¥</span></h1>
                <p class="txt-gray m-t-m">利润</p>
            </div>
            <div>
                <h1>{{overview.noPayPrice}}<span>¥</span></h1>
                <p class="txt-gray m-t-m">未付款</p>
            </div>
            <div>
                <h1>{{overview.orderNum}}</h1>
                <p class="txt-gray m-t-m">交易笔数</p>
            </div>
            <div>
                <h1>{{overview.userNum}}</h1>
                <p class="txt-gray m-t-m">交易人数</p>
            </div>
        </el-row>

        <h2 class="m-t-x">详情分析</h2>
        <el-row
            type="flex"
            class="m-t-m"
        >
            <el-date-picker
                class="m-l-m"
                v-model="duration"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions"
                @change="fetchSelectedData"
            />
        </el-row>
        <div
            class="graph m-t-x"
            v-if="chartData.rows"
        >
            <div>
                <ve-line
                    height="300px"
                    :data="chartData"
                    :settings="chartSettings"
                ></ve-line>
            </div>
            <div class="info">
                <h5>本时段总体概况</h5>
                <div>
                    <div>
                        <p>交易额</p>
                        <h1>{{curView.discPrice}}<span>¥</span></h1>
                    </div>
                    <div>
                        <p>实收</p>
                        <h1>{{curView.payPrice}}<span>¥</span></h1>
                    </div>
                </div>
                <div>
                    <div>
                        <p>利润</p>
                        <h1>{{curView.profitPrice}}<span>¥</span></h1>
                    </div>
                    <div>
                        <p>未支付</p>
                        <h1>{{curView.noPayPrice}}<span>¥</span></h1>
                    </div>
                </div>
                <div>
                    <div>
                        <p>交易量</p>
                        <h1>{{curView.orderNum}}</h1>
                    </div>
                    <div>
                        <p>用户数</p>
                        <h1>{{curView.userNum}}</h1>
                    </div>
                </div>
            </div>
        </div>

        <el-tabs
            v-model="selectTab"
            v-if="tableData && tableOrders"
            type="card"
        >
            <el-tab-pane
                label="经营分析"
                name="first"
            >
                <el-table
                    v-if="tableOrders"
                    class="m-t-x"
                    :data="tableOrders"
                    style="width: 100%"
                    :default-sort="{prop: 'rate', order: 'descending'}"
                >
                    <el-table-column
                        prop="skuName"
                        label="SKU"
                        width="180"
                        sortable
                    >
                    </el-table-column>
                    <el-table-column
                        prop="slotNum"
                        label="货道数"
                        width="180"
                        sortable
                    >
                    </el-table-column>
                    <el-table-column
                        prop="total"
                        label="总销量"
                        width="180"
                        sortable
                    >
                    </el-table-column>
                    <el-table-column
                        prop="fully"
                        label="正价销量"
                        width="180"
                        sortable
                    >
                    </el-table-column>
                    <el-table-column
                        prop="discount"
                        label="折价销量"
                        width="180"
                        sortable
                    >
                    </el-table-column>

                    <el-table-column
                        prop="rate"
                        label="折价销售比率"
                        width="180"
                        sortable
                    >
                    </el-table-column>

                </el-table>
            </el-tab-pane>
            <el-tab-pane
                label="统计详情"
                name="second"
            >
                <el-table
                    v-if="tableData"
                    class="m-t-x"
                    :data="tableData"
                    style="width: 100%"
                    :default-sort="{prop: 'date', order: 'descending'}"
                >
                    <el-table-column
                        prop="goodsName"
                        label="SKU"
                        width="180"
                        sortable
                    >
                    </el-table-column>
                    <el-table-column
                        prop="gmtCreated"
                        label="上架时间"
                        width="180"
                        sortable
                    >
                    </el-table-column>
                    <el-table-column
                        prop="statistics.salesPrice"
                        label="交易额"
                        width="180"
                        sortable
                    >
                    </el-table-column>
                    <el-table-column
                        prop="statistics.realPrice"
                        label="实收"
                        width="180"
                        sortable
                    >
                    </el-table-column>
                    <el-table-column
                        prop="statistics.orderNum"
                        label="销量"
                        width="180"
                        sortable
                    >
                    </el-table-column>
                    <el-table-column
                        prop="statistics.userNum"
                        label="客户数"
                        width="180"
                        sortable
                    >
                    </el-table-column>

                    <el-table-column
                        prop="statistics.procurementPrice"
                        label="当前售价"
                        width="180"
                        sortable
                    >
                    </el-table-column>

                    <el-table-column
                        prop="statistics.procurementPriceSum"
                        label="成本总和"
                        width="180"
                        sortable
                    >
                    </el-table-column>

                    <el-table-column
                        prop="statistics.profitPrice"
                        label="利润总额"
                        width="180"
                        sortable
                    >
                    </el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>

    </div>
    <div v-else class="welcome">
        欢迎登录光芽后台管理系统！
    </div>
</div>

</template>
<script>
import { mapGetters } from "vuex";
import vueTime from "vue-time";
import moment from "moment";

export default {
    data() {
        this.chartSettings = {
            stack: { 日常数据: ["收入", "利润", "交易笔数"] },
            labelMap: {
                payPrice: "收入",
                profitPrice: "利润",
                orderNum: "交易数"
            },
            area: true
            // xAxisType: "time"
        };
        return {
            selectTab:"first",
            store: null,
            machine: null,
            duration: [
                moment()
                    .subtract(7, "days")
                    .format("YYYY-MM-DD"),
                moment().format("YYYY-MM-DD")
            ],
            overview: null,
            curView: null,
            tableData: null,
            tableOrders: null,
            orders: null,
            chartData: {
                columns: ["time", "payPrice", "profitPrice", "orderNum"],
                rows: null
            },
            pickerOptions: {
                shortcuts: [
                    {
                        text: "最近一周",
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(
                                start.getTime() - 3600 * 1000 * 24 * 7
                            );
                            picker.$emit("pick", [start, end]);
                        }
                    },
                    {
                        text: "最近一个月",
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(
                                start.getTime() - 3600 * 1000 * 24 * 30
                            );
                            picker.$emit("pick", [start, end]);
                        }
                    },
                    {
                        text: "最近三个月",
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(
                                start.getTime() - 3600 * 1000 * 24 * 90
                            );
                            picker.$emit("pick", [start, end]);
                        }
                    }
                ]
            },
            value: "",
            hasAuth:''
        };
    },
    computed: {
        ...mapGetters([
            'roleId',"userName"
        ]),
        onlineDays: function() {
            return this.store
                ? moment().diff(this.store.gmtCreated, "days")
                : 0;
        }
    },
    created() {
        this.getInfo();
    },
    methods: {
        getInfo(){
            this.hasAuth = 0
            // this.api({
            //     url: "/login/isShowHome",
            //     method: "post",
            //     data:{
            //         username:this.userName
            //     }
            // })
            // .then(res => {
            //     this.hasAuth = res
            //     if( this.hasAuth == 1){
            //         this.fetchStore();
            //     }
            // })
            // .catch(e => {
            //     console.log(e.message);
            // });
        },
        fetchStore() {
            this.api({
                url: "/data/a.storeList",
                method: "post"
            })
                .then(res => {
                    this.store = res[0];

                    this.fetchMachine();
                    // console.log(res);
                })
                .catch(e => {
                    console.log(e.message);
                });
        },
        fetchMachine() {
            this.api({
                url: "/data/b.vendList",
                method: "post"
            })
                .then(res => {
                    if (!res || res.length < 0) throw Error("no machine");
                    for (let index = 0; index < res.length; index++) {
                        const element = res[index];
                        if (element.vendName == "生鲜机") {
                            this.machine = element;
                            this.fetchSelectedData();
                            break;
                        }
                    }
                    // console.log(this.machine);
                })
                .catch(e => {
                    console.log(e.message);
                });
        },
        fetchSelectedData() {
            this.fetchStatisticsAll();
            this.fetchStatistics();
            this.fetchTableData();
            this.fetchChatData();
            this.fetchOrder();
        },
        fetchStatisticsAll() {
            this.api({
                url: "/statistics/b.vendStatistics",
                method: "post",
                params: {
                    storeCode: this.store.storeCode,
                    vendCode: this.machine.vendCode
                }
            })
                .then(res => {
                    this.overview = res.flow;
                })
                .catch(e => {
                    console.log(e.message);
                });
        },
        fetchStatistics() {
            // console.log(this.duration);

            this.api({
                url: "/statistics/b.vendStatistics",
                method: "post",
                params: {
                    storeCode: this.store.storeCode,
                    vendCode: this.machine.vendCode,
                    startTime: this.duration
                        ? moment(this.duration[0]).format("YYYY-MM-DD HH:mm:ss")
                        : null,
                    endTime: this.duration
                        ? this.duration[1]
                            ? moment(this.duration[1])
                                  .endOf("day")
                                  .format("YYYY-MM-DD HH:mm:ss")
                            : moment(this.duration[0])
                                  .endOf("day")
                                  .format("YYYY-MM-DD HH:mm:ss")
                        : null
                }
            })
                .then(res => {
                    this.curView = res.flow;
                })
                .catch(e => {
                    console.log(e.message);
                });
        },
        fetchTableData() {
            this.api({
                url: "/statistics/c.vendSkuStatistics",
                method: "post",
                params: {
                    storeCode: this.store.storeCode,
                    vendCode: this.machine.vendCode,
                    startTime: this.duration
                        ? moment(this.duration[0]).format("YYYY-MM-DD")
                        : null,
                    endTime: this.duration
                        ? this.duration[1]
                            ? moment(this.duration[1])
                                  .endOf("day")
                                  .format("YYYY-MM-DD")
                            : moment(this.duration[0])
                                  .endOf("day")
                                  .format("YYYY-MM-DD")
                        : null
                }
            })
                .then(res => {
                    this.tableData = res;

                    // console.log(this.tableData);
                })
                .catch(e => {
                    console.log(e.message);
                });
        },
        fetchChatData() {
            this.api({
                url: "/statistics/d.vendLineStatistics",
                method: "post",
                params: {
                    storeCode: this.store.storeCode,
                    vendCode: this.machine.vendCode,
                    startTime: this.duration
                        ? moment(this.duration[0])
                              .startOf("day")
                              .format("YYYY-MM-DD")
                        : null,
                    endTime: this.duration
                        ? this.duration[1]
                            ? moment(this.duration[1])
                                  .endOf("day")
                                  .format("YYYY-MM-DD")
                            : moment(this.duration[0])
                                  .endOf("day")
                                  .format("YYYY-MM-DD")
                        : null
                }
            })
                .then(res => {
                    this.chartData.rows = res;

                    // console.log(this.chartData.rows);
                })
                .catch(e => {
                    console.log(e.message);
                });
        },
        fetchOrder() {
            this.api({
                url: "/data/d.orderListBySkuFromAisle",
                method: "post",
                params: {
                    storeCode: this.store.storeCode,
                    vendCode: this.machine.vendCode,
                    startTime: this.duration
                        ? moment(this.duration[0])
                              .startOf("day")
                              .format("YYYY-MM-DD")
                        : null,
                    endTime: this.duration
                        ? this.duration[1]
                            ? moment(this.duration[1])
                                  .endOf("day")
                                  .format("YYYY-MM-DD")
                            : moment(this.duration[0])
                                  .endOf("day")
                                  .format("YYYY-MM-DD")
                        : null
                }
            })
                .then(res => {
                    this.orders = res;
                    this.analyseOrder(res);
                    // console.log("orders", this.orders);
                })
                .catch(e => {
                    console.log(e.message);
                });
        },
        analyseOrder(orders) {
            const fullRate = 9.9;

            let orderMap = new Map();

            orders.forEach(order => {
                // console.log("order", order);

                if (orderMap.has(order.skuCode)) {
                    let mapItem = orderMap.get(order.skuCode);

                    if (!mapItem) return;

                    mapItem.total++;
                    mapItem.fully +=
                        order.promotion === "无促销活动" ||
                        order.promotion.tempDiscRatio >= fullRate
                            ? 1
                            : 0;
                    mapItem.discount +=
                        order.promotion !== "无促销活动" &&
                        order.promotion.tempDiscRatio < fullRate
                            ? 1
                            : 0;
                    mapItem.orgs.push(order);
                } else {
                    orderMap.set(order.skuCode, {
                        skuId: order.skuCode,
                        skuName: order.goodsName,
                        rate: 0.0,
                        slotNum: "已下架",
                        total: 1,
                        fully:
                            order.promotion === "无促销活动" ||
                            order.promotion.tempDiscRatio >= fullRate
                                ? 1
                                : 0,
                        discount:
                            order.promotion !== "无促销活动" &&
                            order.promotion.tempDiscRatio < fullRate
                                ? 1
                                : 0,
                        orgs: [order]
                    });
                }
            });

            // console.log("orderMap", orderMap);

            let reqArray = [];

            orderMap.forEach((v, k, m) => {
               v.rate = (
                    parseFloat(v.discount) /
                    parseFloat(v.total)
                ).toFixed(2);

                reqArray.push(
                    this.api({
                        url: "/data/e.skuDistribution",
                        method: "post",
                        params: {
                            storeCode: this.store.storeCode,
                            skuCode: k
                        }
                    })
                );
            });

            Promise.all(reqArray)
                .then(resArray => {
                    this.mixOrdersMap(orderMap, resArray);
                })
                .then(err => console.log(err));
        },
        mixOrdersMap(orderMap, resArray) {
            resArray.forEach(res => {
                if (!res || res.length <= 0 || !res[0].skuCode) return;

                orderMap.get(res[0].skuCode).slotNum = res.length;
            });

            this.tableOrders = Array.from(orderMap.values());

            // console.log("this.tableOrders", this.tableOrders);
        }
    },
    components: {
        vueTime: vueTime
    }
};
</script>
<style>
.analysis {
    font-size: 0.87em;
}
.analysis p,
.analysis h1,
.analysis h2 {
    margin: 0;
    font-weight: 500;
}
.analysis h1 {
    font-size: 1.75em;
}
.analysis h2 {
    font-size: 1.38em;
}

.analysis h1 span,
.analysis h2 span {
    margin-left: 5px;
    font-size: 0.65em;
}

.analysis .clu {
    flex: 1;
}

.analysis .m-t-m {
    margin-top: 10px;
}
.analysis .m-t-x {
    margin-top: 20px;
}

.analysis .m-l-m {
    margin-left: 10px;
}

.analysis .txt-gray {
    color: #828990;
}

.analysis .txt-right {
    text-align: right;
}

.analysis .state-on {
    color: #5fab0b;
}

.analysis .state-off {
    color: #d0021b;
}
.analysis .state-fill {
    color: #258cff;
}

.analysis .graph {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}
.analysis .graph > div:first-child {
    flex: 1;
    padding-right: 50px;
}
.analysis .info {
    margin-right: 30px;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
}

.analysis .info > div {
    display: flex;
    min-width: 150px;
    justify-content: space-between;
}

.analysis .info > div > div {
    flex: 1;
    margin: 10px 0;
}

.analysis .info > div > div:first-child {
    margin-right: 50px;
}

.analysis .info > div > div > p {
    color: #828990;
}
</style>
  