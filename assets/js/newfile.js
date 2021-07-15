//alert(skaiciavimas);

let vardas = "Eglė";
let pavarde = 'Navickienė';
let gimtadienis = 'žiemą';

document.getElementById("manoGimce").innerHTML = "1. Aš esu " + vardas + " " + pavarde + ", aš gimiau " + gimtadienis + ".";

var x = 3.6;
document.getElementById("suapvalinimas").innerHTML = "2.(round) 3,5 ~ " + Math.round(3.5); 
document.getElementById("suapval-aukstyn").innerHTML = "(ceil) 4,2 ~ " + Math.ceil(4.2); 
document.getElementById("suapval-zemyn").innerHTML = "(floor) 2,6 ~ " + Math.floor(2.6); 


let min = 3;
let max = 12;

function randomSkaicius(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  };

document.getElementById("random-sk").innerHTML = 
"3. Jei min - 3, max - 12, <br>Funkcija: random skaičius * (max - min + 1) + min <br> Koks tas \"random\" skaičius, jei gaunam " + randomSkaicius(min, max) + "?";

let a ;
let b ;

a = randomSkaicius(0, 4);
b = randomSkaicius(0, 4);

if(a > 0 || a <= 4 ) {
   
   document.getElementById("dalyba").innerHTML = "4. " + Math.floor(b/a) ;
       
} else {
  document.getElementById("dalyba").innerHTML = "Dalyba negalima"; //nepadaro šito...
}

document.getElementById("rodyt-random").innerHTML = "6. "+  Math.random()*10;


const skaiciai = [Math.floor(Math.random() * 10) && Math.floor(Math.random() * -10)];

document.getElementById("trys-skaiciai").innerHTML = "7. "+ skaiciai;






