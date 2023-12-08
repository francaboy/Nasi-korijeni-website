const contactPage = {
  title: "Imate pitanje?",
  tagline: "Kontaktirajte nas",
  inputs: [
    {
      type: "text",
      placeholder: "Vaše ime",
      name: "name",
      required: true,
    },
    {
      type: "email",
      placeholder: "E-mail adresa",
      name: "email",
      required: true,
    },
    {
      type: "text",
      placeholder: "Telefon",
      name: "phone",
      required: false,
    },
    {
      type: "email",
      placeholder: "Tema",
      name: "subject",
      required: true,
    },
    {
      type: "",
      placeholder: "Napišite poruku...",
      name: "message",
      required: true,
    },
  ],
};

export default contactPage;
