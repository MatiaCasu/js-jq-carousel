$(function(){

// Aggiungo evento click a div con classe prev
  var arrowNext = $("div.next");

  arrowNext.click(
    function(){
      var activeImg = $(".images > img.active");
      var firstImg = $(".images > img.first");
      /* Al click di arrow next la classe active viene rimossa dal tag img
      ed aggiunto alL'elemento successivo*/
      activeImg.removeClass("active");
      if(!(activeImg.hasClass("last"))){
        activeImg.next().addClass("active");
      }
      else{
        firstImg.addClass("active");
      }

    }
  );
// Aggiungo evento click a div con classe prev







  }
);
