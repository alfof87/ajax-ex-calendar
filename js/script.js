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

function printMonth(currentMonth){
var daysInMonth = currentMonth.daysInMonth();
var template = $("#template").html();
var compiled = Handlebars.compile(template);
var target = $(".giorni-mese");
target.html("");
console.log(daysInMonth);
for (var i = 0; i <= daysInMonth; i++) {
  var dayshtml = compiled({
    "value": i
  });
  target.append(dayshtml);
  }
}
function printHoliday(currentMonth) {
  var year = currentMonth.year();
  var month = currentMonth.month();
  console.log(month);
  $.ajax({
    url:"https://flynn.boolean.careers/exercises/api/holidays?month=0&year=2018",
    method: "GET",
    data: {
      "year": year,
      "month": month
    },
    success: function(data, state) {
      var holidays = data["response"];
      for (var i = 0; i < holidays.length; i++) {
        var element = $(".giorni-mese li[data-datecomplete='"+holidays[i].date+"']")
        element.addClass("holidays");
        element.append(" "+ holidays[i]["name"]);
      }
    },
    error: function(error){
      console.log("error", error);
    }
  });
  // Diamo la possibilità di cambiare mese, gestendo il caso in cui l'API non possa
  // ritornare festività.
  function changeMonth(){



    $("#prev").click(function () {

});

    $("#next").click(function () {
      $("gen").addClass(".hide");
      $("feb").addClass(".show");
      // moment("2018-01-01").add(1, 'month');
});
  }
}







function init(){
var currentMonth = moment("2018-01-01")
printMonth(currentMonth);
printHoliday(currentMonth);
changeMonth();
}
$(document).ready(init);
