<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="home">
{
  style: {
    navigationBarTitleText: '首页',
  },
}
</route>
<template>
  <view class="mt-20%">
    <wd-grid border :column="2" square clickable>
      <wd-grid-item
        v-for="item of list"
        :key="item.icon"
        :icon="item.icon"
        :text="item.text"
        :url="item.url"
      />
    </wd-grid>
  </view>
</template>

<script lang="ts" setup>
import { onLoad } from '@dcloudio/uni-app'

const list = [
  { icon: 'a-precisemonitor', text: '数学计算器', url: '/packages/math-calculator/index/index' },
  { icon: 'more', text: '……' },
]

defineOptions({
  name: 'Home',
})

onLoad(() => {
  uni.showShareMenu({})
})
</script>

<style></style>
