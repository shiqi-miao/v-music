<style scoped>
    .blue {
        color: #286EFF;
        cursor: pointer;
    }
   
    #userManagement{height: 90vh;padding:2.5vh 3vw;padding-bottom: 0}
    .userManagedDialog{width: 28vw!important;height: 77vh!important;padding: 3.7vh 3vw;color: #333;position: relative}
    .el-card{height: 100%;padding: 2.7vh 2.5vw;}
    #userManagement .member{width: 20%;height:50%;padding: 1vh 1vw}
    .H-100{height: 100%}
    .member .el-card{padding:2.7vh 1.5vw;border-radius: 8px}
    .member .el-card .tag{ width: 0;height: 0;border-top: 4vw solid #dc1818;border-right: 4vw solid transparent;top:0;left: 0;position: absolute}
    .member .el-card .note{position: absolute;top: -5.5vh;left: 0vw;color: #fff;width: 3vw;transform:rotate(-45deg);text-align: center}
    .member-inner{position: relative;}
    .userManageDialogClass .top{height: 47%;position: relative;}
    .userManageDialogClass .top .avator{width:3.125vw;height:3.125vw;border:2px solid #F5A623;border-radius: 50%;overflow: hidden;}
    .userManageDialogClass .top .avator img{width: 100%}
    .userManagedDialog .bottom{width: 100%;height: 5.5vh;justify-content: space-around;position: absolute;left: 0;bottom: 5vh}
    .userManagedDialog .bottom .btn{cursor: pointer;width: 26%;height:100%;color: #286EFF;border: 1px solid #286EFF;text-align: center;line-height: 5.5vh}
    .userManagedDialog .bottom .btn1{cursor: pointer;width: 26%;height:100%;color: #fff;background:#286EFF;text-align: center;line-height: 5.5vh}
    .member-inner .top{height: 47%;position: relative;}
    .member-inner .top .avator{width:5.2vw;height:5.2vw;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);border:4px solid #F5A623;border-radius: 50%;overflow: hidden;}
    .member-inner .top .avator img{width: 100%}
    .img{width: 4vh;height: 4vh;border-radius: 50%}
    .member-inner .bottom{height: 53%}
    .member-inner .bottom .info{height: 20%}
    .member-inner .bottom .info-two{height: 40%;display: flex;flex-flow: wrap}
    .member-inner .bottom .info-two .info-inner{height: 50%;width: 50%;position: relative;}
    .member-inner .bottom .info-two .info-inner div{cursor: pointer;color: #fff;position: absolute;top: 50%;transform: translateY(-50%);padding: 4% 11%!important;border-radius: 4px}
    .offMember .backSelect{background:#dc1818}
    .backSelect{background: #4A90E2}
    .backNoSelect{background: #D8D8D8}
    .addBtn{padding: 1.25vh 1.3vh;font-size: 0.9375vw;position: absolute;right: 0;top: 0;background-color: #286EFF;width: 7vw;height: 4.63vh;}
    .roleStyle div{width: 20vw;word-wrap: break-word; word-break: normal;}
    .W-50{width: 50%}
    .right{right: 0}
    .text-right{text-align: right}
    .lgfont{font-size: 1.25vw}
    .nomalfont{font-size: 1.04vw}
    .largefont{font-size: 1.15vw}
    .bigfont{font-size:0.94vw}
    .smallfont{font-size: 0.73vw;}
    .text-center{text-align: center}
    .bold{font-weight: bold} 
    .line-height-0{line-height: 0}   
    .el-table{max-height: 65vh}
</style>
<style>
    #userManagement .el-input.is-disabled .el-input__inner{color: #333}
    #userManagement .el-card__body{height: 100%;padding: 0}
    #userManagement .el-input{width: 65%}
    #userManagement .el-input__inner{border:0;background: transparent;padding: 0;height: 18px;font-size: 18px;border-radius: 0}
    #userManagement .el-upload{width: 100%;height: 100%}
    #userManagement .el-dialog__header,#userManagement .el-dialog__body,#userManagement .el-dialog__footer{padding:0}
    #userManagement .el-checkbox{display: flex;color: #333;margin-bottom: 1.04vw}
    #userManagement .el-checkbox__input.is-checked+.el-checkbox__label{color: #333}
    #userManagement .el-checkbox .title{font-size: 1.04vw}
    #userManagement .el-checkbox .word{font-size: 0.8333vw}
    #userManagement .el-checkbox__inner{border-radius: 50%}
    .operatorTableStyle{font-size: 0.94vw;color: #333}
    .operatorTableStyle th>.cell{font-weight: 600}
    .operatorCellStyle{font-size: 0.83vw;color: #333;height: 7.5vh;padding: 0!important}
    #userManagement .el-tabs{width: 15.8vw;}
    #userManagement .el-tabs__header{margin-bottom: 1vh}
    #userManagement .el-tabs__item{font-size: 1.05vw;height: 5.5vh;line-height: 5.5vh;width: 7.8vw;text-align: center;}
    .el-message-box__headerbtn{z-index: 10}
@media screen and (max-width:1680px) {
    #userManagement .el-input__inner{height: 16px;font-size: 16px}
}
@media screen and (max-width:1440px) {
    #userManagement .el-input__inner{height: 14px;font-size: 14px}
}
@media screen and (max-width:1280px) {
    #userManagement .el-input__inner{height: 12px;font-size: 12px}
}
    
</style>
<template>
    <div id="userManagement">
        <el-card>
            <el-tabs v-model="activeName" type="card" @tab-click="changeTab">
                <el-tab-pane label="PC端帐号" name="0">
                </el-tab-pane>
                <el-tab-pane label="移动端帐号" name="1">
                </el-tab-pane>
            </el-tabs>
            <div v-if="thumbType=='0'" class="flex" style="flex-flow:row wrap; height:90%">
                <!-- <div class="member" v-show="addMember" @click="showAdd()">
                    <el-card class="member-inner" style="padding:0">
                        <img style="width:100%" src="../../assets/operaion/new.png" alt="">
                    </el-card>
                </div> -->
                <!-- 新增账号 -->
                <div class="member" v-clickoutside="commitAdd">
                    <el-card class="member-inner"  v-show="addMember" style="padding:0">
                        <img style="width:100%" src="../../assets/operaion/new.png" alt="" @click="showAdd()">
                    </el-card>
                    <!-- PC端帐号 -->
                    <el-card class="member-inner" v-show="!addMember && activeName=='0'">
                        <div style="position:absolute;right:6%;top:4%;color:#D8D8D8;cursor:pointer">
                            <i class="el-icon-remove largefont" @click="backAdd()"></i>
                        </div>
                        <div class="top">
                            <div class="avator">
                                <el-upload
                                        :show-file-list="false"
                                        class="upload-block"
                                        :before-upload="beforeAvatarUpload"
                                        :http-request="upload"
                                        action="">
                                        <img v-if="form.userPic" :src="form.userPic" alt="">
                                        <img v-else src="../../assets/super/logo3.png" alt="">
                                </el-upload>
                            </div>
                        </div>
                        <div class="bottom">
                            <div class="info bigfont">
                                <span>姓名： 
                                    <el-input placeholder="请输入姓名" :maxlength="6" v-model="form.nickname"></el-input>
                                </span>
                            </div>
                            <div class="info bigfont">
                                <span>账号：
                                    <el-input placeholder="请输入账号" v-model="form.username"></el-input>
                                </span>
                            </div>
                            <div class="info bigfont">
                                <span>权限范围：</span>
                            </div>
                            <div class="info-two">
                                <div class="info-inner smallfont" v-for="(i,key) in form.typeJsonList" :key="key" @click="select(form,i)">
                                    <el-popover
                                    placement="top-start"
                                    width="200"
                                    trigger="hover"
                                    >
                                    <div v-if="i.typeCode=='D'">经营总数据、经营数据图表</div>
                                    <div v-else-if="i.typeCode=='S'">门店运营（补货员、门店管理、库存盘点）、销售计划、促销计划、商品管理、订单管理、购销信息（采购信息、补货信息、入库信息）、智能运营设置</div>
                                    <div v-else-if="i.typeCode=='E'">优惠券管理、上新广告、消息推送</div>
                                    <div v-else-if="i.typeCode=='F'">财务概览、订单数据（分润数据）、财务报销</div>
                                    <div slot="reference" :class="i.typeFlag ? 'backSelect' : 'backNoSelect'" :style="key % 2!==0 ? 'right:0' : ''">
                                        {{i.typeName}}
                                    </div>
                                    </el-popover>
                                </div>
                            </div>
                        </div>
                    </el-card>
                    <!-- 移动端帐号 -->
                    <el-card class="member-inner" v-show="!addMember && activeName!='0'">
                        <div style="position:absolute;right:6%;top:4%;color:#D8D8D8;cursor:pointer">
                            <i class="el-icon-remove largefont" @click="backAdd()"></i>
                        </div>
                        <div class="top">
                            <div class="avator">
                                <el-upload
                                        :show-file-list="false"
                                        class="upload-block"
                                        :before-upload="beforeAvatarUpload"
                                        :http-request="upload"
                                        action="">
                                        <img v-if="form1.porprait" :src="form1.porprait" alt="">
                                        <img v-else src="../../assets/super/logo3.png" alt="">
                                </el-upload>
                            </div>
                        </div>
                        <div class="bottom">
                            <div class="info bigfont">
                                <span>姓名： 
                                    <el-input placeholder="请输入姓名" :maxlength="6" v-model="form1.regisName"></el-input>
                                </span>
                            </div>
                            <div class="info bigfont">
                                <span>账号：
                                    <el-input placeholder="请输入账号" v-model="form1.regisPhone"></el-input>
                                </span>
                            </div>
                            <div class="info bigfont">
                                <span>权限范围：</span>
                            </div>
                            <div class="info-two">
                                <div class="info-inner smallfont" v-for="(i,key) in form1.typeJsonList" :key="key" @click="select(form,i)">
                                    <el-popover
                                    placement="top-start"
                                    width="200"
                                    trigger="hover"
                                    >
                                    <div v-if="i.typeCode=='warFlag'">库存管理、出入库办理、出入库记录查询</div>
                                    <div v-else-if="i.typeCode=='purFlag'">根据采购单进行采购、采购金额报销</div>
                                    <div v-else-if="i.typeCode=='repInFlag'">根据补货单内容到仓库提货，对设备进行补货操作</div>
                                    <div v-else-if="i.typeCode=='repOutFlag'">将“光芽补货”外包给其他第三方服务商的补货员</div>
                                    <div slot="reference" :class="i.typeFlag ? 'backSelect' : 'backNoSelect'" :style="key % 2!==0 ? 'right:0' : ''">
                                        {{i.typeName}}
                                    </div>
                                    </el-popover>
                                </div>
                            </div>
                        </div>
                    </el-card>
                </div>
                <!-- 新增账号 -->
                <!-- 账号列表 -->
                <div class="member" v-for="(item,index) in memberList" :key="index" @click="hide">
                    <!-- PC端帐号 -->
                    <el-card class="member-inner" v-if="activeName=='0'">
                        <div style="position:absolute;right:6%;top:4%;color:#D8D8D8;cursor:pointer">
                            <i class="el-icon-error largefont" @click="deleteMember(item)"></i>
                        </div>
                        <div class="top">
                            <div class="avator">
                                <el-upload
                                        :show-file-list="false"
                                        class="upload-block"
                                        :before-upload="beforeAvatarUpload"
                                        :http-request="upload1"
                                        action="">
                                        <img v-if="item.userPic" :src="item.userPic" alt="" @click="selectAvator(item)">
                                        <img v-else src="../../assets/super/logo3.png" alt="" @click="selectAvator(item)">
                                </el-upload>
                            </div>
                        </div>
                        <div class="bottom">
                            <div class="info bigfont">
                                <span style="width:100%;display:inline-block" @dblclick="editName(item,index)">姓名：
                                    <span v-if="!item.showName" @dblclick="editName(item,index)">{{item.nickname}}</span> 
                                    <el-input v-else v-model="item.nickname" :maxlength="6" @blur="commitName(item)" @keyup.enter.native="commitName(item)" :ref="'inputName'+index"></el-input>
                                </span>
                            </div>
                            <div class="info bigfont">
                                <span>账号：
                                    <span v-if="!item.showPhone">{{item.username}}</span> 
                                    <el-input v-else v-model="item.username" @blur="commitPhone(item)" @keyup.enter.native="commitPhone(item)" :ref="'inputPhone'+index"></el-input>
                                </span>
                            </div>
                            <div class="info bigfont">
                                <span>权限范围：</span>
                            </div>
                            <div class="info-two">
                                <div class="info-inner smallfont" v-for="(i,key) in item.typeJsonList" :key="key" @click="select(item,i)">
                                    <el-popover
                                    placement="top-start"
                                    width="200"
                                    trigger="hover"
                                    >
                                    <div v-if="i.typeCode=='D'">经营总数据、经营数据图表</div>
                                    <div v-else-if="i.typeCode=='S'">门店运营（补货员、门店管理、库存盘点）、销售计划、促销计划、商品管理、订单管理、购销信息（采购信息、补货信息、入库信息）、智能运营设置</div>
                                    <div v-else-if="i.typeCode=='E'">优惠券管理、上新广告、消息推送</div>
                                    <div v-else-if="i.typeCode=='F'">财务概览、订单数据（分润数据）、财务报销</div>
                                    <div slot="reference" :class="i.typeFlag ? 'backSelect' : 'backNoSelect'" :style="key % 2!==0 ? 'right:0' : ''">
                                        {{i.typeName}}
                                    </div>
                                    </el-popover>
                                </div>
                            </div>
                        </div>
                    </el-card>
                    <!-- 移动端账号 -->
                    <el-card :class="item.affirmFlag?'member-inner offMember':'member-inner'" v-else>
                        <div class="tag" v-if="item.affirmFlag">
                            <div class="note smallfont">待确认</div>
                        </div>
                        <div style="position:absolute;right:6%;top:4%;color:#D8D8D8;cursor:pointer">
                            <i class="el-icon-error largefont" @click="deleteMember(item)"></i>
                        </div>
                        <div class="top">
                            <div class="avator">
                                <el-upload
                                        :show-file-list="false"
                                        class="upload-block"
                                        :before-upload="beforeAvatarUpload"
                                        :http-request="upload1"
                                        action="">
                                        <img v-if="item.porprait" :src="item.porprait" alt="" @click="selectAvator(item)">
                                        <img v-else src="../../assets/super/logo3.png" alt="" @click="selectAvator(item)">
                                </el-upload>
                            </div>
                        </div>
                        <div class="bottom">
                            <div class="info bigfont">
                                <span style="width:100%;display:inline-block" @dblclick="editName(item,index)">姓名：
                                    <span v-if="!item.showName" @dblclick="editName(item,index)">{{item.regisName}}</span> 
                                    <el-input v-else v-model="item.regisName" :maxlength="6" @blur="commitName(item)" @keyup.enter.native="commitName(item)" :ref="'inputName'+index"></el-input>
                                </span>
                            </div>
                            <div class="info bigfont">
                                <span>账号：
                                    <span v-if="!item.showPhone">{{item.regisPhone}}</span> 
                                    <el-input v-else v-model="item.regisPhone" @blur="commitPhone(item)" @keyup.enter.native="commitPhone(item)" :ref="'inputPhone'+index"></el-input>
                                </span>
                            </div>
                            <div class="info bigfont">
                                <span>权限范围：</span>
                            </div>
                            <div class="info-two">
                                <div class="info-inner smallfont" v-for="(i,key) in item.typeJsonList" :key="key" @click="select(item,i)">
                                    <el-popover
                                    placement="top-start"
                                    width="200"
                                    trigger="hover"
                                    >
                                    <div v-if="i.typeCode=='warFlag'">库存管理、出入库办理、出入库记录查询</div>
                                    <div v-else-if="i.typeCode=='purFlag'">根据采购单进行采购、采购金额报销</div>
                                    <div v-else-if="i.typeCode=='repInFlag'">根据补货单内容到仓库提货，对设备进行补货操作</div>
                                    <div v-else-if="i.typeCode=='repOutFlag'">将“光芽补货”外包给其他第三方服务商的补货员</div>
                                    <div slot="reference" :class="i.typeFlag ? 'backSelect' : 'backNoSelect'" :style="key % 2!==0 ? 'right:0' : ''">
                                        {{i.typeName}}
                                    </div>
                                    </el-popover>
                                </div>
                            </div>
                        </div>
                    </el-card>
                </div>
                <!-- 账号列表 -->
            </div>
            <div v-else>
                <div style="position:relative;height:7vh">
                <el-button class="addBtn" icon="el-icon-circle-plus-outline" type="primary" @click="showAdd1">添加帐号</el-button>
                </div>
                <el-table
                    v-if="activeName=='0'"
                    :data="memberList"
                    header-row-class-name="operatorTableStyle" 
                    cell-class-name="operatorCellStyle"
                    style="width: 100%">
                    <el-table-column
                        prop="date"
                        label="头像"
                        width="180"
                        align="center">
                        <template slot-scope="scope">
                            <div class="line-height-0">
                            <img class='img' v-if="scope.row.userPic" :src="scope.row.userPic" alt="">
                            <img class='img' v-else src="../../assets/super/logo3.png" alt="">
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="nickname"
                        label="姓名"
                        width="180"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="username"
                        label="帐号"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="username"
                        label="权限范围"
                        align="center">
                        <template slot-scope="scope">
                            <div>
                                <span v-for='(i,key) in scope.row.typeList' :key="key" v-show="key<2">
                                    {{i}}<span v-if="i && key!=scope.row.typeList.length-1">、</span>
                                </span>
                            </div>
                            <div>
                                <span v-for='(i,key) in scope.row.typeList' :key="key" v-show="key>1">
                                    {{i}}<span v-if="i && key!=scope.row.typeList.length-1">、</span>
                                </span>
                            </div>
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
                                    @click="deleteMember(scope.row)">
                                    删除
                                </span>
                        </template>
                    </el-table-column>
                </el-table>
                <el-table
                    v-else
                    :data="memberList"
                    header-row-class-name="operatorTableStyle" 
                    cell-class-name="operatorCellStyle"
                    style="width: 100%"
                    >
                    <el-table-column
                        prop="date"
                        label="头像"
                        width="180"
                        align="center">
                        <template slot-scope="scope">
                            <div class="line-height-0">
                            <img class='img' v-if="scope.row.porprait" :src="scope.row.porprait" alt="">
                            <img class='img' v-else src="../../assets/super/logo3.png" alt="">
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="regisName"
                        label="姓名"
                        width="180"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="regisPhone"
                        label="帐号"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="username"
                        label="权限范围"
                        align="center">
                        <template slot-scope="scope">
                            <div>
                                <span v-for='(i,key) in scope.row.typeListA' :key="key" v-show="key<2">
                                    {{i}}<span v-if="i && key!=scope.row.typeListA.length-1">、</span>
                                </span>
                            </div>
                            <div>
                                <span v-for='(i,key) in scope.row.typeListA' :key="key" v-show="key>1">
                                    {{i}}<span v-if="i && key!=scope.row.typeListA.length-1">、</span>
                                </span>
                            </div>
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
                                    @click="deleteMember(scope.row)">
                                    删除
                                </span>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="bigfont" style="height:3%;position:relative">
                <div class="flex-center-Y" style="position:absolute;bottom:0;width:100%">
                    <div class="flex-1 text-center">
                    <i class="el-icon-caret-left" @click="toPrev"></i>
                    <span>{{params.pageNum}}/{{params.totalPage}}</span>
                    <i class="el-icon-caret-right" @click="toNext"></i>
                    </div>
                </div>
            </div>
        </el-card>
        <!-- 创建账户 -->
        <el-dialog
            :visible.sync="addVisible"
            :show-close="false"
            custom-class="userManageDialogClass"
            width="28vw"
            center>
            <div class="userManagedDialog" v-if="activeName=='0'">
                <div class="title lgfont bold">添加账号</div>
                <div class="flex-center-Y nomalfont justify-between mb-2">
                    <div class="W-50 flex-center-Y  bold" style="line-height:4.63vh"> *头像</div>
                    <div class="W-50">
                        <div class="top">
                            <div class="avator">
                                <el-upload
                                        :show-file-list="false"
                                        class="upload-block"
                                        :before-upload="beforeAvatarUpload"
                                        :http-request="upload"
                                        action="">
                                        <img v-if="form.userPic" :src="form.userPic" alt="">
                                        <img v-else src="../../assets/super/logo3.png" alt="">
                                </el-upload>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex-center-Y nomalfont justify-between mb-2">
                    <div class="W-50 flex-center-Y  bold" style="line-height:4.63vh"> *姓名</div>
                    <div class="W-50">
                        <el-input placeholder="请输入姓名" maxlength="8" v-model="form.nickname"></el-input>
                    </div>
                </div>
                <div class="flex-center-Y nomalfont justify-between mb-2">
                    <div class="W-50 flex-center-Y  bold" style="line-height:4.63vh"> *帐号</div>
                    <div class="W-50">
                        <el-input placeholder="请输入帐号" maxlength="11" v-model="form.username"></el-input>
                    </div>
                </div>
                <div class="flex-center-Y nomalfont justify-between mb-2">
                    <div class="W-50 flex-center-Y  bold" style="line-height:4.63vh;margin-bottom:1.04vw"> *权限范围</div>
                </div>
                <div class="flex-center-Y nomalfont justify-between mb-2">
                    <div class="bold roleStyle" style="line-height:4.63vh">
                        <el-checkbox  v-for="(i,key) in form.typeJsonList" :key="key" v-model="i.typeFlag">
                            <div class="title">{{i.typeName}}</div>
                            <div class="word" v-if="i.typeCode=='D'">经营总数据、经营数据图表</div>
                            <div class="word" v-else-if="i.typeCode=='S'">门店运营（补货员、门店管理、库存盘点）、销售计<br>划、促销计划、商品管理、订单管理、购销信息（采<br>购信息、补货信息、入库信息）、智能运营设置</div>
                            <div class="word" v-else-if="i.typeCode=='E'">优惠券管理、上新广告、消息推送</div>
                            <div class="word" v-else-if="i.typeCode=='F'">财务概览、订单数据（分润数据）、财务报销</div>
                        </el-checkbox>
                    </div>
                </div>
                <div class="bottom flex-center-Y" style="margin-top:5vh">
                    <div class="btn largefont" @click="backAdd1">取消</div>
                    <div class="btn1 largefont" @click="commitAdd1">保存</div>
                </div>
            </div>
            <div class="userManagedDialog" v-else>
                <div class="title lgfont bold">添加账号</div>
                <div class="flex-center-Y nomalfont justify-between mb-2">
                    <div class="W-50 flex-center-Y  bold" style="line-height:4.63vh"> *头像</div>
                    <div class="W-50">
                        <div class="top">
                            <div class="avator">
                                <el-upload
                                        :show-file-list="false"
                                        class="upload-block"
                                        :before-upload="beforeAvatarUpload"
                                        :http-request="upload"
                                        action="">
                                        <img v-if="form1.porprait" :src="form1.porprait" alt="">
                                        <img v-else src="../../assets/super/logo3.png" alt="">
                                </el-upload>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex-center-Y nomalfont justify-between mb-2">
                    <div class="W-50 flex-center-Y  bold" style="line-height:4.63vh"> *姓名</div>
                    <div class="W-50">
                        <el-input placeholder="请输入姓名" maxlength="8" v-model="form1.regisName"></el-input>
                    </div>
                </div>
                <div class="flex-center-Y nomalfont justify-between mb-2">
                    <div class="W-50 flex-center-Y  bold" style="line-height:4.63vh"> *帐号</div>
                    <div class="W-50">
                        <el-input placeholder="请输入帐号" maxlength="11" v-model="form1.regisPhone"></el-input>
                    </div>
                </div>
                <div class="flex-center-Y nomalfont justify-between mb-2">
                    <div class="W-50 flex-center-Y  bold" style="line-height:4.63vh;margin-bottom:1.04vw"> *权限范围</div>
                </div>
                <div class="flex-center-Y nomalfont justify-between mb-2">
                    <div class="bold roleStyle" style="line-height:4.63vh">
                        <el-checkbox  v-for="(i,key) in form1.typeJsonList" :key="key" v-model="i.typeFlag">
                            <div class="title">{{i.typeName}}</div>
                            <div class="word" v-if="i.typeCode=='warFlag'">库存管理、出入库办理、出入库记录查询</div>
                            <div class="word" v-else-if="i.typeCode=='purFlag'">根据采购单进行采购、采购金额报销</div>
                            <div class="word" v-else-if="i.typeCode=='repInFlag'">根据补货单内容到仓库提货，对设备进行补货操作</div>
                            <div class="word" v-else-if="i.typeCode=='repOutFlag'">将“光芽补货”外包给其他第三方服务商的补货员</div>
                        </el-checkbox>
                    </div>
                </div>
                <div class="bottom flex-center-Y" style="margin-top:5vh">
                    <div class="btn largefont" @click="backAdd1">取消</div>
                    <div class="btn1 largefont" @click="commitAdd1">保存</div>
                </div>
            </div>
        </el-dialog>
        <!-- 创建账户 -->
        <!-- 编辑账户 -->
        <el-dialog
            :visible.sync="editVisible"
            :show-close="false"
            custom-class="userManageDialogClass"
            width="28vw"
            center>
            <div class="userManagedDialog" v-if="activeName=='0'">
                <div class="title lgfont bold">编辑账号</div>
                <div class="flex-center-Y nomalfont justify-between mb-2">
                    <div class="W-50 flex-center-Y  bold" style="line-height:4.63vh"> *头像</div>
                    <div class="W-50">
                        <div class="top">
                            <div class="avator">
                                <el-upload
                                        :show-file-list="false"
                                        class="upload-block"
                                        :before-upload="beforeAvatarUpload"
                                        :http-request="upload1"
                                        action="">
                                        <img v-if="selectData.userPic" :src="selectData.userPic" alt="" @click="selectAvator(selectData)">
                                        <img v-else src="../../assets/super/logo3.png" alt="" @click="selectAvator(selectData)">
                                </el-upload>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex-center-Y nomalfont justify-between mb-2">
                    <div class="W-50 flex-center-Y  bold" style="line-height:4.63vh"> *姓名</div>
                    <div class="W-50">
                        <el-input placeholder="请输入姓名" maxlength="8" v-model="selectData.nickname"></el-input>
                    </div>
                </div>
                <div class="flex-center-Y nomalfont justify-between mb-2">
                    <div class="W-50 flex-center-Y  bold" style="line-height:4.63vh"> *帐号</div>
                    <div class="W-50">
                        <el-input placeholder="请输入帐号" disabled maxlength="11" v-model="selectData.username"></el-input>
                    </div>
                </div>
                <div class="flex-center-Y nomalfont justify-between mb-2">
                    <div class="W-50 flex-center-Y  bold" style="line-height:4.63vh;margin-bottom:1.04vw"> *权限范围</div>
                </div>
                <div class="flex-center-Y nomalfont justify-between mb-2">
                    <div class="bold roleStyle" style="line-height:4.63vh">
                        <el-checkbox  v-for="(i,key) in selectData.typeJsonList" :key="key" v-model="i.typeFlag">
                            <div class="title">{{i.typeName}}</div>
                            <div class="word" v-if="i.typeCode=='D'">经营总数据、经营数据图表</div>
                            <div class="word" v-else-if="i.typeCode=='S'">门店运营（补货员、门店管理、库存盘点）、销售计<br>划、促销计划、商品管理、订单管理、购销信息（采<br>购信息、补货信息、入库信息）、智能运营设置</div>
                            <div class="word" v-else-if="i.typeCode=='E'">优惠券管理、上新广告、消息推送</div>
                            <div class="word" v-else-if="i.typeCode=='F'">财务概览、订单数据（分润数据）、财务报销</div>
                        </el-checkbox>
                    </div>
                </div>
                <div class="bottom flex-center-Y" style="margin-top:5vh">
                    <div class="btn largefont" @click="backEdit">取消</div>
                    <div class="btn1 largefont" @click="editAdd1">保存</div>
                </div>
            </div>
            <div class="userManagedDialog" v-else>
                <div class="title lgfont bold">编辑账号</div>
                <div class="flex-center-Y nomalfont justify-between mb-2">
                    <div class="W-50 flex-center-Y  bold" style="line-height:4.63vh"> *头像</div>
                    <div class="W-50">
                        <div class="top">
                            <div class="avator">
                                <el-upload
                                        :show-file-list="false"
                                        class="upload-block"
                                        :before-upload="beforeAvatarUpload"
                                        :http-request="upload1"
                                        action="">
                                        <img v-if="selectData.porprait" :src="selectData.porprait" alt="" @click="selectAvator(selectData)">
                                        <img v-else src="../../assets/super/logo3.png" alt="" @click="selectAvator(selectData)">
                                </el-upload>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex-center-Y nomalfont justify-between mb-2">
                    <div class="W-50 flex-center-Y  bold" style="line-height:4.63vh"> *姓名</div>
                    <div class="W-50">
                        <el-input placeholder="请输入姓名" maxlength="8" v-model="selectData.regisName"></el-input>
                    </div>
                </div>
                <div class="flex-center-Y nomalfont justify-between mb-2">
                    <div class="W-50 flex-center-Y  bold" style="line-height:4.63vh"> *帐号</div>
                    <div class="W-50">
                        <el-input placeholder="请输入帐号" disabled maxlength="11" v-model="selectData.regisPhone"></el-input>
                    </div>
                </div>
                <div class="flex-center-Y nomalfont justify-between mb-2">
                    <div class="W-50 flex-center-Y  bold" style="line-height:4.63vh;margin-bottom:1.04vw"> *权限范围</div>
                </div>
                <div class="flex-center-Y nomalfont justify-between mb-2">
                    <div class="bold roleStyle" style="line-height:4.63vh">
                        <el-checkbox  v-for="(i,key) in selectData.typeJsonList" :key="key" v-model="i.typeFlag">
                            <div class="title">{{i.typeName}}</div>
                            <div class="word" v-if="i.typeCode=='warFlag'">库存管理、出入库办理、出入库记录查询</div>
                            <div class="word" v-else-if="i.typeCode=='purFlag'">根据采购单进行采购、采购金额报销</div>
                            <div class="word" v-else-if="i.typeCode=='repInFlag'">根据补货单内容到仓库提货，对设备进行补货操作</div>
                            <div class="word" v-else-if="i.typeCode=='repOutFlag'">将“光芽补货”外包给其他第三方服务商的补货员</div>
                        </el-checkbox>
                    </div>
                </div>
                <div class="bottom flex-center-Y" style="margin-top:5vh">
                    <div class="btn largefont" @click="backEdit">取消</div>
                    <div class="btn1 largefont" @click="editAdd1">保存</div>
                </div>
            </div>
        </el-dialog>
        <!-- 编辑账户 -->
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import clickoutside from 'element-ui/src/utils/clickoutside'
// //自定义点击外部触发事件(----------------------------------------------------此方法点击元素内部子元素也会触发clickoutside方法，舍弃【仅线上和测试服由此问题，原因不明】)
// const clickoutside = {
// // 初始化指令
//   bind(el, binding, vnode) {
//     function documentHandler(e) {
//   // 这里判断点击的元素是否是本身，是本身，则返回
//       if (el.contains(e.target)) {
//         return false;
//   }
//   // 判断指令中是否绑定了函数
//       if (binding.expression) {
//   // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
//         binding.value(e);
//       }
// }
// // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
//     el.__vueClickOutside__ = documentHandler;
//     document.addEventListener('click', documentHandler);
//   },
//   update() {},
//   unbind(el, binding) {
// // 解除事件监听
//     document.removeEventListener('click', el.__vueClickOutside__);
//     delete el.__vueClickOutside__;
//   },
// };
//自定义点击外部触发事件
export default {
    directives: {clickoutside},
    data() {
        return {
            memberList:[
                
            ],
            form:{
                userPic:"",
                nickname:"",
                username:"",
                typeJsonList:[
                    {typeName:"数据大屏",typeFlag:false,typeCode:"D"},
                    {typeName:"门店运营",typeFlag:false,typeCode:"S"},
                    {typeName:"市场营销",typeFlag:false,typeCode:"E"},
                    {typeName:"财务管理",typeFlag:false,typeCode:"F"}
                    ],
            },
            form1:{
                porprait:"",
                regisName:"",
                regisPhone:"",
                typeJsonList:[
                    {typeName:"光芽仓库",typeFlag:false,typeCode:"warFlag"},
                    // {typeName:"光芽采购",typeFlag:false,typeCode:"purFlag"},
                    {typeName:"光芽补货",typeFlag:false,typeCode:"repInFlag"},
                    // {typeName:"编外补货",typeFlag:false,typeCode:"repOutFlag"}
                    ],
            },
            typeJsonList1:[
                    {typeName:"光芽仓库",typeFlag:false,typeCode:"warFlag"},
                    // {typeName:"光芽采购",typeFlag:false,typeCode:"purFlag"},
                    {typeName:"光芽补货",typeFlag:false,typeCode:"repInFlag"},
                    // {typeName:"编外补货",typeFlag:false,typeCode:"repOutFlag"}
                    ],
            selectData:"",
            addMember:true,
            params:{
                pageNum:1,
                totalPage:1,
                pageRow:9,
            },
            addVisible:false,
            editVisible:false,
            originPhone:'',//列表编辑时的原始手机号，用来判断有没有修改手机号
            activeName:'0',
        };
    },
    created() {
        document.getElementsByTagName("body")[0].style.minWidth="1100px";
        document.getElementsByTagName("body")[0].style.overflow="auto";
        this.getList()
    },

    methods: {
        changeTab(){
            this.params.pageNum='1'
            this.getList()
        },
        hide(){
            this.addMember=true
            this.form.username=''
            this.form.nickname=''
            this.form.userPic=''
            for(let i in this.form.typeJsonList){
                this.form.typeJsonList[i].typeFlag=false
            }
        },
        toPrev(){
            this.params.pageNum-=1
            if(this.params.pageNum<=1){
                this.params.pageNum=1
            }
            this.getList()
        },
        toNext(){
            this.params.pageNum+=1
            if(this.params.pageNum>=this.params.totalPage){
                this.params.pageNum=this.params.totalPage
            }
            this.getList()
        },
        getList() {
            this.params.manageId = this.userId
            this.params.username = this.userName
            if(this.activeName==='0'){
                this.api({
                        url: "/user/list",
                        method: "post",
                        data: this.params
                    }).then(data => {
                        this.memberList = data.list;
                        for(let i in this.memberList){
                            let typeList=[]
                            for(let key in this.memberList[i].groupType.split(",")){
                                for(let g in this.memberList[i].typeJsonList){
                                    if(this.memberList[i].groupType.split(",")[key]==this.memberList[i].typeJsonList[g].typeCode){
                                        typeList.push(this.memberList[i].typeJsonList[g].typeName)
                                    }
                                }
                            }
                            this.memberList[i].typeList=typeList
                        }
                        this.params.totalPage=Math.ceil(data.totalCount/9) 
                    });
            }else{
                this.api({
                        url: "/hardware/showMobileMan",
                        method: "post",
                        data: this.params
                    }).then(data => {
                        this.memberList = data.list;
                        for(let i in this.memberList){
                            this.memberList[i].typeJsonList= JSON.parse(JSON.stringify(this.typeJsonList1)) 
                            let typeList=[]
                            if(this.memberList[i].warFlag){
                                typeList.push('warFlag')
                            }
                            if(this.memberList[i].purFlag){
                                typeList.push('purFlag')
                            }
                            if(this.memberList[i].repInFlag){
                                typeList.push('repInFlag')
                            }
                            if(this.memberList[i].repOutFlag){
                                typeList.push('repOutFlag')
                            }
                            this.memberList[i].typeList=typeList
                                for(let g in this.memberList[i].typeJsonList){
                                    this.memberList[i].typeJsonList[g].typeFlag=this.memberList[i].typeList.indexOf(this.memberList[i].typeJsonList[g].typeCode)!='-1'
                                }
                            let typeListA=[]
                            for(let i in typeList){
                                for(let key in this.typeJsonList1){
                                    if(typeList[i]==this.typeJsonList1[key].typeCode){
                                        typeListA.push(this.typeJsonList1[key].typeName)
                                    }
                                }
                            }
                            this.memberList[i].typeListA=typeListA
                            console.log(this.memberList)
                        }
                        this.params.totalPage=Math.ceil(data.totalCount/9) 
                    });
            }
            
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
        selectAvator(item){
            this.selectData=item
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
                    if(this.activeName=='0'){
                    this.form.userPic =data.filePath
                    this.form.tempPath=data.tempPath
                    }else{
                        this.form1.porprait =data.filePath
                        this.form1.tempPath=data.tempPath
                    }
                })
                .catch(e => {});
        },
        upload1(content) {
            if(this.activeName=='0'){
                let manageRoleType=''
                let typeJsonList=[]
                for(let i in this.selectData.typeJsonList){
                    if(this.selectData.typeJsonList[i].typeFlag){
                        typeJsonList.push(this.selectData.typeJsonList[i])
                    }
                }
                for(let i in typeJsonList){
                    if(i==0){
                        manageRoleType+=typeJsonList[i].typeCode
                    }else{
                        manageRoleType+=','+typeJsonList[i].typeCode
                    }
                }
                var formData = new FormData();
                formData.append("file", content.file);
                this.api({
                    url: "/uploadfile/upload",
                    method: "post",
                    data: formData
                })
                    .then(data => {
                        this.selectData.userPic =data.filePath
                        this.selectData.tempPath=data.tempPath
                        this.memberList=JSON.parse(JSON.stringify(this.memberList))
                        if(this.thumbType=='0'){
                        this.api({
                            url: "/user/addUser",
                            method: "post",
                            data: {
                                manageId:this.selectData.manageId,
                                username:this.selectData.username,
                                nickname:this.selectData.nickname,
                                userPic:this.selectData.tempPath,
                                manageRoleType:manageRoleType
                            }
                        })
                            .then(data => {
                            this.getList()
                        })
                            .catch(data =>{
                                this.getList()
                            })
                        }
                    })
                    .catch(e => {});
                }else{
                    var formData = new FormData();
                    formData.append("file", content.file);
                    this.api({
                        url: "/uploadfile/upload",
                        method: "post",
                        data: formData
                    })
                        .then(data => {
                            if(this.thumbType=='0'){
                                this.selectData.porprait =data.tempPath
                                // this.selectData.tempPath=data.tempPath
                            }else{
                                this.selectData.porprait =data.filePath
                                this.selectData.tempPath=data.tempPath
                            }
                            this.memberList=JSON.parse(JSON.stringify(this.memberList))
                            if(this.thumbType=='0'){
                            this.api({
                                url: "/hardware/updateMobileMan",
                                method: "post",
                                data: this.selectData
                            })
                                .then(data => {
                                    if(data.updateFlag){
                                        let msg=''
                                        if(data.updatePur){
                                            msg='采购员'
                                        }else if(data.updateWar){
                                            msg='仓库管理员'
                                        }else{
                                            msg='补货员'
                                        }
                                        let info=data
                                        info.userId=this.selectData.userId
                                        info.username=this.userName
                                        this.$confirm("该账号已分配"+msg+"具体权限，是否要删除选择?", {
                                            confirmButtonText: '确定',
                                            cancelButtonText: '取消',
                                            type: 'warning'
                                            }).then(() => {
                                                this.api({
                                                    url: "/hardware/updateDeleteMobile",
                                                    method: "post",
                                                    data: info
                                                })
                                                    .then(data => {
                                                    this.getList()
                                                })
                                                
                                            }).catch(() => {
                                                
                                            });
                                    }else{
                                        this.getList()
                                    }
                                
                            })
                            }
                        })
                        .catch(e => {});
                }
        },
        select(item,i){//修改权限
            if(this.addMember){//编辑
                if(item.typeList.length==1 && this.activeName=='1' && i.typeFlag){//不能取消选择最后一个权限
                    return;
                }
                if(i.typeFlag){//取消选择
                    //门店运营和营销管理绑定选择
                    if(i.typeCode=='S'){
                        for(let key in item.typeJsonList){
                            if(item.typeJsonList[key].typeCode=='E'){
                                item.typeJsonList[key].typeFlag=false
                            }
                        }
                    }
                    if(i.typeCode=='E'){
                        for(let key in item.typeJsonList){
                            if(item.typeJsonList[key].typeCode=='S'){
                                item.typeJsonList[key].typeFlag=false
                            }
                        }
                    }
                    //门店运营和营销管理绑定选择
                    i.typeFlag=false
                }else{//选择
                    //门店运营和营销管理绑定选择
                    if(i.typeCode=='S'){
                        for(let key in item.typeJsonList){
                            if(item.typeJsonList[key].typeCode=='E'){
                                item.typeJsonList[key].typeFlag=true
                            }
                        }
                    }
                    if(i.typeCode=='E'){
                        for(let key in item.typeJsonList){
                            if(item.typeJsonList[key].typeCode=='S'){
                                item.typeJsonList[key].typeFlag=true
                            }
                        }
                    }
                    //门店运营和营销管理绑定选择
                    i.typeFlag=true
                }
                if(this.activeName=='0'){
                        let manageRoleType=''
                        let typeJsonList=[]
                        for(let i in item.typeJsonList){
                            if(item.typeJsonList[i].typeFlag){
                                typeJsonList.push(item.typeJsonList[i])
                            }
                        }
                        for(let i in typeJsonList){
                            if(i==0){
                                manageRoleType+=typeJsonList[i].typeCode
                            }else{
                                manageRoleType+=','+typeJsonList[i].typeCode
                            }
                        }
                        if(manageRoleType=='D'){
                            this.$message({
                                type: "warning",
                                message: "门店运营、营销管理需搭配使用，数据大屏权限不能单独选择哦~"
                            });
                            this.getList()
                            return;
                        }
                        if(manageRoleType=='D,E,F' || manageRoleType=='D,E' || manageRoleType=='D,F'){
                            this.$message({
                                type: "warning",
                                message: "门店运营、营销管理需搭配使用，暂不支持此种权限搭配~"
                            });
                            this.getList()
                            return;
                        }
                        if(manageRoleType==''){
                            this.$message({
                                type: "warning",
                                message: "门店运营、营销管理需搭配使用，权限不能全部移除哦~"
                            });
                            this.getList()
                            return;
                        }
                        this.api({
                                    url: "/user/addUser",
                                    method: "post",
                                    data: {
                                        manageId:item.manageId,
                                        username:item.username,
                                        nickname:item.nickname,
                                        userPic:item.tempPath,
                                        manageRoleType:manageRoleType
                                    }
                                })
                                    .then(data => {
                                    this.getList()
                                }).catch(data =>{
                                this.getList()
                            })
                }else{
                    let name=i.typeCode
                    item[name]=i.typeFlag
                    this.api({
                                url: "/hardware/updateMobileMan",
                                method: "post",
                                data: item
                            })
                                .then(data => {

                                if(data.updateFlag){
                                        let msg=''
                                        if(data.updatePur){
                                            msg='采购员'
                                        }else if(data.updateWar){
                                            msg='仓库管理员'
                                        }else{
                                            msg='补货员'
                                        }
                                        let info=data
                                        info.username=this.userName
                                        info.userId=item.userId
                                        this.$confirm("该账号已分配"+msg+"具体权限，是否要删除选择?", {
                                            confirmButtonText: '确定',
                                            cancelButtonText: '取消',
                                            type: 'warning'
                                            }).then(() => {
                                                this.api({
                                                    url: "/hardware/updateDeleteMobile",
                                                    method: "post",
                                                    data: info
                                                })
                                                    .then(data => {
                                                    this.getList()
                                                })
                                                
                                            }).catch(() => {
                                                
                                            });
                                    }else{
                                        this.getList()
                                    }
                            }).catch(data => {
                                this.getList()
                            })
                }
            }else{//新增
                if(i.typeCode=='repOutFlag' && !i.typeFlag){//点击选择编外补货员,其他三项选择取消
                    for(let key in this.form1.typeJsonList){
                        this.form1.typeJsonList[key].typeFlag=false
                        if(this.form1.typeJsonList[key].typeCode=='repOutFlag'){
                            this.form1.typeJsonList[key].typeFlag=true
                        }
                    }
                }else if(i.typeCode=='repOutFlag' && i.typeFlag){
                    if(i.typeFlag){
                        i.typeFlag=false
                    }else{
                        i.typeFlag=true
                    }
                }
                if(i.typeCode!='repOutFlag'){
                    let isOut=0
                    for(let key in this.form1.typeJsonList){
                        if(this.form1.typeJsonList[key].typeCode=='repOutFlag' && this.form1.typeJsonList[key].typeFlag){//已经选中编外补货员再选其他权限的时候
                            isOut+=1
                        }
                    }
                    if(isOut>0){
                        this.$message({
                                            type: "warning",
                                            message: '不支持此种权限搭配哦~'
                                        });
                    }else{
                        if(i.typeFlag){//取消选择
                        //门店运营和营销管理绑定选择
                            if(i.typeCode=='S'){
                                for(let key in this.form.typeJsonList){
                                    if(this.form.typeJsonList[key].typeCode=='E'){
                                        this.form.typeJsonList[key].typeFlag=false
                                    }
                                }
                            }
                            if(i.typeCode=='E'){
                                for(let key in this.form.typeJsonList){
                                    if(this.form.typeJsonList[key].typeCode=='S'){
                                        this.form.typeJsonList[key].typeFlag=false
                                    }
                                }
                            }
                        //门店运营和营销管理绑定选择
                            i.typeFlag=false
                        }else{
                            //门店运营和营销管理绑定选择
                            if(i.typeCode=='S'){
                                for(let key in this.form.typeJsonList){
                                    if(this.form.typeJsonList[key].typeCode=='E'){
                                        this.form.typeJsonList[key].typeFlag=true
                                    }
                                }
                            }
                            if(i.typeCode=='E'){
                                for(let key in this.form.typeJsonList){
                                    if(this.form.typeJsonList[key].typeCode=='S'){
                                        this.form.typeJsonList[key].typeFlag=true
                                    }
                                }
                            }
                        //门店运营和营销管理绑定选择
                            i.typeFlag=true
                        }
                    }
                }
            }
        },
        editName(item,index){
            item.showName=true
            this.memberList=JSON.parse(JSON.stringify(this.memberList))
            this.$nextTick(_ => {
                this.$refs[`inputName${index}`][0].focus()
                })
        },
        commitName(item){
            item.showName=false
            this.memberList=JSON.parse(JSON.stringify(this.memberList))
            if(this.activeName=='0'){
                let manageRoleType=''
                let typeJsonList=[]
                for(let i in item.typeJsonList){
                    if(item.typeJsonList[i].typeFlag){
                        typeJsonList.push(item.typeJsonList[i])
                    }
                }
                for(let i in typeJsonList){
                    if(i==0){
                        manageRoleType+=typeJsonList[i].typeCode
                    }else{
                        manageRoleType+=','+typeJsonList[i].typeCode
                    }
                }
                this.api({
                            url: "/user/addUser",
                            method: "post",
                            data: {
                                manageId:item.manageId,
                                username:item.username,
                                nickname:item.nickname,
                                userPic:item.tempPath,
                                manageRoleType:manageRoleType
                            }
                        })
                            .then(data => {
                            this.getList()
                        }).catch(data =>{
                                this.getList()
                            })
            }else{
                if(!item.regisName){
                        this.$message({
                                    type: "warning",
                                    message: "请输入姓名~"
                                });
                                return;
                    }
                this.api({
                            url: "/hardware/updateMobileMan",
                            method: "post",
                            data: item
                        })
                            .then(data => {
                            if(data.updateFlag){
                                        let msg=''
                                        if(data.updatePur){
                                            msg='采购员'
                                        }else if(data.updateWar){
                                            msg='仓库管理员'
                                        }else{
                                            msg='补货员'
                                        }
                                        let info=data
                                        info.userId=item.userId
                                        info.username=this.userName
                                        this.$confirm("该账号已分配"+msg+"具体权限，是否要删除选择?", {
                                            confirmButtonText: '确定',
                                            cancelButtonText: '取消',
                                            type: 'warning'
                                            }).then(() => {
                                                this.api({
                                                    url: "/hardware/updateDeleteMobile",
                                                    method: "post",
                                                    data: info
                                                })
                                                    .then(data => {
                                                    this.getList()
                                                })
                                                
                                            }).catch(() => {
                                                
                                            });
                                    }else{
                                        this.getList()
                                    }
                        })
            }
        },
        editPhone(item,index){
            item.showPhone=true
            this.memberList=JSON.parse(JSON.stringify(this.memberList))
            this.$nextTick(_ => {
                this.$refs[`inputPhone${index}`][0].focus()
                })
        },
        commitPhone(item){
            if(this.activeName=='0'){
                this.api({
                            url: "/user/findIsHaveUser",
                            method: "post",
                            data: {
                                userName:item.username,
                                mobileFlag:this.activeName
                            }
                        })
                            .then(data => {
                                if (!data.returnCode) {
                                        item.showPhone=false
                                        this.memberList=JSON.parse(JSON.stringify(this.memberList))
                                        let manageRoleType=''
                                        let typeJsonList=[]
                                        for(let i in item.typeJsonList){
                                            if(item.typeJsonList[i].typeFlag){
                                                typeJsonList.push(item.typeJsonList[i])
                                            }
                                        }
                                        for(let i in typeJsonList){
                                            if(i==0){
                                                manageRoleType+=typeJsonList[i].typeCode
                                            }else{
                                                manageRoleType+=','+typeJsonList[i].typeCode
                                            }
                                        }
                                        this.api({
                                                    url: "/user/addUser",
                                                    method: "post",
                                                    data: {
                                                        manageId:item.manageId,
                                                        username:item.nickname,
                                                        nickname:item.username,
                                                        userPic:item.tempPath,
                                                        manageRoleType:manageRoleType
                                                    }
                                                })
                                                    .then(data => {
                                                    this.getList()
                                                }).catch(data =>{
                                                    this.getList()
                                                })
                                                        
                                    }else{
                                        this.$message({
                                            type: "warning",
                                            message: data.returnMsg
                                        });
                                        item.showPhone=false
                                    }
                        })
            }else{
                this.api({
                            url: "/user/findIsHaveUser",
                            method: "post",
                            data: {
                                userName:item.regisPhone,
                                mobileFlag:this.activeName
                            }
                        })
                            .then(data => {
                                if (!data.returnCode) {
                                        item.showPhone=false
                                        this.memberList=JSON.parse(JSON.stringify(this.memberList))
                                        this.api({
                                                    url: "/hardware/addMobileMan",
                                                    method: "post",
                                                    data: item
                                                })
                                                    .then(data => {
                                                    if(data.returnCode=="10092"){
                                                        this.$message({
                                                            type: "warning",
                                                            message: data.returnMsg
                                                        });
                                                    }
                                                    this.getList()
                                                })
                                    
                                    }else{
                                        this.$message({
                                            type: "warning",
                                            message: data.returnMsg
                                        });
                                        item.showPhone=false
                                    }
                        })
            }
            
        },
        deleteMember(item){
            if(this.activeName=='0'){
                this.$confirm("是否确定删除该账号?", {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                    }).then(() => {
                        this.api({
                            url: "/user/deleteManageInfo",
                            method: "post",
                            data: {
                                manageId:item.manageId,
                                username:item.username

                            }
                        })
                            .then(data => {
                            this.getList()
                            if(this.thumbType=='1'){
                                this.$message({
                                    type: "success",
                                    message: "删除成功！"
                                });
                            }
                        })
                        
                    }).catch(() => {
                        
                    });
                }else{
                    this.api({
                            url: "/hardware/deleteMobileMan",
                            method: "post",
                            data: item
                        })
                            .then(data => {
                            if(data.deleteFlag){
                                this.$confirm("该账号已被分配具体工作权限,若现在删除该账号,则该账号下所有的工作权限将暂时由主账号顶替?", {
                                confirmButtonText: '确定',
                                cancelButtonText: '取消',
                                type: 'warning'
                                }).then(() => {
                                    item.username=this.userName
                                    this.api({
                                        url: "/hardware/deleteMobile",
                                        method: "post",
                                        data: item
                                    })
                                        .then(data => {
                                        this.getList()
                                        if(this.thumbType=='1'){
                                            this.$message({
                                                type: "success",
                                                message: "删除成功！"
                                            });
                                        }
                                    })
                                    
                                }).catch(() => {
                                    
                                });
                            }else{
                                this.$confirm("是否确认删除该账号?", {
                                confirmButtonText: '确定',
                                cancelButtonText: '取消',
                                type: 'warning'
                                }).then(() => {
                                    item.updateFlag='delete'
                                    this.api({
                                        url: "/hardware/deleteMobileMan",
                                        method: "post",
                                        data: item
                                    })
                                        .then(data => {
                                        item.updateFlag=''
                                        this.getList()
                                        if(this.thumbType=='1'){
                                            this.$message({
                                                type: "success",
                                                message: "删除成功！"
                                            });
                                        }
                                    })
                                    
                                }).catch(() => {
                                    
                                });
                            }
                        })
                }
        },
        showAdd(){
            this.addMember=false
            this.addMember=JSON.parse(JSON.stringify(this.addMember))
            console.log(this.addMember)
            // this.memberList.push()
        },
        showAdd1(){//列表形式
            this.addVisible=true
        },
        editList(row){
            this.selectData= JSON.parse(JSON.stringify(row))
            this.editVisible=true
            if(this.activeName=='0'){
            this.originPhone=this.selectData.username
            }else{
                this.originPhone=this.selectData.regisPhone
            }
            console.log(this.selectData)
        },
        backAdd(){
            this.addMember=true
            this.form.username=''
            this.form.nickname=''
            this.form.userPic=''
            for(let i in this.form.typeJsonList){
                this.form.typeJsonList[i].typeFlag=false
            }
        },
        backAdd1(){
            this.addVisible=false
            this.form.username=''
            this.form.nickname=''
            this.form.userPic=''
            for(let i in this.form.typeJsonList){
                this.form.typeJsonList[i].typeFlag=false
            }
        },
        backEdit(){
            this.getList()
            this.editVisible=false
        },
        commitAdd(e){
            console.log(4444444,this.addMember)
            if(this.activeName=='0'){
                let num=0
                for(let i in this.form.typeJsonList){
                    if(this.form.typeJsonList[i].typeFlag){
                        num+=1
                    }
                }
                if(!this.form.username && !this.form.nickname && !this.form.userPic && num==0){//啥也没填过点外面是取消新建
                    this.addMember=true
                    return;
                }
                if(!this.addMember){//只在填信息的时候触发
                let manageRoleType=''
                let typeJsonList=[]
                for(let i in this.form.typeJsonList){
                    if(this.form.typeJsonList[i].typeFlag){
                        typeJsonList.push(this.form.typeJsonList[i])
                    }
                }
                for(let i in typeJsonList){
                    if(i==0){
                        manageRoleType+=typeJsonList[i].typeCode
                    }else{
                        manageRoleType+=','+typeJsonList[i].typeCode
                    }
                }
                if(manageRoleType=='D'){
                    this.$message({
                        type: "warning",
                        message: "数据大屏权限不能单独选择哦~"
                    });
                    this.getList()
                    return;
                }
                if(manageRoleType=='D,E,F' || manageRoleType=='D,E' || manageRoleType=='D,F'){
                    this.$message({
                        type: "warning",
                        message: "暂不支持此种权限搭配~"
                    });
                    this.getList()
                    return;
                }
                this.api({
                            url: "/user/findIsHaveUser",
                            method: "post",
                            data: {
                                userName:this.form.username,
                                mobileFlag:this.activeName
                            }
                        })
                            .then(data => {
                                if (!data.returnCode) {
                                    if(manageRoleType=='D'){
                                        this.$message({
                                            type: "warning",
                                            message: "数据大屏权限不能单独选择哦~"
                                        });
                                        return;
                                        
                                    }
                                    if(manageRoleType==''){
                                        this.$message({
                                            type: "warning",
                                            message: "请选择权限哦~"
                                        });
                                        return;
                                    }
                                        this.api({
                                                    url: "/user/addUser",
                                                    method: "post",
                                                    data: {
                                                        username:this.form.username,
                                                        nickname:this.form.nickname,
                                                        userPic:this.form.tempPath,
                                                        manageRoleType:manageRoleType
                                                    }
                                                })
                                                    .then(data => {
                                                    this.getList()
                                                    this.addMember=true
                                                    this.form.username=''
                                                    this.form.nickname=''
                                                    this.form.userPic=''
                                                    this.addVisible=false
                                                    if(this.thumbType=='1'){
                                                        this.$message({
                                                            type: "success",
                                                            message: "创建成功!"
                                                        });
                                                    }
                                                    for(let i in this.form.typeJsonList){
                                                        this.form.typeJsonList[i].typeFlag=false
                                                    }
                                                }).catch(data =>{
                                                    this.getList()
                                                })
                                    }else{
                                        this.$message({
                                            type: "warning",
                                            message: data.returnMsg
                                        });
                                    }
                        })
                        }
            }else{
                let num=0
                for(let i in this.form1.typeJsonList){
                    if(this.form1.typeJsonList[i].typeFlag){
                        num+=1
                    }
                }
                if(!this.form1.regisName && !this.form1.regisPhone && !this.form1.porprait && num==0){//啥也没填过点外面是取消新建
                    this.addMember=true
                    return;
                }
                if(!this.addMember){//只在填信息的时候触发
                    let manageRoleType=[]
                    for(let i in this.form1.typeJsonList){
                        if(this.form1.typeJsonList[i].typeFlag){
                            manageRoleType.push(this.form1.typeJsonList[i].typeCode)
                        }
                    }
                    if(manageRoleType.indexOf('warFlag')!='-1'){
                        this.form1.warFlag=true
                    }else{
                        this.form1.warFlag=false
                    }
                    if(manageRoleType.indexOf('purFlag')!='-1'){
                        this.form1.purFlag=true
                    }else{
                        this.form1.purFlag=false
                    }
                    if(manageRoleType.indexOf('repInFlag')!='-1'){
                        this.form1.repInFlag=true
                    }else{
                        this.form1.repInFlag=false
                    }
                    if(manageRoleType.indexOf('repOutFlag')!='-1'){
                        this.form1.repOutFlag=true
                    }else{
                        this.form1.repOutFlag=false
                    }
                    if(manageRoleType.indexOf('repOutFlag')!='-1'){//如果是编外补货员就不用检测手机号
                                if(!this.form1.regisPhone){
                                    this.$message({
                                                type: "warning",
                                                message: "请输入账号~"
                                            });
                                            return;
                                }
                                if(!this.form1.regisName){
                                    this.$message({
                                                type: "warning",
                                                message: "请输入姓名~"
                                            });
                                            return;
                                }
                                this.form1.porprait=this.form1.tempPath
                                this.api({
                                            url: "/hardware/addMobileMan",
                                            method: "post",
                                            data: this.form1
                                        })
                                            .then(data => {
                                            if(data.returnCode=="10092"){
                                                    this.$message({
                                                        type: "warning",
                                                        message: data.returnMsg
                                                    });
                                                }
                                            this.getList()
                                            this.addMember=true
                                            this.form1.regisPhone=''
                                            this.form1.regisName=''
                                            this.form1.porprait=''
                                            this.form1.tempPath=''
                                            this.addVisible=false
                                            if(this.thumbType=='1'){
                                                        this.$message({
                                                            type: "success",
                                                            message: "创建成功!"
                                                        });
                                                    }
                                            for(let i in this.form1.typeJsonList){
                                                this.form1.typeJsonList[i].typeFlag=false
                                            }
                                        })
                    }else{
                        this.api({
                                url: "/user/findIsHaveUser",
                                method: "post",
                                data: {
                                    userName:this.form1.regisPhone,
                                    mobileFlag:this.activeName
                                }
                            })
                                .then(data => {
                                    if (!data.returnCode) {
                                        if(manageRoleType.length==0){
                                            this.$message({
                                                type: "warning",
                                                message: "请选择权限~"
                                            });
                                            return;
                                            
                                        }
                                        if(!this.form1.regisName){
                                            this.$message({
                                                        type: "warning",
                                                        message: "请输入姓名~"
                                                    });
                                                    return;
                                        }
                                            this.form1.porprait=this.form1.tempPath
                                            this.api({
                                                        url: "/hardware/addMobileMan",
                                                        method: "post",
                                                        data: this.form1
                                                    })
                                                        .then(data => {
                                                            if(data.returnCode=="10092"){
                                                                this.$message({
                                                                    type: "warning",
                                                                    message: data.returnMsg
                                                                });
                                                            }
                                                        this.getList()
                                                        this.addMember=true
                                                        this.form1.regisPhone=''
                                                        this.form1.regisName=''
                                                        this.form1.porprait=''
                                                        this.form1.tempPath=''
                                                        this.addVisible=false
                                                        if(this.thumbType=='1'){
                                                        this.$message({
                                                            type: "success",
                                                            message: "创建成功!"
                                                        });
                                                    }
                                                        for(let i in this.form1.typeJsonList){
                                                            this.form1.typeJsonList[i].typeFlag=false
                                                        }
                                                    })
                                        }else{
                                            this.$message({
                                                type: "warning",
                                                message: data.returnMsg
                                            });
                                        }
                            })
                    }
                    
                }
            }
        },
        commitAdd1(){
            if(this.activeName=='0'){
            let num=0
            for(let i in this.form.typeJsonList){
                if(this.form.typeJsonList[i].typeFlag){
                    num+=1
                }
            }
            let manageRoleType=''
            let typeJsonList=[]
            for(let i in this.form.typeJsonList){
                if(this.form.typeJsonList[i].typeFlag){
                    typeJsonList.push(this.form.typeJsonList[i])
                }
            }
            for(let i in typeJsonList){
                if(i==0){
                    manageRoleType+=typeJsonList[i].typeCode
                }else{
                    manageRoleType+=','+typeJsonList[i].typeCode
                }
            }
            if(manageRoleType=='D'){
                this.$message({
                    type: "warning",
                    message: "数据大屏权限不能单独选择哦~"
                });
                this.getList()
                return;
            }
            if(manageRoleType=='D,E,F' || manageRoleType=='D,E' || manageRoleType=='D,F'){
                this.$message({
                    type: "warning",
                    message: "暂不支持此种权限搭配~"
                });
                this.getList()
                return;
            }
            this.api({
                        url: "/user/findIsHaveUser",
                        method: "post",
                        data: {
                            userName:this.form.username,
                            mobileFlag:this.activeName
                        }
                    })
                        .then(data => {
                            if (!data.returnCode) {
                                if(manageRoleType=='D'){
                                    this.$message({
                                        type: "warning",
                                        message: "数据大屏权限不能单独选择哦~"
                                    });
                                    return;
                                    
                                }
                                if(manageRoleType==''){
                                    this.$message({
                                        type: "warning",
                                        message: "请选择权限哦~"
                                    });
                                    return;
                                }
                                    this.api({
                                                url: "/user/addUser",
                                                method: "post",
                                                data: {
                                                    username:this.form.username,
                                                    nickname:this.form.nickname,
                                                    userPic:this.form.tempPath,
                                                    manageRoleType:manageRoleType
                                                }
                                            })
                                                .then(data => {
                                                this.getList()
                                                this.addMember=true
                                                this.form.username=''
                                                this.form.nickname=''
                                                this.form.userPic=''
                                                this.addVisible=false
                                                    if(this.thumbType=='1'){
                                                        this.$message({
                                                            type: "success",
                                                            message: "创建成功!"
                                                        });
                                                    }
                                                for(let i in this.form.typeJsonList){
                                                    this.form.typeJsonList[i].typeFlag=false
                                                }
                                            }).catch(data =>{
                                                this.getList()
                                            })
                                }else{
                                    this.$message({
                                        type: "warning",
                                        message: data.returnMsg
                                    });
                                }
                    })
            }else{
                let num=0
                for(let i in this.form1.typeJsonList){
                    if(this.form1.typeJsonList[i].typeFlag){
                        num+=1
                    }
                }
                    let manageRoleType=[]
                    for(let i in this.form1.typeJsonList){
                        if(this.form1.typeJsonList[i].typeFlag){
                            manageRoleType.push(this.form1.typeJsonList[i].typeCode)
                        }
                    }
                    if(manageRoleType.indexOf('warFlag')!='-1'){
                        this.form1.warFlag=true
                    }else{
                        this.form1.warFlag=false
                    }
                    if(manageRoleType.indexOf('purFlag')!='-1'){
                        this.form1.purFlag=true
                    }else{
                        this.form1.purFlag=false
                    }
                    if(manageRoleType.indexOf('repInFlag')!='-1'){
                        this.form1.repInFlag=true
                    }else{
                        this.form1.repInFlag=false
                    }
                    if(manageRoleType.indexOf('repOutFlag')!='-1'){
                        this.form1.repOutFlag=true
                    }else{
                        this.form1.repOutFlag=false
                    }
                    if(manageRoleType.indexOf('repOutFlag')!='-1'){//如果是编外补货员就不用检测手机号
                                if(!this.form1.regisPhone){
                                    this.$message({
                                                type: "warning",
                                                message: "请选择输入账号~"
                                            });
                                            return;
                                }
                                if(!this.form1.regisName){
                                    this.$message({
                                                type: "warning",
                                                message: "请输入姓名~"
                                            });
                                            return;
                                }
                                let originUrl=JSON.parse(JSON.stringify(this.form1.porprait))
                                this.form1.porprait=this.form1.tempPath
                                this.api({
                                            url: "/hardware/addMobileMan",
                                            method: "post",
                                            data: this.form1
                                        })
                                            .then(data => {
                                                if(data.returnCode=="10092"){
                                                        this.$message({
                                                            type: "warning",
                                                            message: data.returnMsg
                                                        });
                                                    }
                                            this.getList()
                                            this.form1.regisPhone=''
                                            this.form1.regisName=''
                                            this.form1.porprait=''
                                            for(let i in this.form1.typeJsonList){
                                                this.form1.typeJsonList[i].typeFlag=false
                                            }
                                            this.addVisible=false
                                            this.$message({
                                                type: "success",
                                                message: "创建成功!"
                                            });
                                        }).catch(data => {
                                                        this.form1.porprait=originUrl
                                                    })
                    }else{
                        this.api({
                                url: "/user/findIsHaveUser",
                                method: "post",
                                data: {
                                    userName:this.form1.regisPhone,
                                    mobileFlag:this.activeName
                                }
                            })
                                .then(data => {
                                    if (!data.returnCode) {
                                        if(manageRoleType.length==0){
                                            this.$message({
                                                type: "warning",
                                                message: "请选择权限~"
                                            });
                                            return;
                                            
                                        }
                                        if(!this.form1.regisName){
                                            this.$message({
                                                        type: "warning",
                                                        message: "请输入姓名~"
                                                    });
                                                    return;
                                        }
                                            let originUrl=JSON.parse(JSON.stringify(this.form1.porprait))
                                            this.form1.porprait=this.form1.tempPath
                                            this.api({
                                                        url: "/hardware/addMobileMan",
                                                        method: "post",
                                                        data: this.form1
                                                    })
                                                        .then(data => {
                                                            if(data.returnCode=="10092"){
                                                                this.$message({
                                                                    type: "warning",
                                                                    message: data.returnMsg
                                                                });
                                                            }
                                                        this.getList()
                                                        this.form1.regisPhone=''
                                                        this.form1.regisName=''
                                                        this.form1.porprait=''
                                                        for(let i in this.form1.typeJsonList){
                                                            this.form1.typeJsonList[i].typeFlag=false
                                                        }
                                                        this.addVisible=false
                                                        this.$message({
                                                            type: "success",
                                                            message: "创建成功!"
                                                        });
                                                    }).catch(data => {
                                                        this.form1.porprait=originUrl
                                                    })
                                        }else{
                                            this.$message({
                                                type: "warning",
                                                message: data.returnMsg
                                            });
                                        }
                            })
                    }
            }
        },
        editAdd1(){
            if(this.activeName=='0'){
                let num=0
                for(let i in this.selectData.typeJsonList){
                    if(this.selectData.typeJsonList[i].typeFlag){
                        num+=1
                    }
                }
                let manageRoleType=''
                let typeJsonList=[]
                for(let i in this.selectData.typeJsonList){
                    if(this.selectData.typeJsonList[i].typeFlag){
                        typeJsonList.push(this.selectData.typeJsonList[i])
                    }
                }
                for(let i in typeJsonList){
                    if(i==0){
                        manageRoleType+=typeJsonList[i].typeCode
                    }else{
                        manageRoleType+=','+typeJsonList[i].typeCode
                    }
                }
                if(manageRoleType=='D'){
                    this.$message({
                        type: "warning",
                        message: "数据大屏权限不能单独选择哦~"
                    });
                    this.getList()
                    return;
                }
                if(manageRoleType=='D,E,F' || manageRoleType=='D,E' || manageRoleType=='D,F'){
                    this.$message({
                        type: "warning",
                        message: "暂不支持此种权限搭配~"
                    });
                    this.getList()
                    return;
                }
                if(this.originPhone!=this.selectData.username){//修改了手机号
                this.api({
                            url: "/user/findIsHaveUser",
                            method: "post",
                            data: {
                                userName:this.selectData.username,
                                mobileFlag:this.activeName
                            }
                        })
                            .then(data => {
                                if (!data.returnCode) {
                                    if(manageRoleType=='D'){
                                        this.$message({
                                            type: "warning",
                                            message: "数据大屏权限不能单独选择哦~"
                                        });
                                        return;
                                        
                                    }
                                    if(manageRoleType==''){
                                        this.$message({
                                            type: "warning",
                                            message: "请选择权限哦~"
                                        });
                                        return;
                                    }
                                        this.api({
                                                    url: "/user/addUser",
                                                    method: "post",
                                                    data: {
                                                        manageId:this.selectData.manageId,
                                                        username:this.selectData.username,
                                                        nickname:this.selectData.nickname,
                                                        userPic:this.selectData.tempPath,
                                                        manageRoleType:manageRoleType
                                                    }
                                                })
                                                    .then(data => {
                                                    this.getList()
                                                    this.editVisible=false
                                                    this.$message({
                                                            type: "success",
                                                            message: "编辑成功!"
                                                        });
                                                }).catch(data =>{
                                                    this.getList()
                                                })
                                    }else{
                                        this.$message({
                                            type: "warning",
                                            message: data.returnMsg
                                        });
                                    }
                        })
                }else{//没修改手机号
                    if(manageRoleType=='D'){
                        this.$message({
                            type: "warning",
                            message: "数据大屏权限不能单独选择哦~"
                        });
                        return;
                        
                    }
                    if(manageRoleType==''){
                        this.$message({
                            type: "warning",
                            message: "请选择权限哦~"
                        });
                        return;
                    }
                        this.api({
                                    url: "/user/addUser",
                                    method: "post",
                                    data: {
                                        manageId:this.selectData.manageId,
                                        username:this.selectData.username,
                                        nickname:this.selectData.nickname,
                                        userPic:this.selectData.tempPath,
                                        manageRoleType:manageRoleType
                                    }
                                })
                                    .then(data => {
                                    this.getList()
                                    this.editVisible=false
                                    this.$message({
                                                            type: "success",
                                                            message: "编辑成功!"
                                                        });
                                }).catch(data =>{
                                        this.getList()
                                    })
                }
            }else{
                    let num=0
                    for(let i in this.selectData.typeJsonList){
                        if(this.selectData.typeJsonList[i].typeFlag){
                            num+=1
                        }
                    }
                        let manageRoleType=[]
                        for(let i in this.selectData.typeJsonList){
                            if(this.selectData.typeJsonList[i].typeFlag){
                                manageRoleType.push(this.selectData.typeJsonList[i].typeCode)
                            }
                        }
                        if(manageRoleType.indexOf('warFlag')!='-1'){
                            this.selectData.warFlag=true
                        }else{
                            this.selectData.warFlag=false
                        }
                        if(manageRoleType.indexOf('purFlag')!='-1'){
                            this.selectData.purFlag=true
                        }else{
                            this.selectData.purFlag=false
                        }
                        if(manageRoleType.indexOf('repInFlag')!='-1'){
                            this.selectData.repInFlag=true
                        }else{
                            this.selectData.repInFlag=false
                        }
                        if(manageRoleType.indexOf('repOutFlag')!='-1'){
                            this.selectData.repOutFlag=true
                        }else{
                            this.selectData.repOutFlag=false
                        }
                    if(this.originPhone!=this.selectData.regisPhone){//修改了手机号
                    this.api({
                                url: "/user/findIsHaveUser",
                                method: "post",
                                data: {
                                    userName:this.selectData.regisPhone,
                                    mobileFlag:this.activeName
                                }
                            })
                                .then(data => {
                                    if (!data.returnCode) {
                                        if(!this.selectData.regisName){
                                            this.$message({
                                                        type: "warning",
                                                        message: "请输入姓名~"
                                                    });
                                                    return;
                                        }
                                            let originUrl=JSON.parse(JSON.stringify(this.selectData.porprait))
                                            this.selectData.porprait=this.selectData.tempPath || this.selectData.porprait
                                            this.api({
                                                        url: "/hardware/addMobileMan",
                                                        method: "post",
                                                        data: this.selectData
                                                    })
                                                        .then(data => {
                                                        this.getList()
                                                        this.editVisible=false
                                                        this.$message({
                                                            type: "success",
                                                            message: "保存成功!"
                                                        });
                                                    }).catch(data => {
                                                        this.selectData.porprait=originUrl
                                                    })
                                        }else{
                                            this.$message({
                                                type: "warning",
                                                message: data.returnMsg
                                            });
                                        }
                            })
                    }else{//没修改手机号
                            let originUrl=JSON.parse(JSON.stringify(this.selectData.porprait))
                            this.selectData.porprait=this.selectData.tempPath || this.selectData.porprait
                            this.api({
                                        url: "/hardware/updateMobileMan",
                                        method: "post",
                                        data: this.selectData
                                    })
                                        .then(data => {
                                            if(data.updateFlag){
                                        let msg=''
                                        if(data.updatePur){
                                            msg='采购员'
                                        }else if(data.updateWar){
                                            msg='仓库管理员'
                                        }else{
                                            msg='补货员'
                                        }
                                        let info=data
                                        info.userId=this.selectData.userId
                                        info.username=this.userName
                                        this.$confirm("该账号已分配"+msg+"具体权限，是否要删除选择?", {
                                            confirmButtonText: '确定',
                                            cancelButtonText: '取消',
                                            type: 'warning'
                                            }).then(() => {
                                                this.api({
                                                    url: "/hardware/updateDeleteMobile",
                                                    method: "post",
                                                    data: info
                                                })
                                                    .then(data => {
                                                    this.getList()
                                                    this.editVisible=false
                                                    this.$message({
                                                                        type: "success",
                                                                        message: "保存成功!"
                                                                    });
                                                            })
                                                
                                            }).catch(() => {
                                                
                                            });
                                    }else{
                                        this.getList()
                                        this.editVisible=false
                                        this.$message({
                                                            type: "success",
                                                            message: "保存成功!"
                                                        });
                                    }
                                        
                                    }).catch(data => {
                                                        this.selectData.porprait=originUrl
                                                    })
                    }
            }
        },
    },
    computed: {
        ...mapGetters(["userId","thumbType",'userName'])
    }
};
</script>

