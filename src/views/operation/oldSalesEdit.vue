<template>
    <div class="app-container">
        <label for="data" class="form-title">{{dtype}}老用户促销计划</label>
        <el-form :model="data" :rules="rules" ref="data" label-width="100px" style="width:50%">
            <el-form-item label="计划类型" prop="discountType">           
                <el-select v-model="data.discountType" placeholder="请选择" @change=handleChange :disabled="isDisabled">
                    <el-option
                    v-for="item in types"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value" >
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="计划名称" prop="discountName">
                <el-input v-model="data.discountName" placeholder="请输入计划名称" :disabled="isDisabled"></el-input>
            </el-form-item>
            <el-form-item v-if="data.discountType==='nostep'||data.discountType==='Z'||data.discountType ==='折扣促销'" label="折扣促销">
                <el-input v-model="data.discountRate" placeholder="请输入折扣率"  :disabled="isDisabled"></el-input>
            </el-form-item>
            <el-form-item v-else label="阶梯促销">
                <el-button type="success" icon="el-icon-plus" circle size="mini" @click="addStep()" v-if="data.discountType==='step'&& dtype =='新增'"></el-button>
                <el-table :data="stepData" stripe style="width: 100%" v-if="data.discountType==='step'||data.discountType ==='阶梯促销'">
                    <el-table-column prop="date" label="时间点" width="180"> </el-table-column>
                    <el-table-column label="折扣率(%)"> 
                        <template slot-scope="scope">
                            <el-input v-model="scope.row.discountRate" placeholder="请输入折扣率" :disabled="isDisabled"></el-input>
                        </template>
                    </el-table-column>
                </el-table>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" v-if="data.discountType==='nostep'&& dtype =='新增'||data.discountType==='Z'&& dtype =='新增'" @click="submitForm('data')">保 存</el-button>
                <el-button type="primary"  v-if="data.discountType==='step'&& dtype =='新增'||data.discountType==='J'&& dtype =='新增'" @click="submitFormObj('data')">保 存</el-button>
                <el-button type="primary" v-if="dtype =='查看'" @click=RelatedSales>关联促销</el-button>
            </el-form-item>
        </el-form>
        <!-- 设置关联促销 -->
        <el-dialog title="设置关联促销" :visible.sync="isShowRelatedSalesModal" width="80%" center>   
            <el-form :model="RelateForm" ref="RelateForm" :rules="rules" label-width="100px" style="width:100%;paddingLeft:20px" >
                <el-form-item label="计划类型" v-model="data.discountType">{{data.discountType}}</el-form-item>
                <el-form-item label="计划名称" v-model="data.discountName">
                    {{data.discountName}}
                </el-form-item>
                <el-form-item label="选择自贩机">
                    <el-cascader size="large" loading-text :options="options" style="width: 33%;" v-model="RelateForm.selectedOptions" @change="handleChangeFa"></el-cascader>
                </el-form-item>
                <el-form-item label="促销开始时间" v-if="data.discountType=='折扣促销'"> 
                   <div class="block">
                        <span class="demonstration"></span>
                        <el-date-picker                       
                        v-model="RelateForm.timeStart"
                        type="datetime"
                        value-format="yyyy-MM-dd HH:mm:ss"
                        placeholder="选择日期时间"   @change="handleChangeSon">
                        </el-date-picker>
                    </div>
                </el-form-item>       
                <el-form-item label="限购时间"  v-if="data.discountType=='折扣促销'">
                    <el-input v-model="RelateForm.discountLong" placeholder="请输入时间" type="number" max="999" min="1" style="display:inline-block;width:40%"></el-input>
                    <span>分钟</span>
                </el-form-item>
                <el-form-item label="促销时间" v-else> 
                   <div class="block">
                        <span class="demonstration"></span>
                        <el-date-picker
                        v-model="RelateForm.tableStepDay"
                        type="date"
                        value-format="yyyy-MM-dd"
                        placeholder="选择日期">
                        </el-date-picker>
                    </div>
                    <el-table  :data="RelateForm.tableStepTime" loading-text tooltip-effect="dark" style="width: 70%">
                        <el-table-column prop="date" label="时间点" width="200"> </el-table-column>
                        <el-table-column label="时间" width="500"> 
                            <template slot-scope="scope">
                                <el-time-select
                                    v-model="scope.row.stepTime"
                                    :picker-options="pickerOptions"
                                    format="HH:mm:ss"
                                    value-format="yyyy-MM-dd HH:mm:ss"
                                    @change="changeTime(scope.$index,scope.row)"
                                    @focus="timeFocus(scope.$index,scope.row)"
                                    placeholder="选择时间" >
                                </el-time-select>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-form-item>
                <el-form-item label="截至时间"  v-if="data.discountType=='阶梯促销'" >
                    <el-time-select style="marginLeft:50px"
                        v-model="RelateForm.timeEnd"
                        :picker-options="pickerOptions"
                        format="HH:mm:ss"
                        value-format="HH:mm:ss"
                        placeholder="选择时间"
                        @focus="timeFocusEnd"
                        @change="changeTimeEnd">
                    </el-time-select>
                </el-form-item> 
                 <el-form-item label="可供货品信息">
                     <el-table  :data="RelateForm.tableData3" loading-text tooltip-effect="dark" style="width: 70%" @selection-change="handleSelectionChange">
                        <el-table-column type="selection" width="55"></el-table-column>
                        <el-table-column prop="aisleSku" label="sku" width="120" >&nbsp;&nbsp;&nbsp;</el-table-column>
                        <el-table-column prop="goodsName" label="商品名称" width="120"></el-table-column>
                        <el-table-column prop="skuSpecification" label="规格" show-overflow-tooltip></el-table-column>
                        <el-table-column prop="skuUnits" label="单位" show-overflow-tooltip></el-table-column>
                        <el-table-column prop="salePrice" label="促销价" show-overflow-tooltip></el-table-column>
                    </el-table>
                </el-form-item>              
            </el-form> 

            <div slot="footer" class="dialog-footer">
                <el-button @click="isShowRelatedSalesModal = false">取 消</el-button>
                <el-button type="primary" @click=saveSales v-if="data.discountType=='折扣促销'">确 定</el-button>
                <el-button type="primary" @click=saveSalesStep v-else>确 定</el-button>                
            </div>
        </el-dialog>
        <!-- /设置关联促销 -->
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    export default {
        data() {
            return {
                id:this.$route.params.number|'gg',
                isShowRelatedSalesModal:false,
                data:{
                    discountType:'',
                    discountName:'',
                    discountRate:''
                },
                listLoading: false,                
                valueTime:'',
                dtype:this.$route.params.type ||this.$route.query.type ,
                isDisabled:false,
                selectedOptions:[],
                row:{},            
                relatedPromotionDate:[],
                options:[       
                ],
                pickerOptions: {
                    start: '00:00',
                    step: '00:30',
                    end: '23:30',
                    //minTime:scope.$index===0?'00:00':scope.row.stepTime[scope.$index-1]
                },
                rules:{
                    name: [
                        { required: true, message: '请输入计划名称', trigger: 'blur' },
                        { type: 'string',min:1,max:8,message: '输入8个汉字以内', trigger: 'blur' }
                    ],
                    discountRate: [
                        { required: true, message: '请输入折扣', trigger: 'blur' },
                        { type: 'number',message: '输入1-100的自然数', trigger: 'blur' }
                    ],
                    discountLong: [
                        { required: true, message: '请输入时间', trigger: 'blur' },
                        { min:1,max:1000,message: '输入1-1000的自然数', trigger: 'blur' }
                    ],
                },
                stepData:[
                    {
                        date:'1',
                        discountRate:'90'
                    }
                ],
                type:'',
                RelateForm:{
                    StepTime : [],
                    discountLong:[]
                },
                types:[
                    {   
                        value:'nostep',
                        label:'折扣促销',
                        key:1                   
                    },
                    {   
                        value:'step',
                        label:'阶梯促销',
                        key:2                  
                    },
                ]
            }
        },
        created() {  
            this.row = this.$route.query.row;
            if(this.$route.params.type === '新增'){
                this.$route.meta.title = '老用户新增'
                this.data.discountType= 'nostep'
                //this.stepData = this.stepData
                this.isDisabled = false
            }else{
                this.$route.meta.title = '老用户查看'   
                this.data = this.row
                this.stepData = this.row.discountRate
                this.RelateForm.promotionCode = this.row.promotionCode
                this.RelateForm.tableStepTime = this.row.discountRate
                this.RelateForm.discountType = this.row.discountType
                this.isDisabled = true 
                this.type = this.$route.query.type
                if(this.data.discountType ==='折扣促销'){
                    this.data.discountRate = this.data.discountRate[0].discountRate
                }else{
                    this.RelateForm.discountRate = this.row.discountRate
                }    
            }
            
        },
        computed: {
            ...mapGetters([
              'userId','roleId'
            ])
          },
        methods: {
            open4() {
              this.$message.error('不能为空！！');
            },   
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if(this.data.discountRate != ''&& this.data.discountName !='') { 
                            this.data.discountType = 'Z';                      
                            this.api({
                                url: "/promotion/addtempPromotion",
                                method: "post",
                                data: this.data              
                            }).then(() => {
                                 this.$router.push({
                                    name: "列表",
                                    params:{
                                        tab:"oldUser"
                                    }
                                });                   
                            })}else{
                                this.open4();
                        }
                    } else {
                        this.$message.error("保存失败")  
                        return false;
                    }
                    
                });
            },
            submitFormObj(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if(this.data.discountName != '') { 
                            this.data.discountType = 'J';
                            this.data.discountRate = this.stepData;                         
                            this.api({
                                url: "/promotion/addtempPromotion",
                                method: "post",
                                data: this.data              
                            }).then(() => {
                                 this.$router.push({
                                    name: "列表",
                                    params:{
                                        tab:"oldUser"
                                    }
                                });                   
                            })}else{
                                this.open4();
                        }
                    } else {
                        this.$message.error("保存失败")  
                        return false;
                    }
                    
                });
            },
            handleChange(value){
                this.data.type=value;
                if(this.data.type == 'nostep'){
                    this.type = '折扣促销'
                }else {
                    this.type = '阶梯促销'
                }
            },
            handleChangeFa(value){
                this.RelateForm.tableData3 = [];
                for(let i in this.options){
                    if(this.options[i].value == value[0]){
                        let data = this.options[i].children;
                        this.RelateForm.storeCode = value[0]
                        for(let j in data){
                            if(data[j].value == value[1]){
                                this.RelateForm.deviceId = value[1]
                                this.RelateForm.tableData3 = data[j].skuInfo
                            }
                        }
                    }
                }

            },
            handleChangeSon(value){
                this.RelateForm.timeStart = value;
            },
            handleSelectionChange(val){
                let skuSelection ='';
               for(let i in val){
                   if(i == val.length-1){
                       skuSelection+=(val[i].aisleSku)
                   }
                   else{
                       skuSelection+=(val[i].aisleSku)+','
                   }
    
               }
                this.RelateForm.skuCode = skuSelection;
            },
            addStep(){
                let num = this.stepData.length+1;               

                var step = {
                    date:num,
                    rate:'1'
                }
                this.stepData.push(step);
            },
            getlist(){ 
                let userId = 10017 ;             
                this.api({
                    url: "/promotion/listvendinfo",
                    method: "get",
                    params:{userId:10017}                                   
                }).then(data => {                  
                    this.options = data;
                }).catch((e)=>{
                    
                })
            },
            RelatedSales(){
                this.getlist()              
                this.isShowRelatedSalesModal = true;
            },
            saveSales(){
                this.RelateForm.discountDType = 'Z'
                this.RelateForm.type = this.data.discountType;
                this.RelateForm.name = this.data.discountName;
                this.RelateForm.promotionCode = this.$route.query.row.promotionCode
                if(this.RelateForm.selectedOptions != [] && this.RelateForm.discountLong !='' && this.RelateForm.skuCode !=''
                && this.RelateForm.timeStart != ''){
                    this.api({
                        url: "/promotion/addpromotioninfo",
                        method: "post",
                        data: this.RelateForm                                  
                    }).then(() => {                  
                        this.isShowRelatedSalesModal = false;
                        this.$message({
                            message: '恭喜你，这是一条成功消息',
                        type: 'success'
                        });
                    }).catch((e)=>{
                        this.$message.error("请求失败")               
                    }) 
                }else{
                    this.open4()
                }
            },
            timeFocus(index,row){
                let data = this.RelateForm.tableStepTime
                if(data[index-1]){
                    this.pickerOptions.start = data[index-1].stepTime
                    
                }else{
                    this.pickerOptions.start = '00:00'
                    this.pickerOptions.end = '23:30'
                }
                if(index !== data.length-1){
                    if(!data[index+1].stepTime){
                        this.pickerOptions.end = '23:30'
                    }else{
                        this.pickerOptions.end = data[index+1].stepTime
                    }
                }else{
                    this.pickerOptions.end = '23:30'
                }
                 
            },
            timeFocusEnd(){
                let data = this.RelateForm.tableStepTime
                if(data[data.length-1].stepTime){
                    this.pickerOptions.start = data[data.length-1].stepTime        
                }
            },
            changeTime(index,row){ 
                this.RelateForm.discountDType = 'Z'
                let data = this.RelateForm.tableStepTime
                if(this.RelateForm.tableStepDay){
                    if(index>0 && row.stepTime < data[index-1].stepTime){            
                        this.$message.error('请输入正确时间')
                    }
                    if(index>0&&data[index-1].stepTime){
                        
                        let d1 = new Date(this.RelateForm.tableStepDay+' '+data[index].stepTime);
                        let d2 = new Date(this.RelateForm.tableStepDay+' '+data[index-1].stepTime)
                        let discountLong = parseInt(d1-d2)/1000/60
                        if(discountLong>0){
                            if(index>this.RelateForm.discountLong.length){
                                this.RelateForm.discountLong.push(discountLong)
                            }else{
                                this.RelateForm.discountLong[index-1] = discountLong
                            }
                        }                  
                    }
                }    
                else{
                    this.$message.error('请输入日期')
                }                             
            },
            changeTimeEnd(val){
                console.log(val)                
            },
            saveSalesStep(){
                if(this.RelateForm.tableStepDay){
                    this.RelateForm.timeEnd = this.RelateForm.tableStepDay+' '+this.RelateForm.timeEnd
                }else{
                    this.$message.error('请输入日期')
                }
                let data = this.RelateForm
                data.stepTime = [];
                let newdata = ''
                let time = data.tableStepTime
                for(let i in time){
                    newdata = data.tableStepDay+' '+time[i].stepTime
                    data.stepTime.push(newdata)
                }
                let d1 = new Date(data.timeEnd);
                let d2 = new Date(data.stepTime[data.stepTime.length-1])
                let long = parseInt(d1-d2)/1000/60
                data.discountLong = this.RelateForm.discountLong
                if(data.discountLong.length < data.stepTime.length){
                    data.discountLong.push(long)
                }else{
                    data.discountLong[data.discountLong.length-1] = long
                }
                // if(this.RelateForm.StepTime.length>=6 && this.RelateForm.tableStepTime.length>=6){
                //     this.RelateForm.StepTime.pop()
                //     this.RelateForm.tableStepTime.pop()
                // }        
                data.discountDType = 'J'
                this.api({
                        url: "/promotion/addpromotioninfo",
                        method: "post",
                        data: data                                 
                    }).then(() => {                  
                        this.isShowRelatedSalesModal = false;
                        this.$message({
                        message: '恭喜你，这是一条成功消息',
                        type: 'success'
                        });
                    }).catch((e)=>{
                        this.$message.error("请求失败")               
                    }) 
                    
            }
        }
    }
</script>
