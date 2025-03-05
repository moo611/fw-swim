<template>

  <div style="width: 100%;">

    <el-form class="form" label-width="auto"
      style="width: 800px;margin-top: 50px; margin-left: auto; margin-right: auto;">
      <div>
        <span>周一</span>
      </div>
      <el-form-item>
        <el-checkbox-group v-model="state.checkList1" @change="onChange1">
          <el-checkbox v-for="item, index in options" :label="item.label" :value="item.value" :key="item.value" />
        </el-checkbox-group>
      </el-form-item>

      <div>
        <span>周二</span>
      </div>
      <el-form-item>
        <el-checkbox-group v-model="state.checkList2" @change="onChange2">
          <el-checkbox v-for="item, index in options" :label="item.label" :value="item.value" :key="index" />
        </el-checkbox-group>
      </el-form-item>
      <div>
        <span>周三</span>
      </div>
      <el-form-item>
        <el-checkbox-group v-model="state.checkList3" @change="onChange3">
          <el-checkbox v-for="item, index in options" :label="item.label" :value="item.value" :key="index" />
        </el-checkbox-group>
      </el-form-item>
      <div>
        <span>周四</span>
      </div>
      <el-form-item>
        <el-checkbox-group v-model="state.checkList4" @change="onChange4">
          <el-checkbox v-for="item, index in options" :label="item.label" :value="item.value" :key="index" />
        </el-checkbox-group>
      </el-form-item>
      <div>
        <span>周五</span>
      </div>
      <el-form-item>
        <el-checkbox-group v-model="state.checkList5" @change="onChange5">
          <el-checkbox v-for="item, index in options" :label="item.label" :value="item.value" :key="index" />
        </el-checkbox-group>
      </el-form-item>
      <div>
        <span>周六</span>
      </div>
      <el-form-item>
        <el-checkbox-group v-model="state.checkList6" @change="onChange6">
          <el-checkbox v-for="item, index in options" :label="item.label" :value="item.value" :key="index" />
        </el-checkbox-group>
      </el-form-item>
      <div>
        <span>周日</span>
      </div>
      <el-form-item>
        <el-checkbox-group v-model="state.checkList7" @change="onChange7">
          <el-checkbox v-for="item, index in options" :label="item.label" :value="item.value" :key="index" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button style="width: 200px; margin: auto;" type="primary" @click="onSave">保存</el-button>
      </el-form-item>

    </el-form>


  </div>
</template>

<script lang="js" setup>
import axios from '../../axios';
import { ref, reactive } from 'vue';

const state = reactive({
  checkList1: [],
  checkList2: [],
  checkList3: [],
  checkList4: [],
  checkList5: [],
  checkList6: [],
  checkList7: [],
})



const options = [{ value: 0, label: '8:20-10:00' }, { value: 1, label: '10:20-12:00' }, { value: 2, label: '14:30-16:10' }, { value: 3, label: '16:30-18:00' }, { value: 4, label: '18:00-20:00' }]
const onChange1 = (value) => {

  state.checkList1 = value
  console.log(state.checkList1)

}
const onChange2 = (value) => {

  state.checkList2 = value
  console.log(state.checkList2)
}
const onChange3 = (value) => {

  state.checkList3 = value
}
const onChange4 = (value) => {

  state.checkList4 = value
}
const onChange5 = (value) => {

  state.checkList5 = value
}
const onChange6 = (value) => {

  state.checkList6 = value
}
const onChange7 = (value) => {

  state.checkList7 = value
}

const onSave = () => {

  axios.post('record', { day: '1', items: JSON.stringify(state.checkList1) })
  axios.post('record', { day: '2', items: JSON.stringify(state.checkList2) })
  axios.post('record', { day: '3', items: JSON.stringify(state.checkList3) })
  axios.post('record', { day: '4', items: JSON.stringify(state.checkList4) })
  axios.post('record', { day: '5', items: JSON.stringify(state.checkList5) })
  axios.post('record', { day: '6', items: JSON.stringify(state.checkList6) })
  axios.post('record', { day: '7', items: JSON.stringify(state.checkList7) })
}


const getData = () => {

  axios.get('record/list').then(res => {
    state.checkList1 = res.list.filter(item =>
      item.day == '1'
    ).flatMap(item => {
      return JSON.parse(item.items)
    })
    state.checkList2 = res.list.filter(item =>
      item.day == '2'
    ).flatMap(item => {
      return JSON.parse(item.items)
    })
    state.checkList3 = res.list.filter(item =>
      item.day == '3'
    ).flatMap(item => {
      return JSON.parse(item.items)
    })
    state.checkList4 = res.list.filter(item =>
      item.day == '4'
    ).flatMap(item => {
      return JSON.parse(item.items)
    })
    state.checkList5 = res.list.filter(item =>
      item.day == '5'
    ).flatMap(item => {
      return JSON.parse(item.items)
    })
    state.checkList6 = res.list.filter(item =>
      item.day == '6'
    ).flatMap(item => {
      return JSON.parse(item.items)
    })
    state.checkList7 = res.list.filter(item =>
      item.day == '7'
    ).flatMap(item => {
      return JSON.parse(item.items)
    })
    //state.checkList1 = [0,1,2]
    // console.log(state.checkList1)
    // console.log(state.checkList2)
  })

}

getData()

</script>
<style lang="css" scoped></style>