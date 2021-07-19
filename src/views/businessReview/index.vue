<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>质检业务审核</span>
      </div>
      <el-form label-width="100px" label-position="right" ref="form" :model="form">
        <el-row>
          <el-col :span="6">
            <el-form-item label="审核类型:" prop="f1">
              <el-select v-model="queryForm.f1" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="审核类型:" prop="f1">
              <el-input v-model="queryForm.f2"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-form-item label="活动时间">
            <el-col :span="6">
              <el-date-picker type="date" placeholder="开始日期" v-model="queryForm.f3"
                              style="width: 100%;">
              </el-date-picker>
            </el-col>
            <el-col class="line" :span="1" style="text-align: center;">-</el-col>
            <el-col :span="6">
              <el-date-picker type="date" placeholder="结束日期" v-model="queryForm.f4"
                              style="width: 100%;">
              </el-date-picker>
            </el-col>
          </el-form-item>
        </el-row>

        <el-row :gutter="24" style="margin-bottom: 10px;">
          <el-col :span="6" :offset="3">
            <el-button type="primary" size="mini">查询</el-button>
            <el-button size="mini" @click="this.$refs['form'].resetFields()">重置</el-button>
          </el-col>
          <el-col :span="6" :offset="9">
            <el-radio-group v-model="radio2" size="medium">
              <el-radio-button label="全部"></el-radio-button>
              <el-radio-button label="已审核"></el-radio-button>
              <el-radio-button label="待审核"></el-radio-button>
            </el-radio-group>
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
            align="center"
            prop="f1"
            label="审核类型"
            width="200">
          </el-table-column>
          <el-table-column
            align="center"
            prop="f2"
            label="审核事项"
            width="100"
          >
          </el-table-column>
          <el-table-column
            align="center"
            prop="f3"
            label="审核说明"
            width="120"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            align="center"
            sortable
            prop="f3"
            label="状态"
            width="120"
          >
            <template slot-scope="scope">
              <div v-if="scope.row.f3==0"><span style="color: #F56C6C;margin-right: 5px;">●</span>未生效</div>
              <div v-if="scope.row.f3==1"><span style="color: #67C23A;margin-right: 5px;">●</span>生效</div>
              <div v-if="scope.row.f3==2"><span style="color: #409EFF;margin-right: 5px;">●</span>编辑中</div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="f4"
            label="接收时间"
            width="200"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            align="center"
            label="操作"
            width="200">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="detailRow(scope.$index, scope.row)"
                type="text"
                size="small">
                详情
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
            :total="tableData.length">
          </el-pagination>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  export default {
    created () {
      this.titleEnable = this.$route.query.opera
    },
    data () {
      return {
        currentPage4: 1,
        radio2: '全部',
        titleEnable: null,
        queryForm: {},
        form: {
          f1: '',
          f2: '',
          f3: ''
        },
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
      }
    },
    methods: {
      goBack () {
        this.$router.push('/claasiDataManage')
      },
      handleSizeChange (val) {
      },
      handleCurrentChange (val) {
      },
      detailRow (index, row) {
        this.$router.push('/businessReview/detail')
      }
    }
  }
</script>

<style lang="less" scoped>
  .el-icon-styles {
    font-size: 45px;
    color: #00adff;
    cursor: pointer;
  }
</style>
