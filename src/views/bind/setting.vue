<style scoped>
.fix-full-img-box{
    position: relative;
    width: 50vw;
    height: 100vh;
}
.fix-full-img{
    margin: auto;position: absolute;
    left: 0;right: 0;top: 0;bottom: 0;
    width: 40vw;
}
.upload-img-box{
    width: 10vw;
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
.flex{
    display: flex;
    display: -webkit-flex;
}
.felx-1{
    flex:1
}
.reg-container{
    width: 100%;
    /* height: 100vh; */
}

.flex-center{
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
}
.index-title{
    position: fixed;
    top: 0;
    left: 0;
    /* width: 100vw; */
    background: #000000;
    color:#ffffff;
    opacity: 0.8;
    padding: 1.5vh 4vw;
    font-weight: 600;
    font-size: 1.4vw;
}
.index-title span{
    width: 40
}
.flex-1{
    flex:2
}
.out{
    padding-left: 2vw;
    font-size: 1vw;
}
.hover{
     cursor: pointer;
}
.right{
    text-align: right;
}
.danger{
    color:#F56C6C;
}
.orange{
    color:#E6A23C;
}
.success{
    color: #67C23A;
}
.super-b{
    font-size: 8vw;
    margin: 6vh 0;
}
.content{
    width: 100%;
   padding: 4vw

}
.grey-title{
    font-size: 2.2vw;
    font-weight: 600;
    color:#999999;
    padding: 2vh 0;
    text-align: center;
}
.sub-title{
    font-size: 1.2vw;
    font-weight: 600;
    color:#333333;
    padding: 1vh 0;
    /* text-align: center; */
}
.input-search{
    margin-top: 4vh;
    margin-bottom: 1vh;
}
.input-search-btn{
    cursor: pointer;
}
.b-line{
    padding: 6px 0;
}
.b{
    font-weight: 600;
}
.info{
    margin-bottom: 6vh;
}
.center{
    text-align: center;
}
li{
    padding: 4px 0;
}
.note{
    color: #666666;
    font-size: 12px;
    padding: 4px 0;
}
.video-content{
    margin-top:4vh;
}
.img-block{
    width:100%;
    height: 100%;
}
.blue {
    color: #66b1ff!important;
    cursor: pointer;
    padding: 10px 6px;
}
.footer div{margin-bottom: 22px}
.footer div>span{color:#606266;font-size: 14px;}
.black{color: #000000}
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
<style>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

<template>
    <div class="reg-container flex-center">
        <!-- <div class="index-title">
            <div class="flex-center">
                <span class="flex-1">光芽科技 | 新零售 新能力</span>
                <span class="flex-1 right">
                    <span class="out">{{userName}}</span>
                    <span @click="logout" class="out hover">退出</span>
                </span>
            </div>
        </div> -->
        <div class="content">
            <div class="sub-title">运营商设置</div>
            <br><br>
            <div class="flex">
                <div class="flex-1">
                    <el-form :model="info" class="small-space demo-form-inline" label-position="left" label-width="140px" :inline="true">
                        <el-form-item label="运营商名称：" >
                            {{info.nickName}}
                        </el-form-item>
                        <br>
                        <el-form-item label="主体名称：" >
                            {{info.operatorName}}
                        </el-form-item>
                        <br>
                        
                        
                        <el-form-item label="所在地：" >
                            {{info.area}}
                        </el-form-item>
                        <br>
                        <el-form-item label="经营类目：" v-if="info.runPlan">
                            {{info.runPlan}}
                        </el-form-item>
                        <br>
                        
                        
                        <el-form-item label="联系人电话：">
                            {{info.registrationPhone}}
                        </el-form-item>

                       
                    </el-form>
                    <div v-if="info.examineStatus==0">
                        <div class="sub-title">结算信息</div><span>结算信息暂未配置 <span class="blue" @click="toConfig()">立即配置</span></span>
                    </div>
                    <div v-if="info.examineStatus=='2'">
                        <div class="sub-title">结算信息(审核中)<span class="blue" @click="toConfig()">&nbsp;&nbsp;&nbsp;&nbsp;修改</span></div>
                        <el-form :model="info" class="small-space demo-form-inline" label-position="left" label-width="140px" :inline="true">
                        <!-- 配置信息 -->
                            <el-form-item label="企业法人姓名：">
                                {{info.legalName}}
                            </el-form-item>
                            <br>
                            <el-form-item label="法人身份证编号：">
                                {{info.legalIdCard}}
                            </el-form-item>
                            <br>
                            <el-form-item label="营业执照编号：">
                                {{info.companyLicence}}
                            </el-form-item>
                            <br>
                            <el-form-item label="结算方式：">
                                企业支付宝
                            </el-form-item>
                            <!-- <el-form-item  v-else label="结算方式：">
                                银行卡
                            </el-form-item> -->
                            <br>
                            <el-form-item label="企业支付宝账号：">
                                {{info.alipayLoginid}}
                            </el-form-item>
                            <!-- <el-form-item  v-else label="企业银行卡号：">
                                {{info.alipayLoginid}}
                            </el-form-item>
                            <br> -->
                            <!-- 配置信息 -->
                        </el-form>
                    </div>
                    <div v-if="info.examineStatus=='1'">
                        <div class="sub-title">结算信息</div>
                        <el-form :model="info" class="small-space demo-form-inline" label-position="left" label-width="140px" :inline="true">
                        <!-- 配置信息 -->
                            <el-form-item label="企业法人姓名：">
                                {{info.legalName}}
                            </el-form-item>
                            <br>
                            <el-form-item label="法人身份证编号：">
                                {{info.legalIdCard}}
                            </el-form-item>
                            <br>
                            <el-form-item label="营业执照编号：">
                                {{info.companyLicence}}
                            </el-form-item>
                            <br>
                            <el-form-item label="结算方式：">
                                企业支付宝
                            </el-form-item>
                            <!-- <el-form-item  v-else label="结算方式：">
                                银行卡
                            </el-form-item> -->
                            <br>
                            <el-form-item label="企业支付宝账号：">
                                {{info.alipayLoginid}}
                            </el-form-item>
                            <!-- <el-form-item  v-else label="企业银行卡号：">
                                {{info.alipayLoginid}}
                            </el-form-item> -->
                            <br>
                            <el-form-item label="交易费率：">
                                {{info.Rate}}
                            </el-form-item>
                            <br>
                            <!-- <el-form-item label="平台分佣：">
                                {{info.comRate}}
                            </el-form-item>
                            <br> -->
                            <!-- 配置信息 -->
                        </el-form>
                        
                    </div>
                    <div v-if="info.examineStatus=='-1'">
                        <div class="sub-title">结算信息(审核不通过)<span class="blue" @click="toConfig()">修改</span></div>
                        <el-form :model="info" class="small-space demo-form-inline" label-position="left" label-width="140px" :inline="true">
                        <!-- 配置信息 -->
                            <el-form-item label="企业法人姓名：">
                                {{info.legalName}}
                            </el-form-item>
                            <br>
                            <el-form-item label="法人身份证编号：">
                                {{info.legalIdCard}}
                            </el-form-item>
                            <br>
                            <el-form-item label="营业执照编号：">
                                {{info.companyLicence}}
                            </el-form-item>
                            <br>
                            <el-form-item label="结算方式：">
                                企业支付宝
                            </el-form-item>
                            <!-- <el-form-item  v-else label="结算方式：">
                                银行卡
                            </el-form-item> -->
                            <br>
                            <el-form-item label="企业支付宝账号：">
                                {{info.alipayLoginid}}
                            </el-form-item>
                            <!-- <el-form-item  v-else label="企业银行卡号：">
                                {{info.alipayLoginid}}
                            </el-form-item> -->
                            <br>
                            <!-- 配置信息 -->
                        </el-form>
                    </div>
                </div>
                <div class="flex-1">
                    <el-form :model="info" class="small-space demo-form-inline" label-position="left" label-width="140px" :inline="true">
                        <el-form-item label="营业执照：">
                                <div v-if="info.operatorPic" class="flex-center img-block">
                                    <el-popover
                                        placement="top-start"
                                        trigger="hover">
                                        <div class="fix-full-img-box">
                                            <img :src="info.operatorPic" alt="" class="fix-full-img">
                                        </div>
                                        <div class="upload-img-box" slot="reference">
                                            <img :src="info.operatorPic" alt="" class="upload-img">
                                        </div>
                                    </el-popover>
                                </div>
                                <div v-else>
                                    未上传
                                </div>
                        </el-form-item>
                        <el-form-item label="食品经营许可证: ">
                                <div v-if="info.cardPic" class="flex-center img-block">
                                    <el-popover
                                        placement="top-start"
                                        trigger="hover">
                                        <div class="fix-full-img-box">
                                            <img :src="info.cardPic" alt="" class="fix-full-img">
                                        </div>
                                        <div class="upload-img-box" slot="reference">
                                            <img :src="info.cardPic" alt="" class="upload-img">
                                        </div>
                                    </el-popover>
                                </div>
                        </el-form-item>
                        <el-form-item label="证件照片：" v-if="info.examineStatus!=='0'">
                            <div v-if="info.legalIdCardPath1" class="flex-center img-block">
                                <el-popover
                                    placement="top-start"
                                    trigger="hover">
                                    <div class="fix-full-img-box">
                                        <img :src="info.legalIdCardPath1" alt="" class="fix-full-img">
                                    </div>
                                    <div class="upload-img-box " slot="reference">
                                        <img :src="info.legalIdCardPath1" alt="" class="upload-img">
                                    </div>
                                </el-popover>
                            </div>
                            <div v-else>
                                未上传
                            </div>
                            <div v-if="info.legalIdCardPath2" class="flex-center img-block" style="margin-top:5px">
                                <el-popover
                                    placement="top-start"
                                    trigger="hover">
                                    <div class="fix-full-img-box">
                                        <img :src="info.legalIdCardPath2" alt="" class="fix-full-img">
                                    </div>
                                    <div class="upload-img-box " slot="reference">
                                        <img :src="info.legalIdCardPath2" alt="" class="upload-img">
                                    </div>
                                </el-popover>
                            </div>
                            <div v-else>
                                未上传
                            </div>
                        </el-form-item>
                        <br>
                        <div class="nopassdiv"  v-if="info.examineStatus=='-1'">
                            未通过
                        </div>
                        <span style="color:red" v-if="info.examineStatus=='-1'">未通过原因: <span class="black">{{info.examineReason}}</span></span>
                        <div class="passdiv"  v-if="info.examineStatus=='2'">
                            审核中
                        </div>
                    </el-form>
                </div>
            </div>

            
            <div class="footer flex-center">
                <div class="flex-1">
                    
                </div>
                <div class="flex-1">
                    

                </div>
            </div>
            <br><br>
            <div class="center" v-if="canSave"><el-button type="primary" round @click="submit">返 回</el-button></div>
        </div>
        <el-dialog title="配置结算信息" :visible.sync="dialogFormVisible" center>
            <el-form :model="info" label-position="left" label-width="120px" :inline="true">
                <el-form-item label="企业法人身份证" required>
                </el-form-item>
                <br>
                <el-row>
                    <el-col :span="12">
                        <p style="color:#8c939d">个人信息页</p>
                        <el-upload
                            class="avatar-uploader"
                            action=""
                            :http-request="upload1"
                            :show-file-list="false"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="info.legalIdCardPath1" :src="info.legalIdCardPath1" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-col>
                    <el-col :span="12">
                        <p style="color:#8c939d">国徽页</p>
                        <el-upload
                            class="avatar-uploader"
                            action=""
                            :http-request="upload2"
                            :show-file-list="false"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="info.legalIdCardPath2" :src="info.legalIdCardPath2" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-col>
                </el-row>
                <br>
                <el-form-item label="企业法人姓名" required>
                    <el-input type="text" v-model="info.legalName" placeholder="请输入"></el-input>
                </el-form-item>
                <br>
                
                <el-form-item label="法人身份证号" required>
                    <el-input type="text" v-model="info.legalIdCard" placeholder="请输入"></el-input>
                </el-form-item>
                <br>
                <el-form-item label="营业执照编号" required>
                    <el-input type="text" v-model="info.companyLicence" placeholder="请输入"></el-input>
                </el-form-item>
                <br>
                <el-form-item label="结算方式" required class="create">
                    <span>企业支付宝</span>
                    <!-- <el-select v-model="info.settleType" placeholder="请选择">
                        <el-option v-for="item in types" :key="item.id" :label="item.typeName" :value="item.id">
                        </el-option>
                    </el-select> -->
                </el-form-item>
                <br>
                <el-form-item label="企业支付宝账号" required>
                    <el-input type="text" v-model="info.alipayLoginid" placeholder="请输入"></el-input>
                </el-form-item>
                <br>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false" round>取 消</el-button>
                <el-button type="primary" @click="commit" round>提交审核</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import {regionData ,CodeToText} from 'element-china-area-data';
export default {
    data() {
        return {
            options: regionData,
            info:{legalName:"",legalIdCardPath1:"",legalIdCardPath2:""},
            typeTabs:[],
            canSave:false,
            dialogFormVisible:false,
            form:{legalName:"",legalIdCardPath1:"",legalIdCardPath2:""},
            types:[{id:"alipay",typeName:"支付宝"}]
        }
    },
    created(){
        this.getInfo()
    },
    computed: {
        ...mapGetters([
            'userName'
        ])
    },
    methods: {
        toConfig(){//配置结算信息
            this.dialogFormVisible=true
        },
        //身份证上传
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
                this.info.legalIdCardPath1=data.filePath
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
                this.info.legalIdCardPath2=data.filePath
            }).catch((e)=>{

            })
        },
        //身份证上传
        checkId(){
            this.api({
                    url: "/cooperation/identityCardVerification",
                    method: "post",
                    data: {idCard:this.info.legalIdCard}
                }).then(data => {
                }).catch((e)=>{
                    this.info.legalIdCard=""
                })
        },
        commit(){
            
            if(!this.info.legalName){
                    this.$message({
                    type: 'warning',
                    message: '请输入姓名!'
                });
                return;
                }
            if(!this.info.companyLicence){
                    this.$message({
                    type: 'warning',
                    message: '请输入营业执照编号!'
                });
                return;
                }
            if(!this.info.legalIdCardPath1){
                    this.$message({
                    type: 'warning',
                    message: '请上传身份证正面照!'
                });
                return;
                }
            if(!this.info.legalIdCardPath2){
                    this.$message({
                    type: 'warning',
                    message: '请上传身份证反面照!'
                });
                return;
                }
            if(!this.info.legalIdCard){
                    this.$message({
                    type: 'warning',
                    message: '请输入法人身份证编号!'
                });
                return;
                }
            if(!this.info.settleType){
                //     this.$message({
                //     type: 'warning',
                //     message: '请选择结算方式!'
                // });
                // return;
                this.info.settleType="alipay"
                }
            if(!this.info.alipayLoginid){
                    this.$message({
                    type: 'warning',
                    message: '请输入企业支付宝账号!'
                });
                return;
                }
            this.api({
                url: "/operator/addMerchantInfo",
                method: "post", 
                data:this.info
            }).then(data => {
                if(this.info.examineStatus=='0'){
                    this.$message({
                    type: 'success',
                    message: '提交成功 !'
                })
                }
                if(this.info.examineStatus!=='0'){
                    this.$message({
                    type: 'success',
                    message: '修改成功 !'
                })
                }
                this.getInfo()
                this.dialogFormVisible=false

            }).catch((e)=>{

            })
            
        },
        getInfo(){
            this.api({
                url: "/operator/showAllInfoForPlat",
                method: "post", 
                data:{
                    username:this.userName,
                }
            }).then(data => {
                if(!data.legalIdCardPath2){
                    data.legalIdCardPath2=""
                }
                if(!data.legalIdCardPath1){
                    data.legalIdCardPath1=""
                }
                 this.info = data
            }).catch((e)=>{

            })
        },
        submit(){
            //     if(!this.info.email){
            //     this.$message({
            //         type: 'warning',
            //         message: '请输入联系人邮箱'
            //     })
            //     return
            // }
            // this.api({
            //     url: "/operator/updateEmail",
            //     method: "post", 
            //     data:{
            //         username:this.userName,
            //         email:this.info.email
            //     }
            // }).then(data => {
            //     this.$message({
            //         type: 'success',
            //         message: '保存成功'
            //     })
            // }).catch((e)=>{

            // })
            this.$router.push({
                path:"/homeIndex/"
            })
        },
        // beforeAvatarUpload(file) {
        //     const isPNG = file.type === 'image/png' || file.type === 'image/jpg'||file.type === 'image/jpeg';
        //     const isLt2M = file.size / 1024 / 1024 < 1;
        //     if (!isPNG) {
        //         this.$message.error('上传图片必须为PNG！');
        //     }
        //     if (!isLt2M) {
        //         this.$message.error('上传图片大小不能超过 1MB!');
        //     }
        //     return isPNG && isLt2M;
        // },
        // upload(content){
        //     var formData = new FormData();
        //     formData.append("file", content.file);
        //     this.api({
        //         url: "/uploadfile/upload",
        //         method: "post", 
        //         data:formData
        //     }).then(data => {
        //         let name = content.data.type
        //         let namePath = name+'Path'
        //         this.$set(this.info,namePath,data.filePath)
        //         this.info[name] = data.tempPath
        //     }).catch((e)=>{

        //     })
        // },
        handleAreaChange(value){
            if(value.length == 1){
                this.info.sheng = value[0]
                this.info.shi = null
                this.info.qu = null
            }else if(value.length == 2){
                this.info.sheng = value[0]
                this.info.shi = value[1]
                this.info.qu = null
            }else{
                this.info.sheng = value[0]
                this.info.shi = value[1]
                this.info.qu = value[2]
            }
            this.info.shengName = CodeToText[this.info.sheng]
            this.info.shiName = CodeToText[this.info.shi]
            this.info.quName = CodeToText[this.info.qu]
        },
        toIndex(){
            this.$router.push({
                path:'/'
            });
        },
        logout() {
            this.$store.dispatch('LogOut').then(() => {
                location.reload() // 为了重新实例化vue-router对象 避免bug
            })
        }
    }

}
</script>

