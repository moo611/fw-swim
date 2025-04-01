<template>
  <div class="chart-wrapper">
    <div class="toolbar">
      <el-date-picker
        v-model="dateRange"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        value-format="YYYY-MM-DD"
        @change="handleDateChange"
      />
      <el-button 
        type="primary" 
        @click="fetchData" 
        :loading="loading"
        :icon="Refresh"
      >
        刷新数据
      </el-button>
      
    </div>
    
    <div ref="chartContainer" class="chart-container"></div>
    
    <div v-if="isEmpty" class="empty-tip">
      <el-empty description="暂无数据" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import * as echarts from 'echarts'
import { ElMessage } from 'element-plus'
import { Refresh, Download } from '@element-plus/icons-vue'
import axios from '../../axios'
// 响应式数据
const dateRange = ref([])
const chart = ref(null)
const chartData = ref([])
const loading = ref(false)
const chartContainer = ref(null)

// 计算属性
const isEmpty = computed(() => chartData.value.length === 0)

// 初始化默认日期范围（最近7天）
const initDefaultDateRange = () => {
  const endDate = new Date()
  const startDate = new Date()
  startDate.setDate(endDate.getDate() - 7)
  dateRange.value = [
    formatDate(startDate),
    formatDate(endDate)
  ]
}

// 格式化日期
const formatDate = (date) => {
  return date.toISOString().split('T')[0]
}

// 初始化图表
const initChart = () => {
  if (chartContainer.value) {
    chart.value = echarts.init(chartContainer.value)
    window.addEventListener('resize', resizeChart)
    // 初始渲染空图表
    renderChart()
  }
}

// 调整图表大小
const resizeChart = () => {
  chart.value?.resize()
}

// 处理日期变化
const handleDateChange = () => {
  if (dateRange.value?.length === 2) {
    fetchData()
  }
}

// 获取数据
const fetchData = async () => {
  if (!dateRange.value?.length === 2) return
  
  axios.post('user/statics',{startTime:dateRange.value[0],endTime:dateRange.value[1]}).then(res=>{
    chartData.value = res
    renderChart()
  })
  
}

// 渲染折线图
const renderChart = () => {
  if (!chart.value) return
  
  const option = {
    title: {
      text: '每日用户数量趋势',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: (params) => {
        const date = params[0].axisValue
        const count = params[0].data
        return `
          <div style="font-weight:bold">${date}</div>
          <div>用户数: <span style="color:#409EFF">${count}</span></div>
        `
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: chartData.value.map(item => item.date),
      axisLabel: {
        rotate: 30,
        interval: 0,
        formatter: (value) => {
          return value.split('-').slice(1).join('-') // 只显示月-日
        }
      },
      axisLine: {
        lineStyle: {
          color: '#ccc'
        }
      }
    },
    yAxis: {
      type: 'value',
      name: '用户数',
      axisLine: {
        show: true,
        lineStyle: {
          color: '#ccc'
        }
      },
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
    },
    series: [{
      name: '用户数',
      type: 'line',
      data: chartData.value.map(item => item.count),
      smooth: true,
      symbol: 'circle',
      symbolSize: 8,
      itemStyle: {
        color: '#409EFF',
        borderColor: '#fff',
        borderWidth: 2
      },
      lineStyle: {
        width: 3,
        color: '#409EFF'
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(64, 158, 255, 0.3)' },
          { offset: 1, color: 'rgba(64, 158, 255, 0.1)' }
        ])
      },
      markPoint: {
        data: [
          { type: 'max', name: '峰值', symbolSize: 50 },
          { type: 'min', name: '谷值', symbolSize: 50 }
        ],
        label: {
          color: '#fff',
          formatter: (param) => {
            return param.name + '\n' + param.value
          }
        }
      },
      markLine: {
        data: [{ type: 'average', name: '平均值' }],
        label: {
          position: 'insideEndTop',
          formatter: '平均: {c}'
        }
      }
    }]
  }
  
  chart.value.setOption(option, true) // true表示不合并选项
}



// 生命周期
onMounted(() => {
  initChart()
  initDefaultDateRange()
  fetchData()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeChart)
  chart.value?.dispose()
})
</script>

<style scoped>
.chart-wrapper {
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.toolbar {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.chart-container {
  width: 100%;
  height: 500px;
}

.empty-tip {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}

@media (max-width: 768px) {
  .toolbar {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .chart-container {
    height: 400px;
  }
}
</style>