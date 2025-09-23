$(document).ready(function () {
  // === Progress Bars ===
  const containerA = document.getElementById('circleA');
  const containerB = document.getElementById('circleB');
  const containerC = document.getElementById('circleC');
  const containerD = document.getElementById('circleD');

  const circleA = new ProgressBar.Circle(containerA, {
    color: '#65DAF9',
    strokeWidth: 8,
    duration: 1400,
    from: { color: '#aaa' },
    to: { color: '#65DAF9' },
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      const value = Math.round(circle.value() * 60);
      circle.setText(value);
    },
  });

  const circleB = new ProgressBar.Circle(containerB, {
    color: '#65DAF9',
    strokeWidth: 8,
    duration: 1600,
    from: { color: '#aaa' },
    to: { color: '#65DAF9' },
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      const value = Math.round(circle.value() * 254);
      circle.setText(value);
    },
  });

  const circleC = new ProgressBar.Circle(containerC, {
    color: '#65DAF9',
    strokeWidth: 8,
    duration: 1800,
    from: { color: '#aaa' },
    to: { color: '#65DAF9' },
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      const value = Math.round(circle.value() * 32);
      circle.setText(value);
    },
  });

  const circleD = new ProgressBar.Circle(containerD, {
    color: '#65DAF9',
    strokeWidth: 8,
    duration: 2000,
    from: { color: '#aaa' },
    to: { color: '#65DAF9' },
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      const value = Math.round(circle.value() * 5423);
      circle.setText(value);
    },
  });

  // === Ativa animação ao rolar ===
  const dataAreaOffset = $('#data-area').offset();
  let stop = 0;

  $(window).scroll(function () {
    const scroll = $(window).scrollTop();

    if (scroll > dataAreaOffset.top - 500 && stop === 0) {
      circleA.animate(1.0);
      circleB.animate(1.0);
      circleC.animate(1.0);
      circleD.animate(1.0);
      stop = 1;
    }
  });

  // === Parallax ===
  setTimeout(function () {
    $('#data-area').parallax({ imageSrc: 'img/cidadeparallax.png' });
    $('#apply-area').parallax({ imageSrc: 'img/pattern.png' });
  }, 200);

  // === Filtro de portfólio ===
  $('.filter-btn').on('click', function () {
    const type = $(this).attr('id');
    const boxes = $('.project-box');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if (type === 'dsg-btn') {
      eachBoxes('dsg', boxes);
    } else if (type === 'dev-btn') {
      eachBoxes('dev', boxes);
    } else if (type === 'seo-btn') {
      eachBoxes('seo', boxes);
    } else {
      eachBoxes('all', boxes);
    }
  });

  function eachBoxes(type, boxes) {
    if (type === 'all') {
      $(boxes).fadeIn();
    } else {
      $(boxes).each(function () {
        if (!$(this).hasClass(type)) {
          $(this).fadeOut('slow');
        } else {
          $(this).fadeIn();
        }
      });
    }
  }

  // === Scroll suave para seções ===
  const navBtn = $('.nav-item');

  const bannerSection = $('#mainSlider');
  const aboutSection = $('#about-area');
  const servicesSection = $('#services-area');
  const teamSection = $('#team-area');
  const portfolioSection = $('#portfolio-area');
  const contactSection = $('#contact-area');

  let scrollTo = '';

  $(navBtn).click(function () {
    const btnId = $(this).attr('id');

    if (btnId === 'about-menu') {
      scrollTo = aboutSection;
    } else if (btnId === 'services-menu') {
      scrollTo = servicesSection;
    } else if (btnId === 'team-menu') {
      scrollTo = teamSection;
    } else if (btnId === 'portfolio-menu') {
      scrollTo = portfolioSection;
    } else if (btnId === 'contact-menu') {
      scrollTo = contactSection;
    } else {
      scrollTo = bannerSection;
    }

    $('html, body').animate(
      {
        scrollTop: $(scrollTo).offset().top - 70,
      },
      1500
    );
  });

  // === Atualiza o ano no footer ===
  $('#current-year').text(new Date().getFullYear());
});

// Mostrar botão de voltar ao topo
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $('#back-to-top').addClass('show');
  } else {
    $('#back-to-top').removeClass('show');
  }
});

// Scroll suave ao clicar
$('#back-to-top').click(function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, 800);
});

// Ativar tooltip Bootstrap
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
