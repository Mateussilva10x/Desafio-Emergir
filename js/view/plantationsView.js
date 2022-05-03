export function renderHeaderPlantations(plantation, index) {
  const cardSelector = document.querySelector("#content-plantations");
  const htmlRender = ` 
  <div class="content-article-container">
    <div class="content-article-text">
      <h3>${plantation.name}<span>${plantation.cycle}º ciclo</span></h3>
      <p>${plantation.variety.name} ${plantation.area} - Ha</p>
      <h5>Plantado</h5>
    </div>
    <div style="display: flex;">
    <div class="content-article-dates">
      <div class="dates-content">
        <h3>Data do Plantio</h3>
        <p>${plantation.date.split("-").reverse().join("/")}</p>
      </div>
      <div class="dates-content">
        <h3>Emergência</h3>
        <p>${
          plantation.emergence_date !== null
            ? plantation.emergence_date.split("-").reverse().join("/")
            : plantation.emergence_prediction_date
                .split("-")
                .reverse()
                .join("/")
        }</p>
      </div>
      <div class="dates-content">
        <h3>Colheita</h3>
        <p>${plantation.harvest_prediction_date
          .split("-")
          .reverse()
          .join("/")}</p>
      </div>
    </div>
    <div class="icon-content">
      <i arrow${plantation.id} class="fa-solid fa-chevron-up"></i>
    </div>
    </div>
  </div>
`;

  const htmlRenderClose = ` 
  <div class="content-article-container">
    <div class="content-article-text">
      <h3>${plantation.name}<span>${plantation.cycle}º ciclo</span></h3>
      <p>${plantation.variety.name} ${plantation.area} - Ha</p>
      <h5>Plantado</h5>
    </div>
    <div style="display: flex;">
    <div class="content-article-dates">
      <div class="dates-content">
        <h3>Data do Plantio</h3>
        <p>${plantation.date.split("-").reverse().join("/")}</p>
      </div>
      <div class="dates-content">
        <h3>Emergência</h3>
        <p>${
          plantation.emergence_date !== null
            ? plantation.emergence_date.split("-").reverse().join("/")
            : plantation.emergence_prediction_date
                .split("-")
                .reverse()
                .join("/")
        }</p>
      </div>
      <div class="dates-content">
        <h3>Colheita</h3>
        <p>${plantation.harvest_prediction_date
          .split("-")
          .reverse()
          .join("/")}</p>
      </div>
    </div>
    <div class="icon-content">
      <i arrow${plantation.id} class="fa-solid fa-chevron-down"></i>
    </div>
    </div>
  </div>
`;

  if (index === 0) {
    const cardPlantation = `${htmlRender}<div data-he${plantation.id} class="content-article row">
    </div>`;
    cardSelector.insertAdjacentHTML("beforeend", cardPlantation);
  } else {
    const cardPlantation = `${htmlRenderClose}<div data-he${plantation.id} class="content-article row" style="display: none;">
  </div>`;
    cardSelector.insertAdjacentHTML("beforeend", cardPlantation);
  }
}
