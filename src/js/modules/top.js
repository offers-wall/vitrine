export default function getGclid() {
  let gclidData = "";
  let t5Data = ""; // Инициализируем переменную t5Data

  function getUrlParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    const regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    const results = regex.exec(window.location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  window.addEventListener("load", function () {
    const gclid = getUrlParameter("gclid");
    const t5 = getUrlParameter("t5");

    if (gclid) {
      gclidData = gclid;
    }

    if (t5) {
      t5Data = t5;
    }

    const links = document.querySelectorAll(".item");

    links.forEach((link) => {
      let url = new URL(link.href);
      if (gclidData) {
        url.searchParams.set("gclid", gclidData);
      }
      if (t5Data) {
        url.searchParams.set("t5", t5Data);
      }
      link.href = url.toString();
    });
  });
}