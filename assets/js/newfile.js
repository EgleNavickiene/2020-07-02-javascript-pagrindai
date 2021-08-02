//alert(skaiciavimas);


// 1 uzd.
let vardas = "Eglė";
let pavarde = 'Navickienė';
let gimtadienis = 'žiemą';

document.getElementById("manoGimce").innerHTML = "1. Aš esu " + vardas 
+ " " + pavarde + ", aš gimiau " + gimtadienis + ".";

// 2 uzd.
var x = 3.6;
document.getElementById("suapvalinimas").innerHTML = "2.(round) 3,5 ~ " + Math.round(3.5); 
document.getElementById("suapval-aukstyn").innerHTML = "(ceil) 4,2 ~ " + Math.ceil(4.2); 
document.getElementById("suapval-zemyn").innerHTML = "(floor) 2,6 ~ " + Math.floor(2.6); 

// 3 uzd.
let min = 3;
let max = 12;

function randomSkaicius(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  };

document.getElementById("random-sk").innerHTML = 
"3. Jei min - 3, max - 12, <br>Funkcija: random skaičius * (max - min + 1) + min <br> Koks tas \"random\" skaičius, jei gaunam " 
+ randomSkaicius(min, max) + "?";

// 4 uzd.
let a ;
let b ;

a = randomSkaicius(0, 4);
b = randomSkaicius(0, 4);

document.getElementById("dalyba").innerHTML = "4. "+b +"/"+a +"=" + Math.floor(b/a);

if (a == 0 ) {    
  document.getElementById("dalyba").innerHTML = "4. "+b +"/"+a +" Dalyba negalima";
}


//5 uzd/?
let x1 = randomSkaicius(0, 25);
let x2 = randomSkaicius(0, 25);
let x3 = randomSkaicius(0, 25);

let masyvasIsTriju = [x1, x2, x3];

let mediana = Math.max( 
  Math.min( x1, x2 ), 
  Math.min( Math.max( x1, x2), x3)
);

document.getElementById("penkta-uzd").innerHTML = '5. Pirmas: '+ 
x1 +', antras: ' + x2 + ' trečias: ' + x3 + '. Mediana:' + mediana;


// 6 uzd.
c = (randomSkaicius(min, max)*10);
document.getElementById("rodyt-random").innerHTML = "6. Random skaicius "+ c ;

// 7 uzd.
const nuoIki1 = randomSkaicius(-10, 10);
const nuoIki2 = randomSkaicius(-10, 10);
const nuoIki3 = randomSkaicius(-10, 10);

let nuoIki1_return = '';
let nuoIki2_return = '';
let nuoIki3_return = '';

    // 1 skaicius:
if(nuoIki1 < 0) {
  nuoIki1_return = '<span style="color:red;">' + nuoIki1 + '</span> ';
}

if(nuoIki1 == 0) {
  nuoIki1_return = '<span style="color:blue;">' + nuoIki1 + '</span> ';
}

if(nuoIki1 > 0) {
  nuoIki1_return = '<span style="color:green;">' + nuoIki1 + '</span> ';
}

    // 2 skaicius:
if(nuoIki2 < 0) {
  nuoIki2_return = '<span style="color:red;">' + nuoIki2 + '</span> ';
}

if(nuoIki2 == 0) {
  nuoIki2_return = '<span style="color:blue;">' + nuoIki2 + '</span> ';
}

if(nuoIki2 > 0) {
  nuoIki2_return = '<span style="color:green;">' + nuoIki2 + '</span> ';
}

    // 3 skaicius:
if(nuoIki3 < 0) {
  nuoIki3_return = '<span style="color:red;">' + nuoIki3 + '</span> ';
}

if(nuoIki3 == 0) {
  nuoIki3_return = '<span style="color:blue;">' + nuoIki3 + '</span> ';
}

if(nuoIki3 > 0) {
  nuoIki3_return = '<span style="color:green;">' + nuoIki3 + '</span> ';
}

document.getElementById('trys-skaiciai1').innerHTML = '<p>7. Trys skaičiai:'
+'<br></br>' +' <strong>' + nuoIki1_return+'<br></br>'  
+ nuoIki2_return+'<br></br>' +nuoIki3_return + '</strong></p>';

// 8 uzd.

const zvakiu_kiekis = randomSkaicius(5, 3000);
let nuolaida = 0;

if(zvakiu_kiekis >= 1000) 
    nuolaida = 3; 

if(zvakiu_kiekis >= 2000) 
    nuolaida = 4; 

let suma = zvakiu_kiekis - ( (zvakiu_kiekis / 100) * nuolaida);

