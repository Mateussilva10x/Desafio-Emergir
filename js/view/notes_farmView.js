export function renderContentNotes(data) {
  console.log(data);
  if (data.attachments.images.length != 0) {
    // const urls = [];
    let imagesUrl = "";
    data.attachments.images.forEach((element) => {
      // urls.push(element.thumb_url);
      imagesUrl += `<img image-modal onclick="handleClick('${element.high_url}')" src="${element.thumb_url}" alt="" />`;
    });

    const cardRow = document.querySelector("#row-content");
    const cardNotes = `<div class="row-content">
    <span><i class="fa-solid fa-pencil"></i>Anotações <span class="space">${data.date
      .split("T")[1]
      .slice(0, 5)}</span></span>
    <div class="images-article">
      ${imagesUrl}
    </div>
    <p>${data.description}</p>
    </div>`;

    cardRow.insertAdjacentHTML("afterbegin", cardNotes);
  } else {
    const cardRow = document.querySelector("#row-content");
    const cardNotes = `<div class="row-content">
    <span><i class="fa-solid fa-pencil"></i>Anotações <span class="space">${data.date
      .split("T")[1]
      .slice(0, 5)}</span></span>
    <p>${data.description}</p>
    </div>`;

    cardRow.insertAdjacentHTML("afterbegin", cardNotes);
  }
}
