const proizvodi = [
  { naziv: "Airfryer 10L", slika: "airfry7501.png", cena: "7.500 din" },
  { naziv: "Airfryer 10L Rerna", slika: "airfry8001.png", cena: "7.500 din" },
  { naziv: "Navigacija 7\"", slika: "imageradiojack_display.png", cena: "4.500 din" },
  { naziv: "Power Tower", slika: "imagepowertower.png", cena: "11.999 din" },
  { naziv: "JBL BT520", slika: "jbl.png", cena: "4.999 din" },
  { naziv: "Stereo Set 7501", slika: "multimedia7501.png", cena: "6.999 din" }
];

let korpa = [];

function prikaziProizvode() {
  const galerija = document.getElementById("galerija");
  galerija.innerHTML = "";

  proizvodi.forEach((p, index) => {
    const div = document.createElement("div");
    div.className = "proizvod";
    div.innerHTML = `
      <img src="images/${p.slika}" alt="${p.naziv}">
      <h2>${p.naziv}</h2>
      <p><strong>Cena:</strong> ${p.cena}</p>
      <button onclick="dodajUKorpu(${index})">Dodaj u korpu</button>
    `;
    galerija.appendChild(div);
  });
}

function dodajUKorpu(index) {
  korpa.push(proizvodi[index]);
  document.getElementById("brojStavki").textContent = korpa.length;
}

function prikaziKorpu() {
  const modal = document.getElementById("korpaModal");
  const lista = document.getElementById("listaKorpe");
  lista.innerHTML = "";

  korpa.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.naziv} – ${p.cena}`;
    lista.appendChild(li);
  });

  modal.style.display = "block";
}

function zatvoriKorpu() {
  document.getElementById("korpaModal").style.display = "none";
}

// Automatski prikaz proizvoda za sve korisnike
window.onload = prikaziProizvode;

// Admin login (opciono)
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "kudekamarko23@gmail.com" && password === "jordan23NINA") {
    alert("Admin pristup aktiviran.");
    // Ovde možeš dodati admin funkcije
  } else {
    alert("Pogrešan email ili lozinka.");
  }
});
