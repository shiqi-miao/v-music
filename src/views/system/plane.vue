<style scoped>
    .box{width: 80%;height:110px;border-radius: 5px;border: 1px solid #e6e6e6;margin-bottom:20px;padding:0 3%;position: relative}
    .top{padding: 20px}
    .flex-center{
        width: 100%;
        display: flex;
        display: -webkit-flex;
        align-items: center;
        -webkit-align-items: center;
        justify-content: center;
        -webkit-justify-content: center;
    }
    .flex-1 {
        flex: 1;
    }
    .flex-10 {
        flex: 10;
    }
    .blue{
     color:#66b1ff;
     cursor: pointer;
     padding: 10px 6px;
    }
    .p-absolute{
        position: absolute;
        bottom: 0;
        right: 0;
        padding-right: 5%
    }
    .center{text-align: center}
    .inner{width: 260px;display: inline-block;vertical-align:top}
    .out{white-space: nowrap;}
    .mt{margin-top: 20px}
    
</style>
<style>
#plane .el-select .el-input{
        width: 100%!important
    }
#plane .el-date-editor{width:220px!important}
.hide-line .el-timeline-item__tail,.hide-line .el-timeline-item__node,.hide-line .el-timeline-item__timestamp{visibility: hidden}
.el-timeline-item__wrapper{width: 80px}
</style>

<template>
<!-- <div>
<div class="flex-center top">
    <div class="flex-1">
        <el-select v-model="selectValue" placeholder="请选择">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
    </div>
    <div class="flex-10">
        <div class="flex-center">
            <div class="flex-1 center" v-for="item in list">
                <el-button type="primary">{{item.name}}</el-button>
            </div>
        </div>
        
    </div>
</div>
<div class="flex-center">
    <div class="flex-1">
        
    </div>
    <div class="flex-10">
        <el-timeline  :reverse="reverse">
            <el-timeline-item :timestamp="item.time" placement="top" v-for="item in data" :key="item">
                <el-card>
                    <div class="flex-center">
                        <div class="flex-1" v-for="i in item.list" :key="i">
                            <el-row>
                                <el-col :span="24" v-for="key in i.plane" :key="key">
                                    <div class="box">
                                        <p>{{key.time}}</p>
                                        <p class="p-absolute">
                                            <span class="blue" @click="toDetail(key)">查看</span> <span class="blue" @click="toCopy(key)">复制计划</span>
                                        </p>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </el-card>
            </el-timeline-item>
        </el-timeline>
    </div>
</div>
<div class="flex-center top">
    <div class="flex-1">
    </div>
    <div class="flex-10">
        <div class="flex-center" style="width:100%;margin:0 auto;padding-left:4%">
            <div class="flex-1 center" v-for="item in list">
                <div class="box center">
                    <span class="el-icon-plus" style="font-size:30px;line-height:150px;cursor: pointer;" @click="add(item)"></span>
                </div>
            </div>
        </div>
        
    </div>
