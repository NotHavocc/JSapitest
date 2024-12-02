const text = document.getElementById("output");

fetch("https://api.ipify.org/?format=json")
  .then((response) => {
    // If the response is not 2xx, throw an error
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // If the response is 200 OK, return the response in JSON format.
    return response.json();
  })
  .then((data) =>  { 
    const ip = data.ip;
    text.innerHTML = "Your public IP: " + ip;
  }) // You can continue to do something to the response.
  .catch((error) => {
    console.error("Fetch error:", error)
  }); // In case of an error, it will be captured and logged.



  


