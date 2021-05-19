<style scoped>
#shop{
    background: #F2F4F8;
    border: 1px solid #E2E5EB;
    height: 100%;
}
#shop .container{
            min-height: calc(100% - 127px);
            background: #fff;
            border: 1px solid #E2E5EB;
            padding: 20px;
            padding-top: 10px;
        }
#shop .top{
        height: 127px;
        border: 1px solid #E2E5EB;
        border-bottom: 0;
        background: #fff;
        padding:20px
    }
.input-with-select {
    width: 50%;
}
.el-select .el-input {
    width: 120px;
}
.el-date-editor{width: 100%!important}
/* .el-form-item__content .el-input{width: 50%} */
.el-tooltip__popper[x-placement^="right"] .popper__arrow,
.el-tooltip__popper[x-placement^="right"] .popper__arrow:after {
    border-right-color: #ffffff;
}
.el-tooltip__popper[x-placement^="bottom"] .popper__arrow,
.el-tooltip__popper[x-placement^="bottom"] .popper__arrow:after {
    border-bottom-color: #ffffff;
}
.tooltip-blue {
    background: #ffffff !important;
    border: #66b1ff !important;
    color: #66b1ff !important;
    line-height: 18px;
    font-size: 14px;
}
.hover {
    cursor: pointer;
    /* padding: 10px 20px; */
}
.title-hover {
    cursor: pointer;
}
.danger {
    color: #f56c6c;
}
.orange {
    color: orange;
}
.note {
    padding: 10px 0;
    color: #888888;
    font-size: 13px;
}
.item-set {
    height: 44px;
    padding: 6px;
    text-align: center;
    line-height: 32px;
}
.name {
    line-height: 36px;
    font-weight: 600;
    text-align: center;
}
.stock-num {
    padding: 10px;
    cursor: pointer;
}
.el-form-item__content{line-height:40px;display: flex;}
.blue {
    color: #66b1ff!important;
    cursor: pointer;
}
#shop .addstock .el-input{width: 60%}
#period .el-input__inner{padding: 0;border: 0px;color: #909399;font-weight: bold;width: 60%;background: transparent}
#shop .el-table__expanded-cell .el-table td{background: #66b1ff12;}
.btn{width:100px;height: 32px;line-height: 32px;color: #fff;background:#409EFF;text-align: center;cursor: pointer;border-radius:4px;font-size:14px;justify-content: center;}
.btn1{width:100px;height: 32px;line-height: 32px;color:#409EFF;text-align: center;cursor: pointer;border-radius:4px;font-size:14px;border: 1px solid #409EFF;margin-right:20px}
.line{margin-bottom: 20px;}
.line .label{width: 120px;}
.line .input{width: 240px;}
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
.justify-center{justify-content: center;}
.searchInput{width: 240px;
    margin-right: 20px;}
.brandtype {
    margin-right: 10px;
    background: #ffffff;
    color: #888888;
    cursor: pointer;
    margin-bottom: 10px;
}
.brandtype.active {
    background: rgba(64, 158, 255, 0.1);
    color: #409eff;
    border: 1px solid rgba(64, 158, 255, 0.2);
}
.select{margin-right: 20px;}
#shop >>> .el-input-number{line-height:30px}
#shop >>> .el-select,#shop >>> .el-select .el-input{width:100%}
</style>
<style lang="scss">
.userTableStyle{color: #333}
.userTableStyle th>.cell{font-weight: 400}
.userTableStyle{color: #333;height: 75px;padding: 0!important}
#shop .userTableStyle{height: 65px;}
.avatar-uploader .el-upload {
    width: 100px;
    height: 100px;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    .img{
        width: 100px;
        height: 100px;
        img{
            width: 100%;
        }
    }
  }
#shop .el-select .el-input {
  width: 120px;
}
#shop .el-input__inner{height:32px;line-height: 32px;}
#shop .el-input__icon{line-height:32px;
// border-left: 1px solid #C0C4CC;padding-left: 5px;
}
#shop .el-input__prefix{line-height: 32px;cursor:pointer;padding-left: 5px;
// border-left: 1px solid #DCDFE6;
}
#shop .shopdialog{height: 600px;}
#shop .shopdialog .el-dialog__body{height: 520px;overflow-y: auto;}
#shop .shopdialog1 .el-dialog__header{padding: 0;}
#shop .shopdialog1 .el-dialog__headerbtn .el-dialog__close{display: none;}
#shop .shopdialog1 .content{margin-bottom:40px;text-align: center;}
/* input type="number" 去掉箭头 */
#shop input::-webkit-outer-spin-button,
#shop input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0;
}
</style>
<template>
    <div class="app-container" id="shop">
        <div class="top">
            <div class="flex-center-Y" style="margin-bottom:20px">
                <div class="searchInput">
                    <el-input placeholder="请输入商品名称" v-model="params.skuName" @input="search" clearable>
                        <i
                            class="el-icon-search"
                            slot="prefix"
                            @click="search">
                        </i>
                    </el-input>
                </div>
                    <div class="select">
                        <el-select v-model="params.isFree" clearable="" placeholder="商品类型" @change="search">
                            <el-option
                            label="付费"
                            value="N">
                            </el-option>
                            <el-option
                            label="免费"
                            value="Y">
                            </el-option>
                        </el-select>
                    </div>
                <div class="btn" @click="createVisible=true;fileList=[]">创建商品</div>
            </div>
            <div>
                商品分类: 
                <el-tag @click.native="chooseType(j)"
                v-for="(item,j) in typeList"
                :key="j"
                type="info"
                size="medium "
                class="brandtype"
                :class="{'active':item.isActive}">
                <span>
                    {{item.typeName}}<span v-if="item.typeNum">({{item.typeNum}})</span> &nbsp;&nbsp;<i class="el-icon-edit"  v-if="item.typeNum>0" @click.stop="showType(item)"></i><i class="el-icon-delete" @click.stop="deleteType(item)" v-if="item.typeNum==0"></i>
                </span>
                </el-tag>
                <el-button class="button-new-tag" type="danger" size="small" @click="showType">+ new</el-button>
            </div>
        </div>
        <div class="container">
        <el-table :data="tableData"
                  header-row-class-name="userTableStyle" 
                  cell-class-name="userCellStyle"
                  stripe
                  style="width: 100%"
                  v-loading.body="listLoading"
                  element-loading-text="拼命加载中"
                  ref="refTable">
            <el-table-column prop="skuPicture"
                             label="商品图片"
                             align="center">
                <template slot-scope="scope">
                    <img :src="scope.row.skuPicture"
                         width="40"
                         height="40"
                         class="portrait" />
                </template>
            </el-table-column>
            <el-table-column prop="skuName"
                             label="商品名称"
                             align="center">
                             </el-table-column>
            <el-table-column prop="typeName"
                             label="商品分类"
                             align="center">
                             </el-table-column>
                             <el-table-column prop="salePrice"
                             label="商品价格（元）"
                             align="center"></el-table-column>
            <el-table-column prop="orderNum"
                             label="上架排序"
                             align="center">
            </el-table-column>
            <el-table-column prop="isRecommend"
                             label="是否精品歌曲"
                             align="center">
                <template slot-scope="scope">
                    <span>{{scope.row.isFree=='N'?'是':'否'}}</span>
                </template>
            </el-table-column>
            <el-table-column 
                    label="操作"
                    width="150"
                    align="center"
                    >
                <template slot-scope="scope">
                    <span class="blue" @click.stop="edit(scope.row)">编辑</span>
                    <span class="blue" @click.stop="removeVisible=true;selectData=scope.row">删除</span>
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
                           :page-sizes="[10, 20, 50, 100]"
                           layout="total, sizes, prev, pager, next, jumper">
            </el-pagination>
        </div>
        <el-dialog :visible.sync="createVisible" title="新建商品" width="600px" custom-class='shopdialog'>
            <div class="line flex-center-Y">
                <div class="label">商品图片</div>
                <div>
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
            <div class="line flex-center-Y">
                <div class="label">音频文件</div>
                <div>
                    <el-upload
                    class="upload-demo"
                    action=""
                    :http-request="upload2"
                    :before-upload="beforeAvatarUpload2"
                    :on-remove="remove"
                    :limit="1"
                    :on-exceed="handleExceed"
                    :file-list="fileList">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">支持上传.mp3文件</div>
                    </el-upload>
                </div>
            </div>
            <div class="line flex-center-Y">
                <div class="label">商品名称</div>
                <div class="input">
                    <el-input placeholder="请输入商品名称" v-model="form.skuName"></el-input>
                </div>
            </div>
            <div class="line flex-center-Y">
                <div class="label">商品描述</div>
                <div class="input">
                    <el-input type="textarea" placeholder="请输入商品描述" v-model="form.subtitleName"></el-input>
                </div>
            </div>
            <div class="line flex-center-Y">
                <div class="label">所属分类</div>
                <div class="input">
                    <el-select v-model="form.typeId"
                            placeholder="请选择"
                            slot="prepend">
                        <el-option v-for="item in typeList1"
                                :key="item.typeId"
                                :label="item.typeName"
                                :value="item.typeId">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <div class="line flex-center-Y">
                <div class="label">是否精品歌曲</div>
                <div class="input">
                    <el-select v-model="form.isFree"
                            placeholder="请选择"
                            slot="prepend">
                        <el-option label="是" value="N"></el-option>
                        <el-option label="否" value="Y"></el-option>
                    </el-select>
                </div>
            </div>
            <div class="line flex-center-Y">
                <div class="label">商品标签1</div>
                <div class="input">
                    <el-input placeholder="请输入商品标签" v-model="form.goodsLabel1"></el-input>
                </div>
            </div>
            <div class="line flex-center-Y">
                <div class="label">商品标签2</div>
                <div class="input">
                    <el-input placeholder="请输入商品标签" v-model="form.goodsLabel2"></el-input>
                </div>
            </div>
            <div class="line flex-center-Y">
                <div class="label">商品标签3</div>
                <div class="input">
                    <el-input placeholder="请输入商品标签" v-model="form.goodsLabel3"></el-input>
                </div>
            </div>
            <div class="line flex-center-Y">
                <div class="label">商品价格（元）</div>
                <div class="input">
                    <el-input placeholder="请输入商品价格" v-model="form.salePrice" type="number" @input="form.discountedPrice=form.salePrice"></el-input>
                </div>
            </div>
            <div class="line flex-center-Y">
                <div class="label">详情介绍</div>
                <div class="flex-center-Y" style="flex-wrap:wrap;width:400px">
                    <div class="img" v-for="(item,i) in musicPictureList" :key="i" >
                        <div class="trangle" @click="musicPictureList.splice(i,1)"></div>
                        <img :src="item.filePath" alt="">
                    </div>
                    <div>
                        <el-upload
                            class="avatar-uploader"
                            action=""
                            :http-request="upload3"
                            :show-file-list="false"
                            :before-upload="beforeAvatarUpload">
                            <div>
                                <img src="../../assets/icons/upload.png" alt="">
                            </div>
                        </el-upload>
                    </div>
                </div>
            </div>
            <div class="line flex-center-Y">
                <div class="label">排序码</div>
                <div class="input"><el-input v-model="form.orderNum" type="number" placeholder="排序码必须为整数"></el-input></div>
            </div>
            <div class="line flex-center-Y">
                <div class="label">是否上架</div>
                <el-switch
                    v-model="form.isOnline"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    active-value="1"
                    inactive-value="0"
                    >
                </el-switch>
            </div>
            <div class="bottom flex-center-Y justify-center">
                <div class="btn1" @click="createVisible = false">取消</div>
                <div class="btn" @click="commitForm()">确认</div>
            </div>
        </el-dialog>
        <el-dialog :visible.sync="editVisible" title="编辑商品" width="600px" custom-class='shopdialog' @close="clear">
            <div class="line flex-center-Y">
                <div class="label">商品图片</div>
                <div>
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
            <div class="line flex-center-Y">
                <div class="label">音频文件</div>
                <div>
                    <el-upload
                    class="upload-demo"
                    action=""
                    :http-request="upload2"
                    :before-upload="beforeAvatarUpload2"
                    :on-remove="remove"
                    :limit="1"
                    :on-exceed="handleExceed"
                    :file-list="fileList">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">支持上传.mp3文件</div>
                    </el-upload>
                </div>
            </div>
            <div class="line flex-center-Y">
                <div class="label">商品名称</div>
                <div class="input">
                    <el-input placeholder="请输入商品名称" v-model="form.skuName"></el-input>
                </div>
            </div>
            <div class="line flex-center-Y">
                <div class="label">商品描述</div>
                <div class="input">
                    <el-input type="textarea" placeholder="请输入商品描述" v-model="form.subtitleName"></el-input>
                </div>
            </div>
            <div class="line flex-center-Y">
                <div class="label">所属分类</div>
                <div class="input">
                    <el-select v-model="form.typeId"
                            placeholder="请选择"
                            slot="prepend">
                        <el-option v-for="item in typeList1"
                                :key="item.typeId"
                                :label="item.typeName"
                                :value="item.typeId">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <div class="line flex-center-Y">
                <div class="label">是否精品歌曲</div>
                <div class="input">
                    <el-select v-model="form.isFree"
                            placeholder="请选择"
                            slot="prepend">
                        <el-option label="是" value="N"></el-option>
                        <el-option label="否" value="Y"></el-option>
                    </el-select>
                </div>
            </div>
            <div class="line flex-center-Y">
                <div class="label">商品标签1</div>
                <div class="input">
                    <el-input placeholder="请输入商品标签" v-model="form.goodsLabel1"></el-input>
                </div>
            </div>
            <div class="line flex-center-Y">
                <div class="label">商品标签2</div>
                <div class="input">
                    <el-input placeholder="请输入商品标签" v-model="form.goodsLabel2"></el-input>
                </div>
            </div>
            <div class="line flex-center-Y">
                <div class="label">商品标签3</div>
                <div class="input">
                    <el-input placeholder="请输入商品标签" v-model="form.goodsLabel3"></el-input>
                </div>
            </div>
            <div class="line flex-center-Y">
                <div class="label">商品价格（元）</div>
                <div class="input">
                    <el-input placeholder="请输入商品价格" v-model="form.salePrice" type="number" @input="form.discountedPrice=form.salePrice"></el-input>
                </div>
            </div>
            <div class="line flex-center-Y">
                <div class="label">详情介绍</div>
                <div class="flex-center-Y" style="flex-wrap:wrap;width:400px">
                    <div class="img" v-for="(item,i) in musicPictureList" :key="i" >
                        <div class="trangle" @click="musicPictureList.splice(i,1)"></div>
                        <img :src="item.filePath" alt="">
                    </div>
                    <div>
                        <el-upload
                            class="avatar-uploader"
                            action=""
                            :http-request="upload3"
                            :show-file-list="false"
                            :before-upload="beforeAvatarUpload">
                            <div>
                                <img src="../../assets/icons/upload.png" alt="">
                            </div>
                        </el-upload>
                    </div>
                </div>
            </div>
            <div class="line flex-center-Y">
                <div class="label">排序码</div>
                <div class="input"><el-input v-model="form.orderNum" type="number" placeholder="排序码必须为整数"></el-input></div>
            </div>
            <div class="line flex-center-Y">
                <div class="label">是否上架</div>
                <el-switch
                    v-model="form.isOnline"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    active-value="1"
                    inactive-value="0"
                    >
                </el-switch>
            </div>
            <div class="bottom flex-center-Y justify-center">
                <div class="btn1" @click="editVisible = false">取消</div>
                <div class="btn" @click="commitEdit()">保存</div>
            </div>
        </el-dialog>
        <el-dialog :visible.sync="removeVisible" title="" width="400px" custom-class='shopdialog1'>
            <div class="content">是否确认删除该商品?</div>
            <div class="bottom flex-center-Y justify-center">
                <div class="btn1" @click="removeVisible = false">取消</div>
                <div class="btn" @click="commitRemove()">确认</div>
            </div>
        </el-dialog>
        <el-dialog :title="title"
                   :visible.sync="typeDialogVisible"
                   width="40%">
            <el-form class="small-space demo-form-inline"
                     label-position="left"
                     label-width="80px"
                     :inline="true">
                <el-form-item label="分类名称"
                              required>
                    <el-input type="text"
                              maxlength="8" 
                              show-word-limit
                              v-model="typeName"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer"
                 class="dialog-footer">
                <div style="text-align:right">
                    <el-button @click="typeDialogVisible = false">取 消</el-button>
                    <el-button type="primary"
                               @click="addType"
                               v-if="dialogType==1">保 存</el-button>
                    <el-button type="primary"
                               @click="editType"
                               v-if="dialogType==2">编 辑</el-button>
                </div>
            </div>
        </el-dialog>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import axios from 'axios'
