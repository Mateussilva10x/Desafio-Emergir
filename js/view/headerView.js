export function headerView(farm) {
  const header = document.querySelector(".header-text");
  const headerContent = `
  <i class="fa-solid fa-file"></i>
  <h1 date-header>Relatório de Visita Técnica - ${farm.details.date
    .split("-")
    .reverse()
    .join("/")}</h1>
`;

  header.insertAdjacentHTML("afterbegin", headerContent);
}
