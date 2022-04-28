export function renderContentNotes(data) {
  if (data.attachments.images.length != 0) {
    const urls = [];
    data.attachments.images.forEach((element) => {
      urls.push(element.thumb_url);
    });

    const cardRow = document.querySelector("#row-content");
    const cardNotes = `<div class="row-content">
    <span><i class="fa-solid fa-pencil"></i>Anotações</span>
    <div class="images-article">
      ${urls.map((el) => `<img src="${el}" alt="" />`).join("")}
    </div>
    <p>${data.description}</p>
    </div>`;

    cardRow.insertAdjacentHTML("afterbegin", cardNotes);
  } else {
    const cardRow = document.querySelector("#row-content");
    const cardNotes = `<div class="row-content">
    <span><i class="fa-solid fa-pencil"></i>Anotações</span>
    <p>${data.description}</p>
    </div>`;

    cardRow.insertAdjacentHTML("afterbegin", cardNotes);
  }
}
