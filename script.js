const data = {
  manufaktur: {
    title: "Manufaktur",
    description: "Sedang memanufaktur",
  },
  distribusi: {
    title: "Distribusi",
    description: "Sedang mendistribusikan",
  },
  retail: {
    title: "Retail",
    description: "Sedang meretail",
  },
  logistik: {
    title: "Logistik",
    description: "Sedang mengelola logistik",
  },
  keuangan: {
    title: "Keuangan",
    description: "Sedang mengelola keuangan",
  },
  kesehatan: {
    title: "Kesehatan",
    description: "Sedang melayani kesehatan",
  },
  pendidikan: {
    title: "Pendidikan",
    description: "Sedang mendidik",
  },
  lainnya: {
    title: "Lainnya",
    description: "Sedang mengerjakan hal lainnya",
  },
};

function mulai() {
  //   const container = document.querySelector(".grid-content");
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const item = document.querySelectorAll("[data-id]");

  document.addEventListener("click", function (e) {
    const target = event.target.closest("[data-id]");
    if (!target) return;
    item.forEach((item) => item.classList.remove("active"));
    target.classList.add("active");

    const id = target.getAttribute("data-id");
    const sectorData = data[id];

    if (!sectorData) return;

    title.textContent = sectorData.title;
    description.textContent = sectorData.description;
  });
}

mulai();
