import getImages from "./js/pixabay-api"
import markup from "./js/render-functions"
import {clearGallery, showLoader, hideLoader} from "./js/render-functions"

const form = document.querySelector(".form");

form.addEventListener("submit", (ev) => {
    ev.preventDefault()
    const search = ev.currentTarget.elements['search-text'].value.trim()
    if (!search) {
        return;
    };

    showLoader()
    clearGallery()

    setTimeout(() => {
    getImages(search)
        .then((images) => { return markup(images) })
        .catch((error) => {return error})
    hideLoader()},2000)
})