document.getElementById('nuolaida').innerHTML += '<p>Pirkta žvakių: ' + zvakiu_kiekis + ' Suma: <strong>' 
+ suma + ' EUR </strong> (nuolaida - '+nuolaida+'%)'+'</p>';

// 2021 liepos 20 d. --------------------

// 1.
// a)
let text = ''

for (let i = 0; i<400; i++) {
  text += '*';
}

document.getElementById("star").innerHTML = text;

// b)

let text2 = '';
let counter = 0;

for (let i=0; i<400; i++) {
  if(counter == 50){
    text2 += '<br />';
  counter = 0;   
  }
  text2 += '*';
  counter++;  
}

document.getElementById("star2").innerHTML = text2;

// 2.
let numbers = "";
let newNumb = 0;
let didesni = 0;

for (let i=0; i < 300; i++){
  newNumb = randomSkaicius(0, 300);  

  if(newNumb >150)
  didesni++;

  if (newNumb > 275) {
    numbers += ` <span style="color:red;" >  ${newNumb}  </span> `;
  } else {
    // ``tokios kabutės leidžia įterpti kintamąjį į <span> vidų. Prieš int. dedam ženklą $ ir kintamąjį apgaubiam {}
    // [ alternatyva - paprastose kabutėse atskirt span dalis: '<span>' + kint. + '</span>']
    numbers += ` <span>  ${newNumb}  </span> `;
  } 
  
};

document.getElementById("trys-simtai").innerHTML = numbers;
document.getElementById("trys-simtai-did").innerHTML = 'Didesnių negu 150 skaičių yra ' + didesni;

// 3.

let numeriai = '';
let dalmuo = 0;
let kablelis = ', ';
let daliklis = 77;

for (let i=1; i <= 3000; i++) {

  if(i % daliklis == 0) {
    numeriai += i + kablelis; }
}

// NUIMA paskutinius 2 (tarpą ir kablelį) ženklus
const editedText = numeriai.slice(0, -2);

document.getElementById("trys-tukst").innerHTML = editedText;

// 4.  

let kvadr = '';
let detale = 0;

for (let i=0; i<50; i++) {  

  for(detale = 0; detale < 50; detale++ ){ 

    if(i==detale || 49-i==detale) {
      kvadr += '<span style="color:red";> * </span>';
    } else {
      kvadr += ' * ';
    }    
  }    
  kvadr += '<br />';
}

document.getElementById("kvadr").innerHTML = kvadr;

// 5. Papildoma

let Benas = 0;
let Jovita = 0;
let final = 222;
let string = '';
let ended = false;

for (let i=0; i<=100; i++) {

  if(ended)
    break;

    let bscore = randomSkaicius(10, 20);
    let jscore = randomSkaicius(5, 25);

    document.getElementById("rez-beno").innerHTML += (i+1) + bscore + '<br />';
    document.getElementById("rez-jovi").innerHTML +=  (i+1) + jscore + '<br />';  

    Benas += bscore;
    Jovita += jscore;

    document.getElementById("tot-beno").innerHTML =  Benas;
    document.getElementById("tot-jovi").innerHTML =  Jovita;     

    // if (Benas > Jovita)
    
    if(Benas >= final || Jovita >= final) {
      ended = true;

          

      if (Benas >= final) {
        string = 'Benas, rezultatas: ' + Benas + ' : '+ Jovita;
      } else {
        string = 'Jovita, rezultatas: ' + Jovita + ' : '+ Benas;
      }
    }
}

document.getElementById("nugaletojas").innerHTML = string;

// 2021 liepos 23 d. --------------------

// Vinies kalimas

let kalimas = 1;
let smugis = 1;

for (let i = 1; i < 50; i++) {
  for(let k = randomSkaicius(5, 20); k<85; k+=randomSkaicius(5, 20)){
    smugis++;
    document.getElementById("kiek-smugiu").innerHTML = "smugiai " + i;
    document.getElementById("kiek-sukalta").innerHTML = "sukalta  " + k;
  }

}

// Raudoni kvadratai

document.querySelector('.appended-text').innerHTML += '<div class="septinta_uzduotis"></div>';

document.querySelector('.septinta_uzduotis').innerHTML += '<h3>Septinta užduotis</h3>';

let el_septinta = document.querySelector('.septinta_uzduotis');

el_septinta.innerHTML += '<div class="konteinerisTetis"></div>';

let el_tevinis = document.querySelector('.konteinerisTetis');


let tevinio_aukstis = el_tevinis.offsetHeight;
let tevinio_plotis  = el_tevinis.offsetWidth;
let nepataike         = 0;

