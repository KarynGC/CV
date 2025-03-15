$(document).ready(function() {

    // Animación suave de desplazamiento
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, 500);
        }
    });
    
    // Inicializar carrusel de certificados
    $('.certificates-carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Animación para las secciones al hacer scroll
    $(window).scroll(function() {
        $('section').each(function() {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            
            if (scroll + windowHeight > position + 100) {
                $(this).addClass('animated');
            }
        });
    });

    // Animación para las barras de progreso
    function animateProgressBars() {
        $('.progress').each(function() {
            var width = $(this).css('width');
            $(this).css('width', '0');
            $(this).animate({width: width}, 1000);
        });
    }
   
    // Añadir efecto de resaltado en los elementos del menú según la sección visible
    $(window).scroll(function() {
        var scrollPosition = $(document).scrollTop() + 80;
        
        $('section').each(function() {
            var currentSection = $(this);
            var sectionTop = currentSection.offset().top;
            var sectionBottom = sectionTop + currentSection.height();
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                var id = currentSection.attr('id');
                $('.nav-links a').removeClass('active');
                $('.nav-links a[href="#' + id + '"]').addClass('active');
            }
        });
    });
});
