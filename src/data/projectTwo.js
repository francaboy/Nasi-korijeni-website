const projectTwo = {
  tagline: "NAŠI KORIJENI BANJA LUKA",
  title: "Galerija događaja",
  filters: [
    {
      id: 1,
      name: "Sve slike",
      filterData: "filter-item",
    },
    {
      id: 2,
      name: "Koncerti",
      filterData: "bra",
    },
    {
      id: 3,
      name: "Festivali",
      filterData: "photo",
    },
    {
      id: 4,
      name: "Događaji",
      filterData: "web",
    },
    {
      id: 5,
      name: "Kultura",
      filterData: "app",
    },
  ],
  projects: [
    {
      id: 1,
      image: "project-two-img-2.jpg",
      title: "Naziv događaja",
      tagline: "Graphic",
      filter: ["bra", "photo", "web"],
      col: 3,
    },
    {
      id: 2,
      image: "project-two-img-3.jpg",
      title: "Naziv događaja",
      tagline: "Graphic",
      filter: ["bra", "web"],
      col: 3,
    },
    {
      id: 3,
      image: "project-two-img-1.jpg",
      title: "Naziv događaja",
      tagline: "Graphic",
      filter: ["bra", "photo"],
      col: 6,
    },
    {
      id: 4,
      image: "project-two-img-6.jpg",
      title: "Naziv događaja",
      tagline: "Graphic",
      filter: ["bra", "photo", "app"],
      col: 6,
    },
    {
      id: 5,
      image: "project-two-img-4.jpg",
      title: "Naziv događaja",
      tagline: "Graphic",
      filter: ["bra", "app", "web"],
      col: 3,
    },
    {
      id: 6,
      image: "project-two-img-5.jpg",
      title: "Naziv događaja",
      tagline: "Graphic",
      filter: ["bra", "web"],
      col: 3,
    },
  ],
};

export default projectTwo;
