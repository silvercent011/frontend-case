<script setup lang="ts">
import { CoursesService } from "~/services/CoursesService";

const _coursesService = new CoursesService();

const featuredCourse = _coursesService.getFeaturedCourse();

const hasTouched = ref(false);

function handleTouch() {
  hasTouched.value = true;
}

const emptyCourse = {
  title: "Nenhum curso em andamento",
  subtitle:
    "Não há progresso em nenhum curso ainda. Considere se inscrever em um.",
  progress: 0,
  linkLabel: "Inscrever-se",
};
</script>

<template>
  <Card @click="handleTouch" title="Cursos - Progresso" icon="ri:book-3-line">
    <template #header>
      <Button small>Ver todos</Button>
    </template>

    <DashboardCoursesProgressCourseData
      v-if="hasTouched"
      v-bind="featuredCourse"
    />
    <DashboardCoursesProgressCourseData v-else v-bind="emptyCourse" />
  </Card>
</template>
