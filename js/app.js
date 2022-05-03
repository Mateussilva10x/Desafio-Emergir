//HEADER
import { renderHeader } from "./controller/headerController.js";

//ASIDE
import { renderAside } from "./controller/asideController.js";

//NOTES
import { renderNotes } from "./controller/notesController.js";

//PLANTATIONS
import { renderPlantations } from "./controller/plantationsController.js";

window.onload = () => {
  renderHeader();
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
      Promise.all([renderPlantations(), renderNotes(), renderAside()]).then(
        () => {
          document.querySelector(".main-container").style = "";
          document.querySelector(".load").style = "display: none";
        }
      );
    } catch (e) {
      console.log(e);
    }
  }
};
