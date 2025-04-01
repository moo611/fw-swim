<template>
  <div class="main">
    <div class="header">
      
      <img src="../assets/swimlogo.jpg" style="width: 80px; height: 80px;" />
      <h3 style="margin-left: 30px;">军泳智控</h3>
      <span style="position: absolute; right: 200px;">当前泳池水温30℃，当前余位：{{ getNum() }}</span>
      <div class="btn-logout">
        <!-- <span style="margin-right: 50px;">当前用户：{{ curName }}</span>
        <el-button type="danger" @click="logout">退出登录</el-button> -->
        <el-popover v-model:visible="popoverVisible" placement="bottom" width="200">
          <el-button type="text" @click="logout">退出登录</el-button>
          <template #reference>
            <div @click="popoverVisible = !popoverVisible" style="display: flex; align-items: center; cursor: pointer;">
              <el-image v-if="getUser()" style="width: 60px; height: 60px; border-radius: 50%;" :src="getUser().avatar">
                <template #placeholder>

                  <div class="image-slot">
                    <img src="../assets/avt_default.png" />
                  </div>
                </template>
                <template #error>

                  <div class="image-slot">
                    <img src="../assets/avt_default.png" />
                  </div>
                </template>
              </el-image>
              <span style="margin-left: 8px;">{{ curName }}</span>
            </div>
          </template>
        </el-popover>
      </div>

    </div>
    <div style="height: 1px; width: 100%; background-color: #f0f0f0;"></div>
    <div class="content">
      <div class="sidebar">


        <el-menu :default-active="activeMenu" router class="custom-menu">

          <el-menu-item v-for="item, index in menuList" :index="item.value">
            <span>{{ item.label }}</span>
          </el-menu-item>
        </el-menu>

      </div>

      <router-view class="container">
      </router-view>


    </div>

  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router';
import { clear, getUser, setUser } from '../utils/auth';
import axios from '../axios'
import { setNum, getNum } from '../utils/counter';
const menuList = ref([])
const popoverVisible = ref(false)
const router = useRouter();
const route = useRoute();
const activeMenu = ref(route.path);
const curName = ref('')
watch(route, (newRoute) => {
  console.log("-----------------" + newRoute.path)
  activeMenu.value = newRoute.path;
});
function logout() {
  clear(); // 清除缓存的用户名
  router.push('/login'); // 重定向到登录页
}



const getCount = () => {
  axios.get('user/count').then(res => {
    let num = 60 - res
    console.log(num)
    setNum(num)
  })
}


const getInfo = () => {


  axios.get('admin/info').then(res => {
    const user = res
    console.log(user)
    setUser(user)
    curName.value = user.nickname

    //动态获取路由
    let menus = []
    if (user.role == '0') {
      menus.push({ label: '首页', value: '/dashboard/home' })
      menus.push({ label: '选号', value: '/dashboard/selectNo' })
      menus.push({ label: '智能安全管理', value: '/dashboard/monitor' })
      menus.push({ label: '人员管理', value: '/dashboard/userInfo' })
      menus.push({ label: '公告管理', value: '/dashboard/notify' })
      menus.push({ label: '时段管理', value: '/dashboard/time' })
      menus.push({ label: '统计', value: '/dashboard/statics' })
      menus.push({ label: '设置', value: '/dashboard/setting' })

    } else {
      menus.push({ label: '首页', value: '/dashboard/home' })
      menus.push({ label: '选号', value: '/dashboard/selectNo' })
      menus.push({ label: '设置', value: '/dashboard/setting' })

    }
    menuList.value = menus

  })
}
getCount()
getInfo()

</script>
<style lang="css" scoped>
/* 使用 ::v-deep 来覆盖 el-menu 的样式 */
::v-deep .custom-menu {
  font-size: 20px;
  /* 设置菜单的字体大小 */
  font-weight: 600;
  background-color: transparent;
}

::v-deep .custom-menu .el-menu-item {
  font-size: 20px;
  /* 覆盖子元素 el-menu-item 的字体大小 */
  font-weight: 600;
  background-color: transparent;
}

.main {
  /* overflow: hidden; */
  /* height: 100%; */
  max-width: 1280px;
  margin: 0 auto;
  background-color: transparent;
}

.header {
  height: 120px;
  /* background-color: #409eff; */
  position: relative;
  background-color: transparent;
  display: flex;
  align-items: center;
}

.btn-logout {
  position: absolute;
  right: 10px;

}

.sidebar {
  width: 20%;
}

.content {

  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  height: calc(100vh - 150px);
}

.container {

  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  padding: 20px;
  /* margin: 30px; */
  border-radius: 12px;
  box-sizing: border-box;
}
</style>
