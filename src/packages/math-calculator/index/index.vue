<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5">
{
  style: {
    navigationBarTitleText: '数学计算器',
  },
}
</route>
<template>
  <view class="container">
    <view class="panel-display" style="position: relative">
      <view id="display-num">{{ calc.displayNum }}</view>
      <view id="display-op">{{ calc.displayOp }}</view>
    </view>
    <view class="panel-btns">
      <view class="btns-rows">
        <view
          id="btn-c"
          :class="`btn ${tapped.c}`"
          @click="btnClicked"
          @touchstart="btnTouchStart"
          @touchend="btnTouchEnd"
          data-op="c"
        >
          AC
        </view>
        <view
          :class="`btn ${tapped.d}`"
          @click="btnClicked"
          @touchstart="btnTouchStart"
          @touchend="btnTouchEnd"
          data-op="d"
        >
          DEL
        </view>
        <view
          :class="`btn ${tapped['/']}`"
          @click="btnClicked"
          @touchstart="btnTouchStart"
          @touchend="btnTouchEnd"
          data-op="/"
          style="font-size: 24px"
        >
          ÷
        </view>
        <view
          :class="`btn ${tapped.x}`"
          @click="btnClicked"
          @touchstart="btnTouchStart"
          @touchend="btnTouchEnd"
          data-op="x"
        >
          ×
        </view>
      </view>
      <view class="btns-rows">
        <view
          :class="`btn ${tapped['7']}`"
          @click="btnClicked"
          @touchstart="btnTouchStart"
          @touchend="btnTouchEnd"
          data-op="7"
        >
          7
        </view>
        <view
          :class="`btn ${tapped['8']}`"
          @click="btnClicked"
          @touchstart="btnTouchStart"
          @touchend="btnTouchEnd"
          data-op="8"
        >
          8
        </view>
        <view
          :class="`btn ${tapped['9']}`"
          @click="btnClicked"
          @touchstart="btnTouchStart"
          @touchend="btnTouchEnd"
          data-op="9"
        >
          9
        </view>
        <view
          :class="`btn ${tapped['-']}`"
          @click="btnClicked"
          @touchstart="btnTouchStart"
          @touchend="btnTouchEnd"
          data-op="-"
        >
          -
        </view>
      </view>
      <view class="btns-rows">
        <view
          :class="`btn ${tapped['4']}`"
          @click="btnClicked"
          @touchstart="btnTouchStart"
          @touchend="btnTouchEnd"
          data-op="4"
        >
          4
        </view>
        <view
          :class="`btn ${tapped['5']}`"
          @click="btnClicked"
          @touchstart="btnTouchStart"
          @touchend="btnTouchEnd"
          data-op="5"
        >
          5
        </view>
        <view
          :class="`btn ${tapped['6']}`"
          @click="btnClicked"
          @touchstart="btnTouchStart"
          @touchend="btnTouchEnd"
          data-op="6"
        >
          6
        </view>
        <view
          :class="`btn ${tapped['+']}`"
          @click="btnClicked"
          @touchstart="btnTouchStart"
          @touchend="btnTouchEnd"
          data-op="+"
        >
          +
        </view>
      </view>
      <view id="btns2" class="btns-rows">
        <view id="btns2-left">
          <view class="btns2-left-part">
            <view
              class="`btn ${tapped['1']}`"
              @click="btnClicked"
              @touchstart="btnTouchStart"
              @touchend="btnTouchEnd"
              data-op="1"
            >
              1
            </view>
            <view
              :class="`btn ${tapped['2']}`"
              @click="btnClicked"
              @touchstart="btnTouchStart"
              @touchend="btnTouchEnd"
              data-op="2"
            >
              2
            </view>
            <view
              :class="`btn ${tapped['3']}`"
              @click="btnClicked"
              @touchstart="btnTouchStart"
              @touchend="btnTouchEnd"
              data-op="3"
            >
              3
            </view>
          </view>
          <view class="btns2-left-part">
            <view
              :class="`btn ${tapped['%']}`"
              @click="btnClicked"
              @touchstart="btnTouchStart"
              @touchend="btnTouchEnd"
              data-op="%"
            >
              %
            </view>
            <view
              :class="`btn ${tapped['0']}`"
              @click="btnClicked"
              @touchstart="btnTouchStart"
              @touchend="btnTouchEnd"
              data-op="0"
            >
              0
            </view>
            <view
              :class="`btn ${tapped['.']}`"
              @click="btnClicked"
              @touchstart="btnTouchStart"
              @touchend="btnTouchEnd"
              data-op="."
            >
              .
            </view>
          </view>
        </view>
        <view
          id="btns2-right"
          :class="`btn ${tapped['=']}`"
          @click="btnClicked"
          @touchstart="btnTouchStart"
          @touchend="btnTouchEnd"
          data-op="="
        >
          =
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import Calc from '../utils/calc'
import { onLoad } from '@dcloudio/uni-app'

const calc = ref<any>({})
const tapped = ref<any>({})
onMounted(() => {
  Calc.reset()
})

const btnClicked = (e) => {
  console.log(e)
  const code = e.target.dataset.op
  Calc.addOp(code)
  console.log(Calc.getVars())
  calc.value = Calc.getVars()
}
const btnTouchStart = (e) => {
  console.log(e)
  const code = e.target.dataset.op
  tapped.value = { [code]: 'active' }
}
const btnTouchEnd = (e) => {
  console.log(e)
  const code = e.target.dataset.op
  tapped.value = {}
}

onLoad(() => {
  uni.showShareMenu({})
})
</script>

<style scoped lang="scss">
@import url('./index.scss');
</style>
