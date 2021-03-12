$(function(){

// Aggiungo evento click a div con classe prev
  var arrowNext = $("div.next");

  arrowNext.click(
    function(){
      var activeImg = $(".images > img.active");
      /* Al click di arrow next la classe active viene rimossa dal tag img
      ed aggiunto alL'elemento successivo*/
      activeImg.removeClass("active");
      activeImg.next().addClass("active");

    }
  );
// Aggiungo evento click a div con classe prev







  }
);