i = 0;

while (i < 100) {

    el_tevinis.innerHTML += '<div class="mazasKvadratelis"></div>';
    
    let elementas = document.querySelectorAll('.mazasKvadratelis')[i];
    let atsitiktinis_virsus = randomSkaicius(0, 550);
    let atsitiktine_kaire   = randomSkaicius(0, 550);

    elementas.style.top = atsitiktinis_virsus+'px';
    elementas.style.left = atsitiktine_kaire+'px';

    if((atsitiktinis_virsus > tevinio_aukstis) 
        || (atsitiktine_kaire > tevinio_plotis))
        nepataike++;

    i++;
}

el_tevinis.innerHTML += '<div style="color: darkgreen; font-size: 100px; position: absolute; top: 200px; left: 200px; font-weight: bold; text-shadow: -2px -2px #ffffff, -2px 1px #ffffff, 1px -2px #ffffff, 1px 1px #ffffff">' + nepataike + '</div>';
el_septinta.innerHTML += '<h4 style="margin-top: 100px;">Nepataikyta kartų: ' + nepataike +  '</h4>';


//2021 - 07 - 26 d.

let stringas = 'Pavasarį žydi labai daug medžių';
//apie length
// console.log(stringas.length);

//apie split
// console.log(stringas.split(" "));

//apie replace
// console.log(stringas.replace('žydi', 'atgimsta')); //1 zodis - ieskomas, 2 zodis - kuo keiciame
//console.log(stringas.replaceAll('a', '*')); // a raide keiciam i *

//apie repeat
// console.log(stringas.repeat(2));

//apie charAt
// console.log(stringas.charAt(10));

//apie substract
//console.log(stringas.substr(9, 5)); // - nuo 9 pozicijos rodys 5 simbolius!

//apie toUppercase
// console.log(stringas.toUpperCase());

//apie trim
// stringas = '   Pavasarį žydi labai daug medžių    ';
//console.log(stringas.trim());

//apie startsWith 
//boolean: true arba falce
// console.log(stringas.startsWith('Pavasarį'));

//apie endsWith
// console.log(stringas.endsWith('ų'));

//apie includes
// console.log(stringas.includes('medžių'));

//apie indexOf
// console.log(stringas.indexOf('ž'));

//apie lastIndexOf
// console.log(stringas.lastIndexOf('ž'));

//apie split
//let stringo_masyvas = stringas.split(" ");

//console.log(stringo_masyvas[4]);  // duoda 5 zodi(nes nuo 0)

// 1 uzd. (aktorius)

document.querySelector('.appended-text').innerHTML += '<br><hr><div class="pirma-uzduotis bg-light"><h3>2021 - 07 - 26</h3><hr></div>';

document.querySelector('.pirma-uzduotis').innerHTML += '<h4 style="color: green;">1 užduotis</h4>';

let aktorius = document.querySelector('.pirma-uzduotis');


let aktVardas = 'Kristina';
let aktPavarde = 'Kazlauskaitė';
if(aktVardas.length > aktPavarde.length){
  aktorius.innerHTML += `<h4>${aktVardas}</h4>`;
} else {
  aktorius.innerHTML += `<h4>${aktPavarde}</h4>`;
}

// 2 uzd. 
document.querySelector('.appended-text').innerHTML += '<br><div class="antra-uzduotis bg-warning p-2"></div>';
document.querySelector('.antra-uzduotis').innerHTML += '<h4 style="color: green;">2 užduotis</h4>';

let VARDAS = aktVardas.toUpperCase()
document.querySelector('.antra-uzduotis').innerHTML += `<h4>${VARDAS} ${aktPavarde}</h4>`;

// 3 uzd. 
document.querySelector('.appended-text').innerHTML += '<br><div class="trecia-uzduotis"></div>';
document.querySelector('.trecia-uzduotis').innerHTML += '<h4 style="color: green;">3 užduotis</h4>';

let V_1r = aktVardas.substr(0, 1) + '. ';
let Pav_1r = aktPavarde.substr(0, 1) + '.';

document.querySelector('.trecia-uzduotis').innerHTML += `<div class="h4">${V_1r}${Pav_1r}</h4>`;

// 4 uzd. 
document.querySelector('.appended-text').innerHTML += '<br><div class="ketvirta-uzduotis bg-warning p-2"></div>';
document.querySelector('.ketvirta-uzduotis').innerHTML += '<h4 style="color: green;">4 užduotis</h4>';

let vardo_3pask = aktVardas.slice(Math.max(aktVardas.length -3, 0));
//console.log(vardo_3pask);

