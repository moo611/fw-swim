<template>
  <div style="display: flex; align-items: center;  width: 100%; flex-direction: column;">


    <el-upload class="avatar-uploader" action="http://8.155.12.207:8888/upload/avatar" :show-file-list="false"
      :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
      <el-image style="margin-bottom: 30px; cursor: pointer; width: 80px; height: 80px; border-radius: 50%;"
        :src="imageUrl">
        <template #placeholder>

          <div class="image-slot">
            <img src="../../assets/avt_default.png" />
          </div>
        </template>
        <template #error>

          <div class="image-slot">
            <img src="../../assets/avt_default.png" />
          </div>
        </template>
      </el-image>

    </el-upload>
    <div style="width: 400px;height: 300px;">
      <video ref="video" autoplay style="width: 100%;height: 100%; object-fit: cover;"></video>
    </div>
    
      <canvas ref="canvas" style="display: none;"></canvas>
      <div style="height:50px;display: flex; align-items: center; justify-content: center;">
        <el-button @click="startCamera">打开相机</el-button>
        <el-button @click="takePhoto">拍照</el-button>
        <el-button @click="stopCamera">关闭相机</el-button>
      </div>

    <el-form class="form" :model="form" label-width="auto" style="width: 400px">
      <div>
        <span>用户名</span>
      </div>
      <el-form-item>
        <el-input v-model="form.username" :disabled="true" />
      </el-form-item>
      <div>
        <span>昵称</span>
      </div>
      <el-form-item>
        <el-input v-model="form.nickname" />
      </el-form-item>
      <div>
        <span>新密码（如要修改）</span>
      </div>
      <el-form-item>
        <el-input v-model="newPwd" type="password" />
      </el-form-item>

    </el-form>
    <el-button type="primary" style="width: 200px;" @click="handleEdit">修改</el-button>
  </div>

</template>

<script setup lang="js">
import { ref } from 'vue';
import myaxios from '../../axios';
import { setUser, getUser } from '../../utils/auth';
import { ElMessage } from 'element-plus';

const newPwd = ref('')

const imageUrl = ref()
imageUrl.value = getUser().avatar

const handleAvatarSuccess = (response, uploadFile) => {
  console.log(response)
  imageUrl.value = response.data
};

const beforeAvatarUpload = (rawFile) => {
  if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!');
    return false;
  }

  return true;
};
const handleEdit = () => {
  if (newPwd) {
    form.password = newPwd.value
  }
  form.avatar = imageUrl.value
  myaxios.put('admin', form).then(res => {

    ElMessage.success("修改成功")
    getInfo()
  })

}

const form = getUser()

const getInfo = () => {
  myaxios.get('admin/info').then(res => {
    const user = res
    console.log(user)
    setUser(user)

  })
}

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
        myaxios.post('admin/face',{image:res,userId:getUser().id}).then(res=>{
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

<style lang="css" scoped></style>