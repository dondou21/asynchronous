function getBizEmails() {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => users.filter(user => user.email.endsWith('.biz'))
.map(user => user.email))

    .catch(error => console.error("Error:", error.message))
}

getBizEmails().then(emails => console.log(emails))

