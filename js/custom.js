// Aos
AOS.init();

function animateCounters() {
  const counters = document.querySelectorAll('.counter');
  const duration = 2000; // 2 ثانية للكل
  const frameRate = 60; // فريمات في الثانية
  const totalFrames = Math.round(duration / (1000 / frameRate));

  counters.forEach(counter => {
    let frame = 0;
    const target = +counter.getAttribute('data-target');

    const updateCount = () => {
      frame++;
      const progress = frame / totalFrames;
      const current = Math.round(target * progress);

      counter.innerText = current;

      if (frame < totalFrames) {
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target; // تأكيد يوصل للرقم النهائي
      }
    };

    updateCount();
  });
}

// IntersectionObserver لتشغيل العداد كل ما يظهر في الشاشة
const statsSection = document.querySelector('.stats');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
    }
  });
}, { threshold: 0.5 });

observer.observe(statsSection);



// owl

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
})

// partner swiper


var swiper = new Swiper(".mySwiperPartner", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "6",
  loop: true,
  coverflowEffect: {
    rotate: 45,     // زاوية الميلان (خليها 40-60 للبانوراما)
    stretch: -10,     // المسافة بينهم
    depth: -85,     // العمق (يزود البُعد 3D)
    modifier: 1,    // قوة التأثير
    slideShadows: true, // يدي ظل للصور على الأطراف
  },
  autoplay: true
});