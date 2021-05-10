<style scoped>
    #storeManagement{height: 90vh;padding:2.5vh 3vw}
    .el-card{height: 100%;padding: 4vh 3vw 1vh 3vw}
    #storeManagement .storeTop{height: 55%;border-bottom:1px solid rgba(151,151,151,1);padding-bottom: 4.5vh}
    #storeManagement .storeTop .topLeft{height: 100%;width: 40%;padding-top: 4vh;padding-left: 3vw;padding-right: 1.5vw;}
    #storeManagement .storeTop .topLeft .inner{position: relative;height: 100%;background-image: url('../../assets/operaion/manage-lg.png');background-size: 100% 100%}
    #storeManagement .storeTop .topLeft .inner div{color: #fff;position: absolute;top: 10%;left:45%;transform: translateX(-50%);}
    #storeManagement .storeTop .topRight .inner .el-card{border-radius:10px;padding: 2.7vh 2vw 2.7vh 2vw}
    #storeManagement .storeTop .topRight .inner .info{height: 11%}
    #storeManagement .storeTop .topRight .inner .info .bold{width: 20%}
    #storeManagement .storeTop .topRight .inner .info .right{width: 80%}
    #storeManagement .storeTop .topRight .inner .info .right .avator{width:3vw;height: 3vw;border:2px solid #F5A623;border-radius: 50%;overflow: hidden;}
    #storeManagement .storeTop .topRight{height: 100%;width: 60%}
    #storeManagement .storeTop .topRight .inner{padding-top: 2vh;height: 100%;padding-left: 1.5vw;padding-right: 3vw}
    #storeManagement .storeBottom{height: 45%}
    #storeManagement .storeBottom .bottomTop{height: 75%;padding: 4vh 1vw 0 1vw; }
    #storeManagement .storeBottom .bottomTop .store{height: 100%;width: 33.33333333%;position: relative;}
    #storeManagement .storeBottom .bottomTop .store .newBack{height: 100%;width: 66.6666666667%;position: relative;background-image: url('../../assets/operaion/manage-new.png');background-size: 100% 100%}
    #storeManagement .storeBottom .bottomTop .store .storeBack{position: absolute;top:0;height: 100%;width: 66.6666666667%;background-size: 100% 100%}
    #storeManagement .storeBottom .bottomBottom{height: 25%;position: relative;}
    .noSelectBack{background-image: url('../../assets/operaion/manage.png')}
    .selectBack{background-image: url('../../assets/operaion/manage-select.png')}
    .selectBack div{top: 11%!important}
    .W-50{width: 50%}
    .H-100{height: 100%}
    .right{right: 0}
    .blue {color: #4A90E2!important;cursor: pointer;padding: 0px 0px!important}
    .text-right{text-align: right}
    .text-center{text-align: center}
    .largefont{font-size: 1.25vw}
    .lgfont{font-size: 1.25vw}
    .normalfont{font-size: 1.146vw}
    .bigfont{font-size:1.04vw}
    .smallfont{font-size: 0.9375vw;}
    .center{left: 50%;transform: translateX(-50%)}
    .right{right: 0}
    .bold{font-weight: 600}
    .mb-2{margin-bottom: 2vh}
    .mb-4{margin-bottom: 4vh}
    .align-right{text-align: right}
.addBtn{padding: 1.25vh 1.3vh;font-size: 0.9375vw;position: absolute;right: 0;top: 0;background-color: #286EFF;width: 7vw;height: 4.63vh;}
.storeManageDrop .el-select-dropdown__list .el-select-dropdown__item{height: 8vh!important;line-height:3vh;padding: 0 3.6vh}
.storeManageDrop .el-select-dropdown__list{padding-top: 1.8vh}
.storeManageWareDrop .el-select-dropdown__list .el-select-dropdown__item{height: 5vh!important;line-height:5vh;padding: 0 3.6vh}
.storeManageWareDrop1 .el-select-dropdown__list .el-select-dropdown__item{height: 8vh!important;line-height:3.5vh;padding: 0 0.4vw}
.storeManageWareDrop .el-select-dropdown__list{padding-top: 1.8vh}
.userManagedDialog{width: 28vw!important;height: 77vh!important;padding: 3.7vh 3vw;color: #333;position: relative}
.userManagedDialog .bottom{width: 100%;height: 5.5vh;justify-content: space-around;position: absolute;left: 0;bottom: 5vh}
.userManagedDialog .bottom .btn{cursor: pointer;width: 26%;height:100%;color: #286EFF;border: 1px solid #286EFF;text-align: center;line-height: 5.5vh}
.userManagedDialog .bottom .btn1{cursor: pointer;width: 26%;height:100%;color: #fff;background:#286EFF;text-align: center;line-height: 5.5vh}

</style>
<style>
    .operatorTableStyle{font-size: 0.94vw;color: #333}
    .operatorTableStyle th>.cell{font-weight: 600}
    .operatorCellStyle{font-size: 0.83vw;color: #333;height: 7.5vh;padding: 0!important}
    .storeManageDrop .el-scrollbar .el-select-dropdown__wrap{max-height: 50vh!important}
    .storeManageWareDrop .el-scrollbar .el-select-dropdown__wrap{max-height: 30vh!important}
    #storeManagement .el-dialog__header,#storeManagement .el-dialog__body,#storeManagement .el-dialog__footer{padding:0}
    #storeManagement .el-card__body{height: 100%;padding: 0}
    #storeManagement .el-input .el-input__inner{border:0px;background: transparent;}
    #storeManagement .el-input__inner{font-size: 1.04vw;padding: 0px}
    #storeManagement .userManagedDialog .el-input__inner{font-size: 0.9375vw;padding: 0px}
    #storeManagement .visual .el-select .el-input .el-input__inner{width: 0px;padding:0px!important;height: 0px;line-height: 0px}
    #storeManagement .userManagedDialog .el-select .el-input .el-input__inner{width: 100%;padding:0px!important;padding-left:0.4vw!important;height: 4vh;border: 1px solid #D8D8D8!important}
    #storeManagement .userManagedDialog .el-select,#storeManagement .userManagedDialog .el-cascader{width: 100%}
    #storeManagement .userManagedDialog .el-cascader .el-input .el-input__inner{width: 100%;padding:0px!important;padding-left:0.4vw!important;height: 4vh;border: 1px solid #D8D8D8!important}
    #storeManagement .userManagedDialog .el-input__icon{line-height: 0}
    #storeManagement .visual .el-select .el-input .el-input__suffix-inner{display: none!important}
    #storeManagement .el-cascader__label{padding-left: 0}
    
</style>
<template>
    <div id="storeManagement">
        <el-card  v-if="thumbType=='0'" class='visual'>
            <div class="storeTop flex">
                <div class="topLeft">
                    <div class="inner">
                        <div class="largefont">{{selectInfo.storeName}}</div>
                    </div>
                </div>
                <div class="topRight">
                    <div class="inner">
                        <el-card v-if="storeList.length==0">
                            <div class="title" style="height:90%;padding-top:5%;text-align:center;font-weight:bold;color:#999">
                                暂无门店
                                <div>
                                    <img style="width:25vh" src="../../assets/operaion/blank.png" alt="">
                                </div>
                            </div>
                        </el-card>
                        <el-card v-else>
                            <div class="info flex-center-Y">
                                <div class="largefont bold">门店信息</div>
                                <div class="bigfont right blue text-right"> <span @click="deleteStore">删除门店</span> </div>
                            </div>
                            <div class="info flex-center-Y" style="height:20%">
                                <div class="bigfont bold">店长</div>
                                <div class="right bigfont flex-center-Y">
                                    <div class="avator">
                                        <img v-if="!selectInfo.userPic" style="width:100%" src="../../assets/super/logo3.png" alt="">
                                        <img v-else style="width:100%" :src="selectInfo.userPic" alt="">
                                    </div>
                                    <div style="padding:0 4%">
                                        <div>{{selectInfo.nickname || '--'}}</div>
                                        <div>{{selectInfo.username || '--'}}</div>
                                    </div>
                                    <div style="width:1vw;height:1vw" class="blue">
                                        <img style="width:100%" src="../../assets/operaion/change.png" alt="" @click="showUser">
                                        <el-select v-model="selectInfo.storeManagerId" @change="changeUser" ref="userref" filterable no-match-text=" " popper-class="storeManageDrop">
                                            <el-option
                                            v-for="(item,index) in userList"
                                            :key="index"
                                            :label="item.nickname"
                                            :value="item.storeManagerId">
                                            <div class="flex-center-Y bigfont H-100">
                                                <div style="width:3vw;height:3vw;border: 2px solid #F5A623;border-radius: 50%;overflow: hidden;">
                                                    <img v-if="!item.userPic" style="width:100%" src="../../assets/super/logo3.png" alt="">
                                                    <img v-else style="width:100%" :src="item.userPic" alt="">
                                                </div>
                                                <div style="padding:0 4%">
                                                    <div>{{item.nickname}}</div>
                                                    <div>{{item.username}}</div>
                                                </div>
                                            </div>
                                            </el-option>
                                        </el-select>
                                    </div>
                                </div>
                            </div>
                            <div class="info flex-center-Y">
                                <div class="bigfont bold">门店名称</div>
                                <div class="right bigfont">
                                    <span v-show="!showName" @click="editName">{{selectInfo.storeName  || '--'}}</span>
                                    <el-input v-show="showName" ref="nameInput" :maxlength="10" v-model="selectInfo.storeName" @blur="commitName" @keyup.enter.native="commitName"></el-input>
                                </div>
                            </div>
                            <div class="info flex-center-Y">
                                <div class="bigfont bold">门店区域</div>
                                <div class="right bigfont">
                                    <span v-if="!showAdress" @click="showAdress=true">{{selectInfo.address || '--'}}</span>
                                    <el-cascader v-else :options="options" v-model="selectInfo.cascader" @change="handleAreaChange" class="flex-2" @visible-change="hidee"></el-cascader>
                                </div>
                            </div>
                            <div class="info flex-center-Y">
                                <div class="bigfont bold">详细地址</div>
                                <div class="right bigfont">
                                    <span v-show="!showDetailsAddress" @click="editDetailsAddress">{{selectInfo.detailsAddress  || '--'}}</span>
                                    <el-input v-show="showDetailsAddress" ref="detailsAddressInput" v-model="selectInfo.detailsAddress" @blur="commitDetailsAddress" @keyup.enter.native="commitDetailsAddress"></el-input>
                                </div>
                            </div>
                            <div class="info flex-center-Y">
                                <div class="bigfont bold">售货机数量</div>
                                <div class="right bigfont">
                                    <span>{{selectInfo.machineCount}}台</span> &nbsp; &nbsp;<span class="blue" @click="showBindMachine('1')">关联售货机</span>
                                </div>
                            </div>
                            <div class="info flex-center-Y">
                                <div class="bigfont bold">关联仓库</div>
                                <div class="right bigfont flex-center-Y">
                                    <el-select v-model="selectInfo.wareId" @change="changeWare" ref="wareref" filterable  no-match-text=" " popper-class="storeManageWareDrop">
                                        <el-option
                                        v-for="(item,index) in wareList"
                                        :key="index"
                                        :label="item.wareName"
                                        :value="item.wareId">
                                        <div class="bigfont">{{item.wareName}}</div>
                                        </el-option>
                                    </el-select>
                                    <div style="padding-right:4%">{{selectInfo.wareName  || '--'}}</div>
                                    <!-- <div style="width:1vw;height:1vw" class="blue">
                                        <img style="width:100%" src="../../assets/operaion/change.png" alt="" @click="showWare">
                                    </div> -->
                                </div>
                            </div>
                            <div class="info flex-center-Y">
                                <div class="bigfont bold">门店状态</div>
                                <div class="right bigfont">
                                    <el-select v-model="selectInfo.storeStatus" placeholder="请选择" ref="statusref" filterable @visible-change="changeStatus" popper-class="storeManageWareDrop">
                                        <el-option label="营业中" value="1">
                                            <div class="bigfont">营业中</div>
                                        </el-option>
                                        <el-option label="休息中" value="0">
                                            <div class="bigfont">休息中</div>
                                        </el-option>
                                    </el-select>
                                    <span>{{selectInfo.storeStatus==1 ? '营业中' : '休息中'}} </span><i class="blue el-icon-caret-bottom" @click="showStatus"></i>
                                    
                                </div>
                            </div>
                        </el-card>
                    </div>
                </div>
            </div>
            <div class="storeBottom">
                <div class="bottomTop flex">
                    <div class="store">
                        <div class="newBack bigfont" @click="showAdd" style="cursor: pointer">
                            <div style="color:#fff;position:absolute;left:45%;transform: translateX(-50%);top:11%;">新建门店</div>
                        </div>
                    </div>
                    <div class="store" v-for="(item,index) in storeList" :key="index" v-show="index<=1" @click="selectStore(item)">
                        <div v-if="item.isSelect" :class="index==0 ? 'storeBack bigfont center selectBack' : 'storeBack bigfont right selectBack'"  style="cursor: pointer">
                            <div style="color:#fff;position:absolute;left:45%;transform: translateX(-50%);top:11%">{{item.storeName}}</div>
                        </div>
                        <div v-else :class="index==0 ? 'storeBack bigfont center noSelectBack' : 'storeBack bigfont right noSelectBack'" style="cursor: pointer">
                            <div style="color:#fff;position:absolute;left:45%;transform: translateX(-50%);top:11%">{{item.storeName}}</div>
                        </div>
                    </div>
                </div>
                <div class="bottomBottom smallfont">
                    <div class="flex-center-Y" style="position:absolute;bottom:0;width:100%">
                        <div class="flex-1 text-center">
                        <i class="el-icon-caret-left" @click="toPrev"></i>
                        <span>{{params.pageNum}}/{{params.totalPage}}</span>
                        <i class="el-icon-caret-right" @click="toNext"></i>
                        </div>
                    </div>
                </div>
            </div>
        </el-card>
        <el-card v-else>
            <div style="position:relative;height:7vh">
                <el-button class="addBtn" icon="el-icon-circle-plus-outline" type="primary" @click="showAdd">添加门店</el-button>
            </div>
            <el-table
                    :data="storeList"
                    header-row-class-name="operatorTableStyle" 
                    cell-class-name="operatorCellStyle"
                    style="width: 100%">
                    <el-table-column
                        prop="storeName"
                        label="门店名称"
                        width="180"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="门店区域"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="detailsAddress"
                        label="详细地址"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="machineCount"
                        label="售货机数量(台）"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="wareName"
                        label="关联仓库"
                        align="center"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="nickname"
                        label="门店状态"    
                        width="180"
                        align="center">
                        <template slot-scope="scope">
                            <span>{{scope.row.storeStatus=='1'?'营业中':'休息中'}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" align="center" width="180">
                        <template slot-scope="scope">
                                <span
                                    class="blue"
                                    @click="editList(scope.row)">   
                                    编辑
                                </span>
                                <span
                                    class="blue"
                                    @click="deleteList(scope.row)">
                                    删除
                                </span>
                        </template>
                    </el-table-column>
            </el-table>
            <div class="pagination-line">
                <el-pagination background
                            @current-change="currentChange"
                            :current-page="params.pageNum"
                            :page-size="params.pageRow"
                            :total="totalCount"  
                            layout="prev,pager, next">
                </el-pagination>
            </div>
        </el-card>
        <el-dialog title="关联售货机" :visible.sync="bindMachineDialogVisible" width="60%">
                <el-table :data="data" stripe style="width: 100%" element-loading-text="拼命加载中"
        row-key="machineCode" ref="multipleTable" @selection-change="handleSelectionChange"  @row-click="clickRow">M-0
                    <el-table-column type="selection" width="55">
                        <!-- <template slot-scope="scope">
                            <el-checkbox v-model="scope.row.checked"></el-checkbox>
                        </template> -->
                    </el-table-column>
                    <el-table-column prop="machineName" label="名称" style="width: 18%" align="center"></el-table-column>
                    <el-table-column prop="typeName" label="类型" style="width: 18%" align="center"></el-table-column>
                    <el-table-column prop="trailsType" label="货道类型" style="width: 18%" align="center"></el-table-column>
                    <el-table-column prop="gmtActivated" label="激活时间" style="width: 18%" align="center">
                            <!-- <template slot-scope="scope">
                                <span v-if="scope.row.activateStatus ==1">已激活</span>
                                <span v-else>未激活</span>
                            </template> -->
                    </el-table-column>
                </el-table>
            <span slot="footer" class="dialog-footer">
                <el-button @click="bindMachineDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="bindMachine">保 存</el-button>
            </span>
        </el-dialog>
        <!-- 列表形式创建门店 -->
        <el-dialog
            :visible.sync="addVisible"
            :show-close="false"
            custom-class="userManageDialogClass"
            width="28vw"
            center>
            <div class="userManagedDialog">
                <div class="title lgfont bold mb-4">新建门店</div>
                <div class="flex-center-Y bigfont justify-between mb-2">
                    <div class="W-50 flex-center-Y  bold" style="line-height:4.63vh"> *门店名称</div>
                    <div class="W-50">
                        <el-input placeholder="请输入门店名称" maxlength="10" v-model="form.storeName"></el-input>
                    </div>
                </div>
                <div class="flex-center-Y bigfont justify-between mb-2">
                    <div class="W-50 flex-center-Y  bold" style="line-height:4.63vh"> *店长</div>
                    <div class="W-50 align-right">
                        <el-select placeholder="请选择门店店长"  @change="changePhone1"  v-model="form.storeManagerId" filterable  no-match-text=" " popper-class="storeManageWareDrop storeManageWareDrop1">
                            <el-option
                            v-for="(item,index) in userList"
                            :key="index"
                            :label="item.nickname"
                            :value="item.storeManagerId">
                            <div class="bigfont">{{item.nickname}}</div>
                            <div class="bigfont">{{item.username}}</div>
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div class="flex-center-Y bigfont justify-between mb-2">
                    <div class="W-50 flex-center-Y  bold" style="line-height:4.63vh"> *门店区域</div>
                    <div class="W-50 align-right">
                        <el-cascader :options="options" @change="handleAreaChange1" v-model="form.cascader" class="flex-2"></el-cascader>
                    </div>
                </div>
                <div class="flex-center-Y bigfont justify-between mb-2">
                    <div class="W-50 flex-center-Y  bold" style="line-height:4.63vh"> *详细地址</div>
                    <div class="W-50">
                        <el-input placeholder="请输入详细地址" maxlength="20" v-model="form.detailsAddress"></el-input>
                    </div>
                </div>
                <div class="flex-center-Y bigfont justify-between mb-2">
                    <div class="W-50 flex-center-Y  bold" style="line-height:4.63vh"> *关联售货机</div>
                    <div class="W-50 align-right">
                        <span>{{form.machineList.length}}台</span> &nbsp; &nbsp;<span class="blue" @click="showBindMachine('0')">添加</span>
                    </div>
                </div>
                <!-- <div class="flex-center-Y bigfont justify-between mb-2">
                    <div class="W-50 flex-center-Y  bold" style="line-height:4.63vh"> *关联仓库</div>
                    <div class="W-50 align-right">
                        <el-select placeholder="请选择关联仓库" v-model="form.wareId" filterable  no-match-text=" " popper-class="storeManageWareDrop">
                            <el-option
                            v-for="(item,index) in wareList"
                            :key="index"
                            :label="item.wareName"
                            :value="item.wareId">
                            <div class="bigfont">{{item.wareName}}</div>
                            </el-option>
                        </el-select>
                    </div>
                </div> -->
                <div class="flex-center-Y bigfont justify-between mb-2">
                    <div class="W-50 flex-center-Y  bold" style="line-height:4.63vh"> *门店状态</div>
                    <div class="W-50 align-right">
                        <el-select v-model="form.storeStatus" placeholder="请选择" filterable popper-class="storeManageWareDrop">
                            <el-option label="营业中" value="1">
                                <div class="bigfont">营业中</div>
                            </el-option>
                            <el-option label="休息中" value="0">
                                <div class="bigfont">休息中</div>
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div class="bottom flex-center-Y" style="margin-top:5vh">
                    <div class="btn normalfont" @click="addVisible=false">取消</div>
                    <div class="btn1 normalfont" @click="saveAdd">保存</div>
                </div>
            </div>
        </el-dialog>
        <!-- 列表形式创建门店 -->
        <!-- 列表形式编辑门店 -->
        <el-dialog
            :visible.sync="editVisible"
            :show-close="false"
            custom-class="userManageDialogClass"
            width="28vw"
            center>
            <div class="userManagedDialog">
                <div class="title lgfont bold mb-4">编辑门店</div>
                <div class="flex-center-Y bigfont justify-between mb-2">
                    <div class="W-50 flex-center-Y  bold" style="line-height:4.63vh"> *门店名称</div>
                    <div class="W-50">
                        <el-input placeholder="请输入门店名称" maxlength="10" v-model="selectInfo.storeName"></el-input>
                    </div>
                </div>
                <div class="flex-center-Y bigfont justify-between mb-2">
                    <div class="W-50 flex-center-Y  bold" style="line-height:4.63vh"> *店长</div>
                    <div class="W-50 align-right">
                        <el-select placeholder="请选择门店店长" @change="changePhone" v-model="selectInfo.storeManagerId" filterable  no-match-text=" " popper-class="storeManageWareDrop">
                            <el-option
                            v-for="(item,index) in userList"
                            :key="index"
                            :label="item.nickname"
                            :value="item.storeManagerId">
                            <div class="bigfont">{{item.nickname}}</div>
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div class="flex-center-Y bigfont justify-between mb-2">
                    <div class="W-50 flex-center-Y  bold" style="line-height:4.63vh"> *门店区域</div>
                    <div class="W-50 align-right">
                        <el-cascader :options="options" @change="handleAreaChange" v-model="selectInfo.cascader" class="flex-2"></el-cascader>
                    </div>
                </div>
                <div class="flex-center-Y bigfont justify-between mb-2">
                    <div class="W-50 flex-center-Y  bold" style="line-height:4.63vh"> *详细地址</div>
                    <div class="W-50">
                        <el-input placeholder="请输入详细地址" maxlength="20" v-model="selectInfo.detailsAddress"></el-input>
                    </div>
                </div>
                <div class="flex-center-Y bigfont justify-between mb-2">
                    <div class="W-50 flex-center-Y  bold" style="line-height:4.63vh"> *关联售货机</div>
                    <div class="W-50 align-right">
                        <span>{{selectInfo.machineList.length}}台</span> &nbsp; &nbsp;<span class="blue" @click="showBindMachine('1')">添加</span>
                    </div>
                </div>
                <!-- <div class="flex-center-Y bigfont justify-between mb-2">
                    <div class="W-50 flex-center-Y  bold" style="line-height:4.63vh"> *关联仓库</div>
                    <div class="W-50 align-right">
                        <el-select placeholder="请选择关联仓库" v-model="selectInfo.wareId" filterable  no-match-text=" " popper-class="storeManageWareDrop">
                            <el-option
                            v-for="(item,index) in wareList"
                            :key="index"
                            :label="item.wareName"
                            :value="item.wareId">
                            <div class="bigfont">{{item.wareName}}</div>
                            </el-option>
                        </el-select>
                    </div>
                </div> -->
                <div class="flex-center-Y bigfont justify-between mb-2">
                    <div class="W-50 flex-center-Y  bold" style="line-height:4.63vh"> *门店状态</div>
                    <div class="W-50 align-right">
                        <el-select v-model="selectInfo.storeStatus" placeholder="请选择" filterable popper-class="storeManageWareDrop">
                            <el-option label="营业中" value="1">
                                <div class="bigfont">营业中</div>
                            </el-option>
                            <el-option label="休息中" value="0">
                                <div class="bigfont">休息中</div>
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div class="bottom flex-center-Y" style="margin-top:5vh">
                    <div class="btn normalfont" @click="editVisible=false">取消</div>
                    <div class="btn1 normalfont" @click="saveEdit">保存</div>
                </div>
            </div>
        </el-dialog>
        <!-- 列表形式编辑门店 -->
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import {regionData ,CodeToText} from 'element-china-area-data';
export default {
    data() {
        return {
            selectOne:true,
            data:[],
            editFlag:"",
            bindMachineDialogVisible:false,
            showAdress:false,
            options: regionData,
            userList:[],
            wareList:[],
            showName:false,
            showDetailsAddress:false,
            selectData:"",
            selectInfo:"",
            storeList:[],
            params:{
                pageNum:1,
                totalPage:1,
                pageRow:2,
            },
            totalCount:0,
            addVisible:false,
            editVisible:false,
            form:{storeStatus:'0',machineList:[]},
            isEdit:"0",//是否为编辑门店,默认新建门店
            originData:[],//原始机器的关联情况,用于知道有没有变更关联的机器

        };
    },
    created() {
        document.getElementsByTagName("body")[0].style.minWidth="1024px";
        document.getElementsByTagName("body")[0].style.overflow="auto";
        this.getList()
    },

    methods: {
        currentChange(index){//列表形式分页
          this.params.pageNum = index
          this.getList(this.params)
      },
      showAdd(){//列表形式点击添加门店
        this.getUser()
        this.getWare()
        if(this.totalCount>=5){
            this.$message.warning("门店数量已达上限!");
              return;
        }
        this.addVisible=true
      },
      saveAdd(){//列表形式保存新建门店
        if(!this.form.storeName){
           this.$message.error("请输入门店名称!");
              return; 
        }
        // if(!this.form.wareId && this.stockType=='A'){
        //    this.$message.error("请选择关联仓库!");
        //       return; 
        // }
        if(!this.form.sheng){
           this.$message.error("请选择门店区域!");
              return; 
        }
        if(!this.form.detailsAddress){
           this.$message.error("请输入详细地址!");
              return; 
        }
        if(!this.form.storeManagerId){
           this.$message.error("请选择店长!");
              return; 
        }
        this.api({
                url: "/hardware/addStore",
                method: "post",
                data: this.form
            }).then(data => {
                this.$message.success("创建成功!");
                this.addVisible=false
                this.getList()
            }).catch((e)=>{
                
            })
      },
      editList(row){//列表形式点击编辑门店
        this.getUser()
        this.getWare()
        this.selectData=row
        this.getStoreInfo()
        this.editVisible=true
      },
      saveEdit(){//列表形式保存编辑门店
        if(this.originData.toString()==this.selectInfo.machineList.toString()){//编辑时如果关联门店有改动,updateMachine=true
            this.selectInfo.updateMachine=false
        }else{
            this.selectInfo.updateMachine=true
        }
        this.api({
                url: "/hardware/updateStoreManage",
                method: "post",
                data: this.selectInfo
            }).then(data => {
                this.getList()
                this.$message({
                    type:"success",
                    message:"保存成功!"
                })
                this.editVisible=false
            }).catch((e)=>{
            })
      },
      changePhone(){
          for(let i in this.userList){
              if(this.selectInfo.storeManagerId==this.userList[i].storeManagerId){
                  this.selectInfo.storeManageUsername=this.userList[i].username
              }
          }
      },
      changePhone1(){
          for(let i in this.userList){
              if(this.form.storeManagerId==this.userList[i].storeManagerId){
                  this.form.storeManageUsername=this.userList[i].username
              }
          }
      },
      deleteList(row){//列表形式点击删除门店
          this.selectInfo=row
          this.deleteStore()
      },
        editSelectInfo(){//视图形式保存编辑门店
            let commitData={
                storeCode:this.selectData.storeCode
            }
            if(this.editFlag==1){
                commitData.storeManagerId=this.selectInfo.storeManagerId
            }else if(this.editFlag==2){
                commitData.storeName=this.selectInfo.storeName
            }else if(this.editFlag==3){
                commitData.detailsAddress=this.selectInfo.detailsAddress
                commitData.sheng=this.selectInfo.sheng
                commitData.shi=this.selectInfo.shi
                commitData.qu=this.selectInfo.qu
                commitData.shengName=this.selectInfo.shengName
                commitData.shiName=this.selectInfo.shiName
                commitData.quName=this.selectInfo.quName
            }else if(this.editFlag==4){
                commitData.wareId=this.selectInfo.wareId
            }else if(this.editFlag==5){
                commitData.status=this.selectInfo.storeStatus
            }else if(this.editFlag==6){
                commitData.deleteStatus=0
            }
            this.api({
                url: "/hardware/updateStoreManage",
                method: "post",
                data: commitData
            }).then(data => {
                if(this.editFlag!==6){
                    this.selectOne=false
                }else{
                    this.selectOne=true
                }
                this.getList()
                this.bindMachineDialogVisible = false
            }).catch((e)=>{
                if(this.editFlag!==6){
                    this.selectOne=false
                }else{
                    this.selectOne=true
                }
                this.getList()
            })
        },
        showBindMachine(i){
            this.isEdit=i
            this.getBindInfo()
            this.bindMachineDialogVisible = true
            this.showAdress=false
        },
         getBindInfo(){
             let params={
                ownerId:this.userId,
                storeCode:""
             }
             if(this.isEdit=='1'){//编辑门店
                 params.storeCode=this.selectData.storeCode
             }
            this.api({
                url: "hardware/showVendList",
                method: "post",
                data: params
            }).then(data => {
                this.data=data
                this.$nextTick(()=>{
                this.data.forEach(row => {
                    console.log(row)
                        if(row.checkStatus=='1'){
                        this.$refs.multipleTable.toggleRowSelection(row,true);
                        }
                    });
                 })
            })
        },
        bindMachine(){//编辑时的绑定售货机
                let machineList=[]//选中的机器
                for(let i in this.data){
                    if(this.data[i].checkStatus=='1'){
                        machineList.push(this.data[i].machineCode)
                    }else{}
                }
            if(this.isEdit=='0'){//新建门店
                this.form.machineList=machineList
                this.bindMachineDialogVisible=false
            }else{//编辑门店
                this.selectInfo.machineList=machineList
                if(this.thumbType=='1'){//列表
                    this.bindMachineDialogVisible=false
                }else{//视图
                    if(this.originData.toString()==this.selectInfo.machineList.toString()){//编辑时如果关联门店有改动,updateMachine=true
                        this.selectInfo.updateMachine=false
                    }else{
                        this.selectInfo.updateMachine=true
                    }
                    this.api({
                        url: "/hardware/updateStoreManage",
                        method: "post",
                        data: this.selectInfo
                    }).then(data => {
                        if(this.editFlag!==6){
                            this.selectOne=false
                        }else{
                            this.selectOne=true
                        }
                        this.getList()
                        this.bindMachineDialogVisible = false
                    }).catch((e)=>{
                        if(this.editFlag!==6){
                            this.selectOne=false
                        }else{
                            this.selectOne=true
                        }
                        this.getList()
                    })
                }
            }
        },
        showStatus(){//select组件聚焦
            this.$nextTick(function () {
                this.$refs.statusref.focus()
            })
            this.showAdress=false
        },
        changeStatus(){
            this.editFlag=5
            this.editSelectInfo()
        },
        handleAreaChange1(value){
            if(value.length == 1){
                this.form.sheng = value[0]
                this.form.shi = null
                this.form.qu = null
            }else if(value.length == 2){
                this.form.sheng = value[0]
                this.form.shi = value[1]
                this.form.qu = null
            }else{
                this.form.sheng = value[0]
                this.form.shi = value[1]
                this.form.qu = value[2]
            }
            this.form.shengName = CodeToText[this.form.sheng]
            this.form.shiName = CodeToText[this.form.shi]
            this.form.quName = CodeToText[this.form.qu]
        },
        handleAreaChange(value){
            if(value.length == 1){
                this.selectInfo.sheng = value[0]
                this.selectInfo.shi = null
                this.selectInfo.qu = null
            }else if(value.length == 2){
                this.selectInfo.sheng = value[0]
                this.selectInfo.shi = value[1]
                this.selectInfo.qu = null
            }else{
                this.selectInfo.sheng = value[0]
                this.selectInfo.shi = value[1]
                this.selectInfo.qu = value[2]
            }
            this.selectInfo.shengName = CodeToText[this.selectInfo.sheng]
            this.selectInfo.shiName = CodeToText[this.selectInfo.shi]
            this.selectInfo.quName = CodeToText[this.selectInfo.qu]
            this.showAdress=false
            this.editFlag=3
            this.editSelectInfo()
            this.showAdress=false
        },
        hidee(value){
            if(!value){
                this.showAdress=false
            }
        },
        deleteStore(){
            if(this.params.pageNum==1 && this.storeList.length==1){
                this.$message({
                    type:"warning",
                    message:"不能将门店全部删除哦~"
                })
                return;
            }
            this.$confirm('确定删除该门店?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.editFlag=6
                    this.editSelectInfo()
                })
        },
        showUser(){//select组件聚焦
            this.$nextTick(function () {
                this.$refs.userref.focus()
            })
            this.getUser()
            this.showAdress=false
        },
        changeUser(){
            for(let i in this.userList){
                if(this.selectInfo.storeManagerId==this.userList[i].storeManagerId){
                    this.selectInfo.nickname=this.userList[i].nickname
                    this.selectInfo.username=this.userList[i].username
                }
            }
            this.editFlag=1
            this.editSelectInfo()
        },
        getUser(){
            this.api({
                url: "/hardware/showAllStoreManage",
                method: "post",
                data: {
                    manageId:this.userId,
                    username:this.userName
                    }
            }).then(data => {
                this.userList=data
            });
        },
         showWare(){//select组件聚焦
            this.$nextTick(function () {
                this.$refs.wareref.focus()
            })
            this.getWare()
            this.showAdress=false

        },
        changeWare(){
            for(let i in this.wareList){
                if(this.selectInfo.wareId==this.wareList[i].wareId){
                    this.selectInfo.wareName=this.wareList[i].wareName
                }
            }
            this.editFlag=4
            this.editSelectInfo()
        },
        getWare(){
            this.api({
                url: "/hardware/showAllWareInfo",
                method: "post",
                data: {
                    manageId:this.userId,
                    username:this.userName
                    }
            }).then(data => {
                this.wareList=data
            });
        },
        editName(){
            this.showName=true
            this.$nextTick(_ => {
                this.$refs.nameInput.focus()
            })
            this.showAdress=false
        },
        commitName(){
            this.showName=false
            this.editFlag=2
            this.editSelectInfo()
            
        },
        editDetailsAddress(){
            this.showDetailsAddress=true
            this.$nextTick(_ => {
                this.$refs.detailsAddressInput.focus()
            })
            this.showAdress=false
        },
        commitDetailsAddress(){
            this.showDetailsAddress=false
            this.editFlag=3
            this.editSelectInfo()
        },
        addStore(){
            this.api({
                url: "/hardware/addStore",
                method: "post",
                data: {
                    manageId:this.userId,
                    username:this.userName
                    }
            }).then(data => {
                this.$message({
                    type:"success",
                    message:"新建成功!"
                })
                this.params.pageNum=1
                this.getList()
            });
        },
        selectStore(item){
            this.selectData=item
            for(let i in this.storeList){
                this.storeList[i].isSelect=false
            }
            item.isSelect=true
            this.storeList=JSON.parse(JSON.stringify(this.storeList))
            this.getStoreInfo()
        },
        getStoreInfo(){
            this.api({
                url: "/hardware/showStoreDetails",
                method: "post",
                data: {storeCode:this.selectData.storeCode}
            }).then(data => {
                this.selectInfo=data
                this.selectInfo.storeCode=this.selectData.storeCode
                //原始机器情况
                this.originData=JSON.parse(JSON.stringify(this.selectInfo.machineList))
                //原始机器情况
                let cascader = []
                if(this.selectInfo.sheng){
                    cascader.push(this.selectInfo.sheng)
                }
                if(this.selectInfo.shi){
                    cascader.push(this.selectInfo.shi)
                }
                if(this.selectInfo.qu){
                    cascader.push(this.selectInfo.qu)
                }
                this.selectInfo.cascader=cascader
                this.selectInfo.shengName = CodeToText[this.selectInfo.sheng]
                this.selectInfo.shiName = CodeToText[this.selectInfo.shi]
                this.selectInfo.quName = CodeToText[this.selectInfo.qu]
            });
        },
        getList() {
            if(this.thumbType=='1'){
                this.params.pageRow=8
            }else{
                this.params.pageRow=2
            }
            this.params.manageId = this.userId
            this.api({
                url: "/hardware/storeListToName",
                method: "post",
                data: this.params
            }).then(data => {
                this.storeList=data.list
                this.params.totalPage=Math.ceil(data.totalCount/this.params.pageRow) 
                this.totalCount=data.totalCount
                if(this.selectOne){
                this.selectData=this.storeList[0]
                this.selectData.isSelect=true
                }
                // 做完一系列操作后,将被选中的门店的选中样式恢复
                this.$nextTick(()=>{
                for(let i in this.storeList){
                    if(this.storeList[i].storeCode==this.selectData.storeCode){
                        this.storeList[i].isSelect=true
                    }
                }
                this.storeList=JSON.parse(JSON.stringify(this.storeList))
                })
                // 做完一系列操作后,将被选中的门店的选中样式恢复
                this.getStoreInfo()
            });
        },
        toPrev(){
            this.params.pageNum-=1
            if(this.params.pageNum<=1){
                this.params.pageNum=1
            }
            this.selectOne=true
            this.getList()
        },
        toNext(){
            this.params.pageNum+=1
            if(this.params.pageNum>=this.params.totalPage){
                this.params.pageNum=this.params.totalPage
            }
            this.selectOne=true
            this.getList()
        },
         handleSelectionChange(val){
             this.$nextTick(_ => {
            for(let g in this.data){
                this.data[g].checkStatus='0'
            }
            for(let i in val){
                for(let key in this.data){
                    if(val[i].machineCode==this.data[key].machineCode){
                        this.data[key].checkStatus='1'
                    }
                }
            }
            })
            //  for(let g in this.data){
            //      this.data[g].checked=false
            //  }
            // for(let i in val){
            //     for(let key in this.data){
            //         if(val[i].machineCode==this.data[key].machineCode){
            //             this.data[key].checked=true
            //         }
            //     }
            // }
        },
        clickRow(row){
            this.$refs.multipleTable.toggleRowSelection(row);
        },
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
        ...mapGetters(["userId", "userName","thumbType","stockType"])
    }
};
</script>

