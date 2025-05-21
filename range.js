// async function getUsersInGeoRange() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const users = await response.json();

//         return users.filter(user => {
//             const lat = parseFloat(user.address.geo.lat);
//             return lat > -20 && lat < 20;       
//          });
//     } catch (error) {
//         console.error("Error:", error.message);
//         return [];
//     }
// }

// getUsersInGeoRange().then(users => console.log(users));


function getUsersInGeoRange() {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=> {
        return users.filter(user => {
            const lat = parseFloat(user.address.geo.lat);
            return lat > -20 && lat < 20});
    })
    .catch(error => console.error("error:", error.message));
    return [];
}

getUsersInGeoRange().then(users => console.log(users));