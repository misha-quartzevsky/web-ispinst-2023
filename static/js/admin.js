const authorAvatarInput = document.getElementById("forms__upload-user-image");
const authorAvatarPreview = document.querySelector(".upload-user-image__user-image");
const authorAvatarPreviewPost = document.querySelector(".card-area__user-image");
const authorAvatarInscription = document.querySelector(".upload-user-image__caption");
const authorAvatarButtons = document.querySelectorAll(".forms__uploaded-img-buttons")[0];
let base64AuthorAvatar = "";
function previewAuthorAvatar() {
    const file = authorAvatarInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onloadend = function () {
            base64AuthorAvatar = reader.result.replace("data:", "").replace(/^.+,/, "")
            authorAvatarPreview.style.backgroundImage = "url(" + reader.result + ")";
            authorAvatarPreviewPost.style.backgroundImage = "url(" + reader.result + ")";
        }
        authorAvatarInscription.classList.add("hidden");
        authorAvatarButtons.classList.remove("hidden");
        authorAvatarPreview.innerHTML = "";
        authorAvatarPreview.style.backgroundColor = "rgba(0, 0, 0, 0)";
        authorAvatarPreviewPost.style.backgroundColor = "rgba(0, 0, 0, 0)";
        authorAvatarPreview.style.border = "none";
        reader.readAsDataURL(file); 
    } 
    else {
        removeAuthorAvatar();
    }
}

function removeAuthorAvatar() {
    authorAvatarPreview.innerHTML = '<image src=""../static/img/camera.png" />';
    authorAvatarPreview.style.backgroundImage = "";
    authorAvatarPreviewPost.style.backgroundImage = "";
    authorAvatarPreview.style.backgroundColor = "#F7F7F7";
    authorAvatarPreviewPost.style.backgroundColor = "#F7F7F7";
    authorAvatarPreview.style.border = "1px dashed #D3D3D3";
    authorAvatarInscription.classList.remove("hidden");
    authorAvatarButtons.classList.add("hidden");
}

const pageImgInput = document.getElementById("upload-page-img__file-field");
const pageImgPreview = document.querySelectorAll(".upload-post-img__button")[0];
const pageImgPreviewPost = document.querySelector(".page-area__img");
const pageImgInscription = document.getElementById("forms__page-caption");
const pageImgButtons = document.querySelectorAll(".forms__uploaded-img-buttons")[1];
let base64PageImg = "";
function previewPageImg() {
    const file = pageImgInput.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onloadend = function () {
            base64PageImg = reader.result.replace("data:", "").replace(/^.+,/, "");
            pageImgPreview.style.backgroundImage = "url(" + reader.result + ")";
            pageImgPreviewPost.style.backgroundImage = "url(" + reader.result + ")";
        }
        pageImgInscription.classList.add("hidden");
        pageImgButtons.classList.remove("hidden");
        pageImgPreview.innerHTML = "";
        pageImgPreview.style.backgroundColor = "rgba(0, 0, 0, 0)";
        pageImgPreviewPost.style.backgroundColor = "rgba(0, 0, 0, 0)";
        pageImgPreview.style.border = "none";
        reader.readAsDataURL(file); 
    } 
    else {
        removePageImg();
    }
}

function removePageImg() {
    pageImgPreview.innerHTML = `
        <image src="../static/img/camera.png" />
        <span class="upload-post-img__caption">Upload</span>
    `;
    pageImgPreview.style.backgroundImage = "";
    pageImgPreviewPost.style.backgroundImage = "";
    pageImgPreview.style.backgroundColor = "#F7F7F7";
    pageImgPreviewPost.style.backgroundColor = "#F7F7F7";
    pageImgPreview.style.border = "1px dashed #D3D3D3";
    pageImgInscription.classList.remove("hidden");
    pageImgButtons.classList.add("hidden");
}

