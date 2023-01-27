let sumaAlkohol = 5;
let sumaKosmetyki = 10;
let sumaJedzenie = 9;
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

}                      
        

let suma = 0;
const pln = document.querySelectorAll(".pln");
pln.forEach(function (pojedynczyPln) {
  suma += parseInt(pojedynczyPln.innerHTML);
  })


  let sumaWszystkiego = document.querySelector("#sumaWszystkiego");
  sumaWszystkiego.innerHTML = suma;

  function dodajDoSumy(kategoria, cena) {
    if (kategoria === "Alkohol") {
        sumaAlkohol += Number(cena);   
        suma += Number(cena);
        console.log(suma);
document.querySelector("#sumaAlkohol").innerHTML = sumaAlkohol;
document.querySelector("#sumaWszystkiego").innerHTML = suma;
    }  
    if (kategoria === "Jedzenie") {
        sumaJedzenie += Number(cena);   
        suma += Number(cena);
document.querySelector("#sumaJedzenie").innerHTML = sumaJedzenie;
document.querySelector("#sumaWszystkiego").innerHTML = suma;
    }   
    if (kategoria === "Kosmetyki") {
        sumaKosmetyki += Number(cena);   
        suma += Number(cena);
document.querySelector("#sumaKosmetyki").innerHTML = sumaKosmetyki;
document.querySelector("#sumaWszystkiego").innerHTML = suma;
    }    
    
    
  }

