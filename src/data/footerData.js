import bg from "@/images/shapes/site-footer-top-shape.png";

const footerData = {
  bg,
  title: "Слободно нас позовите",
  phone: "066 11 99 77",
  email: "info@nasikorijeni.com",
  address: "Књаза Милоша 10E",
  city: "Бања Лука, Република Српска",
  year: new Date().getFullYear(),
  author: "Franca",
  socials: [
    {
      id: 1,
      icon: "fab fa-twitter",
      href: "#",
    },
    {
      id: 2,
      icon: "fab fa-facebook",
      href: "#",
    },

    {
      id: 4,
      icon: "fab fa-instagram",
      href: "#",
    },
  ],
  links: [
    {
      id: 1,
      title: "Почетна",
      href: "/",
    },
    {
      id: 2,
      title: "О нама",
      href: "/o-nama",
    },
    {
      id: 3,
      title: "Галерија",
      href: "/galerija",
    },
    {
      id: 4,
      title: "Контакт",
      href: "/kontakt",
    },
  ],
};

export default footerData;
