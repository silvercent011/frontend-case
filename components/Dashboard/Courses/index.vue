<script setup lang="ts">
import { CoursesService } from "~/services/CoursesService";

const _coursesService = new CoursesService();

const courses = _coursesService.getCourseList();

const isTouched = ref(false);

const touch = () => {
  isTouched.value = true;
};
</script>

<template>
  <Card @click="touch" title="Cursos" icon="ri:book-3-line">
    <template #header>
      <Input placeholder="Pesquisar cursos..." />
      <Button small>Ver todos</Button>
    </template>

    <DashboardCoursesNoCourse v-if="!isTouched" />

    <div class="table-container" v-else>
      <div class="table-row header">
        <div class="row-item head-item">Professor</div>
        <div class="row-item head-item">Nome do curso</div>
        <div class="row-item head-item">Progresso</div>
        <div class="row-item head-item">Status</div>
      </div>

      <DashboardCoursesRowCourse
        v-for="(course, index) in courses"
        :key="index"
        :course="course"
      />
    </div>
  </Card>
</template>

<style lang="scss" scoped>
.header {
  background-color: $weak-100;
  border-radius: 8px;
}

.head-item {
  padding: 8px 12px;
  color: $sub-500;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.084px;
}
</style>
