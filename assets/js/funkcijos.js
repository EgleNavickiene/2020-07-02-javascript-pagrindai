//----------HEADING-o funkcija
function headingas(uzduotis, tema = false, tevinis = '.appended-text2') {

    let child = document.querySelector(tevinis);
    
    if(tema) {
        
        let klase = tema.replace(' ', '').toLowerCase();
        
        document.querySelector(tevinis).innerHTML += '<div class="' + klase + '"></div>'; 
        //Kaip ir ankstesneje uzduotyje sukurtas parent elementas uzduociai ir headingai kiekvienai is ju
       
        child = document.querySelector('.' + klase);
        
        child.innerHTML += '<h1>' + tema + '</h1>';
        

    } 

    child.innerHTML += '<h3>' + uzduotis + '</h3>';

    return '.' + child.className;

}

