$(function() {
 function createBoxes() {
     for(var i=0; i < 30; ++i) {
         var box = $("<div id='div"+i+"' class='box'>"+i+"</div>");
         box.css("background-color", generateRandomColor());

         box.appendTo($("div#container"));
     }

     //mit on
 /*    $("div#container div.box").on("mouseenter", function(event) {
         var target = $(event.target);
         $("h1#msg").text("Mouse befindet sich im Box Nummer: "+ target.attr("id"));
     });*/

   //mit delegate
     $("div#container").delegate("div.box", "mouseenter", function(event) {
         var target = $(event.target);
         $("h1#msg").text("Mouse befindet sich im Box Nummer: "+ target.attr("id"));
     });

     $("div#container").delegate("div.box", "click", function(event) {
         var target = $(event.target);
         $(event.target).hide(500);
     });
 }

 function generateRandomColor() {
     var r = Math.round(Math.random()*255),
         g = Math.round(Math.random()*255),
         b = Math.round(Math.random()*255);
     return "rgb("+r+","+g+","+b+")";
 }

 createBoxes();
});