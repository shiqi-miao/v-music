<style lang="scss" scoped>
.blue {
    color: #286EFF;
    cursor: pointer;
}
.app-container {
    padding: 4.6vh 2.6vw;
    padding-bottom: 3vh;
    color: #333!important
}
.el-card{height: 85vh;padding:2vw 2vw;border-radius:5px;border-radius:20px;overflow: auto}
.phoneWidth{width: 20vw;margin-right: 2vw}
.searchBox>div{width: 17%}
.selectWidth{width: 8vw}
.selectWidth1{width: 9.5vw}
.mb-2{margin-bottom: 2vh}
.lgfont{font-size: 1.15vw}
.normalfont{font-size: 1.05vw}
.bigfont{font-size: 0.94vw;}
.smallfont{font-size: 0.83vw;}
.minifont{font-size: 0.73vw;}
.miniminifont{font-size: 0.63vw;}
.toolbar{position: absolute;width: 95%;bottom: 4vh;}
.bold{font-weight: bold}
.W-50{width: 50%}
.W-100{width: 100%}
.W-40{width: 40%}
.W-60{width: 60%}
.p-2{padding-top: 2vh}
.p-8p{padding-top: 8px}
.text-right{text-align: right}
.mb-2{margin-bottom: 2vh}
.mb-4{margin-bottom: 4vh}
.line-height-0{line-height: 0}
.img{width: 4vh;height: 4vh;border-radius: 50%}
.push1{width: 100%;height: 30vh;overflow: auto}
.push1>div{line-height:2.5vw;}
.userManagedialogClass{border-radius: 10px;width: 37vw!important;max-height: 90vh!important}
.userManagedDialog{width: 37vw!important;height: 82vh!important;padding: 3.7vh 3vw;color: #333;position: relative}
.userManagedDialog1{width: 26vw!important;height: 28vh!important;}
.userManagedDialog3{width: 20vw!important;height: 40vh!important;padding: 1.56vw;color: #333;}
.userManagedDialog4{width: 28vw!important;height: 82vh!important;padding: 1.56vw;color: #333;}
.userManagedDialog3 .word{line-height: 1.5;margin-top: 1.5vh}
.userManagedDialog3 .title{text-align: center}
.userManagedialogClass1{width: 26vw!important}

.userManagedDialog .title{margin-bottom: 3.7vh;}
.userManagedDialog .bottom{width: 100%;height: 5.5vh;justify-content: space-around;position: absolute;left: 0;bottom: 5vh}
.userManagedDialog .bottom .btn{cursor: pointer;width: 26%;height:100%;color: #286EFF;border: 1px solid #286EFF;text-align: center;line-height: 5.5vh}
.userManagedDialog .bottom .btn1{cursor: pointer;width: 26%;height:100%;color: #fff;background:#286EFF;text-align: center;line-height: 5.5vh}
.inputWidth2 .el-input{width: 100%!important}
.el-button--primary{background-color: rgba(40, 110, 255, 1)}
.el-select-dropdown__item{font-size: 0.94vw!important;padding-right: 0}
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
#userManage .userManageDialogClass2.el-dialog{width: 20vw!important;margin-left: 75vw;height: 40vh;border-radius: 0!important;margin-top: 25vh!important}
#userManage .userManageDialogClass3.el-dialog{width: 28vw!important;margin-left: 70vw;height: 82vh;border-radius: 0!important;margin-top: 10vh!important;overflow-y: auto}
#userManage .el-cascader,.userManagecascader .el-cascader-menu__item{font-size: 0.94vw!important;font-weight: 400}
#userManage .el-tabs{width: 15.8vw}
#userManage .el-button{padding: 1.25vh 3.3vh;font-size: 0.9375vw}
.el-card__body{height:100%;padding: 0;}
#userManage .el-pagination.is-background .el-pager li:not(.disabled).active{background-color: rgba(40, 110, 255, 1)}
#userManage .el-checkbox{margin-right: 0!important}
#userManage .el-tabs__item{font-size: 1.05vw;height: 5.5vh;line-height: 5.5vh;width: 7.8vw;text-align: center}
#userManage .el-tabs__header{margin-bottom: 0}
#userManage .el-input__inner,#userManage .el-input__icon{height: 4.63vh;line-height: 4.63vh}
#userManage .el-input{font-size: 0.94vw}
#userManage .el-dialog{border-radius: 10px;margin-top: 10vh!important}
#userManage .el-dialog__header,#userManage .el-dialog__body,#userManage .el-dialog__footer{padding:0}
.userManagedDialog .el-textarea__inner{height: 15vh;resize: none;}
.userManagedDialog .el-radio__label{font-size: 0.94vw;color: rgba(51, 51, 51, 1)}
.userManagedDialog .el-radio__input.is-checked+.el-radio__label{color: #333}
.userManagedDialog .el-radio__input.is-checked .el-radio__inner{border-color: #286EFF;background: #286EFF;}
.userManagedDialog .el-radio__inner::after{width: 8px;height: 8px}
.userManagedDialog .square .el-radio__input.is-checked .el-radio__inner,.userManagedDialog .square .el-radio__input.is-checked .el-radio__inner::after,.userManagedDialog .square .el-radio__inner{border-radius: 2%}
.userManagedDialog .el-input,.userManagedDialog .el-textarea{font-size: 0.83vw!important;}
.userManagedDialog .textarea{height: 15vh;border: 1px solid #DCDFE6;color: #333;padding: 5%;line-height: 1.3vw}
.userManagedDialog.card .el-input__inner{padding: 0;text-align: center}
.userManagedDialog2 .el-input__inner{border: 0}
.operatorTableStyle{font-size: 0.94vw;color: #333}
.operatorTableStyle th>.cell{font-weight: 600}
.operatorCellStyle{font-size: 0.83vw;color: #333;height: 7.5vh;padding: 0!important}
/* 全选全部时,分页全选的选择框样式问题 */
.allcheckStyle .el-table__header .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
    background-color: #f2f6fc;
    border-color: #dcdfe6;
    cursor: not-allowed;
}
.allcheckStyle .el-table__header .el-checkbox__inner:after{border-color:#c0c4cc;}
.allcheckStyle .el-table__header .el-checkbox__input.is-focus .el-checkbox__inner{border-color: #dcdfe6;}
.notallStyle .el-table__header .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
    background-color: #409EFF;
    border-color: #409EFF;
    cursor: pointer;
}
.notallStyle .el-table__header .el-checkbox__inner:after{border-color:#fff;}
.notallStyle .el-table__header .el-checkbox__input.is-focus .el-checkbox__inner{border-color: #409EFF;}
/* 全选全部时,分页全选的选择框样式问题 */
</style>
<template>
<div class="app-container" id="userManage">
        <el-card style="position:relative" :class="allCheck?'allcheckStyle':'notallStyle'">
        <div class="flex-center-E justify-between mb-2">
          <el-tabs v-model="activeName" type="card" @tab-click="changeTab">
              <el-tab-pane label="用户列表" name="0">
              </el-tab-pane>
              <el-tab-pane label="用户编组" name="1">
              </el-tab-pane>
          </el-tabs>
          <div class="flex-center-E justify-between" v-if="activeName=='0'">
            <div class="phoneWidth">
              <el-input
                placeholder="请输入要查找的用户手机号"
                onKeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))"
                v-model="phone" @keyup.enter.native="searchPhone">
                <i slot="suffix" class="el-input__icon el-icon-search pointer" @click="searchPhone"></i>
              </el-input>
            </div>
            <div class="selectWidth">
              <el-select v-model="functionType" placeholder="批量操作" :disabled="(multipleSelectionAll.length>0 || allCheck) ? false : true">
              <el-option
                v-for="item in functionOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
               >
               <span @click="selectFunction" :style="(!couponFlag && item.value=='2')?'color:#DCDFE6;width:110%;display: inline-block;':'width:110%;display: inline-block;'">{{ item.label }}</span>
              </el-option>
            </el-select>
            </div>
          </div>
          <div class="flex-center-E justify-between" v-if="activeName=='1'">
            <el-button icon="el-icon-circle-plus-outline" class="bigfont" style="margin-right:2vw" v-if="listsB.length>=8 && multipleMar.length==0" @click="showExPress">新建编组</el-button>
            <el-button icon="el-icon-circle-plus-outline" class="bigfont" style="margin-right:2vw" v-if="multipleMar.length>0" @click="showExPress">新建编组</el-button>
            <el-button type="primary" icon="el-icon-circle-plus-outline" class="bigfont" style="margin-right:2vw"  v-if="listsB.length<8 && functionType!='5' && multipleMar.length==0" @click="createGroup">新建编组</el-button>
            <div class="selectWidth">
              <el-select v-model="functionType" placeholder="批量操作" :disabled="multipleMar.length>0 ? false : true">
                <el-option
                  v-for="item in functionOptions1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  <span @click="selectFunctionB" style="width:110%;display: inline-block;">{{ item.label }}</span>
                </el-option>
              </el-select>
            </div>
          </div>
        </div>
        <div class="flex-center-Y justify-between searchBox mb-2" v-if="activeName=='0'">
          <div class="flex-center-Y justify-between bigfont bold">
            性别:
            <div class="selectWidth1">
              <el-select v-model="searchData.sex" placeholder="请选择" clearable>
                <el-option
                  v-for="item in sexOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="flex-center-Y justify-between bigfont bold">
            城市:
            <div class="selectWidth1">
              <el-cascader :options="cityOptions"
                popper-class="userManagecascader"
                clearable
                v-model="searchData.cascader"
                @change="handleAreaChange">
              </el-cascader>
            </div>
          </div>
          <div class="flex-center-Y justify-between bigfont bold">
            门店:
            <div class="selectWidth1">
              <el-select v-model="searchData.store" placeholder="请选择" clearable>
                <el-option
                  v-for="item in storeOptions"
                  :key="item.storeCode"
                  :label="item.storeName"
                  :value="item.storeCode">
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="flex-center-Y justify-between bigfont bold">
            编组:
            <div class="selectWidth1">
              <el-select v-model="searchData.marId" placeholder="请选择" clearable>
                <el-option
                  v-for="item in groupOptions"
                  :key="item.marId"
                  :label="item.marName"
                  :value="item.marId">
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="flex-center-Y justify-between">
            <el-button type="primary" icon="el-icon-search" class="bigfont" @click="search"> 搜索</el-button>
          </div>
        </div>
        <div class="flex-center-Y justify-between searchBox mb-2" v-if="activeName=='0'">
          <div class="flex-center-Y justify-between bigfont bold">
            活跃度:
            <div class="selectWidth1">
              <el-select v-model="searchData.active" placeholder="请选择" clearable>
                <el-option
                  v-for="item in activeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="flex-center-Y justify-between miniminifont" style="width:82%;color:#666666">
            <div >
              <i class="el-icon-warning"></i>
              低活跃用户建议推送促活通知+送大额优惠券；中活跃用户建议推送上新广告+送小额优惠券；高活跃用户建议推送上新广告
            </div>
          </div>
        </div>
        <el-table
          :data="lists"
          ref="table" 
          highlight-current-row 
          v-loading="listLoading" 
          style="width: 100%;" 
          v-show="activeName=='0'" 
          stripe 
          header-row-class-name="operatorTableStyle" 
          cell-class-name="operatorCellStyle"
          :row-key="getRowKeys" 
          type="selection" 
          @selection-change="handleSelectionChange">
          <el-table-column type="selection" :reserve-selection="true" :selectable="checkSelectable" align="center"></el-table-column>
          <el-table-column prop="portrait" label="头像" align="center">
              <template slot-scope="scope">
                  <div class="line-height-0">
                      <img class="img" :src="scope.row.portrait" alt="">
                  </div>
              </template>
          </el-table-column>
          <el-table-column prop="nickname" label="昵称" align="center">
              <template slot-scope="scope">
                <span class="limit">{{scope.row.nickname}}</span>
              </template>
          </el-table-column>
          <el-table-column prop="sex" label="性别" align="center">
              <template slot-scope="scope">
                <span>{{scope.row.sex=='1' ? '男' : '女'}}</span>
              </template>
          </el-table-column>
          <el-table-column prop="userPhone" label="手机号" align="center"> </el-table-column>
          <el-table-column prop="city" label="城市" align="center"> </el-table-column>
          <el-table-column prop="lastStoreName" label="上次消费门店" align="center" width="130"></el-table-column>
          <el-table-column prop="lastPayTime" label="上次消费时间" align="center" width="130">
            <template slot-scope="scope">
              <div>{{scope.row.lastPayTime1}}</div>
              <div>{{scope.row.lastPayTime2}}</div>
            </template>
          </el-table-column>
          <el-table-column prop="active" label="活跃度" align="center"> </el-table-column>
          <el-table-column label="操作" align="center" width="180">
              <template slot-scope="scope">
                    <span
                          class="blue"
                          @click="join(scope.row)">
                        加入编组
                    </span>
                    <span
                          class="blue"
                          @click="toDetail(scope.row)">
                        详情
                    </span>
              </template>
          </el-table-column>
        </el-table>
        <el-table
          :data="listsB"
          ref="tableB" 
          highlight-current-row 
          v-loading="listLoading" 
          style="width: 100%;" 
          v-show="activeName=='1'" 
          stripe 
          header-row-class-name="operatorTableStyle" 
          cell-class-name="operatorCellStyle"
          row-key="marId" 
          type="selection" 
          @selection-change="handleSelectionChangeB">
          <el-table-column type="selection" :reserve-selection="true" align="center"></el-table-column>
          <el-table-column prop="marName" label="编组名称" align="center">
              <template slot-scope="scope">
                <span class="limit">{{scope.row.marName}}</span>
              </template>
          </el-table-column>
          <el-table-column prop="userNum" label="人数" align="center"> </el-table-column>
          <el-table-column prop="marRemark" label="备注" align="center">
              <template slot-scope="scope">
                <span class="limit">{{scope.row.marRemark || '无'}}</span>
              </template>
          </el-table-column>
          <el-table-column prop="gmtCreated" label="创建时间" align="center"> </el-table-column>
          <el-table-column label="操作" align="center">
              <template slot-scope="scope">
                    <span
                          class="blue"
                          @click="delGroup(scope.row)">
                        解散该组
                    </span>
                    <span
                          class="blue"
                          @click="toGroup(scope.row)">
                        详情
                    </span>
              </template>
          </el-table-column>
        </el-table>
        <el-col :span="24" class="toolbar" v-if="activeName=='0'">
          &ensp;&nbsp;
          <el-col :span="3">
            <el-checkbox v-model="allCheck" @change="allCheckEvent" v-if="total>0">全选全部</el-checkbox>&emsp;
            <!-- <el-button @click="up" type="primary">提交数据</el-button> -->
          </el-col>
          <el-col :span="18" style="position:relative">
            <el-pagination background :current-page="this.page" layout="prev, pager, next"
              @current-change="handleCurrentChange" :page-size="6" :total="total" style="position:absolute;left:50%;transform:translateX(-50%)">
            </el-pagination>
          </el-col>
        </el-col>
        <div class="clearfix"></div>
        <!-- <div class="pagination-line">
            <el-pagination background
                           @size-change="handleSizeChange"
                           @current-change="currentChange"
                           :current-page="params.pageNum"
                           :page-size="params.pageRow"
                           :total="totalCount"  
                           layout="total, prev, pager, next, jumper">
            </el-pagination>
        </div> -->
        </el-card>
        <!-- 创建用户编组 -->
        <el-dialog
            :visible.sync="groupVisible"
            :show-close="false"
            custom-class="userManageDialogClass"
            width="37vw"
            center>
            <div class="userManagedDialog">
                <div class="title lgfont bold">用户编组</div>
                <div class="flex-center-Y bigfont justify-between bold mb-2">
                    <div class="W-50 flex-center-Y"> *新建编组</div>
                    <div class="W-50"><el-input placeholder="请输入编组名称，不超过10个字" maxlength="10" v-model="addGroup.marName"></el-input></div>
                </div>
                <div class="flex-center-S bigfont justify-between bold mb-2">
                    <div class="W-50 flex-center-Y p-8p"> 编组描述</div>
                    <div class="W-50"><el-input type="textarea" placeholder="请输入编组描述，不超过26个字" maxlength="26" :size="4" v-model="addGroup.marRemark"></el-input></div>
                </div>
                <div class="bottom flex-center-Y" style="margin-top:5vh">
                    <div class="btn normalfont" @click="groupVisible=false">取消</div>
                    <div v-if="iscomplete" class="btn1 normalfont" @click="saveGroup">确定</div>
                    <div v-else class="btn1 normalfont"><i class="el-icon-loading"></i></div>
                </div>
            </div>
        </el-dialog>
        <!-- 创建用户编组 -->
        <!-- 创建并加入用户编组 -->
        <el-dialog
            :visible.sync="groupVisibleB"
            :show-close="false"
            custom-class="userManageDialogClass"
            width="37vw"
            center>
            <div class="userManagedDialog">
                <div class="title lgfont bold">用户编组</div>
                <div class="flex-center-Y bigfont justify-between bold mb-2">
                    <div class="W-50 flex-center-Y"> *新建编组</div>
                    <div class="W-50"><el-input placeholder="请输入编组名称，不超过10个字" maxlength="10" v-model="addGroup.marName"></el-input></div>
                </div>
                <div class="flex-center-S bigfont justify-between bold mb-2">
                    <div class="W-50 flex-center-Y p-8p"> 编组描述</div>
                    <div class="W-50"><el-input type="textarea" placeholder="请输入编组描述，不超过26个字" maxlength="26" :size="4" v-model="addGroup.marRemark"></el-input></div>
                </div>
                <div class="bottom flex-center-Y" style="margin-top:5vh">
                    <div class="btn normalfont" @click="groupVisibleB=false">取消</div>
                    <div v-if="iscomplete" class="btn1 normalfont" @click="msgVisible1=true">确定</div>
                    <div v-else class="btn1 normalfont"><i class="el-icon-loading"></i></div>
                </div>
            </div>
        </el-dialog>
        <!-- 创建用户编组 -->
        <!-- 加入用户编组 -->
        <el-dialog
            :visible.sync="joinGroupVisible"
            :show-close="false"
            custom-class="userManageDialogClass"
            width="37vw"
            center>
            <div class="userManagedDialog">
                <div class="title lgfont bold">用户编组</div>
                <div class="flex-center-S bigfont justify-between mb-2">
                    <div class="W-50 flex-center-Y  bold" style="line-height:4.63vh"> *选择编组</div>
                    <div class="W-50">
                      <el-select v-model="selectGroupData.marId" placeholder="请选择" clearable class="W-100" @change="selectGroup">
                        <el-option
                          v-for="item in groupOptions"
                          :key="item.marId"
                          :label="item.marName"
                          :value="item.marId"
                          >
                        </el-option>
                      </el-select>
                      <div class="minifont blue text-right" style="margin-top:1vh" @click="groupVisibleB=true">没有编组？立即创建</div>
                    </div>
                </div>
                <div class="flex-center-S bigfont justify-between mb-2">
                    <div class="W-50 flex-center-Y bold p-8p"> 编组描述</div>
                    <div class="W-50"><div class="textarea minifont">{{selectGroupData.marRemark}}</div></div>
                </div>
                <div class="bottom flex-center-Y" style="margin-top:5vh">
                    <div class="btn normalfont" @click="joinGroupVisible=false">取消</div>
                    <div class="btn1 normalfont" @click="msgVisible=true">确定</div>
                </div>
            </div>
        </el-dialog>
        <!-- 加入用户编组 -->
        <!-- 发放卡券 -->
        <el-dialog
            :visible.sync="couponVisible"
            :show-close="false"
            custom-class="userManageDialogClass"
            width="37vw"
            center>
            <div class="userManagedDialog userManagedDialog2 card">
                <div class="title lgfont bold">发放卡券</div>
                <div class="flex-center-Y bigfont justify-between mb-4">
                    <div class="W-50 flex-center-Y bold"> 发放标签</div>
                    <div class="W-50 text-right">{{filtData || '无'}}</div>
                </div>
                <div class="flex-center-Y bigfont justify-between mb-4">
                    <div class="W-50 flex-center-Y bold"> 发放用户数</div>
                    <div class="W-50 text-right">{{allCheck ? total:multipleSelectionAll.split(',').length}}人</div>
                </div>
                <div class="flex-center-S bigfont justify-between mb-4 inputWidth2">
                    <div class="W-40 bold" style="line-height:4.63vh">*发放卡券<div class="minifont" style="color:#FF0000;font-weight:400;line-height:1">同一类型券最多发5张</div></div>
                    <div class="W-60" style="max-height:25vh;overflow-y:auto;">
                        <div class="flex-center-Y" style="justify-content:flex-start" v-for="(item,i) in couponTicket" :key="i">
                            <div style="width:25vw">
                              <el-select v-model="item.ruleId" filterable placeholder="选择卡券">
                                  <el-option
                                  v-for="item in couponList"
                                  :key="item.ruleId"
                                  :label="item.name"
                                  :value="item.ruleId">
                                  </el-option>
                              </el-select>
                            </div>
                             <el-input v-model="item.ticketNum" type="number" max="5" min="1"  placeholder="发放数量"></el-input>张&nbsp;
                             <i class="el-icon-remove-outline blue" v-if="couponTicket.length>1" @click="remove(i)"></i>
                             <i class="el-icon-circle-plus-outline blue" @click="add" v-if="i==couponTicket.length-1 && couponTicket.length<5"></i>
                        </div>
                    </div>
                </div>
                <div class="bottom flex-center-Y" style="margin-top:5vh">
                    <div class="btn normalfont" @click="couponVisible=false">取消</div>
                    <div class="btn1 normalfont" @click="addCoupon">发放</div>
                </div>
            </div>
        </el-dialog>
        <!-- 发放卡券 -->
        <!-- 发放积分 -->
        <el-dialog
            :visible.sync="integralVisible"
            :show-close="false"
            custom-class="userManageDialogClass"
            width="37vw"
            center>
            <div class="userManagedDialog">
                <div class="title lgfont bold">发放卡券</div>
                <div class="flex-center-Y bigfont justify-between mb-2">
                    <div class="W-50 flex-center-Y bold"> 发放标签</div>
                    <div class="W-50 text-right">{{filtData || '无'}}</div>
                </div>
                <div class="flex-center-Y bigfont justify-between mb-2">
                    <div class="W-50 flex-center-Y bold"> 发放用户数</div>
                    <div class="W-50 text-right">{{allCheck ? total:multipleSelectionAll.split(',').length}}人</div>
                </div>
                <div class="flex-center-Y bigfont justify-between mb-2">
                    <div class="W-50 bold">*发放积分数</div>
                    <div class="W-50">
                          <el-input type="number" placeholder="请输入积分数量，最大不超过1000"></el-input>
                    </div>
                </div>
                <div class="bottom flex-center-Y" style="margin-top:5vh">
                    <div class="btn normalfont" @click="integralVisible=false">取消</div>
                    <div class="btn1 normalfont" @click="addCoupon">发放</div>
                </div>
            </div>
        </el-dialog>
        <!-- 发放积分 -->
        <!-- 发放通知 -->
        <el-dialog
            :visible.sync="pushVisible"
            :show-close="false"
            custom-class="userManageDialogClass"
            width="37vw"
            center>
            <div class="userManagedDialog">
                <div class="title lgfont bold">消息通知</div>
                <div class="flex-center-Y bigfont justify-between mb-4">
                    <div class="W-50 flex-center-Y bold"> 发放标签</div>
                    <div class="W-50 text-right">{{filtData || '无'}}</div>
                </div>
                <div class="flex-center-Y bigfont justify-between mb-4">
                    <div class="W-50 flex-center-Y bold"> 发放用户数</div>
                    <div class="W-50 text-right">{{allCheck ? total:multipleSelectionAll.split(',').length}}人</div>
                </div>
                <div class="flex-center-Y bigfont mb-2">
                    <el-radio v-model="pushType" label="1" @change="changePushType" style="margin-right:4vw">短信</el-radio>
                    <!-- <el-radio v-model="pushType" label="2" @change="changePushType">push</el-radio> -->
                    <el-radio v-model="pushType" label="3" @change="changePushType">广告</el-radio>
                </div>
                <div class="push1  square">
                    <div v-for="(item,i) in msgList" :key="i"><el-radio v-model="selectMsg" :label="item.smsId">{{item.smsTitle}}&nbsp;&nbsp;<span class="blue" @click="preview(item)">预览</span></el-radio></div>
                </div>
                <div class="bottom flex-center-Y" style="margin-top:5vh">
                    <div class="btn normalfont" @click="pushVisible=false">取消</div>
                    <div class="btn1 normalfont" @click="msgVisible6=true">申请</div>
                </div>
            </div>
        </el-dialog>
        <!-- 短信push预览 -->
        <el-dialog
            :visible.sync="previewVisible"
            :show-close="false"
            custom-class="userManageDialogClass userManageDialogClass2"
            width="20vw"
            center>
            <div class="userManagedDialog3">
                <div class="title lgfont bold">消息通知</div>
                <div class="word bigfont">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{preData.smsContext}}
                </div>
            </div>
        </el-dialog>
        <!-- 预览 -->
        <!-- 广告预览 -->
        <el-dialog
            :visible.sync="adpreviewVisible"
            :show-close="false"
            custom-class="userManageDialogClass userManageDialogClass3"
            width="20vw"
            center>
            <div class="userManagedDialog3 userManagedDialog4">
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
        </el-dialog>
        <!-- 预览 -->
        <!-- 确认信息 -->
        <el-dialog
            :visible.sync="msgVisible"
            :show-close="false"
            custom-class="userManageDialogClass userManageDialogClass1"
            width="26vw"
            center>
            <div class="userManagedDialog userManagedDialog1">
                <div class="title bigfont">是否确认将{{multipleNum}}位用户编入{{selectGroupData.marName}}？</div>
                <div class="bottom flex-center-Y" style="margin-top:5vh">
                    <div class="btn normalfont" @click="msgVisible=false">取消</div>
                    <div class="btn1 normalfont" @click="joinGroup">确定</div>
                </div>
            </div>
        </el-dialog>
        <!-- 确认信息 -->
        <!-- 确认信息 -->
        <el-dialog
            :visible.sync="msgVisible1"
            :show-close="false"
            custom-class="userManageDialogClass userManageDialogClass1"
            width="26vw"
            center>
            <div class="userManagedDialog userManagedDialog1">
                <div class="title bigfont">是否确认将{{multipleNum}}位用户编入{{addGroup.marName}}？</div>
                <div class="bottom flex-center-Y" style="margin-top:5vh">
                    <div class="btn normalfont" @click="msgVisible1=false">取消</div>
                    <div class="btn1 normalfont" @click="saveGroupB">确定</div>
                </div>
            </div>
        </el-dialog>
        <!-- 确认信息 -->
        <!-- 确认信息2 -->
        <el-dialog
            :visible.sync="msgVisible2"
            :show-close="false"
            custom-class="userManageDialogClass userManageDialogClass1"
            width="26vw"
            center>
            <div class="userManagedDialog userManagedDialog1">
                <div class="title bigfont">您还未开通卡券功能服务，是否立即申请？</div>
                <div class="bottom flex-center-Y" style="margin-top:5vh">
                    <div class="btn bigfont" @click="msgVisible2=false">取消</div>
                    <div class="btn1 bigfont" @click="toCoupon">确定</div>
                </div>
            </div>
        </el-dialog>
        <!-- 确认信息 -->
        <!-- 确认信息3 -->
        <el-dialog
            :visible.sync="msgVisible3"
            :show-close="false"
            custom-class="userManageDialogClass userManageDialogClass1"
            width="26vw"
            center>
            <div class="userManagedDialog userManagedDialog1">
                <div class="title bigfont">是否确认给{{multipleNum}}位用户发放{{couponTicket.length}}种共{{couponNum*multipleNum}}张优惠券？</div>
                <div class="bottom flex-center-Y" style="margin-top:5vh">
                    <div class="btn normalfont" @click="msgVisible3=false">取消</div>
                    <div class="btn1 normalfont" @click="send">确定</div>
                </div>
            </div>
        </el-dialog>
        <!-- 确认信息 -->
        <!-- 确认信息4 -->
        <el-dialog
            :visible.sync="msgVisible4"
            :show-close="false"
            custom-class="userManageDialogClass userManageDialogClass1"
            width="26vw"
            center>
            <div class="userManagedDialog userManagedDialog1">
                <div class="title bigfont">是否确认给3位用户每位发放100积分？</div>
                <div class="bottom flex-center-Y" style="margin-top:5vh">
                    <div class="btn normalfont" @click="msgVisible4=false">取消</div>
                    <div class="btn1 normalfont">确定</div>
                </div>
            </div>
        </el-dialog>
        <!-- 确认信息 -->
        <!-- 确认信息5 -->
        <el-dialog
            :visible.sync="msgVisible5"
            :show-close="false"
            custom-class="userManageDialogClass userManageDialogClass1"
            width="26vw"
            center>
            <div class="userManagedDialog userManagedDialog1">
                <div class="title bigfont">是否确认解散该用户编组？（该编组下有{{groupData.userNum}}位用户）</div>
                <div class="bottom flex-center-Y" style="margin-top:5vh">
                    <div class="btn bigfont" @click="msgVisible5=false">取消</div>
                    <div class="btn1 bigfont" @click="deleteGroup">确定</div>
                </div>
            </div>
        </el-dialog>
        <!-- 确认信息 -->
        <!-- 确认信息6 -->
        <el-dialog
            :visible.sync="msgVisible6"
            :show-close="false"
            custom-class="userManageDialogClass userManageDialogClass1"
            width="26vw"
            center>
            <div class="userManagedDialog userManagedDialog1">
                <div class="title bigfont">是否确认申请给{{multipleNum}}位用户发送<span v-if="pushType=='1'">短信</span><span v-else-if="pushType=='2'">push</span><span v-else>广告</span>？</div>
                <div class="bottom flex-center-Y" style="margin-top:5vh">
                    <div class="btn normalfont" @click="msgVisible6=false">取消</div>
                    <div class="btn1 normalfont" @click="sendMsg">确定</div>
                </div>
            </div>
        </el-dialog>
        <!-- 确认信息 -->
        <!-- 确认信息7 -->
        <el-dialog
            :visible.sync="msgVisible7"
            :show-close="false"
            custom-class="userManageDialogClass userManageDialogClass1"
            width="26vw"
            center>
            <div class="userManagedDialog userManagedDialog1">
                <div class="title bigfont">是否确认合并该{{multipleMar.length}}个用户编组? (合并后新的编组共有{{marUser}}人)</div>
                <div class="bottom flex-center-Y" style="margin-top:5vh">
                    <div class="btn normalfont" @click="msgVisible7=false">取消</div>
                    <div class="btn1 normalfont" @click="groupVisible=true">确定</div>
                </div>
            </div>
        </el-dialog>
        <!-- 确认信息 -->
    </div>
</template>
 
<script> 
import axios from 'axios';
import { mapGetters } from "vuex";
import { provinceAndCityData, CodeToText } from "element-china-area-data";
export default {
  data () {
    return {
      searchData:{pageRow:"6",sex:"",cascader:"",},
      phone:"",
      activeName:"0",
      lists: [
      ],
      listsB: [
      ],
      couponFlag:false,//发券功能是否开通
      sexOptions:[{label:"男",value:1},{label:"女",value:2}],
      cityOptions: provinceAndCityData,
      storeOptions:[],
      groupOptions:[],
      activeOptions:[
        {label:"低活跃",value:"min"},
        {label:"中活跃",value:"mid"},
        {label:"高活跃",value:"max"}
      ],
      allFiltData:'',//list接口返回的筛选信息
      filtData:"",
      functionType:"",//功能操作
      functionOptions:[
        {label:"批量编组",value:"1"},
        {label:"批量发券",value:"2"},
        // {label:"批量发积分",value:"3"},
        {label:"批量通知",value:"4"}
      ],
      functionOptions1:[
        {label:"合并编组",value:"5"}
      ],
      couponTicket:[{}],
      couponList:[],
      couponNum:0,//发放的卡券总数
      total:0,
      page: 1,
      listLoading: false,
      multipleSelectionAll:"",//所有选中的用户(包含跨分页数据
      multipleNum:"",//选中的用户数量
      allCheck: false,
      getRowKeys (row) {
        return row.userId;
      },
      pushType:"1",
      multipleMar:[],
      groupVisible:false,
      groupVisibleB:false,
      joinGroupVisible:false,
      pushVisible:false,
      previewVisible:false,
      adpreviewVisible:false,
      msgVisible:false,
      msgVisible1:false,
      msgVisible2:false,
      msgVisible3:false,
      msgVisible4:false,
      msgVisible5:false,
      msgVisible6:false,
      msgVisible7:false,
      couponVisible:false,
      integralVisible:false,
      addGroup:{marName:"",marRemark:""},
      groupData:"",
      selectGroupData:{marId:""},
      isSelf:false,
      msgList:[{smsTitle:"一条短信",smsId:'1',smscontext:"一条短信一条短信一条短信一条短信一条短信一条短信一条短信一条短信一条短信一条短信一条短信一条短信"},{smsTitle:"一条短信",smsId:'2',smscontext:"11111111"},{smsTitle:"一条短信",smsId:'2',smscontext:"2222222222222"}],
      selectMsg:"",
      preData:"",
      adData: {},
      iscomplete:true,//能否点击提交新建编组
      marUser:0,
    };
  },
  mounted () {
    this.getList()
    this.getStoreList()
    this.getGroupList()
    // this.getCouponList()
  },
  methods: {
    // 分页全选-选中框改变事件
    handleSelectionChange (val) {
      // 数据去重
      this.multipleSelectionAll = this.reduceSame(val);
      // 选中所有选择框时勾选全选按钮
      if (this.multipleSelectionAll.length == this.total) {
        this.allCheck = true;
      }
      // 将row是对象数组数据转换为字符串
      this.multipleSelectionAll = this.multipleSelectionAll.map(function (val) {
        return val.userId;
      }).toString();
      // 选中后的数据
    //   console.log("选中状态改变为:",this.multipleSelectionAll,"是否全选:",this.allCheck)
    },
    // 分页全选-全选按钮change事件
    allCheckEvent () {
      let _this = this;
      if (_this.allCheck) {
        // 全选选中时当前页所有数据选中
        _this.lists.forEach(row => {
          if (row) {
            _this.$refs.table.toggleRowSelection(row, true);
          }
        });
      } else {
        _this.$refs.table.clearSelection();
      }
    //   console.log("是否全选:",this.allCheck)
    },
    // 分页全选-全选时禁用选择框
    checkSelectable (row, index) {
      return !this.allCheck;
    },
    // 数组对象去重
    reduceSame: function (arr) {
      let obj = {};
      return arr.reduce(function (prev, item) {
        obj[item.userId] ? "" : (obj[item.userId] = 1 && prev.push(item))
        return prev
          ;
      }, []);
    },
    // 分页
    handleCurrentChange (val) {
      this.page = val;
      this.getList()
    },
    getList(){
      if(this.activeName=='0'){
        this.searchData.pageNum=this.page
        this.searchData.manageId=this.userId
        this.api({
                    url: "/market/userList",
                    method: "post",
                    data: this.searchData
                }).then(data => {
                  this.lists=data.pageJson.returnData.list
                  this.total=data.pageJson.returnData.totalCount
                  this.couponFlag=data.couponFlag
                  this.getCouponList()
                  let params=data.paramJson
                  this.allFiltData=JSON.parse(JSON.stringify(params))
                  for(let i in this.sexOptions){
                    if(params.sex==this.sexOptions[i].value){
                      params.sex=this.sexOptions[i].label
                    }
                  }
                  for(let i in this.storeOptions){
                    if(params.store==this.storeOptions[i].storeCode){
                      params.store=this.storeOptions[i].storeName
                    }
                  }
                  for(let i in this.groupOptions){
                    if(params.marId==this.groupOptions[i].marId){
                      params.marId=this.groupOptions[i].marName
                    }
                  }
                  for(let i in this.activeOptions){
                    if(params.active==this.activeOptions[i].value){
                      params.active=this.activeOptions[i].label
                    }
                  }
                  this.filtData=''
                  this.filtData+=(params.city?params.city+'/' : '')+(params.store?params.store+'/' : '')+(params.marId?params.marId+'/' : '')+(params.active?params.active+'/' : '')+(params.sex?params.sex : '')
                });
      }else{
        this.api({
                    url: "/market/marList",
                    method: "post",
                    data: {manageId:this.userId}
                }).then(data => {
                  this.listsB=data.marList
                });
      }
    },
    preview(item){
      this.preData=item
      if(this.pushType=='3'){
        this.getDetail()
        this.adpreviewVisible=true
        
      }else{
        this.previewVisible=true
      }
    },
    getDetail(){//获取编辑的回显数据
            this.api({
                url: "/sendSms/showSmsInfo",
                method: "post",
                data: {
                    smsId: this.preData.smsId
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
                    this.main=JSON.parse(JSON.stringify(this.main))
                    this.adData=JSON.parse(JSON.stringify(this.adData))
                })
                .catch(e => {});
        },
    getMsgList(){
      let smsWay
      if(this.pushType=='1'){
        smsWay='0'
      }else if(this.pushType=='2'){
        smsWay='1'
      }else{
        smsWay='3'
      }
      this.api({
                    url: "/sendSms/showSmsList",
                    method: "post",
                    data: {
                      pageNum:1,
                      pageRow:20,
                      smsStatus:1,
                      smsWay:smsWay
                    }
                }).then(data => {
                  this.msgList=data.data.returnData.list
                });
    },
    changePushType(){
      this.getMsgList()
    },
    selectGroup(){//选择分组
      for(let i in this.groupOptions){
        if(this.selectGroupData.marId==this.groupOptions[i].marId){
          this.selectGroupData=this.groupOptions[i]
        }
      }
    },
    changeTab(){
        this.getList()
        this.functionType=''
       },
    search(){
      this.page=1
      this.getList()
      //清空选择
      this.allCheck=false
      this.$refs.table.clearSelection()
      //清空选择
    },
    searchPhone(){
      this.searchData={pageRow:6}
      this.page=1
      this.searchData.userPhone=this.phone
      this.getList()
      this.allCheck=false
      this.$refs.table.clearSelection()
    },
    handleAreaChange(value) {//门店设置地址
           if (value.length == 1) {
               this.searchData.sheng = value[0];
               this.searchData.shi = null;
               this.searchData.qu = null;
           } else if (value.length == 2) {
               this.searchData.sheng = value[0];
               this.searchData.shi = value[1];
               this.searchData.qu = null;
           } else {
               this.searchData.sheng = value[0];
               this.searchData.shi = value[1];
               this.searchData.qu = value[2];
           }
          //  this.searchData.shengName = CodeToText[this.searchData.sheng];
          //  this.searchData.shiName = CodeToText[this.searchData.shi];
          //  this.searchData.quName = CodeToText[this.searchData.qu];
          this.searchData.city=CodeToText[this.searchData.shi]
       },
    getStoreList(){//门店列表
      this.api({
                    url: "/market/storeList",
                    method: "post",
                    data: {
                      manageId:this.userId,
                      username:this.username
                    }
                }).then(data => {
                    this.storeOptions=data
                });
    },
    getGroupList(){//编组列表
      this.api({
                    url: "/market/marList",
                    method: "post",
                    data: {
                      manageId:this.userId
                    }
                }).then(data => {
                    this.groupOptions=data.marList
                });
    },
    getCouponList(){//卡券列表
      if(this.couponFlag){
        this.api({
                      url: "coupon/showAllTicket",
                      method: "post",
                      data: {}
                  })
                      .then(data => {
                          this.couponList=data.couponList
                      })
                      .catch(e => {});
      }
    },
    showExPress(){
      if(this.listsB.length>=8){
      this.$message({
            type: "warning",
            message: "最多只能创建8个用户编组哦~"
        });
        }else{
          this.$message({
            type: "warning",
            message: "批量操作下不能新建编组哦~"
        });
        }
    },
    toDetail(row){
      this.$router.push({
            path: "/markting/userDetail/"+row.userId+'/'+'_'
        });
    },
    createGroup(){//点新建编组按钮
      this.groupVisible=true
    },
    delGroup(row){//解散编组
      this.msgVisible5=true
      this.groupData=row
    },
    deleteGroup(){
      this.api({
                    url: "/market/deleteMar",
                    method: "post",
                    data: {marId:this.groupData.marId}
                }).then(data => {
                    this.$message({
                        type: "success",
                        message: "解散成功!"
                    });
                    this.msgVisible5=false
                    this.getGroupList()
                    this.getList()
                    //清空选择
                    this.allCheck=false
                    this.$refs.tableB.clearSelection()
                    //清空选择
                });
    },
    saveGroup(){//提交新建编组
      if(!this.addGroup.marName){
        this.$message({
            type: "warning",
            message: "请输入编组名称"
        });
        return;
      }
      if(this.groupOptions.length>=8 && this.functionType!='5'){
        this.$message({
            type: "warning",
            message: "当前编组数量已达上限8个,请解散后再新建哦~"
        });
        return;
      }
      let msg='新建成功!'
      if(this.functionType=='5'){//合并编组
        let marIds=''
        for(let i in this.multipleMar){
          if(i==0){
            marIds+=this.multipleMar[i].marId
          }else{
            marIds+=','+this.multipleMar[i].marId
          }
        }
        this.addGroup.marIds=marIds
        msg='合并成功!'
      }
      this.iscomplete=false
      this.api({
                    url: "/market/addMar",
                    method: "post",
                    data: this.addGroup
                }).then(data => {
                    this.$message({
                        type: "success",
                        message: msg
                    });
                    this.groupVisible=false
                    this.addGroup={marName:"",marRemark:""}
                    this.getList()
                    this.getGroupList()
                    this.msgVisible7=false
                    this.iscomplete=true
                    if(this.functionType=='5'){//合并编组
                    this.$refs.tableB.clearSelection()
                    }
                }).catch(() => {
                    this.iscomplete=true
                });
    },
    saveGroupB(){//创建并加入用户编组
      if(!this.addGroup.marName){
        this.$message({
            type: "warning",
            message: "请输入编组名称"
        });
        return;
      }
      if(this.groupOptions.length>=8 && this.functionType!='5'){
        this.$message({
            type: "warning",
            message: "当前编组数量已达上限8个,请解散后再新建哦~"
        });
        return;
      }
      let msg='移入编组成功!'
      
      let userFlag
      if(this.allCheck){//为全选全部
        this.iscomplete=false
        userFlag=true
        this.allFiltData.userIds=''
        this.allFiltData.updateFlag=true
        this.allFiltData.userFlag=userFlag
        this.allFiltData.marName=this.addGroup.marName
        this.allFiltData.marRemark=this.addGroup.marRemark
        this.api({
                    url: "/market/addMar",
                    method: "post",
                    data: this.allFiltData
                }).then(data => {
                    this.$message({
                        type: "success",
                        message: msg
                    });
                    this.iscomplete=true
                    this.addGroup={marName:"",marRemark:""}
                    this.getGroupList()
                    this.groupVisibleB=false
                    this.msgVisible1=false
                    this.joinGroupVisible=false
                    this.selectGroupData={marId:""},
                    this.getList()
                }).catch(() => {
                    this.iscomplete=true
                });
      }else{
        userFlag=false
        this.iscomplete=false
        this.api({
                    url: "/market/addMar",
                    method: "post",
                    data: {
                      marName:this.addGroup.marName,
                      marRemark:this.addGroup.marRemark,
                      userIds:this.multipleSelectionAll,
                      updateFlag:true,
                      userFlag:userFlag
                    }
                }).then(data => {
                    this.$message({
                        type: "success",
                        message: msg
                    });
                    this.iscomplete=true
                    this.addGroup={marName:"",marRemark:""}
                    this.getGroupList()
                    this.groupVisibleB=false
                    this.msgVisible1=false
                    this.joinGroupVisible=false
                    this.selectGroupData={marId:""},
                    this.getList()
                }).catch(() => {
                    this.iscomplete=true
                });
      }
    },
    joinGroup(){//确定加入编组
      if(!this.selectGroupData.marId){
        this.$message({
                        type: "warning",
                        message: "请选择编组!"
                    });
        return;
      }
      let userFlag
      if(this.allCheck){//为全选全部
        userFlag=true
        this.allFiltData.userIds=''
        this.allFiltData.marCode=this.selectGroupData.marId
        this.allFiltData.updateFlag=true
        this.allFiltData.userFlag=userFlag
        this.allFiltData.manageId=this.userId
        this.api({
                    url: "/market/updateUser",
                    method: "post",
                    data: this.allFiltData
                }).then(data => {
                    this.$message({
                        type: "success",
                        message: "移入编组成功!"
                    });
                    this.selectGroupData={marId:""},
                    this.joinGroupVisible=false
                    this.msgVisible=false
                    this.getList()
                });
      }else{
        userFlag=false
        this.api({
                    url: "/market/updateUser",
                    method: "post",
                    data: {
                      userIds:this.multipleSelectionAll,
                      marCode:this.selectGroupData.marId,
                      updateFlag:true,
                      userFlag:userFlag,
                      manageId:this.userId
                    }
                }).then(data => {
                    this.$message({
                        type: "success",
                        message: "移入编组成功!"
                    });
                    this.selectGroupData={marId:""},
                    this.joinGroupVisible=false
                    this.msgVisible=false
                    this.getList()
                });
      }
      
    },
    join(row){//单个用户加入编组
      this.multipleSelectionAll=''
      this.multipleSelectionAll+=row.userId
      this.joinGroupVisible=true
      this.multipleNum=this.multipleSelectionAll.split(',').length
    },
    remove(index){
            if(this.couponTicket.length>=2){
            this.couponTicket.splice(index,1)
            }
        },
    add(){
            let i={giftType:"A"}
            this.couponTicket.push(i)
        },
    selectFunction(){//用户批量操作
      this.$nextTick(_ => {
               if(this.allCheck){//为全选全部
                this.multipleNum=this.total
              }else{
                this.multipleNum=this.multipleSelectionAll.split(',').length
              }
              if(this.functionType=='1'){//批量遍组
                this.joinGroupVisible=true
              }else if(this.functionType=='2' && this.couponFlag){//批量发券
                this.couponVisible=true
              }else if(this.functionType=='2' && !this.couponFlag){//批量发券未开通
                this.msgVisible2=true
              }else if(this.functionType=='4'){//批量通知
                this.pushVisible=true
                this.getMsgList()
              }
                })
    },
    selectFunctionB(){//分组批量操作
    this.$nextTick(_ => {
      if(this.functionType=='5'){//合并编组
        let marCodes=''
        for(let i in this.multipleMar){
          if(i==0){
            marCodes+=this.multipleMar[i].marId
          }else{
            marCodes+=','+this.multipleMar[i].marId
          }
        }
        this.api({
                    url: "/market/showAddPeople",
                    method: "post",
                    data: {
                      marCodes:marCodes
                    }
                }).then(data => {
                    this.marUser=data.userNum
                });
        this.msgVisible7=true
      }
    })
    },
    handleSelectionChangeB(val){
      this.multipleMar=val
      if(this.multipleMar.length==0){
        this.functionType=''
      }
    },
    addCoupon(){//发放卡券的验证
      this.couponNum=0
      for(let i in this.couponTicket){
        this.couponNum+=Number(this.couponTicket[i].ticketNum)
        if(this.couponTicket[i].ticketNum>5){
          this.$message({
                        type: "warning",
                        message: "每种卡券最多5张哦~"
                    });
          return;
        }
        if(this.couponTicket[i].ticketNum<=0){
          this.$message({
                        type: "warning",
                        message: "发放数量需大于0哦~"
                    });
          return;
        }
        if(!this.couponTicket[i].ruleId || !this.couponTicket[i].ticketNum){
          this.$message({
                        type: "warning",
                        message: "请选择卡券并填写数量~"
                    });
          return;
        }
      }
      this.msgVisible3=true
    },
    send(){//确认发放卡券
      let userFlag
      let ruleIds=''
      let ticketNums=''
      for(let i in this.couponTicket){
        if(i==0){
          ruleIds+=this.couponTicket[i].ruleId
        }else{
          ruleIds+=','+this.couponTicket[i].ruleId
        }
      }
      for(let i in this.couponTicket){
        if(i==0){
          ticketNums+=this.couponTicket[i].ticketNum
        }else{
          ticketNums+=','+this.couponTicket[i].ticketNum
        }
      }
      if(this.allCheck){//为全选全部
        userFlag=true
        this.allFiltData.userIds=''
        this.allFiltData.ruleIds=ruleIds
        this.allFiltData.ticketNums=ticketNums
        this.allFiltData.userFlag=userFlag
        this.allFiltData.manageId=this.userId
        this.api({
                    url: "/market/addTicket",
                    method: "post",
                    data: this.allFiltData
                }).then(data => {
                    this.$message({
                        type: "success",
                        message: "卡券发放成功!"
                    });
                    this.couponTicket==[{}]
                    this.msgVisible3=false
                    this.couponVisible=false
                    this.getList()
                    this.getCouponList()
                });
      }else{
        userFlag=false
        this.api({
                    url: "/market/addTicket",
                    method: "post",
                    data: {
                      ruleIds:ruleIds,
                      ticketNums:ticketNums,
                      userIds:this.multipleSelectionAll,
                      userFlag:userFlag,
                      manageId:this.userId
                    }
                }).then(data => {
                    this.$message({
                        type: "success",
                        message: "卡券发放成功!"
                    });
                    this.couponTicket==[{}]
                    this.msgVisible3=false
                    this.couponVisible=false
                    this.getList()
                    this.getCouponList()
                });
      }
      
      
    },
    sendMsg(){//确认发送短信
      let userFlag
      if(this.allCheck){//为全选全部
        userFlag=true
        this.allFiltData.userIds=''
        this.allFiltData.smsId=this.selectMsg
        this.allFiltData.userFlag=userFlag
        this.allFiltData.manageId=this.userId
        this.api({
                    url: "/market/sendMarket",
                    method: "post",
                    data: this.allFiltData
                }).then(data => {
                    this.$message({
                        type: "success",
                        message: "申请成功!"
                    });
                    this.msgVisible6=false
                    this.pushVisible=false
                    this.getList()
                });
      }else{
        userFlag=false
        this.api({
                    url: "/market/sendMarket",
                    method: "post",
                    data: {
                      smsId:this.selectMsg,
                      userIds:this.multipleSelectionAll,
                      userFlag:userFlag,
                      manageId:this.userId
                    }
                }).then(data => {
                    this.$message({
                        type: "success",
                        message: "申请成功!"
                    });
                    this.msgVisible6=false
                    this.pushVisible=false
                    this.getList()
                });
      }
    },
    toGroup(row){//分组详情页
      this.$router.push({
        path:"GroupDetail/"+row.marId
      })
    },
    toCoupon(){//去开通卡券服务
       this.$router.push({
        path:"couponn"
      })
    },
  },
  computed: {
        ...mapGetters(["userName","userId"])
    },
  watch: {
    // 分页全选-监听数据变化
    lists: {
      handler (value) {
        if (this.allCheck) {
          this.lists.forEach(row => {
            if (row) {
              this.$refs.table.toggleRowSelection(row, true)
            }
          });
        }
      },
      deep: true
    },
  }
}
 
</script>