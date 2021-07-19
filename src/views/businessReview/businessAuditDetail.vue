<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-page-header style="" @back="goBack" content="质检模型审核详情">
        </el-page-header>
      </div>

      <el-form label-width="100px" label-position="right" ref="form" :model="form">
        <el-row :gutter="24">
          <el-col :span="12" :offset="0">
            <el-form-item label="审核类型：" prop="f1">
              <span v-text="form.f1">质检模型</span>
            </el-form-item>
          </el-col>
          <el-col :span="12" :offset="0">
            <el-form-item label="提交人：" prop="f2">
              <span v-text="form.f2">ducooajfp</span>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="24">
          <el-col :span="12" :offset="0">
            <el-form-item label="审核事项：" prop="f3">
              <p v-text="form.f3">临时挂失未提醒有效期及办理正式挂失</p>
            </el-form-item>
          </el-col>
          <el-col :span="12" :offset="0">
            <el-form-item label="提交时间：" prop="f4">
              <p v-text="form.f4">ducooajfp</p>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="24">
          <el-col :span="12" :offset="0">
            <el-form-item label="事项说明：" prop="f5">
              <p v-text="form.f5">删除</p>
            </el-form-item>
          </el-col>
          <el-col :span="12" :offset="0">
            <el-form-item label="审核时间：" prop="f6">
              <p v-text="form.f6">2021-03-25 14:41:42</p>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="24">
          <el-col :span="12" :offset="0">
            <el-form-item label="所属类别：" prop="f7">
              <p v-text="form.f7">临时挂失</p>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="24">
          <el-col :span="24" :offset="0">
            <el-form-item label="模型内容：" prop="f8">
              <el-input :disabled="true" v-model="form.f8" type="textarea" rows="7"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="24">
          <el-col :span="12" :offset="0">
            <el-form-item label="质检对象：" prop="f9">
              <p v-text="form.f9">双方</p>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="24">
          <el-col :span="12" :offset="0">
            <el-form-item label="审核结果：" prop="f10">
              <p v-text="form.f10">双方</p>
            </el-form-item>
          </el-col>
          <el-col :span="12" :offset="0">
            <el-form-item label="审核人：" prop="f11">
              <p v-text="form.f11">ducooajfp</p>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="24">
          <el-col :span="12" :offset="0">
            <el-form-item label="审核意见：" prop="f12">
              <p v-text="form.f12"></p>
            </el-form-item>
          </el-col>
        </el-row>
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
        form: {
          f1: '质检模型',
          f2: 'ducooajfp',
          f3: '临时挂失未提醒有效期及办理正式挂失',
          f4: 'ducooajfp',
          f5: '删除',
          f6: '2021-03-25 14:41:42',
          f7: '临时挂失',
          f8: '{\n' +
            '    p1_history:{\n' +
            '      "h1_01":"",\n' +
            '      "h1_01":"",\n' +
            '      "h1_01":""\n' +
            '      "h1_01":"",\n' +
            '      "h1_01":"",\n' +
            '      "h1_01":""\n' +
            '      "h1_01":"",\n' +
            '      "h1_01":"",\n' +
            '      "h1_01":""\n' +
            '      "h1_01":"",\n' +
            '      "h1_01":"",\n' +
            '      "h1_01":""\n' +
            '      "h1_01":"",\n' +
            '      "h1_01":"",\n' +
            '      "h1_01":""\n' +
            '      "h1_01":"",\n' +
            '      "h1_01":"",\n' +
            '      "h1_01":""\n' +
            '    }\n' +
            '  }',
          f9: '双方',
          f10: '双方',
          f11: 'ducooajfp',
          f12: '无',
        }
      }
    },
    methods: {
      goBack () {
        this.$router.push('/businessReview')
      }
    }
  }
</script>

<style scoped>
p{
  margin: 0;
}
</style>
