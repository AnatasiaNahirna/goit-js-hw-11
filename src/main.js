import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import getImages from "./js/pixabay-api"
import {createGallery as markup, clearGallery, showLoader, hideLoader} from "./js/render-functions"

const form = document.querySelector(".form");

form.addEventListener("submit", (ev) => {
    ev.preventDefault()
    const search = ev.currentTarget.elements['search-text'].value.trim()
    if (!search) {
        iziToast.show({
            message: 'Please fill in the field',
            messageColor: "#fff",
            backgroundColor: "#EF4040",
            position: "topRight",
        });
            return;
    }

    showLoader();
    clearGallery();
    getImages(search)
        .then((images) => {
            return markup(images)
        })
        .catch((error) => { 
                iziToast.show({
                message: 'Error happened',
                messageColor: "#fff",
                backgroundColor: "#EF4040",
                position: "topRight",
                });
            return;
         })
        .finally(() => {hideLoader()})
});