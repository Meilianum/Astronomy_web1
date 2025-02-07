
// var button = document.getElementById("btn");
// button.addEventListener('click', function() {
//   alert("successfully signup");
// });



//   var button = document .getElementById('close')
//   button.addEventListener('click', function(){
//     alert('from close')
//   } );


const form = document.getElementById('submit-article-form');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const articlesList = document.getElementById('articles-list');

// Function to fetch articles
async function fetchArticles() {
  try {
    const response = await fetch('https://your-api-endpoint.com/articles');
    const articles = await response.json();
    
    articlesList.innerHTML = '';  // Clear current list
    articles.forEach(article => {
      const articleDiv = document.createElement('div');
      articleDiv.classList.add('article-card');
      
      articleDiv.innerHTML = `
        <h3>${article.title}</h3>
        <p>${article.content}</p>
      `;
      
      articlesList.appendChild(articleDiv);
    });
  } catch (error) {
    console.error('Error fetching articles:', error);
  }
}

// Function to submit a new article
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const articleData = {
    title: titleInput.value,
    content: contentInput.value
  };

  try {
    await fetch('https://your-api-endpoint.com/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(articleData),
    });
    titleInput.value = '';
    contentInput.value = '';
    fetchArticles();  // Refresh article list after submission
  } catch (error) {
    console.error('Error submitting article:', error);
  }
});

// Initial load of articles
fetchArticles();

