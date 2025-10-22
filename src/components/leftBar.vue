<template>
  <div
    class="leftbar h-full bg-gray-50 dark:bg-gray-900 flex flex-col items-center shadow-sm w-full py-8"
  >
    <!-- 头像与姓名 -->
    <div class="profile flex flex-col items-center mb-8">
      <img
        src="/assets/avatar.jpg"
        alt="Profile photo"
        class="w-24 h-24 rounded-full object-cover border-2 border-blue-400 mb-3 shadow-sm"
      />
      <h1 class="text-base font-semibold text-gray-800 dark:text-gray-100">
        Li Yifei
      </h1>
    </div>

    <!-- 邮箱 -->
    <div class="email mb-6 flex items-center justify-center">
      <Mail class="inline-block w-4 h-4 mr-2 text-gray-600 dark:text-gray-300" />
      <a
        href="mailto:liyifei22@mails.tsinghua.edu.cn"
        class="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
      >
        liyifei22@mails.tsinghua.edu.cn
      </a>
    </div>

    <!-- 技能 -->
    <div class="skills text-center">
      <h2
        class="text-sm font-semibold text-gray-800 dark:text-gray-100 mb-3 tracking-wide uppercase"
      >
        {{ t("leftbar.skills") }}
      </h2>
      <ul class="space-y-1">
        <li
          v-for="skill in skills"
          :key="skill"
          class="text-xs text-gray-600 dark:text-gray-300 flex items-center justify-center gap-2"
        >
          <span class="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
          {{ skill }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { Mail } from "lucide-vue-next";
const { t } = useI18n();

const skills = [
  "C++",
  "Python",
  "PyTorch",
  "Git",
  "JavaScript",
  "Vue.js",
  "React.js",
  "Node.js",
  "HTML/CSS",
  "Django",
  "SQL",
];
</script>

<style scoped>
.leftbar {
  font-family: "Inter", "Noto Sans", sans-serif;
}

.profile img {
  transition: transform 0.3s ease;
}
.profile img:hover {
  transform: scale(1.05);
}
</style>
