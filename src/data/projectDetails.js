import image from "@/images/resources/project-details-img.jpg";

const projectDetails = {
  image,
  title: "Никола Роквић",
  texts: [
    "Вођени идејом очувања културне баштине и традиције кроз различите културне догађаје и фестивале, а након успјешних организовања божићних концерата и народних зборова који су окупили огроман број људи, дошли смо на идеју да организујемо велики народни фестивал – Завичај фест, у срцу нашег града, на тврђави Кастел.",
    "У четвртак, 8. Августа, фестивал ће отворити велика регионална звјезда Никола Роквић, а програм ће употпунити вишегодишњи освајач најпрестижнијих награда на највећем сабору трубача у Гучи, Дејан Петровић са Биг бендом.",
    "Будите дио јединственог музичког догађаја који се по први пут организује на овим просторима.",
    "Сачувај своје коријене! Видимо се на Кастелу!",
  ],

  name: "Завичај фестивал",
  category: "Фестивал",
  date: "8 Август, 2024",
  socials: [
    {
      id: 1,
      icon: "fab fa-twitter",
      href: "https://x.com/",
    },
    {
      id: 2,
      icon: "fab fa-facebook",
      href: "https://www.facebook.com/",
    },

    {
      id: 4,
      icon: "fab fa-instagram",
      href: "https://www.instagram.com/",
    },
  ],
};

export const similarWork = {
  tagline: "recent projects",
  title: "similar work",
  projects: [
    {
      id: 1,
      image: "project-one-img-1.jpg",
      title: "Fimlor Experience",
      tagline: "Graphic",
      filter: [],
    },
    {
      id: 2,
      image: "project-one-img-2.jpg",
      title: "Fimlor Experience",
      tagline: "Graphic",
      filter: [],
    },
    {
      id: 3,
      image: "project-one-img-3.jpg",
      title: "Fimlor Experience",
      tagline: "Graphic",
      filter: [],
    },
  ],
};

export default projectDetails;
