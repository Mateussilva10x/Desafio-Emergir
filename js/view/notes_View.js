export function renderContentNotes(data) {
  if (data.attachments.images.length > 0) {
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

export function renderContentPlantations(item) {
  const cardRow = document.querySelector(`[data-he${item.location.id}]`);
  const arrows = document.querySelector(`[arrow${item.location.id}]`);
  arrows.addEventListener("click", hideContainer);

  function hideContainer() {
    if (arrows.classList.contains("fa-chevron-up")) {
      arrows.classList.remove("fa-chevron-up");
      arrows.classList.add("fa-chevron-down");
      hide();
    } else {
      arrows.classList.add("fa-chevron-up");
      arrows.classList.remove("fa-chevron-down");
      appear();
    }
  }

  function hide() {
    cardRow.style.display = "none";
  }

  function appear() {
    cardRow.style.display = "flex";
  }

  if (item.attachments.images.length != 0) {
    // const urls = [];
    let imagesUrl = "";
    item.attachments.images.forEach((element) => {
      // urls.push(element.thumb_url);
      imagesUrl += `<img image-modal onclick="handleClick('${element.high_url}')" src="${element.thumb_url}" alt="" />`;
    });

    const cardNotes = ` <div class="row-content">
    <span><i class="fa-solid fa-pencil"></i>Anotações <span class="space">${item.date
      .split("T")[1]
      .slice(0, 5)}</span></span>
    <div class="images-article">
    ${imagesUrl}
    </div>
    <p>${item.description}</p>
    </div>
    `;
    cardRow.insertAdjacentHTML("afterbegin", cardNotes);
  } else {
    const cardRow = document.querySelector(`[data-he${item.location.id}]`);
    const cardNotes = ` <div class="row-content">
    <span><i class="fa-solid fa-pencil"></i>Anotações <span class="space">${item.date
      .split("T")[1]
      .slice(0, 5)}</span></span>
    <p>${item.description}</p>
    </div>
    `;

    cardRow.insertAdjacentHTML("afterbegin", cardNotes);
  }
}
