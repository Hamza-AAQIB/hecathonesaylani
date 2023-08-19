const posts = [];

const addPostButton = document.getElementById('add-post');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const postsList = document.getElementById('posts');

addPostButton.addEventListener('click', () => {
    const title = titleInput.value;
    const content = contentInput.value;

    if (title && content) {
        const post = { title, content };
        posts.push(post);
        titleInput.value = '';
        contentInput.value = '';
        displayPosts();
    }
});

function displayPosts() {
    postsList.innerHTML = '';
    posts.forEach(post => {
        const postItem = document.createElement('li');
        postItem.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
        `;
        postsList.appendChild(postItem);
    });
}

displayPosts();
