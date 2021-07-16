<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-page-header style="" @back="goBack" content="分类数据导入导出">
        </el-page-header>
      </div>

      <el-tag
        type="info"
        effect="plain"
        style="margin-bottom: 15px;"
      >
        数据集：202107投诉类
      </el-tag>

      <el-form label-width="100px" label-position="right" ref="form" :model="form">
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item label="工单编号:" prop="f1">
              <el-input v-model="form.f1">
              </el-input>
            </el-form-item>
          </el-col>
          <el-row :gutter="12">
            <el-form-item label="上传时间：">
              <el-col :span="6">
                <el-form-item prop="f2">
                  <el-date-picker type="date" placeholder="选择日期" v-model="form.f2"
                                  style="width: 100%;"/>
                </el-form-item>
              </el-col>
              <el-col :span="1" style="text-align: center;">至</el-col>
              <el-col :span="6">
                <el-form-item prop="f3">
                  <el-date-picker type="date" placeholder="选择日期" v-model="form.f3" style="width: 100%;"/>
                </el-form-item>
              </el-col>
            </el-form-item>
          </el-row>
        </el-row>

        <el-row :gutter="24" style="margin-bottom: 15px;">
          <el-col :span="6" :offset="20">
            <el-button type="primary" size="mini">查询</el-button>
            <el-button size="mini" @click="this.$refs['form'].resetFields()">重置</el-button>
          </el-col>
        </el-row>

        <el-row :gutter="24">
          <el-col :span="6" :offset="0">
            <el-button type="danger" size="mini">删除</el-button>
          </el-col>

          <el-col :span="6" :offset="12">
            <el-button type="" size="mini">导入</el-button>
            <el-button type="" size="mini">导出</el-button>
            <el-button type="success" size="mini">模板下载</el-button>
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
            prop="f1"
            label="工单号"
            width="200"
          />
          <el-table-column
            prop="f2"
            label="录音文件名称"
            width="200"
          />
          <el-table-column
            prop="f3"
            label="是否匹配录音"
            width="200"
          />
          <el-table-column
            prop="f4"
            label="工单时间"
            width="200"
          />

          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                type="primary"
                size="mini"
                @click="editRow(scope.$index, scope.row)">编辑
              </el-button>
              <el-button
                size="mini"
                type="danger"
                @click="deleteRow(scope.$index, scope.row)">删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>

        <el-form-item style="margin-top: 10px;" label-width="0">
          <el-row>
            <el-col :span="6" :offset="-6">
              <el-button type="" size="medium">取消</el-button>
              <el-button type="primary" size="medium">保存</el-button>
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
        titleEnable: null,
        form: {
          f1: '',
          f2: '',
          f3: ''
        },
        tableData: [
          {
            f1:'1000001',
            f2:'0101.wav',
            f3:'是',
            f4:'2018.12.03 23:23:18',
          },
          {
            f1:'1000002',
            f2:'110101.wav',
            f3:'是',
            f4:'2018.12.03 23:23:18',
          },
          {
            f1:'1000003',
            f2:'\\home\\etc\\1039.wav',
            f3:'是',
            f4:'2018.12.03 23:23:18',
          },
          {
            f1:'1000004',
            f2:'\\home\\etc\\1039.wav',
            f3:'否',
            f4:'2018.12.03 23:23:18',
          },
          {
            f1:'1000005',
            f2:'\\home\\etc\\1039.wav',
            f3:'否',
            f4:'2018.12.03 23:23:18',
          }
        ],
      }
    },
    methods: {
      goBack () {
        this.$router.push('/claasiDataManage')
      }
    }
  }
</script>

<style scoped>

</style>

