//HEADER
import { renderHeader } from "./view/headerView.js";

//ASIDE
import { renderView } from "./view/asideView.js";

//NOTES
import { renderNotes } from "./controller/notes_farm.js";

//PLANTATIONS
import { renderPlantations } from "./controller/plantations_controller.js";
renderHeader();

window.onload = async () => {
  document.querySelector(".load").style = "display: flex";
  document.querySelector(".main-container").style = "display: none";

  const test = document.querySelector(".content");
  const test2 = document.querySelector("#row-content");
  const title = `<h2>Anotações da fazenda</h2>`;
  const title2 = `<h2 class="information-title">Eventos dos talhões</h2>`;

  if (document.readyState === "complete") {
    try {
      test.insertAdjacentHTML("afterbegin", title);
      test2.insertAdjacentHTML("afterend", title2);
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
