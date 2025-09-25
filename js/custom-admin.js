
// side bar minimize

let siderMinBtn = document.querySelectorAll(".nav-toggle");
let mainApp = document.querySelector(".main-app");

siderMinBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (window.innerWidth < 992) {
      // للشاشات الصغيرة
      mainApp.classList.toggle("nav_open");
    } else {
      // للشاشات الكبيرة
      mainApp.classList.toggle("side-bar-minimize");
    }
  });
});

// لما يتغير حجم الشاشة
window.addEventListener("resize", () => {
  if (window.innerWidth >= 992) {
    // لو الشاشة كبيرة نشيل nav_open
    mainApp.classList.remove("nav_open");
  } else {
    // لو الشاشة صغيرة نشيل side-bar-minimize
    mainApp.classList.remove("side-bar-minimize");
  }
});


// 
let navMinBtn = document.querySelector(".nav-toggle-dots");
let mainNav = document.querySelector(".content-app");

if(navMinBtn){

  
navMinBtn.addEventListener("click", () => {
  if (window.innerWidth < 992) {
    // للشاشات الصغيرة
    console.log("ghjhu");

    mainNav.classList.toggle("bar-open");
  } else {
    // للشاشات الكبيرة
    console.log("ghjhuttttttt");
  }
});

}


// 





document.querySelectorAll('.more-btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    const menu = this.nextElementSibling;
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    btn.parentElement.parentElement.classList.add('active');
  });
});

// إخفاء القائمة عند الضغط خارجها
document.addEventListener('click', function(e) {
  document.querySelectorAll('.dropdown-menu').forEach(menu => {
    if (!menu.previousElementSibling.contains(e.target) && !menu.contains(e.target)) {
      menu.style.display = 'none';
    }
  });
});





// toggle filter
const toggleBtn = document.getElementById("toggleFilter");

 if(toggleBtn){
     const filtersBox = document.getElementById("filtersBox");

    // فتح/غلق عند الضغط على الزر
    toggleBtn.addEventListener("click", function (e) {
        e.stopPropagation(); // عشان ما يقفلش مباشرة
        filtersBox.classList.toggle("show");
    });

    // قفل عند الضغط خارج الفلتر
    document.addEventListener("click", function (e) {
        if (!filtersBox.contains(e.target) && e.target !== toggleBtn) {
            filtersBox.classList.remove("show");
        }
    });

 }




 
    // details slider



    function initSliders() {
  // Unslick لو كانت متفعلة بالفعل
  if ($('.slider-for').hasClass('slick-initialized')) {
    $('.slider-for').slick('unslick');
  }
  if ($('.slider-nav').hasClass('slick-initialized')) {
    $('.slider-nav').slick('unslick');
  }

  // إعادة تهيئة slider-for
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav'
  });

  // إعداد slider-nav حسب العرض
  const isMobile = $(window).width() <= 992;

  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    vertical: !isMobile // عمودي فقط إذا الشاشة أكبر من 992
  });
}

// أول تحميل
$(document).ready(function () {
  initSliders();
});

// إعادة تهيئة عند تغيير حجم الشاشة
$(window).on('resize', function () {
  clearTimeout(window.resizingSlick); // تأخير منعًا للتكرار
  window.resizingSlick = setTimeout(function () {
    initSliders();
  }, 300);
});




// 

 document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const accordionItem = this.closest(".accordion-item");
      accordionItem.remove();
    });
  });