function load_page_details()
{
    $(document).ready(function()
    {
      // call to fullpage.js
      $('#fullpage').fullpage(
        {
        navigation: 'true',
        navigationPosition: 'right',
        navigationTooltips: ['Home', 'Information', 'Model S',
        'Model X', 'Model 3', 'Roadster', 'LEAF', 'I3',
        'Spark', 'Zoe', 'Closing']
        });

      $('.modelS h3').on('click', function()
      {
        var sections = $('.ModelS h3');
        if($('#modelS-benefits').css('display')=='none')
        {
          $('#modelS-details').hide();
        	$('#modelS-benefits').show();
        }
        else
        {
          $('#modelS-benefits').hide();
        	$('#modelS-details').show();
        }
        if($(sections[0]).hasClass('showing-head'))
        {
          $(sections[0]).removeClass('showing-head');
          $(sections[1]).addClass('showing-head');
        }
        else if($(sections[1]).hasClass('showing-head'))
        {
          $(sections[1]).removeClass('showing-head');
          $(sections[0]).addClass('showing-head');
        }

      });

      $('.modelX h3').on('click', function()
      {
        var sections = $('.modelX h3');
        if($('#modelX-details').css('display')!='none'){
          $('#modelX-details').hide();
        	$('#modelx-benefits').show();
        }
        else
        {
          $('#modelx-benefits').hide();
        	$('#modelX-details').show();
        }
        if($(sections[0]).hasClass('showing-head'))
        {
          $(sections[0]).removeClass('showing-head');
          $(sections[1]).addClass('showing-head');
        }
        else if($(sections[1]).hasClass('showing-head'))
        {
          $(sections[1]).removeClass('showing-head');
          $(sections[0]).addClass('showing-head');
        }
      });

      $('.model3 h3').on('click', function()
      {
        var sections = $('.model3 h3');
        if($('#model3-details').css('display')!='none')
        {
          $('#model3-details').hide();
        	$('#model3-benefits').show();
        }
        else
        {
          $('#model3-benefits').hide();
        	$('#model3-details').show();
        }

        if($(sections[0]).hasClass('showing-head'))
        {
          $(sections[0]).removeClass('showing-head');
          $(sections[1]).addClass('showing-head');
        } else if($(sections[1]).hasClass('showing-head'))
        {
          $(sections[1]).removeClass('showing-head');
          $(sections[0]).addClass('showing-head');
        }
      });

      $('.roadster h3').on('click', function()
      {
        var sections = $('.roadster h3');
        if($('#roadster-details').css('display')!='none')
        {
          $('#roadster-details').hide();
        	$('#roadster-benefits').show();
        }
        else
        {
          $('#roadster-benefits').hide();
        	$('#roadster-details').show();
        }

        if($(sections[0]).hasClass('showing-head'))
        {
          $(sections[0]).removeClass('showing-head');
          $(sections[1]).addClass('showing-head');
        }
        else if($(sections[1]).hasClass('showing-head'))
        {
          $(sections[1]).removeClass('showing-head');
          $(sections[0]).addClass('showing-head');
        }
      });

      $('.leaf h3').on('click', function()
      {
        var sections = $('.leaf h3');
        if($('#leaf-details').css('display')!='none')
        {
          $('#leaf-details').hide();
        	$('#leaf-benefits').show();
        }
        else
        {
          $('#leaf-benefits').hide();
        	$('#leaf-details').show();
        }

        if($(sections[0]).hasClass('showing-head'))
        {
          $(sections[0]).removeClass('showing-head');
          $(sections[1]).addClass('showing-head');
        }
        else if($(sections[1]).hasClass('showing-head'))
        {
          $(sections[1]).removeClass('showing-head');
          $(sections[0]).addClass('showing-head');
        }
      });

      $('.I3 h3').on('click', function()
      {
        var sections = $('.I3 h3');
        if($('#I3-details').css('display')!='none')
        {
          $('#I3-details').hide();
          $('#I3-benefits').show();
        }
        else
        {
          $('#I3-benefits').hide();
          $('#I3-details').show();
        }

        if($(sections[0]).hasClass('showing-head'))
        {
          $(sections[0]).removeClass('showing-head');
          $(sections[1]).addClass('showing-head');
        }
        else if($(sections[1]).hasClass('showing-head'))
        {
          $(sections[1]).removeClass('showing-head');
          $(sections[0]).addClass('showing-head');
        }
      });

      $('.spark h3').on('click', function()
      {
        var sections = $('.spark h3');
        if($('#spark-details').css('display')!='none')
        {
          $('#spark-details').hide();
          $('#spark-benefits').show();
        }
        else
        {
          $('#spark-benefits').hide();
          $('#spark-details').show();
        }

        if($(sections[0]).hasClass('showing-head'))
        {
          $(sections[0]).removeClass('showing-head');
          $(sections[1]).addClass('showing-head');
        }
        else if($(sections[1]).hasClass('showing-head'))
        {
          $(sections[1]).removeClass('showing-head');
          $(sections[0]).addClass('showing-head');
        }
      });

      $('.zoe h3').on('click', function()
      {
        var sections = $('.zoe h3');
        if($('#zoe-details').css('display')!='none')
        {
          $('#zoe-details').hide();
          $('#zoe-benefits').show();
        }
        else
        {
          $('#zoe-benefits').hide();
          $('#zoe-details').show();
        }

        if($(sections[0]).hasClass('showing-head'))
        {
          $(sections[0]).removeClass('showing-head');
          $(sections[1]).addClass('showing-head');
        }
        else if($(sections[1]).hasClass('showing-head'))
        {
          $(sections[1]).removeClass('showing-head');
          $(sections[0]).addClass('showing-head');
        }
      });

    });
}
