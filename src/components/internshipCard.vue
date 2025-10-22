<template>
  <div
    class="rounded-2xl p-4 w-[95%] mx-auto transition
           bg-white dark:bg-gray-900
           text-gray-800 dark:text-gray-100
           shadow-md dark:shadow-[0_0_10px_rgba(255,255,255,0.05)]
           hover:shadow-lg dark:hover:shadow-[0_0_12px_rgba(255,255,255,0.08)]"
  >
    <!-- 顶部：公司 + 时间 -->
    <div class="flex justify-between items-center mb-2">
      <h3 class="text-lg font-bold text-gray-800 dark:text-gray-100">
        {{ data.company }}
      </h3>
      <span class="text-sm text-gray-500 dark:text-gray-400">
        {{ data.time }}
      </span>
    </div>

    <!-- 分隔线 -->
    <div class="border-t border-gray-100 dark:border-gray-700 my-3"></div>

    <!-- 职位 -->
    <div class="font-medium mb-2 text-blue-600 dark:text-blue-400">
      {{ data.title }}
    </div>

    <!-- 描述 -->
    <p class="leading-relaxed text-sm whitespace-pre-line text-gray-700 dark:text-gray-300">
      {{ data.description }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: () => ({
      time: null,
      company: null,
      title: null,
      description: null,
    }),
  },
});
</script>
