<style lang="scss" scoped>
.fix-full-img-box{
    position: relative;
    width: 40vw;
    height: 80vh;
}
.fix-full-img{
    margin: auto;position: absolute;
    left: 0;right: 0;top: 0;bottom: 0;
    width: 20vw;
}
.upload-img-box{
    width: 80%;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
}
.upload-img{
    width: 100%;
}
    .title{font-size: 20px;margin-bottom: 30px}
    .top,.bottom{padding: 30px 70px}
    .footer{text-align: center;margin-top:50px}
    .bottom{border-top: 1px solid #e6e6e6}
    .top div{margin-top: 20px;}
    .edit{color: #409EFF;cursor: pointer;margin-left: 10px;float: right}
    .center{text-align: center}
    .el-form-item{width:50%;margin: 0 auto}
    .memberbox{border:1px solid #97A8BE;width: 100%;min-height: 400px;padding: 3%}
    .member-right{width: 100%;min-height: 400px;padding: 3%;position: relative}
    .right-bottom{position: absolute;bottom: 0;width: 100%}
    .right-bottom .el-button{margin-top: 5px}
    .el-tag{margin:2% 3%}
    .nomargin{margin: 0!important}
    .blue {
    color: #66b1ff;
    cursor: pointer;
    padding: 10px 6px;
    }
    img{width:80%}
</style>

<template>
    <div>
        <div class="top">
            <p class="title">基本信息</p>
            <el-row>
                <el-col :span="6">
                    <div>
                    <span>分润方主体类型: &nbsp;</span>
                    <span>{{data.authType}}</span>
                    </div>
                    <div v-if="data.autype!=='person'">
                        <span>企业名称: &nbsp;&nbsp;</span>
                        <span>{{data.details.companyName}}</span>
                    </div>
                    <div v-if="data.autype!=='person'">
                        <span>营业执照编号: &nbsp;</span>
                        <span>{{data.details.companyLicence}}</span>
                    </div>
                    <div v-if="data.autype!=='person'">
                        <span>企业法人姓名: &nbsp;</span>
                        <span>{{data.details.legalName}}</span>
                    </div>
                    <div v-if="data.autype=='person'">
                        <span>姓名: &nbsp;</span>
                        <span>{{data.details.personName}}</span>
                    </div>
                    <div v-if="data.autype!=='person'">
                        <span>企业法人身份证编号: &nbsp;</span>
                        <span>{{data.details.legalIdCard.substr(0,4)}}****{{data.details.legalIdCard.substr(data.details.legalIdCard.length - 4)}}</span>
                    </div>
                    <div v-if="data.autype=='person'">
                        <span>身份证编号: &nbsp;</span>
                        <span>{{data.details.idCard.substr(0,4)}}****{{data.details.idCard.substr(data.details.idCard.length - 4)}}</span>
                    </div>
                    <div>
                        <span>创建时间: &nbsp;</span>
                        <span>{{data.gmtExamine}}</span>
                    </div>
                </el-col>
                <el-col :span="18" class="nomargin">
                    <el-row>
                        <el-col :span="6" class="nomargin" v-if="data.autype!=='person'">
                            <p>*营业执照：</p>
                            <el-popover
                                        placement="top-start"
                                        trigger="hover">
                                        <div class="fix-full-img-box">
                                            <img :src="data.details.companyLicencePath" alt="" class="fix-full-img">
                                        </div>
                                        <div class="upload-img-box" slot="reference">
                                            <img :src="data.details.companyLicencePath" alt="" class="upload-img">
                                        </div>
                            </el-popover>
                            <!-- <img :src="data.details.companyLicencePath" alt=""> -->
                        </el-col>
                        <el-col :span="6" class="nomargin" v-if="data.autype=='person'">
                            <p>*身份证正面：</p>
                            <el-popover
                                        placement="top-start"
                                        trigger="hover">
                                        <div class="fix-full-img-box">
                                            <img :src="data.details.idCardPath1" alt="" class="fix-full-img">
                                        </div>
                                        <div class="upload-img-box" slot="reference">
                                            <img :src="data.details.idCardPath1" alt="" class="upload-img">
                                        </div>
                            </el-popover>
                            <!-- <img :src="data.details.idCardPath1" alt=""> -->
                        </el-col>
                        <el-col :span="6" class="nomargin" v-if="data.autype=='person'">
                            <p>*身份证反面：</p>
                            <el-popover
                                        placement="top-start"
                                        trigger="hover">
                                        <div class="fix-full-img-box">
                                            <img :src="data.details.idCardPath2" alt="" class="fix-full-img">
                                        </div>
                                        <div class="upload-img-box" slot="reference">
                                            <img :src="data.details.idCardPath2" alt="" class="upload-img">
                                        </div>
                            </el-popover>
                            <!-- <img :src="data.details.idCardPath2" alt=""> -->
                        </el-col>
                        <el-col :span="6" class="nomargin" v-if="data.autype!=='person'">
                            <p>*企业法人身份证正面：</p>
                            <el-popover
                                        placement="top-start"
                                        trigger="hover">
                                        <div class="fix-full-img-box">
                                            <img :src="data.details.legalIdCardPath1" alt="" class="fix-full-img">
                                        </div>
                                        <div class="upload-img-box" slot="reference">
                                            <img :src="data.details.legalIdCardPath1" alt="" class="upload-img">
                                        </div>
                            </el-popover>
                            <!-- <img :src="data.details.legalIdCardPath1" alt=""> -->
                        </el-col>
                        <el-col :span="6" class="nomargin" v-if="data.autype!=='person'">
                            <p>*企业法人身份证反面：</p>
                            <el-popover
                                        placement="top-start"
                                        trigger="hover">
                                        <div class="fix-full-img-box">
                                            <img :src="data.details.legalIdCardPath2" alt="" class="fix-full-img">
                                        </div>
                                        <div class="upload-img-box" slot="reference">
                                            <img :src="data.details.legalIdCardPath2" alt="" class="upload-img">
                                        </div>
                            </el-popover>
                            <!-- <img :src="data.details.legalIdCardPath2" alt=""> -->
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
        <div class="top" v-if="data.settleType=='alipay'">
            <p class="title">结算账户信息</p>
            
            <div  v-if="data.autype!=='person'">
            <span>企业支付宝名称: &nbsp;</span>
            <span>{{data.alipayCheckName}}</span>
            </div>
            <div  v-if="data.autype=='person'">
            <span>支付宝名称: &nbsp;</span>
            <span>{{data.alipayCheckName}}</span>
            </div>
            <div v-if="data.autype=='person'">
            <span>支付宝帐号: &nbsp;</span>
            <span>{{data.alipayLoginid.substr(0,3)}}****{{data.alipayLoginid.substr(data.alipayLoginid.length - 3)}}</span>
            </div>
            <div v-if="data.autype!=='person'">
            <span>企业支付宝帐号: &nbsp;</span>
            <span>{{data.alipayLoginid.substr(0,3)}}****{{data.alipayLoginid.substr(data.alipayLoginid.length - 3)}}</span>
            </div>
        </div>
        <div class="top">
            <p class="title">分润详情</p>
            <div>
                <el-table :data="tableData"
                  style="width: 100%"
                  v-loading.body="listLoading"
                  element-loading-text="拼命加载中">
                    <el-table-column
                            prop="authType"
                            label="分润点位"
                            align="center"
                            >
                    </el-table-column>
                    <el-table-column 
                            prop="distributName"
                            label="分润比例"
                            align="center">
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <div class="top" v-if="data.settleType=='bank'">
            <p class="title">开户详情</p>
            <div>
            <span>开户银行: &nbsp;</span>
            <span>{{data.bankCode}}</span>
            </div>
            <div>
            <span>银行卡号: &nbsp;</span>
            <span>{{data.bankNo}}</span>
            </div>
            <div>
            <span>银行校验名称: &nbsp;</span>
            <span>{{data.bankChenckName}}</span>
            </div>
        </div>
        <el-row class="footer">
            <el-button size="mini" round @click="back()">返回列表</el-button>
        </el-row>
    </div>
    
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            data:{details:{companyName:''}},
            formLabelWidth:'120px',
            editPhoneVisible:false,
            editMoneyVisible:false,
        };
    },
    
    mounted() {
        this.getList()
    },
    methods: {
        getList(){
            this.api({
                    url: "/cooperation/getCooperationInfo",
                    method: "post",
                    data: {dmId:this.$route.params.dmId}
                }).then(data => {
                    this.data=data
                });
        },
        back(){
            this.$router.push({
                    path:"/system/distribution"
                });
        },

    },
    computed: {
        ...mapGetters(["userName"])
    }
};
</script>