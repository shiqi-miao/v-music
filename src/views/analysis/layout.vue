<style lang="scss" scoped>
.dimen{width: 180px;height: 4vh;
  .el-input__suffix-inner{line-height: 4.5vh;}
}
.time{
  position:relative;
  .icon{position: absolute;right: 10px;top: 50%;z-index: 99;transform: translateY(-50%);}
}
.icon{width:20px;height:20px;}
.showInput{width: 50%;}
.btn,.btn1{font-size: 14px;line-height:2.08vw;height:2.08vw;border: 1px solid #409EFF;width: 110px;color: #409EFF;text-align: center;border-radius: 4px;cursor: pointer;}
.btn2{font-size: 14px;line-height:40px;height:40px;border: 1px solid #409EFF;width: 120px;color: #409EFF;text-align: center;border-radius: 4px;cursor: pointer;}
.btn1{background: #409EFF;color: #fff;}
.btn2{border-color:#C0C0C0;color: #C0C0C0;}
.btnn,.btnn1{font-size: 14px;line-height:32px;height:32px;border: 1px solid #409EFF;width: 90px;color: #409EFF;text-align: center;border-radius: 4px;cursor: pointer;}
.btnn1{background: #409EFF;color: #fff;}
.btnn{margin-right: 20px;}
.btnn1:hover{background: #1C83EE;}
.btnn:hover{background: #E5F2FF;}
.btnhover:hover{color: #1C83EE!important;}
.text-center{text-align: center;}
.mr-3{margin-right: 3vw;}
.mr-20{margin-right:20px;}
.mt-1{margin-top: 1vh;}
.mt-2{margin-top: 2vh;}
.mb-2{margin-bottom: 2vh;}
.mb-3{margin-bottom: 3vh;}
.mb-1{margin-bottom: 1vh;}
.mb--1{margin-bottom: 1vw;}
.mt--2{margin-top: 2vw;}
.cursor{cursor:pointer}
.red{color: #E24E4E;}
.layoutdiv{
  width: 100%;height: 100%;position:relative;
  .img{position: absolute;right:0;bottom:0%;width:20px;height:20px;img{width: 100%;};z-index: 100;};
  .title{width: 100%;height: 6%;font-size: 1vw;padding: 0 2%;line-height: 1;font-weight: bold;position:relative;margin-bottom:20px;}
  .chart{width: 100%;height: 90%;};
  .chart1{width: 100%;height: 92%;};
  .chart2{width: 100%;height: 82%;};
  .chart3{width: 100%;height: 71%;};
  .tool{width: 100%;height: 6%;border-top: 1px solid #e4e7ed;padding:0 2%;}
  .time{font-size:14px;color: #999;font-weight: 400;}
  .cascader .el-cascader .el-input__inner{
    border: 0;
  };
  .bottomFunc{position: absolute;bottom: 0;right: 0;z-index:99;
    div{margin-right: 20px;margin-bottom: 20px;color: #999999;font-size: 14px;cursor:pointer;}
  }
}
.blue{color: #409EFF!important}
.pointer{cursor:pointer}
.el-card{width: 100%;height: 100%;}
.justify-between{justify-content: space-between;}
.justify-end{justify-content: flex-end;}
.boardBox{
  .left{width: 180px;padding:2vw 0;height: 93.5vh;min-width:120px;
    .title{font-size: 14px;font-weight: 600;line-height: 1;padding-left: 2vw;};
    .bord{width: 100%;font-size: 14px;line-height: 1;text-align: center;height: 2.8vw;line-height: 2.8vw;};
    .bord.active{border-left: 0.16vw solid #409EFF;color: #409EFF;background: #F5F6F8;}
    .bord:hover{color: #409EFF;cursor: pointer;};
    .btnBox{width: 100%;padding-left: 2vw;margin-top: 1.04vw;}
  };
  .right{width: 90.625%;padding:1.85vh;min-height: 93.5vh;background:#F5F6F8;
    .title{font-size: 18px;font-weight: 600;padding: 0;line-height: 1;}
    .title1{font-size: 14px;color: #999;;margin-bottom: 2vh;line-height: 1;height: 14px;};
    .line{width: 100%;height:1px;background: #F5F6F8;}
    .filter{font-size: 14px;}
    .top{height: 18vh;background:#fff;border:1px solid #E2E5EB;padding:1vw;position:relative;
      .title{font-size: 18px;line-height: 1;margin-bottom: 2vh;;line-height: 1;}
    };
    .bottom{overflow:auto;}
  }
}
.W-100{width: 100%;}

//弹出框样式

//弹出框样式
</style>
<style lang="scss">
#boardBox .dimen{
  .el-input__suffix-inner{line-height: 5vh;margin-right: 5px;}
}
#boardBox .top .el-input__icon{display: none;}
#layout .el-card__body{width: 100%;height: 100%;padding:2%;}
#boardBox .time .el-input__inner{height: 4vh;width: 230px;padding:0 0.52vw;
.el-range-input{font-size: 14px;}
}
#boardBox .showInput .el-input .el-input__inner,#boardBox .showInput .el-input{height: 14px!important;border: 0px!important;padding:0!important}
//弹出框样式
#boardBox .el-dialog__header,#boardBox .el-dialog__body,#boardBox .el-dialog__footer{padding: 0 20px;}
#boardBox .removeDialogClass .el-dialog__footer{padding: 0}
#boardBox .el-dialog__body{margin-top: 20px;border-top:1px solid #E8EAEE;padding-top: 20px;}
#boardBox .el-dialog__headerbtn{
  top: 15px;
  right: 20px;
  font-size: 20px;
}
#boardBox .boardDialogClass{
  padding:20px 0;
  .label{width: 17%;padding-top: 20px;font-size: 14px;};
  .dimenClass{
    width: 95%;
    img{width: 20px;height: 20px;}
    .num{width: 20px;height: 20px;background: #409EFF;border-radius: 50%;color: #fff;font-size: 14px;line-height: 20px;text-align: center;}
    .select{
      .el-input__inner,.el-input{width: 180px!important;height: 40px!important}
    } 
    }
  .dimenClass>div{margin-bottom: 20px;}
  .add{color: #409EFF;cursor: pointer;font-size: 14px;}
}
#boardBox .dialogClass{
  padding:20px 0;
  .el-icon-search{color: #409EFF;font-size: 20px;};
  .type{width:84px;height:32px;line-height: 32px;text-align: center;border: 1px solid #D6D6D6;border-radius:4px 4px 0px 0px;margin-top: 20px;margin-bottom: 20px;cursor: pointer;color: #999999;};
  .type:hover{background:#F3F3F3;}
  .type.active{background: #409EFF;color: #fff;}
  .selectStyle{
  .left{width: 30%;height: 270px!important;border: 1px solid #F5F6F8;border-right:0;padding: 0;overflow: auto;};
  .right{width: 70%;height: 270px;min-height: 270px!important;border: 1px solid #F5F6F8;border-left:0};
  .plug{width: 100%;height: 85px;font-size: 16px;color: #333;padding-top: 19px;padding-left: 13px;line-height:1;border-bottom:1px solid #F5F6F8;
    .info{font-size: 14px;color: #999;margin-top: 15px;padding-left: 27px;}
  };
  .plug.active{background: #F5F6F8;}
  .el-radio__label{font-size: 16px;color: #333;line-height:1;}
}
}
#boardBox .removeDialogClass{padding: 20px;
  box-shadow:0px 6px 20px 0px rgba(0,0,0,0.2);
  border-radius:8px;
  margin-right: 2.5vw;
  margin-top: 17vh!important;
  .tit{margin-bottom: 30px;}
  .titt{margin-bottom: 10px;}
  .el-dialog__headerbtn{display: none};
  .el-dialog__body{border: 0;margin: 0;padding: 0;};
  img{width: 16px;height: 10px;position: absolute;top: -10px;right: 20px;};
  .el-textarea__inner{min-height:70px!important}
  .el-textarea{margin: 10px 0;}
  .tip{margin-bottom: 20px;color: #E24E4E;}
}
#boardBox .removeDialogClass1{
  margin-right: 9.5vw;
}
#boardBox .detailDialogClass{
  // padding:20px;
  // box-shadow:0px 6px 20px 0px rgba(0,0,0,0.2);
  // border-radius:8px;
  margin-top: 18vh!important;
  .el-dialog__headerbtn{display: none};
  .el-dialog__body{border: 0;margin: 0;padding: 0;};
  .el-dialog__body{height: 100%;}
  height:695px;
  width: 1065px;
  .filter{
    .el-input__inner,.el-input{height:40px;width:230px;font-size: 14px;}
  }
  
}
#boardBox .dialogClass .el-input__inner,#boardBox .dialogClass .el-input,#boardBox .boardDialogClass .el-input__inner,#boardBox .boardDialogClass .el-input{height:40px!important;width:230px!important;font-size: 14px!important;}
#boardBox .el-input__inner,#boardBox .el-input{height:4vh;width:180px;font-size: 14px;}
#boardBox .el-dialog__title{font-size: 16px;line-height: 1;}
#boardBox .el-textarea__inner{min-height: 100px!important;font-size: 14px;}
#boardBox .layoutdiv{
  .cascader .el-cascader .el-input__inner,.cascader .el-cascader .el-input{
    border: 0;
    height: 14px;
    color:#409EFF;
    width: 190px;
  }
  .cascader .el-input__suffix{height: 14px;}
  .cascader .el-cascader,.cascader .el-input__icon{
    line-height: 0;
  }
}
//弹出框样式
</style>
<template>
  <div class="boardBox flex-center-S" id="boardBox">
    <div class="left">
      <!-- <div class="title mb--1">核心数据看板</div>
      <div :class="primaryActive?'bord active':'bord'" @click="selectPrimary">数据概览</div> -->
      <div class="flex-center-Y justify-between">
        <div class="title mb--1">数据看板</div>
      </div>
      <div :class="item.isActive?'bord active':'bord'" v-for="(item,i) in boardList" v-show="item.isShow!='1'" :key="i" @click="selectBoard(item)">{{item.boardName}}</div>
      <div class="btnBox">
        <div class="btn" @click="boardDialogVisible=true">+ 新建看板</div>
      </div>
      
    </div>
    <div class="right">
      <div class="top" v-if="boardList.length>0">
        <div class="title" @mouseover="showIcon1=true" @mouseout="showIcon1=false">
          <span v-show="!showInput1">{{selectData.boardName}}&nbsp;</span><i class="el-icon-edit pointer" style="font-size:17px;" v-show="showIcon1 && !showInput1 && selectData.isShow!='1'" @click="editName"></i>
          <div class="showInput"><el-input v-model="selectData.boardName" v-show="showInput1" ref="Input1" maxlength="10" @blur="commitName" @keyup.enter.native="commitName"></el-input></div>
        </div>
        <!-- <div style="position:absolute;top:1.5vw;right:1.5vw">
          <div class="btn1" @click="dingVisible=true">
              钉钉推送
          </div>
        </div> -->
        <div style="position:absolute;top:1.5vw;right:1.5vw;" class="flex-center-Y" v-show="selectData.isShow!='1'">
          <!-- <div class="btn" style="margin-right:1vw">
            数据导出
          </div> -->
          <div class="btn1" @click="dingVisible=true" style="margin-right:1vw">
              钉钉推送
          </div>
          <div class="btn" @click="removeVisible=true">
            移除看板
          </div>
        </div>
        <div class="title1" @mouseover="showIcon2=true" @mouseout="showIcon2=false">
          <span v-show="!showInput2">{{selectData.boardDetails}}&nbsp;</span><i class="el-icon-edit pointer" v-show="showIcon2 && !showInput2 && selectData.isShow!='1'" @click="editDetail"></i>
          <!-- <span v-show="!showInput2">{{selectData.boardDetails}}</span>&nbsp;<i class="el-icon-edit" @click="editDetail"></i> -->
          <div class="showInput"><el-input v-model="selectData.boardDetails" v-show="showInput2" maxlength="64" ref="Input2" @blur="commitDetail" @keyup.enter.native="commitDetail"></el-input></div>
        </div>
        <div class="line"></div>
        <div class="flex-center-Y W-100 mt-2 filter">
          <div class="btn mr-3" @click="add">+添加图表</div>
          <div class="flex-center-Y mr-3">
            <div>统计维度:&nbsp;</div>
            <div class="dimen">
              <el-input @focus="dimenDialogVisible=true" v-model="filter.type">
                <img class='icon' slot="suffix" src="../../assets/analysis/filt.png" alt="">
              </el-input>
            </div>
          </div>
          <div class="flex-center-Y time">
            <img class="icon" src="../../assets/analysis/date.png" alt="">
            <div>时间:&nbsp;</div>
            <el-date-picker
              v-model="filter.time"
              type="daterange"
              value-format="yyyy-MM-dd"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              @change="changeTime"
              :clearable="false">
            </el-date-picker>
          </div>
        </div>
      </div>
      <div v-else style="text-align:center;margin-top:50px;color:#999999">
        <img style="width:200px;height:200px;" src="../../assets/operaion/blank.png" alt="">
        <div>暂无数据看板</div> 
      </div>
      <div class="bottom">
        <div class="board" style="width:1080px;height:74vh" id="layout">
          <!-- //扫码枪 -->
          <!-- <el-input ref="barCodeInput" v-model="barCode" size="small" @keyup.enter.native="payCode"></el-input> -->
          <!-- //扫码枪 -->
          <div class="home">
            <grid-layout
              :layout="layoutData"
              :col-num="2"
              :row-height="layoutConfig.layoutHeight"
              :is-draggable="layoutConfig.dialogVisible"
              :is-resizable="layoutConfig.resizable"
              :is-mirrored="false"
              :vertical-compact="true"
              :margin="[0,10]"
              :use-css-transforms="true"
            >
              <grid-item v-for="(item,index) in layoutData"
                        style="padding-right:10px"
                        :x="item.x"
                        :y="item.y"
                        :w="item.w"
                        :h="item.h"
                        :i="item.i"
                        :key="index"
                        @resize="resizeEvent(item)"
                        @move="moveEvent(item)"
                        @resized="resizedEvent(item)"
                        @moved="movedEvent(item)"
              >
                <el-card>
                  <div class="layoutdiv">
                    <div class="img">
                      <!-- <img v-if="item.w==1" src="../../assets/analysis/big.png" alt="" @click="toBig(item)"> -->
                      <!-- <img v-else src="../../assets/analysis/small.png" alt="" @click="toSmall(item)"> -->
                    </div>
                    <div class="title flex-center-Y">
                      <span>{{item.pluginName}}</span>
                      <span class="time">&nbsp;&nbsp;({{item.pluginDetails}})</span>
                      <!-- <div class="cascader" v-if="item.showDetail" style="position:absolute;top:23%;right:325px;font-size:14px;color:#999;font-weight:400;cursor:pointer">
                        <el-cascader
                          v-model="item.filterValue"
                          :options="cascader"
                          @change="cascaderChange(item)">
                        </el-cascader>
                      </div> -->
                      <div style="position:absolute;top:23%;right:165px;font-size:14px;color:#999;font-weight:400;cursor:pointer" @click="join(item)">添加到看板</div>
                      <div style="position:absolute;top:23%;right:260px;font-size:14px;color:#999;font-weight:400;cursor:pointer" v-if="item.detailsStatus=='1'" @click="toDetail(item)">查看详情</div>
                      <!-- <div style="position:absolute;top:23%;right:260px;font-size:14px;color:#999;font-weight:400;cursor:pointer" v-else @click="toDetail(item)">查看图表</div> -->
                      <div style="position:absolute;top:23%;right:85px;font-size:14px;color:#999;font-weight:400;cursor:pointer" @click="dataOut(item)">数据导出</div>
                      <div v-if="item.dingStatus=='0'" style="position:absolute;top:23%;right:35px;font-size:14px;color:#999;font-weight:400;cursor:pointer" @click="concern(item)">关注</div>
                      <div v-if="item.dingStatus=='1'" style="position:absolute;top:23%;right:35px;font-size:14px;color:#E24E4E;font-weight:400;cursor:pointer" @click="removeConcern(item)">已关注</div>
                      <div style="position:absolute;top:0;right:0%;font-size:20px;color:#999;font-weight:400;cursor:pointer" @click="del(item)"><i class="el-icon-close"></i></div>
                      </div>
                    <div class="chart flex-center-S" v-if="item.showFlag=='1'">
                      <div style="width:14%;height:86%">
                        <left-box :option='filter' :item='item'></left-box>
                      </div>
                      <div style="width:86%;height:100%">
                        <machine-orderNum :option='filter' :item='item' :child='child'></machine-orderNum>
                      </div>
                    </div>
                    <div class="chart chart1" v-else>
                      <machine-orderNum :option='filter' :item='item' :child='child'></machine-orderNum>
                    </div>
                  </div>
                </el-card>
              </grid-item>
            </grid-layout>
          </div>
          <el-dialog
            title="添加图表"
            :visible.sync="dialogVisible"
            width="800px"
            custom-class="dialogClass">
            <el-input v-model="selectValue" @keyup.enter.native="search" @blur="search" placeholder="搜索图表名称">
              <i slot="suffix" class="el-input__icon el-icon-search"></i>
            </el-input>
            <div class="flex-center-Y">
              <div v-for="(item,i) in typeList" :class="item.isActive?'type active':'type'" :key="i" @click="typeSelect(item)">{{item.typeName}}</div>
            </div>
            <!-- <el-select v-model="type" placeholder="请选择图表类型">
              <el-option
                v-for="item in plugList"
                :key="item.pluginId"
                :label="item.pluginName"
                :value="item.pluginId">
              </el-option>
            </el-select> -->
            <div class="flex-center-Y selectStyle mb-3">
              <div class="left">
                <div v-for="(item,i) in plugList" :key="i" :class="item.isSelect?'plug active':'plug'">
                <el-radio v-model="type" :label="item.id" @change="changePlug(item)">{{item.pluginName}}</el-radio>
                <div class="info">{{item.pluginDetails}}</div>
                </div>
              </div>
              <div class="right" v-if="selectModelType">
                <!-- <div class="chart flex-center-S" v-if="selectModelType.showFlag" style="height:230px">
                  <div style="width:14%;height:86%">
                    <left-box :option='filterD' :item='selectModelType'></left-box>
                  </div>
                  <div style="width:86%;height:100%">
                    <machine-orderNum :option='filterD' :item='selectModelType' :child='child'></machine-orderNum>
                  </div>
                </div> -->
                <div class="chart chart1" style="height:230px">
                  <machine-orderNum :option='filterD' :item='selectModelType' :child='child'></machine-orderNum>
                </div>
              </div>
            </div>
            <span slot="footer" class="dialog-footer flex-center-Y justify-end mb-2">
              <div class="btnn" @click="dialogVisible = false">取 消</div>
              <div class="btnn1" type="primary" @click="addType">确 定</div>
            </span>
        </el-dialog>
        <el-dialog
            title="新建看板"
            :visible.sync="boardDialogVisible"
            width="400px"
            custom-class="boardDialogClass">
            <div class="flex-center-S mb-2">
              <div class="label"><span class="red">*</span>名称:</div>
              <el-input v-model="form.boardName" placeholder="请输入看板名称" maxlength="10"></el-input>
            </div>
            <div class="flex-center-S mb-3">
              <div class="label">描述:</div>
              <div style="width:83%">
                <el-input type="textarea" v-model="form.boardDetails" show-word-limit placeholder="填写描述,方便理解看板的使用场景和价值" maxlength="64"></el-input>
              </div>
            </div>
            <span slot="footer" class="dialog-footer flex-center-Y justify-end">
              <div class="btnn" @click="boardDialogVisible = false">取 消</div>
              <div class="btnn1" type="primary" @click="addBoard">确 定</div>
            </span>
        </el-dialog>
        <!-- 主页统计维度弹框 -->
        <el-dialog
            title="统计维度"
            :visible.sync="dimenDialogVisible"
            width="500px"
            custom-class="boardDialogClass">
            <div class="dimenClass">
                <div v-for="(item,i) in dimenList" :key="i" class="flex-center-Y justify-between">
                  <div class="num">{{i+1}}</div>
                  <div class="select">
                      <el-select v-model="item.id" placeholder="请选择" @change='changeDimen(item)' :disabled="item.info!=''">
                        <el-option
                          v-for="g in dimen"
                          :key="g.id"
                          :label="g.name"
                          :value="g.id"
                          :disabled="g.disabled"
                          >
                        </el-option>
                      </el-select>
                  </div>
                  <div class="select">
                      <el-select v-model="item.info" placeholder="请选择" multiple v-if="item.id==''">
                        <el-option
                          v-for="g in item.infoList"
                          :key="g.id"
                          :label="g.name"
                          :value="g.id"
                          >
                        </el-option>
                      </el-select>
                      <el-select v-model="item.info" placeholder="请选择" multiple v-if="item.id=='headStoreCode'" @change="changeStore">
                        <el-option
                          v-for="g in storeList"
                          :key="g.headStoreCode"
                          :label="g.storeName"
                          :value="g.headStoreCode"
                          >
                        </el-option>
                      </el-select>
                      <el-select v-model="item.info" placeholder="请选择" multiple v-if="item.id=='headMachineCode'">
                        <el-option
                          v-for="g in machineList"
                          :key="g.headMachineCode"
                          :label="g.machineName"
                          :value="g.headMachineCode"
                          >
                        </el-option>
                      </el-select>
                      <el-select v-model="item.info" placeholder="请选择" multiple v-if="item.id=='headBrandId'" @change="changeBrand">
                        <el-option
                          v-for="g in brandList"
                          :key="g.headBrandId"
                          :label="g.brandName"
                          :value="g.headBrandId"
                          >
                        </el-option>
                      </el-select>
                      <el-select v-model="item.info" placeholder="请选择" multiple v-if="item.id=='headTypeId'" @change="changeType">
                        <el-option
                          v-for="g in headtyepList"
                          :key="g.headTypeId"
                          :label="g.typeName"
                          :value="g.headTypeId"
                          >
                        </el-option>
                      </el-select>
                      <el-select v-model="item.info" placeholder="请选择" multiple v-if="item.id=='headSkuCode'">
                        <el-option
                          v-for="g in skuList"
                          :key="g.headSkuCode"
                          :label="g.skuName"
                          :value="g.headSkuCode"
                          >
                        </el-option>
                      </el-select>
                  </div>
                  <img src="../../assets/analysis/delete.png" v-if="!isHover" class='cursor' alt="" @click="delCondition(i)" @mouseenter="isHover=true">
                  <img src="../../assets/analysis/delete-active.png" v-else class='cursor' alt="" @click="delCondition(i)" @mouseleave="isHover=false">
                </div>
                <div class="add" @click="addCondition" style="width:50%">+ 继续添加过滤条件</div>
            </div>
            <span slot="footer" class="dialog-footer flex-center-Y justify-end">
              <div class="btnn" @click="dimenDialogVisible = false">取 消</div>
              <div class="btnn1" type="primary" @click="commitCondition">确 定</div>
            </span>
        </el-dialog>
        <!-- 详情页统计维度弹框 -->
        <el-dialog
            title="统计维度"
            :visible.sync="dimenDialogVisibleI"
            width="500px"
            custom-class="boardDialogClass">
            <div class="dimenClass">
                <div v-for="(item,i) in dimenListI" :key="i" class="flex-center-Y justify-between">
                  <div class="num">{{i+1}}</div>
                  <div class="select">
                      <el-select v-model="item.id" placeholder="请选择" @change='changeDimenI(item)' :disabled="item.info!=''">
                        <el-option
                          v-for="g in dimenI"
                          :key="g.id"
                          :label="g.name"
                          :value="g.id"
                          :disabled="g.disabled"
                          >
                        </el-option>
                      </el-select>
                  </div>
                  <div class="select">
                      <el-select v-model="item.info" placeholder="请选择" multiple v-if="item.id==''">
                        <el-option
                          v-for="g in item.infoList"
                          :key="g.id"
                          :label="g.name"
                          :value="g.id"
                          >
                        </el-option>
                      </el-select>
                      <el-select v-model="item.info" placeholder="请选择" multiple v-if="item.id=='headStoreCode'" @change="changeStoreI">
                        <el-option
                          v-for="g in storeList"
                          :key="g.headStoreCode"
                          :label="g.storeName"
                          :value="g.headStoreCode"
                          >
                        </el-option>
                      </el-select>
                      <el-select v-model="item.info" placeholder="请选择" multiple v-if="item.id=='headMachineCode'">
                        <el-option
                          v-for="g in machineList"
                          :key="g.headMachineCode"
                          :label="g.machineName"
                          :value="g.headMachineCode"
                          >
                        </el-option>
                      </el-select>
                      <el-select v-model="item.info" placeholder="请选择" multiple v-if="item.id=='headBrandId'" @change="changeBrandI">
                        <el-option
                          v-for="g in brandList"
                          :key="g.headBrandId"
                          :label="g.brandName"
                          :value="g.headBrandId"
                          >
                        </el-option>
                      </el-select>
                      <el-select v-model="item.info" placeholder="请选择" multiple v-if="item.id=='headTypeId'" @change="changeTypeI">
                        <el-option
                          v-for="g in headtyepList"
                          :key="g.headTypeId"
                          :label="g.typeName"
                          :value="g.headTypeId"
                          >
                        </el-option>
                      </el-select>
                      <el-select v-model="item.info" placeholder="请选择" multiple v-if="item.id=='headSkuCode'">
                        <el-option
                          v-for="g in skuList"
                          :key="g.headSkuCode"
                          :label="g.skuName"
                          :value="g.headSkuCode"
                          >
                        </el-option>
                      </el-select>
                  </div>
                  <img src="../../assets/analysis/delete.png" v-if="!isHover" class='cursor' alt="" @click="delConditionI(i)" @mouseenter="isHover=true">
                  <img src="../../assets/analysis/delete-active.png" v-else class='cursor' alt="" @click="delConditionI(i)" @mouseleave="isHover=false">
                </div>
                <div class="add" @click="addConditionI" style="width:50%">+ 继续添加过滤条件</div>
            </div>
            <span slot="footer" class="dialog-footer flex-center-Y justify-end">
              <div class="btnn" @click="dimenDialogVisibleI = false">取 消</div>
              <div class="btnn1" type="primary" @click="commitConditionI">确 定</div>
            </span>
        </el-dialog>
        <el-dialog
            title="添加到看板"
            :visible.sync="addToBoardVisible"
            width="440px"
            custom-class="boardDialogClass">
            <div class="flex-center-Y" style="flex-wrap:wrap">
              <div :class="(i+1)%3==0?'btn2 mb-2':'btn2 mr-20 mb-2'" v-for="(item,i) in boardList" :style="item.isSelect?'color:#333;border-color:#333':''" :key="i" @click="joinBoard(item)">{{item.boardName}}</div>
              <div @click="boardDialogVisible=true" class="btn2 mb-2 btnhover" style="border:0;color:#409EFF">+ 新建看板</div>
            </div>
            <span slot="footer" class="dialog-footer flex-center-Y justify-end">
              
              <div class="btnn" @click="addToBoardVisible = false">取 消</div>
              <div class="btnn1" type="primary" @click="commitJoin">确 定</div>
            </span>
        </el-dialog>
        <el-dialog
            :visible.sync="removeVisible"
            width="240px"
            :modal='false'
            custom-class="removeDialogClass">
            <img src="../../assets/analysis/trangel.png" alt="">
            <div class="text-center tit">是否确定移除看板?</div>
            <span slot="footer" class="dialog-footer flex-center-Y justify-between">
              <div class="btnn" @click="removeVisible = false">取 消</div>
              <div class="btnn1" type="primary" @click="remove">确 定</div>
            </span>
        </el-dialog>
        <el-dialog
            :visible.sync="dingVisible"
            width="300px"
            :modal='false'
            custom-class="removeDialogClass removeDialogClass1">
            <img src="../../assets/analysis/trangel.png" alt="">
            <div class="text-center titt">是否确认启用钉钉推送经营日志功能?</div>
            <div class="text-center titt">（已关注的看板将会被推送）</div>
            <el-input type="textarea" v-model="dingUrl" placeholder="请输入链接"></el-input>
            <div class="tip">*获取链接方式详见用户手册</div>
            <span slot="footer" class="dialog-footer flex-center-Y justify-end">
              <div class="btnn" @click="dingVisible = false">取 消</div>
              <div class="btnn1" type="primary" @click="commitDingding">确 定</div>
            </span>
        </el-dialog>
        <!-- 详情----------------------------------------------------------------------------------------------------------------------------------------------------------------------- -->
        <el-dialog
            :visible.sync="detailVisible"
            width="1065px"
            :modal='true'
            custom-class="detailDialogClass">
              <div class="layoutdiv">
                <el-card>
                <div class="bottomFunc flex-center-Y">
                  <div @click="show(false)" :class="selectPlug.showDetail?'':'blue'">查看图表</div>
                  <div>热力图</div>
                  <div>折线图</div>
                  <div>客流图</div>
                  <div @click="show(true)" :class="!selectPlug.showDetail?'':'blue'">查看表格</div>
                </div>
                <div class="title flex-center-Y">
                    <span>{{selectPlug.pluginName}}</span>
                    <!-- <span class="time">&nbsp;({{time[0]}}-{{time[1]}})&nbsp;</span> -->
                    <!-- <div class="cascader" style="position:absolute;top:23%;right:260px;font-size:14px;color:#999;font-weight:400;cursor:pointer">
                      <el-cascader
                        v-model="selectPlug.filterValue"
                        :options="cascader"
                        :props="SetKesDept"
                        @change="cascaderChange(selectPlug)">
                      </el-cascader>
                    </div> -->
                    <!-- <div style="position:absolute;top:23%;right:165px;font-size:14px;color:#999;font-weight:400;cursor:pointer" @click="join(selectPlug)">添加到看板</div> -->
                    <!-- <div style="position:absolute;top:23%;right:260px;font-size:14px;color:#999;font-weight:400;cursor:pointer" v-if="!selectPlug.showDetail" @click="selectPlug.showDetail=true">查看详情</div>
                    <div style="position:absolute;top:23%;right:260px;font-size:14px;color:#999;font-weight:400;cursor:pointer" v-else @click="selectPlug.showDetail=false">查看图表</div> -->
                    <!-- <div style="position:absolute;top:23%;right:85px;font-size:14px;color:#999;font-weight:400;cursor:pointer" @click="dataOut(selectPlug)">数据导出</div> -->
                    <!-- <div style="position:absolute;top:23%;right:35px;font-size:14px;color:#999;font-weight:400;cursor:pointer" @click="concern(selectPlug)">关注</div> -->
                    <!-- <div style="position:absolute;top:23%;right:35px;font-size:14px;color:#E24E4E;font-weight:400;cursor:pointer">已关注</div> -->
                    <div style="position:absolute;top:0;right:0%;font-size:20px;color:#999;font-weight:400;cursor:pointer" @click="detailVisible=false"><i class="el-icon-close"></i></div>
                </div>
                <div class="flex-center-Y W-100 filter" style="margin-bottom:20px">
                  <div class="flex-center-Y" style="width:30%">
                    <div>统计维度:&nbsp;</div>
                    <div class="">
                      <el-input suffix-icon="el-icon-date" @focus="dimenDialogVisibleI=true" v-model="filterI.type"></el-input>
                    </div>
                  </div>
                  <div class="flex-center-Y">
                    <div>时间:&nbsp;</div>
                    <el-date-picker
                      v-model="filterI.time"
                      type="daterange"
                      value-format="yyyy-MM-dd"
                      range-separator="-"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      @change="changeTimeI">
                    </el-date-picker>
                  </div>
                </div>
                <div class="chart2 flex-center-S" v-if="!selectPlug.showDetail">
                  <div class="chart flex-center-S" v-if="selectPlug.showFlag">
                    <div style="width:14%;height:86%">
                      <left-box :option='filterI' :item='selectPlug'></left-box>
                    </div>
                    <div style="width:86%;height:100%">
                      <machine-orderNum :option='filterI' :item='selectPlug' :child='child'></machine-orderNum>
                    </div>
                  </div>
                  <div class="chart chart3" v-else>
                    <machine-orderNum :option='filterI' :item='selectPlug' :child='child'></machine-orderNum>
                  </div>
                </div>
                <div class="chart chart3" v-else>
                  <detail-chart :item='selectPlug' :option='filterI'></detail-chart>
                </div>
                </el-card>
              </div>
        </el-dialog>
        <!-- 详情----------------------------------------------------------------------------------------- -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import VueGridLayout from 'vue-grid-layout' 
  // import RadarChart from '../charts/radar-chart'
  // import LineChart from '../charts/line-chart'
  // import BarChart from '../charts/bar-chart'
  // import PieChart from '../charts/pie-chart'
  import MachineOrderNum from '../funcCharts/machineOrderNum'
  import DetailChart from '../funcCharts/detailChart'
  import LeftBox from '../funcCharts/leftBox'
  const GridLayout = VueGridLayout.GridLayout
  const GridItem = VueGridLayout.GridItem
  export default {
    //扫码枪
    // directives:{
    //   focus:function(el){
    //     el.focus()
    //   }
    // },
    //扫码枪
    data() {
      return {
        barCode:"",
        // 布局数据
        layoutData: [
                //       {
                //   pluginName:"销售情况",
                //   pluginChart:"bar",
                //   "x": 0,
                //   "y": 0,
                //   "w": 2,
                //   "h": 4,
                //   "i": "0"
                // },
                // {
                //   pluginName:"销售情况",
                //   pluginChart:"pie",
                //   "x": 0,
                //   "y": 4,
                //   "w": 1,
                //   "h": 2,
                //   "i": "0"
                // }
        ],
        // radarItem: [{name: '美术', value: 95, max: '100'}, {name: '语文', value: 55, max: '100'}, {name: '化学', value: 75, max: '100'}, {name: '劳动', value: 85, max: '100'}, {name: '烹饪', value: 85, max: '100'}],
        layoutConfig: {
          height: 320, // 默认高度
          dialogVisible: true, // 是否可拖拽
          resizable:false//是否可改变大小
        },
        dialogVisible:false,
        plugList:[
          // {pluginId:"d3acf7c43cb54d39bf85ff0eaa8503e7",pluginName:"热门门店排名"}
        ],
        typeList:[],
        selectValue:"",
        selectType:"",
        type:"",
        filter:{type:"",startTime:"",endTime:"",isModel:false,time:[],headStoreCode:[],headBrandId:[],headTypeId:[],headMachineCode:[],headSkuCode:[]},//主页图表删选条件
        filterD:{isModel:true},//默认图表示例删选条件
        filterI:{type:"",startTime:"",endTime:"",isModel:false,time:[],headStoreCode:[],headBrandId:[],headTypeId:[],headMachineCode:[],headSkuCode:[]},//详情页图表删选条件
        boardList:[{boardName:"新建看板1",id:1,boardDetails:"看板111111111111111111111"},{boardName:"新建看板2",id:2,boardDetails:"看板22222222222222"}],
        selectData:"",
        boardDialogVisible:false,
        form:{boardName:"",boardDetails:""},//新建看板信息
        removeVisible:false,
        parimaryBoard:"",
        showIcon1:false,
        showIcon2:false,
        showInput1:false,
        showInput2:false,
        addToBoardVisible:false,
        joinData:"",
        selectPlug:"",//选择的插件
        primaryActive:true,//数据概览是否选中"
        dimenDialogVisible:false,
        dimenDialogVisibleI:false,
        child:true,//传递给图表组件标志是否重新请求数据
        // 主页统计维度
        dimenList:[
          // {id:'headStoreCode',info:"1"},{id:'headMachineCode',info:""}
        ],
        dimen:[
          {name:"门店",id:"headStoreCode",disabled:false},
          {name:"机器",id:"headMachineCode",disabled:false},
          // {name:"品牌",id:"headBrandId",disabled:false},
          // {name:"分类",id:"headTypeId",disabled:false},
          {name:"商品",id:"headSkuCode",disabled:false}
        ],
        headStoreCode:[],//筛选的门店信息
        headBrandId:[],
        headTypeId:[],
        headMachineCode:[],
        headSkuCode:[],
        // 主页统计维度
        // 详情页统计维度
        dimenListI:[
          // {id:'headStoreCode',info:"1"},{id:'headMachineCode',info:""}
        ],
        dimenI:[
          {name:"门店",id:"headStoreCode",disabled:false},
          {name:"机器",id:"headMachineCode",disabled:false},
          // {name:"品牌",id:"headBrandId",disabled:false},
          // {name:"分类",id:"headTypeId",disabled:false},
          {name:"商品",id:"headSkuCode",disabled:false}
        ],
        headStoreCodeI:[],//筛选的门店信息
        headBrandIdI:[],
        headTypeIdI:[],
        headMachineCodeI:[],
        headSkuCodeI:[],
        // 详情页统计维度
        dingVisible:false,
        cascader:[
          {
            value: 'ziyuan',
            label: '一号门店',
            children: [{
                          value: 'axure',
                          label: '一号机器'
                        }, {
                          value: 'sketch',
                          label: '二号机器'
                        }, {
                          value: 'jiaohu',
                          label: '三号机器'
                        }
                      ]
          }],
          SetKesDept:{
                        value:'storeCode',
                        label:'storeName',
                        children:'vendInfo'
                },//自定义  级联选择器value label
          detailVisible:false,
          selectModelType:"",//选择的模板插件
          isHover:false,
          storeList:"",
          machineList:"",
          brandList:"",
          headtyepList:"",
          skuList:'',
          dingUrl:""
      }
    },
    components: {
      GridLayout,
      GridItem,
      // RadarChart,
      // LineChart,
      // BarChart,
      // PieChart
      MachineOrderNum,//机器销售额占比
      DetailChart,
      LeftBox,//表格的侧边信息
    },
    created() {
      document.getElementsByTagName("body")[0].style.minWidth="1260px";
      document.getElementsByTagName("body")[0].style.overflowX="auto";
      document.getElementsByTagName("body")[0].style.overflowY="hidden";
      //扫码枪
      // this.$nextTick(() => {
      //   this.$refs.barCodeInput.focus()
      // })
      //扫码枪
      // this.getData()
      this.api({//获得数据概览数据
              url: "/plant/showBoard",
              method: "get",
              data:{}                      
          }).then((data) => {  
              this.boardList=data
              // for(let i in this.boardList){
              //   if(this.boardList[i].isShow=='1'){
              //     this.parimaryBoard=this.boardList[i]
              //     this.selectData=this.parimaryBoard
              //     this.selectData.boardName="数据概览"
              //     this.selectData.boardDetails="数据概览展示"
              //   }
              //   if(this.parimaryBoard==""){//没有数据概览
                  this.selectData=this.boardList[0]
                  this.boardList[0].isActive=true
              //   } 
              // }
              this.getList()
          }).catch(() => {
              
          })
      this.api({//门店机器列表
              url: "/data/showStoreAndMachine",
              method: "post",
              data:{
                username:this.userName
              }                      
          }).then((data) => {  
              this.cascader=data
              for(let i in this.cascader){
                for(let key in this.cascader[i].vendInfo){
                  this.cascader[i].vendInfo[key].storeCode=this.cascader[i].vendInfo[key].machineCode
                  this.cascader[i].vendInfo[key].storeName=this.cascader[i].vendInfo[key].machineName
                }
              }
          }).catch(() => {
              
          })
      this.getDisabled()//先选机器后无法选门店
      //生成默认日期---------------------------------------------------------
      let date=new Date()
      let startDate=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()
      let endDate
      function getBeforeDate(n) {
        var s;
        var n = n;
        var d = new Date();
        var year = d.getFullYear();
        var mon = d.getMonth() + 1;
        var day = d.getDate();
        if(day <= n) {
            if(mon > 1) {
                mon = mon - 1;
            } else {
                year = year - 1;
                mon = 12;
            }
        }
        d.setDate(d.getDate() - n);
        year = d.getFullYear();
        mon = d.getMonth() + 1;
        day = d.getDate();
        s = year + "-" + (mon < 10 ? ('0' + mon) : mon) + "-" + (day < 10 ? ('0' + day) : day);
        return s;
    }
      endDate=getBeforeDate(7)
      this.filter.time[0]=endDate
      this.filter.time[1]=startDate
      this.filter.startTime=this.filter.time[0]
      this.filter.endTime=this.filter.time[1]
      //生成默认日期------------------------------------------------------------
      
    },
    methods: {
      //扫码枪
      // payCode(){
      //   console.log(this.barCode)
      //   this.$nextTick(() => {
      //   this.$refs.barCodeInput.blur()
      // })
      // },
      //扫码枪
      commitDingding(){//钉钉推送
        if(!this.dingUrl){
          this.$message({
                  type:"warning",
                  message:"请输入推送链接"
                })
          return;
        }
        this.api({
                  url: "/plant/addDingLinkToBoard",
                  method: "post",
                  data:{
                    dingLink:this.dingUrl,
                    boardId:this.selectBoard.boardId
                  }                      
              }).then((data) => { 
                this.$message({
                  type:"success",
                  message:"添加成功!"
                })
                this.dingVisible=false
              }).catch(() => {
                  
              })    
      },
      // 主页统计维度
      changeDimen(item){
        if(item.id=='headStoreCode'){
            this.api({//门店
                  url: "/data/showStore",
                  method: "post",
                  data:{
                    username:this.userName
                  }                      
              }).then((data) => { 
                this.storeList=data
              }).catch(() => {
                  
              })                                                                                
        }else if(item.id=='headMachineCode'){
            for(let i in this.dimenList){
              if(this.dimenList[i].id=='headStoreCode'){
                this.headStoreCode=this.headStoreCode.concat(this.dimenList[i].info)
              }
            }
            this.api({//机器
                  url: "/data/showMachine",
                  method: "post",
                  data:{
                    username:this.userName,
                    headStoreCode:this.headStoreCode
                  }                      
              }).then((data) => { 
                this.machineList=data
              }).catch(() => {
                  
              })                                                                                
        }else if(item.id=='headBrandId'){//品牌
            this.api({//机器
                  url: "/data/showBrand",
                  method: "post",
                  data:{
                    username:this.userName
                  }                      
              }).then((data) => { 
                this.brandList=data
              }).catch(() => {
                  
              })                                                                                
        }else if(item.id=='headTypeId'){//分类
            this.api({//机器
                  url: "/data/showGoodsType",
                  method: "post",
                  data:{
                    username:this.userName
                  }                      
              }).then((data) => { 
                this.headtyepList=data
              }).catch(() => {
                  
              })                                                                                
        }else if(item.id=='headSkuCode'){//sku
            for(let i in this.dimenList){
              if(this.dimenList[i].id=='headBrandId'){
                this.headBrandId=this.headBrandId.concat(this.dimenList[i].info)
              }
              if(this.dimenList[i].id=='headTypeId'){
                this.headTypeId=this.headTypeId.concat(this.dimenList[i].info)
              }
            }
            this.api({//机器
                  url: "/data/showGoodsInfo",
                  method: "post",
                  data:{
                    username:this.userName,
                    headBrandId:this.headBrandId,
                    headTypeId:this.headTypeId
                  }                      
              }).then((data) => { 
                this.skuList=data
              }).catch(() => {
                  
              })                                                                                
        }
        this.getDisabled()
        // this.getDimenInfo(item)
      },
      changeStore(){
        this.headStoreCode=[]
        for(let i in this.dimenList){
              if(this.dimenList[i].id=='headStoreCode'){
                this.headStoreCode=this.headStoreCode.concat(this.dimenList[i].info)
              }
            }
            this.api({//机器
                  url: "/data/showMachine",
                  method: "post",
                  data:{
                    username:this.userName,
                    headStoreCode:this.headStoreCode
                  }                      
              }).then((data) => { 
                this.machineList=data
              }).catch(() => {
                  
              })  
      },
      changeBrand(){
        this.headBrandId=[]
        for(let i in this.dimenList){
              if(this.dimenList[i].id=='headBrandId'){
                this.headBrandId=this.headBrandId.concat(this.dimenList[i].info)
              }
              if(this.dimenList[i].id=='headTypeId'){
                this.headTypeId=this.headTypeId.concat(this.dimenList[i].info)
              }
            }
            this.api({//sku
                  url: "/data/showGoodsInfo",
                  method: "post",
                  data:{
                    username:this.userName,
                    headBrandId:this.headBrandId,
                    headTypeId:this.headTypeId
                  }                      
              }).then((data) => { 
                this.skuList=data
              }).catch(() => {
                  
              })                 
      },
      changeType(){
        this.headTypeId=[]
          for(let i in this.dimenList){
              if(this.dimenList[i].id=='headBrandId'){
                this.headBrandId=this.headBrandId.concat(this.dimenList[i].info)
              }
              if(this.dimenList[i].id=='headTypeId'){
                this.headTypeId=this.headTypeId.concat(this.dimenList[i].info)
              }
            }
            this.api({//sku
                  url: "/data/showGoodsInfo",
                  method: "post",
                  data:{
                    username:this.userName,
                    headBrandId:this.headBrandId,
                    headTypeId:this.headTypeId
                  }                      
              }).then((data) => { 
                this.skuList=data
              }).catch(() => {
                  
              })                 
      },
      getDisabled(){
        //先选机器后无法选门店
        let isMachine=false
        for(let i in this.dimenList){
          if(this.dimenList[i].id=='headMachineCode'){
            isMachine=true
          }
        }
        for(let i in this.dimen){
          if(this.dimen[i].id=='headStoreCode'){
            this.dimen[i].disabled=isMachine
          }
        }
        //先选机器后无法选门店
        //先选sku后无法选品牌和分类
        let isSku=false
        for(let i in this.dimenList){
          if(this.dimenList[i].id=='headSkuCode'){
            isSku=true
          }
        }
        for(let i in this.dimen){
          if(this.dimen[i].id=='headTypeId' || this.dimen[i].id=='headBrandId'){
            this.dimen[i].disabled=isSku
          }
        }
        //先选sku后无法选品牌和分类
      },
      getDimenInfo(item){
        item.infoList=[]
      },
      // 主页统计维度
      // 详情统计维度
      changeDimenI(item){
        if(item.id=='headStoreCode'){
            this.api({//门店
                  url: "/data/showStore",
                  method: "post",
                  data:{
                    username:this.userName
                  }                      
              }).then((data) => { 
                this.storeList=data
              }).catch(() => {
                  
              })                                                                                
        }else if(item.id=='headMachineCode'){
            for(let i in this.dimenListI){
              if(this.dimenListI[i].id=='headStoreCode'){
                this.headStoreCodeI=this.headStoreCodeI.concat(this.dimenListI[i].info)
              }
            }
            this.api({//机器
                  url: "/data/showMachine",
                  method: "post",
                  data:{
                    username:this.userName,
                    headStoreCode:this.headStoreCodeI
                  }                      
              }).then((data) => { 
                this.machineList=data
              }).catch(() => {
                  
              })                                                                                
        }else if(item.id=='headBrandId'){//品牌
            this.api({//机器
                  url: "/data/showBrand",
                  method: "post",
                  data:{
                    username:this.userName
                  }                      
              }).then((data) => { 
                this.brandList=data
              }).catch(() => {
                  
              })                                                                                
        }else if(item.id=='headTypeId'){//分类
            this.api({//机器
                  url: "/data/showGoodsType",
                  method: "post",
                  data:{
                    username:this.userName
                  }                      
              }).then((data) => { 
                this.headtyepList=data
              }).catch(() => {
                  
              })                                                                                
        }else if(item.id=='headSkuCode'){//sku
            for(let i in this.dimenListI){
              if(this.dimenListI[i].id=='headBrandId'){
                this.headBrandIdI=this.headBrandIdI.concat(this.dimenListI[i].info)
              }
              if(this.dimenListI[i].id=='headTypeId'){
                this.headTypeIdI=this.headTypeIdI.concat(this.dimenListI[i].info)
              }
            }
            this.api({//机器
                  url: "/data/showGoodsInfo",
                  method: "post",
                  data:{
                    username:this.userName,
                    headBrandId:this.headBrandIdI,
                    headTypeId:this.headTypeIdI
                  }                      
              }).then((data) => { 
                this.skuList=data
              }).catch(() => {
                  
              })                                                                                
        }
        this.getDisabled()
        // this.getDimenInfo(item)
      },
      changeStoreI(){
        this.headStoreCodeI=[]
        for(let i in this.dimenListI){
              if(this.dimenListI[i].id=='headStoreCode'){
                this.headStoreCodeI=this.headStoreCodeI.concat(this.dimenListI[i].info)
              }
            }
            this.api({//机器
                  url: "/data/showMachine",
                  method: "post",
                  data:{
                    username:this.userName,
                    headStoreCode:this.headStoreCodeI
                  }                      
              }).then((data) => { 
                this.machineList=data
              }).catch(() => {
                  
              })  
      },
      changeBrandI(){
        this.headBrandIdI=[]
        for(let i in this.dimenListI){
              if(this.dimenListI[i].id=='headBrandId'){
                this.headBrandIdI=this.headBrandIdI.concat(this.dimenListI[i].info)
              }
              if(this.dimenListI[i].id=='headTypeId'){
                this.headTypeIdI=this.headTypeIdI.concat(this.dimenListI[i].info)
              }
            }
            this.api({//sku
                  url: "/data/showGoodsInfo",
                  method: "post",
                  data:{
                    username:this.userName,
                    headBrandId:this.headBrandIdI,
                    headTypeId:this.headTypeIdI
                  }                      
              }).then((data) => { 
                this.skuList=data
              }).catch(() => {
                  
              })                 
      },
      changeTypeI(){
        this.headTypeIdI=[]
          for(let i in this.dimenListI){
              if(this.dimenListI[i].id=='headBrandId'){
                this.headBrandIdI=this.headBrandIdI.concat(this.dimenListI[i].info)
              }
              if(this.dimenListI[i].id=='headTypeId'){
                this.headTypeIdI=this.headTypeIdI.concat(this.dimenListI[i].info)
              }
            }
            this.api({//sku
                  url: "/data/showGoodsInfo",
                  method: "post",
                  data:{
                    username:this.userName,
                    headBrandId:this.headBrandIdI,
                    headTypeId:this.headTypeIdI
                  }                      
              }).then((data) => { 
                this.skuList=data
              }).catch(() => {
                  
              })                 
      },
      getDisabledI(){
        //先选机器后无法选门店
        let isMachine=false
        for(let i in this.dimenListI){
          if(this.dimenListI[i].id=='headMachineCode'){
            isMachine=true
          }
        }
        for(let i in this.dimenI){
          if(this.dimenI[i].id=='headStoreCode'){
            this.dimenI[i].disabled=isMachine
          }
        }
        //先选机器后无法选门店
        //先选sku后无法选品牌和分类
        let isSku=false
        for(let i in this.dimenListI){
          if(this.dimenListI[i].id=='headSkuCode'){
            isSku=true
          }
        }
        for(let i in this.dimenI){
          if(this.dimenI[i].id=='headTypeId' || this.dimenI[i].id=='headBrandId'){
            this.dimenI[i].disabled=isSku
          }
        }
        //先选sku后无法选品牌和分类
      },
      getDimenInfoI(item){
        item.infoList=[]
      },
      // 详情统计维度
      getType(){
        this.api({//查询插件分类
              url: "/plant/pluginType",
              method: "get",
              data:{}                      
          }).then((data) => { 
            this.typeList=data
            this.selectType=data[0]
            this.getPlug()
          }).catch(() => {
              
          })
      },
      getPlug(){
        this.api({//查询插件分类
              url: "/plant/showPlugin",
              method: "post",
              data:{
                typeId:this.selectType.typeId,
                pluginName:this.selectValue//模糊搜索
              }                      
          }).then((data) => { 
            this.plugList=data
            this.selectModelType=data[0]
            data[0].isSelect=true
          }).catch(() => {
              
          })
      },
      search(){
        this.getPlug()
      },
      typeSelect(item){
        for(let i in this.typeList){
          this.typeList[i].isActive=false
        }
        item.isActive=true
        this.selectType=item
        this.getPlug()
      },
      // getData(){
      //   this.api({
      //         url: "/data/saleVolume",
      //         method: "post",
      //         data:{
      //           startTime:"2020-01-01 00:00:00"
      //         }                      
      //     }).then((data) => { 
      //       let pieItem={
      //           legend:[],
      //           data:[]
      //       }
      //       for(let i in data.machineList){
      //         pieItem.legend.push(data.machineList[i].machineName)
      //         data.machineList[i].name=data.machineList[i].machineName
      //         data.machineList[i].value=data.machineList[i].salePrice
      //         pieItem.data.push(data.machineList[i])
      //       }
      //       this.pieItem.legend.data=pieItem.legend
      //       this.pieItem.series[0].data=pieItem.data
      //     }).catch(() => {
              
      //     })
      // },
      add(){
        this.dialogVisible=true
        this.getType()
      },
      changePlug(item){
        for(let i in this.plugList){
          this.plugList[i].isSelect=false
        }
        item.isSelect=true
        this.plugList=JSON.parse(JSON.stringify(this.plugList))
        this.selectModelType=item
       
      },
      addType(){
        this.api({
              url: "/plant/addPlugin",
              method: "post",
              data:{
                list:this.layoutData,
                pluginId:this.type,
                pluginChart:this.selectPlug.pluginChart,
                boardId:this.selectData.boardId,//看板id
              }                      
          }).then((data) => {  
              this.getList()
              this.dialogVisible=false
              this.$message({
                  type:"success",
                  message:"添加成功!"
                })
          }).catch(() => {
              
          })
      },
      del(item){
        this.api({
              url: "/plant/delete",
              method: "post",
              data:item             
          }).then((data) => {  
              this.getList()
          }).catch(() => {
              
          })
      },
      getList(){
        this.api({
              url: "/plant/showBoardInfo",
              method: "post",
              data:{boardId:this.selectData.boardId}                      
          }).then((data) => {  
              this.layoutData=data
          }).catch(() => {
              
          })
      },
      updateList(){
        this.api({
              url: "/plant/updatePlugin",
              method: "post",
              data:this.layoutData                      
          }).then((data) => {  
              this.getList()
          }).catch(() => {
              
          })
      },
      selectBoard(item){//选中数据看板
      this.child=!this.child
      this.primaryActive=false
        for(let i in this.boardList){
          this.boardList[i].isActive=false
        }
        item.isActive=true
        this.selectData=item
        this.getList()
      },
      selectPrimary(){//选中核心数据看板
        this.child=!this.child
        this.primaryActive=true
        for(let i in this.boardList){
          this.boardList[i].isActive=false
        }
        this.selectData=this.parimaryBoard
        this.selectData.boardName="数据概览"
        this.selectData.boardDetails="数据概览展示"
        this.getList()
      },
      editName(){//修改数据看板名称
        this.showInput1=true
        this.$nextTick(_=>{
          
          this.$refs.Input1.focus()
        })
      },
      editDetail(){//修改数据看板描述
        this.showInput2=true
        this.$nextTick(_=>{
          this.$refs.Input2.focus()
        })
      },
      commitName(){
        if(!this.selectData.boardName){
          this.$message({
            type:"warning",
            message:"请输入看板名称哦~"
          })
          return;
        }
        this.api({
              url: "/plant/updateBoard",
              method: "post",
              data:this.selectData                     
          }).then((data) => {  
              this.getBoldList()
              this.showInput1=false
          }).catch(() => {
              
          })
      },
      commitDetail(){
        this.api({
              url: "/plant/updateBoard",
              method: "post",
              data:this.selectData                     
          }).then((data) => {  
              this.getBoldList()
              this.showInput2=false
          }).catch(() => {
              
          })
      },
      getBoldList(){
        this.api({
              url: "/plant/showBoard",
              method: "get",
              data:{}                      
          }).then((data) => {  
              this.boardList=data
              this.selectData=data[0]
              this.getList()
          }).catch(() => {
              
          })
      },
      addBoard(){
        // if(this.boardList.length==8){
        //   this.$message({
        //     type:"warning",
        //     message:"看板数量已达上限,请先删除部分看板哦~"
        //   })
        //   return;
        // }
        if(!this.form.boardName){
          this.$message({
            type:"warning",
            message:"请输入看板名称哦~"
          })
          return;
        }
        this.api({
              url: "/plant/addBoard",
              method: "post",
              data:this.form                
          }).then((data) => {  
            this.$message({
              type:"success",
              message:"创建成功!"
            })
            this.getBoldList()
            this.boardDialogVisible=false
            this.form={boardName:"",boardDetails:""}
          }).catch(() => {
              
          })
      },
      remove(){//点击移除看板
        this.api({
              url: "/plant/deleteBoard",
              method: "post",
              data:{boardId:this.selectData.boardId}                
          }).then((data) => {  
            this.$message({
              type:"success",
              message:"移除成功!"
            })
            this.getBoldList()
            this.removeVisible=false
          }).catch(() => {
              
          })
      },
      join(item){//点击添加到看板
        this.selectPlug=item
        this.addToBoardVisible=true
        this.boardList[0].isSelect=true
        console.log(this.selectPlug)
      },
      joinBoard(item){//加入看板选择看板
        for(let i in this.boardList){
          this.boardList[i].isSelect=false
        }
        item.isSelect=true
        this.boardList=JSON.parse(JSON.stringify(this.boardList))
        this.joinData=item
      },
      commitJoin(){//确定加入看板
        if(!this.joinData.boardId){
          this.$message({
              type:"warning",
              message:"请选择要加入的看板哦~"
            })
          return;
        }
        let layoutData
        this.api({//获得要加入的看板的list
              url: "/plant/showBoardInfo",
              method: "post",
              data:{boardId:this.joinData.boardId}                      
          }).then((data) => {  
              layoutData=data
              this.api({
              url: "/plant/addPlugin",
              method: "post",
              data:{
                list:layoutData,
                pluginId:this.selectPlug.pluginId,
                pluginChart:this.selectPlug.pluginChart,
                boardId:this.joinData.boardId,//看板id
              }                      
          }).then((data) => {  
              this.getList()
              this.dialogVisible=false
              this.$message({
                  type:"success",
                  message:"添加成功!"
                })
                this.addToBoardVisible=false
          }).catch(() => {
              
          })
          }).catch(() => {
              
          })
        
        
      },
      toBig(item){//点击放大
        item.w=2
        item.h=4
        if(item.x==1){
              item.x=0
              item.y+=2
            }
        this.updateList()
        this.layoutData=JSON.parse(JSON.stringify(this.layoutData))
        console.log(this.layoutData)
      },
      toSmall(item){//点击缩小
        item.w=1
        item.h=2
        this.updateList()
        this.layoutData=JSON.parse(JSON.stringify(this.layoutData))
        console.log(this.layoutData)
      },
      toDetail(item){//查看数据详情
        // 将主页删选条件赋值给详情页的筛选条件
        this.filterI.time=JSON.parse(JSON.stringify(this.filter.time))
        this.filterI.startTime=JSON.parse(JSON.stringify(this.filter.startTime))
        this.filterI.endTime=JSON.parse(JSON.stringify(this.filter.endTime))
        this.filterI.type=JSON.parse(JSON.stringify(this.filter.type))
        this.dimenListI=JSON.parse(JSON.stringify(this.dimenList))
        this.dimenI=JSON.parse(JSON.stringify(this.dimen))
        this.headStoreCodeI=JSON.parse(JSON.stringify(this.headStoreCode))
        this.headBrandIdI=JSON.parse(JSON.stringify(this.headBrandId))
        this.headTypeIdI=JSON.parse(JSON.stringify(this.headTypeId))
        this.headMachineCodeI=JSON.parse(JSON.stringify(this.headMachineCode))
        this.headSkuCodeI=JSON.parse(JSON.stringify(this.headSkuCode))
        this.filterI.headStoreCode=JSON.parse(JSON.stringify(this.filter.headStoreCode))
        this.filterI.headBrandId=JSON.parse(JSON.stringify(this.filter.headBrandId))
        this.filterI.headTypeId=JSON.parse(JSON.stringify(this.filter.headTypeId))
        this.filterI.headMachineCode=JSON.parse(JSON.stringify(this.filter.headMachineCode))
        this.filterI.headSkuCode=JSON.parse(JSON.stringify(this.filter.headSkuCode))
        this.selectPlug=item
        this.selectPlug.showDetail=true
        this.detailVisible=true
        // if(item.w==1 && !item.showDetail){//在小图的情况下点击数据详情
        //     item.w=2
        //     item.h=4
        //     if(item.x==1){
        //       item.x=0
        //       item.y+=2
        //     }
        //     console.log(this.layoutData)
        //     // this.updateList()
        //     item.showDetail=true
        //     this.layoutData=JSON.parse(JSON.stringify(this.layoutData))
        //   }else{
        //     item.showDetail=!item.showDetail
        //     this.layoutData=JSON.parse(JSON.stringify(this.layoutData))
        //   }
        
        
      },
      dataOut(item){//数据导出
        this.api({
              url: "/plant/exportDataExcel",
              method: "post",
              data:{
                startTime:this.filter.startTime,
                endTime:this.filter.endTime,
                dataType:'Progress',//是大表还是其他的详情啥的
                pluginCard:item.pluginCard,
                // startTime:"2019-08-01",
                // endTime:'2019-09-30',
                pluginId:item.pluginId,
                detailsStatus:0,
                username:this.userName
              }                      
          }).then((data) => {  
                window.open(data.downLoadUrl,"_blank");
                this.$message({
                  type:"success",
                  message:"导出成功!"
                }) 
          }).catch(() => {
              
          })
      },
      show(value){
        this.selectPlug.showDetail=value
        this.selectPlug=JSON.parse(JSON.stringify(this.selectPlug))
      },
      concern(item){//关注
        item.dingStatus=true
        this.api({
              url: "/plant/addDingTalk",
              method: "post",
              data:{pluginId:item.pluginId}                
          }).then((data) => {  
            // this.getList()
          }).catch(() => {
              
          })
      },
      removeConcern(item){//关注
        item.dingStatus=false
        this.api({
              url: "/plant/deleteDingTalk",
              method: "post",
              data:{pluginId:item.pluginId}                
          }).then((data) => {
            // this.getList()
          }).catch(() => {
              
          })
      },
      // 主页统计维度
      addCondition(){//点击添加维度的过滤条件
        this.dimenList.push({id:"",info:""})
      },
      delCondition(i){//点击删除统计维度
        this.dimenList.splice(i,1)
        this.getDisabled()
      },
      commitCondition(){
        for(let i in this.dimenList){
          for(let g in this.dimen){
            if(this.dimenList[i].id==this.dimen[g].id){
              this.dimenList[i].name=this.dimen[g].name
            }
          }
        }
        let type=''
        for(let i in this.dimenList){
          if(i=='0'){
            type+=this.dimenList[i].name
          }else{
            type+='、'+this.dimenList[i].name
          }
        }
        this.filter.type=type
        this.dimenDialogVisible=false
        let headStoreCode=[]
        let headMachineCode=[]
        let headBrandId=[]
        let headTypeId=[]
        let headSkuCode=[]
        console.log(this.dimenList)
        for(let i in this.dimenList){
          if(this.dimenList[i].id=='headStoreCode'){
            headStoreCode=headStoreCode.concat(this.dimenList[i].info)
          }else if(this.dimenList[i].id=='headMachineCode'){
            headMachineCode=headMachineCode.concat(this.dimenList[i].info)
          }else if(this.dimenList[i].id=='headBrandId'){
            headBrandId=headBrandId.concat(this.dimenList[i].info)
          }else if(this.dimenList[i].id=='headTypeId'){
            headTypeId=headTypeId.concat(this.dimenList[i].info)
          }else if(this.dimenList[i].id=='headSkuCode'){
            headSkuCode=headSkuCode.concat(this.dimenList[i].info)
          }
        }
        this.$set(this.filter, 'headStoreCode', headStoreCode);//直接赋值的话监听不到
        this.$set(this.filter, 'headMachineCode', headMachineCode);
        this.$set(this.filter, 'headBrandId', headBrandId);
        this.$set(this.filter, 'headTypeId', headTypeId);
        this.$set(this.filter, 'headSkuCode', headSkuCode);
      },
      // 主页统计维度
      // 详情页统计维度
      addConditionI(){//点击添加维度的过滤条件
        this.dimenListI.push({id:"",info:""})
      },
      delConditionI(i){//点击删除统计维度
        this.dimenListI.splice(i,1)
        this.getDisabledI()
      },
      commitConditionI(){
        for(let i in this.dimenListI){
          for(let g in this.dimenI){
            if(this.dimenListI[i].id==this.dimenI[g].id){
              this.dimenListI[i].name=this.dimenI[g].name
            }
          }
        }
        let type=''
        for(let i in this.dimenListI){
          if(i=='0'){
            type+=this.dimenListI[i].name
          }else{
            type+='、'+this.dimenListI[i].name
          }
        }
        this.filterI.type=type
        this.dimenDialogVisibleI=false
        let headStoreCodeI=[]
        let headMachineCodeI=[]
        let headBrandIdI=[]
        let headTypeIdI=[]
        let headSkuCodeI=[]
        console.log(this.dimenListI)
        for(let i in this.dimenListI){
          if(this.dimenListI[i].id=='headStoreCode'){
            headStoreCodeI=headStoreCodeI.concat(this.dimenListI[i].info)
          }else if(this.dimenListI[i].id=='headMachineCode'){
            headMachineCodeI=headMachineCodeI.concat(this.dimenListI[i].info)
          }else if(this.dimenListI[i].id=='headBrandId'){
            headBrandIdI=headBrandIdI.concat(this.dimenListI[i].info)
          }else if(this.dimenListI[i].id=='headTypeId'){
            headTypeIdI=headTypeIdI.concat(this.dimenListI[i].info)
          }else if(this.dimenListI[i].id=='headSkuCode'){
            headSkuCodeI=headSkuCodeI.concat(this.dimenListI[i].info)
          }
        }
        this.$set(this.filterI, 'headStoreCode', headStoreCodeI);//直接赋值的话监听不到
        this.$set(this.filterI, 'headMachineCode', headMachineCodeI);
        this.$set(this.filterI, 'headBrandId', headBrandIdI);
        this.$set(this.filterI, 'headTypeId', headTypeIdI);
        this.$set(this.filterI, 'headSkuCode', headSkuCodeI);
        this.filterI=JSON.parse(JSON.stringify(this.filterI))
      },
      // 详情页统计维度
      cascaderChange(item){//选门店机器
      },
      resizeEvent(item){// 当该元素 被放大缩小触发的事件 
      
      },
      moveEvent(item){// 该元素移动时 触发的事件
        // console.log(item)
      },
      resizedEvent(item){// 放大缩小结束 触发事件 注意:必须当大小相对上一次发生改变结束时才会触发
        this.updateList()
      },
      movedEvent(item){// 移动结束触发 注意:只有当位置相对上一次发生改变才会触发
        this.updateList()
      },
      changeTime(){
        this.filter.startTime=this.filter.time[0]
        this.filter.endTime=this.filter.time[1]
        console.log(this.filter)
      }, 
      changeTimeI(){
        this.filterI.startTime=this.filterI.time[0]
        this.filterI.endTime=this.filterI.time[1]
        console.log('filterI',this.filterI)
      }, 
    },
    computed: {
        ...mapGetters(["userName",'userId'])
    }
  }

</script>


