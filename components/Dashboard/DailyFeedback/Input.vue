<script setup lang="ts">
import { DailyFeedbackService } from "~/services/DailyFeedbackService";

const _dailyFeedbackService = new DailyFeedbackService();

const emojis = _dailyFeedbackService.getEmojis();
</script>

<template>
  <div class="feedback-container">
    <div class="button-container">
      <span
        class="button padding-x-4 padding-y-8"
        v-for="{ emoji } in emojis"
        >{{ emoji }}</span
      >
    </div>
    <textarea class="padding-12" placeholder="Adicionar comentário..." />
  </div>
</template>

<style lang="scss" scoped>
.button-container {
  display: flex;
}

.button {
  border-bottom: 2px solid $soft-200;
  border-right: 2px solid $soft-200;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button:last-child {
  border-right: none;
}

.feedback-container {
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 2px solid $soft-200;
  color: $soft-400;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.084px;
}
</style>
