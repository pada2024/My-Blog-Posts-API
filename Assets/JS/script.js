const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const uponSubmit = document.getElementById('submit');

//need to store these  objects 

const blogForm = {
    username: username,
    title: title,
    content: content
};


//If  no data is entered form should return prompt user to compplete required fields
//create a light or dark mode functionality
// Need to be prompted to add more blog entries
//Need an array of blog entries containing all Blog form fields
//Need link to dveloper's portfolio
//need functionality to be able to take a closer look at blog content and be presented with form headers


uponSubmit.addEventListener('click', function (event) {
    event.preventDefault();

    const blogForm = {
        username: username.value,
        title: title.value,
        content: content.value.trim(),
    };


    localStorage.setItem('blogForm', JSON.stringify(blogForm));
    renderMessage();
});

function renderBlogForm() {
    // Use JSON.parse() to convert text to JavaScript object
    // Check if data is returned, if not exit out of the function
    if (blogForm) {
        document.getElementById('saved-username').innerHTML = username.value;
        document.getElementById('saved-title').innerHTML = title.value;
        document.getElementById('saved-content').innerHTML = content.value;
    }
}

uponSubmit.addEventListener('click', function (event) {
    event.preventDefault();
    blogForm();
    renderBlogForm();
});

function init() {
    renderBlogForm();
}
init();


// function renderMessage() {
//   const lastGrade = JSON.parse(localStorage.getItem('blogForm'));
//   if (lastGrade !== null) {
// document.querySelector('.message').textContent =
//   lastGrade.student + ` received a/an ${lastGrade.grade}`;
//   }
// }
