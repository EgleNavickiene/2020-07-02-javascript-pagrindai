//Kintamuju skaiciavimas

var skaiciavimas;

skaiciavimas = 1;

skaiciavimas += 2;

skaiciavimas -= 2;

skaiciavimas = skaiciavimas * 3;

skaiciavimas = skaiciavimas / 3;

//alert(skaiciavimas);

var petras = [
    0 , 
    15,
    2 , 
    3 , 
];

//console.log( petras[1] );

//var = variable (angl.) kintamasis 

//Eventas skirtas issaukti reakcija paspaudus mygtuka
var pasisveikinimas = 'Labas lietuva!';







document.getElementById('kvietejas').addEventListener("click", ikrepseli);

function ikrepseli() {

    var kiekis = document.getElementById('kiekis').value;
    var zodis  = 'prekes';

    if(kiekis%10 == 1) {
        zodis  = 'prekę';
    }

    if( (kiekis > 10 && kiekis < 20) || kiekis%10 == 0) {
        zodis = 'prekių';
    } 

    var zinute = 'Jūs sėkmingai pridėjote ' + kiekis + ' ' + zodis + '  į savo krepšelį!';

    if(kiekis > 100) {
         zinute = 'Jūsų pasirinktas prekių kiekis yra didesnis nei leistinas.';
         //classList.add('error');//
    }

    if(kiekis < 1) {
         zinute = 'Pasirinktas per mažas kiekis.';
         //classList.add('error');//
    }

    document.getElementById('messages_order').innerHTML = ''+ zinute;
    
};



document.getElementById('reset').addEventListener("click", atnaujinti);

function atnaujinti() {

    location.reload();

}

var i = 0;

while(i < 10) {

    //console.log(i);
    i++;

}

i = 0;

do {
    //console.log('Skaicius yra: ' + i);
    i++;
}
while (i < 10)


var petras = [
    5 , 
    6, 
    7 , 
    8 , 
    9
];

//console.log(petras[0]);

/*for(let i = 0; i < petras.length; i++) {
    console.log('Masyvo petras indeksas: ' + petras[i]);
}*/

const duomenys = [
    {
        miestas: "Kaunas",
        adresas: "Jonavos 56",
        data: "2020-07-01",
        kiekis: "10"
    },
    {
        miestas: "Vilnius",
        adresas: "Gelezinio vilko 20",
        data: "2020-07-01",
        kiekis: "15"
    },
    {
        miestas: "Klaipeda",
        adresas: "Ligonines 20",
        data: "2020-07-01",
        kiekis: "25"
    }
];

duomenys[2]['miestas']='Jonava';


let html = '';
let ending = '';

for(let indeksas in duomenys) {

    html += '<tr>'; 

    for(let indeksas2 in duomenys[indeksas]) {
        
        html += '<td>' + duomenys[indeksas][indeksas2] + '</td>';

    }

    html += '</tr>';

    //----------jQuery test

  jQuery(document).ready(function() {
 
        jQuery(duomenys).each(function(indeksas, reiksme){
       
          jQuery(reiksme).each(function(indeksas, reiksme) {
           //console.log(reiksme['miestas'+' - testas']);
          });
          
        });
       
      });

//--------------

    //console.log(eilute);

}

document.getElementById('lentelesVidus').innerHTML = html;





function testineFunkcija() {
    //alert('ko reikia');
}

let reiksme = 0;

switch(reiksme) {

    case 0:
        testineFunkcija();
    break;

    case 1:
        alert('Reiksme yra 1');
    break;

    default:
        alert('Reiksmes nera');

}

document.getElementById('rodyti').onclick = function() {

    var lentele = document.getElementById('lentele');
    
    lentele.classList.toggle('show'); 

    if( lentele.classList.contains('show') == false ) {
        document.getElementById('rodyti').innerText = 'Rodyti lentelę';
    } else {
        document.getElementById('rodyti').innerText = 'Slėpti lentelę';
    }

};

document.getElementById('skaiciuoti').onclick = function() {

    var skaiciuokles = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
    ];
    
    var total = 0;
    
    for(let i = 0; i < skaiciuokles.length; i++) {
        total += skaiciuokles[i];
    }

    document.getElementById('total').innerHTML = total;

};

