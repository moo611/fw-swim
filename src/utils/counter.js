import { ref } from "vue"
const leftNum = ref(60)

export function setNum(num){
  leftNum.value = num
  console.log(leftNum.value)
}


export function getNum(){
  return leftNum
}