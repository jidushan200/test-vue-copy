<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>标准话术</span>
      </div>
      <div class="left_content">
        <div class="title_content clearfix">
          <i @click="addDialogEnable = true;" class="bigIcon uncolorIcon fr el-icon-circle-plus-outline"/>
        </div>
        <el-tree
          :data="treeData"
          node-key="id"
          :expand-on-click-node="false"
        >
          <div
            @mouseover="showIconFn"
            @mouseout="hideIconFn"
            slot-scope="{ node, treeData }" class="tree-flex"
          >
            <div class="flex1">
                  <span>
                    {{node.label}}
                  </span>
            </div>
            <div class="svg-div-hover">
              <el-button
                class="mediumIcon uncolorIcon"
                type="text"
                size="mini"
                @click="() => append(treeData)"
                icon="el-icon-circle-plus-outline"
              />
              <el-button
                class="mediumIcon uncolorIcon"
                type="text"
                size="mini"
                @click="() => eidt(treeData)"
                icon="el-icon-edit"
              />
              <el-button
                class="mediumIcon uncolorIcon"
                type="text"
                size="mini"
                @click="() => remove(node, treeData)"
                icon="el-icon-remove-outline"
              />
            </div>
          </div>
        </el-tree>
      </div>
      <div class="right_content">
        <div class="title_content clearfix" style="padding-bottom: 17px;margin-bottom: 21px;">
          <i @click="addWordsDialogEnable = true" class="bigIcon uncolorIcon fr el-icon-circle-plus-outline"/>
        </div>
        <div class="tree-flex">
          <div class="flex1" style="overflow: visible">
            <i class="el-icon-document"></i>
            <span v-if="showEnable==false" @click="showEnable = true">
              <i class="el-icon-caret-right"></i>
              <span>企业职工基本养老金计发时间与组成部分</span>
            </span>
            <span v-if="showEnable==true" @click="showEnable = false">
                  <i class="el-icon-caret-bottom"></i>
                  <span>企业职工基本养老金计发时间与组成部分</span>
                  <div class="content_page">
                    <p>企业职工基本养老金的组成</p>
                    <p>基本养老金由基础养老金和个人账户养老金组成：</p>
                    <p>（一）基础养老金以本人退休时全省上一年度在岗职工月平均工资和本人指数化月平均缴费工资的平均值为基数，缴费每满1年（不足1年的缴费月数折算为年）发给1%；</p>
                    <p>（二）个人账户养老金按照本人个人账户的累计储存额除以计发月数确定。计发月数标准，按照国家规定执行。</p>
                    <p>企业职工基本养老金计发时间</p>
                    <p>符合规定条件的参保人员，从劳动保障行政部门核定的退休时间之次月起，由社会保险经办机构委托银行等机构按月发给基本养老金。</p>
                  </div>
                </span>
          </div>
          <div class="svg-div-hover" style="display: block">

            <el-button
              class="mediumIcon uncolorIcon"
              type="text"
              size="mini"
              @click="() => eidt(treeData_2)"
              icon="el-icon-edit"
            />
            <el-button
              class="mediumIcon uncolorIcon"
              type="text"
              size="mini"
              @click="() => remove(node, treeData_2)"
              icon="el-icon-remove-outline"
            />
          </div>
        </div>

        <div class="tree-flex">
          <div class="flex1" style="overflow: visible">
            <i class="el-icon-document"></i>
            <span v-if="showEnable_1==false" @click="showEnable_1 = true">
              <i class="el-icon-caret-right"></i>
              <span>企业职工基本养老金计发时间与组成部分</span>
            </span>
            <span v-if="showEnable_1==true" @click="showEnable_1 = false">
                  <i class="el-icon-caret-bottom"></i>
                  <span>企业职工基本养老金计发时间与组成部分</span>
                  <div class="content_page">
                    <p>企业职工基本养老金的组成</p>
                    <p>基本养老金由基础养老金和个人账户养老金组成：</p>
                    <p>（一）基础养老金以本人退休时全省上一年度在岗职工月平均工资和本人指数化月平均缴费工资的平均值为基数，缴费每满1年（不足1年的缴费月数折算为年）发给1%；</p>
                    <p>（二）个人账户养老金按照本人个人账户的累计储存额除以计发月数确定。计发月数标准，按照国家规定执行。</p>
                    <p>企业职工基本养老金计发时间</p>
                    <p>符合规定条件的参保人员，从劳动保障行政部门核定的退休时间之次月起，由社会保险经办机构委托银行等机构按月发给基本养老金。</p>
                  </div>
                </span>
          </div>
          <div class="svg-div-hover" style="display: block">

            <el-button
              class="mediumIcon uncolorIcon"
              type="text"
              size="mini"
              @click="() => eidt(treeData_2)"
              icon="el-icon-edit"
            />
            <el-button
              class="mediumIcon uncolorIcon"
              type="text"
              size="mini"
              @click="() => remove(node, treeData_2)"
              icon="el-icon-remove-outline"
            />
          </div>
        </div>

        <div class="tree-flex">
          <div class="flex1" style="overflow: visible">
            <i class="el-icon-document"></i>
            <span v-if="showEnable_2==false" @click="showEnable_2 = true">
              <i class="el-icon-caret-right"></i>
              <span>企业职工基本养老金计发时间与组成部分</span>
            </span>
            <span v-if="showEnable_2==true" @click="showEnable_2 = false">
                  <i class="el-icon-caret-bottom"></i>
                  <span>企业职工基本养老金计发时间与组成部分</span>
                  <div class="content_page">
                    <p>企业职工基本养老金的组成</p>
                    <p>基本养老金由基础养老金和个人账户养老金组成：</p>
                    <p>（一）基础养老金以本人退休时全省上一年度在岗职工月平均工资和本人指数化月平均缴费工资的平均值为基数，缴费每满1年（不足1年的缴费月数折算为年）发给1%；</p>
                    <p>（二）个人账户养老金按照本人个人账户的累计储存额除以计发月数确定。计发月数标准，按照国家规定执行。</p>
                    <p>企业职工基本养老金计发时间</p>
                    <p>符合规定条件的参保人员，从劳动保障行政部门核定的退休时间之次月起，由社会保险经办机构委托银行等机构按月发给基本养老金。</p>
                  </div>
                </span>
          </div>
          <div class="svg-div-hover" style="display: block">

            <el-button
              class="mediumIcon uncolorIcon"
              type="text"
              size="mini"
              @click="() => eidt(treeData_2)"
              icon="el-icon-edit"
            />
            <el-button
              class="mediumIcon uncolorIcon"
              type="text"
              size="mini"
              @click="() => remove(node, treeData_2)"
              icon="el-icon-remove-outline"
            />
          </div>
        </div>
      </div>
    </el-card>


    <!-- 新增领域Dialog Form -->
    <el-dialog title="新增领域" class="small_dialog" :visible.sync="addDialogEnable">
      <el-form ref="dialogForm" :model="newAddDialogForm" label-width="100px">
        <el-form-item label="领域名称：">
          <el-input v-model="newAddDialogForm.f1" placeholder=""></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addDialogEnable = false">取 消</el-button>
        <el-button type="primary" @click="addDialogEnable = false">保 存</el-button>
      </div>
    </el-dialog>

    <!-- 新增标准话术 addWordsForm -->
    <el-dialog title="新增标准话术" :visible.sync="addWordsDialogEnable">
      <el-form ref="dialogForm" :model="addWordsForm" label-width="150px">
        <el-form-item label="标准话术名称：">
          <el-input
            placeholder="请输入内容"
            v-model="addWordsForm.f1"
            clearable>
          </el-input>
        </el-form-item>
        <el-form-item label="标准话术内容">
          <el-input
            type="textarea"
            :rows="3"
            placeholder="请输入内容"
            v-model="addWordsForm.f2">
          </el-input>
        </el-form-item>
        <el-form-item label="选择分类：">
          <el-select v-model="addWordsForm.f3" placeholder="请选择">
            <el-option label="分类一" value="1"></el-option>
            <el-option label="分类二" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="有效期：">
          <el-radio-group v-model="addWordsForm.f4">
            <el-radio label="永久有效"></el-radio>
            <el-radio label="自定义"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="阈值：">
          <el-slider min="30" v-model="addWordsForm.f5"></el-slider>
        </el-form-item>
        <el-form-item label="启用状态：">
          <el-switch v-model="addWordsForm.f6" active-text="启用"></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addWordsDialogEnable = false">取 消</el-button>
        <el-button type="primary" @click="addWordsDialogEnable = false">保 存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      const treeDatasrc = [
        {
          id: 1,
          label: '养老保险待遇',
          children: [
            {
              id: 7,
              label: '企业职工基本养老待遇领取',
              children: [
                {
                  id: 14,
                  label: '养老保险待遇领取'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: '工伤康复',
          children: [
            {
              id: 8,
              label: '工伤康复1'
            }
          ]
        },
        {
          id: 3,
          label: '劳动能力鉴定',
          children: [
            {
              id: 9,
              label: '劳动能力鉴定的申请时间'
            }, {
              id: 10,
              label: '劳动能力鉴定的所需材料'
            }
          ]
        },
        {
          id: 4,
          label: '集体合同',
          children: [
            {
              id: 11,
              label: '集体合同审查'
            }
          ]
        },
        {
          id: 5,
          label: '劳派许可',
          children: [
            {
              id: 12,
              label: '劳派经营许可'
            }
          ]
        },
        {
          id: 6,
          label: '工伤认定',
          children: [
            {
              id: 13,
              label: '工伤认定情形'
            }
          ]
        }
      ]
      return {
        addWordsForm: {
          f1: '',
          f2: '',
          f3: '分类一',
          f4: '永久有效',
          f5: 30,
          f6: true,
        },
        addWordsDialogEnable: false,
        showEnable: false,
        showEnable_1: false,
        showEnable_2: false,
        addDialogEnable: false,
        treeData: JSON.parse(JSON.stringify(treeDatasrc)),
        newAddDialogForm: {},
      }
    },
    methods: {
      showIconFn (e) {
        $($(e.target).parent()).mouseover(function () {
          $(this).find('.svg-div-hover').show()
        })
      }
      ,
      hideIconFn (e) {
        $($(e.target).parent()).mouseout(function () {
          $(this).find('.svg-div-hover').hide()
        })
      }
    }
  }
</script>

<style scoped>
  .small_dialog {
    width: 50%;
    left: 30%;
  }

  .content_page {
    padding-left: 32px;
    box-sizing: border-box;
    width: 90%;
  }

  .content_page p {
    white-space: normal;
  }

  .left_content {
    width: 30%;
    float: left;
  }

  .right_content {
    width: 65%;
    float: right;
    margin-right: 10px;
  }

  .box-card {
    height: 650px;
  }

  .svg-div-hover {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    -ms-flex-line-pack: center;
    align-content: center;
    padding-right: 20px;
    display: none;
  }

  .tree-flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    padding: 5px 0;
  }


  .flex1 {
    padding-top: 6px;
    width: calc(100% - 100px);
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .title_content {
    border-bottom: 1px solid #ccc;
    padding-bottom: 5%;
    box-sizing: border-box;
    margin-bottom: 5%;
  }

  .fr {
    float: right;
  }

  .mediumIcon {
    font-size: 20px;
  }

  .bigIcon {
    font-size: 30px;
  }

  .uncolorIcon {
    color: #ccc;
    cursor: pointer;
  }

  .clearfix:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
</style>
