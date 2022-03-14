export const callRegsiter = (name: String, option: String, coordinator: String, description: String) => {
  fetch("https://backendunip.herokuapp.com/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      option,
      coordinator,
      description
    })
  })
    .then(response => response.json())
    .then(res => console.log(res));
}