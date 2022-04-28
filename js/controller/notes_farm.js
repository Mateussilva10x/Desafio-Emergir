import { renderContentNotes } from "../view/notes_farmView.js";
import { getResource } from "../module/api.js";

export async function renderNotes() {
  const dados = await getResource("notes").then((res) => {
    return res;
  });

  dados.results.forEach((data) => {
    if (data.location_type === "Farm") {
      renderContentNotes(data);
    }
  });
}
