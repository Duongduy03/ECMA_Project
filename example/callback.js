function loadScript(src, callback) {
  const script = document.createElement("script"); // Khỏi tạo thẻ <script></script>
  script.src = src;
  script.onload = () => callback(script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));
  document.head.append(script); // đưa thẻ script vào trong thẻ head
}

loadScript("https://javascript.info/callbacks", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
