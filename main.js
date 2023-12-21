/***************************************************
==================== JS INDEX ======================
****************************************************
Mobile Menu Js


****************************************************/

(function ($) {
    "use strict";

    var windowOn = $(window);

    // Preloader js
    function loading() {
        document.querySelectorAll(".bar").forEach(function (current) {
            let startWidth = 0;
            const endWidth = current.dataset.size;
            const interval = setInterval(frame, 20);
            function frame() {
                if (startWidth >= endWidth) {
                    clearInterval(interval);
                } else {
                    startWidth++;
                    current.style.width = `${endWidth}%`;
                    current.firstElementChild.innerText = `${startWidth}%`;
                }
            }
        });
    }
    setTimeout(loading, 1000);
    $(window).on("load", function () {
        $("#preloader").fadeOut(500);
    });
    if ($("#preloader").length > 0) {
        $(".pwd-primary-btn").each(function () {
            $(this).on("click", function (e) {
                e.preventDefault();
                $("#preloader").fadeOut(500);
            });
        });
    }


  //Type js
    var element = jQuery(".text .element");
    jQuery(function() {
      element.typed({
        strings: ["Web Design and Developer", "Expert in WordPress and WooCommerce" ],
        typeSpeed: 150,
        loop: true,
      });
    });


    // Mobile Menu js
    $("#main-menu").meanmenu({
        meanMenuContainer: "#mobile-navbar-menu",
        meanScreenWidth: "991",
        meanExpand: ["<i class='fa-light fa-plus'></i> <i class='fa-light fa-minus'></i>"],
    });

    //Canvas sidebar js
    var canva_expander = $(".canva_expander");
    if (canva_expander.length) {
        $(".canva_expander, #canva_close, #pwd-overlay-bg2").on("click", function (e) {
            e.preventDefault();
            $("body").toggleClass("canvas_expanded");
        });
    }

    // Popup js
    $(document).ready(function () {
        $("#portfolio-grid").magnificPopup({
            delegate: "a.gallery",
            type: "image",
            mainClass: "mfp-fade",
            gallery: {
                enabled: true,
            },
        });
    });

    // Fun Fact js
    $(".odometer").appear(function () {
        var odo = $(".odometer");
        odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

    // Sal Animation js
    sal({
        threshold: 0.1,
        once: true,
    });

    // Portfolio filter js
    $("#portfolio-grid").imagesLoaded(function () {
        $(".filter-menu").on("click", "button", function () {
            var filterValue = $(this).attr("data-filter");
            $grid.isotope({
                filter: filterValue,
            });
        });
        $(".filter-menu button").on("click", function (event) {
            $(this).siblings(".active").removeClass("active");
            $(this).addClass("active");
            event.preventDefault();
        });
        var $grid = $("#portfolio-grid").isotope({
            itemSelector: ".portfolio-single-item",
            percentPosition: true,
            masonry: {
                columnWidth: ".portfolio-single-item",
            },
        });
    });

    // Sticky js
    $(window).scroll(function () {
        var Width = $(document).width();

        if ($("body").scrollTop() > 100 || $("html").scrollTop() > 100) {
            $(".header-sticky").addClass("sticky");
        } else {
            $(".header-sticky").removeClass("sticky");
        }
    });






    $('#main-menu a').on('click', function (e) {
      e.preventDefault();
      $('#main-menu a').removeClass('active');
      $(this).addClass('active');

      var target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 500);
    });

    $(window).on('scroll', function () {
      var scrollPosition = $(this).scrollTop();

      $('section').each(function () {
        var top = $(this).offset().top - 80;
        var bottom = top + $(this).outerHeight();

        if (scrollPosition >= top && scrollPosition < bottom) {
          var targetId = $(this).attr('id');
          $('#main-menu a').removeClass('active');
          $('#main-menu a[href="#' + targetId + '"]').addClass('active');
        }
      });
    });





    // ScrollTop js
    var pwdsumonScrollTop = document.querySelector(".pwdsumon-scroll-top");
    if (pwdsumonScrollTop != null) {
        var scrollProgressPatch = document.querySelector(".pwdsumon-scroll-top path");
        var pathLength = scrollProgressPatch.getTotalLength();
        var offset = 50;
        scrollProgressPatch.style.transition = scrollProgressPatch.style.WebkitTransition = "none";
        scrollProgressPatch.style.strokeDasharray = pathLength + " " + pathLength;
        scrollProgressPatch.style.strokeDashoffset = pathLength;
        scrollProgressPatch.getBoundingClientRect();
        scrollProgressPatch.style.transition = scrollProgressPatch.style.WebkitTransition =
            "stroke-dashoffset 10ms linear";
        window.addEventListener("scroll", function (event) {
            var scroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var progress = pathLength - (scroll * pathLength) / height;
            scrollProgressPatch.style.strokeDashoffset = progress;
            var scrollElementPos = document.body.scrollTop || document.documentElement.scrollTop;
            if (scrollElementPos >= offset) {
                pwdsumonScrollTop.classList.add("progress-done");
            } else {
                pwdsumonScrollTop.classList.remove("progress-done");
            }
        });
        pwdsumonScrollTop.addEventListener("click", function (e) {
            e.preventDefault();
            window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        });
    }
})(jQuery);
