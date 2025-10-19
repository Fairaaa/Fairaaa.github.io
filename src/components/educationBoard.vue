<template>
  <div class="max-w-3xl mx-auto mt-10 relative">
    <!-- 外层网格 -->
    <div class="grid grid-cols-3 gap-y-4 relative">
      <!-- 第一行标题 -->
      <div class="font-semibold text-lg text-center">{{ t("education.period") }}</div>
      <div class="font-semibold text-lg text-center">{{ t("education.school") }}</div>
      <div class="font-semibold text-lg text-center"></div>

      <!-- 第二行 -->
      <div class="text-center">2022.09–2026.06</div>
      <div class="text-center">{{ t("education.uni") }}</div>
      <div class="text-center">{{ t("education.major") }}</div>
    </div>

    <!-- 课程部分 -->
    <div class="mt-6 border-t border-gray-200 pt-4">
      <div class="grid grid-cols-3 gap-x-6 text-sm leading-relaxed text-gray-700">
        <!-- 数理类 -->
        <div>
          <div class="font-medium text-indigo-700 mb-1">{{ t("education.math") }}</div>
          <ul class="space-y-0.5">
            <li>{{ t("education.courses.calculus") }}</li>
            <li>{{ t("education.courses.linearAlgebra") }}</li>
            <li>{{ t("education.courses.advLinearAlgebra") }}</li>
            <li>{{ t("education.courses.physics") }}</li>
            <li>{{ t("education.courses.discreteMath") }}</li>
            <li>{{ t("education.courses.probability") }}</li>
            <li>{{ t("education.courses.complex") }}</li>
          </ul>
        </div>

        <!-- 程序设计类 -->
        <div>
          <div class="font-medium text-indigo-700 mb-1">{{ t("education.programming") }}</div>
          <ul class="space-y-0.5">
            <li>{{ t("education.courses.progFund") }}</li>
            <li>{{ t("education.courses.oop") }}</li>
            <li>{{ t("education.courses.dataStruct") }}</li>
            <li>{{ t("education.courses.os") }}</li>
            <li>{{ t("education.courses.ai") }}</li>
            <li>{{ t("education.courses.ann") }}</li>
          </ul>
        </div>

        <!-- 网络与系统类 -->
        <div>
          <div class="font-medium text-indigo-700 mb-1">{{ t("education.systems") }}</div>
          <ul class="space-y-0.5">
            <li>{{ t("education.courses.digitalLogic") }}</li>
            <li>{{ t("education.courses.automata") }}</li>
            <li>{{ t("education.courses.arch") }}</li>
            <li>{{ t("education.courses.compiler") }}</li>
            <li>{{ t("education.courses.org") }}</li>
            <li>{{ t("education.courses.network") }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
