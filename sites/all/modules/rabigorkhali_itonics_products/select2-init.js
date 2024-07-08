
(function($) {
    Drupal.behaviors.yourModuleBehavior = {
        attach: function (context, settings) {
            $('.rabigorkhali-itonics-products-category-select', context).select2();
        }
    };
})(jQuery);