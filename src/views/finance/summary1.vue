<style lang="scss" scoped>
    #summary{
        background: #F5F6F8;height: 100%;padding: 20px;
        .container{
            width:100%;height: 100%;background: #fff;border-radius:4px;border:1px solid rgba(226,229,235,1);position:relative;
            .top{
                height: 72px;width: 100%;border-bottom:1px solid rgba(226,229,235,1);
                .title{
                    font-size:16px;font-weight:500;color:rgba(51,51,51,1);padding-left: 20px;margin-right: 100px;
                }
                .input{width: 150px;margin-right: 20px}
                .timeInput{width:250px;margin-left: 8px;}
                };
            .bottom{
                position: absolute;top: 72px;left: 0;bottom: 0;width: 100%;
                .allTop{width: 100%;height: 141px;}
                .chartBottom{position: absolute;left:0;bottom:0;top:141px;width:100%}
            }
            }
        }
</style>
<style lang="scss">
    #summary .el-input__inner,#summary .el-input__icon{height: 32px;line-height: 32px;}
    #summary{
        .el-date-editor{width: 100%;};
        .el-date-editor .el-range-separator{line-height: 24px;}
    } 
</style>
<template>
    <div id="summary">
        <div class="container">
            <div class="top flex-center-Y">
                <div class="title">财务总览</div>
                <div class="input">
                    <el-select v-model="searchValue.storeCode" placeholder="请选择点位">
                        <el-option
                        v-for="item in storeList"
                        :key="item.storeCode"
                        :label="item.storeName"
                        :value="item.storeCode">
                        </el-option>
                    </el-select>
                </div>
                <div class="input">
                    <el-select v-model="searchValue.machineCode" placeholder="请选择设备">
                        <el-option
                        v-for="item in machineList"
                        :key="item.machineCode"
                        :label="item.machineName"
                        :value="item.machineCode">
                        </el-option>
                    </el-select>
                </div>
                <span style="font-size:14px">时间:</span>
                <div class="timeInput">
                    <el-date-picker
                        v-model="params.times"
                        type="daterange"
                        range-separator="-"
                        value-format="yyyy-MM-dd"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        @change="changeTime">
                    </el-date-picker>
                </div>
            </div>
            <div class="bottom">
                <div class="allTop flex-center-Y">
                    <div class="box">
                        <div>总销售额（元）</div>
                        <div>49132.50</div>
                    </div>
                    <el-input v-model="test" @input="change" type="textarea"></el-input>
                </div>
                <div class="chartBottom"></div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data(){
        return{
            searchValue:{storeCode:"",machineCode:""},
            params:{},
            machineList:[],
            storeList:[{storeCode:"1",storeName:"海创园"}],
            test:""
        }
    },
    mounted(){

    },
    methods:{
        changeTime(){
        },
        change(){
            console.log(this.test.split("\n"))
        },
    },
    computed: {
        ...mapGetters(["userId", "userName","stockType"]) 
    }
}
</script>>