<template>
  <div class="select-main">

    <div class="left">
      <div style="width: 100%;display: flex; justify-content: center; align-items: center;">
        <span style="font-size: 20px;">男手牌号</span>
      </div>
      <!-- <div class="my-btn" :class="{
        'solid-blue': state.selectManNos.indexOf(item) !== -1,
        'hollow-border': state.selectManNos.indexOf(item) === -1
      }" v-for="item, index in state.manNos" @click="handle(item, '0')">
        <span> {{ item }}</span>

      </div> -->

      <div
        style="display: flex; flex-direction: row; align-items: center; width: 100%; justify-content: center;margin-top: 30px">
        <div class="my-btn" :class="{
          'solid-blue': state.selectManNos.indexOf(6) !== -1,
          'hollow-border': state.selectManNos.indexOf(6) === -1
        }" @click="handle(6, '0')">6</div>
        <div class="my-btn" :class="{
          'solid-blue': state.selectManNos.indexOf(5) !== -1,
          'hollow-border': state.selectManNos.indexOf(5) === -1
        }" @click="handle(5, '0')">5</div>
        <div class="my-btn" :class="{
          'solid-blue': state.selectManNos.indexOf(4) !== -1,
          'hollow-border': state.selectManNos.indexOf(4) === -1
        }" @click="handle(4, '0')">4</div>
        <div class="my-btn" :class="{
          'solid-blue': state.selectManNos.indexOf(3) !== -1,
          'hollow-border': state.selectManNos.indexOf(3) === -1
        }" @click="handle(3, '0')">3</div>
        <div class="my-btn" :class="{
          'solid-blue': state.selectManNos.indexOf(2) !== -1,
          'hollow-border': state.selectManNos.indexOf(2) === -1
        }" @click="handle(2, '0')">2</div>
        <div class="my-btn" :class="{
          'solid-blue': state.selectManNos.indexOf(1) !== -1,
          'hollow-border': state.selectManNos.indexOf(1) === -1
        }" @click="handle(1, '0')">1</div>
      </div>
      
      <div style="display: flex; flex-direction: row; width: 100%; margin-top: 30px;box-sizing: border-box;">
        <div style="display: flex;flex-direction: column; width: 60px;">
          <div class="my-btn" :class="{
            'solid-blue': state.selectManNos.indexOf(7) !== -1,
            'hollow-border': state.selectManNos.indexOf(7) === -1
          }" @click="handle(7, '0')">7</div>
          <div class="my-btn" :class="{
            'solid-blue': state.selectManNos.indexOf(8) !== -1,
            'hollow-border': state.selectManNos.indexOf(8) === -1
          }" @click="handle(8, '0')">8</div>
          <div class="my-btn" :class="{
            'solid-blue': state.selectManNos.indexOf(9) !== -1,
            'hollow-border': state.selectManNos.indexOf(9) === -1
          }" @click="handle(9, '0')">9</div>
          <div class="my-btn" :class="{
            'solid-blue': state.selectManNos.indexOf(10) !== -1,
            'hollow-border': state.selectManNos.indexOf(10) === -1
          }" @click="handle(10, '0')">10</div>
          <div class="my-btn" :class="{
            'solid-blue': state.selectManNos.indexOf(11) !== -1,
            'hollow-border': state.selectManNos.indexOf(11) === -1
          }" @click="handle(11, '0')">11</div>
          <div class="my-btn" :class="{
            'solid-blue': state.selectManNos.indexOf(12) !== -1,
            'hollow-border': state.selectManNos.indexOf(12) === -1
          }" @click="handle(12, '0')">12</div>
        </div>
        <div style="height: 100%; flex-grow: 1;"></div>
        <div style="display: flex;flex-direction: column; width: 60px;">
          <div class="my-btn" :class="{
            'solid-blue': state.selectManNos.indexOf(18) !== -1,
            'hollow-border': state.selectManNos.indexOf(18) === -1
          }" @click="handle(18, '0')">18</div>
          <div class="my-btn" :class="{
            'solid-blue': state.selectManNos.indexOf(17) !== -1,
            'hollow-border': state.selectManNos.indexOf(17) === -1
          }" @click="handle(17, '0')">17</div>
          <div class="my-btn" :class="{
            'solid-blue': state.selectManNos.indexOf(16) !== -1,
            'hollow-border': state.selectManNos.indexOf(16) === -1
          }" @click="handle(16, '0')">16</div>
          <div class="my-btn" :class="{
            'solid-blue': state.selectManNos.indexOf(15) !== -1,
            'hollow-border': state.selectManNos.indexOf(15) === -1
          }" @click="handle(15, '0')">15</div>
          <div class="my-btn" :class="{
            'solid-blue': state.selectManNos.indexOf(14) !== -1,
            'hollow-border': state.selectManNos.indexOf(14) === -1
          }" @click="handle(14, '0')">14</div>
          <div class="my-btn" :class="{
            'solid-blue': state.selectManNos.indexOf(13) !== -1,
            'hollow-border': state.selectManNos.indexOf(13) === -1
          }" @click="handle(13, '0')">13</div>
        </div>


        <div style="display: flex;flex-direction: column; width: 60px;">
          <div class="my-btn" :class="{
            'solid-blue': state.selectManNos.indexOf(19) !== -1,
            'hollow-border': state.selectManNos.indexOf(19) === -1
          }" @click="handle(19, '0')">19</div>
          <div class="my-btn" :class="{
            'solid-blue': state.selectManNos.indexOf(20) !== -1,
            'hollow-border': state.selectManNos.indexOf(20) === -1
          }" @click="handle(20, '0')">20</div>
          <div class="my-btn" :class="{
            'solid-blue': state.selectManNos.indexOf(21) !== -1,
            'hollow-border': state.selectManNos.indexOf(21) === -1
          }" @click="handle(21, '0')">21</div>
          <div class="my-btn" :class="{
            'solid-blue': state.selectManNos.indexOf(22) !== -1,
            'hollow-border': state.selectManNos.indexOf(22) === -1
          }" @click="handle(22, '0')">22</div>
          <div class="my-btn" :class="{
            'solid-blue': state.selectManNos.indexOf(23) !== -1,
            'hollow-border': state.selectManNos.indexOf(23) === -1
          }" @click="handle(23, '0')">23</div>
          <div class="my-btn" :class="{
            'solid-blue': state.selectManNos.indexOf(24) !== -1,
            'hollow-border': state.selectManNos.indexOf(24) === -1
          }" @click="handle(24, '0')">24</div>
        </div>
        <div style="height: 100%; flex-grow: 1;"></div>
        <div style="display: flex;flex-direction: column; width: 60px;">
          <div class="my-btn" :class="{
            'solid-blue': state.selectManNos.indexOf(30) !== -1,
            'hollow-border': state.selectManNos.indexOf(30) === -1
          }" @click="handle(30, '0')">30</div>
          <div class="my-btn" :class="{
            'solid-blue': state.selectManNos.indexOf(29) !== -1,
            'hollow-border': state.selectManNos.indexOf(29) === -1
          }" @click="handle(29, '0')">29</div>
          <div class="my-btn" :class="{
            'solid-blue': state.selectManNos.indexOf(28) !== -1,
            'hollow-border': state.selectManNos.indexOf(28) === -1
          }" @click="handle(28, '0')">28</div>
          <div class="my-btn" :class="{
            'solid-blue': state.selectManNos.indexOf(27) !== -1,
            'hollow-border': state.selectManNos.indexOf(27) === -1
          }" @click="handle(27, '0')">27</div>
          <div class="my-btn" :class="{
            'solid-blue': state.selectManNos.indexOf(26) !== -1,
            'hollow-border': state.selectManNos.indexOf(26) === -1
          }" @click="handle(26, '0')">26</div>
          <div class="my-btn" :class="{
            'solid-blue': state.selectManNos.indexOf(25) !== -1,
            'hollow-border': state.selectManNos.indexOf(25) === -1
          }" @click="handle(25, '0')">25</div>
        </div>
      </div>


    </div>
    <div style="width: 1px; background-color: black;"></div>
    <div class="right">
      <div style="width: 100%;display: flex; justify-content: center; align-items: center;">
        <span style="font-size: 20px;">女手牌号</span>
      </div>


      <!-- <div class="my-btn" :class="{
        'solid-blue2': state.selectWomanNos.indexOf(item) !== -1,
        'hollow-border2': state.selectWomanNos.indexOf(item) === -1
      }" v-for="item, index in state.womanNos" @click="handle(item, '1')">
        <span>{{ item }}</span>

      </div> -->

      
      
      <div style="display: flex; flex-direction: row; width: 100%; margin-top: 30px;">
        <div style="display: flex;flex-direction: column; width: 60px;">
          <div class="my-btn" :class="{
            'solid-blue2': state.selectWomanNos.indexOf(19) !== -1,
            'hollow-border2': state.selectWomanNos.indexOf(19) === -1
          }" @click="handle(19, '1')">19</div>
          <div class="my-btn" :class="{
            'solid-blue2': state.selectWomanNos.indexOf(20) !== -1,
            'hollow-border2': state.selectWomanNos.indexOf(20) === -1
          }" @click="handle(20, '1')">20</div>
          <div class="my-btn" :class="{
            'solid-blue2': state.selectWomanNos.indexOf(21) !== -1,
            'hollow-border2': state.selectWomanNos.indexOf(21) === -1
          }" @click="handle(21, '1')">21</div>
          <div class="my-btn" :class="{
            'solid-blue2': state.selectWomanNos.indexOf(22) !== -1,
            'hollow-border2': state.selectWomanNos.indexOf(22) === -1
          }" @click="handle(22, '1')">22</div>
          <div class="my-btn" :class="{
            'solid-blue2': state.selectWomanNos.indexOf(23) !== -1,
            'hollow-border2': state.selectWomanNos.indexOf(23) === -1
          }" @click="handle(23, '1')">23</div>
          <div class="my-btn" :class="{
            'solid-blue2': state.selectWomanNos.indexOf(24) !== -1,
            'hollow-border2': state.selectWomanNos.indexOf(24) === -1
          }" @click="handle(24, '1')">24</div>
        </div>
        <div style="height: 100%; flex-grow: 1;"></div>
        <div style="display: flex;flex-direction: column; width: 60px;">
          <div class="my-btn" :class="{
            'solid-blue2': state.selectWomanNos.indexOf(18) !== -1,
            'hollow-border2': state.selectWomanNos.indexOf(18) === -1
          }" @click="handle(18, '1')">18</div>
          <div class="my-btn" :class="{
            'solid-blue2': state.selectWomanNos.indexOf(17) !== -1,
            'hollow-border2': state.selectWomanNos.indexOf(17) === -1
          }" @click="handle(17, '1')">17</div>
          <div class="my-btn" :class="{
            'solid-blue2': state.selectWomanNos.indexOf(16) !== -1,
            'hollow-border2': state.selectWomanNos.indexOf(16) === -1
          }" @click="handle(16, '1')">16</div>
          <div class="my-btn" :class="{
            'solid-blue2': state.selectWomanNos.indexOf(15) !== -1,
            'hollow-border2': state.selectWomanNos.indexOf(15) === -1
          }" @click="handle(15, '1')">15</div>
          <div class="my-btn" :class="{
            'solid-blue2': state.selectWomanNos.indexOf(14) !== -1,
            'hollow-border2': state.selectWomanNos.indexOf(14) === -1
          }" @click="handle(14, '1')">14</div>
          <div class="my-btn" :class="{
            'solid-blue2': state.selectWomanNos.indexOf(13) !== -1,
            'hollow-border2': state.selectWomanNos.indexOf(13) === -1
          }" @click="handle(13, '1')">13</div>
        </div>


        <div style="display: flex;flex-direction: column; width: 60px;">
          <div class="my-btn" :class="{
            'solid-blue2': state.selectWomanNos.indexOf(7) !== -1,
            'hollow-border2': state.selectWomanNos.indexOf(7) === -1
          }" @click="handle(7, '1')">7</div>
          <div class="my-btn" :class="{
            'solid-blue2': state.selectWomanNos.indexOf(8) !== -1,
            'hollow-border2': state.selectWomanNos.indexOf(8) === -1
          }" @click="handle(8, '1')">8</div>
          <div class="my-btn" :class="{
            'solid-blue2': state.selectWomanNos.indexOf(9) !== -1,
            'hollow-border2': state.selectWomanNos.indexOf(9) === -1
          }" @click="handle(9, '1')">9</div>
          <div class="my-btn" :class="{
            'solid-blue2': state.selectWomanNos.indexOf(10) !== -1,
            'hollow-border2': state.selectWomanNos.indexOf(10) === -1
          }" @click="handle(10, '1')">10</div>
          <div class="my-btn" :class="{
            'solid-blue2': state.selectWomanNos.indexOf(11) !== -1,
            'hollow-border2': state.selectWomanNos.indexOf(11) === -1
          }" @click="handle(11, '1')">11</div>
          <div class="my-btn" :class="{
            'solid-blue2': state.selectWomanNos.indexOf(12) !== -1,
            'hollow-border2': state.selectWomanNos.indexOf(12) === -1
          }" @click="handle(12, '1')">12</div>
        </div>
        <div style="height: 100%; flex-grow: 1;"></div>
        <div style="display: flex;flex-direction: column; width: 60px;">
          <div class="my-btn" :class="{
            'solid-blue2': state.selectWomanNos.indexOf(6) !== -1,
            'hollow-border2': state.selectWomanNos.indexOf(6) === -1
          }" @click="handle(6, '1')">6</div>
          <div class="my-btn" :class="{
            'solid-blue2': state.selectWomanNos.indexOf(5) !== -1,
            'hollow-border2': state.selectWomanNos.indexOf(5) === -1
          }" @click="handle(5, '1')">5</div>
          <div class="my-btn" :class="{
            'solid-blue2': state.selectWomanNos.indexOf(4) !== -1,
            'hollow-border2': state.selectWomanNos.indexOf(4) === -1
          }" @click="handle(4, '1')">4</div>
          <div class="my-btn" :class="{
            'solid-blue2': state.selectWomanNos.indexOf(3) !== -1,
            'hollow-border2': state.selectWomanNos.indexOf(3) === -1
          }" @click="handle(3, '1')">3</div>
          <div class="my-btn" :class="{
            'solid-blue2': state.selectWomanNos.indexOf(2) !== -1,
            'hollow-border2': state.selectWomanNos.indexOf(2) === -1
          }" @click="handle(2, '1')">2</div>
          <div class="my-btn" :class="{
            'solid-blue2': state.selectWomanNos.indexOf(1) !== -1,
            'hollow-border2': state.selectWomanNos.indexOf(1) === -1
          }" @click="handle(1, '1')">1</div>
        </div>
      </div>


      <div style="display: flex; flex-direction: row; width: 100%; margin-top: 30px;">
        <div style="display: flex;flex-direction: column; width: 60px;">
          <div class="my-btn" :class="{
            'solid-blue2': state.selectWomanNos.indexOf(28) !== -1,
            'hollow-border2': state.selectWomanNos.indexOf(28) === -1
          }" @click="handle(28, '1')">28</div>
          <div class="my-btn" :class="{
            'solid-blue2': state.selectWomanNos.indexOf(29) !== -1,
            'hollow-border2': state.selectWomanNos.indexOf(29) === -1
          }" @click="handle(29, '1')">29</div>
          <div class="my-btn" :class="{
            'solid-blue2': state.selectWomanNos.indexOf(30) !== -1,
            'hollow-border2': state.selectWomanNos.indexOf(30) === -1
          }" @click="handle(30, '1')">30</div>
         
        </div>
        <div style="height: 100%; flex-grow: 1;"></div>
        <div style="display: flex;flex-direction: column; width: 60px;">
          <div class="my-btn" :class="{
            'solid-blue2': state.selectWomanNos.indexOf(25) !== -1,
            'hollow-border2': state.selectWomanNos.indexOf(25) === -1
          }" @click="handle(25, '1')">25</div>
          <div class="my-btn" :class="{
            'solid-blue2': state.selectWomanNos.indexOf(26) !== -1,
            'hollow-border2': state.selectWomanNos.indexOf(26) === -1
          }" @click="handle(26, '1')">26</div>
          <div class="my-btn" :class="{
            'solid-blue2': state.selectWomanNos.indexOf(27) !== -1,
            'hollow-border2': state.selectWomanNos.indexOf(27) === -1
          }" @click="handle(27, '1')">27</div>
        </div>
        <div style="display: flex;flex-direction: column; width: 60px;">
          
        </div>
        <div style="height: 100%; flex-grow: 1;"></div>
        <div style="display: flex;flex-direction: column; width: 60px;">
          
        </div>
      </div>

    </div>
    <el-dialog v-model="dialogVisible1" width="500" @close="clearData">

      <video ref="video" autoplay style="width: 100%;height: 100%; object-fit: cover;"></video>

      <canvas ref="canvas" style="display: none;"></canvas>
      <div style="height:50px;display: flex; align-items: center; justify-content: center;">
        <el-button @click="startCamera">打开相机</el-button>
        <el-button @click="takePhoto">拍照</el-button>
        <el-button @click="stopCamera">关闭相机</el-button>
      </div>

      <el-form class="form" :model="form" label-width="auto" style="max-width: 600px">
        <el-form-item label="姓名">
          <el-input v-model="form.name" :disabled="getUser().role == '1'" />
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="form.username" :disabled="getUser().role == '1'" />
        </el-form-item>
        <el-form-item label="学号">
          <el-input v-model="form.studyNo" :disabled="getUser().role == '1'" />
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="form.sex" placeholder="请选择" :disabled="true">
            <el-option v-for="item in sexOptions" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="form.age" :disabled="getUser().role == '1'" type="number" />
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

    <el-dialog v-model="dialogVisible2" @close="clearData" width="500">
      <!-- <span>确定删除该登录人的信息吗</span> -->

      <el-form class="form" :model="form" label-width="auto" style="max-width: 600px">
        <el-form-item label="姓名">
          <el-input v-model="form.name" :disabled="true" />
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="form.username" :disabled="true" />
        </el-form-item>
        <el-form-item label="学号">
          <el-input v-model="form.studyNo" :disabled="true" />
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="form.sex" placeholder="请选择" :disabled="true">
            <el-option v-for="item in sexOptions" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="form.age" :disabled="true" type="number" />
        </el-form-item>
      </el-form>

      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible2 = false">取消</el-button>
          <el-button type="danger" @click="delUser">
            删除
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script setup>
let mode = '0'
import axiosUp from 'axios';
import axios from '../../axios';
import { reactive, ref } from 'vue';
import { ElMessage } from 'element-plus';
import { setNum } from '../../utils/counter';
import { getUser } from '../../utils/auth';
const sexOptions = [{ value: '0', label: '男' }, { value: '1', label: '女' }]
const state = reactive({
  manNos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  womanNos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  selectManNos: [],
  selectWomanNos: []
})

