const myForm = document.querySelector('.my-form')

function handleFormSubmit(event) {
  event.preventDefault();
  const myNumberInput = document.querySelector('.my-number-input')

  const postId = myNumberInput.value;

  const url = `https://jsonplaceholder.typicode.com/posts?userId=${postId}`;

  fetch(url, {
    method: 'GET'
  })
  .then((res) => res.json())
  .then(function(posts) {
    const postsElement = document.querySelector('.posts');
    let postsHTML = "";

    posts.forEach(function(post) {
      postsHTML += `<h2>${post.title}</h2>`;
    })

    postsElement.innerHTML = postsHTML;

  })
  .catch(function(err) {
    console.log(err);
    alert('There was an error')
  })
}

myForm.addEventListener('submit', handleFormSubmit)
