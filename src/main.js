import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
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

    showLoader();
    clearGallery();
    getImages(search)
        .then((images) => { return markup(images) })
        .catch((error) => { 
            if (!error === undefined) {
                return iziToast.show({
                message: 'Error happened',
                messageColor: "#fff",
                backgroundColor: "#EF4040",
                position: "topRight",
            });
            }
         })
        .finally(() => {hideLoader()})
});