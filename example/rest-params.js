function total(...number) {
  let element = 0;
  for (let index = 0; index < number.length; index++) {
    element += number[index];
  }
  console.log(element);
}
total(1, 2, 3, 4);
