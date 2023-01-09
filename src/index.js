const searchForm = document.querySelector("#searchForm");
const searchTerm = document.querySelector("#searchTerm");
const articleTitles = document.querySelectorAll("article > h2");

searchForm.addEventListener("submit", (event) => {
  // Event handling code goes here
  event.preventDefault();

  if (searchTerm.value.trim() === "") {
    const newDiv = document.createElement("div");
    newDiv.id = "searchError";
    newDiv.classList.add("error");
    const content = `Please enter a search term`;
    newDiv.innerHTML = content;
    searchForm.appendChild(newDiv);
  }

  // Other code goes here
 articleTitles.forEach((articleTitle) => {
  if (!articleTitle.innerHTML.toLowerCase().includes(searchTerm.value.toLowerCase())) {
    articleTitle.parentNode.classList.add("hidden");
  } else {
    articleTitle.parentNode.classList.remove("hidden");
  }
});
});
