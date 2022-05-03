import { getDetails } from "../module/api.js";
import { headerView } from "../view/headerView.js";

export async function renderHeader() {
  const infos = await getDetails();

  headerView(infos);
}
