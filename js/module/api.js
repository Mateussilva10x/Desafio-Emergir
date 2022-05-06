//GET URL API
const key = "https://justcors.com/tl_ed7b0b9/";
const token = "379238b5-705c-48bc-b8c9-27e26676b417";

export async function getResource(resource) {
  const url = `${key}https://farmbox.cc/api/public/technical_visit_report/${resource}.json?token=${token}`;

  try {
    const response = await fetch(url);
    const dados = await response.json();
    return dados;
  } catch (e) {
    return console.log("deu erro", e);
  }
}

export async function getDetails() {
  const url = `${key}https://farmbox.cc/api/public/content_details.json?token=${token}`;

  try {
    const response = await fetch(url);
    const dados = await response.json();

    return dados;
  } catch (e) {
    return console.log("deu erro", e);
  }
}

export async function getDetailsFarm() {
  const url = `${key}https://farmbox.cc/api/public/technical_visit_report/farm.json?token=${token}`;

  try {
    const response = await fetch(url);
    const dados = await response.json();

    return dados;
  } catch (e) {
    return console.log("deu erro", e);
  }
}
