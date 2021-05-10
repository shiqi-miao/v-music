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
</style>

<template>
    <div>
        <el-form class="coupon-form" label-position="left" label-width="120px" :inline="true">
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
            <!-- <el-form-item label="发放数量" required>
                <el-input type="text" v-model="data.pushNum" placeholder="请输入"></el-input>
            </el-form-item>
            <br> -->
            <el-form-item label="单ID发放数量" required>
                <el-input-number v-model="data.sameGetNum" :min="1" @change="selectSameNum()" @blur="selectSameNum()"></el-input-number>
                <!-- <el-input type="text" v-model="data.sameGetNum" placeholder="请输入"></el-input> -->
            </el-form-item>
            <br>
            <el-form-item label="发放门店" required class="create">
                <el-select v-model="data.storeIds" placeholder="请选择" multiple @change="storechange">
                    <el-option v-for="item in stores" :key="item.storeCode" :label="item.storeName" :value="item.storeCode">
                    </el-option>
                </el-select>
                预计券数量：{{coupon}}
            </el-form-item>
            <br>
            <!-- <el-form-item label="用券时间" required>
                <el-radio-group v-model="data.useType" class="jy-2">
                    <div>
                    <el-radio label="A" class="radio">
                        领券当日起<el-input type="text" v-model="data.validity" placeholder="请输入" class="row-m"></el-input>天内可用
                    </el-radio>
                    </div>
                    <div>
                    <el-radio label="B" class="radio">
                        <el-date-picker
                        class="input-with-date"
                        v-model="data.times"
                        type="daterange"
                        range-separator=" 至 "
                        start-placeholder="开始时间"
                        end-placeholder="结束时间"
                        value-format="yyyy-MM-dd"
                        >
                        </el-date-picker>
                    </el-radio>
                    </div>
                </el-radio-group>
            </el-form-item> -->
            <el-form-item label="用券时间" required>
                <span class="flex-center-Y">领券当日起<el-input type="text" v-model="data.validity" placeholder="请输入" class="row-m"></el-input>天内可用</span> 
            </el-form-item>
            <br>
            <!-- <el-form-item label="有效期限" required>
                
            </el-form-item>
            <br> -->
            <el-form-item label="发券原因">
                <el-input type="textarea" v-model="data.applyInfo" placeholder="非必填，用于提交审批时的说明描述" :rows="4"></el-input>
            </el-form-item>
            <br>
        </el-form>
        <div class="center">
            <el-button type="primary" @click="submit">提 交</el-button>
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
            cover:0,
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
        selectSameNum(){//单ID发放数量改变
        if(!this.data.sameGetNum==""){
            this.coupon=this.data.sameGetNum*this.cover
        }
            
        },
        storechange(){
            console.log(this.data.storeIds)
            if(this.data.storeIds.length>0){
                // for(let i in this.data.storeIds){
                this.api({
                    url: "/coupon/showAllUser",
                    method: "post",
                    data: {
                        storeList:this.data.storeIds,
                        username:this.userName
                    }
                }).then(data => {
                    this.coupon = data*this.data.sameGetNum
                    this.cover=data
                });
                // }
            }else{

            }
        },
        getLists(){
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
        submit(){
            if (!this.data.couponName) {
                this.$message({
                    type: "warning",
                    message: "请输入优惠券名称"
                });
                return;
            }
            if(this.data.couponRule == 'M'){
                if (!/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(this.data.fullNum) || !/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(this.data.subNum)) {
                    this.$message({
                        type: "warning",
                        message: "请输入满减券详细信息"
                    });
                    return;
                }
            }else if(this.data.couponRule == 'Z'){
                if (!/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(this.data.isDiscount) || !/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(this.data.discountRate)) {
                    this.$message({
                        type: "warning",
                        message: "请输入折扣券详细信息"
                    });
                    return;
                }
            }else if(this.data.couponRule == 'R'){
                 if (!/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(this.data.isRandom) || !/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(this.data.randomNum)) {
                
                    this.$message({
                        type: "warning",
                        message: "请输入随机减券详细信息"
                    });
                    return;
                }
            }else if(this.data.couponRule == 'D'){
                if (!/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(this.data.isLow) || !/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(this.data.lowNum)) {
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
            if (!/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(this.data.validity)) {
                    this.$message({
                        type: "warning",
                        message: "请输入有效期限"
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
            // if(this.data.useType == 'A'){
            //     if (!this.data.validity) {
            //         this.$message({
            //             type: "warning",
            //             message: "请输入有效期限"
            //         });
            //         return;
            //     }
            // }else if(this.data.useType == 'B'){
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
            this.api({
                // url: "/coupon/addCouponRule",
                url: "/coupon/applyCouponToOperator",
                method: "post",
                data: this.data
            }).then(data => {
                this.$router.replace({ path: "/markting/coupon"});
            });
        }
    },
    computed: {
        ...mapGetters(["userName"])
    }
};
</script>