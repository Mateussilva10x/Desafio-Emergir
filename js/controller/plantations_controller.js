import { getResource } from "../module/api.js";
import { renderHeaderPlantations } from "../view/plantationsView.js";
import { renderContentPlantations } from "../view/plantationsView.js";

export async function renderPlantations() {
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

  dados.results.forEach((dados, index) => {
    renderHeaderPlantations(dados, index);

    arr1.forEach((data) => {
      if (data.location.id === dados.id) {
        let current_id = data.location.id;
        renderContentPlantations(data, current_id);
      }
    });
  });
}
