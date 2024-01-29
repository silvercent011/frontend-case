import type { iCourse } from "~/types/Course";
import type { iFeaturedCourse } from "~/types/FeaturedCourse";

export class CoursesService {
  public getFeaturedCourse(): iFeaturedCourse {
    return {
      title: "Diversidade da equipe",
      subtitle:
        "Projetado para promover a inclusividade e perspectivas diversas.",
      progress: 25,
      linkLabel: "Retomar Curso",
    };
  }

  public getCourseList(): iCourse[] {
    return [
      {
        title: "Time Management",
        period: {
          start: new Date("2024-08-21"),
          end: new Date("2024-09-04"),
        },
        teacher: {
          name: "Nuray Aksoy",
          role: "Gerente de produto",
          avatar: "/images/Courses/Nuray.svg",
        },
        progress: 30,
      },
      {
        title: "Leadership Skills",
        period: {
          start: new Date("2024-08-02"),
          end: new Date("2024-08-18"),
        },
        teacher: {
          name: "Arthur Taylor",
          role: "CEO",
          avatar: "/images/Courses/Arthur.svg",
        },
        progress: 70,
      },
      {
        title: "Diversity Training",
        period: {
          start: new Date("2024-06-24"),
          end: new Date("2024-07-03"),
        },
        teacher: {
          name: "Lena Müller",
          role: "Gerente de marketing",
          avatar: "/images/Courses/Lena.svg",
        },
        progress: 100,
      },
      {
        title: "Efficiency at Work",
        period: {
          start: new Date("2024-06-04"),
          end: new Date("2024-07-28"),
        },
        teacher: {
          name: "Wei Chen",
          role: "Gerente de operações",
          avatar: "/images/Courses/Wei.svg",
        },
        progress: 100,
      },
    ];
  }
}
