const URL = "https://jsonplaceholder.typicode.com/users";
let p = document.querySelector("#name");
// fetch(URL)
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(user => {
//            p.innerHTML =  `${p.innerHTML} <br> Name: ${user.name}`
//         });
//     })
//     .catch(err => err)

// post

// fetch(URL,{
//     method: 'POST',
//     body: JSON.stringify()
// })
//   .then(response => response.json())
//   .then(data => console.log(data))

fetch(URL, {
        method: 'POST',
        body: JSON.stringify(),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json))
