<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-page-header style="" @back="goBack" content="分类数据处理">
        </el-page-header>
      </div>

      <el-form label-width="100px" label-position="right" ref="form" :model="form">
        <el-row :gutter="24">
          <el-form-item label="训练执行时间：">
            <el-col :span="6">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.f1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="1" style="text-align: center;">-</el-col>
            <el-col :span="6">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.f2" style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>
        </el-row>

        <el-row :gutter="24" style="margin-bottom: 10px;">
          <el-col :span="6" :offset="1">
            <el-button type="primary" size="medium" @click="addRowModel">+ 新增训练</el-button>
            <el-button type="" size="medium" @click="testModel">测试</el-button>
          </el-col>

          <el-col :span="9" :offset="8">
            <el-radio-group v-model="radio2" size="medium">
              <el-radio-button label="全部"></el-radio-button>
              <el-radio-button label="训练中"></el-radio-button>
              <el-radio-button label="训练完成"></el-radio-button>
              <el-radio-button label="训练失败"></el-radio-button>
            </el-radio-group>
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
            label="训练执行时间"
            width="200"
          />
          <el-table-column
            prop="f2"
            label="使用训练集"
            width="150"
            center
          />
          <el-table-column
            prop="f3"
            label="阈值"
            width="150"
          >
          </el-table-column>
          <el-table-column
            sortable
            prop="f4"
            label="分类准确率"
            width="150"
          >
          </el-table-column>
          <el-table-column
            sortable
            prop="f5"
            label="训练状态"
            width="150"
          >
            <template slot-scope="scope">
              <div v-if="scope.row.f5==0"><span style="color: #F56C6C;margin-right: 5px;">●</span>训练失败</div>
              <div v-if="scope.row.f5==1"><span style="color: #67C23A;margin-right: 5px;">●</span>训练成功</div>
              <div v-if="scope.row.f5==2"><span style="color: #409EFF;margin-right: 5px;">●</span>训练中</div>
            </template>
          </el-table-column>

          <el-table-column
            sortable
            prop="f6"
            label="启用状态"
            width="150"
          >
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.f6"
                active-text="启用"
              ></el-switch>
            </template>
            >
          </el-table-column>

          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="danger"
                @click="deleteRow(scope.$index, scope.row)">删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-form>
    </el-card>

    <!-- 新增对话框Form -->
    <el-dialog title="新增训练任务" :visible.sync="addVisible">
      <el-form ref="dialogForm" :model="dialogForm" label-width="100px">
        <el-form-item label="选择数据集:" prop="f1">
          <el-select v-model="dialogForm.f1" placeholder="请选择数据集">
            <el-option label="数据集一" value="v1"></el-option>
            <el-option label="数据集二" value="v2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="分类信息:" prop="f2">
          <el-radio-group v-model="dialogForm.f2">
            <el-radio label="1">投诉类</el-radio>
            <el-radio label="2">举报类</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="训练轮数:" prop="f3">
          <el-progress
            style="width: 35%; display: inline-block;"
            :percentage="percentage"
            :format="format"
            :color="customColor"></el-progress>
          <el-input-number
            style="width: 15%; display: inline-block;"
            v-model="num"
            controls-position="right"
            @change="handleChange"
            :min="1"
            :max="10"
            size="small"
          >
          </el-input-number>
        </el-form-item>
        <el-form-item label="训练文本长度:">
          <el-input v-model="dialogForm.f4" style="width: 15%" placeholder="请输入"></el-input>
          字
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addVisible = false">取 消</el-button>
        <el-button type="primary" @click="addVisible = false">保 存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    created () {
      this.titleEnable = this.$route.query.opera
    },
    data () {
      return {
        num: 5,
        radio2: '全部',
        form: {
          f1: '',
          f2: '',
        },
        tableData: [
          {
            f1: '2018.12.03 18:00:20',
            f2: '数据集1',
            f3: '0.3',
            f4: '--',
            f5: '2',
            f6: false
          },
          {
            f1: '2018.12.04 18:00:20',
            f2: '数据集2',
            f3: '0.4',
            f4: '--',
            f5: '0',
            f6: false
          },
          {
            f1: '2018.12.06 18:00:20',
            f2: '数据集1',
            f3: '0.5',
            f4: '50%',
            f5: '1',
            f6: false
          },
          {
            f1: '2018.12.05 18:00:20',
            f2: '数据集1',
            f3: '0.6',
            f4: '55%（数据集2）',
            f5: '1',
            f6: true
          },
          {
            f1: '2018.12.07 18:00:20',
            f2: '数据集1',
            f3: '0.7',
            f4: '50%',
            f5: '1',
            f6: false
          }
        ],
        dialogForm: {
          f1: '数据集一',
          f2: '1',
          f3: '',
          f4: '2400',
          f5: '',
          f6: '',
          f7: '',
          f8: ''
        },
        addVisible: false,
        percentage: 50,
        customColor: '#409eff',
      }
    },
    methods: {
      handleChange (value) {
        this.percentage = value * 10
      },
      addRowModel () {
        this.addVisible = true
      },
      testModel () {
        this.$router.push("/modelClassiHandle")
      },
      goBack () {
        this.$router.push('/claasiDataManage')
      },
      handleSizeChange (val) {
      },
      handleCurrentChange (val) {
      },

      format (percentage) {
        return percentage / 10
      }
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
</style>
