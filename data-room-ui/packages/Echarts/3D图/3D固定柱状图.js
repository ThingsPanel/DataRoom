/*
 * @description: 配置，参考https://g2plot.antv.antgroup.com/examples
 * @Date: 2023-03-27 14:38:23
 * @Author: xing.heng
 */
import * as echarts from 'echarts'
// 配置版本号
const version = '2023071001'
// 分类
const category = 'Column'
// 标题
const title = '3D固定柱状图'
// 类别， new Line()
const chartType = 'Column'
// 用于标识，唯一，和文件夹名称一致
const name = 'FenZuZhuZhuangTu'

// 右侧配置项
const setting = [
  {
    label: '维度',
    type: 'select', // 设置组件类型
    field: 'xField', // 字段
    optionField: 'xField', // 对应options中的字段
    // 是否多选
    multiple: false,
    value: '',
    tabName: 'data'
  },
  {
    label: '指标',
    type: 'select', // 设置组件类型
    field: 'yField', // 字段
    optionField: 'yField', // 对应options中的字段
    // 是否多选
    multiple: false,
    value: '',
    tabName: 'data'
  },
  {
    label: '分组字段',
    type: 'select', // 设置组件类型
    field: 'seriesField', // 字段
    optionField: 'seriesField', // 对应options中的字段
    // 是否多选
    multiple: false,
    value: '',
    tabName: 'data'
  }
]

// 配置处理脚本
const optionHandler = ''

// 数据处理脚本
const dataHandler = ''

// 图表配置 new Line('domName', option)

const xData = ['本年话务总量', '本年人工话务量', '每万客户呼入量', '本年话务总量', '本年人工话务量', '每万客户呼入量']
const yData = [300, 1230, 425, 300, 1230, 425]
const maxData = [1500, 1500, 1500, 1500, 1500, 1500]
const option = {
  animation: false,
  tooltip: {
    show: true
  },
  grid: {
    left: '15%',
    right: '5%',
    bottom: '15%',
    z: 100,
    containLabel: false,
    show: false
  },
  graphic: {
    type: 'group',
    bottom: '8%',
    left: '10%',
    z: 100,
    children: [
      {
        type: 'rect',
        left: 0,
        bottom: 0,
        shape: {
          width: 400,
          height: 10
        },
        style: {
          fill: '#3f4867'
        }
      },
      {
        type: 'polygon',
        left: 0,
        bottom: 10,
        shape: {
          // 左上、右上、右下、左下
          points: [[40, -50], [360, -50], [400, 0], [0, 0]]
        },
        style: {
          fill: '#303256'
        }
      }
    ]
  },
  xAxis: [
    {
      type: 'category',
      data: xData,
      // 坐标轴刻度设置:x轴数据展示
      axisTick: {
        show: true,
        alignWithLabel: true
      },
      nameTextStyle: {
        color: '#82b0ec'
      },
      // 是否显示坐标轴的轴线
      axisLine: {
        show: false
      },
      // 坐标轴刻度标签
      axisLabel: {
        textStyle: {
          fontSize: 10,
          color: 'rgb(40, 129, 170)'
        },
        margin: 30
      }
    }
  ],
  yAxis: [
    {
      show: true, // y轴文本标签显示
      type: 'value',
      axisLabel: {
        textStyle: {
          color: 'rgb(40, 129, 170)'
        }
      },
      // 分隔线
      splitLine: {
        show: false // yAxis.show配置为true时，该配置才有效
      },
      // y轴轴线是否显示
      axisLine: {
        show: true
      }
    }
  ],
  series: [
    {
      type: 'pictorialBar', // 象形柱图
      symbol: 'diamond',
      symbolOffset: [0, '-50%'], // 上部菱形
      symbolSize: [30, 15],
      // symbolOffset: [0, -6], // 上部椭圆
      symbolPosition: 'end',
      z: 12,
      label: {
        normal: {
          show: true,
          position: 'top',
          fontSize: 15,
          fontWeight: 'bold',
          color: '#27a7ce'
        }
      },
      color: '#2DB1EF',
      data: yData
    },
    {
      type: 'pictorialBar',
      symbol: 'diamond',
      symbolSize: [30, 15],
      symbolOffset: ['0%', '50%'], // 下部菱形
      // symbolOffset: [0, 7], // 下部椭圆
      z: 12,
      color: '#187dcb',
      data: yData
    },
    {
      type: 'bar',
      barWidth: 30,
      z: 10,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#115ba6'
            },
            {
              offset: 1,
              color: '#1db0dd'
            }
          ]),
          opacity: 0.8,
          shadowColor: 'rgba(0, 0, 0, 0.5)', // 阴影颜色
          shadowBlur: 0 // 阴影模糊值
        }
      },
      data: yData
    },
    {
      type: 'bar',
      barWidth: 30,
      barGap: '-100%',
      itemStyle: {
        normal: {
          color: '#041133',
          opacity: 0.8,
          shadowColor: 'rgba(0, 0, 0, 0.5)', // 阴影颜色
          shadowBlur: 0 // 阴影模糊值
        }
      },
      label: {
        show: false
      },
      data: maxData
    },
    {
      type: 'pictorialBar', // 象形柱图
      symbol: 'diamond',
      symbolOffset: [0, '-50%'], // 上部菱形
      symbolSize: [30, 15],
      // symbolOffset: [0, -6], // 上部椭圆
      symbolPosition: 'end',
      z: 12,
      label: {
        normal: {
          show: false,
          position: 'top',
          fontSize: 15,
          fontWeight: 'bold',
          color: '#27a7ce'
        }
      },
      color: '#142f5a',
      data: maxData

    }
  ]
}
export default {
  category,
  version,
  title,
  chartType,
  name,
  option,
  setting,
  optionHandler,
  dataHandler
}
