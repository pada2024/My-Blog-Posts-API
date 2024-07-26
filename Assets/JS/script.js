
const submitEl = document.querySelector('form');

function uponSubmit(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();

    console.log( username, title, content );

    const blogForm = {
        username: username,
        title: title,
        content: content,
    };


    localStorage.setItem('blogForm', JSON.stringify(blogForm));
  //  renderMessage();
};


submitEl.addEventListener("click",uponSubmit );



