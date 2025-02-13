<route lang="json5">
{
  style: {
    navigationBarTitleText: "血型计算器",
  },
}
</route>
<template>
  <view class="blood-type-calculator">
    <wd-form ref="form" :model="formModel" :rules="rules" errorType="toast">
      <wd-cell-group custom-class="group" title="基础信息:" border>
        <wd-cell title="母亲血型" title-width="150rpx" prop="motherBloodType">
          <view style="text-align: left">
            <wd-radio-group
              prop="motherBloodType"
              v-model="formModel.motherBloodType"
              shape="button"
              cell
            >
              <wd-radio :value="item.value" v-for="item of bloodTypeList" :key="item.value">
                {{ item.label }}
              </wd-radio>
            </wd-radio-group>
          </view>
        </wd-cell>
        <wd-cell title="父亲血型" title-width="150rpx" prop="fatherBloodType">
          <view style="text-align: left">
            <wd-radio-group
              prop="fatherBloodType"
              v-model="formModel.fatherBloodType"
              shape="button"
              cell
            >
              <wd-radio :value="item.value" v-for="item of bloodTypeList" :key="item.value">
                {{ item.label }}
              </wd-radio>
            </wd-radio-group>
          </view>
        </wd-cell>
      </wd-cell-group>
      <view class="footer">
        <wd-button type="primary" size="large" @click="handleSubmit" block>提交</wd-button>
      </view>
    </wd-form>

    <wd-cell-group v-if="result" custom-class="group" title="可能的子女血型:" border>
      <view class="tagsWrap">
        <wd-tag v-for="type of result" type="primary" round :key="type">{{ type }}</wd-tag>
      </view>
    </wd-cell-group>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { rules, bloodTypeList, bloodTypeCompatibility } from "./utils";
type IFormModel = {
  motherBloodType: string;
  fatherBloodType: string;
};
const form = ref();
const formModel = ref<IFormModel>({ motherBloodType: "", fatherBloodType: "" });

function handleSubmit() {
  form.value
    .validate()
    .then(({ valid, errors }) => {
      if (valid) {
        calculateBloodType(formModel.value);
      }
    })
    .catch((error) => {
      uni.showToast({
        title: error.message || "表单验证失败",
        icon: "error",
      });
    });
}

const result = ref<string[] | null>(null);

/**
 * 根据父母血型计算可能的子女血型
 * 计算规则基于孟德尔遗传定律：
 * - A型和O型基因：A是显性，O是隐性
 * - B型和O型基因：B是显性，O是隐性
 * - A型和B型基因：共显性，产生AB型
 */
function calculateBloodType(model: IFormModel) {
  if (model.motherBloodType && model.fatherBloodType) {
    try {
      result.value = bloodTypeCompatibility[model.motherBloodType][model.fatherBloodType];
    } catch (error) {
      uni.showToast({
        title: "血型计算出错",
        icon: "error",
      });
      result.value = null;
    }
  } else {
    result.value = null;
  }
}
</script>

<style scoped lang="scss">
.footer {
  padding: 40rpx 40rpx 0;
}
.tagsWrap {
  display: flex;
  gap: 10rpx;
  padding: 20rpx 40rpx 0;
}
</style>
