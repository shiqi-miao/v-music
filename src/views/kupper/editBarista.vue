<style lang="scss" scoped>
    #createBarista{
        color: #333;
        width: 100%;padding: 20px;background:rgba(245,246,248,1);
        .top{
            height: 56px;
            border: 1px solid #E2E5EB;
            border-bottom: 0;
            background: #fff;
            padding-left: 20px;
        }
        .container{padding: 20px 0;background:#fff;
            border: 1px solid #E2E5EB;
            min-height: 85vh;
            .topBox{
                width: 100%;
                // height: 125px;
            }
            .centerBox{
                width:100%;
                height: 10px;
                background: #F2F4F8;
                margin-bottom: 20px;
            }
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
                span{font-size:14px;
                    font-weight:400;
                    color:rgba(231,97,128,1);}
                .line{
                    font-size: 14px;
                    margin-bottom: 20px;
                    .label{width: 120px;text-align: right;}
                    .info{
                        .tip{color:rgba(153,153,153,1);margin-left: 0;margin-top:15px};.num{width: 300px;}.num1{width: 190px;}
                        .radio{
                            margin-bottom: 20px;
                            cursor: pointer;
                            // .check{
                            //     width: 16px;
                            //     height: 16px;
                            //     background-image: url("../../assets/icons/radio.png");
                            //     background-size: 100%;
                            //     margin-right:10px;
                            // }
                            // .check-active{
                            //     width: 16px;
                            //     height: 16px;
                            //     background-image: url("../../assets/icons/radio-active.png");
                            //     background-size: 100%;
                            //     margin-right:10px;
                            // }
                            .grey{cursor: text;margin-left: 10px;width: 76%;}
                        }
                        }
                    .tip{color:#E24E4E;margin-left: 10px;}
                    .tip1{margin-left: 10px;width:112px;height:32px;font-size:14px;background:rgba(0,118,169,1);border-radius:4px;color: #fff;line-height: 32px;text-align: center;cursor: pointer;}
                    .time{width: 160px;position: relative;}
                    .inputIcon{position: absolute;top: 50%;transform: translateY(-50%);right: 15px;width: 20px;height: 20px;}
                    .radioIcon{width: 12px;height: 12px;margin-right: 10px;cursor: pointer;}
                    .selct{margin-right: 58px;}
                }
                }
                
        }
    }

