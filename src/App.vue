<template>
  <div class="my-app">
    <router-view></router-view>
  </div>
</template>

<script setup>

</script>

<style>
.my-app{
 
  /* height: 100vh; */
  background-image: url(./assets/bg2.jpg);
 
}
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

/* 适用于 WebKit 内核（如 Chrome、Edge、Safari） */
::-webkit-scrollbar {
    width: 6px;  /* 纵向滚动条宽度 */
    height: 6px; /* 横向滚动条高度 */
}

::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2); /* 滚动条颜色 */
    border-radius: 3px; /* 圆角 */
}

::-webkit-scrollbar-track {
    background: transparent; /* 轨道背景 */
}



</style>
