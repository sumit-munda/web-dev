document.getElementById("shorten-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const url = formData.get("url");
  const custom_url = formData.get("shortCode");

  console.log(url, custom_url);

  try {
    const response = await fetch('/shorten', {
      method : "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({url, shortCode})
    });

    if(response.ok) {
      alert("Form submitted successfully");
    } else {
      const errorMessage = await response.text();
      alert(errorMessage);
    }
  } catch (error) {
    console.error(error);
  }
  
});