const dialogVisible1 = ref(false)
const dialogVisible2 = ref(false)
const form = reactive({
  id: null,
  name: '',
  username: '',
  studyNo: null,
  sex: '0',
  age: null,
  cardNo: null,
})
const getSelectNos = (sex) => {
  let params = { pageNum: 1, pageSize: 50, sex: sex }
  axios.get('user/list', { params: params }).then(res => {
    if (sex == '0') {
      state.selectManNos = res.list.map(item => {
        return item.cardNo
      })
      console.log(state.selectManNos)
    } else {
      state.selectWomanNos = res.list.map(item => {
        return item.cardNo
      })
      console.log(state.selectWomanNos)
    }

  })

}

const handle = (item, sex) => {
  console.log(item)
  form.cardNo = item
  if (sex == '0') {
    if (state.selectManNos.indexOf(item) !== -1) {
      handleDel(item, sex)
    } else {
      handleAdd(item, sex)
    }
  } else {
    if (state.selectWomanNos.indexOf(item) !== -1) {
      handleDel(item, sex)
    } else {
      handleAdd(item, sex)
    }
  }

}

const handleAdd = (item, sex) => {

  if (getUser().role == '1' && getUser().sex != sex) {

    ElMessage.error('性别选择错误')
    return


  }


  dialogVisible1.value = true
  

  const user = getUser()
  if (user.role == '1') {

    copyValue(user, form)
    form.name = user.nickname
  }
  form.cardNo = item
  form.sex = sex
}

