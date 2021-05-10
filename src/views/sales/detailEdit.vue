
<style scoped>
.append-input .el-input--suffix {
    width: 80px !important;
}
.upload-img {
    width: 100%;
    /* height: 100%; */
}

.upload-block .el-upload-dragger {
    width: 200px;
    height: 200px;
}

.grey {
    padding: 10px 6px;
    color: #999999;
}
.sku-form {
    padding: 0 30px;
}
.sku-form .el-form-item__label {
    width: 110px !important;
}
.blue {
    color: #66b1ff;
    cursor: pointer;
    padding: 10px 6px;
}
.input-with-select {
    width: 50%;
}
.el-select .el-input {
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
.center {
    text-align: center;
}
.right {
    text-align: right;
}
.item-flex {
    padding: 0 10vw 0 20px;
}
</style>
<style>
.el-radio.modal-radio {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
}
.skuTable .el-upload-dragger {
    width: 40px;
    height: 40px;
    border: none;
}
</style>

<style lang="scss" scoped>
.push {
    width: 375px;
    // height: 200px;
    border: 1px solid #f1f1f1;
    border-radius: 8px;
    // overflow: hidden;
    .title {
        padding: 0 15px;
        font-size: 16px;
        font-weight: 600;
    }
    .banner-box {
        background: #f1f1f1;
        position: relative;
        top: 0;
        left: 0;
        height: 210px;
        img {
            max-width: 100%;
            max-height: 100%;
        }
        .banner-title {
            position: absolute;
            bottom: 0;
            color: #ffffff;
            padding: 0px 15px;
            background: #00000088;
            font-weight: 600;
        }
    }
}
.phone {
    width: 375px;
    height: 667px;
    margin-top: 20px;
    border: 1px solid #f1f1f1;
    border-radius: 8px;
    line-height: 14px;
    overflow: hidden;
    .back {
        font-size: 20px;
        font-weight: 600;
        margin: 0 13px;
    }
    .line-bottom {
        border-bottom: 1px solid #f1f1f1;
    }
    .navbar {
        height: 44px;
        text-align: center;
        font-weight: 600;
        line-height: 44px;
        padding: 0 30px;
    }
    .main-title {
        text-align: center;
        font-size: 16px;
        padding: 16px;
    }
    .phone-content {
        height: 620px;
        overflow-y: scroll;
        .long-img{
            width: 375px;
        }
    }
    .phone-content-modal {
        margin-bottom: 16px;
    }
}
.ads {
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    padding: 12px;
}
.modals {
    // flex: 1;
    width: 420px;
    height: 600px;
    overflow-y: scroll;
    margin-right: 30px;
    .modal-radio {
        // display: block;
        padding: 10px 0;
    }
}
.skuTable {
    flex: 3;
}
.modal {
    width: 349px;
    border: 1px solid #f1f1f1;
    padding: 13px;
    margin: 0 13px;
}
.modal-content {
    .sku-name {
        font-size: 16px;
        color: #000000;
        padding: 4px 0;
    }
    .sku-detail {
        font-size: 14px;
        color: #666666;
        padding: 6px 0;
    }
    .red {
        color: #f56c6c;
        font-size: 16px;
        margin-right: 8px;
    }
    .note {
        text-decoration: line-through;
    }
}
.modal-A {
    .modal-content {
        border: 1px solid #f56c6c;
        padding: 13px;
        border-radius: 6px;
        .sku-img-bg {
            width: 80px;
            height: 80px;
            background: #e7e6e6;
            margin-right: 6px;
            img {
                max-width: 100%;
                max-height: 100%;
            }
        }
    }
}
.modal-B {
    .modal-content {
        .sku-img {
            position: relative;
            top: 0;
            height: 140px;
            background: #f1f1f1;
            padding: 13px;
            border-radius: 6px;
            .fix-bottom {
                position: absolute;
                bottom: 13px;
                width: 296px;
            }
            img {
                max-width: 100%;
                max-height: 100%;
            }
        }
        .sku-detail {
            padding: 20px 0;
        }
    }
}
.modal-C {
    .modal-content {
        .sku-img-bg {
            width: 100%;
            height: 140px;
            background: #d8d7d7;
            margin: 13px 0;
            border-radius: 6px;
            img {
                max-width: 100%;
                max-height: 100%;
            }
        }
    }
}
.modal-D {
    font-size: 14px;
    .modal-content {
        .sku-img {
            overflow: hidden;
            position: relative;
            top: 0;
            left: 18px;
            width: 300px;
            img {
                width: 286px;
                min-height: 286px;
                max-height: 500px;
                display: inline-block;
                background: #e7e6e615;
            }
        }
        .sku-detail {
            padding: 20px 28px;
        }
        .text-block {
            width: 286px;
            position: absolute;
            bottom: 0;
            padding: 6px 15px;
            background: red;
            // background-image: linear-gradient(0deg, #00000038 10%,#ffffff 90%);
        }
        .sku-name {
            font-size: 18px;
            padding: 6px 0;
            font-weight: 600;
            color: #ffffff;
        }
        .price {
            font-size: 16px;
            color: #ffffff;
            padding: 6px 0;
            font-weight: 600;
        }
        .note {
            font-size: 14px;
        }
        .title {
            font-size: 18px;
            font-weight: 600;
            text-align: center;
            padding: 16px 0;
        }
    }
}
.index-box {
    margin-bottom: 10px;
    .line {
        width: 46px;
        height: 2px;
        background: red;
        margin: 0 20px;
    }
    .index {
        width: 20px;
        height: 20px;
        line-height: 20px;
        background: red;
        border-radius: 50%;
        text-align: center;
        color: #ffffff;
        font-weight: 600;
        font-size: 12px;
    }
}
.add-sku-pic {
    display: inline-block;
    width: 40px;
    height: 40px;
    color: #999999;
    font-size: 16px;
    font-weight: 16px;
    cursor: pointer;
    .add {
        width: 40px;
        height: 40px;
        border: 1px solid #f1f1f1;
    }
    .sku-img {
        max-width: 100%;
        max-height: 100%;
    }
}
</style>

<template>
    <div class="app-container">
        <div class="flex">
            <div class="flex-1 item-flex">
                <el-form class="small-space"
                         label-position="left"
                         label-width="140px">
                    <el-form-item label="上新标题："
                                  required>
                        <el-input type="text"
                                  v-model="adData.title"></el-input>
                    </el-form-item>
                    <el-form-item label="广告封面"
                                  required>
                        <el-upload drag
                                   :show-file-list="false"
                                   :before-upload="beforeAvatarUpload"
                                   :http-request="upload"
                                   action=""
                                   :data="{type:'mainPic'}"
                                   class="upload-block">
                            <div v-if="adData.mainPicPath"
                                 class="flex-center full-width">
                                <img :src="adData.mainPicPath"
                                     alt=""
                                     class="upload-img">
                            </div>
                            <div v-else>
                                <i class="el-icon-upload"></i>
                                <div slot="tip"
                                     class="el-upload__tip">点击上传图片</div>
                            </div>
                        </el-upload>
                        <div class="el-upload__tip">支持.jpg/.png/.jpeg文件，且不超过1M</div>
                    </el-form-item>
                    <el-form-item label="广告内容："
                                  required>
                        <el-switch
                        v-model="isSelf"
                        active-text="自定义SKU"
                        inactive-text="模版图片">
                        </el-switch>
                        <div v-if="isSelf">
                        <div class="ads"
                             v-if="main.length > 0">
                            <div v-for="(item,i) in main"
                                 :key="i">
                                {{Number(i)+1}}、<input type="text"
                                       v-model="item.mainBody">
                                <br>
                                <el-button type="primary"
                                           @click="showSKUModal(item)"
                                           size="small">编辑已选SKU及模版</el-button>
                            </div>
                        </div>
                        <div class="note"
                             v-else>还没有广告内容，请点击下方按钮添加～</div>
                        <div class="right">
                            <el-button type="primary"
                                       @click="showSKUModal"
                                       size="small">选择SKU及模版</el-button>
                        </div>
                        </div>
                      <div v-else>
                        <el-upload drag
                                    :show-file-list="false"
                                    :before-upload="beforeAvatarUpload"
                                    :http-request="upload"
                                    action=""
                                    :data="{type:'longPic'}"
                                    class="upload-block">
                                <div v-if="adData.longPicPath"
                                    class="flex-center full-width">
                                    <img :src="adData.longPicPath"
                                        alt=""
                                        class="upload-img">
                                </div>
                                <div v-else>
                                    <i class="el-icon-upload"></i>
                                    <div slot="tip"
                                        class="el-upload__tip">点击上传图片</div>
                                </div>
                            </el-upload>
                            <div class="el-upload__tip">支持.jpg/.png/.jpeg文件，且不超过1M</div>
                        </div>
                    </el-form-item>
                    <el-form-item label="投放门店："
                                  required>
                        {{storeName}}
                    </el-form-item>
                    <el-form-item label="预计覆盖用户："
                                  required>
                        {{coverageUser}}
                    </el-form-item>
                    <el-form-item label="计划投放时间"
                                  required>
                        <el-date-picker :picker-options="pickerOptions"
                                        v-model="time"
                                        value-format="yyyy-MM-dd HH:mm:ss"
                                        type="datetime"
                                        placeholder="选择日期时间"></el-date-picker>
                    </el-form-item>

                </el-form>
            </div>
            <div class="flex-1">
                <el-form class="small-space"
                         label-position="left"
                         label-width="80px">
                    <el-form-item label="预览："
                                  required>
                        <div class="push">
                            <div class="title">光芽新零售</div>
                            <div class="banner-box flex-center">
                                <img :src="adData.mainPicPath"
                                     alt="">
                                <div class="banner-title limit">{{adData.title}}</div>
                            </div>
                        </div>
                        <div class="phone">
                            <div class="flex-center-Y line-bottom">
                                <i class="el-icon-arrow-left back"></i>
                                <div class="navbar limit">{{adData.title}}</div>
                            </div>
                            <div class="phone-content" v-if="isSelf">
                                <div v-for="(item,i) in main"
                                     :key="i">
                                    <div class="main-title"
                                         v-if="item.mainBody">{{item.mainBody}}</div>
                                    <div v-for="(obj,j) in item.skuLists"
                                         :key="j"
                                         class="phone-content-modal">
                                        <div class="modal-A modal"
                                             v-if="item.modalType == 1">
                                            <div class="index-box flex-center">
                                                <span class="line"></span>
                                                <span class="index">{{obj.realIndex}}</span>
                                                <span class="line"></span>
                                            </div>
                                            <div class="modal-content flex-center">
                                                <div class="sku-img-bg flex-center">
                                                    <img :src="obj.appPicture"
                                                         alt="">
                                                </div>
                                                <div class="flex-1">
                                                    <div class="sku-name limit">{{obj.skuName}}</div>
                                                    <div class="sku-detail">{{obj.dec}}</div>
                                                    <div>
                                                        <span class="red">尝鲜价：¥ {{obj.discountPrice}}</span>
                                                        <span class="note"
                                                              v-if="obj.salePrice!=obj.discountPrice">原价：¥ {{obj.salePrice}}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-B modal"
                                             v-else-if="item.modalType == 2">
                                            <div class="index-box flex-center">
                                                <span class="line"></span>
                                                <span class="index">{{obj.realIndex}}</span>
                                                <span class="line"></span>
                                            </div>
                                            <div class="modal-content">
                                                <div class="sku-img flex-center">
                                                    <img :src="obj.adPicPath"
                                                         alt="">
                                                    <div class="fix-bottom">
                                                        <div class="note right"
                                                             v-if="obj.salePrice!=obj.discountPrice">原价：¥ {{obj.salePrice}}</div>
                                                        <div class="flex-center-Y">
                                                            <div class="flex-1 sku-name limit">{{obj.skuName}}</div>
                                                            <div class="flex-1 red right">尝鲜价：¥ {{obj.discountPrice}}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="sku-detail right">
                                                    {{obj.dec}}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-C modal"
                                             v-else-if="item.modalType == 3">
                                            <div class="index-box flex-center">
                                                <span class="line"></span>
                                                <span class="index">{{obj.realIndex}}</span>
                                                <span class="line"></span>
                                            </div>
                                            <div class="modal-content">
                                                <div class="sku-name limit">{{obj.skuName}}</div>
                                                <div class="note"
                                                     v-if="obj.salePrice!=obj.discountPrice">原价：¥ {{obj.salePrice}}</div>
                                                <div class="red">尝鲜价：¥ {{obj.discountPrice}}</div>
                                                <div class="sku-img-bg flex-center">
                                                    <img :src="obj.adPicPath"
                                                         alt="">
                                                </div>
                                                <div class="sku-detail right">{{obj.dec}}</div>
                                            </div>
                                        </div>
                                        <div class="modal-D modal"
                                             v-else-if="item.modalType == 4">
                                            <div class="index-box flex-center">
                                                <span class="line"></span>
                                                <span class="index">{{obj.realIndex}}</span>
                                                <span class="line"></span>
                                            </div>
                                            <div class="modal-content">
                                            <div class="title">{{obj.skuName}}</div>
                                            <div class="sku-img">
                                                    <img :src="obj.adPicPath"
                                                         alt="">
                                            <div class="text-block">
                                                <div class="sku-name">{{obj.skuName}}</div>
                                                <div class="price">
                                                    <span class="price" >尝鲜价：¥ {{obj.discountPrice}}</span>
                                                    <span class="note" v-if="obj.salePrice!=obj.discountPrice">原价：¥ {{obj.salePrice}}</span>
                                                </div>
                                            </div>
                                                </div>
                                                <div class="sku-detail">
                                                    - {{obj.dec}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div v-else class="phone-content">
                                <img :src="adData.longPicPath" class="long-img">
                            </div>
                            </div>
                    </el-form-item>
                </el-form>
            </div>
        </div>

        <div class="center">
            <el-button type="primary"
                       @click="showCreateAD">确认发布</el-button>
        </div>
        <el-dialog title="选择SKU及模版"
                   :visible.sync="chooseSkuDialogVisible"
                   width="88%">
            <div class="flex">
                <div class="modals">
                    <el-radio-group v-model="skuData.modalType">
                        <!-- <div>
                            <el-radio :label="1"
                                      class="modal-radio">
                                <div class="modal-A modal">
                                    <div class="index-box flex-center">
                                        <span class="line"></span>
                                        <span class="index">1</span>
                                        <span class="line"></span>
                                    </div>
                                    <div class="modal-content flex-center">
                                        <div class="sku-img-bg"></div>
                                        <div class="flex-1">
                                            <div class="sku-name limit">SKU名称</div>
                                            <div class="sku-detail">描述文案</div>
                                            <div>
                                                <span class="red">尝鲜价：¥ 8.88</span>
                                                <span class="note">原价：¥ 18.88</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-radio>
                        </div>
                        <br>
                        <div>
                            <el-radio :label="2"
                                      class="modal-radio">
                                <div class="modal-B modal">
                                    <div class="index-box flex-center">
                                        <span class="line"></span>
                                        <span class="index">1</span>
                                        <span class="line"></span>
                                    </div>
                                    <div class="modal-content">
                                        <div class="sku-img">
                                            <div class="fix-bottom">
                                                <div class="note right">原价：¥ 18.88</div>
                                                <div class="flex-center-Y">
                                                    <div class="flex-1 sku-name limit">SKU名称</div>
                                                    <div class="flex-1 red right">尝鲜价：¥ 8.88</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sku-detail right">
                                            描述文案
                                        </div>
                                    </div>
                                </div>
                            </el-radio>
                        </div>
                        <div>
                            <el-radio :label="3"
                                      class="modal-radio">
                                <div class="modal-C modal">
                                    <div class="index-box flex-center">
                                        <span class="line"></span>
                                        <span class="index">1</span>
                                        <span class="line"></span>
                                    </div>
                                    <div class="modal-content">
                                        <div class="sku-name limit">SKU名称</div>
                                        <div class="note">原价：¥ 18.88</div>
                                        <div class="red">尝鲜价：¥ 8.88</div>
                                        <div class="sku-img-bg"></div>
                                        <div class="sku-detail right">描述文案</div>
                                    </div>
                                </div>
                            </el-radio>
                        </div> -->
                        <div>
                            <el-radio :label="4"
                                      class="modal-radio">
                                <div class="modal-D modal">
                                    <div class="index-box flex-center">
                                        <span class="line"></span>
                                        <span class="index">1</span>
                                        <span class="line"></span>
                                    </div>
                                    <div class="modal-content">
                                        <div class="title">
                                            SKU名称
                                        </div>
                                        <div class="sku-img">
                                            <img src=""
                                                 alt="">
                                            <div class="text-block">
                                                <div class="sku-name">SKU名称</div>
                                                <div class="price">
                                                    <span class="price">尝鲜价：¥ 8.88</span>
                                                    <span class="note"> 原价：¥ 18.88</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="sku-detail">
                                            - 描述详情
                                        </div>
                                    </div>
                                </div>
                            </el-radio>
                        </div>
                    </el-radio-group>
                </div>
                <div class="skuTable">
                    <div>已选<span class="danger">{{checked.length}}</span>个SKU</div>
                    <el-table ref="multipleTable"
                              :data="tableData"
                              stripe
                              v-loading.body="listLoading"
                              max-height="600"
                              element-loading-text="拼命加载中"
                              @selection-change="handleSelectionChange">
                        <el-table-column type="selection"
                                         width="55"></el-table-column>
                        <el-table-column prop="skuName"
                                         label="SKU名称"
                                         align="center"></el-table-column>
                        <el-table-column label="SKU图片"
                                         align="center">
                            <template slot-scope="scope">
                                <img :src="scope.row.appPicture"
                                     width="40"
                                     height="40"
                                     class="portrait"
                                     v-if="skuData.modalType == 1" />
                                <el-upload drag
                                           :show-file-list="false"
                                           v-else
                                           :before-upload="beforeAvatarUpload"
                                           :http-request="uploadSku"
                                           action=""
                                           :data="{type:'adPic',skuCode:scope.row.skuCode}"
                                           class="upload-block">
                                    <div class="add-sku-pic flex-center">
                                        <img :src="scope.row.adPicPath"
                                             alt=""
                                             v-if="scope.row.adPicPath"
                                             class="sku-img">
                                        <div v-else
                                             class="add flex-center">+</div>
                                    </div>
                                </el-upload>

                            </template>
                        </el-table-column>
                        <el-table-column label="描述文案"
                                         align="center">
                            <template slot-scope="scope">
                                <input type="text"
                                       v-model="scope.row.dec"
                                       v-if="scope.row.checked">
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
            <span slot="footer"
                  class="dialog-footer">
                <el-button @click="chooseSkuDialogVisible = false">取 消</el-button>
                <el-button type="primary"
                           @click="editSkuModal"
                           v-if="skuData.index">确 定</el-button>
                <el-button type="primary"
                           @click="addSkuModal"
                           v-else>确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog title="上新广告投放确认"
                   :visible.sync="createGoodsDialogVisible"
                   width="36%">
            <el-form class="small-space demo-form-inline sku-form"
                     :model="goodsData"
                     label-position="left"
                     label-width="140px"
                     :inline="true">
                <el-form-item label="投放门店:">
                    {{storeName}}
                </el-form-item>
                <br>
                <el-form-item label="计划投放时间：">
                    {{time}}
                </el-form-item>
                <br>
                <el-form-item label="预计覆盖用户:">
                    {{coverageUser}} 人
                </el-form-item>
                <br>
            </el-form>
            <span slot="footer"
                  class="dialog-footer">
                <el-button @click="createGoodsDialogVisible = false">取 消</el-button>
                <el-button type="primary"
                           @click="createGoods">确定投放</el-button>
            </span>
        </el-dialog>

    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            isSelf:true,
            adData: {},
            // storeName:this.$route.params.storeName,
            // storeCode:this.$route.params.storeCode,
            // operatorId:this.$route.params.operatorId,
            storeName: "",
            storeCode: "",
            operatorId: "",
            time: "",
            listLoading: false,
            totalCount: 0,
            tableData: [],
            params: {
                // pageRow:20,
                // pageNum:1
            },
            createGoodsDialogVisible: false,
            chooseSkuDialogVisible: false,
            goodsData: {},
            skuData: {
                modalType: 1
            },
            file: {},
            dialogTitle: "",
            expands: [],
            reqLoading: false,
            phoneType: 0,
            checked: [],
            coverageUser: "",
            main: [
                // {
                //     modalType:'1',
                //     mainBody:'11',
                //     skuLists:[
                //         {
                //             skuCode:'',
                //             secondBody:'',
                //             mainPic:''
                //         },
                //     ]
                // }
            ],
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() < Date.now() - 8.64e7;
                }
            }
        };
    },

    created() {
        this.getData();
    },
    methods: {
        addSkuModal() {
            let skuLists = [];
            if (this.checked.length == 0) {
                this.$message({
                    type: "warning",
                    message: "请选择SKU"
                });
                return;
            }
            for (let i in this.checked) {
                if (!this.checked[i].dec) {
                    this.$message.error("请填写选择SKU的描述文案");
                    return;
                }
                let pic = this.checked[i].appPicture;
                if (this.skuData.modalType != 1) {
                    if (!this.checked[i].adPic) {
                        this.$message.error("请填写选择SKU的描述文案");
                        return;
                    } else {
                        pic = this.checked[i].adPic;
                    }
                }
                let item = {
                    skuCode: this.checked[i].skuCode,
                    secondBody: this.checked[i].dec,
                    mainPic: this.checked[i].appPicture
                    // adPic:this.checked[i].adPic
                };
                skuLists.push(item);
            }
            let main = {
                modalType: this.skuData.modalType,
                mainBody: "",
                skuLists: skuLists,
                checked: this.checked,
                tableData: this.tableData,
                index: this.main.length + 1 //start from 1
            };
            this.main.push(main);
            let realIndex = 0;
            for (let i in this.main) {
                for (let j in this.main[i].checked) {
                    realIndex = realIndex + 1;
                    this.main[i].checked[j].realIndex = realIndex;
                }
            }
            this.$set(this, "main", this.main);
            this.chooseSkuDialogVisible = false;
        },
        editSkuModal() {
            let skuLists = [];
            if (this.checked.length == 0) {
                this.$message({
                    type: "warning",
                    message: "请选择SKU"
                });
                return;
            }
            for (let i in this.checked) {
                if (!this.checked[i].dec) {
                    this.$message.error("请填写选择SKU的描述文案");
                    return;
                }
                let pic = this.checked[i].appPicture;
                if (this.skuData.modalType != 1) {
                    if (!this.checked[i].adPic) {
                        this.$message.error("请填写选择SKU的描述文案");
                        return;
                    } else {
                        pic = this.checked[i].adPic;
                    }
                }
                let item = {
                    skuCode: this.checked[i].skuCode,
                    secondBody: this.checked[i].dec,
                    mainPic: this.checked[i].appPicture
                };
                skuLists.push(item);
            }
            // let main = {
            //     modalType:this.skuData.modalType,
            //     mainBody:'',
            //     skuLists:skuLists,
            //     checked:this.checked,
            //     tableData:this.tableData,
            //     index:this.main.length + 1//start from 1
            // }
            let main = this.skuData;
            main.skuLists = skuLists;
            main.checked = this.checked;
            main.tableData = this.tableData;
            this.main[main.index - 1] = main;
            let realIndex = 0;
            for (let i in this.main) {
                for (let j in this.main[i].checked) {
                    realIndex = realIndex + 1;
                    this.main[i].checked[j].realIndex = realIndex;
                }
            }
            this.$set(this, "main", this.main);
            this.chooseSkuDialogVisible = false;
        },
        beforeAvatarUpload(file) {
            const isPNG =
                file.type === "image/png" ||
                file.type === "image/jpg" ||
                file.type === "image/jpeg";
            const isLt2M = file.size / 1024 / 1024 < 1;
            if (!isPNG) {
                this.$message.error("上传图片必须为PNG！");
            }
            if (!isLt2M) {
                this.$message.error("上传图片大小不能超过 1MB!");
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
                    let name = content.data.type;
                    let namePath = name + "Path";
                    this.$set(this.adData, namePath, data.filePath);
                    this.adData[name] = data.tempPath;
                })
                .catch(e => {});
        },
        uploadSku(content) {
            var formData = new FormData();
            formData.append("file", content.file);
            this.api({
                url: "/uploadfile/upload",
                method: "post",
                data: formData
            })
                .then(data => {
                    let name = content.data.type;
                    let skuCode = content.data.skuCode;
                    let namePath = name + "Path";
                    for (let i in this.tableData) {
                        if (this.tableData[i].skuCode == skuCode) {
                            this.$set(
                                this.tableData[i],
                                namePath,
                                data.filePath
                            );
                            this.$set(this.tableData[i], name, data.tempPath);
                        }
                    }
                })
                .catch(e => {});
        },
        handleSelectionChange(val) {
            // if(val.length <= 12){
            for (let i in val) {
                if (!val[i]) return;
            }
            this.checked = val;
            for (let j in this.tableData) {
                this.$set(this.tableData[j], "checked", false);
            }
            for (let i in val) {
                for (let j in this.tableData) {
                    if (this.tableData[j].skuCode == val[i].skuCode) {
                        this.$set(this.tableData[j], "checked", true);
                    }
                }
            }
            // }else{
            //     // val = val.slice(0,2)
            //     // this.checked = val.slice(0,2)
            //     this.$message({
            //         type: 'warning',
            //         message: '最多选择12个SKU投放广告'
            //     })
            // }
        },
        createGoods() {
            if (!this.adData.title) {
                this.$message({
                    type: "warning",
                    message: "请填写上新标题"
                });
                return;
            }
            if (!this.time) {
                this.$message({
                    type: "warning",
                    message: "请选择计划投放时间"
                });
                return;
            }
            if (!this.adData.mainPic) {
                if (!this.adData.mainPicPath) {
                    this.$message({
                        type: "warning",
                        message: "请上传广告封面"
                    });
                    return;
                } else {
                    this.adData.mainPic = this.adData.mainPicPath;
                }
            }
            if(this.isSelf){
                if (this.main.length == 0) {
                    this.$message({
                        type: "warning",
                        message: "请选择SKU及模版"
                    });
                    return;
                }
                let main = [];
                console.log("this.main", this.main);
                for (let i in this.main) {
                    let item = {
                        mainBody: this.main[i].mainBody,
                        mainBatch: Number(i) + 1,
                        templet: this.main[i].modalType,
                        secondText: []
                    };
                    for (let j in this.main[i].checked) {
                        let it = this.main[i].checked[j];
                        let obj = {
                            appPic: it.mainPic,
                            secondBody: it.secondBody,
                            secondBatch: Number(i) + 1,
                            skuCode: it.skuCode
                        };
                        if (this.main[i].modalType != 1) {
                            obj.appPic = it.adPic || it.mainPic;
                        }
                        item.secondText.push(obj);
                    }
                    main.push(item);
                }
                          var datas = {
                    thePlanTime: this.time,
                    mainPic: this.adData.mainPic,
                    storeCode: this.storeCode,
                    username: this.userName,
                    coverageUser: this.coverageUser,
                    adTitle: this.adData.title,
                    mainText: main,
                    textJson: JSON.stringify(main),
                    id: this.$route.params.id
                }
            }else{
                if (!this.adData.longPic) {
                    this.$message({
                        type: "warning",
                        message: "请上传模版图片"
                    });
                    return;
                }
                var datas = {
                    thePlanTime: this.time,
                    mainPic: this.adData.mainPic,
                    storeCode: this.storeCode,
                    username: this.userName,
                    coverageUser: this.coverageUser,
                    adTitle: this.adData.title,
                    allbigPic:this.adData.longPic,
                    id: this.$route.params.id
                    // mainText: main,
                    // textJson: JSON.stringify(main)
                }
            }
            this.api({
                url: "/promotion/updateDm",
                method: "post",
                data: datas
                // {
                //     thePlanTime: this.time,
                //     mainPic: this.adData.mainPic,
                //     storeCode: this.storeCode,
                //     username: this.userName,
                //     coverageUser: this.coverageUser,
                //     adTitle: this.adData.title,
                //     mainText: main,
                    
                // }
            }).then(data => {
                this.$message({
                    type: "success",
                    message: "投放成功"
                });
                this.$router.push({ path: "/markting" });
            });
        },
        showSKUModal(item) {
            this.chooseSkuDialogVisible = true;
            this.listLoading = true;
            let data = this.params;
            data.storeCode = this.storeCode;
            data.operatorId = this.operatorId;
            this.api({
                url: "/promotion/showAllSkuForOperator",
                method: "post",
                data: data
            }).then(data => {
                this.listLoading = false;
                for (let i in data.list) {
                    data.list[i].index = Number(i) + 1;
                }
                this.coverageUser = data.coverageUser;

                //then
                if (item.modalType) {
                    console.log("edit");
                    let indexList = [];
                    this.skuData = item;
                    for (let i in item.checked) {
                        item.checked[i].checked = true;
                        for (let j in data.list) {
                            if (
                                data.list[j].skuCode == item.checked[i].skuCode
                            ) {
                                data.list[j] = item.checked[i];
                                indexList.push(j);
                            }
                        }
                    }
                    this.$set(this, "tableData", data.list);
                    this.$set(this, "checked", item.checked);
                    let this_ = this;
                    indexList.forEach(row => {
                        this_.$nextTick(function() {
                            this_.$refs.multipleTable.toggleRowSelection(
                                this_.tableData[Number(row)],
                                true
                            );
                        });
                    });
                } else {
                    console.log("add");
                    this.tableData = data.list;
                    this.skuData = {
                        modalType: 1
                    };
                    this.checked = [];
                }
                this.chooseSkuDialogVisible = true;
            });
        },
        showCreateAD() {
            this.createGoodsDialogVisible = true;
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
            let data = params || this.params;
            data.storeCode = this.storeCode;
            data.operatorId = this.operatorId;
            this.api({
                url: "/promotion/showAllSkuForOperator",
                method: "post",
                data: data
            }).then(data => {
                this.listLoading = false;
                for (let i in data.list) {
                    data.list[i].index = Number(i) + 1;
                }
                this.tableData = data.list;
            });
        },
        getData() {
            this.api({
                url: "/promotion/showAllDmDetails",
                method: "post",
                data: {
                    id: this.$route.params.id
                }
            })
                .then(data => {
                    this.adData.title = data.detailsAdJson.adTitle;
                    this.coverageUser = data.detailsAdJson.coverageUser;
                    this.adData.mainPicPath = data.detailsAdJson.mainPic;
                    this.adData.longPicPath = data.detailsAdJson.allbigPic;
                    this.storeName = data.detailsAdJson.storeName;
                    this.storeCode = data.detailsAdJson.storeId;
                    this.operatorId = data.detailsAdJson.operatorId;
                    this.isSelf = data.detailsAdJson.typeFlag;

                    let main = data.detailsJson;
                    let realIndex = 0;

                    for (let i in main) {
                        for (let j in main[i].secondText) {
                            realIndex = realIndex + 1;
                            main[i].secondText[j].realIndex = realIndex;
                            main[i].secondText[j].modalType = Number(
                                main[i].templet
                            );
                            main[i].secondText[j].appPicture =
                                main[i].secondText[j].appPic; // type 1
                            main[i].secondText[j].mainPic =
                                main[i].secondText[j].appPic;
                            main[i].secondText[j].adPicPath =
                                main[i].secondText[j].appPic;
                            main[i].secondText[j].dec =
                                main[i].secondText[j].secondBody;
                        }
                        main[i].modalType = Number(main[i].templet);
                        main[i].checked = main[i].secondText;
                        main[i].skuLists = main[i].secondText;
                        main[i].index = Number(i) + 1;
                    }
                    this.main = main;
                })
                .catch(e => {});
        },
        remove(row) {
            this.$confirm("是否取消本次上新广告的发布?", "提示", {
                confirmButtonText: "确定",
                showCancelButton: false,
                type: "warning"
            }).then(() => {
                this.api({
                    url: "/user/updateUser",
                    method: "post",
                    data: {
                        userId: row.userId,
                        deleteStatus: "0"
                    }
                }).then(data => {
                    this.$message({
                        type: "success",
                        message: "删除成功"
                    });
                    this.getList(this.params);
                });
            });
        }
    },
    computed: {
        ...mapGetters(["userId", "userName"])
    }
};
</script>

