function fetchMultipleAPIs(apiUrls) {
    return Promise.all(
    apiUrls.map(url => 
        fetch(url)
        .then(response => response.json())
    )
    )
}


const apiUrls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3'
];

fetchMultipleAPIs(apiUrls)
  .then(results => {
    console.log('Combined Results:', results);
  })
  .catch(error => {
    console.log('Error:', error.message);
  });