const person = [
  {
    name: "Duy",
    age: 18,
    address: {
      city: "HCM",
    },
  },
  {
    name: "Duc",
    age: 18,
    address: {
      city: "HCM",
    },
  },
  {
    name: "Phuong",
    age: 18,
    address: {
      city: "HCM",
    },
  },
  {
    name: "Luong",
    age: 18,
    address: {
      city: "HCM",
    },
  },
];

const { name, age, address } = person;
console.log(person);

const showInFo = ({ name, age, address }) => {
  console.log(name, age, address);
};
