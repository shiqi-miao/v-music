
<style>
.append-input .el-input--suffix {
    width: 80px !important;
}
.upload-img {
    width: 100%;
    /* height: 100%; */
}

.upload-block .el-upload-dragger {
    width: 180px;
    height: 180px;
}
.upload-block-2 .el-upload-dragger {
    width: 200px;
    height: 300px;
}
.grey {
    padding: 10px 6px;
    color: #999999;
}
.sku-form {
    padding: 0 30px;
}
.sku-form .el-form-item__label {
    width: 110px !important;
}
.blue {
    color: #66b1ff;
    cursor: pointer;
    padding: 10px 6px;
}
.input-with-select {
    width: 50%;
}
/* .el-select .el-input {
    width: 120px;
} */
.create .el-input {
    width: 180px;
}
.el-tooltip__popper[x-placement^="right"] .popper__arrow,
.el-tooltip__popper[x-placement^="right"] .popper__arrow:after {
    border-right-color: #ffffff;
}
.el-tooltip__popper[x-placement^="bottom"] .popper__arrow,
.el-tooltip__popper[x-placement^="bottom"] .popper__arrow:after {
    border-bottom-color: #ffffff;
}
.tooltip-blue {
    background: #ffffff !important;
    border: #66b1ff !important;
    color: #66b1ff !important;
    line-height: 18px;
    font-size: 14px;
}
.hover {
    cursor: pointer;
    /* padding: 10px 20px; */
}
.title-hover {
    cursor: pointer;
}
.danger {
    color: #f56c6c;
}
.orange {
    color: orange;
}
.note {
    padding: 10px 0;
    color: #888888;
    font-size: 13px;
}
.item-set {
    height: 44px;
    padding: 6px;
    text-align: center;
    line-height: 32px;
}
.name {
    line-height: 36px;
    font-weight: 600;
    text-align: center;
}
.label {
    display: inline-block;
    line-height: 36px;
    font-weight: 600;
}
.stock-num {
    padding: 10px;
    cursor: pointer;
}
.msg {
    padding: 0 6vw;
}
.center {
    text-align: center;
}
.brandtype {
    margin-right: 10px;
    background: #ffffff;
    color: #888888;
    cursor: pointer;
}
.brandtype.active {
    background: rgba(64, 158, 255, 0.1);
    color: #409eff;
    border: 1px solid rgba(64, 158, 255, 0.2);
}
.radios {
    width: 40vw;
}
.setting {
    margin: 6px 0;
}
.setting-left {
    width: 300px;
}
.setting .el-input {
    width: 100px;
}
.p-radio {
    width: 100%;
}
.none {
    display: none;
}
</style>

