<template>
  <div class="max-w-3xl mx-auto mt-10 relative">
    <!-- 外层网格 -->
    <div class="grid grid-cols-3 gap-y-4 relative">
      <!-- 第一行标题 -->
      <!-- <div class="font-semibold text-lg text-center">{{ t("education.period") }}</div>
      <div class="font-semibold text-lg text-center">{{ t("education.school") }}</div>
      <div class="font-semibold text-lg text-center"></div> -->

      <!-- 第二行 -->
      <div class="text-center">2024.07–2024.08</div>
      <div class="text-center">{{ t("connect.uni") }}</div>
      <div class="text-center">{{ t("connect.major") }}</div>
    </div>
    <p class="leading-relaxed text-sm whitespace-pre-line text-gray-700 dark:text-gray-200">
      {{ t("connect.description") }}
    </p>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>