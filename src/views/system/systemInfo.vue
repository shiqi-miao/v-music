<style>
    #systermManage .el-dialog__body{padding: 0px 20px;}
</style>
<template>
    <div class="app-container" id="systermManage">
        <el-table :data="list"
                  v-loading.body="listLoading"
                  element-loading-text="拼命加载中">
            <el-table-column align="center"
                             label="预账单扣款时限(秒)"
                             prop="proTime"
                             width="280"></el-table-column>
            <el-table-column align="center"
                             label="订单金额限制(分)"
                             prop="orderMoney"
                             style="width: 60px;"></el-table-column>
            <el-table-column align="center"
                             label="积分兑换比例(积分/元)"
                             prop="integralRate"
                             style="width: 80px;"></el-table-column>
            <el-table-column align="center"
                             label="数据展示形式"
                             prop="integralRate"
                             style="width: 80px;">
                             <template slot-scope="scope">
                                 <span>{{scope.row.thumbType=='0'?'可视化':'列表式'}}</span>
                             </template>
                             </el-table-column>
            <el-table-column align="center"
                             label="管理"
                             width="200"
                             v-if="hasPerm('system:list')">
                <template slot-scope="scope">
                    <el-button icon="el-icon-edit"
                               @click="update(scope.$index)">修改</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog :title="textMap[dialogStatus]"
                   :visible.sync="dialogFormVisible"
                   width="20%">
            <el-form class="small-space demo-form-inline"
                     :model="setting"
                     label-position="left"
                     label-width="180px"
                     :inline="true">
                <el-form-item label="预账单扣款时限(秒)"
                              required>
                    <el-input type="number"
                              v-model="setting.proTime">
                    </el-input>
                </el-form-item>
                <el-form-item label="订单金额限制(分)"
                              required>
                    <el-input type="number"
                              v-model="setting.orderMoney">
                    </el-input>
                </el-form-item>
                <el-form-item label="积分兑换比例(积分/元)"
                              required>
                    <el-input type="number"
                              v-model="setting.integralRate">
                    </el-input>
                </el-form-item>
                <el-form-item label="数据展示形式"
                              required>
                    <el-select v-model="setting.thumbType" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer">
                <div style="text-align:right">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary"
                               @click="updateSystemSetting">保 存</el-button>
                </div>
            </div>
        </el-dialog>
    </div>
</template>
  <script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            dialogStatus: "update",
            dialogFormVisible: false,
            textMap: {
                update: "系统配置"
            },
            setting: {
                proTime: "",
                orderMoney: "",
                integralRate: ""
            },
            totalCount: 0, //分页组件--数据总条数
            list: [], //表格的数据
            listLoading: false, //数据加载等待动画
            listQuery: {
                pageNum: 1, //页码
                pageRow: 10 //每页条数
            },
            options:[{label:'可视化',value:'0'},{label:'列表式',value:'1'}]
        };
    },
    created() {
        this.getList();
    },
    computed: {
        ...mapGetters(["userId"])
    },
    methods: {
        update($index) {
            this.setting = this.list[$index];
            this.dialogFormVisible = true;
        },
        updateSystemSetting() {
            if(!/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(this.setting.proTime)){
                this.$message({
                        type:"warning",
                        message:"预账单扣款时限必填且不能为负数哦~"
                    })
                    return;
            }
            if(!/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(this.setting.orderMoney)){
                this.$message({
                        type:"warning",
                        message:"订单金额限制必填且不能为负数哦~"
                    })
                    return;
            }
            if(!/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(this.setting.integralRate)){
                this.$message({
                        type:"warning",
                        message:"积分兑换比例必填且不能为负数哦~"
                    })
                    return;
            }
            if(!this.setting.thumbType){
                this.$message({
                        type:"warning",
                        message:"请选择数据展示形式哦~"
                    })
                    return;
            }
            //修改系统配置信息
            let _vue = this;
            this.api({
                url: "/system/update",
                method: "post",
                data: this.setting
            }).then(() => {
                let msg = "修改成功";
                this.dialogFormVisible = false;
                this.$message({
                    message: msg,
                    type: "success",
                    duration: 2 * 1000,
                    onClose: () => {
                        _vue.getList();
                    }
                });
            });
        },
        getList() {
            //查询列表
            this.listLoading = true;
            this.api({
                url: "/system/systemsetting",
                method: "get"
            }).then(data => {
                this.listLoading = false;
                this.list = data.list;
            });
        },
        handleSizeChange(val) {
            //改变每页数量
            this.listQuery.pageRow = val;
            this.handleFilter();
        },
        handleCurrentChange(val) {
            //改变页码
            this.listQuery.pageNum = val;
            this.getList();
        },
        handleFilter() {
            //查询事件
            this.listQuery.pageNum = 1;
            this.getList();
        },
        getIndex($index) {
            //表格序号
            return (
                (this.listQuery.pageNum - 1) * this.listQuery.pageRow +
                $index +
                1
            );
        }
    }
};
</script>
   