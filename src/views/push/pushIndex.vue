<style  lang="scss" scoped>
.line-height-0{line-height: 0}
.blue {
    color: #286EFF;
    cursor: pointer;
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
.grey{color: #e6e6e6}
.button{cursor: pointer;z-index: 10;width: 8vw;height: 4.8vh;color: #fff;background:#286EFF;text-align: center;line-height: 4.8vh!important;}
.createBtn{position: absolute;right: 2vw;top: 4vh}
.el-upload__tip{color: #D8D8D8;font-weight: 400}
.el-card{height: 85vh;padding:2vw 2vw;border-radius:5px;border-radius:20px;overflow: auto}
.img{width: 6.5vw;height: 2.6vw}
.title{text-overflow: -o-ellipsis-lastline;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;}
.kupperDialog{width: 32vw!important;height: 60vh!important;padding: 3.7vh 4vw;color: #333;position: relative;border-radius: 10px;overflow: hidden;position: relative}
.kupperDialog1{width: 26vw!important;height:28vh!important;}
.kupperDialog2{width: 80vw!important;height:60vh!important;}
.kupperDialog .title{margin-bottom: 3.7vh;}
.kupperDialog .circle{width: 20px;height: 20px;background: #286EFF;border-radius: 50%;margin-right: 10px}
.kupperDialog .infoBox{width: 100%;height: 20vh;border: 1px solid #DCDFE6;padding: 1vh;position: relative;}
.kupperDialog .infoBox2{height: 15vh;}
.kupperDialog .infoBox .tip{position: absolute;right: 1vh;bottom: 1vh}
.kupperDialog .bottom{width: 100%;height: 5.5vh;justify-content: space-around;position: absolute;bottom:4vh;left: 0}
.kupperDialog .bottom .btn{cursor: pointer;width: 26%;height:100%;color: #286EFF;border: 1px solid #286EFF;text-align: center;line-height: 5.5vh}
.kupperDialog .bottom .btn1{cursor: pointer;width: 26%;height:100%;color: #fff;background:#286EFF;text-align: center;line-height: 5.5vh}
.kupperDialog .trangle{width:0;height:0;border-left: 0px solid transparent;border-right: 90px solid transparent;border-top: 90px solid #286EFF;position: absolute;top: -1px;left: -1px;}
.kupperDialog .trangle1{width:0;height:0;border-left: 0px solid transparent;border-right: 90px solid transparent;border-top: 90px solid rgba(237, 112, 46, 1);position: absolute;top: -1px;left: -1px;}
.kupperDialog .trangle div,.kupperDialog .trangle1 div{color: #fff;transform: rotate(315deg);position: absolute;left: 0;top: -80px;display: block;width: 90px}
.statusTab .inner{justify-content: space-between;width: 25%;margin: 4vh 0}
.statusTab .inner .box{cursor: pointer;}
textarea{height: 7vh}
.selectborder{border-bottom: 2px solid #286EFF}
.bigfont{font-size: 1.04vw;line-height: 1.375}
.smallfont{font-size: 0.94vw;line-height: 1.4}
.minifont{font-size: 0.8333vw;font-weight: 400}
.W-50{width: 50%}
.W-70{width: 70%}
.W-30{width: 30%}
.font-bold{font-weight: bold}
.smallMt{margin-bottom: 1.8vh}
.flex-wrap{flex-wrap: wrap;}
.el-button--primary{background-color: rgba(40, 110, 255, 1)}
@media screen and (max-width:1680px) {
    .kupperDialog .trangle{border-right: 70px solid transparent;border-top: 70px solid #286EFF;position: absolute;}
    .kupperDialog .trangle1{border-right: 70px solid transparent;border-top: 70px solid rgba(237, 112, 46, 1);position: absolute;}
    .kupperDialog .trangle div,.kupperDialog .trangle1 div{top: -60px;width: 70px}
}
.pagination-line{text-align: center!important;position: absolute;bottom: 0;width: 95%}
/* 广告style */
.append-input .el-input--suffix {
    width: 80px !important;
}
.upload-img {
    width: 100%;
    height: 100%; 
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
    color: #286eff;
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
    border: #286eff !important;
    color: #286eff !important;
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
.push {
    width: 375px;
    // height: 200px;
    border: 1px solid #f1f1f1;
    border-radius: 8px;
    overflow: hidden;
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
/* 广告style */
</style>
<style>
#kupper .el-pagination.is-background .el-pager li:not(.disabled).active,#kupper .el-radio-button__orig-radio:checked+.el-radio-button__inner{background-color: rgba(40, 110, 255, 1)}
#kupper .el-checkbox__inner{width: 20px;height: 20px;}
#kupper .el-checkbox{margin-right: 5px}
#kupper .el-checkbox__inner::after{width: 8px;height: 12px;}
#kupper .el-switch__core:after,#kupper .el-switch__core{border-radius: 0}
#kupper .storeSelect .el-select{width: 100%!important}
#kupper .selectWidth .el-input--suffix .el-input__inner,.kupperDialog .el-input--suffix .el-input__inner{padding: 0}
#kupper .el-dialog__header,#kupper .el-dialog__body,#kupper .el-dialog__footer{padding:0}
#kupper .el-tabs__item{font-size: 20px;height: 5.5vh;line-height: 5.5vh;width: 7.8vw;text-align: center}
.kupperDialog .infoBox .el-input,.kupperDialog .infoBox .el-textarea{font-size:14px;font-weight: 400!important;}
.kupperDialog .infoBox .el-input__inner{padding: 0;height: 25px}
/* .kupperDialog .el-input__inner{border: 0} */
.kupperDialog .inputPadding .el-input__inner{padding: 0}
#kupper .el-cascader{width: 300px}
.kupperDialog .el-textarea__inner{height: 15vh;padding: 0;border: 0}
.kupperDialog .infoBox2 .el-textarea__inner{height: 8vh}
#kupper .filt .el-input{width: 68%}
.KupperdialogClass{border-radius: 10px;width: 32vw!important;max-height: 90vh!important}
.KupperdialogClass1{border-radius: 10px;width: 26vw!important;max-height: 90vh!important}
.KupperdialogClass2{border-radius: 10px;width: 80vw!important;max-height: 90vh!important;padding: 2vw;}
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
    #kupper .el-checkbox__inner{width: 18px;height: 18px;}
    #kupper .el-checkbox__inner::after{width: 6px;height: 10px;}
    .kupperDialog .infoBox .el-input,.kupperDialog .infoBox .el-textarea{font-size:12px;font-weight: 400!important;}
}
@media screen and (max-width:1440px) {
    .operatorTableStyle{font-size: 14px;}
    .operatorCellStyle{font-size: 12px;}
    #operator .el-tabs__item{font-size: 16px}
    .kupperDialog .el-input,.kupperDialog .el-textarea{font-size:16px;}
    #kupper .el-tabs__item{font-size: 16px;}
     #kupper .el-checkbox__inner{width: 16px;height: 16px;}
    #kupper .el-checkbox__inner::after{width: 4px;height: 8px;}
    .kupperDialog .infoBox .el-input,.kupperDialog .infoBox .el-textarea{font-size:10px;font-weight: 400!important;}
}
@media screen and (max-width:1280px) {
    .operatorTableStyle{font-size: 12px;}
    .operatorCellStyle{font-size: 10px;}
    #operator .el-tabs__item{font-size: 14px}
    .kupperDialog .el-input,.kupperDialog .el-textarea{font-size:14px;}
    #kupper .el-tabs__item{font-size: 14px;}
    #kupper .el-checkbox__inner{width: 14px;height: 14px;}
    #kupper .el-checkbox__inner::after{width: 2px;height: 6px;}
}
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
.skuTable .el-table{overflow: auto}
.el-dialog__footer{z-index: 10}
</style>
<template>
    <div class="app-container" id="kupper" v-if="!isCreateAd">
        <el-card style="position:relative">
        <div class="flex-center-E justify-between mb-2">
          <el-tabs v-model="activeName" type="card" @tab-click="changeTab">
                <el-tab-pane label="短信" name="0">
                </el-tab-pane>
                <!-- <el-tab-pane label="push" name="1">
                </el-tab-pane> -->
                <el-tab-pane label="广告" name="2">
                </el-tab-pane>
            </el-tabs>
          <div class="flex-center-E justify-between">
            <el-button icon="el-icon-circle-plus-outline" class="smallfont" style="margin-right:2vw" @click="showExPress" v-if="!addFlag"><span v-if="activeName=='0'">创建短信</span><span v-else-if="activeName=='1'">创建push</span><span v-else>创建广告</span></el-button>
            <el-button type="primary" icon="el-icon-circle-plus-outline" class="smallfont" style="margin-right:2vw" @click="create" v-else><span v-if="activeName=='0'">创建短信</span><span v-else-if="activeName=='1'">创建push</span><span v-else>创建广告</span></el-button>
          </div>
        </div>
        <div class="statusTab smallfont">
            <el-radio-group v-model="smsStatus" style="margin-bottom: 30px;" @change="changeStatus">
              <el-radio-button label="0">审核中</el-radio-button>
              <el-radio-button label="1">已通过</el-radio-button>
              <el-radio-button label="-1">未通过</el-radio-button>
            </el-radio-group>
        </div>
        <el-table
            v-show="activeName=='0'"
            stripe
            :data="tableData"
            header-row-class-name="operatorTableStyle"
            cell-class-name="operatorCellStyle"
            style="width:100%">
            <el-table-column
            prop="smsTitle"
            label="标题"
            align="center">
                <template slot-scope="scope">
                     <el-popover placement="bottom"
                         width="200"
                         trigger="hover">
                            <div slot="reference" class="title">
                                {{scope.row.smsTitle}}
                            </div>
                            <span>{{scope.row.smsTitle}}</span>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column
            prop="smsContext"
            label="通知内容"
            align="center">
                <template slot-scope="scope">
                     <el-popover placement="bottom"
                         width="200"
                         trigger="hover">
                            <div slot="reference" class="title">
                                {{scope.row.smsContext}}
                            </div>
                            <span>{{scope.row.smsContext}}</span>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column
            prop="gmtCreated"
            label="创建时间"
            align="center">
            </el-table-column>
            <el-table-column label="操作"
                             width="200"
                             align="center">
                <template slot-scope="scope">
                    <span @click="backup1(scope.row)"
                          v-if="smsStatus=='0'"
                          class="blue">
                        撤回申请
                    </span>
                    <span @click="backup2(scope.row)"
                          v-if="smsStatus=='1' || smsStatus=='-1'"
                          class="blue">
                        删除
                    </span>
                    <span @click="edit(scope.row)"
                          v-if="smsStatus=='-1'"
                          class="blue">
                        编辑
                    </span>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination-line" v-show="activeName=='0'">
            <el-pagination background
                           @current-change="currentChange"
                           :current-page="params.pageNum"
                           :page-size="params.pageRow"
                           :total="totalCount"  
                           layout="total, prev, pager, next, jumper">
            </el-pagination>
        </div>
        <el-table
            v-show="activeName=='1'"
            stripe
            :data="tableData"
            header-row-class-name="operatorTableStyle"
            cell-class-name="operatorCellStyle"
            style="width:100%">
            <!-- <el-table-column
            prop="smsId"
            label="序号"
            align="center">
            </el-table-column> -->
            <el-table-column
            prop="smsTitle"
            label="标题"
            align="center">
                <template slot-scope="scope">
                     <el-popover placement="bottom"
                         width="200"
                         trigger="hover">
                            <div slot="reference" class="title">
                                {{scope.row.smsTitle}}
                            </div>
                            <span>{{scope.row.smsTitle}}</span>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column
            prop="smsContext"
            label="通知内容"
            align="center">
                <template slot-scope="scope">
                     <el-popover placement="bottom"
                         width="200"
                         trigger="hover">
                            <div slot="reference" class="title">
                                {{scope.row.smsContext}}
                            </div>
                            <span>{{scope.row.smsContext}}</span>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column
            prop="gmtCreated"
            label="创建时间"
            align="center">
            </el-table-column>
            <el-table-column label="操作"
                             width="200"
                             align="center">
                <template slot-scope="scope">
                    <span @click="backup1(scope.row)"
                          v-if="smsStatus=='0'"
                          class="blue">
                        撤回申请
                    </span>
                    <span @click="backup2(scope.row)"
                          v-if="smsStatus=='1' || smsStatus=='-1'"
                          class="blue">
                        删除
                    </span>
                    <span @click="edit(scope.row)"
                          v-if="smsStatus=='-1'"
                          class="blue">
                        编辑
                    </span>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination-line" v-show="activeName=='1'">
            <el-pagination background
                           @current-change="currentChange"
                           :current-page="params.pageNum"
                           :page-size="params.pageRow"
                           :total="totalCount"  
                           layout="total, prev, pager, next, jumper">
            </el-pagination>
        </div>
        <el-table
            v-show="activeName=='2'"
            stripe
            :data="tableData"
            header-row-class-name="operatorTableStyle"
            cell-class-name="operatorCellStyle"
            style="width:100%">
            <!-- <el-table-column
            prop="smsId"
            label="序号"
            align="center">
            </el-table-column> -->
            <el-table-column prop="smsPic" label="封面" align="center">
              <template slot-scope="scope">
                  <div class="line-height-0">
                      <img class="img" :src="scope.row.smsPic" alt="">
                  </div>
              </template>
          </el-table-column>
            <el-table-column
            prop="smsTitle"
            label="标题"
            align="center">
                <template slot-scope="scope">
                     <el-popover placement="bottom"
                         width="200"
                         trigger="hover">
                            <div slot="reference" class="title">
                                {{scope.row.smsTitle}}
                            </div>
                            <span>{{scope.row.smsTitle}}</span>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column
            prop="gmtCreated"
            label="创建时间"
            align="center">
            </el-table-column>
            <el-table-column label="操作"
                             width="200"
                             align="center">
                <template slot-scope="scope">
                    <span @click="preview(scope.row)"
                          class="blue">
                        预览
                    </span>
                    <span @click="backup1(scope.row)"
                          v-if="smsStatus=='0'"
                          class="blue">
                        撤回申请
                    </span>
                    <span @click="backup2(scope.row)"
                          v-if="smsStatus=='1' || smsStatus=='-1'"
                          class="blue">
                        删除
                    </span>
                    <span @click="edit(scope.row)"
                          v-if="smsStatus=='-1'"
                          class="blue">
                        编辑
                    </span>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination-line" v-show="activeName=='2'">
            <el-pagination background
                           @current-change="currentChange"
                           :current-page="params.pageNum"
                           :page-size="params.pageRow"
                           :total="totalCount"  
                           layout="total, prev, pager, next, jumper">
            </el-pagination>
        </div>
        </el-card>
        <!-- 新建 -->
        <el-dialog
            :visible.sync="createVisible"
            :show-close="false"
            custom-class="KupperdialogClass"
            width="32vw"
            center>
            <div class="kupperDialog">
                <div style="position:absolute;right:6%;top:4%;color:#D8D8D8;cursor:pointer">
                    <i class="el-icon-error bigfont" @click="createVisible=false"></i>
                </div>
                <div class="title bigfont font-bold" v-if="activeName=='0'">创建短信</div>
                <div class="title bigfont font-bold" v-else>创建push</div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">*标题</div>
                    <div class="W-50">
                    <el-input maxlength="10" v-if="activeName=='0'" placeholder="短信标题,不超过10个字符" v-model="createData.smsTitle"></el-input>
                    <el-input maxlength="10" v-else placeholder="push标题,不超过10个字符" v-model="createData.smsTitle"></el-input>
                    </div>
                </div>
                <div class="flex-center-S smallfont smallMt" v-if="activeName=='0'">
                    <div class="W-50 font-bold">*短信内容</div>
                    <div class="W-50">
                        <div class="infoBox minifont">
                            <el-input type="textarea"
                              :rows="5"
                              maxlength="150"
                              placeholder="请输入短信内容"
                              v-model="createData.smsContext"
                              @input="Bchange"></el-input>
                            <div class="tip">{{inputLength}}/150</div>
                        </div>
                    </div>
                </div>
                <div class="flex-center-S smallfont smallMt" v-else>
                    <div class="W-50 font-bold">*push内容</div>
                    <div class="W-50">
                        <div class="infoBox minifont">
                            <el-input type="textarea"
                              :rows="5"
                              maxlength="150"
                              placeholder="请输入push内容"
                              v-model="createData.smsContext"
                              @input="Bchange"></el-input>
                            <div class="tip">{{inputLength}}/150</div>
                        </div>
                    </div>
                </div>
                <div class="bottom flex-center-Y">
                    <div class="btn smallfont" @click="createVisible=false">取消</div>
                    <div class="btn1 smallfont" @click="agreeCreate">确认</div>
                </div>
            </div>
        </el-dialog>
        <!-- 编辑 -->
        <el-dialog
            :visible.sync="editVisible"
            :show-close="false"
            custom-class="KupperdialogClass"
            width="32vw"
            center>
            <div class="kupperDialog">
                <div style="position:absolute;right:6%;top:4%;color:#D8D8D8;cursor:pointer">
                    <i class="el-icon-error bigfont" @click="editVisible=false"></i>
                </div>
                <div class="title bigfont font-bold" v-if="activeName=='0'">编辑短信</div>
                <div class="title bigfont font-bold" v-else>编辑push</div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">*标题</div>
                    <div class="W-50">
                    <el-input maxlength="10" v-if="activeName=='0'" placeholder="请输入短信标题" v-model="selectData.smsTitle"></el-input>
                    <el-input maxlength="10" v-else placeholder="请输入push标题" v-model="selectData.smsTitle"></el-input>
                    </div>
                </div>
                <div class="flex-center-S smallfont smallMt" v-if="activeName=='0'">
                    <div class="W-50 font-bold">*短信内容</div>
                    <div class="W-50">
                        <div class="infoBox minifont">
                            <el-input type="textarea"
                              :rows="5"
                              maxlength="150"
                              placeholder="请输入短信内容"
                              v-model="selectData.smsContext"
                              @input="Bchange1"></el-input>
                            <div class="tip">{{inputLength1}}/150</div>
                        </div>
                    </div>
                </div>
                <div class="flex-center-S smallfont smallMt" v-else>
                    <div class="W-50 font-bold">*push内容</div>
                    <div class="W-50">
                        <div class="infoBox minifont">
                            <el-input type="textarea"
                              :rows="5"
                              maxlength="150"
                              placeholder="请输入push内容"
                              v-model="selectData.smsContext"
                              @input="Bchange1"></el-input>
                            <div class="tip">{{inputLength1}}/150</div>
                        </div>
                    </div>
                </div>
                <div class="bottom flex-center-Y">
                    <div class="btn smallfont" @click="editVisible=false">取消</div>
                    <div class="btn1 smallfont" @click="agreeEdit">确认</div>
                </div>
            </div>
        </el-dialog>
        <!-- 撤回确认信息 -->
        <el-dialog
            :visible.sync="msgVisible1"
            :close-on-click-modal="false"
            :show-close="false"
            custom-class="KupperdialogClass KupperdialogClass1"
            width="26vw"
            center>
            <div class="kupperDialog kupperDialog1">
                <div class="title bigfont" v-if="activeName=='0'">是否确认撤回该条短信模版申请？</div>
                <div class="title bigfont" v-else-if="activeName=='1'">是否确认撤回该条push模版申请？</div>
                <div class="title bigfont" v-else>是否确认撤回该条广告模版申请？</div>
                <div class="bottom flex-center-Y" style="margin-top:5vh">
                    <div class="btn smallfont" @click="msgVisible1=false">取消</div>
                    <div class="btn1 smallfont" @click="back">确定</div>
                </div>
            </div>
        </el-dialog>
        <!-- 确认信息 -->
        <!-- 删除确认信息 -->
        <el-dialog
            :visible.sync="msgVisible2"
            :close-on-click-modal="false"
            :show-close="false"
            custom-class="KupperdialogClass KupperdialogClass1"
            width="26vw"
            center>
            <div class="kupperDialog kupperDialog1">
                <div class="title bigfont" v-if="activeName=='0'">是否确认删除该条短信模版申请？</div>
                <div class="title bigfont" v-else-if="activeName=='1'">是否确认删除该条push模版申请？</div>
                <div class="title bigfont" v-else>是否确认删除该条广告模版申请？</div>
                <div class="bottom flex-center-Y" style="margin-top:5vh">
                    <div class="btn smallfont" @click="msgVisible2=false">取消</div>
                    <div class="btn1 smallfont" @click="back">确定</div>
                </div>
            </div>
        </el-dialog>
        <!-- 确认信息 -->
    </div>
    <!-- 创建广告 -->
    <div class="app-container" id="kupper" v-else>
        <el-card>
            <div class="flex">
            <div class="flex-1 item-flex" v-if="!ispreview">
                <el-form class="small-space"
                         label-position="left"
                         label-width="140px">
                    <el-form-item label="上新标题："
                                  required>
                        <el-input type="text"
                                placeholder="请输入标题,最多20个字符"
                                :maxlength="20"
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
                            <div v-if="adData.mainPic"
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
                </el-form>
            </div>
            <div class="flex-1">
                <el-form class="small-space"
                         label-position="left"
                         label-width="80px">
                    <el-form-item label="预览：">
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
                                    <div v-for="(obj,j) in item.checked"
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
                                                <div class="note">原价：¥ {{obj.salePrice}}</div>
                                                <div class="red"
                                                     v-if="obj.salePrice!=obj.discountPrice">尝鲜价：¥ {{obj.discountPrice}}</div>
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
                                                    <span class="price">尝鲜价：¥ {{obj.discountPrice}}</span>
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

        <div class="center" style='margin-bottom:4vh' v-if="!ispreview">
            <el-button 
                       @click="isCreateAd=false">取消</el-button>
            <el-button type="primary"
                       v-if="!isEditAd"
                       @click="showCreateAD">创建</el-button>
            <el-button type="primary"
                       v-else
                       @click="showCreateAD">修改</el-button>
        </div>
        <div class="center" style='margin-bottom:4vh' v-if="ispreview">
            <el-button 
                       @click="previewback">返回</el-button>
        </div>
        <el-dialog title="选择SKU及模版"
                    custom-class="KupperdialogClass KupperdialogClass2"
                   :visible.sync="chooseSkuDialogVisible"
                   width="88%">
            <div class="flex kupperDialog kupperDialog2">
                <div class="modals">
                    <el-radio-group v-model="skuData.modalType">
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
                              :data="skutableData"
                              stripe
                              style="width: 100%"
                              max-height="50vh"
                              v-loading.body="listLoading"
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
        <el-dialog
            :visible.sync="createGoodsDialogVisible"
            :close-on-click-modal="false"
            :show-close="false"
            custom-class="KupperdialogClass KupperdialogClass1"
            width="26vw"
            center>
            <div class="kupperDialog kupperDialog1">
                <div class="title bigfont" v-if="isEditAd">是否确认修改？</div>
                <div class="title bigfont" v-else>是否确认创建？</div>
                <div class="bottom flex-center-Y" style="margin-top:5vh">
                    <div class="btn smallfont" @click="createGoodsDialogVisible=false">取消</div>
                    <div class="btn1 smallfont" @click="createGoods">确定</div>
                </div>
            </div>
        </el-dialog>
        </el-card>
    </div>
    <!-- 创建广告 -->
</template>
<script>
import { mapGetters } from "vuex";
import {regionData ,CodeToText} from 'element-china-area-data';
export default {
    data(){
        return{
            createData:{smsTitle:'',smsContext:''},
            selectData:{smsTitle:'',smsContext:''},
            tableData: [],
            params: {
                pageNum:1,
                pageRow:5,
                smsStatus:"0"
                },
            totalCount: 0,
            activeName:"0",
            statusList:[{id:"0",name:"审核中",status:true,value:"0"},{id:"1",name:"已通过",value:"1"},{id:"2",name:"未通过",value:"-1"}],
            smsStatus:"0",//审核状态
            createVisible:false,
            editVisible:false,
            msgVisible1:false,
            msgVisible2:false,
            inputLength:0,
            inputLength1:0,
            addFlag:true,
            isCreateAd:false,
            //广告
            isSelf:true,
            adData: {},
            main: [{ lists: [{}, {}] }, { lists: [{}, {}, {}] }],
            time: "",
            listLoading: false,
            skutableData: [],
            createGoodsDialogVisible: false,
            chooseSkuDialogVisible: false,
            goodsData: {},
            skuData: {
                modalType: 4
            },
            file: {},
            dialogTitle: "",
            expands: [],
            reqLoading: false,
            phoneType: 0,
            checked: [],
            coverageUser: "",
            main: [
            ],
            isEditAd:false,//是否是编辑广告
            ispreview:false,//是否是预览模式
            //广告
        }
    },
    created(){
        this.getList()
        //广告
        this.adData.mainPic =
            "http://robooot.img-cn-hangzhou.aliyuncs.com/seedling-dir/promotion/promotioncf58f6c801974d21821bd1e942d8d71b_b032f207c3104156b7dfa40532590085";
        this.adData.mainPicPath =
            "http://robooot.img-cn-hangzhou.aliyuncs.com/seedling-dir/promotion/promotioncf58f6c801974d21821bd1e942d8d71b_b032f207c3104156b7dfa40532590085";
        this.getList1();
        // 广告
    },
    methods:{
        Bchange(){//监听输入框
            this.inputLength=this.createData.smsContext.length
        },
        Bchange1(){//监听输入框
            this.inputLength1=this.selectData.smsContext.length
        },
        showExPress(){
            if(this.activeName=='0'){
            this.$message({
                    type: "warning",
                    message: "您的短信模版数量过多，请删除部分无效短信~"
                });
                }else if(this.activeName=='1'){
                this.$message({
                    type: "warning",
                    message: "您的push模版数量过多，请删除部分无效push~"
                });
                }else{
                    this.$message({
                    type: "warning",
                    message: "您的广告模版数量过多，请删除部分无效广告~"
                });
                }
            },
        changeTab(){
            this.params.pageNum=1
            this.smsStatus='0'
            this.getList()
        },
        changeStatus(){//换审核状态
            this.params.pageNum=1
            this.getList()
        },
        getList() {
            this.params.smsStatus=this.smsStatus
            this.listLoading = true;
            if(this.activeName=='0'){
                this.params.smsWay='0'
                this.api({
                    url: "/sendSms/showSmsList",
                    method: "post",
                    data: this.params
                }).then(data => {
                    this.listLoading = false;
                    this.addFlag=data.addFlag
                    this.tableData=data.data.returnData.list
                    this.totalCount = data.data.returnData.totalCount;
                });
            }else if(this.activeName=='1'){
                this.params.smsWay='1'
                this.api({
                    url: "/sendSms/showSmsList",
                    method: "post",
                    data: this.params
                }).then(data => {
                    this.listLoading = false;
                    this.addFlag=data.addFlag
                    this.tableData=data.data.returnData.list
                    this.totalCount = data.data.returnData.totalCount;
                });
            }else{
                this.params.smsWay='3'
                this.api({
                    url: "/sendSms/showSmsList",
                    method: "post",
                    data: this.params
                }).then(data => {
                    this.listLoading = false;
                    this.addFlag=data.addFlag
                    this.tableData=data.data.returnData.list
                    this.totalCount = data.data.returnData.totalCount;
                });
            }  
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
        create(row){//创建通知
            if(this.activeName!='2'){
            this.createVisible=true
            }else{
                this.isEditAd=false
                this.isCreateAd=true
                
            }
        },
        edit(row){
                this.selectData=row
                console.log(this.selectData)
            if(this.activeName!='2'){
                this.editVisible=true
            }else{//编辑广告
                this.isEditAd=true
                this.isCreateAd=true
                this.getDetail()
            }
            
        },
        agreeCreate(){//确认创建
            if(!this.createData.smsTitle){
                    this.$message({
                            type: 'error',
                            message: this.activeName=='0'?'请输入短信标题!':'请输入push标题!'
                        });
                    return;
                }
            if(!this.createData.smsContext){
                this.$message({
                        type: 'error',
                        message: this.activeName=='0'?'请输入短信内容!':'请输入push内容!'
                    });
                return;
            }
            let smsWay
            if(this.activeName=='0'){
                smsWay='0'
            }else{
                smsWay='1'
            }
            this.api({
                    url: "/sendSms/addSmsContext",
                    method: "post",
                    data: {
                        smsWay:smsWay,
                        smsTitle:this.createData.smsTitle,
                        smsContext:this.createData.smsContext
                    }
                }).then(data => {
                    if(this.isEditAd){
                    this.$message({
                        type: 'success',
                        message: '编辑成功!'
                    });
                    }else{
                        this.$message({
                        type: 'success',
                        message: '创建成功!'
                    });
                    }
                    this.createData={smsTitle:'',smsContext:''}
                    this.createVisible=false
                    this.getList()
                });
        },
        agreeEdit(){//确认创建
            if(!this.selectData.smsTitle){
                    this.$message({
                            type: 'error',
                            message: this.activeName=='0'?'请输入短信标题!':'请输入push标题!'
                        });
                    return;
                }
            if(!this.selectData.smsContext){
                this.$message({
                        type: 'error',
                        message: this.activeName=='0'?'请输入短信内容!':'请输入push内容!'
                    });
                return;
            }
            let smsWay
            if(this.activeName=='0'){
                smsWay='0'
            }else{
                smsWay='1'
            }
            this.api({
                    url: "/sendSms/addSmsContext",
                    method: "post",
                    data: {
                        smsWay:smsWay,
                        smsTitle:this.selectData.smsTitle,
                        smsContext:this.selectData.smsContext,
                        smsId:this.selectData.smsId
                    }
                }).then(data => {
                    this.$message({
                        type: 'success',
                        message: '编辑成功!'
                    });
                    this.editVisible=false
                    this.getList()
                });
        },
        backup1(row){
            this.selectData=row
            this.msgVisible1=true
        },
        backup2(row){
            this.selectData=row
            this.msgVisible2=true
        },
        back(){
            this.api({
                    url: "/sendSms/deleteSmsContext",
                    method: "post",
                    data: {
                        smsId:this.selectData.smsId,
                        smsStatus:this.smsStatus
                    }
                }).then(data => {
                    this.$message({
                        type: 'success',
                        message: '操作成功!'
                    });
                    this.msgVisible1=false
                    this.msgVisible2=false
                    this.getList()
                });
        },
        //广告
        addSkuModal() {
            let skuLists = [];
            for (let i in this.checked) {
                if (!this.checked[i].dec) {
                    this.$message.error("请填写选择SKU的描述文案");
                    return;
                }
                let pic = this.checked[i].appPicture;
                if (this.skuData.modalType != 1) {
                    if (!this.checked[i].adPic) {
                        // this.$message.error('请上传选择SKU广告图片');
                        // return
                    } else {
                        pic = this.checked[i].adPic;
                    }
                }
                let item = {
                    skuCode: this.checked[i].skuCode,
                    secondBody: this.checked[i].dec,
                    mainPic: this.checked[i].appPicture,
                    adPic: this.checked[i].adPic
                };
                skuLists.push(item);
            }
            let main = {
                modalType: this.skuData.modalType,
                mainBody: "",
                skuLists: skuLists,
                checked: this.checked,
                tableData: this.skutableData,
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
            for (let i in this.checked) {
                if (!this.checked[i].dec) {
                    this.$message.error("请填写选择SKU的描述文案");
                    return;
                }
                let pic = this.checked[i].appPicture;
                if (this.skuData.modalType != 1) {
                    if (!this.checked[i].adPic) {
                        // this.$message.error('请上传图片');
                        // return
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
            main.tableData = this.skutableData;
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
                    this.adData=JSON.parse(JSON.stringify(this.adData))

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
                    for (let i in this.skutableData) {
                        if (this.skutableData[i].skuCode == skuCode) {
                            this.$set(
                                this.skutableData[i],
                                namePath,
                                data.filePath
                            );
                            this.$set(this.skutableData[i], name, data.tempPath);
                        }
                    }
                })
                .catch(e => {});
        },
        handleSelectionChange(val) {
            // if(val.length <= 12){
            this.checked = val;
            for (let j in this.skutableData) {
                this.$set(this.skutableData[j], "checked", false);
            }
            for (let i in val) {
                for (let j in this.skutableData) {
                    if (this.skutableData[j].skuCode == val[i].skuCode) {
                        this.$set(this.skutableData[j], "checked", true);
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
            let smsId
            if(this.isEditAd){
                smsId=this.selectData.smsId
            }else{
                smsId=''
            }
            if (!this.adData.title) {
                this.$message({
                    type: "warning",
                    message: "请填写上新标题"
                });
                return;
            }
            if (!this.adData.mainPic) {
                this.$message({
                    type: "warning",
                    message: "请上传广告封面"
                });
                return;
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
                for (let i in this.main) {
                    let item = {
                        mainBody: this.main[i].mainBody,
                        mainBatch: Number(i) + 1,
                        templet: this.main[i].modalType,
                        secondText: []
                    };
                    for (let j in this.main[i].skuLists) {
                        let it = this.main[i].skuLists[j];
                        let obj = {
                            appPic: it.mainPic,
                            secondBody: it.secondBody,
                            secondBatch: Number(j) + 1,
                            skuCode: it.skuCode
                        };
                        // if (this.main[i].modalType != 1) {
                        //     obj.appPic = it.adPic;
                        // }
                        item.secondText.push(obj);
                    }
                    main.push(item);
                }
                var datas = {
                    smsId:smsId,
                    smsWay:'3',
                    smsPic: this.adData.mainPic,
                    username: this.userName,
                    smsTitle: this.adData.title,
                    mainText: main,
                    textJson: JSON.stringify(main),
                    
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
                    smsId:smsId,
                    smsWay:'4',
                    smsPic: this.adData.mainPic,
                    username: this.userName,
                    smsTitle: this.adData.title,
                    smsPicBig:this.adData.longPic
                    // mainText: main,
                    // textJson: JSON.stringify(main)
                }
            }

            this.api({
                url: "/sendSms/addSmsContext",
                method: "post",
                data: datas
            }).then(data => {
                this.$message({
                    type: "success",
                    message: this.isEditAd?"修改成功!":'创建成功!'
                });
                //清空设置
                this.adData.title = "";
                this.adData.mainPicPath = "";
                this.adData.longPicPath = "";
                this.adData.mainPic =
                "http://robooot.img-cn-hangzhou.aliyuncs.com/seedling-dir/promotion/promotioncf58f6c801974d21821bd1e942d8d71b_b032f207c3104156b7dfa40532590085";
                this.adData.mainPicPath =
                "http://robooot.img-cn-hangzhou.aliyuncs.com/seedling-dir/promotion/promotioncf58f6c801974d21821bd1e942d8d71b_b032f207c3104156b7dfa40532590085";
                this.main = "";
                this.isSelf = true;
                //清空设置
                this.getList()
                this.isCreateAd=false
                this.createGoodsDialogVisible=false
            });
        },
        showSKUModal(item) {
            this.chooseSkuDialogVisible = true;
            this.listLoading = true;
            let data = this.params;
            data.storeCode = this.$route.params.storeCode;
            data.operatorId = this.$route.params.operatorId;
            this.api({
                url: "/promotion/showAllSkuForOperator",
                method: "post",
                data: data
            }).then(data => {
                this.listLoading = false;
                for (let i in data.list) {
                    data.list[i].index = Number(i) + 1;
                    data.list[i].adPicPath = data.list[i].appPicture;
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

                    this.$set(this, "skutableData", data.list);
                    this.$set(this, "checked", item.checked);
                    console.log("item.checked", item.checked);
                    // console.log('item.checked',item.checked)
                    let this_ = this;
                    indexList.forEach(row => {
                        this_.$nextTick(function() {
                            this_.$refs.multipleTable.toggleRowSelection(
                                this_.skutableData[Number(row)],
                                true
                            );
                        });
                    });
                } else {
                    console.log("add");

                    this.skutableData = data.list;
                    this.skuData = {
                        modalType: 4
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

            this.getList1(this.params);
        },
        getList1(params) {
            this.listLoading = true;
            let data = params || this.params;
            data.storeCode = this.$route.params.storeCode;
            data.operatorId = this.$route.params.operatorId;
            this.api({
                url: "/promotion/showAllSkuForOperator",
                method: "post",
                data: data
            }).then(data => {
                this.listLoading = false;
                for (let i in data.list) {
                    data.list[i].index = Number(i) + 1;
                    data.list[i].adPicPath = data.list[i].appPicture;
                }
                this.coverageUser = data.coverageUser;
                this.skutableData = data.list;
                // this.totalCount = data.totalCount
                // this.expands = []
            });
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
                    this.getList1(this.params);
                });
            });
        },
        preview(row){//点击预览
            this.selectData=row
            this.isCreateAd=true
            this.ispreview=true
            this.getDetail()
        },
        getDetail(){//获取编辑的回显数据
            this.api({
                url: "/sendSms/showSmsInfo",
                method: "post",
                data: {
                    smsId: this.selectData.smsId
                }
            })
                .then(data => {
                    this.adData.title = data.smsTitle;
                    this.adData.mainPicPath = data.smsPic;
                    this.adData.longPicPath = data.smsPicBig;
                    if(data.smsWay=='3'){
                    this.isSelf = true;
                    }else{
                        this.isSelf = false;
                    }

                    let main = data.mainText || [];
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
        previewback(){//预览模式返回
            //清空设置
            this.adData.title = "";
            this.adData.mainPicPath = "";
            this.adData.longPicPath = "";
            this.adData.mainPic =
                "http://robooot.img-cn-hangzhou.aliyuncs.com/seedling-dir/promotion/promotioncf58f6c801974d21821bd1e942d8d71b_b032f207c3104156b7dfa40532590085";
            this.adData.mainPicPath =
                "http://robooot.img-cn-hangzhou.aliyuncs.com/seedling-dir/promotion/promotioncf58f6c801974d21821bd1e942d8d71b_b032f207c3104156b7dfa40532590085";
            this.main = "";
            this.isSelf = true;
            //清空设置
            this.ispreview=false
            this.isCreateAd=false
        }
        //广告
    },
    computed: {
        ...mapGetters(["userName","userId"])
    }
}
</script>



   