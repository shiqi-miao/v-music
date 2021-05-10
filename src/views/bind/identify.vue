
<style>
.upload-block .el-upload-dragger{
    display: inline-block;
    width: 300px;
    height: 200px;
}
</style>

<style scoped>
.upload-img{
    height: 100%;
}
.el-select-dropdown__item{
    padding:0 20px;
}
.flex{
    display: flex;
    display: -webkit-flex;
}
.felx-1{
    flex:1
}
.reg-container{
    width: 100vw;
    height: 100vh;
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
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
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
    flex:1
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
    margin-top: 4vh;
    padding-bottom: 10vh;
    padding-top: 10vh;
}
.full-width{
    width:100%;
    height: 100%;
}
.grey-title{
    font-size: 2.2vw;
    font-weight: 600;
    color:#999999;
    padding: 2vh 0;
    text-align: center;
}
.sub-title{
    font-size: 1.8vw;
    font-weight: 600;
    color:#333333;
    padding: 2vw 0 1vh 0;
    text-align: center;
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
</style>

<template>
    <div class="flex-center">
        <div class="index-title">
            <div class="flex-center">
                <span class="flex-1">光芽科技 | 新零售 新能力</span>
                <span class="flex-1 right">
                    <span class="out">{{userName}}</span>
                    <span @click="logout" class="out hover">退出</span>
                </span>
            </div>
        </div>
        <div class="content" v-if="step == 1">
            <div class="sub-title">运营商认证</div>
            <br><br>
            <div class="flex">
                <div class="flex-1">
                    <el-form :model="info" class="small-space demo-form-inline sku-form" label-position="left" label-width="140px" :inline="true">
                        <el-form-item label="运营商主体类型" required>
                            <el-select v-model="info.operatorMainType" placeholder="运营商主体类型">
                                <el-option v-for="item in typeTabs" :key="item.id" :label="item.name" :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <br>
                        <el-form-item label="主体名称" required>
                            <el-input type="text" v-model="info.operatorName" placeholder="请填营业执照名称"></el-input>
                        </el-form-item>
                        <br>
                        <el-form-item label="所在地" required >
                            <div class="flex-center-Y">
                            <el-cascader :options="options" v-model="info.cascader" @change="handleAreaChange"></el-cascader><el-input placeholder="详细地址" v-model="info.detailsAddress"></el-input>
                            </div>
                        </el-form-item>
                        <br>
                        
                        <el-form-item label="运营商名称" required >
                            <div class="flex">
                                <el-tooltip content="如：光芽新零售，该名称会展现给用户" placement="right" effect="light">
                                <div class="flex-1">
                                    <el-input type="text" v-model="info.nickName" placeholder="请填写运营商名称" maxlength="6" @blur="nickNameBlur" @focus="showTip=true"></el-input>
                                </div>
                                </el-tooltip>
                                <!-- <div class="flex-2" v-if="showTip">
                                    <span> &nbsp; &nbsp; &nbsp;如：光芽新零售，该名称会展现给用户</span>
                                </div> -->
                                
                            </div>
                            
                        </el-form-item>
                        <br>
                        <el-form-item label="经营类目" required>
                            <el-select v-model="info.runPlan" placeholder="请输入经营类目">
                                <el-option v-for="item in type2Tabs" :key="item.id" :label="item.name" :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <br>
                        <el-form-item label="填写经营类目" required v-if="info.runPlan=='其他'">
                            <el-input type="text" v-model="info.doType" placeholder="填写经营类目"></el-input>
                        </el-form-item>
                        <br>
                        <el-form-item label="营业执照" required>
                            <el-upload drag :show-file-list="false"
                                :before-upload="beforeAvatarUpload"
                                :http-request="upload"
                                action=""
                                :data="{type:'operatorPic'}"
                                class="upload-block"
                                >
                                <div v-if="info.operatorPic" class="flex-center full-width">
                                    <img :src="info.operatorPicPath" alt="" class="upload-img">
                                </div>
                                <div v-else>
                                    <i class="el-icon-upload"></i>
                                    <div slot="tip" class="el-upload__tip">支持.jpg/.png/.jpeg文件，且不超过1M</div>
                                </div>
                            </el-upload>
                        </el-form-item>
                        <br>
                        <el-form-item :label="info.runPlan + '经营许可证'" v-if="info.runPlan=='食品'||info.runPlan=='药品'" required>
                            <el-upload drag :show-file-list="false"
                                :before-upload="beforeAvatarUpload"
                                :http-request="upload"
                                action=""
                                class="upload-block"
                                :data="{type:'cardPic'}"
                                >
                                <div v-if="info.cardPic" class="flex-center full-width">
                                    <img :src="info.cardPicPath" alt="" class="upload-img">
                                </div>
                                <div v-else>
                                    <i class="el-icon-upload"></i>
                                    <div slot="tip" class="el-upload__tip">支持.jpg/.png/.jpeg文件，且不超过1M</div>
                                </div>
                            </el-upload>
                        </el-form-item>
                        <br>
                    </el-form>
                </div>
                <!-- <div class="flex-1">
                    <el-form :model="info" class="small-space demo-form-inline sku-form" label-position="left" label-width="140px" :inline="true">
                        <el-form-item label="运营商名称" required >
                            <el-input type="text" v-model="info.nickName" placeholder="请填写运营商名称" maxlength="6" @blur="nickNameBlur"></el-input>
                        </el-form-item>
                        <br>
                        <el-form-item label="经营类目" required>
                            <el-select v-model="info.runPlan" placeholder="请输入经营类目">
                                <el-option v-for="item in type2Tabs" :key="item.id" :label="item.name" :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <br>
                        <el-form-item label="填写经营类目" required v-if="info.runPlan=='其他'">
                            <el-input type="text" v-model="info.doType" placeholder="填写经营类目"></el-input>
                        </el-form-item>
                        <br>
                        <el-form-item :label="info.runPlan + '证书图片'" v-if="info.runPlan=='食品'||info.runPlan=='药品'" required>
                            <el-upload drag :show-file-list="false"
                                :before-upload="beforeAvatarUpload"
                                :http-request="upload"
                                action=""
                                class="upload-block"
                                :data="{type:'cardPic'}"
                                >
                                <div v-if="info.cardPic" class="flex-center full-width">
                                    <img :src="info.cardPicPath" alt="" class="upload-img">
                                </div>
                                <div v-else>
                                    <i class="el-icon-upload"></i>
                                    <div slot="tip" class="el-upload__tip">支持.jpg/.png/.jpeg文件，且不超过1M</div>
                                </div>
                            </el-upload>
                        </el-form-item>
                        <br>
                    </el-form>
                </div> -->
            </div>
            <div class="center"><el-button type="primary" round @click="submit">提交审核</el-button></div>
        </div>
        <div class="content" v-else-if="step == 2">
            <div class="flex-center">
                <i class="el-icon-warning orange"></i> &nbsp;
                您已完成认证资料提交，审核结果将通过短信通知您
            </div>
            <!-- <div class="video-content">
                <div>为了更简单的配置设备，请看视频</div>
            </div> -->
        </div>
        <div class="content" v-else-if="step == 3">
            <div class="flex-center">
                <i class="el-icon-warning orange"></i> &nbsp;
                您已完成认证资料提交，审核结果将通过短信通知您
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import {regionData ,CodeToText} from 'element-china-area-data';
export default {
    data() {
        return {
            showTip:false,
            options: regionData,
            step:1,
            info:{
                runPlan:'',
                operatorMainType:'企业'
            },
            typeTabs:[
                {
                    name:'企业',
                    id:'企业'
                },
                {
                    name:'个体工商户',
                    id:'个体工商户'
                },
            ],
            type2Tabs:[
                {
                    name:'食品',
                    id:'食品'
                },
                {
                    name:'药品',
                    id:'药品'
                },
                {
                    name:'食用农产品',
                    id:'食用农产品'
                },
                {
                    name:'其他',
                    id:'其他'
                },
            ]
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
        nickNameBlur(){
            this.showTip=false
            this.api({
                url: "/operator/checkOperatorName",
                method: "post", 
                data:{
                    nickName:this.info.nickName
                }
            }).then(data => {


            }).catch((e)=>{

            })
        },
        getInfo(){
            this.api({
                url: "/operator/showAllPlanForPlat",
                method: "post", 
                data:{
                    username:this.userName
                }
            }).then(data => {
                if(data.isExamine == 0){
                    this.step = 3
                }else if(data.isExamine == 1){
                    this.toIndex()
                }
            }).catch((e)=>{

            })
        },
        submit(){
            if(!this.info.operatorMainType){
              this.$message.error("请选择运营商主体类型");
              return
            }
            if(!this.info.nickName){
              this.$message.error("请输入运营商名称");
              return
            }
            if(!this.info.operatorName){
              this.$message.error("请输入主体名称");
              return
            }
            if(!this.info.sheng){
              this.$message.error("所在地");
              return
            }
            if(!this.info.detailsAddress){
              this.$message.error("请输入详细地址");
              return
            }
            if(!this.info.operatorPic){
              this.$message.error("请上传营业执照");
              return
            }
            if(!this.info.runPlan){
              this.$message.error("请选择经营类目");
              return
            }
            if(this.info.runPlan == '其他' && !this.info.doType){
              this.$message.error("请填写经营类目");
              return
            }
            if(this.info.runPlan == '食品' || this.info.runPlan == '药品' ){
                if(!this.info.cardPic){
                    this.$message.error("请上传证件照片");
                    return
                }
            }
            this.info.username = this.userName
            this.api({
                url: "/operator/getAllPlanForPlat",
                method: "post", 
                data:this.info
            }).then(data => {
                this.step = 2
            }).catch((e)=>{

            })
        },
        beforeAvatarUpload(file) {
            const isPNG = file.type === 'image/png' || file.type === 'image/jpg'||file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 1;
            if (!isPNG) {
                this.$message.error('上传图片必须为PNG！');
            }
            if (!isLt2M) {
                this.$message.error('上传图片大小不能超过 1MB!');
            }
            return isPNG && isLt2M;
        },
        upload(content){
            var formData = new FormData();
            formData.append("file", content.file);
            this.api({
                url: "/uploadfile/upload",
                method: "post", 
                data:formData
            }).then(data => {
                let name = content.data.type
                let namePath = name+'Path'
                this.$set(this.info,namePath,data.filePath)
                this.info[name] = data.tempPath
            }).catch((e)=>{

            })
        },
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

