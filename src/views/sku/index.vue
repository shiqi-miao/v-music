<style scoped>
.icon {
    width: 18px;
    height: 18px;
    margin-right: 6px;
}
.center {
    text-align: center;
}
.brand-width{width:80%}
.brand-title{width:7%}
.bigfont{font-size: 40px;line-height: 1}
.smallfont{font-size: 20px;line-height: 1}
.minifont{font-size: 18px;line-height: 1}
.minifont1{font-size: 14px;line-height: 1.5}
.text-center{text-align: center}
.stockDialog{width: 23vw!important;height:23vh!important;padding: 2vh 2vw;color: #333;position: relative}
.stockDialog .title{margin-bottom: 1vh;font-weight: 600}
.stockDialog .word{font-weight: 500;line-height: 1.5}
.stockDialog .syncBox{position: absolute;bottom: 2vh;width: 100%;height: 50%;left: 0}
.stockDialog .bottom{width: 100%;height: 4.5vh;justify-content: space-around;position: absolute;left: 0;bottom: 2vh}
.stockDialog .bottom .btn{cursor: pointer;width: 20%;height:100%;color: #286EFF;border: 1px solid #286EFF;text-align: center;line-height: 4.5vh}
.stockDialog .bottom .btn1{cursor: pointer;width: 20%;height:100%;color: #fff;background:#286EFF;text-align: center;line-height: 4.5vh}
@media screen and (max-width: 1680px){
    .brand-title{width:10%}
    .bigfont{font-size: 38px;}
    .smallfont{font-size: 18px;}
    .minifont{font-size: 16px;}
    .minifont1{font-size: 12px;line-height: 1.5}
}
@media screen and (max-width:1440px){
    .brand-width{width:100%}
    .bigfont{font-size: 36px;}
    .smallfont{font-size: 16px;}
    .minifont{font-size: 14px;}
    .minifont1{font-size: 10px;line-height: 1.5}
}
@media screen and (max-width: 1280px){
    .brand-title{width:12%}
    .bigfont{font-size: 32px;}
    .smallfont{font-size: 14px;}
    .minifont{font-size: 12px;}
    .minifont1{font-size: 10px;line-height: 1.5}
}
</style>

<style>
/* .adddialogwidth .el-dialog{height: 50px} */
.stockdialogClass .el-loading-spinner i{color: #999}
.stockdialogClass .el-dialog__header,.stockdialogClass .el-dialog__body,.stockdialogClass .el-dialog__footer{padding:0}
.stockdialogClass{width: 23vw!important;max-height: 30vh!important}
.el-dialog{max-height: 70vh;overflow: auto}
@media screen and (max-width: 1520px){
    .adddialogwidth .el-dialog{width: 80%!important}
}
.append-input .el-input--suffix {
    width: 80px !important;
}
.upload-img {
    width: 100%;
    /* height: 100%; */
}
.el-form-item__content{line-height:20px}
.upload-block .el-upload-dragger {
    width: 180px;
    height: 180px;
}
.create1 .el-input{width: 120px!important}
.upload-block-2 .el-upload-dragger {
    width: 200px;
    height: 300px;
}
.grey {
    padding: 10px 6px;
    color: #999999;
}
.sku-form {
    padding: 0 30px;
}
.sku-form .el-form-item__label {
    width: 120px !important;
}
.blue {
    color: #66b1ff;
    cursor: pointer;
    /* padding: 10px 6px; */
}
.input-with-select {
    width: 50%;
}
#skuManage .el-select .el-input {
    width: 120px;
}
.create .el-input {
    width: 180px;
}
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
.label {
    display: inline-block;
    line-height: 36px;
    font-weight: 600;
}
.stock-num {
    padding: 10px;
    cursor: pointer;
}
.msg {
    padding: 0 6vw;
}
/* .center {
    text-align: center;
} */
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
.el-tabs__new-tab{background: #F56C6C;color: #fff;}
#tab-add{color:#fff;background: #F56C6C}
.cropper-content .cropper {
        width: auto;
        height: 300px;
    }
/* input type="number" 去掉箭头 */
#skuManage input::-webkit-outer-spin-button,
#skuManage input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0;
}
</style>

<template>
    <div class="app-container" id="skuManage">
        <el-input placeholder="请输入内容"
                  v-model="searchValue"
                  class="input-with-select"
                  @keyup.enter.native="search"
                  onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;"
                  @input="search">
            <el-select v-model="selectedTab"
                       placeholder="请选择"
                       slot="prepend">
                <el-option v-for="item in selectTabs"
                           :key="item.id"
                           :label="item.name"
                           :value="item.id">
                </el-option>
            </el-select>
            <el-button slot="append"
                       icon="el-icon-search"
                       @click="search"></el-button>
        </el-input>
        <el-button icon="el-icon-plus"
                   type="primary"
                   @click="showCreateGoods">创建商品</el-button>
        <el-button type="primary"
        v-if="goodsCashier"
                    @click="syncVisible=true">收银机商品同步</el-button>
        <br><br>
        <!-- <div v-clickoutside="hidemore"> -->
        <el-tabs v-model="activeTab"
                 type="card"
                 @tab-click="handleTabClick"
                 :before-leave="beforeLeave">
            <el-tab-pane :label="item.typeName"
                         :name="item.typeId"
                         v-for="(item,i) in selectGoodsTabs2"
                         :key="i">
                         <span slot="label">{{item.typeName}} <span v-if="item.num">({{item.num}})</span>   &nbsp;&nbsp;<i class="el-icon-edit" @click="show(item)" v-if="item.num>0"></i><i class="el-icon-delete" @click="remove(item)" v-if="item.num==0"></i></span>
            </el-tab-pane>
            <el-tab-pane label="..."
                         v-if="showmore && typenum>6"
                         name="more"
                         key="more"
                         
                         >
                         <span slot="label"><i class="el-icon-d-arrow-right"></i></span>
            </el-tab-pane>
            <el-tab-pane label="---"
                         v-if="!showmore && typenum>6"
                         name="less"
                         key="less"
                         
                         >
                         <span slot="label"><i class="el-icon-d-arrow-left"></i></span>
            </el-tab-pane>
            <el-tab-pane label="+ new"
                         name="add"
                         key="add"
                         >
            </el-tab-pane>
        </el-tabs>
        <!-- </div> -->
        <div>
        <div class="brand-width">
                    <el-row>
                        <el-col class="brand-title">
                            <b style="line-height:30px">品牌名称：</b>
                        </el-col>
                        <el-col :span="21">
                            <el-tag @click.native="chooseBrand(j)"
                            v-for="(item,j) in selectBrandTabs2"
                            :key="j"
                            type="info"
                            size="medium "
                            class="brandtype"
                            :class="{'active':item.isActive}">
                            <span>
                                {{item.brandName}}<span v-if="item.num">({{item.num}})</span> &nbsp;&nbsp;<i class="el-icon-edit"  v-if="item.num>0" @click="showBrand(item)"></i><i class="el-icon-delete" @click="deleteBrand(item)" v-if="item.num==0"></i>
                            </span>
                            </el-tag>
                            <el-button class="button-new-tag" size="small" @click="hidemorebrand" v-if="!showmoreBrand && brandnum>6"><i class="el-icon-d-arrow-left"></i> </el-button>
                            <el-button class="button-new-tag" size="small" @click="showMoreBrand" v-if="showmoreBrand && brandnum>6"><i class="el-icon-d-arrow-right"></i></el-button>
                            <el-button class="button-new-tag" type="danger" size="small" @click="showBrand">+ new</el-button>
                        </el-col>
                    </el-row>
                    
                    
        </div>
                </div>
                <el-table :data="tableData"
                          ref="refTable"
                          @row-click="clickTable"
                          stripe
                          style="width: 100%"
                          v-loading.body="listLoading"
                          element-loading-text="拼命加载中"
                          row-key="goodsCode"
                          :expand-row-keys="expands"
                          @expand-change="expandChange">
                    <el-table-column type="expand">
                        <template slot-scope="props">
                            <el-table :data="props.row.skuList"
                                      stripe
                                      style="width: 100%">
                                <el-table-column prop="skuCode"
                                                 label="SKU编号"
                                                 style="width: 18%"
                                                 align="center"></el-table-column>
                                <el-table-column prop="goodsName"
                                                 label="SKU名称"
                                                 style="width: 18%"
                                                 align="center"></el-table-column>
                                <el-table-column prop="binPicture"
                                                 label="SKU图片"
                                                 style="width: 18%"
                                                 align="center">
                                    <template slot-scope="scope">
                                        <img :src="scope.row.binPicture"
                                             width="40"
                                             height="40"
                                             class="portrait" />
                                    </template>
                                </el-table-column>
                                <el-table-column prop="skuUnits"
                                                 label="规格"
                                                 style="width: 18%"
                                                 align="center"></el-table-column>
                                <el-table-column prop="soldNumber"
                                                 label="总销量"
                                                 style="width: 18%"
                                                 align="center"></el-table-column>
                                <el-table-column prop="todSoldNumber"
                                                 label="今日销量"
                                                 style="width: 18%"
                                                 align="center"></el-table-column>
                                <el-table-column prop="yesSoldNumber"
                                                 label="昨日销量"
                                                 style="width: 18%"
                                                 align="center"></el-table-column>
                                <el-table-column label="操作"
                                                 style="width: 18%"
                                                 align="center">
                                    <template slot-scope="scope">
                                        <span @click="showCreateSKU(props.row,scope.row)"
                                              class="blue">
                                              <el-popover placement="top-start"
                                                width="40"
                                                trigger="hover"
                                                content="编辑">
                                                <img src="../../assets/icons/edit.png"
                                                    alt=""
                                                    class="icon"
                                                    slot="reference">
                                            </el-popover>
                                              </span>
                                        <span @click="removeSKU(scope.row)" class="blue">
                                            <el-popover placement="top-start"
                                                width="40"
                                                trigger="hover"
                                                content="删除SKU">
                                                <img src="../../assets/icons/del1.png"
                                                    alt=""
                                                    class="icon"
                                                    slot="reference">
                                            </el-popover>
                                        </span>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </template>
                    </el-table-column>
                    <el-table-column prop="brandName"
                                     label="品牌名称"
                                     style="width: 18%"
                                     align="center"></el-table-column>
                    <el-table-column prop="goodsCode"
                                     label="商品编号"
                                     style="width: 18%"
                                     align="center"></el-table-column>
                    <el-table-column prop="goodsName"
                                     label="商品名称"
                                     style="width: 18%"
                                     align="center"></el-table-column>
                    <el-table-column prop="typeName"
                                     label="商品分类"
                                     style="width: 18%"
                                     align="center"></el-table-column>
                    <el-table-column prop="gmtCreated"
                                     label="创建时间"
                                     width="170"
                                     align="center"></el-table-column>
                    <el-table-column label="关联SKU数量"
                                     width="170"
                                     align="center">
                        <template slot-scope="scope">
                            {{scope.row.skuCount}}
                        </template>
                    </el-table-column>
                    <el-table-column label="操作"
                                     width="170"
                                     align="center">
                        <template slot-scope="scope">
                            <span @click="showCreateGoods(scope.row)"
                                  class="blue">
                                    <el-popover placement="top-start"
                                        width="40"
                                        trigger="hover"
                                        content="编辑">
                                        <img src="../../assets/icons/edit.png"
                                            alt=""
                                            class="icon"
                                            slot="reference">
                                    </el-popover>
                                  </span>
                            <span v-if="scope.row.skuCount==0"
                                  @click="removeGoods(scope.row)"
                                  >
                                  <el-popover placement="top-start"
                                        width="40"
                                        trigger="hover"
                                        content="删除">
                                        <img src="../../assets/icons/del1.png"
                                            alt=""
                                            class="icon"
                                            slot="reference">
                                    </el-popover>
                                  </span>
                            <span v-else
                                  >
                                  <el-popover placement="top-start"
                                        width="40"
                                        trigger="hover"
                                        content="删除">
                                        <img src="../../assets/icons/del2.png"
                                            alt=""
                                            class="icon"
                                            slot="reference">
                                    </el-popover>
                                  </span>
                            <span @click="showCreateSKU(scope.row)"
                                  class="blue">
                                  <el-popover placement="top-start"
                                        width="40"
                                        trigger="hover"
                                        content="新增SKU">
                                        <img src="../../assets/icons/SKU.png"
                                            alt=""
                                            class="icon"
                                            slot="reference">
                                    </el-popover>
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
                           :page-sizes="[10, 20, 50, 100]"
                           layout="total, sizes, prev, pager, next, jumper">
            </el-pagination>
        </div>
        <el-dialog :title="dialogTitle"
                   :visible.sync="createGoodsDialogVisible"
                   width="54%">
            <el-form class="small-space demo-form-inline sku-form"
                     :model="goodsData"
                     label-position="left"
                     label-width="80px"
                     :inline="true">
                <el-form-item label="品牌名称"
                              required
                              class="create">
                    <el-select v-model="goodsData.brandId"
                               placeholder="请选择品牌">
                        <el-option v-for="item in selectBrandTabs"
                                   :key="item.brandId"
                                   :label="item.brandName"
                                   :value="item.brandId">
                        </el-option>
                    </el-select>
                    <span class="blue"
                          @click="showBrand">没有品牌？去创建</span>
                </el-form-item>
                <br>
                <el-form-item label="商品分类"
                              required
                              class="create">
                    <el-select v-model="goodsData.typeId"
                               placeholder="请选择分类">
                        <el-option v-for="item in selectGoodsTabs"
                                   :key="item.value"
                                   :label="item.typeName"
                                   :value="item.typeId">
                        </el-option>
                    </el-select>
                    <span class="blue"
                          @click="show">没有分类？去创建</span>
                </el-form-item>
                <br>
                <el-form-item label="商品名称"
                              required>
                    <el-input type="text"
                              v-model="goodsData.goodsName"></el-input>
                </el-form-item>

            </el-form>
            <span slot="footer"
                  class="dialog-footer">
                <el-button @click="createGoodsDialogVisible = false">取 消</el-button>
                <el-button type="primary"
                           @click="editGoods"
                           v-if="goodsData.id">确 定</el-button>
                <el-button type="primary"
                           @click="createGoods"
                           v-else>保 存</el-button>
            </span>
        </el-dialog>
        <div class="adddialogwidth">
        <el-dialog :title="dialogTitle"
                   :visible.sync="createSKUDialogVisible"
                   width="56%">
            <div>
                <el-button type="warning"
                           round
                           size="small">商品信息</el-button>
                <span class="label">&emsp;商品名称：</span>{{skuData.goodsName}}
                <span class="label">&emsp;商品分类：</span>{{skuData.typeName}}
                <span class="label">&emsp;品牌名称：</span>{{skuData.brandName}}
            </div>
            <br>
            <div>
                <el-button type="warning"
                           round
                           size="small">SKU信息</el-button>
            </div>
            <br>
            <el-form class="small-space demo-form-inline sku-form"
                     :model="skuData"
                     label-position="left"
                     label-width="85px"
                     :inline="true">
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="SKU名称"
                                      required>
                            <el-tooltip class="item" effect="light" content="消费者可见，请填写准确" placement="right">
                            <el-input type="text"
                                      v-model="skuData.skuName"
                                      placeholder="如：可口可乐(听)330ml">
                                      </el-input>
                            </el-tooltip>
                        </el-form-item>
                        <el-form-item label="是否需要入库"
                                      v-if="stockType=='A'"
                                      required>
                        <div style="padding-top:3%">
                            <el-switch
                            v-model="skuData.skuNow"
                            active-color="#ff4949"
                            inactive-color="#13ce66"
                            active-text="否"
                            inactive-text="是">
                            </el-switch>
                            <span style="color:#999">(如水果,酸奶等采购周期较短的SKU不需要入库)</span>
                        </div>
                        </el-form-item>
                        <el-form-item label="成本价格"
                                    v-if="skuData.skuNow==true && stockType=='A'"
                                      required>
                            <el-input type="number"
                                      v-model="skuData.procurementPrice"
                                      @mousewheel.native.prevent
                                      ></el-input>
                        </el-form-item>
                        <el-form-item label="保质期时长(天)"
                                    v-if="skuData.skuNow==true && stockType=='A'"
                                      required>
                            <el-input type="number"
                                      v-model="skuData.qualityPeriod"
                                      @mousewheel.native.prevent
                                      ></el-input>
                        </el-form-item>
                        <el-form-item label="建议零售价"
                                      required>
                            <el-tooltip class="item" effect="light" content="设置默认销售价" placement="right">
                            <el-input type="number"
                                      v-model="skuData.originPriceYuan"
                                      @mousewheel.native.prevent
                                      ></el-input>
                            </el-tooltip>
                        </el-form-item>
                        <el-form-item label="规格"
                                      required
                                      class="create create1">
                                <el-input placeholder="请输入规格"
                                      v-model="skuData.skuSpecification"
                                      class="input-with-select"
                                      @mousewheel.native.prevent
                                      type="number">
                                </el-input>
                                <el-input placeholder="单位( 如: g )"
                                      v-model="skuData.skuUnits"
                                      class="input-with-select">
                                </el-input>
                            <!-- <el-input placeholder="请输入"
                                      v-model="skuData.skuSpecification"
                                      class="input-with-select"
                                      type="number">
                                <el-select v-model="skuData.skuUnits"
                                           placeholder="单位"
                                           slot="append"
                                           class="append-input">
                                    <el-option v-for="item in unitsTabs"
                                               :key="item.id"
                                               :label="item.name"
                                               :value="item.id">
                                    </el-option>
                                </el-select>
                            </el-input> -->
                        </el-form-item>
                        <!-- <el-form-item label="采购周期"
                                    v-if="stockType=='A'"
                                      required>
                            <el-tooltip class="item" effect="light" content="发起采购至入库需要的时间周期" placement="right">
                            <el-select v-model="skuData.purchasePeriod" placeholder="请选择">
                                <el-option
                                v-for="item in periodoptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            </el-tooltip>
                        </el-form-item> -->
                        <el-form-item label="低库存提醒"
                                    v-if="!skuData.skuNow && stockType=='A'"
                                      required>
                            <el-tooltip class="item" effect="light" content="库存低于该数量时，会触发提醒，且同时创建采购信息" placement="right">
                            <el-input-number v-model="skuData.wareLimitNum" :min="0" placeholder="0"></el-input-number>
                            </el-tooltip>
                        </el-form-item>
                        <!-- <el-form-item label="一次性采购量"
                                     v-if="!skuData.skuNow && stockType=='A'"
                                      required>
                            <el-tooltip class="item" effect="light" content="每次采购的需求数量" placement="right">
                            <el-input-number v-model="skuData.purchaseLimit" :min="1" placeholder="1"></el-input-number>
                            </el-tooltip>
                        </el-form-item> -->
                        <el-form-item label="SKU图片"
                                      required>
                            <el-upload drag
                                       :show-file-list="false"
                                       class="upload-block"
                                       :before-upload="beforeAvatarUpload"
                                       :http-request="upload1"
                                       :data="{type:'skuPicture'}"
                                       action="">
                                <div v-if="skuData.skuPicture"
                                     class="flex-center">
                                    <img :src="skuData.skuPicturePath || skuData.skuPicture"
                                         alt=""
                                         class="upload-img">
                                </div>
                                <div v-else>
                                    <i class="el-icon-upload"></i>
                                    <div class="el-upload__text">文件拖到此处，或<em>点击上传</em></div>
                                    <div class="el-upload__tip" slot="tip">推荐300*300的png格式,文件大小小于1M </div>
                                </div>
                            </el-upload>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="是否精品咖啡"
                                    v-if="skuData.isKupper=='1'"
                                      required>
                        <div style="padding-top:3%">
                            <el-switch
                            v-model="skuData.isKupperCoffee"
                            active-value="1"
                            inactive-value="0"
                            active-color="#13ce66"
                            inactive-color="#ff4949"
                            active-text="是"
                            inactive-text="否">
                            </el-switch>
                        </div>
                        </el-form-item>
                        <el-form-item label="名称简称"
                                      v-if="skuData.isKupperCoffee=='1'"
                                      required>
                            <el-input type="text"
                                      maxlength="5"
                                      v-model="skuData.skuNameLimit"
                                      placeholder="名称简称，最多5个字符">
                                      </el-input>
                        </el-form-item>
                        <el-form-item label="评分"
                                      v-if="skuData.isKupperCoffee=='1'"
                                      required>
                            <el-tooltip class="item" effect="light" content="0-100，最多保留一位小数" placement="right">
                            <el-input type="number"
                                      @mousewheel.native.prevent
                                      v-model="skuData.skuScore"
                                      ></el-input>
                            </el-tooltip>
                        </el-form-item>
                        <el-form-item label="星级"
                                      v-if="skuData.isKupperCoffee=='1'"
                                      required>
                            <el-tooltip class="item" effect="light" content="0-3的整数" placement="right">
                            <el-input type="number"
                                      v-model="skuData.skuStar"
                                      @mousewheel.native.prevent
                                      ></el-input>
                            </el-tooltip>
                        </el-form-item>
                        <el-form-item label=" 处理法"
                                      v-if="skuData.isKupperCoffee=='1'"  
                                      required>
                            <el-input type="text"
                                      v-model="skuData.contentOne"
                                      >
                                      </el-input>
                        </el-form-item>
                        <el-form-item label=" 风味"
                                      v-if="skuData.isKupperCoffee=='1'"
                                      required>
                            <el-input type="textarea"
                                      :rows="4"
                                      maxlength="32"
                                      placeholder="风味, 最多32个字符"
                                      v-model="skuData.contentTwo"
                                      >
                                      </el-input>
                        </el-form-item>
                        <el-form-item label="文章链接"
                                      v-if="skuData.isKupperCoffee=='1'"  
                                      required>
                            <el-input type="text"
                                      v-model="skuData.skuLink"
                                      >
                                      </el-input>
                        </el-form-item>
                        <el-form-item label="小程序展示图"
                                    v-if="skuData.isKupperCoffee=='1'" 
                                                 required>
                            <el-upload drag
                                       :show-file-list="false"
                                       class="upload-block"
                                       :before-upload="beforeAvatarUpload"
                                       :http-request="upload"
                                       :data="{type:'skuRepairPic'}"
                                       action="">
                                <div v-if="skuData.skuRepairPic"
                                     class="flex-center">
                                    <img :src="skuData.skuRepairPicPath ||skuData.skuRepairPic"
                                         alt=""
                                         class="upload-img">
                                </div>
                                <div v-else>
                                    <i class="el-icon-upload"></i>
                                    <div class="el-upload__text">文件拖到此处，或<em>点击上传</em></div>
                                    <div class="el-upload__tip" slot="tip">推荐250*160的png格式,文件大小小于1M </div>
                                </div>
                            </el-upload>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <span slot="footer"
                  class="dialog-footer">
                <el-button @click="createSKUDialogVisible = false">取 消</el-button>
                <el-button type="primary"
                           @click="editSKU"
                           v-if="skuData.skuCode"
                           :loading="reqLoading">保 存</el-button>
                <el-button type="primary"
                           @click="createSKU"
                           v-else
                           :loading="reqLoading">确 定</el-button>
            </span>
        </el-dialog>
        </div>
        <!-- 裁剪图片的弹出框 -->
        <!-- <el-dialog title="图片剪裁" :visible.sync="dialogVisible" append-to-body>
        <div class="cropper-content">
            <div class="cropper" style="text-align:center">
            <vueCropper
                ref="cropper"
                :img="option.img"
                :outputSize="option.size"
                :outputType="option.outputType"
                :info="true"
                :full="option.full"
                :canMove="option.canMove"
                :canMoveBox="option.canMoveBox"
                :original="option.original"
                :autoCrop="option.autoCrop"
                :fixed="option.fixed"
                :fixedNumber="option.fixedNumber"
                :centerBox="option.centerBox"
                :infoTrue="option.infoTrue"
                :fixedBox="option.fixedBox"
            ></vueCropper>
            </div>
        </div>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="finish" :loading="loading">确认</el-button>
        </div>
        </el-dialog> -->
        <!-- 裁剪图片的弹出框 -->
        <el-dialog :title="title"
                   :visible.sync="setAlertDialogVisible"
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
                    <el-button @click="setAlertDialogVisible = false">取 消</el-button>
                    <el-button type="primary"
                               @click="addType"
                               v-if="dialogType==1">保 存</el-button>
                    <el-button type="primary"
                               @click="editType"
                               v-if="dialogType==2">编 辑</el-button>
                </div>
            </div>
        </el-dialog>
        <el-dialog :title="brandtitle"
                   :visible.sync="brandsetAlertDialogVisible"
                   width="40%">
            <el-form class="small-space demo-form-inline"
                     label-position="left"
                     label-width="80px"
                     :inline="true">
                <el-form-item label="品牌名称"
                              required>
                    <el-input type="text"
                              maxlength="16"
                              v-model="brandName"></el-input>
                </el-form-item>
                <el-form-item label="品牌图片">
                    <el-upload drag
                               :show-file-list="false"
                               class="upload-block"
                               :before-upload="beforeAvatarUpload"
                               :http-request="upload2"
                               action="">
                        <div v-if="brandPic || brandPicPath"
                             class="flex-center">
                            <img :src="brandPicPath || brandPic"
                                 alt=""
                                 class="upload-img">
                        </div>
                        <div v-else>
                            <i class="el-icon-upload"></i>
                            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                            <div class="el-upload__tip"
                                 slot="tip">推荐130*60的png格式 </div>
                        </div>
                    </el-upload>
                </el-form-item>
            </el-form>
            <div slot="footer"
                 class="dialog-footer">
                <div style="text-align:right">
                    <el-button @click="brandsetAlertDialogVisible = false">取 消</el-button>
                    <el-button type="primary"
                               @click="addBrand"
                               v-if="branddialogType==1">保 存</el-button>
                    <el-button type="primary"
                               @click="editBrand"
                               v-if="branddialogType==2">保 存</el-button>
                </div>
            </div>
        </el-dialog>
        <!-- 收银机商品同步的弹框 -->
        <el-dialog
            :visible.sync="syncVisible"
            :close-on-click-modal="false"
            :show-close="false"
            custom-class="stockdialogClass"
            width="23vw"
            center>
            <div class="stockDialog">
                <div v-if="!isSync" class="word smallfont">
                    是否确认立即同步收银机商品? 若数据过多则同步时间可能较长,同步过程中您将无法操作后台相关其他功能。
                </div>
                <div class="word smallfont text-center" style="margin-top:2vh" v-else>
                    收银机商品同步中<br>
                    请稍后...
                </div>
                 <div v-if="!isSync" class="bottom flex-center-Y" style="margin-top:10vh">
                    <div class="btn smallfont" @click="syncVisible=false">取消</div>
                    <el-button style="padding:0;border-radius:0" class="btn1 smallfont" @click="saveSync">确定</el-button>
                </div>
                <div v-else v-loading="syncLoading" element-loading-background="transparent" element-loading-spinner="el-icon-loading" class="syncBox bigfont">
                </div>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    // directives: {clickoutside},
    data() {
        return {
        //裁剪图片
            // dialogVisible: false,
            // // 裁剪组件的基础配置option
            // option: {
            //     img: "", // 裁剪图片的地址
            //     info: true, // 裁剪框的大小信息
            //     outputSize: 0.8, // 裁剪生成图片的质量
            //     outputType: 'png', // 裁剪生成图片的格式
            //     canScale: true, // 图片是否允许滚轮缩放
            //     autoCrop: true, // 是否默认生成截图框
            //     // autoCropWidth: 300, // 默认生成截图框宽度
            //     // autoCropHeight: 200, // 默认生成截图框高度
            //     fixedBox: true, // 固定截图框大小 不允许改变
            //     fixed: true, // 是否开启截图框宽高固定比例
            //     fixedNumber: [1, 1], // 截图框的宽高比例
            //     full: true, // 是否输出原图比例的截图
            //     canMoveBox: true, // 截图框能否拖动
            //     original: false, // 上传图片按照原始比例渲染
            //     centerBox: false, // 截图框是否被限制在图片里面
            //     infoTrue: true // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
            // },
            // fileinfo:"",
            // picsList: [],  //页面显示的数组
            // // 防止重复提交
            // loading: false,
        //裁剪图片
            listLoading: false,
            totalCount: 0,
            searchValue: "",
            selectedTab: "skuName",
            periodoptions:[{
                    value: 3,
                    label: '3天'
                    }, {
                    value: 7,
                    label: '一周'
                    }, {
                    value: 14,
                    label: '两周'
                    }, {
                    value: 30,
                    label: '一个月'
                    }],
            selectTabs: [
                {
                    name: "商品名称",
                    id: "skuName"
                },
                {
                    name: "商品编号",
                    id: "goodsCode"
                },
                // {
                //     name: "SKU名称",
                //     id: "skuName"
                // },
                {
                    name: "SKU编号",
                    id: "skuCode"
                }
            ],
            selectGoodsTabs: [],
            selectBrandTabs: [],
            unitsTabs: [
                {
                    name: "g/件",
                    id: "G"
                },
                {
                    name: "ml/件",
                    id: "ML"
                },
                // {
                //     name: "L",
                //     id: "L"
                // },
                // {
                //     name: "KG",
                //     id: "KG"
                // }
            ],
            sizeTabs: [
                {
                    name: "瓶",
                    id: "瓶"
                },
                {
                    name: "份",
                    id: "份"
                },
                {
                    name: "包",
                    id: "包"
                },
                {
                    name: "盒",
                    id: "盒"
                },
                {
                    name: "杯",
                    id: "杯"
                },
                {
                    name: "组",
                    id: "组"
                }
            ],
            originTabs: [
                {
                    name: "中国",
                    id: "中国"
                },
                {
                    name: "港澳台",
                    id: "港澳台"
                },
                {
                    name: "海外进口",
                    id: "海外进口"
                }
            ],
            lineTabs: [
                {
                    name: "小商品货道",
                    id: "type001"
                },
                {
                    name: "中商品货道",
                    id: "type003"
                },
                {
                    name: "大商品货道",
                    id: "type004"
                }
            ],
            isVendOptions: [
                {
                    id: "1",
                    name: "弹簧机FEL101（400x240）"
                },
                {
                    id: "2",
                    name: "格子机FEL100"
                },
                {
                    id: "3",
                    name: "热饮机FEL102"
                },
                                {
                    id: "4",
                    name: "弹簧机FEL103（320x240）"
                }
            ],
            tableData: [],
            params: {
                pageRow: 20,
                pageNum: 1,
                manageId:""
            },
            createGoodsDialogVisible: false,
            createSKUDialogVisible: false,
            goodsData: {},
            skuData: {},
            file: {},
            dialogTitle: "",
            expands: [],
            expandsBrand: [],
            reqLoading: false,
            activeTab: "0",
            selectGoodsTabs2: [],
            dataless:[],
            typenum:0,//分类数量
            brandnum:0,//品牌数量
            selectBrandTabs2: [],
            title: "",
            brandtitle:"",
            setAlertDialogVisible: false,
            brandsetAlertDialogVisible: false,
            typeName: "",
            brandName: "",
            dialogType:"",
            branddialogType:"",
            brandId: "",
            brandPic: "",
            brandPicPath: "",
            showmore:true,
            showmoreBrand:true,
            syncLoading:true,
            syncVisible:false,
            isSync:false,//是否同步完成
            goodsCashier:false,
        };
    },
    created() {
        this.params.manageId=this.userId
        this.getList();
        this.getTypeList();
    },

    methods: {
        //裁剪图片
        // changeUpload(file, fileList) {
        //     console.log(file,fileList)
        //     this.fileinfo = file
        //     // 上传成功后将图片地址赋值给裁剪框显示图片
        //     this.$nextTick(() => {
        //         this.option.img = file.url
        //         this.dialogVisible = true
        //     })
        //     },
        // finish() {
        // this.$refs.cropper.getCropBlob((data) => {
        //     var fileName = 'goods' + this.fileinfo.uid
        //     this.skuData.skuPicture=fileName
        // //上传阿里云服务器
        //     // client().put(fileName, data).then(result => {
        //     // this.dialogVisible = false
        //     // this.picsList.push(result.url)
        //     // }).catch(err => {
        //     // })
        // })
        // },
        //裁剪图片

        saveSync(){//确定同步数据
            this.isSync=true
            this.api({
                        url: "/goods/synchronizationSku",
                        method: "post",
                        data: {}
                    }).then(data => {
                        this.isSync=false
                        this.syncVisible=false
                        this.$message({
                            type: 'success',
                            message: '同步成功!'
                        });
                        this.getList()
                    }).catch(data => {
                        this.isSync=false
                        this.syncVisible=false
                    });
            
        },
        hidemore(){//点击外部隐藏多余标签
            this.api({
                url: "/goods/goodsaddtype",
                method: "get"
            })
                .then(data => {
                    this.dataless=data.slice(0,6)
                    this.selectGoodsTabs = [];
                    this.selectGoodsTabs2 = [{ typeName: "全部", typeId: "0" }];
                    for (let i in data) {
                        this.selectGoodsTabs.push(data[i]);
                    }
                    for (let i in this.dataless) {
                        this.selectGoodsTabs2.push(this.dataless[i]);
                    }
                })
                .catch(e => {});
                this.showmore=true
        },
        hidemorebrand(){//点击外部隐藏多余标签
            this.api({
                url: "/brand/brand",
                method: "post"
            })
                .then(data => {
                    this.brandless=data.list.slice(0,6)
                    this.selectBrandTabs = [];
                    this.selectBrandTabs2 = [
                        { brandName: "全部", brandId: "0", isActive: true }
                    ];
                    for (let i in data.list) {
                        this.selectBrandTabs.push(data.list[i]);
                    }
                    for (let i in this.brandless) {
                        this.selectBrandTabs2.push(this.brandless[i]);
                    }
                })
                .catch(e => {});
                this.showmoreBrand=true
        },
        remove(row){//删除分类
            this.$confirm("确定删除该分类?", "提示", {
                confirmButtonText: "确定",
                showCancelButton: false,
                type: "warning"
            }).then(() => {
                this.api({
                    url: "/goods/goodsTypeDel",
                    method: "post",
                    data: {
                        typeId: row.typeId
                    }
                }).then(data => {
                    this.$message({
                        type: "success",
                        message: "删除成功"
                    });
                    this.showmore=true
                    this.getTypeList()
                    this.activeTab="0"
                    this.params.typeId=""
                    this.params.brandId=""
                    this.getList(this.params)
                });
            });
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
                url: "/goods/goodstypeadd",
                method: "post",
                data: {
                    typeName: this.typeName
                }
            }).then(data => {
                this.$message({
                    type: "success",
                    message: "添加成功"
                });
                this.showmore=true
                this.showmoreBrand=true
                this.getTypeList()
                this.setAlertDialogVisible = false;
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
                url: "/goods/goodstypeupdate",
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
                this.showmore=true
                this.showmoreBrand=true
                this.getTypeList()
                this.getList()
                this.setAlertDialogVisible = false;
            });
        },
        isHasName() {
            for (let i in this.selectGoodsTabs2) {
                if (this.selectGoodsTabs2[i].typeName == this.typeName) {
                    return false;
                }
            }
            return true;
        },
        show(scope) {
            if (scope.typeId && scope.typeName) {
                this.title = "编辑商品分类";
                this.dialogType = 2;
                this.typeId = scope.typeId;
                this.typeName = scope.typeName;
            } else {
                this.title = "添加商品分类";
                this.dialogType = 1;
                this.typeName = "";
            }
            this.setAlertDialogVisible = true;
        },
        deleteBrand(row){//删除品牌
            this.$confirm("确定删除该品牌?", "提示", {
                confirmButtonText: "确定",
                showCancelButton: false,
                type: "warning"
            }).then(() => {
                this.api({
                    url: "/brand/brandUpdate ",
                    method: "post",
                    data: {
                        brandId: row.brandId,
                        isAlive: "0"
                    }
                }).then(data => {
                    this.$message({
                        type: "success",
                        message: "删除成功"
                    });
                    this.showmoreBrand=true
                    this.getTypeList()
                    this.params.brandId=""
                    this.getList(this.params)
                });
            });
        },
        addBrand(){ // 添加品牌
           if (!this.brandName || this.brandName.length > 16) {
                this.$message({
                    type: "warning",
                    message: "请输入少于16字的品牌名称"
                });
                return;
            }
            if (!this.brandisHasName()) {
                this.$message({
                    type: "warning",
                    message: "该品牌名称已存在"
                });
                return;
            }
            this.api({
                url: "/brand/brandAdd",
                method: "post",
                data: {
                    brandName: this.brandName,
                    brandPic: this.brandPic
                }
            }).then(data => {
                this.$message({
                    type: "success",
                    message: "添加成功"
                });
                 this.showmoreBrand=true
                 this.showmore=true
                this.getTypeList()
                this.brandsetAlertDialogVisible = false;
            });
        },
        editBrand(){//编辑品牌
            if (!this.brandName || this.brandName.length > 16) {
                this.$message({
                    type: "warning",
                    message: "请输入少于16字的分类名称"
                });
                return;
            }
            // if (!this.isHasName()) {
            //     this.$message({
            //         type: "warning",
            //         message: "该分类名称已存在"
            //     });
            //     return;
            // }
            if (!this.brandId) {
                this.$message({
                    type: "warning",
                    message: "缺少brandId"
                });
                return;
            }
            this.api({
                url: "/brand/brandUpdate ",
                method: "post",
                data: {
                    brandId: this.brandId,
                    brandName: this.brandName,
                    brandPic: this.brandPic
                }
            }).then(data => {
                this.$message({
                    type: "success",
                    message: "修改成功"
                });
                this.showmoreBrand=true
                this.showmore=true
                this.getTypeList()
                this.getList()
                this.brandsetAlertDialogVisible = false;
            });
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
                    this.$set(this, "brandPicPath", data.filePath);
                    this.brandPic = data.tempPath;
                    console.log(this.skuData);
                })
                .catch(e => {});
        },
        brandisHasName() {
            for (let i in this.selectBrandTabs2) {
                if (this.selectBrandTabs2[i].brandName == this.brandName) {
                    return false;
                }
            }
            return true;
        },
        showBrand(scope) {
            console.log(scope)
            if (scope.brandId) {
                this.title = "编辑品牌分类";
                this.branddialogType = 2;
                this.brandId = scope.brandId;
                this.brandName = scope.brandName;
                this.brandPic = scope.brandPic || "";
                this.brandPicPath = scope.pictureLocal || "";
            } else {
                this.title = "创建品牌分类";
                this.branddialogType = 1;
                this.brandName = "";
                this.brandPicPath = "";
                this.brandPic = "";
            }
            this.brandsetAlertDialogVisible = true;
        },
        /* 活动标签切换时触发 */
        beforeLeave(currentName) {
            var self=this;
            if(currentName=="add"){//重点，如果name是add(增加分类按钮)，则什么都不触发
                this.show("add")
                // 执行添加分类
                return false
            }
            if(currentName=="more"){
                this.showMore()
                // 执行添加分类
                return false
            }
            if(currentName=="less"){
                this.hidemore()
                // 执行添加分类
                return false
            }
        },
        chooseBrand(index) {
            for (let i in this.selectBrandTabs2) {
                let active = i == index ? true : false;
                this.$set(this.selectBrandTabs2[i], "isActive", active);
            }
            this.params.brandId =
                index == 0 ? null : this.selectBrandTabs2[index].brandId;
            this.getList(this.params);
        },
        handleTabClick(tab, event) {
            this.params.typeId =
                this.activeTab == 0 ? null : Number(this.activeTab);
            this.getList(this.params);
        },
        expandChangeBrand(row, expandedRows) {
        },
        expandChange(row, expandedRows) {
            //每次只能展开一行
            var that = this
            if (expandedRows.length) {
              that.expands = []
              if (row) {
                that.expands.push(row.goodsCode)
              }
            } else {
              that.expands = []
            }
            //每次只能展开一行
            this.api({
                url: "/goods/goodsSkuList",
                method: "get",
                params: {
                    goodsCode: row.goodsCode
                }
            }).then(data => {
                this.$set(row, "skuList", data);
            });
        },
        clickTable(row,index,e){//点击行就展开
            //调用,table的方法,展开/折叠 行
            this.$refs.refTable.toggleRowExpansion(row)
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
        createGoods() {
            if (!this.goodsData.typeId) {
                this.$message({
                    type: "warning",
                    message: "您未选择商品分类"
                });
                return;
            }
            if (!this.goodsData.brandId) {
                this.$message({
                    type: "warning",
                    message: "您未选择商品品牌"
                });
                return;
            }
            if (!this.goodsData.goodsName) {
                this.$message({
                    type: "warning",
                    message: "您未填写商品名称"
                });
                return;
            }
            this.api({
                url: "/goods/goodsadd",
                method: "post",
                data: this.goodsData
            }).then(data => {
                this.$message({
                    type: "success",
                    message: "添加商品成功"
                });
                this.getList(this.params);
                this.getTypeList()
                this.createGoodsDialogVisible = false;
            });
        },
        editGoods() {
            if (!this.goodsData.typeId) {
                this.$message({
                    type: "warning",
                    message: "您未选择商品分类"
                });
                return;
            }
            if (!this.goodsData.brandId) {
                this.$message({
                    type: "warning",
                    message: "您未选择商品品牌"
                });
                return;
            }
            if (!this.goodsData.goodsName) {
                this.$message({
                    type: "warning",
                    message: "您未填写商品名称"
                });
                return;
            }
            this.api({
                url: "/goods/goodsupdate",
                method: "post",
                data: this.goodsData
            }).then(data => {
                this.$message({
                    type: "success",
                    message: "修改商品成功"
                });
                this.getList(this.params);
                this.createGoodsDialogVisible = false;
            });
        },
        createSKU() {
            if(this.skuData.skuNow==true && !this.skuData.procurementPrice && this.stockType=='A'){
                 this.$message({
                    type: "warning",
                    message: "您未填写成本价格"
                });
                this.reqLoading = false;
                return;
            }
            if(this.skuData.skuNow==true && this.stockType=='A' && !/^[1-9]\d*$/.test(this.skuData.qualityPeriod)){
                 this.$message({
                    type: "warning",
                    message: "保质期必填且只能是正整数"
                });
                this.reqLoading = false;
                return;
            }
            if (!this.skuData.skuUnits) {
                this.$message({
                    type: "warning",
                    message: "您未输入商品单位"
                });
                this.reqLoading = false;
                return;
            }
            if (
                !this.skuData.skuSpecification ||
                !(this.skuData.skuSpecification >= 0) ||
                this.skuData.skuSpecification.length > 6
            ) {
                this.$message({
                    type: "warning",
                    message: "请填写正确规格，长度不大于6位"
                });
                this.reqLoading = false;
                return;
            }
            // if (!this.skuData.purchasePeriod && this.stockType=='A') {
            //     this.$message({
            //         type: "warning",
            //         message: "您未选择采购周期"
            //     });
            //     this.reqLoading = false;
            //     return;
            // }
            if (!this.skuData.wareLimitNum && this.stockType=='A' && !this.skuData.skuNow) {
                this.$message({
                    type: "warning",
                    message: "您未填写最低库存量"
                });
                this.reqLoading = false;
                return;
            }
            // if (!this.skuData.purchaseLimit && this.stockType=='A' && !this.skuData.skuNow) {
            //     this.$message({
            //         type: "warning",
            //         message: "您未填写一次性采购值"
            //     });
            //     this.reqLoading = false;
            //     return;
            // }
            if (!this.skuData.skuPicture) {
                this.$message({
                    type: "warning",
                    message: "您未上传SKU图片"
                });
                this.reqLoading = false;
                return;
            }
            if (
                !(
                    this.skuData.originPriceYuan > 0 &&
                    this.skuData.originPriceYuan <= this.topPrice
                )
            ) {
                this.$message({
                    type: "warning",
                    message: "建议零售价需大于0且不能超过"+this.topPrice
                });
                this.reqLoading = false;
                return;
            }
            if(this.skuData.isKupperCoffee=='1' && !this.skuData.skuNameLimit){
                 this.$message({
                    type: "warning",
                    message: "您未填写名称简称"
                });
                this.reqLoading = false;
                return;
            }
            if(this.skuData.isKupperCoffee=='1' && (!this.skuData.skuScore || this.skuData.skuScore<=0 || this.skuData.skuScore>100)){
                 this.$message({
                    type: "warning",
                    message: "您未正确填写评分"
                });
                this.reqLoading = false;
                return;
            }
            if(this.skuData.isKupperCoffee=='1' && (!this.skuData.skuStar || this.skuData.skuStar<=0 || this.skuData.skuStar>3)){
                 this.$message({
                    type: "warning",
                    message: "您未正确填写星级"
                });
                this.reqLoading = false;
                return;
            }
            if(this.skuData.isKupperCoffee=='1' && !this.skuData.contentOne){
                 this.$message({
                    type: "warning",
                    message: "您未填写处理法"
                });
                this.reqLoading = false;
                return;
            }
            if(this.skuData.isKupperCoffee=='1' && !this.skuData.contentTwo){
                 this.$message({
                    type: "warning",
                    message: "您未填写风味"
                });
                this.reqLoading = false;
                return;
            }
            if(this.skuData.isKupperCoffee=='1' && !this.skuData.skuLink){
                 this.$message({
                    type: "warning",
                    message: "您未填写文章链接"
                });
                this.reqLoading = false;
                return;
            }
            if(this.skuData.isKupperCoffee=='1' && !this.skuData.skuRepairPic){
                 this.$message({
                    type: "warning",
                    message: "您未填上传小程序展示图"
                });
                this.reqLoading = false;
                return;
            }
            if(this.skuData.skuNow){
                this.skuData.skuNow="Y"
            }else{
                this.skuData.skuNow="N"
            }
            this.skuData.appPicture=this.skuData.skuRepairPic//小程序展示图
            this.skuData.procurementPrice=Number(this.skuData.procurementPrice)
            this.skuData.qualityPeriod=Number(this.skuData.qualityPeriod)
            this.skuData.originPrice =
                // Number(this.skuData.originPriceYuan);
                this.skuData.originPriceYuan
                this.skuData.skuSpecification =
                Number(this.skuData.skuSpecification);
            this.skuData.manageId=this.userId
            var formData = new FormData();
            formData.append("file", this.file);
            formData.append("data", JSON.stringify(this.skuData));
            this.reqLoading = true;
            this.api({
                url: "/goods/goodsSkuAdd",
                method: "post",
                data: formData
            })
                .then(data => {
                    this.$message({
                        type: "success",
                        message: "添加SKU成功"
                    });
                    this.file = {};
                    this.getList(this.params);
                    this.getTypeList();
                    this.createSKUDialogVisible = false;
                    this.reqLoading = false;
                })
                .catch(data => {
                    this.reqLoading = false;
                });
        },
        editSKU() {
            if(this.skuData.skuNow==true && !this.skuData.procurementPrice && this.stockType=='A'){
                console.log(111)
                 this.$message({
                    type: "warning",
                    message: "您未填写成本价格"
                });
                this.reqLoading = false;
                return;
            }
            if(this.skuData.skuNow==true && this.stockType=='A' && !/^[1-9]\d*$/.test(this.skuData.qualityPeriod)){
                 this.$message({
                    type: "warning",
                    message: "保质期必填且只能是正整数"
                });
                this.reqLoading = false;
                return;
            }
            if (!this.skuData.skuUnits) {
                this.$message({
                    type: "warning",
                    message: "您未选择商品单位"
                });
                this.reqLoading = false;
                return;
            }
            if (
                !this.skuData.skuSpecification ||
                !(this.skuData.skuSpecification >= 0)
            ) {
                this.$message({
                    type: "warning",
                    message: "请填写正确规格"
                });
                this.reqLoading = false;
                return;
            }
            // if (!this.skuData.purchasePeriod && this.stockType=='A') {
            //     this.$message({
            //         type: "warning",
            //         message: "您未选择采购周期"
            //     });
            //     this.reqLoading = false;
            //     return;
            // }
            if (!this.skuData.wareLimitNum && this.stockType=='A' && !this.skuData.skuNow) {
                this.$message({
                    type: "warning",
                    message: "您未填写最低库存量"
                });
                this.reqLoading = false;
                return;
            }
            // if (!this.skuData.purchaseLimit && this.stockType=='A' && !this.skuData.skuNow) {
            //     this.$message({
            //         type: "warning",
            //         message: "您未填写一次性采购值"
            //     });
            //     this.reqLoading = false;
            //     return;
            // }
            if (!this.skuData.skuPicture) {
                this.$message({
                    type: "warning",
                    message: "您未上传SKU图片"
                });
                this.reqLoading = false;
                return;
            }
            if (
                !(
                    this.skuData.originPriceYuan > 0 &&
                    this.skuData.originPriceYuan <= this.topPrice
                )
            ) {
                this.$message({
                    type: "warning",
                    message: "建议零售价需大于0且不能超过"+this.topPrice
                });
                this.reqLoading = false;
                return;
            }
            if(this.skuData.isKupperCoffee=='1' && !this.skuData.skuNameLimit){
                 this.$message({
                    type: "warning",
                    message: "您未填写名称简称"
                });
                this.reqLoading = false;
                return;
            }
            if(this.skuData.isKupperCoffee=='1' && (!this.skuData.skuScore || this.skuData.skuScore<=0 || this.skuData.skuScore>100)){
                 this.$message({
                    type: "warning",
                    message: "您未正确填写评分"
                });
                this.reqLoading = false;
                return;
            }
            if(this.skuData.isKupperCoffee=='1' && (!this.skuData.skuStar || this.skuData.skuStar<=0 || this.skuData.skuStar>3)){
                 this.$message({
                    type: "warning",
                    message: "您未正确填写星级"
                });
                this.reqLoading = false;
                return;
            }
            if(this.skuData.isKupperCoffee=='1' && !this.skuData.contentOne){
                 this.$message({
                    type: "warning",
                    message: "您未填写处理法"
                });
                this.reqLoading = false;
                return;
            }
            if(this.skuData.isKupperCoffee=='1' && !this.skuData.contentTwo){
                 this.$message({
                    type: "warning",
                    message: "您未填写风味"
                });
                this.reqLoading = false;
                return;
            }
            if(this.skuData.isKupperCoffee=='1' && !this.skuData.skuLink){
                 this.$message({
                    type: "warning",
                    message: "您未填写文章链接"
                });
                this.reqLoading = false;
                return;
            }
            if(this.skuData.isKupperCoffee=='1' && !this.skuData.skuRepairPic){
                 this.$message({
                    type: "warning",
                    message: "您未填上传小程序展示图"
                });
                this.reqLoading = false;
                return;
            }
            if(this.skuData.skuNow){
                this.skuData.skuNow="Y"
            }else{
                this.skuData.skuNow="N"
            }
            this.skuData.appPicture=this.skuData.skuRepairPic//小程序展示图
            this.skuData.procurementPrice=Number(this.skuData.procurementPrice)
            this.skuData.originPrice =
                // Number(this.skuData.originPriceYuan);
                this.skuData.originPriceYuan
            this.skuData.skuSpecification =
                Number(this.skuData.skuSpecification);
             this.skuData.manageId=this.userId
            var formData = new FormData();
            formData.append("file", this.file);
            formData.append("data", JSON.stringify(this.skuData));
            this.reqLoading = true;
            this.api({
                url: "/goods/skugoodsupdate",
                method: "post",
                data: formData
            }).then(data => {
                this.$message({
                    type: "success",
                    message: "修改SKU成功"
                });
                this.getList(this.params);
                this.getTypeList();
                this.createSKUDialogVisible = false;
                this.reqLoading = false;
            });
        },
        showCreateGoods(row) {
            if (row.id) {
                this.dialogTitle = "编辑商品";
                this.goodsData = row;
            } else {
                this.dialogTitle = "创建商品";
                this.goodsData = {};
            }

            this.createGoodsDialogVisible = true;
        },
        showCreateSKU(row, sku) {
            this.file = "";
            this.reqLoading = false;
            if (sku) {
                this.dialogTitle = "编辑商品";
                this.api({
                    url: "/goods/skuData",
                    method: "post",
                    data: { skuCode: sku.skuCode }
                }).then(data => {
                    this.skuData = data;
                    this.skuData.brandName = row.brandName;
                    this.skuData.goodsName = row.goodsName;
                    this.skuData.typeName = row.typeName;
                    this.skuData.goodsCode = row.goodsCode;
                    this.skuData.isKupper = row.isKupper;
                    this.skuData.isKupperCoffee = this.skuData.isKupperCoffee;
                    this.skuData.skuNameLimit = this.skuData.skuNameLimit || "";
                    this.skuData.skuScore = this.skuData.skuScore || "";
                    this.skuData.skuStar  = this.skuData.skuStar  || "";
                    this.skuData.nameOne = this.skuData.nameOne || "";
                    this.skuData.contentOne = this.skuData.contentOne || "";
                    this.skuData.nameTwo = this.skuData.nameTwo || "";
                    this.skuData.contentTwo = this.skuData.contentTwo || "";
                    this.skuData.skuCardHref = this.skuData.skuCardHref || "";
                    this.skuData.skuCardPicture =
                        this.skuData.skuCardPicture || "";
                    this.skuData.skuRepairPic = this.skuData.skuRepairPic || "";
                    this.createSKUDialogVisible = true;
                    if(this.skuData.skuNow=="Y"){
                        this.skuData.skuNow=true
                    }else{this.skuData.skuNow=false}
                });
            } else {
                this.dialogTitle = "创建SKU";
                this.skuData = {
                    goodsName: row.goodsName,
                    typeName: row.typeName,
                    goodsCode: row.goodsCode,
                    brandName: row.brandName,
                    isKupper:row.isKupper
                };
                this.skuData.nameOne = "";
                // this.skuData.contentOne = "";
                this.skuData.nameTwo = "";
                // this.skuData.contentTwo = "";
                this.skuData.skuCardHref = "";
                this.skuData.skuCardPicture = "";
                this.skuData.skuRepairPic = "";
                this.createSKUDialogVisible = true;
            }
        },
        search() {
            for (let i in this.selectTabs) {
                if (this.selectedTab == this.selectTabs[i].id) {
                    this.params[this.selectedTab] = this.searchValue;
                } else {
                    let id = this.selectTabs[i].id;
                    this.params[id] = "";
                }
            }
            this.getList(this.params);
        },
        getList(params) {
            this.listLoading = true;
            this.api({
                url: "/goods/goodslist",
                method: "get",
                params: params || this.params
            }).then(data => {
                this.goodsCashier=data.goodsCashier
                this.listLoading = false;
                for (let i in data.list.returnData.list) {
                    data.list.returnData.list[i].skuList = [];
                }
                this.tableData = data.list.returnData.list;
                this.totalCount = data.list.returnData.totalCount;
                this.expands = [];
                this.expandsBrand = [];
            });
        },
        getTypeList() {
            this.api({
                url: "/goods/goodsaddtype",
                method: "get"
            })
                .then(data => {
                    this.typenum=data.length
                    this.dataless=data.slice(0,6)
                    this.selectGoodsTabs = [];
                    this.selectGoodsTabs2 = [{ typeName: "全部", typeId: "0" }];
                    for (let i in data) {
                        this.selectGoodsTabs.push(data[i]);
                    }
                    for (let i in this.dataless) {
                        this.selectGoodsTabs2.push(this.dataless[i]);
                    }
                })
                .catch(e => {});
            this.api({
                url: "/brand/brand",
                method: "post"
            })
                .then(data => {
                    this.brandnum=data.list.length
                    this.brandless=data.list.slice(0,6)
                    this.selectBrandTabs = [];
                    this.selectBrandTabs2 = [
                        { brandName: "全部", brandId: "0", isActive: true }
                    ];
                    for (let i in data.list) {
                        this.selectBrandTabs.push(data.list[i]);
                    }
                    for (let i in this.brandless) {
                        this.selectBrandTabs2.push(this.brandless[i]);
                    }
                })
                .catch(e => {});
        },
        showMore(){
            this.api({
                url: "/goods/goodsaddtype",
                method: "get"
            })
                .then(data => {
                    this.selectGoodsTabs = [];
                    this.selectGoodsTabs2 = [{ typeName: "全部", typeId: "0" }];
                    for (let i in data) {
                        this.selectGoodsTabs.push(data[i]);
                        this.selectGoodsTabs2.push(data[i]);
                    }
                    this.showmore=false
                })
                .catch(e => {});
        },
        showMoreBrand(){
            this.api({
                url: "/brand/brand",
                method: "post"
            })
                .then(data => {
                    this.selectBrandTabs = [];
                    this.selectBrandTabs2 = [
                        { brandName: "全部", brandId: "0", isActive: true }
                    ];
                    for (let i in data.list) {
                        this.selectBrandTabs.push(data.list[i]);
                        this.selectBrandTabs2.push(data.list[i]);
                    }
                    this.showmoreBrand=false
                })
                .catch(e => {});
        },
        beforeAvatarUpload(file) {
            const isPNG = file.type === "image/png";
            const isLt2M = file.size / 1024 / 1024 < 1;
            if (!isPNG) {
                this.$message.error("上传图片必须为PNG！");
            }
            if (!isLt2M) {
                this.$message.error("上传图片大小不能超过 1MB!");
            }
            return isPNG && isLt2M;
        },
        upload1(content) {
            var formData = new FormData();
            formData.append("file", content.file);
            this.file = content.file;
            this.api({
                url: "/uploadfile/upload",
                method: "post",
                data: formData
            })
                .then(data => {
                    console.log(data);
                    let name = content.data.type;
                    let namePath = name + "Path";
                    this.$set(this.skuData, namePath, data.filePath);
                    this.skuData[name] = data.tempPath;
                    console.log(this.skuData);
                })
                .catch(e => {});
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
                    console.log(data);
                    let name = content.data.type;
                    let namePath = name + "Path";

                    this.$set(this.skuData, namePath, data.filePath);
                    this.skuData[name] = data.tempPath;
                    console.log(this.skuData);
                })
                .catch(e => {});
        },
        removeGoods(row) {
            console.log(1111)
            this.$confirm("确定删除该商品?", "提示", {
                confirmButtonText: "确定",
                showCancelButton: false,
                type: "warning"
            }).then(() => {
                this.api({
                    url: "/goods/goodsDel",
                    method: "post",
                    data: {
                        goodsCode: row.goodsCode
                    }
                }).then(data => {
                    this.$message({
                        type: "success",
                        message: "删除成功"
                    });
                    this.getList(this.params);
                    this.getTypeList()
                });
            });
        },
        removeSKU(row) {
            this.api({
                url: "/goods/checkSkuDel",
                method: "post",
                data: {
                    skuCode: row.skuCode,
                }
            }).then(data => {
                if(data.flag=='0'){
                    this.$confirm('是否确认删除该产品?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                        }).then(() => {
                            this.api({
                                url: "/goods/skuDel",
                                method: "post",
                                data: {
                                    skuCode: row.skuCode,
                                }
                            }).then(data => {
                                this.$message({
                                    type: "success",
                                    message: "删除成功"
                                });
                                this.getList();
                            });
                        }).catch(() => {       
                        });
                }else if(data.flag=='1'){
                    if(data.machineCode){
                        let machineCode=data.machineCode.split(',')[0]
                        this.$confirm('该产品正在 '+machineCode+' 等'+data.machineNum+'台机器销售，请先下架后进行删除', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                        }).then(() => {
                        }).catch(() => {       
                        });
                    }else{
                        this.$confirm('该产品正在销售，请先下架后进行删除', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                        }).then(() => {
                        }).catch(() => {       
                        });
                    }
                    
                }else if(data.flag=='2'){
                    this.$confirm('该产品尚有'+data.wareSkuNum+'库存，删除后无法进行销售，是否继续删除?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                        }).then(() => {
                            this.api({
                                url: "/goods/skuDel",
                                method: "post",
                                data: {
                                    skuCode: row.skuCode,
                                }
                            }).then(data => {
                                this.$message({
                                    type: "success",
                                    message: "删除成功"
                                });
                                this.getList();
                            });
                        }).catch(() => {       
                        });
                }
            });
            
            
        },
        toCreateType() {
            this.$router.push({ path: "/sku" });
        },
        toCreateBrand() {
            this.$router.push({ path: "/sku/brand" });
        }
    },
    watch:{
      totalCount(){//防止分页删除最后一条数据时白屏
        if(this.totalCount==(this.params.pageNum-1)*this.params.pageRow && this.totalCount!=0){
          this.params.pageNum-=1;
          this.getList();//获取列表数据
        }
      }
    },
    computed: {
        ...mapGetters(["userId", "userName","topPrice","stockType"])
    }
};
</script>

