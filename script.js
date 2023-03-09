var sumy = {
  Nalogi: 0,
  Kosmetyki: 0,
  Jedzenie: 0,
  Rachunki: 0,
  Komunikacja: 0,
  Zdrowie: 0,
  Inne: 0,
  Wszystkie: 0,
};

// backend
var api_host = 'http://localhost:5001';

function dodaj() {
  let kategoria = document.querySelector("select").value;
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


//backend
    fetch('http://localhost:5001/zakup/add', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: produkt,
            category: kategoria,
            price: cena
        })
    }).then(function (response) {
    });
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

//backend
function wczytaj() {
    fetch('http://localhost:5001/zakup/get').then(function (response) {
        response.json().then(function (json) {
            json.forEach(function (zakup) {
                let table = document.getElementById("tablica");
                let row = table.insertRow(-1);
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                let cell3 = row.insertCell(2);
                cell1.innerHTML = zakup.category;
                cell2.innerHTML = zakup.name;
                cell3.innerHTML = zakup.price;
                cell3.className = "pln";
                dodajDoSumy(zakup.category, zakup.price)
            })
        });
    });
}

wczytaj();

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
        "Nałogi",
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
            sumy.Nalogi,
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
