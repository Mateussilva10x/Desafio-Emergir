import {
  renderContentNotes,
  renderContentPlantations,
} from "../view/notes_View.js";
import { getResource } from "../module/api.js";

export async function renderNotes() {
  const dados = await getResource("notes");

  dados.results.forEach((notes) => {
    if (notes.location_type === "Farm") {
      renderContentNotes(notes);
    } else {
      renderContentPlantations(notes);
    }
  });
}
