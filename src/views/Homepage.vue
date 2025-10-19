<template>
  <div class="homepage flex min-h-screen w-full">
    <!-- 左侧栏 -->
    <div class="flex-none w-[20%] min-h-screen bg-gray-50">
      <leftBar />
    </div>

    <!-- 中间主区域 -->
    <div class="flex-1 px-6 py-4 overflow-auto">
      <Board :data="educationData">
        <educationBoard />
      </Board>

      <Board :data="languageData">
        <languageBoard />
      </Board>

      <Board :data="connectData">
        <connectBoard />
      </Board>
      <Board :data="researchData">
        <researchCard v-for="(item, index) in researches" :key="index" :data="item" class="mb-4"/>
      </Board>
      <Board :data="projectData">
        <projectCard v-for="(item, index) in projects" :key="index" :data="item" class="mb-4"/>
      </Board>
      <Board :data="intershipData">
        <intershipCard v-for="(item, index) in internships" :key="index" :data="item" class="mb-4"/>
      </Board>
      <!-- <Board :data="othersData">
      </Board> -->
    </div>

    <!-- 右侧栏 -->
    <div class="flex-none w-[4%] min-h-screen bg-gray-100">
      <rightBar />
    </div>
  </div>
</template>


<script setup>

import leftBar from '../components/leftBar.vue';
import rightBar from '../components/rightBar.vue';

import Board from '@/components/board.vue';
import educationBoard from '@/components/educationBoard.vue';
import languageBoard from '@/components/languageBoard.vue';
import connectBoard from '@/components/connectBoard.vue';
import researchCard from '@/components/researchCard.vue';
import intershipCard from '@/components/internshipCard.vue';
import projectCard from '@/components/projectCard.vue';

import { Briefcase, GraduationCap, Languages, LandPlot, Wrench, Brain, PawPrint } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

// 标题数据
const educationData = {
    title: t("education.title"),
    icon: GraduationCap
};
const languageData = {
    title: t("language.title"),
    icon: Languages
};
const connectData = {
    title: t("connect.title"),
    icon: LandPlot
};

const researchData = {
    title: t("research.title"),
    icon: Brain
};
const projectData = {
    title: t("projects.title"),
    icon: Wrench
}; 
const intershipData = {
    title: t("internships.title"),
    icon: Briefcase
};
const othersData = {
    title: t("others.title"),
    icon: PawPrint
};

const researches = [
  {
    professor: t("research.SRT.professor"),
    position: t("research.SRT.position"),
    time: t("research.SRT.time"),
    description: t("research.SRT.description")
  },
  {
    professor: t("research.LYY.professor"),
    position: t("research.LYY.position"),
    time: t("research.LYY.time"),
    description: t("research.LYY.description")
  }
];

// projects
const projects = [
  {
    time: t("projects.QAQ.time"),
    title: t("projects.QAQ.title"),
    description: t("projects.QAQ.description")
  },
  {
    time: t("projects.INF.time"),
    title: t("projects.INF.title"),
    description: t("projects.INF.description")
  },
  {
    time: t("projects.RAG.time"),
    title: t("projects.RAG.title"),
    description: t("projects.RAG.description")
  }
];

// internship
const internships = [
  {
    time: "2025.07 - 2025.08",
    company: t("internships.hw.company"),
    title: t("internships.hw.title"),
    description: t("internships.hw.description")
  },
  {
    time: t("internships.yp.time"),
    company: t("internships.yp.company"),
    title: t("internships.yp.title"),
    description: t("internships.yp.description")
  }
];


</script>

<style scoped>
.homepage {
  height: 100vh;
}
</style>

























































































    ·