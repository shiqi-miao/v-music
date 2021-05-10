<style lang="scss" scoped>
.fix-full-img-box{
    position: relative;
    width:50vw;
    height: 80vh;
}
.fix-full-img{
    margin: auto;position: absolute;
    left: 0;right: 0;top: 0;bottom: 0;
    width: 50vw;
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
    // .top div{margin-top: 20px;}
    .edit{color: #409EFF;cursor: pointer;margin-left: 10px;float: right}
    .center{text-align: center}
    .el-form-item{width:100%;margin: 0 auto}
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
                    <el-form class="coupon-form" label-position="left" label-width="120px" :inline="true">
                        <el-form-item label="分润方主体类型" required>
                            <el-select v-model="data.authType" placeholder="请选择" @change="typeChange()">
                                <el-option v-for="item in types" :key="item.id" :label="item.name" :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <br>
                        <el-form-item label="企业名称" required v-if="this.data.authType=='company'">
                            <el-input type="text" v-model="data.companyName" placeholder="请输入"></el-input>
                        </el-form-item>
                        <br v-if="this.data.authType=='company'">
                        <el-form-item label="营业执照编号" required v-if="this.data.authType=='company'">
                            <el-input type="text" v-model="data.companyLicence" placeholder="请输入"></el-input>
                        </el-form-item>
                        <br v-if="this.data.authType=='company'">
                        <el-form-item label="姓名" required v-if="this.data.authType=='person'">
                            <el-input type="text" v-model="data.name" placeholder="请输入"></el-input>
                        </el-form-item>
                        <br v-if="this.data.authType=='person'">
                        <el-form-item label="营业执照" required v-if="this.data.authType=='company'">
                            <el-upload
                                class="upload-demo"
                                action=""
                                multiple
                                :limit="1"
                                :on-exceed="handleExceed"
                                :before-upload="beforeAvatarUpload"
                                :http-request="upload1"
                                :file-list="fileList">
                                <el-button size="small">上传文件</el-button>
                                <span slot="tip" class="el-upload__tip">支持jpg/jpeg/png格式，小于1M</span>
                            </el-upload>
                        </el-form-item>
                        <br v-if="this.data.authType=='company'">
                        <el-form-item label="企业法人姓名" required v-if="this.data.authType=='company'">
                            <el-input type="text" v-model="data.legalName" placeholder="请输入"></el-input>
                        </el-form-item>
                        <br v-if="this.data.authType=='company'">
                        <el-form-item label="身份证编号" required v-if="this.data.authType=='person'">
                            <el-input type="text" v-model="data.idCard" placeholder="请输入" @blur="checkId()" onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;"></el-input>
                        </el-form-item>
                        <br v-if="this.data.authType=='person'">
                        <el-form-item label="法人身份证编号" required v-if="this.data.authType=='company'">
                            <el-input type="text" v-model="data.legalIdCard" placeholder="请输入" @blur="checkLegalId()" onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;"></el-input>
                        </el-form-item>
                        <br v-if="this.data.authType=='company'">
                        <el-form-item label="身份证正面" required v-if="this.data.authType=='person'">
                            <el-upload
                                class="upload-demo"
                                action=""
                                multiple
                                :limit="1"
                                :on-exceed="handleExceed"
                                :http-request="upload2"
                                :before-upload="beforeAvatarUpload"
                                :file-list="fileList">
                                <el-button size="small">上传文件</el-button>
                                <span slot="tip" class="el-upload__tip">支持jpg/jpeg/png格式，小于1M</span>
                            </el-upload>
                        </el-form-item>
                        <br v-if="this.data.authType=='person'">
                        <el-form-item label="身份证反面" required v-if="this.data.authType=='person'">
                            <el-upload
                                class="upload-demo"
                                action=""
                                multiple
                                :limit="1"
                                :on-exceed="handleExceed"
                                :http-request="upload3"
                                :before-upload="beforeAvatarUpload"
                                :file-list="fileList">
                                <el-button size="small">上传文件</el-button>
                                <span slot="tip" class="el-upload__tip">支持jpg/jpeg/png格式，小于1M</span>
                            </el-upload>
                        </el-form-item>
                        <br v-if="this.data.authType=='person'">
                        <el-form-item label="法人身份证正面" required v-if="this.data.authType=='company'">
                            <el-upload
                                class="upload-demo"
                                action=""
                                multiple
                                :limit="1"
                                :on-exceed="handleExceed"
                                :http-request="upload4"
                                :before-upload="beforeAvatarUpload"
                                :file-list="fileList">
                                <el-button size="small">上传文件</el-button>
                                <span slot="tip" class="el-upload__tip">支持jpg/jpeg/png格式，小于1M</span>
                            </el-upload>
                        </el-form-item>
                        <br v-if="this.data.authType=='company'">
                        <el-form-item label="法人身份证反面" required v-if="this.data.authType=='company'">
                            <el-upload
                                class="upload-demo"
                                action=""
                                multiple
                                :limit="1"
                                :on-exceed="handleExceed"
                                :http-request="upload5"
                                :before-upload="beforeAvatarUpload"
                                :file-list="fileList">
                                <el-button size="small">上传文件</el-button>
                                <span slot="tip" class="el-upload__tip">支持jpg/jpeg/png格式，小于1M</span>
                            </el-upload>
                        </el-form-item>
                        <br v-if="this.data.authType=='company'">
                    </el-form>
                </el-col>
                <el-col :span="18" class="nomargin">
                    <el-row>
                        <el-col :span="6" class="nomargin" v-if="this.data.authType!=='person'">
                            <p>*营业执照：</p>
                            <el-popover
                                        placement="top-start"
                                        trigger="hover">
                                        <div class="fix-full-img-box">
                                            <img :src="data.companyLicencePath" alt="" class="fix-full-img">
                                        </div>
                                        <div class="upload-img-box" slot="reference">
                                            <img :src="data.companyLicencePath" alt="" class="upload-img">
                                        </div>
                            </el-popover>
                            <!-- <img :src="data.companyLicencePath" alt=""> -->
                        </el-col>
                        <el-col :span="6" class="nomargin" v-if="this.data.authType=='person'">
                            <p>*身份证正面：</p>
                            <el-popover
                                        placement="top-start"
                                        trigger="hover">
                                        <div class="fix-full-img-box">
                                            <img :src="data.idCardPath1" alt="" class="fix-full-img">
                                        </div>
                                        <div class="upload-img-box" slot="reference">
                                            <img :src="data.idCardPath1" alt="" class="upload-img">
                                        </div>
                            </el-popover>
                            <!-- <img :src="data.idCardPath1" alt=""> -->
                        </el-col>
                        <el-col :span="6" class="nomargin" v-if="this.data.authType=='person'">
                            <p>*身份证反面：</p>
                            <el-popover
                                        placement="top-start"
                                        trigger="hover">
                                        <div class="fix-full-img-box">
                                            <img :src="data.idCardPath2" alt="" class="fix-full-img">
                                        </div>
                                        <div class="upload-img-box" slot="reference">
                                            <img :src="data.idCardPath2" alt="" class="upload-img">
                                        </div>
                            </el-popover>
                            <!-- <img :src="data.idCardPath2" alt=""> -->
                        </el-col>
                        <el-col :span="6" class="nomargin" v-if="this.data.authType!=='person'">
                            <p>*法人身份证正面：</p>
                            <el-popover
                                        placement="top-start"
                                        trigger="hover">
                                        <div class="fix-full-img-box">
                                            <img :src="data.legalIdCardPath1" alt="" class="fix-full-img">
                                        </div>
                                        <div class="upload-img-box" slot="reference">
                                            <img :src="data.legalIdCardPath1" alt="" class="upload-img">
                                        </div>
                            </el-popover>
                            <!-- <img :src="data.legalIdCardPath1" alt=""> -->
                        </el-col>
                        <el-col :span="6" class="nomargin" v-if="this.data.authType!=='person'">
                            <p>*法人身份证反面：</p>
                            <el-popover
                                        placement="top-start"
                                        trigger="hover">
                                        <div class="fix-full-img-box">
                                            <img :src="data.legalIdCardPath2" alt="" class="fix-full-img">
                                        </div>
                                        <div class="upload-img-box" slot="reference">
                                            <img :src="data.legalIdCardPath2" alt="" class="upload-img">
                                        </div>
                            </el-popover>
                            <!-- <img :src="data.legalIdCardPath2" alt=""> -->
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
        <div class="top">
            <p class="title">结算账户信息</p>
        <el-form class="coupon-form" label-position="left" label-width="120px" :inline="true">
            <el-form-item v-if="this.data.authType!=='person'" label="企业支付宝账号" required>
                <el-input type="text" v-model="data.alipayLoginid" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item v-if="this.data.authType=='person'" label="支付宝账号" required>
                <el-input type="text" v-model="data.alipayLoginid" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item v-if="this.data.authType!=='person'" label="企业支付宝名称" required>
                <el-input type="text" v-model="data.alipayCheckName" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item v-if="this.data.authType=='person'" label="支付宝名称" required>
                <el-input type="text" v-model="data.alipayCheckName" placeholder="请输入"></el-input>
            </el-form-item>
        </el-form>
        </div>
        <el-row class="footer">
            <el-button size="mini" round @click="back()">返回</el-button>
            <el-button size="mini" type="primary" round @click="submit()">提交</el-button>
        </el-row>
    </div>
    
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            data:{
                companyLicencePath:"",
                idCardPath1:"",
                idCardPath2:"",
                legalIdCardPath1:"",
                legalIdCardPath2:""
                },
            fileList:[],
            types:[{id:'company',name:"企业"},{id:'person',name:"个人"}]
        };
    },
    
    created() {
    },
    methods: {
        // 上传图片
        handleExceed(){
            this.$message({
                    type: "warning",
                    message: "请先删除原先图片" 
                });
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/png' || file.type === 'image/jpg'||file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
            this.$message.error('仅支持jpg/jpeg/png格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 1MB!');
            }
            return isJPG && isLt2M;
        },
        upload1(content){
            var formData = new FormData();
            formData.append("file", content.file);
            this.api({
                url: "/uploadfile/upload",
                method: "post", 
                data:formData
            }).then(data => {
                this.data.companyLicencePath=data.filePath
            }).catch((e)=>{

            })
        },
        upload2(content){
            var formData = new FormData();
            formData.append("file", content.file);
            this.api({
                url: "/uploadfile/upload",
                method: "post", 
                data:formData
            }).then(data => {
                this.data.idCardPath1=data.filePath
            }).catch((e)=>{

            })
        },
        upload3(content){
            var formData = new FormData();
            formData.append("file", content.file);
            this.api({
                url: "/uploadfile/upload",
                method: "post", 
                data:formData
            }).then(data => {
                this.data.idCardPath2=data.filePath
            }).catch((e)=>{

            })
        },
        upload4(content){
            var formData = new FormData();
            formData.append("file", content.file);
            this.api({
                url: "/uploadfile/upload",
                method: "post", 
                data:formData
            }).then(data => {
                this.data.legalIdCardPath1=data.filePath
            }).catch((e)=>{

            })
        },
        upload5(content){
            var formData = new FormData();
            formData.append("file", content.file);
            this.api({
                url: "/uploadfile/upload",
                method: "post", 
                data:formData
            }).then(data => {
                this.data.legalIdCardPath2=data.filePath
            }).catch((e)=>{

            })
        },
        // 上传图片
        checkId(){
            this.api({
                    url: "/cooperation/identityCardVerification",
                    method: "post",
                    data: {idCard:this.data.idCard || "-"}
                }).then(data => {
                });
        },
        checkLegalId(){
            this.api({
                    url: "/cooperation/identityCardVerification",
                    method: "post",
                    data: {idCard:this.data.legalIdCard || "-"}
                }).then(data => {
                });
        },
        typeChange(){ 
        },
        back(){
            this.$router.push({
                    path:"/system/distribution"
                });
        },
        submit(){
            if(this.data.authType){
                if(this.data.authType=="person"){
                if(!this.data.name){
                    this.$message({
                    type: 'warning',
                    message: '请输入姓名!'
                });
                return;
                }
                if(!this.data.idCard){
                    this.$message({
                    type: 'warning',
                    message: '请输入身份证编号!'
                });
                return;
                }
                if(!this.data.idCardPath1){
                    this.$message({
                    type: 'warning',
                    message: '请上传身份证正面照!'
                });
                return;
                }
                if(!this.data.idCardPath2){
                    this.$message({
                    type: 'warning',
                    message: '请上传身份证反面照!'
                });
                return;
                }
                if(!this.data.alipayLoginid){
                    this.$message({
                    type: 'warning',
                    message: '请输入支付宝账号!'
                });
                return;
                }
                if(!this.data.alipayCheckName){
                    this.$message({
                    type: 'warning',
                    message: '请输入支付宝名称!'
                });
                return;
                }
                this.api({
                    url: "/cooperation/cooperationAdd",
                    method: "post",
                    data: this.data
                }).then(data => {
                    this.$message({
                    type: 'success',
                    message: '创建成功!'
                });
                this.$router.push({
                    path:"/system/distribution"
                });
                });
            }else{
                if(!this.data.companyName){
                    this.$message({
                    type: 'warning',
                    message: '请输入企业名称!'
                });
                return;
                }
                if(!this.data.companyLicence){
                    this.$message({
                    type: 'warning',
                    message: '请输入营业执照编号!'
                });
                return;
                }
                if(!this.data.companyLicencePath){
                    this.$message({
                    type: 'warning',
                    message: '请上传营业执照!'
                });
                return;
                }
                if(!this.data.legalName){
                    this.$message({
                    type: 'warning',
                    message: '请输入企业法人姓名!'
                });
                return;
                }
                if(!this.data.legalIdCard){
                    this.$message({
                    type: 'warning',
                    message: '请输入法人身份证编号!'
                });
                return;
                }
                if(!this.data.legalIdCardPath1){
                    this.$message({
                    type: 'warning',
                    message: '请上传法人身份证正面照!'
                });
                return;
                }
                if(!this.data.legalIdCardPath2){
                    this.$message({
                    type: 'warning',
                    message: '请上传法人身份证反面照!'
                });
                return;
                }
                if(!this.data.alipayLoginid){
                    this.$message({
                    type: 'warning',
                    message: '请输入支付宝账号!'
                });
                return;
                }
                if(!this.data.alipayCheckName){
                    this.$message({
                    type: 'warning',
                    message: '请输入支付宝名称!'
                });
                return;
                }
                console.log(this.data)
                this.api({
                    url: "/cooperation/cooperationAdd",
                    method: "post",
                    data: this.data
                }).then(data => {
                     this.$message({
                    type: 'success',
                    message: '创建成功!'
                });
                this.$router.push({
                    path:"/system/distribution"
                });
                });
                
            }
            }else{
                this.$message({
                    type: 'warning',
                    message: '请选择分润方主体类型!'
                });
            }
            
            
        }

    },
    computed: {
        ...mapGetters(["userName"])
    }
};
</script>