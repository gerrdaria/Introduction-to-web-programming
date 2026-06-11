const genreCheckboxes = document.querySelectorAll(".genre-filter");
const priceFilter = document.getElementById("priceFilter");
const priceValue = document.getElementById("priceValue");
const applyFiltersButton = document.getElementById("applyFilters");
const resetFiltersButton = document.getElementById("resetFilters");
const bookCards = document.querySelectorAll(".catalog-card");

priceFilter.oninput = function () {
    priceValue.textContent = priceFilter.value + " ₸";
};

applyFiltersButton.onclick = function () {
    const selectedGenres = [];

    genreCheckboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            selectedGenres.push(checkbox.value);
        }
    });

    const maxPrice = Number(priceFilter.value);

    bookCards.forEach(function (card) {
        const bookGenre = card.dataset.genre;
        const bookPrice = Number(card.dataset.price);

        const genreMatches =
            selectedGenres.length === 0 || selectedGenres.includes(bookGenre);

        const priceMatches = bookPrice <= maxPrice;

        if (genreMatches && priceMatches) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
};

resetFiltersButton.onclick = function () {
    genreCheckboxes.forEach(function (checkbox) {
        checkbox.checked = false;
    });

    priceFilter.value = 100000;
    priceValue.textContent = "100000 ₸";

    bookCards.forEach(function (card) {
        card.style.display = "block";
    });
};