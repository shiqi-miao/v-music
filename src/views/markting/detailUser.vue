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
    <div class="body">
        <div class="body-top">
            <div>
            <span>优惠券名称: &nbsp;</span>
            <span class="fr">{{data.couponName}}</span>
            </div>
            <div>
                <span>优惠类型: &nbsp;&nbsp;</span>
                <span class="fr">{{data.ruleTypeDetails}}</span>
            </div>
            <div>
                <span>优惠设置: &nbsp;&nbsp;</span>
                <span class="fr">
                    <span v-if="data.couponRule == 'M'">
                        满{{data.fullNum}}元减{{data.subNum}}元
                    </span>
                    <span v-else-if="data.couponRule == 'Z'">
                        满{{data.isDicount}}元后{{data.discountRate}}折
                    </span>
                    <span v-else-if="data.couponRule == 'R'">
                        满{{data.isRandom}}元随机减{{data.randomNum}}元
                    </span>
                    <span v-else-if="data.couponRule == 'D'" >
                        低销{{data.isLow}}元减{{data.lowNum}}元
                    </span>
                </span>
            </div>
            <div>
            <span>优惠范围: &nbsp;</span>
            <span class="fr">{{data.typeName}}</span>
            </div>
            <div>
                <span>用券时间: &nbsp;&nbsp;</span>
                <span class="fr">领券当日起{{data.validity}}天</span>
            </div>
            <div>
            <span>单ID发放数量: &nbsp;</span>
            <span class="fr">{{data.sameGetNum}}</span>
            </div>
            <div>
            <span>适用门店: &nbsp;</span>
            <span v-for="(item,key) in data.storeName" :key="key" class="fr">{{item}}&nbsp;<span v-if="!key == 0">、</span>&nbsp;</span>
            </div> 
            <div>
            <span>上架时间: &nbsp;</span>
            <span class="fr">{{data.gmtTime}}</span>
            </div>
            <div>
            <span>领取/库存数量: &nbsp;</span>
            <span class="fr">{{data.pushOverNum}}/{{data.pushNum}}</span>
            </div>
            <div>
            <span>核销数量: &nbsp;</span>
            <span class="fr">{{data.offNum}}</span>
            </div>
            <div>
            <span>核销价值: &nbsp;</span>
            <span class="fr">{{data.offPrice}}</span>
            </div>
            <div>
            <span>启用状态: &nbsp;</span>
            <span class="fr">{{data.status}}</span>
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
                                    <p class="greyy small">有效期至{{data.validity}}天</p>
                                </div>
                        </el-col>
                    </el-row>
                </div>
                <div class="coupon-bottom small">
                    <div>
                        <p>{{data.ticketDetail}}</p>
                        <!-- <p>适用门店 : <span v-for="(item,key) in data.storeName" :key="key">{{item}}&nbsp;<span v-if="key < data.storeName.length-1">、</span>&nbsp;</span></p> -->
                    </div>
                </div>
            </div>
        </div>
           
        </div>
        <el-row class="footer">
            <el-button size="mini" round @click="back()">返回列表</el-button>
            <el-button type="primary" size="mini" round @click="up()" v-if="data. isDelete==0">上架优惠券</el-button>
            <el-button type="danger" size="mini" round @click="under()" v-if="data. isDelete==1">下架优惠券</el-button>
        </el-row>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            data:"",
            periodDetail:[],
        };
    },
    created() {
        this.getLists()
    },
    methods: {
        getLists(){
            this.api({
                    url: "/coupon/findCouponInfo",
                    method: "post",
                    data: {
                       ruleId:this.$route.params.ruleId,
                    }
                    }).then(data => {
                        this.data=data
                        console.log(this.data)
                    })
        },
        back(){
            this.$router.push({
                    path:"/system/coupons"
                });
        },
        up(){
             this.$confirm('是否上架该优惠券?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                        // 继续
                        this.api({
                            url: "/coupon/updateToUpTicket",
                            method: "post",
                            data: {//json格式传
                                ruleId:this.$route.params.ruleId,
                                isDelete:1,
                            }
                            }).then(data => {
                                this.$message({
                                    type: "success",
                                    message: "已成功上架"
                                });
                                this.$router.push({
                                        path:"/system/coupons"
                                    });
                            })
                }).catch(() => {
                        // 取消  
                });
        },
        under(){
            this.$confirm('是否下架该优惠券?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                        // 继续
                        this.api({
                            url: "/coupon/updateToUpTicket",
                            method: "post",
                            data: {//json格式传
                                ruleId:this.$route.params.ruleId,
                                isDelete:0,
                            }
                            }).then(data => {
                                this.$message({
                                    type: "success",
                                    message: "已下架"
                                });
                                this.$router.push({
                                        path:"/system/coupons"
                                    });
                            })
                }).catch(() => {
                        // 取消  
                });
        },
    },
    computed: {
        ...mapGetters(["userName"])
    }
};
</script>