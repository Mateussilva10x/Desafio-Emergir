import { getResource } from "../module/api.js";
import { renderHeaderPlantations } from "../view/plantationsView.js";

export async function renderPlantations() {
  const dados = await getResource("plantations");

  dados.results.forEach((dados, index) => {
    renderHeaderPlantations(dados, index);
  });
}
