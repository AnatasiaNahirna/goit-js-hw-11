import getImages from "./js/pixabay-api"
import markup from "./js/render-functions"

const form = document.querySelector(".form");

form.addEventListener("submit", (ev) => {
    ev.preventDefault()
    const search = ev.currentTarget.elements['search-text'].value.trim()
    if (!search) {
        return;
    };
    getImages(search)
        .then((images) => { return markup(images) });
})