let pav_3pask = aktPavarde.slice(Math.max(aktPavarde.length -3, 0));
//console.log(Pav_3pask);

document.querySelector('.ketvirta-uzduotis').innerHTML += '<h4>'+vardo_3pask + pav_3pask +'</h4>' ;

// 5 uzd. 
document.querySelector('.appended-text').innerHTML += '<br><div class="penkta-uzduotis"></div>';
document.querySelector('.penkta-uzduotis').innerHTML += '<h4 style="color: green;">5 užduotis</h4>';

let strH = 'Once upon a time in hollywood';

let strH_1repl = strH.replace(/o/g,'*');

document.querySelector('.penkta-uzduotis').innerHTML += '<h4 class="H_be_O">'+strH_1repl.replace('O', '*')+'</h4>';

// 6 uzd. 
document.querySelector('.appended-text').innerHTML += '<br><div class="sesta-uzduotis bg-warning p-2"></div>';
document.querySelector('.sesta-uzduotis').innerHTML += '<h4 style="color: green;">6 užduotis</h4>';

//                let str_be_o = document.querySelector('.H_be_O');

var num_matches = (strH.match(/o/gi).length);

document.querySelector('.sesta-uzduotis').innerHTML += '<h4>'+'Masyve "'+ strH + '" yra '+ num_matches + " \"o\" raidės."+ '</h4>' ;

// 7 uzd.
document.querySelector('.appended-text').innerHTML += '<br><div class="septinta-uzduotis"></div>';
document.querySelector('.septinta-uzduotis').innerHTML += '<h4 style="color: green;">7 užduotis</h4>';

let str3 = 'An American in Paris';
let str4 = 'Breakfast at Tiffany\'s';
let str5 = '2001: A Space Odyssey';
let str6 = 'It\'s a Wonderful Life'
//console.log(str4);

sliced3 = str3.replace(/[aeiouy]/ig,'');
sliced4 = str4.replace(/[aeiouy]/ig,'');
sliced5 = str5.replace(/[aeiouy]/ig,'');
sliced6 = str6.replace(/[aeiouy]/ig,'');

document.querySelector('.septinta-uzduotis').innerHTML += '<h4>'+str3+ '</br>' + sliced3 + '</h4>';
document.querySelector('.septinta-uzduotis').innerHTML += '<h4>' + str4+ '</br>' + sliced4 + '</h4>';
document.querySelector('.septinta-uzduotis').innerHTML += '<h4>' + str5+ '</br>' + sliced5 + '</h4>';
document.querySelector('.septinta-uzduotis').innerHTML += '<h4>' + str6+ '</br>' + sliced6 + '</h4>';

// 8 uzd.
document.querySelector('.appended-text').innerHTML += '<br><div class="astunta-uzduotis bg-warning p-2"></div>';
document.querySelector('.astunta-uzduotis').innerHTML += '<h4 style="color: green;">8 užduotis</h4>';

// A-stringas:
let str8a =  "Don't Be a Menace to South Central While Drinking Your Juice in the Hood";
document.querySelector('.uzd-8aA').innerHTML += '<br><p>A masyvas: (' + str8a + ') ' + '</p>';

// B-stringas:
let str8b = "Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale";
document.querySelector('.uzd-8bB').innerHTML += '<br><p>B masyvas: (' + str8b + ') ' + '</p>';

// skaidom A stringa (split):
// let str8a_masyvas = str8a.split(" ");
// //document.querySelector('.uzd-8a-stulpelis').innerHTML += '<p >'+ str8a_masyvas +  '</p>';
// document.querySelector('.uzd-8a-stulpelis').innerHTML += '<br><p style="font-weight: 500; text-decoration: underline;">Išskaidytas A masyvas: </p>';

// console.log(str8a_masyvas);

// let iEl8a = '';
// str8a_masyvas.forEach(naujasAmasyvas);
// document.querySelector('.uzd-8a-stulpelis').innerHTML += '<div >' +  iEl8a +  '</div>';

// function naujasAmasyvas(value, index, array) {
//   iEl8a += '<p class="stulpeliu">' + value + '</p>';
// }

// // skaidom B stringa (su split):
// let str8b_masyvas = str8b.split(" ");
// document.querySelector('.uzd-8b-stulp').innerHTML += '<p >'+ str8b_masyvas +  '</p>';
// document.querySelector('.uzd-8b-stulp').innerHTML += '<br><p style="font-weight: 500; text-decoration: underline;">Išskaidytas B masyvas: </p>';
// console.log(str8b_masyvas);

