const searchKey = document.querySelector(".searchKey");
const searchBtn = document.querySelector(".search__btn");
const content = document.querySelector(".content");
const refresh = document.querySelector(".search__refresh");

const api = "O3iJIz4KNHqyrwfM88y7Abn9WA2607z0";
let limit = 8;
let search = "cats";
let inDOM = "";

searchBtn.onclick = function() {
    search = searchKey.value;
    inDOM = "";
    getItems();
};
refresh.onclick = function() {
    inDOM = "";
    for (let i = 0; i < limit; i++) {
        getRandomItems()
    }
};
for (let i = 0; i < limit; i++) {
    getRandomItems()
}
async function getRandomItems() {
    let response = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${api}`
    );
    let text = await response.json();
    let layout = `<div class="content__block">
      <img src='${text.data.fixed_height_downsampled_url}'>
      <div class="content__block-title">
        <p>${text.data.title}</p>
        <span class="info">i</span>
      </div>
      <div class="search__info-block">
          <div class="info__block-size">${text.data.image_width}x${
        text.data.image_width
        }</div>
          <a href="${
        text.data.url
        }" target = "_blank"class="info__block-link">Original</a>
      </div>
    </div>`;
    inDOM += layout;
    content.innerHTML = inDOM;
    getInfo()
}
async function getItems() {
    let response = await fetch(
        `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${api}&limit=${limit}`
    );
    let text = await response.json();

    if (text.pagination.count === 0 || searchKey.value === "") {
        content.innerHTML = `<div class="nothing">nothing to show</div>`;
    }
    text.data.forEach(element => {
        let layout = `<div class="content__block">
      <img src='${element.images.fixed_width.url}'>
      <div class="content__block-title">
        <p>${element.title}</p>
        <span class="info">i</span>
      </div>
      <div class="search__info-block">
          <div class="info__block-size">${element.images.original.width}x${
            element.images.original.height
            }</div>
          <a href="${
            element.url
            }" target = "_blank"class="info__block-link">Original</a>
      </div>
    </div>`;
        inDOM += layout;
        content.innerHTML = inDOM;
        getInfo()
    });
}
function getInfo() {
    let infoBlock = document.querySelectorAll(".search__info-block");
    infoBlock.forEach(itemBlock => {
        itemBlock.onclick = function () {
            this.classList.remove("show");
        }
    });
    let info = document.querySelectorAll(".info");
    info.forEach(item => {
        item.onclick = function() {
            this.parentElement.nextElementSibling.classList.toggle("show");
        };
    });
}
