<template>
  <div style="width: 100%; height: 100%;position: relative;">
    <div class="header">
      <el-select style="width: 150px;margin-right: 10px;" v-model="queryParams.role" placeholder="请选择角色" @change="getAdminList">
        <el-option v-for="item in roleOptions" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-input v-model="queryParams.nickname" style="width: 150px; margin-right: 10px;" placeholder="请输入姓名" />
      <el-input v-model="queryParams.studyNo" style="width: 150px; margin-right: 10px;" placeholder="请输入学号"/>
      <el-select style="width: 150px;margin-right: 10px;" v-model="queryParams.sex" placeholder="请选择">
        <el-option v-for="item in sexOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <el-button v-show="true" type="primary" @click="getAdminList">查询</el-button>
      <el-button v-show="false" @click="handleAdd" type="primary" class="btn-add">新增</el-button>
    </div>
    <el-pagination style="position: absolute;right: 10px;top: 0; margin: 10px" layout="prev, pager, next" :total="state.data.total" :page-size="queryParams.pageSize"
      @change="onPageChange" />
    <el-table class="my-table" :data="state.data.list">

      <el-table-column prop="nickname" label="姓名" />
      <el-table-column prop="cardNo" label="手牌号" />
      <el-table-column prop="studyNo" label="学号" />
      <el-table-column prop="age" label="年龄" />
      <el-table-column prop="sex" label="性别" :formatter="sexFormatter"/>
      <el-table-column prop="createTime" label="创建时间" />

      <el-table-column label="操作" width="180">
        <template #default="scope">
          <el-button type="primary" @click="handleEdit(scope.$index, scope.row)">
            修改
          </el-button>
          <!-- <el-button type="danger" @click="handleDel(scope.$index, scope.row)">
            删除
          </el-button> -->
        </template>
      </el-table-column>
    </el-table>


    <el-dialog v-model="dialogVisible1" width="500" @close="clearData">
      <div style="width: 400px;height: 300px;">
      <video ref="video" autoplay style="width: 100%;height: 100%; object-fit: cover;"></video>
    </div>
    
      <canvas ref="canvas" style="display: none;"></canvas>
      <div style="height:50px;display: flex; align-items: center; justify-content: center;">
        <el-button @click="startCamera">打开相机</el-button>
        <el-button @click="takePhoto">拍照</el-button>
        <el-button @click="stopCamera">关闭相机</el-button>
      </div>
      <el-form class="form" :model="form" label-width="auto" style="max-width: 600px">
        <el-form-item label="姓名">
          <el-input v-model="form.nickname" />
        </el-form-item>
        <el-form-item label="手牌号">
          <el-input v-model="form.cardNo" :disabled="mode == '1'" />
        </el-form-item>
        <el-form-item label="学号">
          <el-input v-model="form.studyNo" />
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="form.age" />
        </el-form-item>
        <el-form-item label="性别">
          <el-select placeholder="请选择" v-model="form.sex" :disabled="mode == '1'">
            <el-option v-for="item in sexOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
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
import { getUser } from '../../utils/auth';
let mode = '0'
const sexOptions = [{ value: 'all', label: '全部' }, { value: '0', label: '男' }, { value: '1', label: '女' }]
const sexFormatter = (row, col, cellValue) => {
  if (cellValue == '0') {
    return '男'
  }
  return '女'
}
const roleOptions=[{value:'1',label:"学生"},{value:'0',label:"管理员"}]
const queryParams = reactive({
  pageNum: 1,
  pageSize: 10,
  nickname: null,
  sex: 'all',
  studyNo: null,
  role:'1'
})
const state = reactive({
  data: {},
  curAdmin: {}
})

const form = reactive({
  name: '',
  sex: '',
  studyNo: '',
  cardNo: null,
  age: null,
  id: '',
  username:''
})
const dialogVisible1 = ref(false)

const clearData = () => {
  form.nickname = ''
  form.sex = ''
  form.age = 0
  form.id = ''
  form.studyNo = ''
  form.cardNo = null
  form.username=''
  mode = '0'
}



const getAdminList = () => {
  let params = {}
  params.nickname = queryParams.nickname
  params.role = queryParams.role
  if (queryParams.sex == 'all') {
    params.sex = null
  } else {
    params.sex = queryParams.sex
  }
  params.studyNo = queryParams.studyNo
  params.pageNum = queryParams.pageNum
  params.pageSize = queryParams.pageSize
  axios.get('admin/list', { params: params }).then(res => {

    state.data = res

    console.log(state.data)

  })

}

const saveOrUpdate = () => {
  if (mode == '0') {


    axios.post('admin', form).then(res => {

      dialogVisible1.value = false
      ElMessage.success('新增成功')
      getAdminList()

    })
  } else {
    axios.put('admin', form).then(res => {

      dialogVisible1.value = false
      ElMessage.success('修改成功')
      getAdminList()

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
  dialogVisible1.value = true
}
const handleDel = (index, row) => {
  axios.delete('admin/' + row.id).then(res => {
    ElMessage.success("删除成功")
    getAdminList()
  })
}

const onPageChange = (page, size) => {
  queryParams.pageNum = page
  getAdminList()
}

getAdminList()


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
        axios.post('admin/face',{image:res,userId:form.id}).then(res=>{
          ElMessage.success('人脸录入成功')
          //stopCamera()
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


// 停止摄像头
const stopCamera = () => {
  if (stream) {
    stream.getTracks().forEach((track) => track.stop());
    stream = null;
  }
};

</script>

<style lang="css" scoped>
.header {
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 30px;

}
.my-table{
  /* margin-bottom: 30px; */
  /* height: 100%; */
  width: 100%;
}

.btn-add {
  position: absolute;
  right: 20px;
}

</style>