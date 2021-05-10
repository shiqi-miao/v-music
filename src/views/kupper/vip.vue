<style scoped>
.blue {
    color: #286EFF;
    cursor: pointer;
    padding: 10px 6px;
}
.app-container {
    padding: 4.6vh 2.6vw;
    padding-bottom: 3vh;
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
    font-size: 28px;
    color: #8c939d;
    width: 9.2vh;
    height: 9.2vh;
    line-height: 9.2vh;
    text-align: center;
    border: 1px dotted #D8D8D8
  }
  .avatar {
    width: 9.2vh;
    height: 9.2vh;
    display: block;
  }
.topBox{justify-content: flex-end;margin-bottom: 4vh}
.button{cursor: pointer;z-index: 10;width: 8vw;height: 4.8vh;color: #fff;background:#286EFF;text-align: center;line-height: 4.8vh!important;}
.el-upload__tip{color: #D8D8D8;font-weight: 400}
.el-card{height: 85vh;padding:2vw 2vw;border-radius:5px;border-radius:20px;overflow: auto}
img{width: 50px;height: 50px}
.title{text-overflow: -o-ellipsis-lastline;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;}
.kupperDialog{width: 32vw!important;height: 80vh!important;padding: 3.7vh 4vw;color: #333;position: relative;}
.kupperDialog .title{margin-bottom: 3.7vh;}
.kupperDialog .circle{width: 20px;height: 20px;background: #286EFF;border-radius: 50%;margin-right: 10px}
.kupperDialog .bottom{width: 100%;height: 5.5vh;justify-content: space-around;position: absolute;left: 0;bottom: 5vh}
.kupperDialog .bottom .btn{cursor: pointer;width: 26%;height:100%;color: #286EFF;border: 1px solid #286EFF;text-align: center;line-height: 5.5vh}
.kupperDialog .bottom .btn1{cursor: pointer;width: 26%;height:100%;color: #fff;background:#286EFF;text-align: center;line-height: 5.5vh}
.bigfont{font-size: 24px;line-height: 1.375}
.smallfont{font-size: 20px;line-height: 1.4}
.minifont{font-size: 12px;font-weight: 400}
.W-50{width: 50%}
.font-bold{font-weight: bold}
.smallMt{margin-bottom: 1.8vh}
.grey{color: #e6e6e6}
@media screen and (max-width:1680px) {
    .bigfont{font-size: 20px;}
    .smallfont{font-size: 18px;}
    .minifont{font-size: 10px;}
    /* .avatar-uploader-icon {width: 100px;height: 100px;line-height: 100px;}
    .avatar {width: 100px;height: 100px;} */
}
@media screen and (max-width:1440px) {
    .bigfont{font-size: 18px;}
    .smallfont{font-size: 16px;}
    .minifont{font-size: 10px;}
}
@media screen and (max-width:1280px) {
    .bigfont{font-size: 16px;}
    .smallfont{font-size: 14px;}
    .minifont{font-size: 8px;}
}
</style>
<style>
#kupper .el-switch__core:after,#kupper .el-switch__core{border-radius: 0}
#kupper .el-dialog__header,#kupper .el-dialog__body,#kupper .el-dialog__footer{padding:0}
#kupper .el-tabs__item{font-size: 20px;height: 5.5vh;line-height: 5.5vh;width: 7.8vw;text-align: center}
.kupperDialog .el-input,.kupperDialog .el-textarea{font-size:20px;font-weight: 400!important;}
.kupperDialog .el-input__inner,.kupperDialog .el-textarea__inner{border: 0}
.KupperdialogClass{border-radius: 10px;width: 32vw!important;max-height: 90vh!important}
/* 小圆点 */
.kupperDialog .el-radio__inner{width: 20px;height: 20px}
.kupperDialog .el-radio__inner::after{width: 10px;height: 10px}
.kupperDialog .el-radio__input.is-checked .el-radio__inner{border-color: #286EFF;background: #286EFF;}
/* 小圆点 */
.el-card__body{height:100%;padding: 0;}
.operatorTableStyle{font-size: 18px;color: #333}
.operatorTableStyle th>.cell{font-weight: 600}
.operatorCellStyle{font-size: 16px;color: #333}
#operator .el-tabs__item{font-size: 20px}
@media screen and (max-width:1680px) {
    .operatorTableStyle{font-size: 16px;}
    .operatorCellStyle{font-size: 14px;}
    #operator .el-tabs__item{font-size: 18px}
    .kupperDialog .el-input,.kupperDialog .el-textarea{font-size:18px;}
    #kupper .el-tabs__item{font-size: 18px;}
}
@media screen and (max-width:1440px) {
    .operatorTableStyle{font-size: 14px;}
    .operatorCellStyle{font-size: 12px;}
    #operator .el-tabs__item{font-size: 16px}
    .kupperDialog .el-input,.kupperDialog .el-textarea{font-size:16px;}
    #kupper .el-tabs__item{font-size: 16px;}
}
@media screen and (max-width:1280px) {
    .operatorTableStyle{font-size: 12px;}
    .operatorCellStyle{font-size: 10px;}
    #operator .el-tabs__item{font-size: 14px}
    .kupperDialog .el-input,.kupperDialog .el-textarea{font-size:14px;}
    #kupper .el-tabs__item{font-size: 14px;}
}
</style>
<template>
    <div class="app-container" id="kupper">
        <el-card style="position:relative">
            <!-- <div style="text-align:center;font-weight:500;color:#999;padding-top:20vh" class="bigfont">暂未开放</div> -->
            <div class="topBox flex-center-Y JUS">
            <div class="button smallfont" style="margin-right:2vw" @click="downVip">权益发放</div>
            <div class="button smallfont" @click="addConfig">添加配置</div>
            </div>
            <el-table
                stripe
                :data="tableData"
                header-row-class-name="operatorTableStyle"
                cell-class-name="operatorCellStyle"
                style="width:100%">
                <el-table-column
                prop="equityName"
                label="会员等级"
                align="center">
                </el-table-column>
                <el-table-column
                prop="equityPic1"
                label="海报图片"
                align="center">
                    <template slot-scope="scope">
                        <div>
                            <img :src="scope.row.equityPic1" alt="">
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                prop="equityPic2"
                label="星标图片"
                align="center">
                    <template slot-scope="scope">
                        <div>
                            <img :src="scope.row.equityPic2" alt="">
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                prop="equityPic3"
                label="规则图片"
                align="center">
                    <template slot-scope="scope">
                        <div>
                            <img :src="scope.row.equityPic3" alt="">
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                prop="equityDis"
                label="折扣率"
                align="center">
                    <template slot-scope="scope">
                        <div>{{scope.row.equityDis}}%</div>
                    </template>
                </el-table-column>
                <el-table-column
                prop="userNum"
                label="用户人数"
                align="center">
                </el-table-column>
                <el-table-column
                prop="equityPrice"
                label="线上购买价格(元)"
                align="center">
                </el-table-column>
                <el-table-column
                prop="giftName"
                label="关联卡券包"
                align="center">
                </el-table-column>
                <el-table-column label="操作"
                                width="150"
                                align="center">
                    <template slot-scope="scope">
                        <span @click="updateArticle(scope.row)"
                            class="blue">
                            编辑
                        </span>
                        <span class="grey">|</span>
                        <span @click="deleteArticle(scope.row)"
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
        </el-card>
        <!-- 轮播图弹窗 -->
        <el-dialog
            :visible.sync="indexVisible"
            :close-on-click-modal="false"
            :show-close="false"
            custom-class="KupperdialogClass"
            width="32vw"
            center>
            <div class="kupperDialog">
                <div class="title bigfont font-bold">{{dialogTitle}}</div>
                <div class="flex-center-Y smallfont font-bold smallMt">
                    <div class="W-50">*会员等级名称</div>
                    <div class="W-50 flex-center-Y"><el-input v-model="selectData.equityName" placeholder="请输入会员等级名称"></el-input></div>
                </div>
                <div class="flex-center-Y smallfont font-bold smallMt">
                    <div class="W-50">*海报图片
                        <div class="minifont" style="color:#FF0000">图片文件大小不超过2M;</div>
                        <div class="minifont" style="color:#FF0000">图片尺寸建议315*160;</div>
                        <div class="minifont" style="color:#FF0000">图片格式为png格式;</div>
                    </div>
                    <el-upload
                    class="avatar-uploader"
                    :before-upload="beforeAvatarUpload"
                    :http-request="upload1"
                    action=""
                    :show-file-list="false">
                    <img v-if="selectData.equityPic1 || selectData.equityPicture1" :src="selectData.equityPic1" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </div>
                <div class="flex-center-Y smallfont font-bold smallMt">
                    <div class="W-50">*星标图片
                        <div class="minifont" style="color:#FF0000">图片文件大小不超过2M;</div>
                        <div class="minifont" style="color:#FF0000">图片尺寸建议165*60;</div>
                        <div class="minifont" style="color:#FF0000">图片格式为png格式;</div>
                    </div>
                    <el-upload
                    class="avatar-uploader"
                    :before-upload="beforeAvatarUpload"
                    :http-request="upload2"
                    action=""
                    :show-file-list="false">
                    <img v-if="selectData.equityPic2 || selectData.equityPicture2" :src="selectData.equityPic2" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </div>
                <div class="flex-center-Y smallfont font-bold smallMt">
                    <div class="W-50">*规则图片
                        <div class="minifont" style="color:#FF0000">图片文件大小不超过2M;</div>
                        <div class="minifont" style="color:#FF0000">图片尺寸建议315*500;</div>
                        <div class="minifont" style="color:#FF0000">图片格式为png格式;</div>
                    </div>
                    <el-upload
                    class="avatar-uploader"
                    :before-upload="beforeAvatarUpload"
                    :http-request="upload3"
                    action=""
                    :show-file-list="false">
                    <img v-if="selectData.equityPic3 || selectData.equityPicture3" :src="selectData.equityPic3" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">*折扣率</div>
                    <div class="W-50 flex-center-Y"><el-input type="number" v-model="selectData.equityDis" placeholder="请输入折扣率"></el-input>%</div>
                </div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">*线上购买价格</div>
                    <div class="W-50 flex-center-Y"><el-input type="number" v-model="selectData.equityPrice" placeholder="请输入线上购买价格"></el-input>元</div>
                </div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">关联卡券包</div>
                    <div class="W-50 flex-center-Y">
                        <el-select clearable v-model="selectData.giftUuid" filterable placeholder="选择关联的卡券包">
                                <el-option
                                v-for="item in labList"
                                :key="item.giftUuid"
                                :label="item.giftName"
                                :value="item.giftUuid">
                                </el-option>
                             </el-select>
                    </div>
                </div>
                <div class="bottom flex-center-Y" style="bottom:3vh">
                    <div class="btn smallfont" @click="backIndex">取消</div>
                    <div class="btn1 smallfont" @click="saveIndex">确定</div>
                </div>
            </div>
        </el-dialog>
        <!-- 权益发放 -->
        <el-dialog
            :visible.sync="downVisible"
            :close-on-click-modal="false"
            :show-close="false"
            custom-class="KupperdialogClass"
            width="32vw"
            center>
            <div class="kupperDialog">
                <div class="title bigfont font-bold">权益发放</div>
                <div class="flex-center-Y smallfont font-bold smallMt">
                    <div class="W-50">*用户手机号</div>
                    <div class="W-50 flex-center-Y"><el-input v-model="downData.userPhone" @blur="checkPhone" placeholder="请输入用户手机号" onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;"></el-input></div>
                </div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">*修改会员等级</div>
                    <div class="W-50 flex-center-Y">
                        <el-select clearable v-model="downData.equityInfo.equityType" placeholder="选择会员等级">
                                <el-option
                                v-for="item in rankList"
                                :key="item.equityType"
                                :label="item.equityName"
                                :value="item.equityType">
                                </el-option>
                             </el-select>
                    </div>
                </div>
                <div class="bottom flex-center-Y" style="margin-top:48vh">
                    <div class="btn smallfont" @click="backDown">取消</div>
                    <div v-if="showSave" class="btn1 smallfont" @click="saveDown">确定</div>
                    <div v-else class="btn1 smallfont">确定</div>
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
            tableData: [{}],
            params: {
            pageRow: 7,
            pageNum:1
                },
            totalCount: 0,
            // 轮播
            indexVisible:false,
            dialogTitle:"添加配置",
            selectData:{
                        equityName: "",
                        equityPrice:"",
                        giftUuid:"",
                        equityDis:"",
                        equityPic1:"",
                        equityPic2:"",
                        equityPic3:"",
                        
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
            //权益下放
            downData:{userPhone:"",equityInfo:""},
            downVisible:false,
            labList:"",//标签列表
            rankList:[],
            showSave:false//是否可以点确认发放按钮

            
        }
    },
    created(){
        this.getList()
        this.api({
                url: "kupper/showCouponPackageList",
                method: "post",
                data: {}
            })
                .then(data => {
                    this.labList=data
                })
                .catch(e => {});
    },
    methods:{
        getList() {
            this.listLoading = true;
                this.api({
                    url: "/kupper/showUserEquityList",
                    method: "post",
                    data: this.params
                }).then(data => {
                    this.listLoading = false;
                    this.tableData=data.list
                    this.totalCount = data.totalCount;
                });
                
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
        upload1(content) {
            var formData = new FormData();
            formData.append("file", content.file);
            this.api({
                url: "/uploadfile/upload",
                method: "post",
                data: formData
            })
                .then(data => {
                    this.selectData.equityPicture1=data.tempPath
                    this.selectData.equityPic1=data.filePath
                })
                .catch(e => {});
        },
        upload2(content) {
            var formData = new FormData();
            formData.append("file", content.file);
            this.api({
                url: "/uploadfile/upload",
                method: "post",
                data: formData
            })
                .then(data => {
                    this.selectData.equityPicture2=data.tempPath
                    this.selectData.equityPic2=data.filePath
                })
                .catch(e => {});
        },
        upload3(content) {
            var formData = new FormData();
            formData.append("file", content.file);
            this.api({
                url: "/uploadfile/upload",
                method: "post",
                data: formData
            })
                .then(data => {
                    this.selectData.equityPicture3=data.tempPath
                    this.selectData.equityPic3=data.filePath
                })
                .catch(e => {});
        },
        // 上传图片
        updateArticle(row){//修改
            this.dialogTitle="修改配置"
            this.indexVisible=true
            this.selectData=row
        },
        addConfig(){//新建
            this.dialogTitle="添加配置"
            this.indexVisible=true
        },
        downVip(){//权益下放
            this.downVisible=true
        },
        backIndex(){
            this.indexVisible=false
            this.selectData.equityName= "",
            this.selectData.equityPrice="",
            this.selectData.giftUuid="",
            this.selectData.equityDis="",
            this.selectData.equityPic1="",
            this.selectData.equityPic2="",
            this.selectData.equityPic3="",
            this.selectData.equityPicture1="",
            this.selectData.equityPicture2="",
            this.selectData.equityPicture3="",
            this.getList()
        },
        backDown(){
            this.downVisible=false
            this.downData.userPhone=""
            this.downData.equityInfo=""
            this.rankList=[]
            this.showSave=false
        },
        saveIndex(){
            if(!this.selectData.equityPic1 || !this.selectData.equityPic2 || !this.selectData.equityPic3 || !this.selectData.equityName || !this.selectData.equityPrice || !this.selectData.equityDis){
                this.$message.error('请将上述信息填写完整哦~');
                return;
            }
            if(!/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(this.selectData.equityPrice) || !/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(this.selectData.equityDis)){
                this.$message.error('折扣率线上购买价格只能填入数字哦~');
                return;
            }
            this.selectData.equityPic1=this.selectData.equityPicture1 ? this.selectData.equityPicture1 : this.selectData.equityPic1
            this.selectData.equityPic2=this.selectData.equityPicture2 ? this.selectData.equityPicture2 : this.selectData.equityPic2
            this.selectData.equityPic3=this.selectData.equityPicture3 ? this.selectData.equityPicture3 : this.selectData.equityPic3
            if(this.dialogTitle=="添加配置"){
            this.api({
                    url: "/kupper/addUserEquity",
                    method: "post",
                    data:this.selectData
                }).then(data => {
                    this.$message.success('添加成功!');
                    this.indexVisible=false
                    this.getList()
                    this.selectData.equityName= ""
                    this.selectData.equityPrice=""
                    this.selectData.giftUuid=""
                    this.selectData.equityDis=""
                    this.selectData.equityPic1=""
                    this.selectData.equityPic2=""
                    this.selectData.equityPic3=""
                    this.selectData.equityPicture1=""
                    this.selectData.equityPicture2=""
                    this.selectData.equityPicture3=""
                });}else{
                    this.api({
                    url: "/kupper/updateUserEquity",
                    method: "post",
                    data:this.selectData
                }).then(data => {
                    this.$message.success('保存成功!');
                    this.indexVisible=false
                    this.getList()
                    this.selectData.equityName= ""
                    this.selectData.equityPrice=""
                    this.selectData.giftUuid=""
                    this.selectData.equityDis=""
                    this.selectData.equityPic1=""
                    this.selectData.equityPic2=""
                    this.selectData.equityPic3=""
                    this.selectData.equityPicture1=""
                    this.selectData.equityPicture2=""
                    this.selectData.equityPicture3=""
                });
                }
        },
        checkPhone(){//检验手机号
            this.api({
                    url: "/kupper/userEquityDetails",
                    method: "post",
                    data:{userPhone:this.downData.userPhone}
                }).then(data => {
                    if(!data.flag){
                        this.$message.error('该手机号不是闪易用户哦~');
                        this.showSave=false
                        return;
                    }else{
                        this.showSave=true
                        this.rankList=data.equityList
                        this.downData.equityInfo=data.equityInfo

                    }
                });
        },
        saveDown(){
            for(let i in this.rankList){
                if(this.rankList[i].equityType==this.downData.equityInfo.equityType){
                    this.downData.equityInfo=this.rankList[i]
                }
            }
            if(!this.downData.equityInfo.equityType){
                this.downData.equityInfo.equityType=""
                this.downData.equityInfo.giftUuid=""
            }
             this.$confirm('是否确认提交?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                    }).then(() => {
                    this.api({
                        url: "/kupper/sendEquityDetails",
                        method: "post",
                        data:{userPhone:this.downData.userPhone,equityType:this.downData.equityInfo.equityType,giftUuid:this.downData.equityInfo.giftUuid}
                    }).then(data => {
                        this.$message.success('保存成功!');
                        this.downVisible=false
                        this.getList()
                        this.downData.userPhone=""
                        this.downData.equityInfo=""
                        this.rankList=[]
                        this.showSave=false
                    });
                    }).catch(() => {         
                    });
            
        },
        deleteArticle(row){
            if(row.userNum>0){
            this.$confirm('该等级会员线上已有'+row.userNum+'位用户，删除后相关用户权益无法恢复，是否确认删除?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                this.api({
                    url: "/kupper/deleteUserEquity",
                    method: "post",
                    data: {equityId:row.equityId}
                }).then(data => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    this.getList()
                });
                
                }).catch(() => {         
                });
                }else{
                    this.$confirm('是否确认删除该会员等级?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                    }).then(() => {
                    this.api({
                        url: "/kupper/deleteUserEquity",
                        method: "post",
                        data: {equityId:row.equityId}
                    }).then(data => {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        this.getList()
                    });
                    
                    }).catch(() => {         
                    });
                }
        },
    },
    computed: {
        ...mapGetters(["userName"])
    }
}
</script>



   