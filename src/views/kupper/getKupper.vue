<style lang="scss" scoped>
#kupper{
    background: #F2F4F8;
    height: 100%;
    .container{
        // min-height: 80.5vh;
        min-height: calc(100% - 0px);
        background: #fff;
        border: 1px solid #E2E5EB;
        padding: 20px;
    }
    .top{
        height: 80px;
        border: 1px solid #E2E5EB;
        border-bottom: 0;
        background: #fff;
        padding: 20px;
        position: relative;
    }
}
.blue {
    color: #286EFF;
    cursor: pointer;
    padding: 10px 6px;
}
.app-container {
    color: #333!important
}
.grey{color: #e6e6e6}
.button{width:100px;height: 32px;line-height: 32px!important;color: #fff;background:#409EFF;text-align: center;cursor: pointer;border-radius:4px;font-size:14px;justify-content: center;}
.el-upload__tip{color: #D8D8D8;font-weight: 400}
img{width: 50px;height: 50px}
.title{text-overflow: -o-ellipsis-lastline;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;}
.kupperDialog{width: 32vw!important;height: 80vh!important;padding: 3.7vh 4vw;color: #333;position: relative;border-radius: 10px;overflow: hidden;}
.kupperDialog .title{margin-bottom: 3.7vh;}
.kupperDialog .circle{width: 20px;height: 20px;background: #286EFF;border-radius: 50%;margin-right: 10px}
.kupperDialog .bottom{width: 100%;height: 5.5vh;justify-content: space-around;margin-top: 4vh;}
.kupperDialog .bottom .btn{cursor: pointer;width: 26%;height:100%;color: #286EFF;border: 1px solid #286EFF;text-align: center;line-height: 5.5vh}
.kupperDialog .bottom .btn1{cursor: pointer;width: 26%;height:100%;color: #fff;background:#286EFF;text-align: center;line-height: 5.5vh}
.kupperDialog .trangle{width:0;height:0;border-left: 0px solid transparent;border-right: 90px solid transparent;border-top: 90px solid #286EFF;position: absolute;top: -1px;left: -1px;}
.kupperDialog .trangle1{width:0;height:0;border-left: 0px solid transparent;border-right: 90px solid transparent;border-top: 90px solid rgba(237, 112, 46, 1);position: absolute;top: -1px;left: -1px;}
.kupperDialog .trangle div,.kupperDialog .trangle1 div{color: #fff;transform: rotate(315deg);position: absolute;left: 0;top: -80px;display: block;width: 90px}
.statusTab .inner{justify-content: space-between;width: 25%;margin: 4vh 0}
.statusTab .inner .box{cursor: pointer;}
textarea{height: 7vh}
.selectborder{border-bottom: 2px solid #286EFF}
.bigfont{font-size: 24px;line-height: 1.375}
.smallfont{font-size: 14px;line-height: 1.4}
.minifont{font-size: 12px;font-weight: 400}
.W-50{width: 50%}
.font-bold{font-weight: bold}
.smallMt{margin-bottom: 20px}
</style>
<style scoped>
#kupper >>> .el-tabs{width: 98px;}
#kupper >>> .el-input__inner{height: 32px;line-height: 32px;}
#kupper .el-switch__core:after,#kupper .el-switch__core{border-radius: 0}
#kupper .selectWidth .el-select{width: 60%}
#kupper .selectWidth .el-input--suffix .el-input__inner,.kupperDialog .el-input--suffix .el-input__inner{padding: 0}
#kupper .el-dialog__header,#kupper .el-dialog__body,#kupper .el-dialog__footer{padding:0}
.kupperDialog .el-input,.kupperDialog .el-textarea{font-size:20px;font-weight: 400!important;}
.kupperDialog .el-input__inner{border: 0}
.kupperDialog .inputPadding .el-input__inner{padding: 0}
#kupper .el-cascader{width: 250px}
.kupperDialog .el-textarea__inner{height: 15vh}
#kupper .filt .el-input{width: 68%}
.KupperdialogClass{border-radius: 10px;width: 32vw!important;max-height: 90vh!important}
/* 小圆点 */
.kupperDialog .el-radio__inner{width: 20px;height: 20px}
.kupperDialog .el-radio__inner::after{width: 10px;height: 10px}
.kupperDialog .el-radio__input.is-checked .el-radio__inner{border-color: #286EFF;background: #286EFF;}
/* 小圆点 */
#kupper >>> .operatorTableStyle,#kupper >>> .operatorCellStyle{color: #333}
#kupper >>> .operatorTableStyle th>.cell{font-weight: 400}
</style>
<template>
    <div class="app-container" id="kupper">
        <!-- <div class="top">
            <el-tabs v-model="activeName" type="card" @tab-click="changeTab">
                <el-tab-pane label="设备申请" name="0">
                </el-tab-pane>
                <el-tab-pane label="咖啡师申请" name="1">
                </el-tab-pane>
            </el-tabs>
            <div class="statusTab smallfont">
                <div class="inner flex-center-Y">
                    <div v-for="(item,i) in statusList" :key="i" @click="changeStatus(i,item)" :class="item.status?'box selectborder':'box'">{{item.name}}</div>
                </div>
            </div>
        </div> -->
        <div class="container">
            <div class="filt flex-center-Y smallfont" style="justify-content:space-between;margin-bottom:1vh">
                <div class="flex-center-Y" style="justify-content:flex-end;width:95%">
                    <div class="flex-center-Y" style="margin-right:20px" v-if="activeName=='0'">
                        <div>公司名称：&nbsp;</div> 
                        <el-input v-model="params.groupName" placeholder="请输入公司名称"></el-input>
                    </div>
                    <!-- <div class="flex-center-Y" style="margin-right:20px" v-if="activeName=='0'">
                        <div>所在地区：&nbsp;</div> 
                        <el-cascader :clearable="true" :options="options" v-model="cascader" @change="handleAreaChange" class="flex-2"></el-cascader>
                    </div> -->
                    <div class="flex-center-Y" style="margin-right:20px" v-if="activeName=='1'">
                        
                    </div>
                    <div class="flex-center-Y" style="margin-right:20px">
                        <div>手机号：&nbsp;</div> 
                        <el-input v-model="params.userPhone" v-if="activeName=='0'" placeholder="请输入手机号" onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;"></el-input>
                        <el-input v-model="params1.kUserPhone" v-if="activeName=='1'" placeholder="请输入手机号" onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;"></el-input>
                    </div>
                </div>
                <div class="button smallfont" @click="search">
                    搜索
                </div>
            </div>
            <el-table
                v-show="activeName=='0'"
                stripe
                :data="tableData"
                @sort-change="changeSort"
                header-row-class-name="operatorTableStyle"
                cell-class-name="operatorCellStyle"
                style="width:100%">
                <el-table-column
                prop="userName"
                label="联系人姓名"
                align="center">
                </el-table-column>
                <el-table-column
                prop="userPhone"
                label="手机号"
                align="center">
                </el-table-column>
                <el-table-column
                prop="groupName"
                label="公司名称"
                align="center">
                    <template slot-scope="scope">
                        <el-popover placement="bottom"
                            width="200"
                            trigger="hover">
                                <div slot="reference" class="title">
                                    {{scope.row.groupName}}
                                </div>
                                <span>{{scope.row.groupName}}</span>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column
                prop="address"
                label="所在地区"
                align="center">
                <template slot-scope="scope">
                    <span>{{scope.row.shengName}}</span><span>{{scope.row.quName}}</span><span>{{scope.row.shiName}}</span>
                </template>
                </el-table-column>
                <el-table-column
                prop="detailsAddress"
                label="详细地址"
                align="center">
                    <template slot-scope="scope">
                        <el-popover placement="bottom"
                            width="200"
                            trigger="hover">
                                <div slot="reference" class="title">
                                    {{scope.row.detailsAddress}}
                                </div>
                                <span>{{scope.row.detailsAddress}}</span>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column
                prop="companyPeopleNum"
                label="公司规模(人数)"
                align="center">
                </el-table-column>
                <el-table-column
                prop="Post"
                label="申请人岗位"
                align="center">
                </el-table-column>
                <!-- <el-table-column
                prop="applyNum"
                label="已参与人数"
                align="center"
                sortable="custom">
                </el-table-column> -->
                <!-- <el-table-column
                v-if="params.applyStatus=='1'"
                prop="gmtCreated"
                label="关联设备"
                align="center">
                    <template slot-scope="scope">
                        <span>{{scope.row.machineCode || '无'}}</span>
                    </template>
                </el-table-column> -->
                <el-table-column
                prop="gmtCreated"
                label="申请时间"
                align="center">
                </el-table-column>
                <!-- <el-table-column label="操作"
                                width="150"
                                align="center">
                    <template slot-scope="scope">
                        <span @click="giveOut(scope.row)"
                            v-if="scope.row.applyStatus=='1'"
                            class="blue">
                            设备发放
                        </span>
                        <span @click="test(scope.row)"
                            v-if="scope.row.applyStatus=='0'"
                            class="blue">
                            审核
                        </span>
                        <span @click="read(scope.row)"
                            v-if="scope.row.applyStatus!=='0'"
                            class="blue">
                            查看
                        </span>
                    </template>
                </el-table-column> -->
            </el-table>
            <div class="pagination-line" v-show="activeName=='0'">
                <el-pagination background
                            @current-change="currentChange"
                            :current-page="params.pageNum"
                            :page-size="params.pageRow"
                            :total="totalCount"  
                            layout="total, prev, pager, next">
                </el-pagination>
            </div>
            <el-table
                v-show="activeName=='1'"
                stripe
                :data="tableData"
                @filter-change="filterTrain"
                header-row-class-name="operatorTableStyle"
                cell-class-name="operatorCellStyle"
                style="width:100%">
                <el-table-column
                prop="kUserName"
                label="姓名"
                align="center">
                </el-table-column>
                <el-table-column
                prop="kUserSex"
                label="性别"
                align="center"
                column-key="kUserSex"
                :filters="sexFilters"
                :filter-multiple="false">
                    <template slot-scope="scope">
                        <span v-if="scope.row.kUserSex=='0'">女</span>
                        <span v-if="scope.row.kUserSex=='1'">男</span>
                    </template>
                </el-table-column>
                <el-table-column
                prop="kUserAge"
                label="年龄"
                align="center">
                </el-table-column>
                <el-table-column
                prop="kUserProfess"
                label="职业"
                align="center">
                    <template slot-scope="scope">
                        <el-popover placement="bottom"
                            trigger="hover">
                                <div slot="reference" class="title">
                                    {{scope.row.kUserProfess}}
                                </div>
                                <span>{{scope.row.kUserProfess}}</span>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column
                prop="kUserPhone"
                label="手机号"
                align="center">
                </el-table-column>
                <el-table-column
                prop="kUserTrain"
                label="是否参加过培训"
                align="center"
                column-key="kUserTrain"
                :filters="trainFilters"
                :filter-multiple="false">
                    <template slot-scope="scope">
                        <span v-if="scope.row.kUserTrain=='0'">否</span>
                        <span v-if="scope.row.kUserTrain=='1'">是</span>
                    </template>
                </el-table-column>
                <el-table-column
                prop="storeName"
                label="线下认证门店"
                align="center"
                column-key="storeName"
                :filters="storeFilters"
                :filter-multiple="false">
                    <template slot-scope="scope">
                        <span>{{scope.row.storeName || '无'}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                prop="gmtCreated"
                label="申请时间"
                align="center">
                </el-table-column>
                <el-table-column label="操作"
                                width="150"
                                align="center">
                    <template slot-scope="scope">
                        <span @click="test(scope.row)"
                            v-if="scope.row.kUserStatus=='0'"
                            class="blue">
                            审核
                        </span>
                        <span @click="read(scope.row)"
                            v-else
                            class="blue">
                            查看
                        </span>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination-line" v-show="activeName=='1'">
                <el-pagination background
                            @current-change="currentChange"
                            :current-page="params1.pageNum"
                            :page-size="params1.pageRow"
                            :total="totalCount"  
                            layout="total, prev, pager, next, jumper">
                </el-pagination>
            </div>
        </div>
        <!-- 查看弹窗 -->
        <el-dialog
            :visible.sync="reasonVisible"
            :show-close="false"
            custom-class="KupperdialogClass"
            width="32vw"
            center>
            <div class="kupperDialog" v-if="activeName=='0'">
                <div style="position:absolute;right:6%;top:4%;color:#D8D8D8;cursor:pointer">
                    <i class="el-icon-error bigfont" @click="reasonVisible=false"></i>
                </div>
                <div v-if="selectDot.applyStatus=='-1'" class="trangle1"><div class="smallfont">未通过</div></div>
                <div v-else class="trangle"><div class="smallfont">已通过</div></div>
                <div class="title bigfont font-bold">闪咖申请审核结果</div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">姓名</div>
                    <div class="W-50 flex-center-Y">{{selectDot.userName}}</div>
                </div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">联系电话</div>
                    <div class="W-50 flex-center-Y">{{selectDot.userPhone}}</div>
                </div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">公司名称</div>
                    <div class="W-50 flex-center-Y">{{selectDot.groupName}}</div>
                </div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">所在地区</div>
                    <div class="W-50 flex-center-Y">{{selectDot.address}}</div>
                </div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">详细地址</div>
                    <div class="W-50 flex-center-Y">{{selectDot.detailsAddress}}</div>
                </div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">场景规模(人数)</div>
                    <div class="W-50 flex-center-Y">{{selectDot.companyPeopleNum}}</div>
                </div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">已参与人数</div>
                    <div class="W-50 flex-center-Y">{{selectDot.applyNum}}</div>
                </div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">申请时间</div>
                    <div class="W-50 flex-center-Y">{{selectDot.gmtCreated}}</div>
                </div>
                <div class="flex-center-Y smallfont smallMt">
                    <div v-if="selectDot.applyStatus=='1'" class="W-50 font-bold">通过原因</div>
                    <div v-if="selectDot.applyStatus=='-1'" class="W-50 font-bold">不通过原因</div>
                    <div class="W-50 flex-center-Y">{{selectDot.reason  || '无'}}</div>
                </div>
                <div v-if="selectDot.applyStatus=='1'" class="smallfont smallMt" style="height:15vh;width:100%;">
                    <el-input type="textarea" maxlength="50" size="4" v-model="selectDot.noreason" placeholder="请输入驳回原因， 驳回结果及原因会以短信的方式提醒该申请人（同意申请原因选填，拒绝申请则原因必填）不超过50个字"></el-input>
                </div>
                 <div class="bottom flex-center-Y">
                    <div class="btn1 smallfont"  v-if="selectDot.applyStatus=='1'" @click="reject">驳回申请</div>
                </div>
            </div>
            <div class="kupperDialog" v-if="activeName=='1'">
                <div style="position:absolute;right:6%;top:4%;color:#D8D8D8;cursor:pointer">
                    <i class="el-icon-error bigfont" @click="reasonVisible=false"></i>
                </div>
                <div v-if="selectpeople.kUserStatus=='-1'" class="trangle1"><div class="smallfont">未通过</div></div>
                <div v-else class="trangle"><div class="smallfont">已通过</div></div>
                <div class="title bigfont font-bold">咖啡师申请审核结果</div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">姓名</div>
                    <div class="W-50 flex-center-Y">{{selectpeople.kUserName}}</div>
                </div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">性别</div>
                    <div class="W-50 flex-center-Y">{{selectpeople.kUserSex=='0'?'女':'男'}}</div>
                </div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">年龄</div>
                    <div class="W-50 flex-center-Y">{{selectpeople.kUserAge}}</div>
                </div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">职业</div>
                    <div class="W-50 flex-center-Y">{{selectpeople.kUserProfess}}</div>
                </div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">手机号</div>
                    <div class="W-50 flex-center-Y">{{selectpeople.kUserPhone}}</div>
                </div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">是否参加过培训</div>
                    <div class="W-50 flex-center-Y">{{selectpeople.kUserTrain=='1'?'是':'否'}}</div>
                </div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">线下认证门店</div>
                    <div class="W-50 flex-center-Y">{{selectpeople.storeName || '无'}}</div>
                </div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">申请时间</div>
                    <div class="W-50 flex-center-Y">{{selectpeople.gmtCreated}}</div>
                </div>
                <div class="flex-center-Y smallfont smallMt">
                    <div v-if="selectpeople.kUserStatus=='1'" class="W-50 font-bold">通过原因</div>
                    <div v-if="selectpeople.kUserStatus=='-1'" class="W-50 font-bold">不通过原因</div>
                    <div class="W-50 flex-center-Y">{{selectpeople.reason  || '无'}}</div>
                </div>
                <div v-if="selectpeople.kUserStatus=='1'" class="smallfont smallMt" style="margin-top:4vh;height:15vh;width:100%">
                    <el-input type="textarea" maxlength="50" size="4" v-model="selectpeople.noreason" placeholder="请输入驳回原因， 驳回结果及原因会以短信的方式提醒该申请人（同意申请原因选填，拒绝申请则原因必填）不超过50个字"></el-input>
                </div>
                <div class="bottom flex-center-Y">
                    <div class="btn1 smallfont" v-if="selectpeople.kUserStatus=='1'" @click="reject">驳回申请</div>
                </div>
            </div>
        </el-dialog>
        <!-- 审核弹窗 -->
        <el-dialog
            :visible.sync="testVisible"
            :show-close="false"
            custom-class="KupperdialogClass"
            width="32vw"
            center>
            <div class="kupperDialog" v-if="activeName=='0'">
                <div style="position:absolute;right:6%;top:4%;color:#D8D8D8;cursor:pointer">
                    <i class="el-icon-error bigfont" @click="testVisible=false"></i>
                </div>
                <div class="title bigfont font-bold">闪咖申请审核</div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">姓名</div>
                    <div class="W-50 flex-center-Y">{{selectDot.userName}}</div>
                </div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">联系电话</div>
                    <div class="W-50 flex-center-Y">{{selectDot.userPhone}}</div>
                </div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">公司名称</div>
                    <div class="W-50 flex-center-Y">{{selectDot.groupName}}</div>
                </div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">所在地区</div>
                    <div class="W-50 flex-center-Y">{{selectDot.address}}</div>
                </div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">详细地址</div>
                    <div class="W-50 flex-center-Y">{{selectDot.detailsAddress}}</div>
                </div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">场景规模(人数)</div>
                    <div class="W-50 flex-center-Y">{{selectDot.companyPeopleNum}}</div>
                </div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">已参与人数</div>
                    <div class="W-50 flex-center-Y">{{selectDot.applyNum}}</div>
                </div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">申请时间</div>
                    <div class="W-50 flex-center-Y">{{selectDot.gmtCreated}}</div>
                </div>
                <div class="flex-center-Y smallfont smallMt">
                    <el-input type="textarea" maxlength="50" v-model="reason" size="4" placeholder="请输入审核结果原因，审核结果及原因会以短信的方式提醒该申请人（同意申请原因选填，拒绝申请则原因必填）不超过50个字"></el-input>
                </div>
                <div class="bottom flex-center-Y">
                    <div class="btn smallfont" @click="refuse">拒绝申请</div>
                    <div class="btn1 smallfont" @click="agree">同意申请</div>
                </div>
            </div>
            <div class="kupperDialog" v-if="activeName=='1'">
                <div style="position:absolute;right:6%;top:4%;color:#D8D8D8;cursor:pointer">
                    <i class="el-icon-error bigfont" @click="testVisible=false"></i>
                </div>
                <div class="title bigfont font-bold">咖啡师申请审核</div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">姓名</div>
                    <div class="W-50 flex-center-Y">{{selectpeople.kUserName}}</div>
                </div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">性别</div>
                    <div class="W-50 flex-center-Y">{{selectpeople.kUserSex=='0'?'女':'男'}}</div>
                </div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">年龄</div>
                    <div class="W-50 flex-center-Y">{{selectpeople.kUserAge}}</div>
                </div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">职业</div>
                    <div class="W-50 flex-center-Y">{{selectpeople.kUserProfess}}</div>
                </div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">手机号</div>
                    <div class="W-50 flex-center-Y">{{selectpeople.kUserPhone}}</div>
                </div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">是否参加过培训</div>
                    <div class="W-50 flex-center-Y">{{selectpeople.kUserTrain=='1'?'是':'否'}}</div>
                </div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">线下认证门店</div>
                    <div class="W-50 flex-center-Y">{{selectpeople.storeName || '无'}}</div>
                </div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">申请时间</div>
                    <div class="W-50 flex-center-Y">{{selectpeople.gmtCreated}}</div>
                </div>
                <div class="flex-center-Y smallfont smallMt" style="margin-top:4vh">
                    <el-input type="textarea" maxlength="50" size="4"  v-model="reason1" placeholder="请输入审核结果原因，审核结果及原因会以短信的方式提醒该申请人（同意申请原因选填，拒绝申请则原因必填）不超过50个字"></el-input>
                </div>
                <div class="bottom flex-center-Y">
                    <div class="btn smallfont" @click="refuse">拒绝申请</div>
                    <div class="btn1 smallfont" @click="agree">同意申请</div>
                </div>
            </div>
        </el-dialog>
        <!-- 设备发放弹窗 -->
        <el-dialog
            :visible.sync="giveVisible"
            :show-close="false"
            custom-class="KupperdialogClass"
            width="32vw"
            center>
            <div class="kupperDialog" v-if="activeName=='0'">
                <div style="position:absolute;right:6%;top:4%;color:#D8D8D8;cursor:pointer">
                    <i class="el-icon-error bigfont" @click="giveVisible=false"></i>
                </div>
                <div class="title bigfont font-bold">闪咖管理发放</div>
                <div class="flex-center-Y smallfont smallMt">
                    <div class="W-50 font-bold">设备SN号</div>
                    <div class="W-50 flex-center-Y"> 
                        <el-select v-model="selectDot.machineCode" placeholder="请选择机器" @change="changeMachine">
                            <el-option
                            v-for="item in machineList"
                            :key="item.machineCode"
                            :label="item.machineCode"
                            :value="item.machineCode">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div class="flex-center-Y smallfont smallMt" v-if="selectDot.machineCode">
                    <div class="W-50 font-bold">售货机类型</div>
                    <div class="W-50 flex-center-Y">{{selectMachineData.typeDetals}}</div>
                </div>
                <div class="flex-center-Y smallfont smallMt" v-if="selectDot.machineCode">
                    <div class="W-50 font-bold">设备名称</div>
                    <div class="W-50 flex-center-Y inputPadding">
                        <el-input ref="editInput" v-if="showEdit" v-model="selectMachineData.typeName" @blur="saveName"></el-input>
                        <span v-else>{{selectMachineData.typeName}}</span>&nbsp;
                        <i class="el-icon-edit" @click="editName"></i>
                    </div>
                </div>
                <div class="flex-center-Y smallfont smallMt" v-if="selectDot.machineCode">
                    <div class="W-50 font-bold">货道类型</div>
                    <div class="W-50 flex-center-Y">{{selectMachineData.trailsType}}</div>
                </div>
                <div class="flex-center-Y smallfont smallMt" v-if="selectDot.machineCode">
                    <div class="W-50 font-bold">设备状态</div>
                    <div class="W-50 flex-center-Y">{{selectMachineData.machineStatus}}</div>
                </div>
                <div class="flex-center-Y smallfont smallMt" v-if="selectDot.machineCode">
                    <div class="W-50 font-bold">所属门店</div>
                    <div class="W-50 flex-center-Y">{{selectMachineData.storeName}}</div>
                </div>
                <div class="flex-center-Y smallfont smallMt" v-if="selectDot.machineCode">
                    <div class="W-50 font-bold">激活时间</div>
                    <div class="W-50 flex-center-Y">{{selectMachineData.gmtActivated}}</div>
                </div>
                <div class="bottom flex-center-Y" style="width:100%;position:absolute;bottom:6vh;left:0">
                     <div v-if="selectDot.machineName" class="btn smallfont" @click="removeBind">解除绑定</div>
                     <div v-else class="btn smallfont">解除绑定</div>
                    <div class="btn1 smallfont" @click="saveGive">确认修改</div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import {regionData ,CodeToText} from 'element-china-area-data';
export default {
    data(){
        return{
            tableData: [{}],
            params: {
                pageNum:1,
                pageRow:8,
                applyStatus:"0",
                numInfo:"companyPeopleNum",
                sc:"ASC",
                kUserTrain:"",
                kUserSex:""
                },
            params1: {
                pageNum:1,
                pageRow:8,
                kUserStatus:"0"
                },
            options: regionData,
            cascader:[],
            totalCount: 0,
            activeName:"0",
            statusList:[{id:"0",name:"未审核",status:true,value:"0"},{id:"1",name:"已通过",value:"1"},{id:"2",name:"未通过",value:"-1"}],
            selectStatus:"",//审核状态
            companyName:"",
            testVisible:false,
            reasonVisible:false,
            giveVisible:false,
            applyId:"",
            selectDot:"",
            sn:"",
            selectpeople:"",
            reason:"",
            reason1:"",
            trainFilters:[{ text: '是', value: '1' }, { text: '否', value: '0' }],
            sexFilters:[{ text: '男', value: '1' }, { text: '女', value: '0' }],
            storeFilters:[],
            machineList:[],
            allMachineList:[],
            selectMachine:"",
            selectMachineData:"",
            showEdit:false,
        }
    },
    created(){
        this.getList()
        this.getMachineList()
    },
    methods:{
        changeMachine(){
            for(let i in this.machineList){
                if(this.selectDot.machineCode==this.machineList[i].machineCode){
                    this.selectMachineData=this.machineList[i]
                }
            }
        },
        changeTab(){
            this.getList()
            this.api({
                    url: "/kupper/showStoreList",
                    method: "post",
                    data:{}
                }).then(data => {
                    this.storeFilters=data
                    for(let i in this.storeFilters){
                        this.storeFilters[i].text=this.storeFilters[i].storeName
                        this.storeFilters[i].value=this.storeFilters[i].storeCode
                    }
                });
        },
        changeStatus(index,item){//换审核状态
            for(let i in this.statusList){
                this.statusList[i].status=false
            }
            this.statusList[index].status=true
            this.selectStatus=item.id
            this.statusList=JSON.parse(JSON.stringify(this.statusList))
            this.params.applyStatus=this.statusList[index].value
            this.params1.kUserStatus=this.statusList[index].value
            this.getList()
            
        },
        changeSort(column, prop, order ){//切换排序
            this.params.numInfo=column.prop
            if(column.order=="ascending"){
                this.params.sc="ASC"
            }else{
                this.params.sc="DESC"
            }
            this.getList()
            
        },
        handleAreaChange(value){
            if(value.length == 1){
                this.params.sheng = value[0]
                this.params.shi = null
                this.params.qu = null
            }else if(value.length == 2){
                this.params.sheng = value[0]
                this.params.shi = value[1]
                this.params.qu = null
            }else{
                this.params.sheng = value[0]
                this.params.shi = value[1]
                this.params.qu = value[2]
            }
            this.params.shengName = CodeToText[this.goodsData.sheng]
            this.params.shiName = CodeToText[this.goodsData.shi]
            this.params.quName = CodeToText[this.goodsData.qu]
        },
        search(){
            this.params.pageNum=1
            this.getList()
        },
        filterTrain(value){//筛选
            if(value.kUserTrain  && value.kUserTrain.length>0){
                this.params1.kUserTrain=value.kUserTrain[0]
                this.getList()
            }else{
                this.params1.kUserTrain=""
                this.getList()
            }
            if(value.kUserSex && value.kUserSex.length>0){
                this.params1.kUserSex=value.kUserSex[0]
                this.getList()
            }else{
                this.params1.kUserSex=""
                this.getList()
            }
            if(value.storeName && value.storeName.length>0){
                this.params1.storeCode=value.storeName[0]
                this.getList()
            }else{
                this.params1.storeCode=""
                this.getList()
            }
        },
        getMachineList(){
            this.api({
                    url: "/kupper/unVendList",
                    method: "post",
                    data:{}
                }).then(data => {
                    this.machineList=data.unList
                    this.allMachineList=data.allList
                });
        },
        getList() {
            this.listLoading = true;
            if(this.activeName=='0'){
                this.api({
                    url: "/shopping/find/machine",
                    method: "post",
                    data: this.params
                }).then(data => {
                    this.listLoading = false;
                    this.tableData=data.list
                    this.totalCount = data.totalCount;
                });
            }else if(this.activeName=='1'){
                this.api({
                    url: "/kupper/user/showBartisraList",
                    method: "post",
                    data: this.params1
                }).then(data => {
                    this.listLoading = false;
                    this.tableData=data.list
                    this.totalCount = data.totalCount;
                });
            }
                
        },
        currentChange(index) {
            if(this.activeName=='0'){
                this.params.pageNum = index;
                this.getList(this.params);
            }else{
                this.params1.pageNum = index;
                this.getList(this.params1)
            }
        },
        prevClick(index) {
            if(this.activeName=='0'){
                this.params.pageNum = index;
                this.getList(this.params);
            }else{
                this.params1.pageNum = index;
                this.getList(this.params1)
            }
        },
        nextClick(index) {
            if(this.activeName=='0'){
                this.params.pageNum = index;
                this.getList(this.params);
            }else{
                this.params1.pageNum = index;
                this.getList(this.params1)
            }
        },
        test(row){//审核
            this.testVisible=true
            if(this.activeName=='0'){
                this.applyId=row.applyId
            }else{
                this.sn=row.sn
            }
            this.getDetail()
        },
        giveOut(row){//设备发放
            this.selectMachineData=""
            this.giveVisible=true
            this.applyId=row.applyId
            this.getDetail()
        },
        editName(){//修改发放闪咖的名字
            this.showEdit=true
            this.$nextTick(function () {
                this.$refs.editInput.focus()
            })
        },
        saveName(){
            this.showEdit=false
        },
        saveGive(){//确认修改
            this.$confirm('是否确认修改?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    if(!this.selectDot.machineCode){
                        this.$message({
                            type: 'error',
                            message: '请选择绑定机器!'
                        });
                        return;
                    }
                    this.api({
                        url: "/kupper/model/addMachineForKupperUser",
                        method: "post",
                        data: {
                            applyId:this.selectDot.applyId,
                            machineCode:this.selectDot.machineCode,
                            typeName:this.selectMachineData.typeName
                            }
                    }).then(data => {
                        this.$message({
                            type: 'success',
                            message: '修改成功!'
                        });
                        this.giveVisible=false
                        this.getMachineList()
                        this.getList()  
                    });
                }).catch(() => {         
                });
        },
        reject(){//驳回申请
            this.$confirm('是否确认驳回申请?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    if(this.activeName=='0'){
                        if(!this.selectDot.noreason){
                            this.$message({
                            type: 'error',
                            message: '请填写驳回理由!'
                        });
                        return;
                        }
                        this.api({
                            url: "/kupper/model/modelInfoReject",
                            method: "post",
                            data: {applyId:this.selectDot.applyId,reason:this.selectDot.noreason}
                        }).then(data => {
                            this.$message({
                            type: 'success',
                            message: '驳回成功!'
                        });
                        this.reasonVisible=false 
                        this.getList()
                        });
                    }else{
                        if(!this.selectpeople.noreason){
                            this.$message({
                            type: 'error',
                            message: '请填写驳回理由!'
                        });
                        return;
                        }
                        this.api({
                            url: "/kupper/user/kupperUserReject",
                            method: "post",
                            data: {sn:this.selectpeople.sn,reason:this.selectpeople.noreason}
                        }).then(data => {
                            this.$message({
                            type: 'success',
                            message: '驳回成功!'
                        });
                            this.reasonVisible=false  
                            this.getList()
                        });
                    }
                    
                }).catch(() => {   
                        
                });
        },
        read(row){//查看
            this.reasonVisible=true
            if(this.activeName=='0'){
                this.applyId=row.applyId
            }else{
                this.sn=row.sn
            }
            this.getDetail()
        },
        removeBind(){//解除绑定
            this.$confirm('是否确认解除绑定?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.api({
                        url: "/kupper/unTying",
                        method: "post",
                        data: {applyId:this.selectDot.applyId,machineCode:this.selectDot.machineCode}
                    }).then(data => {
                        this.$message({
                        type: 'success',
                        message: '解绑成功!'
                    });
                    this.giveVisible=false
                    this.getMachineList()
                    this.getList()  
                    });
                }).catch(() => {   
                        
                });
        },
        delLine(row){//删除
            this.$confirm('是否确认删除?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.api({
                        url: "/kupper/deleteApply",
                        method: "post",
                        data: {applyId:row.applyId}
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
        getDetail(){
            if(this.activeName=='0'){
                this.api({
                    url: "/kupper/model/showAllModelDetails",
                    method: "post",
                    data: {applyId:this.applyId}
                }).then(data => {
                    this.selectDot=data
                    for(let i in this.allMachineList){
                        if(this.selectDot.machineCode==this.allMachineList[i].machineCode){
                            this.selectMachineData=this.allMachineList[i]
                        }
                    }
                });
            }else{
                this.api({
                    url: "/kupper/user/showBartisraDetails",
                    method: "post",
                    data: {sn:this.sn}
                }).then(data => {
                    this.selectpeople=data
                });
            }
        },
        agree(){//同意申请
            this.$confirm('是否确认通过该申请?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                if(this.activeName=='0'){
                // if(!this.selectMachine){
                //     this.$message({
                //         type: 'error',
                //         message: '请选择绑定机器!'
                //     });
                //     return;
                // }
                this.api({
                    url: "/kupper/model/examine",
                    method: "post",
                    data: {
                        applyId:this.applyId,reason:this.reason,applyStatus:"1",
                        // machineCode:this.selectMachine
                        }
                }).then(data => {
                    this.$message({
                        type: 'success',
                        message: '同意成功!'
                    });
                    this.selectMachine=""
                    this.testVisible=false
                    this.getList()
                });
                }else{
                    this.api({
                    url: "/kupper/user/kupperUserExamine",
                    method: "post",
                    data: {sn:this.sn,reason:this.reason1,kUserStatus:"1"}
                }).then(data => {
                    this.$message({
                        type: 'success',
                        message: '同意成功!'
                    });
                    this.testVisible=false
                    this.getList()
                });
                }
                }).catch(() => {         
                });
        },
        refuse(){//拒绝申请
            this.$confirm('是否确认拒绝该申请?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                if(this.activeName=='0'){
                if(!this.reason){
                     this.$message({
                        type: 'error',
                        message: '请输入拒绝原因!'
                    });
                    return;
                }
                this.api({
                    url: "/kupper/model/examine",
                    method: "post",
                    data: {applyId:this.applyId,reason:this.reason,applyStatus:"-1"}
                }).then(data => {
                    this.$message({
                        type: 'success',
                        message: '拒绝成功!'
                    });
                    this.testVisible=false
                    this.getList()
                });
                }else{
                     if(!this.reason1){
                        this.$message({
                            type: 'error',
                            message: '请输入拒绝原因!'
                        });
                        return;
                    }
                    this.api({
                    url: "/kupper/user/kupperUserExamine",
                    method: "post",
                    data: {sn:this.sn,reason:this.reason1,kUserStatus:"-1"}
                }).then(data => {
                    this.$message({
                        type: 'success',
                        message: '拒绝成功!'
                    });
                    this.testVisible=false
                    this.getList()
                });
                }
                }).catch(() => {         
                });
        },
    },
    computed: {
        ...mapGetters(["userName"])
    }
}
</script>



   