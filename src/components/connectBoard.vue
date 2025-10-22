<template>
  <div
    class="w-[95%] mx-auto mt-10 p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-sm transition-colors duration-300"
  >
    <!-- 信息区 -->
    <div
      class="grid grid-cols-3 text-center text-gray-800 dark:text-gray-100 font-medium text-base border-b border-gray-300 dark:border-gray-700 pb-3 mb-4"
    >
      <div>2024.07 – 2024.08</div>
      <div>{{ t("connect.uni") }}</div>
      <div>{{ t("connect.major") }}</div>
    </div>

    <!-- 描述区 -->
    <p
      class="leading-relaxed text-sm text-gray-700 dark:text-gray-300 mt-2 whitespace-pre-line"
    >
      {{ t("connect.description") }}
    </p>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
