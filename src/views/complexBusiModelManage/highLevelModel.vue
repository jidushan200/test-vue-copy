<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-page-header style="" @back="goBack" content="高级模型">
        </el-page-header>
      </div>

      <el-form :model="ruleForm" ref="ruleForm" label-width="130px">
        <el-form-item label="模型名称：" required prop="f1">
          <el-input style="width: 25%;" v-model="ruleForm.f1"></el-input>
        </el-form-item>
        <el-form-item label="模型类别：" required prop="f2">
          <el-select v-model="ruleForm.f2" placeholder="请选择活动区域">
            <el-option label="临时挂失" value="1"></el-option>
            <el-option label="密码解锁" value="2"></el-option>
            <el-option label="通用规则" value="3"></el-option>
            <el-option label="投诉" value="4"></el-option>
            <el-option label="吞卡" value="5"></el-option>
            <el-option label="账单分期" value="6"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="模型规则：" required prop="f4">
          <el-input type="textarea" style="width: 50%;" rows="5"></el-input>
        </el-form-item>
        <el-form-item style="margin-top: 15px;" label="逻辑符号说明：">
          <el-row :gutter="24">
            <el-col :span="3"><span>|:逻辑或</span></el-col>
            <el-col :span="3"><span>&:逻辑与</span></el-col>
            <el-col :span="3"><span>!:逻辑否</span></el-col>
            <el-col :span="3"><span>(:左括号</span></el-col>
            <el-col :span="3"><span>):右括号</span></el-col>
          </el-row>
          <el-row :gutter="24" style="margin-left: 1px;">
            <el-col :span="3"><span>[:短语左括号</span></el-col>
            <el-col :span="3"><span>]:短语右括号</span></el-col>
            <el-col :span="3"><span>{:模型左括号</span></el-col>
            <el-col :span="3"><span>}:模型右括号</span></el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="质检对象：" required prop="f5">
          <el-select v-model="ruleForm.f5" placeholder="请选择">
            <el-option label="双方" value="3"></el-option>
            <el-option label="客户端" value="2"></el-option>
            <el-option label="座席端" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button @click="goBack">取消</el-button>
          <el-button type="primary" @click="goBack">保存</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        insideRuleForm: {
          f1: '',
          f2: '',
          f3: '',
          f4: ''
        },
        shortWordVisible: false,
        ruleForm: {
          f1: '',
          f2: '',
          f3: ''
        },
        tableData: [
          {
            f1: '',
            f2: '',
            f3: ''
          }
        ],
      }
    },
    methods: {
      shortWordVisibleFn (flag) {
        if (flag == true) {
          this.shortWordVisible = false
          $('#hehe').slideUp()
        } else {
          this.shortWordVisible = true
          $('#hehe').slideDown()
        }
      }
      ,
      handleCollapseChange (val) {
        console.log(val)
      }
      ,
      goBack () {
        this.$router.push('/complexBusiModelManage')
      }
    }
  }
</script>

<style scoped>
  .exist-tags {
    width: 40vw;
    height: 150px;
    border: 1px solid;
    background: #fff;
    overflow-y: auto;
  }
</style>

