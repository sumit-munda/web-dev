document.getElementById("shorten-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const url = formData.get("url");
  const custom_url = formData.get("custom-url");

  console.log(url, custom_url);
});
