<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>导航流程</span>
      </div>
      <div class="left_content">
        <div class="title_content clearfix">
          <el-tooltip class="item" effect="dark" content="新增类别" placement="top">
            <i @click="addDialogEnable = true;" class="bigIcon uncolorIcon fr el-icon-circle-plus-outline"/>
          </el-tooltip>
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
              <el-tooltip class="item" effect="dark" content="新增类别" placement="top">
                <el-button
                  class="mediumIcon uncolorIcon"
                  type="text"
                  size="mini"
                  @click="() => append(treeData)"
                  icon="el-icon-circle-plus-outline"
                />
              </el-tooltip>
              <el-tooltip class="item" effect="dark" content="编辑类别" placement="top">
                <el-button
                  class="mediumIcon uncolorIcon"
                  type="text"
                  size="mini"
                  @click="() => eidt(treeData)"
                  icon="el-icon-edit"
                />
              </el-tooltip>
              <el-tooltip class="item" effect="dark" content="移除类别" placement="top">
                <el-button
                  class="mediumIcon uncolorIcon"
                  type="text"
                  size="mini"
                  @click="() => remove(node, treeData)"
                  icon="el-icon-remove-outline"
                />
              </el-tooltip>
            </div>
          </div>
        </el-tree>
      </div>
      <div class="right_content">
        <div class="title_content clearfix" style="padding-bottom: 17px;margin-bottom: 21px;">
          <span>擅自接线</span>
          <el-tooltip class="item" effect="dark" content="新增类别" placement="top">
            <i @click="addNodeEnable = true" class="bigIcon uncolorIcon fr el-icon-circle-plus-outline"/>
          </el-tooltip>
        </div>
        <div>
          <div class="block">
            <el-timeline>
              <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                type="info"
                color="hsl"
              >
                <span>
                  {{activity.content}}
                </span>
                <div class="svg-div-hover-2">
                  <el-tooltip class="item" effect="dark" content="上移" placement="top">
                    <el-button
                      class="mediumIcon uncolorIcon"
                      type="text"
                      size="mini"
                      icon="el-icon-top"
                    />
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" content="下移" placement="top">
                    <el-button
                      class="mediumIcon uncolorIcon"
                      type="text"
                      size="mini"
                      icon="el-icon-bottom"
                    />
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" content="新增类别" placement="top">
                    <el-button
                      class="mediumIcon uncolorIcon"
                      type="text"
                      size="mini"
                      icon="el-icon-circle-plus-outline"
                    />
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" content="编辑类别" placement="top">
                    <el-button
                      class="mediumIcon uncolorIcon"
                      type="text"
                      size="mini"
                      icon="el-icon-edit"
                    />
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" content="移除类别" placement="top">
                    <el-button
                      class="mediumIcon uncolorIcon"
                      type="text"
                      size="mini"
                      icon="el-icon-remove-outline"
                    />
                  </el-tooltip>
                </div>
              </el-timeline-item>
            </el-timeline>
          </div>
        </div>
      </div>
    </el-card>

    <!-- 新增类别Dialog Form -->
    <el-dialog title="新增类别" class="small_dialog" :visible.sync="addDialogEnable">
      <el-form ref="dialogForm" :model="newAddDialogForm" label-width="100px">
        <el-form-item label="类别名称：">
          <el-input v-model="newAddDialogForm.f1" placeholder=""></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addDialogEnable = false">取 消</el-button>
        <el-button type="primary" @click="addDialogEnable = false">保 存</el-button>
      </div>
    </el-dialog>

    <!-- 主节点Dialog Form -->
    <el-dialog title="新增类别" class="medium_dialog" :visible.sync="addNodeEnable">
      <el-form ref="newNodeForm" :model="newNodeForm" label-width="100px">
        <el-form-item label="节点名称：">
          <el-input :disabled="true" v-model="newNodeForm.f1" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="流程类别：">
          <el-input :disabled="true" v-model="newNodeForm.f2" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="节点名称：">
          <el-input :disabled="false" v-model="newNodeForm.f3" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="节点类型：">
          <el-input :disabled="true" v-model="newNodeForm.f4" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="节点验证：">
          <el-select v-model="newNodeForm.region" placeholder="请选择">
            <el-option label="节点一" value="1"></el-option>
            <el-option label="节点二" value="2"></el-option>
            <el-option label="节点三" value="3"></el-option>
            <el-option label="节点四" value="4"></el-option>
            <el-option label="节点五" value="5"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addNodeEnable = false">取 消</el-button>
        <el-button type="primary" @click="addNodeEnable = false">保 存</el-button>
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
        addNodeEnable: false,
        newNodeForm: {
          f1: '擅自接线',
          f2: '举报',
          f3: '',
          f4: '主节点',
          f5: ''
        },
        showEnable: false,
        showEnable_1: false,
        showEnable_2: false,
        addDialogEnable: false,
        treeData: JSON.parse(JSON.stringify(treeDatasrc)),
        newAddDialogForm: {},
        activities: [
          {
            content: '确认窃电方式',
            size: 'large'
          }, {
            content: '确认详细地点',
            size: 'large'
          }, {
            content: '确认是供电公司产权',
            size: 'large'
          }]
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
  .svg-div-hover-2 {
    float: right;
    margin-right: 35%;
    position: relative;
    top: -10px;
  }

  .small_dialog {
    width: 50%;
    left: 30%;
  }

  .medium_dialog {

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
    padding: 0;
  }


  .flex1 {
    padding-top: 6px;
    width: calc(100% - 100px);
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
