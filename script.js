const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");


// =========================
// MOVIE DATA
// =========================

const movies = [

    {
        name: "A Silent Voice",
        url: "a-silent-voice.html"
    },

    {
        name: "Your Name",
        url: "your-name.html"
    },

    {
        name: "I Want to Eat Your Pancreas",
        url: "i-want-to-eat-your-pancreas.html"
    }

];


// =========================
// SEARCH FUNCTION
// =========================

function searchMovies() {

    if (!searchInput) {
        return;
    }

    const searchText = searchInput.value
        .toLowerCase()
        .trim();


    // কিছু না লিখলে কিছু করবে না
    if (searchText === "") {
        return;
    }


    // =========================
    // MOVIES PAGE
    // =========================

    const movieCards =
        document.querySelectorAll(".anime-card");


    if (movieCards.length > 0) {

        let foundMovie = false;


        movieCards.forEach(function(card) {

            const movieName =
                card.querySelector("h3")
                    .textContent
                    .toLowerCase();


            if (movieName.includes(searchText)) {

                card.style.display = "block";

                foundMovie = true;

            } else {

                card.style.display = "none";

            }

        });


        const noResults =
            document.getElementById("noResults");


        if (noResults) {

            if (foundMovie) {

                noResults.style.display = "none";

            } else {

                noResults.style.display = "block";

            }

        }

        return;
    }


    // =========================
    // HOME PAGE SEARCH
    // =========================

    const foundMovie = movies.find(function(movie) {

        return movie.name
            .toLowerCase()
            .includes(searchText);

    });


    const noResults =
        document.getElementById("noResults");


    if (foundMovie) {

        window.location.href = foundMovie.url;

    } else {

        if (noResults) {

            noResults.style.display = "block";

        }

    }

}


// =========================
// SEARCH BUTTON
// =========================

if (searchBtn) {

    searchBtn.addEventListener(
        "click",
        searchMovies
    );

}


// =========================
// ENTER KEY
// =========================

if (searchInput) {

    searchInput.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                searchMovies();

            }

        }
    );

}