const handleDel = (item, sex) => {


  let params = {
    cardNo: item,
    sex: sex
  }
  axios.get('user/info', { params: params }).then(res => {


    if (getUser().role == '1' && res.username != getUser().username) {
      ElMessage.error('学生只能删除自己的登记！')
      return
    }

    dialogVisible2.value = true
    form.cardNo = item
    form.sex = sex
    console.log(form)
    copyValue(res, form)
  })

}

const copyValue = (src, target) => {
  // 遍历 target 中的 key，并将 src 对应属性赋值给 target
  Object.keys(target).forEach((key) => {
    if (src[key] !== undefined) {
      target[key] = src[key] // 仅赋值存在于 src 中的属性
    }
  })
}

const delUser = () => {
  axios.get('user/del?cardNo=' + form.cardNo + "&sex=" + form.sex).then(res => {
    dialogVisible2.value = false
    ElMessage.success('删除成功')
    getSelectNos('0')
    getSelectNos('1')
    getCount()
  })
}

const saveOrUpdate = () => {
  if (!form.username) {
    ElMessage.error('用户名必填')
    return
  }

  axios.post('user', form).then(res => {

    dialogVisible1.value = false
    ElMessage.success('登记成功')
    getSelectNos('0')
    getSelectNos('1')
    getCount()
  })
}
const clearData = () => {
  form.id = null
  form.name = ''
  form.studyNo = null
  form.sex = '0'
  form.age = null
  form.cardNo = null
  form.username = ''
}

