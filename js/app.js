//HEADER
import { renderHeader } from "./view/headerView.js";
renderHeader();

//ASIDE
import { renderView } from "./view/asideView.js";

//NOTES
import { renderNotes } from "./controller/notes_farm_controller.js";

//PLANTATIONS
import { renderPlantations } from "./controller/plantations_controller.js";

window.onload = async () => {
  document.querySelector(".load").style = "display: flex";
  document.querySelector(".main-container").style = "display: none";

  const section = document.querySelector(".content");
  const content = document.querySelector("#row-content");
  const title = `<h2>Anotações da fazenda</h2>`;
  const title2 = `<h2 class="information-title">Eventos dos talhões</h2>`;

  if (document.readyState === "complete") {
    try {
      section.insertAdjacentHTML("afterbegin", title);
      content.insertAdjacentHTML("afterend", title2);
      await renderPlantations();
      await renderNotes();
      await renderView();
    } catch (e) {
      console.log(e);
    } finally {
      document.querySelector(".main-container").style = "";
      document.querySelector(".load").style = "display: none";
    }
  }
};
