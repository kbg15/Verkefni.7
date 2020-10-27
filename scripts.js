/**
 * Verkefni 7 – Caesar dulmál
 */

const LETTERS = `AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ`;

/**
 * Byrja forrit.
 */
//function start();

 // kóða og afkóða með while og if, promptum og svo alert.
 let code = "";

 while(code != "kóða" && code != "afkóða") {
  code = prompt("Hvort viltu kóða eða afkóða streng? skrifaðu „kóða“ eða „afkóða“");

  if(code != "kóða" && code != "afkóða"){
    alert("Veit ekki hvaða aðgerð „${code}“ er. Reyndu aftur.");
  }
 }
 // hliðrun á streng, notum while og svo if. promptum og svo alert.
 let hlidra = "";

 while(isNaN(hlidra) || hlidra < 1 || hlidra > 31){
  hlidra = prompt("Hversu mikið á að hliðra streng? Gefuðu upp heiltölu á bilinu [1, 31].");

   if(isNaN(hlidra) || hlidra < 1 || hlidra > 31){
    alert("${hlidra} er ekki heiltala á bilinu [1, 31]. Reyndu aftur.");

  hlidra = parseInt(hlidra);
   }
 }
 // hliðrað með hlidra breytunni, while og if. Promptum svo og alert. 
 let hlidramed = 0;

 while(typeof hlidramed != "string"){
  hlidramed = prompt("Gefðu upp strenginn sem á að ${code} með hliðrun ${hlidra}:");

  if(typeof hlidramed != "string"){
    alert("Þú gafst ekki upp streng. Reyndu aftur.");

  hlidramed = hlidramed.toUppercase();
   }
 }
//vesen!!
//let hlidramed = 0;

//for(var i = 0; i > LETTERS.str.length; i++){
  //if(typeof hlidramed == "c", "q", "w", "z", " ");
   //hlidramed = prompt("Þú gafst upp stafi sem ekki er hægt að ${kóða}: ${hlidramed.join(', ')}. Reyndu aftur.");
//}


 // notum tvær breytur if og else if fyrir kóðun og afkóðun. 

 if(code == "kóða"){
  let codee = encode(hlidramed, hlidra);
   alert("Kóði á ${hlidramed} er ${codee}");
 }
 else if(code=="afkóða"){
  let codee = decode(hlidramed, hlidra);
   alert("Afkóði á ${hlidramed} er ${codee}");
 }


/**
 * Kóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal kóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til hægri
 */

 // búum til streng og splittum honum.
function encode(str, n) {
  let skiptastr = str.split("");
  console.log(skiptastr);
// tvöföld for loop og endum á if. tökum lengdir á öllum strengjum með .length eins og í Java.
  for(var i = 0; i < skiptastr.length; i++){
    for(var j  = 0; j < LETTERSstafir.length; j++){
      if(skiptastr[i] == LETTERSstafir[j]){
        skiptastr[i] = j; 
      }
    }
  }
// for loopa og tökum lengdina og hliðrum með n.
  for(var i = 0; i < skiptastr.length; i++){
    skiptastr = skiptastr + n;
    if(skiptastr[i] > 32){
      skiptastr[i] = skiptastr[i] - 32;
    }
  }
// setjum constantið LETTERS inn (Íslenska stafrófið).
  for(var i = 0; i < skiptastr.length; i++){
    skiptastr[i] = LETTERS[skiptastr[i]];
  }
// Sameinum.  
  joinar = skiptastr.join("");
    return joinar;
}

/**
 * Afkóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal afkóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til vinstri
 */
function decode(str, n) {
  let skiptastr = str.split("");
  console.log(skiptastr);
// tvöföld for loop og endum á if. tökum lengdir á öllum strengjum með (.length eins) og í Java.
  for(var i = 0; i < skiptastr.length; i++){
    for(var j  = 0; j < LETTERSstafir.length; j++){
      if(skiptastr[i] == LETTERSstafir[j]){
        skiptastr[i] = j; 
      }
    }
  }
// for loopa og tökum lengdina og hliðrum með n (Tökum frá eða -n og bætum við + 32).
  for(var i = 0; i < skiptastr.length; i++){
    skiptastr = skiptastr - n;
    if(skiptastr[i] < 0){
      skiptastr[i] = skiptastr[i] + 32;
    }
  }
// setjum constantið LETTERS inn (Íslenska stafrófið).
  for(var i = 0; i < skiptastr.length; i++){
    skiptastr[i] = LETTERS[skiptastr[i]];
  }
// Sameinum.  
  joinar = skiptastr.join("");
    return joinar;
}
//console.assert(encode('A', 3) === 'D', 'kóðun á A með n=3 er D');
//console.assert(decode('D', 3) === 'A', 'afkóðun á D með n=3 er A');
//console.assert(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 32) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'kóðun með n=32 er byrjunarstrengur');
//console.assert(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 3) === 'DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 'kóðun á stafrófi með n=3');
//console.assert(decode('DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 3) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'afkóðun á stafrófi með n=3');
//console.assert(decode(encode('HALLÓHEIMUR', 13), 13) === 'HALLÓHEIMUR', 'kóðun og afkóðun eru andhverf');
