<template>
  <div style="width: 100%; height: 100%;position: relative;">
    <div class="header">
      <el-button v-show="false" type="primary" @click="getNotifyList">查询</el-button>
      <el-button @click="handleAdd" type="primary" class="btn-add">新增</el-button>
    </div>
    <el-table class="my-table" :data="state.data.list">

      <el-table-column prop="title" label="标题" />
      <el-table-column prop="startTime" label="开始时间" />
      <el-table-column prop="endTime" label="结束时间" />
      <el-table-column prop="createTime" label="创建时间" />

      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="primary" @click="handleEdit(scope.$index, scope.row)">
            编辑
          </el-button>
          <el-button type="danger" @click="handleDel(scope.$index, scope.row)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination style="position: absolute;right: 10px;top: 0; margin: 10px" layout="prev, pager, next" :total="state.data.total" :page-size="queryParams.pageSize"
      @change="onPageChange" />

    <el-dialog v-model="dialogVisible1" width="500" @close="clearData">

      <el-form class="form" :model="form" label-width="auto" style="max-width: 600px">
        <el-form-item label="标题">
          <el-input v-model="form.title" />
        </el-form-item>
        <el-form-item label="内容">
          <el-input v-model="form.content" />
        </el-form-item>

        <el-form-item label="类别">
          <el-date-picker value-format="YYYY-MM-DD" v-model="dateRange" type="daterange" range-separator="至"
            start-placeholder="开始日期" end-placeholder="结束日期" />
        </el-form-item>

      </el-form>

      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible1 = false">取消</el-button>
          <el-button type="primary" @click="saveOrUpdate">
            确定
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="js" setup>
import { reactive, ref } from 'vue';
import axios from '../../axios';
import { ElMessage } from 'element-plus';
let mode = '0'
const queryParams = reactive({
  pageNum: 1,
  pageSize: 10,

})
const dateRange = ref([])
const state = reactive({
  data: {},
  curNotify: {}
})

const form = reactive({
  id:null,
  title: '',
  content: '',
  startTime: '',
  endTime: '',

})
const dialogVisible1 = ref(false)

const clearData = () => {
  form.title = ''
  form.content = ''
  form.startTime = ''
  form.endTime = ''
  dateRange.value=[]
  mode = '0'
}



const getNotifyList = () => {

  axios.get('notify/list', { params: queryParams }).then(res => {

    state.data = res

    console.log(state.data)

  })

}

const saveOrUpdate = () => {

  if(dateRange.value){
    form.startTime = dateRange.value[0]
    form.endTime = dateRange.value[1]
  }

  if (mode == '0') {


    axios.post('notify', form).then(res => {

      dialogVisible1.value = false
      ElMessage.success('新增成功')
      getNotifyList()

    })
  } else {
    axios.put('notify', form).then(res => {

      dialogVisible1.value = false
      ElMessage.success('修改成功')
      getNotifyList()

    })
  }


}

const copyValue = (src, target) => {
  // 遍历 target 中的 key，并将 src 对应属性赋值给 target
  Object.keys(target).forEach((key) => {
    if (src[key] !== undefined) {
      target[key] = src[key] // 仅赋值存在于 src 中的属性
    }
  })
}

const handleAdd = () => {
  mode = '0'
  dialogVisible1.value = true
}

const handleEdit = (index, row) => {
  mode = '1'
  copyValue(row, form)
 
  dateRange.value[0] = form.startTime
  dateRange.value[1] = form.endTime
  dialogVisible1.value = true
}
const handleDel = (index, row) => {
  axios.delete('notify/' + row.id).then(res => {
    ElMessage.success("删除成功")
    getNotifyList()
  })
}

const onPageChange = (page, size) => {
  queryParams.pageNum = page
  getNotifyList()
}

getNotifyList()

</script>

<style lang="css" scoped>
.header {
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  /* margin-bottom: 30px; */

}

.btn-add {
  position: absolute;
  left: 0px;
}
</style>