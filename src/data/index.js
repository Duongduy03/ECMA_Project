const projectFake = [
  {
    id: 1,
    name: "Dự án 1",
    team: [
      { id: 1, name: "Đạt" },
      { id: 2, name: "Duy" },
    ],
  },
  {
    id: 2,
    name: "Dự án tốt nghiệp",
    team: [
      { id: 1, name: "Đức" },
      { id: 2, name: "Duy" },
    ],
  },
  {
    id: 3,
    name: "Dự án mẫu",
    team: [
      { id: 2, name: "Phương" },
      { id: 2, name: "Duy" },
    ],
  },
];
const menus = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Projects", link: "/project" },
  { id: 4, name: "Post", link: "/post" },
  { id: 5, name: "Contact", link: "contact" },
];

export { projectFake, menus };
