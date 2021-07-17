<template>
  <div id="">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>复杂业务模型管理</span>
      </div>
      <el-form label-width="">
        <el-form-item>
          <el-row :gutter="24">
            <el-col :span="6" :offset="0">
              <el-button type="primary" size="mini" @click="addModels">+ 新增</el-button>
              <el-button type="" size="mini">即时测试</el-button>
            </el-col>
            <el-col :span="6" :offset="9">
              <el-button type="" size="mini">导入</el-button>
              <el-button type="" size="mini">导出</el-button>
              <el-button type="success" size="mini">样例下载</el-button>
            </el-col>
          </el-row>

          <el-table
            highlight-current-row
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%;"
            @selection-change="handleSelectionChange"
          >
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              type="index"
              label="序号"
              width="70">
            </el-table-column>
            <el-table-column
              prop="f1"
              label="质检模型名称"
              width="200">
            </el-table-column>
            <el-table-column
              prop="f2"
              label="模型类别"
              width="150"
            >
            </el-table-column>
            <el-table-column
              prop="f3"
              label="状态"
              width="150"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              sortable
              prop="f3"
              label="状态"
              width="150"
            >
              <template slot-scope="scope">
                <div v-if="scope.row.f3==0"><span style="color: #F56C6C;margin-right: 5px;">●</span>未生效</div>
                <div v-if="scope.row.f3==1"><span style="color: #67C23A;margin-right: 5px;">●</span>生效</div>
                <div v-if="scope.row.f3==2"><span style="color: #409EFF;margin-right: 5px;">●</span>编辑中</div>
              </template>
            </el-table-column>

            <el-table-column
              prop="f4"
              label="生效时间"
              width="200"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              label="操作"
              width="200">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="editRow(scope.$index, tableData)"
                  type="text"
                  size="small">
                  编辑
                </el-button>
                <el-button
                  @click.native.prevent="submitRow(scope.$index, tableData)"
                  type="text"
                  size="small">
                  提交
                </el-button>
                <el-button
                  @click.native.prevent="deleteRow(scope.$index, tableData)"
                  type="text"
                  size="small">
                  删除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="block fr" style="margin-top: 15px;">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[10, 15, 20]"
              :page-size="10"
              layout="total, sizes, prev, pager, next, jumper"
              :total="7">
            </el-pagination>
          </div>
        </el-form-item>
      </el-form>
    </el-card>

    <!--模型导航 对话框-->
    <el-dialog width="35%" title="新增模型" :visible.sync="addModelVisible">
      <el-form :model="dialogForm">
        <el-form-item label="选择编辑模式 : ">
          <el-radio-group v-model="dialogForm.type">
            <el-radio label="1">可视化模型</el-radio>
            <el-radio label="2">高级模型</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addModelVisible = false">取 消</el-button>
        <el-button type="primary" @click="selectModel">下一步</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  // @ is an alias to /src
  export default {
    name: '',
    components: {},
    data () {
      return {
        dialogForm: {
          type: ''
        },
        addModelVisible: false,
        tableData: [
          {
            f1: '未核实户主证件号码和卡号',
            f2: '投诉',
            f3: '1',
            f4: '2020-06-11 19:57:42',
          }
          ,
          {
            f1: '未说开头语',
            f2: '密码解锁',
            f3: '1',
            f4: '2020-07-22 10:59:47',
          },
          {
            f1: '未核实是否清楚密码和没有温馨提醒',
            f2: '通用规则',
            f3: '1',
            f4: '2020-06-12 21:41:53',
          },
          {
            f1: '账单分期未提醒客户查收短信',
            f2: '投诉',
            f3: '1',
            f4: '2020-06-14 18:04:56',
          },
          {
            f1: '未安抚客户情绪',
            f2: '通用规则',
            f3: '1',
            f4: '2020-06-24 14:52:31',
          },
          {
            f1: '客户被盗坐席未协助报警',
            f2: '临时挂失',
            f3: '1',
            f4: '2020-07-22 10:59:47',
          },
          {
            f1: '客户被盗坐席未协助报警',
            f2: '投诉',
            f3: '1',
            f4: '2020-07-22 10:59:50',
          }
        ],
        currentPage: 1
      }
    },
    methods: {
      selectModel () {
        if (this.dialogForm.type == 1) {
          this.$router.push('/visualModel')
        } else if (this.dialogForm.type == 2) {
          this.$router.push('/highLevelModel')
        }
        this.addModelVisible = false
      },
      addModels () {
        this.addModelVisible = true
      },

      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      addRow (index, row) {
        this.$router.push({
          path: '/stopWordConfiguration/opera?opera=add',
        })
      },
      editRow (index, row) {
        this.$router.push({
          path: '/stopWordConfiguration/opera?opera=edit',
        })
      },
      submitRow (index, row) {
        console.log('提交成功')
      },
      deleteRow (index, row) {
        alert('删除')
        console.log(index)
        console.log(row)
      },
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (val) {
        console.log(`当前页: ${val}`)
      }
    }
  }
</script>

<style lang='less'>
  .fr {
    float: right;
  }

  .el-main {
    padding: 10px;
  }

  .usr-input {
    width: 160px;
    display: inline-block;
  }

  /*table边框*/
  .el-table::before {
    height: 0;
  }

  .el-table__fixed-right::before, .el-table__fixed::before {
    height: 0;
  }
</style>
