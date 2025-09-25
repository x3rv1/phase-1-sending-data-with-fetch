// Add your code here
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ name, email }),
  })
    .then((response) => response.json())
    .then((data) => {
      const newElement = document.createElement("div");
      newElement.textContent = data.id;
      document.body.appendChild(newElement);
    })
    .catch((error) => {
      const errorElement = document.createElement("div");
      errorElement.textContent = error.message;
      document.body.appendChild(errorElement);
    });
}
