<style scoped>
#replenishment{height: 90vh}
    .box{width: 80%;height:150px;border-radius: 5px;border: 1px solid #e6e6e6;margin-bottom:20px;padding:0 3%;position: relative}
    .top{padding: 20px}
    .flex-start{
        width: 100%;
        display: flex;
        display: -webkit-flex;
        align-items: flex-start;
        -webkit-align-items: flex-start;
        justify-content: flex-start;
        -webkit-justify-content: flex-start;
    }
    .flex-center{
        width: 100%;
        display: flex;
        display: -webkit-flex;
        align-items: flex-center;
        -webkit-align-items: flex-center;
        justify-content: flex-center;
        -webkit-justify-content: flex-center;
    }
    .flex-1 {
        flex: 1;
    }
    .flex-2 {
        flex: 2;
    }
    .flex-3 {
        flex: 3;
    }
    .flex-10 {
        flex: 10;
    }
    .blue{
     color:#66b1ff;
     cursor: pointer;
     font-weight:400
    }
    .p-absolute{
        position: absolute;
        bottom: 0;
        right: 0;
        padding-right: 5%
    }
    .center{text-align: center}
    .end{text-align: end}
    .danger{color: #F56C6C}
    .success{color:#409EFF }
    .warning{color:#E6A23C}
    .info{color: #909399}
    .left{padding-left: 5%}
    .right{padding-top: 3%}
    .left .title{font-size: 30px;font-weight: 400}
    .left p{font-size: 20px;font-weight: 400}
    .el-date-editor{margin-top: 2%;width:40%}
    .row-box{height:10%;width: 100%;}
    .row-box .col-box{height:100%;position: relative;border: 1px solid #f2f6fc;padding: 1%;text-align: center}
    .row-box .col-box .num{width:50%;height:17%;position: absolute;left: 0;border-left:0;border-bottom-right-radius: 10px;border-top-right-radius: 10px;color: #fff}
    .row-bottom{width: 100%;border: 1px solid #e4e4e4;border-top:0;height: 100px;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;}
    .take{width: 50%;height: 85%}
    .skuimg{margin-top: 15px}
    .skuname{font-size: 14px;margin:0}
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .list{height: 100%}
  .member{padding: 2% 0;position: relative;margin-bottom: 2%}
  .member .handle{position: absolute;top: 50%;transform:translateY(-50%); right: 0;width: 20%;padding: 1%;z-index: 10;text-align: end}
  .group{border: 1px dotted #e4e7ed;padding: 2%;margin-bottom: 1%}
  .pl-0{padding-left:0!important}
  .pb-0{padding-bottom: 0!important}
  .pt-0{padding-top: 0!important}
  .pr-0{padding-right: 0}
  .p-2{padding: 2%}
  #innerlist{height:80%;overflow: hidden;overflow-y: auto;}
  #innerlist-out{height:0%;overflow: hidden;overflow-y: auto;}
  .active{border: 1px dotted red;-moz-box-shadow:2px 2px 5px #909399; -webkit-box-shadow:2px 2px 5px #909399; box-shadow:2px 2px 5px #909399}
  .pointer{cursor:pointer}
  .vent{height:600px}
  /* @media screen and (max-width: 1520px){
    #innerlist{height:400px}
    .vent{height:550px}
  } */
  .leftrep,.centerrep,.rightrep{height: 100%}
  .centerrep,.rightrep{padding-left: 1.8vh}
  .left-top{height: 15%;}
  .left-bottom{height: 85%;padding-top:1.8vh}
  .center-top{height: 30%;}
  .center-bottom{height: 70%}
  .title{font-size: 24px;font-weight: 600}
  .p-1{padding: 1%}
  .p-2{padding: 2%}
  .pt-2{padding-top: 2%}
  .fr{float: right}
  i{font-size: 20px}
  .selectMember{max-height:65%;overflow: hidden;overflow-y: auto;}
  img{width:100%}
  .el-card,.cardfont{font-size: 1.04vw}
  .smallfont{font-size:18px}
  .minifont{font-size: 16px}
  .font-bold{font-weight: 600}
  .small-padding{padding-top: 1.8vh;padding-bottom: 1.8vh}
  .replishDrop .el-select-dropdown__list .el-select-dropdown__item{height: 8vh!important;line-height:3vh;padding: 0 3.6vh}
  .replishDrop .el-select-dropdown__list{padding-top: 1.8vh}
  .storeRunMachinedrop .el-select-dropdown__list .el-select-dropdown__item{height: 5vh!important;line-height:5vh;padding: 0 3.6vh}
  .storeRunMachinedrop .el-select-dropdown__list{padding-top: 1.8vh}
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .el-tag{
      color: #333;
      border: 0;
      background: transparent;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
  .offMember{display: inline-block;background: #dc1818;color: #fff;font-size: 0.52vw;padding: 0 0.4vw;line-height: 1.04vw;margin-left: 0.5vw;border-radius: 2px}
  /* 返回上级 */
.iconfont{font-size:1.5vw;color: #fff}
.minifont{font-size: 0.73vw;}
.backBtn{background: #e1dede;width: 3.2vw;height: 3.2vw;box-shadow:0px 20px 20px -10px rgba(0, 0, 0, 0.15);z-index: 10;text-align: center;line-height: 3.9vw;border-radius: 0.5vw;margin-bottom: 0.5vh}
#backBtn{color: rgba(155, 155, 155, 1);position: fixed;top: 50%;right: 2vw;z-index: 10;cursor: pointer;}
/* 返回上级 */
  @media screen and (max-width:1680px) {
    .title{font-size:22px;font-weight: 600}
    i{font-size: 18px}
    .minifont{font-size: 14px}
    .smallfont{font-size:16px}
}
@media screen and (max-width:1440px) {
    .title{font-size:20px;font-weight: 600}
    i{font-size: 16px}
    .minifont{font-size:12px}
    .smallfont{font-size:14px}
}
@media screen and (max-width:1280px) {
    .title{font-size:18px;font-weight: 600}
    i{font-size: 14px}
    .minifont{font-size:10px}
    .smallfont{font-size:12px}
    i{font-size: 12px}
}
</style>
<style>
.replishDrop .el-scrollbar .el-select-dropdown__wrap{max-height: 50vh!important}
.storeRunMachinedrop .el-scrollbar .el-select-dropdown__wrap{max-height: 30vh!important}
#replenishment .el-card__body{padding:2.3vh 3.6vh }
#replenishment .el-carousel__container{height: 150px!important}
#replenishment .el-card,#replenishment .el-card__body{height: 100%}
#replenishment .leftrep .el-input .el-input__inner{background: transparent;padding-right: 34px;border: 0}
#replenishment .leftrep .el-card__body{height: 100%}
#replenishment .searchinput.el-input .el-input__inner{border: 0;background: rgba(243,243,243,1);height: 2vw}
#replenishment .searchinput.el-input .el-input__prefix{width: 2vw;padding: 1%}
#replenishment .el-input--prefix .el-input__inner{padding-left: 2.5vw}
#replenishment .rightrep .el-form--inline .el-form-item__content{width:160px}
#replenishment .ventref .el-select .el-input .el-input__suffix-inner,#replenishment .storeref .el-select .el-input .el-input__suffix-inner{display: none!important}
#replenishment .storeref .el-icon-caret-right,#replenishment .ventref .el-icon-caret-right{width:100%;text-align: right}
#replenishment .ventref .el-select .el-input .el-input__inner,#replenishment .storeref .el-select .el-input .el-input__inner{width: 0px;padding:0px!important;height: 0px;line-height: 0px}
#replenishment .addborder .el-input__inner{border: 0;border-bottom: 1px solid #DCDFE6;border-radius: 0;padding: 0!important}
#replenishment .el-tabs__header{margin: 0}
#replenishment .el-select{position: absolute!important}
#replenishment .selectMember .el-select{position: relative!important}
/* #replenishment .el-tabs__item:hover{color: #303133}
#replenishment .el-tabs__item:hover{color: #303133} */

@media screen and (max-width: 1520px){
    #replenishment .el-carousel__container{height: 100px!important}
    
  }
@media screen and (max-width:1680px) {
    #replenishment .el-checkbox__label{font-size: 14px}
    #replenishment .el-checkbox__inner{width: 14px;height: 14px}
}
@media screen and (max-width:1440px) {
    #replenishment .el-checkbox__label{font-size: 12px}
    #replenishment .el-checkbox__inner{width: 12px;height: 12px}
}
@media screen and (max-width:1280px) {
    #replenishment .el-checkbox__label{font-size: 10px}
    #replenishment .el-checkbox__inner{width: 10px;height: 10px}
}
</style>

<template>
    <div id="replenishment">
        <div id="backBtn" class="minifont" @click="toBack"><div class="backBtn"><i class="el-icon-arrow-left iconfont"></i></div><div style="line-height:1vw">返回上级</div></div>
        <div class="flex-center" style="height:100%;padding:1%;padding-bottom:0">
            <div class="leftrep flex-1">
                <div class="left-top">
                    <el-card>
                        <div class="flex-center-Y" style="height:100%" >
                            <div class="flex-10 smallfont" style="height:100%">
                                <div style="height:40%">
                                    <span class="title" style="position:relative">
                                    {{storeData.storeName}} ({{storeData.storeCode}})
                                    </span>
                                </div>
                                <div style="height:30%">
                                    <!-- <i class="el-icon-location-outline"></i> -->
                                    <span>{{storeData.detailsAddress}}</span>
                                </div>
                                <div class="flex-center" style="height:30%">
                                    <div class="flex-2">门店状态: {{storeData.storeStatus=='1' ? '营业中' : '休息中'}}</div>
                                    <div class="flex-1">机器:{{storeData.vendCount || 0}}台</div>
                                </div>
                            </div>
                            <div class="flex-1 storeref">
                                <i class="el-icon-caret-right blue title" @click="showStoreList"></i>
                                <el-select v-model="storeCode" @change="changeStore" ref="storeref" filterable popper-class="replishDrop">
                                    <el-option
                                    v-for="(item,index) in storeList"
                                    :key="index"
                                    :label="item.storeName"
                                    :value="item.storeCode"
                                    :disabled="item.vendCount==0">
                                    <div style="color:#303133;border-bottom:1px solid rgba(0, 0, 0, 0.1);height:100%;padding-top:1vh">
                                        <div class="title" style="color:#303133">{{ item.storeName }} ({{item.storeCode}})</div>
                                        <div class="cardfont" style="color:#303133;">{{item.detailsAddress}}</div>
                                    </div>
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                    </el-card>
                </div>
                <div class="left-bottom">
                    <el-card>
                        <div class="flex-center" style="padding-bottom:2.3vh">
                            <div class="flex-10">
                               <span class="title" style="position:relative">
                                   {{selectVentName}}
                                </span>
                            </div>
                            <div class="flex-1 ventref" style="position:relative">
                                <i class="el-icon-caret-right blue title" @click="showVentList"></i>
                                <el-select v-model="selectVentCode" @change="changeMachine"  ref="ventref" filterable  popper-class="storeRunMachinedrop">
                                    <el-option
                                    v-for="item in ventList"
                                    :key="item.machineCode"
                                    :label="item.machineName"
                                    :value="item.machineCode">
                                    <div class="title" style="color:#303133;margin:0 0;line-height:5vh">{{item.machineName}}</div>
                                    </el-option>
                                    <!-- <i class="title el-icon-caret-bottom"></i> -->
                                </el-select>
                                
                            </div>
                        </div>
                        <div v-for="(item,key) in data" :key="key" class="row-box flex-center" :style="'height:'+0.9/data.length*100+'%'">
                            <div v-for="i in item" :key="i.trailsNo" :style="'background:'+i.color" class="col-box flex-1 minifont" @click="choose(i)">
                                <div class="num" :style="i.color=='#fff' ? 'color:#999' : 'color:#fff'">
                                    {{i.trailsNo}}
                                </div>
                            </div>
                        </div>
                    </el-card>
                </div>
            </div>
            <div class="centerrep flex-1">
                <el-card>
                    <div class="center-top">
                        <div style="height:100%;border-bottom: 4px solid rgb(216, 216, 216);">
                            <div class="title">补货配置</div>
                            <div class="font-bold flex-center-Y" style="padding:1vh 0" v-if="isShowRepair=='1'">
                                <el-tabs v-model="configType" type="card">
                                    <el-tab-pane label="时间配置" name="1"></el-tab-pane>
                                    <el-tab-pane label="智能补货配置" name="2"></el-tab-pane>
                                </el-tabs>
                                <!-- <div @click="selectType(1)">时间配置</div> 
                                <div @click="selectType(2)" style="padding-left:2vw">智能补货配置</div> -->
                            </div>
                            <div class="minifont" v-if="configType=='2' && isShowRepair=='1'">
                                补货单生成时间
                            </div>
                            <div v-if="configType=='2' && isShowRepair=='1'">
                                <div class="flex-center-Y smallfont">
                                    <el-tag
                                        size="mini"
                                        :key="tag"
                                        v-for="tag in dynamicTags"
                                        closable
                                        :disable-transitions="false"
                                        @close="handleClose(tag)">
                                        {{tag}}
                                    </el-tag>
                                    <el-time-picker
                                    size="mini"
                                    v-if="inputVisible"
                                    v-model="inputValue"
                                    value-format="HH:mm"
                                    format="HH:mm"
                                    placeholder="选择时间"
                                    @change="commitTime">
                                    </el-time-picker>
                                    <div v-else class="button-new-tag blue" size="mini" @click="showInput">+</div>

                                </div>
                            </div>
                            <div v-if="configType=='2' && isShowRepair=='1'" style="padding:1vh 0;padding-top:0">
                                <el-checkbox-group v-model="checkList" @change="commitConfig">
                                    <el-checkbox label="周一"></el-checkbox>
                                    <el-checkbox label="周二"></el-checkbox>
                                    <el-checkbox label="周三"></el-checkbox>
                                    <el-checkbox label="周四"></el-checkbox>
                                    <el-checkbox label="周五"></el-checkbox>
                                    <el-checkbox label="周六"></el-checkbox>
                                    <el-checkbox label="周日"></el-checkbox>
                                </el-checkbox-group>
                            </div>
                            <div v-if="configType=='2' && isShowRepair=='1'">
                                <div class="flex-center-Y minifont">
                                    <span>提货富余量:&nbsp;</span>
                                    <el-input-number v-model="margin" size="mini"  onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;" :min="0" @change="commitConfig"></el-input-number>
                                </div>
                            </div>
                            <div v-if="configType=='1' && isShowRepair=='1'">
                                <el-radio v-model="timeType" :disabled="selectGroup.repairInList && selectGroup.repairInList.length<=1" label="T">按天</el-radio>
                                <el-radio v-model="timeType" :disabled="selectGroup.repairInList && selectGroup.repairInList.length<=1" label="D">按周</el-radio>
                            </div>
                            <div v-if="configType=='1'" class="font-bold" :style="isShowRepair=='1' ? 'padding:1vh 0' : 'padding:1vh 0;padding-top:6vh'">货道分组</div>
                            <el-row v-if="configType=='1'" class="smallfont">
                                <el-col :span="6" v-for="(item,index) in list" :key="index" style="padding:1% 0;">
                                    <div v-if="!item.isSelect" class="club flex-center"  @click="select(index,item)" style="padding:1% 0;">
                                        <div class="flex-1">
                                            <div :style="'background:'+item.color+';width:16px;height:16px;float:right'"></div>
                                        </div>
                                        <div class="flex-1" >
                                            &nbsp;组{{index+1}}
                                        </div>
                                    </div>
                                    <div v-else class="club flex-center" :style="'background:'+item.color+';width:90%;padding:1% 0;border-radius:30px;text-align:center;float:left;color:#fff'" @click="select(index)">
                                        <div class="flex-1" >
                                            &nbsp;组{{index+1}}
                                        </div>
                                    </div>
                                </el-col>
                                <el-col :span="6"   v-if="typeId==2 || typeId==5" style="padding:1% 0;">
                                    <div class="club flex-center" style="padding:1% 0;">
                                        <div class="flex-1" style="text-align:right">
                                            <i class="el-icon-circle-plus success" @click="addGroup"></i>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                    <div class="center-bottom" @drop="drop()" @dragover.prevent>
                        <div style="position:relative;height:100%;padding-top:5%">
                            <div class="title">负责货道</div>
                            <div class="p-2 pl-0 pr-0 smallfont">
                                <span style="width:100%;display:inline-block" v-if="typeId==2 || typeId==5"><span style="width:10%;display:inline-block" v-for="(f,g) in selectGroup.channelidName" :key="g">{{f}}<span v-if="g < selectGroup.channelidName.length-1">,</span></span></span>
                                <span v-else>所有</span>
                            </div>
                            <div class="title">补货时间</div>
                            <div class="selectMember">
                                <div class="flex-center" v-for="(item,index) in selectGroup.repairInList" :key="index">
                                    <div class="flex-10">
                                        <div class="member" style="margin:0">
                                            <div class="handle">
                                                <i class="el-icon-delete info pointer" @click="removeMember(item,index)"></i>
                                            </div>
                                            <el-row class="flex-center-Y">
                                                <el-col :span="4">
                                                    <img src="../../assets/super/user3.png" alt="">    
                                                </el-col>
                                                <el-col :span="18" v-if="item.repairId" style="padding-left:4%">
                                                    <!-- <span v-if="item.showinput">姓名:<el-input v-model="item.nickName" @blur="saveName(item)" @keyup.enter.native="saveName(item)"></el-input></span> -->
                                                    <span :style="selectGroup.repairInList.length>1?'':'padding-bottom: 6%;'" class="flex-center-Y">{{item.nickName}}<span v-if="item.otherStatus=='1'" class="offMember">编外</span></span>
                                                    <div>{{item.username}}</div>
                                                    <div class="flex-1" v-if="selectGroup.repairInList.length>1 && timeType=='T'">
                                                        <el-time-select
                                                            @change="changeStart(item)"
                                                            placeholder="起始时间"
                                                            v-model="item.repairStartTime"
                                                            :picker-options="{
                                                            start: '00:00',
                                                            step: '00:15',
                                                            end: '24:00'
                                                            }">
                                                        </el-time-select>
                                                        <el-time-select
                                                            placeholder="结束时间"
                                                            v-model="item.repairEndTime"
                                                            :picker-options="{
                                                            start: '00:00',
                                                            step: '00:15',
                                                            end: '24:00',
                                                            minTime: item.repairStartTime
                                                            }">
                                                        </el-time-select>
                                                    </div>
                                                    <div class="flex-1" v-if="selectGroup.repairInList.length>1 && timeType=='D'">
                                                        <el-select multiple  v-model="item.repairDay" placeholder="补货时间" >
                                                            <el-option v-for="(item,i) in weekList" :key="i" :label="item.label" :value="item.value" :disabled="item.disabled"></el-option>
                                                        </el-select>
                                                    </div>
                                                </el-col>
                                            </el-row>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="center" v-if="ventList.length>0" style="position:absolute;bottom:1%;width:100%">
                                <el-button type="primary" @click="save">保存</el-button>
                            </div>
                        </div>
                    </div>
                </el-card>
            </div>
            <div class="rightrep flex-1">
                <el-card>
                    <div class="list">
                        <div class="" style="padding-top:0">
                            <div class="flex-center">
                                <div class="flex-1 title">
                                    补货员列表
                                </div>
                            </div>
                            <div class="pt-2">
                                <el-input class="searchinput" v-model="searchValue" @keyup.enter.native="search" @input="search" onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;">
                                    <img style="width:100%" slot="prefix" src="../../assets/super/search.png" alt="">
                                </el-input>
                            </div>
                        </div>
                        <div class=" font-bold small-padding">补货员 
                            <!-- <span class="blue fr smallfont" @click="add">添加</span> -->
                        </div>
                        <transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
                            <div class="flex-center"   v-if="showadd">
                                <div class="flex-10">
                                    <div class="member" style="margin:0!important">
                                        <el-row class="flex-center-Y">
                                            <el-col :span="4">
                                                <img src="../../assets/super/user3.png" alt="">    
                                            </el-col>
                                            <el-col :span="14"  style="padding-left:6%">
                                                <div class="addborder">
                                                    <div class="flex-center-Y"><span class="flex-2"> 姓名:</span><span class="flex-3"><el-input maxlength="10" v-model="form.nickName"  size="mini"></el-input></span><span class="flex-2"></span> </div>
                                                    <div class="flex-center-Y"><span class="flex-2"> 手机:</span><span class="flex-3"><el-input v-model="form.username"  size="mini" onKeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))"></el-input></span><span class="flex-2"></span> </div>
                                                </div>
                                            </el-col>
                                            <el-col :span="6" style="text-align:right">
                                                <i class="el-icon-circle-check" style="color:#67C23A;cursor:pointer"  @click="addReplenishment"></i>
                                                <i class="el-icon-remove-outline" style="color:#909399;cursor:pointer"  @click="cancel"></i>
                                            </el-col>
                                        </el-row>
                                    </div>
                                </div>
                            </div>
                        </transition>
                        <div class="p-2 pl-0 pr-0" id="innerlist">
                            <div class="flex-center" draggable="true" @dragstart="dragstart(item,index)" v-for="(item,index) in memberList" :key="index">
                                <div class="flex-10">
                                    <div class="member">
                                        <el-row class="flex-center-Y">
                                            <el-col :span="4">
                                                <img src="../../assets/super/user3.png" alt="">    
                                            </el-col>
                                            <el-col :span="20" v-if="item.repairId" style="padding-left:6%">
                                                <div v-show="item.showinput" class="flex-center-Y"><span class="flex-2"> 姓名:</span><span class="flex-3"><el-input maxlength="10" v-model="item.nickName" @blur="saveName(item)" @keyup.enter.native="saveName(item)" :ref="'input'+index"></el-input></span><span class="flex-2"></span> </div>
                                                <div class="flex-center-Y" v-show="!item.showinput" style="padding-bottom:6%" @dblclick="edit(item,index)">姓名:{{item.nickName}} <span v-if="item.otherStatus=='1'" class="offMember">编外</span></div>
                                                <div>手机:{{item.username}}</div>
                                            </el-col>
                                            <!-- <el-col :span="6" style="text-align:right">
                                                <i class="el-icon-delete info pointer" @click="del(item)"></i>
                                            </el-col> -->
                                        </el-row>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <!-- <div style="border-top:4px solid #D8D8D8;margin:2% 0"></div>
                        <div style="margin-top:0" class="font-bold small-padding">编外补货员 
                            </div>
                        <div class="p-2 pl-0 pr-0" id="innerlist-out">
                        </div> -->
                    </div>
                </el-card>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            weekList:[
                {label:"周一",value:'1'},
                {label:"周二",value:'2'},
                {label:"周三",value:'3'},
                {label:"周四",value:'4'},
                {label:"周五",value:'5'},
                {label:"周六",value:'6'},
                {label:"周日",value:'0'},
            ],
            storeList:[],
            storeData:{},
            storeCode:"",//当前机器编号
            selectMmber:"",//开始拖拽时选中的member
            cantotime:true,
            repairManList:[],
            showadd:false,
            typeId:"",
            timeType:"T",
            trailsType:"",
            machineCode:"",
            showList:true,
            form:{name:"",phone:""},
            addVisible:false,
            line:[],
            radio:"1",
            selectId:"",//选中的分组
            selectGroup:"",
            searchValue:"",//搜索
            orderHight:0,
            ventList:[],
            selectVent:"",
            selectVentName:"",
            selectVentCode:"",
            data:[
                // [
                //     {trailsNo:"A01",trailsNum:1},
                //     {trailsNo: "A02", trailsNum: 2},
                //     {trailsNo: "A03", trailsNum: 3},
                //     {trailsNo: "A04", trailsNum: 4},
                //     {trailsNo: "A05", trailsNum: 5},
                //     {trailsNo: "A06", trailsNum: 6},
                //     {trailsNo: "A07", trailsNum: 7},
                //     {trailsNo: "A08", trailsNum: 8}
                    
                // ],
                // [
                //     {trailsNo: "B01", trailsNum: 9},
                //     {trailsNo: "B02", trailsNum: 10},
                //     {trailsNo: "B03", trailsNum: 11},
                //     {trailsNo: "B04", trailsNum: 12},
                //     {trailsNo: "B05", trailsNum: 13},
                //     {trailsNo: "B06", trailsNum: 14},
                //     {trailsNo: "B07", trailsNum: 15},
                //     {trailsNo: "B08", trailsNum: 16}
                // ],
                // [
                //     {trailsNo: "C01", trailsNum: 17},
                //     {trailsNo: "C02", trailsNum: 18},
                //     {trailsNo: "C03", trailsNum: 19},
                //     {trailsNo: "C04", trailsNum: 20},
                //     {trailsNo: "C05", trailsNum: 21},
                //     {trailsNo: "C06", trailsNum: 22},
                //     {trailsNo: "C07", trailsNum: 23},
                //     {trailsNo: "C08", trailsNum: 24},
                // ]
            ],
            memberList:[
                {id:"1",name:"张一",phone:"13854784458",showinput:false},
                {id:"2",name:"张二",phone:"13854784458",showinput:false},
                {id:"3",name:"张三",phone:"13854784458",showinput:false},
                {id:"4",name:"张四",phone:"13854784458",showinput:false},
                {id:"5",name:"张五",phone:"13854784458",showinput:false},
                {id:"6",name:"张六",phone:"13854784458",showinput:false},
                {id:"7",name:"张七",phone:"13854784458",showinput:false},
                {id:"8",name:"张八",phone:"13854784458",showinput:false},
                {id:"9",name:"张九",phone:"13854784458",showinput:false}

            ],
            list:[
                // {   
                //     id:"1",
                //     channelidList:[1,2,3,4,5,6,7,8],
                //     repairInList:[
                //         {id:"1",name:"张三",phone:"13854784458"},
                //         {id:"2",name:"张三",phone:"13854784458"}
                //     ]
                //     },
                // {   
                //     id:"2",
                //     channelidList:[9,10,11,12,13,14,15],
                //     repairInList:[
                //         {id:"3",name:"张三",phone:"13854784458"},
                //     ]
                //     },
            ],
            colorList:["#FF7875","#FF7A45","#FFA940","#FFEC3D","#BAE637","#36CFC9","#40A9FF","#597EF7","#9254DE","#F759AB","#FFF1F0","#FFD8BF","#FFE7BA","#FFFFB8",
                        "#F4FFB8","#B5F5EC","#BAE7FF","#D6E4FF","#EFDBFF","#FFD6E7"
            ],
            configType:"1",
            checkList:[],
            dynamicTags: [],
            inputVisible: false,
            inputValue: '',
            margin:"",
            replentId:"",
            isShowRepair:this.$route.params.isShowRepair//是否显示补货配置栏
        }
    },
    created(){
        document.getElementsByTagName("body")[0].style.height="100%";
        document.getElementsByTagName("body")[0].style.color="#333333"
        document.getElementsByTagName("html")[0].style.height="100%";
        document.getElementsByTagName("body")[0].style.minWidth="1260px";
        document.getElementsByTagName("body")[0].style.overflow="auto";
        this.orderHight = document.body.clientHeight
        // this.$nextTick(_ => {
        //         document.getElementById('replenishment').style.height = this.orderHight*0.9 + 'px'
        //         })
        // this.api({
        //         url: "/repair/vendInfoList",
        //         method: "post",
        //         data: {
        //                 storeCode:this.$route.params.storeCode
        //                 }
        //     })
        //         .then(data => {
        //            this.ventList=data
        //            this.getList()
        //            this.canToTime()
        //         })
        this.getStoreList()
        
    },
    mounted(){
        this.orderHight = document.body.clientHeight
        // console.log(this.orderHight)
    },
    computed: {
        ...mapGetters([
            'userId','userName'
        ])
    },
    methods: {
        // selectWeek(v){
        //     for(let i in this.weekList){
        //         for(let key in v){
        //         if(v[key]==this.weekList[i].value){
        //             this.weekList[i].disabled=true
        //         }
        //     }
        //     }
        // },
        isHasRepeatTime(data) {//判断补货员补货时间段是否重合
            var startTimeArr = [];
            var endTimeArr = [];
            (data || []).map(function(item) {
                startTimeArr.push(item.StartTime);
                endTimeArr.push(item.EndTime);
            });
            var allStartTime = startTimeArr.sort();
            var allEndTime = endTimeArr.sort();
            var result = 0;
            for(var k=1;k<allStartTime.length;k++){
                if (allStartTime[k] <= allEndTime[k-1]){
                    result+=1;
                }
            }
            return result>0;
        },
        changeStart(item){
        },
        toBack(){//返回上级
            this.$router.push({path:'/operation/'})
            },
        selectType(type){
            this.configType=type
        },
        showInput() {
            this.inputVisible = true;
        },
        handleClose(tag) {
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            this.commitConfig()
        },
        commitTime(){
            let inputValue = this.inputValue;
            if (inputValue) {
            this.dynamicTags.push(inputValue);
            }
            this.inputVisible = false;
            this.inputValue = '';
            this.commitConfig()
        },
        getConfigData(){
            this.api({
                url: "/inventory/showIntellignetReplent",
                method: "post",
                data: {
                    machineCode: this.selectVentCode
                }
            })
                .then(data => {
                   this.replentId=data.replentId
                   let data1=data.gmtWeekDetails
                   for(let i in data1){
                       if(data1[i]=='1'){
                           data1[i]='周一'
                       }else if(data1[i]=='2'){
                           data1[i]='周二'
                       }else if(data1[i]=='3'){
                           data1[i]='周三'
                       }else if(data1[i]=='4'){
                           data1[i]='周四'
                       }else if(data1[i]=='5'){
                           data1[i]='周五'
                       }else if(data1[i]=='6'){
                           data1[i]='周六'
                       }else if(data1[i]=='0'){
                           data1[i]='周日'
                       }
                   }
                   this.checkList=data1
                   this.margin=data.margin
                   this.replentId=data.replentId
                   this.dynamicTags=data.gmtGenerateDetails
                })
                .catch(e => {});
        },
        commitConfig(){
            // console.log(this.dynamicTags,this.checkList,this.margin)
            let gmtWeek=''
            let gmtGenerate=''
            for(let i in this.checkList){
               if(this.checkList[i]=='周一'){
                   this.checkList[i]='1'
               }else if(this.checkList[i]=='周二'){
                   this.checkList[i]='2'
               }else if(this.checkList[i]=='周三'){
                   this.checkList[i]='3'
               }else if(this.checkList[i]=='周四'){
                   this.checkList[i]='4'
               }else if(this.checkList[i]=='周五'){
                   this.checkList[i]='5'
               }else if(this.checkList[i]=='周六'){
                   this.checkList[i]='6'
               }else if(this.checkList[i]=='周日'){
                   this.checkList[i]='0'
               }
            }
            for(let i in this.checkList){
                if(i==0){
                    gmtWeek+=this.checkList[i]
                }else{
                    gmtWeek+=','+this.checkList[i]
                }
            }
            for(let i in this.dynamicTags){
                if(i==0){
                    gmtGenerate+=this.dynamicTags[i]
                }else{
                    gmtGenerate+=','+this.dynamicTags[i]
                }
            }
            this.api({
                url: "/inventory/addIntellignetReplent",
                method: "post",
                data: {
                    machineCode: this.selectVentCode,
                    margin: this.margin,
                    gmtWeek:gmtWeek,
                    gmtGenerate:gmtGenerate,
                    replentId:this.replentId

                }
            })
                .then(data => {
                    this.getConfigData()
                })
                .catch(e => {});
        },
        showStoreList(){//select组件聚焦
            this.$nextTick(function () {
            this.$refs.storeref.focus()
            })
        },
        showVentList(){//select组件聚焦
            this.$nextTick(function () {
            this.$refs.ventref.focus()
            })
        },
        getStoreList(){//获取store列表
            this.api({
                url: "/store/storeListRank",
                method: "post",
                data: {
                    manageId: this.userId
                }
            })
                .then(data => {
                    this.storeList = data.storeListRank;
                    this.storeData.storeCode=this.$route.params.storeCode
                    this.storeCode=this.$route.params.storeCode
                    for(let i in this.storeList){
                        if(this.storeList[i].storeCode==this.storeData.storeCode){
                            this.storeData=this.storeList[i]
                        }
                    }
                    // console.log(this.storeList,this.storeData)
                    // this.getMachines()
                    this.getVentList()//获取机器列表
                })
                .catch(e => {});
        },
        getVentList(){
            this.api({
                url: "/repair/vendInfoList",
                method: "post",
                data: {
                        storeCode:this.storeData.storeCode
                        }
            })
                .then(data => {
                   this.ventList=data
                   if(this.ventList[0]){
                        this.selectVentName=this.ventList[0].machineName
                        this.selectVentCode=this.ventList[0].machineCode
                        this.trailsType=this.ventList[0].trailsType
                         this.getInfo()
                   }else{
                        this.selectVentName=""
                        this.trailsType=""
                   }
                //    this.getList()
                   this.canToTime()
                })
        },
        changeStore(){
            for(let i in this.storeList){
                if(this.storeList[i].storeCode==this.storeCode){
                    this.storeData=this.storeList[i]
            }
            }
            this.getVentList()
            // this.getMachines()
        },
        dragstart (item,index) {//选中补货员并拖动
            // let selectId=this.selectId
            // this.list[selectId].repairInList.push(item)
            this.selectMmber=item
            this.selectIndex=index
            
            
    },
    drop(){//拖动结束,为分组添加补货员
        if(this.selectMmber){
        this.memberList.splice(this.selectIndex,1)
        this.selectGroup.repairInList.push(this.selectMmber)
        let num=0
            for(let i in this.list){
                if(this.list[i].repairInList.length>1){
                    num+=1
                }
            }
            if(num==0){
                this.cantotime=true
            }else{
                this.cantotime=false
            }
        this.selectMmber=""
        }
    },
        differColor(){//给货道加颜色
            if(this.typeId==2 || this.typeId==5){
                console.log(11111)
                for(let i  in this.list){//给相应货道加相应颜色
                for(let o in this.list[i].channelidList){
                    for(let key in this.data){
                        for(let r in this.data[key]){
                            if(this.list[i].channelidList[o]==this.data[key][r].trailsNum){
                                this.data[key][r].color=this.list[i].color
                            }
                        }
                    }
                }
            }
            for(let i in this.data){//如果一个货道没有补货员,就是白色的
                for(let key in this.data[i]){
                    let num=0
                    for(let a in this.list){
                        for(let b in this.list[a].channelidList){
                            if(this.list[a].channelidList[b]==this.data[i][key].trailsNum){
                                num+=1
                            }
                        }
                    }
                    if(num==0){
                        this.data[i][key].color="#fff"
                    }
                }
            }
            }else{//如果不用分组,默认所有格子都是一个颜色
            console.log(22222)
                    for(let key in this.data){
                        for(let r in this.data[key]){
                                this.data[key][r].color=this.list[0].color
                        }
                    }
            }
            
        },
        choose(i){
            let index=this.selectId
            if(i.color!=="#fff" && i.color!==this.list[index].color){
                this.$message({
                    type: 'error',
                    message: '该货道已有其他补货员补货,请先取消哦~!'
                });
                return;
            }
            if(this.radio=="1"){
                let indexof=-1
                if(this.list[index].channelidList.indexOf(i.trailsNum.toString())!==-1){
                    indexof=this.list[index].channelidList.indexOf(i.trailsNum.toString())
                }
                if(this.list[index].channelidList.indexOf(i.trailsNum)!==-1){
                    indexof=this.list[index].channelidList.indexOf(i.trailsNum)
                }
                if(indexof!==-1){
                    this.list[index].channelidList.splice(indexof,1)
                    for(let i in this.list){
                        this.list[i].channelidName=JSON.parse(JSON.stringify(this.list[i].channelidList))
                        for(let key in this.list[i].channelidList){
                            for(let a in this.data){
                                for(let b in this.data[a]){
                                    if(this.list[i].channelidList[key]==this.data[a][b].trailsNum){
                                        this.list[i].channelidName[key]=this.data[a][b].trailsNo
                                    }
                                }
                            }
                        }
                    }
                    let listi=JSON.parse(JSON.stringify(this.list))//不写不会渲染??
                    this.list=listi
                    this.selectGroup=this.list[index]
                }else{
                    this.list[index].channelidList.push(i.trailsNum)
                    for(let i in this.list){
                        this.list[i].channelidName=JSON.parse(JSON.stringify(this.list[i].channelidList))
                        for(let key in this.list[i].channelidList){
                            for(let a in this.data){
                                for(let b in this.data[a]){
                                    if(this.list[i].channelidList[key]==this.data[a][b].trailsNum){
                                        this.list[i].channelidName[key]=this.data[a][b].trailsNo
                                    }
                                }
                            }
                        }
                    }
                    let listi=JSON.parse(JSON.stringify(this.list))//不写不会渲染??
                    this.list=listi
                    this.selectGroup=this.list[index]
                }
                // if(this.list[index].channelidList.indexOf(i.trailsNum.toString())!==-1){
                //     indexof=this.list[index].channelidList.indexOf(i.trailsNum.toString())
                // }
                // if(this.list[index].channelidList.indexOf(i.trailsNum)!==-1){
                //     indexof=this.list[index].channelidList.indexOf(i.trailsNum)
                // }
                // if(indexof!==-1){
                //     this.list[index].channelidList.splice(indexof,1)
                //     let listi=JSON.parse(JSON.stringify(this.list))//不写不会渲染??
                //     this.list=listi
                // }else{
                //     this.list[index].channelidList.push(i.trailsNum)
                //     let listi=JSON.parse(JSON.stringify(this.list))//不写不会渲染??
                //     this.list=listi
                // }
            }else if(this.radio=="2"){
                if(this.line.length==2){
                    this.line=[]
                    this.line.push(i.trailsNum)
                    this.list[index].channelidList=[]
                    this.list[index].channelidList.push(i.trailsNum)
                    let listi=JSON.parse(JSON.stringify(this.list))//不写不会渲染??
                    this.list=listi
                    this.selectGroup=this.list[index]
                }else if(this.line.length==0){
                    this.list[index].channelidList=[]
                    this.list[index].channelidList.push(i.trailsNum)
                    this.line.push(i.trailsNum)
                    let listi=JSON.parse(JSON.stringify(this.list))//不写不会渲染??
                    this.list=listi
                    this.selectGroup=this.list[index]
                    
                }else if(this.line.length==1){//知道头尾,把中间连起来
                    this.list[index].channelidList=[]
                    this.line.push(i.trailsNum)
                    let max,min
                    if(this.line[0]>this.line[1]){
                         min=this.line[1]
                         max=this.line[0]
                    }else{
                         min=this.line[0]
                         max=this.line[1]
                    }
                    for(var i=min;i<=max;i++){
                        this.list[index].channelidList.push(i)
                    }

                    let listi=JSON.parse(JSON.stringify(this.list))//不写不会渲染??
                    this.list=listi
                    this.selectGroup=this.list[index]
                    
                }
                // console.log(this.line)
            }
            this.differColor()
        },
        addGroup(){//添加分组
            // let r, g, b;
			// 	r = Math.floor(Math.random() * 256);
			// 	g = Math.floor(Math.random() * 256);
			// 	b = Math.floor(Math.random() * 256);
            // let color="rgb(" +r + ',' +g+ ',' +b+")"
            // let i={
            //         color:color,
            //         channelidList:[],
            //         repairInList:[]
            //         }
            // this.list.push(i)
            let color
            for(let key in this.colorList){
                let num=0
                for(let i  in this.list){
                    if(this.colorList[key]==this.list[i].color){
                        // console.log(key)
                        num+=1
                    }
                    }
                if(num==0){
                    color=this.colorList[key]
                    let i={
                            color:color,
                            channelidList:[],
                            repairInList:[]
                            }
                    this.list.push(i)
                    return;
                } 
            }
            
            
        },
        // moveMember(item,index){//为分组添加成员
        //     let selectId=this.selectId
        //     this.list[selectId].repairInList.push(item)
        //     this.memberList.splice(index,1)
        //     let num=0
        //     for(let i in this.list){
        //         if(this.list[i].repairInList.length>1){
        //             num+=1
        //         }
        //     }
        //     if(num==0){
        //         this.cantotime=true
        //     }else{
        //         this.cantotime=false
        //     }

        // },
        removeMember(i,key){//为分组移去成员
            this.memberList.push(i)
            this.selectGroup.repairInList.splice(key,1)
            if(this.typeId==2 || this.typeId==5){
            for(let i in this.list){
                if(this.list[i].repairInList.length==0){
                    this.list.splice(i,1)
                    this.selectGroup=this.list[0]
                }
            }
            }
            let num=0
            for(let i in this.list){
                if(this.list[i].repairInList.length>1){
                    num+=1
                }
            }
            console.log(num)
            if(num==0){
                this.cantotime=true
            }else{
                this.cantotime=false
            }
            this.differColor()
        },
        changeMachine(v){
            // this.machineCode=this.ventList[v].machineCode
            // this.trailsType=this.ventList[v].trailsType
            // this.getInfo()
            // this.getList()
            // this.$nextTick(_ => {
            //     console.log(this.orderHight,document.getElementById('carousel'))
            //     // document.getElementById('carousel').style.height = this.orderHight*0.2 + 'px'//走马灯高度设为屏幕高度的40%
            //     })
             for(let i in this.ventList){
                if(this.selectVentCode==this.ventList[i].machineCode){
                    this.selectVent=this.ventList[i]
                    this.selectVentName=this.selectVent.machineName
                    this.selectVentCode=this.selectVent.machineCode
                    this.trailsType=this.selectVent.trailsType
                    this.getInfo()
                }
            }
        },
        select(index,item){
            this.selectId=index
            this.selectGroup=this.list[index]
            for(let i in this.list){
                this.list[i].isSelect=false
            }
            item.isSelect=true
        },
        search(){
            let repairManList=[]
            for(let i in this.list){
                for(let key in this.list[i].repairInList){
                    this.repairManList.push(this.list[i].repairInList[key].repairId)
                }
            }
            // for(let i in this.repairManList){
            //     if(i==0){
            //         repairManList+=this.repairManList[i]
            //     }else{
            //         repairManList+=','+this.repairManList[i]
            //     }
            // }
            this.api({
                        url: "/repair/repairInfoSearch",
                        method: "post",
                        data: {
                                searchName:this.searchValue,
                                manageId:this.userId,
                                repairManList:repairManList
                                }
                    })
                        .then(data => {
                            this.memberList=data
                            this.canToTime()
                        })
        },
        save(){//保存补货员
            let data=JSON.parse(JSON.stringify(this.list))
            //判断时间是否重合
            for(let i in data){
                let timeData=[]
                for(let key in data[i].repairInList){
                    let timePara={}
                    timePara.StartTime=data[i].repairInList[key].repairStartTime
                    timePara.EndTime=data[i].repairInList[key].repairEndTime
                    timeData.push(timePara)
                }
                if(this.isHasRepeatTime(timeData)){
                    this.$message({
                                type: 'warning',
                                message: '同一分组不同补货员补货时间段不可重合哦~'
                            });
                    return;
                }
            }
            //判断时间是否重合
            let commitdata=[]
            for(let i in data){
                for(let key in data[i].repairInList){
                    // console.log(data[i].repairInList[key])
                    let member={}
                    let channelids=''
                    if(this.typeId!==2 && this.typeId!==5){
                        data[i].channelidList=[]
                        for(let c in this.data){
                            for(let d in this.data[c]){
                                data[i].channelidList.push(this.data[c][d].trailsNum)
                            }
                        }
                    }
                    for(let a in data[i].channelidList){
                        if(a==0){
                            channelids+=data[i].channelidList[a]
                        }else{
                            channelids+=','+data[i].channelidList[a]
                        }
                    }
                    let repairDay=''
                    for(let a in data[i].repairInList[key].repairDay){
                        if(a==0){
                            repairDay+=data[i].repairInList[key].repairDay[a]
                        }else{
                            repairDay+=','+data[i].repairInList[key].repairDay[a]
                        }
                    }
                    let timeType=this.timeType
                    member.repairId=data[i].repairInList[key].repairId
                    member.machineCode=this.selectVentCode
                    if(this.typeId!==2 && this.typeId!==5){
                        member.channelids='ALL'
                    }else{
                        member.channelids=channelids
                    }
                    member.repairType=timeType
                    if(data[i].repairInList[key].repairStartTime!==undefined){
                        member.repairStartTime=data[i].repairInList[key].repairStartTime
                    }else{
                        member.repairStartTime=""
                    }
                    if(data[i].repairInList[key].repairEndTime!==undefined){
                        member.repairEndTime=data[i].repairInList[key].repairEndTime
                    }else{
                       member.repairEndTime=""
                    }
                    if(data[i].repairInList[key].repairDay!==undefined){
                        member.repairDay=repairDay
                    }else{
                       member.repairDay=""
                    }
                    commitdata.push(member)
                }
            }
            if(commitdata.length==0){
                this.$message({
                                type: 'warning',
                                message: '请添加补货员!'
                            });
                return;

            }
            this.api({
                        url: "/repair/commitRepairInfo",
                        method: "post",
                        data: commitdata
                    })
                        .then(data => {
                            this.$message({
                                            type: 'success',
                                            message: '配置成功!'
                                        });
                            this.getInfo()
                            this.getList()
                            this.getmemberList()
                            this.canToTime()
                            this.showList=true
                        })
        },
        edit(item,index){
            item.showinput=true
            let memberListi=JSON.parse(JSON.stringify(this.memberList))//不写不会渲染??
            this.memberList=memberListi
            this.$nextTick(_ => {
                 this.$refs[`input${index}`][0].focus()
            })
        },
        saveName(item){
            this.api({
                        url: "/repair/updateRepairMan",
                        method: "post",
                        data: {
                            nickName:item.nickName,
                            repairId:item.repairId
                        }
                    })
                        .then(data => {
                            this.$message({
                                            type: 'success',
                                            message: '修改成功!'
                                        });
                            this.getmemberList()
                            this.canToTime()
                        })
            item.showinput=false
        },
        del(item){
            this.$confirm('此操作将删除所有门店中该补货员, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.api({
                        url: "/repair/checkDeleteStatus",
                        method: "post",
                        data: {
                                repairId:item.repairId,
                                }
                    })
                        .then(data => {
                            if(data.deleteFlag){
                                this.api({
                                    url: "/repair/deleteRepairMan",
                                    method: "post",
                                    data: {
                                            repairId:item.repairId,
                                            username:item.username
                                            }
                                })
                                    .then(data => {
                                        this.$message({
                                            type: 'success',
                                            message: '删除成功!'
                                        });
                                        this.getmemberList()
                                        this.canToTime()
                                    })
                            }else{
                                this.$confirm('该补货员尚有关联的机器, 是否确认删除?', '提示', {
                                    confirmButtonText: '确定',
                                    cancelButtonText: '取消',
                                    type: 'warning'
                                    }).then(() => {
                                        this.api({
                                            url: "/repair/deleteRepairMan",
                                            method: "post",
                                            data: {
                                                    repairId:item.repairId,
                                                    username:item.username
                                                    }
                                        })
                                            .then(data => {
                                                this.$message({
                                                    type: 'success',
                                                    message: '删除成功!'
                                                });
                                                this.getmemberList()
                                                this.canToTime()
                                            })
                                    }).catch(() => {       
                                    });
                            }
                            
                        })
                    
                
                }).catch(() => {
                         
                });
        },
        add(){
            this.showadd=true
            // this.addVisible=true
            // this.memberList.push(
            //     {nickName:"",username:"",showinput:false}
            // )
        },
        cancel(){
            this.showadd=false
        },
        addReplenishment(){//添加补货员确认
           if(!this.form.nickName){
               this.$message({
                    type: 'error',
                    message: '请输入补货员姓名 !'
                });  
                return;
           }
           if(!this.form.username){
               this.$message({
                    type: 'error',
                    message: '请输入联系方式 !'
                });  
                return;
           }
           this.api({
                url: "/repair/addRepairMan",
                method: "post",
                data: {
                        username:this.form.username,
                        nickname:this.form.nickName,
                        manageId:this.userId
                        }
            })
                .then(data => {
                    if(data.returnMsg===undefined){
                        this.$message({
                            type: 'success',
                            message: '添加成功 !'
                        });  
                        this.addVisible = false
                        this.getmemberList()
                        this.canToTime()
                        this.showadd=false
                    }else{
                        console.log(data)
                        this.$message({
                        type: 'warning',
                        message: data.returnMsg
                    });  
                    }
                    
                })
           
        },
        setTime(){
            this.showList=false
            // this.showList=!this.showList
        },
        setMember(){
            this.showList=true
        },
        canToTime(){
            this.api({
                url: "/repair/findRepairIsToo",
                method: "post",
                data: {
                        machineCode:this.machineCode
                        }
            })
                .then(data => {
                   this.cantotime=!data.sameFlag
                })
        },
        getInfo(){
            this.api({
                url: "/repair/machineInfo",
                method: "post",
                data: {
                        machineCode:this.selectVentCode,
                        trailsType:this.trailsType
                        }
            })
                .then(data => {
                   this.data=data.trailsLists
                   this.typeId=data.machineType.typeId
                   this.getList()
                   this.cantotime=!data.typeFlag
                   this.canToTime()
                   this.getConfigData()
                })
        },
        getList(){
            this.api({
                url: "/repair/repairInfoList",
                method: "post",
                data: {
                        machineCode:this.selectVentCode,
                        manageId:this.userId
                        }
            })
                .then(data => {
                    this.memberList=data.repairOutList
                    this.list=data.repairChannelid
                    
                    if(data.repairChannelid.length==0){
                        this.list[0]={
                            channelidList:[],
                            channelids:"ALL",
                            repairInList:[]
                        }
                        for(let i in this.data){
                            for(let key in this.data[i]){
                                this.list[0].channelidList.push(this.data[i][key].trailsNum)
                        }
                    }
                    }
                    //将货道id改成货道编号
                    for(let i in this.list){
                        this.list[i].channelidName=JSON.parse(JSON.stringify(this.list[i].channelidList))
                        for(let key in this.list[i].channelidList){
                            for(let a in this.data){
                                for(let b in this.data[a]){
                                    if(this.list[i].channelidList[key]==this.data[a][b].trailsNum){
                                        this.list[i].channelidName[key]=this.data[a][b].trailsNo
                                    }
                                }
                            }
                        }
                    }
                    for(let i  in this.list){
                        // let r, g, b;
                        //     r = Math.floor(Math.random() * 256);
                        //     g = Math.floor(Math.random() * 256);
                        //     b = Math.floor(Math.random() * 256);
                        // let color="rgb(" +r + ',' +g+ ',' +b+")"
                        // this.list[i].color=color
                        this.list[i].color=this.colorList[i]
                        //把周转成[]listl
                        for(let key in this.list[i].repairInList){
                            if(this.list[i].repairInList[key].repairDay){
                                 this.list[i].repairInList[key].repairDay=this.list[i].repairInList[key].repairDay.split(',')
                            }
                           
                        }
                    }
                    // console.log(this.list)
                    this.differColor()
                    this.selectId=0
                    this.selectGroup=this.list[0]
                    if(this.list[0].repairInList[0]){
                        this.timeType=this.list[0].repairInList[0].repairType || 'T'
                    }
                    this.list[0].isSelect=true
                    this.canToTime()
                })
        },
        getmemberList(){
            this.api({
                url: "/repair/repairInfoList",
                method: "post",
                data: {
                        machineCode:this.machineCode,
                        // machineCode:"12018080100002",
                        manageId:this.userId
                        }
            })
                .then(data => {
                    this.memberList=data.repairOutList
                    this.canToTime()
                })
        },
    }

}
</script>

