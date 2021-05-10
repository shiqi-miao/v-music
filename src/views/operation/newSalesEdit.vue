<template>
    <div class="app-container">
        <label for="data" class="form-title">{{dtype}}新用户促销计划</label>
        <el-form :model="data" :rules="rules" ref="data" label-width="100px" style="width:50%">
            <el-form-item label="序号" prop="number">
                <el-input v-model="data.num" v-if="dtype=='新增'" :disabled="true"></el-input>
                <el-input v-model="index" v-else :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="折扣比例" prop="discount">
                <el-input v-model="data.discountRate" placeholder="折扣比例" type="number"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" v-if="dtype=='新增'" @click="submitForm('data')">保 存</el-button>
                <el-button type="primary" v-else @click="newUserUpdate('data')">保 存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    export default {
        data() {
            return {
                id:this.$route.params.number|'gg',
                data:{
                    num:this.$route.params.length+1,
                    discountRate:'',
                },
                index:5,
                dtype:this.$route.params.type,
                rules:{
                    discountRate: [
                        { required: true, message: '请输入折扣', trigger: 'blur' },
                        { type: 'number',message: '输入1-100的自然数', trigger: 'blur' }
                    ],
                } 
            }
        },
        created() {
            if(this.$route.params.type === '新增'){
                this.$route.meta.title = '新用户新增'
            }else{
                this.$route.meta.title = '新用户编辑'               
            }
            this.index = this.$route.params.index+1
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
                this.data.isOn = '1';
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if(this.data.discountRate != '') {                          
                            this.api({
                                url: "/promotion/addPromotion",
                                method: "post",
                                data: this.data              
                            }).then(() => {
                                 this.$router.push({
                                    name: "列表",
                                    params:{
                                        tab:"newUser"
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
            newUserUpdate(formName) {
                let _vue=this;
             this.$refs[formName].validate((valid) => {
                    if (valid) {                       
                        if(this.data.discount_rate != []) {
                            this.data.num = this.$route.params.num;
                            this.data.isOn = '1';
                            this.data.promotionId = this.$route.params.promotionId;
                            this.api({
                                url: "/promotion/updatePromotion",
                                method: "post",
                                data: _vue.data              
                            }).then(() => {
                                 this.$router.push({
                                    name: "列表",
                                    params:{
                                        tab:"newUser"
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
        }
    }
</script>
