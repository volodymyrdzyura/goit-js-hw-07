import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

function createGallery(galleryItems) {
return galleryItems.map(({preview, original, description})=>{
  return `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div> `
})
.join("")
}

gallery.insertAdjacentHTML("beforeend", createGallery(galleryItems));

gallery.addEventListener("click", openModal)

function openModal(event){
  event.preventDefault();
  if (event.target.classList.value !== "gallery__image"){
    return}
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
    `)
    gallery.removeEventListener("click", openModal)
    console.log(event.target.dataset.source)
    instance.show()

window.addEventListener("keydown", modalClose)

function modalClose(event) {
  event.preventDefault();
  if(!basicLightbox.visible()){return};
  if(event.key=='Escape'||event.key=='Esc'){
    event.preventDefault();
    instance.close();
  }
}}