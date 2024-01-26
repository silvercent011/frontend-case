export class FavsService {
  getFavs() {
    return [
      {
        url: "/fav1",
        label: "Loom Mobile App",
        color: "purple",
        mappingIndex: 1,
      },
      {
        url: "/fav2",
        label: "Monday Redesign",
        color: "red",
        mappingIndex: 2,
      },
      {
        url: "/fav3",
        label: "Udemy Courses",
        color: "pink",
        mappingIndex: 3,
      },
    ];
  }
}
