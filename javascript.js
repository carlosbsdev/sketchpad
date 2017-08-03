$(function() {
  //Initial divs
  createDivs(getGridSize());

  //Buttons
  $( "#set" ).click(function() {
    createDivs(getGridSize());
  });
  $( "#clear" ).click(function() {
    $(".square").css( "background-color", "red" );
  });

  //Functions
  function getGridSize() {
    var num = $("#gridsize").val();
    if(!isNaN(num)){
      return num;
    }else{
      console.log('gridsize its no a number. Default: 44');
      return 44;
    }
  }
  function createDivs(number) {
    $("main").html('');
    for(var x = 0; x < number*number; x++){
        $("main").append('<div class="square"></div>');
    }
    $( ".square" ).css({ 'width': 580/number, 'height': 400/number });
  }

  //Mouse over
  $( "main" ).on('mouseover', '.square', function(){
    $(this).css( "background-color", "black" );
  });
});
