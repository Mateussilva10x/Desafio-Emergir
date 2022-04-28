//HEADER
import { renderHeader } from "./view/headerView.js";

//ASIDE
import { renderView } from "./view/aside.js";

//NOTES
import { renderNotes } from "./controller/notes_farm.js";

//PLANTATIONS
import { renderPlantations } from "./controller/plantations.js";
renderHeader();

window.onload = () => {
  document.querySelector(".load").style = "display: flex";
  document.querySelector(".main-container").style = "display: none";

  const test = document.querySelector(".content");
  const test2 = document.querySelector("#row-content");
  const title = `<h2>Anotações da fazenda</h2>`;
  const title2 = `<h2 class="information-title">Eventos dos talhões</h2>`;

  if (document.readyState === "complete") {
    setTimeout(function () {
      document.querySelector(".main-container").style = "";

      try {
        test.insertAdjacentHTML("afterbegin", title);
        test2.insertAdjacentHTML("afterend", title2);
        renderPlantations();
        renderNotes();
        renderView();
      } catch (e) {
        console.log(e);
      } finally {
        document.querySelector(".load").style = "display: none";
      }
    });
  }
};
