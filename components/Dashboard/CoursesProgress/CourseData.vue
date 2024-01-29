<script setup lang="ts">
interface CourseDataProps {
  title: string;
  subtitle: string;
  progress: number;
  linkLabel: string;
}

defineProps<CourseDataProps>();

const LocalLink = defineComponent({
  setup(_, { slots }) {
    return () => h("a", { class: "local-link" }, slots.default?.());
  },
});
</script>

<template>
  <div class="flex gap-20">
    <DashboardCoursesProgressBarCircle class="progress-bar" :value="progress" />
    <div class="flex flex-column gap-8">
      <div class="flex flex-column gap-4">
        <span class="course-title">{{ title }} </span>
        <span class="course-subtitle">{{ subtitle }}</span>
      </div>
      <LocalLink>{{ linkLabel }}</LocalLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.progress-bar {
  aspect-ratio: 1/1;
}

.course-title {
  color: $main-900;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.084px;
}

.course-subtitle {
  color: $sub-500;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}

.local-link {
  color: $primary-base;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  text-decoration-line: underline;
}
</style>
