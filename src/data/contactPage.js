const contactPage = {
  title: "Имате питање?",
  tagline: "Контактирајте нас",
  inputs: [
    {
      type: "text",
      placeholder: "Ваше име",
      name: "name",
      required: true,
    },
    {
      type: "email",
      placeholder: "Е-маил адреса",
      name: "email",
      required: true,
    },
    {
      type: "text",
      placeholder: "Tелефон",
      name: "phone",
      required: false,
    },
    {
      type: "email",
      placeholder: "Тема",
      name: "subject",
      required: true,
    },
    {
      type: "",
      placeholder: "Напишите поруку...",
      name: "message",
      required: true,
    },
  ],
};

export default contactPage;
