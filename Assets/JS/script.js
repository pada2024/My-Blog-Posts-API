
const submitEl = document.querySelector('form');

function uponSubmit(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();

    console.log(username, title, content);

    const blogForm = {
        username: username,
        title: title,
        content: content,
    };


    localStorage.setItem('blogForm', JSON.stringify(blogForm));
    //  renderMessage();
};

submitEl.addEventListener("click", uponSubmit);

// const toggle = document.getElementById('toggle');
// const body = document.body;

// toggle.addEventListener('change', function() {
//   if (toggle.checked) {
    // body.classList.add('dark-mode');
    // document.documentElement.style.setProperty('--background-color', '#333333');
    // document.documentElement.style.setProperty('--text-color', '#ffffff');
//   } else {
    // body.classList.remove('dark-mode');
    // document.documentElement.style.setProperty('--background-color', '#ffffff');
    // document.documentElement.style.setProperty('--text-color', '#333333');
//   }
// });

// Get form data and store it in an array in local storage
const blogForm = JSON.parse(localStorage.getItem('blogForm')) || [];

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  if (username && title && content) {
    const newPost = { username, title, content };
    blogForm.push(newPost);
    localStorage.setItem('blogPosts', JSON.stringify(blogForm));

    // Clear form fields after submission
    document.getElementById('username').value = '';
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
  } else {
    document.getElementById('error').textContent = 'Please complete the form.';
  }
});

// Retrieve blog posts from local storage and display them on a separate page
const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

const blogPostsContainer = document.getElementById('blog-posts');

blogPosts.forEach(post => {
  const postElement = document.createElement('div');
  postElement.innerHTML = `
    <h3>${post.title}</h3>
    <p>By ${post.username}</p>
    <p>${post.content}</p>
  `;
  blogPostsContainer.appendChild(postElement);
});

// Get form data and store it in an array in local storage
const blogPostsPage = JSON.parse(localStorage.getItem('blogPosts')) || [];

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  if (username && title && content) {
    const newPost = { username, title, content };
    blogPosts.push(newPost);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    // Clear form fields after submission
    document.getElementById('username').value = '';
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
  } else {
    document.getElementById('error').textContent = 'Please complete the form.';
  }
});

// Retrieve blog posts from local storage and display them on a separate page
const blogPostsNewPage = JSON.parse(localStorage.getItem('blogPosts')) || [];

const blogPostSection = document.getElementById('blog-posts');

blogPosts.forEach(post => {
  const postElement = document.createElement('div');
  postElement.innerHTML = `
    <h3>${post.title}</h3>
    <p>By ${post.username}</p>
    <p>${post.content}</p>
  `;
  blogPostsContainer.appendChild(postElement);
});