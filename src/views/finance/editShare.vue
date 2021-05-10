<style lang="scss" scoped>
    #createShare{
        color: #333;
        width: 100%;padding: 20px;background:rgba(245,246,248,1);
        .container{padding: 20px;background:#fff;
            .title{
                height:36px;
                line-height:36px;
                background:#e9f5ff;
                font-size:14px;
                color:#409EFF;
                padding-left: 20px;
                img{width: 20px;height: 20px;margin-right: 5px;}
                span{
                    font-size:14px;
                    font-weight:400;
                    color:rgba(231,97,128,1);
                }
            }
            .box{
                padding: 20px;
                span{font-size:14px;
                    font-weight:400;
                    color:rgba(231,97,128,1);}
                .line{
                    font-size: 14px;
                    margin-bottom: 20px;
                    .label{width: 130px;text-align: right;}
                    .info{.tip{color:rgba(153,153,153,1);margin-left: 0;margin-top:15px};.num{width: 260px;}.num1{width: 190px;}}
                    .tip{color:#999999;margin-left: 10px;}
                    .tip1{margin-left: 10px;width:112px;height:32px;font-size:14px;background:rgba(0,118,169,1);border-radius:4px;color: #fff;line-height: 32px;text-align: center;cursor: pointer;}
                    .time{width: 160px;position: relative;}
                    .inputIcon{position: absolute;top: 50%;transform: translateY(-50%);right: 15px;width: 20px;height: 20px;}
                    .radioIcon{width: 12px;height: 12px;margin-right: 10px;cursor: pointer;}
                    .selct{margin-right: 58px;}
                }
                }
                .btn,.btn1{width: 200px;height: 40px;background:#409EFF;border-radius:4px;font-size:14px;color:rgba(255,255,255,1);line-height:40px;text-align: center;margin-left:50px;margin-top: 50px;margin-bottom: 30px;cursor: pointer;}
                .btn1{background: #fff;color: #409EFF;border: 1px solid #409EFF;}
        }
    }
</style>
<style lang="scss" >
// table样式
.el-table thead th>.cell{font-weight: 400;color:#333;line-height: 14px;}
.el-table .cell{font-weight: 400;color:#333;line-height: 14px;}
.el-table thead th{padding: 18px 0;}
.el-table td{padding: 20px 0;}
// table样式
// 输入框样式
.el-date-editor .el-input__suffix{border:0;}
.el-input__suffix{border-left: 1px solid #cdcdcd;}
.el-select{width: 100%;}
.el-input--prefix .el-input__inner{padding: 15px;}
.el-input__prefix{display: none;}
.el-date-editor.el-input{width: 100%;}
.el-radio-button__inner{border-color: #cdcdcd;}
.el-select:hover .el-input__inner,.el-input__inner{border-color: rgba(205,205,205,1);height: 32px;line-height: 32px;}
.el-input__icon.el-icon-arrow-up{width: 24px;line-height: 32px;}
.el-cascader,.el-input__icon{line-height: 32px;}
.el-cascader{width: 100%;}
.el-input__suffix-inner{padding-left: 5px;}
// 输入框样式
//图片上传框样式
.avatar-uploader .el-upload {
    width: 120px;
    height: 120px;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    .img{
        width: 120px;
        height: 120px;
        img{
            width: 100%;
        }
    }
    .reupload{
        width: 100px;
        height: 32px;
        line-height: 32px;
        color: #409EFF;
        border: 1px solid #409EFF;
        position: absolute;
        top: 0;
        right: -20px;
        border-radius: 4px;
    }
  }
  .avatar-uploader1 .el-upload {
    width: 145px;
    height: 100px;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    .img{
        width: 145px;
        height: 100px;
        img{
            width: 100%;
        }
    }
    .reupload{
        width: 100px;
        height: 32px;
        line-height: 32px;
        color: #409EFF;
        border: 1px solid #409EFF;
        position: absolute;
        top: 0;
        right: -20px;
        border-radius: 4px;
    }
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar {
    width: 120px!important;
    height: 120px!important;
    display: block;
  }
  .avatar1 {
    width: 145px!important;
    height: 100px!important;
    display: block;
  }
//图片上传框样式
.el-loading-mask{border-radius: 4px;}
</style>
<template>
    <div id="createShare">
        <div class="container">
            <div class="title flex-center-Y">
                基本信息
            </div>
            <div class="box">
                <div class="flex-center-Y line">
                    <div class="label"><span>*</span>账户类型：</div>
                    <div class="flex-center-Y" style="margin-right:50px;cursor:pointer" v-if="form.authType=='company'">
                        <!-- <img v-if="form.authType=='company'" class="radioIcon" src="../../assets/icons/select.png" alt="">
                        <img v-else class="radioIcon" src="../../assets/icons/no-select.png" alt=""> -->
                        企业账户
                    </div>
                    <div class="flex-center-Y" style="cursor:pointer" v-if="form.authType=='person'">
                        <!-- <img v-if="form.authType=='person'" class="radioIcon" src="../../assets/icons/select.png" alt="">
                        <img v-else class="radioIcon" src="../../assets/icons/no-select.png" alt=""> -->
                        个人账户
                    </div>
                </div>
                <div class="flex-center-Y line" v-if="form.authType=='company'">
                    <div class="label"><span>*</span>企业名称：</div>
                    <div class="info">
                        <div class="num">
                            <el-input placeholder="请输入企业名称，不超过20个字" :maxlength="20" v-model="form.companyName"></el-input>
                        </div>
                    </div>
                </div>
                <div class="flex-center-Y line" v-if="form.authType=='company'">
                    <div class="label"><span>*</span>营业执照号：</div>
                    <div class="info">
                        <div class="num">
                            <el-input placeholder="请输入营业执照编号" v-model="form.companyLicence"></el-input>
                        </div>
                    </div>
                </div>
                <div class="flex-center-S line" v-if="form.authType=='company'">
                    <div class="label" style="margin-top:10px"><span>*</span>营业执照：</div>
                    <div class="info">
                       <el-upload
                            class="avatar-uploader"
                            action=""
                            :http-request="upload1"
                            :show-file-list="false"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl1" :src="imageUrl1" class="avatar">
                            <div v-else class="img">
                                <img src="../../assets/icons/upload.png" alt="">
                            </div>
                        </el-upload>
                    </div>
                    <div class="tip" style="padding-top: 100px;">支持jpg/jpeg/png格式，图片小于1M</div>
                </div>
                <div class="flex-center-Y line" v-if="form.authType=='company'">
                    <div class="label"><span>*</span>企业法人姓名：</div>
                    <div class="info">
                        <div class="num">
                            <el-input placeholder="请输入企业法人姓名，不超过10个字" :maxlength="10" v-model="form.legalName"></el-input>
                        </div>
                    </div>
                </div>
                <div class="flex-center-Y line" v-if="form.authType=='company'">
                    <div class="label"><span>*</span>法人身份证号：</div>
                    <div class="info">
                        <div class="num">
                            <el-input placeholder="请输入法人身份证号" v-model="form.legalIdCard" :maxlength="25"></el-input>
                        </div>
                    </div>
                </div>
                <div class="flex-center-S line" v-if="form.authType=='company'">
                    <div class="label" style="margin-top:10px"><span>*</span>法人身份证正面：</div>
                    <div class="info">
                       <el-upload
                            class="avatar-uploader1"
                            action=""
                            :http-request="upload2"
                            :show-file-list="false"
                            :before-upload="beforeAvatarUpload">
                            <div class="reupload">
                                重新上传
                            </div>
                            <img v-if="imageUrl2" :src="imageUrl2" class="avatar1">
                            <div v-else class="img">
                                <img src="../../assets/icons/upload-1.png" alt="">
                            </div>
                        </el-upload>
                    </div>
                    <div class="tip" style="padding-top: 80px;">支持jpg/jpeg/png格式，图片小于1M</div>
                </div>
                <div class="flex-center-S line" v-if="form.authType=='company'">
                    <div class="label" style="margin-top:10px"><span>*</span>法人身份证反面：</div>
                    <div class="info">
                       <el-upload
                            class="avatar-uploader1"
                            action=""
                            :http-request="upload3"
                            :show-file-list="false"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl3" :src="imageUrl3" class="avatar1">
                            <div v-else class="img">
                                <img src="../../assets/icons/upload-2.png" alt="">
                            </div>
                        </el-upload>
                    </div>
                    <div class="tip" style="padding-top: 80px;">支持jpg/jpeg/png格式，图片小于1M</div>
                </div>
                <div class="flex-center-Y line" v-if="form.authType=='person'">
                    <div class="label"><span>*</span>姓名：</div>
                    <div class="info">
                        <div class="num">
                            <el-input placeholder="请输入姓名，不超过10个字" :maxlength="10" v-model="form.name"></el-input>
                        </div>
                    </div>
                </div>
                <div class="flex-center-Y line" v-if="form.authType=='person'">
                    <div class="label"><span>*</span>身份证号：</div>
                    <div class="info">
                        <div class="num">
                            <el-input placeholder="请输入身份证号" v-model="form.idCard" :maxlength="25"></el-input>
                        </div>
                    </div>
                </div>
                <div class="flex-center-S line" v-if="form.authType=='person'">
                    <div class="label" style="margin-top:10px"><span>*</span>身份证正面：</div>
                    <div class="info">
                       <el-upload
                            class="avatar-uploader1"
                            action=""
                            :http-request="upload2"
                            :show-file-list="false"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl2" :src="imageUrl2" class="avatar1">
                            <div v-else class="img">
                                <img src="../../assets/icons/upload-1.png" alt="">
                            </div>
                        </el-upload>
                    </div>
                    <div class="tip" style="padding-top: 80px;">支持jpg/jpeg/png格式，图片小于1M</div>
                </div>
                <div class="flex-center-S line" v-if="form.authType=='person'">
                    <div class="label" style="margin-top:10px"><span>*</span>身份证反面：</div>
                    <div class="info">
                       <el-upload
                            class="avatar-uploader1"
                            action=""
                            :http-request="upload3"
                            :show-file-list="false"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl3" :src="imageUrl3" class="avatar1">
                            <div v-else class="img">
                                <img src="../../assets/icons/upload-2.png" alt="">
                            </div>
                        </el-upload>
                    </div>
                    <div class="tip" style="padding-top: 80px;">支持jpg/jpeg/png格式，图片小于1M</div>
                </div>
            </div>
            <div class="title flex-center-Y">
                结算账户信息
            </div>
            <div class="box">
                <!-- <div class="flex-center-Y line">
                    <div class="label"><span>*</span>账户类型：</div>
                    <div class="flex-center-Y" style="margin-right:50px;cursor:pointer" @click="form.isAlipay=1">
                        <img v-if="form.isAlipay==1" class="radioIcon" src="../../assets/icons/select.png" alt="">
                        <img v-else class="radioIcon" src="../../assets/icons/no-select.png" alt="">
                        支付宝
                    </div>
                    <div class="flex-center-Y" style="cursor:pointer" @click="form.isAlipay=0">
                        <img v-if="form.isAlipay==0" class="radioIcon" src="../../assets/icons/select.png" alt="">
                        <img v-else class="radioIcon" src="../../assets/icons/no-select.png" alt="">
                        微信
                    </div>
                </div> -->
                <div class="flex-center-Y line" v-if="form.authType=='company' && form.isAlipay==1">
                    <div class="label"><span>*</span>企业支付宝账号：</div>
                    <div class="info">
                        <div class="num">
                            <el-input placeholder="请输入企业支付宝账号" v-model="form.alipayLoginid"></el-input>
                        </div>
                    </div>
                </div>
                <div class="flex-center-Y line" v-if="form.authType=='company' && form.isAlipay==1">
                    <div class="label"><span>*</span>企业支付宝名称：</div>
                    <div class="info">
                        <div class="num">
                            <el-input placeholder="请输入企业支付宝名称" v-model="form.alipayCheckName"></el-input>
                        </div>
                    </div>
                </div>
                <div class="flex-center-Y line" v-if="form.authType=='company' && form.isAlipay==0">
                    <div class="label"><span>*</span>企业微信账号：</div>
                    <div class="info">
                        <div class="num">
                            <el-input placeholder="请输入企业微信账号" v-model="form.weixinCode"></el-input>
                        </div>
                    </div>
                </div>
                <div class="flex-center-Y line" v-if="form.authType=='person' && form.isAlipay==1">
                    <div class="label"><span>*</span>个人支付宝账号：</div>
                    <div class="info">
                        <div class="num">
                            <el-input placeholder="请输入个人支付宝账号" v-model="form.alipayLoginid"></el-input>
                        </div>
                    </div>
                </div>
                <div class="flex-center-Y line" v-if="form.authType=='person' && form.isAlipay==1">
                    <div class="label"><span>*</span>个人支付宝名称：</div>
                    <div class="info">
                        <div class="num">
                            <el-input placeholder="请输入个人支付宝名称" v-model="form.alipayCheckName"></el-input>
                        </div>
                    </div>
                </div>
                <div class="flex-center-Y line" v-if="form.authType=='person' && form.isAlipay==0">
                    <div class="label"><span>*</span>个人微信账号：</div>
                    <div class="info">
                        <div class="num">
                            <el-input placeholder="请输入个人微信账号" v-model="form.weixinCode"></el-input>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-center-Y">
                <div class="btn1" @click="$router.go(-1)">取消</div>
                <div class="btn" v-if="!loading" @click="commit">提交</div>
                <div class="btn" v-else><i class="el-icon-loading"></i></div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { regionData, CodeToText } from "element-china-area-data";
export default {
    data() {
        return {
            form:{authType:'company',companyName:"",companyLicence:"",companyLicencePath:"",legalName:"",legalIdCard:"",legalIdCardPath1:"",legalIdCardPath2:"",isAlipay:1,alipayLoginid:"",alipayCheckName:"",idCard:"",name:""},
            imageUrl1:"",
            imageUrl2:"",
            imageUrl3:"",
            loading:false

        };
    },
    created() {
        this.getData()
    },
    mounted(){
    },
    methods: {
        getData(){
            this.api({
                url: "/distribute/distributeManInfo",
                method: "post",
                data: {
                    distributeId:this.$route.params.distributeId
                }
            })
                .then(data => {
                    this.form=data
                    this.form.isAlipay=1
                    if(this.form.authType=='company'){
                    this.imageUrl1=this.form.companyLicencePath
                    this.imageUrl2=this.form.legalIdCardPath1
                    this.imageUrl3=this.form.legalIdCardPath2
                    }else if(this.form.authType=='person'){
                        this.imageUrl2=this.form.idCardPath1
                        this.imageUrl3=this.form.idCardPath2
                        this.form.legalIdCardPath1=this.form.idCardPath1
                        this.form.legalIdCardPath2=this.form.idCardPath2
                    }
                })
                .catch(e => {});
        },
        commit(){
            if(this.form.authType=='company'){
                if(!this.form.companyName){
                    this.$message({
                        type: 'warning',
                        message: '请输入企业名称'
                    });
                    return;
                }
                if(!this.form.companyLicence){
                    this.$message({
                        type: 'warning',
                        message: '请输入营业执照编号'
                    });
                    return;
                }
                if(!this.form.companyLicencePath){
                    this.$message({
                        type: 'warning',
                        message: '请上传营业执照'
                    });
                    return;
                }
                if(!this.form.legalName){
                    this.$message({
                        type: 'warning',
                        message: '请输入企业法人姓名'
                    });
                    return;
                }
                if (/[\u4E00-\u9FA5]/i.test(this.form.legalIdCard)) {
                        this.$message({
                            type: 'warning',
                            message: '企业法人身份证号填写有误,请核对后再提交'
                        });
                        return;
                    }
                if(!this.form.legalIdCard){
                    this.$message({
                        type: 'warning',
                        message: '请输入企业法人身份证号'
                    });
                    return;
                }
                if(!this.form.legalIdCardPath1){
                    this.$message({
                        type: 'warning',
                        message: '请上传法人身份证正面照'
                    });
                    return;
                }
                if(!this.form.legalIdCardPath2){
                    this.$message({
                        type: 'warning',
                        message: '请上传法人身份证背面照'
                    });
                    return;
                }
                if(this.form.isAlipay==1){
                    if (/[\u4E00-\u9FA5]/i.test(this.form.alipayLoginid)) {
                        this.$message({
                            type: 'warning',
                            message: '企业支付宝账号填写有误,请核对后再提交'
                        });
                        return;
                    }
                    if(!this.form.alipayLoginid){
                        this.$message({
                            type: 'warning',
                            message: '请输入企业支付宝账号'
                        });
                        return;
                    }
                    if(!this.form.alipayCheckName){
                        this.$message({
                            type: 'warning',
                            message: '请输入企业支付宝名称'
                        });
                        return;
                    }
                }else{
                    if(!this.form.weixinCode){
                        this.$message({
                            type: 'warning',
                            message: '请输入企业微信账号'
                        });
                        return;
                    }
                }
            }else{
                if(!this.form.name){
                    this.$message({
                        type: 'warning',
                        message: '请输入姓名'
                    });
                    return;
                }
                if (/[\u4E00-\u9FA5]/i.test(this.form.idCard)) {
                        this.$message({
                            type: 'warning',
                            message: '身份证号填写有误,请核对后再提交'
                        });
                        return;
                    }
                if(!this.form.idCard){
                    this.$message({
                        type: 'warning',
                        message: '请输入身份证号'
                    });
                    return;
                }
                if(!this.form.legalIdCardPath1){
                    this.$message({
                        type: 'warning',
                        message: '请上传身份证正面照'
                    });
                    return;
                }
                if(!this.form.legalIdCardPath2){
                    this.$message({
                        type: 'warning',
                        message: '请上传身份证反面照'
                    });
                    return;
                }
                if(this.form.isAlipay==1){
                    if (/[\u4E00-\u9FA5]/i.test(this.form.alipayLoginid)) {
                        this.$message({
                            type: 'warning',
                            message: '个人支付宝账号填写有误,请核对后再提交'
                        });
                        return;
                    }
                    if(!this.form.alipayLoginid){
                        this.$message({
                            type: 'warning',
                            message: '请输入个人支付宝账号'
                        });
                        return;
                    }
                    if(!this.form.alipayCheckName){
                        this.$message({
                            type: 'warning',
                            message: '请输入个人支付宝名称'
                        });
                        return;
                    }
                }else{
                    if(!this.form.weixinCode){
                        this.$message({
                            type: 'warning',
                            message: '请输入个人微信账号'
                        });
                        return;
                    }
                }
            }
            
            this.loading=true
            console.log(this.form)
            let commitData
            if (this.form.authType=='company') {
                commitData={
                    distributeId:this.$route.params.distributeId,
                    authType: this.form.authType,
                    companyName:this.form.companyName,
                    companyLicence:this.form.companyLicence,
                    companyLicencePath:this.form.companyLicencePath,
                    legalName:this.form.legalName,
                    legalIdCard:this.form.legalIdCard,
                    legalIdCardPath1:this.form.legalIdCardPath1,
                    legalIdCardPath2:this.form.legalIdCardPath2,
                    alipayLoginid:this.form.alipayLoginid,
                    alipayCheckName:this.form.alipayCheckName
                }
            }else{
                commitData={
                    distributeId:this.$route.params.distributeId,
                    authType: this.form.authType,
                    name:this.form.name,
                    idCard:this.form.idCard,
                    idCardPath1:this.form.legalIdCardPath1,
                    idCardPath2:this.form.legalIdCardPath2,
                    alipayLoginid:this.form.alipayLoginid,
                    alipayCheckName:this.form.alipayCheckName
                }
            }
            this.api({
                url: "/distribute/distributeManUpdate",
                method: "post",
                data: commitData
            })
                .then(data => {
                    this.loading=false
                    this.$message({
                        type: 'success',
                        message: '修改成功!'
                    });
                    this.$router.go(-1)
                })
                .catch(e => {this.loading=false});
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/png' || file.type === 'image/jpg'||file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 1;

            if (!isJPG) {
            this.$message.error('仅支持jpg/jpeg/png格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 1MB!');
            }
            return isJPG && isLt2M;
        },
        upload1(content) {//营业执照
            var formData = new FormData();
            formData.append("file", content.file);
            this.api({
                url: "/uploadfile/upload",
                method: "post",
                data: formData
            })
                .then(data => {
                    this.imageUrl1=data.filePath
                    this.form.companyLicencePath=data.tempPath
                })
                .catch(e => {});
        },
        upload2(content) {//身份证正面
            var formData = new FormData();
            formData.append("file", content.file);
            this.api({
                url: "/uploadfile/upload",
                method: "post",
                data: formData
            })
                .then(data => {
                    this.imageUrl2=data.filePath
                    this.form.legalIdCardPath1=data.tempPath
                })
                .catch(e => {});
        },
        upload3(content) {//身份证反面
            var formData = new FormData();
            formData.append("file", content.file);
            this.api({
                url: "/uploadfile/upload",
                method: "post",
                data: formData
            })
                .then(data => {
                    this.imageUrl3=data.filePath
                    this.form.legalIdCardPath2=data.tempPath
                })
                .catch(e => {});
        }
    },
    computed: {
        ...mapGetters(["userId", "userName"])
    }
};
</script>