.line img{width: 100px;height: 100px;}
.line .img{position: relative;margin:0 10px}
.line .img .trangle{
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    background-image: url('../../assets/operaion/trangle.png');
    background-size:  100% 100% ;
}
.btn,.btn1,.btn3,.btn4{width: 200px;height: 40px;background:#409EFF;border-radius:4px;font-size:14px;color:rgba(255,255,255,1);line-height:40px;text-align: center;margin-left:50px;margin-top: 50px;margin-bottom: 30px;cursor: pointer;}
.btn1,.btn3{background: #fff;color: #409EFF;border: 1px solid #409EFF;}
.btn2{width:70px;background: #fff;color: #409EFF;border: 1px solid #409EFF;height: 30px;line-height: 30px;border-radius: 4px;justify-content: center;cursor: pointer;}
.btn3,.btn4{width: 90px;height: 32px;line-height: 32px;margin-top: 20px;margin-bottom: 0px;}
.grey{color: #999;cursor: pointer;}
</style>
<style lang="scss" >
.avatar-uploader .el-upload {
    width: 100px;
    height: 100px;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    img{
        width: 100px;
        height: 100px;
    }
  }
// table样式
.el-table thead th>.cell{font-weight: 400;color:#333;line-height: 14px;}
.el-table .cell{font-weight: 400;color:#333;line-height: 14px;}
.el-table thead th{padding: 18px 0;}
.el-table td{padding: 20px 0;}
// table样式
// 输入框样式
#createBarista .el-input__inner{border-color: rgba(205,205,205,1);height: 40px;line-height: 40px;}
// 输入框样式
#createBarista .el-cascader{width:300px}
</style>
<template>
    <div id="createBarista">
        <div class="top flex-center-Y">
            <span class="grey" @click="$router.push({path:'/kupper/barista'})">咖啡师管理</span>
            <i class="el-icon-arrow-right grey"></i>
            编辑咖啡师
        </div>
        <div class="container">
            <div class="topBox">
                <div class="box">
                    <div class="flex-center-Y line">
                        <div class="label">头像：</div>
                        <div class="info">
                           <el-upload
                                class="avatar-uploader"
                                action=""
                                :http-request="upload1"
                                :show-file-list="false"
                                :before-upload="beforeAvatarUpload">
                                <img v-if="imageUrl1" :src="imageUrl1" class="avatar">
                                <div v-else>
                                    <img src="../../assets/icons/upload.png" alt="">
                                </div>
                            </el-upload>
                        </div>
                    </div>
                    <div class="flex-center-Y line">
                        <div class="label">昵称：</div>
                        <div class="info">
                            <div class="num">
                                <el-input placeholder="请输入咖啡师昵称" :maxlength="8" show-word-limit v-model="form.kUserName"></el-input>
                            </div>
                        </div>
                    </div>
                    <div class="flex-center-Y line">
                        <div class="label">性别：</div>
                        <div class="info">
                            <el-radio v-model="form.kUserSex" label="1">男</el-radio>
                            <el-radio v-model="form.kUserSex" label="0">女</el-radio>
                        </div>
                    </div>
                    <div class="flex-center-Y line">
                        <div class="label">星等：</div>
                        <div class="info">
                            <div class="num">
                                <el-input type="number" placeholder="请输入咖啡师星等" v-model="form.kUserScore"></el-input>
                            </div>
                        </div>
                    </div>
                    <div class="flex-center-Y line">
                        <div class="label">简介：</div>
                        <div class="info">
                            <div class="num">
                                <el-input placeholder="请输入咖啡师简介" :maxlength="30" type="textarea" show-word-limit v-model="form.kUserProfess"></el-input>
                            </div>
                        </div>
                    </div>
                    <div class="flex-center-Y line">
                        <div class="label">服务内容：</div>
                        <div>
                            <div class="info flex-center-Y" v-for="(item,i) in serveList" :key="i" style="margin-bottom:10px">
                                <div class="num">
                                <el-input placeholder="请输入服务内容" show-word-limit v-model="item.value"></el-input>
                                </div>&nbsp;&nbsp;<i v-if="serveList.length>1" class="el-icon-remove-outline" @click="serveList.splice(i,1)"></i>&nbsp;&nbsp;<i v-if="i==serveList.length-1 && serveList.length<3" class="el-icon-circle-plus-outline" @click="serveList.push({})"></i>
                            </div>
                        </div>
                    </div>
                    <div class="flex-center-Y line">
                    <div class="label">所在地区：</div>
                    <div class="info">
                        <div class="num">
                            <el-cascader :options="options" @change="handleAreaChange" placeholder="请选择省市区" v-model="form.cascader" class="flex-2"></el-cascader>
                        </div>
                    </div>
                </div>
                <div class="flex-center-Y line">
                    <div class="label"></div>
                    <div class="info">
                        <div class="num">
                            <el-input placeholder="请输入详细地址" :maxlength="20" show-word-limit v-model="form.detailsAddress"></el-input>
                        </div>
                    </div>
                </div>
                <div class="flex-center-Y line">
                    <div class="label">活动照片：</div>
                    <div class="flex-center-Y" style="flex-wrap:wrap;width:400px">
                        <div class="img" v-for="(item,i) in pictureList" :key="i" >
                            <div class="trangle" @click="pictureList.splice(i,1)"></div>
                            <img :src="item.filePath" alt="">
                        </div>
                        <div>
                            <el-upload
                                class="avatar-uploader"
                                action=""
                                :http-request="upload2"
                                :show-file-list="false"
                                :before-upload="beforeAvatarUpload">
                                <div>
                                    <img src="../../assets/icons/upload.png" alt="">
                                </div>
                            </el-upload>
                        </div>
                    </div>
                    <!-- <div class="info">
                       <el-upload
                            class="avatar-uploader"
                            action=""
                            :http-request="upload2"
                            :show-file-list="false"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl2" :src="imageUrl2" class="avatar">
                            <div v-else>
                                <img src="../../assets/icons/upload.png" alt="">
                            </div>
                        </el-upload>
                    </div> -->
                </div>
                </div>
            </div>
            <div class="flex-center-Y">
                <div class="btn1" @click="$router.push({path:'/kupper/barista'})">取消</div>
                <div class="btn" v-if="!loading" @click="commitAdd">确认</div>
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
            options: regionData,
            loading:false,
            form:{
                kUserSex:'1',
                kUserName:""
            },
            imageUrl1:"",
            serveList:[{}],
            pictureList:[]

        };
    },
    created() {
        
    },
    mounted(){
        this.getData()
    },
    methods: {
        getData(){
            this.api({
                    url: "/shopping/findBarista",
                    method: "post",
                    data: {
                        sn:this.$route.params.sn,
                        pageNum:1,
                        pageRow:1
                    }
                }).then(data => {
                   this.form=data.list[0]
                   this.imageUrl1=data.list[0].kUserPortrait
                //    this.pictureList=data.list[0].kPictureIdList
                   for(let i in data.list[0].kPictureIdList){
                       var img={filePath:data.list[0].kPictureIdList[i]}
                       this.pictureList.push(img)
                   }
                   this.form.cascader=[this.form.sheng,this.form.shi,this.form.qu]
                   if(data.list[0].serviceOne){
                       this.serveList=[]
                       this.serveList.push({value:data.list[0].serviceOne})
                   }
                   if(data.list[0].serviceTwo){
                       this.serveList.push({value:data.list[0].serviceTwo})
                   }
                   if(data.list[0].serviceThree){
                       this.serveList.push({value:data.list[0].serviceThree})
                   }
                }).catch(err=>{
                });
        },
        handleAreaChange(value){
            if(value.length == 1){
                this.form.sheng = value[0]
                this.form.shi = null
                this.form.qu = null
            }else if(value.length == 2){
                this.form.sheng = value[0]
                this.form.shi = value[1]
                this.form.qu = null
            }else{
                this.form.sheng = value[0]
                this.form.shi = value[1]
                this.form.qu = value[2]
            }
            this.form.shengName = CodeToText[this.form.sheng]
            this.form.shiName = CodeToText[this.form.shi]
            this.form.quName = CodeToText[this.form.qu]
        },
      commitAdd(){
          if(!this.form.kUserPortrait){
                this.$message({
                    type: "warning",
                    message: "请上传咖啡师头像!"
                });
                return;
            }
            if(!this.form.kUserName){
                this.$message({
                    type: "warning",
                    message: "请输入咖啡师名称!"
                });
                return;
            }
            if(!this.form.kUserProfess){
                this.$message({
                    type: "warning",
                    message: "请输入咖啡师简介!"
                });
                return;
            }
            if(!this.form.kUserScore){
                this.$message({
                    type: "warning",
                    message: "请输入咖啡师星等!"
                });
                return;
            }
            if(!this.form.sheng){
                this.$message({
                    type: "warning",
                    message: "请选择地区!"
                });
                return;
            }
            if(!this.form.detailsAddress){
                this.$message({
                    type: "warning",
                    message: "请输入详细地址!"
                });
                return;
            }
            if(this.pictureList.length==0){
                this.$message({
                    type: "warning",
                    message: "请上传咖啡师活动照片!"
                });
                return;
            }
            if(this.serveList[0]){
                var serviceOne=this.serveList[0].value
            }
            if(this.serveList[1]){
                var serviceTwo=this.serveList[1].value
            }
            if(this.serveList[2]){
                var serviceThree=this.serveList[2].value
            }
            if(this.serveList.length==0){
                this.$message({
                    type: "warning",
                    message: "请填写服务内容!"
                });
                return;
            }
            var kPictureIds=""
            for(let i in this.pictureList){
                if(i==0){
                    if(this.pictureList[i].tempPath){
                        kPictureIds+=this.pictureList[i].tempPath
                    }else{
                        kPictureIds+=this.pictureList[i].filePath
                    }
                }else{
                    if(this.pictureList[i].tempPath){
                        kPictureIds+=','+this.pictureList[i].tempPath
                    }else{
                        kPictureIds+=','+this.pictureList[i].filePath
                    }
                }
            }
            this.api({
                url: "/shopping/updateBarista",
                method: "post",
                data: { 
                    sn:this.$route.params.sn,
                    qu: this.form.qu,
                    quName: this.form.quName,
                    sheng: this.form.sheng,
                    shengName: this.form.shengName,
                    shi: this.form.shi,
                    shiName: this.form.shiName,
                    detailsAddress: this.form.detailsAddress,
                    kPictureIds:kPictureIds,
                    kUserScore:this.form.kUserScore,
                    kUserName:this.form.kUserName,
                    kUserSex:this.form.kUserSex,
                    kUserPortrait:this.form.kUserPortrait,
                    kUserProfess:this.form.kUserProfess,
                    serviceOne:serviceOne,
                    serviceTwo:serviceTwo,
                    serviceThree:serviceThree
                }
            }).then(data => {
                this.$message({
                        type: "success",
                        message: "保存成功 !"
                    });
                this.$router.go(-1)
                
            }).catch(data =>{
                 
            });
            
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
        upload1(content) {
            var formData = new FormData();
            formData.append("file", content.file);
            this.api({
                url: "/uploadfile/upload",
                method: "post",
                data: formData
            })
                .then(data => {
                    this.imageUrl1=data.filePath
                    this.form.kUserPortrait=data.tempPath
                })
                .catch(e => {});
        },
        upload2(content) {//商品图片
            var formData = new FormData();
            formData.append("file", content.file);
            this.api({
                url: "/uploadfile/upload",
                method: "post",
                data: formData
            })
                .then(data => {
                    var img={filePath:data.filePath,tempPath:data.tempPath}
                    this.pictureList.push(img)
                })
                .catch(e => {});
        },
    },
    computed: {
        ...mapGetters(["userId", "userName"])
    }
};
</script>


