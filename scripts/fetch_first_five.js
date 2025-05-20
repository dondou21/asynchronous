fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(posts => {
    const top5 = posts.slice(0, 5);
    const ul = document.getElementById("postList");
    
    
    top5.forEach(post => {
        const li = document.createElement("li")

        li.textContent = post.title;
        ul.appendChild(li);
    });
})