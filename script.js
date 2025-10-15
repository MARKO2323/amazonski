const proizvodi = [
  {
    naziv: "Airfryer HL-7000",
    slika: "airfryer1.png",
    cena: "299 zł",
    opis: "Digitalni airfryer sa touchscreen interfejsom."
  },
  {
    naziv: "Airfryer YL-7000",
    slika: "airfryer2.png",
    cena: "7.500 din",
    opis: ""
  },
  {
    naziv: "PowerTower",
    slika: "powertower.png",
    cena: "11.999 din",
    opis: ""
  },
  {
    naziv: "JBL Tune BT530",
    slika: "jbl.png",
    cena: "4.999 din",
    opis: ""
  },
  {
    naziv: "Navigacija 7\"",
    slika: "multimedija2.png",
    cena: "4.500 din",
    opis: ""
  },
  {
    naziv: "Multimedija Dupli Ulaz",
    slika: "multimedija1.png",
    cena: "3.999 din",
    opis: ""
  },
  {
    naziv: "Multimedija 27cm",
    slika: "multimedija.png",
    cena: "6.500 din",
    opis: ""
  },
  {
    naziv: "Adidas Ranac + Torbica",
    slika: "ranac.png",
    cena: "2.999 din",
    opis: ""
  },
  {
    naziv: "Šorts Lebron James",
    slika: "lebron6.png",
    cena: "1.900 din",
    opis: "Veličine: M, L"
  },
  {
    naziv: "Xbox Kontroler",
    slika: "xbox.png",
    cena: "4.500 din",
    opis: "Microsoft Official Original | Žičani kabl 3m"
  },
  {
    naziv: "Mlin za Kafu",
    slika: "mlin.png",
    cena: "4.800 din (AKCIJA)",
    opis: "Grinder Coffee Profesionalni | Keramički noževi"
  },
  {
    naziv: "Dvostruka Kamera",
    slika: "dupla_kamera.png",
    cena: "2.500 din (AKCIJA)",
    opis: "5x Zoom | Bela boja | Promo cena"
  }
];

let brojKorpe = 0;
const prikaz = document.getElementById("proizvodi");

function prikaziProizvode(lista) {
  prikaz.innerHTML = "";
  lista.forEach(p => {
    prikaz.innerHTML += `
      <div class="kartica">
        <img src="images/${p.slika}" alt="${p.naziv}">
        <h3>${p.naziv}</h3>
        <p><strong>Cena:</strong> ${p.cena}</p>
        <p>${p.opis}</p>
        <button onclick="dodajUKorpu()">Dodaj u korpu</button>
      </div>
    `;
  });
}

function dodajUKorpu() {
  brojKorpe++;
  document.getElementById("brojKorpe").textContent = brojKorpe;

  const klikZvuk = document.getElementById("klikZvuk");
  klikZvuk.volume = 0.4;
  klikZvuk.play();
}

document.getElementById("filterInput").addEventListener("input", function() {
  const vrednost = this.value.toLowerCase();
  const filtrirani = proizvodi.filter(p => p.naziv.toLowerCase().includes(vrednost));
  prikaziProizvode(filtrirani);
});

prikaziProizvode(proizvodi);
