$(function(){
  $('.graphy').each(function(i, elem){
    var bars = $(this).find('.graphy-elem--bar');
    var barLength = bars.length;

    var barWidth = $(this).width() / barLength * 0.8;
    var barMargin = $(this).data('barMargin');
    var animationSpeed = 0.8;
    var innerHeight = 0;

    bars.each(function(i, elem){
      if (innerHeight < $(this).data('barAmount')) {
        innerHeight = $(this).data('barAmount');
      }
    });

    for (var i = 0; i < 10; i++) {
      $(this).find('.graphy-inner-grid').append('<div style="height:calc(10% - 1px);" class="graphy-inner-grid-vertical"></div>');
      console.log();
    }

    var top = 0;
    var left = 0;

    bars.each(function(i, elem){
      var barHeight = $(this).data('barAmount') / innerHeight * 100;

      $(this).css('left', barWidth*i + barMargin);
      $(this).css('width', barWidth - barMargin*2);
      $(this).css('height', barHeight + '%');
      $(this).css('transition', 'all ' + (animationSpeed) + 's ease-out');
      $(this).css('-moz-transition', 'all ' + (animationSpeed) + 's ease-out');
      $(this).css('-webkit-transition', 'all ' + (animationSpeed) + 's ease-out');
      $(this).css('-o-transition', 'all ' + (animationSpeed) + 's ease-out');
      $(this).css('transition-delay', animationSpeed * i * 0.1 + 's');
      $(this).css('-moz-transition-delay', animationSpeed * i * 0.1 + 's');
      $(this).css('-webkit-transition-delay', animationSpeed * i * 0.1 + 's');
      $(this).css('-o-transition-delay', animationSpeed * i * 0.1 + 's');
    });

    $(this).addClass('loaded');
  });
});
