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


</script>

<style lang="css" scoped></style>