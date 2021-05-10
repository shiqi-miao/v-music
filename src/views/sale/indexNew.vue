<style lang="scss" scoped>
#promotion{height:89vh;}
div{font-size: 14px;}
.arrow i {
    margin-right: 6px;
    font-size:20px
}
.top {
    height: 26vh;
}
.bottom {
    height: 62vh;
    margin-top: 20px;
    overflow-y: scroll;
}
.title-store {
    font-size: 14px;
    font-weight: 600;
    padding-bottom: 20px;
}
.blue {
    color: #66b1ff!important;
    cursor: pointer;
}
.grey{
    color: #9B9B9B!important;
}
.smallfont{font-size: 14px}
.minifont{font-size: 12px!important;}
.right {
    text-align: right;
}
.left {
    text-align: left;
}
.flex-center {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
}
.flex {
    display: flex;
    display: -webkit-flex;
}
.flex-1{
    flex:1
}
.flex-2{
    flex:2
}
.flex-3{
    flex:3
}
.flex-4{
    flex:4
}
.flex-10{
    flex:10
}
.flex-12{
    flex:12
}
.flex-7{
    flex:7
}
.flex-8{
    flex:8
}
.store {
    flex: 4;
}
.tool {
    flex: 1;
}
.content {
    font-size: 14px;
    line-height: 2.4vh;
}
.arrows {
    width: 100%;
    border-left: 2px solid rgba(64, 160, 255, 0.666);
    height: 18vh;
    text-align: center;
    margin-left: 1vw;
    margin-top: 2vh;
}
.arrows-h {
    height: 18vh;
}
.ic {
    font-size: 20px;
    background: rgba(64, 160, 255, 0.666);
    color: #ffffff;
    cursor: pointer;
    border-radius: 50%;
    padding: 6px;
}
.ic:hover {
    background: #409eff;
}
.el-icon-arrow-right {
}
.store-form .el-input {
    width: 120px;
}
.single-input .el-input,
.single-input-.el-input {
    width: 194px;
}
.jy-1 {
    flex: 1;
}
.jy-2 {
    flex: 3;
}
.input-with-select {
    width: 40%;
}
.flex-center-Y {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
}
#promotion{
    position: relative;
    #storeChangeBorder{
        width: 100%;
        height: 0px;
        .leftBox{width: 20%;border-right:1px solid rgba(226,229,235,1);height:100%}
        .rightBox{width: 80%;height:100%;padding-left:1%;}
    }
    #discount{
        border-top:1px solid rgba(226,229,235,1);
        width:100%;
        position: absolute;
        top: 0px;
        left: 0px;
        bottom: 0;
        .blank{width: 100%;height: 120px;background: #fff;border: 1px solid #E2E5EB;border-bottom:0;border-top: 0;padding-left: 20px;padding-top: 10px;font-size: 14px;font-weight: 600;line-height: 40px}
        .products{
            background:#fff;
            border: 1px solid #E2E5EB;
            border-top: 0;
            padding: 20px;
            padding-top:0;
            width:100%;
            position: absolute;
            top:120px;
            left: 0;
            bottom: 0;
            .leftBox{width: 240px;border:1px solid rgba(226,229,235,1);height:100%;padding: 20px 0 20px 0;float: left;;overflow: auto;}
            .rightBox{margin-left: 240px;height:100%;padding: 20px 20px 20px 30px;background:#F5F6F8;}
        }
    }
}
.p-them,.p-2{padding: 20px}
.p-1{padding: 1%}
.p-6{padding: 6%}
.pt-2{padding-top: 2%}
.pt-4{padding-top: 4%}
.pt-0{padding-top: 0%}
.pr-2{padding-right: 2%!important}
.pl-2{padding-left: 2%!important}
.pl-4{padding-left: 4%!important}
.pt-1{padding-top: 1%}
.p-4{padding: 4%}
.p-5{padding: 5%}
.Pb-0{padding-bottom: 0}
.pb-2{padding-bottom: 2%}
.pb-4{padding-bottom: 4%}
.pb-7{padding-bottom: 14%}
.pb-1{padding-bottom: 1%}
.pb-1-5{padding-bottom: 1.5%}
.Pt-0{padding-top: 0}
.pl-0{padding-left: 0!important}
.pr-0{padding-right: 0!important}
.H-100{height: 100%}
.W-100{width: 100%}
.selectIcon{width: 16px;height: 16px;cursor: pointer;}
.ventChange{height: 100%}
.dataTody{height: 20%}
.leftRun ul{list-style: none;padding-left:10%;font-weight: 400}
.leftRun ul li{padding:10% 0 ;position: relative;cursor: pointer}
.leftRun ul li.active::before{
    position: absolute;
    left: -10%;
    content: "";
    width: 4%;
    height: 40%;
    background: #333333;
    border-radius: 2px;
}
.tab1{border-bottom: 3px solid #409EFF;cursor: pointer;}
.tab{color: #999;font-weight: 400;cursor: pointer;}
.shadow{
    /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5); */
    border:2px solid #f56c6c!important;
    
    }
.mask{position: absolute;width:100%;height:100%;top: 50%;left: 50%;transform: translate(-50%,-50%);background:rgba(0,0,0,.1);z-index: 1000;}
.centerRun ul{list-style: none;padding-left:10%;font-weight: 400}
.centerRun ul li{padding:5% 0 ;position: relative;cursor: pointer}
#data{padding: 0 2%}
#data ul{list-style: none;padding: 0;font-size: 20px}
#data ul.big{list-style: none;padding: 0;font-size: 18px}
#data ul li{padding:0 3% 0 0;position: relative;cursor: pointer;color: #9B9B9B}
#data ul li.active{font-weight: 600;color: #333333}
.redData{color: #D0021B;font-weight: 600;}
/* .centerRun ul li.active::before{
    position: absolute;
    left: -10%;
    content: "";
    width: 4%;
    height: 40%;
    background: #333333;
    border-radius: 2px;
} */
.box{padding: 10%;font-size: 12px;line-height: 17px;border: 1px solid #dcdfe6;border-radius:5px;}
.box img{width: 100%;}
.product{overflow-y: auto}
.product .el-col{padding:0 2%;margin-top: 4%}
.row-box{height:130px;width: 100%;padding-bottom: 15px}
.row-box .col-box{width:220px;height:100%;position: relative;padding: 10px;text-align: center;margin-right: 15px;flex-shrink: 0;background: #fff;}
.row-box .col-box .num{z-index: 10;position: absolute;left: 10px;top:10px;font-size: 18px;color: #333;font-weight: 600;}
.row-box .col-box .selectBox{z-index: 10;position: absolute;right: 10px;top:10px;}
.row-box .col-box .bottomBox{
    height:72px;margin-top:20px;
    img,.picImg{width:50px;height: 50px;};
    .picImg{margin:0 20px;};
    .img{width:2px;height: 72px;};
    .info{
        position: relative;
        margin-left: 20px;
        .name{font-size: 14px;color: #333;margin-top: -15px;margin-bottom: 18px;text-align: left;width:85px;}
        .price{font-size: 14px;color: #333;font-weight:600;
            .diss{font-size:12px;color:#999;text-decoration: line-through;margin-left: 5px;font-weight: 400;}
        }
        .status{font-size: 14px;color: #FFA500;position: absolute;bottom:-25px;right: -1px;img{width:20px;height:20px;cursor: pointer;}}
    }
    }
.normalcolor{background: #7ED321;}
.normalfont{color: #7ED321}
.stopfont{color: #FF3163}
.saleallcolor{background: #F5A623}
.stopcolor{background: #FF3163}
.disccolor{ 
    width: 0px;
    height: 0px;
    border-left: 8px solid transparent;
    border-top: 8px solid transparent;
    border-bottom: 8px solid #37C1FF;
    border-right: 8px solid #37C1FF;}
.center{text-align: center}
.weight{font-weight:bold}
.btn{margin-left:20px;font-size: 14px;line-height:32px;height:32px;width: 120px;color: #fff;background:#409EFF;text-align: center;border-radius: 4px;cursor: pointer;justify-content: center;img{width: 12px;margin-right: 5px;}}
.btn1{font-size: 14px;line-height:40px;height:40px;border: 1px solid #409EFF;width: 110px;color: #409EFF;text-align: center;border-radius: 4px;cursor: pointer;justify-content: center;img{width: 12px;margin-right: 5px;};margin-bottom:20px!important}
.disabled{color: #999;border-color: #999;cursor:no-drop;}
.text-right{text-align: right}
.text-center{text-align: center}
.margin-auto{margin:0 auto;}
.fr{float: right}
.H-10{height: 10%}
.H-25{height: 25%}
.H-28{height: 28%}
.H-30{height: 30%}
.p-relative{position:relative}
.p-absolute{position: absolute}
.bottom-0{bottom: 0}
.title{font-size:18px;font-weight: bold}
.card{background: #fff;}
.el-card{font-size: 18px;color: #333333}
.tip{font-size: 14px}
#promotionDialog{font-size: 18px}
.sKuimg{height:120px}
.app-container{background: #F5F6F8;}
.backSelect{background: #F5F6F8!important}
.max-flow{max-width:200px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
</style>
<style lang="scss">
/* .machinebtn>.el-select{width: 265px!important} */
.storeClass .el-cascader-menu__item{font-size:18px }
.machinebtn>.el-select>.el-input{width: 265px!important}
/* #promotion .el-input{margin-top: 2%;} */
#promotion #input .el-input .el-input__inner{border-bottom: 1px solid #ebeef5;background: transparent;border-radius:0;height: 100%}
#promotion .el-input .el-input__inner{background: transparent}
#storeChangeBorder .el-input .el-input__inner{border: 1px solid #999;background: transparent}
#promotion .input-height .el-input .el-input__inner{text-align: center}
#promotion .input-height .el-input .el-input__inner{height: 14px}
#promotion .el-cascader .el-input .el-input__inner{width: 0px;padding:0px!important;height: 0px;line-height: 0px}
#promotion .el-cascader .el-input .el-input__suffix-inner{display: none!important}
#promotion .el-cascader .el-cascader__label{padding: 0!important}
#promotion .el-cascader{line-height: 0px}
/* #promotion .el-select .el-input .el-input__inner{width: 0px;padding:0px!important;height: 0px;line-height: 0px}
#promotion .el-select .el-input .el-input__suffix-inner{display: none!important} */
#promotion .el-card__body{padding: 0;height: 100%}
#promotion .centerRun .el-input .el-input__inner{background: transparent;}
#promotionDialog .el-dialog__body{padding-top: 0!important;font-size: 18px}
#promotion .el-switch .el-switch__core,#promotion .el-switch .el-switch__core:after{border-radius: 5px}
#promotion .el-input--suffix .el-input__inner{padding-right:0!important}
#promotion .H-plane,#promotion .H-plane2,#promotion .H-plane3{
    height: 215px;border-top:1px solid rgba(234,234,234,1);border-bottom:1px solid rgba(234,234,234,1);padding: 13px 20px 13px 20px;
    
    }
.grey.minifont{margin-top: 20px;margin-bottom: 15px;}
.grey.minifont1{margin-top: 15px;margin-bottom: 10px;}
#promotion .H-plane2{height: 200px;}
#promotion .H-plane3{height: 380px;padding-right:0}
#promotion .addInput .el-input__inner{font-size: 14px;padding: 10px 5px}
#promotion .el-date-editor.el-input{font-size: 12px;}
#promotion .saleInput .el-date-editor--timerange.el-input__inner{
    width: 140px;
}
#promotion .saleInput.el-date-editor--daterange.el-input__inner{width: 198px;padding-right: 0;}
#promotion .saleInput.el-date-editor.el-input{width: 140px;}
#promotion .saleInput1 .el-date-editor.el-input{width: 100px;}
/* dialog样式 */
.promotionDialog .el-dialog__body{padding: 40px 70px;}
.promotionDialog .el-dialog__headerbtn{display: none;}
.promotionDialog .el-dialog__header{padding: 0;}
.promotionDialog{height: 200px;}
.promotionDialog .title{font-size: 16px;font-weight: 400;text-align: center;margin-bottom: 60px;}
.promotionDialog .btn,.promotionDialog .btn1{width: 120px;height: 40px;line-height: 40px;margin-bottom: 0!important;}
</style>

<template>
    <div class="app-container p-them">
        <div id="promotion">
            <div class="storeChange flex-center-Y card p-2" id="storeChangeBorder">
            </div>
            <div id="discount">
                <div class="blank">
                    <div class="" v-show="options.length>0">
                        <div class="flex-center-Y">
                            <el-popover placement="top"
                                            trigger="hover">
                                    <span class="title">
                                    {{ storeData.storeName }}——{{selectVent.machineName}}
                                    </span>
                                    <span slot="reference" class="title limit" style="position:relative;display:inline-block;" @click="showStoreList">
                                    {{ storeData.storeName }}——{{selectVent.machineName}}
                                    </span>
                            </el-popover>
                            <i class="el-icon-arrow-right" style="margin-bottom:14px" @click="showStoreList"></i>
                            <div class="cascader" style="height:25px;width:0">
                                    <el-cascader
                                        ref="storeref"
                                        v-model="selectCode"
                                        :options="options"
                                        :props="props"
                                        expand-trigger="hover"
                                        popper-class="storeClass"
                                        @change="changeStore">
                                    </el-cascader>
                            </div>
                        </div>
                    </div>
                    <div class="flex-center-Y" @click="tabChange" style="width:240px">
                        <div @click="tab=0" :class="tab==0?'tab1':'tab'" style="margin-right:50px">限时促销</div>
                        <!-- <div @click="tab=1" :class="tab==1?'tab1':'tab'">阶梯促销</div> -->
                    </div>
                </div>
                <div class="products">
                    <div class="leftBox H-100" style="position:relative">
                        <div class="btn1 flex-center-Y margin-auto" @click="addPlane">
                            <img src="../../assets/icons/add.png" alt="">
                            新建计划
                        </div>
                        <!-- <div class="btn1 flex-center-Y margin-auto disabled" v-if="planeList.length>=5">
                            <img src="../../assets/icons/add-disaled.png" alt="">
                            新建计划
                        </div> -->
                        <div class="flex-center-Y H-plane" v-show="this.showAdd && tab=='0'" style="height:230px">
                            <div class="addpadding">
                                <div class="flex-center-Y">
                                    <span class="addInput">
                                        <el-input maxlength="6" v-model="addForm.name" size="mini" ref="addInput"></el-input>    
                                    </span>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <el-tooltip class="item" effect="light" content="提交" placement="top">
                                        <i class="el-icon-circle-check blue" @click="commitAdd"></i>&nbsp;
                                    </el-tooltip>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <i class="el-icon-remove-outline blue" @click="backAdd"></i>
                                </div>
                                <div class="smallfont" >
                                    <div class="flex-center-Y">
                                        <div class="grey minifont minifont1">应用时间：</div>
                                        <div style="width:140px">
                                            <el-select v-model="addForm.dateType" placeholder="请选择" size="mini">
                                                <el-option label="每天" value="1"></el-option>
                                                <el-option label="开始日期" value="0"></el-option>
                                                <el-option label="日期区间" value="2"></el-option>
                                            </el-select>
                                        </div>
                                    </div>
                                    <div class="flex-center-Y">
                                        <el-date-picker
                                            class="saleInput"
                                            size="mini"
                                            v-show="addForm.dateType=='0'"
                                            v-model="addForm.date"
                                            value-format="yyyy-MM-dd"
                                            type="date"
                                            placeholder="开始日期"
                                            :picker-options="pickerOptions0">
                                        </el-date-picker>
                                        <el-date-picker
                                            class="saleInput"
                                            v-show="addForm.dateType=='2'"
                                            size="mini"
                                            v-model="addForm.rangedate"
                                            type="daterange"
                                            align="right"
                                            :unlink-panels="true"
                                            value-format="yyyy-MM-dd"
                                            start-placeholder="开始日期"
                                            end-placeholder="结束日期">
                                        </el-date-picker>
                                    </div>
                                    <div class="saleInput1">
                                        <div class="grey minifont minifont1">促销时段：</div>
                                        <div class="flex-center-Y">
                                            <el-time-picker
                                            size="mini"
                                            format="HH:mm"
                                            value-format="HH:mm"
                                            v-model="addForm.startTime"
                                            :picker-options="{
                                            selectableRange: '00:00:00 - '+(addForm.endTime||'23:59')+':00'
                                            }"
                                            placeholder="开始时间">
                                        </el-time-picker>
                                        <el-time-picker
                                            size="mini"
                                            format="HH:mm"
                                            value-format="HH:mm"
                                            v-model="addForm.endTime"
                                            :picker-options="{
                                                selectableRange:addForm.startTime +':00 - 23:59:00'
                                            }"
                                            placeholder="结束时间">
                                        </el-time-picker>
                                        </div>
                                        
                                    </div>
                                    <div class="flex-center-Y">
                                        <div class="grey minifont minifont1">促销规则：</div>
                                        <div style="width:140px">
                                            <el-select v-model="addForm.discountMode" placeholder="请选择" size="mini">
                                                <el-option label="折扣率" value="0"></el-option>
                                                <el-option label="促销价" value="1"></el-option>
                                            </el-select>
                                        </div>
                                    </div>
                                    <div class="flex-center-Y">
                                        <div v-if="addForm.discountMode=='0'" class="grey minifont minifont1">折扣率：</div>
                                        <div v-else class="grey minifont minifont1">促销价：</div>
                                        <div style="width:140px">
                                            <el-input v-if="addForm.discountMode=='0'" v-model="addForm.discountRate" size="mini" placeholder="例：90"></el-input>  
                                            <el-input v-else v-model="addForm.promotionPrice" size="mini" placeholder="例：0.01"></el-input>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-show="tab=='0'" v-for="(item,g) in planeList" :key="'C'+g">
                            <!-- 显示 -->
                            <div v-show="!item.isEdit" :class="item.isActive ? 'backSelect H-plane' : 'H-plane'" @click="choose(item)">
                                <div class="flex-center-Y" style="justify-content:space-between">
                                    <span>{{item.discountName || ''}}</span>
                                    <div v-show="item.isActive">
                                        <i class="el-icon-edit grey" @click.stop="showEdit(item)"></i>
                                        <i class="el-icon-delete grey" @click.stop="delDialog=true;selectPlane=item"></i>
                                    </div>
                                    
                                </div>
                                <div class="minifont">
                                    <div class="grey minifont minifont1">应用时间：</div>
                                    <span v-if="item.timeType=='1'">每天</span>
                                    <span v-if="item.timeType=='0'">从{{item.startTime}}开始</span>
                                    <span v-if="item.timeType=='2'">{{item.startTime}} 至 {{item.endTime}}</span>
                                    <div class="grey minifont">促销时段：</div>{{item.timeStart}} - {{item.timeEnd}}
                                    <div class="grey minifont">促销规则：</div>
                                    <span v-if="item.discountMode=='0'">折扣率：{{item.discountRate}}%</span>
                                    <span v-else>促销价：{{item.promotionPrice}}元</span>
                                </div>
                            </div>
                            <!-- 编辑 -->
                            <div v-show="item.isEdit" class="flex-center-Y H-plane" style="height:260px">
                                <div class="addpadding">
                                    <div class="flex-center-Y">
                                        <span class="addInput">
                                            <el-input maxlength="6" v-model="addForm.name" size="mini" ref="addInput"></el-input>    
                                        </span>&nbsp;&nbsp;&nbsp;&nbsp;
                                        <el-tooltip class="item" effect="light" content="保存" placement="top">
                                            <i class="el-icon-circle-check blue" @click="commitEdit(item)"></i>&nbsp;
                                        </el-tooltip>&nbsp;&nbsp;&nbsp;&nbsp;
                                        <i class="el-icon-remove-outline blue" @click="item.isEdit=false"></i>
                                    </div>
                                    <div class="smallfont" >
                                        <div class="flex-center-Y">
                                            <div class="grey minifont minifont1">应用时间：</div>
                                            <div style="width:140px">
                                                <el-select v-model="addForm.dateType" placeholder="请选择" size="mini">
                                                    <el-option label="每天" value="1"></el-option>
                                                    <el-option label="开始日期" value="0"></el-option>
                                                    <el-option label="日期区间" value="2"></el-option>
                                                </el-select>
                                            </div>
                                        </div>
                                        <div class="flex-center-Y">
                                            <el-date-picker
                                                class="saleInput"
                                                size="mini"
                                                v-show="addForm.dateType=='0'"
                                                v-model="addForm.date"
                                                value-format="yyyy-MM-dd"
                                                type="date"
                                                placeholder="开始日期"
                                                :picker-options="pickerOptions0">
                                            </el-date-picker>
                                            <el-date-picker
                                                class="saleInput"
                                                v-show="addForm.dateType=='2'"
                                                size="mini"
                                                v-model="addForm.rangedate"
                                                type="daterange"
                                                align="right"
                                                :unlink-panels="true"
                                                value-format="yyyy-MM-dd"
                                                start-placeholder="开始日期"
                                                end-placeholder="结束日期">
                                            </el-date-picker>
                                        </div>
                                        <div class="saleInput1">
                                            <div class="grey minifont minifont1">促销时段：</div>
                                            <div class="flex-center-Y">
                                                <el-time-picker
                                                size="mini"
                                                format="HH:mm"
                                                value-format="HH:mm"
                                                v-model="addForm.startTime"
                                                :picker-options="{
                                                selectableRange: '00:00:00 - '+(addForm.endTime||'23:59')+':00'
                                                }"
                                                placeholder="开始时间">
                                            </el-time-picker>
                                            <el-time-picker
                                                size="mini"
                                                format="HH:mm"
                                                value-format="HH:mm"
                                                v-model="addForm.endTime"
                                                :picker-options="{
                                                    selectableRange:addForm.startTime +':00 - 23:59:00'
                                                }"
                                                placeholder="结束时间">
                                            </el-time-picker>
                                            </div>
                                            
                                        </div>
                                        <div class="flex-center-Y">
                                            <div class="grey minifont minifont1">促销规则：</div>
                                            <div style="width:140px">
                                                <el-select v-model="addForm.discountMode" placeholder="请选择" size="mini">
                                                    <el-option label="折扣率" value="0"></el-option>
                                                    <el-option label="促销价" value="1"></el-option>
                                                </el-select>
                                            </div>
                                        </div>
                                        <div class="flex-center-Y">
                                            <div v-if="addForm.discountMode=='0'" class="grey minifont minifont1">折扣率：</div>
                                            <div v-else class="grey minifont minifont1">促销价：</div>
                                            <div style="width:140px">
                                                <el-input v-if="addForm.discountMode=='0'" v-model="addForm.discountRate" size="mini" placeholder="例：90"></el-input>  
                                                <el-input v-else v-model="addForm.promotionPrice" size="mini" placeholder="例：0.01"></el-input>  
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-center-Y H-plane2 H-plane3" v-show="this.showAdd  && tab=='1'">
                            <div class="addpadding">
                                <div class="flex-center-Y">
                                    <span class="addInput">
                                        <el-input maxlength="6" v-model="addForm.name" size="mini" ref="addInput2"></el-input>    
                                    </span>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <el-tooltip class="item" effect="light" content="提交" placement="top">
                                        <i class="el-icon-circle-check blue" @click="commitAdd"></i>&nbsp;
                                    </el-tooltip>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <i class="el-icon-remove-outline blue" @click="backAdd"></i>
                                </div>
                                <div class="pt-2 smallfont" >
                                    <div class="flex-center-Y">
                                        <div class="grey minifont minifont1">应用时间：</div>
                                        <div style="width:138px">
                                            <el-select v-model="addForm.dateType" placeholder="请选择" size="mini">
                                                <el-option label="每天" value="1"></el-option>
                                                <el-option label="开始日期" value="0"></el-option>
                                                <el-option label="日期区间" value="2"></el-option>
                                            </el-select>
                                        </div>
                                    </div>
                                    <div>
                                        <el-date-picker
                                            class="saleInput"
                                            size="mini"
                                            v-show="addForm.dateType=='0'"
                                            v-model="addForm.date"
                                            value-format="yyyy-MM-dd"
                                            type="date"
                                            placeholder="开始日期"
                                            :picker-options="pickerOptions0">
                                        </el-date-picker>
                                        <el-date-picker
                                                class="saleInput"
                                                v-show="addForm.dateType=='2'"
                                                size="mini"
                                                v-model="addForm.rangedate"
                                                type="daterange"
                                                align="right"
                                                :unlink-panels="true"
                                                value-format="yyyy-MM-dd"
                                                start-placeholder="开始日期"
                                                end-placeholder="结束日期">
                                        </el-date-picker>
                                    </div>
                                    <div class="grey minifont minifont1">促销时段：</div>
                                    <div v-for="(time,g) in addForm.rangetime" :key="g" class="saleInput flex-center-Y" style="margin-bottom:10px">
                                        <el-time-picker
                                                is-range
                                                range-separator="-"
                                                size="mini"
                                                v-model="time.time"
                                                align="right"
                                                format="HH:mm"
                                                value-format="HH:mm"
                                                start-placeholder="开始"
                                                end-placeholder="结束">
                                        </el-time-picker>
                                        <div v-if="!(g==0 && addForm.rangetime.length==1)" style="margin-left:10px" @click="removeRange(g)">
                                            <img class="selectIcon" src="../../assets/operaion/remove.png" alt="">
                                        </div>
                                        <div v-if="g==addForm.rangetime.length-1 && addForm.rangetime.length<3" style="margin-left:10px" @click="addRange">
                                            <img class="selectIcon" src="../../assets/operaion/add.png" alt="">
                                        </div>
                                    </div>
                                    <div class="grey minifont minifont1">促销规则：</div>
                                    <div>
                                        <div v-for="(time,g) in addForm.rangetime"  :key="g" class="flex-center-Y" style="width:200px;margin-bottom:5px">
                                            <el-select v-model="time.discountMode" placeholder="请选择" size="mini">
                                                <el-option label="折扣率" value="0"></el-option>
                                                <el-option label="促销价" value="1"></el-option>
                                            </el-select>
                                            <el-input v-show="time.discountMode=='0'" v-model="time.discountRate" size="mini" placeholder="例：90"></el-input>  
                                            <el-input v-show="time.discountMode=='1'" v-model="time.promotionPrice" size="mini" placeholder="例：0.01"></el-input>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-show="tab=='1'" v-for="(item,i) in planeList" :key="'D'+i">
                            <!-- 显示 -->
                            <div v-show="!item.isEdit" :class="item.isActive ? 'backSelect H-plane2' : 'H-plane2'" @click="choose(item)">
                                <div class="flex-center-Y" style="justify-content: space-between;">
                                    <span>{{item.discountName || ''}}</span>
                                    <div v-show="item.isActive">
                                        <i class="el-icon-edit grey" @click.stop="showEdit(item)"></i>&nbsp;&nbsp;
                                        <i class="el-icon-delete grey"  @click.stop="delDialog=true;selectPlane=item"></i>
                                    </div>
                                </div>
                                <div class="minifont">
                                    <div class="minifont">
                                        <div class="grey minifont">应用时间：</div>
                                        <span v-if="item.timeType=='1'">每天</span>
                                        <span v-if="item.timeType=='0'">{{item.startTime}} - 永久</span>
                                        <span v-if="item.timeType=='2'">{{item.startTime}} 至 {{item.endTime}}</span>
                                    </div>
                                    <div class="grey minifont">
                                        促销时段/规则：
                                    </div>
                                    <div class="pb-4 minifont" v-for="(time,index) in item.promotionInfo" :key="index">
                                        {{time.timeStart}} - {{time.timeEnd}}&nbsp;&nbsp;/
                                        <span v-if="time.discountMode=='0'">折扣率：{{time.discountRate}}%</span>
                                        <span v-else>促销价：{{time.promotionPrice}}元</span>
                                    </div>
                                </div>
                            </div>
                            <!-- 编辑 -->
                            <div v-show="item.isEdit" class="addpadding" style="padding: 13px 18px 13px 18px;">
                                <div class="flex-center-Y">
                                    <span class="addInput">
                                        <el-input maxlength="6" v-model="addForm.name" size="mini" ref="addInput2"></el-input>    
                                    </span>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <el-tooltip class="item" effect="light" content="保存" placement="top">
                                        <i class="el-icon-circle-check blue" @click="commitEdit(item)"></i>&nbsp;
                                    </el-tooltip>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <i class="el-icon-remove-outline blue" @click="item.isEdit=false;"></i>
                                </div>
                                <div class="pt-2 smallfont" >
                                    <div class="flex-center-Y">
                                        <div class="grey minifont minifont1">应用时间：</div>
                                        <div style="width:138px">
                                            <el-select v-model="addForm.dateType" placeholder="请选择" size="mini">
                                                <el-option label="每天" value="1"></el-option>
                                                <el-option label="开始日期" value="0"></el-option>
                                                <el-option label="日期区间" value="2"></el-option>
                                            </el-select>
                                        </div>
                                    </div>
                                    <div>
                                        <el-date-picker
                                            class="saleInput"
                                            size="mini"
                                            v-show="addForm.dateType=='0'"
                                            v-model="addForm.date"
                                            value-format="yyyy-MM-dd"
                                            type="date"
                                            placeholder="开始日期"
                                            :picker-options="pickerOptions0">
                                        </el-date-picker>
                                        <el-date-picker
                                                class="saleInput"
                                                v-show="addForm.dateType=='2'"
                                                size="mini"
                                                v-model="addForm.rangedate"
                                                type="daterange"
                                                align="right"
                                                :unlink-panels="true"
                                                value-format="yyyy-MM-dd"
                                                start-placeholder="开始日期"
                                                end-placeholder="结束日期">
                                        </el-date-picker>
                                    </div>
                                    <div class="grey minifont minifont1">促销时段：</div>
                                    <div v-for="(time,g) in addForm.rangetime" :key="g" class="saleInput flex-center-Y" style="margin-bottom:10px">
                                        <el-time-picker
                                                is-range
                                                range-separator="-"
                                                size="mini"
                                                v-model="time.time"
                                                align="right"
                                                format="HH:mm"
                                                value-format="HH:mm"
                                                @change="changeAddTime"
                                                @focus="changeAddTime"
                                                start-placeholder="开始"
                                                end-placeholder="结束">
                                        </el-time-picker>
                                        <div v-if="!(g==0 && addForm.rangetime.length==1)" style="margin-left:10px" @click="removeRange(g)">
                                            <img class="selectIcon" src="../../assets/operaion/remove.png" alt="">
                                        </div>
                                        <div v-if="g==addForm.rangetime.length-1 && addForm.rangetime.length<3" style="margin-left:10px" @click="addRange">
                                            <img class="selectIcon" src="../../assets/operaion/add.png" alt="">
                                        </div>
                                    </div>
                                    <div class="grey minifont minifont1">促销规则：</div>
                                    <div>
                                        <div v-for="(time,g) in addForm.rangetime"  :key="g" class="flex-center-Y" style="width:200px;margin-bottom:5px">
                                            <el-select v-model="time.discountMode" placeholder="请选择" size="mini">
                                                <el-option label="折扣率" value="0"></el-option>
                                                <el-option label="促销价" value="1"></el-option>
                                            </el-select>
                                            <el-input v-show="time.discountMode=='0'" v-model="time.discountRate" size="mini" placeholder="例：90"></el-input>  
                                            <el-input v-show="time.discountMode=='1'" v-model="time.promotionPrice" size="mini" placeholder="例：0.01"></el-input>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="rightBox H-100">
                        <div class="flex">
                            <div v-if="canCheckAll && planeList.length>0" class="flex-center-Y" @click="allCheck">
                                <img v-if="checkAll" class="selectIcon" src="../../assets/operaion/is-select.png" alt="">
                                <img v-else class="selectIcon" src="../../assets/operaion/select.png" alt="">
                                &nbsp;
                                全选
                            </div>
                        </div>
                        <div style="height:95%;padding-top:20px;;overflow:auto" v-loading="loading"  v-if="selectVent.machineCode && planeList.length>0">
                                <div v-for="(item,key) in data" :key="key" class="row-box flex-center-Y">
                                    <div v-for="(i,index) in item" :key="index" class="col-box" @click="selectAndJoin(i)">
                                        <el-popover
                                            placement="top-start"
                                            width="200"
                                            trigger="hover"
                                            >
                                            <div>已参加促销：
                                                <div v-for="(k,f) in i.promotionName" :key="'C'+f">{{k}}</div>  
                                            </div>
                                            <div slot="reference" v-show="i.checkFlag=='0'" class="mask" @click.stop="showDisTip()"></div>
                                        </el-popover>
                                        <div class="num">
                                                {{i.trailsNo}}
                                        </div>
                                        <div class="selectBox">
                                            <img v-if="i.isActive" class="selectIcon" src="../../assets/operaion/is-select.png" alt="">
                                            <img v-else class="selectIcon" src="../../assets/operaion/select.png" alt="">
                                        </div>
                                        <el-popover
                                            v-if="i.promotionName"  
                                            placement="top-start"
                                            width="200"
                                            trigger="hover"
                                            >
                                            <div>已参加促销：
                                                <div v-for="(k,f) in i.promotionName" :key="'A'+f">{{k}}</div>  
                                            </div>
                                            <div slot="reference" class="bottomBox flex-center-Y">
                                                <div  class="picImg">
                                                    <img v-if="i.appPicture" :src="i.appPicture" style="width:5Vh;height:5Vh" alt="">
                                                </div>
                                                <img class="img" src="../../assets/icons/dotted.png" alt="">
                                                <div class="info">
                                                    <div class="name limit-ellipsis">{{i.skuName}}</div>
                                                    <div class="price" v-if="!i.model">
                                                        <span>¥{{i.salePrice }}</span>
                                                    </div>
                                                    <div class="price" v-if="i.model && i.model.discountMode">
                                                        <span>¥{{i.model.promotionPrice }}</span>
                                                        <span class="diss">¥{{i.salePrice}}</span>
                                                    </div>
                                                    <div class="price" v-if="i.model2 && i.model2.discountMode">
                                                        <span>¥{{i.model2.promotionPrice }}</span>
                                                        <span class="diss">¥{{i.salePrice}}</span>
                                                    </div>
                                                    <div class="price" v-if="i.model3 && i.model3.discountMode">
                                                        <span>¥{{i.model3.promotionPrice }}</span>
                                                        <span class="diss">¥{{i.salePrice}}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </el-popover>
                                        <div v-if="!i.promotionName" class="bottomBox flex-center-Y">
                                            <div  class="picImg">
                                                <img v-if="i.appPicture" :src="i.appPicture" style="width:5Vh;height:5Vh" alt="">
                                            </div>
                                            <img class="img" src="../../assets/icons/dotted.png" alt="">
                                            <div class="info">
                                                <div class="name limit-ellipsis">{{i.skuName}}</div>
                                                <div class="price" v-if="!i.model || (i.model && !i.model.discountMode)">
                                                    <span>¥{{i.salePrice }}</span>
                                                </div>
                                                <div class="price" v-if="i.model && i.model.discountMode">
                                                    <span>¥{{i.model.promotionPrice }}</span>
                                                    <span class="diss">¥{{i.salePrice}}</span>
                                                </div>
                                                <div class="price" v-if="i.model2 && i.model2.discountMode">
                                                    <span>¥{{i.model2.promotionPrice }}</span>
                                                    <span class="diss">¥{{i.salePrice}}</span>
                                                </div>
                                                <div class="price" v-if="i.model3 && i.model3.discountMode">
                                                    <span>¥{{i.model3.promotionPrice }}</span>
                                                    <span class="diss">¥{{i.salePrice}}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                        </div>
                        <div v-else class="title" style="height:90%;padding-top:5%;text-align:center;font-weight:bold;color:#999">
                                <span v-if="!selectVent.machineCode">暂无机器</span>
                                <span v-if="selectVent.machineCode && planeList.length==0">暂无计划</span>
                                <div>
                                    <img style="width:45vh" src="../../assets/operaion/blank.png" alt="">
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog
            :visible.sync="delDialog"
            width="400px"
            custom-class="promotionDialog"
            >
            <div>
                <div class="title">是否确认删除该促销计划？</div>
                <div class="box-bottom flex-center-Y">
                    <div class="flex-1">
                        <div class="btn1 m-auto" @click="delDialog=false">
                            取消
                        </div>
                    </div>
                    <div class="flex-1">
                        <div class="btn m-auto" style="float:none" @click="delPlane">
                            确认
                        </div>
                    </div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import "v-charts/lib/style.css";
import { regionData, CodeToText } from "element-china-area-data";
export default {
    directives: {
        drag: {
            // 指令的定义
            bind: function (el) {
                let odiv = el;   //获取当前元素
                odiv.ondblclick = (e) => {
                    // odiv.onmousedown = (e) => {
                    //算出鼠标相对元素的位置
                    let disX = e.clientX - odiv.offsetLeft;
                    let disY = e.clientY - odiv.offsetTop;
                    document.onmousemove = (e)=>{
                        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                        let left = e.clientX - disX;    
                        let top = e.clientY - disY;
                
                        //移动当前元素
                        odiv.style.left = left + 'px';
                        odiv.style.top = top + 'px';
                    };
                    document.onmouseup = (e) => {
                        document.onmousemove = null;
                        document.onmouseup = null;
                    };
                };
            }
        }
    },
    data() {
        return {
            index:"",
            discountRate:"",
            subPrice:"",
            promotionPrice:"",
            pickerOptions0: { 
                disabledDate(time) {
                    return time.getTime() < Date.now() - 8.64e7;//如果没有后面的-8.64e7就是不可以选择今天的 
                }
            },
            selectPlane:{},
            planeParam:{
                pageNum:1,
                totalPage:5,
                pageRow:100,
                tab:"0"
            },
            showAdd:false,
            planeList:[
                // {salePlanName:"促销一",date:"2019-09-01",startTime:"00:00",endTime:"24:00"},
                // {salePlanName:"促销一",date:"2019-09-01",startTime:"00:00",endTime:"24:00"},
                // {salePlanName:"促销一",date:"2019-09-01",startTime:"00:00",endTime:"24:00"},
            ],
            addForm:{name:"新建促销",dateType:"1",discountMode:'0',discountRate:'',promotionPrice:'',date:"",rangedate:[],rangetime:[{time:["00:00","08:00"],discountMode:'0',discountRate:'',promotionPrice:''},{time:["08:00","16:00"],discountMode:'0',discountRate:'',promotionPrice:''},
            {time:["16:00","23:59"],discountMode:'0',discountRate:'',promotionPrice:''}
            ]},
            tab:"0",
            options: [],
            props:{value:"storeCode",label:"storeName",children:"machineJson"},
            selectCode:[],
            selectTab:"",
            params:{page:1,pageRow:100,totalCount:1000,searchName:""},
            storeList:[],
            storeData:{},
            selectVent:{},
            num:0,
            selectVentName:"",
            storeCode:this.$route.params.id,
            data:[],
            selectVentCode:"",
            trailsType:"",
            loading:false,
            checkAll:true,
            canCheckAll:false,//是否显示全选按钮,如果所有货道都冲突,则不显示
            delDialog:false
        };
    },
    created() {
        document.getElementsByTagName("body")[0].style.color="#333333"
        document.getElementsByTagName("body")[0].style.minWidth="1265px";
        document.getElementsByTagName("body")[0].style.overflow="auto";
        this.getStoreList()
        this.getPlaneList()
    },
    methods: {
        changeAddTime(){
            this.addForm=JSON.parse(JSON.stringify(this.addForm))
        },
        showDisTip(){//无法选择的提示
            this.$message({
                    type:"warning",
                    message:"当前SKU已有其他冲突促销或参加的促销已满3个，无法选择"
                })
        },
        clearAddForm(){
            this.addForm={name:"新建促销",dateType:"1",discountMode:'0',discountRate:'',promotionPrice:'',date:"",rangedate:[],rangetime:[{time:["00:00","08:00"],discountMode:'0',discountRate:'',promotionPrice:''},{time:["08:00","16:00"],discountMode:'0',discountRate:'',promotionPrice:''},
            {time:["16:00","23:59"],discountMode:'0',discountRate:'',promotionPrice:''}
            ]}
        },
        isHasRepeatTime(data) {//判断阶梯促销时间段是否有重合
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
                if (allStartTime[k] < allEndTime[k-1]){
                    result+=1;
                }
            }
            return result>0;
        },
        removeRange(index){//删除阶梯促销时间段
            this.addForm.rangetime.splice(index,1)
        },
        addRange(){//增加阶梯促销时间段
            let time={time:["","23:59"],discountMode:'0',discountRate:'',promotionPrice:''}
            time.time[0]=this.addForm.rangetime[this.addForm.rangetime.length-1].time[1]
            this.addForm.rangetime.push(time)
        },
        allCheck(){//全选按钮
            // this.checkAll=!this.checkAll
            if(!this.checkAll){//全部参加
                let skuInfo=[]
                for(let i in this.skuInfo){
                    if(this.skuInfo[i].checkFlag=='1'){
                        skuInfo.push(this.skuInfo[i])
                    }
                }
                this.$confirm('是否确定批量参加'+this.selectPlane.discountName+'?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                    }).then(() => {
                        let promotionInfo
                        if(this.tab=='0'){
                            //判断促销价格
                            for(let i in skuInfo){
                                if(this.selectPlane.discountMode=='1' && Number(this.selectPlane.promotionPrice)>skuInfo[i].salePrice){
                                    this.$message({
                                        type:"warning",
                                        message:"促销价大于销售价,无法参加"
                                    })
                                    return;
                                }
                            }
                            //判断促销价格
                            if(this.selectPlane.discountMode=='0'){
                                this.selectPlane.promotionPrice=''
                            }else if(this.selectPlane.discountMode=='1'){
                                this.selectPlane.discountRate=''
                            }
                            promotionInfo=this.selectPlane
                            promotionInfo.promotionTime=[{discountRate: this.selectPlane.discountRate,discountMode: this.selectPlane.discountMode,promotionPrice: this.selectPlane.promotionPrice,promotionTimeId: this.selectPlane.promotionTimeId}]
                            promotionInfo.skuInfo=skuInfo
                            promotionInfo=[promotionInfo]
                        }else{
                            //判断促销价格
                            for(let i in skuInfo){
                                if(this.selectPlane.discountMode=='1' && Number(this.selectPlane.promotionPrice)>skuInfo[i].salePrice){
                                    this.$message({
                                        type:"warning",
                                        message:"促销价大于销售价,无法参加"
                                    })
                                    return;
                                }
                            }
                            //判断促销价格
                            promotionInfo=[]
                            for(let i in this.selectPlane.promotionInfo){
                                let info={}
                                info=this.selectPlane
                                info.skuInfo=skuInfo
                                info.timeStart=this.selectPlane.promotionInfo[i].timeStart
                                info.timeEnd=this.selectPlane.promotionInfo[i].timeEnd
                                // info.discountMode=this.selectPlane.promotionInfo[i].discountMode
                                // info.discountRate=this.selectPlane.promotionInfo[i].discountRate
                                // info.promotionPrice=this.selectPlane.promotionInfo[i].promotionPrice
                                if(this.selectPlane.promotionInfo[i].discountMode=='0'){
                                    this.selectPlane.promotionInfo[i].promotionPrice=''
                                }else if(this.selectPlane.promotionInfo[i].discountMode=='1'){
                                    this.selectPlane.promotionInfo[i].discountRate=''
                                }
                                info.promotionTime=[{promotionTimeId:this.selectPlane.promotionInfo[i].promotionTimeId,discountMode:this.selectPlane.promotionInfo[i].discountMode,discountRate:this.selectPlane.promotionInfo[i].discountRate,promotionPrice:this.selectPlane.promotionInfo[i].promotionPrice}]
                                promotionInfo.push(info)
                            }
                        }
                        if(this.options.length==0 && this.stockType=='A'){
                                this.$message({
                                    type:"warning",
                                    message:"请先关联仓库哦~"
                                })
                                return;
                            }
                        this.api({
                                url: "/promotion/addPromotionInfo",
                                method: "post",
                                data: {promotionInfo:promotionInfo}
                            })
                                .then(data => {
                                    this.$message({
                                            type:"success",
                                            message:"参加成功 ! "
                                        })
                                this.checkAll=true
                                this.getMachineInfo()
                            })
                    }).catch(() => {
                        
                    });
            }else{//全部取消参加
                let skuInfo=[]
                for(let i in this.skuInfo){
                    if(this.skuInfo[i].checkFlag=='2'){
                        skuInfo.push(this.skuInfo[i])
                    }
                }
                this.$confirm('是否确定批量取消参加'+this.selectPlane.discountName+'?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                    }).then(() => {
                        if(this.tab=='0'){//取消限时促销
                            this.api({
                                url: "/promotion/deleteAllTimePromotion ",
                                method: "post",
                                data: {
                                    skuInfo:skuInfo,
                                    promotionId:this.selectPlane.promotionId,
                                    promotionTimeId:this.selectPlane.promotionTimeId,
                                    machineCode:this.selectVent.machineCode
                                }
                            })
                                .then(data => {
                                this.$message({
                                type:"success",
                                message:"取消成功~"
                            })
                                this.getMachineInfo()
                            })
                        }else{//取消阶梯促销
                            let promotionIds=''
                            let promotionTimeIds=''
                            for(let i in this.selectPlane.promotionInfo){
                                if(i==0){
                                    promotionIds+=this.selectPlane.promotionId
                                    promotionTimeIds+=this.selectPlane.promotionInfo[i].promotionTimeId
                                }else{
                                    promotionIds+=','+this.selectPlane.promotionId
                                    promotionTimeIds+=','+this.selectPlane.promotionInfo[i].promotionTimeId
                                }
                            }
                            let channelids=''
                            let skuCodes=''
                            for(let i in skuInfo){
                                if(i==0){
                                    channelids+=this.skuInfo[i].channelid
                                    skuCodes+=this.skuInfo[i].skuCode
                                }else{
                                    channelids+=','+this.skuInfo[i].channelid
                                    skuCodes+=','+this.skuInfo[i].skuCode
                                }
                            }
                            this.api({
                                url: "/promotion/deletePromotionLadder ",
                                method: "post",
                                data: {
                                    channelids:channelids,
                                    skuCodes:skuCodes,
                                    promotionIds:promotionIds,
                                    promotionTimeIds:promotionTimeIds,
                                    machineCode:this.selectVent.machineCode,
                                    skuInfo:skuInfo
                                }
                            })
                                .then(data => {
                                this.$message({
                                type:"success",
                                message:"取消成功~"
                            })
                                this.getMachineInfo()
                            })
                        }
                    }).catch(() => {
                        
                    });
            }
        },
        selectAndJoin(i){//点击单个货道,参加或取消参加销售计划
            let skuInfo=[i] 
            console.log(skuInfo)
            if(i.checkFlag=='2'){//取消參加
                if(this.tab=='0'){//取消限时促销
                    this.$confirm('是否确定取消参加'+this.selectPlane.discountName+'?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                        }).then(() => {
                            this.api({
                                url: "/promotion/deleteAllTimePromotion ",
                                method: "post",
                                data: {
                                    skuInfo:skuInfo,
                                    promotionId:this.selectPlane.promotionId,
                                    promotionTimeId:this.selectPlane.promotionTimeId,
                                    machineCode:this.selectVent.machineCode
                                }
                            })
                                .then(data => {
                                this.$message({
                                type:"success",
                                message:"取消成功~"
                            })
                                this.getMachineInfo()
                            })
                        }).catch(() => {
                            
                        });
                }else{//取消阶梯促销
                    let promotionIds=''
                    let promotionTimeIds=''
                    for(let i in this.selectPlane.promotionInfo){
                        if(i==0){
                            promotionIds+=this.selectPlane.promotionId
                            promotionTimeIds+=this.selectPlane.promotionInfo[i].promotionTimeId
                        }else{
                            promotionIds+=','+this.selectPlane.promotionId
                            promotionTimeIds+=','+this.selectPlane.promotionInfo[i].promotionTimeId
                        }
                    }
                    this.$confirm('是否确定取消参加'+this.selectPlane.discountName+'?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                    }).then(() => {
                        this.api({
                            url: "/promotion/deletePromotionLadder ",
                            method: "post",
                            data: {
                                channelids:skuInfo[0].channelid,
                                skuCodes:skuInfo[0].skuCode,
                                promotionIds:promotionIds,
                                promotionTimeIds:promotionTimeIds,
                                machineCode:this.selectVent.machineCode,
                                skuInfo:skuInfo
                            }
                        })
                            .then(data => {
                            this.$message({
                            type:"success",
                            message:"取消成功~"
                        })
                            this.getMachineInfo()
                        })
                    }).catch(() => {
                        
                    });
                }
            }else{//参加计划
                let promotionInfo
                if(this.tab=='0'){
                    //判断促销价格
                    for(let i in skuInfo){
                        if(this.selectPlane.discountMode=='1' && Number(this.selectPlane.promotionPrice)>skuInfo[i].salePrice){
                            this.$message({
                                type:"warning",
                                message:"促销价大于销售价,无法参加"
                            })
                            return;
                        }
                    }
                    //判断促销价格
                    promotionInfo=this.selectPlane
                    promotionInfo.skuInfo=skuInfo
                    if(this.selectPlane.discountMode=='0'){
                        this.selectPlane.promotionPrice=''
                    }else if(this.selectPlane.discountMode=='1'){
                        this.selectPlane.discountRate=''
                    }
                    promotionInfo.promotionTime=[{discountRate: this.selectPlane.discountRate,discountMode: this.selectPlane.discountMode,promotionPrice: this.selectPlane.promotionPrice,promotionTimeId: this.selectPlane.promotionTimeId}]
                    promotionInfo=[promotionInfo]
                }else{
                    //判断促销价格
                    for(let i in skuInfo){
                        for(let key in this.selectPlane.promotionInfo){
                            if(this.selectPlane.promotionInfo[key].discountMode=='1' && Number(this.selectPlane.promotionInfo[key].promotionPrice)>skuInfo[i].salePrice){
                                this.$message({
                                    type:"warning",
                                    message:"促销价大于销售价,无法参加"
                                })
                                return;
                            }
                        }
                    }
                    //判断促销价格
                    promotionInfo=[]
                    for(let i in this.selectPlane.promotionInfo){
                        let info={}
                        info=this.selectPlane
                        info.skuInfo=skuInfo
                        info.timeStart=this.selectPlane.promotionInfo[i].timeStart
                        info.timeEnd=this.selectPlane.promotionInfo[i].timeEnd
                        // info.discountMode=this.selectPlane.promotionInfo[i].discountMode
                        // info.discountRate=this.selectPlane.promotionInfo[i].discountRate
                        // info.promotionPrice=this.selectPlane.promotionInfo[i].promotionPrice
                        if(this.selectPlane.promotionInfo[i].discountMode=='0'){
                            this.selectPlane.promotionInfo[i].promotionPrice=''
                        }else if(this.selectPlane.promotionInfo[i].discountMode=='1'){
                            this.selectPlane.promotionInfo[i].discountRate=''
                        }
                        info.promotionTime=[{promotionTimeId:this.selectPlane.promotionInfo[i].promotionTimeId,discountMode:this.selectPlane.promotionInfo[i].discountMode,discountRate:this.selectPlane.promotionInfo[i].discountRate,promotionPrice:this.selectPlane.promotionInfo[i].promotionPrice}]
                        promotionInfo.push(info)
                        console.log(promotionInfo)
                    }
                    
                }
                if(this.options.length==0 && this.stockType=='A'){
                        this.$message({
                            type:"warning",
                            message:"请先关联仓库哦~"
                        })
                        return;
                    }
                this.api({
                        url: "/promotion/addPromotionInfo",
                        method: "post",
                        data: {promotionInfo:promotionInfo}
                    })
                        .then(data => {
                            this.$message({
                                    type:"success",
                                    message:"参加成功 ! "
                                })
                        this.getMachineInfo()
                    })
            }
            
    },
    getPlaneList(){//促销列表
        if(this.tab==0){
            this.planeParam.pageRow=100
            this.api({
                    url: "/promotion/showAllTimePromotion",
                    method: "post",
                    data: {
                            machineCode:this.selectVent.machineCode,
                            storeCode:this.storeData.storeCode,
                            pageNum:this.planeParam.pageNum,
                            pageRow:this.planeParam.pageRow
                            }
                })
                    .then(data => {
                        this.planeList=data.list
                        for(let i in this.planeList){
                            this.planeList[i].promotionTimeId=this.planeList[i].promotionTime[0].promotionTimeId
                            this.planeList[i].discountMode=this.planeList[i].promotionTime[0].discountMode
                            this.planeList[i].discountRate=this.planeList[i].promotionTime[0].discountRate
                            this.planeList[i].promotionPrice=this.planeList[i].promotionTime[0].promotionPrice
                        }
                        this.planeParam.totalPage=Math.ceil(data.totalCount/100) 
                        if(this.planeList[0]){
                            this.selectPlane=this.planeList[0]
                            this.planeList[0].isActive=true
                            this.choose(this.planeList[0])//选择第一个计划
                        }
                        if(this.selectVent.machineCode){
                            this.getMachineInfo()
                        }
                        
                })
        }else if(this.tab==1){
            this.planeParam.pageRow=100
            this.api({
                    url: "/promotion/showAllLadderPromotion",
                    method: "post",
                    data: {
                            machineCode:this.selectVent.machineCode,
                            storeCode:this.storeData.storeCode,
                            pageNum:this.planeParam.pageNum,
                            pageRow:this.planeParam.pageRow
                            }
                })
                    .then(data => {
                        this.planeList=data.list
                        this.planeParam.totalPage=Math.ceil(data.totalCount/100) 
                        if(this.planeList[0]){
                            this.selectPlane=this.planeList[0]
                            this.planeList[0].isActive=true
                        }
                        if(this.selectVent.machineCode){
                            this.getMachineInfo()
                        }
                })
        }
    },
        addPlane(){//新建
            for(let i in this.planeList){
                this.planeList[i].isEdit=false
            }
            this.clearAddForm()
            if(this.options.length==0 && this.stockType=='A'){
                this.$message({
                    type:"warning",
                    message:"请先关联仓库哦~"
                })
                return;
            }
            this.addForm.name="新建促销"
            // if(this.planeList.length==5 && this.tab=='0'){
            //     this.planeList.splice(this.planeList.length-1,1)
            // }
            // if(this.planeList.length>=2 && this.tab=='1'){
            //     this.planeList.splice(this.planeList.length-1,1)
            // }
            this.showAdd=true
            // if(this.tab=='0'){
            // this.$nextTick(_ => {
            //     this.$refs.addInput.focus()
            // })
            // }else{
            //     this.$nextTick(_ => {
            //     this.$refs.addInput2.focus()
            // })
            // }
        },
        backAdd(){//取消新建
            this.showAdd=false
            this.getPlaneList(this.params)
        },
        commitAdd(){//提交新建
            if(!this.addForm.name){
                this.$message({
                    type:"warning",
                    message:"请输入计划名称"
                })
                return;
            }
            if(this.tab=='0'){//限时促销
                if(this.addForm.dateType=='1'){
                    if(!this.addForm.endTime || !this.addForm.startTime){
                        this.$message({
                        type:"warning",
                        message:"请选择计划执行时间"
                    })
                    return;
                    }
                }
                if(this.addForm.dateType=='0'){
                    if(!this.addForm.endTime || !this.addForm.startTime || !this.addForm.date){
                        this.$message({
                        type:"warning",
                        message:"请选择计划执行时间"
                    })
                    return;
                    }
                }
                if(this.addForm.dateType=='2'){
                    if(!this.addForm.endTime || !this.addForm.startTime || !this.addForm.rangedate || this.addForm.rangedate.length==0){
                        this.$message({
                        type:"warning",
                        message:"请选择计划执行时间"
                    })
                    return;
                    }
                }
                if(this.addForm.discountMode=='0'){//按折扣率
                    if(!/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(this.addForm.discountRate)){
                        console.log(this.addForm.discountRate)
                        this.$message({
                                type:"warning",
                                message:"只能输入正数哦~"
                            })
                            this.addForm.discountRate=''
                            return;
                    }
                    if(this.addForm.discountRate>=100){
                        this.$message({
                                type:"warning",
                                message:"折扣率必须小于100%"
                            })
                            this.addForm.discountRate=''
                            return;
                    }
                }
                if(this.addForm.discountMode=='1'){//按促销价
                    if(!/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(this.addForm.promotionPrice)){
                        this.$message({
                                type:"warning",
                                message:"只能输入正数哦~"
                            })
                            this.addForm.promotionPrice=''
                            return;
                    }
                }
                
            console.log(111,this.addForm)
            }else{//阶梯促销
                if(this.addForm.dateType=='0'){//开始日期
                    if(!this.addForm.date){
                        this.$message({
                        type:"warning",
                        message:"请选择计划应用日期"
                    })
                    return;
                    }
                }
                if(this.addForm.dateType=='2'){
                    if(!this.addForm.rangedate || this.addForm.rangedate.length==0){
                        this.$message({
                        type:"warning",
                        message:"请选择计划应用日期"
                    })
                    return;
                    }
                }
                if(this.addForm.rangetime.length==0){
                    this.$message({
                            type:"warning",
                            message:"请选择促销时段"
                        })
                        return;
                }
                for(let key in this.addForm.rangetime){
                    if(!this.addForm.rangetime[key].time[0] || !this.addForm.rangetime[key].time[1]){
                        this.$message({
                            type:"warning",
                            message:"请选择促销时段"
                        })
                        return;
                    }
                    if(this.addForm.rangetime[key].discountMode=='0'){//按折扣率
                        if(!/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(this.addForm.rangetime[key].discountRate)){
                            this.$message({
                                    type:"warning",
                                    message:"只能输入正数哦~"
                                })
                                this.addForm.rangetime[key].discountRate=''
                                return;
                        }
                        if(this.addForm.rangetime[key].discountRate>=100){
                            this.$message({
                                    type:"warning",
                                    message:"折扣率必须小于100%"
                                })
                                this.addForm.rangetime[key].discountRate=''
                                return;
                        }
                    }
                    if(this.addForm.rangetime[key].discountMode=='1'){//按促销价
                        if(!/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(this.addForm.rangetime[key].promotionPrice)){
                            this.$message({
                                    type:"warning",
                                    message:"只能输入正数哦~"
                                })
                                this.addForm.rangetime[key].promotionPrice=''
                                return;
                        }
                    }
                }
                //判断是否时间有重合
                    let timeData=[]
                    for(let i in this.addForm.rangetime){
                        let timePara={}
                        timePara.StartTime=this.addForm.rangetime[i].time[0]
                        timePara.EndTime=this.addForm.rangetime[i].time[1]
                        timeData.push(timePara)
                    }
                    console.log(timeData)
                    if(this.isHasRepeatTime(timeData)){
                        this.$message({
                                    type: 'warning',
                                    message: '促销时段冲突~'
                                });
                        return;
                    }
                //判断是否时间有重合
            }
            console.log(222,this.addForm)
            let discountName=this.addForm.name
            let timeType=this.addForm.dateType
            let startTime,endTime
            let promotionTime
            let discountType
            if(this.tab=='0'){
                promotionTime=[{timeStart:"",timeEnd:""}]
                discountType='Z'
                promotionTime[0].timeStart=this.addForm.startTime
                promotionTime[0].timeEnd=this.addForm.endTime
                promotionTime[0].discountMode=this.addForm.discountMode
                promotionTime[0].discountRate=this.addForm.discountRate
                promotionTime[0].promotionPrice=this.addForm.promotionPrice
            }else{
                discountType='J'
                // promotionTime[0].timeStart="00:00"
                // promotionTime[0].timeEnd=this.addForm.endTime1
                // promotionTime[1].timeStart=this.addForm.endTime1
                // if(!this.addForm.endTime2){
                //     promotionTime[1].timeEnd="23:59"
                // }else{
                //     var a={timeStart:"",timeEnd:""}
                //     promotionTime.push(a)
                //     promotionTime[1].timeEnd=this.addForm.endTime2
                //     promotionTime[2].timeStart=this.addForm.endTime2
                //     promotionTime[2].timeEnd="23:59"
                // }
                promotionTime=[]
                for(let key in this.addForm.rangetime){
                    let time={}
                    time.timeStart=this.addForm.rangetime[key].time[0]
                    time.timeEnd=this.addForm.rangetime[key].time[1]
                    time.discountMode=this.addForm.rangetime[key].discountMode
                    time.discountRate=this.addForm.rangetime[key].discountRate
                    time.promotionPrice=this.addForm.rangetime[key].promotionPrice
                    promotionTime.push(time)
                }
            }
            if(timeType=='0'){
                startTime=this.addForm.date
                endTime=""
            }else if(timeType=='1'){
                startTime=""
                endTime=""
            }else{
                startTime=this.addForm.rangedate[0]
                endTime=this.addForm.rangedate[1]
            }
            console.log(333,this.addForm)
             this.api({
                    url: "/promotion/addPromotionDetails",
                    method: "post",
                    data: {
                            storeCode:this.storeData.storeCode,
                            machineCode:this.selectVent.machineCode,
                            discountName:discountName,
                            discountType:discountType,
                            // discountMode:this.addForm.discountMode,
                            // discountRate:this.addForm.discountRate,
                            // promotionPrice:this.addForm.promotionPrice,
                            startTime:startTime,
                            endTime:endTime,
                            timeType:timeType,
                            promotionTime:promotionTime,
                            }
                })
                    .then(data => {
                        this.$message({
                            type:"success",
                            message:"新建成功!"
                        })
                        this.addForm.dateType='1'
                        this.addForm.startTime=''
                        this.addForm.date=''
                        this.addForm.rangedate=[]
                        this.addForm.rangetime=[{time:["00:00","08:00"]},{time:["08:00","16:00"]},{time:["16:00","23:59"]}]
                        this.addForm.endTime=''
                        // this.addForm.endTime1=''
                        // this.addForm.endTime2=''
                        this.addForm.timeStart=''
                        this.addForm.timeEnd=''
                        this.showAdd=false
                        this.getPlaneList()
                        this.selectCode[1]=this.selectVent.machineCode
                        for(let i in this.options){
                            if(this.options[i].storeCode==this.storeData.storeCode){
                                for(let key in this.options[i].machineJson){
                                    if(this.options[i].machineJson[key].machineCode==this.selectCode[1]){
                                        this.selectVent=this.options[i].machineJson[key]
                                    }
                                }
                            }
                        }
                        
                    })
        },
        showEdit(item){//点击编辑按钮
            this.showAdd=false
            for(let i in this.planeList){
                this.planeList[i].isEdit=false
            }
            item.isEdit=true
            this.planeList=JSON.parse(JSON.stringify(this.planeList))
            if(this.tab=='0'){//限时促销
                this.addForm={
                    name:item.discountName,
                    dateType:item.timeType,
                    date:item.startTime,
                    rangedate:[item.startTime,item.endTime],
                    startTime:item.timeStart,
                    endTime:item.timeEnd,
                    discountMode:item.discountMode,
                    discountRate:item.discountRate,
                    promotionPrice:item.promotionPrice,
                    promotionId:item.promotionId,
                    promotionTimeId:item.promotionTimeId,

                }
                console.log(this.addForm)
            }else{//阶梯促销
                for(let i in item.promotionInfo){
                    item.promotionInfo[i].time=[item.promotionInfo[i].timeStart,item.promotionInfo[i].timeEnd]
                    item.promotionInfo[i].promotionTimeId=item.promotionInfo[i].promotionTimeId
                }
                this.addForm={
                    name:item.discountName,
                    dateType:item.timeType,
                    date:item.startTime,
                    rangedate:[item.startTime,item.endTime],
                    rangetime:item.promotionInfo,
                    promotionId:item.promotionId,
                }
            }
            
        },
        commitEdit(item){//编辑保存
            console.log("编辑保存",this.addForm,item)
            let aisleJson=[]
            for(let i in this.skuInfo){
                if(this.skuInfo[i].checkFlag=='2'){
                    aisleJson.push(this.skuInfo[i])
                }
            }
            if(!this.addForm.name){
                this.$message({
                    type:"warning",
                    message:"请输入计划名称"
                })
                return;
            }
            if(this.tab=='0'){//限时促销
                if(this.addForm.dateType=='1'){
                    if(!this.addForm.endTime || !this.addForm.startTime){
                        this.$message({
                        type:"warning",
                        message:"请选择计划执行时间"
                    })
                    return;
                    }
                }
                if(this.addForm.dateType=='0'){
                    if(!this.addForm.endTime || !this.addForm.startTime || !this.addForm.date){
                        this.$message({
                        type:"warning",
                        message:"请选择计划执行时间"
                    })
                    return;
                    }
                }
                if(this.addForm.dateType=='2'){
                    if(!this.addForm.endTime || !this.addForm.startTime || !this.addForm.rangedate || this.addForm.rangedate.length==0){
                        this.$message({
                        type:"warning",
                        message:"请选择计划执行时间"
                    })
                    return;
                    }
                }
                if(this.addForm.discountMode=='0'){//按折扣率
                    if(!/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(this.addForm.discountRate)){
                        console.log(this.addForm.discountRate)
                        this.$message({
                                type:"warning",
                                message:"只能输入正数哦~"
                            })
                            this.addForm.discountRate=''
                            return;
                    }
                    if(this.addForm.discountRate>=100){
                        this.$message({
                                type:"warning",
                                message:"折扣率必须小于100%"
                            })
                            this.addForm.discountRate=''
                            return;
                    }
                }
                if(this.addForm.discountMode=='1'){//按促销价
                    if(!/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(this.addForm.promotionPrice)){
                        this.$message({
                                type:"warning",
                                message:"只能输入正数哦~"
                            })
                            this.addForm.promotionPrice=''
                            return;
                    }
                }
            }else{//阶梯促销
                if(this.addForm.dateType=='0'){//开始日期
                    if(!this.addForm.date){
                        this.$message({
                        type:"warning",
                        message:"请选择计划应用日期"
                    })
                    return;
                    }
                }
                if(this.addForm.dateType=='2'){
                    if(!this.addForm.rangedate || this.addForm.rangedate.length==0){
                        this.$message({
                        type:"warning",
                        message:"请选择计划应用日期"
                    })
                    return;
                    }
                }
                if(this.addForm.rangetime.length==0){
                    this.$message({
                            type:"warning",
                            message:"请选择促销时段"
                        })
                        return;
                }
                for(let key in this.addForm.rangetime){
                    if(!this.addForm.rangetime[key].time[0] || !this.addForm.rangetime[key].time[1]){
                        this.$message({
                            type:"warning",
                            message:"请选择促销时段"
                        })
                        return;
                    }
                    if(this.addForm.rangetime[key].discountMode=='0'){//按折扣率
                        if(!/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(this.addForm.rangetime[key].discountRate)){
                            this.$message({
                                    type:"warning",
                                    message:"只能输入正数哦~"
                                })
                                this.addForm.rangetime[key].discountRate=''
                                return;
                        }
                        if(this.addForm.rangetime[key].discountRate>=100){
                            this.$message({
                                    type:"warning",
                                    message:"折扣率必须小于100%"
                                })
                                this.addForm.rangetime[key].discountRate=''
                                return;
                        }
                    }
                    if(this.addForm.rangetime[key].discountMode=='1'){//按促销价
                        if(!/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(this.addForm.rangetime[key].promotionPrice)){
                            this.$message({
                                    type:"warning",
                                    message:"只能输入正数哦~"
                                })
                                this.addForm.rangetime[key].promotionPrice=''
                                return;
                        }
                    }
                }
                //判断是否时间有重合
                    let timeData=[]
                    for(let i in this.addForm.rangetime){
                        let timePara={}
                        timePara.StartTime=this.addForm.rangetime[i].time[0]
                        timePara.EndTime=this.addForm.rangetime[i].time[1]
                        timeData.push(timePara)
                    }
                    console.log(timeData)
                    if(this.isHasRepeatTime(timeData)){
                        this.$message({
                                    type: 'warning',
                                    message: '促销时段冲突~'
                                });
                        return;
                    }
                //判断是否时间有重合
            }
            let discountName=this.addForm.name
            let timeType=this.addForm.dateType
            let startTime,endTime
            let promotionTime
            let discountType
            if(this.tab=='0'){//限时促销
                promotionTime=[{timeStart:"",timeEnd:""}]
                discountType='Z'
                promotionTime[0].timeStart=this.addForm.startTime
                promotionTime[0].timeEnd=this.addForm.endTime
                promotionTime[0].discountMode=this.addForm.discountMode
                promotionTime[0].discountRate=this.addForm.discountRate
                promotionTime[0].promotionPrice=this.addForm.promotionPrice
                promotionTime[0].promotionTimeId=this.addForm.promotionTimeId
            }else{//阶梯促销
                discountType='J'
                promotionTime=[]
                for(let key in this.addForm.rangetime){
                    let time={}
                    time.timeStart=this.addForm.rangetime[key].time[0]
                    time.timeEnd=this.addForm.rangetime[key].time[1]
                    time.discountMode=this.addForm.rangetime[key].discountMode
                    time.discountRate=this.addForm.rangetime[key].discountRate
                    time.promotionPrice=this.addForm.rangetime[key].promotionPrice
                    time.promotionTimeId=this.addForm.rangetime[key].promotionTimeId
                    promotionTime.push(time)
                }
            }
            if(timeType=='0'){
                startTime=this.addForm.date
                endTime=""
            }else if(timeType=='1'){
                startTime=""
                endTime=""
            }else{
                startTime=this.addForm.rangedate[0]
                endTime=this.addForm.rangedate[1]
            }
            console.log("promotionTime",promotionTime)
             this.api({//检测该计划是否有机器正在应用
                 url: "/promotion/updatePromotionRemind",
                 method: "post",
                 data: {
                     
                        promotionId:this.addForm.promotionId,
                 }
             }).then(data => {
                 if(data.str){
                     this.$confirm('该计划正在"'+data.str+'"等设备上应用，如果修改，以上设备均会修改', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                        }).then(() => {
                            this.api({
                                url: "/promotion/updatePromotionDetails",
                                method: "post",
                                data: {
                                        storeCode:this.storeData.storeCode,
                                        machineCode:this.selectVent.machineCode,
                                        discountName:discountName,
                                        discountType:discountType,
                                        // discountMode:this.addForm.discountMode,
                                        // discountRate:this.addForm.discountRate,
                                        // promotionPrice:this.addForm.promotionPrice,
                                        aisleJson:aisleJson,
                                        startTime:startTime,
                                        endTime:endTime,
                                        timeType:timeType,
                                        promotionId:this.addForm.promotionId,
                                        promotionTime:promotionTime,
                                        }
                            })
                                .then(data => {
                                    this.$message({
                                        type:"success",
                                        message:"保存成功!"
                                    })
                                    this.addForm.dateType='1'
                                    this.addForm.startTime=''
                                    this.addForm.date=''
                                    this.addForm.rangedate=[]
                                    this.addForm.rangetime=[{time:["00:00","08:00"]},{time:["08:00","16:00"]},{time:["16:00","23:59"]}]
                                    this.addForm.endTime=''
                                    // this.addForm.endTime1=''
                                    // this.addForm.endTime2=''
                                    this.addForm.timeStart=''
                                    this.addForm.timeEnd=''
                                    this.showAdd=false
                                    // this.getPlaneList()
                                    this.selectCode[1]=this.selectVent.machineCode
                                    for(let i in this.options){
                                        if(this.options[i].storeCode==this.storeData.storeCode){
                                            for(let key in this.options[i].machineJson){
                                                if(this.options[i].machineJson[key].machineCode==this.selectCode[1]){
                                                    this.selectVent=this.options[i].machineJson[key]
                                                }
                                            }
                                        }
                                    }
                                    //编辑成功后局部刷新
                                    if(this.tab==0){
                                            this.api({
                                                    url: "/promotion/showAllTimePromotion",
                                                    method: "post",
                                                    data: {
                                                            machineCode:this.selectVent.machineCode,
                                                            storeCode:this.storeData.storeCode,
                                                            pageNum:this.planeParam.pageNum,
                                                            pageRow:this.planeParam.pageRow
                                                            }
                                                })
                                                    .then(data => {
                                                        for(let i in data.list){
                                                            data.list[i].promotionTimeId=data.list[i].promotionTime[0].promotionTimeId
                                                            data.list[i].discountMode=data.list[i].promotionTime[0].discountMode
                                                            data.list[i].discountRate=data.list[i].promotionTime[0].discountRate
                                                            data.list[i].promotionPrice=data.list[i].promotionTime[0].promotionPrice
                                                            if(data.list[i].promotionId==this.addForm.promotionId){
                                                                this.planeList[i]=data.list[i]
                                                                this.planeList[i].isActive=true
                                                                this.selectPlane=data.list[i]
                                                            }
                                                        }
                                                        if(this.selectVent.machineCode){
                                                            this.getMachineInfo()
                                                        }
                                                        
                                                })
                                        }else if(this.tab==1){
                                            this.api({
                                                    url: "/promotion/showAllLadderPromotion",
                                                    method: "post",
                                                    data: {
                                                            machineCode:this.selectVent.machineCode,
                                                            storeCode:this.storeData.storeCode,
                                                            pageNum:this.planeParam.pageNum,
                                                            pageRow:this.planeParam.pageRow
                                                            }
                                                })
                                                    .then(data => {
                                                        for(let i in data.list){
                                                            if(data.list[i].promotionId==this.addForm.promotionId){
                                                                this.planeList[i]=data.list[i]
                                                                this.planeList[i].isActive=true
                                                            }
                                                        }
                                                        if(this.selectVent.machineCode){
                                                            this.getMachineInfo()
                                                        }
                                                })
                                        }
                                    //编辑成功后留在原地
                                })
                        })
                 }else{
                     this.api({
                        url: "/promotion/updatePromotionDetails",
                        method: "post",
                        data: {
                                storeCode:this.storeData.storeCode,
                                machineCode:this.selectVent.machineCode,
                                discountName:discountName,
                                discountType:discountType,
                                // discountMode:this.addForm.discountMode,
                                // discountRate:this.addForm.discountRate,
                                // promotionPrice:this.addForm.promotionPrice,
                                aisleJson:aisleJson,
                                startTime:startTime,
                                endTime:endTime,
                                timeType:timeType,
                                promotionId:this.addForm.promotionId,
                                promotionTime:promotionTime,
                                }
                    })
                        .then(data => {
                            this.$message({
                                type:"success",
                                message:"保存成功!"
                            })
                            this.addForm.dateType='1'
                            this.addForm.startTime=''
                            this.addForm.date=''
                            this.addForm.rangedate=[]
                            this.addForm.rangetime=[{time:["00:00","08:00"]},{time:["08:00","16:00"]},{time:["16:00","23:59"]}]
                            this.addForm.endTime=''
                            // this.addForm.endTime1=''
                            // this.addForm.endTime2=''
                            this.addForm.timeStart=''
                            this.addForm.timeEnd=''
                            this.showAdd=false
                            // this.getPlaneList()
                            this.selectCode[1]=this.selectVent.machineCode
                            for(let i in this.options){
                                if(this.options[i].storeCode==this.storeData.storeCode){
                                    for(let key in this.options[i].machineJson){
                                        if(this.options[i].machineJson[key].machineCode==this.selectCode[1]){
                                            this.selectVent=this.options[i].machineJson[key]
                                        }
                                    }
                                }
                            }
                            //编辑成功后局部刷新
                            if(this.tab==0){
                                    this.api({
                                            url: "/promotion/showAllTimePromotion",
                                            method: "post",
                                            data: {
                                                    machineCode:this.selectVent.machineCode,
                                                    storeCode:this.storeData.storeCode,
                                                    pageNum:this.planeParam.pageNum,
                                                    pageRow:this.planeParam.pageRow
                                                    }
                                        })
                                            .then(data => {
                                                for(let i in data.list){
                                                    data.list[i].promotionTimeId=data.list[i].promotionTime[0].promotionTimeId
                                                    data.list[i].discountMode=data.list[i].promotionTime[0].discountMode
                                                    data.list[i].discountRate=data.list[i].promotionTime[0].discountRate
                                                    data.list[i].promotionPrice=data.list[i].promotionTime[0].promotionPrice
                                                    if(data.list[i].promotionId==this.addForm.promotionId){
                                                        this.planeList[i]=data.list[i]
                                                        this.planeList[i].isActive=true
                                                        this.selectPlane=data.list[i]
                                                    }
                                                }
                                                if(this.selectVent.machineCode){
                                                    this.getMachineInfo()
                                                }
                                                
                                        })
                                }else if(this.tab==1){
                                    this.api({
                                            url: "/promotion/showAllLadderPromotion",
                                            method: "post",
                                            data: {
                                                    machineCode:this.selectVent.machineCode,
                                                    storeCode:this.storeData.storeCode,
                                                    pageNum:this.planeParam.pageNum,
                                                    pageRow:this.planeParam.pageRow
                                                    }
                                        })
                                            .then(data => {
                                                for(let i in data.list){
                                                    if(data.list[i].promotionId==this.addForm.promotionId){
                                                        this.planeList[i]=data.list[i]
                                                        this.planeList[i].isActive=true
                                                    }
                                                }
                                                if(this.selectVent.machineCode){
                                                    this.getMachineInfo()
                                                }
                                        })
                                }
                            //编辑成功后留在原地
                        })
                 }
             })
             
        },
        delPlane(){//删除计划
            if(this.options.length==0 && this.stockType=='A'){
                    this.$message({
                        type:"warning",
                        message:"请先关联仓库哦~"
                    })
                    return;
                }
            // this.$confirm('是否确定删除该促销?', '提示', {
            //     confirmButtonText: '确定',
            //     cancelButtonText: '取消',
            //     type: 'warning'
            //     }).then(() => {
                    this.api({
                        url: "/promotion/deletePromotion",
                        method: "post",
                        data: {
                                promotionCode:this.selectPlane.promotionCode,
                                promotionId:this.selectPlane.promotionId
                                }
                    })
                        .then(data => {
                            this.$message({
                                type:"success",
                                message:"删除成功 ! "
                            })
                            this.delDialog=false
                            this.getPlaneList()
                        })
                
                // }).catch(() => {
                      
                // });
        },
        choose(item){//选择促销计划
            this.showAdd=false
            this.checkAll=true
            this.canCheckAll=false
            this.selectPlane=item
            for(let i in this.planeList){
                if(this.planeList[i].promotionId==item.promotionId){
                    this.planeList[i].isActive=true
                }else{
                    this.planeList[i].isActive=false
                }
                this.planeList[i].isEdit=false
            }
            this.planeList=JSON.parse(JSON.stringify(this.planeList))
            this.getMachineInfo()
        },
        tabChange(){
            this.showAdd=false
            this.checkAll=true
            this.canCheckAll=false
            this.planeParam.pageNum=1
            this.getPlaneList()
        },
        
        showStoreList(){//select组件聚焦
            this.$nextTick(function () {
            // this.$refs.storeref.showMenu()
            this.$refs.storeref.toggleDropDownVisible()
            })
        },
        showVentList(){//select组件聚焦
            this.$nextTick(function () {
            this.$refs.ventref.focus()
            })
        },
        getStoreList(){//获取门店和机器列表
            this.api({
                url: "/inventory/showStoreAndVend",
                method: "post",
                data: {
                    manageId: this.userId
                }
            })
                .then(data => {
                    this.options=data
                    for(let i in this.options){
                        for(let key in this.options[i].machineJson){
                            this.options[i].machineJson[key].storeName=this.options[i].machineJson[key].machineName
                            this.options[i].machineJson[key].storeCode=this.options[i].machineJson[key].machineCode
                        }
                    }
                        if(this.options[0] && this.options[0].machineJson[0]){
                        this.selectCode[0]=this.options[0].storeCode
                        this.selectCode[1]=this.options[0].machineJson[0].machineCode
                        this.storeData=this.options[0]
                        this.selectVent=this.options[0].machineJson[0]
                        this.getPlaneList()
                        // this.getMachineInfo()
                    }
                    
                    

                })
                .catch(e => {
                });
                
        },
        getMachineInfo(){//获取机器详情
            this.loading=true
            this.checkAll=true
            let ladderFlag
            if(this.tab=='0'){
                ladderFlag=false
            }else{
                ladderFlag=true
            }
            this.api({
                url: "/promotion/showAisleInfo",
                method: "post",
                data: {
                        machineCode:this.selectVent.machineCode,
                        storeCode: this.storeData.storeCode,
                        ladderFlag:ladderFlag,
                        promotionId:this.selectPlane.promotionId,
                        timeStart:this.selectPlane.timeStart,
                        timeEnd:this.selectPlane.timeEnd,
                        startTime:this.selectPlane.startTime,
                        endTime:this.selectPlane.endTime
                        }
            })
                .then(data => {
                   this.loading=false
                   this.data=data.trailsTypeList
                   this.skuInfo=data.aisleJson
                    for(let i in this.data){
                        for(let g in this.data[i]){
                            for(let key in this.skuInfo){
                            if(this.data[i][g].trailsNum==this.skuInfo[key].channelid){
                                this.data[i][g].skuCode=this.skuInfo[key].skuCode
                                this.data[i][g].skuName=this.skuInfo[key].skuName
                                this.data[i][g].appPicture=this.skuInfo[key].appPicture
                                this.data[i][g].checkFlag=this.skuInfo[key].checkFlag
                                this.data[i][g].batchCode=this.skuInfo[key].batchCode
                                this.data[i][g].channelid=this.skuInfo[key].channelid
                                this.data[i][g].salePrice=this.skuInfo[key].salePrice
                                this.data[i][g].procurementPrice=this.skuInfo[key].procurementPrice
                                this.data[i][g].model=this.skuInfo[key].model
                                this.data[i][g].model2=this.skuInfo[key].model2
                                this.data[i][g].model3=this.skuInfo[key].model3
                                if(this.skuInfo[key].checkFlag=='2'){
                                    this.data[i][g].isActive=true
                                }else{
                                    this.data[i][g].isActive=false
                                }
                                if(this.skuInfo[key].promotionName){
                                     this.data[i][g].promotionName=this.skuInfo[key].promotionName.split(",")
                                }
                               
                                this.data[i][g].machineCode=this.skuInfo[key].machineCode
                            }
                        }
                        }
                    }
                    console.log(this.data)
                    for(let i in this.skuInfo){
                        if(this.skuInfo[i].checkFlag=='1'){
                            this.checkAll=false
                        }
                        if(this.skuInfo[i].checkFlag=='1' || this.skuInfo[i].checkFlag=='2'){
                            this.canCheckAll=true
                        }
                    }
                })
        },
        changeStore(value){
            this.$nextTick(function () {//关闭下拉框
            this.$refs.storeref.hideMenu()
            })
            this.storeCode=value[0]
            for(let i in this.options){
                if(this.options[i].storeCode==this.storeCode){
                    this.storeData=this.options[i]
                    for(let key in this.options[i].machineJson){
                        if(value[1]==this.options[i].machineJson[key].machineCode){
                            this.selectVent=this.options[i].machineJson[key]
                        }
                    }
            }
            }  
            this.getPlaneList()
            // this.getMachineInfo()
        },
        
    },
    computed: {
        ...mapGetters(["userId", "userName","stockType"])
    }
};
</script>
