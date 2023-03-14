var sumy = {
  Rekreacja: 0,
  Kosmetyki: 0,
  Jedzenie: 0,
  Rachunki: 0,
  Komunikacja: 0,
  Zdrowie: 0,
  Inne: 0,
  Wszystkie: 0,
};

function dodaj() {
  let kategoria = document.querySelector("select").value;
  console.log(kategoria);
  if (kategoria === "Wybierz kategorię") {
    return;
  }

  let produkt = document.getElementById("pole1").value;
  let cena = document.getElementById("pole2").value;
  let table = document.getElementById("tablica");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = kategoria;
  cell2.innerHTML = produkt;
  cell3.innerHTML = cena;
  cell3.className = "pln";
  dodajDoSumy(kategoria, cena);
  render();
}

let suma = 0;
const pln = document.querySelectorAll(".pln");
pln.forEach(function (pojedynczyPln) {
  suma += parseInt(pojedynczyPln.innerHTML);
});

let sumaWszystkiego = document.querySelector("#sumaWszystkiego");
sumaWszystkiego.innerHTML = suma;

function dodajDoSumy(kategoria, cena) {
  sumy[kategoria] += Number(cena);
  document.querySelector("#suma" + kategoria).innerHTML = sumy[kategoria];
  sumy.Wszystkie += Number(cena);
  document.querySelector("#sumaWszystkiego").innerHTML = sumy.Wszystkie;
}

$("#kategoria").select2({
  placeholder: "Select an option",
});

function render() {
  const ctx = document.getElementById("myChart2");
  if (window.chart != null) {
    window.chart.destroy();
  }
  window.chart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: [
        "Kosmetyki",
        "Jedzenie",
        "Rekreacja",
        "Zdrowie",
        "Komunikacja",
        "Rachunki",
        "Inne",
      ],
      datasets: [
        {
          label: "Wykres wydatkow",
          data: [
            sumy.Kosmetyki,
            sumy.Jedzenie,
            sumy.Rekreacja,
            sumy.Zdrowie,
            sumy.Komunikacja,
            sumy.Rachunki,
            sumy.Inne,
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {},
  });
}

render();
