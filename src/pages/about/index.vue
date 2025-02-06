<route lang="json5">
{
  style: {
    navigationBarTitleText: '我的',
  },
}
</route>
<template>
  <view class="bg-white overflow-hidden pt-2 px-4">
    <view class="text-center text-4xl main-title-color mt-4">千奇百怪计算器</view>
    <view class="text-center text-2xl mt-2 mb-8">最好用的计算器大全</view>
  </view>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'About',
})
</script>

<style>
.main-title-color {
  color: #d14328;
}
</style>
