<style>
.flex-center {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
}
.input-with-select {
    width: 40%;
}
.m-b {
    margin-bottom: 8px;
}
.title {
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    margin: 20px 0;
}
.center {
    text-align: center;
    margin: 20px auto；;
}
.name {
    font-weight: 600;
    text-align: left;
    display: inline-block;
    width: 100px;
    line-height: 30px;
}
.note-form {
    width: 30%;
    margin-top: 20px;
}
</style>

<template>
    <div class="app-container">
        <div class="title">需销毁库存</div>
        <el-table :data="tableData"
                  stripe
                  style="width: 100%"
                  v-loading.body="listLoading"
                  element-loading-text="拼命加载中">
            <el-table-column label=" "
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    <el-checkbox v-model="scope.row.checked"></el-checkbox>
                </template>
            </el-table-column>
            <el-table-column prop="skuName"
                             label="SKU名称"
                             style="width: 18%"
                             align="center"></el-table-column>
            <el-table-column prop="appPicture"
                             label="SKU图片"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    <img :src="scope.row.appPicture"
                         width="40"
                         height="40"
                         class="portrait" />
                </template>
            </el-table-column>
            <el-table-column label="SKU批次#数量"
                             style="width: 26%"
                             align="center">
                <template slot-scope="scope">
                    {{scope.row.batchCode}}#{{scope.row.residueNum}}
                </template>
            </el-table-column>
            <el-table-column prop="outWarrantyTime"
                             label="过保日期"
                             style="width: 26%"
                             align="center"></el-table-column>
            <el-table-column prop="inWhere"
                             label="存放位置"
                             style="width: 18%"
                             align="center"
                             v-if="tableData.length > 0">
                <template slot-scope="scope">
                    <span>{{scope.row.inWhere}}</span>
                </template>
            </el-table-column>
        </el-table>
        <div class="note-form">
            <el-form :model="info"
                     label-width="100px"
                     size="mini"
                     label-position="left">
                <el-form-item label="备注信息：">
                    <el-input size="mini"
                              maxlength="16"
                              placeholder="请输入备注"
                              v-model="remark"></el-input>
                </el-form-item>
                <el-form-item label="仓库管理员：">
                    <span>{{userName}}</span>
                </el-form-item>
            </el-form>
        </div>
        <div class="center">
            <el-button type="primary"
                       round
                       @click="submit()">确认销毁单</el-button>
        </div>

    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            listLoading: false,
            tableData: []
        };
    },
    computed: {
        ...mapGetters(["userName", "userId"])
    },
    created() {
        this.getData();
    },
    methods: {
        getData() {
            this.listLoading = true;
            this.api({
                url: "/ware/batchDestroyInfo",
                method: "get",
                params: {}
            }).then(data => {
                let lists = data;
                this.tableData = lists;
                this.listLoading = false;
            });
        },

        submit() {
            let this_ = this;
            this.$confirm(
                "销毁单确认后无法修改并减少对应SKU库存，请仔细核对后再点击“确认”！",
                "提示",
                {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                }
            )
                .then(() => {
                    let array = "";
                    let lists = this_.tableData;
                    for (let i in lists) {
                        let item = lists[i];
                        if (item.checked) {
                            array += item.batchCode + ",";
                        }
                    }
                    this_
                        .api({
                            url: "/ware/batchDestroy",
                            method: "post",
                            data: {
                                batchList: array,
                                stockRemark: this_.remark || ""
                            }
                        })
                        .then(data => {
                            this_.$message({
                                type: "success",
                                message: "提交成功!"
                            });
                            this_.$router.push({ path: "/stock/management" });
                        });
                })
                .catch(() => {});
        }
    }
};
</script>