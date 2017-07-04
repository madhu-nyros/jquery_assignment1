$(document).ready(function(){
    $("#Tab1").show();
    $("#tab1").show();
  $("#Tab1").click(function(){
    $("#tab1").show();
    $("#tab2").hide();
    $("#tab3").hide();
    $("#tab4").hide();
  });
  $("#Tab2").click(function(){
    $("#tab2").show();
    $("#tab1").hide();
    $("#tab3").hide();
    $("#tab4").hide();
  });
  $("#Tab3").click(function(){
    $("#tab3").show();
    $("#tab1").hide();
    $("#tab2").hide();
    $("#tab4").hide();
  });
  $("#Tab4").click(function(){
    $("#tab4").show();
    $("#tab1").hide();
    $("#tab2").hide();
    $("#tab3").hide();
  });
// tabs ending
// slider starting
  var click=0;
  $(".glyphicon-chevron-right").click(function(){
      click +=1;
   if(click==0)
   {
	 $("#slides1").show();
	 $("#slides2").hide();
	 $("#slides3").hide();
    }
    else if(click==1)
    {
     $("#slides2").show();
     $("#slides1").hide();
	 $("#slides3").hide();
    }
    else if(click==2)
    {
     $("#slides3").show();
	 $("#slides1").hide();
	 $("#slides2").hide();
    }
    else if(click==3)
    {
     $("#slides1").show();
     $("#slides2").hide();
     $("#slides3").hide();
       click=0;
    }
   });
  $(".glyphicon-chevron-left").click(function(){
     click +=1;
    if(click == 1)
    {
      $("#slides1").hide();
	  $("#slides2").hide();
	  $("#slides3").show();
     }
    else if(click ==2)
    {
      $("#slides1").hide();
	  $("#slides2").show();
	  $("#slides3").hide();
    }
    else if(click ==3)
    {
      $("#slides1").show();
	  $("#slides2").hide();
	  $("#slides3").hide();
     click =0;
     }
   });
// slider ending
// star rating start
    $("#star1").click(function(){
      $("#star1").css("color" ,"blue");
      $("#star2,#star3,#star4,#star5").css("color" ,"inherit");
    });
    $("#star2").click(function(){
      $("#star1,#star2").css("color" ,"blue");
      $("#star3,#star4,#star5").css("color" ,"inherit");
    });
    $("#star3").click(function(){
      $("#star1,#star2,#star3").css("color" ,"blue");
      $("#star4,#star5").css("color" ,"inherit");
    });
    $("#star4").click(function(){
      $("#star1,#star2,#star3,#star4").css("color" ,"blue");
      $("#star5").css("color","inherit");
    });
    $("#star5").click(function(){
      $("#star1,#star2,#star3,#star4,#star5").css("color" ,"blue");
    });
// star rating end
//tooltip starting
   $('#name').tooltip();
// tooltip ending
// popup and lightbox starting
      $("#bird").click(function(){
      $("#bird").css("border","solid 3px red");
      $("#chitha").css("borderColor","inherit");
      $("#tiger").css("borderColor","inherit");
      $("#flower").css("borderColor","inherit");
      $("#birds").show();
      $("#chithas").hide();
      $("#tigers").hide();
      $("#flowers").hide();
   });
   $("#chitha").click(function(){
      $("#bird").css("borderColor","inherit");
      $("#chitha").css("border","solid 3px red");
      $("#tiger").css("borderColor","inherit");
      $("#flower").css("borderColor","inherit");
      $("#birds").hide();
      $("#chithas").show();
      $("#tigers").hide();
      $("#flowers").hide();
   });
   $("#tiger").click(function(){
      $("#bird").css("borderColor","inherit");
      $("#chitha").css("borderColor","inherit");
      $("#tiger").css("border","solid 3px red");
      $("#flower").css("borderColor","inherit");
      $("#birds").hide();
      $("#chithas").hide();
      $("#tigers").show();
      $("#flowers").hide();
   });
   $("#flower").click(function(){
      $("#bird").css("borderColor","inherit");
      $("#chitha").css("borderColor","inherit");
      $("#tiger").css("borderColor","inherit");
      $("#flower").css("border","solid 3px red");
      $("#birds").hide();
      $("#chithas").hide();
      $("#tigers").hide();
      $("#flowers").show();
   });
// popup and lightbox ending
// modal starting
   $(".btn").click(function(){
    $("#myModal").modal();
   });
// modal ending
// autocomplete starting
  $( function() {
   var availablecars = [' Audi ',
                        ' BMW ',
                        ' Bugatti ',
                        ' Ferrari ',
                        ' Ford ',
                        ' Lamborghini ',
                        ' Mercedes Benz ',
                        ' Porsche ',
                        ' Rolls-Royce ',
                        ' Volkswagen '
                       ];
     $("#cars").autocomplete({
     	source:availablecars
     });
   });
});





