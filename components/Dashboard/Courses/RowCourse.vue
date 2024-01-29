<script setup lang="ts">
import type { iCourse } from "~/types/Course";

defineProps<{ course: iCourse }>();
</script>

<template>
  <div class="table-row">
    <div class="row-item">
      <DashboardCoursesTeacherCell :teacher="course.teacher" />
    </div>

    <div class="row-item">
      <DashboardCoursesCourseCell :course="course" />
    </div>

    <div class="row-item">
      <DashboardCoursesProgressBar :progress="course.progress" />
    </div>

    <div class="row-item">
      <DashboardCoursesStatus :course="course" />
    </div>
  </div>
</template>
