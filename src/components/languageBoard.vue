<template>
  <div class="max-w-4xl mx-auto mt-10 space-y-8">
    <!-- TOEFL 表格 -->
    <div class="flex items-stretch gap-6">
      <!-- 左侧标签（垂直居中） -->
      <div class="flex flex-col justify-center w-28 text-right">
        <span class="font-semibold text-gray-800 dark:text-white">
          {{ t("language.toefl") }}
        </span>
      </div>

      <!-- 右侧主体 -->
      <div class="flex-1">
        <!-- 第一行：标题 + 总分 -->
        <div class="flex justify-between items-center">
          <div class="grid grid-cols-4 gap-2 flex-1 text-center text-gray-800 dark:text-white">
            <div>{{ t("language.r") }}</div>
            <div>{{ t("language.l") }}</div>
            <div>{{ t("language.s") }}</div>
            <div>{{ t("language.w") }}</div>
          </div>
          <div class="w-16 text-right font-bold text-gray-800 dark:text-white">
            {{ t("language.total") }}
          </div>
        </div>

        <!-- 分界线 -->
        <div class="border-t border-gray-400 my-1"></div>

        <!-- 第二行：分数 -->
        <div class="flex justify-between items-center">
          <div class="grid grid-cols-4 gap-2 flex-1 text-center font-medium text-gray-800 dark:text-white">
            <div>29</div>
            <div>28</div>
            <div>24</div>
            <div>24</div>
          </div>
          <div class="w-16 text-right font-semibold text-blue-600 dark:text-blue-300">
            105
          </div>
        </div>
      </div>
    </div>

    <!-- GRE 表格 -->
    <div class="flex items-stretch gap-6">
      <!-- 左侧标签（垂直居中） -->
      <div class="flex flex-col justify-center w-28 text-right">
        <span class="font-semibold text-gray-800 dark:text-white">
          {{ t("language.gre") }}
        </span>
      </div>

      <!-- 右侧主体 -->
      <div class="flex-1">
        <!-- 第一行：标题 + 总分 -->
        <div class="flex justify-between items-center">
          <div class="grid grid-cols-4 gap-2 flex-1 text-center text-gray-800 dark:text-white">
            <div class="col-span-2">{{ t("language.v") }}</div>
            <div class="col-span-2">{{ t("language.q") }}</div>
          </div>
          <div class="w-16 text-right font-bold text-gray-800 dark:text-white">
            {{ t("language.total") }}
          </div>
        </div>

        <!-- 分界线 -->
        <div class="border-t border-gray-400 my-1"></div>

        <!-- 第二行：分数 -->
        <div class="flex justify-between items-center">
          <div class="grid grid-cols-4 gap-2 flex-1 text-center font-medium text-gray-800 dark:text-white">
            <div class="col-span-2">153</div>
            <div class="col-span-2">170</div>
          </div>
          <div class="w-16 text-right font-semibold text-blue-600 dark:text-blue-300">
            323
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n();
</script>