const getCount = () => {
  axios.get('user/count').then(res => {
    let num = 60 - res
    console.log(num)
    setNum(num)
  })
}

getSelectNos('0')
getSelectNos('1')


const video = ref(null);
const canvas = ref(null);
let stream = null;

// 打开摄像头
const startCamera = async () => {
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: {
        width: { min: 640, ideal: 1280, max: 1920 },
        height: { min: 480, ideal: 720, max: 1080 },
        aspectRatio: 16 / 9, // 设置宽高比
      }, audio: false,
    });
    if (stream && stream.getVideoTracks().length > 0) {
      console.log("视频流已捕获");
      video.value.srcObject = stream;
    } else {
      console.error("视频流捕获失败");
    }

  } catch (error) {
    console.error("无法访问摄像头", error);
  }
};

// 拍照并转换为 File 对象
const takePhoto = () => {
  if (!canvas.value || !video.value) return;

  // 设置 canvas 大小为视频流的大小
  canvas.value.width = video.value.videoWidth;
  canvas.value.height = video.value.videoHeight;

  // 在 canvas 上绘制当前帧
  const context = canvas.value.getContext("2d");
  context.drawImage(video.value, 0, 0, canvas.value.width, canvas.value.height);

  // 将 canvas 转为 Blob
  canvas.value.toBlob((blob) => {
    if (blob) {
      blobToBase64(blob).then(res=>{
        axios.post('admin/faceCheck',{image:res}).then(res2=>{
          
          console.log('userId',res2)
          axios.get('admin/'+res2).then(res=>{
            copyValue(res,form)
          })  
          
        })
      })


    }
  }, "image/jpeg");
};


