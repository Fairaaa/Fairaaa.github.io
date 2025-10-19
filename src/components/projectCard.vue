<template>
  <div
    class="rounded-2xl shadow-md p-4 hover:shadow-lg transition w-[95%] mx-auto
           bg-white dark:bg-gray-800
           text-gray-800 dark:text-gray-100
           dark:shadow-none"
  >
    <!-- 顶部：公司 + 时间 -->
    <div class="flex justify-between items-center mb-2">
      <h3 class="text-lg font-bold text-gray-800 dark:text-gray-100">
        {{ data.title }}
      </h3>
      <span class="text-sm text-gray-500 dark:text-gray-400">
        {{ data.time }}
      </span>
    </div>

    <!-- 描述 -->
    <p class="leading-relaxed text-sm whitespace-pre-line text-gray-700 dark:text-gray-200">
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
      title: null,
      description: null,
    }),
  },
});
</script>