// let iEl8b = '';
// str8b_masyvas.forEach(naujasBmasyvas);
// document.querySelector('.uzd-8b-stulp').innerHTML += '<div >' + iEl8b + '</div>';

// function naujasBmasyvas(value, index, array) {
//   iEl8b += '<p class="stulpeliu">' + value + ' ' + '</p>';
// } 

// Turim 2 naujus masyvus su atskirais elementais-zodziais
//o kaip toliau???

let fraze1 = "Don't Be a Menace to South Central Whe Drinkingil Your Juice in the Hood";
let fraze2 = "Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale";
let tarpAts = 0

function zodziuTikrinimas(phrase, ilgis) {
  
  let frazes_masyvas = phrase.split(' ');
  
  let zodziuCounteris = 0;  

  for(let i=0; i < frazes_masyvas.length; i++) {

    tarpAts += '<p>' +frazes_masyvas[i].length + ' ' + frazes_masyvas[i] + '</p>';

      if(frazes_masyvas[i].length <= ilgis)            
        zodziuCounteris++;
    }
      return zodziuCounteris;
}

let atsak8a = zodziuTikrinimas(fraze1, 5);
let tarpinisAtsak_a = tarpAts;
document.querySelector('.uzd-8a-stulpelis').innerHTML += tarpinisAtsak_a +  '</br>';
document.querySelector('.uzd-8a-apacioj').innerHTML += '<p >'+ atsak8a +  '</p>';

let atsak8b = zodziuTikrinimas(fraze2, 5);
let tarpinisAtsak_b = tarpAts;
document.querySelector('.uzd-8b-stulp').innerHTML += tarpinisAtsak_b +  '</br>';
document.querySelector('.uzd-8b-apacioj').innerHTML += '<p >'+ atsak8b +  '</p>';

document.querySelector('.appended-text2').innerHTML += '<p >  </p><br>';

// 2021-07-28
//----------headingo funkcija yra faile "funkcijos.js"-----------

let elementas = headingas('Funkcijos_2021-07-28');

// 1 uzd.
headingas('Pirma užduotis ', false, elementas);

document.querySelector('.appended-text2').innerHTML += '<p>' + 'Sukurkite funkciją kuri patikrintų' + 
' du gautus parametrus stringo pavidale. Tikrinamas dvieju stringų ilgis.' + 
' Sukurti tris galimus scenarijus: Jei pirmasis yra didesnis už antrą. Jei ' + 
'antrasis didesnis už pirmąjį. Jei abiejų ilgis vienodas. Funkciją turi ' + 
'grąžinti tekstinį atsakymą. Pvz. ‘Pirmasis stringas yra ilgesnis už antrajį’. ' + 
' Atsakymą atvaizduokite lange. </p><br>';

let pirmaFraze;
let antraFraze;


function stringoIlgis(ilgis1, ilgis2) {
   
  if(ilgis1.length > ilgis2.length){
    return 'Ilgesnė 1 frazė';
    
  }  else if(ilgis1.length < ilgis2.length){
      return 'Ilgesnė 2 frazė';
  }    

  if(ilgis1.length == ilgis2.length){
    return "Frazės vienodo ilgio";
  }
    
}

pirmaFraze = 'Griovio neperšokęs nesakyk "op" ';
antraFraze = 'Šešios žasys su šešiais žąsyčiais';

document.querySelector('.appended-text2').innerHTML += '<p>Pirma frazė: '+ pirmaFraze + ' (' + pirmaFraze.length + ' ženklai)' + '</p>';
document.querySelector('.appended-text2').innerHTML += '<p>Antra frazė: '+ antraFraze + ' (' + antraFraze.length + ' ženklai)' + '</p>';

document.querySelector('.appended-text2').innerHTML += '<p>'+ stringoIlgis(pirmaFraze, antraFraze) + '</p> <hr>' ;

pirmaFraze = 'Šiandien buvo labai karšta diena';
antraFraze = 'O kas žino, koks oras bus rytoj?';

document.querySelector('.appended-text2').innerHTML += '<p>Pirma frazė: '+ pirmaFraze + ' (' + pirmaFraze.length + ' ženklai)' + '</p>';
document.querySelector('.appended-text2').innerHTML += '<p>Antra frazė: '+ antraFraze + ' (' + antraFraze.length + ' ženklai)' + '</p>';

document.querySelector('.appended-text2').innerHTML += '<p>'+ stringoIlgis(pirmaFraze, antraFraze) + '</p>  <hr>' ;

pirmaFraze = 'Mano pasas žalias - kur noriu važiuoju';
antraFraze = 'Į kairę, į dešinę - Europą matuoju';

