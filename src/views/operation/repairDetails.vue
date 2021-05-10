<template>
  <div class="app-container">
    <div class="filter-container">
      <el-form>
        <el-form-item>
        </el-form-item>
      </el-form>
    </div>
    <el-table :data="list" v-loading.body="listLoading" element-loading-text="拼命加载中" border fit
              highlight-current-row>
      <el-table-column align="center" label="序号" width="80">
        <template slot-scope="scope">
          <span v-text="getIndex(scope.$index)"> </span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="姓名" prop="nickname" style="width: 60px;"></el-table-column>
      <el-table-column align="center" label="登陆账号（手机号）" prop="username" style="width: 60px;"></el-table-column>
      <el-table-column align="center" label="运营区域组名" prop="area" style="width: 60px;"></el-table-column>
      <el-table-column align="center" label="创建时间" prop="gmtCreated" width="170"></el-table-column>
      <el-table-column align="center" label="最近修改时间" prop="gmtModified" width="170"></el-table-column>
       <el-table-column align="center" label="是否启用" v-if="hasPerm('hardware:repairmanupdate')" >
          <template slot-scope="scope">
            <el-switch
                active-value="Y"
                inactive-value="N"
                active-color="#13ce66"
                inactive-color="#ff4949"
                v-model="scope.row.repairStatus" 
                @change="changerecommendStatus(scope.$index,scope.row)"             
            >
            </el-switch>
          </template>
        </el-table-column>
      <el-table-column align="center" label="管理" width="220" v-if="hasPerm('hardware:repairmanupdate') ||hasPerm('hardware:repairmandelete')">
        <template slot-scope="scope">
          <el-button type="success" icon="el-icon-edit" @click="showUpdate(scope.$index)">编辑</el-button>
          <el-button type="danger" icon="el-icon-delete" v-if="scope.row.userId!=userId && hasPerm('hardware:repairmandelete') "
                     @click="removeRepair(scope.$index)">删除
          </el-button>
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
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form class="small-space" :model="tempRepair" label-position="left" label-width="80px"
               style='width: 300px; margin-left:50px;'>
        <el-form-item label="账号" required v-if="dialogStatus=='create'">
          <el-input type="text" v-model="tempRepair.username">
          </el-input>
        </el-form-item>
        <el-form-item label="运营区域" required>
            <el-select v-model="tempRepair.areaId" clearable placeholder="请选择区域">
                <el-option
                  v-for="item in arealist"
                  :key="item.areaId"
                  :label="item.areaName"
                  :value="item.areaId">
                </el-option>
              </el-select>
        </el-form-item>
        <el-form-item label="姓名" required>
          <el-input type="text" v-model="tempRepair.nickname">
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button v-if="dialogStatus=='create'" type="success" @click="createRepair">创 建</el-button>
        <el-button type="primary" v-else @click="updateRepair">修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        // porpraitList: [
        //     {
        //       name: '默认头像',
        //       url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530722622336&di=1ffbcd6f8afa0cc0803447a50c07290d&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01460b57e4a6fa0000012e7ed75e83.png'
        //     }
        //   ],
        totalCount: 0, //分页组件--数据总条数
        list: [],//表格的数据
        listLoading: false,//数据加载等待动画
        listQuery: {
          pageNum: 1,//页码
          pageRow: 50,//每页条数
        },
        roles: [],//角色列表
        dialogStatus: 'create',
        dialogFormVisible: false,
        textMap: {
          update: '编辑',
          create: '新建维修员'
        },
        arealist: {
            areaId: '',
            areaName: ''
          },
        tempRepair: {
          username: '',
          nickname: '',
          areaId: '',
          porprait: ''
        },
        tempRepairDefault: {
          username: '',
          nickname: '',
          areaId: '',
          porprait: ''
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
      handleAvatarSuccess(res, file) {
        this.tempRepair.filePath = res.data.filePath
        this.tempRepair.porprait = res.data.tempPath;
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 1;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 1MB!');
        }
        return isJPG && isLt2M;
      },
      getList() {
        //查询列表
        this.listLoading = true;
        this.api({
          url: "/hardware/repairmanList",
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
      showUpdate($index) {
        this.tempRepair = this.list[$index] || this.tempRepairDefault;
        this.tempRepair.filePath = this.tempRepair.porprait
        if($index>=0){
          this.dialogStatus = "update"
        }else{
          this.dialogStatus = "create"
        }
        this.dialogFormVisible = true          
      },
      createRepair() {
        //添加新维修员
        this.api({
          url: "/hardware/addrepair",
          method: "post",
          data: this.tempRepair
        }).then(() => {
          this.getList();
          this.dialogFormVisible = false
        })
      },
      changerecommendStatus($index,row) {
              let _vue = this;
              this.$confirm('确定更改此商品状态?', '提示', {
                confirmButtonText: '确定',
                showCancelButton: false,
                type: 'warning'
              }).then(() => {
                let goods = _vue.list[$index];
                goods.repairId = row.repairId
                goods.repairStatus = row.repairStatus;
                _vue.api({
                  url: "/hardware/updaterepairstatus",
                  method: "post",
                  data: goods
                }).then(() => {
                  _vue.getList()
                  _vue.$message.success("更改完成")
                }).catch(e => {
                  _vue.$message.error("更改失败")
                })
              })
            },
      updateRepair() {
        //修改用户信息
        let _vue = this;
        this.api({
          url: "/hardware/updaterepair",
          method: "post",
          data: this.tempRepair
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
      removeRepair($index) {
        let _vue = this;
        this.$confirm('确定删除此维修员?', '提示', {
          confirmButtonText: '确定',
          showCancelButton: false,
          type: 'warning'
        }).then(() => {
          let Repair = _vue.list[$index];
          _vue.api({
            url: "/hardware/deleteRepair",
            method: "post",
            data: Repair
          }).then(() => {
            _vue.$message.success("删除成功")
            _vue.getList()
          }).catch(() => {
            _vue.$message.error("删除失败")
          })
        })
      },
    }
  }
</script>
<style>
    .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
      border-color: #409EFF;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      line-height: 178px;
      text-align: center;
    }
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
  </style>
  