<template>
    <div class="app-container">
        <el-input placeholder="请输入内容"
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
        </el-input>
        <!-- <el-button icon="el-icon-plus" type="primary" @click="showCreateGoods">创建商品</el-button> -->
        <br /><br />
        <el-tabs v-model="activeTab"
                 type="card"
                 @tab-click="handleTabClick">
            <el-tab-pane :label="item.typeName"
                         :name="item.typeId"
                         v-for="(item, i) in selectGoodsTabs2"
                         :key="i">
                <div>
                    <b>品牌名称：</b>
                    <el-tag @click.native="chooseBrand(j)"
                            v-for="(item, j) in selectBrandTabs2"
                            :key="j"
                            type="info"
                            class="brandtype"
                            :class="{ active: item.isActive }">{{ item.brandName }}</el-tag>
                </div>
                <el-table :data="tableData"
                          stripe
                          style="width: 100%"
                          max-height="1200"
                          v-loading.body="listLoading"
                          element-loading-text="拼命加载中"
                          @filter-change="filterMethod">
                    <el-table-column prop="brandName"
                                     label="品牌名称"
                                     style="width: 18%"
                                     align="center"></el-table-column>
                    <el-table-column prop="skuCode"
                                     label="SKU编号"
                                     style="width: 18%"
                                     align="center"></el-table-column>
                    <el-table-column prop="skuName"
                                     label="SKU名称"
                                     style="width: 18%"
                                     align="center"></el-table-column>
                    <el-table-column prop="typeName"
                                     label="商品分类"
                                     style="width: 18%"
                                     align="center"></el-table-column>
                    <el-table-column align="center"
                                     label="SKU图片"
                                     style="width: 30px;">
                        <template slot-scope="scope">
                            <img :src="scope.row.appPicture"
                                 width="40"
                                 height="40"
                                 class="portrait" />
                        </template>
                    </el-table-column>
                    <el-table-column label="采购单价&包装规格"
                                     align="center"
                                     prop="isModel"
                                     column-key="isModel"
                                     :filters="typeFilters"
                                     :filter-multiple="false">
                        <template slot-scope="scope">
                            <span v-if="scope.row.skuModel.length == 0">未设置</span>
                            <span v-else>
                                <span v-for="(item, i) in scope.row.skuModel"
                                      :key="i">
                                    <span v-if="item.modelDefault == 1">
                                        <span v-if="item.modelType == 'A'">
                                            ¥ {{ (item.modelPrice * 100).toFixed(2) }} /件</span>
                                        <span v-else-if="item.modelType == 'B'">{{ item.pcsNum }} 件/包 （¥{{
                                            (item.modelPrice * 100).toFixed(2)
                                            }}）</span>
                                        <span v-else-if="item.modelType == 'C'">{{ item.pcsNum }} 包/箱（¥{{
                                            (item.modelPrice * 100).toFixed(2)
                                            }}）</span>
                                    </span>
                                </span>
                            </span>
                            <!-- <el-tooltip class="item" placement="bottom" popper-class="tooltip-blue">
                                <div slot="content">
                                    <div v-for="(item,i) in scope.row.skuModel" :key="i">
                                        ：¥
                                    </div>
                                </div>
                                <span class="hover">
                                    
                                </span>
                            </el-tooltip> -->
                        </template>
                    </el-table-column>
                    <el-table-column label="操作"
                                     style="width: 18%"
                                     align="center">
                        <template slot-scope="scope">
                            <span @click="showCreateSKU(scope.row)"
                                  class="blue">设置</span>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>
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
        <el-dialog :title="dialogTitle"
                   :visible.sync="createSKUDialogVisible"
                   width="56%">
            <div class="flex-center-Y">
                <span class="label">&emsp;SKU编号：</span>{{ skuData.skuCode }}
                <span class="label">&emsp;SKU名称：</span>{{ skuData.skuName }}
                <span class="label">&emsp;SKU图片：</span><img :src="skuData.appPicture"
                     width="40"
                     height="40"
                     class="portrait" />
            </div>
            <div>
                <span class="label">&emsp;采购周期：</span>
                <el-select v-model="skuData.periodNum"
                           placeholder="请选择"
                           size="small">
                    <el-option v-for="item in isVendOptions"
                               :key="item.id"
                               :label="item.name"
                               :value="item.id">
                    </el-option>
                </el-select>
            </div>
            <br />
            <el-radio-group v-model="modelType"
                            style="margin-bottom: 30px;">
                <el-radio-button label="A">按件采购</el-radio-button>
                <el-radio-button label="B">按包采购</el-radio-button>
                <el-radio-button label="C">按箱采购</el-radio-button>
            </el-radio-group>
            <div v-if="modelType == 'A'"
                 class="setting">
                <span class="label">&emsp;按件采购单价：</span>
                ¥ <el-input v-model="skuData.priceA"
                          size="small"></el-input>
            </div>
            <div v-else-if="modelType == 'B'"
                 class="setting">
                <div>
                    <span class="label">&emsp;包装规格：</span>
                    <el-input v-model="skuData.sizeB"
                              size="small"></el-input> 件/包
                </div>
                <div>
                    <span class="label">&emsp;按包采购单价：</span>
                    ¥ <el-input v-model="skuData.priceB"
                              size="small"></el-input>
                </div>
            </div>
            <div v-else-if="modelType == 'C'"
                 class="setting">
                <div>
                    <span class="label">&emsp;包装规格：</span>
                    <el-input v-model="skuData.sizeC"
                              size="small"></el-input> 包/箱
                </div>
                <div>
                    <span class="label">&emsp;按箱采购单价：</span>
                    ¥ <el-input v-model="skuData.priceC"
                              size="small"></el-input>
                </div>
            </div>
            <!-- <div class="radios">
            <el-radio-group v-model="skuData.radio" >
                <div>
                <el-radio :label="0" class="flex-center-Y p-radio none" >
                </el-radio>
                <el-radio :label="1" class="flex-center-Y p-radio">
                    <div class="setting flex-center-Y">
                        <div class="setting-left">
                            最小规格：1pcs
                        </div>
                        <div class="setting-right flex-1">
                            该规格采购单价：¥ <el-input v-model="skuData.priceA" size="mini"></el-input>
                        </div>
                    </div>
                </el-radio>
                <el-radio :label="2" class="flex-center-Y p-radio">
                    <div class="setting flex-center-Y">
                        <div class="setting-left">
                            二级规格：<el-input v-model="skuData.sizeB" size="mini"></el-input> pcs/包
                        </div>
                        <div class="setting-right">
                            该规格采购单价：¥ <el-input v-model="skuData.priceB" size="mini"></el-input>
                        </div>
                    </div>
                </el-radio>
                <el-radio :label="3" class="flex-center-Y p-radio">
                    <div class="setting flex-center-Y">
                        <div class="setting-left">
                            三级规格：<el-input v-model="skuData.sizeC" size="mini"></el-input> 包/箱
                        </div>
                        <div class="setting-right flex-1">
                            该规格采购单价：¥ <el-input v-model="skuData.priceC" size="mini"></el-input>
                        </div>
                    </div>
                </el-radio>
                </div>
            </el-radio-group>
            </div> -->
            <span slot="footer"
                  class="dialog-footer">
                <el-button @click="createSKUDialogVisible = false">取 消</el-button>
                <el-button type="primary"
                           @click="createSKU"
                           :loading="reqLoading">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
            listLoading: false,
            totalCount: 0,
            searchValue: "",
            selectedTab: "skuName",
            selectTabs: [
                {
                    name: "SKU名称",
                    id: "skuName"
                },
                {
                    name: "SKU编号",
                    id: "skuCode"
                }
            ],
            selectGoodsTabs: [],
            typeFilters: [
                { text: "未设置", value: "0" },
                { text: "已设置", value: "1" }
            ],
            selectBrandTabs: [],
            unitsTabs: [
                {
                    name: "G",
                    id: "G"
                },
                {
                    name: "ML",
                    id: "ML"
                },
                {
                    name: "L",
                    id: "L"
                },
                {
                    name: "KG",
                    id: "KG"
                }
            ],
            sizeTabs: [
                {
                    name: "瓶",
                    id: "瓶"
                },
                {
                    name: "份",
                    id: "份"
                },
                {
                    name: "包",
                    id: "包"
                },
                {
                    name: "盒",
                    id: "盒"
                },
                {
                    name: "杯",
                    id: "杯"
                },
                {
                    name: "组",
                    id: "组"
                }
            ],
            originTabs: [
                {
                    name: "中国",
                    id: "中国"
                },
                {
                    name: "港澳台",
                    id: "港澳台"
                },
                {
                    name: "海外进口",
                    id: "海外进口"
                }
            ],
            lineTabs: [
                {
                    name: "小商品货道",
                    id: "type001"
                },
                {
                    name: "中商品货道",
                    id: "type003"
                },
                {
                    name: "大商品货道",
                    id: "type004"
                }
            ],
            isVendOptions: [
                { id: "1", name: "1天" },
                { id: "2", name: "2天" },
                { id: "3", name: "3天" },
                { id: "4", name: "4天" },
                { id: "5", name: "5天" },
                { id: "6", name: "6天" },
                { id: "7", name: "7天" },
                { id: "15", name: "15天" },
                { id: "30", name: "30天" }
            ],
            tableData: [],
            params: {
                pageRow: 20,
                pageNum: 1
            },
            createGoodsDialogVisible: false,
            createSKUDialogVisible: false,
            goodsData: {},
            skuData: {},
            file: {},
            dialogTitle: "",
            expands: [],
            expandsBrand: [],
            reqLoading: false,
            activeTab: "0",
            selectGoodsTabs2: [],
            selectBrandTabs2: [],
            modelType: ""
        };
    },
    created() {
        this.getList();
        this.getTypeList();
    },

    methods: {
        filterMethod(filters) {
            //商品分类 删选
            for (let i in filters) {
                this.params[i] = filters[i][0];
            }
            console.log(filters);
            this.getList(this.params);
        },
        chooseBrand(index) {
            for (let i in this.selectBrandTabs2) {
                let active = i == index ? true : false;
                this.$set(this.selectBrandTabs2[i], "isActive", active);
            }
            this.params.brandId =
                index == 0 ? null : this.selectBrandTabs2[index].brandId;
            this.getList(this.params);
        },
        handleTabClick(tab, event) {
            this.params.typeId =
                this.activeTab == 0 ? null : Number(this.activeTab);
            this.getList(this.params);
        },
        expandChangeBrand(row, expandedRows) {
            // this.api({
            //     url: "/goods/goodsSkuList",
            //     method: "get",
            //     params: {
            //         goodsCode:row.goodsCode
            //     }
            // }).then(data => {ß
            //     this.$set(row,'skuList',data)
            // })
        },
        expandChange(row, expandedRows) {
            this.api({
                url: "/goods/goodsSkuList",
                method: "get",
                params: {
                    goodsCode: row.goodsCode
                }
            }).then(data => {
                this.$set(row, "skuList", data);
            });
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
        createGoods() {
            if (!this.goodsData.typeId) {
                this.$message({
                    type: "warning",
                    message: "您未选择商品分类"
                });
                return;
            }
            if (!this.goodsData.brandId) {
                this.$message({
                    type: "warning",
                    message: "您未选择商品品牌"
                });
                return;
            }
            if (!this.goodsData.goodsName) {
                this.$message({
                    type: "warning",
                    message: "您未填写商品名称"
                });
                return;
            }
            this.api({
                url: "/goods/goodsadd",
                method: "post",
                data: this.goodsData
            }).then(data => {
                this.$message({
                    type: "success",
                    message: "添加商品成功"
                });
                this.getList(this.params);
                this.createGoodsDialogVisible = false;
            });
        },
        editGoods() {
            if (!this.goodsData.typeId) {
                this.$message({
                    type: "warning",
                    message: "您未选择商品分类"
                });
                return;
            }
            if (!this.goodsData.brandId) {
                this.$message({
                    type: "warning",
                    message: "您未选择商品品牌"
                });
                return;
            }
            if (!this.goodsData.goodsName) {
                this.$message({
                    type: "warning",
                    message: "您未填写商品名称"
                });
                return;
            }
            this.api({
                url: "/goods/goodsupdate",
                method: "post",
                data: this.goodsData
            }).then(data => {
                this.$message({
                    type: "success",
                    message: "修改商品成功"
                });
                this.getList(this.params);
                this.createGoodsDialogVisible = false;
            });
        },
        createSKU() {
            let data = {
                periodNum: this.skuData.periodNum,
                skuCode: this.skuData.skuCode,
                modelType: this.modelType,
                modelDefault: "1"
            };
            if (!this.skuData.periodNum) {
                this.$message({
                    type: "warning",
                    message: "您未选择采购周期"
                });
                this.reqLoading = false;
                return;
            }
            if (this.modelType == "A") {
                if (!this.skuData.priceA) {
                    this.$message({
                        type: "warning",
                        message: "您未填写单价"
                    });
                    this.reqLoading = false;
                    return;
                }
                data.pcsNum = "1";
                data.modelPrice = this.skuData.priceA;
            } else if (this.modelType == "B") {
                if (!this.skuData.priceB) {
                    this.$message({
                        type: "warning",
                        message: "您未填写单价"
                    });
                    this.reqLoading = false;
                    return;
                }
                if (!this.skuData.sizeB) {
                    this.$message({
                        type: "warning",
                        message: "您未填写规格"
                    });
                    this.reqLoading = false;
                    return;
                }
                data.pcsNum = this.skuData.sizeB;
                data.modelPrice = this.skuData.priceB;
            } else if (this.modelType == "C") {
                if (!this.skuData.priceC) {
                    this.$message({
                        type: "warning",
                        message: "您未填写单价"
                    });
                    this.reqLoading = false;
                    return;
                }
                if (!this.skuData.sizeC) {
                    this.$message({
                        type: "warning",
                        message: "您未填写规格"
                    });
                    this.reqLoading = false;
                    return;
                }
                data.pcsNum = this.skuData.sizeC;
                data.modelPrice = this.skuData.priceC;
            }

            this.reqLoading = true;
            this.api({
                url: "/goods/setPurchase",
                method: "post",
                data: data
            })
                .then(data => {
                    this.$message({
                        type: "success",
                        message: "设置成功"
                    });
                    this.getList(this.params);
                    this.createSKUDialogVisible = false;
                    this.reqLoading = false;
                })
                .catch(data => {
                    this.reqLoading = false;
                });
        },
        // editSKU(){
        //     // "/goods/skugoodsupdate"
        // },
        editSKU() {
            if (!this.skuData.skuName || this.skuData.skuName.length > 16) {
                this.$message({
                    type: "warning",
                    message: "请输入不多于16字的SKU名称"
                });
                this.reqLoading = false;
                return;
            }
            if (!this.skuData.jbarCode) {
                this.$message({
                    type: "warning",
                    message: "请输入正确的SKU条码"
                });
                this.reqLoading = false;
                return;
            }
            if (!this.skuData.skuUnits) {
                this.$message({
                    type: "warning",
                    message: "您未选择商品单位"
                });
                this.reqLoading = false;
                return;
            }
            if (
                !this.skuData.skuSpecification ||
                !(this.skuData.skuSpecification >= 0)
            ) {
                this.$message({
                    type: "warning",
                    message: "请填写正确规格"
                });
                this.reqLoading = false;
                return;
            }
            if (!this.skuData.placeOrigin) {
                this.$message({
                    type: "warning",
                    message: "您未选择商品产地"
                });
                this.reqLoading = false;
                return;
            }
            if (
                this.skuData.placeOrigin == this.originTabs[2].id &&
                !this.skuData.productCountry
            ) {
                this.$message({
                    type: "warning",
                    message: "您未选择商品国家"
                });
                this.reqLoading = false;
                return;
            }
            if (!this.skuData.vendType) {
                this.$message({
                    type: "warning",
                    message: "您未选择机型"
                });
                this.reqLoading = false;
                return;
            }
            if (!this.skuData.aisleTypeCode) {
                this.$message({
                    type: "warning",
                    message: "您未选择货道类型"
                });
                this.reqLoading = false;
                return;
            }
            if (!this.skuData.skuPicture) {
                this.$message({
                    type: "warning",
                    message: "您未上传SKU图片"
                });
                this.reqLoading = false;
                return;
            }
            if (!this.skuData.appPicture) {
                this.$message({
                    type: "warning",
                    message: "您未上传APP图片"
                });
                this.reqLoading = false;
                return;
            }
            if (
                !(this.skuData.discRatio >= 0 && this.skuData.discRatio <= 100)
            ) {
                this.$message({
                    type: "warning",
                    message: "请填写0-100的折扣率"
                });
                this.reqLoading = false;
                return;
            }
            if (
                !(
                    this.skuData.originPriceYuan >= 0 &&
                    this.skuData.originPriceYuan < 100
                )
            ) {
                this.$message({
                    type: "warning",
                    message: "请填写正确销售价格"
                });
                this.reqLoading = false;
                return;
            }
            if (
                !(
                    this.skuData.procurementPriceYuan >= 0 &&
                    this.skuData.procurementPriceYuan < 100
                )
            ) {
                this.$message({
                    type: "warning",
                    message: "请填写正确成本价格"
                });
                this.reqLoading = false;
                return;
            }
            this.skuData.originPrice =
                Number(this.skuData.originPriceYuan) * 100;
            this.skuData.procurementPrice =
                Number(this.skuData.procurementPriceYuan) * 100;
            var formData = new FormData();
            formData.append("file", this.file);
            formData.append("data", JSON.stringify(this.skuData));
            // for(let i in this.skuData){
            //     formData.append(i, this.skuData[i]);
            // }
            this.reqLoading = true;
            this.api({
                url: "/goods/skugoodsupdate",
                method: "post",
                data: formData
            }).then(data => {
                this.$message({
                    type: "success",
                    message: "修改SKU成功"
                });
                this.getList(this.params);
                this.createSKUDialogVisible = false;
                this.reqLoading = false;
            });
        },
        showCreateGoods(row) {
            if (row.id) {
                this.dialogTitle = "编辑商品";
                this.goodsData = row;
            } else {
                this.dialogTitle = "创建商品";
                this.goodsData = {};
            }

            this.createGoodsDialogVisible = true;
        },
        showCreateSKU(row, sku) {
            this.file = "";
            this.reqLoading = false;
            if (sku) {
                this.dialogTitle = "编辑商品";
                this.api({
                    url: "/goods/skuData",
                    method: "post",
                    data: { skuCode: sku.skuCode }
                }).then(data => {
                    this.skuData = data;
                    this.skuData.brandName = row.brandName;
                    this.skuData.goodsName = row.goodsName;
                    this.skuData.typeName = row.typeName;
                    this.skuData.goodsCode = row.goodsCode;
                    this.skuData.nameOne = this.skuData.nameOne || "";
                    this.skuData.contentOne = this.skuData.contentOne || "";
                    this.skuData.nameTwo = this.skuData.nameTwo || "";
                    this.skuData.contentTwo = this.skuData.contentTwo || "";
                    this.skuData.skuCardHref = this.skuData.skuCardHref || "";
                    this.skuData.skuCardPicture =
                        this.skuData.skuCardPicture || "";
                    this.skuData.skuRepairPic = this.skuData.skuRepairPic || "";
                    this.createSKUDialogVisible = true;
                });
            } else {
                this.dialogTitle = "采购配置";
                if (row.skuModel.length == 0) {
                    this.modelType = "A";
                } else {
                    let data = {};
                    for (let i in row.skuModel) {
                        if (row.skuModel[i].modelType == "A") {
                            row.priceA = row.skuModel[i].modelPrice * 100;
                        }
                        if (row.skuModel[i].modelType == "B") {
                            row.sizeB = row.skuModel[i].pcsNum;
                            row.priceB = row.skuModel[i].modelPrice * 100;
                        }
                        if (row.skuModel[i].modelType == "C") {
                            row.sizeC = row.skuModel[i].pcsNum;
                            row.priceC = row.skuModel[i].modelPrice * 100;
                        }
                        if (row.skuModel[i].modelDefault == 1) {
                            data = row.skuModel[i];
                        }
                    }
                    this.modelType = data.modelType;
                }

                this.skuData = row;
                this.createSKUDialogVisible = true;
            }
        },
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
        getList(params) {
            this.listLoading = true;
            this.api({
                url: "/goods/listPurchaseGoods",
                method: "get",
                params: params || this.params
            }).then(data => {
                this.listLoading = false;

                this.tableData = data.list;
                this.totalCount = data.totalCount;
                this.expands = [];
                this.expandsBrand = [];
            });
        },
        getTypeList() {
            this.api({
                url: "/goods/goodsaddtype",
                method: "get"
            })
                .then(data => {
                    this.selectGoodsTabs = [];
                    this.selectGoodsTabs2 = [{ typeName: "全部", typeId: "0" }];
                    for (let i in data) {
                        this.selectGoodsTabs.push(data[i]);
                        this.selectGoodsTabs2.push(data[i]);
                    }

                    // for(let i in this.selectGoodsTabs2){
                    //     this.selectGoodsTabs2[i].typeId = this.selectGoodsTabs2[i].typeId
                    // }
                })
                .catch(e => {});

            // this.$set(this,'selectGoodsTabs2',this.selectGoodsTabs2)
            this.api({
                url: "/brand/brand",
                method: "post"
            })
                .then(data => {
                    this.selectBrandTabs = [];
                    this.selectBrandTabs2 = [
                        { brandName: "全部", brandId: "0", isActive: true }
                    ];
                    for (let i in data.list) {
                        this.selectBrandTabs.push(data.list[i]);
                        this.selectBrandTabs2.push(data.list[i]);
                    }
                })
                .catch(e => {});
        },
        beforeAvatarUpload(file) {
            const isPNG = file.type === "image/png";
            const isLt2M = file.size / 1024 / 1024 < 1;
            if (!isPNG) {
                this.$message.error("上传图片必须为PNG！");
            }
            if (!isLt2M) {
                this.$message.error("上传图片大小不能超过 1MB!");
            }
            return isPNG && isLt2M;
        },
        upload1(content) {
            var formData = new FormData();
            formData.append("file", content.file);
            this.file = content.file;
            this.api({
                url: "/uploadfile/upload",
                method: "post",
                data: formData
            })
                .then(data => {
                    console.log(data);
                    let name = content.data.type;
                    let namePath = name + "Path";
                    this.$set(this.skuData, namePath, data.filePath);
                    // this.skuData[namePath] = data.filePath
                    this.skuData[name] = data.tempPath;
                    console.log(this.skuData);
                })
                .catch(e => {});
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
                    console.log(data);
                    let name = content.data.type;
                    let namePath = name + "Path";

                    this.$set(this.skuData, namePath, data.filePath);
                    // this.skuData[namePath] = data.filePath
                    this.skuData[name] = data.tempPath;
                    console.log(this.skuData);
                })
                .catch(e => {});
        },
        removeGoods(row) {
            this.$confirm("确定删除该商品?", "提示", {
                confirmButtonText: "确定",
                showCancelButton: false,
                type: "warning"
            }).then(() => {
                this.api({
                    url: "/goods/goodsDel",
                    method: "post",
                    data: {
                        goodsCode: row.goodsCode
                    }
                }).then(data => {
                    this.$message({
                        type: "success",
                        message: "删除成功"
                    });
                    this.getList(this.params);
                });
            });
        },
        updatePlan(row, isPlan, props) {
            this.api({
                url: "/goods/skuIsPlan",
                method: "post",
                data: {
                    skuCode: row.skuCode,
                    isPlan: isPlan
                }
            }).then(data => {
                this.$message({
                    type: "success",
                    message: "修改计划成功"
                });
                this.api({
                    url: "/goods/goodsSkuList",
                    method: "get",
                    params: {
                        goodsCode: props.goodsCode
                    }
                }).then(data => {
                    this.$set(props, "skuList", data);
                });
            });
        },
        toCreateType() {
            this.$router.push({ path: "/sku" });
        },
        toCreateBrand() {
            this.$router.push({ path: "/sku/brand" });
        }
    }
};
</script>

