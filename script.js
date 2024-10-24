const imgContainer = document.querySelector("#image-container");
const urlAPI = "https://picsum.photos/v2/list";

const getPicture = () => {
  fetch(urlAPI)
    .then((data) => data.json())
    .then((items) => {
      items.forEach(function (imgObj) {
        const newContainer = document.createElement("div");
        newContainer.classList.add("image-container-item");
        const newImg = document.createElement("img");
        newImg.src = imgObj.download_url;
        newContainer.appendChild(newImg);
        const newAuthor = document.createElement("p");
        newAuthor.textContent = imgObj.author;
        newContainer.appendChild(newAuthor);
        imgContainer.appendChild(newContainer);
      });
    });
};

getPicture();
