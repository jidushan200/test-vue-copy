<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>流程节点推荐明细</span>
      </div>
      <el-form ref="ruleForm" :model="ruleForm" label-width="80px">
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item label="工单编号" prop="name">
              <el-input v-model="ruleForm.name">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="分中心" prop="region">
              <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                <el-option label="南中心" value="shanghai"></el-option>
                <el-option label="北中心" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="客服部门" prop="name">
              <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                <el-option label="客服部门1" value="kf1"></el-option>
                <el-option label="客服部门2" value="kf2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item label="来电号码" prop="name">
              <el-input v-model="ruleForm.number">
              </el-input>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="业务类型" prop="region">
              <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                <el-option label="业务类型1" value="yewuleixing1"></el-option>
                <el-option label="业务类型2" value="yewuleixing2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="12">
          <el-form-item label="活动时间">
            <el-col :span="6">
              <el-form-item prop="date1">
                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                                style="width: 100%;"/>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="1">-</el-col>
            <el-col :span="6">
              <el-form-item prop="date2">
                <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"/>
              </el-form-item>
            </el-col>
          </el-form-item>
        </el-row>
        <el-row :gutter="24">
          <el-col :offset="16">
            <el-form-item>
              <el-button size="medium" type="primary" @click="submitForm('ruleForm')">提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          prop="f7"
          label="工单编号"
          width="170"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="f8"
          label="推送流程数量"
          align="center"
          width="120">
        </el-table-column>
        <el-table-column
          label="推送场景名称"
          width="300">
          <template slot-scope="scope">
            <el-tag size="medium">{{ scope.row.f6 }}</el-tag>
            <el-tag size="medium">{{ scope.row.f6 }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="f10"
          label="受理客服工号"
          width="170"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">调听
            </el-button>
          </template>
        </el-table-column>

      </el-table>
      <!--      <div style="margin-top: 20px">-->
      <!--        <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>-->
      <!--        <el-button @click="toggleSelection()">取消选择</el-button>-->
      <!--      </div>-->
    </el-card>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          number: ''
        },
        tableData: [
          {
            f6: '客户反映有人盗窃变电设施等情况',
            f7: '2021071357776050',
            f8: '2',
            f9: '客户反映有人盗取输电线路情况',
            f10: '02005564',
          },
          {
            f6: '客户询问重要客户认定、变更、取消等相关问题',
            f7: '2021071357772280',
            f8: '2',
            f9: '客户查询电费、电量以及电费违约金等相关信息',
            f10: '02008677',
          },
          {
            f6: '客户反映有人盗窃变电设施等情况',
            f7: '2021071357776050',
            f8: '2',
            f9: '客户反映有人盗取输电线路情况',
            f10: '02005564',
          },
          {
            f6: '客户询问重要客户认定、变更、取消等相关问题',
            f7: '2021071357772280',
            f8: '2',
            f9: '客户查询电费、电量以及电费违约金等相关信息',
            f10: '02008677',
          },
          {
            f6: '客户反映有人盗窃变电设施等情况',
            f7: '2021071357776050',
            f8: '2',
            f9: '客户反映有人盗取输电线路情况',
            f10: '02005564',
          },
          {
            f6: '客户询问重要客户认定、变更、取消等相关问题',
            f7: '2021071357772280',
            f8: '2',
            f9: '客户查询电费、电量以及电费违约金等相关信息',
            f10: '02008677',
          },
          {
            f6: '客户反映有人盗窃变电设施等情况',
            f7: '2021071357776050',
            f8: '2',
            f9: '客户反映有人盗取输电线路情况',
            f10: '02005564',
          },
          {
            f6: '客户询问重要客户认定、变更、取消等相关问题',
            f7: '2021071357772280',
            f8: '2',
            f9: '客户查询电费、电量以及电费违约金等相关信息',
            f10: '02008677',
          }
        ],
        multipleSelection: []
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      },

      toggleSelection (rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row)
          })
        } else {
          this.$refs.multipleTable.clearSelection()
        }
      },
      handleSelectionChange (val) {
        this.multipleSelection = val
      },

      handleEdit (index, row) {
        console.log(index, row)
      },

      onSubmit () {
        console.log('submit!')
      }
    }
  }
</script>

<style lang="less" scoped>
  .fr {
    float: right;
  }
</style>