// pasirinkimas
document.getElementById('submit').onclick = function() {

    var el = document.getElementById('pasirinkimas');

    var tekstas = '';

    switch(el.value) {

        case 'volvo':
            tekstas = 'Daug masės, daug plieno.';
            break;

        case 'saab':
            tekstas = 'Švedų mašina';
            break;

        case 'opel':
            tekstas = 'Stovėdamas rūdyja';
            break;

        case 'audi':
            tekstas = 'Audi nečiaudi';
            break;

        default:
            tekstas = 'Velniop tą mašiną';
    }

    //document.getElementById('atsakymoZinute').innerText = tekstas;

    jQuery('.atsakymoZinute').html(tekstas)
}


jQuery(document).ready(function() {  

   jQuery('.naujasmygtukas').click(function(){

        jQuery('#naujasmygtukas').addClass('klase');

        jQuery('#atsakymoZinute').addClass('klase');

   });


    jQuery('#kitasmygtukas').click(function(){

        jQuery(".naujasmygtukas, .atsakymoZinute").removeClass('klase');

    }); 
});

//---Integruotas---------------

$('.integruotaNuoroda').click(function() {
    alert('Paspaudimas');
});

//----w3schools pvz.----------------
// $(document).ready(function(){
//     $("p").click(function(){
//       $(this).hide();
//     });
//   });

// --X lentelė

const Xduomenys = [
    {
        mokinys: "Jonas",
        klase: "3b",
        pamoka: "matematika",
        lygis: "A"
    },
    {
        mokinys: "Milda",
        klase: "3a",
        pamoka: "biologija",
        lygis: "B"
    },
    {
        mokinys: "Silvija",
        klase: "3b",
        pamoka: "istorija",
        lygis: "A"
    }
];

let html2 = '';
let ending2 = '';

for(let Xindeksas in Xduomenys) {

    html2 += '<tr>'; 

    for(let Xindeksas2 in Xduomenys[Xindeksas]) {
        
        html2 += '<td>' + Xduomenys[Xindeksas][Xindeksas2] + '</td>';
    };

    html2 += '</tr>';
};

document.getElementById('XlentelesVidus').innerHTML = html2;

/*var tbody = $("XlentelesVidus tbody");
reiksmes = ['mokinys', 'klase', 'pamoka', 'lygis'];

jQuery(Xduomenys).each(function (indeksas, reiksme) {
    var tr = jQuery("<tr>");
    jQuery(reiksmes).each(function(indeksas, kintamasis) {
        jQuery("<td>").html(reiksme[kintamasis]).appendTo(tr);
        });
        tbody.append(tr);
    });*/

    // pirmoko masyvas:

    var imones = [

        {
            Klientas: "Adomavičiaus įmonė ",
            Kodas: "1000 ",
            Data: "2020.06.20 ",
            Produktas: "Nešiojamas kompiuteris ",
            Kaina: "1449 ",
            Papildoma_info: "Dėklas - dovanų ",
        },
        {
            Klientas: 'UAB "Kesko senukai" ',
            Kodas: "1001 ",
            Data: "2020.06.21 ",
            Produktas: "Televizorius ",
            Kaina: "1449 ",
            Papildoma_info: "Reikalingas pristatymas ",
        },
        {
            Klientas: 'UAB "Simplea" ',
            Kodas: "1002 ",
            Data: "2020.06.22 ",
            Produktas: "Telefonas ",
            Kaina: "299 ",
            Papildoma_info: "Garantija 3 metai ",
        },
        {
            Klientas: 'UAB "5 kontinentai" ',
            Kodas: "1003 ",
            Data: "2020.06.23 ",
            Produktas: "Planšetė ",
            Kaina: "450 ",
            Papildoma_info: "Pratęsta garantija ",
        },
    ];

   /* var tablebody = $("#PlentelesVidus tbody");

    jQuery(imones).each(function (i, r) {
        var tablerow = jQuery("<tr>");
        jQuery(values).each(function (i, k) {
          jQuery("<td>").html(r[k]).appendTo(tablerow);
        });
        tablebody.append(tablerow);
      });*/

    /*
    var tablebody = $("#PlentelesVidus tbody");


    jQuery.each(imones, function (i, r) {
        var tablerow = jQuery("<tr>");

        jQuery.each(r, function (index, k) {
            jQuery("<tr>").html(k).appendTo(tablerow);
        });
    });

    let dinamineLentele = jQuery('table');

    dinamineLentele.addClass('Plentele')*/

// --------------------------------------------
// 2021.07.15 uzduotys



  

   
    



