import { getDetails, getDetailsFarm } from "../module/api.js";
import { asideView } from "../view/asideView.js";

export async function renderAside() {
  const infos = await getDetails();
  const water = await getDetailsFarm();

  asideView(infos, water);
}
