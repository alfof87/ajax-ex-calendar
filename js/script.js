// Creiamo un calendario dinamico con le festività.
// Il calendario partirà da gennaio 2018 e si concluderà a dicembre 2018
// (unici dati disponibili sull'API).
//
// Milestone 1
// Creiamo il mese di Gennaio, e con la chiamata all'API inseriamo le festività.
// Milestone 2
// Diamo la possibilità di cambiare mese, gestendo il caso in cui l'API non possa
// ritornare festività.
//
// Attenzione!
// Ogni volta che cambio mese dovrò:
// Controllare se il mese è valido (per ovviare al problema che l'API non carichi
// holiday non del 2018)
// Controllare quanti giorni ha il mese scelto formando così una lista
// Chiedere all'api quali sono le festività per il mese scelto
// Evidenziare le festività nella lista
// Consigli e domande del giorno:
// Abbiamo visto assieme una libereria che serve per gestire le date... quale sarà?
// Una chiamata ajax può anche non andare a buon fine, che si fa in quel caso?
// Lasciamo l'utente ad attendere?

function ajaxTest(){
  $.ajax({
  url:"https://flynn.boolean.careers/exercises/api/holidays?month=0&year=2018",
  method: "GET",
  success: function(data){
    var success = data["success"];
    var value = data["response"];
    console.log(data);
  },
  error: function(error){
    console.log("error", error);
  }

});
// var dayTarget = $(".day");
// var monthTarget = $(".month");
// var yearTarget = $(".year");
//
// var months = moment.months();
//
// for (var i = 1; i < 31; i++) {
//   var newOpt = $('<option value="' + i + '">' + i + '</option>');
//   dayTarget.append(newOpt);
// }
// for (var i = 0; i < months.length; i++) {
//   var month = months[i];
//   var newOpt = $('<option value="' + (i+1) + '">' + month + '</option>');
//   monthTarget.append(newOpt);
// }
// for (var i = 1980; i <= 2017; i++) {
//   var newOpt = $('<option value="' + i + '">' + i + '</option>');
//   yearTarget.append(newOpt);
// }

}





function init(){
ajaxTest();

}
$(document).ready(init);
