<style lang="scss" scoped>
.fix-full-img-box{
    position: relative;
    width: 50vw;
    height:80vh;
}
.fix-full-img{
    margin: auto;position: absolute;
    left: 0;right: 0;top: 0;bottom: 0;
    width:50vw;
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
    .passdiv{
        width: 200px;
        height:200px;
        border: 1px solid #fc9907;
        border-radius: 50% ;
        text-align: center;
        line-height: 200px;
        color: #fc9907
    }
    .nopassdiv{
        width: 200px;
        height:200px;
        border: 1px solid red;
        border-radius: 50% ;
        text-align: center;
        line-height: 200px;
        color: red
    }
</style>

<template>
    <div>
        <div class="top">
            <p class="title">基本信息</p>
            <el-row>
            <el-col :span="12">
                <el-form class="coupon-form" label-position="left" label-width="160px" :inline="true">
                    <el-form-item label="分润方主体类型">
                        <span v-if="this.data.autype=='company'">企业</span>
                        <span v-if="this.data.autype=='person'">个人</span>
                        <!-- <el-select v-model="data.authType" placeholder="请选择" @change="typeChange()">
                            <el-option v-for="item in types" :key="item.id" :label="item.name" :value="item.id">
                            </el-option>
                        </el-select> -->
                    </el-form-item>
                    <br>
                    <el-form-item label="企业名称" required v-if="this.data.autype=='company'">
                        <el-input type="text" v-model="data.details.companyName" placeholder="请输入"></el-input>
                    </el-form-item>
                    <br v-if="this.data.autype=='company'">
                    <el-form-item label="营业执照编号" required v-if="this.data.autype=='company'">
                        <el-input type="text" v-model="data.details.companyLicence" placeholder="请输入"></el-input>
                    </el-form-item>
                    <br v-if="this.data.autype=='company'">
                    <el-form-item label="姓名" required v-if="this.data.autype=='person'">
                        <el-input type="text" v-model="data.details.personName" placeholder="请输入"></el-input>
                    </el-form-item>
                    <br v-if="this.data.autype=='person'">
                    <el-form-item label="营业执照" required v-if="this.data.autype=='company'">
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
                    <br v-if="this.data.autype=='company'">
                    <el-form-item label="企业法人姓名" required v-if="this.data.autype=='company'">
                        <el-input type="text" v-model="data.details.legalName" placeholder="请输入"></el-input>
                    </el-form-item>
                    <br v-if="this.data.autype=='company'">
                    <el-form-item label="法人身份证编号" required v-if="this.data.autype=='company'">
                        <el-input type="text" v-model="data.details.legalIdCard" placeholder="请输入" onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;"></el-input>
                    </el-form-item>
                    <br v-if="this.data.autype=='company'">
                    <el-form-item label="身份证编号" required v-if="this.data.autype=='person'">
                        <el-input type="text" v-model="data.details.idCard" placeholder="请输入" @blur="checkId()" onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;"></el-input>
                    </el-form-item>
                    <br v-if="this.data.autype=='person'">
                    <el-form-item label="身份证正面" required v-if="this.data.autype=='person'">
                        <el-upload
                            class="upload-demo"
                            action=""
                            multiple
                            :limit="1"
                            :on-exceed="handleExceed"
                            :http-request="upload2"
                            :before-upload="beforeAvatarUpload"
                            :file-list="fileList1">
                            <el-button size="small">上传文件</el-button>
                            <span slot="tip" class="el-upload__tip">支持jpg/jpeg/png格式，小于1M</span>
                        </el-upload>
                    </el-form-item>
                    <br v-if="this.data.autype=='person'">
                    <el-form-item label="身份证反面" required  v-if="this.data.autype=='person'">
                        <el-upload
                            class="upload-demo"
                            action=""
                            multiple
                            :limit="1"
                            :on-exceed="handleExceed"
                            :http-request="upload3"
                            :before-upload="beforeAvatarUpload"
                            :file-list="fileList2">
                            <el-button size="small">上传文件</el-button>
                            <span slot="tip" class="el-upload__tip">支持jpg/jpeg/png格式，小于1M</span>
                        </el-upload>
                    </el-form-item>
                    <br v-if="this.data.autype=='person'">
                    <el-form-item label="企业法人身份证正面" required v-if="this.data.autype!=='person'">
                        <el-upload
                            class="upload-demo"
                            action=""
                            multiple
                            :limit="1"
                            :on-exceed="handleExceed"
                            :http-request="upload4"
                            :before-upload="beforeAvatarUpload"
                            :file-list="fileList4">
                            <el-button size="small">上传文件</el-button>
                            <span slot="tip" class="el-upload__tip">支持jpg/jpeg/png格式，小于1M</span>
                        </el-upload>
                    </el-form-item>

                    <br v-if="this.data.autype!=='person'">
                    <el-form-item label="企业法人身份证反面" required  v-if="this.data.autype!=='person'">
                        <el-upload
                            class="upload-demo"
                            action=""
                            multiple
                            :limit="1"
                            :on-exceed="handleExceed"
                            :http-request="upload5"
                            :before-upload="beforeAvatarUpload"
                            :file-list="fileList5">
                            <el-button size="small">上传文件</el-button>
                            <span slot="tip" class="el-upload__tip">支持jpg/jpeg/png格式，小于1M</span>
                        </el-upload>
                    </el-form-item>
                    <br v-if="this.data.autype!=='person'">
                </el-form>
            </el-col>
            <el-col :span="12" class="nomargin">
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
                    <el-row style="margin-top:100px">
                        <el-col :span="6" class="nomargin" v-if="data.exampleStatus=='0'">
                            <div class="passdiv">
                            审核中
                            </div>
                        </el-col>
                        <el-col :span="6" class="nomargin" v-if="data.exampleStatus=='-1'">
                            <div class="nopassdiv">
                            未通过
                            </div>
                            <p style="margin-top:50px;width:300%"> <span style="color:red">未通过原因</span> :{{data.examineReason}}</p>
                        </el-col>
                    </el-row>
            </el-col>
            </el-row>
        </div>
        <div class="top">
            <p class="title">结算账户信息</p>
        <el-form class="coupon-form" label-position="left" label-width="160px" :inline="true">
            <el-form-item v-if="data.autype=='person'" label="支付宝名称" required>
                <el-input type="text" v-model="data.alipayCheckName" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item v-if="data.autype=='!person'" label="企业支付宝名称" required>
                <el-input type="text" v-model="data.alipayCheckName" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="支付宝账号" required v-if="data.autype=='person'">
                <el-input type="text" v-model="data.alipayLoginid" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="企业支付宝账号" required v-if="data.autype!=='person'">
                <el-input type="text" v-model="data.alipayLoginid" placeholder="请输入"></el-input>
            </el-form-item>
            
        </el-form>
        </div>
        <el-row class="footer">
            <el-button size="mini" round @click="back()">返回</el-button>
            <el-button size="mini" type="primary" round @click="submit()">提交</el-button>
            <el-button size="mini" type="danger" round @click="del()">删除</el-button>
        </el-row>
    </div>
    
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            data:{
                type:"",
                details:{}
                },
            fileList:[],
            fileList1:[],
            fileList2:[],
            fileList4:[],
            fileList5:[],
            types:[{id:"company",name:"企业"},{id:"person",name:"个人"}]
        };
    },
    
    created() {
        this.api({
                    url: "/cooperation/getCooperationInfo",
                    method: "post",
                    data: {dmId:this.$route.params.dmId}
                }).then(data => {
                    console.log(data)
                    this.data=data
                });
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
                this.data.details.companyLicencePath=data.filePath
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
                this.data.details.idCardPath1=data.filePath
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
                this.data.details.idCardPath2=data.filePath
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
                this.data.details.legalIdCardPath1=data.filePath
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
                this.data.details.legalIdCardPath2=data.filePath
            }).catch((e)=>{

            })
        },
        // 上传图片
        typeChange(){ 
        },
        back(){
            this.$router.push({
                    path:"/system/distribution"
                });
        },
        submit(){

        },
        del(){
             this.$confirm('是否删除该分润方?',  {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.api({
                        url: "/cooperation/cooperationDelete",
                        method: "post",
                        data:{
                            dmId:this.$route.params.dmId
                        }
                    }).then(data => {
                        this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    this.$router.push({
                        path:"/system/distribution"
                    });
                    });
                }).catch(() => {          
                });
        },
        submit(){
            this.data.dmId=this.$route.params.dmId
            console.log(this.data)
            if(this.data.autype){
                if(this.data.autype=="person"){
                if(!this.data.details.personName){
                    this.$message({
                    type: 'warning',
                    message: '请输入姓名!'
                });
                return;
                }
                if(!this.data.details.idCard){
                    this.$message({
                    type: 'warning',
                    message: '请输入身份证编号!'
                });
                return;
                }
                if(!this.data.details.idCardPath1){
                    this.$message({
                    type: 'warning',
                    message: '请上传身份证正面照!'
                });
                return;
                }
                if(!this.data.details.idCardPath2){
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
                var data={}
                data.dmId=this.data.dmId
                data.authType=this.data.autype
                data.alipayCheckName=this.data.alipayCheckName
                data.alipayLoginid=this.data.alipayLoginid
                data.idCard=this.data.details.idCard
                data.idCardPath1=this.data.details.idCardPath1
                data.idCardPath2=this.data.details.idCardPath2
                data.name=this.data.details.personName
                this.api({
                    url: "/cooperation/cooperationUpdate",
                    method: "post",
                    data:data
                }).then(data => {
                    this.$message({
                    type: 'success',
                    message: '修改成功!'
                });
                this.$router.push({
                    path:"/system/distribution"
                });
                });
            }else{
                if(!this.data.operatorName){
                    this.$message({
                    type: 'warning',
                    message: '请输入企业名称!'
                });
                return;
                }
                if(!this.data.details.companyLicence){
                    this.$message({
                    type: 'warning',
                    message: '请输入营业执照编号!'
                });
                return;
                }
                if(!this.data.details.companyLicencePath){
                    this.$message({
                    type: 'warning',
                    message: '请上传营业执照!'
                });
                return;
                }
                if(!this.data.details.legalName){
                    this.$message({
                    type: 'warning',
                    message: '请输入企业法人姓名!'
                });
                return;
                }
                if(!this.data.details.legalIdCard){
                    this.$message({
                    type: 'warning',
                    message: '请输入法人身份证编号!'
                });
                return;
                }
                if(!this.data.details.legalIdCardPath1){
                    this.$message({
                    type: 'warning',
                    message: '请上传身份证正面照!'
                });
                return;
                }
                if(!this.data.details.legalIdCardPath2){
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
                var data={}
                data.dmId=this.data.dmId
                data.authType=this.data.autype
                data.alipayCheckName=this.data.alipayCheckName
                data.alipayLoginid=this.data.alipayLoginid
                data.legalIdCard=this.data.details.legalIdCard
                data.legalIdCardPath1=this.data.details.legalIdCardPath1
                data.legalIdCardPath2=this.data.details.legalIdCardPath2
                data.companyName=this.data.details.companyName
                data.legalName=this.data.details.legalName  
                data.companyLicence=this.data.details.companyLicence
                data.companyLicencePath=this.data.details.companyLicencePath
                this.api({
                    url: "/cooperation/cooperationUpdate",
                    method: "post",
                    data:data
                }).then(data => {
                     this.$message({
                    type: 'success',
                    message: '修改成功!'
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