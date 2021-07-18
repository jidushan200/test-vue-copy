import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
const NotFound = () => import('../views/404')
//简单业务识别
const ClaasiDataManage = () => import('../views/ClaasiDataManage')
const ClassiDataImEx = () => import('../views/ClassiDataImEx')
const OrderLabelManage = () => import('../views/OrderLabelManage')
const ClassiDataHandle = () => import('../views/ClassiDataHandle')
const ModelClassiHandle = () => import('../views/ModelClassiHandle')
const ClassiHistoryModelEnable = () => import('../views/ClassiHistoryModelEnable')
//复杂业务识别
const ComplexBusiModelManage = () => import('../views/complexBusiModelManage')
const VisualModel = () => import('../views/complexBusiModelManage/visualModel')
const HighLevelModel = () => import('../views/complexBusiModelManage/highLevelModel')
//话务综合分析
const ProcessScenarioDetails = () => import('../views/processScenarioDetails')
const ProcessNodeDetails = () => import('../views/processNodeDetails')
const NodeCorrespondingDetails = () => import('../views/nodeCorrespondingDetails')
const NodeEndResponseDetail = () => import('../views/nodeEndResponseDetail')
const EasyIgnoreBusinessNodeAnalysis = () => import('../views/easyIgnoreBusinessNodeAnalysis')
const ProcessScenarioDetails111 = () => import('../views/processScenarioDetails111.vue')
const ProcessNodeDetails111 = () => import('../views/processNodeDetails111.vue')
const NodeCorrespondingDetails111 = () => import('../views/nodeCorrespondingDetails111.vue')
const NodeEndResponseDetail111 = () => import('../views/nodeEndResponseDetail111.vue')
const EasyIgnoreBusinessNodeAnalysis111 = () => import('../views/easyIgnoreBusinessNodeAnalysis111.vue')
//关键要素提取
const WordSegmentationDisplay = () => import('../views/wordSegmentationDisplay')
const WeakWordConfiguration = () => import('../views/weakWordConfiguration')
const OperaWeakWordConfig = () => import('../views/weakWordConfiguration/weakWordConfig.vue')
const StopWordConfiguration = () => import('../views/stopWordConfiguration')
const OperaStopWordConfig = () => import('../views/stopWordConfiguration/stopWordConfig.vue')
//业务流程管理
const RecomWords = () => import('../views/recomWords')
const RecomWords_addKnows = () => import('../views/recomWords/addKnows')
const StandWords = () => import('../views/standWords')
const NavProcess = () => import('../views/navProcess')
//质检业务审核
const BusinessReview = () => import('../views/businessReview')
const BusinessAuditDetail = () => import('../views/businessReview/businessAuditDetail.vue')

Vue.use(VueRouter)

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    children: [
      // { name: , path: , component: }
      {
        name: 'ClaasiDataManage',
        path: '/ClaasiDataManage',
        component: ClaasiDataManage
      },
      {
        name: 'ClassiDataImEx',
        path: '/ClassiDataImEx',
        component: ClassiDataImEx
      },
      {
        name: 'OrderLabelManage',
        path: '/OrderLabelManage',
        component: OrderLabelManage
      },
      {
        name: 'ClassiDataHandle',
        path: '/ClassiDataHandle',
        component: ClassiDataHandle
      }, {
        name: 'ModelClassiHandle',
        path: '/ModelClassiHandle',
        component: ModelClassiHandle
      }, {
        name: 'ClassiHistoryModelEnable',
        path: '/ClassiHistoryModelEnable',
        component: ClassiHistoryModelEnable
      },
      {
        name: 'ProcessScenarioDetails',
        path: '/processScenarioDetails',
        component: ProcessScenarioDetails
      },
      {
        name: 'ProcessNodeDetails',
        path: '/processNodeDetails',
        component: ProcessNodeDetails
      },
      {
        name: 'NodeCorrespondingDetails',
        path: '/nodeCorrespondingDetails',
        component: NodeCorrespondingDetails
      },
      {
        name: 'NodeEndResponseDetail',
        path: '/nodeEndResponseDetail',
        component: NodeEndResponseDetail
      },
      {
        name: 'EasyIgnoreBusinessNodeAnalysis',
        path: '/easyIgnoreBusinessNodeAnalysis',
        component: EasyIgnoreBusinessNodeAnalysis
      },

      {
        name: 'ProcessScenarioDetails111',
        path: '/processScenarioDetails111',
        component: ProcessScenarioDetails111
      },
      {
        name: 'ProcessNodeDetails111',
        path: '/processNodeDetails111',
        component: ProcessNodeDetails111
      },
      {
        name: 'NodeCorrespondingDetails111',
        path: '/nodeCorrespondingDetails111',
        component: NodeCorrespondingDetails111
      },
      {
        name: 'NodeEndResponseDetail111',
        path: '/nodeEndResponseDetail111',
        component: NodeEndResponseDetail111
      },
      {
        name: 'EasyIgnoreBusinessNodeAnalysis111',
        path: '/easyIgnoreBusinessNodeAnalysis111',
        component: EasyIgnoreBusinessNodeAnalysis111
      },

      {
        name: 'ComplexBusiModelManage',
        path: '/complexBusiModelManage',
        component: ComplexBusiModelManage
      },
      {
        name: 'VisualModel',
        path: '/visualModel',
        component: VisualModel
      },
      {
        name: 'HighLevelModel',
        path: '/highLevelModel',
        component: HighLevelModel
      },

      {
        name: 'WordSegmentationDisplay',
        path: '/wordSegmentationDisplay',
        component: WordSegmentationDisplay
      },
      {
        name: 'WeakWordConfiguration',
        path: '/weakWordConfiguration',
        component: WeakWordConfiguration
      },
      {
        name: 'OperaWeakWordConfig',
        path: '/weakWordConfiguration/opera',
        component: OperaWeakWordConfig
      },
      {
        name: 'StopWordConfiguration',
        path: '/stopWordConfiguration',
        component: StopWordConfiguration
      },
      {
        name: 'OperaStopWordConfig',
        path: '/stopWordConfiguration/opera',
        component: OperaStopWordConfig
      },

      {
        name: 'RecomWords',
        path: '/recomWords',
        component: RecomWords
      },
      {
        name: 'RecomWords_addKnows',
        path: '/recomWords/addKnows',
        component: RecomWords_addKnows
      },
      {
        name: 'StandWords',
        path: '/standWords',
        component: StandWords
      },
      {
        name: 'NavProcess',
        path: '/navProcess',
        component: NavProcess
      },

      {
        name: 'BusinessReview',
        path: '/businessReview',
        component: BusinessReview
      },
      {
        name: 'BusinessAuditDetail',
        path: '/businessReview/detail',
        component: BusinessAuditDetail
      }
    ]
  },
  {
    name: '404',
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
