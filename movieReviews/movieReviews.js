let reviewsContainerEl = document.getElementById("reviewsContainer");
let titleInputEl = document.getElementById("titleInput");
let reviewTextareaEl = document.getElementById("reviewTextarea");

function onAddReview() {
    let movieTitle = titleInputEl.value;
    let movieReview = reviewTextareaEl.value;

    // showing an alert message when movieTitle is empty    
    if (movieTitle === "") {
        alert("Please enter a movie title");
        return;
    }

    // creating and appending movieTitle to the reviewsContainer
    let movieTitleEl = document.createElement("h1");
    movieTitleEl.textContent = "Movie Title: " + movieTitle;
    movieTitleEl.classList.add("movie-title");
    reviewsContainerEl.appendChild(movieTitleEl);

    // creating and appending the movieReviewEl to the reviewsContainerEl
    let movieReviewEl = document.createElement("p");
    movieReviewEl.textContent = "Review: " + movieReview;
    reviewsContainerEl.appendChild(movieReviewEl);

    //creating and appending the horizontalline to the reviewsContainerEl
    let horizontalLineEl = document.createElement("hr");
    reviewsContainerEl.appendChild(horizontalLineEl);

    // Clearing the values of titleInputEl and reviewTextareaEl
    titleInputEl.value = "";
    reviewTextareaEl.value = "";

}