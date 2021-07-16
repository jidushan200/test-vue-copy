<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-page-header style="" @back="goBack" :content="this.titleEnable=='add'?'新增停用词表':'编辑停用词表'">
        </el-page-header>
      </div>
      <el-form label-width="100px" label-position="right" ref="form" :model="form">
        <el-form-item label="词组名称：">
          <el-input v-model="form.f1"></el-input>
        </el-form-item>
        <el-form-item label="说明：">
          <el-input
            type="textarea"
            :rows="3"
            placeholder="请输入内容"
            v-model="form.f2">
          </el-input>
        </el-form-item>
        <el-button type="primary" size="medium">+新增</el-button>
        <el-table
          :data="this.titleEnable=='add'?addTableData:tableData"
          style="width: 100%"
        >
          <el-table-column
            type="index"
            label="序号"
            width="150">
          </el-table-column>
          <el-table-column
            prop="f1"
            label="停用词"
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
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                type="primary"
                size="mini"
                @click="addRow(scope.$index, scope.row)">添加
              </el-button>
              <el-button
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
          f2: ''
        },
        tableData: [
          {
            f21: '呢',
            f22: '哈',
            f23: '哦',
            f24: '呃',
            f25: '嗯',
            f26: '呀',
          }
        ],
        addTableData: []
      }
    },
    methods: {
      goBack () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>

</style>
