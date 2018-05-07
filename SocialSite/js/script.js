
$(document).ready(function(){
  // call to fullpage.js
  $('#fullpage').fullpage({
    navigation: 'true',
    navigationPosition: 'right',
    navigationTooltips: ['Home', 'Information', 'Model S', 'Model X', 'Model 3', 'Roadster', 'LEAF', 'I3', 'Spark', 'Zoe', 'Closing']
  });

  // content switchers
  $('.modelS h3').on('click', function(){
    var titles = $('.ModelS h3');
    if($('#modelS-benefits').css('display')=='none'){
      $('#modelS-details').hide();
    	$('#modelS-benefits').show();

    } else {
      $('#modelS-benefits').hide();
    	$('#modelS-details').show();
    }
    if($(titles[0]).hasClass('active-title')){
      $(titles[0]).removeClass('active-title');
      $(titles[1]).addClass('active-title');
    } else if($(titles[1]).hasClass('active-title')){
      $(titles[1]).removeClass('active-title');
      $(titles[0]).addClass('active-title');
    }

  });

  $('.modelX h3').on('click', function(){
    var titles = $('.modelX h3');
    if($('#modelX-details').css('display')!='none'){
      $('#modelX-details').hide();
    	$('#modelx-benefits').show();
    } else {
      $('#modelx-benefits').hide();
    	$('#modelX-details').show();
    }
    if($(titles[0]).hasClass('active-title')){
      $(titles[0]).removeClass('active-title');
      $(titles[1]).addClass('active-title');
    } else if($(titles[1]).hasClass('active-title')){
      $(titles[1]).removeClass('active-title');
      $(titles[0]).addClass('active-title');
    }
  });

  $('.model3 h3').on('click', function(){
    var titles = $('.model3 h3');
    if($('#model3-details').css('display')!='none'){
      $('#model3-details').hide();
    	$('#model3-benefits').show();
    } else {
      $('#model3-benefits').hide();
    	$('#model3-details').show();
    }
    if($(titles[0]).hasClass('active-title')){
      $(titles[0]).removeClass('active-title');
      $(titles[1]).addClass('active-title');
    } else if($(titles[1]).hasClass('active-title')){
      $(titles[1]).removeClass('active-title');
      $(titles[0]).addClass('active-title');
    }
  });

  $('.roadster h3').on('click', function(){
    var titles = $('.roadster h3');
    if($('#roadster-details').css('display')!='none'){
      $('#roadster-details').hide();
    	$('#roadster-benefits').show();
    } else {
      $('#roadster-benefits').hide();
    	$('#roadster-details').show();
    }
    if($(titles[0]).hasClass('active-title')){
      $(titles[0]).removeClass('active-title');
      $(titles[1]).addClass('active-title');
    } else if($(titles[1]).hasClass('active-title')){
      $(titles[1]).removeClass('active-title');
      $(titles[0]).addClass('active-title');
    }
  });

  $('.leaf h3').on('click', function(){
    var titles = $('.leaf h3');
    if($('#leaf-details').css('display')!='none'){
      $('#leaf-details').hide();
    	$('#leaf-benefits').show();
    } else {
      $('#leaf-benefits').hide();
    	$('#leaf-details').show();
    }
    if($(titles[0]).hasClass('active-title')){
      $(titles[0]).removeClass('active-title');
      $(titles[1]).addClass('active-title');
    } else if($(titles[1]).hasClass('active-title')){
      $(titles[1]).removeClass('active-title');
      $(titles[0]).addClass('active-title');
    }
  });

  $('.I3 h3').on('click', function(){
    var titles = $('.I3 h3');
    if($('#I3-details').css('display')!='none'){
      $('#I3-details').hide();
      $('#I3-benefits').show();
    } else {
      $('#I3-benefits').hide();
      $('#I3-details').show();
    }
    if($(titles[0]).hasClass('active-title')){
      $(titles[0]).removeClass('active-title');
      $(titles[1]).addClass('active-title');
    } else if($(titles[1]).hasClass('active-title')){
      $(titles[1]).removeClass('active-title');
      $(titles[0]).addClass('active-title');
    }
  });

  $('.spark h3').on('click', function(){
    var titles = $('.spark h3');
    if($('#spark-details').css('display')!='none'){
      $('#spark-details').hide();
      $('#spark-benefits').show();
    } else {
      $('#spark-benefits').hide();
      $('#spark-details').show();
    }
    if($(titles[0]).hasClass('active-title')){
      $(titles[0]).removeClass('active-title');
      $(titles[1]).addClass('active-title');
    } else if($(titles[1]).hasClass('active-title')){
      $(titles[1]).removeClass('active-title');
      $(titles[0]).addClass('active-title');
    }
  });

  $('.zoe h3').on('click', function(){
    var titles = $('.zoe h3');
    if($('#zoe-details').css('display')!='none'){
      $('#zoe-details').hide();
      $('#zoe-benefits').show();
    } else {
      $('#zoe-benefits').hide();
      $('#zoe-details').show();
    }
    if($(titles[0]).hasClass('active-title')){
      $(titles[0]).removeClass('active-title');
      $(titles[1]).addClass('active-title');
    } else if($(titles[1]).hasClass('active-title')){
      $(titles[1]).removeClass('active-title');
      $(titles[0]).addClass('active-title');
    }
  });

});
