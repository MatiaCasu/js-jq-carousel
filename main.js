$(function(){

  var arrowPrev = $("div.prev");
  var arrowNext = $("div.next");
  // Aggiungo evento click a div con classe PREV
  arrowPrev.click(
    function(){
      var activeImg = $(".images > img.active");
      var lastImg = $(".images > img.last");
      var activeBullet = $(".nav i.active");
      var lastBullet = $(".nav i.last");
      /* Al click di arrow next la classe active viene rimossa dal tag img
      ed aggiunto alL'elemento successivo*/
      activeImg.removeClass("active");
      activeBullet.removeClass("active");

      if(!(activeImg.hasClass("first")) && !(activeBullet.hasClass("first"))){
        activeImg.prev().addClass("active");
        activeBullet.prev().addClass("active");
      }
      else{
        lastImg.addClass("active");
        lastBullet.addClass("active");
      }
    }
  );
  // /Aggiungo evento click a div con classe PREV

  // Aggiungo evento click a div con classe NEXT
  arrowNext.click(
    function(){
      var activeImg = $(".images > img.active");
      var firstImg = $(".images > img.first");
      var activeBullet = $(".nav i.active");
      var firstBullet = $(".nav i.first")

      activeImg.removeClass("active");
      activeBullet.removeClass("active");

      if(!(activeImg.hasClass("last"))){
        activeImg.next().addClass("active");
        activeBullet.next().addClass("active");
      }
      else{
        firstImg.addClass("active");
        firstBullet.addClass("active");
      }
  });
  // /Aggiungo evento click a div con classe NEXT
});
