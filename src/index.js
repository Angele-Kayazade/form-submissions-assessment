function validateExists(value) {
  return value && value.trim();
}

function performSearch(formData) {
  const articleTitles = document.querySelectorAll("article h2")
  const filteredArticles = Array.from(articleTitles).filter((articleTitle) => {
    const title = articleTitle.innerHTML;
    return title.toLowerCase().includes(formData.get("searchTerm").toLowerCase());
});
  
  // Show only filtered articles
  articleTitles.forEach((articleTitle) => {
    articleTitle.parentNode.classList.add("hidden");
  });
  filteredArticles.forEach((articleTitle) => {
    articleTitle.parentNode.classList.remove("hidden");
  });
}

function validateForm(formData) {
  // Check if seach term was entered
  
  // Remove error message div if it exists
  const errorDiv = document.querySelector("#searchError");
  if (errorDiv) errorDiv.remove();

  
  if (!validateExists(formData.get("searchTerm"))) {

    
    const newDiv = document.createElement("div");
    newDiv.classList.add("error");
    newDiv.id = "searchError";
    const content = `Please enter a search term`;
    newDiv.innerHTML = content;
    
    // Append to the form element
  document.querySelector("#searchForm").appendChild(newDiv);
  }
  else {
    performSearch(formData);
  }
}

const searchHandler = (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
 
  validateForm(formData)
  
  }


const main = () => {
  // Get the form element
  const form = document.querySelector("#searchForm");

  // Attach the search handler
  form.addEventListener("submit", searchHandler);
};


window.addEventListener("DOMContentLoaded", main);
