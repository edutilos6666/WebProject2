$(function() {
    /*
     U -> Volt (Spannung)
     R -> Ohm (Widerstand)
     I -> Amp (Stromstärke)
     P -> Watt (Leistung)
     */

    function calculate(volts, ohms, amps, watts) {
       var  U = volts.val(),
           R = ohms.val(),
           I = amps.val(),
           P = watts.val();

       if(I != "" && R != "") {
           P = I*I*R;
           U = R*I;
           watts.val(P);
           volts.val(U);
           watts.addClass("alert-success");
           volts.addClass("alert-success");
       } else if(I != "" && U != "") {
           P = I*U;
           R = U/I;
           ohms.val(R);
           watts.val(P);
           ohms.addClass("alert-success");
           watts.addClass("alert-success");
       } else if(U!= "" && R!= "") {
           I = U/R ;
           P = I*U;
           amps.val(I);
           watts.val(P);
           amps.addClass("alert-success");
           watts.addClass("alert-success");
       } else if(I!= "" && P!= "") {
           U = P/I;
           R = U/I;
           volts.val(U);
           ohms.val(R);
           volts.addClass("alert-success");
           ohms.addClass("alert-success");
       } else if(U!= "" && P != "") {
           I = P/U ;
           R = U/I;
           ohms.val(R);
           amps.val(I);
           ohms.addClass("alert-success");
           amps.addClass("alert-success");
       } else if(R!= "" && P!= "") {
           I = Math.sqrt(P*R);
           U = R*I;
           volts.val(U);
           amps.val(I);
           volts.addClass("alert-success");
           amps.addClass("alert-success");
       }


    }

    $("#btnSolve").on("click", function(ev) {
     // alert("btnSolve was clicked!");
      clearClassAlertSuccess();
     var volts = $("#volts"),
         ohms = $("#ohms"),
         amps = $("#amps"),
         watts = $("#watts");


     function check_if_correct() {
         var counter = 0 ;
         if(volts.val() != "") counter++;
         if(ohms.val() != "") counter++;
         if(amps.val() != "") counter++;
         if(watts.val() != "") counter++;

         return counter == 2;
     }

     if(!check_if_correct()) {
         alert("falsche Eingabe!");
         return;
     }
     calculate(volts, ohms, amps, watts);

  });

  $("#btnReset").on("click", function(ev) {
      clearClassAlertSuccess();
      $("input").val("");
  });


  function clearClassAlertSuccess() {
      $("input").removeClass("alert-success");
  }


});