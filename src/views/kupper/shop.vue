<style scoped>
#shop{
    background: #F2F4F8;
    border: 1px solid #E2E5EB;
}
#shop .container{
            min-height: 80vh;
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
    margin-right: 30px;}
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
#shop .el-input__suffix{line-height: 32px;cursor:pointer;right: 10px;padding-left: 10px;
// border-left: 1px solid #DCDFE6;
}
.shopdialog{height: 600px;}
.shopdialog .el-dialog__body{height: 520px;overflow-y: auto;}
.shopdialog1 .el-dialog__header{padding: 0;}
.shopdialog1 .el-dialog__headerbtn .el-dialog__close{display: none;}
.shopdialog1 .content{margin-bottom:40px;text-align: center;}
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
                    <el-input placeholder="请输入商品名称" v-model="searchValue" @input="search">
                        <i
                            class="el-icon-search"
                            slot="suffix"
                            @click="search">
                        </i>
                    </el-input>
                </div>
                <div class="btn" @click="createVisible=true">创建商品</div>
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
                  @row-click="clickTable"
                  ref="refTable"
                  @sort-change="sortMethod"
                  @filter-change="filterMethod"
                  @expand-change="expandChange"
                  @cell-click="setAlert"
                  row-key="skuCode"
                  :expand-row-keys="expands">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-table :data="batchList" style="width: 100%" header-row-class-name="userTableStyle" cell-class-name="userCellStyle">
                        <el-table-column width="500" label="保质期类型" align="center">
                            <!-- <template slot="header" slot-scope="scope">
                                <div id="period">
                                    <el-select v-model="productionStatus" placeholder="请选择">
                                        <el-option
                                        v-for="item in periodoptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </template> -->
                            <template slot-scope="scope">
                                <el-row>
                                    <el-col :span="8">
                                        <div id="period">
                                            <el-select v-model="scope.row.productionStatus" v-if="scope.row.showEdit" placeholder="请选择">
                                                <el-option
                                                v-for="item in periodoptions"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                                </el-option>
                                            </el-select>
                                            <span v-if="!scope.row.showEdit && scope.row.productionStatus=='0'">按生产日期</span>
                                            <span v-if="!scope.row.showEdit && scope.row.productionStatus=='1'">按过保日期</span>
                                            <span v-if="!scope.row.showEdit && scope.row.productionStatus=='2'">无保质期</span>
                                        </div>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-date-picker
                                            v-if="scope.row.productionStatus=='0'"
                                            v-model="scope.row.gmtProduction"
                                            type="date"
                                            value-format="yyyy-MM-dd"
                                            format="yyyy-MM-dd"
                                            placeholder="选择生产日期"
                                            :picker-options="pickerOptions0">
                                        </el-date-picker>
                                    </el-col>
                                    <el-col :span="8">
                                        <div class="flex-center-Y">
                                            <div>
                                                <el-input v-model="scope.row.productionDate" placeholder="请输入保质期" type="number" v-if="scope.row.productionStatus=='0'"></el-input>
                                            </div>
                                            <div>
                                                <span  v-if="scope.row.productionStatus=='0'">&nbsp;天</span>
                                            </div>
                                            
                                        </div>
                                        
                                        <!-- <el-select v-model="scope.row.productionDate" placeholder="选择保质期"  v-if="scope.row.productionStatus=='0'">
                                                <el-option
                                                v-for="(item,index) in qualityoptions"
                                                :key="index"
                                                :label="item.label"
                                                :value="item.value">
                                                </el-option>
                                        </el-select>  -->
                                    </el-col> 
                                    <el-col :span="8">
                                        <el-date-picker
                                            v-if="scope.row.productionStatus=='1'"
                                            v-model="scope.row.outWarrantyTime"
                                            type="date"
                                            value-format="yyyy-MM-dd"
                                            format="yyyy-MM-dd"
                                            placeholder="选择过保日期 "
                                            :picker-options="pickerOptions01">
                                        </el-date-picker>
                                    </el-col> 
                                </el-row>
                                    
                            </template>
                        </el-table-column>
                        <el-table-column style="width: 18%"
                                         label="可用库存"
                                         align="center">
                             <template slot-scope="scope">
                                 <el-input-number v-model="scope.row.residueNum" :min="1" label="描述文字" v-if="scope.row.showEdit"></el-input-number>
                                 <span v-else>{{scope.row.residueNum}}</span>
                             </template>
                         </el-table-column>
                         
                        <el-table-column label="成本价"
                                        style="width: 18%"
                                        align="center">
                            <template slot-scope="scope">
                                <el-input v-model="scope.row.purchasePrice" type="number"  v-if="scope.row.showEdit"></el-input>
                                <span v-else>{{scope.row.purchasePrice}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="库存价值"
                                        style="width: 18%"
                                        align="center">
                            <template slot-scope="scope">
                                <span>￥{{scope.row.allPurchasePrice}}</span>
                                <!-- <el-input v-model="scope.row.allPurchasePrice"></el-input> -->
                            </template>
                        </el-table-column>
                        <el-table-column 
                                label="操作"
                                width="150"
                                align="center"
                                >
                            <template slot-scope="scope">
                                <i class="el-icon-circle-check" style="color:#67C23A;cursor:pointer" @click="commitAdd(scope.row)" v-if="scope.row.showCommit"></i>
                                <i class="el-icon-delete blue" @click="delbatch(scope.row)"></i>
                                <!-- <i class="el-icon-edit" style="color:#E6A23C;cursor:pointer" @click="showedit(scope.row)" v-if="!scope.row.showEdit"></i> -->
                                <i class="el-icon-circle-check" style="color:#67C23A;cursor:pointer" @click="editbatch(scope.row)" v-if="scope.row.showEdit && showshow"></i>
                            </template>
                            
                        </el-table-column>
                    </el-table>
                </template>
            </el-table-column>
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
            <el-table-column prop="specifications"
                             label="商品规格"
                             align="center">
                             </el-table-column>
            <el-table-column prop="typeName"
                             label="商品分类"
                             align="center">
                             </el-table-column>
            <el-table-column prop="discountPrice"
                             label="促销价格（元）"
                             align="center"></el-table-column>
                             <el-table-column prop="salePrice"
                             label="商品价格（元）"
                             align="center"></el-table-column>
            <el-table-column prop="showPicture"
                             label="详情图片"
                             align="center">
                <template slot-scope="scope">
                    <img :src="scope.row.showPicture"
                         width="40"
                         height="40"
                         class="portrait" />
                </template>
            </el-table-column>
            <el-table-column prop="longPicture"
                             label="详情介绍"
                             align="center">
                <template slot-scope="scope">
                    <img :src="scope.row.longPicture"
                         width="40"
                         height="40"
                         class="portrait" />
                </template>
            </el-table-column>
            <el-table-column prop="inOnline"
                             label="是否上架"
                             align="center">
                <template slot-scope="scope">
                    <el-switch
                        v-model="scope.row.isOnline"
                        active-color="#13ce66"
                        inactive-color="#ff4949"
                        active-value="Y"
                        inactive-value="N"
                        @change="changePut(scope.row)"
                        >
                    </el-switch>
                </template>
            </el-table-column>
            <el-table-column prop="appPicture"
                             label="上架排序"
                             align="center">
                <template slot-scope="scope">
                    <span v-if="!scope.row.isEdit">{{scope.row.orderNum}}</span>
                    <el-input v-else v-model="scope.row.orderNum" :ref="'input'+scope.$index" @blur="changeOrderNum(scope.row)"></el-input>
                    <i  v-if="!scope.row.isEdit" class="el-icon-edit-outline" @click.stop="editOrder(scope.row,scope.$index)"></i>
                </template>
            </el-table-column>
            <el-table-column prop="isRecommend"
                             label="是否推荐"
                             align="center">
                <template slot-scope="scope">
                    <el-switch
                        v-model="scope.row.isRecommend"
                        active-color="#13ce66"
                        inactive-color="#ff4949"
                        active-value="Y"
                        inactive-value="N"
                        @change="changeCommend(scope.row)"
                        >
                    </el-switch>
                </template>
            </el-table-column>
            <el-table-column prop="soldNumber"
                             label="销量"
                             style="width: 18%"
                             align="center"></el-table-column>
            <el-table-column label="总库存价值"
                             min-width="100px"
                             align="center">
                <template slot-scope="scope">
                    ¥{{scope.row.totalPurchasePrice || '0.00'}}
                </template>
            </el-table-column>
            <el-table-column 
                    label="操作"
                    width="150"
                    align="center"
                    >
                <template slot-scope="scope">
                    <span class="blue" @click.stop="edit(scope.row)">编辑</span> 
                    <span class="blue" v-if="scope.row.showadd" @click.stop="stockAdd(scope.row)">添加库存</span>
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
                <div class="label">商品名称</div>
                <div class="input">
                    <el-input placeholder="请输入商品名称" v-model="form.skuName"></el-input>
                </div>
            </div>
            <div class="line flex-center-Y">
                <div class="label">商品规格</div>
                <div class="input">
                    <el-input placeholder="请输入商品规格" v-model="form.specifications"></el-input>
                </div>
            </div>
            <div class="line flex-center-Y">
                <div class="label">商品描述</div>
                <div class="input">
                    <el-input type="textarea" placeholder="请输入商品描述" v-model="form.detail"></el-input>
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
                <div class="label">所属国家</div>
                <div class="input">
                    <el-select v-model="form.contryName"
                            placeholder="请选择"
                            slot="prepend"
                            clearable>
                        <el-option v-for="(item,i) in contryList"
                                :key="i"
                                :label="item.contryName"
                                :value="item.contryId">
                        </el-option>
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
                <div class="label">促销价格（元）</div>
                <div class="input">
                    <el-input placeholder="请输入促销价格" v-model="form.discountedPrice" type="number"></el-input>
                </div>
            </div>
            <!-- <div class="line flex-center-Y">
                <div class="label">折扣率</div>
                <div class="input">
                    <el-input placeholder="请输入折扣率" v-model="form.discountRate" type="number" @mousewheel.native.prevent></el-input>
                </div>
                &nbsp;%
            </div> -->
            <!-- <div class="line flex-center-Y">
                <div class="label">促销价格（元）</div>
                <div class="input">
                    {{Number(form.salePrice)*Number(form.discountRate)/100?(Number(form.salePrice)*Number(form.discountRate)/100).toFixed(2) : form.salePrice}}
                </div>
            </div> -->
            <div class="line flex-center-Y">
                <div class="label">详情图片</div>
                <div class="flex-center-Y" style="flex-wrap:wrap;width:400px">
                    <div class="img" v-for="(item,i) in skuShowPictureList" :key="i" >
                        <div class="trangle" @click="skuShowPictureList.splice(i,1)"></div>
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
            </div>
            <div class="line flex-center-Y">
                <div class="label">详情介绍</div>
                <div class="flex-center-Y" style="flex-wrap:wrap;width:400px">
                    <div class="img" v-for="(item,i) in skuLongPictureList" :key="i" >
                        <div class="trangle" @click="skuLongPictureList.splice(i,1)"></div>
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
                <div class="label">商品名称</div>
                <div class="input">
                    <el-input placeholder="请输入商品名称" v-model="form.skuName"></el-input>
                </div>
            </div>
            <div class="line flex-center-Y">
                <div class="label">商品规格</div>
                <div class="input">
                    <el-input placeholder="请输入商品规格" v-model="form.specifications"></el-input>
                </div>
            </div>
            <div class="line flex-center-Y">
                <div class="label">商品描述</div>
                <div class="input">
                    <el-input type="textarea" placeholder="请输入商品描述" v-model="form.detail"></el-input>
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
                <div class="label">所属国家</div>
                <div class="input">
                    <el-select v-model="form.contryName"
                            placeholder="请选择"
                            slot="prepend"
                            clearable>
                        <el-option v-for="(item,i) in contryList"
                                :key="i"
                                :label="item.contryName"
                                :value="item.contryId">
                        </el-option>
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
                <div class="label">促销价格（元）</div>
                <div class="input">
                    <el-input placeholder="请输入促销价格" v-model="form.discountedPrice" type="number"></el-input>
                </div>
            </div>
            <!-- <div class="line flex-center-Y">
                <div class="label">折扣率</div>
                <div class="input">
                    <el-input placeholder="请输入折扣率" v-model="form.discountRate" type="number" @mousewheel.native.prevent></el-input>
                </div>
                &nbsp;%
            </div> -->
            <!-- <div class="line flex-center-Y">
                <div class="label">促销价格（元）</div>
                <div class="input">
                    {{Number(form.salePrice)*Number(form.discountRate)/100?(Number(form.salePrice)*Number(form.discountRate)/100).toFixed(2) : form.salePrice}}
                </div>
            </div> -->
            <div class="line flex-center-Y">
                <div class="label">详情图片</div>
                <div class="flex-center-Y" style="flex-wrap:wrap;width:400px">
                    <div class="img" v-for="(item,i) in skuShowPictureList" :key="i" >
                        <div class="trangle" @click="skuShowPictureList.splice(i,1)"></div>
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
            </div>
            <div class="line flex-center-Y">
                <div class="label">详情介绍</div>
                <div class="flex-center-Y" style="flex-wrap:wrap;width:400px">
                    <div class="img" v-for="(item,i) in skuLongPictureList" :key="i" >
                        <div class="trangle" @click="skuLongPictureList.splice(i,1)"></div>
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
                <div class="label">盲盒二维码</div>
                <div class="input" style="width:80%">
                    https://h5.bud88.com/?skuCodeBox={{form.skuCodeBox}}
                </div>
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
        <el-dialog title="设置预警"
                   :visible.sync="setAlertDialogVisible"
                   width="40%">
            <el-row class="msg">
                <el-col :span="12">
                    <div class="name">SKU分类</div>
                    <div class="item-set"
                         v-for="(item,i) in typeFilters"
                         :key="i">{{item.text}}</div>
                </el-col>
                <el-col :span="12">
                    <el-tooltip class="item"
                                effect="light"
                                content="自采购单生成至仓库入库完成的时间，如超出设置的周期，可能导致采购单生成计划错误"
                                placement="top">
                        <div class="title-hover name">
                            采购周期
                            <i class="el-icon-warning orange"></i>
                        </div>
                    </el-tooltip>
                    <div class="item-set"
                         v-for="(item,i) in typeFilters"
                         :key="i">
                        <el-select v-model="item.goodsPeriod"
                                   placeholder="请选择"
                                   slot="prepend"
                                   size="small">
                            <el-option v-for="item in selectTabsA"
                                       :key="item.id"
                                       :label="item.name"
                                       :value="item.id">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
            </el-row>
            <div class="note">库存预警公式：SKU近30天出库数量/30*采购周期</div>
            <div class="note">注：该设置将关联采购单的自动生成</div>
            <span slot="footer"
                  class="dialog-footer">
                <el-button @click="setAlertDialogVisible = false">取 消</el-button>
                <el-button type="primary"
                           @click="confirmAlert">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog title="添加库存"
                   :visible.sync="addStockVisible"
                   >
            <el-form v-model="skuInfoForm" label-width="120px">
                <el-row>
                    <el-col :span="7">
                        <el-form-item label="SKU名称: ">
                            <span>{{skuInfoForm.skuName}}&nbsp;</span> 
                            <img :src="skuInfoForm.appPicture"
                                width="40"
                                height="40"
                                class="portrait" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="10">
                        <el-select v-model="productionStatus" placeholder="请选择" @change="changequality">
                            <el-option label="按生产日期" value="0"></el-option>
                            <el-option label="按过保日期" value="1"></el-option>
                            <el-option label="无保质期" value="2"></el-option>
                        </el-select>
                        <el-select v-model="quality" placeholder="选择保质期"  v-if="productionStatus=='0'">
                            <el-option
                            v-for="item in qualityoptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-row>
                <el-row v-for="(item,key) in addData" :key="key">
                    <el-col :span="10">
                        <el-form-item label="生产日期:" v-if="productionStatus=='0'">
                            <el-date-picker
                                v-model="item.createdTimes"
                                type="date"
                                value-format="yyyy-MM-dd"
                                format="yyyy-MM-dd"
                                placeholder="选择日期 "
                                :picker-options="pickerOptions0">
                            </el-date-picker>
                        </el-form-item>   
                        <!-- <el-form-item label="保质期:" v-if="productionStatus=='0'">
                            <el-select v-model="quality" placeholder="请选择">
                                <el-option
                                v-for="item in qualityoptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>  -->
                        <el-form-item label="过保日期:" v-if="productionStatus=='1'">
                            <el-date-picker
                                v-model="item.exceedTimes"
                                type="date"
                                value-format="yyyy-MM-dd"
                                format="yyyy-MM-dd"
                                placeholder="选择日期 "
                                :picker-options="pickerOptions01">
                            </el-date-picker>
                        </el-form-item>   
                    </el-col>
                    <el-col :span="13" class="addstock">
                        <el-form-item label="增加库存:">
                            <el-input v-model="item.wareNums" placeholder="请输入基础库存"></el-input> 
                            <span> 件</span>
                            <span class="" style="color:#f56c6c" @click="delLine(key)">&nbsp;&nbsp;<i class="el-icon-remove"></i></span>
                            <span class="blue" @click="addLine" v-if="key==addData.length-1">&nbsp;&nbsp;<i class="el-icon-circle-plus"></i></span>
                        </el-form-item>
                    </el-col>
                </el-row>
                <div style="text-align:center"> 
                    <span class="blue" @click="addLine" v-if="addData.length==0">&nbsp;&nbsp;<i class="el-icon-circle-plus"></i></span>
                </div>
                
            </el-form>
            <span slot="footer"
                  class="dialog-footer">
                <el-button @click="addStockVisible = false">取 消</el-button>
                <el-button type="primary"
                           @click="confirmAddStock">确 定</el-button>
            </span>
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
export default {
    data() {
        return {
            showshow:false,
            expands:[],
            productionStatus:"0",
            batchList:[],
            listLoading: false,
            totalCount: 0,
            form:{skuPicture:"",skuName:"",salePrice:"",discountPrice:"",discountedPrice:""},
            addData:[{createdTimes:"",wareNums:""}],
            searchValue: "",
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
                skuName:this.searchValue,
                typeId:""
            },
            setAlertDialogVisible: false,
            selectTabsA: [
                {
                    name: "1天",
                    id: 1
                },
                {
                    name: "2天",
                    id: 2
                },
                {
                    name: "3天",
                    id: 3
                },
                {
                    name: "4天",
                    id: 4
                },
                {
                    name: "5天",
                    id: 5
                },
                {
                    name: "6天",
                    id: 6
                },
                {
                    name: "7天",
                    id: 7
                },
                {
                    name: "14天",
                    id: 14
                },
                {
                    name: "30天",
                    id: 30
                }
            ],
            qualityoptions:[
                {
                    label: "1天",
                    value: 1
                },
                {
                    label: "一周",
                    value: 7
                },
                {
                    label: "一个月",
                    value: 30
                },
                {
                    label: "两个月",
                    value: 60
                },
                {
                    label: "三个月",
                    value: 60
                },
                {
                    label: "半年",
                    value: 180
                },
                {
                    label: "九个月",
                    value: 270
                },
                {
                    label: "一年",
                    value: 365
                },
                {
                    label: "两年",
                    value: 730
                }
            ],
            quality:"",
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
            skuShowPictureList:[],
            skuLongPictureList:[],
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
            ]
        };
    },
    created() {
        if(this.$route.params.skuCodes=='_'){
            this.params.skuCodes=''
        }
        this.getTypeList()
        // this.getList();
        // this.getWare()
        document.getElementsByTagName("body")[0].style.minWidth="1400px";
        document.getElementsByTagName("body")[0].style.overflow="auto";
    },
    methods: {
        toBack(){//返回上级
            this.$router.push({path:'/operation/'})
            },
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
        upload1(content) {//商品图片
            var formData = new FormData();
            formData.append("file", content.file);
            this.api({
                url: "/uploadfile/upload",
                method: "post",
                data: formData
            })
                .then(data => {
                    this.imageUrl1=data.filePath
                    this.form.skuPicture=data.tempPath
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
                    let img={
                        filePath:data.filePath,
                        tempPath:data.tempPath
                    }
                    this.skuShowPictureList.push(img)
                })
                .catch(e => {});
        },
        upload3(content) {//商品图片
            var formData = new FormData();
            formData.append("file", content.file);
            this.api({
                url: "/uploadfile/upload",
                method: "post",
                data: formData
            })
                .then(data => {
                    let img={
                        filePath:data.filePath,
                        tempPath:data.tempPath
                    }
                    this.skuLongPictureList.push(img)
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
                    url: "/shopping/sku/delete",
                    method: "post",
                    data: {
                        skuCode:this.selectData.skuCode
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
            var skuShowPictureList=[]
            var skuLongPictureList=[]
            for(let i in this.skuShowPictureList){
                skuShowPictureList.push(this.skuShowPictureList[i].tempPath)
            }
            for(let i in this.skuLongPictureList){
                skuLongPictureList.push(this.skuLongPictureList[i].tempPath)
            }
            if(!this.form.skuName){
                    this.$message({
                        type: "warning",
                        message: "请输入商品名称"
                    });
                    return;
                }
            if(!this.form.specifications){
                    this.$message({
                        type: "warning",
                        message: "请输入商品规格"
                    });
                    return;
                }
            if(!this.form.detail){
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
            if(!this.form.discountedPrice){
                this.$message({
                    type: "warning",
                    message: "请输入商品促销价格"
                });
                return;
            }
            // if(!this.form.discountRate || Number(this.form.discountRate)>100 || this.form.discountRate<0){
            //         this.$message({
            //             type: "warning",
            //             message: "请输入0-100的折扣率"
            //         });
            //         return;
            //     }
            if(!this.form.skuPicture){
                    this.$message({
                        type: "warning",
                        message: "请上传商品图片"
                    });
                    return;
                }
            if(this.skuShowPictureList.length==0){
                    this.$message({
                        type: "warning",
                        message: "请上传详情图片"
                    });
                    return;
                }
            if(this.skuShowPictureList.length==0){
                    this.$message({
                        type: "warning",
                        message: "请上传详情介绍图片"
                    });
                    return;
                }
            this.api({
                url: "/shopping/sku/add",
                method: "post",
                data: {
                    skuName:this.form.skuName,
                    salePrice:this.form.salePrice,
                    discountedPrice:this.form.discountedPrice,
                    skuPicture:this.form.skuPicture,
                    skuShowPictureList:skuShowPictureList,
                    skuLongPictureList:skuLongPictureList,
                    typeId:this.form.typeId,
                    goodsLabel1:this.form.goodsLabel1,
                    goodsLabel2:this.form.goodsLabel2,
                    goodsLabel3:this.form.goodsLabel3,
                    contryName:this.form.contryName,
                    detail:this.form.detail,
                    specifications:this.form.specifications,
                    orderNum:this.form.orderNum
                }
            }).then(data => {
                this.$message({
                        type: "success",
                        message: "添加成功 !"
                    });
                this.imageUrl1=''
                this.form={
                            skuPicture:"",
                            skuName:"",
                            salePrice:"",
                            discountedPrice:"",
                            typeId:"",
                            goodsLabel1:"",
                            goodsLabel2:"",
                            goodsLabel3:"",
                            detail:"",
                            contryName:"",
                            specifications:"",
                            orderNum:""
                            }
                this.skuShowPictureList=[]
                this.skuLongPictureList=[]
                this.createVisible=false
                this.getTypeList()
            }).catch(data =>{
                 
            });
            
        },
        edit(row){
            this.editVisible=true
            this.api({
                url: "/shopping/sku/find/details",
                method: "post",
                data: {
                    skuCode:row.skuCode
                }
            }).then(data => {
                this.form=data
                this.imageUrl1=this.form.skuPicture
                var skuShowPictureList=[]
                for(let i in this.form.skuShowPictureList){
                    skuShowPictureList.push({filePath:this.form.skuShowPictureList[i]})
                }
                this.skuShowPictureList=skuShowPictureList
                var skuLongPictureList=[]
                for(let i in this.form.skuLongPictureList){
                    skuLongPictureList.push({filePath:this.form.skuLongPictureList[i]})
                }
                this.skuLongPictureList=skuLongPictureList
            });
        },
        clear(){
            this.imageUrl1=''
            this.form={
                        skuPicture:"",
                        skuName:"",
                        salePrice:"",
                        discountedPrice:"",
                        typeId:"",
                        goodsLabel1:"",
                        goodsLabel2:"",
                        goodsLabel3:"",
                        detail:"",
                        contryName:"",
                        orderNum:""
                        }
            this.skuShowPictureList=[]
            this.skuLongPictureList=[]
        },
        commitEdit(){//编辑商品
            var skuShowPictureList=[]
            var skuLongPictureList=[]
            for(let i in this.skuShowPictureList){
                if(this.skuShowPictureList[i].tempPath){
                    skuShowPictureList.push(this.skuShowPictureList[i].tempPath)
                }else{
                    skuShowPictureList.push(this.skuShowPictureList[i].filePath)
                }
            }
            for(let i in this.skuLongPictureList){
                if(this.skuLongPictureList[i].tempPath){
                    skuLongPictureList.push(this.skuLongPictureList[i].tempPath)
                }else{
                    skuLongPictureList.push(this.skuLongPictureList[i].filePath)
                }
            }
            if(!this.form.skuName){
                    this.$message({
                        type: "warning",
                        message: "请输入商品名称"
                    });
                    return;
                }
            if(!this.form.specifications){
                    this.$message({
                        type: "warning",
                        message: "请输入商品规格"
                    });
                    return;
                }
            if(!this.form.detail){
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
            
            if(!this.form.discountedPrice){
                this.$message({
                    type: "warning",
                    message: "请输入商品促销价格"
                });
                return;
            }
            // if(!this.form.discountRate || Number(this.form.discountRate)>100 || this.form.discountRate<0){
            //         this.$message({
            //             type: "warning",
            //             message: "请输入0-100的折扣率"
            //         });
            //         return;
            //     }
            if(!this.form.skuPicture){
                    this.$message({
                        type: "warning",
                        message: "请上传商品图片"
                    });
                    return;
                }
            if(this.skuShowPictureList.length==0){
                    this.$message({
                        type: "warning",
                        message: "请上传详情图片"
                    });
                    return;
                }
            if(this.skuShowPictureList.length==0){
                    this.$message({
                        type: "warning",
                        message: "请上传详情介绍图片"
                    });
                    return;
                }
            
            this.api({
                url: "/shopping/sku/update",
                method: "post",
                data: {
                    skuCode:this.form.skuCode,
                    skuName:this.form.skuName,
                    salePrice:this.form.salePrice,
                    discountedPrice:this.form.discountedPrice,
                    skuPicture:this.form.skuPicture,
                    skuShowPictureList:skuShowPictureList,
                    skuLongPictureList:skuLongPictureList,
                    typeId:this.form.typeId,
                    goodsLabel1:this.form.goodsLabel1,
                    goodsLabel2:this.form.goodsLabel2,
                    goodsLabel3:this.form.goodsLabel3,
                    contryName:this.form.contryName,
                    detail:this.form.detail,
                    specifications:this.form.specifications,
                    orderNum:this.form.orderNum

                }
            }).then(data => {
                this.$message({
                        type: "success",
                        message: "保存成功 !"
                    });
                this.imageUrl1=''
                this.form={
                            skuPicture:"",
                            skuName:"",
                            salePrice:"",
                            discountedPrice:"",
                            typeId:"",
                            goodsLabel1:"",
                            goodsLabel2:"",
                            goodsLabel3:"",
                            detail:"",
                            contryName:"",
                            specifications:"",
                            orderNum:""
                            }
                this.skuShowPictureList=[]
                this.skuLongPictureList=[]
                this.editVisible=false
                this.getTypeList()
            }).catch(data =>{
                 
            });
        },
        commitAdd(row){//提交添加库存
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
                url: "/shopping/sku/addStock",
                method: "post",
                data: {outWarrantyTime:outWarrantyTime,purchasePrice:row.purchasePrice,productionStatus:row.productionStatus,createdTimes:gmtProduction,wareNums:row.residueNum,skuCode:this.skuCode,wareId:this.selectWare,productionDate:productionDate}
            }).then(data => {
                this.$message({
                        type: "success",
                        message: "添加成功 !"
                    });
                this.getList()
                this.getBatch()
                
                this.batchList[0].showCommit=false
            }).catch(data =>{
                 
            });
        },
        delbatch(row){
            this.api({
                        url: "/shopping/sku/delBatchInfo",
                        method: "post",
                        data: {
                            batchId:row.batchId,
                            residueNum:row.residueNum,
                            skuCode:row.skuCode
                        }
                    })
                        .then(data => {
                            this.$message({
                                type: "success",
                                message: "删除成功 !"
                            });
                            this.getList()
                            this.getBatch()
                        })
        },
        expandChange(row, expandedRows) {
            this.selectRow=row
            if(expandedRows.length==0){//如果都关闭时要把父行上的 + 号去掉
                row.showadd=false
                this.tableData=JSON.parse(JSON.stringify(this.tableData))
            }
            //每次只能展开一行
            var that = this
            if (expandedRows.length) {
              that.expands = []
              if (row) {
                that.expands.push(row.skuCode)
              }
            } else {
              that.expands = []
            }
            //每次只能展开一行
            this.skuCode=row.skuCode
            for(let i in this.tableData){
                this.tableData[i].showadd=false
            }
            row.showadd=true
            this.getBatch()
        },
        clickTable(row,index,e){//点击行就展开
            //调用,table的方法,展开/折叠 行
            this.$refs.refTable.toggleRowExpansion(row)
        },
        getBatch(){
            this.api({
                        url: "/shopping/sku/batchInfo",
                        method: "post",
                        data: {
                            skuCode: this.skuCode,
                        }
                    })
                        .then(data => {
                           this.batchList=data.list
                           for(let i in this.batchList){
                               this.batchList[i].showEdit=false
                               if(this.batchList[i].gmtProduction){
                                   this.batchList[i].productionStatus='0'
                               }else if(this.batchList[i].outWarrantyTime){
                                   this.batchList[i].productionStatus='1'
                               }else{
                                   this.batchList[i].productionStatus='2'
                               }
                           }
                        })
        },
        toPurchase(row){
            this.$confirm('是否生成采购单去采购', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.api({
                        url: "/shopping/inventory/oneClickProcurement",
                        method: "post",
                        data: {
                            wareId : this.selectWare,
                            skuCode: row.skuCode,
                            purchaseLimit:row.purchaseLimit,
                            manageId: this.userId
                        }
                    })
                        .then(data => {
                            this.$message({
                                type: "success",
                                message: "操作成功!"
                            });
                            this.getList()
                        })
                }).catch(() => {
                      
                });
            
        },
        changequality(){
            this.quality=""
        },
        // getWare(){
        //      this.api({
        //         url: "/inventory/wareInfoList",
        //         method: "post",
        //         data: {
        //         }
        //     }).then(data => {
        //         this.wareoptions=data
        //         this.selectWare=data[0].wareId
        //         this.params.wareId=this.selectWare
        //         this.getList(this.params);
               
        //     });
        // },
        // selectWaree(){
        //     console.log(11111)
        //     this.params.wareId=this.selectWare
        //     this.getList(this.params);
        // },
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
        confirmAlert() {
            let array = "";
            for (let i in this.typeFilters) {
                if (!this.typeFilters[i].goodsPeriod) {
                    this.$message({
                        type: "warning",
                        message: "您有未填写的采购周期"
                    });
                    return;
                }
                let item = {
                    goodsType: this.typeFilters[i].value,
                    goodsPeriod: this.typeFilters[i].goodsPeriod
                };
                array += JSON.stringify(item);
            }
            this.api({
                url: "/shopping/ware/setWarn",
                method: "get",
                params: {
                    lists: array
                }
            }).then(data => {
                this.$message({
                    type: "success",
                    message: "设置成功"
                });
                this.setAlertDialogVisible = false;
            });
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
            // if (!this.searchValue) {
            //     this.$message({
            //         message: "你没有输入搜索条件哦～",
            //         type: "warning",
            //         duration: 2000
            //     });
            //     return;
            // }
            if (!this.selectedTab) {
                this.selectedTab = "skuName";
            }
            this.params[this.selectedTab] = this.searchValue;
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
                url: "/shopping/sku/find",
                method: "post",
                data: this.params
            }).then(data => {
                this.listLoading = false;
                this.tableData = data.list;
                this.totalCount = data.count;
                for(let i in this.tableData){
                    this.tableData[i].showPicture=this.tableData[i].skuShowPictureList[0] || ''
                    this.tableData[i].longPicture=this.tableData[i].skuLongPictureList[0] || ''
                }
                if(this.selectRow.skuCode){//进行过该行的操作之后,操作的行会赋给selectRow,再刷新tableData时要展示 + 号
                    for(let i in this.tableData){
                        if(this.tableData[i].skuCode==this.selectRow.skuCode){
                            this.tableData[i].showadd=true
                        }
                    }
                }
            });
        },
        stockAdd(row){
            // this.addStockVisible=true
            // this.productionStatus=row.productionStatus
            // this.skuInfoForm.appPicture=row.appPicture
            // this.skuInfoForm.skuName=row.skuName
            // this.skuInfoForm.skuCode=row.skuCode  
            // if(row.productionDate>0){
            //     this.quality=row.productionDate
            // } 
           this.showshow=false
            let batch={
                batchId:"",
                residueNum:1,
                allPurchasePrice:"",
                outWarrantyTime:"",
                showCommit:true,
                purchasePrice:0,
                showEdit:true,
            }
            this.batchList.unshift(batch)
        },
        addLine(){
            var add={}
            this.addData.push(add)
        },
        delLine(index){
            this.addData.splice(index,1)
        },
        confirmAddStock(){//保存手动添加的库存
            let createdTimes=""
            let wareNums=""
            for(let i in this.addData){
                if(this.productionStatus=='0'){
                    if(i==0){
                        createdTimes+=this.addData[i].createdTimes
                        wareNums+=this.addData[i].wareNums
                    }else{
                        createdTimes+=','+this.addData[i].createdTimes
                        wareNums+=','+this.addData[i].wareNums
                    }
                }else if(this.productionStatus=='1'){
                    if(i==0){
                        createdTimes+=this.addData[i].exceedTimes
                        wareNums+=this.addData[i].wareNums
                    }else{
                        createdTimes+=','+this.addData[i].exceedTimes
                        wareNums+=','+this.addData[i].wareNums
                    }
                }else if(this.productionStatus=='2'){
                    if(i==0){
                        wareNums+=this.addData[i].wareNums
                    }else{
                        wareNums+=','+this.addData[i].wareNums
                    }
                }
                
                
            }
            this.api({
                url: "/shopping/sku/addStock",
                method: "post",
                data: {productionStatus:this.productionStatus,createdTimes:createdTimes,wareNums:wareNums,skuCode:this.skuCode,wareId:this.selectWare,productionDate:this.quality || 0}
            }).then(data => {
                this.$message({
                        type: "success",
                        message: "添加成功 !"
                    });
                this.addData=[{createdTimes:"",wareNums:""}]
                this.addStockVisible=false
                this.getList()
            }).catch(data =>{
                if(this.addData.length==0){
                    this.$message({
                        type: "error",
                        message: "请先添加一条库存哦 !"
                    });
                }else{
                    this.$message({
                        type: "error",
                        message: "请将库存信息填写完整 !"
                    });
                }
                 
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
                url: "/shopping/insertType",
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
                url: "/shopping/updateType",
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
                    url: "/shopping/deleteType",
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
                url: "/shopping/selectType",
                method: "get"
            }).then(data => {
                this.typeList=data
                this.typeList.forEach(item => {
                    item.typeId=item.id
                })
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

