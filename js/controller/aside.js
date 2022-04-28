import { renderView } from "../view/asideView.js";
import { getDetails } from "../module/api.js";

export async function renderAside() {
  const dados = await getDetails().then((res) => {
    return res;
  });

  dados.results.forEach((data) => {
    renderView(data);
  });
}
