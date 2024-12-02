const text = document.getElementById("output");

fetch("https://api.ipify.org/?format=json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  })
  .then((data) =>  { 
    const ip = data.ip;
    text.innerHTML = "Your public IP: " + ip;
  }) 
  .catch((error) => {
    console.error("Fetch error:", error)
  }); 



  


