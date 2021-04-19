// Add your code here

// let formData = {
//     name: "Stormish",
//     email: "mcgormish@frogmail.com"
// let configObj = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         name: userName,
//         email: userEmail
//     })};
// }

function submitData(userName, userEmail) {
    
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(function(response) {
        return response.json();
        })
        .then(function(object) {
            console.log(object.id);
            let paragraph = document.createElement('p');
            paragraph.innerHTML = object.id
            document.body.appendChild(paragraph);
        })
        .catch(function(error) {
            alert("Bad Things are Gnoshing You");
            console.log(error.message);
            let paragraphTwo = document.createElement('p');
            paragraphTwo.innerHTML = error.message
            document.body.appendChild(paragraphTwo)
        });
}