<template>

  <div style="width: 100%; height: 100%; ">
    <div class="div-top">
      <div class="top-left">
        <span style="text-align: center; font-size: 25px; font-weight: 600;">场馆预览</span>
        <Carousel class="my-slide" v-bind="config">
          <Slide v-for="(image, index) in images" :key="index">
            <img :src="image" alt="轮播图片" style="width: 100%; height: 100%" />
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
      <div class="top-right">
        <span style="text-align: center; font-size: 25px; font-weight: 600;">场馆活动</span>
        <div class="title" v-for="item, index in state.data.list">
          <h3 class="my-span"> {{ item.title }}</h3>
          <span class="my-span" style="font-size: 16px;">{{ item.content }}</span>
        </div>

      </div>
    </div>
    <div class="div-bottom">
      <span style="display: block; font-size: 25px; font-weight: 600; width: 120px;">场馆公告</span>

      <div class="right">
        <div v-for="item, index in savers" class="div-saver">
          <img :src="item.avatar" class="img-saver" />
          <span style="margin-top: 20px;">{{ item.desc }}</span>
        </div>
      </div>


    </div>

    <div class="div-time">
      <span style="display: block; font-size: 25px; font-weight: 600; width: 120px;">空闲时段</span>
      <div style="display: flex; width: 600px; margin: 0 auto;">
        <div v-for="item, index in times" class="item-time">{{ item }}</div>
      </div>
      <div style="display: flex; width: 600px; margin: 0 auto;">
        <div v-for="item, index in arr" class="item-time">{{ getName1(item) }}</div>
      </div>
      <div style="display: flex; width: 600px; margin: 0 auto;">
        <div v-for="item, index in arr" class="item-time">{{ getName2(item) }}</div>
      </div>
      <div style="display: flex; width: 600px; margin: 0 auto;">
        <div v-for="item, index in arr" class="item-time">{{ getName3(item) }}</div>
      </div>
      <div style="display: flex; width: 600px; margin: 0 auto;">
        <div v-for="item, index in arr" class="item-time">{{ getName4(item) }}</div>
      </div>
      <div style="display: flex; width: 600px; margin: 0 auto;">
        <div v-for="item, index in arr" class="item-time">{{ getName5(item) }}</div>
      </div>
      <div style="display: flex; width: 600px; margin: 0 auto;">
        <div v-for="item, index in arr" class="item-time">{{ getName6(item) }}</div>
      </div>
      <div style="display: flex; width: 600px; margin: 0 auto;">
        <div v-for="item, index in arr" class="item-time">{{ getName7(item) }}</div>
      </div>

    </div>


  </div>
</template>
<script setup lang="js">
import axios from '../../axios';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { reactive } from 'vue';
const arr = [-1, 0, 1, 2, 3, 4]
const times = ['','8:20-10:00', '10:20-12:00', '14:30-16:10', '16:30-18:00', '18:00-20:00']
const config = {
  autoplay: 2000,
  wrapAround: false,
  pauseAutoplayOnHover: true,
}
const state = reactive({
  data: {},
  checkList1: [],
  checkList2: [],
  checkList3: [],
  checkList4: [],
  checkList5: [],
  checkList6: [],
  checkList7: [],

})

const getName1 = (item) => {
  if (item == -1) {
    return '星期一'
  }

  if (state.checkList1.includes(item)) {
    return "空闲"
  }
  return ""
}
const getName2 = (item) => {
  if (item == -1) {
    return '星期二'
  }
  if (state.checkList2.includes(item)) {
    return "空闲"
  }
  return ""
}
const getName3 = (item) => {
  if (item == -1) {
    return '星期三'
  }
  if (state.checkList3.includes(item)) {
    return "空闲"
  }
  return ""
}
const getName4 = (item) => {
  if (item == -1) {
    return '星期四'
  }
  if (state.checkList4.includes(item)) {
    return "空闲"
  }
  return ""
}
const getName5 = (item) => {
  if (item == -1) {
    return '星期五'
  }
  if (state.checkList5.includes(item)) {
    return "空闲"
  }
  return ""
}
const getName6 = (item) => {
  if (item == -1) {
    return '星期六'
  }
  if (state.checkList6.includes(item)) {
    return "空闲"
  }
  return ""
}
const getName7 = (item) => {
  if (item == -1) {
    return '星期日'
  }
  if (state.checkList7.includes(item)) {
    return "空闲"
  }
  return ""
}
const images = [
  new URL('../../assets/gd.jpg', import.meta.url).href,
  new URL('../../assets/gd2.jpg', import.meta.url).href,
  // new URL('../../assets/saver3.jpg', import.meta.url).href
]

const savers = [{ id: 1, desc: '作为一名拥有多年经验的资深救生员，我深知责任之重，时刻准备着以最快的速度、最专业的技能，为游泳馆里的全体学员教职工保驾护航。', avatar: new URL('../../assets/saver1.jpg', import.meta.url).href },
{ id: 2, desc: '守护生命，责无旁贷。”这是我作为一名救生员的坚定信念。', avatar: new URL('../../assets/saver2.jpg', import.meta.url).href },
{ id: 3, desc: '冬练三九夏练三伏，练兵备战永不停歇，值班值守毫不懈怠，时刻准备着闪电出击，他们用舍生忘死、大爱无疆与怒海争锋，践行青春无悔。', avatar: new URL('../../assets/saver3.jpg', import.meta.url).href },
]

const getNotifyList = () => {
  axios.get('notify/list', { params: { pageNum: 1, pageSize: 10000 } }).then(res => {

    state.data = res

    console.log(state.data)

  })
}
getNotifyList()

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
      item.day == '6').flatMap(item => {
        return JSON.parse(item.items)
      })
    state.checkList7 = res.list.filter(item =>
      item.day == '7'
    ).flatMap(item => {
      return JSON.parse(item.items)
    })
    console.log(state.checkList1)
    console.log(state.checkList2)
  })

}

getData()
</script>
<style lang="css" scoped>
.my-slide {
  width: 100%;
  height: 400px;
  margin: 0 auto;
}

.div-top {
  box-sizing: border-box;
  padding: 20px;
  flex-direction: row;
  display: flex;
  width: 100%;
  /* height: 50%; */
  height: 400px;
}

.top-left {
  margin-right: 10px;
  width: 50%;
  height: 100%;

}

.top-right {
  width: 50%;
  height: 100%;
  overflow-y: auto;
  /* overflow-x: hidden; */
}

.div-bottom {
  box-sizing: border-box;
  padding: 20px;
  margin-top: 20px;
  /* display: flex; */
  width: 100%;
  /* height: 50%; */
}

.right {
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.div-saver {

  width: 300px;
  /* height: 500px; */

}

.img-saver {
  width: 300px;
  height: 200px;
  display: block;
}

.title {

  font-size: 14px;
  margin: 10px;
}

.my-span {
  display: inline-block;
  width: 100%;
  /* 设置 span 的宽度占满 div */
  word-wrap: break-word;
  /* 支持长单词的换行 */
  word-break: break-all;
  /* 长单词时换行 */

}

.div-time {
  /* background-color: white; */
  width: 100%;
  padding: 20px;
}

.item-time {
  border: 0.5px solid black;
  width: 100px;
  height: 50px;
  text-align: center;
}
</style>