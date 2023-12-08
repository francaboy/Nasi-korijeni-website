import bg from "@/images/shapes/site-footer-top-shape.png";

const footerData = {
  bg,
  title: "Slobodno nas pozovite",
  phone: "066 11 99 77",
  email: "info@nasikorijeni.com",
  address: "Knjaza Miloša 10E",
  city: "Banja Luka, Republika Srpska",
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
      title: "Početna",
      href: "/",
    },
    {
      id: 2,
      title: "O nama",
      href: "/o-nama",
    },
    {
      id: 3,
      title: "Galerija",
      href: "/galerija",
    },
    {
      id: 4,
      title: "Kontakt",
      href: "/kontakt",
    },
  ],
};

export default footerData;
