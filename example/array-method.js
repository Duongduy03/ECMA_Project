// loop

const products = [
  "Duy", // item
  "Duc",
  "Thanh",
];
for (let index = 0; index < products.length; index++) {
  // Biết điểm dừng dựa theo length
  // dựa vào index để hiển thị
  console.log("For", products[index]);
}
// for in
// Bắt theo index
for (let item in products) {
  console.log("For in", products[item]);
}
// for of
// Không bắt theo index, bắt theo giá trị
for (let item of products) {
  console.log("For of", item);
}
// forEach
//

products.forEach((item, index) => {
  console.log(`${item} ${index}`);
});
// map : Tạo ra mảng mới từ mảng cũ có thể thay đổi giá trị
const newProducts = products.map((item, index) => {
  return `${item} ${index + 1} `;
});
console.log(newProducts);
// filter : Tạo ra mẳng mới, lọc ra các phần tử thỏa mãn điều kiện
const newFilterProducts = products.filter((item) => {
  return item != "Thanh";
});
console.log(newFilterProducts);
const app = document.querySelector("#app");

// reduce : Tính năng tính tổng
const numbers = [
  {
    id: 1,
    name: "Duy",
    price: 200,
  },
  {
    id: 1,
    name: "Duy",
    price: 300,
  },
  {
    id: 1,
    name: "Duy",
    price: 400,
  },
];
const total = numbers.reduce(
  (accumulator, nextValue) => accumulator + nextValue.price,
  0
);
console.log(total);
// find
const products2 = [
  { id: 1, name: "Product A", price: 200 }, // item
  { id: 2, name: "Product B", price: 300 }, // item
  { id: 3, name: "Product C", price: 400 }, // item
];

const foundProduct = products2.find((item) => item.id == 2);
console.log(foundProduct);
