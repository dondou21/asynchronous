// function getBizEmails() {
//     return fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => users.filter(user => user.email.endsWith('.biz'))
// .map(user => user.email))

//     .catch(error => console.error("Error:", error.message))
// }

// getBizEmails().then(emails => console.log(emails))

async function getUsersEmails() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        return users.map(user => user.email);
} catch (error) {console.error("Error:". error.message);
    return [];
}
}

getUsersEmails().then(emails => console.log(emails));
