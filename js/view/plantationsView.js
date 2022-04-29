export function renderHeaderPlantations(dados, index, boolean) {
  const cardSelector = document.querySelector("#content-plantations");
  const htmlRender = ` 
  <div class="content-article-container">
    <div class="content-article-text">
      <h3>${dados.name}<span>${dados.cycle}º ciclo</span></h3>
      <p>${dados.variety.name} ${dados.area} - Ha</p>
      <h5>Plantado</h5>
    </div>
    <div style="display: flex;">
    <div class="content-article-dates">
      <div class="dates-content">
        <h3>Data do Plantio</h3>
        <p>${dados.date.split("-").reverse().join("/")}</p>
      </div>
      <div class="dates-content">
        <h3>Emergência</h3>
        <p>${
          dados.emergence_date !== null
            ? dados.emergence_date.split("-").reverse().join("/")
            : dados.emergence_prediction_date.split("-").reverse().join("/")
        }</p>
      </div>
      <div class="dates-content">
        <h3>Colheita</h3>
        <p>${dados.harvest_prediction_date.split("-").reverse().join("/")}</p>
      </div>
    </div>
    <div class="icon-content">
      <i arrow${dados.id} class="fa-solid fa-chevron-up"></i>
    </div>
    </div>
  </div>
`;
  const htmlRenderClose = ` 
  <div class="content-article-container">
    <div class="content-article-text">
      <h3>${dados.name}<span>${dados.cycle}º ciclo</span></h3>
      <p>${dados.variety.name} ${dados.area} - Ha</p>
      <h5>Plantado</h5>
    </div>
    <div style="display: flex;">
    <div class="content-article-dates">
      <div class="dates-content">
        <h3>Data do Plantio</h3>
        <p>${dados.date.split("-").reverse().join("/")}</p>
      </div>
      <div class="dates-content">
        <h3>Emergência</h3>
        <p>${
          dados.emergence_date !== null
            ? dados.emergence_date.split("-").reverse().join("/")
            : dados.emergence_prediction_date.split("-").reverse().join("/")
        }</p>
      </div>
      <div class="dates-content">
        <h3>Colheita</h3>
        <p>${dados.harvest_prediction_date.split("-").reverse().join("/")}</p>
      </div>
    </div>
    <div class="icon-content">
      <i arrow${dados.id} class="fa-solid fa-chevron-down"></i>
    </div>
    </div>
  </div>
`;
  if (index === 0 && boolean) {
    const cardPlantation = `${htmlRender}<div data-he${dados.id} class="content-article row">
    </div>`;
    cardSelector.insertAdjacentHTML("beforeend", cardPlantation);
  } else if (index === 0 && !boolean) {
    const cardPlantation = `${htmlRender}<div data-he${dados.id} class="content-article row" style="display: none;">
    </div>`;
    cardSelector.insertAdjacentHTML("beforeend", cardPlantation);
  } else {
    const cardPlantation = `${htmlRenderClose}<div data-he${dados.id} class="content-article row" style="display: none;">
  </div>`;
    cardSelector.insertAdjacentHTML("beforeend", cardPlantation);
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
    const urls = [];
    item.attachments.images.forEach((element) => {
      urls.push(element.thumb_url);
    });

    const cardNotes = ` <div class="row-content">
    <span><i class="fa-solid fa-pencil"></i>Anotações <span class="space">${item.date
      .split("T")[1]
      .slice(0, 5)}</span></span>
    <div class="images-article">
      ${urls.map((el) => `<img src="${el}" alt="" />`).join("")}
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
