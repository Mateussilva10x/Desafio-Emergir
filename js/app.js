//GET URL API
async function getResource(resource) {
  const url = `https://justcors.com/tl_288aad0/https://farmbox.cc/api/public/technical_visit_report/${resource}.json?token=379238b5-705c-48bc-b8c9-27e26676b417`;

  try {
    const response = await fetch(url);
    const dados = await response.json();
    return dados;
  } catch (e) {
    return console.log("deu erro", e);
  }
}

async function getDetails() {
  const url = `https://justcors.com/tl_288aad0/https://farmbox.cc/api/public/content_details.json?token=379238b5-705c-48bc-b8c9-27e26676b417`;

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

    cardRow.insertAdjacentHTML("afterbegin", cardNotes);
  }
}
renderNotes();

//PLANTATIONS
async function renderPlantations() {
  const dados = await getResource("plantations").then((res) => {
    return res;
  });

  dados.results.forEach((bases) => renderHeaderPlantations(bases));
}

async function renderNotesPlantation() {
  const dados = await getResource("notes").then((res) => {
    return res;
  });

  dados.results.forEach((item) => {
    if (item.location_type === "Plantation") {
      renderContentPlantations(item);
    }
  });
}

function renderHeaderPlantations(bases) {
  const cardSelector = document.querySelector("#content-plantations");
  const cardPlantation = `   
  <div class="content-article-container">
  <div class="content-article-text">
    <h3>${bases.name}<span>${bases.cycle}º ciclo</span></h3>
    <p>${bases.variety.name} ${bases.area} -  Ha</p>
    <h5>Plantado</h5>
  </div>
  <div class="content-article-dates">
    <div class="dates-content">
      <h3>Data do Plantio</h3>
      <p>${bases.date.split("-").reverse().join("/")}</p>
    </div>
    <div class="dates-content">
      <h3>Emergência</h3>
      <p>${
        bases.emergence_date !== null
          ? bases.emergence_date.split("-").reverse().join("/")
          : "----"
      }</p>
    </div>
    <div class="dates-content">
      <h3>Colheita</h3>
      <p>${bases.harvest_prediction_date.split("-").reverse().join("/")}</p>
    </div>
  </div>
  <div class="icon-content">
    <i arrow class="fa-solid fa-chevron-up"></i>
  </div>
</div>
<div data-he${bases.id} class="content-article row">
  
</div>`;

  cardSelector.insertAdjacentHTML("afterbegin", cardPlantation);
}

function renderContentPlantations(item) {
  const arrows = document.querySelector("[arrow]");
  arrows.addEventListener("click", hideContainer);

  function hideContainer() {
    console.log("clicou na flecha");
    if (arrows.classList.contains("fa-chevron-up")) {
      arrows.classList.remove("fa-chevron-up");
      arrows.classList.add("fa-chevron-down");
    } else {
      arrows.classList.add("fa-chevron-up");
      arrows.classList.remove("fa-chevron-down");
    }
  }

  if (item.attachments.images.length != 0) {
    const urls = [];
    item.attachments.images.forEach((element) => {
      urls.push(element.thumb_url);
    });

    const cardRow = document.querySelector(`[data-he${item.location.id}]`);
    const cardNotes = ` <div class="row-content">
    <span><i class="fa-solid fa-pencil"></i>Anotações</span>
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
    <span><i class="fa-solid fa-pencil"></i>Anotações</span>
    <p>${item.description}</p>
    </div>
    `;

    cardRow.insertAdjacentHTML("afterbegin", cardNotes);
  }
}

renderPlantations();
renderNotesPlantation();

// getResource("plantations").then((res) =>
//   console.log(JSON.stringify(res, null, 2))
// );