document.querySelector('.appended-text2').innerHTML += '<p>Pirma frazė: '+ pirmaFraze + ' (' + pirmaFraze.length + ' ženklai)' + '</p>';
document.querySelector('.appended-text2').innerHTML += '<p>Antra frazė: '+ antraFraze + ' (' + antraFraze.length + ' ženklai)' + '</p>';

document.querySelector('.appended-text2').innerHTML += '<p>'+ stringoIlgis(pirmaFraze, antraFraze) + '</p>  <hr>' ;

//2 uzd.
headingas('Antra užduotis', false, elementas);

document.querySelector('.appended-text2').innerHTML += '<p>Sukurkite funkciją kuri priimtų penkis parametrus ir grąžintų stringą, kuriame x būtų pakeistas kitamaisiais. “Jūs būsite x ir gyvensite x. Susituoksite su x bei turėsite šunį vardu x, o mirsite sulaukę x metų.” Pakartokite funkciją tris kartus su vis kitokiais parametrais.</p>'

let pirmasAS;
let antrasKURgyvenciau;
let treciasANTRApuse;
let ketvirtasSUVA;
let kiek_Gyvenciau;

//Jei aš būčiau x 
//ir gyvenčiau x. 
//Susituokčiau su x, 
//mes turėtume šunį vardu x, 
//ir sulaukčiau x metų.

function sakinys(x1, x2, x3, x4, x5) {
  pirmasAS = x1;
  antrasKURgyvenciau = x2;
  treciasANTRApuse = x3;
  ketvirtasSUVA = x4;
  kiek_Gyvenciau = x5;

  return 'Jei aš būčiau '+ x1 + ' ir gyvenčiau ' + x2 + ', susituokčiau su '+ x3 + 
  ', mes turėtume šunį vardu ' + x4 + ' ir aš sulaukčiau  ' + x5 +' metų.'
}

  pirmasAS = "Žana D'Ark";
  antrasKURgyvenciau = "Prancūzijoj";
  treciasANTRApuse = "D'Artanjanu";
  ketvirtasSUVA = 'Orleanas';
  kiek_Gyvenciau = '80 ';

  document.querySelector('.appended-text2').innerHTML += '<p>'+ 
  sakinys(pirmasAS, antrasKURgyvenciau, treciasANTRApuse, 
  ketvirtasSUVA, kiek_Gyvenciau) + '</p><hr>' ;

  pirmasAS = "jauna meružėlė";
  antrasKURgyvenciau = "gražiame namelyje";
  treciasANTRApuse = "jaunu bernužėliu";
  ketvirtasSUVA = 'Brisius';
  kiek_Gyvenciau = 'gal bent 60 ';

  document.querySelector('.appended-text2').innerHTML += '<p>'+ 
  sakinys(pirmasAS, antrasKURgyvenciau, treciasANTRApuse, 
  ketvirtasSUVA, kiek_Gyvenciau) + '</p><hr>' ;

  pirmasAS = "sena merga";
  antrasKURgyvenciau = "kažkur kaime";
  treciasANTRApuse = "senu diedu";
  ketvirtasSUVA = 'Tūzas';
  kiek_Gyvenciau = '100 ';

  document.querySelector('.appended-text2').innerHTML += '<p>'+ 
  sakinys(pirmasAS, antrasKURgyvenciau, treciasANTRApuse, 
  ketvirtasSUVA, kiek_Gyvenciau) + '</p><hr>' ;

// 3 uzd.
headingas('Trečia užduotis', false, elementas);

let xAmzius;

function sunsAmzius(xAmzius){
  
  amziausSkaiciavimas = (xAmzius*7);
   
  if((amziausSkaiciavimas > 10 && amziausSkaiciavimas < 20) || amziausSkaiciavimas%10 == 0 ) {
      return 'Jūsų šuniukui yra '+ amziausSkaiciavimas + ' žmogiškų metų';
    }   
     else {
        
        return 'Jūsų šuniukui yra '+ amziausSkaiciavimas + ' žmogiški metai'; }
}

document.querySelector('.appended-text2').innerHTML += '<p>'+ sunsAmzius(5) + '</p>';

//// 2021-07-29 ////

// 4 uzd.
headingas('Ketvirta užduotis', false, elementas);
document.querySelector('.appended-text2').innerHTML += '<p>'+ 'Perkelta į dienos viršų (Length Converter)' + '</p>';

// let convNumber;
// let KmNumber;
// let oneMile = (1.609344*oneKm);
// document.querySelector('.appended-text2').innerHTML += 
//   '<div><p><input id="km" type="number";>'+' enter km'+'</p>'+'<p></input>' + 
//   '<input id="miles" type="number";>'+' enter miles'+'</input>'+'</p></div>';

  function LengthConverter(valNum) {
    document.getElementById("outputKm").innerHTML=valNum*1.609344;
  }

  // 2021-07-28--------------------------------------------


