import { getDetails, getDetailsFarm } from "../module/api.js";

export async function renderAside() {
  const infos = await getDetails();
  const water = await getDetailsFarm();
  const plots = water.plots + water.active_harvest_plantations.length;
  const renderAside = document.querySelector(".main-container");
  const renderContent = `
    <aside class="main-aside">
    <div id="first-content" class="main-aside-content">
    <span>Fazenda</span>
    <h3 farm-name>${infos.farm.name}</h3>
    <p class="text-information">${plots} talhões</p>
  </div>
  <div class="main-aside-content row">
    <div class="main-aside-content-midle">
      <div class="main-aside-content-midle-text">
        <span>Data da visita</span>
        <h3 visit-date>${infos.details.date.split("-").reverse().join("/")}</h3>
      </div>
      <div class="main-aside-content-midle-text">
        <span>Safra</span>
        <h3 safra-date>${infos.harvest.name}</h3>
      </div>
    </div>
    <div class="row-mobile">
      <div class="main-aside-content-midle">
        <div class="main-aside-content-midle-text">
          <span>Realizada por</span>
          <h3 owner-name>${infos.owner.name}</h3>
        </div>
        <div class="border-radius">
          <h3 initials>${infos.owner.initials}</h3>
        </div>
      </div>
      <div class="main-aside-content-icon">
        <span>Pluviometria</span>
        <div class="icon-container">
        <h2><i class="fa fa-droplet water-icon"></i> ${
          Number.isInteger(water.rain_until_date) === true
            ? water.rain_until_date + ",00"
            : water.rain_until_date
        } mm</h2>
        </div>
        <p class="text-information p4">Acumulado na safra</p>
      </div>
    </div>
  </div>

  <div class="main-aside-content">
    <span>Observações</span>
    <p observation>${infos.details.observation}</p>
  </div>
  <div class="main-aside-content">
    <button class="btn">
      <i class="fa-solid fa-print"></i>imprimir
    </button>
  </div>
  </aside>`;

  renderAside.insertAdjacentHTML("afterbegin", renderContent);

  document.querySelector("button").addEventListener("click", function () {
    window.print();
  });
}
