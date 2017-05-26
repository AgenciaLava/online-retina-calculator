(function($){
  var $originalW = $('.originalW'),
    $originalH = $('.originalH');

  $originalW.bind('propertychange change click keyup input paste', function(){
    $('.w15').val($originalW.val() * 1.5);
    $('.w2').val($originalW.val() * 2);
    $('.w3').val($originalW.val() * 3);
  });

  $originalH.bind('propertychange change click keyup input paste', function(){
    $('.h15').val($originalH.val() * 1.5);
    $('.h2').val($originalH.val() * 2);
    $('.h3').val($originalH.val() * 3);
  });
}(jQuery));
