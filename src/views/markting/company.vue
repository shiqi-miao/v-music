<style scoped>
.input-with-select {
    width: 50%;
}
.dialog-form-item .el-input__inner {
    width: 160px;
}
.modal-title {
    font-weight: 600;
    font-size: 15px;
    padding-bottom: 16px;
}
.flex-center {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
}
.flex-center-Y {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
}
.jt-box {
    max-height: 40vh;
    overflow-y: scroll;
}
.jt {
    width: 100%;
    text-align: center;
}
.jt > div {
    padding: 6px 10px;
}
.jt-index {
    width: 100px;
}
.jt-time {
    flex: 1;
}
.jt-rate {
    flex: 1;
}
.m-r {
    margin-right: 20px;
}
.blue {
    color: #66b1ff;
    cursor: pointer;
    padding: 10px 6px;
}
.right {
    text-align: right;
    padding: 20px 4vw;
}
.danger {
    cursor: pointer;
}
.el-select .el-input {
    width: 120px;
}
.el-icon-edit {
    cursor: pointer;
}
.icon {
    width: 24px;
    height: 24px;
}
</style>
<style>
.jt-rate .el-input {
    width: 120px;
}
/* .el-select .el-input {
    width: 120px;
} */
</style>

<template>
    <div class="app-container">
        <el-select v-if="this.activeTab=='lists'" v-model="company" placeholder="请选择企业">
            <el-option
            v-for="item in companyList"
            :key="item.group_id"
            :label="item.groupName"
            :value="item.group_id">
            </el-option>
        </el-select>
        <!-- <el-input placeholder="请输入内容"
                  v-model="searchValue"
                  class="input-with-select">
            <el-select v-model="selectedTab"
                       placeholder="请选择"
                       slot="prepend">
                <el-option v-for="item in selectTabs"
                           :key="item.id"
                           :label="item.name"
                           :value="item.id">
                </el-option>
            </el-select>
            <el-button slot="append"
                       icon="el-icon-search"
                       @click="search"></el-button>
        </el-input> -->
        <el-button v-if="this.activeTab=='lists'" type="primary"
                   @click="toCreate">创建企业券</el-button>
        <el-button v-if="this.activeTab=='manage'" type="primary"
                   @click="toCreateGroup">创建企业</el-button>
        <br><br>
        <el-tabs v-model="activeTab"
                 type="card"
                 @tab-click="handleClick">
            <el-tab-pane label="企业管理"
                         name="manage"></el-tab-pane>
            <el-tab-pane label="企业券"
                         name="lists"></el-tab-pane>
        </el-tabs>
        <el-table :data="tableData"
                  v-if="activeTab == 'lists'"
                  style="width: 100%"
                  v-loading.body="listLoading"
                  element-loading-text="拼命加载中">
            <el-table-column prop="groupName"
                             label="发券企业"
                             align="center"
                             :key="Math.random()"></el-table-column>
            <el-table-column prop="couponName"
                    label="优惠券名称"
                    align="center"
                    :key="Math.random()"></el-table-column>
            <el-table-column 
                             label="券规则"
                             align="center"
                             :key="Math.random()">
                             <template slot-scope="scope">
                                 {{scope.row.couponRule}}
                <!-- <span v-if="scope.row.ruleType == 'M'">
                    满{{scope.row.fullNum}}减{{scope.row.subNum}}
                </span>
                <span v-else-if="scope.row.ruleType == 'Z'">
                    满{{scope.row.isDicount}}后{{scope.row.discountRate}}折
                </span>
                <span v-else-if="scope.row.ruleType == 'R'">
                    满{{scope.row.isRandom}}随机减{{scope.row.randomNum}}元
                </span>
                <span v-else-if="scope.row.ruleType == 'D'" >
                    满{{scope.row.isLow}}{{scope.row.lowNum}}元
                </span> -->
                </template>
            </el-table-column>
            <el-table-column prop="coverUser"
                             label="适用门店"
                             align="center"
                             :key="Math.random()">
                <template slot-scope="scope">
                    <el-popover placement="top-start"
                                width="120"
                                trigger="hover">
                        <div v-for="(item,i) in scope.row.storeLists"
                                :key="i">
                            {{item}}
                        </div>
                        <span slot="reference">{{scope.row.storeNum}} 家</span>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column prop="coverUser"
                             label="发券周期"
                             align="center"
                             :key="Math.random()">
                <template slot-scope="scope">
                    {{scope.row.sendTime}}
                </template>
            </el-table-column>
            <el-table-column prop="coverUser"
                             label="已发期数"
                             align="center"
                             :key="Math.random()">
                <template slot-scope="scope">
                    {{scope.row.periods}}
                </template>
            </el-table-column>
            <el-table-column prop="status"
                             label="核销数量"
                             align="center"
                             :key="Math.random()">
                <template slot-scope="scope">
                    {{scope.row.usedNum}}
                </template>
            </el-table-column>
            <el-table-column prop="reasonInfo"
                             label="核销价值"
                             align="center"
                             :key="Math.random()">
                <template slot-scope="scope">
                    ¥ {{scope.row.usedPrice || 0}}
                </template>
            </el-table-column>
            <el-table-column prop="status"
                             label="发券状态"
                             align="center"
                             :key="Math.random()">
                <template slot-scope="scope">
                   <span v-if="scope.row.sendStatus==1">正常</span> 
                   <span v-else>取消发放</span> 
                </template>          
            </el-table-column>
            <el-table-column prop="gmtCreated"
                             label="最近发放时间"
                             align="center"
                             width="160"
                             :key="Math.random()">
                <template slot-scope="scope">
                    {{scope.row.latelyTime}}
                </template>
            </el-table-column>
            <el-table-column label="操作"
                             width="150"
                             align="center">
                <template slot-scope="scope">
                    <span @click="toDetail(scope.row)"
                          class="blue">
                        管理
                    </span>
                </template>
            </el-table-column>

        </el-table>
        <el-table :data="tableData"
                  v-if="activeTab == 'manage'"
                  style="width: 100%"
                  v-loading.body="listLoading"
                  element-loading-text="拼命加载中">
            <el-table-column prop="couponName"
                             label="企业名称"
                             align="center"
                             :key="Math.random()">
                <template slot-scope="scope">
                    {{scope.row.groupName}}
                </template>         
            </el-table-column>
            <el-table-column prop="reasonInfo"
                             label="联系电话"
                             align="center"
                             :key="Math.random()">
                <template slot-scope="scope">
                    {{scope.row.groupPhone}}
                </template>
            </el-table-column>
            <el-table-column prop="reasonInfo"
                             label="企业人数"
                             align="center"
                             :key="Math.random()">
                <template slot-scope="scope">
                    {{scope.row.groupUserNum || 0}}
                </template>
            </el-table-column>
            <el-table-column prop="reasonInfo"
                             label="消费金额"
                             align="center"
                             :key="Math.random()">
                <template slot-scope="scope">
                    ¥ {{scope.row.noUsedMoney || 0}}
                </template>
            </el-table-column>
            <el-table-column prop="reasonInfo"
                             label="预存金金额"
                             align="center"
                             :key="Math.random()">
                <template slot-scope="scope">
                    ¥ {{scope.row.rechargeMoney || 0}}
                </template>
            </el-table-column>
            <el-table-column prop="gmtCreated"
                             label="创建时间"
                             align="center"
                             width="160"
                             :key="Math.random()">
                <template slot-scope="scope">
                    {{scope.row.gmtCreated}}
                </template>
            </el-table-column>
            <el-table-column label="操作"
                             width="150"
                             align="center">
                <template slot-scope="scope">
                    <span @click="toGroup(scope.row)"
                          class="blue">
                        管理
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
                           :page-sizes="[10, 20, 50, 100]"
                           layout="total, sizes, prev, pager, next, jumper">
            </el-pagination>
        </div>
        <el-dialog :visible.sync="createGroupVisible" title="创建企业" center>
            <el-form :model="form" class="center">
                <el-form-item label="企业名称" :label-width="formLabelWidth" required>
                <el-input v-model="form.groupName" autocomplete="off" placeholder="请输入企业名称"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" :label-width="formLabelWidth" required>
                <el-input v-model="form.phone" autocomplete="off" placeholder="请输入联系方式"></el-input>
                </el-form-item>
                <el-form-item label="预存金" :label-width="formLabelWidth">
                <el-input v-model="form.money" autocomplete="off" placeholder="非必填"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="createGroupVisible = false" round>取 消</el-button>
                <el-button type="primary" @click="commitGroup()" round>确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            createGroupVisible:false,
            form:{groupName:"",phone:"",money:""},
            formLabelWidth:'120px',
            company:"",
            companyList:"",
            activeTab: "manage",
            listLoading: false,
            searchValue: "",
            selectedTab: "",
            tableData: [
                {
                    number: "test"
                }
            ],
            params: {
                pageRow: 20,
                pageNum: 1
            },
            totalCount: 0,
            isShowLimitedModal: false,
            isShowLadderModal: false,
            data: {
                type: "1",
                list: [{ time: "" }, { time: "" }]
            },
            timeTabs: [
                {
                    name: "每天",
                    id: "1"
                }
            ],
            storeTabs: [],
            machineTabs: [],
            selectedTab: "couponName",
            selectTabs: [
                {
                    name: "优惠券名称",
                    id: "couponName"
                }
            ],
            searchValue: ""
        };
    },
    created() {
        this.getList(); //获取表格数据
        // this.getTypeList(); //获取下拉框数据
        this.api({//获取全部企业信息
                    url: "/coupon/showGroupOperator",
                    method: "post",
                    data: {}
                }).then(data => {
                    this.companyList=data    
                });
    },
    methods: {
        
        search() {
            for (let i in this.selectTabs) {
                if (this.selectedTab == this.selectTabs[i].id) {
                    this.params[this.selectedTab] = this.searchValue;
                } else {
                    let id = this.selectTabs[i].id;
                    this.params[id] = "";
                }
            }
            this.getList(this.params);
        },
        removeJT(i) {
            this.data.list.splice(i, 1);
        },
        toGroup(row) {
             this.$router.push({
                    path:"/system/detailGroup/" +row.groupId
                });
        },
        reSale(row) {
            this.api({
                url: "/promotion/restartShopSku",
                method: "post",
                data: {
                    skuCode: row.skuCode,
                    batchCode: row.batchCode
                }
            }).then(data => {
                this.$message({
                    type: "success",
                    message: "操作成功!"
                });
                this.getList(this.params);
            });
        },
        storeChange(val) {
            this.api({
                url: "/promotion/showVend",
                method: "post",
                data: { storeCode: val }
            }).then(data => {
                this.machineTabs = data;
            });
        },
        handleClick(tab, event) {
            this.getList();
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
        // search() {
        //     this.params.optionCode = this.searchValue;
        //     this.getList(this.params);
        // },
        getTypeList() {
            this.api({
                url: "/promotion/showAllStoreForOperator",
                method: "post",
                data: { username: this.userName }
            }).then(data => {
                this.storeTabs = data;
            });
        },
        getList(params) {
            this.listLoading = true;
            this.$set(this, "tableData", []);
            if (params) {
                params["username"] = this.userName;
            } else {
                var data = {
                    pageRow: 10,
                    pageNum: 1,
                    username: this.userName
                };
            }
            var activeTab = this.activeTab;
            if (activeTab == "lists") {
                this.api({
                    url: "/coupon/showGroupCoupon",
                    method: "post",
                    data: params || data
                }).then(data => {
                    console.log(data)
                    this.listLoading = false;
                    this.$set(this, "tableData", data.list);
                    this.totalCount = data.totalCount;
                });
            } else if (activeTab == "manage") {
                this.api({
                    url: "/coupon/showALLGroup",
                    method: "post",
                    data: params || data
                }).then(data => {
                    console.log(data)
                    this.listLoading = false;
                    for (let i in data.list) {
                        data.list[i].index = Number(i) + 1;
                    }
                    this.$set(this, "tableData", data.list);
                    this.totalCount = data.totalCount;
                });
            }
        },
        showEditDiscount(row) {
            let this_ = this;
            this.$prompt("折扣率", "修改", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                inputValue: row.discountRate
            })
                .then(data => {
                    if (!data.value) {
                        this.$message({
                            type: "warning",
                            message: "请输入折扣率"
                        });
                        return;
                    }
                    this_
                        .api({
                            url: "/promotion/updateDiscountRate",
                            method: "post",
                            data: {
                                discountRate: data.value,
                                skuCode: row.skuCode
                            }
                        })
                        .then(data => {
                            this.getList(this.params);
                            this_.$message({
                                type: "success",
                                message: "修改完成!"
                            });
                        });
                })
                .catch(() => {});
        },
        showEditDiscountB(row) {
            let this_ = this;
            this.$prompt("折扣率", "修改", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                inputValue: row.discountRate || row.skuDiscountRate
            })
                .then(data => {
                    if (!data.value) {
                        this.$message({
                            type: "warning",
                            message: "请输入折扣率"
                        });
                        return;
                    }
                    this_
                        .api({
                            url: "/promotion/updateExpiredDiscount",
                            method: "post",
                            data: {
                                discountRate: data.value,
                                skuCode: row.skuCode,
                                batchCode: row.batchCode,
                                skuSalePrice: row.skuSalePrice
                            }
                        })
                        .then(data => {
                            this.getList(this.params);
                            this_.$message({
                                type: "success",
                                message: "修改完成!"
                            });
                        });
                })
                .catch(() => {});
        },
        showEditPrice(row) {
            let this_ = this;
            this.$prompt("零售价", "修改", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                inputValue: row.machineName
            })
                .then(data => {
                    if (!data.value) {
                        this.$message({
                            type: "warning",
                            message: "请输入零售价"
                        });
                        return;
                    }
                    this_
                        .api({
                            url: "/promotion/updateExpiredDiscount",
                            method: "post",
                            data: {
                                salePrice: data.value,
                                skuCode: row.skuCode,
                                batchCode: row.batchCode,
                                skuSalePrice: row.skuSalePrice
                            }
                        })
                        .then(data => {
                            this.getList(this.params);
                            this_.$message({
                                type: "success",
                                message: "修改完成!"
                            });
                        });
                })
                .catch(() => {});
        },
        toDetail(row) {
            // let command = this.activeTab;
            // if (command == "limited") {
            //     this.$router.push({
            //         path:
            //             "/sales/limited/" +
            //             row.promotionId +
            //             "/" +
            //             row.storeCode
            //     });
            // } else if ((command = "ladder")) {
            //     this.$router.push({
            //         path:
            //             "/sales/ladder/" + row.promotionId + "/" + row.storeCode
            //     });
            // }
                this.$router.push({
                    path:"/system/detailGroupCoupon/" +row.sendId
                });
        },
        toCreate() {
            if(this.company==""){
                this.$message({
                        type: "warning",
                        message: "请选择企业"
                    });
            }else{
                this.$router.push({
                path: "/system/createCoupons/" + this.company
            });
            }
        },
        toCreateGroup(){//创建企业
            this.createGroupVisible=true
        },
        commitGroup(){//提交创建企业
            
            if(this.form.groupName==""){
                this.$message({
                        type: "warning",
                        message:"请填写企业名称"
                    });
                    return;
            }
            if(this.form.phone==""){
                this.$message({
                        type: "warning",
                        message:"请填写联系电话"
                    });
                    return;
            }
            if(!( /^((0\d{2,3}-\d{7,8})|(1[3758469]\d{9}))$/.test(this.form.phone))){ 
                 this.$message({
                        type: "warning",
                        message:"请填写有效联系方式"
                    });
                    return; 
                } 
            this.api({
                    url: "/coupon/createdGroupOperator",
                    method: "post",
                    data: {
                        groupName:this.form.groupName,
                        groupPhone:this.form.phone,
                        rechargeMoney:this.form.money

                    }
                    }).then(data => {
                        this.createGroupVisible=false
                        this.form={groupName:"",phone:"",money:""}
                        this.$message({
                        type: "success",
                        message:"创建成功"
                    });
                        this.getList();
                    })
        },
        addLine() {
            for (let i in this.data.list) {
                if (!this.data.list[i].time) {
                    let index = Number(i) + 1;
                    this.$message({
                        type: "warning",
                        message: "请填写第" + index + "条促销时间后添加"
                    });
                    return;
                }
                if (!this.data.list[i].rate) {
                    let index = Number(i) + 1;
                    this.$message({
                        type: "warning",
                        message: "请第" + index + "条促销折扣率后添加"
                    });
                    return;
                }
            }
            this.data.list.push({
                index: this.data.length + 1,
                time: ""
            });
        },
        saveLimited() {
            if (!this.data.discountName) {
                this.$message({
                    type: "warning",
                    message: "您未输入促销名称"
                });
                return;
            }
            if (this.data.times.length == 0) {
                this.$message({
                    type: "warning",
                    message: "您未选择时间"
                });
                return;
            }
            if (!this.data.storeCode) {
                this.$message({
                    type: "warning",
                    message: "您未选择门店"
                });
                return;
            }
            this.data.username = this.userName;
            this.data.startTime = this.data.times[0];
            this.data.endTime = this.data.times[1];
            this.api({
                url: "/promotion/addTheTimeDiscount",
                method: "post",
                data: this.data
            }).then(data => {
                this.$router.push({
                    path: "limited/" + data + "/" + this.data.storeCode
                });
            });
        },
        saveLadder() {
            if (!this.data.discountName) {
                this.$message({
                    type: "warning",
                    message: "您未输入促销名称"
                });
                return;
            }
            if (!this.data.storeCode) {
                this.$message({
                    type: "warning",
                    message: "您未选择门店"
                });
                return;
            }
            if (!this.data.machineCode) {
                this.$message({
                    type: "warning",
                    message: "您未选择机器"
                });
                return;
            }
            this.data.stratTime = "";
            this.data.discountRate = "";
            for (let i in this.data.list) {
                if (!this.data.list[i].time) {
                    let index = Number(i) + 1;
                    this.$message({
                        type: "warning",
                        message: "第" + index + "条促销时间未填写"
                    });
                    return;
                }
                if (!this.data.list[i].rate) {
                    let index = Number(i) + 1;
                    this.$message({
                        type: "warning",
                        message: "第" + index + "条促销折扣率未填写"
                    });
                    return;
                }
                this.data.stratTime += this.data.list[i].time + ",";
                this.data.discountRate += this.data.list[i].rate + ",";
            }
            this.data.username = this.userName;
            this.api({
                url: "/promotion/addLadderDiscount",
                method: "post",
                data: this.data
            }).then(data => {
                this.$router.push({
                    path: "ladder/" + data + "/" + this.data.storeCode
                });
            });
        }
    },
    computed: {
        ...mapGetters(["userName"])
    }
};
</script>

