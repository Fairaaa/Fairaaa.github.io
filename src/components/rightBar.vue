<template>
  <div class="rightBar bg-gray-200 flex flex-col h-full w-full items-center">
    <!-- 语言切换按钮 -->
    <el-button
    class="!ml-0 w-[95%] h-[95%] mt-2"
    circle
    @click="switchLanguage"
    >
      {{ locale === "zh" ? "EN" : "中" }}
    </el-button>

    <el-button
    class="!ml-0 mt-2 w-[95%] h-[95%]"
    circle
    @click="switchTheme"
    >
      {{ isDark ? "🌙" : "☀️" }}
      <!-- {{ "" }} -->
    </el-button>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref, computed, onMounted } from "vue";

const { locale } = useI18n();

function switchLanguage() {
  locale.value = locale.value === "zh" ? "en" : "zh";
}

// 🌙 Tailwind 深浅主题
const isDark = ref(false);

function switchTheme() {
  const root = document.documentElement;
  isDark.value = !isDark.value;
  root.classList.toggle("dark", isDark.value);
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
}

// 页面加载时读取主题
onMounted(() => {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    isDark.value = true;
    document.documentElement.classList.add("dark");
  }
});
</script>
