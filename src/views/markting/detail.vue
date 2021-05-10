<style lang="scss" scoped>
.coupon-form{
    padding: 20px;
}
.center{
    text-align: center;
    margin: 20px auto;
}
.row-m{
    margin: 0 20px;
    width: 120px;
}
.radio{
    display: block;
    margin-bottom: 10px;
    text-align: left;
}
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
        <!-- <el-form class="coupon-form" label-position="left" label-width="120px" :inline="true">
            <el-form-item label="名称" required>
                <el-input type="text" v-model="data.couponName" placeholder="请输入"></el-input>
            </el-form-item>
            <br>
            <el-form-item label="类型" required>
                <el-select v-model="data.couponRule" placeholder="请选择">
                    <el-option v-for="item in types" :key="item.id" :label="item.name" :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <br>
            <el-form-item label="优惠设置" required>
                <span v-if="data.couponRule == 'M'" class="flex-center-Y">
                    满<el-input type="text" v-model="data.fullNum" placeholder="请输入" class="row-m"></el-input>
                    元，减<el-input type="text" v-model="data.subNum" placeholder="请输入" class="row-m "></el-input>元
                </span>
                <span v-else-if="data.couponRule == 'Z'" class="flex-center-Y">
                    满<el-input type="text" v-model="data.isDiscount" placeholder="请输入" class="row-m"></el-input>
                    元，打<el-input type="text" v-model="data.discountRate" placeholder="请输入" class="row-m"></el-input>折
                </span>
                <span v-else-if="data.couponRule == 'R'" class="flex-center-Y">
                    随机减<el-input type="text" v-model="data.isRandom" placeholder="请输入" class="row-m"></el-input>
                    元，至<el-input type="text" v-model="data.randomNum" placeholder="请输入" class="row-m"></el-input>元
                </span>
                <span v-else-if="data.couponRule == 'D'" class="flex-center-Y">
                    最低消费<el-input type="text" v-model="data.isLow" placeholder="请输入" class="row-m"></el-input>
                    元，抵用<el-input type="text" v-model="data.lowNum" placeholder="请输入" class="row-m"></el-input>元
                </span>
            </el-form-item>
            <br>
            <el-form-item label="优惠范围" required class="create">
                <el-select v-model="data.couponType" placeholder="请选择">
                    <el-option v-for="item in tabs" :key="item.specialCode" :label="item.typeName" :value="item.specialCode">
                    </el-option>
                </el-select>
            </el-form-item>
            <br>
            <el-form-item label="单ID发放数量" required>
                <el-input-number v-model="data.sameGetNum" :min="1" @change="selectSameNum()" @blur="selectSameNum()"></el-input-number>
            </el-form-item>
            <br>
            <el-form-item label="发放门店" required class="create">
                <el-select v-model="data.storeIds" placeholder="请选择" multiple @change="storechange">
                    <el-option v-for="item in stores" :key="item.storeCode" :label="item.storeName" :value="item.storeCode">
                    </el-option>
                </el-select>
                预计券数量：{{data.couponNum}}
            </el-form-item>
            <br>
            <el-form-item label="用券时间" required>
                <span class="flex-center-Y">领券当日起<el-input type="text" v-model="data.validity" placeholder="请输入" class="row-m"></el-input>天内可用</span> 
            </el-form-item>
            <br>
            <el-form-item label="发券原因">
                <el-input type="textarea" v-model="data.applyInfo" placeholder="非必填，用于提交审批时的说明描述" :rows="4"></el-input>
            </el-form-item>
            <br>
            <el-form-item label="未通过原因:" v-if="data.applyStatus=='0'">
                <el-input type="textarea" v-model="data.reasonInfo " :rows="2"></el-input>
            </el-form-item>
            <br>
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
                                </div>
                        </el-col>
                    </el-row>
                </div>
                <div class="coupon-bottom small">
                    <div>
                        <p>{{data.ticketDetails}}</p>
                    </div>
                </div>
            </div>
        </el-form> -->
        <el-form class="coupon-form" label-position="left" label-width="120px" :inline="true">
            <el-form-item label="名称: " required>
                <span>{{data.couponName}}</span>
            </el-form-item>
            <br>
            <el-form-item label="类型: " required>
                <span>{{data.couponRuleDetails}}</span>
            </el-form-item>
            <br>
            <el-form-item label="优惠设置: " required>
                <span v-if="data.couponRule == 'M'">
                    满{{data.fullNum}}元减{{data.subNum}}元
                </span>
                <span v-else-if="data.couponRule == 'Z'">
                    满{{data.isDicount}}元打{{data.discountRate}}折
                </span>
                <span v-else-if="data.couponRule == 'R'">
                    满{{data.isRandom}}元随机减{{data.randomNum}}元
                </span>
                <span v-else-if="data.couponRule == 'D'" >
                    最低消费{{data.isLow}}元减{{data.lowNum}}元
                </span>
            </el-form-item>
            <br>
            <el-form-item label="优惠范围: " required class="create">
                <span>{{data.typeName}}</span>
            </el-form-item>
            <br>
            <el-form-item label="单ID发放数量: " required>
                <span>{{data.sameGetNum}}</span>
            </el-form-item>
            <br>
            <el-form-item label="发放门店: " required class="create">
                <span v-for="(item,key) in data.storeName" :key="key">{{item}}&nbsp;<span v-if="key < data.storeName.length-1">、</span>&nbsp;</span>
                (预计券数量：{{data.couponNum}})
            </el-form-item>
            <br>
            <el-form-item label="用券时间: " required>
                <span class="flex-center-Y">领券当日起{{data.validity}}天内可用</span> 
            </el-form-item>
            <br>
            <el-form-item label="发券原因: ">
                <span>{{data.applyInfo}}</span>
            </el-form-item>
            <br>
            <el-form-item label="未通过原因:" v-if="data.applyStatus=='0'">
                <el-input type="textarea" v-model="data.reasonInfo " :rows="2"></el-input>
            </el-form-item>
            <br>
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
                                </div>
                        </el-col>
                    </el-row>
                </div>
                <div class="coupon-bottom small">
                    <div>
                        <p>{{data.ticketDetails}}</p>
                    </div>
                </div>
            </div>
        </el-form>
        <div class="center">
            <el-button size="mini" round @click="back()">返回列表</el-button>
            <el-button size="mini" type="primary" round @click="up" v-if="data.applyStatus=='3'">发放优惠券</el-button>
            <el-button size="mini" type="danger" round @click="cancel" v-if="data.applyStatus=='2'">取消审批</el-button>
            <el-button size="mini" type="primary" round @click="submit" v-if="data.applyStatus=='0'">重新提交</el-button>
            <el-button size="mini" type="primary" round @click="submit" v-if="data.applyStatus=='4'">重新提交审批</el-button>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            data:{
                couponRule:'M',
                isVolunSend:0,
                storeIds:[]
            },
            coupon:0,
            tabs:[],
            stores:[],
            types:[
                {
                    name:'满减券',
                    id:'M'
                },
                {
                    name:'折扣券',
                    id:'Z'
                },
                {
                    name:'随机减',
                    id:'R'
                },
                {
                    name:'低销',
                    id:'D'
                },
            ]
        };
    },
    created() {
        this.getLists()
    },
    methods: {
        selectSameNum(){//单ID发放数量改变,预计券数量
        if(!this.data.sameGetNum==""){
            this.api({
                    url: "/coupon/showAllUser",
                    method: "post",
                    data: {
                        storeList:this.data.storeIds,
                        username:this.userName
                    }
                }).then(data => {
                    this.data.couponNum = data*this.data.sameGetNum
                });
        }
            
        },
        back(){
            this.$router.push({
                    path:"/markting/coupon"
                });
        },
        up(){
            this.api({
                    url: "/coupon/seedAllTicket",
                    method: "post",
                    data: {
                        applyId:this.$route.params.applyId
                    }
                }).then(data => {
                     this.$message({
                                    type: "success",
                                    message: "发放成功"
                                });
                    this.$router.push({
                    path:"/markting/coupon"
                });
                });
            
        },
        storechange(){
            console.log(this.data.storeIds)
            // if(this.data.storeIds.length>0){
                // for(let i in this.data.storeIds){
                this.api({
                    url: "/coupon/showAllUser",
                    method: "post",
                    data: {
                        storeList:this.data.storeIds,
                        username:this.userName
                    }
                }).then(data => {
                    this.data.couponNum = data*this.data.sameGetNum
                });
                // }
            // }else{

            // }
        },
        getLists(){
            this.api({
                url: "/coupon/showOneRecord",
                method: "post",
                data: {
                    applyId:this.$route.params.applyId
                }
            }).then(data => {
                this.data = data
                console.log(data)
            });
            this.api({
                url: "/coupon/showAllGoodsType",
                method: "post",
                data: {}
            }).then(data => {
                this.tabs = data
            });
            this.api({
                url: "/coupon/showAllStoreCode",
                method: "post",
                data: {
                    username:this.userName
                }
            }).then(data => {
                this.stores = data
            });
        },
        cancel(){
            this.api({
                url: "/coupon/cancelCoupon",
                method: "post",
                data: {
                    applyId:this.data.applyId
                }
            }).then(data => {
            this.$router.push({
                    path:"/markting/coupon"
                });
            });
        },
        submit(){
            console.log(this.data)
            if (!this.data.couponName) {
                this.$message({
                    type: "warning",
                    message: "请输入优惠券名称"
                });
                return;
            }
            // if(this.data.couponRule == 'M'){
            //     if (!this.data.fullNum || !this.data.subNum) {
            //         this.$message({
            //             type: "warning",
            //             message: "请输入满减券详细信息"
            //         });
            //         return;
            //     }
            // }
            if(this.data.couponRule == 'Z'){
                if (!this.data.isDiscount || !this.data.discountRate) {
                    this.$message({
                        type: "warning",
                        message: "请输入折扣券详细信息"
                    });
                    return;
                }
            }
            if(this.data.couponRule == 'R'){
                if (!this.data.isRandom || !this.data.randomNum) {
                    this.$message({
                        type: "warning",
                        message: "请输入随机减券详细信息"
                    });
                    return;
                }
            }
            if(this.data.couponRule == 'D'){
                if (!this.data.isLow || !this.data.lowNum) {
                    this.$message({
                        type: "warning",
                        message: "请输入随机减券详细信息"
                    });
                    return;
                }
            }
            if (!this.data.couponType) {
                this.$message({
                    type: "warning",
                    message: "请选择优惠范围"
                });
                return;
            }
            if (this.data.storeIds.length == 0) {
                this.$message({
                    type: "warning",
                    message: "请选择发放门店"
                });
                return;
            }
            // if (!this.data.pushNum) {
            //     this.$message({
            //         type: "warning",
            //         message: "请输入发放数量"
            //     });
            //     return;
            // }
            if (!this.data.sameGetNum) {
                this.$message({
                    type: "warning",
                    message: "请输入人次上限"
                });
                return;
            }
            // if(!this.data.useType){
            //     this.$message({
            //         type: "warning",
            //         message: "请选择用券时间"
            //     });
            //     return;
            // }
                if (!this.data.validity) {
                    this.$message({
                        type: "warning",
                        message: "请输入有效期限"
                    });
                    return;
                }
            // if(this.data.useType == 'A'){
            //     if (!this.data.validity) {
            //         this.$message({
            //             type: "warning",
            //             message: "请输入有效期限"
            //         });
            //         return;
            //     }
            // }
            // else if(this.data.useType == 'B'){
            //     if(this.data.times.length == 2){
            //         this.data.startTime = this.data.times[0]
            //         this.data.endTime = this.data.times[1]
            //     }else{
            //         this.$message({
            //             type: "warning",
            //             message: "请输入有效时间"
            //         });
            //         return;
            //     }
            // }
            this.data.username = this.userName
            this.data.applyId=this.$route.params.applyId,
            this.$confirm('是否提交该优惠券申请？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.api({
                        url: "/coupon/updateCouponToOperator",
                        method: "post",
                        data: this.data
                    }).then(data => {
                        this.$message({
                            type: 'success',
                            message: '提交成功!'
                        })
                        this.$router.push({ path: "/markting/coupon"});
                    })
                }).catch(() => {

                })
        }
    },
    computed: {
        ...mapGetters(["userName"])
    }
};
</script>