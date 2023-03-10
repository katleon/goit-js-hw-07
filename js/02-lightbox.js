import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryDiv = document.querySelector(".gallery");
const galleryCard = createGalleryCards(galleryItems);
galleryDiv.insertAdjacentHTML("afterbegin", galleryCard);

function createGalleryCards(images) {
  return images
    .map(
      (image) =>
        `<a class="gallery__item" href="${image.original}" onclick="return false;">
<img class="gallery__image" 
src="${image.preview}" 
alt="${image.description}" />
</a>`
    )
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
