<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-page-header style="" @back="goBack" content="新增知识">
        </el-page-header>
      </div>


      <el-card>
        <div slot="header" class="clearfix">
          <span>问题属性</span>
        </div>
        <el-form ref="form" :model="form" label-width="100px">
          <el-row :gutter="24">
            <el-col :span="12">
              <el-form-item label="意图名称:">
                <el-input v-model="form.f1"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="有效期:">
                <el-radio-group v-model="form.f2">
                  <el-radio label="永久有效"></el-radio>
                  <el-radio label="自定义"></el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="24">
            <el-col :span="12">
              <el-form-item label="标准问:">
                <el-input v-model="form.f3"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="24">
            <el-col :span="12">
              <el-form-item label="领域分类:">
                <el-select v-model="form.f4" placeholder="请选择">
                  <el-option label="分类一" value="1"></el-option>
                  <el-option label="分类二" value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="启用状态：">
                <el-switch active-text="启用" v-model="form.f5"></el-switch>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-card>

      <el-card style="margin-top: 3%;">
        <div slot="header" class="clearfix">
          <span>推荐话术</span>
        </div>
        <el-form style="width: 40%;border-right: 1px solid #ccc;padding-right: 30px;" ref="form" :model="form" label-width="100px">
          <div>
            <el-form-item label="主题1:"><el-input></el-input></el-form-item>
            <el-form-item label="内容:"><el-input style="margin-top: 15px;" type="textarea" :rows="2"></el-input></el-form-item>
          </div>
          <div style="margin-top: 50px;">
            <el-form-item label="主题2:"><el-input></el-input></el-form-item>
            <el-form-item label="内容:"><el-input style="margin-top: 15px;" type="textarea" :rows="2"></el-input></el-form-item>
          </div>
          <div style="margin-top: 50px;">
            <el-form-item label="主题3:"><el-input></el-input></el-form-item>
            <el-form-item label="内容:"><el-input style="margin-top: 15px;" type="textarea" :rows="2"></el-input></el-form-item>
          </div>
        </el-form>
      </el-card>
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
          f1: '',
          f2: '永久有效',
          f3: '',
          f4: '',
          f5: false
        }
      }
    },
    methods: {
      goBack () {
        this.$router.push('/recomWords')
      }
    }
  }
</script>

<style scoped>

</style>

