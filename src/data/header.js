import phoneIcon from "@/images/icon/phone-icon.png";
import logo1 from "@/images/resources/logo-1.png";
import logo2 from "@/images/resources/logo-2.png";

const navItems = [
  {
    id: 1,
    name: "Početna",
    href: "/",
    subNavItems: [],
  },
  {
    id: 2,
    name: "O nama",
    href: "/o-nama",
    subNavItems: [],
  },

  {
    id: 4,
    name: "Galerija",
    href: "/galerija",
    subNavItems: [],
  },

  {
    id: 6,
    name: "Kontakt",
    href: "/kontakt",
    subNavItems: [],
  },
];

const header = {
  logo1,
  logo2,
  phone: "066 11 99 77",
  email: "info@nasikorijeni.com",
  phoneIcon,
  navItems,
  socials: ["fab fa-facebook-square", "fab fa-instagram", "fab fa-twitter"],
};

export default header;