</div>
</div>  -->
<div id="plane">
<el-row style="margin-top:20px;padding-left:20px">
    <el-col :span="2">
        <div style="width:170%">
            <el-select v-model="selectValue" placeholder="请选择门店" @change="changeStore">
                <el-option
                    v-for="item in options"
                    :key="item.storeCode"
                    :label="item.storeName"
                    :value="item.storeCode"
                    >
                </el-option>
            </el-select>
        </div>
        <div class="out" style="padding-left:68px;visibility:hidden;margin-top:20px">
            <div class="inner" v-for="(item,i) in list" :key="i">
                <el-row>
                    <el-col :span="24">
                        <div class="box">
                            <p>当前应用</p>
                            <p class="p-absolute">
                                <span class="blue" @click="tonow(item)">查看</span><span class="blue" @click="toCopynow(item)">复制计划</span>
                            </p>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <el-timeline  :reverse="reverse" class="mt">
            <el-timeline-item :timestamp="item.gmtDay" placement="top" v-for="(item,key) in data" :key="key">
                <!-- <el-card> -->
                    <div class="out" style="visibility:hidden">
                        <div class="inner" v-for="i in item.dateJson" :key="i.machineCode">
                            <el-row>
                                <el-col :span="24" v-for="key in i.machineJson" :key="key.salePlanId">
                                    <div class="box">
                                        <p>{{key.gmtPlan}} <span v-if="key.deleteStatus=='1'"> 自动应用</span></p>
                                        <p class="p-absolute" >
                                            <span v-if="key.deleteStatus=='1'" class="blue" @click="toDetail(key)">查看</span> <span v-if="key.deleteStatus=='1'" class="blue" @click="toCopy(key)">复制计划</span>
                                            <span  v-if="key.deleteStatus=='0'" class="blue" @click="toDetail(i,key)">编辑</span>
                                        </p>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                <!-- </el-card> -->
            </el-timeline-item>
        </el-timeline>
        
    </el-col>
    <el-col class="" :span="22" style="overflow-x: auto;overflow-y:hidden; ">
        <div class="out" style="padding-left:68px;" >
            <div class="inner" v-for="item in list">
                <div style="width:80%;text-align:center"> 
                    <el-button type="primary" plain round>{{item.machineName}}</el-button>
                </div>
            </div>
        </div>
        <div class="out" style="padding-left:68px;margin-top:20px">
            <div class="inner" v-for="(item,i) in list" :key="i">
                <el-row>
                    <el-col :span="24">
                        <div class="box">
                            <p>当前应用</p>
                            <p class="p-absolute">
                                <span class="blue" @click="tonow(item)">查看</span><span class="blue" @click="toCopynow(item)">复制计划</span>
                            </p>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <el-timeline  :reverse="reverse" class="hide-line mt">
            <el-timeline-item :timestamp="item.gmtPlan" placement="top" v-for="(item,key) in data" :key="key">
                <!-- <el-card> -->
                    <div class="out">
                        <div class="inner" v-for="i in item.dateJson" :key="i.machineCode">
                            <el-row>
                                <el-col :span="24" v-for="key in i.machineJson" :key="key.salePlanId">
                                    <div class="box">
                                        <!-- <p>{{i.name}}</p> -->
                                        <p>{{key.gmtPlan}} <span v-if="key.deleteStatus=='1'"> 自动应用</span></p>
                                        <p class="p-absolute">
                                            <span v-if="key.deleteStatus=='1'" class="blue" @click="toNoEdit(key,i)">查看</span> <span v-if="key.deleteStatus=='1'" class="blue" @click="toCopy(key,i)">复制计划</span>
                                            <span  v-if="key.deleteStatus=='0'" class="blue" @click="toDetail(i,key)">编辑</span>
                                        </p>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                <!-- </el-card> -->
            </el-timeline-item>
        </el-timeline>
        <div class="out" style="padding-left:68px">
            <div class="inner" v-for="item in list">
                <div class="box center"  style="font-size:30px;line-height:110px;cursor: pointer;" @click="add(item)">
                    <span class="el-icon-plus"></span>
                </div>
            </div>
        </div>
        <!-- <div class="out center" style="padding-left:68px">
            <el-button type="danger" size="mini" round @click="more" v-if="data.length>0">查看更多</el-button>
        </div> -->
        
    </el-col>
</el-row>
<el-dialog title="请选择计划应用时间" :visible.sync="dialogFormVisible">
    <span>计划应用时间</span>
    <br>
    <br>    
    <!-- <el-date-picker
        v-model="time"
        type="datetime"
        value-format="yyyy-MM-dd H"
        format="yyyy-MM-dd H"
        placeholder="选择日期时间">
    </el-date-picker> -->
    <el-date-picker
        v-model="dateTime"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions0"
        @change="changeDateTime">
    </el-date-picker>
    <el-time-select
        v-model="timeTime"
        :picker-options="{
            start:nowTime,
            step: '00:30',
            end: '23:30'
        }"
        placeholder="选择时间">
    </el-time-select>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="commitTime">确 定</el-button>
  </div>
