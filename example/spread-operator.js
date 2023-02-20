// spread-operator -> copy
const person = {
  name: "Duy",
  age: 18,
};
const person2 = {
  ...person,
  address: "Thai Binh",
};
console.log(person2);
const products = [1, 2, 3, 4];
// products.push(5) : Không nên sử dụng
const newProducts = [-1, ...products, 5];
console.log(newProducts);
