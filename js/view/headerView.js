import { getDetails } from "../module/api.js";

export async function renderHeader() {
  const infos = await getDetails().then((res) => res);
  const header = document.querySelector(".header-text");
  const headerContent = `
  <i class="fa-solid fa-file"></i>
  <h1 date-header>Relatório de Visita Técnica - ${infos.details.date
    .split("-")
    .reverse()
    .join("/")}</h1>
`;

  header.insertAdjacentHTML("afterbegin", headerContent);
}