</el-dialog>
</div> 
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            reverse: false,
            selectValue:"",
            now:new Date(),
            nowTime:"",
            standTime:"",
            dateTime:"",
            timeTime:"",
            time:"",
            pickerOptions0: { 
                disabledDate(time) {
                    return time.getTime() < Date.now() - 8.64e7;//如果没有后面的-8.64e7就是不可以选择今天的 
                }
            },
            addInfo:{},
            dialogFormVisible:false,
            page:0,
            options: [],
            list:[],
            pageNum: 1,
            oldData:[],
            data:[
                    {
                        time:"2018/4/12",
                        list:[
                                {
                                    name:"生鲜柜",
                                    plane:[
                                            {time:"4月12日 13:00"},
                                            {time:"4月12日 13:00"},
                                            ]
                                },
                                {
                                    name:"零食柜",
                                    plane:[
                                            
                                            ]
                                },
                                {
                                    name:"饮料柜",
                                    plane:[
                                            {time:"4月12日 13:00"},
                                            ]
                                },
                            ]
                    },
                    {
                        time:"2018/5/12",
                        list:[
                                {
                                    name:"生鲜柜",
                                    plane:[
                                            ]
                                },
                                {
                                    name:"零食柜",
                                    plane:[
                                            {time:"5月12日 13:00"},
                                            ]
                                },
                                {
                                    name:"饮料柜",
                                    plane:[
                                            {time:"5月12日 13:00"},
                                            ]
                                },
                            ]
                    },
                    
                    {
                        time:"2018/6/12",
                        list:[
                                {
                                    name:"生鲜柜",
                                    plane:[
                                            {time:"5月12日 13:00"},
                                            ]
                                },
                                {
                                    name:"零食柜",
                                    plane:[
                                            {time:"5月12日 13:00"},
                                            {time:"5月12日 14:00"},
                                            ]
                                },
                                {
                                    name:"饮料柜",
                                    plane:[
                                            {time:"5月12日 13:00"},
                                            ]
                                },
                            ]
                    },
                    {
                        time:"2018/7/12",
                        list:[
                                {
                                    name:"生鲜柜",
                                    plane:[
                                            {time:"5月12日 13:00"},
                                            ]
                                },
                                {
                                    name:"零食柜",
                                    plane:[
                                            {time:"5月12日 13:00"},
                                            ]
                                },
                                {
                                    name:"饮料柜",
                                    plane:[
                                            {time:"5月12日 13:00"},
                                            ]
                                },
                            ]
                    },       
                    
                ]
        }
    },
    beforeCreate(){
        document.querySelector('body').setAttribute('style','overflow-x:hidden;')
    },
    created(){
        // this.dateTime=this.now
        // let time = this.now.getTime() + 1000*60*30;
        // let standTime=new Date(time)
        // if(standTime.getMinutes()<=30){
        //     this.standTime=standTime.getHours()+':30'
        // }else{
        //     this.standTime=standTime.getHours()+1+':00'
        // }
        // this.timeTime=this.standTime

        this.dateTime=this.now
        let time = this.now.getTime() + 1000*60*30;
        let standTime=new Date(time)
        this.standTime=standTime.getHours()+1+':00'
        // this.standTime=this.now.getHours()+1+':00'
        this.timeTime=this.standTime
        if(this.dateTime.getMonth()==this.now.getMonth() && this.dateTime.getDate()==this.now.getDate()){
                this.nowTime=this.standTime
            }else{
                this.nowTime="00:00"
            }
        this.api({
                url: "/inventory/showAllStore ",
                method: "post",
                data: {
                    // username:"13616521896"
                    username: this.userName
                }
            }).then(data => {
                this.options=data
                this.selectValue=data[0].storeCode
                this.getVend()
                this.getPlane(this.pageNum)
                this.getOldPlane()//历史计划
            });
            
    },
    computed: {
        ...mapGetters(['userName',"userId"])
    },
    methods: {
        changeDateTime(){
            if(this.dateTime.getMonth()==this.now.getMonth() && this.dateTime.getDate()==this.now.getDate()){
                this.nowTime=this.standTime
            }else{
                this.nowTime="00:00"
            }
        },
        getVend(){
            this.api({
                url: "/inventory/showAllVend ",
                method: "post",
                data: {
                    storeCode:this.selectValue
                }
            }).then(data => {
                this.list=data
            });
        },
        getOldPlane(){
            this.api({
                url: "/inventory/showExpiredJson ",
                method: "post",
                data: {
                    // storeCode:"NO.467445",
                    storeCode:this.selectValue,
                    // username:"13616521896"
                    username: this.userName,
                }
            }).then(data => {
                this.oldData=data
            });
        },
        getPlane(pageNum){
            this.api({
                url: "/inventory/showAllPlan ",
                method: "post",
                data: {
                    // storeCode:"NO.467445",
                    storeCode:this.selectValue,
                    // username:"13616521896"
                    username: this.userName,
                    pageNum:pageNum
                }
            }).then(data => {
                this.data=data.list
                // var storeList=[]
                // if(data.list[0]){
                //     for(var i  in data.list[0].dateJson){
                //         var store={}
                //         store.machineCode=data.list[0].dateJson[i].machineCode
                //         store.machineName=data.list[0].dateJson[i].machineName
                //         store.trailsType=data.list[0].dateJson[i].trailsType
                //         storeList.push(store)
                //     }   
                //     this.list=storeList
                // }
                
            });
        },
        more(){
            this.pageNum+=1
            this.getPlane(this.pageNum)
        },
        changeStore(){
            this.getVend()
            this.getPlane()
            this.getOldPlane()
        },
        add(item){
            this.addInfo=item
            this.dialogFormVisible=true
        },
        commitTime(){
            let month=this.dateTime.getMonth()+1
            let date=this.dateTime.getDate()
            let dateTime=this.dateTime.getFullYear()+'-'+month+'-'+date
            this.dateTime=dateTime
            this.time=this.dateTime+' '+this.timeTime
            // console.log(this.time)
            if(!this.time){
                this.$message({
                    message: '请选择计划应用时间',
                    type: 'error'
                    });
                    return;
            }
            this.api({
                url: "/inventory/addSalePlan ",
                method: "post",
                data: {
                    gmtPlan:this.time,
                    machineCode:this.addInfo.machineCode,
                    trailsType:this.addInfo.trailsType,
                    storeCode:this.selectValue,
                    // username:"13616521896"
                    username: this.userName
                }
            }).then(data => {
                var id=data
                this.dialogFormVisible=false
                this.$router.push({path:"/operation/planeCreate/"+id+'/'+this.selectValue+'/'+this.addInfo.machineCode})
            }).catch(e => {
                let NewPage = '_empty' + '?time=' + new Date().getTime()/500;
                this.$router.push(NewPage);
                this.$router.go(-1);
            });
            ;
        },
        toDetail(i,key){
            this.$router.push({path:"/operation/planeDetail/"+key.salePlanId+'/'+this.selectValue+'/'+i.machineCode})
        },
        toNoEdit(key,i){
            this.$router.push({path:"/operation/planeNoEdit/"+key.salePlanId+'/'+this.selectValue+'/'+i.machineCode})
        },
        toCopy(key,i){
            this.api({
                url: "/inventory/copySalePlan",
                method: "post",
                data: {
                    machineCode:i.machineCode,
                    storeCode:this.selectValue,
                    username:this.userName,
                    salePlanId:key.salePlanId
                    }
            })
                .then(data => {
                    
                   this.$router.push({path:"/operation/planeCopy/"+data+'/'+this.selectValue+'/'+i.machineCode+'/'+key.salePlanId})
                })
        },
        tonow(i){
            this.$router.push({path:"/operation/nowPlane/"+i.machineCode+'/'+this.selectValue})
        },
        toCopynow(i){
            this.api({
                url: "/inventory/copyTheTimeSale",
                method: "post",
                data: {
                    machineCode:i.machineCode,
                    storeCode:this.selectValue,
                    username:this.userName
                    }
            })
                .then(data => {
                   this.$router.push({path:"/operation/planeCopy/"+data+'/'+this.selectValue+'/'+i.machineCode+'/'+i.salePlanId})
                })
        }
    }

}
</script>

