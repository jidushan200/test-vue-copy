<template>
  <div id="">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>分类数据集管理</span>
      </div>
      <el-form ref="form" :model="form" label-width="">
        <el-form-item label="数据集名称：">
          <div class="usr-input">
            <el-input v-model="form.name" placeholder="请输入"></el-input>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="medium" @click="addRowModel">+新增</el-button>
          <el-table
            :data="tableData"
            style="width: 100%"
            height="350">
            <el-table-column
              fixed
              prop="f1"
              label="数据集名称"
              width="150">
            </el-table-column>
            <el-table-column
              prop="f2"
              label="所属分类数量"
              width="">
            </el-table-column>
            <el-table-column
              prop="f3"
              label="说明"
              width="150">
            </el-table-column>
            <el-table-column
              prop="f4"
              label="更新时间"
              width="200">
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  type="primary"
                  size="mini"
                  @click="handleAdd(scope.$index, scope.row)">添加
                </el-button>
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">编辑
                </el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="block">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[10, 15, 20]"
              :page-size="10"
              layout="total, sizes, prev, pager, next, jumper"
              :total="6">
            </el-pagination>
          </div>
        </el-form-item>
      </el-form>
    </el-card>

    <!-- 新增对话框Form -->
    <el-dialog title="新增数据集" :visible.sync="addVisible">
      <el-form ref="dialogForm" :model="dialogForm" label-width="100px">
        <el-form-item label="数据及名称:">
          <el-input v-model="dialogForm.f1" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="所属分类:">
          <el-select v-model="dialogForm.f2" placeholder="请选择分类">
            <el-option label="分类一" value="shanghai"></el-option>
            <el-option label="分类二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="说明:">
          <el-input v-model="dialogForm.f3" placeholder="请输入"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addVisible = false">取 消</el-button>
        <el-button type="primary" @click="addVisible = false">保 存</el-button>
      </div>
    </el-dialog>

    <!-- 编辑对话框Form -->
    <el-dialog title="编辑数据集" :visible.sync="editVisible">
      <el-form ref="dialogForm" :model="dialogForm" label-width="100px">
        <el-form-item label="数据及名称:">
          <el-input v-model="dialogForm.f1" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="所属分类:">
          <el-select v-model="dialogForm.f2" placeholder="请选择分类">
            <el-option label="分类一" value="shanghai"></el-option>
            <el-option label="分类二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="说明:">
          <el-input v-model="dialogForm.f3" placeholder="请输入"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="resetForm('dialogForm')">取 消</el-button>
        <el-button type="primary" @click="editVisible = false">保 存</el-button>
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
        addVisible: false,
        editVisible: false,
        tableData: [
          {
            f1: '202107',
            f2: '投诉类：20；故障报修类：40；咨询类：100',
            f3: '这是一段说明',
            f4: '2018-12-03 23:23:18'
          },
          {
            f1: '客服三部典型',
            f2: '投诉类：10；举报类：40；咨询类：50',
            f3: '这是一段说明',
            f4: '2018-12-03 23:23:18'
          },
          {
            f1: '山东省7月份',
            f2: '投诉类：9；举报类：30；故障报修类：120',
            f3: '这是一段说明',
            f4: '2018-12-03 23:23:18'
          },
          {
            f1: '业务1',
            f2: '投诉类：3；表扬类：10；咨询类：100',
            f3: '这是一段说明',
            f4: '2018-12-03 23:23:18'
          },
          {
            f1: '业务2',
            f2: '投诉类：2；举报类：40；咨询类：150',
            f3: '这是一段说明',
            f4: '2018-12-03 23:23:18'
          },
          {
            f1: '投诉典型',
            f2: '投诉类：205',
            f3: '这是一段说明',
            f4: '2018-12-03 23:23:18'
          }
        ]
        ,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
        ,
        dialogForm: {
          f1: '',
          f2: '',
          f3: ''
        }
        ,
        currentPage4: 1
      }
    },
    methods: {
      addRowModel () {
        this.dialogForm =
          {
            f1: '',
            f2: '',
            f3: ''
          }
        this.addVisible = true
      }
      ,
      handleAdd (index, row) {

      },
      handleEdit (index, row) {
        this.dialogForm.f1 = row.f1
        this.dialogForm.f2 = row.f2
        this.dialogForm.f3 = row.f3
        this.editVisible = true
      },
      handleDelete (index, row) {

      },
      handleSizeChange (val) {
      },
      handleCurrentChange (val) {
      }
    }
  }
</script>

<style lang='less'>
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
