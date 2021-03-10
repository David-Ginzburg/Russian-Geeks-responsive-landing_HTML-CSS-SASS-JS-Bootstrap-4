/* birtix */

(function(w,d,u){
    var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);
    var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
})(window,document,'https://cdn-ru.bitrix24.ru/b13408356/crm/site_button/loader_1_aucz4w.js');

/* wow */

new WOW().init();

/* quiz */

  (function(w, d, s, o){
    var j = d.createElement(s); j.async = true; j.src = '//script.marquiz.ru/v2.js';j.onload = function() {
      if (document.readyState !== 'loading') Marquiz.init(o);
      else document.addEventListener("DOMContentLoaded", function() {
        Marquiz.init(o);
      });
    };
    d.head.insertBefore(j, d.head.firstElementChild);
  })(window, document, 'script', {
      host: '//quiz.marquiz.ru',
      id: '603a048845f8ea0044060b62',
      autoOpen: 20,
      autoOpenFreq: 'once',
      openOnExit: false,
      disableOnMobile: false
    }
  );
  
  
(function(t, p){
    window.Marquiz ? Marquiz.add([t, p]) : document.addEventListener('marquizLoaded', function() {
        Marquiz.add([t, p])
    })
})('Pop', {
    id: '603a048845f8ea0044060b62',
    title: 'Пройти тест',
    text: 'Пройти тест',
    delay: 11,
    textColor: '#ffffff',
    bgColor: '#f1a431',
    bonusCount: 2,
    bonusText: 'Вам доступны бонусы и скидка',
    type: 'full',
    position: 'position_top',
    shadow: 'rgba(55, 41, 126, 0)',
    blicked: true,
    pulse: 'rgba(55, 41, 126, 0.4)',
    svgColor: '#fff',
    closeColor: '#fff'}
)

/* youtube */

function autoPlayYouTubeModal(){
    let trigger = $("body").find('[data-toggle="modal"]')
    trigger.click(function() {
        let theModal = $(this).data( "target" ),
        videoSRC = $(this).attr( "data-theVideo" ), 
        videoSRCauto = videoSRC+"?autoplay=1" ;
        $(theModal+' iframe').attr('src', videoSRCauto)
        $(theModal+' button.close').click(function () {
            $(theModal+' iframe').attr('src', videoSRC)
        });
    });
}

$(document).ready(function(){
    autoPlayYouTubeModal()
})

/* additional steps buttons */

const stepsPills = document.querySelectorAll('.steps__wrapper a')

let stepsIndex = 0;

stepsPills.forEach((item, index) => {
    item.addEventListener('click', () => {
        stepsIndex = index
    })
})

$('.steps').on( "click", '.steps__arrow_right', function(e){
    if (stepsIndex !== stepsPills.length - 1) {
        stepsIndex ++
        $(stepsPills[stepsIndex]).trigger(e.type)
    }
})

$('.steps').on( "click", '.steps__arrow_left', function(e){
    if (stepsIndex !== 0) {
        stepsIndex --
        $(stepsPills[stepsIndex]).trigger(e.type)
    }
})

/* validation and send form */

const success = document.querySelector('#success')

const showSuccess = () => {
    success.style.display="block"
    success.style.opacity="1"
    success.classList.add('show')
    setTimeout(() => {
        success.style.display="none"
        success.style.opacity="0"
        success.classList.remove('show')
    }, 3000);
}

function validateForms(form) {
    $(form).validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: 'required',
            email: {
                required: true,
                email: true
            },
            company: {
                required: true
            },
            descr: {
                required: true,
                minlength: 10
            },
            policy: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Введите ваше имя",
                minlength: jQuery.validator.format("Нужно ввести как минимум {0} символа")
            },
            email: {
                required: "Введите ваш email",
                email: "Ваш email должен быть в формате: name@domain.ru"
            },
            phone: {
                required: "Введите ваш мобильный телефон"
            },
            company: {
                required: "Введите название вашей компании"
            },
            descr: {
                required: "Введите описание вашей идеи",
                minlength: "Описание должно быть не менее 10 символов"
            },
            policy: {
                required: "Примите соглашение"
            }
        },
        submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: "php/mailer/smart.php",
                data: $(form).serialize()
            }).done(function() {
                showSuccess()
                $(form).trigger('reset');
            });
        }
    });
}

validateForms('.development-form');
validateForms('#assignment-descr');
validateForms('#assignment-order');
validateForms('.contacts-form');
validateForms('#consultation form');
validateForms('#assignment form');

jQuery(function($){
    $('input[name=phone]').mask("9 (999) 999-99-99");
});

$(function ($) {
    $('.form-url').val(window.location.href);
});