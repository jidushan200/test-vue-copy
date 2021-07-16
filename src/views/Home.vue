<template>
  <div class="home">
    <el-container class="container">
      <el-aside class="my-aside" :width="collapse?'64px':'250px'">
        <div class="logo" :class="{close:collapse}"></div>
        <el-menu
          router
          style="border-right:none"
          background-color="transparent"
          text-color="#fff"
          active-text-color="#ffd04b"
          :collapse="collapse"
          :collapse-transition="false"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-home"></i>
              <span slot="title">关键要素提取</span>
            </template>
            <el-menu-item index="/wordSegmentationDisplay">词语切分展示</el-menu-item>
            <el-menu-item index="/weakWordConfiguration">弱性词配置</el-menu-item>
            <el-menu-item index="/stopWordConfiguration">停用词配置</el-menu-item>
          </el-submenu>
          <el-submenu index="/BusiScenarioIdent">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>业务场景识别</span>
            </template>
            <el-submenu index="/simpleBusinessIdent">
              <template slot="title">简单业务识别</template>
              <el-menu-item index="/claasiDataManage">分类数据集管理</el-menu-item>
              <el-menu-item index="/classiDataImEx">分类数据导入导出</el-menu-item>
              <el-menu-item index="/orderLabelManage">工单标注管理</el-menu-item>
              <el-menu-item index="/classiDataHandle">分类数据处理</el-menu-item>
              <el-menu-item index="/modelClassiHandle">模型分类处理</el-menu-item>
              <el-menu-item index="/classiHistoryModelEnable">分类历史模型启用</el-menu-item>
            </el-submenu>
            <el-submenu index="/complexBusinessIdent">
              <template slot="title">复杂业务识别</template>
              <el-menu-item index="/complexBusiModelManage">复杂业务模型管理</el-menu-item>
              <el-menu-item index="/visualModel">可视化模型</el-menu-item>
              <el-menu-item index="/highLevelModel">高级模型</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="/2">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span slot="title">话务综合分析</span>
            </template>
            <el-submenu index="/realTimeAssistAnalysis">
              <template slot="title">实时辅助分析</template>
              <el-menu-item index="/processScenarioDetails">流程场景推荐明细</el-menu-item>
              <el-menu-item index="/processNodeDetails">流程节点推荐明细</el-menu-item>
              <el-menu-item index="/nodeCorrespondingDetails">节点相应明细</el-menu-item>
              <el-menu-item index="/nodeEndResponseDetail">节点末响应明细</el-menu-item>
              <el-menu-item index="/easyIgnoreBusinessNodeAnalysis">易忽略节点的业务类型分析</el-menu-item>
            </el-submenu>
            <el-submenu index="/realTimeRecommendOrderIdent">
              <template slot="title">实时推荐工单识别明细</template>
              <el-menu-item index="/processScenarioDetails111">疑似投诉实时识别明细</el-menu-item>
              <el-menu-item index="/processNodeDetails111">疑似重大服务事件识别明细</el-menu-item>
              <el-menu-item index="/nodeCorrespondingDetails111">漠视群众利益识别明细</el-menu-item>
              <el-menu-item index="/nodeEndResponseDetail111">工单预分类明细</el-menu-item>
              <el-menu-item index="/easyIgnoreBusinessNodeAnalysis111">智能分类不一致明细</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="/3">
            <template slot="title">
              <i class="el-icon-picture"></i>
              <span slot="title">业务流程管理</span>
            </template>
            <el-menu-item index="/recomWords">推荐话术</el-menu-item>
            <el-menu-item index="/standWords">标准话术</el-menu-item>
            <el-menu-item index="/navProcess">导航流程</el-menu-item>
          </el-submenu>
          <el-menu-item index="/businessReview">
            <i class="el-icon-s-promotion"></i>
            <span slot="title">质检业务审核</span>
          </el-menu-item>
          <!--<el-menu-item index="/">-->
          <!--  <i class="el-icon-s-promotion"></i>-->
          <!--  <span slot="title">投诉场景管理</span>-->
          <!--</el-menu-item>-->
          <!--<el-menu-item index="/">-->
          <!--  <i class="el-icon-chat-dot-round"></i>-->
          <!--  <span slot="title">通话要素标签管理</span>-->
          <!--</el-menu-item>-->
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <!-- 图标 -->
          <span class="el-icon-s-fold icon"></span>
          <!-- 文字 -->
          <span class="text">国网客服中心2021年业务受理辅助支撑应用项目  后台管理页面</span>
          <!-- 下拉菜单组件 -->
          <el-dropdown class="dropdown">
          <span class="el-dropdown-link">
            <img class="headIcon" src="../assets/images/avatar.jpg" alt="">
            <span class="userName">超级二狗</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
            <el-dropdown-menu slot="dropdown">
<!--              <el-dropdown-item icon="el-icon-setting">个人设置</el-dropdown-item>-->
<!--              <el-dropdown-item icon="el-icon-unlock">退出登录</el-dropdown-item>-->
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-main>
          <!--二级路由位置-->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  // @ is an alias to /src
  export default {
    name: 'Home',
    components: {},
    data () {
      return {
        collapse: false,
        avatar: ''
      }
    }
  }
</script>

<style lang="less">
  .el-main{
    background-image: url("../assets/images/国家电网95598_logo.jpg");
    background-repeat: no-repeat;
    background-position-x: 200px;
    background-position-y: 100px;
  }

  .el-menu-item * {
    color: #fff;
  }

  .el-submenu__title i,
  .el-menu-item i {
    color: #ffffff !important;
  }

  .container {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .container .el-aside {
    background: #006569;
  }

  .container .el-header {
    border-bottom: 1px solid #ddd;
  }

  .el-header {
    line-height: 60px;
    border-bottom: 1px solid #ddd;

    .icon {
      font-size: 30px;
      vertical-align: middle;
    }

    .text {
      margin-left: 10px;
      vertical-align: middle;
    }

    .dropdown {
      float: right;

      .headIcon {
        width: 30px;
        height: 30px;
        vertical-align: middle;
      }

      .userName {
        font-weight: bold;
        vertical-align: middle;
        margin-left: 5px;
      }
    }
  }
</style>
