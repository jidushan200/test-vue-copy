<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-page-header style="" @back="goBack" content="可视化模型">
        </el-page-header>
      </div>

      <el-form :model="ruleForm" ref="ruleForm" label-width="100px">
        <el-form-item label="模型名称：" required prop="f1">
          <el-input style="width: 25%;" v-model="ruleForm.f1"></el-input>
          <p style="font-size: 10px;margin: 0;">注：模型由短语语句根据逻辑组成，短语语句可以由词组按逻辑组成，也可以直接为同义语句。</p>
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
        <el-form-item label="短语语句：" prop="f3">
          <el-button type="primary">导入</el-button>
          <el-button v-if="shortWordVisible==false" @click="shortWordVisibleFn(false)" type="primary">
            新增
            <i class="el-icon-arrow-down"/>
          </el-button>
          <el-button v-if="shortWordVisible==true" @click="shortWordVisibleFn(true)" type="primary">
            收起
            <i class="el-icon-arrow-up"/>
          </el-button>
          <el-form id="hehe" style="display: none" label-width="100px" :model="insideRuleForm">
            <el-form-item style="margin-top: 15px;" label="语句名称：" prop="f1">
              <el-input style="width: 65%;" placeholder="按回车键可添加至词组元素，长度在1-40个字符，由汉字、数字、字母及下划线组成"
                        class="input-with-select">
                <el-button slot="append"><span>添加</span></el-button>
              </el-input>
            </el-form-item>
            <el-form-item style="margin-top: 15px;" label="组成方式：" prop="f2">
              <el-select v-model="ruleForm.f2" placeholder="请选择">
                <el-option label="质检词组" value="1"></el-option>
                <el-option label="同义词句" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item style="margin-top: 15px;" label="可选词组：" prop="f3">
              <el-button type="primary">导入</el-button>
              <el-button type="primary">新增</el-button>
            </el-form-item>
            <el-form-item style="margin-top: 15px;" label="语句内容：" prop="f4">
              <div class="exist-tags"></div>
            </el-form-item>
            <el-form-item style="margin-top: 15px;" label="逻辑符号：" prop="f5">
              <el-button-group>
                <el-button size="small"><span>|</span></el-button>
                <el-button size="small"><span>&gt;</span></el-button>
                <el-button size="small"><span>#</span></el-button>
                <el-button size="small"><span>{</span></el-button>
                <el-button size="small"><span>}</span></el-button>
                <el-button size="small"><span>,</span></el-button>
                <el-button size="small"><span>[</span></el-button>
                <el-button size="small"><span>]</span></el-button>
                <el-button size="small"><span>(</span></el-button>
                <el-button size="small"><span>）</span></el-button>
                <el-button size="small">其它</el-button>
              </el-button-group>
            </el-form-item>
          </el-form>

        </el-form-item>
        <el-form-item label="质检模型：" prop="f4">
          <div class="exist-tags"></div>
          <el-form-item style="margin-top: 15px;" label="逻辑符号：" prop="f5">
            <el-button-group>
              <el-button size="small"><span>|</span></el-button>
              <el-button size="small"><span>!</span></el-button>
              <el-button size="small"><span>&</span></el-button>
              <el-button size="small"><span>&!</span></el-button>
              <el-button size="small"><span>?af&</span></el-button>
              <el-button size="small"><span>?be&</span></el-button>
              <el-button size="small"><span>?af&!</span></el-button>
              <el-button size="small"><span>?af&!</span></el-button>
              <el-button size="small"><span>{</span></el-button>
              <el-button size="small"><span>}</span></el-button>
              <el-button size="small"><span>[</span></el-button>
              <el-button size="small"><span>]</span></el-button>
              <el-button size="small"><span>(</span></el-button>
              <el-button size="small"><span>）</span></el-button>
              <el-button size="small">其它</el-button>
            </el-button-group>
          </el-form-item>
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
        if (flag==true) {
          this.shortWordVisible = false
          $("#hehe").slideUp()
        } else {
          this.shortWordVisible = true
          $("#hehe").slideDown();
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
