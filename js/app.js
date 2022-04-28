//GET URL API
const key = "https://justcors.com/tl_fba9df5/";

async function getResource(resource) {
  const url = `${key}https://farmbox.cc/api/public/technical_visit_report/${resource}.json?token=379238b5-705c-48bc-b8c9-27e26676b417`;

  try {
    const response = await fetch(url);
    const dados = await response.json();
    return dados;
  } catch (e) {
    return console.log("deu erro", e);
  }
}

async function getDetails() {
  const url = `${key}https://farmbox.cc/api/public/content_details.json?token=379238b5-705c-48bc-b8c9-27e26676b417`;

  try {
    const response = await fetch(url);
    const dados = await response.json();
    return dados;
  } catch (e) {
    return console.log("deu erro", e);
  }
}

//ASIDE
const dateReport = document.querySelector("[date-header]");
const farmName = document.querySelector("[farm-name]");
const visitDate = document.querySelector("[visit-date]");
const safraDate = document.querySelector("[safra-date]");
const ownerName = document.querySelector("[owner-name]");
const ownerInitials = document.querySelector("[initials]");
const observation = document.querySelector("[observation]");

async function renderView() {
  const infos = await getDetails().then((res) => res);

  dateReport.textContent = `Relatório de Visita Técnica - ${infos.details.date
    .split("-")
    .reverse()
    .join("/")}`;
  farmName.textContent = infos.farm.name;
  visitDate.textContent = infos.details.date.split("-").reverse().join("/");
  safraDate.textContent = infos.harvest.name;
  ownerName.textContent = infos.owner.name;
  ownerInitials.textContent = infos.owner.initials;
  observation.textContent = infos.details.observation;
}
renderView();

//NOTES
async function renderNotes() {
  const dados = await getResource("notes").then((res) => {
    return res;
  });

  dados.results.forEach((data) => {
    if (data.location_type === "Farm") {
      renderContentNotes(data);
      // console.log(data);
    }
  });
}

function renderContentNotes(data) {
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

    cardRow.insertAdjacentHTML("beforeend", cardNotes);
  }
}
renderNotes();

//PLANTATIONS
async function renderPlantations() {
  const dados = await getResource("plantations");
  const data = await getResource("notes");

  let arr1 = [];

  data.results.forEach((data) => {
    dados.results.forEach((dados) => {
      if (data.location.id === dados.id) {
        arr1.push(data);
      }
    });
  });
  console.log(arr1);

  dados.results.forEach((dados, index) => {
    let test = false;

    data.results.forEach((data) => {
      if (data.location.id === dados.id) {
        test = true;
      }
    });
    console.log(dados);

    renderHeaderPlantations(dados, index, test);

    arr1.forEach((data) => {
      if (data.location.id === dados.id) {
        let current_id = data.location.id;
        renderContentPlantations(data, current_id);
      }
    });
  });
}

function renderHeaderPlantations(dados, index, boolean) {
  const cardSelector = document.querySelector("#content-plantations");
  const htmlRender = ` 
  <div class="content-article-container">
    <div class="content-article-text">
      <h3>${dados.name}<span>${dados.cycle}º ciclo</span></h3>
      <p>${dados.variety.name} ${dados.area} -  Ha</p>
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
            : "----"
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
      <p>${dados.variety.name} ${dados.area} -  Ha</p>
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
            : "----"
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

function renderContentPlantations(item) {
  const cardRow = document.querySelector(`[data-he${item.location.id}]`);
  const arrows = document.querySelector(`[arrow${item.location.id}]`);
  arrows.addEventListener("click", hideContainer);

  function hideContainer() {
    console.log("clicou na flecha");
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
    <span><i class="fa-solid fa-pencil"></i>Anotações</span>
    <div class="images-article">
      ${urls.map((el) => `<img src="${el}" alt="" />`).join("")}
    </div>
    <p>${item.description}</p>
    </div>
    `;
    cardRow.insertAdjacentHTML("beforeend", cardNotes);
  } else {
    const cardRow = document.querySelector(`[data-he${item.location.id}]`);
    const cardNotes = ` <div class="row-content">
    <span><i class="fa-solid fa-pencil"></i>Anotações</span>
    <p>${item.description}</p>
    </div>
    `;

    cardRow.insertAdjacentHTML("beforeend", cardNotes);
  }
}
renderPlantations();

// getResource("plantations").then((res) =>
//   console.log(JSON.stringify(res, null, 2))
// );
