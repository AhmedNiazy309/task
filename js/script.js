$(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('active');
      $(this).addClass('active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });
  });