headingas('Masyvai_2021-07-29', false, elementas);

// 1 uzd.---------------
headingas('Pirma užd.', false, elementas);

let naujasMas = [] ;
//console.log(naujasMas);   //--------------

for(let i=0; i<30; i++) {  
  let sugeneruotasSkaicius = randomSkaicius(5, 25);
  naujasMas.push(sugeneruotasSkaicius);
}

document.querySelector('.appended-text2').innerHTML += '<p>'+ naujasMas + '</p>';


naujasMas.forEach(masyvoSkaiciavimas);

function masyvoSkaiciavimas(reiksme, indeksas) {
 //console.log('Indeksas: ' + indeksas + ' Reiksme: ' + reiksme);  //--------------
}

// 2 uzd. -------------------
headingas('Antra užd.', false, elementas);

// a)------------
function masyvoUzd_a(reiksme, indeksas) {

  let counterMas=0;

  for(let i=0; i<30; i++) {
    if(reiksme[i] > 10)
      
    counterMas++;
    
  }
  return counterMas;  
}

DidesniuUz_10 = masyvoUzd_a(naujasMas);
//console.log(DidesniuUz_10);   //--------------

document.querySelector('.appended-text2').innerHTML += '<p>'+'a) Didesnių už 10 skaičių yra '+ DidesniuUz_10 +'</p>';

// b) ---------------
maks = Math.max(...naujasMas);
//console.log('Maks '+ maks)
document.querySelector('.appended-text2').innerHTML += '<p>'+'b) Didžiausias skaičius masyve: '+ maks +'</p>';

let ind = naujasMas.indexOf(maks);

//console.log('Maks-o indeksas '+ind);
document.querySelector('.appended-text2').innerHTML += '<p>'+'Didžiausio skaičiaus masyve indeksas: '+ ind +'</p>';

//Math.max.apply(null, naujasMas);
//console.log(Math.max.apply(null, naujasMas));



// c) ------------------
let evenMas = [];
let sum = 0;

for(var i = 2; i < naujasMas.length; i += 2) {  // take every second element
  evenMas.push(naujasMas[i]);
  sum += naujasMas[i];  
}
document.querySelector('.appended-text2').innerHTML += '<p>'+'c) Lyginius indeksus turintys elementai: '+ evenMas + '<br> Jų suma:' + sum + '</p>';
//console.log(sum);


// d) -------
//Viliaus
let atimtasMas = [];

for(let i = 0; i < naujasMas.length; i++ ) {

  atimtasMas[i] = (naujasMas[i] - i);
}
document.querySelector('.appended-text2').innerHTML += '<p>'+'D) -Viliaus sprendimas <br> Atimtos reiksmes - naujas mas: '+atimtasMas;

///---------------------------///
////Gintauto

let masyvoNN = [];
naujasMas.forEach((reiksme, index) => {
  masyvoNN.push(reiksme-index);
 });
 //console.log(masyvoNN);

 document.querySelector('.appended-text2').innerHTML += '<p> d) Naujas masyvas (1 uždavinio masyvo reikšmė minus tos reikšmės indeksas):</br> '+ masyvoNN + '</p>';

 // e)
 for(let i=1; i<10; i++) {  
 masyvoNN.push(randomSkaicius(5, 25));
 }
 //console.log(masyvoNN);
 document.querySelector('.appended-text2').innerHTML += '<p> Dar 10 naujų elementų papildytas masyvas: </br>'+ masyvoNN + '</p>';

// f) Gintauto kodas
let FmasyvasPor = [];
let FmasNepor = [];

for(var i = 2; i < masyvoNN.length; i += 2) {  // take every second element
  FmasyvasPor.push(masyvoNN[i]);  
}

//console.log(FmasyvasPor);
document.querySelector('.appended-text2').innerHTML += '<p> f-1) Masyvas iš porinių indeksų elemetų:  ' + FmasyvasPor + '</p>'

for(var i = 1; i < masyvoNN.length; i += 2) {  // take every second element
  FmasNepor.push(masyvoNN[i]);  
}

//console.log(FmasNepor);
document.querySelector('.appended-text2').innerHTML += '<p> f-2) Masyvas iš nelyginių indeksų elemetų:  ' + FmasNepor + '</p>'



// g)-Viliaus kodas:
let oddMas = [];
let EvenMas = [];

