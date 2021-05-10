<style>
.title{
    font-size: 18px;
    font-weight: 600;
    text-align: left;
    margin: 20px 0;
}
.msg{
    line-height: 32px;
    margin: 20px 0;
}
.center{
    text-align: center;
    margin-top: 1vh;
}
.left{
    margin-top: 20px;
}
.name{
    font-weight: 600;
    text-align: left;
    display: inline-block;
    width: 100px;
}
.input-with-select{
    width: 50%;
}
/* .el-select .el-input {
  width: 120px;
} */
</style>

<template>
    <div class="app-container">
        <div class="title">订单信息</div>
        <el-card shadow="always" class="msg">
            <el-row :gutter="12">
                <el-col :span="12">
                    <span class="name">订单号：</span>
                    {{info.orderCode}}
                </el-col>
                <el-col :span="12">
                    <span class="name">创建时间：</span>
                    {{info.gmtCreated}}
                </el-col>
            </el-row>
            <el-row :gutter="12">
                <el-col :span="12">
                    <span class="name">支付状态：</span>
                    {{info.isPay}}
                </el-col>
                <el-col :span="12">
                    <span class="name">支付方式：</span>
                    {{info.payType}}
                </el-col>
            </el-row>
            <el-row :gutter="12">
                <el-col :span="12" >
                    <span class="name">消费门店：</span>
                    {{info.storeName}}
                </el-col>
                <el-col :span="12">
                    <span class="name">实付金额：</span>
                    ¥ {{info.payPrice}}
                </el-col>
            </el-row>
            <el-row :gutter="12">
                <el-col :span="12" >
                    <span class="name">手续费：</span>
                    ¥ {{info.platPrice}}
                </el-col>
                <el-col :span="12">
                    <span class="name">分润额：</span>
                    ¥ {{info.merchantPrice}}
                </el-col>
            </el-row>
        </el-card>
        <div class="title">订单明细</div>
        <el-table :data="tableData" stripe style="width: 100%" max-height="600" v-loading.body="listLoading" element-loading-text="拼命加载中">
            <el-table-column prop="skuName" label="sku名称" style="width: 18%" align="center"></el-table-column>
            <el-table-column prop="goodSkuName" label="商品信息" style="width: 18%" align="center"></el-table-column>
            <el-table-column prop="type" label="促销类型" style="width: 18%" align="center"></el-table-column>
            <el-table-column prop="payStatus" label="订单状态" style="width: 18%" align="center"></el-table-column>
             <el-table-column prop="discPrice" label="售价" style="width: 18%" align="center">
                <template slot-scope="scope">
                    ¥ {{scope.row.discPrice}}
                </template> 
            </el-table-column>
            <el-table-column prop="procurementPrice" label="成本价" style="width: 18%" align="center">
                <template slot-scope="scope">
                    ¥ {{scope.row.procurementPrice}}
                </template> 
            </el-table-column>
            <el-table-column prop="payprice" label="支付价格" style="width: 18%" align="center">
                <template slot-scope="scope">
                    ¥ {{scope.row.payprice}}
                </template> 
            </el-table-column>
            <el-table-column prop="couponTypeDesc" label="优惠券详情" style="width: 18%" align="center"></el-table-column>
            <el-table-column prop="flashKey" label="光ID支付" style="width: 18%" align="center"></el-table-column>
            <el-table-column prop="gmtCreated" label="闪光时间" style="width: 18%" align="center"></el-table-column>
        </el-table>
        <div class="center">
            <el-button round @click="$router.go(-1)">返回</el-button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            orderId:this.$route.params.orderId,
            listLoading:false,
            tableData:[],
            info:{},
        }
    },
    created(){
        this.getData()//获取详情
    },
    methods:{
        getData(){
            this.listLoading = true;
            this.api({
                url: "/finance/findDetailByOperator",
                method: "post",
                data: {
                    orderId:this.$route.params.orderId,
                }
            }).then(data => {
                this.info = data.orderDetails
                let lists = data.orderDetailsList
                // for(let i in lists){
                //     lists[i].recommendNum = lists[i].thresholdValue - lists[i].stockNum
                // }
                this.tableData = lists
                this.listLoading = false;
            })
        }
    }
    
}
</script>