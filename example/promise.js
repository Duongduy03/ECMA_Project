function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(10);
    script.onerror = () => reject(new Error("Error"));
    document.head.append(script); // đặt thẻ script vào trong thẻ head
  });
}
loadScript("https://javascript.info/callbacks")
  .then((data) => data + "adajdhaa")
  .then((data2) => console.log(data2))
  .catch((err) => console.log(err));
