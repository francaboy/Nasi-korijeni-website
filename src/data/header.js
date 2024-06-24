import phoneIcon from "@/images/icon/phone-icon.png";
import logo1 from "@/images/resources/logo-1.svg";
import logo2 from "@/images/resources/logo-23.png";

const navItems = [
  {
    id: 1,
    name: "Почетна",
    href: "/",
    subNavItems: [],
  },
  {
    id: 2,
    name: "О нама",
    href: "/o-nama",
    subNavItems: [],
  },
  {
    id: 5,
    name: "Завичај фестивал",
    href: "/dogadjaji",
    subNavItems: [],
  },
  

  {
    id: 4,
    name: "Галерија",
    href: "/galerija",
    subNavItems: [],
  },

  {
    id: 6,
    name: "Контакт",
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