masyvoNN.forEach(function(reiksme, indeksas) {
if(indeksas%2 ==0 && indeksas != 0) {
  oddMas.push(reiksme);
} else {
  EvenMas.push(reiksme);
}
});

document.querySelector('.appended-text2').innerHTML += '<p> f-1-2) Masyvas iš lyginių indeksu:  ' + oddMas + '</p>'

document.querySelector('.appended-text2').innerHTML += '<p> f-2-2) Masyvas iš nelyginių indeksų:  ' + EvenMas + '</p>'

// g)--------------NESIGAUNAAAA---- :(  ---
//  Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10

// let maziausias_indeksas = 0;

// for(let i=0; i<30; i++) {
//     if(reiksme[i] > 10)
//     maziausias_indeksas = i;
//       return console.log('daugiau uz 10 - '+maziausias_indeksas);
//   }

//2021 - 08 - 01 --------------- RUGPJŪČIO 1 ---
headingas('2021 - 08 - 02', false, elementas);

// tekstinio masyvo sort
document.querySelector('.appended-text2').innerHTML += '<p>'+'Tekstinis masyvas: '+'</p>';

let tekstinisMasyvas = ['Jogile', 'Aiste', 'Jovita', 'Egle', 'Marius', 'Gintautas','Tomas', 'Žilvinas'];

document.querySelector('.appended-text2').innerHTML += '<p>'+ tekstinisMasyvas.sort() +'</p>';

document.querySelector('.appended-text2').innerHTML += '<p>'+ tekstinisMasyvas.reverse() +'</p>';

headingas('1 uzduotis', false, elementas);

// 1 uzd.
//Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.

raides = 'ABCD';
randomraidesMas = [];

let countA = 0;
let countB = 0;
let countC = 0;
let countD = 0;

for ( var i = 0; i < 200; i++ ) {

  let raideX = raides.charAt( Math.floor( Math.random() * raides.length) );

  randomraidesMas.push(raideX);

  if(randomraidesMas[i] == 'A') 
    countA++;
  if(randomraidesMas[i] == 'B')
    countB++;
  if(randomraidesMas[i] == 'C')
    countC++;
  if(randomraidesMas[i] == 'D')
    countD++;
}


//console.log(randomraidesMas);
document.querySelector('.appended-text2').innerHTML += '<p>'+ randomraidesMas +'</p>';



// for ( var i = 0; i < 200; i++ ) {
//   if(randomraidesMas[i] == 'A') 
//     countA++;
//   if(randomraidesMas[i] == 'B')
//     countB++;
//   if(randomraidesMas[i] == 'C')
//     countC++;
//   if(randomraidesMas[i] == 'D')
//     countD++;
// }

document.querySelector('.appended-text2').innerHTML += '<p>'+ 'A raidžių ' + countA +';<br></p>';
document.querySelector('.appended-text2').innerHTML += '<p>'+ 'B raidžių ' + countB +';<br></p>';
document.querySelector('.appended-text2').innerHTML += '<p>'+ 'C raidžių ' + countC +';<br></p>';
document.querySelector('.appended-text2').innerHTML += '<p>'+ 'D raidžių ' + countD +'.<br></p>';



//2 uzd.
//Išrūšiuokite pirmo uždavinio masyvą pagal abecėlę.
document.querySelector('.appended-text2').innerHTML += '<p>'+ randomraidesMas.sort() +'</p>';

//3 uzd.
//Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. 
//Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).

/*let newRandomArray;

function newRandomSkaicius(min, max) { 

  return Math.floor(Math.random())
};

let uniqueNumber = newRandomSkaicius(100, 999);
console.log('unikalus' + uniqueNumber);

// Defining function to get unique values from an array
function getUnique(array){
  let uniqueArray = [];
  
  // Loop through array values
  for(i=0; i < array.length; i++){
      if(uniqueArray.indexOf(array[i]) === -1) {
          uniqueArray.push(array[i]);
      }
  }
  return uniqueArray;
}

getUnique(newRandomArray);
//console.log( uniqueArray);

let mas100_1 = [];
let mas100_2 = [];

  console.log('pirmas masyvas iš 100: ' + mas100_1);
  document.querySelector('.appended-text2').innerHTML += '<p> Pirmas 100 elementų masyvas: </br>'+ mas100_1 + '</p>';

  

  for(let i=0; i<100; i++) {  
    mas100_2.push(newRandomSkaicius(100, 999));
    }
    console.log('antras masyvas iš 100: ' + mas100_2);
    document.querySelector('.appended-text2').innerHTML += '<p> Antras 100 elementų masyvas: </br>'+ mas100_2 + '</p>';8*/