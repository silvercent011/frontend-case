import type { iDailyFeedbackEmoji } from "~/types/DailyFeedback";

export class DailyFeedbackService {
  public getEmojis(): iDailyFeedbackEmoji[] {
    return [
      { emotion: "sad", emoji: "😔" },
      { emotion: "confused", emoji: "😕" },
      {
        emotion: "neutral",
        emoji: "😐",
      },
      {
        emotion: "smiling",
        emoji: "🙂",
      },

      {
        emotion: "happy",
        emoji: "😄",
      },
    ];
  }
}
