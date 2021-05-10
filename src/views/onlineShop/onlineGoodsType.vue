<style>
.el-icon-circle-plus{
  color:rgb(19, 206, 102);font-size:24px;position:absolute;right:-12px;top:-12px;z-index:2
}

.el-icon-circle-plus:hover{
  color: green;
  cursor: pointer;
}
</style>
<template>
    <div class="app-container">
      <div class="filter-container">
        <el-form>
          <el-form-item>
            <el-button icon="el-icon-plus" type="success" @click="goodstypeadd">添加商品分类
            </el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-table :data="list" style="width: 100%" v-loading.body="listLoading" element-loading-text="拼命加载中" border fit
                highlight-current-row>
        <el-table-column align="center" label="序号" width="80">
          <template slot-scope="scope">
            <span v-text="getIndex(scope.$index)"> </span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="商品分类名称" prop="typeName"></el-table-column>
        <el-table-column align="center" label="创建时间" prop="gmtCreated" ></el-table-column>
        <el-table-column align="center" label="更新时间" prop="gmtModified"></el-table-column>
        <el-table-column align="center" label="是否显示">
                <template slot-scope="scope">
                        <el-switch
                            active-value="1"
                            inactive-value="0"
                            active-color="#13ce66"
                            inactive-color="#ff4949"
                            v-model="scope.row.typeStatus" 
                            @change=changeTypeStatus(scope.$index,scope.row)                
                        >
                        </el-switch>
                </template>
        </el-table-column>
        <el-table-column fixed="right" align="center" label="管理" width="200">
          <template slot-scope="scope">
            <el-button type="success" icon="el-icon-edit" @click="goodstypeedit(scope.$index)">编辑</el-button>
            <!-- <el-button type="primary" icon="edit" @click="goodsType(scope.row)">查看</el-button> -->
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="listQuery.pageNum"
        :page-size="listQuery.pageRow"
        :total="totalCount"
        :page-sizes="[10, 20, 50, 100]"
        layout="total, sizes, prev, pager, next, jumper">
      </el-pagination> 
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" width="30%">
      <el-form class="small-space demo-form-inline" :model="type" label-position="left" label-width="80px" :inline="true">
        <el-form-item label="分类名称" required>
          <el-input type="text" v-model="type.typeName"> 
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
          <div style="text-align:right" >
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="updateGoodsType">编 辑</el-button>
          </div>
      </div>
    </el-dialog>
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible1" width="30%">
      <el-form class="small-space demo-form-inline" :model="typeDefault" label-position="left" label-width="80px" :inline="true">
        <el-form-item label="分类名称" required>
          <el-input type="text" v-model="typeDefault.typeName"> 
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
          <div style="text-align:right" >
              <el-button @click="dialogFormVisible1 = false">取 消</el-button>
              <el-button type="primary" @click="addGoodsType">添加</el-button>
          </div>
      </div>
    </el-dialog>
    </div>
  </template>
  <script>
    import {mapGetters} from 'vuex'
    export default {
      data() {
        return {
          code : null,
          totalCount: 0, //分页组件--数据总条数
          list: [],//表格的数据
          listLoading: false,//数据加载等待动画
          listQuery: {
            pageNum: 1,//页码
            pageRow: 50,//每页条数
            wgcode: "",//商品编号
            wgname: "",//商品名称
          },
          dialogStatus: 'update',
          dialogFormVisible: false,
          dialogFormVisible1: false,
          innerVisible:false,
          textMap: {
            update: '商品信息编辑',
          },
          type:{},
          typeDefault: {
            typeId:'',
            typeName:''
          }, 
          goodsSku: {
          }, 
          SKUdata:{           
          }
        }
      },
      created() {
        this.getList();
      },
      computed: {
        ...mapGetters([
          'userId'
        ])
      },
      methods: {
        addGoodsType() {
          //添加商品分类信息
          let _vue = this;
          this.api({
            url: "/online/goodstypeadd",
            method: "post",
            data: this.typeDefault
          }).then(() => {
            let msg = "添加成功";
            this.dialogFormVisible1 = false
            this.$message({
              message: msg,
              type: 'success',
              duration: 2 * 1000,
              onClose: () => {
                _vue.getList();
              }
            })
          }) 
        },
        updateGoodsType() {
          //修改商品分类信息
          let _vue = this;
          this.api({
            url: "/online/goodstypeupdate",
            method: "post",
            data: this.type
          }).then(() => {
            let msg = "修改成功";
            this.dialogFormVisible = false
            this.$message({
              message: msg,
              type: 'success',
              duration: 2 * 1000,
              onClose: () => {
                _vue.getList();
              }
            })
          }) 
        },
        goodstypeedit($index) {
          this.type = this.list[$index] 
          this.dialogFormVisible = true 
        },
        goodstypeadd() {
          this.dialogFormVisible1 = true 
        },
        changeTypeStatus($index,row) {
              let _vue = this;
              this.$confirm('确定更改此商品分类状态?', '提示', {
                confirmButtonText: '确定',
                showCancelButton: false,
                type: 'warning'
              }).then(() => {
                let goodsType = _vue.list[$index];
                goodsType.typeStatus = row.typeStatus;
                goodsType.typeId = row.typeId;
                _vue.api({
                  url: "/online/typestatus",
                  method: "post",
                  data: goodsType
                }).then(() => {
                  _vue.getList()
                  _vue.$message.success("更改完成")
                }).catch(() => {
                  _vue.getList()
                  _vue.$message.error("更改失败,该商品分类下包含商品，请移除后再试")
                })
              })
            },
        getList() {
          //查询列表
          this.listLoading = true;
          this.api({
            url: "/online/goodstypelist",
            method: "get",
            params: this.listQuery
          }).then(data => {
            this.listLoading = false;
            this.list = data.list;
            this.totalCount = data.totalCount;
          })
        },
        handleSizeChange(val) {
          //改变每页数量
          this.listQuery.pageRow = val
          this.handleFilter();
        },
        handleCurrentChange(val) {
          //改变页码
          this.listQuery.pageNum = val
          this.getList();
        },
        handleFilter() {
          //查询事件
          this.listQuery.pageNum = 1
          this.getList()
        },
        getIndex($index) {
          //表格序号
          return (this.listQuery.pageNum - 1) * this.listQuery.pageRow + $index + 1
        },
      }
    }
  </script>
  