const cardImgInput = document.getElementById("upload-card-img__file-field");
const cardImgPreview = document.querySelectorAll(".upload-post-img__button")[1];
const cardImgPreviewPost = document.querySelector(".card-area__img");
const cardImgInscription = document.getElementById("forms__card-caption");
const cardImgButtons = document.querySelectorAll(".forms__uploaded-img-buttons")[2];
let base64CardImg = "";
function previewCardImg() {
    const file = cardImgInput.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onloadend = function () {
            base64CardImg = reader.result.replace("data:", "").replace(/^.+,/, "");
            cardImgPreview.style.backgroundImage = "url(" + reader.result + ")";
            cardImgPreviewPost.style.backgroundImage = "url(" + reader.result + ")";
        }
        cardImgInscription.classList.add("hidden");
        cardImgButtons.classList.remove("hidden");
        cardImgPreview.innerHTML = "";
        cardImgPreview.style.backgroundColor = "rgba(0, 0, 0, 0)";
        cardImgPreviewPost.style.backgroundColor = "rgba(0, 0, 0, 0)";
        cardImgPreview.style.border = "none";
        reader.readAsDataURL(file); 
    } 
    else {
        removeCardImg();
    }
}

function removeCardImg() {
    cardImgPreview.innerHTML = `
        <image src="../static/img/camera.png" />
        <span class="upload-post-img__caption">Upload</span>
    `;
    cardImgPreview.style.backgroundImage = "";
    cardImgPreviewPost.style.backgroundImage = "";
    cardImgPreview.style.backgroundColor = "#F7F7F7";
    cardImgPreviewPost.style.backgroundColor = "#F7F7F7";
    cardImgPreview.style.border = "1px dashed #D3D3D3";
    cardImgInscription.classList.remove("hidden");
    cardImgButtons.classList.add("hidden");
}

const textInputs = document.querySelectorAll(".forms__text");
function previewText() {
    const pageAreaTitle = document.querySelector(".page-area__title");
    const cardAreaTitle = document.querySelector(".card-area__title");
    const pageAreaSubtitle = document.querySelector(".page-area__subtitle");
    const cardAreaSubtitle = document.querySelector(".card-area__subtitle");
    const cardAreaAuthorName = document.querySelector(".card-area__user-name");
    const cardAreaPublishDate = document.querySelector(".card-area__publish-date");

    setTextInputClass(textInputs);

    pageAreaTitle.innerHTML = textInputs[0].value;
    cardAreaTitle.innerHTML = textInputs[0].value;
    pageAreaSubtitle.innerHTML = textInputs[1].value;
    cardAreaSubtitle.innerHTML = textInputs[1].value;
    cardAreaAuthorName.innerHTML = textInputs[2].value;
    cardAreaPublishDate.innerHTML = textInputs[3].value;
}

function setTextInputClass(arr) {
    for (el of arr) {
        if (!el.value) {
            el.classList.remove("forms__text-input_filled");
        }
        else { 
            el.classList.add("forms__text-input_filled");
        }
    }
}

async function createJson() {
    const authorAvatarFile = authorAvatarInput.files[0];
    const pageImgFile = pageImgInput.files[0];
    const cardImgFile = cardImgInput.files[0];
    const authorAvatar = (authorAvatarFile) ? authorAvatarFile.name : "";
    const pageImg = pageImgFile ? pageImgFile.name : "";
    const cardImg = cardImgFile ? cardImgFile.name : "";
    const contentData = document.querySelector(".Content__text-area");
    const formData = {
        title: textInputs[0].value,
        subtitle: textInputs[1].value,
        author_name: textInputs[2].value,
        author_avatar: authorAvatar,
        author_avatar_file: base64AuthorAvatar,
        publish_date: textInputs[3].value,
        page_image: pageImg,
        page_image_file: base64PageImg,
        card_image: cardImg,
        card_image_file: base64CardImg,
        content: contentData.value
    }
    const json = JSON.stringify(formData, null, "\t");
    console.log(json);

}  

const authorAvatarRemoveButton = document.querySelectorAll(".uploaded-img-buttons__remove")[0];
const pageImgRemoveButton = document.querySelectorAll(".uploaded-img-buttons__remove")[1];
const cardImgRemoveButton = document.querySelectorAll(".uploaded-img-buttons__remove")[2];
const publishButton = document.querySelector(".create-new-post__publish");
function initEventListeners() {
    for (let i of textInputs) {
        i.addEventListener("input", previewText);
    }
    authorAvatarInput.addEventListener("input", previewAuthorAvatar);
    authorAvatarRemoveButton.addEventListener('click', removeAuthorAvatar);
    pageImgInput.addEventListener("input", previewPageImg);
    pageImgRemoveButton.addEventListener('click', removePageImg);
    cardImgInput.addEventListener("input", previewCardImg);
    cardImgRemoveButton.addEventListener('click', removeCardImg);
    publishButton.addEventListener("click", createJson);
}

initEventListeners();