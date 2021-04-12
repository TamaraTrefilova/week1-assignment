let noun = "potato";
let verb = "";
let adjective = "brown";
let adverb = "wildly";
let exclaimation = "Holy cow";
let madLib = `${exclaimation}! I never expected a ${adjective} ${noun} to show up at my bus stop and start dancing ${adverb}!`
//console.log(madLib);
let madLib1 = function(noun, verb, adjective, adverb,exclaimation){
  let str = `${exclaimation}! I never expected a ${adjective} ${noun} to show up at my bus stop and start dancing ${adverb}!`
  console.log(str);
}
madLib1("cat", "running", "brown", "wildly", "Holy cow");

let fun = num => 3;


console.log(fun());