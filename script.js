function unmuteVideo() {
  const video = document.getElementById("presenterVideo");
  video.muted = false;
  video.play();
}

const proizvodi = [
  { naziv: "ventilator", slika: "ventilator1.png", cena: "6.500 RSD", opis: "Snažan ventilator za rashlađivanje prostora." },
  { naziv: "Airfryer HL-7000", slika: "airfryer1.png", cena: "299 zł", opis: "Digitalni airfryer sa touchscreen interfejsom." },
  { naziv: "Airfryer YL-7000", slika: "airfryer2.png", cena: "7.500 din", opis: "Kompaktan i efikasan model za svakodnevnu upotrebu." },
  { naziv: "PowerTower", slika: "powertower.png", cena: "11.999 din", opis: "Multifunkcionalni uređaj za kućnu teretanu." },
  { naziv: "JBL Tune BT530", slika: "jbl.png", cena: "4.999 din", opis: "Bluetooth slušalice sa snažnim basom i dugim trajanjem baterije." },
  { naziv: "Navigacija 7\"", slika: "multimedija2.png", cena: "4.500 din", opis: "GPS uređaj sa ekranom osetljivim na dodir i ažuriranim mapama." },
  { naziv: "Multimedija Dupli Ulaz", slika: "multimedija1.png", cena: "3.999 din", opis: "Podržava USB i AUX ulaze, idealno za auto zabavu." },
  { naziv: "Multimedija 27cm", slika: "multimedija.png", cena: "6.500 din", opis: "Veliki ekran za maksimalni užitak u vožnji." },
  { naziv: "Adidas Ranac + Torbica", slika: "ranac.png", cena: "2.999 din", opis: "Komplet za školu ili trening – stil i funkcionalnost." },
  { naziv: "Šorts Lebron James", slika: "lebron6.png", cena: "1.900 din", opis: "Veličine: M, L | Inspirisan NBA legendom." },
  { naziv: "Xbox Kontroler", slika: "xbox.png", cena: "4.500 din", opis: "Microsoft Original | Žičani kabl 3m | Plug & Play" },
  { naziv: "Mlin za Kafu", slika: "mlin.png", cena: "4.800 din", opis: "Profesionalni mlin sa keramičkim noževima." },
  { naziv: "Dvostruka Kamera", slika: "dupla_kamera.png", cena: "2.500 din", opis: "5x Zoom | Bela boja | Promo cena" },
  { naziv: "Digitalni Mlin", slika: "digimlin.png", cena: "7.500 din", opis: "Digitalni prikaz | Precizno mlevenje | Promo cena" },
  { naziv: "Aluminijumski Kuleri", slika: "kuler.png", cena: "7.500 din", opis: "3 kom ARGB | Bez kablova | Modularno kačenje" }
];

let brojKorpe = 0;
const prikaz = document.getElementById("proizvodi");
const brojKorpeEl = document.getElementById("brojKorpe");
const klikZvuk = document.getElementById("klikZvuk");
const filterInput = document.getElementById("filterInput");

function prikaziProizvode(lista) {
  prikaz.innerHTML = lista.map(p => `
    <div class="kartica">
      <img src="images/${p.slika}" alt="${p.naziv}">
      <h3>${p.naziv}<span class="cena-zlatna"> ${p.cena}</span></h3>
      <button onclick="otvoriDetalje('${p.naziv}')">Detalji</button>
      <button onclick="dodajUKorpu()">Dodaj u korpu</button>
    </div>
  `).join('');
}

function dodajUKorpu() {
  brojKorpe++;
  brojKorpeEl.textContent = brojKorpe;
  klikZvuk.volume = 0.4;
  klikZvuk.play();
}

filterInput.addEventListener("input", () => {
  const vrednost = filterInput.value.toLowerCase();
  const filtrirani = proizvodi.filter(p =>
    p.naziv.toLowerCase().includes(vrednost)
  );
  prikaziProizvode(filtrirani);
});

function otvoriDetalje(naziv) {
  const proizvod = proizvodi.find(p => p.naziv === naziv);
  const popup = document.getElementById("detaljiPopup");
  popup.innerHTML = `
    <div class="popup-content" onclick="event.stopPropagation()">
      <img src="images/${proizvod.slika}" alt="${proizvod.naziv}" style="max-width:100%; border-radius:12px;">
      <h2>${proizvod.naziv}</h2>
      <p><strong class="cena-zlatna">${proizvod.cena}</strong></p>
      <p>${proizvod.opis}</p>
      <button onclick="dodajUKorpu()">Dodaj u korpu</button>
      <button onclick="zatvoriDetalje()">Zatvori</button>
    </div>
  `;
  popup.style.display = "flex";
}

function zatvoriDetalje() {
  document.getElementById("detaljiPopup").style.display = "none";
}

prikaziProizvode(proizvodi);