export default {
    data() {
        return {
            showshow:false,
            expands:[],
            productionStatus:"0",
            batchList:[],
            listLoading: false,
            totalCount: 0,
            form:{skuPicture:"",skuName:"",salePrice:"",isOnline:"1",isFree:"Y"},
            addData:[{createdTimes:"",wareNums:""}],
            tableData: [{}],
            typeFilters: [],
            typeFiltersB: [
                { text: "由低到高", value: 1 },
                { text: "由高到底", value: 2 },
                { text: "只看库存预警", value: 3 }
            ],
            typeFiltersC: [{ text: "库存不足", value: 1 }],
            thresholdFilters:[{text:'仅看临期',value:1},{text:'仅看过期',value:2}],
            periodoptions:[{value: '0',label: '按生产日期'},{value: '1',label: '按过保日期'},{value: '2',label: '无保质期'}],
            params: {
                pageRow: 10,
                pageNum: 1,
                skuName:"",
                isFree:"",
                typeId:""
            },
            setAlertDialogVisible: false,
            addStockVisible:false,
            skuInfoForm:{},
            wareoptions:[],
            productionStatus:"0",
            selectWare:this.$route.params.wareId,
            pickerOptions0: { 
                disabledDate(time) {
                    return time.getTime() > Date.now();//如果没有后面的-8.64e7就是不可以选择今天的 
                }
            },
            pickerOptions01: { 
                disabledDate(time) {
                    return time.getTime() < Date.now()-8.64e7;//如果没有后面的-8.64e7就是不可以选择今天的 
                }
            },
            selectRow:"",//当前操作的父行
            createVisible:false,
            typeDialogVisible:false,
            editVisible:false,
            removeVisible:false,
            musicPictureList:[],
            imageUrl1:"",
            typeList:[],
            typeList1:[],
            typeName: "",
            title:"",
            dialogType:false,
            contryList:[
                {contryId:"MX",contryName:"墨西哥"},
                {contryId:"CU",contryName:"古巴"},
                {contryId:"HN",contryName:"洪都拉斯"},
                {contryId:"JM",contryName:"牙买加"},
                {contryId:"CR",contryName:"哥斯达黎加"},
                {contryId:"PG",contryName:"巴拿马"},
                {contryId:"CO",contryName:"哥伦比亚"},
                {contryId:"BZ",contryName:"巴西"},
                {contryId:"ET",contryName:"埃塞俄比亚"},
                {contryId:"KE",contryName:"肯尼亚"},
                {contryId:"CN",contryName:"中国"},
                {contryId:"ID",contryName:"印度尼西亚"}
            ],
            fileList:[],
        };
    },
    created() {
        if(this.$route.params.skuCodes=='_'){
            this.params.skuCodes=''
        }
        this.getTypeList()
        document.getElementsByTagName("body")[0].style.minWidth="1000px";
        document.getElementsByTagName("body")[0].style.overflow="auto";
    },
    methods: {
        editTop(row){
             this.$confirm('是否保存修改?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.api({
                        url: "/shopping/inventory/updateWarePurchaseLimit",
                        method: "post",
                        data: {wareLimit:row.wareLimit,purchaseLimit:row.purchaseLimit,purchasePeriod:row.purchasePeriod,wareId:this.selectWare,skuCode:row.skuCode}
                    }).then(data => {
                        this.$message({
                                type: "success",
                                message: "保存成功 !"
                            });
                            this.getList();
                    }).catch(data =>{
                        
                    });
                }).catch(() => {
                       
                });
            

        },
        showedit(row){
            this.showshow=true
            row.showEdit=true
            let batchList=JSON.parse(JSON.stringify(this.batchList))
            this.batchList=batchList
        },
        editbatch(row){
            let  gmtProduction,productionDate,outWarrantyTime,batchId
                if(!row.productionStatus){
                    this.$message({
                        type: "error",
                        message: "请选择保质期类型"
                    });
                    return;
                }
                if(row.productionStatus=='0'){
                    gmtProduction=row.gmtProduction
                    productionDate=row.productionDate
                    if(!gmtProduction || !productionDate){
                        this.$message({
                        type: "error",
                        message: "请填写生产日期及保质期"
                    });
                    return;
                    }
                }else if(row.productionStatus=='1'){
                    outWarrantyTime=row.outWarrantyTime
                    if(!outWarrantyTime){
                        this.$message({
                        type: "error",
                        message: "请填写过保日期"
                    });
                    return;
                    }
                }else if(row.productionStatus=='2'){
                    
                }
                if(!row.purchasePrice){
                    this.$message({
                        type: "error",
                        message: "请填写成本"
                    });
                    return;
                }
                if(!row.residueNum){
                    this.$message({
                        type: "error",
                        message: "请填写数量"
                    });
                    return;
                }
            this.api({
                url: "/shopping/inventory/updateWareSkuInfo",
                method: "post",
                data: { batchId:row.batchId,purchasePrice:row.purchasePrice,outWarrantyTime:outWarrantyTime,productionStatus:row.productionStatus,createdTimes:gmtProduction,wareNums:row.residueNum,skuCode:this.skuCode,wareId:this.selectWare,productionDate:productionDate}
            }).then(data => {
                this.$message({
                        type: "success",
                        message: "保存成功 !"
                    });
                this.getBatch()
                this.batchList[0].showCommit=false
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
        beforeAvatarUpload2(file) {
            var testmsg = file.name.substring(file.name.lastIndexOf('.')+1)
            const extension = testmsg === 'mp3'
            if(!extension){
            this.$message({
                message:"上传文件只能是mp3格式！",
                type:'error'
            })
            }
            return extension;
        },
        upload1(content) {//商品图片
            var formData = new FormData();
            formData.append("file", content.file);
            this.api({
                url: "/uploadfile/uploadPic",
                method: "post",
                data: formData
            })
                .then(data => {
                    this.imageUrl1=data.filePath
                    this.form.skuPicture=data.tempPath
                })
                .catch(e => {});
        },
        upload2(content) {//音频文件
            var formData = new FormData();
            formData.append("file", content.file);
            this.api({
                url: "/uploadfile/uploadMusic",
                method: "post",
                data: formData
            })
                .then(data => {
                    this.form.mp3Url=data.tempPath
                })
                .catch(e => {});
        },
        handleExceed(){
            this.$message({
                message:"请先删除原文件哦~",
                type:'warning'
            })
        },
        remove(fileList){
            console.log(99999)
            this.form.mp3Url=""
        },
        upload3(content) {//商品图片
            var formData = new FormData();
            formData.append("file", content.file);
            this.api({
                url: "/uploadfile/uploadPic",
                method: "post",
                data: formData
            })
                .then(data => {
                    let img={
                        filePath:data.filePath,
                        tempPath:data.tempPath
                    }
                    this.musicPictureList.push(img)
                })
                .catch(e => {});
        },
        editOrder(row,index){
            row.isEdit=true
            this.tableData=JSON.parse(JSON.stringify(this.tableData))
            this.$nextTick(_ => {
                this.$refs[`input${index}`].focus()
            })
        },
        changeOrderNum(row){//修改上架顺序
            this.api({
                    url: "/shopping/sku/onlineOrderUpdate",
                    method: "post",
                    data: {
                        skuCode:row.skuCode,
                        orderNum:row.orderNum
                    }
                })
                    .then(data => {
                        row.isEdit=false
                        this.getList()
                    })
                    .catch(e => {});
        },
        commitRemove(){//删除商品
            this.api({
                    url: "/support/api/addOrUpdateMusic",
                    method: "post",
                    data: {
                        action:"DELETE",
                        isAlive:"0",
                        skuCode:this.selectData.skuCode,
                        isOnline:this.selectData.isOnline,
                        skuName:this.selectData.skuName,
                        salePrice:this.selectData.salePrice*100,
                        skuPicture:this.selectData.skuPicture,
                        musicPictureList:this.selectData.musicPictureList,
                        typeId:this.selectData.typeId,
                        goodsLabel1:this.selectData.goodsLabel1,
                        goodsLabel2:this.selectData.goodsLabel2,
                        goodsLabel3:this.selectData.goodsLabel3,
                        subtitleName:this.selectData.subtitleName,
                        orderNum:this.selectData.orderNum,
                        mp3Url:this.selectData.mp3Url,
                        isFree:this.selectData.isFree
                        }
                })
                    .then(data => {
                        this.getTypeList()
                        this.removeVisible=false
                    })
                    .catch(e => {});
        },
        changePut(row){//上架
            this.api({
                    url: "/shopping/sku/onlineChange",
                    method: "post",
                    data: {
                        skuCode:row.skuCode,
                        isOnline:row.isOnline
                    }
                })
                    .then(data => {
                        this.getList()
                    })
                    .catch(e => {});
        },
        changeCommend(row){//推荐
            this.api({
                    url: "/shopping/sku/recommendChange",
                    method: "post",
                    data: {
                        skuCode:row.skuCode,
                        isRecommend:row.isRecommend
                    }
                })
                    .then(data => {
                        this.getList()
                    })
                    .catch(e => {});
        },
        commitForm(){//添加商品
            var musicPictureList=[]
            for(let i in this.musicPictureList){
                musicPictureList.push(this.musicPictureList[i].tempPath)
            }
            if(!this.form.skuName){
                    this.$message({
                        type: "warning",
                        message: "请输入商品名称"
                    });
                    return;
                }
            if(!this.form.mp3Url){
                    this.$message({
                        type: "warning",
                        message: "请上传音频文件"
                    });
                    return;
                }
            if(!this.form.subtitleName){
                    this.$message({
                        type: "warning",
                        message: "请输入商品描述"
                    });
                    return;
                }
            if(!this.form.typeId){
                    this.$message({
                        type: "warning",
                        message: "请选择分类"
                    });
                    return;
                }
            if(!this.form.salePrice){
                    this.$message({
                        type: "warning",
                        message: "请输入商品价格"
                    });
                    return;
                }
            if(!this.form.skuPicture){
                    this.$message({
                        type: "warning",
                        message: "请上传商品图片"
                    });
                    return;
                }
            if(this.musicPictureList.length==0){
                    this.$message({
                        type: "warning",
                        message: "请上传详情介绍图片"
                    });
                    return;
                }
            this.api({
                url: "/support/api/addOrUpdateMusic",
                method: "post",
                data: {
                    action:"ADD",
                    isAlive:"1",
                    isOnline:this.form.isOnline,
                    skuName:this.form.skuName,
                    salePrice:this.form.salePrice*100,
                    skuPicture:this.form.skuPicture,
                    musicPictureList:musicPictureList,
                    typeId:this.form.typeId,
                    goodsLabel1:this.form.goodsLabel1,
                    goodsLabel2:this.form.goodsLabel2,
                    goodsLabel3:this.form.goodsLabel3,
                    subtitleName:this.form.subtitleName,
                    orderNum:this.form.orderNum,
                    mp3Url:this.form.mp3Url,
                    isFree:this.form.isFree
                }
            }).then(data => {
                this.$message({
                        type: "success",
                        message: "添加成功 !"
                    });
                this.imageUrl1=''
                this.form={
                            skuName:"",
                            salePrice:"",
                            skuPicture:"",
                            musicPictureList:"",
                            typeId:"",
                            goodsLabel1:"",
                            goodsLabel2:"",
                            goodsLabel3:"",
                            subtitleName:"",
                            orderNum:"",
                            mp3Url:"",
                            isOnline:"1",
                            isFree:"Y"
                            }
                this.musicPictureList=[]
                this.createVisible=false
                this.getTypeList()
            }).catch(data =>{
                 
            });
            
        },
        edit(row){
            this.editVisible=true
            this.api({
                url: "/support/api/updateMusicShow",
                method: "post",
                data: {
                    skuCode:row.skuCode
                }
            }).then(data => {
                console.log(data.fileName)
                this.form=data
                this.imageUrl1=this.form.skuPicture
                var musicPictureList=[]
                for(let i in this.form.musicPictureList){
                    musicPictureList.push({filePath:this.form.musicPictureList[i].pictureUrl})
                }
                this.musicPictureList=musicPictureList
                this.fileList=[{name:data.fileName,url:this.form.mp3Url}]
            });
        },
        clear(){
            this.imageUrl1=''
            this.form={
                        skuName:"",
                        salePrice:"",
                        skuPicture:"",
                        musicPictureList:"",
                        typeId:"",
                        goodsLabel1:"",
                        goodsLabel2:"",
                        goodsLabel3:"",
                        subtitleName:"",
                        orderNum:"",
                        mp3Url:"",
                        isOnline:"1",
                        isFree:"Y"
                        }
            this.musicPictureList=[]
        },
        commitEdit(){//编辑商品
            var musicPictureList=[]
            for(let i in this.musicPictureList){
                if(this.musicPictureList[i].tempPath){
                    musicPictureList.push(this.musicPictureList[i].tempPath)
                }else{
                    musicPictureList.push(this.musicPictureList[i].filePath)
                }
            }
            if(!this.form.skuName){
                    this.$message({
                        type: "warning",
                        message: "请输入商品名称"
                    });
                    return;
                }
            if(!this.form.mp3Url){
                    this.$message({
                        type: "warning",
                        message: "请上传音频文件"
                    });
                    return;
                }
            if(!this.form.subtitleName){
                    this.$message({
                        type: "warning",
                        message: "请输入商品描述"
                    });
                    return;
                }
            if(!this.form.typeId){
                    this.$message({
                        type: "warning",
                        message: "请选择分类"
                    });
                    return;
                }
            if(!this.form.salePrice){
                    this.$message({
                        type: "warning",
                        message: "请输入商品价格"
                    });
                    return;
                }
            if(!this.form.skuPicture){
                    this.$message({
                        type: "warning",
                        message: "请上传商品图片"
                    });
                    return;
                }
            if(this.musicPictureList.length==0){
                    this.$message({
                        type: "warning",
                        message: "请上传详情介绍图片"
                    });
                    return;
                }
            
            this.api({
                url: "/support/api/addOrUpdateMusic",
                method: "post",
                data: {
                    action:"UPDATE",
                    isAlive:"1",
                    isOnline:this.form.isOnline,
                    skuCode:this.form.skuCode,
                    skuName:this.form.skuName,
                    salePrice:this.form.salePrice*100,
                    skuPicture:this.form.skuPicture,
                    musicPictureList:musicPictureList,
                    typeId:this.form.typeId,
                    goodsLabel1:this.form.goodsLabel1,
                    goodsLabel2:this.form.goodsLabel2,
                    goodsLabel3:this.form.goodsLabel3,
                    subtitleName:this.form.subtitleName,
                    orderNum:this.form.orderNum,
                    mp3Url:this.form.mp3Url,
                    isFree:this.form.isFree
                }
            }).then(data => {
                this.$message({
                        type: "success",
                        message: "保存成功 !"
                    });
                this.imageUrl1=''
                this.form={
                            skuName:"",
                            salePrice:"",
                            skuPicture:"",
                            musicPictureList:"",
                            typeId:"",
                            goodsLabel1:"",
                            goodsLabel2:"",
                            goodsLabel3:"",
                            subtitleName:"",
                            orderNum:"",
                            mp3Url:"",
                            isOnline:"1",
                            isFree:"Y"
                            }
                this.musicPictureList=[]
                this.editVisible=false
                this.getTypeList()
            }).catch(data =>{
                 
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
        show() {
            this.setAlertDialogVisible = true;
        },
        setAlert(row, column, cell, event) {
            // console.log(row);
            // console.log(column);
            // console.log(cell);
            // console.log(event);
        },
        search() {
            this.params.pageNum=1
            this.getList(this.params);
        },
        filterMethod(filters) {
            //商品分类 删选
            for (let i in filters) {
                this.params[i] = filters[i][0];
            }
            this.getList(this.params);
        },
        sortMethod({ column, prop, order }) {
            let sort = "";
            if (order == "ascending") sort = 1;
            if (order == "descending") sort = 2;
            this.getList({
                prop: sort
            });
        },
        getList() {
            this.listLoading = true;
            this.api({
                url: "/support/api/musicList",
                method: "post",
                data: this.params
            }).then(data => {
                this.listLoading = false;
                this.tableData = data.list;
                this.totalCount = data.totalCount;
            });
        },
        showType(scope) {//添加或编辑分类
            console.log(scope)
            if (scope.typeId) {
                this.title = "编辑分类";
                this.dialogType = 2;
                this.typeId = scope.typeId;
                this.typeName = scope.typeName;
            } else {
                this.title = "创建分类";
                this.dialogType = 1;
                this.typeName = "";
            }
            this.typeDialogVisible = true;
        },
        addType(){//添加分类
            if (!this.typeName || this.typeName.length > 8) {
                this.$message({
                    type: "warning",
                    message: "请输入少于8字的分类名称"
                });
                return;
            }
            if (!this.isHasName()) {
                this.$message({
                    type: "warning",
                    message: "该分类名称已存在"
                });
                return;
            }
            this.api({
                url: "/support/api/addType",
                method: "post",
                data: {
                    typeName: this.typeName
                }
            }).then(data => {
                this.$message({
                    type: "success",
                    message: "添加成功"
                });
                this.getTypeList()
                this.typeDialogVisible = false;
            });
        },
        editType(item){//编辑分类
            if (!this.typeName || this.typeName.length > 8) {
                this.$message({
                    type: "warning",
                    message: "请输入少于8字的分类名称"
                });
                return;
            }
            if (!this.isHasName()) {
                this.$message({
                    type: "warning",
                    message: "该分类名称已存在"
                });
                return;
            }
            if (!this.typeId) {
                this.$message({
                    type: "warning",
                    message: "缺少typeId"
                });
                return;
            }
            this.api({
                url: "/support/api/updateType",
                method: "post",
                data: {
                    typeId: this.typeId,
                    typeName: this.typeName
                }
            }).then(data => {
                this.$message({
                    type: "success",
                    message: "修改成功"
                });
                this.getTypeList()
                this.getList()
                this.typeDialogVisible = false;
            });
        },
        deleteType(row){//删除分类
            this.$confirm("确定删除该分类?", "提示", {
                confirmButtonText: "确定",
                showCancelButton: false,
                type: "warning"
            }).then(() => {
                this.api({
                    url: "/support/api/deleteType",
                    method: "post",
                    data: {
                        typeId: row.typeId
                    }
                }).then(data => {
                    this.$message({
                        type: "success",
                        message: "删除成功"
                    });
                    this.getTypeList()
                    this.params.typeId=""
                    this.getList()
                });
            });
        },
        getTypeList(){
            this.api({
                url: "/support/api/typeList",
                method: "post",
                data:{}
            }).then(data => {
                this.typeList=data.list
                this.typeList1=JSON.parse(JSON.stringify(this.typeList)) 
                this.typeList.unshift({typeName:"全部",typeId:""})
                if(!this.params.typeId){
                    this.typeList[0].isActive=true
                    this.params.typeId=this.typeList[0].typeId
                }else{
                    this.typeList.forEach(item => {
                        if(item.typeId==this.params.typeId){
                            item.isActive=true
                        }
                    })
                }
                this.getList()
            });
        },
        isHasName() {
            for (let i in this.typeList) {
                if (this.typeList[i].typeName == this.typeName) {
                    return false;
                }
            }
            return true;
        },
        chooseType(index) {
            for (let i in this.typeList) {
                let active = i == index ? true : false;
                this.$set(this.typeList[i], "isActive", active);
            }
            this.params.typeId =
                index == 0 ? null : this.typeList[index].typeId;
            this.getList();
        },
    },
    computed: {
        ...mapGetters(["userId", "userName"])
    }
};
</script>

