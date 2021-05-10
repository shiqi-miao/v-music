
<template>
        <div class="app-container">
          <div class="filter-container">
            <el-form>
              <el-form-item>
                <el-button type="success" icon="el-icon-plus" v-if="hasPerm('optionarea:groupadd')" @click="showCreate">添加运营区域组
                </el-button>
              </el-form-item>
            </el-form>
          </div>
          <el-table :data="list" v-loading.body="listLoading" element-loading-text="拼命加载中" border fit
                    highlight-current-row>
            <el-table-column align="center" label="运营区域号" :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
              <template slot-scope="scope">
                <span v-text="getIndex(scope.$index)"> </span>
              </template>
            </el-table-column>
            <el-table-column align="center" label="运营区域组名" prop="group_name" :xs="3" :sm="3" :md="3" :lg="3" :xl="3"></el-table-column>
            <el-table-column align="center" label="区域运营负责人" prop="area_manager" :xs="3" :sm="3" :md="3" :lg="3" :xl="3"></el-table-column>
            <el-table-column align="center"  label="负责区域" prop="area" :xs="6" :sm="6" :md="6" :lg="6" :xl="6"></el-table-column>
            <el-table-column align="center" label="管理面板" width="400px" v-if="hasPerm('optionarea:groupupdate') || hasPerm('optionarea:groupdelete') " :xs="9" :sm="9" :md="9" :lg="9" :xl="9">
              <template slot-scope="scope">
                <div>
                  <el-button type="success" icon="el-icon-edit" @click="showUpdate(scope.$index)" v-if="hasPerm('optionarea:groupupdate')">编辑
                  </el-button>
                  <el-button v-if="hasPerm('optionarea:groupdelete')" type="danger"
                             icon="el-icon-delete"
                             @click="removeArea(scope.$index)">
                    删除
                  </el-button>
                  <!-- <el-button type="primary" icon="el-icon-search" v-if="hasPerm('optionarea:groupupdate')">查看</el-button> -->
                </div>
              </template>
            </el-table-column>
          </el-table>
          <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" width="30%">
            <el-form class="small-space" :model="tempArea" label-position="left" label-width="150px"
                     style='margin-left:50px;'>
              <el-form-item label="运营区域组名称" required :xs="24" :sm="24" :md="12" :lg="12" :xl="12"> 
                <el-input type="text" v-model="tempArea.group_name" style="width: 80%;">
                </el-input>
              </el-form-item>
              <el-form-item label="选择运营区域" required :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <div>{{areasText.areaContext}}</div>
                    <el-cascader size="large" :options="options" style="width: 80%;" v-model="selectedOptions" @change="handleChange"></el-cascader>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button v-if="dialogStatus=='create'" type="success" :plain="true" @click="createArea">创 建</el-button>
              <el-button type="primary" v-else @click="updateArea">修 改</el-button>
            </div>
          </el-dialog>
        </div>
      </template>
      <script> 
        import {mapGetters} from 'vuex'
        import {regionDataPlus ,CodeToText} from 'element-china-area-data'
        export default {
          data() {
            return {
              options: regionDataPlus,
              selectedOptions: [],
              list: [],//表格的数据
              allPermission: [],
              listLoading: false,//数据加载等待动画
              dialogStatus: 'create',
              dialogFormVisible: false,
              textMap: {
                update: '编辑',
                create: '新建运营区域组'
              },
              tempArea: {
                group_name: '',
                areaContext: []
              },
              areas:[],
              areasText:{
                areasText:'',
                groupId:'',
                group_name:''
              }            
            }
          },
          created() {
            this.getList();
          },
          computed: {
            ...mapGetters([
              'userId','roleId'
            ])
          },
          methods: {
            removeArea($index) {
              let _vue = this;
              this.tempArea.groupId = this.list[$index].groupId;
              this.$confirm('确定删除此区域分组?', '提示', {
                confirmButtonText: '确定',
                showCancelButton: false,
                type: 'warning'
              }).then(() => {
                let area = _vue.tempArea
                area.deleteStatus = '0';
                _vue.api({
                  url: "/operation/updateOptionArea",
                  method: "post",
                  data: area
                }).then(() => {
                  _vue.getList()
                }).catch(() => {
                  _vue.$message.error("删除失败")
                })
              })
            },
            handleChange (value) {
                var areaText = value[2] ?CodeToText[value[0]] +CodeToText[value[1]]+CodeToText[value[2]]
                :value[1]?CodeToText[value[0]] +CodeToText[value[1]]+'所有区':value[0]?CodeToText[value[0]]+'所有市':'全国'
                ;
                var area =value[2]||CodeToText[value[2]] == '全部'?
                    {
                        "sheng":value[0],
                        "sheng_name":CodeToText[value[0]],
                        "shi":value[1],
                        "shi_name":CodeToText[value[1]],
                        "qu":value[2],
                        "qu_name":CodeToText[value[2]]
                    }:value[1]||CodeToText[value[1]] == '全部'?{
                        "sheng":value[0],
                        "sheng_name":CodeToText[value[0]],
                        "shi":value[1],
                        "shi_name":CodeToText[value[1]]
                    }:{
                        "sheng":value[0],
                        "sheng_name":CodeToText[value[0]],
                    } 
                ;
               this.areas.push(area);     
                this.areasText.areaContext == '' ?areaText:this.areasText.areaContext = this.areasText.areaContext.indexOf(areaText) == -1?this.areasText.areaContext+' , '+areaText:this.areasText.areaContext;          
                this.tempArea.areaContext = this.areas
            },
            getList() {
              //查询列表
              this.listLoading = true;
              this.api({
                url: "/operation/listOptionArea",
                method: "get"
              }).then(data => {
                this.listLoading = false;
                this.list = data.list;
              })
            },
            getIndex($index) {
              //表格序号
              return $index + 1
            },
            showCreate() {
              //显示新增对话框
              this.tempArea.group_name = '';
              this.tempArea.areaContext = [];
              this.areasText = '';
              this.areas = [];
              this.selectedOptions = [];
              this.dialogStatus = "create"
              this.dialogFormVisible = true
            },            
            showUpdate($index) {
              let area = this.list[$index];
              this.tempArea.group_name = area.group_name;
              this.areasText.areaContext = area.area == undefined || ''? '' :area.area ;
              this.tempArea.groupId = area.groupId;
              this.tempArea.areaContext = area.area;
              this.dialogStatus = "update"
              this.dialogFormVisible = true
            },
            open4() {
              this.$message.error('不能为空！！');
            },
            createArea() {
              //添加新区域分组
             if(this.tempArea.group_name != ''&&this.tempArea.areaContext != []) {
              this.api({
                url: "/operation/addOptionArea",
                method: "post",
                data: this.tempArea               
              }).then(() => {
                this.getList();
                this.dialogFormVisible = false
              })}else{
                  this.open4();
              }
            },
            updateArea() {
              //修改区域分组
              this.deleteStatus="1";
              this.api({
                url: "/operation/updateOptionArea",
                method: "post",
                data: this.tempArea
              }).then(() => {
                this.getList();
                this.dialogFormVisible = false
              })
            }
        }
    }
      </script>
      <style scoped>
        .requiredPerm {
          color: #ff0e13;
        }
      </style>
      