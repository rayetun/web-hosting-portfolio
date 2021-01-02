(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();


        /* OwlCarousel JS */


        $('.textimonial-carousel').owlCarousel({
            loop: true,
            margin: 0,
            center: true,
            addClassActive: true,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });

        $(".project-filter li").on('click', function () {

            $(".project-filter li").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr('data-filter');
            $(".project-list").isotope({
                filter: selector
            });
        });

        $(".project-popup").magnificPopup({
            type: 'image',
        })

    });


    jQuery(window).load(function () {

        jQuery(".project-list").isotope();
    });


}(jQuery));
