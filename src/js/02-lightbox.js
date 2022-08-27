import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a> `;
    })
    .join("");
}

gallery.insertAdjacentHTML("beforeend", createGallery(galleryItems));

new SimpleLightbox(".gallery a", {
  animationSpeed: 150,
  captionsData: "alt",
  captionDelay: 150,
});
