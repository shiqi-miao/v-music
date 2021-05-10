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
.header{padding:1%;border-bottom:2px solid #DCDFE6}
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
        <el-row class="header">
            <el-col :span="5">
            <span>企业名称: </span>
            <span>{{group.groupName}}</span>
            </el-col>
            <el-col :span="5">
                <span>员工数量: </span>
                <span>{{group.groupUserNum || 0}}</span>
            </el-col>
            <el-col :span="5">
            <span>预存金: </span>
            <span>￥{{group.rechargeMoney || 0}}</span>
            </el-col>
            <el-col :span="5">
            <span>本期占用: </span>
            <span>￥{{group.noUsedMoney || 0}}</span>
            </el-col>
        </el-row>
        <el-form class="coupon-form" label-position="left" label-width="120px" :inline="true">
            <el-form-item label="优惠券名称" required>
                <el-input type="text" v-model="data.couponName" placeholder="请输入"></el-input>
            </el-form-item>
            <br>
            <!-- <el-form-item label="类型" required>
                <el-select v-model="data.couponRule" placeholder="请选择">
                    <el-option v-for="item in types" :key="item.id" :label="item.name" :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item> -->
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
                <el-select v-model="data.couponType" placeholder="请选择" @change="selectCouponType">
                    <el-option v-for="item in tabs" :key="item.specialCode" :label="item.typeName" :value="item.specialCode">
                    </el-option>
                </el-select>
            </el-form-item>
            <br>
            <el-form-item label="发券周期" required class="create">
                <el-select v-model="couponPeriod" placeholder="请选择">
                    <el-option v-for="item in periodOptions" :key="item.value" :label="item.lable" :value="item.label">
                    </el-option>
                </el-select>
                <span>&nbsp;&nbsp;*&nbsp;&nbsp;新优惠券发放后,上个周期优惠券即失效</span>
            </el-form-item>
            <br>
            <el-form-item label=" " class="create">
                <el-select v-model="date">
                    <el-option v-if="couponPeriod=='周'" v-for="item in weekOptions" :key="item.value" :label="item.label" :value="item.label">
                    </el-option>
                    <el-option v-if="couponPeriod=='月'" v-for="item in monthOptions" :key="item.value" :label="item.label" :value="item.label">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-time-picker
                v-model="time"
                value-format="HH:mm:ss"
                placeholder="任意时间点">
            </el-time-picker>
            <br>
            <!-- <el-form-item label="发放数量" required>
                <el-input type="text" v-model="data.pushNum" placeholder="请输入"></el-input>
            </el-form-item>
            <br> -->
            <el-form-item label="单ID发放数量" required>
                <el-input-number v-model="data.sameGetNum" :min="1" @change="selectSameNum()" @blur="selectSameNum()"></el-input-number>
                <!-- <el-input type="text" v-model="data.sameGetNum" placeholder="请输入"></el-input> -->
                预计发放数量：{{coupon}}
            </el-form-item>
            <br>
            <el-form-item label="适用门店" required class="create">
                <el-select v-model="data.storeIds" placeholder="请选择" multiple @change="storechange">
                    <el-option v-for="item in stores" :key="item.storeCode" :label="item.storeName" :value="item.storeCode">
                    </el-option>
                </el-select>
                
            </el-form-item>
            <br>
            <el-form-item label="优惠券预览 : " class="create" v-if="!data.couponName==''">
            </el-form-item>
            <div class="coupon" v-if="!data.couponName==''">
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
                                    <el-button type="primary" plain round size="mini">{{btnName}}</el-button>
                                    <p>{{data.typeName}}单品优惠</p>
                                    <!-- <p class="greyy small">有效期至:</p> -->
                                </div>
                        </el-col>
                    </el-row>
                </div>
                <div class="coupon-bottom small">
                    <div>
                        <p><span>{{data.typeName}}单品优惠</span>,购买<span>{{group.groupName}}</span><span>{{data.typeName}}</span>商品时使用</p>
                        <p>任意单品实付金额满<span>{{data.fullNum}}</span>元减<span>{{data.subNum}}</span>元, 掉货即选取最优惠的券进行结算</p>
                        <p>适用门店 : <span v-for="(item,key) in selectStore" :key="key">{{item}}&nbsp;<span v-if="key < selectStore.length-1">、</span>&nbsp;</span></p>
                    </div>
                </div>
            </div>
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
            <br>
            <!-- <el-form-item label="有效期限" required>
                
            </el-form-item>
            <br> -->
            <!-- <el-form-item label="发券原因">
                <el-input type="textarea" v-model="data.applyInfo" placeholder="非必填，用于提交审批时的说明描述" :rows="4"></el-input>
            </el-form-item> -->
            <br>
        </el-form>
        <div class="center">
            <el-button type="primary" @click="submit">发放企业券</el-button>
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
            couponPeriod:"",
            date:"",
            time:"",
            group:"",
            coupon:0,
            tabs:[],
            stores:[],
            selectStore:[],
            btnName:"",
            periodOptions:[{
                    value: '1',
                    label: '周'
                    }, {
                    value: '2',
                    label: '月'
                    }],
            weekOptions:[{
                    value: '1',
                    label: '周一'
                    }, {
                    value: '2',
                    label: '周二'
                    },{
                    value: '3',
                    label: '周三'
                    }, {
                    value: '4',
                    label: '周四'
                    },{
                    value: '5',
                    label: '周五'
                    }, {
                    value: '6',
                    label: '周六'
                    },{
                    value: '7',
                    label: '周日'
                    }],
            monthOptions:[{value:'1',label:'1'},{value:'2',label:'2'},{value:'3',label:'3'},{value:'4',label:'4'},{value:'5',label:'5'},{value:'6',label:'6'},{value:'7',label:'7'},{value:'8',label:'8'},{value:'9',label:'9'},{value:'10',label:'10'},{value:'11',label:'11'},{value:'12',label:'12'},{value:'13',label:'13'},{value:'14',label:'14'},{value:'15',label:'15'},{value:'16',label:'16'},{value:'17',label:'17'},{value:'18',label:'18'},{value:'19',label:'19'},{value:'20',label:'20'},{value:'21',label:'21'},{value:'22',label:'22'},{value:'23',label:'23'},{value:'24',label:'24'},{value:'25',label:'25'},{value:'26',label:'26'},{value:'27',label:'27'},{value:'28',label:'28'},{value:'29',label:'29'},{value:'30',label:'30'},{value:'31',label:'31'}],
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
        this.api({//根据路径上的企业ID查询信息
                    url: "/coupon/showOneGroup",
                    method: "post",
                    data: {groupId:this.$route.params.groupId,}
                }).then(data => {
                    this.group=data
                    
                });
        this.api({//获取优惠券预览那里的名字
                    url: "/coupon/showOperatorNickName",
                    method: "post",
                    data: {}
                }).then(data => {
                    this.btnName=data
                    
                });    
    },
    methods: {
        selectSameNum(){//单ID发放数量改变
        if(!this.data.sameGetNum==""){
            this.coupon=this.data.sameGetNum*this.group.groupUserNum
        }
            
        },
        storechange(){
            // console.log(this.data.storeIds)
            this.selectStore=[]
            for(var i in this.data.storeIds){
                for(var key in this.stores){
                if(this.data.storeIds[i]==this.stores[key].storeCode){
                    this.selectStore.push(this.stores[key].storeName)
                }
                }
            }
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
                    // this.coupon = data
                });
                // }
            }else{

            }
        },
        selectCouponType(val){
            console.log(val,this.tabs)
            for(var i in this.tabs){
                if(val==this.tabs[i].specialCode){
                    this.data.typeName=this.tabs[i].typeName
                }
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
            // 发放周期
            if(this.couponPeriod=="月"){
                this.data.cycleTime="M"
            }else{this.data.cycleTime="W"}
            this.data.mindleTime=this.date
            this.data.litterTime=this.time
            console.log(this.data)
            // 发放周期
            if (!this.data.couponName) {
                this.$message({
                    type: "warning",
                    message: "请输入优惠券名称"
                });
                return;
            }
            if(this.data.couponRule == 'M'){
                if (!this.data.fullNum || !this.data.subNum) {
                    this.$message({
                        type: "warning",
                        message: "请输入满减券详细信息"
                    });
                    return;
                }
            }else if(this.data.couponRule == 'Z'){
                if (!this.data.isDiscount || !this.data.discountRate) {
                    this.$message({
                        type: "warning",
                        message: "请输入折扣券详细信息"
                    });
                    return;
                }
            }else if(this.data.couponRule == 'R'){
                 if (!this.data.isRandom || !this.data.randomNum) {
                
                    this.$message({
                        type: "warning",
                        message: "请输入随机减券详细信息"
                    });
                    return;
                }
            }else if(this.data.couponRule == 'D'){
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
            if (this.date=="") {
                this.$message({
                    type: "warning",
                    message: "请选择发放周期"
                });
                return;
            }
            if (this.time=="") {
                this.$message({
                    type: "warning",
                    message: "请选择发放周期"
                });
                return;
            }
            if (this.couponPeriod=="") {
                this.$message({
                    type: "warning",
                    message: "请选择发放周期"
                });
                return;
            }
            if (!this.data.sameGetNum) {
                this.$message({
                    type: "warning",
                    message: "请输入人次上限"
                });
                return;
            }
            if (this.data.storeIds.length == 0) {
                this.$message({
                    type: "warning",
                    message: "请选择适用门店"
                });
                return;
            }
            this.data.username = this.userName
            this.data.groupId=this.group.groupId
            this.data.groupName=this.group.groupName
            console.log(this.data)
            this.$confirm('是否发放该企业券?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                        this.api({
                            url: "/coupon/createdGroupCoupon",
                            method: "post",
                            data: this.data
                        }).then(data => {
                            this.$router.replace({ path: "/system/company"});
                        });
                }).catch(() => {
                        // 取消  
                });
            
        }
    },
    computed: {
        ...mapGetters(["userName"])
    }
};
</script>