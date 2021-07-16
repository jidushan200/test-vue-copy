<template>
  <div id="">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>停用词配置</span>
      </div>
      <el-form ref="form" :model="form" label-width="">
        <el-form-item>
          <el-row :gutter="24">
            <el-col :span="3" :offset="0">
              <el-button type="primary" size="mini" @click="addRow">+ 新增</el-button>
            </el-col>
            <el-col :span="6" :offset="15">
              <el-button type="" size="mini">导入</el-button>
              <el-button type="" size="mini">导出</el-button>
              <el-button type="success" size="mini">模板下载</el-button>
            </el-col>
          </el-row>

          <el-table
            highlight-current-row
            height="300"
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
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
              label="词表名称"
              width="120">
            </el-table-column>
            <el-table-column
              prop="f2"
              label="词表内容"
              width="200"
            >
              <template slot-scope="scope">
                <el-tag size="mini">{{ scope.row.f21 }}</el-tag>
                <el-tag size="mini">{{ scope.row.f22 }}</el-tag>
                <el-tag size="mini">{{ scope.row.f23 }}</el-tag>
                <el-tag size="mini">{{ scope.row.f24 }}</el-tag>
                <el-tag size="mini">{{ scope.row.f25 }}</el-tag>
                <el-tag size="mini">{{ scope.row.f26 }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column
              prop="f3"
              label="说明"
              width="200"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="f4"
              label="创建时间"
              width="200"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              label="操作"
              width="120">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="editRow(scope.$index, tableData)"
                  type="text"
                  size="small">
                  编辑
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
          <div class="block fr">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[5, 10, 15, 20]"
              :page-size="5"
              layout="total, sizes, prev, pager, next, jumper"
              :total="1">
            </el-pagination>
          </div>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  // @ is an alias to /src
  export default {
    name: '',
    components: {},
    data () {
      return {
        tableData: [
          {
            f1: '语气词',
            f21: '呢',
            f22: '哈',
            f23: '哦',
            f24: '呃',
            f25: '嗯',
            f26: '呀',
            f3: '停用词修改',
            f4: '2021-7-14 10:29:01'
          }
        ],
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      }
    },
    methods: {
      addRow (index, row) {
        this.$router.push({
          path: "/stopWordConfiguration/opera?opera=add",
        })
      },
      editRow (index, row) {
        this.$router.push({
          path: "/stopWordConfiguration/opera?opera=edit",
        })
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
