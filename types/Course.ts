export interface iCourse {
  title: string;
  period: {
    start: Date;
    end: Date;
  };
  teacher: {
    name: string;
    role: string;
    avatar: string;
  };
  progress: number;
}
