<template>
  <div
    class="rightBar flex flex-col h-full w-full items-center transition-colors duration-300
           bg-gray-50 dark:bg-gray-900"
  >
    <!-- 语言切换按钮 -->
    <el-button
      class="!ml-0 w-[95%] h-[95%] mt-2 transition-colors duration-300
             bg-white dark:bg-gray-700 dark:text-gray-100 hover:opacity-90"
      circle
      @click="switchLanguage"
    >
      {{ locale === "zh" ? "EN" : "中" }}
    </el-button>

    <!-- 深浅主题切换按钮 -->
    <el-button
      class="!ml-0 mt-2 w-[95%] h-[95%] transition-colors duration-300
             bg-white dark:bg-gray-700 dark:text-gray-100 hover:opacity-90"
      circle
      @click="switchTheme"
    >
      {{ isDark ? "🌙" : "☀️" }}
    </el-button>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref, onMounted } from "vue";

const { locale } = useI18n();

// 切换语言
function switchLanguage() {
  locale.value = locale.value === "zh" ? "en" : "zh";
}

// 🌙 Tailwind 深浅主题切换
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

<style scoped>
.rightBar {
  transition: background-color 0.3s ease;
}
</style>
