<style lang="scss" scoped>
    .box{
        width:70%;border: 1px solid #e6e6e6;border-radius: 40px;text-align: center;margin-top:100px;
        p{
            font-size: 25px;
            font-weight: 400
        }
        span{
            color: #999;
        }
        .tip{
            font-size: 20px
        }
        }
        .ml{margin-left: 10%}
        .flex-center{
            width: 100%;
            display: flex;
            display: -webkit-flex;
            align-items: center;
            -webkit-align-items: center;
            justify-content: center;
            -webkit-justify-content: center;
        }
        .blue {
            color: #66b1ff;
            cursor: pointer;
            padding: 10px 6px;
        }
        #replenish .el-form-item__content{
            line-height: 20px
        }
    
</style>

<template>
    <div>
        <el-row>
            <el-col :span="8">
                <div class="box ml" @click="toProcure" style="cursor:pointer">
                    <p>智能采购配置</p>
                    <span>配置生效中</span>
                    <p class="tip">为商家自动创建采购流程</p>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="box ml" @click="toReplenish" style="cursor:pointer">
                    <p>智能补货配置</p>
                    <span>配置生效中</span>
                    <p class="tip">为商家自动创建补货流程</p>
                </div>
            </el-col>
            <!-- <el-col :span="8">
                <div class="box ml">
                    <p>智能仓库配置</p>
                    <span>未配置</span>
                    <p class="tip">为商家自动创建仓库流程</p>
                </div>
            </el-col> -->
        </el-row>
        <el-dialog title="智能采购配置" :visible.sync="procureVisible" width="36%" :close-on-click-modal="false">
            <el-form class="small-space demo-form-inline" label-position="left" label-width="120px" :inline="true">
                <el-form-item label="店长确认" required>
                    <el-radio v-model="procureForm.needComfirm" label="1" @change="changeNeedComfirm">需要</el-radio>
                    <el-radio v-model="procureForm.needComfirm" label="0" @change="changeNeedComfirm">不需要</el-radio>
                </el-form-item>
                <br>
                <el-form-item label="自动确认时长" required v-if="procureForm.isNeedComfirm=='1'">
                    <el-input-number v-model="procureForm.comfirmLimit" :min="1"></el-input-number><span> 小时</span>
                </el-form-item>
                <br>
                <!-- <el-form-item label="即时SKU采购" required>
                    <el-radio v-model="procureForm.immediate" label="0">采购员处理</el-radio>
                    <el-radio v-model="procureForm.immediate" label="1">补货员处理</el-radio>
                </el-form-item> -->
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="procureVisible = false">取 消</el-button>
                <el-button type="primary" @click="commitProcure">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog title="智能补货配置" :visible.sync="replenishVisible" :close-on-click-modal="false" id="replenish">
            <el-form class="small-space demo-form-inline" label-position="left" label-width="180px" :inline="true">
                <el-form-item label="补货单生成时间" required>
                    <div class="flex-center" v-for="(item,i) in replenishForm.replentTime" :key="i">
                        <span>每天</span>
                        <el-time-picker
                            v-model="item.gmtGenerate"
                            value-format="HH:mm"
                            placeholder="选择时间">
                        </el-time-picker>
                        <!-- <el-input v-model="item.gmtGenerate"></el-input> -->
                        
                    </div>
                    <div class="flex-center" >
                        <span> </span>
                        <span style="color:#f56c6c;font-size:20px;cursor:pointer" @click="addTime"><i class="el-icon-circle-plus-outline"></i></span>
                    </div>
                    
                    
                </el-form-item>
                <br>
                <el-form-item label="提货富余量" required>
                    <div class="flex-center">
                        <el-input v-model="replenishForm.margin" type="number"></el-input>
                        <span> %</span>
                    </div>
                    
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="replenishVisible = false">取 消</el-button>
                <el-button type="primary" @click="commitReplenish">确 定</el-button>
            </span>
        </el-dialog>
    </div>
    
    
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return{
            procureVisible:false,
            replenishVisible:false,
            procureForm:{
                isNeedComfirm:'1',
                needComfirm:'1',
                immediate:'1',
                comfirmLimit:'1',
            },
            replenishForm:{
                replentTime:[],
                margin:20
            },
            options:[
                {
                value: '1',
                label: '一周'
                }, {
                value: '2',
                label: '两周'
                },
            ]
            
        };
    },
    
    mounted(){
        
    },
    methods: {
        changeNeedComfirm(val){
            this.procureForm.isNeedComfirm=val
        },
        toProcure(){
            this.procureVisible=true
            this.api({
                url: "/inventory/showIntellignetPurchase",
                method: "post",
                data: {
                    username: this.userName
                    // username: "13616521896"
                }
            }).then(data => {
                this.procureForm = data;
            });
        },
        commitProcure(){
            this.api({
                url: "/inventory/updateIntellignetPurchase",
                method: "post",
                data:this.procureForm
            }).then(data => {
                this.$message({
                message: '保存成功 !',
                type: 'success'
                });
                this.procureVisible=false
            });
        },
        addTime(){
            var add={}
            this.replenishForm.replentTime.push(add)
        },
        toReplenish(){
            this.replenishVisible=true
            this.api({
                url: "/inventory/showIntellignetReplent",
                method: "post",
                data: {
                    username: this.userName
                    // username: "13616521896"
                }
            }).then(data => {
                this.replenishForm = data;
            });
            
        },
        commitReplenish(){
            if(!/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(this.replenishForm.margin)){
                this.$message({
                        type:"warning",
                        message:"提货富余量必填且不能为负数哦~"
                    })
                    return;
            }
            var replentTime=""
            for(var i in this.replenishForm.replentTime){
                // if(this.replenishForm.replentTime[i].gmtGenerate){
                if(i==0){
                    replentTime+=this.replenishForm.replentTime[i].gmtGenerate
                }else{
                    replentTime+=','+this.replenishForm.replentTime[i].gmtGenerate
                }
                // }
            }
            this.replenishForm.gmtGenerates=replentTime
            this.replenishForm.margin=Number(this.replenishForm.margin)
            this.api({
                url: "/inventory/addIntellignetReplent",
                method: "post",
                data:this.replenishForm
            }).then(data => {
                this.$message({
                message: '保存成功 !',
                type: 'success'
                });
                this.replenishVisible=false
            });
        }
    },
    computed: {
        ...mapGetters(["userName"])
    }
};
</script>