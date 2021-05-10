<style lang="scss" scoped>
.title1{
    font-size: 1.56vw;
    text-align: center;
    font-weight: 600;
    padding: 4.3vh;
}
.content{
    font-size: 14px;
    padding: 0 20vw;
    margin: 20px auto;
}
.center {
    text-align: center;
}
.bold{font-weight: bold}
.bigfont{font-size: 0.9375vw}
p{font-size: 0.8333vw;line-height: 2}
.box{width: 41.7vw;height: 58.7vh;border: 1px solid rgba(151, 151, 151, 1);margin: 0 auto;position: relative;}
.check{position: absolute;bottom: -4vh;left: 0;font-size: 0.8333vw}
.word{position: absolute;top: 0vh;left: 0;padding: 1vw;width: 100%;height: 100%;overflow-y:auto;}
.tip{position: absolute;bottom:2vh;right: 1vw;font-size: 0.8333vw}
.bbtn{width: 100%;height: 5.6vh;font-size: 1.04vw;color: #fff;background-color: rgba(201, 201, 201, 1);position: absolute;bottom: -12vh;left: 0;;line-height: 3vw;text-align: center}
.bbtn1{background-color: rgba(40, 110, 255, 1)}
.getCouponDialog{width: 23vw!important;height:25vh!important;padding: 2vh 2vw;color: #333;position: relative}
.getCouponDialog .title{margin-bottom: 1vh;font-weight: 600}
.getCouponDialog .word{font-weight: 500;line-height: 1.5}
.getCouponDialog .bottom{width: 100%;height: 4.5vh;justify-content: space-around;position: absolute;left: 0;bottom: 2vh}
.getCouponDialog .bottom .btn1{cursor: pointer;width: 20%;height:100%;color: #fff;background:#286EFF;text-align: center;line-height: 4.5vh}
.getCouponDialog .bottom .btn2{cursor: pointer;width: 20%;height:100%;color: #286EFF;border: 1px solid #286EFF;text-align: center;line-height: 4.5vh}
img{width: 50px;height: 50px}
</style>
<style scoped>
.getCouponClass .el-dialog__header,.getCouponClass .el-dialog__body,.getCouponClass .el-dialog__footer{padding:0}
.getCouponClass{width: 23vw!important;max-height: 30vh!important}
.blue {
    color: #286EFF;
    cursor: pointer;
    padding: 10px 6px;
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
.button{cursor: pointer;z-index: 10;width: 8vw;height: 4.8vh;color: #fff;background:#286EFF;text-align: center;line-height: 4.8vh!important;position: absolute;right: 2vw;top: 4vh}
.el-upload__tip{color: #D8D8D8;font-weight: 400}
.el-card{height: 85vh;padding:2vw 2vw;border-radius:5px;border-radius:20px;overflow: auto}
.title{text-overflow: -o-ellipsis-lastline;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;}
.kupperDialog{width: 32vw!important;height: 80vh!important;padding: 3.7vh 3vw;color: #333;position: relative}
.kupperDialog .title{margin-bottom: 3.7vh;}
.kupperDialog .circle{width: 20px;height: 20px;background: #286EFF;border-radius: 50%;margin-right: 10px}
.kupperDialog .bottom{width: 100%;height: 5.5vh;justify-content: space-around;position: absolute;left: 0;bottom: 5vh}
.kupperDialog .bottom .btn{cursor: pointer;width: 26%;height:100%;color: #286EFF;border: 1px solid #286EFF;text-align: center;line-height: 5.5vh}
.kupperDialog .bottom .btn1{cursor: pointer;width: 26%;height:100%;color: #fff;background:#286EFF;text-align: center;line-height: 5.5vh}
#kupper .el-tabs{width: 15.75vw}
.kupperDialog1{width: 48vw!important;}
.inputWidth .el-input{width: 30%}
.inputWidth1 .el-input{width: 50%}
.justy-end{justify-content: flex-end}
.bigfont{font-size: 24px;line-height: 1.375}
.smallfont{font-size: 20px;line-height: 1.4}
.minifont{font-size: 12px;font-weight: 400}
.W-50{width: 50%}
.W-30{width: 30%}
.W-70{width: 70%}
.font-bold{font-weight: bold}
.smallMt{margin-bottom: 1.8vh}
@media screen and (max-width:1680px) {
    .bigfont{font-size: 20px;}
    .smallfont{font-size: 18px;}
    .minifont{font-size: 10px;}
    /* .avatar-uploader-icon {width: 100px;height: 100px;line-height: 100px;}
    .avatar {width: 100px;height: 100px;} */
}
@media screen and (max-width:1440px) {
    .bigfont{font-size: 18px;}
    .smallfont{font-size: 16px;}
    .minifont{font-size: 10px;}
}
@media screen and (max-width:1280px) {
    .bigfont{font-size: 16px;}
    .smallfont{font-size: 14px;}
    .minifont{font-size: 8px;}
}
</style>
<style>
#getCoupon .el-checkbox__input.is-checked+.el-checkbox__label{color: rgba(40, 110, 255, 1);font-size: 0.8333vw}
#getCoupon .el-checkbox__label{font-size: 0.8333vw}
#getCoupon .el-checkbox__inner{width: 0.9vw;height: 0.9vw}
#getCoupon .el-checkbox__inner::after{width: 0.26vw;height: 0.42vw}
#getCoupon .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{background: rgba(40, 110, 255, 1);width: 0.9vw;height: 0.9vw}
#kupper .el-switch__core:after,#kupper .el-switch__core{border-radius: 0}
#kupper .el-dialog__header,#kupper .el-dialog__body,#kupper .el-dialog__footer{padding:0}
#kupper .el-tabs__item{font-size: 1.04vw;height: 5.5vh;line-height: 5.5vh;width: 7.8vw;text-align: center}
.kupperDialog .el-input,.kupperDialog .el-textarea{font-size:20px;font-weight: 400!important;}
.kupperDialog .el-input__inner,.kupperDialog .el-textarea__inner{border: 0}
.KupperdialogClass{border-radius: 10px;width: 32vw!important;max-height: 90vh!important}
.KupperdialogClass1{width: 48vw!important;}
#kupper .input-align .el-input__inner{text-align: right}
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
}
@media screen and (max-width:1440px) {
    .operatorTableStyle{font-size: 14px;}
    .operatorCellStyle{font-size: 12px;}
    #operator .el-tabs__item{font-size: 16px}
    .kupperDialog .el-input,.kupperDialog .el-textarea{font-size:16px;}
}
@media screen and (max-width:1280px) {
    .operatorTableStyle{font-size: 12px;}
    .operatorCellStyle{font-size: 10px;}
    #operator .el-tabs__item{font-size: 14px}
    .kupperDialog .el-input,.kupperDialog .el-textarea{font-size:14px;}
}
</style>
<template>
    <div v-if="couponFlag" class="app-container" id="kupper">
        <el-card style="position:relative">
        <div style="position:absolute;top:7%;left:22%;color:#999;font-size:0.8333vw;cursor:pointer;z-index:10" @click="showRule=true"><i class="el-icon-question"></i> 优惠券技术服务协议</div>
        <div class="button smallfont" @click="addConfig">添加配置</div>
        <el-tabs v-model="activeName" type="card" @tab-click="changeTab">
            <el-tab-pane label="满减券" name="0">
            </el-tab-pane>
            <el-tab-pane label="折扣券" name="1">
            </el-tab-pane>
            <el-tab-pane v-if="showBag" label="卡券包" name="2">
            </el-tab-pane>
        </el-tabs>
        <el-table
            v-show="activeName=='0'"
            stripe
            :data="tableData"
            header-row-class-name="operatorTableStyle"
            cell-class-name="operatorCellStyle"
            style="width:100%">
            <el-table-column
            prop="name"
            label="优惠券名称"
            align="center">
            </el-table-column>
            <el-table-column
            prop="ruleTypeDetails"
            label="优惠内容"
            align="center">
            </el-table-column>
            <el-table-column
            prop="wheelRank"
            label="有效期"
            align="center">
                <template slot-scope="scope">
                    <div>领券当日起</div>
                    <div>{{scope.row.validity}}天内可用</div>
                </template>
            </el-table-column>
            <el-table-column
            prop="needIntegral"
            label="兑换所需积分"
            align="center">
                <template slot-scope="scope">
                    <div>{{scope.row.needIntegral || '不可兑换'}}</div>
                </template>
            </el-table-column>
            <el-table-column
            prop="gmtCreated"
            label="创建时间"
            align="center">
            </el-table-column>
            <el-table-column label="操作"
                             width="150"
                             align="center">
                <template slot-scope="scope">
                    <span @click="deleteCoupon(scope.row)"
                          class="blue">
                        删除
                    </span>
                </template>
            </el-table-column>
        </el-table>
        <el-table
            v-show="activeName=='1'"
            stripe
            :data="tableData"
            header-row-class-name="operatorTableStyle"
            cell-class-name="operatorCellStyle"
            style="width:100%">
            <el-table-column
            prop="name"
            label="优惠券名称"
            align="center">
            </el-table-column>
            <el-table-column
            prop="ruleTypeDetails"
            label="优惠内容"
            align="center">
            </el-table-column>
            <el-table-column
            prop="wheelRank"
            label="有效期"
            align="center">
                <template slot-scope="scope">
                    <div>领券当日起</div>
                    <div>{{scope.row.validity}}天内可用</div>
                </template>
            </el-table-column>
            <el-table-column
            prop="needIntegral"
            label="兑换所需积分"
            align="center">
                <template slot-scope="scope">
                    <div>{{scope.row.needIntegral || '不可兑换'}}</div>
                </template>
            </el-table-column>
            <el-table-column
            prop="gmtCreated"
            label="创建时间"
            align="center">
            </el-table-column>
            <el-table-column label="操作"
                             width="150"
                             align="center">
                <template slot-scope="scope">
                    <span @click="deleteCoupon(scope.row)"
                          class="blue">
                        删除
                    </span>
                </template>
            </el-table-column>
        </el-table>
        <el-table
            v-show="activeName=='2'"
            stripe
            :data="tableData"
            header-row-class-name="operatorTableStyle"
            cell-class-name="operatorCellStyle"
            style="width:100%">
            <el-table-column
                prop="giftPic"
                label="卡券包图片"
                align="center">
                    <template slot-scope="scope">
                        <div>
                            <img :src="scope.row.giftPic" alt="">
                        </div>
                    </template>
            </el-table-column>
            <el-table-column
            prop="giftName"
            label="卡券包名称"
            align="center">
            </el-table-column>
            <el-table-column
            prop="needPrice"
            label="价格(元)"
            align="center">
            </el-table-column>
            <el-table-column
            prop="articleName"
            label="卡券包内容"
            align="center">
                <template slot-scope="scope">
                     <div v-for="(item,i) in scope.row.ticketList" :key="i">{{item.name}}*{{item.ticketNum}}</div>
                </template>
            </el-table-column>
            <el-table-column
            prop="gmtCreated"
            label="创建时间"
            align="center">
            </el-table-column>
            <el-table-column label="操作"
                             width="150"
                             align="center">
                <template slot-scope="scope">
                    <span @click="deleteCouponPackage(scope.row)"
                          class="blue">
                        删除
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
                           layout="total, prev, pager, next, jumper">
            </el-pagination>
        </div>
        </el-card>
        <!-- 满减券 -->
        <el-dialog
            :visible.sync="indexVisible"
            :close-on-click-modal="false"
            :show-close="false"
            custom-class="KupperdialogClass"
            width="32vw"
            center>
            <div class="kupperDialog">
                <div class="title bigfont font-bold">{{dialogTitle}}</div>
                <div class="flex-center-Y smallfont font-bold smallMt">
                    <div class="W-50 flex-center-Y"> <el-radio></el-radio>满减券</div>
                </div>
                <div class="flex-center-Y smallfont smallMt input-align">
                    <div class="W-30 font-bold">*卡券名称</div>
                    <div class="W-70 flex-center-Y justy-end"><el-input maxlength="15" v-model="selectData.name" placeholder="请输入卡券名称"></el-input></div>
                </div>
                <div class="flex-center-Y smallfont smallMt inputWidth">
                    <div class="W-30 font-bold">*优惠内容</div>
                    <div class="W-70 flex-center-Y justy-end">满<el-input type="number" v-model="selectData.fullNum" placeholder="请输入"></el-input>元,减<el-input type="number" v-model="selectData.subNum" placeholder="请输入"></el-input>元</div>
                </div>
                <div class="flex-center-Y smallfont smallMt input-align">
                    <div class="W-30 font-bold">*兑换所需积分</div>
                    <div class="W-70 flex-center-Y justy-end"><el-input type="number" v-model="selectData.needIntegral" placeholder="请输入兑换所需积分"></el-input></div>
                </div>
                <div class="flex-center-Y smallfont smallMt inputWidth">
                    <div class="W-30 font-bold">*有效期</div>
                    <div class="W-70 flex-center-Y justy-end">领券当日起<el-input type="number" v-model="selectData.validity" placeholder="请输入"></el-input>天内可用</div>
                </div>
                <div class="flex-center-S smallfont smallMt input-align">
                    <div class="W-30 font-bold">*使用规则</div>
                    <div class="W-70 flex-center-Y justy-end" style="color:#c0c4cc">
                        该券可在氪普闪咖上购买全品类商品时使用，掉货即选取最优惠的一张券进行结算，可与会员优惠同享。
                    </div>
                </div>
                <div class="bottom flex-center-Y">
                    <div class="btn smallfont" @click="backIndex">取消</div>
                    <div v-if="iscomplete" class="btn1 smallfont" @click="saveIndex">确定</div>
                    <div v-else class="btn1 smallfont"><i class="el-icon-loading"></i></div>
                </div>
            </div>
        </el-dialog>
        <!-- 折扣券 -->
        <el-dialog
            :visible.sync="labVisible"
            :close-on-click-modal="false"
            :show-close="false"
            custom-class="KupperdialogClass"
            width="32vw"
            center>
            <div class="kupperDialog">
                <div class="title bigfont font-bold">{{dialogTitle}}</div>
                <div class="flex-center-Y smallfont font-bold smallMt">
                    <div class="W-50 flex-center-Y"> <el-radio></el-radio>折扣券</div>
                </div>
                <div class="flex-center-Y smallfont smallMt input-align">
                    <div class="W-30 font-bold">*卡券名称</div>
                    <div class="W-70 flex-center-Y justy-end"><el-input maxlength="15" v-model="labData.name" placeholder="请输入卡券名称"></el-input></div>
                </div>
                <div class="flex-center-Y smallfont smallMt inputWidth">
                    <div class="W-30 font-bold">*优惠内容</div>
                    <div class="W-70 flex-center-Y justy-end">满<el-input type="number" v-model="labData.isDiscount" placeholder="请输入"></el-input>元,打<el-input type="number" v-model="labData.discountNum" placeholder="请输入"></el-input>折</div>
                </div>
                <div class="flex-center-Y smallfont smallMt input-align">
                    <div class="W-30 font-bold">*兑换所需积分</div>
                    <div class="W-70 flex-center-Y justy-end"><el-input type="number" v-model="labData.needIntegral" placeholder="请输入兑换所需积分数量"></el-input></div>
                </div>
                <div class="flex-center-Y smallfont smallMt inputWidth">
                    <div class="W-30 font-bold">*有效期</div>
                    <div class="W-70 flex-center-Y justy-end">领券当日起<el-input type="number" v-model="labData.validity" placeholder="请输入"></el-input>天内可用</div>
                </div>
                <div class="flex-center-S smallfont smallMt input-align">
                    <div class="W-30 font-bold">*使用规则</div>
                    <div class="W-70 flex-center-Y justy-end" style="color:#c0c4cc">
                        该券可在氪普闪咖上购买全品类商品时使用，掉货即选取最优惠的一张券进行结算，可与会员优惠同享。
                    </div>
                </div>
                <div class="bottom flex-center-Y">
                    <div class="btn smallfont" @click="backlab">取消</div>
                    <div v-if="iscomplete" class="btn1 smallfont" @click="savelab">确定</div>
                    <div v-else class="btn1 smallfont"><i class="el-icon-loading"></i></div>
                </div>
            </div>
        </el-dialog>
        <!-- 卡券包 -->
        <el-dialog
            :visible.sync="articleVisible"
            :close-on-click-modal="false"
            :show-close="false"
            custom-class="KupperdialogClass"
            width="32vw"
            center>
            <div class="kupperDialog">
                <div class="title bigfont font-bold">{{dialogTitle}}</div>
                <div class="flex-center-Y smallfont font-bold smallMt">
                    <div class="W-50 flex-center-Y"> <el-radio></el-radio>卡券包</div>
                </div>
                <!-- <div class="flex-center-Y smallfont font-bold smallMt">
                    <div class="W-50">*标签</div>
                    <el-select v-model="articleData.articleType" placeholder="请选择">
                        <el-option
                        v-for="item in labList"
                        :key="item.labelId"
                        :label="item.labelName"
                        :value="item.labelId">
                        </el-option>
                    </el-select>
                </div> -->
                <div class="flex-center-Y smallfont font-bold smallMt">
                    <div class="W-50">*卡券包图片
                        <div class="minifont" style="color:#FF0000">图片文件大小不超过2M;</div>
                        <div class="minifont" style="color:#FF0000">图片尺寸建议335*140;</div>
                        <div class="minifont" style="color:#FF0000">图片格式为png格式;</div>
                    </div>
                    <div class="W-50" >
                    <el-upload
                    style="float:right"
                    class="avatar-uploader"
                    :before-upload="beforeAvatarUpload"
                    :http-request="upload"
                    action=""
                    :show-file-list="false">
                    <img v-if="articleData.giftPic || articleData.giftPicture" :src="articleData.giftPicture" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    </div>
                </div>
                <div class="flex-center-Y smallfont smallMt input-align">
                    <div class="W-30 font-bold">*卡券包名称</div>
                    <div class="W-70 flex-center-Y justy-end"><el-input v-model="articleData.giftName" placeholder="请输入卡券包名称"></el-input></div>
                </div>
                <div class="flex-center-Y smallfont smallMt input-align">
                    <div class="W-30 font-bold">*卡券包价格</div>
                    <div class="W-70 flex-center-Y justy-end"><el-input v-model="articleData.needPrice" placeholder="请输入卡券包价格"></el-input>元</div>
                </div>
                <div class="flex-center-S smallfont smallMt input-align inputWidth1">
                    <div class="W-30 font-bold">*卡券包内容</div>
                    <div class="W-70" style="max-height:12vh;overflow-y:auto;margin-top:2vh">
                        <div class="flex-center-Y justy-end" v-for="(item,i) in articleData.couponTicketA" :key="i">
                            <el-input v-model="item.ticketNum" placeholder="数量"></el-input>张 
                            <el-select v-model="item.ruleId" filterable placeholder="请选择卡券">
                                <el-option
                                v-for="item in labList"
                                :key="item.ruleId"
                                :label="item.name"
                                :value="item.ruleId">
                                </el-option>
                             </el-select>
                             <i class="el-icon-remove-outline blue" @click="removeA(i)"></i>
                        </div>
                        <div class="flex-center-Y justy-end">
                             <i class="el-icon-circle-plus-outline blue" @click="addA"></i>
                        </div>
                    </div>
                </div>
                <div class="flex-center-S smallfont smallMt input-align inputWidth1">
                    <div class="W-30 font-bold">*赠送卡券</div>
                    <div class="W-70" style="max-height:12vh;overflow-y:auto;margin-top:2vh">
                       <div class="flex-center-Y justy-end" v-for="(item,i) in articleData.couponTicketC" :key="i">
                            <el-input v-model="item.ticketNum" placeholder="数量"></el-input>张 
                            <el-select v-model="item.ruleId" filterable placeholder="请选择卡券">
                                 <el-option
                                v-for="item in labList"
                                :key="item.ruleId"
                                :label="item.name"
                                :value="item.ruleId">
                                </el-option>
                             </el-select>
                             <i class="el-icon-remove-outline blue" @click="removeC(i)"></i>
                        </div>
                        <div class="flex-center-Y justy-end">
                             <i class="el-icon-circle-plus-outline blue" @click="addC"></i>
                        </div>
                    </div>
                </div>
                <div class="bottom flex-center-Y" style="margin-top:5vh">
                    <div class="btn smallfont" @click="backArticle">取消</div>
                    <div v-if="iscomplete" class="btn1 smallfont" @click="saveArticle">确定</div>
                    <div v-else class="btn1 smallfont"><i class="el-icon-loading"></i></div>
                </div>
            </div>
        </el-dialog>
        <!-- 接入规则 -->
        <el-dialog
            :visible.sync="showRule"
            :show-close="false"
            custom-class="KupperdialogClass KupperdialogClass1"
            width="32vw"
            center>
            <div class="kupperDialog kupperDialog1">
                <div id="getCoupon">
                <div class="box" style="border:0;height:72vh">
                    <div class="word">
                        <p class="center bold">优惠券技术服务协议</p>
                        <p>欢迎您使用优惠券技术服务！</p>
                        <p>《优惠券技术服务协议》（以下简称“本协议”）是杭州光芽科技有限公司（以下简称“光芽”或我们）与您就“优惠券技术服务”（以下简称“本服务”）在杭州市余杭区所订立的有效合约。为使用本服务，请您认真阅读并遵守本协议，特别是加粗的内容，如您不同意接受本协议的任意内容，或者无法准确理解相关条款含义的，请不要进行后续操作。您通过网络页面点击同意本协议或以其他方式接受本协议，或您对本服务的登录、查看、发布信息等行为即视为您已阅读并同意接受本协议的全部约定内容。</p>
                        <p>一、定义</p>
                        <p>1、优惠券技术服务：是指您通过光芽及其关联公司提供的技术服务进行优惠券（指优惠权益营销的电子凭证）的制作、展示、投放等相关技术服务，具体以服务页面展示为准。</p>
                        <p>2、关联公司：是指一方现在或将来控制、受控制或与其出于共同控制下的任何公司、合法机构以及前述公司、合法机构的合法继承人。</p>
                        <p>3、发布的信息：是指您使用本服务过程中所制作、复制、发布、传播的任何内容，包括但不限于头像、名称、相关说明、简介等注册信息，或文字、语音、图片、视频、图文、卡券，以及其他使用本服务所产生的信息、内容。</p>
                        <p>二、服务规范</p>
                        <p>1、您清楚知悉并理解，光芽在本协议项下仅向您提供相关中立的技术支持服务，不对您的行为、发布的信息或优惠券的合法性、有效性作任何明示或默示的担保，您应当确保您的优惠券真实、合法、有效。您应当仔细确认并填写优惠券的金额、数量、有效期限、使用规则等优惠券的使用方式，并对优惠券的真实性、合法性及有效性承担全部责任。您确认优惠券相关服务一旦发布，即不可撤销或更改，否则由此产生的所有损失（包括但不限于顾客损失、工商行政处罚以及对光芽造成的损失等）应由您承担责任，同时光芽有权对您采取包括但不限于限制账户、终止服务等处理措施。</p>
                        <p>2、身份要素是我们识别您身份的依据，请您务必妥善保管。使用身份要素进行的操作、发出的指令视为您本人做出。光芽将依照您的指令进行操作，因您的原因造成的账户、密码等信息被冒用、盗用或非法使用，由此引起的风险和损失需要由您自行承担。</p>
                        <p>3、您理解并同意本服务可能会由我们联合其他服务方一起为您提供服务。如存在其他服务方时，您需遵守该服务方的服务规范及收费说明（如有），具体详见页面提示；基于您享受服务的需要，您同意并授权我们基于实际提供的服务功能按照您的指令进行操作（如在其他服务中投放优惠券），同时为便于该服务方为您提供服务，我们将基于服务所需向其他服务方同步您的店铺信息、交易信息、支付信息。</p>
                        <p>4、我们重视保护您的隐私，按照<span style="color:rgba(40, 110, 255, 1);text-decoration:underline">《支付宝隐私权政策》</span>保护您的隐私信息。</p>
                        <p>三、注意事项</p>
                        <p>1、您应保证能够独立承担法律责任，并具有履行本协议所需的一切权利、能力及资质证照；如您受托使用本服务的，请确保您获得的授权真实、合法、有效，并严格按照获得的授权使用本服务。您应当对您发布的信息负责，您发布的信息不得侵犯他人的知识产权、名誉权或其他合法权益，光芽仅在自身合法权限和能力范围内对您提交的信息作出合理、谨慎的形式评估与判断，并不对您的实际运营行为、发布的信息或商品承担任何责任或提供任何担保。您应承担因您的经营、交易信息违法、虚假、陈旧或不详实等原因造成的消费者投诉、退货、纠纷（包括合同纠纷、侵权纠纷等）、行政处罚等责任，因此而产生的一切风险和责任包括但不限于用户赔偿均由您独立承担。</p>
                        <p>2、因您涉及的投诉、举报或诉讼等纠纷处理需要，您有义务配合光芽在合理时间内提供相关证明材料（包括但不限于资质执照、经营许可证、商品检验报告等）。</p>
                        <p>3、为给您提供更优惠的服务，光芽暂不就本服务向您收取服务费。您同意，后续光芽有权对本服务收费规则予以调整，具体以页面公告、站内信、手机短信、信息提醒等通知为准。</p>
                        <p>4、如您违反本协议约定，光芽有权采取下述处理措施，包括但不限于单方解除本协议、限制或禁止使用本服务部分或全部功能，并追究您的法律责任。光芽的该等行为不应视为光芽就您的行为对您有任何法定或约定的审核义务，无论光芽是否做出该等行为，光芽均对此不承担任何责任。</p>
                        <p>5、对于优惠券售卖的资金结算服务（如有），资金结算服务提供方（例如支付宝（中国）网络技术有限公司）可能会收取售卖金额一定比例的服务费，同时为保护用户权益，资金结算服务提供方可能会对您获取优惠券售卖的资金设置规则，如只有在用户核销优惠券后，该笔优惠券售卖的资金（扣除服务费）才会划转至您的账户，具体以页面提示为准。</p>
                        <p>6、本协议未约定事宜均适用<span style="color:rgba(40, 110, 255, 1);text-decoration:underline">《支付宝服务协议》</span>及相关附属规则。</p>
                        <p>四、协议变更</p>
                        <p>1、我们可根据国家法律法规变化及服务内容调整、保护用户权益等需要修订本协议。一旦相关内容发生重大变更，我们将通过我们的网站或客户端公告、消息通知等方式通知您。</p>
                        <p>2、如您不同意本协议的修订，您应立即停止使用本服务。如您继续使用本服务的，则视为您同意本协议的修订。</p>
                        <p>五、责任免除</p>
                        <p>因下列原因导致无法正常提供服务，光芽不承担任何责任：</p>
                        <p>1、系统停机维护或升级；</p>
                        <p>2、因台风、地震、洪水、雷电或恐怖袭击等不可抗力原因；</p>
                        <p>3、您的电脑软硬件和通信线路、供电线路出现故障的；</p>
                        <p>4、您操作不当或通过非授权或认可的方式使用本服务的；</p>
                        <p>5、因病毒、木马、恶意程序攻击、网络拥堵、系统不稳定、系统或设备故障、通讯故障、电力故障、第三方服务瑕疵或政府行为等原因。
        尽管有前款约定，光芽将采取合理行动积极促使服务恢复正常。</p>
                        <p>六、知识产权声明</p>
                        <p>1、您理解并同意，与本服务相关的所有信息内容，包括但不限于图片、文字、评价、浏览记录、交易行为、网站架构、网站画面的安排、网页设计以及其他您发布的信息，均由光芽依法拥有全部知识产权（包括但不限于商标权、专利权、著作权、商业秘密等），您拥有您所输入的文字、图片、图文等素材的知识产权，但相关权利人依照法律规定应享有的权利除外。</p>
                        <p>2、为便于为用户提供更优质的服务，我们及关联公司可能需要使用您的非个人隐私信息或授权给其他第三方使用。在此，您理解并同意我们及关联公司可以存储、使用、复制、修订、编辑、发布、展示、翻译、分发您的非个人隐私信息或制作其派生作品，并以已知或日后开发的形式、媒体或技术将上述信息纳入其它作品内或授权给其他第三方使用。</p>
                        <p>3、非经我们或相关权利人书面同意，您不得为任何商业或非商业目的自行或许可任何第三方使用、修改、反向编译、复制、公开传播、改变、散布、发行或公开发表上述不属于您的知识产权内容。</p>
                        <p>七、法律适用与管辖</p>
                        <p>本协议之效力、解释、变更、执行与争议解决均适用中华人民共和国法律。因本协议产生之争议，均应依照中华人民共和国法律予以处理，并由协议签署地人民法院管辖。</p>
                        <p style="text-align:right">杭州光芽科技有限公司</p>
                    </div>
                </div>
                </div>
            </div>
        </el-dialog>
    </div>
    <div v-else id="getCoupon">
        <div class="title1">优惠券接入说明</div>
        <div class="box">
            <div class="word">
                <p class="center bold">优惠券技术服务协议</p>
                <p>欢迎您使用优惠券技术服务！</p>
                <p>《优惠券技术服务协议》（以下简称“本协议”）是杭州光芽科技有限公司（以下简称“光芽”或我们）与您就“优惠券技术服务”（以下简称“本服务”）在杭州市余杭区所订立的有效合约。为使用本服务，请您认真阅读并遵守本协议，特别是加粗的内容，如您不同意接受本协议的任意内容，或者无法准确理解相关条款含义的，请不要进行后续操作。您通过网络页面点击同意本协议或以其他方式接受本协议，或您对本服务的登录、查看、发布信息等行为即视为您已阅读并同意接受本协议的全部约定内容。</p>
                <p>一、定义</p>
                <p>1、优惠券技术服务：是指您通过光芽及其关联公司提供的技术服务进行优惠券（指优惠权益营销的电子凭证）的制作、展示、投放等相关技术服务，具体以服务页面展示为准。</p>
                <p>2、关联公司：是指一方现在或将来控制、受控制或与其出于共同控制下的任何公司、合法机构以及前述公司、合法机构的合法继承人。</p>
                <p>3、发布的信息：是指您使用本服务过程中所制作、复制、发布、传播的任何内容，包括但不限于头像、名称、相关说明、简介等注册信息，或文字、语音、图片、视频、图文、卡券，以及其他使用本服务所产生的信息、内容。</p>
                <p>二、服务规范</p>
                <p>1、您清楚知悉并理解，光芽在本协议项下仅向您提供相关中立的技术支持服务，不对您的行为、发布的信息或优惠券的合法性、有效性作任何明示或默示的担保，您应当确保您的优惠券真实、合法、有效。您应当仔细确认并填写优惠券的金额、数量、有效期限、使用规则等优惠券的使用方式，并对优惠券的真实性、合法性及有效性承担全部责任。您确认优惠券相关服务一旦发布，即不可撤销或更改，否则由此产生的所有损失（包括但不限于顾客损失、工商行政处罚以及对光芽造成的损失等）应由您承担责任，同时光芽有权对您采取包括但不限于限制账户、终止服务等处理措施。</p>
                <p>2、身份要素是我们识别您身份的依据，请您务必妥善保管。使用身份要素进行的操作、发出的指令视为您本人做出。光芽将依照您的指令进行操作，因您的原因造成的账户、密码等信息被冒用、盗用或非法使用，由此引起的风险和损失需要由您自行承担。</p>
                <p>3、您理解并同意本服务可能会由我们联合其他服务方一起为您提供服务。如存在其他服务方时，您需遵守该服务方的服务规范及收费说明（如有），具体详见页面提示；基于您享受服务的需要，您同意并授权我们基于实际提供的服务功能按照您的指令进行操作（如在其他服务中投放优惠券），同时为便于该服务方为您提供服务，我们将基于服务所需向其他服务方同步您的店铺信息、交易信息、支付信息。</p>
                <p>4、我们重视保护您的隐私，按照<span style="color:rgba(40, 110, 255, 1);text-decoration:underline">《支付宝隐私权政策》</span>保护您的隐私信息。</p>
                <p>三、注意事项</p>
                <p>1、您应保证能够独立承担法律责任，并具有履行本协议所需的一切权利、能力及资质证照；如您受托使用本服务的，请确保您获得的授权真实、合法、有效，并严格按照获得的授权使用本服务。您应当对您发布的信息负责，您发布的信息不得侵犯他人的知识产权、名誉权或其他合法权益，光芽仅在自身合法权限和能力范围内对您提交的信息作出合理、谨慎的形式评估与判断，并不对您的实际运营行为、发布的信息或商品承担任何责任或提供任何担保。您应承担因您的经营、交易信息违法、虚假、陈旧或不详实等原因造成的消费者投诉、退货、纠纷（包括合同纠纷、侵权纠纷等）、行政处罚等责任，因此而产生的一切风险和责任包括但不限于用户赔偿均由您独立承担。</p>
                <p>2、因您涉及的投诉、举报或诉讼等纠纷处理需要，您有义务配合光芽在合理时间内提供相关证明材料（包括但不限于资质执照、经营许可证、商品检验报告等）。</p>
                <p>3、为给您提供更优惠的服务，光芽暂不就本服务向您收取服务费。您同意，后续光芽有权对本服务收费规则予以调整，具体以页面公告、站内信、手机短信、信息提醒等通知为准。</p>
                <p>4、如您违反本协议约定，光芽有权采取下述处理措施，包括但不限于单方解除本协议、限制或禁止使用本服务部分或全部功能，并追究您的法律责任。光芽的该等行为不应视为光芽就您的行为对您有任何法定或约定的审核义务，无论光芽是否做出该等行为，光芽均对此不承担任何责任。</p>
                <p>5、对于优惠券售卖的资金结算服务（如有），资金结算服务提供方（例如支付宝（中国）网络技术有限公司）可能会收取售卖金额一定比例的服务费，同时为保护用户权益，资金结算服务提供方可能会对您获取优惠券售卖的资金设置规则，如只有在用户核销优惠券后，该笔优惠券售卖的资金（扣除服务费）才会划转至您的账户，具体以页面提示为准。</p>
                <p>6、本协议未约定事宜均适用<span style="color:rgba(40, 110, 255, 1);text-decoration:underline">《支付宝服务协议》</span>及相关附属规则。</p>
                <p>四、协议变更</p>
                <p>1、我们可根据国家法律法规变化及服务内容调整、保护用户权益等需要修订本协议。一旦相关内容发生重大变更，我们将通过我们的网站或客户端公告、消息通知等方式通知您。</p>
                <p>2、如您不同意本协议的修订，您应立即停止使用本服务。如您继续使用本服务的，则视为您同意本协议的修订。</p>
                <p>五、责任免除</p>
                <p>因下列原因导致无法正常提供服务，光芽不承担任何责任：</p>
                <p>1、系统停机维护或升级；</p>
                <p>2、因台风、地震、洪水、雷电或恐怖袭击等不可抗力原因；</p>
                <p>3、您的电脑软硬件和通信线路、供电线路出现故障的；</p>
                <p>4、您操作不当或通过非授权或认可的方式使用本服务的；</p>
                <p>5、因病毒、木马、恶意程序攻击、网络拥堵、系统不稳定、系统或设备故障、通讯故障、电力故障、第三方服务瑕疵或政府行为等原因。
尽管有前款约定，光芽将采取合理行动积极促使服务恢复正常。</p>
                <p>六、知识产权声明</p>
                <p>1、您理解并同意，与本服务相关的所有信息内容，包括但不限于图片、文字、评价、浏览记录、交易行为、网站架构、网站画面的安排、网页设计以及其他您发布的信息，均由光芽依法拥有全部知识产权（包括但不限于商标权、专利权、著作权、商业秘密等），您拥有您所输入的文字、图片、图文等素材的知识产权，但相关权利人依照法律规定应享有的权利除外。</p>
                <p>2、为便于为用户提供更优质的服务，我们及关联公司可能需要使用您的非个人隐私信息或授权给其他第三方使用。在此，您理解并同意我们及关联公司可以存储、使用、复制、修订、编辑、发布、展示、翻译、分发您的非个人隐私信息或制作其派生作品，并以已知或日后开发的形式、媒体或技术将上述信息纳入其它作品内或授权给其他第三方使用。</p>
                <p>3、非经我们或相关权利人书面同意，您不得为任何商业或非商业目的自行或许可任何第三方使用、修改、反向编译、复制、公开传播、改变、散布、发行或公开发表上述不属于您的知识产权内容。</p>
                <p>七、法律适用与管辖</p>
                <p>本协议之效力、解释、变更、执行与争议解决均适用中华人民共和国法律。因本协议产生之争议，均应依照中华人民共和国法律予以处理，并由协议签署地人民法院管辖。</p>
                <p style="text-align:right">杭州光芽科技有限公司</p>
            </div>
            <div class="check"><el-checkbox v-model="checked">我已阅读并同意上述协议</el-checkbox></div>
            <div class="bbtn" v-if="!checked">请阅读并勾选同意上述该协议</div>
            <div class="bbtn bbtn1" v-else @click="Visible=true">立即接入</div>
            <!-- <div class="tip">杭州光芽科技有限公司</div> -->
        </div>
        <el-dialog
            :visible.sync="Visible"
            :close-on-click-modal="false"
            :show-close="false"
            modal
            custom-class="getCouponClass"
            width="23vw"
            center>
            <div class="getCouponDialog">
                <div class="word bigfont" style="position:absolute;top:50%;left:50%;transform: translate(-50%,-50%)">
                    是否已阅读上述协议并确认立即接入优惠券相关功能？确认后会立即退出登录，重新登录该账号后优惠券相关功能开放。
                </div>
                <div class="bottom flex-center-Y" style="margin-top:10vh">
                    <div class="btn2 bigfont center" style="width:25%" @click="Visible=false">取消</div>
                    <div class="btn1 bigfont center" style="width:25%" @click="submit">确认</div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data(){
        return{
            tableData: [{}],
            params: {
                pageRow: 7,
                pageNum:1
                },
            totalCount: 0,
            activeName:"0",
            // 满减券
            indexVisible:false,
            dialogTitle:"添加配置",
            selectData:{
                fullNum: "",
                subNum:"",
                name: "",
                validity:"",
                needIntegral:""
            },
            // 折扣券
            labVisible:false,
            labData:{
                discountNum: "",
                isDiscount:"",
                name: "",
                validity: "",
                needIntegral:""
            },
            //卡券包
            articleVisible:false,
            articleData:{
                giftPic:"",
                giftName:"",
                needPrice:"",
                couponTicket:[],
                couponTicketA:[{giftType:"A"}],
                couponTicketC:[{giftType:"C"}]
            },
            labList:"",
            showBag:false,//是否显示卡券包的tab
            iscomplete:true,//防止重复创建
            couponFlag:true,//是否开通了优惠券
            text:"",
            checked:false,
            Visible:false,
            showRule:false,
        }
    },
    created(){
        this.api({
                    url: "/coupon/showAllTicket",
                    method: "post",
                    data: {
                        pageNum:1,
                        pageRow:50
                    }
                }).then(data => {
                    if(data.flag){
                        this.showBag=true
                    }
                    this.labList=data.couponList
                });
        this.getList()
        this.getData()
    },
    methods:{
        getData(){
            this.api({
                        url: "/market/userList",
                        method: "post",
                        data: {pageNum:1,pageRow:4,manageId:this.userId}
                    }).then(data => {
                    this.couponFlag=data.couponFlag
                    })
            
            },
        submit(){
            let that=this
            that.api({
                url: "/coupon/applyToCoupon",
                method: "post",
                data: {
                    username:that.userName

                }
            }).then(data => {
                that.$message({
                    type: 'success',
                    message: '申请成功'
                })
                setTimeout(() => {
                    that.$store.dispatch('LogOut').then(() => {
                        location.reload() // 为了重新实例化vue-router对象 避免bug
                    })
                },1000)
                
            });
        },
        changeTab(){
            this.params.pageNum=1
            this.getList()
        },
        getList() {
            this.listLoading = true;
            if(this.activeName=='0'){
                this.params.ruleType="M"
                this.api({
                    url: "/coupon/showAllTicket",
                    method: "post",
                    data: this.params
                }).then(data => {
                    this.listLoading = false;
                    this.tableData=data.couponList
                    this.totalCount = data.count;
                    // if(this.tableData.length==0 && this.params.pageNum-1 >= 1){//如果当前页没有数据就再请求就跳到上一页
                    //   this.params.pageNum=this.params.pageNum-1
                    //   this.getList()
                    // }
                });
            }else if(this.activeName=='1'){
                this.params.ruleType="Z"
                this.api({
                    url: "/coupon/showAllTicket",
                    method: "post",
                    data: this.params
                }).then(data => {
                    this.listLoading = false;
                    this.tableData=data.couponList
                    this.totalCount = data.count;
                    // if(this.tableData.length==0 && this.params.pageNum-1 >= 1){//如果当前页没有数据就再请求就跳到上一页
                    //   this.params.pageNum=this.params.pageNum-1
                    //   this.getList()
                    // }
                });
            }else{
                this.api({
                    url: "/kupper/showCouponPackageList",
                    method: "post",
                    data: this.params
                }).then(data => {
                    this.listLoading = false;
                    this.tableData=data.list
                    this.totalCount = data.totalCount;
                    // if(this.tableData.length==0 && this.params.pageNum-1 >= 1){//如果当前页没有数据就再请求就跳到上一页
                    //   this.params.pageNum=this.params.pageNum-1
                    //   this.getList()
                    // }
                });
            }
                
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
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        // 上传图片
        beforeAvatarUpload(file) {
            const isPNG = file.type === 'image/png';
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isPNG) {
                this.$message.error("上传图片必须为PNG格式!");
            }
            if (!isLt2M) {
                this.$message.error("上传图片大小不能超过 2MB!");
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
                    this.articleData.giftPicture=data.filePath
                    this.articleData.giftPic=data.tempPath
                })
                .catch(e => {});
        },
        // 上传图片
        addA(){
            let i={giftType:"A"}
            this.articleData.couponTicketA.push(i)
        },
        addC(){
            let i={giftType:"C"}
            this.articleData.couponTicketC.push(i)
        },
        removeA(index){
            if(this.articleData.couponTicketA.length>=2){
            this.articleData.couponTicketA.splice(index,1)
            }
        },
        removeC(index){
            this.articleData.couponTicketC.splice(index,1)
        },
        updateArticle(row){//修改
            this.dialogTitle="修改配置"
            if(this.activeName=='0'){
                this.indexVisible=true
                this.selectData=row
            }else if(this.activeName=='1'){
                this.labVisible=true
                this.labData=row
            }else{
                this.articleVisible=true
                this.articleData=row
            }
            
            
        },
        addConfig(){//新建
            this.dialogTitle="添加配置"
            if(this.activeName=='0'){
            this.indexVisible=true
            }else if(this.activeName=='1'){
            this.labVisible=true
            }else{
            this.articleVisible=true
            }
        },
        backIndex(){
            this.indexVisible=false
            this.selectData.fullNum= "",
            this.selectData.subNum="",
            this.selectData.name= "",
            this.selectData.validity= "",
            this.selectData.needIntegral=""
            this.getList()
        },
        backlab(){
            this.labVisible=false
            this.labData.discountNum= "",
            this.labData.isDiscount="",
            this.labData.name= "",
            this.labData.validity= "",
            this.labData.needIntegral=""
            this.getList()
        },
        backArticle(){
            this.articleVisible=false
            this.articleData.giftPicture="" ,
            this.articleData.giftPic="" ,
            this.articleData.giftName= "",
            this.articleData.needPrice= "",
            this.articleData.couponTicketA=[{}],
            this.articleData.couponTicketC=[{}],
            this.articleData.couponTicket=[]
            this.getList()
        },
        saveIndex(){
            if(!this.selectData.fullNum || !this.selectData.subNum || !this.selectData.name || !this.selectData.validity || !this.selectData.needIntegral){
                this.$message.error('请将上述信息填写完整哦~');
                return;
            }
            if(!/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(this.selectData.fullNum) || !/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(this.selectData.subNum) || !/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(this.selectData.validity) || !/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(this.selectData.needIntegral)){
                this.$message.error('优惠内容,兑换所需积分,有效期只能填入数字哦~');
                return;
            }
            this.selectData.ruleType="M"
            this.selectData.username=this.userName
            this.iscomplete=false
            this.api({
                    url: "/coupon/addTicketRule",
                    method: "post",
                    data:this.selectData
                }).then(data => {
                    this.$message.success('添加成功!');
                    this.indexVisible=false
                    this.getList()
                    this.selectData.fullNum= "",
                    this.selectData.subNum="",
                    this.selectData.name= "",
                    this.selectData.validity= "",
                    this.selectData.needIntegral=""
                    this.iscomplete=true
            }).catch(() => {
                this.iscomplete=true
            })
        },
        savelab(){
            if(!this.labData.discountNum || !this.labData.isDiscount || !this.labData.name || !this.labData.validity || !this.labData.needIntegral){
                this.$message.error('请将上述信息填写完整哦~');
                return;
            }
            if(!/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(this.labData.discountNum) || !/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(this.labData.isDiscount) || !/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(this.labData.validity) || !/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(this.labData.needIntegral)){
                this.$message.error('优惠内容,兑换所需积分,有效期只能填入数字哦~');
                return;
            }
            if(this.labData.discountNum>10){
                this.$message.error('折扣不能大于10折哦~');
                return;
            }
            this.labData.ruleType="Z"
            this.labData.username=this.userName
            this.iscomplete=false
            this.api({
                    url: "/coupon/addTicketRule",
                    method: "post",
                    data:this.labData
                }).then(data => {
                    this.$message.success('添加成功!');
                    this.labVisible=false
                    this.getList()
                    this.labData.discountNum= "",
                    this.labData.isDiscount="",
                    this.labData.name= "",
                    this.labData.validity= "",
                    this.labData.needIntegral=""
                    this.iscomplete=true
                }).catch(() => {
                this.iscomplete=true
            });
        },
        saveArticle(){
            if(!this.articleData.giftName || !this.articleData.giftPic){
                this.$message.error('请将上述信息填写完整哦~');
                return;
            }
            if(!/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(this.articleData.needPrice)){
                this.$message.error('卡券价值必须是数字哦~');
                return;
            }
            this.articleData.couponTicket=this.articleData.couponTicketA.concat(this.articleData.couponTicketC)
            for(let key in this.labList){
                for(let i in this.articleData.couponTicket){
                    if(this.articleData.couponTicket[i].ruleId== this.labList[key].ruleId){
                        this.articleData.couponTicket[i].name=this.labList[key].name
                    }
                }
            }
            this.articleData.giftPic=this.articleData.giftPic ? this.articleData.giftPic : this.articleData.giftPicture
            for(let i in this.articleData.couponTicket){
                if(!this.articleData.couponTicket[i].ticketNum || !this.articleData.couponTicket[i].ruleId){
                    this.$message.error('请选择或填写添加的优惠券信息!');
                    return;
                }
            }
            this.iscomplete=false
            this.api({
                    url: "/kupper/addCouponPackage",
                    method: "post",
                    data:this.articleData
                }).then(data => {
                    this.$message.success('添加成功!');
                    this.articleVisible=false
                    this.getList()
                    this.articleData.giftPicture="" ,
                    this.articleData.giftPic="" ,
                    this.articleData.giftName= "",
                    this.articleData.needPrice= "",
                    this.articleData.couponTicketA=[{}],
                    this.articleData.couponTicketC=[{}],
                    this.articleData.couponTicket=[]
                    this.iscomplete=true
                }).catch(() => {
                    this.iscomplete=true
                });
        },
        deleteCoupon(row){
            // this.api({
            //         url: "/coupon/checkCouponForUser",
            //         method: "post",
            //         data: {ruleId:row.ruleId}
            //     }).then(data => {
            //         if(!data.flag){
            //             this.$message({
            //                 type: 'error',
            //                 message: "还有"+data.userNum+"人未使用该优惠券，不可删除，若要删除，请联系光芽系统管理员"
            //             });
            //         }else{
            //             if(data.deleteFlag){
            //                 this.$confirm('若要删除该优惠券，会导致足迹礼包与卡券包中的该优惠券同时删除，请核对准确无误后删除', '提示', {
            //                     confirmButtonText: '确定',
            //                     cancelButtonText: '取消',
            //                     type: 'warning'
            //                     }).then(() => {
            //                     this.api({
            //                         url: "coupon/deleteCoupon",
            //                         method: "post",
            //                         data: {ruleId:row.ruleId}
            //                     }).then(data => {
            //                         this.$message({
            //                             type: 'success',
            //                             message: '删除成功!'
            //                         });
            //                         this.getList()
            //                     });
                                
            //                     }).catch(() => {         
            //                     });
            //             }else{
                            this.$confirm('是否确认删除该优惠券?', '提示', {
                                confirmButtonText: '确定',
                                cancelButtonText: '取消',
                                type: 'warning'
                                }).then(() => {
                                this.api({
                                    url: "coupon/deleteCoupon",
                                    method: "post",
                                    data: {ruleId:row.ruleId}
                                }).then(data => {
                                    this.$message({
                                        type: 'success',
                                        message: '删除成功!'
                                    });
                                    this.getList()
                                });
                                }).catch(() => {         
                                });
                //         }
                //     }
                // });
            
        },
        deleteCouponPackage(row){
            this.$confirm('是否确认删除该卡券包?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                this.api({
                    url: "/kupper/deleteCouponPackage",
                    method: "post",
                    data: {giftUuid:row.giftUuid}
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
        ...mapGetters(["userName",'userId'])
    }
}
</script>



   