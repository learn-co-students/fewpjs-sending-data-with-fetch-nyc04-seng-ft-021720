let formData = {
  name: "Steve",
  email: "steve@steve.com"
};

let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};

let docBody = document.querySelector("body")
function submitData(name, email){
  return fetch("http://localhost:3000/users", configObj)
    .then(response => response.json())
    .then(object => docBody.append(object.id))
    .catch(function(error){
      alert("whoops")
      docBody.append(error.message)
    })
};