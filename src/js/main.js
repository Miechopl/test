/* ==========================================================================

    Project: test
    Author: XHTMLized
    Last updated: @@timestamp

   ========================================================================== */

(function($) {

  'use strict';

  var App = {

    /**
     * Init Function
     */
    init: function() {
      App.startSlideshow();
    },

    /**
     * Start slideshow gallery from news
     */
    startSlideshow: function() {
      $(".link-image").colorbox({rel:'news-group',open: true});

      this.nextSlide();
    },

    /**
     * Next slide
     */
    nextSlide: function() {
      var $linkImages = $(".link-image");
      var lastElementId = $($linkImages[$linkImages.length-1]).data('id');

      var slideInterval = setInterval(function() {
        if ($.colorbox.element().data('id')==lastElementId) {
          $.colorbox.close();
          clearInterval(slideInterval);
        }
        $.colorbox.next();
      }, 2000);

      $(document).bind('cbox_closed', function(){
        if (slideInterval !== undefined) {
          clearInterval(slideInterval);
        }
      });
    }

  };

  $(function() {
    App.init();
  });

})(jQuery);
