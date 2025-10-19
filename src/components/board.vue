<template>
  <div
    class="m-[5px] rounded-2xl shadow-md bg-white text-gray-800 p-6 hover:shadow-lg transition-colors duration-300 dark:bg-gray-800 dark:text-gray-100"
  >
    <!-- 标题行 -->
    <div class="flex items-center mb-4 space-x-3">
      <!-- 图标 -->
      <component
        v-if="data.icon"
        :is="data.icon"
        class="w-6 h-6 text-blue-500 dark:text-blue-400"
      />
      <!-- 标题 -->
      <h2 class="text-xl font-semibold">{{ data.title }}</h2>
    </div>

    <!-- 内容插槽 -->
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: () => ({ title: "未命名部分", icon: null }),
  },
});
</script>
