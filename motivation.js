// Get all the <p> elements within the class "content"
const contentDiv = document.querySelector(".content");
const paragraphs = contentDiv.querySelectorAll("p");

// Loop through the <p> elements and display their content
paragraphs.forEach((paragraph) => {
  console.log(paragraph.textContent.trim()); // Trim to remove leading/trailing spaces
});

const anotherQuote = document.getElementById("anotherQuote");

anotherQuote.addEventListener("click", showAnotherQuote());
