const BASE_URL = "http://std.bit-camp.ru:3000/";
async function getData() {
  try {
    const res = await fetch(BASE_URL + "contacts");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
