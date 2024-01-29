import type { iActivity } from "~/types/Activity";

export class TimeTrackerActivityService {
  public getActivities(): iActivity[] {
    return [
      {
        title: "Loom Rebranding",
        time: "1:23:05",
        imgSrc: "/images/TimeTracker/Loom.svg",
      },
      {
        title: "Evernote App Redesign",
        time: "3:14:26",
        imgSrc: "/images/TimeTracker/Evernote.svg",
      },
    ];
  }
}
