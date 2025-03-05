<template>
  <div style="width: 100%;">

    <video ref="videoRef" src="../../assets/video.mp4" controls width="900" style="display: block; margin: 0 auto; margin-top: 40px;"></video>

  </div>
</template>
<script setup lang="js">
import { ref } from 'vue';

const videoRef = ref(null); // 视频元素引用
</script>