function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}


const uploadFile = (file) => {
  const formData = new FormData();

  // 添加文件和其他字段
  formData.append('file', file);          // 假设 file 是一个 File 对象
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  };
  axiosUp.post('http://8.155.12.207:8888/upload/avatar', formData, config).then(res => {
    form.avatar = res.data.data
    ElMessage.success("人脸录入成功！")
  }).catch(err => {
    console.log(err)
  })
}

// 停止摄像头
const stopCamera = () => {
  if (stream) {
    stream.getTracks().forEach((track) => track.stop());
    stream = null;
  }
};

// stopCamera()


</script>

<style lang="css" scoped>
.select-main {
  width: 100%;
  display: flex;
  height: 100%;
  padding: 0 10px;
  /* 容器左右的间距，确保第一个按钮不紧贴左侧 */
  box-sizing: border-box;
}

.left,
.right {
  margin: 20px;
  position: relative;
  width: 50%;
  /* display: flex;
  flex-wrap: wrap; */
  /* gap: 10px; */
  padding: 10px;
  /* height: 500px; */
  box-sizing: border-box;
}

.my-btn {
  box-sizing: border-box;
  margin: 5px;
  cursor: pointer;
  /* flex: 0 0 calc(20% - 30px); */
  /* 每行 5 个按钮，减去间距 */
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 为第一行的按钮整体右移10px */
/* .left .my-btn:nth-child(-n+5),
.right .my-btn:nth-child(-n+5) {
  margin-left: 12px;
} */

.hollow-border {
  border: 1px solid #66B2FF;
  /* background-color: white; */
  background-image: url(../../assets/door.jpg);
  background-position: left center;
  background-size: cover;
}

.solid-blue {
  border: 1px solid white;
  background-color: #66B2FF;
  color: white;
  /* 可选：设置文本颜色 */
}



.hollow-border2 {
  border: 1px solid #A97CC4;
  background-image: url(../../assets/door.jpg);
  background-position: left center;
  background-size: cover;
}

.solid-blue2 {
  border: 1px solid A97CC4;
  background-color: #D6C3E5;
  color: white;
  /* 可选：设置文本颜色 */
}

.user-info-panel {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>