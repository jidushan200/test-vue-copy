<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-page-header style="" @back="goBack" content="分类历史模型启用">
        </el-page-header>
      </div>

      <el-form label-position="right" ref="form" :model="form">
        <el-row :gutter="24">
          <el-form-item>
            <el-col :span="6">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.f1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" style="text-align: center; width: 2%">-</el-col>
            <el-col :span="6">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.f2" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col :span="6">
              <el-button type="primary" size="medium">查询</el-button>
            </el-col>
          </el-form-item>
        </el-row>

        <el-row :gutter="24" style="margin-bottom: 10px;">
          <el-col :span="6" :offset="1">
            <el-button type="primary" size="medium">+ 新增训练</el-button>
            <el-button type="" size="medium">测试</el-button>
          </el-col>

        </el-row>

        <el-table
          ref="multipleTable"
          :data="tableData"
          style="width: 100%"
        >
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            sortable
            prop="f1"
            label="名称"
            width="200"
          />
          <el-table-column
            prop="f2"
            label="准确率"
            width="200"
            center
          />
          <el-table-column
            sortable
            prop="f3"
            label="启用状态"
            width="200"
          >
            <template slot-scope="scope">
              <div v-if="scope.row.f3==0"><span style="color: #F56C6C;margin-right: 5px;">●</span>未启用</div>
              <div v-if="scope.row.f3==1"><span style="color: #67C23A;margin-right: 5px;">●</span>启用</div>
            </template>
          </el-table-column>

          <el-table-column
            label="操作"
            width="200">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="editRow(scope.$index, tableData)"
                type="text"
                size="small">
                详情
              </el-button>
              <el-button
                @click.native.prevent="editRow(scope.$index, tableData)"
                type="text"
                size="small">
                启用
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

        <div class="block" style="margin-top: 15px">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="5"
            layout="total, sizes, prev, pager, next, jumper"
            :total="1">
          </el-pagination>
        </div>
      </el-form>
    </el-card>

  </div>
</template>

<script>
  export default {
    created () {
    },
    data () {
      return {
        form: {},
        tableData: [
          {
            f1: '20201212模型',
            f2: '50%',
            f3: '0'
          }
          ,
          {
            f1: '20210320模型',
            f2: '60%',
            f3: '0'
          },
          {
            f1: '20210707模型',
            f2: '80%',
            f3: '1'
          }
        ],
        currentPage: 4
      }
    },
    methods: {
      goBack () {
        this.$router.push('/claasiDataManage')
      },
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (val) {
        console.log(`当前页: ${val}`)
      },
    }
  }
</script>

<style lang="less" scoped>
  .el-progress {
    position: relative;
    line-height: 3;
  }

  .el-icon-styles {
    font-size: 45px;
    color: #00adff;
    cursor: pointer;
  }

  .el-dialog__body {
    border-top: 1px solid #ccc;
  }

  .el-row div {
    padding: 0;
  }

  .fr {
    float: right;
  }
</style>
