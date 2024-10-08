$(function(){

    var $status = $('.pagingInfo');
    var $slickElement = $('.loop');
  
    $slickElement.on('init', function (e, slick) {
      var $firstAnimatingElements = $('div.item:first-child').find('[data-animation]');
      doAnimations($firstAnimatingElements);
    });
    $slickElement.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
      var $animatingElements = $('div.item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
      doAnimations($animatingElements);
    });
    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
      $status.html("<span>" + '0' + i );
    });
  
    $slickElement.slick({
      dots: true,
      infinite: false,
      speed: 750,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 8000,
      fade: false,
      adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });

    $(".left-button").on("click",function(){
        $slickElement.slick('slickPrev');
    });
    $(".right-button").on("click",function(){
        $slickElement.slick('slickNext');
    });

    function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function() {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function() {
                $this.removeClass($animationType);
            });
        });
    }
  
});
