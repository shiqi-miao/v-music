<style lang="scss" scoped>
#kupper{
    background: #F2F4F8;
    height: 100%;
    .container{
        // min-height: 80.5vh;
        min-height: calc(100% - 80px);
        background: #fff;
        border: 1px solid #E2E5EB;
        padding: 20px;
        padding-top: 10px;
    }
    .top{
        height: 80px;
        border: 1px solid #E2E5EB;
        border-bottom: 0;
        background: #fff;
        padding: 20px;
        position: relative;
    }
}
.blue {
    color: #409EFF;
    cursor: pointer;
    padding: 10px 6px;
}
.app-container {
    color: #333!important
}
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
    font-size: 16px;
    color: #8c939d;
    width: 86px;
    height: 86px;
    line-height: 86px;
    text-align: center;
    border: 1px dotted #D8D8D8
  }
  .avatar {
    width: 86px;
    height: 86px;
    display: block;
  }
.grey{color: #e6e6e6}
.red{color: red;}
.button{height: 36px;line-height: 36px;cursor: pointer;z-index: 10;position: absolute;right: 20px;top: 20px;margin-right: 0!important;}
.btn,.btn1{width:100px;height: 36px;line-height: 36px;color: #fff;background:#409EFF;text-align: center;cursor: pointer;border-radius:4px;font-size:14px;justify-content: center;}
.btn1{color:#409EFF;background:#ffffff;cursor: pointer;border: 1px solid #409EFF;margin-right:60px}
.el-upload__tip{color: #D8D8D8;font-weight: 400}
img{width: 50px;height: 50px}
.title{text-overflow: -o-ellipsis-lastline;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;}
// .kupperDialog{width: 32vw!important;height: 80vh!important;padding: 3.7vh 4vw;color: #333;position: relative}
// .kupperDialog .title{margin-bottom: 3.7vh;}
// .kupperDialog .circle{width: 20px;height: 20px;background: #409EFF;border-radius: 50%;margin-right: 10px}
// .kupperDialog .bottom{width: 100%;height: 5.5vh;justify-content: space-around;position: absolute;left: 0;bottom: 5vh}
.minifont{font-size: 12px;line-height: 1.5;}
.W-50{width: 50%}
.font-bold{font-weight: bold}
.smallMt{margin-bottom: 20px}
.justify-center{justify-content: center;}
</style>
<style scoped>
#kupper >>> .el-select{width: 100%;}
#kupper >>> .el-tabs{width: 375px;}
#kupper >>> .el-dialog__body,#kupper >>> .el-dialog__footer{color: #333333!important;}
#kupper >>> .el-dialog__title {line-height: 24px;font-size: 18px;color: #303133;}
.filt{font-size: 14px;}
.filt >>> .el-input{width: 240px}
.filt >>> .el-input__inner{height: 36px;line-height: 36px;}
/* .kupperDialog .el-input,.kupperDialog .el-textarea{font-size:20px;font-weight: 400!important;}
.kupperDialog .el-input__inner,.kupperDialog .el-textarea__inner{border: 0}
.KupperdialogClass{border-radius: 10px;width: 32vw!important;max-height: 90vh!important} */
/* 小圆点 */
.kupperDialog .el-radio__inner{width: 20px;height: 20px}
.kupperDialog .el-radio__inner::after{width: 10px;height: 10px}
.kupperDialog .el-radio__input.is-checked .el-radio__inner{border-color: #409EFF;background: #409EFF;}
/* 小圆点 */
#kupper >>> .operatorTableStyle,#kupper >>> .operatorCellStyle{color: #333}
#kupper >>> .operatorTableStyle th>.cell{font-weight: 400}
</style>
<template>
    <div class="app-container" id="kupper">
        <div class="top">
            <div class="button btn1" @click="addConfig"><i class="el-icon-plus"></i>&nbsp;添加配置</div>
            <el-tabs v-model="activeName" type="card" @tab-click="changeTab">
                <el-tab-pane label="轮播图配置" name="0">
                </el-tab-pane>
                <!-- <el-tab-pane label="区块导航" name="1">
                </el-tab-pane>
                <el-tab-pane label="标签管理" name="3">
                </el-tab-pane>
                <el-tab-pane label="文章管理" name="4">
                </el-tab-pane> -->
            </el-tabs>
        </div>
        <div class="container">
        <el-table
            stripe
            :data="tableData"
            header-row-class-name="operatorTableStyle"
            cell-class-name="operatorCellStyle"
            style="width:100%">
            <el-table-column
            prop="wheelName"
            label="名称"
            align="center">
            </el-table-column>
            <el-table-column
            prop="wheelPicture"
            label="图片"
            align="center">
                <template slot-scope="scope">
                    <div>
                        <img :src="scope.row.wheelPicture" alt="">
                    </div>
                </template>
            </el-table-column>
            <el-table-column
            prop="wheelRank"
            label="排序码"
            align="center">
            </el-table-column>
            <el-table-column
            prop="linkName"
            label="跳转链接"
            align="center">
                <!-- <template slot-scope="scope">
                     <el-popover placement="bottom"
                         trigger="hover">
                            <div slot="reference" class="title">
                                {{scope.row.urlType=='0'?scope.row.typeName:scope.row.jumpUrl}}
                            </div>
                            <span>{{scope.row.urlType=='0'?scope.row.typeName:scope.row.jumpUrl}}</span>
                    </el-popover>
                </template> -->
            </el-table-column>
            <el-table-column
            prop="urlType"
            label="链接类型"
            align="center">
                <!-- <template slot-scope="scope">
                    <span>{{scope.row.urlType=='0'?'内链接':'外链接'}}</span>
                </template> -->
            </el-table-column>
            <el-table-column label="操作"
                             width="150"
                             align="center">
                <template slot-scope="scope">
                    <span @click="updateArticle(scope.row)"
                          class="blue">
                        编辑
                    </span>
                    <span @click="deleteWheelPlant(scope.row)"
                          class="blue">
                        删除
                    </span>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination-line">
            <el-pagination background
                           @size-change="handleSizeChange"
                           @current-change="currentChange"
                           :current-page="params.pageNum"
                           :page-size="params.pageRow"
                           :total="totalCount"  
                           layout="total, prev, pager, next, jumper">
            </el-pagination>
        </div>
        </div>
        <!-- 轮播图弹窗 -->
        <el-dialog
            :visible.sync="indexVisible"
            :close-on-click-modal="false"
            :show-close="false"
            custom-class="KupperdialogClass"
            :title="dialogTitle"
            width="600px">
            <div class="kupperDialog">
                <!-- <div class="title">{{dialogTitle}}</div> -->
                <!-- <div class="flex-center-Y smallMt">
                    <div class="W-50"><span class="red">*</span>区域</div>
                    <div class="W-50 flex-center-Y"> <el-radio></el-radio>首页</div>
                </div>
                <div class="flex-center-Y smallMt">
                    <div class="W-50"><span class="red">*</span>位置</div>
                    <div class="W-50 flex-center-Y"> <el-radio></el-radio> 轮播图</div>
                </div> -->
                <div class="flex-center-Y smallMt">
                    <div class="W-50"><span class="red">*</span>轮播图名称</div>
                    <div class="W-50 flex-center-Y"><el-input v-model="selectData.wheelName" placeholder="请输入轮播图名称"></el-input></div>
                </div>
                <div class="flex-center-Y smallMt">
                    <div class="W-50"><span class="red">*</span>图片
                        <div class="minifont" style="color:#FF0000">图片文件大小不超过2M;</div>
                        <div class="minifont" style="color:#FF0000">图片尺寸建议335*180;</div>
                        <div class="minifont" style="color:#FF0000">图片格式为png格式;</div>
                    </div>
                    <el-upload
                    class="avatar-uploader"
                    :before-upload="beforeAvatarUpload"
                    :http-request="upload"
                    action=""
                    :show-file-list="false">
                    <img v-if="selectData.wheelPic || selectData.wheelPicture" :src="selectData.wheelPicture" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </div>
                <div class="flex-center-Y smallMt">
                    <div class="W-50"><span class="red">*</span>排序码</div>
                    <div class="W-50 flex-center-Y"><el-input v-model="selectData.wheelRank" type="number" placeholder="排序码必须为整数"></el-input></div>
                </div>
                <div class="flex-center-Y smallMt">
                    <div class="W-50"><span class="red">*</span>链接类型</div>
                    <div class="W-50 flex-center-Y">
                        <el-select v-model="selectData.urlType" placeholder="请选择">
                            <el-option label="内链接" value="0"></el-option>
                            <el-option label="外链接" value="1"></el-option>
                        </el-select>
                    </div>
                </div>
                <div class="flex-center-Y smallMt" v-if="selectData.urlType=='外链' || selectData.urlType=='1'">
                    <div class="W-50"><span class="red">*</span>跳转链接</div>
                    <div class="W-50 flex-center-Y"><el-input v-model="selectData.jumpUrl" placeholder="请输入跳转链接"></el-input></div>
                </div>
                <div class="flex-center-Y smallMt" v-if="selectData.urlType=='内链' || selectData.urlType=='0'">
                    <div class="W-50"><span class="red">*</span>跳转链接</div>
                    <div class="W-50 flex-center-Y">
                        <el-select v-model="selectData.jumpUrl" placeholder="请选择" @change="changeUrl">
                            <el-option 
                            v-for="(item,i) in linkList"
                            :key="i"
                            :label="item.name" 
                            :value="item.url"
                            ></el-option>
                        </el-select>
                    </div>
                </div>
                <div class="flex-center-Y smallMt" v-if="selectData.urlType=='外链' || selectData.urlType=='1'">
                    <div class="W-50"><span class="red">*</span>外链接名称</div>
                    <div class="W-50 flex-center-Y"><el-input maxlength="24" type="textarea" v-model="selectData.linkName" placeholder="请输入外链接描述"></el-input></div>
                </div>
                <div class="bottom flex-center-Y justify-center" style="margin-top:40px">
                    <div class="btn1" @click="backIndex">取消</div>
                    <div class="btn" @click="saveIndex">确定</div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data(){
        return{
            tableData: [],
            params: {
            pageRow: 5,
            pageNum:1
                },
            totalCount: 0,
            activeName:"0",
            linkList:[
                {name:"咖啡文化",linkId:1,url:"../pages/culture/culture"}
            ],
            // 轮播
            indexVisible:false,
            dialogTitle:"添加配置",
            selectData:{
                        wheelPicture: "",
                        wheelName: "",
                        wheelAddress: "0",
                        jumpUrl: "",
                        urlType: "0",
                        wheelRank: ""
            },
            // 标签
            labVisible:false,
            labData:{
                labelRank:"",
                labelName:""
            },
            //文章
            articleVisible:false,
            articleData:{
                        articlePicture:"" ,
                        articleTheme: "",
                        articleName: "",
                        allRank: "",
                        articleType:"" ,
                        articleLink: ""
            },
            labList:"",//标签列表
            //区块导航
            divVisible:false,
            divData:{
                        pictureUrl: "",
                        jumpUrl: "",
                        urlType: "0",
                        linkId:"",
                        orderId: ""
            },
            // 广告区块
            advVisible:false,
            advData:{
                advPicture: "",
                sharePicture:"",
                advRank: ""
            }
        }
    },
    created(){
        this.getList()
        this.getUrlList()
    },
    methods:{
        changeUrl(value){
            this.linkList.forEach(item=>{
                if(item.url==value){
                    this.selectData.linkName=item.name
                }
            })
        },
        search(){
            this.params.pageNum=1
            this.getList()
        },
        changeTab(){
            this.params= {
            pageRow: 5,
            pageNum:1
                },
            this.getList()
        },
        getList() {
            this.listLoading = true;
            if(this.activeName=='0'){
                this.api({
                    url: "/showPlantingList",
                    method: "post",
                    data: this.params
                }).then(data => {
                    this.listLoading = false;
                    this.tableData=data.list
                    this.totalCount = data.totalCount;
                });
            }else if(this.activeName=='1'){//区块导航
                this.api({
                    url: "/shopping/findRegion",
                    method: "post",
                    data: this.params
                }).then(data => {
                    this.listLoading = false;
                    this.tableData=data.list
                    this.totalCount = data.totalCount;
                });
            }else if(this.activeName=='2'){//广告模块
                this.api({
                    url: "/kupper/plant/showPlantingList",
                    method: "post",
                    data: this.params
                }).then(data => {
                    this.listLoading = false;
                    this.tableData=data.list
                    this.totalCount = data.totalCount;
                });
            }else if(this.activeName=='3'){//标签管理
                this.api({
                    url: "/kupper/article/showAllArticleLabel",
                    method: "post",
                    data: this.params
                }).then(data => {
                    this.listLoading = false;
                    this.tableData=data.list
                    this.totalCount = data.totalCount;
                });
            }else if(this.activeName=='4'){//文章管理
                this.api({
                    url: "/kupper/article/showAllArticle",
                    method: "post",
                    data: this.params
                }).then(data => {
                    this.listLoading = false;
                    this.tableData=data.list
                    this.totalCount = data.totalCount;
                });
                this.api({
                    url: "/kupper/article/showAllArticleLabel",
                    method: "post",
                    data: {pageNum:"1",pageRow:"100"}
                }).then(data => {
                    this.labList=data.list
                });
            }
                
        },
        handleSizeChange(val) {
            this.params.pageRow = val;
            this.getList(this.params);
        },
        currentChange(index) {
            this.params.pageNum = index;
            this.getList(this.params);
        },
        prevClick(index) {
            this.params.pageNum = index;
            this.getList(this.params);
        },
        nextClick(index) {
            this.params.pageNum = index;
            this.getList(this.params);
        },
        getUrlList(){
            this.api({
                    url: "/shopping/findInternalUrl",
                    method: "get"
                }).then(data => {
                    this.linkList=data
                })
        },
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        // 上传图片
        beforeAvatarUpload(file) {
            const isPNG = file.type === 'image/png';
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isPNG) {
                this.$message.error("上传图片必须为PNG格式!");
            }
            if (!isLt2M) {
                this.$message.error("上传图片大小不能超过 2MB!");
            }
            return isPNG && isLt2M;
            },
        upload(content) {
            var formData = new FormData();
            formData.append("file", content.file);
            this.api({
                url: "/uploadfile/upload",
                method: "post",
                data: formData
            })
                .then(data => {
                    if(this.activeName=='0'){ 
                    this.selectData.wheelPicture=data.filePath
                    this.selectData.wheelPic=data.tempPath
                    }else if(this.activeName=='1'){ //区块导航
                    this.divData.pictureUrl=data.filePath
                    this.divData.picUrl=data.tempPath
                    } else if(this.activeName=='2'){ //广告
                    this.articleData.articlePicture=data.filePath
                    this.articleData.articlePic=data.tempPath
                    } else if(this.activeName=='4'){ //文章管理
                    this.articleData.articlePicture=data.filePath
                    this.articleData.articlePic=data.tempPath
                    }
                })
                .catch(e => {});
        },
        // 上传图片
        updateArticle(row){//修改
            this.dialogTitle="修改配置"
            this.indexVisible=true
            this.api({
                    url: "/updateWheelPlantShow",
                    method: "post",
                    data: {
                        plantingId:row.plantingId
                    }
                }).then(data => {
                    this.selectData=row
                });
            
            
        },
        addConfig(){//新建
            this.dialogTitle="添加配置"
            this.indexVisible=true
        },
        backIndex(){
            this.indexVisible=false
            this.selectData.wheelAddress="0"
            this.selectData.wheelRank=""
            this.selectData.jumpUrl=""
            this.selectData.wheelName=""
            this.selectData.urlType="0"
            this.selectData.wheelPicture=""
            this.getList()
        },
        backDiv(){
            this.divVisible=false
            this.divData.wheelRank=""
            this.divData.linkName=""
            this.divData.linkType="0"
            this.divData.linkId=""
            this.divData.wheelPicture=""
            this.getList()
        },
        backlab(){
            this.labVisible=false
            this.labData.labelRank=""
            this.labData.labelName=""
            this.getList()
        },
        backArticle(){
            this.articleVisible=false
            this.articleData.articlePicture="" ,
            this.articleData.articleTheme= "",
            this.articleData.articleName= "",
            this.articleData.allRank="",
            this.articleData.articleType="" ,
            this.articleData.articleLink= ""
            this.getList()
        },
        upWheelPlant(row){//上下架
            if(this.activeName=='0'){
            this.selectData=row
            this.api({
                    url: "/updateWheelPlant",
                    method: "post",
                    data:this.selectData
                }).then(data => {
                    this.getList()
                });
                }else if(this.activeName=='1'){
                    this.labData=row
                    this.api({
                            url: "/kupper/article/updateArticleLabel",
                            method: "post",
                            data:this.labData
                        }).then(data => {
                            this.getList()
                        });
                }else{
                    this.articleData=row
                    this.api({
                            url: "/kupper/article/updateArticle",
                            method: "post",
                            data:this.articleData
                        }).then(data => {
                            this.getList()
                        });
                }
        },
        saveIndex(){
            this.selectData.typeName=""
            this.selectData.wheelPicture="temp-dir/52bf8e9c.png"
            console.log(this.selectData)
            if(!this.selectData.wheelPicture || !this.selectData.wheelName || !this.selectData.wheelRank || !this.selectData.jumpUrl || !this.selectData.urlType){
                this.$message.error('请将上述信息填写完整哦~');
                return;
            }
            if(this.selectData.urlType=='内链'){
                this.selectData.urlType='0'
            }
            if(this.selectData.urlType=='外链'){
                this.selectData.urlType='1'
            }
            this.selectData.wheelPicture=this.selectData.wheelPic ? this.selectData.wheelPic : this.selectData.wheelPicture
            if(this.dialogTitle=="添加配置"){
            this.api({
                    url: "/addWheelPlant",
                    method: "post",
                    data:this.selectData
                }).then(data => {
                    this.$message.success('添加成功!');
                    this.indexVisible=false
                    this.getList()
                    this.selectData.wheelRank=""
                    this.selectData.jumpUrl=""
                    this.selectData.wheelName=""
                    this.selectData.urlType="0"
                    this.selectData.wheelPicture=""
                    this.selectData.linkName=""
                });}else{
                    this.api({
                    url: "/updateWheelPlant",
                    method: "post",
                    data:this.selectData
                }).then(data => {
                    this.$message.success('保存成功!');
                    this.indexVisible=false
                    this.getList()
                    this.selectData.wheelRank=""
                    this.selectData.jumpUrl=""
                    this.selectData.wheelName=""
                    this.selectData.urlType="0"
                    this.selectData.wheelPicture=""
                    this.selectData.linkName=""
                });
                }
        },
        saveDiv(){
            console.log(this.divData)
            this.divData.name=""
            if(!this.divData.pictureUrl || !this.divData.orderId || !this.divData.jumpUrl || !this.divData.urlType){
                this.$message.error('请将上述信息填写完整哦~');
                return;
            }
            this.divData.pictureUrl=this.divData.picUrl ? this.divData.picUrl : this.divData.pictureUrl
            if(this.dialogTitle=="添加配置"){
            this.api({
                    url: "/shopping/addRegion",
                    method: "post",
                    data:this.divData
                }).then(data => {
                    this.$message.success('添加成功!');
                    this.divVisible=false
                    this.getList()
                    this.divData.orderId=""
                    this.divData.jumpUrl=""
                    this.divData.urlType="0"
                    this.divData.linkId=""
                    this.divData.pictureUrl=""
                });}else{
                    this.api({
                    url: "/shopping/updateRegion",
                    method: "post",
                    data:this.divData
                }).then(data => {
                    this.$message.success('保存成功!');
                    this.divVisible=false
                    this.getList()
                    this.divData.orderId=""
                    this.divData.jumpUrl=""
                    this.divData.urlType="0"
                    this.divData.linkId=""
                    this.divData.pictureUrl=""
                });
                }
        },
        savelab(){
            if(!this.labData.labelRank || !this.labData.labelName){
                this.$message.error('请将上述信息填写完整哦~');
                return;
            }
            if(this.dialogTitle=="添加配置"){
            this.api({
                    url: "/kupper/article/addArticleLabel",
                    method: "post",
                    data:this.labData
                }).then(data => {
                    this.$message.success('添加成功!');
                    this.labVisible=false
                    this.getList()
                    this.labData.labelRank=""
                    this.labData.labelName=""
                });}else{
                    this.api({
                    url: "/kupper/article/updateArticleLabel",
                    method: "post",
                    data:this.labData
                }).then(data => {
                    this.$message.success('保存成功!');
                    this.labVisible=false
                    this.getList()
                    this.labData.labelRank=""
                    this.labData.labelName=""
                });
                }
        },
        saveArticle(){
            if(!this.articleData.articlePicture || !this.articleData.articleTheme || !this.articleData.articleName || !this.articleData.allRank || !this.articleData.articleType || !this.articleData.articleLink){
                this.$message.error('请将上述信息填写完整哦~');
                return;
            }
            this.articleData.articlePicture=this.articleData.articlePic ? this.articleData.articlePic : this.articleData.articlePicture
            if(this.dialogTitle=="添加配置"){
            this.api({
                    url: "/kupper/article/addArticle",
                    method: "post",
                    data:this.articleData
                }).then(data => {
                    this.$message.success('添加成功!');
                    this.articleVisible=false
                    this.getList()
                    this.articleData.articlePicture="" ,
                    this.articleData.articleTheme= "",
                    this.articleData.articleName= "",
                    this.articleData.allRank="",
                    this.articleData.articleType="" ,
                    this.articleData.articleLink= ""
                });}else{
                    this.api({
                    url: "/kupper/article/updateArticle",
                    method: "post",
                    data:this.articleData
                }).then(data => {
                    this.$message.success('保存成功!');
                    this.articleVisible=false
                    this.getList()
                    this.articleData.articlePicture="" ,
                    this.articleData.articleTheme= "",
                    this.articleData.articleName= "",
                    this.articleData.allRank="",
                    this.articleData.articleType="" ,
                    this.articleData.articleLink= ""
                });
                }
        },
        deleteWheelPlant(row){
            this.$confirm('是否确认删除该配置?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                this.api({
                    url: "/deleteWheelPlant",
                    method: "post",
                    data: {plantingId:row.plantingId}
                }).then(data => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    this.getList()
                });
                
                }).catch(() => {         
                });
        },
        deleteDiv(row){
            this.$confirm('是否确认删除该配置?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                this.api({
                    url: "/shopping/deleteRegion",
                    method: "post",
                    data: {id:row.id}
                }).then(data => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    this.getList()
                });
                
                }).catch(() => {         
                });
        },
        deleteAdv(row){
            this.$confirm('是否确认删除该配置?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                this.api({
                    url: "/kupper/plant/deleteWheelPlant",
                    method: "post",
                    data: {plantingId:row.plantingId}
                }).then(data => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    this.getList()
                });
                
                }).catch(() => {         
                });
        },
        deleteLab(row){
            this.$confirm('是否确认删除该配置?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                this.api({
                    url: "/kupper/article/deleteArticleLabel",
                    method: "post",
                    data: {labelId:row.labelId}
                }).then(data => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    this.getList()
                });
                
                }).catch(() => {         
                });
        },
        deleteArticle(row){
            this.$confirm('是否确认删除该配置?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                this.api({
                    url: "/kupper/article/deleteArticle",
                    method: "post",
                    data: {articleId:row.articleId}
                }).then(data => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    this.getList()
                });
                
                }).catch(() => {         
                });
        },
    },
    computed: {
        ...mapGetters(["userName"])
    }
}
</script>



   