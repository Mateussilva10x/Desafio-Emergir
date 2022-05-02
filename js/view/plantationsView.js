export function renderHeaderPlantations(dados, index) {
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
  if (index === 0) {
    const cardPlantation = `${htmlRender}<div data-he${dados.id} class="content-article row">
    </div>`;
    cardSelector.insertAdjacentHTML("beforeend", cardPlantation);
  } else {
    const cardPlantation = `${htmlRenderClose}<div data-he${dados.id} class="content-article row" style="display: none;">
  </div>`;
    cardSelector.insertAdjacentHTML("beforeend", cardPlantation);
  }
}
