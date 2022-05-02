import { renderContentNotes } from "../view/notes_View.js";
import { getResource } from "../module/api.js";

export async function renderNotes() {
  const dados = await getResource("notes");

  dados.results.forEach((data) => {
    if (data.location_type === "Farm") {
      renderContentNotes(data);
    }
  });
}
