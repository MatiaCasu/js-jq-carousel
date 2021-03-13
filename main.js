$(function(){

  // Funzione per spostare classe active prev/next
  function activeNext(element, first){
    element.removeClass("active");
    if(!(element.hasClass("last"))){
      element.next().addClass("active");
    }
    else{
      first.addClass("active");
    }
  }

  function activePrev(element, last){
    element.removeClass("active");
    if(!(element.hasClass("first"))){
      element.prev().addClass("active");
    }
    else{
      last.addClass("active");
    }
  }
  // /Funzione per spostare classe active prev/next

  // Funzione Img/Bullets Prev/Next
  function prevCarousel(){
    var activeImg = $(".images > img.active");
    var lastImg = $(".images > img.last");
    var activeBullet = $(".nav i.active");
    var lastBullet = $(".nav i.last");

    activePrev(activeImg, lastImg);
    activePrev(activeBullet, lastBullet);
  }

  function nextCarousel(){
    var activeImg = $(".images > img.active");
    var firstImg = $(".images > img.first");
    var activeBullet = $(".nav i.active");
    var firstBullet = $(".nav i.first");

    activeNext(activeImg, firstImg);
    activeNext(activeBullet, firstBullet);
  }
  // /Funzione Img/Bullets Prev/Next

  // Variabili
  var arrowL = $("div.prev");
  var arrowR = $("div.next");
  var bullets = $(".nav i")
  // /Variabili

  // Evento key Prev/Next
  function controlKey(evento){
    var x = evento.key;
    if(x === "ArrowLeft"){
      prevCarousel();
    }

    if(x === "ArrowRight"){
      nextCarousel();
    }
  }
  document.addEventListener("keydown", controlKey);
  // /Evento Key Prev/Next

  // Evento click Prev/Next
  arrowL.click(
    function(){
      prevCarousel();
    }
  );

  arrowR.click(
    function(){
      nextCarousel();
    }
  );
  // /Evento click Prev/Next

});
