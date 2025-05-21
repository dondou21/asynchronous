### This is The Gym program asynchronous
 

## Exercise 2 (Medium):
Fetch 5 post titles from the JSONPlaceholder API and display them in the DOM.

🌐 API:
https://jsonplaceholder.typicode.com/posts

💡 Task:
Use fetch() to get all posts.

Extract only the first 5 posts.

Display their titles as a list on the page


## Exercise 3
Create a function called `createAlarm` that generates a wake-up message for a person after a specified time delay. This function should accept two parameters: the person's name and the delay time in seconds. The function should return a promise that resolves with the wake-up message (e.g. Wake up person) but if the delay is less than 2 seconds, the promise should be immediately rejected with an error message stating **Delay is not sufficient**