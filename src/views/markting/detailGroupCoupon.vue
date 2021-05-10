<style lang="scss" scoped>
    .header{display: flex;justify-content: space-between;padding:30px 70px}
    .body{padding: 30px 70px}
    .body div{margin-top: 20px} 
    .body .body-top{width: 50%}
    .fr{float: right}
    hr{margin-top: 0}
    .footer{text-align: center;margin-top:200px}
    .coupon{width: 50%;height: 200px;border: 1px solid #97a8be;padding:1%}
    .coupon-top{height: 50%;border-bottom: 1px solid #97a8be;margin:0!important}
    .coupon-bottom{height: 50%;margin:0!important;text-align: center;position: relative}
    .coupon-bottom>div{position: absolute;top: 50%;transform: translateY(-50%);margin:0!important;width: 100%}
    .coupon-top .top-left{width:100%;height:100%;border-right: 1px solid #97a8be;margin:0!important;position:relative;}
    .coupon-top .top-left>div{position: absolute;top: 50%;transform: translateY(-50%);margin:0!important;text-align:center;width: 100%}
    .coupon-top .top-right{width:100%;height:100%;margin:0!important;padding-left: 7%}
    .coupon-top .top-left span{font-size: 25px}
    .coupon-top .top-left p,.coupon-top .top-left p>span{font-size: 16px;}
    .el-row,.el-col{margin: 0!important;height: 100%}
    p{margin:2%!important}
    .greyy{color: #97a8be}
    .small{font-size: 12px}
</style>
<template>
    <div>
        <div class="header">
            <div>
            <span>企业名称: </span>
            <span>{{data.groupName}}</span>
            </div>
            <div>
                <span>员工数量: </span>
                <span>{{data.groupUserNum}}</span>
            </div>
            <div>
            <span>预存金: </span>
            <span>￥{{data.rechargeMoney}}</span>
            </div>
            <div>
            <span>本期冻结: </span>
            <span>{{data.noUsedMoney}}</span>
            </div>
            <div>
            <span>已发期数: </span>
            <span>{{data.periods}}</span>
            <span style="color:#409EFF;cursor:pointer" @click="showPeriod()">查看明细</span>
            </div>
            <div>
            <span>核销数量: </span>
            <span>{{data.usedNum}}</span>
            </div>
            <div>
            <span>核销价值: </span>
            <span>¥ {{data.usedPrice || 0}}</span>
            </div>
        </div>
    <hr>
    <div class="body">
        <div class="body-top">
            <div>
            <span>优惠券名称: &nbsp;</span>
            <span class="fr">{{data.listName}}</span>
            </div>
            <div>
                <span>优惠设置: &nbsp;&nbsp;</span>
                <span class="fr">{{data.couponRule}}</span>
            </div>
            <div>
            <span>优惠范围: &nbsp;</span>
            <span class="fr">{{data.typeName}}</span>
            </div>
            <div>
            <span>发券周期: &nbsp;</span>
            <span class="fr">{{data.sendTime}}</span>
            </div>
            <div>
            <span>单ID发放数量: &nbsp;</span>
            <span class="fr">{{data.sendNum}}</span>
            </div>
            <div>
            <span>适用门店: &nbsp;</span>
            <span v-for="(item,key) in data.storeLists" :key="key" class="fr">{{item}}&nbsp;<span v-if="!key == 0">、</span>&nbsp;</span>
            </div> 
            </div> 
            <div>
            <span>优惠券预览: </span>
            <div class="coupon">
                <div class="coupon-top">
                    <el-row>
                        <el-col :span="7">
                                <div class="top-left">
                                    <div>
                                        <span>￥{{data.subNum}}</span>
                                        <p>满<span>{{data.fullNum}}</span>元可用</p>
                                    </div>
                                </div>
                        </el-col>
                        <el-col :span="17">
                                <div class="top-right">
                                    <el-button type="primary" plain round size="mini">{{data.couponName}}</el-button>
                                    <p>{{data.typeName}}</p>
                                    <!-- <p class="greyy small">有效期至:</p> -->
                                </div>
                        </el-col>
                    </el-row>
                </div>
                <div class="coupon-bottom small">
                    <div>
                        <p><span>{{data.typeName}}</span>,购买<span> {{data.groupName}} </span><span> {{data.couponType}} </span>商品时使用</p>
                        <p>任意单品实付金额 <span>{{data.couponRule}}</span> , 掉货即选取最优惠的券进行结算</p>
                        <p>适用门店 : <span v-for="(item,key) in data.storeLists" :key="key">{{item}}&nbsp;<span v-if="key < data.storeLists.length-1">、</span>&nbsp;</span></p>
                    </div>
                </div>
            </div>
            </div>
           
        </div>
        <el-row class="footer">
            <el-button size="mini" round @click="back()">返回列表</el-button>
            <el-button size="mini" round style="color:red" @click="cencel()" v-if="data.sendStatus==1">取消发放</el-button>
            <el-button type="primary" size="mini" round @click="define()" v-if="data.sendStatus==2">确定</el-button>
        </el-row>
        <el-dialog :visible.sync="periodDetailVisible" center title="查看期数明细">
            <el-table
                :data="periodDetail"
                style="width: 100%">
                <el-table-column
                    prop="periods"
                    label="期数">
                </el-table-column>
                <el-table-column
                    prop="sendTime"
                    label="发放时间">
                </el-table-column>
                <el-table-column
                    prop="sendUser"
                    label="发放人数">
                </el-table-column>
                <el-table-column
                    prop="sendNum"
                    label="发放数量">
                </el-table-column>
                <el-table-column
                    prop="writeOffNum"
                    label="核销数量">
                </el-table-column>
                <el-table-column
                    prop="offMoney"
                    label="核销价值">
                </el-table-column>
            </el-table>
        </el-dialog>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            data:"",
            periodDetailVisible:false,
            periodDetail:[],
        };
    },
    created() {
        this.getLists()
    },
    methods: {
        getLists(){
            this.api({
                    url: "/coupon/showOneCouponDetails",
                    method: "post",
                    data: {//json格式传
                        sendId:this.$route.params.sendId,
                    }
                    // params: {不要用这个
                    //     sendId:this.$route.params.sendId,
                    // }
                    }).then(data => {
                        this.data=data
                        console.log(this.data)
                    })
        },
        back(){
            this.$router.push({
                    path:"/system/company"
                });
        },
        cencel(){
            this.$confirm('是否取消发放?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                        // 继续
                        this.api({
                            url: "/coupon/cacheGroupCoupon",
                            method: "post",
                            data: {//json格式传
                                sendId:this.$route.params.sendId,
                                sendStatus:0
                            }
                            }).then(data => {
                                this.$message({
                                    type: "success",
                                    message: "已取消发放"
                                });
                                this.$router.push({
                                        path:"/system/company"
                                    });
                            })
                }).catch(() => {
                        // 取消  
                });
        },
        define(){
            this.$confirm('是否确定该优惠券在下个周期的发放?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                        // 继续
                        this.api({
                            url: "/coupon/cacheGroupCoupon",
                            method: "post",
                            data: {//json格式传
                                sendId:this.$route.params.sendId,
                                sendStatus:1
                            }
                            }).then(data => {
                                this.$message({
                                    type: "success",
                                    message: "已发放"
                                });
                                this.$router.push({
                                        path:"/system/company"
                                    });
                            })
                }).catch(() => {
                        // 取消  
                });
        },
        showPeriod(){
            this.api({
                    url: "/coupon/showRechargeDetails",
                    method: "post",
                    data: {//json格式传
                        sendId:this.$route.params.sendId,
                    }
                    }).then(data => {
                        console.log(data)
                        this.periodDetail=data
                    })
            this.periodDetailVisible=true
        },
    },
    computed: {
        ...mapGetters(["userName"])
    }
};
</script>