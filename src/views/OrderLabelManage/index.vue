<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-page-header style="" @back="goBack" content="工单标注管理">
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
          <i class="el-icon-circle-plus-outline el-icon-styles medium-icon uncolorIcon"
             style="line-height: 40px;"/>
        </el-row>

        <el-row :gutter="24" style="margin-bottom: 10px;">
          <el-col :span="6" :offset="15">
            <el-radio-group v-model="radio2" size="medium">
              <el-radio-button label="全部"></el-radio-button>
              <el-radio-button label="已标注"></el-radio-button>
              <el-radio-button label="未标注"></el-radio-button>
            </el-radio-group>
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
            width="300"
          />
          <el-table-column
            prop="f2"
            label="文本长度"
            width="200"
            center
          />
          <el-table-column
            sortable
            prop="f3"
            label="标注"
            width="300"
          >
            <template slot-scope="scope">
              <el-select v-model="scope.row.f3" placeholder="请选择标注类型">
                <el-option label="投诉类" value="v1"></el-option>
                <el-option label="咨询类" value="v2"></el-option>
                <el-option label="故障报修" value="v3"></el-option>
                <el-option label="举报类" value="v4"></el-option>
              </el-select>
            </template>
          </el-table-column>

          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                type="primary"
                size="mini"
                @click="editRow(scope.$index, scope.row)">调听
              </el-button>
              <el-button
                size="mini"
                type="danger"
                @click="deleteRow(scope.$index, scope.row)">删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>

        <p>分类标注数量：投诉类-13，举报类-12，表扬类-8，故障报修类-34，咨询类-50</p>

        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[10, 15, 20]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="tableData.length">
          </el-pagination>
        </div>
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
        currentPage4: 1,
        radio2: '全部',
        titleEnable: null,
        form: {
          f1: '',
          f2: '',
          f3: ''
        },
        tableData: [
          {
            f1: '20180501',
            f2: '100',
            f3: 'v1',
            f4: '2018.12.03 23:23:18',
          },
          {
            f1: '20180502',
            f2: '200',
            f3: 'v2',
            f4: '2018.12.03 23:23:18',
          },
          {
            f1: '20180503',
            f2: '200',
            f3: 'v3',
            f4: '2018.12.03 23:23:18',
          },
          {
            f1: '20180504',
            f2: '300',
            f3: 'v4',
            f4: '2018.12.03 23:23:18',
          },
          {
            f1: '20180505',
            f2: '400',
            f3: 'v4',
            f4: '2018.12.03 23:23:18',
          }
        ],
      }
    },
    methods: {
      goBack () {
        this.$router.push('/claasiDataManage')
      },
      handleSizeChange (val) {
      },
      handleCurrentChange (val) {
      }
    }
  }
</script>

<style lang="less" scoped>
  .el-icon-styles {
    font-size: 45px;
    color: #00adff;
    cursor: pointer;
  }

  .medium-icon {
    font-size: 30px;
  }

  .uncolorIcon {
    color: rgba(0, 0, 0, .4);
  }
</style>

