<template>
  <article
    class="w-[95%] mx-auto bg-white rounded-2xl shadow-md p-4 transition hover:shadow-lg"
    :aria-label="'Research card for ' + (data.professor || data.organization)"
  >
    <!-- 顶部三栏 -->
    <div class="grid grid-cols-3 gap-4 items-center md:items-start">
      <!-- 左侧：教授名或机构 -->
      <div class="truncate text-sm md:text-base font-medium leading-tight">
        <div class="text-gray-700">{{ data.professor || data.organization }}</div>
        <div v-if="data.organization && data.professor" class="text-xs text-gray-500 mt-0.5">
          {{ data.organization }}
        </div>
      </div>

      <!-- 中间：职位（可为空） -->
      <div class="text-center">
        <div
          v-if="data.position"
          class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 border border-gray-200"
        >
          {{ data.position }}
        </div>
        <div v-else class="text-xs text-gray-400">—</div>
      </div>

      <!-- 右侧：时间 -->
      <div class="text-right text-sm text-gray-500">
        <div>{{ data.time }}</div>
      </div>
    </div>

    <!-- 分隔线 -->
    <div class="my-4 border-t border-gray-100"></div>

    <!-- 描述 / 介绍文字 -->
    <div class="text-sm text-gray-700 leading-relaxed">
      <slot name="description">
        {{ data.description }}
      </slot>
    </div>
  </article>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: () => ({
      professor: "",
      organization: "",
      position: "",
      time: "",
      description: "",
    }),
  },
});
</script>
