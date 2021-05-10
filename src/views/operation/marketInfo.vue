
<style scoped>
.input-with-select {
    width: 350px;
}
#marketInfo{position: relative;height: 90vh}
.mask{width: 100vw;height: 100vh;position:fixed;top:0;left:0;background: rgba(0, 0, 0, 0.69);z-index: 10}
.mask .close{width: 2vw;height: 2vw;position: absolute;top: 9vh;right: 5vw;cursor: pointer;}
.mask .close img{width: 2vw;height: 2vw}
.maskInner{width: 100%;position: absolute;bottom: 0;left: 0;z-index: 12}
.maskInnerTop{width: 100%;height:56vh;position: absolute;bottom: 25vh;left: 0;z-index: 11;text-align: center}
.maskInnerTop img{width: 20vw;height: 28vw}
.storeList{height:25vh;position: relative;}
.swiperImg{width:7vh;height: 7.5vh}
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
    width: 110px !important;
}
.blue {
    color: #66b1ff;
    cursor: pointer;
    padding: 10px 6px;
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
.red{color: #D62F2F}
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
.center {
    text-align: center;
}
.brandtype {
    margin-right: 10px;
    background: #ffffff;
    color: #888888;
    cursor: pointer;
}
.brandtype.active {
    background: rgba(64, 158, 255, 0.1);
    color: #409eff;
    border: 1px solid rgba(64, 158, 255, 0.2);
}
.text-center{text-align: center}
.bigfont{font-size: 16px;}
.bold{font-weight: bold}
.appeal .skuimg img{width: 5vw;height: 5vw;border-radius: 0;margin-right: 1vw}
.appeal .info{position: relative;width: 15vw;height: 5vw}
.appeal .info .name{font-size: 0.83333vw;font-weight: bold;text-align: left;line-height: 1}
.appeal .info .note{position: absolute;bottom: 1.5vw;left: 0;color: #999;font-size:0.72vw;padding: 0}
.appeal .info .note1{position: absolute;bottom: 0;left: 0;color: #999;font-size:0.72vw;}
.appeal .reason img{width:0.72vw;height:0.72vw;font-size:0.72vw;margin-right: 0.5vw}
.appeal .reason{font-size:0.72vw;margin-bottom: 1vh}
.appeal .appealImg div{width: 5vw;height:5vw;margin-right: 1vw}
.appeal .appealImg img{border-radius: 0;width: 100%;height: 100%}
.appeal .reasonDetail{width: 100%;height: 15vh;border: 1px solid #c0c4cc;margin-top: 2vh;padding: 1vh 0.5vw;font-size: 0.625vw;line-height: 1.5}

.iconfont{font-size:1.5vw;color: #fff}
.backBtn{background: #e1dede;width: 3.2vw;height: 3.2vw;box-shadow:0px 20px 20px -10px rgba(0, 0, 0, 0.15);z-index: 10;text-align: center;line-height: 3.9vw;border-radius: 0.5vw;margin-bottom: 0.5vh}
#backBtn{color: rgba(155, 155, 155, 1);position: fixed;top: 50%;right: 2vw;z-index: 10;cursor: pointer;font-size: 0.73vw;}
#marketInfo >>> .input-with-select .el-select .el-input {
    width: 120px;
} 
</style>

<style>
.el-dialog__headerbtn{z-index: 10;}
#marketInfo .appealDialog .el-textarea__inner{height: 12vh;border: 0}
#marketInfo .appealDialog .el-radio .el-radio__label{font-size: 0.83333vw;font-weight: 400;color: #333}
#marketInfo .appealDialog .el-radio__input.is-checked .el-radio__inner{border-color: #286EFF; background: #286EFF;}
#marketInfo .el-radio+.el-radio{margin-left: 0!important;}
#marketInfo .el-select .el-input {
    width: 190px;
} 
#marketInfo label{
    color: #666666;
    font-size: 14px;
    font-weight: 600;
}
#marketInfo .swiper-slide-active .innerbox{
    background: #ffffff!important;
    height: 7.5vh!important;
    width: 7vh!important;
    color: #fff!important
  }
  .search-line{margin-bottom: 20px;}
  #marketInfo .swiper-slide-active .innerbox .activeImg{position: absolute;top: 50%;left:50%;transform: translate(-50%,-50%);height: 7.5vh!important; width: 7vh!important;}
  .swiper-container,.swiper-father{width: 80%;margin: 0 auto}
  .swiper-father{top: 25%;position: absolute;width: 100%}
   #marketInfo .swiper-pagination{display: none;}
   #marketInfo .swiper-wrapper{
       align-items: flex-end;
       /* align-items: center;
        -webkit-align-items: center;
        justify-content: center;
        -webkit-justify-content:center; */
   }
   .swiper-button-next{
      background-image: url("../../assets/operaion/arrow-r.png");
      background-size: 4vw 4vw;
      width: 4vw;
      height: 4vw;
      right: 20vw;
      top: -35vh;
      z-index: 12
  }
  .swiper-button-prev{
      background-image: url("../../assets/operaion/arrow-l.png");
      background-size: 4vw 4vw;
      width: 4vw;
      height: 4vw;
      left: 20vw;
      top: -35vh;
      z-index: 12
  }
</style>
<template>
    <div class="app-container" id="marketInfo">
        <div v-show="$route.params.gmtFlash1 && $route.params.gmtFlash1!=':gmtFlash1'" id="backBtn" @click="toBack"><div class="backBtn"><i class="el-icon-arrow-left iconfont"></i></div><div style="line-height:1vw">返回上级</div></div>
        <div class="mask" v-show="isShowImg">
            <div class="close" @click="isShowImg=false">
                <img src="../../assets/operaion/close.png" alt="">
            </div>
        </div>
        <div class="maskInner" v-show="isShowImg">
            <div class="storeList">
                <div class="swiper-father">
                    <swiper :options="swiperOption" @slideChangeTransitionStart="changeSwiper" ref="mySwiper" v-if="imgLists.length>0">
                    　　<swiper-slide v-for="(item,index) in imgLists" :key="index">
                        <div class="center" style="width:100%;cursor:pointer;overflow: hidden;">
                            <div class="innerbox center p-2" style="color:#fff;width:80%;margin:0 auto;padding:6%;position:relative">
                                <div class="activeImg">
                                    <img class="swiperImg" :src=item alt="">
                                </div>
                            </div>
                        </div>
                        </swiper-slide>
                    </swiper>
                    　　<div class="swiper-pagination" slot="pagination"></div>
                    　　<div class="swiper-button-prev" slot="button-prev"></div>
                    　　<div class="swiper-button-next" slot="button-next"></div>
                </div>
            </div>
        </div>
        <div class="maskInnerTop" v-show="isShowImg">
            <img :src="selectImg" alt="">
        </div>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="出库信息" name="out">
                <div class="search-line">
                    <el-input placeholder="请输入内容"
                            v-model="searchValue"
                            class="input-with-select">
                        <el-select v-model="selectedTab"
                                placeholder="请选择"
                                slot="prepend">
                            <el-option v-for="item in selectTabs"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-input>
                    <label>仓库：</label>
                    <el-select v-model="params.wareId" placeholder="请选择" clearable>
                        <el-option v-for="(item,i) in wareSelectTabs" :key="i" :label="item.wareName" :value="item.wareId">
                        </el-option>
                    </el-select>
                    <br><br>
                    <label>时间段：</label>
                    <el-date-picker
                        v-model="params.startTime"
                        type="date"
                        value-format="yyyy-MM-dd"
                        placeholder="选择开始日期">
                    </el-date-picker>
                    <span style="color:#DCDFE6">&nbsp;-&nbsp;</span>
                    <el-date-picker
                        v-model="params.endTime"
                        type="date"
                        value-format="yyyy-MM-dd"
                        placeholder="选择结束日期">
                    </el-date-picker>
                    <el-button type="primary" icon="el-icon-search" @click="search">搜 索</el-button>
                </div>
                <el-table :data="tableData"
                          stripe
                          style="width: 100%"
                          v-loading="listLoading"
                          element-loading-text="拼命加载中">
                    <el-table-column prop="odoCode"
                                     label="出库单编号"
                                     style="width: 18%"
                                     align="center"></el-table-column>
                    <el-table-column prop="batchCode"
                                     label="批次编号"
                                     style="width: 18%"
                                     align="center"></el-table-column>
                    <el-table-column prop="skuName"
                                     label="sku名称"
                                     style="width: 18%"
                                     align="center">
                                     <template slot-scope="scope">
                                        <span>{{scope.row.skuName}}</span>
                                     </template>
                                     </el-table-column>
                    <el-table-column prop="skuCode"
                                     label="sku编号"
                                     style="width: 18%"
                                     align="center">
                                     <template slot-scope="scope">
                                        <span>{{scope.row.skuCode}}</span>
                                     </template>
                                     </el-table-column>
                    <el-table-column prop="skuPicture"
                                                label="SKU图片"
                                                align="center" :key="Math.random()">
                                    <template slot-scope="scope">
                                        <img :src="scope.row.skuPicture"
                                            width="40"
                                            height="40"
                                            class="portrait" />
                                    </template>
                                </el-table-column>
                    <el-table-column prop="outNum"
                                     label="出库数量"
                                     style="width: 18%"
                                     align="center">
                                     <template slot-scope="scope">
                                        <span>{{scope.row.outNum || 0}}件</span>
                                     </template>
                                     </el-table-column>
                    <el-table-column prop="odoStatus"
                                     label="状态"
                                     style="width: 18%"
                                     align="center">
                                     </el-table-column>
                    <el-table-column prop="wareName"
                                     label="仓库名称"
                                     style="width: 18%"
                                     align="center"></el-table-column>
                    <el-table-column prop="gmtCreated"
                                     label="生成时间"
                                     style="width: 18%"
                                     align="center"></el-table-column>
                    <!-- <el-table-column prop="gmtCreated"
                                     label="操作"
                                     style="width: 18%"
                                     align="center">
                                    <template slot-scope="scope">
                                        <span class="blue" v-if="scope.row.odoStatus=='0'" @click.stop="check(scope.row)" >确定采购</span>
                                        <span class="blue" v-if="scope.row.odoStatus=='0'" @click.stop="checkDelete(scope.row)" >删除</span>
                                    </template>
                                        </el-table-column> -->
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
            </el-tab-pane>
            <el-tab-pane label="补货信息" name="repair">
                <!-- <el-form>
                    <el-form-item>
                        <el-input placeholder="请输入需要搜索的补货单编号"
                                v-model="selectedTab"
                                clearable
                                style="width: 450px;"
                                class="input-with-select"
                                @keyup.enter.native="search">
                            <template slot="prepend">补货单编号</template>
                            <el-button slot="append"
                                    type="primary"
                                    icon="el-icon-search"
                                    @click="search">搜索</el-button>
                        </el-input>
                    </el-form-item>
                </el-form> -->
                <div class="search-line">
                    <!-- <label>补货员：</label>
                    <el-select v-model="params.repairManId" placeholder="请选择" clearable>
                        <el-option v-for="(item,i) in repairSelectTabs" :key="i" :label="item.repairMan" :value="item.repairManId">
                        </el-option>
                    </el-select> -->
                    <el-input placeholder="请输入内容"
                            v-model="searchValue"
                            class="input-with-select">
                        <el-select v-model="selectedTab"
                                placeholder="请选择"
                                slot="prepend">
                            <el-option v-for="item in selectTabs"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-input>
                    <label>补货状态：</label>
                    <el-select v-model="params.cpStatus" placeholder="请选择" clearable>
                        <el-option v-for="(item,i) in purchaseOrderfilters" :key="i" :label="item.text" :value="item.value">
                        </el-option>
                    </el-select>
                    <label>机器：</label>
                    <el-select v-model="params.machineCode" placeholder="请选择" clearable>
                        <el-option v-for="item in machineSelectTabs" :key="item.machineCode" :label="item.machineName" :value="item.machineCode">
                        </el-option>
                    </el-select>
                    <el-button type="primary" icon="el-icon-search" @click="search">搜 索</el-button>
                </div>
                <el-table :data="tableDataB"
                  ref="refTable" 
                  @row-click="clickTable"
                  style="width: 100%"
                  stripe
                  v-loading="listLoading"
                  element-loading-text="拼命加载中"
                  @expand-change="expandChange"
                  row-key="cpCode"
                  :expand-row-keys="expands">
                    <el-table-column type="expand">
                        <template slot-scope="props">
                            <el-table :data="props.row.repairDetailsList" stripe style="width: 100%" >
                                <el-table-column prop="skuCode" label="SKU编号" style="width: 18%" align="center"></el-table-column>
                                <el-table-column prop="skuName" label="SKU名称" style="width: 18%" align="center"></el-table-column>
                                <!-- <el-table-column prop="replentStatus" label="补货状态" style="width: 18%" align="center"></el-table-column> -->
                                <el-table-column prop="skuPicture"
                                                label="SKU图片"
                                                align="center" :key="Math.random()">
                                    <template slot-scope="scope">
                                        <img :src="scope.row.skuPicture"
                                            width="40"
                                            height="40"
                                            class="portrait" />
                                    </template>
                                </el-table-column>
                                <el-table-column prop="batchCode" label="批次编号" style="width: 18%" align="center"></el-table-column> 
                                <el-table-column label="需补数量" style="width: 18%" align="center">
                                    <template slot-scope="scope">
                                            {{scope.row.cpNum || 0}} 件
                                    </template> 
                                </el-table-column>
                                <!-- <el-table-column label="实补数量" style="width: 18%" align="center">
                                    <template slot-scope="scope">
                                            {{scope.row.staticReplentNum  || 0}} 件
                                    </template> 
                                </el-table-column>
                                <el-table-column label="实际富余量" style="width: 18%" align="center">
                                    <template slot-scope="scope">
                                            {{scope.row.staticMarginNum  || 0}} 件
                                    </template> 
                                </el-table-column>
                                <el-table-column label="退仓数量" style="width: 18%" align="center">
                                    <template slot-scope="scope">
                                            {{scope.row.drawNum   || 0}} 件
                                    </template> 
                                </el-table-column> -->
                            </el-table>
                        </template>
                    </el-table-column>
                    <el-table-column prop="cpCode"
                                    label="补货单编号"
                                    align="center"></el-table-column>
                    <el-table-column prop="statusDetails"
                                    label="补货单状态"
                                    align="center"></el-table-column>
                    <el-table-column prop="machineName"
                                    label="补货机器"
                                    width="170"
                                    align="center">
                    </el-table-column>
                    <el-table-column prop="repairPic"
                                         label="补货图片"
                                         style="width: 18%"
                                         align="center">
                            <template slot-scope="scope">
                                <img :src="scope.row.repairPic"
                                     width="40"
                                     height="40"
                                     class="portrait" />
                            </template>
                    </el-table-column>
                    <el-table-column label="上传图片" width="170" align="center">
                        <template slot-scope="scope">
                            <img v-if="scope.row.repairPic" :src="scope.row.repairPic" width="40" height="40" alt="" @click.stop="showImg(scope.row)">
                            <span v-else>无</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="repairName"
                                    label="补货人员"
                                    align="center"></el-table-column>
                    <el-table-column label="时间" width="170" align="center">
                        <template slot-scope="scope">
                            {{scope.row.gmtCreated}}
                        </template>
                    </el-table-column>
                    <el-table-column prop="gmtPick" label="提货时间" style="width: 18%" align="center"></el-table-column>
                    <el-table-column prop="gmtCp" label="补货时间" style="width: 18%" align="center"></el-table-column>
                    <!-- <el-table-column label="补货故障" width="170" align="center">
                        <template slot-scope="scope">
                            <span v-if="scope.row.hitchStatus=='0'" class="blue" @click.stop="addCard(scope.row)">操作</span>
                            <span v-else>已记录</span>
                        </template>
                    </el-table-column> -->
                    <el-table-column label="操作" width="170" align="center">
                        <template slot-scope="scope">
                            <span class="blue" @click.stop="activeName='remove';params.cpCode=scope.row.cpCode;getList()">查看移交记录</span>
                            <span class="blue" v-if="scope.row.cpStatus=='noPick'" @click.stop="editBill(scope.row)">移交</span>
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
            </el-tab-pane>
            <el-tab-pane label="补货单移交信息" name="remove">
                <el-table :data="tableDataC"
                          stripe
                          style="width: 100%"
                          v-loading="listLoading"
                          element-loading-text="拼命加载中">
                    <el-table-column prop="cpCode"
                                     label="补货单编号"
                                     style="width: 18%"
                                     align="center"></el-table-column>
                    <el-table-column prop="oneUserName"
                                     label="原补货员"
                                     style="width: 18%"
                                     align="center">
                                     </el-table-column>
                    <el-table-column prop="twoUserName"
                                     label="新补货员"
                                     style="width: 18%"
                                     align="center">
                                     </el-table-column>
                    <el-table-column prop="gmtCreated"
                                     label="移交时间"
                                     style="width: 18%"
                                     align="center">
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
            </el-tab-pane>
            <el-tab-pane label="回仓信息" name="back">
                <div class="search-line">
                    <el-input placeholder="请输入内容"
                            v-model="searchValue"
                            class="input-with-select">
                        <el-select v-model="selectedTab"
                                placeholder="请选择"
                                slot="prepend">
                            <el-option v-for="item in selectTabs"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-input>
                    <label>仓库：</label>
                    <el-select v-model="params.wareId" placeholder="请选择" clearable>
                        <el-option v-for="(item,i) in wareSelectTabs" :key="i" :label="item.wareName" :value="item.wareId">
                        </el-option>
                    </el-select>
                    <label>回仓状态：</label>
                    <el-select v-model="params.backStatus" placeholder="请选择" clearable>
                        <el-option v-for="item in purchasefilters" :key="item.value" :label="item.text" :value="item.value">
                        </el-option>
                    </el-select>
                    <el-button type="primary" icon="el-icon-search" @click="search">搜 索</el-button>
                </div>
                <div class="flex-center-Y" style="justify-content:space-between;padding-top:20px">
                    <el-checkbox v-model="allCheck" @change="allCheckEvent" v-if=" totalCount>0">全选</el-checkbox>&emsp;
                    <div class="selectWidth">
                        <el-button v-if="multipleSelectionAll.length>0" type="primary" @click="check(false)">一键回仓</el-button>
                        <el-button v-else disabled>一键回仓</el-button>
                    </div>
                </div>
                <el-table :data="tableDataD"
                          ref="table"
                          stripe
                          style="width: 100%"
                          v-loading="listLoading"
                          element-loading-text="拼命加载中"
                          :row-key="getRowKeys" 
                          type="selection" 
                          @selection-change="handleSelectionChange"
                          >
                    <el-table-column type="selection" :reserve-selection="true" :selectable="checkSelectable" align="center" min-width="5%"></el-table-column>
                    <el-table-column prop="batchCode"
                                     label="批次编号"
                                     style="width: 18%"
                                     align="center"></el-table-column>
                    <el-table-column prop="skuName"
                                     label="sku名称"
                                     align="center">
                                     </el-table-column>
                    <el-table-column prop="skuCode"
                                     label="sku编号"
                                     align="center">
                                     </el-table-column>
                    <el-table-column prop="skuPicture"
                                                label="SKU图片"
                                                align="center" :key="Math.random()">
                                    <template slot-scope="scope">
                                        <img :src="scope.row.skuPicture"
                                            width="40"
                                            height="40"
                                            class="portrait" />
                                    </template>
                                </el-table-column>
                    <el-table-column prop="backNum"
                                     label="回仓数量"
                                     style="width: 18%"
                                     align="center">
                                     <template slot-scope="scope">
                                        <span>{{scope.row.backNum || 0}}件</span>
                                     </template>
                                     </el-table-column>
                    <el-table-column prop="backStatusDetails"
                                     label="回仓状态"
                                     style="width: 18%"
                                     align="center">
                                     </el-table-column>
                    <el-table-column prop="wareName"
                                     label="仓库名称"
                                     style="width: 18%"
                                     align="center"></el-table-column>
                    <el-table-column prop="gmtCreated"
                                     label="生成时间"
                                     style="width: 18%"
                                     align="center"></el-table-column>
                    <el-table-column prop="gmtCreated"
                                     label="操作"
                                     style="width: 18%"
                                     align="center">
                                    <template slot-scope="scope">
                                        <span v-show="scope.row.backStatus=='WAIT'" class="blue" @click.stop="check(scope.row)" >确认回仓</span>
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
            </el-tab-pane>
        </el-tabs>
        <!-- 用户反馈弹窗 -->
        <el-dialog
            :visible.sync="appealVisible"
            custom-class="userManagedialogClass appealDialogClass"
            width="20vw"
            center>
            <div class="userManagedDialog appealDialog card">
                <div class="title bigfont bold text-center">补货故障</div>
                <div class="appeal flex-center-Y">
                    <div class="skuimg">
                      <img :src="selectData.porprait" alt="">
                    </div>
                    <div class="info">
                      <div class="name">{{selectData.nickname}}</div>
                      <div class="note1">{{selectData.username}} </div>
                    </div>
                </div>
                <div class="appeal">
                  <div class="title"><span class="red">*</span>请选择补货员违规问题 (单选)</div>
                  <el-radio v-model="radio" label="A">卡货 (摆放不规范)</el-radio>
                  <el-radio v-model="radio" label="B">错补 (货图不符)</el-radio>
                  <el-radio v-model="radio" label="C">漏补 (空货)</el-radio>
                </div>
                <div class="appeal">
                  <div class="reasonDetail">
                    <el-input type="textarea" placeholder="请输入问题描述" v-model="hitchReason" maxlength="26"></el-input>
                  </div>
                </div>
                <div class="bottom flex-center-Y" style="margin-top:5vh">
                    <div class="btn1" @click="commit">提交</div>
                </div>
            </div>
        </el-dialog>
        <!-- 用户反馈弹窗 -->
        <!-- 修改补货单弹窗 -->
        <el-dialog
            :visible.sync="editVisible"
            title="移交补货单"
            width="20vw"
            center>
            <div>
                <div class="appeal flex-center-Y">
                    <label>补货员：</label>
                    <el-select v-model="selectBill.repairId" placeholder="请选择" clearable>
                        <el-option v-for="item in repairSelectTabs" :key="item.repairId" :label="item.repairUser" :value="item.repairId">
                        </el-option>
                    </el-select>
                </div>
                <div class="bottom flex-center-Y" style="margin-top:50px;justify-content:center">
                    <el-button type="" @click="editVisible=false">取消</el-button>
                    <el-button type="primary" @click="commitEdit">保存</el-button>
                </div>
            </div>
        </el-dialog>
        <!-- 修改补货单弹窗 -->
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            getRowKeys (row) {
                return row.backId;
            },
            multipleSelectionAll:"",//所有选中的数据(包含跨分页数据
            allCheck:false,
            searchValue: "",
            selectedTab: "skuName",
            selectTabs: [
                {
                    name: "SKU编号",
                    id: "skuCode"
                },
                {
                    name: "SKU名称",
                    id: "skuName"
                }
            ],
            activeName:window.localStorage.getItem('activeName') || 'out',
            purchaseTypefilters: [
                { text: "已生成补货单", value: "A" },
                { text: "提货完成", value: "B" },
                { text: "补货完成", value: "C" },
                { text: "补货失败/无法补货", value: "E" }
            ],
//合并
            listLoading: false,
            totalCount: 0,
            tableData: [],
            tableDataB: [],
            tableDataC:[],
            tableDataD:[],
            expands: [],
            purchaseOrderfilters:[{ text: "未提货", value: "noPick" },{ text: "已提货", value: "pick" },{ text: "已补货", value: "cp" },{ text: "已回归", value: "Back" }],
            purchasefilters:[{ text: "未确认", value: "WAIT" },{ text: "已回仓", value: "SUCCESS" }],
            params: {
                pageRow: 20,
                pageNum: 1
            },
            storeSelectTabs:[],
            machineSelectTabs:[],
            repairSelectTabs:[],
            wareSelectTabs:[],
            swiperOption: {
                slidesPerView:15,
                // spaceBetween: 15,
                slidesPerGroup: 1,
                centeredSlides:true,
                slideToClickedSlide:true,
                observer:true,
                observeParents:true,
                observeSlideChildren:true,
                loop: false,
                // loopFillGroupWithBlank: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    // type : 'fraction',
                },
            　　navigation: {
            　　　　nextEl: '.swiper-button-next',
            　　　　prevEl: '.swiper-button-prev'
            　　}
            },
            imgLists:[

                ],
            selectImg:"",
            isShowImg:false,
            appealVisible:false,
            radio:'A',
            hitchReason:"",
            storeData:"",
            props:{value:"storeCode",label:"storeName",children:"vendInfo"},
            gmtFlash:"",
            selectData:"",
            editVisible:false,
            selectBill:{repairId:""}//选择的补货单
        };
    },
    computed: {
        ...mapGetters(['userName',"userId","stockType"])
    },
    created() {
        if(this.$route.params.gmtFlash1 && this.$route.params.gmtFlash1!=':gmtFlash1' && !window.localStorage.getItem('activeName')){//从用户订单详情页点查看补货信息跳转过来的
            this.activeName="repair"
            this.gmtFlash=this.$route.params.gmtFlash1+' '+this.$route.params.gmtFlash2
            this.channelid=this.$route.params.channelid
        }
        this.getList();
        this.getTypeList()
        this.getManList()
        this.getWareList()
        this.getRepairList()
    },
    destroyed(){
        window.localStorage.removeItem("activeName")
    },
    methods: {
        // 分页全选-选中框改变事件
        handleSelectionChange (val) {
            // 数据去重
            this.multipleSelectionAll = this.reduceSame(val);
            // 选中所有选择框时勾选全选按钮
            if (this.multipleSelectionAll.length == this. totalCount) {
                this.allCheck = true;
            }
            // 将row是对象数组数据转换为字符串
            this.multipleSelectionAll = this.multipleSelectionAll.map(function (val) {
                return val.backId;
            }).toString();
            // 选中后的数据
              console.log("选中状态改变为:",this.multipleSelectionAll,"是否全选:",this.allCheck)
        },
        // 分页全选-全选按钮change事件
        allCheckEvent () {
            let _this = this;
            if (_this.allCheck) {
                // 全选选中时当前页所有数据选中
                _this.tableDataD.forEach(row => {
                if (row) {
                    _this.$refs.table.toggleRowSelection(row, true);
                }
                });
            } else {
                _this.$refs.table.clearSelection();
            }
              console.log("是否全选:",this.allCheck)
        },
        // 分页全选-全选时禁用选择框
        checkSelectable (row, index) {
            return !this.allCheck;
        },
        // 数组对象去重
        reduceSame: function (arr) {
            let obj = {};
            return arr.reduce(function (prev, item) {
                obj[item.backId] ? "" : (obj[item.backId] = 1 && prev.push(item))
                return prev
                ;
            }, []);
        },
        delBill(row){//删除补货单
            this.$confirm('是否确定删除该补货单?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.api({
                        url: "/ware/deleteRepairOrder",
                        method: "post",
                        data: {
                            wareoutReplentId :row.wareoutReplentId 
                            }
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
        editBill(row){//修改补货单
            this.editVisible=true
            this.selectBill=row
            console.log(this.selectBill)
        },
        commitEdit(){
            this.api({
                        url: "/inventory/turnCp",
                        method: "post",
                        data: {
                            cpCode :this.selectBill.cpCode,
                            repairId:this.selectBill.repairId 
                            }
                    }).then(data => {
                        this.$message({
                            type: 'success',
                            message: '修改成功!'
                        });
                        this.editVisible=false
                        this.getList()
                    });
        },
        toBack(){//返回上级
            this.$router.go(-1)
        },
        addCard(row){//添加捕获考勤
            this.selectData=row
            this.appealVisible=true
            
        },
        commit(){
            this.api({
                        url: "/ware/addRepairWork",
                        method: "post",
                        data: {
                            repairId:this.selectData.repairId,
                            repairStatus:this.radio,
                            hitchReason:this.hitchReason,
                            wareoutReplentId :this.selectData.wareoutReplentId 
                            }
                    }).then(data => {
                        this.$message({
                            type: 'success',
                            message: '提交成功!'
                            });
                        this.getList()
                        this.appealVisible=false
                    });
        },
        changeSwiper(){
            let swiper = this.$refs.mySwiper.swiper;
            let i = swiper.realIndex;
            let item=this.imgLists[i]
            this.selectImg=item
            // this.getData()
        },
        showImg(row){
            this.isShowImg=true
            this.api({
                        url: "/ware/getRepairPic",
                        method: "post",
                        data: {wareoutReplentId:row.wareoutReplentId}
                    }).then(data => {
                        this.imgLists=data
                        this.selectImg=this.imgLists[0]
                    });
        },
         search() {
             if (!this.selectedTab) {
                this.selectedTab = "skuName";
            }
            this.params.skuCode=""
            this.params.skuName=""
            this.params[this.selectedTab] = this.searchValue;
            this.params.pageNum=1
            this.getList();
        },
        handleClick(){
            this.params={
                pageRow: 20,
                pageNum: 1
            }
            this.selectedTab='skuName'
            this.searchValue= ""
            this.getList()
        },
        clickTable(row,index,e){//点击行就展开
            //调用,table的方法,展开/折叠 行
            this.$refs.refTable.toggleRowExpansion(row)
        },
        handleSizeChange(val) {
            this.params.pageRow = val;
            this.getList();
        },
        currentChange(index) {
            this.params.pageNum = index;
            this.getList();
        },
        prevClick(index) {
            this.params.pageNum = index;
            this.getList();
        },
        nextClick(index) {
            this.params.pageNum = index;
            this.getList();
        },
        filterMethod(filters) {
            //商品分类 采购状态 删选
            for (let i in filters) {
                this.params[i] = filters[i][0];
            }
            console.log(filters);
            this.getList();
        },
        check(row){
            console.log(this.multipleSelectionAll,this.allCheck)
            var backIds=''
            var backFlag=false
            if(row){
                backIds=row.backId
                backFlag=false
            }else{
                if(this.allCheck){
                    backFlag=true
                    backIds=''
                }else{
                    backFlag=false
                    backIds=this.multipleSelectionAll
                }
            }
            this.$confirm('是否确认已回仓?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.api({
                        url: "/inventory/successBack",
                        method: "post",
                        data: {
                            backIds:backIds,backFlag:backFlag
                            }
                    }).then(data => {
                        this.$message({
                            type: 'success',
                            message: '确认成功!'
                            });
                        this.getList();
                    });
                }).catch(() => {
                         
                });
        },
        checkDelete(row){
            this.$confirm('是否删除该采购单?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.api({
                        url: "/inventory/deletePurchaseForManage",
                        method: "post",
                        data: {purchaseTaskId:row.purchaseTaskId,manageId:this.userId}
                    }).then(data => {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                            });
                        this.getList();
                    });
                }).catch(() => {
                         
                });
        },
        del(row){
            this.$confirm('是否确认删除?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.api({
                        url: "/inventory/deletePurchaseDetails ",
                        method: "post",
                        data: {purchaseId:row.purchaseId,purchaseTaskId:row.purchaseTaskId}
                    }).then(data => {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                            });
                        this.getList();
                        this.api({
                            url: "/inventory/showAllPurchaseDetails",
                            method: "post",
                            data: {
                                purchaseTaskId:row.purchaseTaskId
                            }
                        }).then(data => {
                            this.$set(row, "skuList", data);
                        });
                    });
                }).catch(() => {
                         
                });
        },
        getList() {
            this.listLoading = true;
            this.params.username=this.userName
            this.params.manageId=this.userId
            if(this.activeName=='out'){
                this.api({
                    url: "/inventory/odoList",
                    method: "post",
                    data: this.params
                }).then(data => {
                    this.listLoading = false;
                    this.tableData = data.list;
                    this.totalCount = data.totalCount;
                });
            }else if(this.activeName=='repair' && this.stockType=='A'){
                this.params.manageId=this.userId
                this.params.gmtFlash=this.gmtFlash
                this.params.channelid=this.channelid
                this.params.username=this.userName
                this.api({
                    url: "/inventory/cpList",
                    method: "post",
                    data: this.params
                }).then(data => {
                    this.tableDataB = data.list;
                    for (let i in data.list) {
                        data.list[i].repairDetailsList = data.list[i].list;
                    }
                    this.totalCount = data.totalCount;
                    this.listLoading = false;
                });
            }else if(this.activeName=='repair' && this.stockType=='B'){
                this.params.manageId=this.userId
                this.params.channelid=this.channelid
                this.api({
                    url: "/inventory/cpListTo",
                    method: "post",
                    data: this.params
                }).then(data => {
                    this.tableDataB = data.list;
                    for (let i in data.list) {
                        data.list[i].repairDetailsList = data.list[i].list;
                    }
                    this.totalCount = data.totalCount;
                    this.listLoading = false;
                });
            }else if(this.activeName=='remove'){
                this.api({
                    url: "/inventory/cpToUserList",
                    method: "post",
                    data: this.params
                }).then(data => {
                    this.listLoading = false;
                    this.tableDataC = data.list;
                    this.totalCount = data.totalCount;
                });
            }else if(this.activeName=='back'){
                this.api({
                    url: "/inventory/getBackList",
                    method: "post",
                    data: this.params
                }).then(data => {
                    this.listLoading = false;
                    this.tableDataD = data.list;
                    this.totalCount = data.totalCount;
                });
            }
        },
        getTypeList(){
          this.api({
              url: "/order/showStore",
              method: "post", 
              data:{
                  username:this.userName,
                  gmtFlash:this.gmtFlash
              }
            }).then(data => {
                this.storeSelectTabs =  data
                for(let i in this.storeSelectTabs){
                    for(let key in this.storeSelectTabs[i].vendInfo){
                        this.storeSelectTabs[i].vendInfo[key].storeName=this.storeSelectTabs[i].vendInfo[key].machineName
                        this.storeSelectTabs[i].vendInfo[key].storeCode=this.storeSelectTabs[i].vendInfo[key].machineCode
                    }
                }
            }).catch((e)=>{

            })
        },
        getManList(){
          this.api({
              url: "/inventory/cpMachineList",
              method: "post", 
              data:{
                  manageId:this.userId
              }
            }).then(data => {
                this.machineSelectTabs =  data

            }).catch((e)=>{

            })
        },
        getRepairList(){
          this.api({
              url: "/inventory/cpRepairList",
              method: "get", 
              data:{
              }
            }).then(data => {
                this.repairSelectTabs =  data

            }).catch((e)=>{

            })
        },
        getWareList(){
          this.api({
              url: "/inventory/cpWareList",
              method: "post", 
              data:{
                  manageId:this.userId
              }
            }).then(data => {
                this.wareSelectTabs =  data

            }).catch((e)=>{

            })
        },
        getMachineList(){
          this.api({
              url: "/inventory/cpMachineList",
              method: "post", 
              data:{
                  manageId:this.userId
              }
            }).then(data => {
                this.machineSelectTabs =  data

            }).catch((e)=>{

            })
        },
        selectMachine(){
            this.params.storeCode=this.storeData[0]
            this.params.machineCode=this.storeData[1]
        },
        expandChange(row, expandedRows) {//点击展开获取相应的展开内容
        if(this.activeName=='repair'){
             var that = this
            if (expandedRows.length) {
              that.expands = []
              if (row) {
                that.expands.push(row.cpCode)
              }
            } else {
              that.expands = []
            }
        }
        },
        
    }
};
</script>

