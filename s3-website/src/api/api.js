export async function fetchData() {
  try {
    const response = await fetch("<replace API URL here>");
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}
