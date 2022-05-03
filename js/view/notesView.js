export function renderContentNotes(note) {
  if (note.attachments.images.length > 0) {
    let imagesUrl = "";
    note.attachments.images.forEach((image) => {
      imagesUrl += `<img image-modal onclick="handleClick('${image.high_url}')" src="${image.thumb_url}" alt="" />`;
    });

    const cardRow = document.querySelector("#row-content");
    const cardNotes = `<div class="row-content">
    <span><i class="fa-solid fa-pencil"></i>Anotações <span class="space">${note.date
      .split("T")[1]
      .slice(0, 5)}</span></span>
    <div class="images-article">
      ${imagesUrl}
    </div>
    <p>${note.description}</p>
    </div>`;

    cardRow.insertAdjacentHTML("afterbegin", cardNotes);
  } else {
    const cardRow = document.querySelector("#row-content");
    const cardNotes = `<div class="row-content">
    <span><i class="fa-solid fa-pencil"></i>Anotações <span class="space">${note.date
      .split("T")[1]
      .slice(0, 5)}</span></span>
    <p>${note.description}</p>
    </div>`;

    cardRow.insertAdjacentHTML("afterbegin", cardNotes);
  }
}

export function renderContentPlantations(note) {
  const cardRow = document.querySelector(`[data-he${note.location.id}]`);
  const arrows = document.querySelector(`[arrow${note.location.id}]`);
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

  if (note.attachments.images.length != 0) {
    let imagesUrl = "";
    note.attachments.images.forEach((image) => {
      imagesUrl += `<img image-modal onclick="handleClick('${image.high_url}')" src="${image.thumb_url}" alt="" />`;
    });

    const cardNotes = ` <div class="row-content">
    <span><i class="fa-solid fa-pencil"></i>Anotações <span class="space">${note.date
      .split("T")[1]
      .slice(0, 5)}</span></span>
    <div class="images-article">
    ${imagesUrl}
    </div>
    <p>${note.description}</p>
    </div>
    `;
    cardRow.insertAdjacentHTML("afterbegin", cardNotes);
  } else {
    const cardRow = document.querySelector(`[data-he${note.location.id}]`);
    const cardNotes = ` <div class="row-content">
    <span><i class="fa-solid fa-pencil"></i>Anotações <span class="space">${note.date
      .split("T")[1]
      .slice(0, 5)}</span></span>
    <p>${note.description}</p>
    </div>
    `;

    cardRow.insertAdjacentHTML("afterbegin", cardNotes);
  }
}
