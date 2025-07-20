import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// const simplebox = new SimpleLightbox();

export default function createGallery(images) {
    const container = document.querySelector(".container");
    container.insertAdjacentHTML("beforeend", "<ul class=”gallery”>");
    const gallery = document.querySelector(".gallery");
    const markup = images.map((image) => {
        const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = image;
        return `<li class="img-li">
        <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}">
        <div class="stats"><p>Likes</p><p>${likes}</p></div>
        <div class="stats"><p>Views</p><p>${views}</p></div>
        <div class="stats"><p>Comments</p><p>${comments}</p></div>
        <div class="stats"><p>Downloads</p><p>${downloads}</p></div>
        </a>
        </li>`
    }).join("");
    gallery.insertAdjacentHTML("beforeend", markup);
}

function clearGallery() { }

function showLoader() { }

function hideLoader() {}