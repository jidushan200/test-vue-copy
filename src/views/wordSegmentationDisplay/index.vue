<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>词语切分展示</span>
      </div>
      <h4 style="margin: 0;margin-bottom: 10px;">请输入文字后进行分词处理</h4>
      <el-form ref="form" :model="form">
        <el-form-item label="">
          <el-row :gutter="24">
            <el-col :span="24">
              <el-input
                type="textarea"
                :rows="5"
                placeholder="请输入内容"
                v-model="form.textarea">
              </el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即分词</el-button>
        </el-form-item>
      </el-form>

      <h4>分词结果</h4>
      <el-card class="box-card">
        <el-row :gutter="24">
          <el-col :span="2" class="pr">
            <div class="grid-content bg-purple-dark font_style">我</div>
            <div class="rightcor_font">r</div>
          </el-col>
          <el-col :span="2" class="pr">
            <div class="grid-content bg-purple-dark font_style">家里</div>
            <div class="rightcor_font">n</div>
          </el-col>
          <el-col :span="2" class="pr">
            <div class="grid-content bg-purple-dark font_style">停电</div>
            <div class="rightcor_font">v</div>
          </el-col>
          <el-col :span="2" class="pr">
            <div class="grid-content bg-purple-dark font_style">了</div>
            <div class="rightcor_font">c</div>
          </el-col>
          <el-col :span="2" class="pr">
            <div class="grid-content bg-purple-dark font_style">，</div>
            <div class="rightcor_font">w</div>
          </el-col>
          <el-col :span="2" class="pr">
            <div class="grid-content bg-purple-dark font_style">怎么回事</div>
            <div class="rightcor_font">r</div>
          </el-col>
        </el-row>
      </el-card>
      <h4>统计分词</h4>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
      >
        <el-table-column
          prop="f1"
          label="词性"
          width="70"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="f11"
          label="名词数量"
          align="center"
          width="120">
        </el-table-column>
        <el-table-column
          prop="f2"
          label="词性"
          width="70"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="f22"
          label="动词数量"
          align="center"
          width="120">
        </el-table-column>
        <el-table-column
          prop="f3"
          label="词性"
          width="70"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="f33"
          label="连词数量"
          align="center"
          width="120">
        </el-table-column>
        <el-table-column
          prop="f4"
          label="词性"
          width="100"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="f44"
          label="标点符号数量"
          align="center"
          width="120">
        </el-table-column>
        <el-table-column
          prop="f5"
          label="词性"
          width="70"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="f55"
          label="代词数量"
          align="center"
          width="120">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        form: {
          textarea: '我家里停电了，怎么回事'
        },
        tableData: [
          {
            f1: '名词',
            f11: '1',
            f2: '动词',
            f22: '1',
            f3: '连词',
            f33: '1',
            f4: '标点符号',
            f44: '1',
            f5: '代词',
            f55: '1',
          }
        ]
      }
    },
    methods: {
      onSubmit () {
        console.log('submit!')
      }
    }
  }
</script>

<style scoped="less">
  .rightcor_font {
    position: absolute;
    right: 20px;
    top: 0px;
    color: cornflowerblue;
    font-size: 12px;
  }

  .pr {
    position: relative;
  }

  h4 {
    font-weight: normal;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    border: 0
  }

  .bg-purple-dark {
    border: 1px solid #ccc;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .font_style {
    text-align: center;
    font-size: 12px;
    padding-top: 15px;
  }
</style>
