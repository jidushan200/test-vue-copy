<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-page-header style="" @back="goBack" content="模型分类处理">
        </el-page-header>
      </div>

      <el-form label-width="140px" label-position="right" ref="form" :model="form">
        <el-form-item label="训练执行时间：" prop="f1">
          <span>{{form.f1}}</span>
        </el-form-item>
        <el-form-item label="选择数据集:" prop="f2">
          <el-select v-model="form.f2" placeholder="请选择数据集">
            <el-option label="数据集一" value="1"></el-option>
            <el-option label="数据集二" value="2"></el-option>
            <el-option label="数据集三" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-row :gutter="12">
          <el-col :offset="10">
            <el-button type="primary" size="medium" @click="startTest">开始测试</el-button>
          </el-col>
        </el-row>
      </el-form>
      <el-divider></el-divider>
      <el-form label-position="top" style="margin-left: 30px;">
        <el-form-item label="测试进度：">
          <el-row :gutter="12">
            <el-col :offset="2" :span="10">
              <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="测试结果：">
          <el-row :gutter="24">
            <el-col :offset="2">
              <el-tag
                type=""
                effect="plain">
                分类准确率&nbsp;&nbsp;75%
              </el-tag>
              <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  prop="f1"
                  label="工单号"
                  width="180"
                >
                </el-table-column>
                <el-table-column
                  prop="f2"
                  label="标注"
                  width="180"
                >
                </el-table-column>
                <el-table-column
                  prop="f3"
                  label="分类"
                  width="180"
                >
                </el-table-column>
                <el-table-column
                  prop="f4"
                  label="得分"
                  width="180"
                >
                </el-table-column>
              </el-table>
            </el-col>
          </el-row>
        </el-form-item>
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
        form: {
          f1: '2018.12.03 18:00:20',
          f2: '2',
        }
        ,
        tableData: [
          {
            f1: '201901051',
            f2: '投诉类',
            f3: '投诉类',
            f4: '0.7'
          }
          ,
          {
            f1: '201901052',
            f2: '咨询类',
            f3: '咨询类',
            f4: '0.5'
          }
          ,
          {
            f1: '201901053',
            f2: '举报类',
            f3: '咨询类',
            f4: '0.8'
          }
        ]
      }
    },
    methods: {
      goBack () {
        this.$router.push('/claasiDataManage')
      },
      startTest () {

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
