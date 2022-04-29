import { getResource } from "../module/api.js";
import { renderHeaderPlantations } from "../view/plantationsView.js";
import { renderContentPlantations } from "../view/plantationsView.js";

export async function renderPlantations() {
  const dados = await getResource("plantations");
  console.log(dados);
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
    let test = false;

    data.results.forEach((data) => {
      if (data.location.id === dados.id) {
        test = true;
      }
    });

    renderHeaderPlantations(dados, index, test);

    arr1.forEach((data) => {
      if (data.location.id === dados.id) {
        let current_id = data.location.id;
        renderContentPlantations(data, current_id);
      }
    });
  });
}
